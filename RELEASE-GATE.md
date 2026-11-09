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

## Deployment protection and review access

- Vercel project SSO protection is enabled for non-custom deployment URLs.
- A no-login share link may be used for review; a local HTML deliverable should also be supplied when requested.
- Share links grant access to anyone who holds the link; do not publish the token in public documentation.
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
