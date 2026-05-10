import { createHash } from 'node:crypto';
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

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function sha256(content) {
  return createHash('sha256').update(content).digest('hex');
}

async function validateRobots() {
  const robots = await readText('robots.txt');
  for (const expected of ['User-agent: GPTBot', 'User-agent: Claude-Web', 'User-agent: Google-Extended']) {
    assert(robots.includes(expected), `robots.txt missing ${expected}`);
  }
  assert(robots.includes('Content-Signal: ai-train=no, search=yes, ai-input=yes'), 'robots.txt missing Content-Signal');
  assert(robots.includes('Sitemap: https://docs.coscene.cn/sitemap.xml'), 'robots.txt missing sitemap');
}

async function validateLlms() {
  for (const file of ['llms.txt', 'llms-full.txt', 'en/llms.txt', 'en/llms-full.txt', 'markdown/index.md', 'en/markdown/index.md']) {
    const content = await readText(file);
    assert(content.includes('coScene'), `${file} missing coScene`);
  }

  const indexHtml = await readText('index.html');
  assert(indexHtml.includes('/agent-tools.js'), 'homepage does not load /agent-tools.js');
}

async function validateApiCatalog() {
  const apiCatalog = await readJson('.well-known/api-catalog');
  assert(Array.isArray(apiCatalog.linkset), 'api-catalog missing linkset array');
  assert(apiCatalog.linkset.length >= 2, 'api-catalog should list docs and OpenAPI entries');
}

async function validateAgentSkills() {
  const index = await readJson('.well-known/agent-skills/index.json');
  assert(index.$schema === 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', 'agent skills schema mismatch');
  assert(Array.isArray(index.skills) && index.skills.length >= 3, 'agent skills index should contain at least 3 skills');

  for (const skill of index.skills) {
    assert(skill.name && skill.type === 'skill-md' && skill.description && skill.url && skill.digest, `invalid skill entry: ${skill.name}`);
    const body = await readText(skill.url.replace(/^\//, ''));
    const digest = `sha256:${sha256(body)}`;
    assert(digest === skill.digest, `digest mismatch for ${skill.name}`);
  }
}

async function validateCloudflareRoutes() {
  const routes = await readJson('_routes.json');
  assert(routes.version === 1, '_routes.json version must be 1');
  assert(Array.isArray(routes.include) && routes.include.includes('/*'), '_routes.json must include /* for Pages Functions');
}

async function main() {
  await validateRobots();
  await validateLlms();
  await validateApiCatalog();
  await validateAgentSkills();
  await validateCloudflareRoutes();
  console.log('Agent readiness artifacts validated.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
