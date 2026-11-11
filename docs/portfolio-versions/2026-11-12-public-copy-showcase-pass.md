# 2026-11-12 — Public copy showcase pass

## Goal
Make recruiter-facing portfolio copy read as a product showcase: clear user task, product opportunity, product decision, personal contribution and outcome.

## Website source
- Repository: `Bruce-Yii/ai-product-portfolio`
- Branch: `main`
- Website source commit: `f63fd225409d124aeb2f2e468a5b24b487d76f50`
- Vercel deployment: `dpl_CmwMtYfv8CBMFQscWEuXg7GrG35P` · READY · Preview
- Public URL: https://ai-product-portfolio-iqifybh25-yu-ac3a.vercel.app/

## Changes
- Removed the public-facing delivery/validation boundary note and internal QA-style disclaimers.
- Removed the unmerged Google ADK proposal from the public contribution list.
- Reframed PCK maturity around implemented Android capability and the Local-first Context Core.
- Rewrote VIVIC, AWRP and PCK narratives to state product decisions and outcomes directly.
- Removed non-official, non-ownership and other-contributor disclaimers from the Laya casebook; retained the user's own merged contributions and product-system story.
- Kept exact evidence links and material metrics beside the relevant work.

## Binding editorial rule
Public-facing pages are a recruiter-facing showcase, not an audit log. If an item is not worth showing, omit it. Do not explain its absence. Keep internal QA, release gates, validation gaps and detailed attribution records in internal documents. See:
- `docs/PORTFOLIO-CONTENT-RULES.md`
- Section 1.6 of `docs/PORTFOLIO-OPERATING-CONTRACT.md`

## Verification
- Homepage inline application script: syntax parse passed.
- Laya inline scripts: syntax parse passed.
- Homepage project order preserved: Personal Context Keyboard → VIVIC → AWRP × Linear.
- Homepage and `/cases/laya/`: HTTP 200.
- Deployment ID matches homepage response; public unauthenticated access verified.
- `noindex` response headers and `robots.txt` crawler blocking preserved.
- Real-browser visual/click E2E and rendered breakpoint checks remain pending.
- No DNS, custom-domain alias, Production target or indexing change.
