# Portfolio Version Registry

> **Operational source of truth for version identity and release state.**
> Last verified: 2026-11-12 (Asia/Shanghai). This ledger records observed GitHub and Vercel state; branch names and domain aliases are mutable, commit SHAs and deployment IDs are immutable.

Do not infer the current version from a branch name, a deployment display URL, or a historical README entry alone. A version is identified by **commit SHA + Vercel deployment ID**. Check the actual page response for its deployment ID before treating a URL as current.

## 1. Current authoritative decision

### Additional withdrawn preview — `84f8773` (do not share)

- Code commit: `84f8773f3eabe6e79806d4c884c15707cb07b783`.
- Branch at deployment: `portfolio/phase3-content-review-2026-11-10`.
- Vercel deployment: `dpl_6Jf7WMaV8rETHXAchZUKXtky7HQE`.
- Preview host: https://ai-product-portfolio-nf50lz2tc-yu-ac3a.vercel.app/.
- Direct hosted verification: HTTP 200; deployment ID matches; the homepage contained owner-prohibited copy; noindex headers remained enabled.
- This historical deployment is **WITHDRAWN** and must never be shared. The branch later advanced to `1294634`, which removed that copy; do not confuse the later branch head with this immutable deployment.


### Current public Vercel Preview — canonical mainline

- Canonical GitHub branch: `main` (the repository default branch and only active development line).
- Current website artifact commit: `3f20556f335ca3118c83fb8da7a93cd4e0ff92d5` (`feat(portfolio): add Laya product and launch context`). Later `main` commits through `41013c9` are documentation/governance-only and do not change the deployed website artifact.
- Vercel deployment: `dpl_Fe32YRYL68dgKa6uv6da6SYwJDk2` (`READY`, target `null`, Preview only).
- Current review URL: https://ai-product-portfolio-82mgnds3s-yu-ac3a.vercel.app/
- Team plan: Vercel Hobby. Project SSO protection, password protection and trusted-IP restrictions are disabled.
- Source verification: homepage cards are Personal Context Keyboard → VIVIC → AWRP × Linear; Laya remains a separate flagship section. Four Case records and four detail payloads exist; all three homepage Project IDs resolve to Case records.
- Navigation: Laya casebook return control uses same-origin `/`, not the stale `portfolio.hcfind.com` alias. This change is inherited from parent website commit `2d071eaf`.
- Laya introduction: project definition and dated popularity context were added in `3f20556`; ranking claims have been checked against the cited dated sources. Star/fork counts remain historical snapshots, not live counters.
- Indexing protection: current source retains page-level noindex and `robots.txt` crawler blocking; `vercel.json` configures `X-Robots-Tag: noindex, nofollow, noarchive`. Parent preview `dpl_77idafnMnTNEFumvPeLZuKPeq8aY` returned HTTP 200 for homepage and Laya route; this newer deployment's direct HTTP/browser verification remains pending.
- Remaining QA: real-browser visual/click E2E, rendered 1440px / 390px / 360px checks, all project-card interactions, and independent image-render verification. These are not claimed as passed.
- Previous preview `dpl_77idafnMnTNEFumvPeLZuKPeq8aY` is superseded by this deployment. Earlier preview IDs remain historical/superseded.
- No custom-domain alias, production promotion, DNS or indexing change is authorized. `portfolio.hcfind.com` still serves an older historical candidate and is not the review URL.

### Withdrawn owner-review candidate — `ee6f8bd` (do not share)

- Code commit: `ee6f8bdd5239b80cf8ea72f563ece351105906af`
- Active work branch at deployment: `portfolio/owner-feedback-rewrite-2026-11-11`
- Vercel deployment: `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR`
- Preview URL: https://ai-product-portfolio-lyrhy78kp-yu-ac3a.vercel.app/
- Deployment state: `READY`; target `null` (preview, not production).
- Verified: `/` HTTP 200; deployment ID in the live response matches `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR`; `/cases/laya/` HTTP 200; `robots.txt` returns `Disallow: /`; both page responses carry `X-Robots-Tag: noindex, nofollow, noarchive`.
- Source verification: one application script parses; homepage order is Personal Context Keyboard → VIVIC → AWRP × Linear; four Case records have four detail payloads; nine contribution groups are present (Laya casebook plus eight selected upstream groups); homepage renderer, navigation handler and Laya route are present.
- Content corrections: PCK and AWRP public repository evidence links added; noisy Laya 47-authored / 85-reviewed query counts removed from the visible contribution line; VIVIC's eight unit-test failures are explicitly identified as pre-existing baseline failures. The homepage headline violates a permanent owner prohibition, so this entire deployment is withdrawn regardless of its technical checks.
- Deployed homepage HTML exactly matches the GitHub source after removing Vercel's injected feedback script. The deployed Laya page exactly matches its GitHub source.
- All five referenced VIVIC image paths exist at pinned upstream commit `9b8665a0b62a17e0eef94c403f2c2c583d484330`; actual browser image rendering has not been independently verified.
- A shareable preview URL was verified with HTTP 200; the reused access link expires `2026-11-12 07:04:18` (Vercel-reported time). Its bearer token is not stored in GitHub.
- Browser visual / click E2E and 1440px / 390px / 360px rendered-layout verification remain pending. Do not claim them as passed.
- Owner review: pending. Public release: not approved.

### Superseded review preview — `f9cb2ce`

- Code commit: `f9cb2ce741258edebec73d136030c53c20f21517`
- Vercel deployment: `dpl_DkZZvbcnN9V1AfjMR2JH4Qv4Jc4e`
- Preview URL: https://ai-product-portfolio-ojkrc4arr-yu-ac3a.vercel.app/
- This preview had valid JavaScript and passed hosted HTTP / noindex checks, but is superseded by `ee6f8bd` after the owner-directed headline, evidence-link and attribution corrections. Do not distribute it as the current review link.

### Superseded broken preview — `0c5ef28`

- Code commit: `0c5ef28b8aed30f606b6e2e1d44139ce1dee5802`
- Deployment: `dpl_2XGv86EWnM5AfLeL3aHtXjQFc5uA`
- It returned HTTP 200 but its inline application script did not parse because an extra closing brace remained in `systemArt()`, inherited from `1294634`.
- It is superseded by the later corrected preview chain; do not share or review it.


### Recovery reference baseline — `4f558b5`

This is the exact owner-supplied preview from the previous review conversation. It is the reference point for recovering the previous review artifact and comparing later changes; it is not a blanket content approval or production-release approval.

- Commit: `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae`
- Current Git branch pointer at audit time: `portfolio/owner-feedback-rewrite-2026-11-11`
- Vercel deployment: `dpl_2UJ7aErkfXtSRsJyHnjcK9BWYrRA`
- Deployment host: https://ai-product-portfolio-aqu466asw-yu-ac3a.vercel.app/
- Verified page response: HTTP 200; HTML `data-deployment-id` = `dpl_2UJ7aErkfXtSRsJyHnjcK9BWYrRA`
- QA evidence: `docs/QA-REPORT.md` records hosted Chromium E2E for this exact deployment at 1440×1000, 390×844 and 360×800, covering the three selected project cards, case routes, Work view and Laya route.
- The owner share token is deliberately not stored in this repository. Share links are bearer access and must remain in the owner conversation.

### Unapproved rewrite candidate — `1294634`

This is a later substantive rewrite, not the same artifact as the recovery baseline.

- Commit: `1294634512a87c383e5ed3aedf8b85b460103801`
- Current branch pointers at audit time: `main` and `portfolio/phase3-content-review-2026-11-10`
- Vercel deployment: `dpl_DfeCKvr4bdJdYwQbWTN9ApSxVjE4`
- Deployment host: https://ai-product-portfolio-lgf7nzjg8-yu-ac3a.vercel.app/
- Deployment state: `READY`; target: `null` (not a production-target deployment)
- Current `portfolio.hcfind.com` response: HTTP 200; HTML `data-deployment-id` = `dpl_DfeCKvr4bdJdYwQbWTN9ApSxVjE4`
- Owner approval: **not recorded**
- Full post-commit browser E2E: **not recorded**. The owner-feedback rewrite note lists route, viewport, image and interaction checks as still required.
- The substantive rewrite begins at `2a0d621`; later commits include case-content corrections, a temporary headline change and its removal. Preserve this history for comparison, but do not treat this candidate as the canonical baseline or approved release.

### Historical V2.3 candidate — `a030eba`

- Commit: `a030ebab95afd4b23b0643bd832b1ad3fe7e42f3`
- Branch at audit time: `portfolio/v2.3-real-assets-2026-11-10` (current branch head has since advanced)
- Vercel deployment: `dpl_E171vBEVcuq4pGTL5vfSXvKirt5A`
- Deployment host: https://ai-product-portfolio-i36cov0jj-yu-ac3a.vercel.app/
- The deployment's returned alias is an auto-generated Vercel hostname. It is **not** the current `portfolio.hcfind.com` target.

### Historical V1 freeze — `2349e1a`

- Commit: `2349e1a7a6b873b45a10e56830ef09c6679edb1c`
- Frozen branch: `freeze/portfolio-v1-2026-11-09`
- Historical deployment: `dpl_DU86D71ntVNtihTr4spaUQZBXETr`
- This is the V1 historical freeze, not the owner-supplied current recovery baseline `4f558b5`.

## 2. Observed Vercel project and domain mapping

Portfolio Vercel project:

- Project: `ai-product-portfolio`
- Project ID: `prj_zhQjAp1wRF6zIgzVfccCpdqdxH39`
- Last deployment candidate (withdrawn): `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR`
- Attached custom domain: `portfolio.hcfind.com`. Direct HTTP verification on 2026-11-11 returned HTTP 200 with deployment ID `dpl_DfeCKvr4bdJdYwQbWTN9ApSxVjE4`, neutral `AI Product Manager.` hero, and `X-Robots-Tag: noindex, nofollow, noarchive`. This remains the older `1294634` deployment and is not the current public Vercel Preview URL. Do not change the alias without explicit approval.
- SSO protection: enabled for generated deployment URLs except custom domains.
- Noindex remains enabled on both inspected portfolio page responses.

Separate root-domain project:

- Project: `hcfind-home`
- Project ID: `prj_U2JAgXYqMugXUdJZCKZyX8fhTQsF`
- Vercel domain records currently assign `hcfind.com` and `www.hcfind.com` to this separate project; `www.hcfind.com` redirects to `hcfind.com` with HTTP 308.
- Do not change the root-domain project or its DNS as part of portfolio version recovery.

**Important correction:** older documents describe `portfolio.hcfind.com` as pointing to the V2.3 deployment and describe `hcfind.com` as the V1 portfolio production domain. Those are historical records, not the current observed domain mapping. At this audit, `portfolio.hcfind.com` serves deployment `dpl_DfeCK...`; the root domains are assigned to `hcfind-home`.

## 3. GitHub branch snapshot

Nine GitHub branches were observed before consolidation. The repository now uses exactly one active development line: `main`. All other existing refs are frozen historical snapshots and must not receive new work.

| Branch | Snapshot commit | Operational status |
|---|---:|---|
| `main` | `HEAD` (docs-only commits may advance; website source `f63fd22`) | **ONLY ACTIVE LINE.** Repository default branch; all future website changes are committed here sequentially. |
| `portfolio/owner-feedback-rewrite-2026-11-11` | `4298428` | Frozen duplicate pointer retained for history; do not continue work here. |
| `portfolio/phase3-content-review-2026-11-10` | `1294634` | Historical pre-consolidation main snapshot; retained so the former default-branch history remains reachable. |
| `freeze/portfolio-v1-2026-11-09` | `2349e1a` | Historical V1 freeze. |
| `portfolio/v2.3-real-assets-2026-11-10` | `3e89b20` | Historical V2.3 line. |
| `portfolio/v2-information-architecture` | `aceeaae` | Historical IA line. |
| `portfolio/modular-mainline-2026-11-09` | `063744c` | Historical modular line. |
| `portfolio/editorial-product-positioning-2026-11-09` | `0024f93` | Historical positioning exploration. |
| `portfolio/phase3-content-draft-2026-11-10` | `2b23fb2` | Historical draft-content line. |

Historical branch refs are intentionally preserved as snapshots; they are not competing workstreams. The GitHub connection available to this workflow supports ref reads and updates but does not expose branch deletion. Do not claim these refs were physically deleted. Operationally, only `main` is active.

`main` may advance through documentation-only governance commits without changing the website artifact. The current website source commit is `f63fd225409d124aeb2f2e468a5b24b487d76f50`; the current Vercel Preview is `dpl_CmwMtYfv8CBMFQscWEuXg7GrG35P`. No website redeployment is needed for docs-only changes.
## 4. Operating rules

1. **Single development line:** `main` is the only active branch. All website changes are committed sequentially to `main`; do not create new long-lived version, review, draft or parallel work branches.
2. **One website artifact per code change:** identify it by exact `main` commit SHA plus Vercel deployment ID. Documentation-only commits do not create a new website artifact.
3. **Vercel Hobby Preview only:** deploy the exact `main` commit as a Preview deployment (omit `target`, never set `production`). Use the generated `vercel.app` URL; it must open without Vercel login. Project SSO/password/IP protection stays disabled for this public portfolio preview.
4. **One current preview:** each website-changing iteration gets one deployment and one URL. The prior URL is superseded when a newer verified deployment is recorded.
5. **No custom-domain or production changes:** do not reassign `portfolio.hcfind.com`, alter DNS, promote to production or change aliases without explicit owner approval.
6. **Noindex stays enabled** until the separate content, evidence, permission and publication gates are explicitly approved.
7. **READY is not acceptance:** deployment state, HTTP checks, browser QA and owner approval are separate states.
8. **Record each website deployment** with exact source commit, deployment ID, URL, HTTP/route checks, noindex status and remaining QA.
9. **Historical refs are snapshots:** do not resume work on old branches. Keep their history; only `main` advances.
10. **No duplicate review links:** provide only the latest verified public no-login Preview URL.
## 5. Current operating state

- The Vercel team is on the Hobby plan. Project SSO, password and trusted-IP protection are disabled; the current Preview URL is publicly accessible without login.
- A Vercel Ignored Build Step allows Git deployments from `main` only; pushes from other branches are skipped. Website iterations are explicitly deployed from an exact `main` Commit as Preview, never Production.
- GitHub branch protection is not configured. Do not assume it exists or introduce parallel branch workflows.
- Browser visual/click E2E, rendered 1440px / 390px / 360px checks and independent image-render verification remain the next QA work for the current preview.
- Phase 3 / Phase 4 drafts remain reference inputs, not a reason to restart research or require repeated owner review. Continue with concrete incremental website improvements.

## 6. Permanent owner content prohibition

The historical self-praise / test slogan is permanently prohibited in this portfolio. It must not appear in any current page, preview, screenshot, metadata, source comment, release note or derived asset. Historical commits remain immutable audit records only; they do not authorize reuse. The static source validator enforces the ban. The `84f8773` / `dpl_6Jf7...` and `ee6f8bd` / `dpl_6kq7...` candidates are both withdrawn and must never be shared again.


### Version-recording rule

A deployment is always tied to the exact website source commit recorded in its Git metadata. Documentation-only commits may advance the active branch after deployment; they must never be mistaken for a new website artifact or a new deployment. Keep `main` as the only active branch, one current website source commit, and one current public Preview candidate. All other branches and deployments are historical, quarantined or explicitly superseded.
