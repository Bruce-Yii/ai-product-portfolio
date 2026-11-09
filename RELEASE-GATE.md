# Publication Gate

Last verified: 2026-11-09 (Asia/Shanghai).

## Current portfolio candidate

- Repository: `Bruce-Yii/ai-product-portfolio` (public).
- Active candidate branch: `portfolio/v2-information-architecture`.
- Current candidate commit: `34c7bca6f389be2fc32a443ca1b96552386aa50c`.
- V1 rollback baseline: `freeze/portfolio-v1-2026-11-09` at `2349e1a7a6b873b45a10e56830ef09c6679edb1c`.
- The default `main` branch is 46 commits behind the V1 freeze and is not a current source of truth.
- V2 is a Preview candidate only. No production promotion, custom-domain reassignment, DNS change, or indexing change has been made.

### Approved content scope

- Main-site Cases: four — Laya, VIVIC, AWRP × Linear, Personal Context Keyboard.
- Selected Project cards: three — VIVIC, AWRP × Linear, Personal Context Keyboard.
- Open-source contribution groups: OpenClaw, Dify, RAGFlow, Cherry Studio, QwenPaw, FunASR, dsh-market, Google ADK.
- Laya remains a separate flagship casebook and also appears in the contribution index.
- Google ADK is an RFC / tests-only Draft and must not be labelled merged.
- Make Again 2.0, Agent Evaluation Lab, and EvalScope are excluded. Cherry Studio and dsh-market are contribution groups, not standalone Case pages.

## Current V2 preview

- Vercel project: `ai-product-portfolio`.
- Preview deployment: `dpl_6vjtXdz4UeurPGxFgMxEwRL7wauJ` · **READY**.
- Source commit: `34c7bca6f389be2fc32a443ca1b96552386aa50c`.
- Preview URL: https://ai-product-portfolio-rn06syrk1-yu-ac3a.vercel.app
- The deployment was explicitly created from the exact GitHub branch and commit. Automatic push-to-deploy is not verified; future previews must be checked rather than assumed.
- Build events show GitHub clone completed, static build completed, and deployment completed.
- Homepage: HTTP 200; hero headline and neutral cool-white palette present.
- Laya casebook route: HTTP 200; existing casebook source and visual system unchanged.
- Both routes return `X-Robots-Tag: noindex, nofollow, noarchive`.
- `robots.txt` returns HTTP 200 with `Disallow: /`.
- A temporary no-login share link was generated for owner review. Its token is only in the owner conversation and must not be committed to this public repository.

## Production domain state — verified from Vercel

- `hcfind.com` and `www.hcfind.com` are attached to the separate Vercel project `hcfind-home` (project ID `prj_U2JAgXYqMugXUdJZCKZyX8fhTQsF`).
- The current custom-domain deployment is `dpl_4CAprhY16boHWmPnKgQwqyToDHzx` · READY · target production. Its aliases include `hcfind.com` and `www.hcfind.com`.
- `www.hcfind.com` redirects to `hcfind.com` with HTTP 308.
- The separate Vercel project `ai-product-portfolio` (project ID `prj_zhQjAp1wRF6zIgzVfccCpdqdxH39`) has production deployment `dpl_DU86D71ntVNtihTr4spaUQZBXETr` from V1 commit `2349e1a7a6b873b45a10e56830ef09c6679edb1c`; its aliases are Vercel subdomains, not `hcfind.com`.
- On 2026-11-09, the HTML body served by `hcfind.com` and the `ai-product-portfolio` V1 deployment alias was byte-identical. The live custom domain still displays the seven-Case V1 content, not the four-Case V2 candidate.
- This is a deployment-ownership mismatch: the public custom domain is attached to `hcfind-home`, while the GitHub portfolio project is `ai-product-portfolio`. The page content happens to match V1, but the domain is not attached to the portfolio project.
- No DNS or nameserver changes were made during this audit. Do not move aliases or change DNS until the owner approves the exact release candidate and target project.

## Product-language and evidence rules

Every major Case should lead with:

1. User and job — who is trying to do what?
2. Product problem — where does the existing experience fail?
3. Product question — what must the system guarantee?
4. Decision and trade-off — what was chosen and why?
5. Product mechanism — how the behavior works in plain language.
6. Outcome and evidence — what actually changed and what can be verified?
7. Personal role and boundary — what Bruce did, what teammates/upstream owners did, and what remains unproven.

Strong positioning and résumé-style editorial polish are allowed. Fabricated roles, delivery states, merge statuses, user outcomes, production adoption, or test metrics are not.

## Current source-level checks

- Four Case records and four matching detail payloads.
- Three selected Project cards, all resolving to existing Case records.
- Nine contribution entries: Laya casebook + eight repository-level groups.
- Four capability groups; all Case references resolve.
- Excluded standalone projects are absent from the public main-site source.
- No private Notion or Linear URLs are present in the public main-site HTML.
- Inline JavaScript syntax parse: PASS.
- Laya casebook retains eight chapter anchors.
- `vercel.json`, page-level metadata, and `robots.txt` retain noindex protection.
- The source is structurally consistent; full browser visual review and responsive E2E remain pending.

## Release blockers

1. Owner reviews the actual V2 homepage, all four Case narratives, the three Project cards, and the Laya casebook.
2. Complete visual review at desktop and mobile widths; verify navigation, card hierarchy, typography, and overflow.
3. Re-check role boundaries, evidence links, dates, and contribution statuses against live sources before public release.
4. Confirm permission to reuse VIVIC team visuals and any screenshots from private project repositories.
5. Resolve the Vercel custom-domain ownership mismatch as part of the release plan; do not move the domain as a side effect of preview work.
6. Obtain explicit approval for the exact release candidate before assigning production aliases.
7. Obtain a separate decision before enabling search indexing.
