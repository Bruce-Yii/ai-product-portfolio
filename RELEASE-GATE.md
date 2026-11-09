# Publication Gate

## Current portfolio candidate

- Candidate branch: `portfolio/v2-information-architecture`.
- Candidate scope is limited to the user-confirmed portfolio subjects: VIVIC, AWRP × Linear, Personal Context Keyboard, Laya flagship casebook, and the unified open-source contribution index.
- Main-site Cases: four — Laya, VIVIC, AWRP × Linear, Personal Context Keyboard.
- Selected Project cards: three — VIVIC, AWRP × Linear, Personal Context Keyboard.
- Open-source contribution groups: OpenClaw, Dify, RAGFlow, Cherry Studio, QwenPaw, FunASR, dsh-market, Google ADK.
- Google ADK is an unmerged RFC / tests-only Draft and must not be labelled merged.
- Make Again 2.0, Agent Evaluation Lab, and EvalScope are excluded. Cherry Studio and dsh-market are contribution groups, not standalone Case pages.

## Repository visibility

- Repository visibility: **Public**, explicitly accepted by the owner on 2026-11-09.
- Repository visibility does not itself approve production website release or search indexing.

## Production domain state — last live verification

- `hcfind.com` points to frozen V1 deployment `dpl_DU86D71ntVNtihTr4spaUQZBXETr`.
- `www.hcfind.com` redirects to `hcfind.com` (308) on the same frozen V1 deployment.
- No DNS or nameserver changes were made in the current v2 content revision.
- The owner previously authorized a future direct replacement of the portfolio homepage, but this v2 candidate has **not** been promoted to production.

## Mandatory iteration deployment and review access

- Every website iteration that changes content, visual design, layout, routing, or interaction must be deployed before it is reported as delivered.
- Default: deploy the current Git commit to Vercel Preview and create a no-login share link that the owner can open directly. A safely configured existing domain is an acceptable alternative when it does not require unapproved routing changes.
- A login-protected Vercel Preview URL alone is not a valid owner-facing deliverable.
- After deployment, verify the exact deployment commit, HTTP response, homepage, changed route(s), key assets/interactions, and desktop/mobile rendering. A READY build alone is insufficient.
- Deliver the actual working URL in the completion report. Never invent a URL or report an unverified link as working.
- Share links grant access to anyone who holds them; do not put their tokens in public repository files.
- Preview deployment is the normal review path; it does not automatically mean production promotion or search indexing.
- If the custom domain is already safely attached to the intended project, it may be used as the viewing URL. If using it requires changing DNS, Nameservers, domain ownership, cross-project aliases, or other production routing, use a Vercel Preview share link instead unless the owner explicitly approves that exact change.
- Pure documentation/governance changes that do not change the website artifact do not require a website deployment; state that clearly in the report.
- Keep preview noindex enabled.

## Search indexing

- Keep page-level `noindex`, `robots.txt` blocking, and Vercel `X-Robots-Tag` until the exact release candidate is approved.
- Do not remove indexing protections based on a completed task or a READY deployment.

## Release blockers

1. Owner reviews the actual homepage, VIVIC case, AWRP × Linear case, Personal Context Keyboard case, and Laya casebook.
2. Check the mobile layout and responsive navigation.
3. Re-check role boundaries, evidence links, dates, and all contribution statuses against live sources.
4. Confirm permission to reuse VIVIC team visuals and any screenshots from private project repositories.
5. Replace placeholders with authorized assets or clearly labelled explanatory visuals.
6. Obtain explicit approval for the exact release candidate before assigning production aliases.
7. Obtain a separate decision before enabling search indexing.
8. For every subsequent website iteration, complete the mandatory deploy-and-verify cycle in [Portfolio Operating Contract](./docs/PORTFOLIO-OPERATING-CONTRACT.md); do not treat local changes as delivered.

## Cross-window operating rule

All windows and agents must read [Portfolio Operating Contract](./docs/PORTFOLIO-OPERATING-CONTRACT.md) before editing. It is the source of truth for product-manager packaging, interview-ready case narratives, recruiter-first information architecture, and mandatory deployment after each website iteration.

## Case admission rule

A project or repository does not qualify for a standalone Case page merely because it has multiple merged PRs or a polished visual. A Case must have a coherent product problem or user journey, attributable personal decisions, primary evidence, meaningful validation, and a defensible outcome. Independent contributions remain traceable under the unified repository-level contribution index.

## Current source-level checks

- Four Case records and four detail payloads.
- Three selected Project cards.
- Eight open-source contribution groups, plus Laya casebook entry.
- AWRP × Linear has a dedicated Task / Run / Evidence / Acceptance visual and a non-ranking DeepSeek comparison.
- Personal Context Keyboard has a dedicated Sensor / Raw / Derived / User Control / AI Gateway visual.
- Excluded standalone projects are absent from public source.
- Inline JavaScript syntax parse: PASS.
- Full browser visual review and responsive E2E remain pending.


## Latest owner review candidate · 2026-11-09

- Source commit: c2cd00a2798c483b59d779e881f7b508a2e45bc4.
- Deployment: dpl_FW2yCXELaXPh74oUNW9p4Y2osbHC · READY.
- Preview base URL: https://ai-product-portfolio-59nq0wc6g-yu-ac3a.vercel.app.
- A no-login share link was generated and verified; its token is shared only in the owner conversation and is not stored in this public repository.
- Homepage and Laya casebook both return HTTP 200 and retain noindex.
- Latest runtime error/fatal query returned no matching Preview logs.
- Production aliases hcfind.com and www.hcfind.com remain on frozen V1 deployment dpl_DU86D71ntVNtihTr4spaUQZBXETr.
- This candidate has not been promoted to production.
