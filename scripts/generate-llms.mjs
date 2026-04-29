import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const SITE_ROOT = process.cwd();
const BUILD_DIR = path.join(SITE_ROOT, 'build');
const DOCUSAURUS_DIR = path.join(SITE_ROOT, '.docusaurus');
const DOCS_METADATA_DIR = path.join(DOCUSAURUS_DIR, 'docusaurus-plugin-content-docs', 'default');
const I18N_METADATA_FILE = path.join(DOCUSAURUS_DIR, 'i18n.json');
const FALLBACK_SITE_URL = 'https://docs.coscene.cn';

const LOCALE_COPY = {
  zh: {
    title: 'coScene 文档',
    intro:
      'coScene 是面向多模态场景数据的运维和研发平台，覆盖数据管理、可视化、设备、自动化、仿真测试、开发者接口和客户端工具。',
    guidance:
      '本文件面向 AI/LLM 代理生成。优先读取下方 canonical 文档链接；需要完整 Markdown 上下文时读取 llms-full.txt。',
    docsHeading: '文档入口',
    fullHeading: '完整 Markdown 上下文',
    fullDescription: '同一语言下全部公开文档内容，按 Docusaurus 侧边栏顺序拼接。',
    alternateHeading: '其他语言',
    fullTitle: 'coScene 文档完整 Markdown 导出',
    sourceLabel: '来源',
    sectionFallback: '其他',
    generatedNote: '由 Docusaurus 构建产物自动生成。',
  },
  en: {
    title: 'coScene Docs',
    intro:
      'coScene is an operations and development platform for multimodal scene data, covering data management, visualization, devices, automation, simulation testing, developer APIs, and client tools.',
    guidance:
      'This file is generated for AI/LLM agents. Prefer the canonical documentation links below; use llms-full.txt when full Markdown context is needed.',
    docsHeading: 'Documentation',
    fullHeading: 'Full Markdown Context',
    fullDescription: 'All public docs for this language, concatenated in Docusaurus sidebar order.',
    alternateHeading: 'Other Languages',
    fullTitle: 'coScene Docs Full Markdown Export',
    sourceLabel: 'Source',
    sectionFallback: 'Other',
    generatedNote: 'Generated automatically from the Docusaurus build output.',
  },
};

const SECTION_LABELS = {
  zh: {
    overview: '产品总览',
    'get-started': '新手入门',
    collaboration: '协作',
    viz: '可视化',
    device: '设备',
    automation: '自动化',
    'sim-and-tests': '仿真与测试',
    developers: '开发者',
    'use-case': '应用场景',
    image: '镜像',
    client: '客户端',
    others: '其他',
  },
  en: {
    overview: 'Overview',
    'get-started': 'Getting Started',
    collaboration: 'Collaboration',
    viz: 'Visualization',
    device: 'Devices',
    automation: 'Automation',
    'sim-and-tests': 'Simulation and Tests',
    developers: 'Developers',
    'use-case': 'Use Cases',
    image: 'Images',
    client: 'Desktop Apps',
    others: 'Other',
  },
};

function assertReadableDirectory(directory, message) {
  if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
    throw new Error(message);
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function walkFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(entryPath) : [entryPath];
  });
}

function stripSitePrefix(source) {
  return source.replace(/^@site\//, '');
}

function stripNumberPrefix(value) {
  return value.replace(/^_?\d+[-_]?/, '');
}

function parseNumberPrefix(value) {
  const match = value.match(/^_?(\d+)(?:[-_]|$)/);
  return match ? Number(match[1]) : undefined;
}

function detectLocale(sourcePath, defaultLocale) {
  return sourcePath.match(/^i18n\/([^/]+)\//)?.[1] ?? defaultLocale;
}

function getLocaleCopy(locale) {
  return LOCALE_COPY[locale] ?? LOCALE_COPY.en;
}

function getLocaleSiteUrl(i18n, locale) {
  return i18n.localeConfigs?.[locale]?.url ?? i18n.localeConfigs?.[i18n.defaultLocale]?.url ?? FALLBACK_SITE_URL;
}

function getLocaleBuildPath(i18n, locale) {
  const baseUrl = i18n.localeConfigs?.[locale]?.baseUrl ?? (locale === i18n.defaultLocale ? '/' : `/${locale}/`);
  return path.join(BUILD_DIR, baseUrl.replace(/^\/+|\/+$/g, ''));
}

function toAbsoluteUrl(i18n, locale, pathname) {
  return new URL(pathname, getLocaleSiteUrl(i18n, locale)).href;
}

function cleanDescription(description) {
  const normalized = String(description ?? '')
    .replace(/<!--[\s\S]*?(-->|$)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (normalized.length <= 220) {
    return normalized;
  }

  return `${normalized.slice(0, 217).trimEnd()}...`;
}

function escapeMarkdownLinkText(text) {
  return String(text).replaceAll('[', '\\[').replaceAll(']', '\\]');
}

function stripFrontMatter(content) {
  if (!content.startsWith('---')) {
    return content;
  }

  const frontMatterEnd = content.indexOf('\n---', 3);
  if (frontMatterEnd === -1) {
    return content;
  }

  return content.slice(frontMatterEnd + 4).replace(/^\r?\n/, '');
}

function cleanMarkdown(content) {
  const withoutFrontMatter = stripFrontMatter(content);
  const lines = withoutFrontMatter.split(/\r?\n/);
  let inFence = false;

  const cleanedLines = lines.filter((line) => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      return true;
    }

    if (inFence) {
      return true;
    }

    return !/^(import\s.+from\s+['"].+['"];?|export\s+)/.test(line.trim());
  });

  return cleanedLines
    .join('\n')
    .replace(/<!--[\s\S]*?(-->|$)/g, '')
    .replace(/!\[([^\]]*)]\([^)]+\)/g, (_, alt) => (alt ? `[Image: ${alt}]` : ''))
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function normalizeDocsSourcePath(sourcePath) {
  return sourcePath.replace(/^docs\//, '').replace(/^i18n\/[^/]+\/docusaurus-plugin-content-docs\/current\//, '');
}

function getPathWithoutExtension(filePath) {
  return filePath.replace(/\.(md|mdx)$/i, '');
}

function collectCategoryPositions(docsRoot) {
  const categoryPositions = new Map();
  if (!fs.existsSync(docsRoot)) {
    return categoryPositions;
  }

  const categoryFiles = walkFiles(docsRoot).filter((file) => path.basename(file) === '_category_.json');
  for (const categoryFile of categoryFiles) {
    const relativeDir = path.relative(docsRoot, path.dirname(categoryFile));
    const normalizedDir = relativeDir.split(path.sep).map(stripNumberPrefix).join('/');

    let position = parseNumberPrefix(path.basename(relativeDir));
    try {
      const category = readJson(categoryFile);
      position = category.position ?? position;
    } catch {
      // Fall back to the numeric directory prefix when a category file cannot be parsed.
    }

    if (position === undefined) {
      continue;
    }

    categoryPositions.set(relativeDir.split(path.sep).join('/'), position);
    categoryPositions.set(normalizedDir, position);
  }

  return categoryPositions;
}

function getCategoryPosition(categoryPositions, directorySegments) {
  const rawKey = directorySegments.join('/');
  const normalizedKey = directorySegments.map(stripNumberPrefix).join('/');

  return (
    categoryPositions.get(rawKey) ??
    categoryPositions.get(normalizedKey) ??
    parseNumberPrefix(directorySegments.at(-1) ?? '')
  );
}

function getDocSortTuple(doc, categoryPositions) {
  const sourcePath = normalizeDocsSourcePath(doc.sourcePath);
  const parts = sourcePath.split('/');
  const fileName = parts.at(-1) ?? '';
  const directoryParts = parts.slice(0, -1);
  const sortTuple = [];

  for (let index = 0; index < directoryParts.length; index += 1) {
    const currentDirectory = directoryParts.slice(0, index + 1);
    sortTuple.push(
      getCategoryPosition(categoryPositions, currentDirectory) ?? 999,
      1,
      stripNumberPrefix(directoryParts[index]),
    );
  }

  sortTuple.push(
    doc.sidebarPosition ?? parseNumberPrefix(fileName) ?? 999,
    0,
    stripNumberPrefix(getPathWithoutExtension(fileName)),
  );

  return sortTuple;
}

function compareSortTuples(left, right) {
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    const leftValue = left[index] ?? '';
    const rightValue = right[index] ?? '';

    if (typeof leftValue === 'number' && typeof rightValue === 'number') {
      if (leftValue !== rightValue) {
        return leftValue - rightValue;
      }
      continue;
    }

    const comparison = String(leftValue).localeCompare(String(rightValue));
    if (comparison !== 0) {
      return comparison;
    }
  }

  return 0;
}

function collectDocs(i18n) {
  assertReadableDirectory(DOCS_METADATA_DIR, `Missing Docusaurus docs metadata directory: ${DOCS_METADATA_DIR}`);

  const docsByKey = new Map();
  const metadataFiles = walkFiles(DOCS_METADATA_DIR).filter((file) => file.endsWith('.json'));

  for (const metadataFile of metadataFiles) {
    let metadata;
    try {
      metadata = readJson(metadataFile);
    } catch {
      continue;
    }

    if (
      !metadata?.source ||
      !metadata?.permalink ||
      !metadata?.title ||
      metadata.draft === true ||
      metadata.unlisted === true
    ) {
      continue;
    }

    const sourcePath = stripSitePrefix(metadata.source);
    const absoluteSourcePath = path.join(SITE_ROOT, sourcePath);
    if (!fs.existsSync(absoluteSourcePath)) {
      continue;
    }

    const locale = detectLocale(sourcePath, i18n.defaultLocale);
    const key = `${locale}:${metadata.permalink}`;
    docsByKey.set(key, {
      ...metadata,
      locale,
      sourcePath,
      absoluteSourcePath,
      absoluteUrl: toAbsoluteUrl(i18n, locale, metadata.permalink),
    });
  }

  return [...docsByKey.values()];
}

function orderDocs(docs, categoryPositions) {
  return [...docs].sort((left, right) =>
    compareSortTuples(getDocSortTuple(left, categoryPositions), getDocSortTuple(right, categoryPositions)),
  );
}

function getDocSection(doc, locale) {
  const docsPath = doc.permalink.replace(/^\/[^/]+(?=\/docs\/)/, '').replace(/^\/docs\//, '');
  const section = docsPath.split('/')[0] || 'others';
  const labels = SECTION_LABELS[locale] ?? SECTION_LABELS.en;
  return labels[section] ?? labels.others ?? getLocaleCopy(locale).sectionFallback;
}

function groupDocs(docs, locale) {
  const groups = new Map();
  for (const doc of docs) {
    const section = getDocSection(doc, locale);
    const group = groups.get(section) ?? [];
    group.push(doc);
    groups.set(section, group);
  }

  return groups;
}

function getManifestPath(i18n, locale, fileName) {
  const baseUrl = i18n.localeConfigs?.[locale]?.baseUrl ?? (locale === i18n.defaultLocale ? '/' : `/${locale}/`);
  return path.posix.join(baseUrl, fileName);
}

function buildLlmsTxt({ i18n, locale, docs, allLocales }) {
  const copy = getLocaleCopy(locale);
  const groups = groupDocs(docs, locale);
  const lines = [
    `# ${copy.title}`,
    '',
    `> ${copy.intro}`,
    '',
    copy.guidance,
    '',
    `## ${copy.fullHeading}`,
    '',
    `- [llms-full.txt](${toAbsoluteUrl(i18n, locale, getManifestPath(i18n, locale, 'llms-full.txt'))}): ${copy.fullDescription}`,
  ];

  const alternateLocales = allLocales.filter((candidate) => candidate !== locale);
  if (alternateLocales.length > 0) {
    lines.push('', `## ${copy.alternateHeading}`, '');
    for (const alternateLocale of alternateLocales) {
      const alternateCopy = getLocaleCopy(alternateLocale);
      lines.push(
        `- [${escapeMarkdownLinkText(alternateCopy.title)}](${toAbsoluteUrl(
          i18n,
          alternateLocale,
          getManifestPath(i18n, alternateLocale, 'llms.txt'),
        )})`,
      );
    }
  }

  lines.push('', `## ${copy.docsHeading}`);

  for (const [section, sectionDocs] of groups) {
    lines.push('', `### ${section}`, '');
    for (const doc of sectionDocs) {
      const description = cleanDescription(doc.description);
      const suffix = description ? `: ${description}` : '';
      lines.push(`- [${escapeMarkdownLinkText(doc.title)}](${doc.absoluteUrl})${suffix}`);
    }
  }

  lines.push('', copy.generatedNote, '');

  return lines.join('\n');
}

function buildLlmsFullTxt({ locale, docs }) {
  const copy = getLocaleCopy(locale);
  const lines = [`# ${copy.fullTitle}`, '', copy.generatedNote, ''];

  for (const doc of docs) {
    const content = cleanMarkdown(fs.readFileSync(doc.absoluteSourcePath, 'utf8'));
    lines.push(`## ${doc.title}`, '', `${copy.sourceLabel}: ${doc.absoluteUrl}`, '');

    if (content) {
      lines.push(content, '');
    }
  }

  return `${lines.join('\n').trim()}\n`;
}

function buildRobotsTxt(i18n, locales) {
  const defaultLocale = i18n.defaultLocale;
  const defaultSiteUrl = getLocaleSiteUrl(i18n, defaultLocale);
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap.xml', defaultSiteUrl).href}`,
    '',
    '# AI-readable documentation entry points:',
  ];

  for (const locale of locales) {
    lines.push(`# ${toAbsoluteUrl(i18n, locale, getManifestPath(i18n, locale, 'llms.txt'))}`);
  }

  lines.push('');

  return lines.join('\n');
}

function writeTextFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function main() {
  assertReadableDirectory(BUILD_DIR, 'Missing build directory. Run `pnpm build` before generating LLM files.');

  const i18n = fs.existsSync(I18N_METADATA_FILE)
    ? readJson(I18N_METADATA_FILE)
    : { defaultLocale: 'zh', locales: ['zh'], localeConfigs: { zh: { url: FALLBACK_SITE_URL, baseUrl: '/' } } };
  const docs = collectDocs(i18n);
  if (docs.length === 0) {
    throw new Error('No Docusaurus docs metadata found for LLM export.');
  }
  const categoryPositions = collectCategoryPositions(path.join(SITE_ROOT, 'docs'));

  const docsByLocale = new Map();
  for (const doc of docs) {
    const localeDocs = docsByLocale.get(doc.locale) ?? [];
    localeDocs.push(doc);
    docsByLocale.set(doc.locale, localeDocs);
  }

  const locales = [...docsByLocale.keys()].sort((a, b) => {
    if (a === i18n.defaultLocale) {
      return -1;
    }
    if (b === i18n.defaultLocale) {
      return 1;
    }
    return a.localeCompare(b);
  });

  for (const locale of locales) {
    const localeDocs = orderDocs(docsByLocale.get(locale), categoryPositions);
    const localeBuildPath = getLocaleBuildPath(i18n, locale);

    writeTextFile(
      path.join(localeBuildPath, 'llms.txt'),
      buildLlmsTxt({ i18n, locale, docs: localeDocs, allLocales: locales }),
    );
    writeTextFile(path.join(localeBuildPath, 'llms-full.txt'), buildLlmsFullTxt({ locale, docs: localeDocs }));

    console.log(`Generated ${localeBuildPath}/llms.txt (${localeDocs.length} docs)`);
  }

  writeTextFile(path.join(BUILD_DIR, 'robots.txt'), buildRobotsTxt(i18n, locales));
  console.log(`Generated ${path.join(BUILD_DIR, 'robots.txt')}`);
}

main();
