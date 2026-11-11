> **Current operational state:** use [VERSION-REGISTRY.md](../VERSION-REGISTRY.md). This file is a historical version log; the latest entry below is not automatically the current deployment or approved release.

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

## 2026-11-10 · Strategy baseline (documentation-only; website unchanged)

- Strategy source: [Portfolio Strategy & Roadmap](../PORTFOLIO-STRATEGY-AND-ROADMAP-2026-11-10.md).
- Binding operating rules: [Portfolio Operating Contract](../PORTFOLIO-OPERATING-CONTRACT.md), Section 7.
- User requirements captured: seven optimization directions; P0 positioning, case narrative and continuous reading path; P1 visual, evidence and interaction; P2 engineering.
- Research snapshot: 2027 graduate / early-career AI PM job descriptions and 2025–2026 AI product / portfolio review sources, with sample limitations recorded in the strategy document.
- Next execution: Phase 1 role / positioning research + Phase 2 personal case and evidence audit; no large-scale website visual changes before those dependencies complete.
- This was a documentation-only strategy update. The v2.3 website artifact and preview deployment remain unchanged.


## 2026-11-10 · User-confirmed strategy upgrade (documentation-only)

- Explicit user-confirmed decision: [dated strategy record](../portfolio-decisions/2026-11-10-user-confirmed-strategy.md).
- Advanced capability and real-site portfolio UX research: [benchmark report](../portfolio-reviews/2026-11-10-portfolio-benchmark-and-senior-capability-research.md).
- The user confirmed all seven directions and six foundational capabilities, and requested advanced AI PM capabilities as an upward reference standard.
- Portfolio UX research now includes recent live PM / AI PM sites and design interaction examples, with explicit source and sample-bias limitations.
- The website artifact and v2.3 preview deployment were not modified.
- Read-only multi-window execution package: [W1 role research · W2 portfolio UX benchmark · W3 personal evidence audit](../PORTFOLIO-WINDOW-DISPATCH-2026-11-10.md). W0 retains sole synthesis, decision and acceptance authority.


## 2026-11-11 — Version governance reset (documentation-only)

- Recovery reference baseline: `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae`, deployment `dpl_2UJ7aErkfXtSRsJyHnjcK9BWYrRA`.
- Unapproved rewrite candidate: `1294634512a87c383e5ed3aedf8b85b460103801`, deployment `dpl_DfeCKvr4bdJdYwQbWTN9ApSxVjE4`.
- The two URLs resolve to different deployment IDs. `portfolio.hcfind.com` currently serves the latter.
- No website HTML, CSS, JavaScript, asset, route, DNS or Vercel alias was changed by this governance record.
- Full mapping and operating rules: [VERSION-REGISTRY.md](../VERSION-REGISTRY.md).

## 2026-11-11 — Selective recovery candidate

- Based on owner-supplied `4f558b5`, selectively reusing reviewed improvements from `1294634`.
- Restores project maturity and validation boundaries; restores VIVIC metrics; retains Laya metric correction.
- Pins VIVIC official image sources to an immutable upstream commit and preserves historical screenshot provenance.
- Full scope: [selective recovery version note](./2026-11-11-selective-recovery.md).
- The content-corrected preview deployment and hosted response checks are recorded in [VERSION-REGISTRY.md](../VERSION-REGISTRY.md) and the latest [QA report](../QA-REPORT.md).


### Validation correction

The first preview deployment `dpl_2XGv86EWnM5AfLeL3aHtXjQFc5uA` returned HTTP 200 but inherited a JavaScript syntax error in `systemArt()`; it is superseded and must not be shared. The extra closing brace was removed in a follow-up source commit. New deployment and hosted QA remain pending.


### Corrected owner-review deployment

- Code commit: `f9cb2ce`; deployment: `dpl_DkZZvbcnN9V1AfjMR2JH4Qv4Jc4e`; target: preview only.
- Hosted `/` and `/cases/laya/` return HTTP 200; noindex and robots disallow remain active.
- Source JavaScript syntax and static portfolio invariants pass. Browser visual / click E2E remains pending.
- Preview access link is temporary (7-day bypass); token is not stored in GitHub.
- The earlier `0c5ef28` / `dpl_2XGv...` deployment is invalid and superseded.

## 2026-11-11 — Content-corrected owner review preview

- Immutable comparison baseline: `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae`.
- Code commit: `ee6f8bdd5239b80cf8ea72f563ece351105906af`.
- Vercel deployment: `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR` (`READY`, preview only).
- Preview URL: https://ai-product-portfolio-lyrhy78kp-yu-ac3a.vercel.app/
- Corrections: restore the owner-requested hero headline; remove noisy Laya query counts; add PCK / AWRP repository evidence links; clarify VIVIC's pre-existing unit-test failures.
- Homepage and Laya route return HTTP 200, source-to-deployment HTML matches, and noindex remains active.
- Browser visual / click E2E and owner review remain pending. No production, custom-domain or indexing changes.
- The `f9cb2ce` preview is superseded for review; `0c5ef28` remains invalid due the JavaScript syntax error recorded above.


## 2026-11-11 — Owner content prohibition correction

- The `ee6f8bd` / `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR` preview is withdrawn due to a violation of a permanent owner content prohibition.
- The immutable commit and deployment remain in history for audit; they are not a valid review baseline and must not be redistributed.
- The active branch remains `portfolio/owner-feedback-rewrite-2026-11-11`; one source correction and a static content gate are being applied there.
- The neutral homepage heading from the owner-supplied recovery reference remains the baseline. No new headline or slogan is authorized.
- A new preview may be recorded only after source validation, exact deployment identity verification and independent hosted QA. No production alias or indexing changes are part of this correction.
