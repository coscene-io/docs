const DISCOVERY_LINK_HEADER = [
  '</robots.txt>; rel="robots"; type="text/plain"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</llms.txt>; rel="alternate"; type="text/markdown"; title="coScene docs index"',
  '</llms-full.txt>; rel="alternate"; type="text/markdown"; title="coScene full docs"',
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/agent-skills/index.json>; rel="service-desc"; type="application/json"; title="coScene agent skills"',
  '<https://download.coscene.cn/openapi/openapi.yaml>; rel="service-desc"; type="application/yaml"; title="coScene OpenAPI"',
].join(', ');

function wantsMarkdown(request) {
  const accept = request.headers.get('accept') || '';
  return accept
    .toLowerCase()
    .split(',')
    .some((entry) => {
      const mediaType = entry.split(';')[0].trim();
      return mediaType === 'text/markdown' || mediaType === 'text/plain+markdown' || mediaType === 'application/markdown';
    });
}

function markdownCandidates(pathname) {
  if (pathname === '/' || pathname === '') {
    return ['/markdown/index.md'];
  }

  if (pathname === '/en' || pathname === '/en/') {
    return ['/en/markdown/index.md'];
  }

  const cleanPath = pathname.replace(/\/+$/, '').replace(/\.html$/, '');
  const localePrefix = cleanPath.startsWith('/en/') ? '/en' : '';
  const withoutLocale = localePrefix ? cleanPath.slice(localePrefix.length) : cleanPath;

  return [
    `${localePrefix}/markdown${withoutLocale}.md`,
    `${localePrefix}/markdown${withoutLocale}/index.md`,
    `${localePrefix}/markdown/index.md`,
  ];
}

function withAgentHeaders(response, request) {
  const url = new URL(request.url);
  const headers = new Headers(response.headers);

  headers.append('Vary', 'Accept');

  if (url.pathname === '/' || url.pathname === '/en/' || url.pathname === '/en') {
    headers.set('Link', DISCOVERY_LINK_HEADER);
  }

  if (url.pathname === '/.well-known/api-catalog') {
    headers.set('Content-Type', 'application/linkset+json; charset=utf-8');
  }

  if (url.pathname.endsWith('/SKILL.md') || url.pathname.endsWith('.md')) {
    headers.set('Content-Type', 'text/markdown; charset=utf-8');
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function serveMarkdown(context) {
  const requestUrl = new URL(context.request.url);

  for (const candidate of markdownCandidates(requestUrl.pathname)) {
    const assetUrl = new URL(candidate, requestUrl.origin);
    const assetRequest = new Request(assetUrl, context.request);
    const assetResponse = await context.env.ASSETS.fetch(assetRequest);

    if (assetResponse.ok) {
      const markdown = await assetResponse.text();
      const headers = new Headers({
        'Content-Type': 'text/markdown; charset=utf-8',
        Link: DISCOVERY_LINK_HEADER,
        Vary: 'Accept',
        'X-Markdown-Tokens': String(Math.ceil(markdown.length / 4)),
      });

      return new Response(context.request.method === 'HEAD' ? null : markdown, {
        status: 200,
        headers,
      });
    }
  }

  return context.next();
}

export async function onRequest(context) {
  const method = context.request.method.toUpperCase();

  if ((method === 'GET' || method === 'HEAD') && wantsMarkdown(context.request)) {
    return serveMarkdown(context);
  }

  const response = await context.next();
  return withAgentHeaders(response, context.request);
}
