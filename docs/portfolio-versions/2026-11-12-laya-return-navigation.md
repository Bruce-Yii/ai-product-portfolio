# Portfolio iteration · 2026-11-12 · Laya return navigation

## Source and deployment

- Active branch: `main`.
- Website source commit: `2d071eaf04f666d5f65acb5cf83def12d7e2faa0`.
- Vercel Preview: `dpl_77idafnMnTNEFumvPeLZuKPeq8aY` · READY · target `null`.
- Public no-login URL: https://ai-product-portfolio-1z4adt3b2-yu-ac3a.vercel.app/

## Scope

- Replaced the Laya casebook's hard-coded return destination `https://portfolio.hcfind.com/#home` with the same-origin root path `/`.
- This prevents the current Vercel Preview from sending visitors to the older custom-domain candidate and avoids pinning future deployments to a stale preview hostname.
- No homepage content, project order, case copy, visual system, DNS, custom-domain alias, production target, or indexing policy was changed.

## Verification

- Vercel deployment reached READY and is tied to the exact source commit above.
- Current homepage: HTTP 200; rendered project order is Personal Context Keyboard → VIVIC → AWRP × Linear.
- Current Laya casebook: HTTP 200; return control resolves to the current deployment origin at `/`.
- Page metadata reports `noindex, nofollow, noarchive`; `robots.txt` returns `Disallow: /`; `vercel.json` configures the X-Robots-Tag noindex header.
- Current deployed Laya HTML contains no `portfolio.hcfind.com` reference.
- Desktop/mobile rendered visual QA, full click E2E, and independent image rendering remain pending; no pass is claimed.

## Decision

Use only the Preview URL above for owner review. `portfolio.hcfind.com` remains a historical alias and must not be used as the current review destination.