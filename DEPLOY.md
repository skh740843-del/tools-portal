# HabiTools static SEO build

This build keeps the existing homepage and dynamic `tool.html?id=...` fallback, while adding 50 crawlable standalone HTML tool pages.

## Deploy with the existing Git repository

Copy these files into your existing `tools-portal` repository, then run:

```bash
git add .
git commit -m "Add static SEO tool pages and fix sitemap"
git push origin main
```

Vercel should redeploy automatically if the GitHub project is connected.

The generated sitemap uses `https://my-web-tools-zeta.vercel.app/`. If your final production domain is different, replace that domain in `sitemap.xml`, `robots.txt`, homepage canonical/OG tags, and the static pages' canonical/OG/schema URLs before deployment.
