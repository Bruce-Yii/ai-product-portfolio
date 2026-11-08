# Static Portfolio QA

Tested against the repository-ready ZIP contents on 2026-11-09. This is a local static-page test, not a live Vercel deployment test.

## Main site

- Eight case records render.
- Initial featured case resolves to the Dify case.
- Work index opens and lists all eight cases.
- Systems filter returns three records.
- Laya case opens and reveals the standalone casebook CTA.
- No horizontal overflow at 1440px, 390px, or 360px viewport widths.
- No browser JavaScript errors observed.

## Laya casebook

- Eight chapters and eight chapter visuals render.
- Chapter disclosure interaction works.
- Four evidence-scenario controls respond and update their selected state.
- No browser JavaScript errors observed.

## Limitations

- This does not verify live external links, Vercel routing, domain configuration, or team permission for project media.
- The older modular authoring package contains a stale `patch_mainline.py` migration script and stale smoke-test assertions; it was not used as the deployment source.


## Editorial branch QA · 2026-11-09

Target: `portfolio/editorial-product-positioning-2026-11-09`. This branch is not merged or deployed.

### Structural and evidence checks

- Main-site case data parses: 8 case records; all 8 resolve to their case-detail data.
- Curated upstream-work index parses: 8 entries. The OpenClaw row groups three independent merged PRs (#145220 / #141569 / #160156); QwenPaw #7593 and FunASR #3703 are separately linked.
- Google ADK is explicitly labelled `RFC / OPEN`: Issue #7455 remains open; PR #8005 remains a tests-only Draft and unmerged. Neither is presented as shipped or adopted.
- Newly grouped / added GitHub contributions were checked against live metadata: authored by Bruce-Yii and merged where labelled MERGED.
- Laya GitHub query snapshot (2026-11-09): 47 authored PRs, 40 merged, 85 PRs returned by `reviewed-by:Bruce-Yii`.
- Both the main page and Laya casebook carry page-level `noindex, nofollow, noarchive` metadata. `robots.txt` remains `Disallow: /`; `vercel.json` retains the `X-Robots-Tag` noindex header.
- No CSS or interaction/event-handling logic changed. The contribution-list renderer now respects explicit status labels such as `RFC / OPEN`.

### Not re-run / release limitations

- Responsive browser checks and interactive regression were not rerun after the contribution-list expansion; the earlier viewport results refer to the prior repository-ready ZIP.
- External links, live routing, and team permission for project media were not revalidated in a browser.
- No indexing protections were removed, no production deployment was made, and no public launch was approved.
