(function () {
  async function loadDocsIndex(query) {
    const response = await fetch('/llms.txt', {
      headers: { Accept: 'text/markdown' },
    });
    const text = await response.text();

    if (!query) {
      return text;
    }

    const normalizedQuery = query.toLowerCase();
    return text
      .split('\n')
      .filter((line) => line.toLowerCase().includes(normalizedQuery))
      .join('\n');
  }

  function registerTools() {
    const modelContext = navigator.modelContext;
    if (!modelContext) {
      return;
    }

    const tool = {
      name: 'search_coscene_docs',
      description: 'Search the public coScene documentation index and return matching docs links.',
      inputSchema: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Optional search term, such as OpenAPI, coCLI, record, action, S3, or visualization.',
          },
        },
      },
      execute: ({ query } = {}) => loadDocsIndex(query),
      annotations: {
        readOnlyHint: true,
      },
    };

    if (typeof modelContext.registerTool === 'function') {
      modelContext.registerTool(tool);
      return;
    }

    if (typeof modelContext.provideContext === 'function') {
      modelContext.provideContext({
        tools: [tool],
      });
    }
  }

  if ('modelContext' in navigator) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', registerTools, { once: true });
    } else {
      registerTools();
    }
  }
})();
