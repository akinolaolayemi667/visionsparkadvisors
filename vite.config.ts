import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { DEFAULT_SITE_URL, sitemapPaths } from "./src/siteUrls";

const rootDir = dirname(fileURLToPath(import.meta.url));

function normalizeSiteUrl(value: string | undefined): string {
  const raw = (value || DEFAULT_SITE_URL).trim().replace(/\/$/, "");
  return raw || DEFAULT_SITE_URL;
}

function seoSiteUrlPlugin(siteUrl: string): Plugin {
  const origin = siteUrl.replace(/\/$/, "");

  return {
    name: "visionspark-seo-site-url",
    transformIndexHtml(html) {
      return html.split(DEFAULT_SITE_URL).join(origin);
    },
    closeBundle() {
      const body = sitemapPaths
        .map((path) => {
          const loc = path === "/" ? `${origin}/` : `${origin}${path}`;
          return `  <url><loc>${loc}</loc></url>`;
        })
        .join("\n");
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
      writeFileSync(resolve(rootDir, "dist/sitemap.xml"), xml);
      writeFileSync(resolve(rootDir, "public/sitemap.xml"), xml);
    },
  };
}

export default defineConfig(({ mode }) => {
  const siteUrl = normalizeSiteUrl(process.env.VITE_SITE_URL);
  if (mode === "production") {
    console.log(`SEO site URL: ${siteUrl}`);
  }

  return {
    plugins: [react(), seoSiteUrlPlugin(siteUrl)],
  };
});
