import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const buildDir = path.join(repoRoot, 'build');

async function readText(relativePath) {
  return readFile(path.join(buildDir, relativePath), 'utf8');
}

async function readJson(relativePath) {
  return JSON.parse(await readText(relativePath));
}

async function readSiteOrigin() {
  const i18n = JSON.parse(await readFile(path.join(repoRoot, '.docusaurus/i18n.json'), 'utf8'));
  const defaultLocale = i18n.defaultLocale || 'zh';
  const origin = i18n.localeConfigs?.[defaultLocale]?.url;

  if (!origin) {
    throw new Error('Unable to find site URL in Docusaurus i18n metadata');
  }

  return origin.replace(/\/$/, '');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function validateRobots(origin) {
  const robots = await readText('robots.txt');
  for (const expected of ['User-agent: GPTBot', 'User-agent: Claude-Web', 'User-agent: Google-Extended']) {
    assert(robots.includes(expected), `robots.txt missing ${expected}`);
  }
  assert(robots.includes('User-agent: OAI-SearchBot\nAllow: /'), 'robots.txt should allow OAI-SearchBot');
  assert(robots.includes('User-agent: ChatGPT-User\nAllow: /'), 'robots.txt should allow ChatGPT-User');
  assert(robots.includes('User-agent: GPTBot\nDisallow: /'), 'robots.txt should disallow GPTBot training crawler');
  assert(
    robots.includes('User-agent: ClaudeBot\nDisallow: /'),
    'robots.txt should disallow ClaudeBot training crawler',
  );
  assert(
    robots.includes('User-agent: Google-Extended\nDisallow: /'),
    'robots.txt should disallow Google-Extended AI training use',
  );
  assert(robots.includes('Content-Signal: ai-train=no, search=yes, ai-input=yes'), 'robots.txt missing Content-Signal');
  assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'robots.txt missing sitemap');
}

async function validateLlms() {
  for (const file of ['llms.txt', 'llms-full.txt', 'en/llms.txt', 'en/llms-full.txt']) {
    const content = await readText(file);
    assert(content.includes('coScene'), `${file} missing coScene`);
  }

  const indexHtml = await readText('index.html');
  assert(indexHtml.includes('href=/llms.txt'), 'homepage head missing /llms.txt discovery link');
  assert(indexHtml.includes('href=/en/llms.txt'), 'homepage head missing /en/llms.txt discovery link');
  assert(indexHtml.includes('href=/.well-known/api-catalog'), 'homepage head missing API catalog discovery link');

  const enIndexHtml = await readText('en/index.html');
  assert(enIndexHtml.includes('href=/llms.txt'), 'English homepage head missing /llms.txt discovery link');
  assert(enIndexHtml.includes('href=/en/llms.txt'), 'English homepage head missing /en/llms.txt discovery link');
}

async function validateApiCatalog(origin) {
  const apiCatalog = await readJson('.well-known/api-catalog');
  assert(Array.isArray(apiCatalog.linkset), 'api-catalog missing linkset array');
  assert(apiCatalog.linkset.length >= 2, 'api-catalog should list docs and OpenAPI entries');
  assert(JSON.stringify(apiCatalog).includes(`${origin}/llms.txt`), 'api-catalog missing site llms.txt');
  assert(
    JSON.stringify(apiCatalog).includes('https://download.coscene.cn/openapi/openapi.yaml'),
    'api-catalog missing OpenAPI YAML',
  );
}

async function validateSitemap() {
  const sitemap = await readText('sitemap.xml');
  assert(sitemap.includes('<lastmod>'), 'sitemap.xml missing lastmod entries');
}

async function main() {
  const origin = await readSiteOrigin();
  await validateRobots(origin);
  await validateLlms();
  await validateApiCatalog(origin);
  await validateSitemap();
  console.log('Agent readiness artifacts validated.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
