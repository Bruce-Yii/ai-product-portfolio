# Portfolio version history

## v2.2 — 2026-11-10 · Owner review captured
- Status: feedback and copy proposal recorded; implementation in progress.
- Source baseline: `0fee564e6a31416bcdc49e3e8cf83764beacaaff`.
- Owner review: `docs/portfolio-reviews/2026-11-10.md`.
- Next: implement P0 content order and route/navigation fixes; then purposeful visuals and live OSS metadata.

## v2.2 — 2026-11-10 · Featured project and navigation revision

- Owner review source: `docs/portfolio-reviews/2026-11-10.md`.
- Content rules: `docs/PORTFOLIO-CONTENT-RULES.md`.
- Source checkpoint before this version note: `a67d304fa6d7ad55eb8724bf9d105807bcd45c47`.
- Main changes: Personal Context Keyboard moved to first; VIVIC moved second with team/hackathon context; AWRP × Linear moved third with chronology and productization boundary; Laya collaboration positioning revised; explicit return navigation and project-card click handler repaired; open-source descriptions and star snapshots added; Laya four-system explanatory SVG redesigned.
- Status: source checks pass; live deploy and browser-level interaction QA still pending.
- The source checkpoint is immutable and can be restored or inspected directly by its Git commit SHA. Do not overwrite historical version notes.

### v2.2 deployment

- Deployed: `dpl_4Z4tDXHwN7VockWnKEHKcqfc2qT4` (READY).
- Public review URL: https://portfolio.hcfind.com/.
- Laya casebook: https://portfolio.hcfind.com/cases/laya/.
- Homepage and Laya endpoint returned HTTP 200.
- Note: route behavior is implemented in the client-side hash router; no browser automation was available in this verification pass, so interaction E2E remains pending.


### v2.2 final source checkpoint

- Final source commit: `f2217ed74d8833c74ddc458bd568b14505a5eb2c`.
- This commit includes the Laya repository star snapshot in the homepage flagship card.
- Final Vercel deployment for this v2.2 iteration: `dpl_Fhw2j3wtDrFVBUaZvEjzXYRGvgj8` (READY; alias `portfolio.hcfind.com`).

## v2.3 — 2026-11-10 · Real VIVIC media and Agent Project OS narrative

- **Work branch:** `portfolio/v2.3-real-assets-2026-11-10` (v2.2 remains intact).
- **Base checkpoint:** `aceeaae7adfc82045a6a1a12f515b9c27168c8ef`.
- **Real screenshot source commit:** `be24cefcd0cd0cb43b3de6393822e263fcefd131`.
- **Website implementation commit:** `a030ebab95afd4b23b0643bd832b1ad3fe7e42f3`.
- **Preview deployment:** `dpl_E171vBEVcuq4pGTL5vfSXvKirt5A` · READY · non-production.
- **Accessible preview:** https://portfolio.hcfind.com/ (separate from `hcfind.com` and `www.hcfind.com`).
- **Rollback:** old v2.2 preview deployment `dpl_Fhw2j3wtDrFVBUaZvEjzXYRGvgj8`; prior source/history unchanged.
- **Improvements:** 5 authentic VIVIC screenshots added and 4 M01/M03/M05/M06 positions wired; historical 2026-11-01 screenshot provenance explicitly retained. AWRP/Linear case now includes Agent Project OS design GO and G0–G2 Draft PR findings, with software delivery correctly marked unimplemented.
- **Live browser verification:** 1440/390/360 widths with no horizontal overflow, main routes working, 3 VIVIC detail images confirmed HTTP 200 after lazy-load scroll, script/console smoke checks passed. Full report: [v2.3 QA and source record](../portfolio-reviews/2026-11-10-v2.3.md).
- **Publication boundary:** noindex remains; no root-domain deployment, no indexed/public-production launch approved. Auto-generated `*.vercel.app` address is login-protected, so use the custom review alias.
