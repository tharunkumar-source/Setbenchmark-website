const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Template index.html not found in dist. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

// Load SEO metadata
const seoDataPath = path.join(__dirname, 'seo-data.json');
if (!fs.existsSync(seoDataPath)) {
  console.error('scripts/seo-data.json not found.');
  process.exit(1);
}

const seoData = JSON.parse(fs.readFileSync(seoDataPath, 'utf-8'));
const routes = Object.keys(seoData);

console.log(`Prerendering ${routes.length} static routes for SEO...`);

let generatedCount = 0;

routes.forEach((route) => {
  const item = seoData[route];
  let targetFile = '';

  if (route === '/') {
    targetFile = path.join(distDir, 'index.html');
  } else {
    const cleanRoute = route.replace(/^\/|\/$/g, '');
    const routeDir = path.join(distDir, cleanRoute);
    fs.mkdirSync(routeDir, { recursive: true });
    targetFile = path.join(routeDir, 'index.html');
  }

  const title = item.title || 'SetBenchmark';
  const desc = item.description || '';
  const canonical = item.canonical || `https://setbenchmark.com${route}`;

  // Build JSON-LD blocks
  let jsonLdBlock = '';
  if (Array.isArray(item.jsonLd) && item.jsonLd.length > 0) {
    jsonLdBlock = item.jsonLd
      .map((schema) => `    <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`)
      .join('\n');
  }

  // Replace head tags in template
  let pageHtml = template;

  // Title
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);

  // Meta description & canonical & JSON-LD
  const headAdditions = `
    <meta name="description" content="${desc}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="https://setbenchmark.com/og/setbenchmark-og.png">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${desc}">
    <meta name="twitter:image" content="https://setbenchmark.com/og/setbenchmark-og.png">
${jsonLdBlock}
  `;

  pageHtml = pageHtml.replace('</head>', `${headAdditions}\n</head>`);

  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
  generatedCount++;
});

console.log(`Successfully generated static prerendered HTML for all ${generatedCount} routes in dist/!`);
