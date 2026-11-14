# Portfolio visual iteration · 2026-11-15 · AWRP × Linear / VIVIC benchmark

## Identity
- Website artifact: `5e4d2f365c4fee59fb0c17d5cf4260e2dc29a81a` on `main`.
- Vercel Preview: `dpl_HnhDjR1yn7pvGW4in4FD5HRcSdBB` (READY, Preview only).
- Review URL: https://ai-product-portfolio-3floxkzqq-yu-ac3a.vercel.app/

## Owner feedback

The earlier AWRP cover was visually far below VIVIC: a plain dark background with oversized text did not have the product-art depth, lighting, glass material and composition that made the VIVIC card feel premium.

## Benchmark and design response

Inspected the actual VIVIC homepage source artwork and existing portfolio card. VIVIC's visual strength comes from an atmospheric indigo / violet field, luminous teal orb, restrained glass surfaces, light/dark contrast and editorial typography.

Created a new text-free 3D artwork for AWRP:
- Two translucent glass modules and flowing light ribbons represent the AWRP × Linear existing-practice layer.
- A luminous orbital glass hub represents the Agent OS productization direction.
- Indigo / violet / teal light, warm ivory highlights, reflective surface and generous negative space align with VIVIC without copying its actual product UI.
- All labels and typography are rendered in HTML/CSS, not generated inside the image, so wording and factual distinctions remain exact.
- The narrative is **AWRP × Linear → Agent OS**. The visual does not imply Agent OS is already shipped. dsh-superagent remains a subordinate architecture reference in the detailed narrative, not a peer implemented product.

## Implementation
- Added `assets/awrp/agent-os-glass.webp`, 800×500, 13,340 bytes.
- Replaced only the AWRP homepage visual branch and its CSS.
- Preserved card order, 1+2 layout, card click-through, AWRP copy, VIVIC image/content, PCK, Laya and all other sections.

## Verification
- Vercel deployment READY and exact source SHA confirmed.
- Homepage and `/cases/laya/` return HTTP 200.
- Artwork asset returns HTTP 200 / `image/webp`.
- JS syntax passes; noindex preserved.
- Browser QA at 1440px and 390px: artwork loads, no text overflow, no horizontal page overflow, card links to existing AWRP case page.
- Owner's final aesthetic judgement remains the acceptance gate.

## No-go boundaries
- No production promotion.
- No DNS/domain or indexing changes.
- No changes to Laya's approved introduction or OSS contribution metrics.
