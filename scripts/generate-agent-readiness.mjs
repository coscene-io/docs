import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const buildDir = path.join(repoRoot, 'build');
const docsDataDir = path.join(repoRoot, '.docusaurus/docusaurus-plugin-content-docs/default');
const pagesDataDir = path.join(docsDataDir, 'p');
const origin = 'https://docs.coscene.cn';

const skillDefinitions = [
  {
    name: 'coscene-docs-index',
    description: 'Find the right coScene docs entry point, including llms.txt, llms-full.txt, OpenAPI docs, and coCLI docs.',
    body: `# coScene Docs Index

Use this skill when an agent needs to answer questions from the public coScene documentation.

1. Start with /llms.txt for a compact map of the docs.
2. Use /llms-full.txt when the task needs a broader offline context snapshot.
3. Prefer /docs/developers/openapi/intro for OpenAPI discovery.
4. Prefer /docs/developers/cocli/install for coCLI installation and command workflows.
5. Keep product naming exact: coScene, coCLI, or cocli.
`,
  },
  {
    name: 'coscene-openapi',
    description: 'Discover coScene OpenAPI documentation and the canonical OpenAPI YAML document.',
    body: `# coScene OpenAPI

Use this skill when an agent needs to inspect or call the public coScene OpenAPI.

Canonical resources:

- Docs: /docs/developers/openapi/intro
- Endpoint docs: /docs/developers/openapi/endpoint
- API key docs: /docs/developers/openapi/apikey
- OpenAPI YAML: https://download.coscene.cn/openapi/openapi.yaml

Do not assume undocumented private APIs exist. Use the public OpenAPI YAML as the contract.
`,
  },
  {
    name: 'coscene-cocli',
    description: 'Find coCLI installation, record, action, user, role, registry, and batch task documentation.',
    body: `# coCLI Documentation

Use this skill when an agent needs to operate or explain coCLI.

Start here:

- Install and initialize: /docs/developers/cocli/install
- Record operations: /docs/developers/cocli/record-operations
- Action operations: /docs/developers/cocli/action-operations
- User, role, and registry operations: /docs/developers/cocli/user-role-registry
- Batch task patterns: /docs/developers/cocli/common-batch-tasks

Product naming: coCLI or cocli are acceptable; coScene uses lowercase c.
`,
  },
];

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'));
}

async function writeText(filePath, content) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content.endsWith('\n') ? content : `${content}\n`, 'utf8');
}

function sha256(content) {
  return createHash('sha256').update(content).digest('hex');
}

function stripFrontMatter(markdown) {
  return markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
}

function cleanMarkdown(markdown) {
  return stripFrontMatter(markdown)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<!--.*$/gm, '')
    .replace(/^import\s+.*?;?\s*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cleanInlineText(text) {
  return String(text || '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<!--.*$/gm, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function findVersionData(locale) {
  const files = await readdir(pagesDataDir);
  const matcher = locale === 'en' ? /^en-docs-[\da-f]+\.json$/ : /^docs-[\da-f]+\.json$/;
  const file = files.find((candidate) => matcher.test(candidate));

  if (!file) {
    throw new Error(`Unable to find Docusaurus docs metadata for locale ${locale}`);
  }

  const data = await readJson(path.join(pagesDataDir, file));
  if (!data.version?.docsSidebars?.tutorialSidebar || !data.version?.docs) {
    throw new Error(`Invalid Docusaurus docs metadata shape in ${file}`);
  }

  return data.version;
}

async function buildSourceMap() {
  const files = await readdir(docsDataDir);
  const docs = new Map();

  await Promise.all(
    files
      .filter((file) => file.startsWith('site-docs-') && file.endsWith('.json'))
      .map(async (file) => {
        const metadata = await readJson(path.join(docsDataDir, file));
        if (metadata.id && metadata.source?.startsWith('@site/')) {
          docs.set(metadata.id, metadata.source.replace('@site/', ''));
        }
      }),
  );

  return docs;
}

function flattenSidebar(items, output = []) {
  for (const item of items) {
    if (item.type === 'link' && item.docId && item.href) {
      output.push({
        docId: item.docId,
        href: item.href,
        label: item.label,
      });
    }

    if (Array.isArray(item.items)) {
      flattenSidebar(item.items, output);
    }
  }

  return output;
}

async function readDocContent(locale, sourcePath) {
  const localizedSource =
    locale === 'en'
      ? path.join('i18n/en/docusaurus-plugin-content-docs/current', path.relative('docs', sourcePath))
      : sourcePath;

  for (const candidate of [localizedSource, sourcePath]) {
    try {
      return cleanMarkdown(await readFile(path.join(repoRoot, candidate), 'utf8'));
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  return '';
}

async function collectDocs(locale) {
  const versionData = await findVersionData(locale);
  const sourceMap = await buildSourceMap();
  const sidebarLinks = flattenSidebar(versionData.docsSidebars.tutorialSidebar);

  const docs = [];
  for (const link of sidebarLinks) {
    const metadata = versionData.docs[link.docId];
    const sourcePath = sourceMap.get(link.docId);

    docs.push({
      id: link.docId,
      href: link.href,
      title: cleanInlineText(metadata?.title || link.label),
      description: cleanInlineText(metadata?.description || ''),
      content: sourcePath ? await readDocContent(locale, sourcePath) : '',
    });
  }

  return docs;
}

function localeTitle(locale) {
  return locale === 'en' ? 'coScene Documentation' : 'coScene 帮助文档';
}

function introText(locale) {
  if (locale === 'en') {
    return 'Public coScene product documentation for robot data operations, visualization, automation, OpenAPI, S3-compatible storage, and coCLI.';
  }

  return '刻行 coScene 产品公开文档，覆盖机器人数据协作、可视化、自动化、OpenAPI、S3 兼容存储和 coCLI。';
}

function formatLlmsIndex(locale, docs) {
  const prefix = locale === 'en' ? '/en' : '';
  const lines = [
    `# ${localeTitle(locale)}`,
    '',
    introText(locale),
    '',
    '## Machine-readable resources',
    '',
    `- [Full documentation snapshot](${prefix}/llms-full.txt): Generated from the Docusaurus docs source during build.`,
    '- [Sitemap](/sitemap.xml): Canonical page inventory.',
    '- [OpenAPI YAML](https://download.coscene.cn/openapi/openapi.yaml): Public API contract.',
    '- [Agent skills index](/.well-known/agent-skills/index.json): Skill discovery for agents.',
    '- [API catalog](/.well-known/api-catalog): Linkset for public API discovery.',
    '',
    '## Docs',
    '',
  ];

  for (const doc of docs) {
    const description = doc.description ? ` - ${doc.description}` : '';
    lines.push(`- [${doc.title}](${doc.href})${description}`);
  }

  return `${lines.join('\n')}\n`;
}

function formatLlmsFull(locale, docs) {
  const lines = [
    `# ${localeTitle(locale)}`,
    '',
    introText(locale),
    '',
    `Generated from the Docusaurus source for locale: ${locale}.`,
    '',
  ];

  for (const doc of docs) {
    lines.push(`## ${doc.title}`);
    lines.push('');
    lines.push(`Source URL: ${doc.href}`);
    if (doc.description) {
      lines.push('');
      lines.push(doc.description);
    }
    if (doc.content) {
      lines.push('');
      lines.push(doc.content);
    }
    lines.push('');
  }

  return `${lines.join('\n').replace(/\n{4,}/g, '\n\n\n')}\n`;
}

function formatHomeMarkdown(locale, docs) {
  const topDocs = docs.slice(0, 24);
  const lines = [
    `# ${localeTitle(locale)}`,
    '',
    introText(locale),
    '',
    '## Start Here',
    '',
    ...topDocs.map((doc) => `- [${doc.title}](${doc.href})${doc.description ? ` - ${doc.description}` : ''}`),
    '',
    '## Agent Resources',
    '',
    '- /llms.txt',
    '- /llms-full.txt',
    '- /.well-known/api-catalog',
    '- /.well-known/agent-skills/index.json',
    '- https://download.coscene.cn/openapi/openapi.yaml',
    '',
  ];

  return lines.join('\n');
}

function robotsTxt() {
  return `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Content-Signal: ai-train=no, search=yes, ai-input=yes
Sitemap: ${origin}/sitemap.xml
`;
}

function apiCatalog() {
  return JSON.stringify(
    {
      linkset: [
        {
          anchor: 'https://openapi.coscene.cn',
          'service-doc': [
            {
              href: `${origin}/docs/developers/openapi/intro`,
              type: 'text/html',
            },
            {
              href: `${origin}/llms.txt`,
              type: 'text/markdown',
            },
          ],
          'service-desc': [
            {
              href: 'https://download.coscene.cn/openapi/openapi.yaml',
              type: 'application/yaml',
            },
          ],
        },
        {
          anchor: origin,
          'service-doc': [
            {
              href: `${origin}/docs/developers/cocli/install`,
              type: 'text/html',
            },
            {
              href: `${origin}/llms-full.txt`,
              type: 'text/markdown',
            },
          ],
        },
      ],
    },
    null,
    2,
  );
}

async function writeAgentSkills() {
  const skills = [];

  for (const skill of skillDefinitions) {
    const skillPath = `/.well-known/agent-skills/${skill.name}/SKILL.md`;
    await writeText(path.join(buildDir, skillPath), skill.body);
    skills.push({
      name: skill.name,
      type: 'skill-md',
      description: skill.description,
      url: skillPath,
      digest: `sha256:${sha256(skill.body.endsWith('\n') ? skill.body : `${skill.body}\n`)}`,
    });
  }

  await writeText(
    path.join(buildDir, '.well-known/agent-skills/index.json'),
    JSON.stringify(
      {
        $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
        skills,
      },
      null,
      2,
    ),
  );
}

async function main() {
  const zhDocs = await collectDocs('zh');
  const enDocs = await collectDocs('en');

  await writeText(path.join(buildDir, 'llms.txt'), formatLlmsIndex('zh', zhDocs));
  await writeText(path.join(buildDir, 'llms-full.txt'), formatLlmsFull('zh', zhDocs));
  await writeText(path.join(buildDir, 'en/llms.txt'), formatLlmsIndex('en', enDocs));
  await writeText(path.join(buildDir, 'en/llms-full.txt'), formatLlmsFull('en', enDocs));

  await writeText(path.join(buildDir, 'markdown/index.md'), formatHomeMarkdown('zh', zhDocs));
  await writeText(path.join(buildDir, 'en/markdown/index.md'), formatHomeMarkdown('en', enDocs));

  await writeText(path.join(buildDir, 'robots.txt'), robotsTxt());
  await writeText(path.join(buildDir, '.well-known/api-catalog'), apiCatalog());
  await writeAgentSkills();

  console.log(`Generated agent readiness artifacts for ${zhDocs.length} zh docs and ${enDocs.length} en docs.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
