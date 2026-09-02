import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(rootDir, "dist");
const serverOutDir = join(rootDir, "dist-server");

const SITE_ORIGIN = "https://arnaud-zg.github.io";
const BASE_PATH = "/react-object-calisthenics/";

const PAGES = [
  {
    locale: "en",
    kind: "home",
    canonicalPath: "/",
    outputPath: join(distDir, "index.html"),
  },
  {
    locale: "en",
    kind: "shop",
    canonicalPath: "/shopping-cart/",
    outputPath: join(distDir, "shopping-cart", "index.html"),
  },
  {
    locale: "fr",
    kind: "home",
    canonicalPath: "/fr/",
    outputPath: join(distDir, "fr", "index.html"),
  },
  {
    locale: "fr",
    kind: "shop",
    canonicalPath: "/fr/shopping-cart/",
    outputPath: join(distDir, "fr", "shopping-cart", "index.html"),
  },
];

// The router is configured with the real deployed basepath, so the memory-history entry
// must look like a real browser URL. canonicalPath is directory-style (trailing slash) for
// URLs and the sitemap, but the routes themselves are registered without one (eg.
// "/shopping-cart", not "/shopping-cart/"), so that part has to be stripped back off.
function toHistoryUrl(canonicalPath) {
  const routePath = canonicalPath === "/" ? "/" : canonicalPath.replace(/\/$/, "");
  return `${BASE_PATH.slice(0, -1)}${routePath}`;
}

async function readStream(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString("utf-8");
}

function resolveUrl(canonicalPath) {
  return `${SITE_ORIGIN}${BASE_PATH}${canonicalPath.slice(1)}`;
}

function findCanonicalPath(kind, locale) {
  const page = PAGES.find(
    (candidate) => candidate.kind === kind && candidate.locale === locale,
  );
  return page.canonicalPath;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildAlternateLinks(kind) {
  const enUrl = resolveUrl(findCanonicalPath(kind, "en"));
  const frUrl = resolveUrl(findCanonicalPath(kind, "fr"));
  return [
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="fr" href="${frUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${enUrl}" />`,
  ].join("\n    ");
}

function buildJsonLd(page, seoMeta, products) {
  if (page.kind === "home") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: seoMeta.title,
      url: resolveUrl(page.canonicalPath),
      inLanguage: page.locale,
      description: seoMeta.description,
      author: {
        "@type": "Person",
        name: "Arnaud Zheng",
        url: "https://github.com/arnaud-zg",
      },
    };
  }

  const homeUrl = resolveUrl(findCanonicalPath("home", page.locale));
  const shopUrl = resolveUrl(page.canonicalPath);

  return [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: seoMeta.title,
      description: seoMeta.description,
      inLanguage: page.locale,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          image: product.image,
          url: shopUrl,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
        { "@type": "ListItem", position: 2, name: seoMeta.title, item: shopUrl },
      ],
    },
  ];
}

function buildSeoBlock(page, seoMeta, products) {
  const url = resolveUrl(page.canonicalPath);
  const ogImage = resolveUrl("/logo512.png");
  const jsonLd = buildJsonLd(page, seoMeta, products);
  const title = escapeHtml(seoMeta.title);
  const description = escapeHtml(seoMeta.description);

  return `<!-- SEO:START (regenerated per page and per locale by scripts/prerender.mjs) -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    ${buildAlternateLinks(page.kind)}

    <!-- Open Graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:locale" content="${page.locale === "fr" ? "fr_FR" : "en_US"}" />
    <meta
      property="og:locale:alternate"
      content="${page.locale === "fr" ? "en_US" : "fr_FR"}"
    />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />

    <!-- Structured Data -->
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <!-- SEO:END -->`;
}

const PRELOAD_LINK_PATTERN = /<link rel="preload"[^>]*>/g;

/**
 * React auto-hoists resource hints (eg. image preloads) to the document <head>. Our SSR
 * pass only renders the #app fragment, so it has no real <head> to hoist into and inlines
 * them in the body instead; the client hydrates against a real <head>, with nothing left
 * in the body at that spot. Pulling them out here and placing them in <head> ourselves
 * keeps the hint and matches what the client ends up with.
 */
function extractPreloadLinks(html) {
  const preloads = html.match(PRELOAD_LINK_PATTERN) ?? [];
  return { body: html.replace(PRELOAD_LINK_PATTERN, ""), preloads };
}

function injectPage(template, page, html, seoBlock) {
  const { body, preloads } = extractPreloadLinks(html);
  const seoBlockPattern = /<!-- SEO:START[\s\S]*?<!-- SEO:END -->/;

  return template
    .replace(`<html lang="en">`, `<html lang="${page.locale}">`)
    .replace(seoBlockPattern, `${preloads.join("")}${seoBlock}`)
    .replace('<div id="app"></div>', `<div id="app">${body}</div>`);
}

async function buildSitemap() {
  const urls = PAGES.map((page) => {
    const alternates = PAGES.filter((candidate) => candidate.kind === page.kind)
      .map(
        (candidate) =>
          `      <xhtml:link rel="alternate" hreflang="${candidate.locale}" href="${resolveUrl(candidate.canonicalPath)}" />`,
      )
      .join("\n");
    return `  <url>\n    <loc>${resolveUrl(page.canonicalPath)}</loc>\n${alternates}\n  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  await writeFile(join(distDir, "sitemap.xml"), xml, "utf-8");
}

async function main() {
  await build({
    build: {
      ssr: "src/app/entry-server.tsx",
      outDir: "dist-server",
      emptyOutDir: true,
    },
  });

  const serverEntry = join(serverOutDir, "entry-server.js");
  const { render, getHomeSeoMeta, getShopSeoMeta, listProductsForSeo } = await import(
    `${serverEntry}?t=${Date.now()}`
  );

  const template = await readFile(join(distDir, "index.html"), "utf-8");

  for (const page of PAGES) {
    const stream = await render(toHistoryUrl(page.canonicalPath));
    const html = await readStream(stream);
    const seoMeta =
      page.kind === "home" ? getHomeSeoMeta(page.locale) : getShopSeoMeta(page.locale);
    const products = page.kind === "shop" ? listProductsForSeo(page.locale) : [];
    const seoBlock = buildSeoBlock(page, seoMeta, products);
    const document = injectPage(template, page, html, seoBlock);

    await mkdir(dirname(page.outputPath), { recursive: true });
    await writeFile(page.outputPath, document, "utf-8");
  }

  await buildSitemap();
  await rm(serverOutDir, { recursive: true, force: true });
}

await main();
