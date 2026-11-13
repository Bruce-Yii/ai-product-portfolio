# Portfolio iteration · 2026-11-14 · AWRP × Linear dual-system visual

## Immutable identity
- Source commit: `d0e66adb68560687c4ee8a69eecb868af85fcbb5` on canonical `main`.
- Vercel deployment: `dpl_6Wj6GsU4cctXZhgA8pX12rmYxHUC` · READY · Preview only.
- Preview: https://ai-product-portfolio-3pbwm0kzs-yu-ac3a.vercel.app/

## Reason
The previous AWRP × Linear homepage image split four stages equally. This made the real, independently designed AWRP implementation visually equivalent to external dsh-superagent research and the future Agent OS direction. The owner approved a more accurate hierarchy: **AWRP implementation + Linear workflow adaptation** as the main visual; **dsh-superagent / Agent OS** as a restrained secondary evolution line.

## Site changes
- Only the AWRP special `projectVisual` HTML and its CSS were replaced.
- Left panel: AWRP · Project/Channel; Task → Run → Event; Artifact/Replay; reliable handoff and recovery.
- Right panel: Linear workflow · Project/Issues; Ready → Agent → Review; State/Evidence; long-lived work and collaboration.
- Bottom: dsh-superagent · architecture comparison → Agent OS · productization exploration.
- The visual is a diagram, **not** a screenshot of Linear or of an already launched Agent OS. The project button still navigates to the AWRP case.
- Existing homepage text, title, project order, Laya copy/casebook and all other sections remain unchanged.

## Checks and remaining QA
- Deployed Preview reports READY with exactly the source commit above.
- Both `/` and `/cases/laya/` HTTP 200.
- HTML contains both main system panels and future line; obsolete four-stage-equal visual no longer rendered.
- JavaScript syntax PASS; robots meta noindex unchanged; historical forbidden slogan absent.
- Browser observed AWRP card → AWRP detail heading and no container horizontal overflow during mobile-size test. Third-party screenshots were captured at desktop/mobile viewports but visual inspection was incomplete; final supplementary QA call timed out. Do not claim independent screenshot/click E2E acceptance.
- No production changes.

## Follow-up
Use the immutable Preview for owner's visual decision. If accepted, consider one refinements-only pass to improve mobile type size and detail-case navigation clarity, without reworking the overall four-stage story.
