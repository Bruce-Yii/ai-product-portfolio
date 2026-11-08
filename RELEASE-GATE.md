# Publication Gate

## Repository visibility

- Repository visibility: **Public**, explicitly accepted by the owner on 2026-11-09.
- This decision concerns GitHub repository visibility only. It does not, by itself, approve public website launch or search indexing.

## Website state

- Current build: editorial review.
- Search indexing: blocked by page-level `noindex`, `robots.txt`, and Vercel `X-Robots-Tag`.
- Public production deployment / custom-domain launch: not yet approved.

## Before public launch

1. Owner reviews and approves the exact seven main-site cases and the Laya casebook.
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
- It does **not** automatically approve search indexing or waive the remaining content/evidence checks above. Keep page-level `noindex`, `robots.txt` blocking, and Vercel `X-Robots-Tag` until the exact seven main-site cases, Laya casebook, evidence, and visual permissions have been reviewed and separately approved.


### Domain replacement completed · 2026-11-09

- Current production deployment: `dpl_DU86D71ntVNtihTr4spaUQZBXETr` (READY; seven-case candidate). Previous eight-case deployment `dpl_5uFv25CXDq8DkmD64NZMU7FHDvcK` remains READY as a rollback point.
- `hcfind.com` now routes to `ai-product-portfolio`; `www.hcfind.com` redirects to the root domain (308).
- Both the homepage and `/cases/laya/` return HTTP 200.
- The former `hcfind-home` project and its deployment remain intact; only the custom-domain aliases were reassigned.
- No DNS / nameserver changes.
- Search indexing remains disabled until the content/evidence and visual-permission review is completed.


## Case admission rule · 2026-11-09

A project or repository does not qualify for a standalone Case page merely because it has multiple merged PRs or a polished visual. A Case must have one coherent product problem or user journey, attributable personal product/engineering decisions, primary evidence for the change, meaningful validation, and a defensible outcome. Independent fixes across unrelated product surfaces remain separate Contributions under the project/repository grouping; they must not be forced into one product narrative.

### Dify classification · 2026-11-09

- Dify is a contribution group in the Open Source Contributions index, not a standalone Case in the proposed seven-case candidate.
- Its four merged PRs address independent issues: Notion rich-text extraction (#42171), moderation keyword-row validation (#42212), annotation CSV literal-NA preservation (#42221), and PDF worker base-path resolution (#42956).
- The four PRs remain individually identifiable evidence. Their shared repository does not establish one unified product case.
- At the time of this entry, the seven-case correction was a review-branch change. It was subsequently approved for production and deployed on 2026-11-09; see the final production release record below.


### Seven-case candidate preview · 2026-11-09

- Staging deployment: dpl_7SMd3LiyJgjDmuc6JqoiD3oGDweT (READY).
- Preview URL: https://ai-product-portfolio-lxwa40l6c-yu-ac3a.vercel.app
- Homepage and /cases/laya/ both return HTTP 200; noindex remains enabled.
- This preview does not change the production alias. Production remains on the previous eight-case candidate pending owner review.


### Latest seven-case preview supersedes prior preview

- Deployment: dpl_HaFhgdtRW1TdMhnuJ1jvXZimpBB4 (READY).
- URL: https://ai-product-portfolio-5lrrbku69-yu-ac3a.vercel.app
- Source commit: 4b9000ba59b904fdd6afb0569f49a086c6fa5d68.
- Homepage and Laya casebook route return HTTP 200; Dify is contribution-only; noindex remains.


## Seven-case candidate — production release · 2026-11-09

- Owner instruction: use the revised implementation and deploy it directly; HTML fallback was acceptable if deployment was blocked.
- Production deployment: dpl_DU86D71ntVNtihTr4spaUQZBXETr · READY.
- Production URL: https://hcfind.com
- Source branch: portfolio/modular-mainline-2026-11-09.
- Source commit: 2349e1a7a6b873b45a10e56830ef09c6679edb1c.
- Reassigned hcfind.com to the new production deployment; www.hcfind.com remains a permanent 308 redirect to the root domain.
- Post-deploy verification: homepage HTTP 200; seven Case records; Dify absent from Case records and featured order; Dify retained in the contribution index with four independent PRs; Laya casebook route HTTP 200.
- noindex, nofollow, noarchive remains enabled. Search indexing was not enabled.
- Previous production deployment dpl_5uFv25CXDq8DkmD64NZMU7FHDvcK remains READY and is retained as a rollback point.
- Runtime error-log query for the full 1h window exceeded Hobby retention; retried for the latest 30m and received no matching error/fatal runtime logs. This is not a full monitoring/observability guarantee.
- No DNS or nameserver changes.
