# Publication Gate

## Repository visibility

- Repository visibility: **Public**, explicitly accepted by the owner on 2026-11-09.
- This decision concerns GitHub repository visibility only. It does not, by itself, approve public website launch or search indexing.

## Website state

- Current build: editorial review.
- Search indexing: blocked by page-level `noindex`, `robots.txt`, and Vercel `X-Robots-Tag`.
- Public production deployment / custom-domain launch: not yet approved.

## Before public launch

1. Owner reviews and approves the exact eight main-site cases and the Laya casebook.
2. Re-check every role boundary, PR/Review status, metric date, and evidence link against live sources.
3. Confirm permission to reuse VIVIC team visuals and any screenshots from the private project repository.
4. Replace remaining visual placeholders with authorized assets or clearly labelled explanatory visuals.
5. Add the approved resume and public contact method, if desired.
6. Remove noindex protections only after the owner approves the exact release candidate.

Do not infer approval from a case task being marked complete, a merged PR, or repository visibility.


## Custom-domain routing approval · 2026-11-09

- Owner explicitly approved replacing the existing `hcfind.com` homepage with this portfolio.
- The root domain and existing `www.hcfind.com → hcfind.com` redirect may be reassigned to the portfolio Vercel project.
- This approval covers domain routing and public accessibility of the current release candidate.
- It does **not** automatically approve search indexing or waive the remaining content/evidence checks above. Keep page-level `noindex`, `robots.txt` blocking, and Vercel `X-Robots-Tag` until the exact eight main-site cases, Laya casebook, evidence, and visual permissions have been reviewed and separately approved.


### Domain replacement completed · 2026-11-09

- Production deployment: `dpl_8SPG1qJMXwvCTEuv9Czj47hApzTL` (READY).
- `hcfind.com` now routes to `ai-product-portfolio`; `www.hcfind.com` redirects to the root domain (308).
- Both the homepage and `/cases/laya/` return HTTP 200.
- The former `hcfind-home` project and its deployment remain intact; only the custom-domain aliases were reassigned.
- No DNS / nameserver changes.
- Search indexing remains disabled until the content/evidence and visual-permission review is completed.
