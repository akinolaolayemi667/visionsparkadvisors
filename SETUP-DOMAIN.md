# Custom domain + SEO

The site currently publishes at `https://visionsparkadvisors.vercel.app`. When you own a domain, connect it once and set the public URL so canonical links, Open Graph tags, JSON-LD and the sitemap match.

## 1. Connect the domain on Vercel

1. Buy a domain (or use one you already own).
2. In Vercel → Project → **Settings → Domains**, add the domain (and `www` if you want it).
3. Follow Vercel’s DNS instructions at your registrar.
4. Wait until the domain shows as valid / SSL issued.

## 2. Set the public site URL

In Vercel → **Settings → Environment Variables** (Production):

| Name | Example |
|---|---|
| `VITE_SITE_URL` | `https://www.yourdomain.com` |
| `SITE_URL` | `https://www.yourdomain.com` (same value; used by the enquiry API ack context) |

Redeploy after saving. The build rewrites `index.html` meta tags and regenerates `sitemap.xml` from `src/siteUrls.ts`.

## 3. Resend from-address (recommended)

After the domain is live:

1. In Resend, add and verify the same domain.
2. Set `RESEND_FROM` to e.g. `VisionSpark Advisors <enquiries@yourdomain.com>`.
3. Redeploy.

## 4. Search consoles (optional)

Submit `https://yourdomain.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools once DNS is stable.
