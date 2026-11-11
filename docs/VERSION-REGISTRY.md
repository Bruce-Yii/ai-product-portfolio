# Portfolio Version Registry

> **Operational source of truth for version identity and release state.**
> Last verified: 2026-11-11 (Asia/Taipei). This ledger records observed GitHub and Vercel state; branch names and domain aliases are mutable, commit SHAs and deployment IDs are immutable.

Do not infer the current version from a branch name, a deployment display URL, or a historical README entry alone. A version is identified by **commit SHA + Vercel deployment ID**. Check the actual page response for its deployment ID before treating a URL as current.

## 1. Current authoritative decision

### Current corrected internal QA preview — not owner-review-ready

- Sole active work branch: `portfolio/owner-feedback-rewrite-2026-11-11`.
- Website source commit: `62a551a3e375e77a9a22c7ddf78df74a973fbc94`.
- Vercel deployment: `dpl_GFJyeVg2nEk95KVN738sUxJ4Ueo3` (`READY`, target `null`, preview only).
- Internal QA URL: https://ai-product-portfolio-ehxlktct8-yu-ac3a.vercel.app/ (SSO-protected; no owner share link generated).
- Verified: homepage and `/cases/laya/` return HTTP 200; both carry `X-Robots-Tag: noindex, nofollow, noarchive`; `robots.txt` returns `Disallow: /`; homepage deployment ID matches this deployment.
- Source parity: deployed homepage HTML matches the exact GitHub `index.html` at `62a551a` after removing Vercel's injected feedback script. Neutral baseline hero is present; prohibited wording is absent.
- Static checks: one inline application script; JavaScript parse passes; homepage Project IDs/order, renderer, mount point, navigation handler and Laya route invariants pass; validator includes the permanent content guard.
- Still pending: browser visual/click E2E, rendered checks at 1440px / 390px / 360px, and independent image-render verification. Do not mark the candidate owner-review-ready or distribute a share link until these checks pass.
- The `ee6f8bd` / `dpl_6kq...` preview remains withdrawn and must never be shared.
- No domain alias, production promotion, DNS or indexing change is authorized.


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
- Attached custom domain: `portfolio.hcfind.com`. Last recorded HTTP observation mapped it to unapproved `dpl_DfeCKvr4bdJdYwQbWTN9ApSxVjE4`; this mapping was not independently reverified in the current pass because the domain-detail endpoint returned 403. Do not use it as a review URL or change the alias.
- SSO protection: enabled for generated deployment URLs except custom domains.
- Noindex remains enabled on both inspected portfolio page responses.

Separate root-domain project:

- Project: `hcfind-home`
- Project ID: `prj_U2JAgXYqMugXUdJZCKZyX8fhTQsF`
- Vercel domain records currently assign `hcfind.com` and `www.hcfind.com` to this separate project; `www.hcfind.com` redirects to `hcfind.com` with HTTP 308.
- Do not change the root-domain project or its DNS as part of portfolio version recovery.

**Important correction:** older documents describe `portfolio.hcfind.com` as pointing to the V2.3 deployment and describe `hcfind.com` as the V1 portfolio production domain. Those are historical records, not the current observed domain mapping. At this audit, `portfolio.hcfind.com` serves deployment `dpl_DfeCK...`; the root domains are assigned to `hcfind-home`.

## 3. GitHub branch snapshot

Nine branches were returned at the audit. All returned `protected: false`.

| Branch | Website source commit at review | Operational status |
|---|---:|---|
| `main` | `1294634` | Default branch currently points to unapproved rewrite; do not use as work baseline |
| `freeze/portfolio-v1-2026-11-09` | `2349e1a` | Historical V1 freeze |
| `portfolio/owner-feedback-rewrite-2026-11-11` | `62a551a` | Sole active work branch; corrected source is deployed as internal QA preview `dpl_GFJyeVg2nEk95KVN738sUxJ4Ueo3`; visual/click QA still pending |
| `portfolio/phase3-content-review-2026-11-10` | `1294634` | Quarantined rewrite candidate |
| `portfolio/v2.3-real-assets-2026-11-10` | `3e89b20` | Historical V2.3 line |
| `portfolio/v2-information-architecture` | `aceeaae` | Historical IA line |
| `portfolio/modular-mainline-2026-11-09` | `063744c` | Historical modular line |
| `portfolio/editorial-product-positioning-2026-11-09` | `0024f93` | Historical positioning exploration |
| `portfolio/phase3-content-draft-2026-11-10` | `2b23fb2` | Draft-content line |

The branch name stored in a Vercel deployment is the branch name at deployment time. It does not prove the branch still points to that deployment's commit. Always compare the full commit SHA.

The active branch may advance through documentation-only governance commits after a deployment. The current website artifact remains source commit `62a551a3e375e77a9a22c7ddf78df74a973fbc94` / deployment `dpl_GFJyeVg2nEk95KVN738sUxJ4Ueo3`; a documentation-only branch HEAD is not a new website version.

## 4. Operating rules from this audit

1. **One active work branch:** use `portfolio/owner-feedback-rewrite-2026-11-11` for subsequent approved work. Do not edit multiple website branches concurrently.
2. **One immutable recovery reference:** preserve full commit `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae` as the comparison baseline. The branch may advance; the commit SHA must remain recorded.
3. **`main` is not the work branch:** do not push to or deploy `main` until an owner-approved release candidate is selected and the Vercel production-branch behavior is verified.
4. **One review candidate per iteration:** one scoped change set, one exact commit, one Vercel deployment, one owner-facing review URL. Do not distribute several indistinguishable preview links.
5. **READY is not approval:** Vercel build readiness, a successful HTTP response, and owner approval are three different states.
6. **No alias or production changes without explicit owner approval:** do not reassign `portfolio.hcfind.com`, alter root-domain DNS, or promote a deployment as a side effect of ordinary review.
7. **Noindex stays enabled** until the separate content, evidence, permission and publication gates are explicitly approved.
8. **Record every candidate** with parent baseline, branch, full commit SHA, deployment ID, target, URL, QA evidence, approval status and superseded links.
9. **Do not store Vercel share tokens in GitHub.** Deliver the exact owner-accessible URL in the owner conversation and verify its deployment ID.
10. **Historical branches and deployments are records, not active candidates.** Do not delete or force-update them as a shortcut to reduce visible clutter.

## 5. Pending verification

- Continue using explicit commit-pinned preview deployments; do not rely on automatic deployments until the Vercel Git integration and production-branch configuration are independently verified.
- Add GitHub branch protection for the default branch through an explicitly reviewed administrative change; it is not currently enabled.
- Do not claim `1294634`, `f9cb2ce` or the current `ee6f8bd` candidate has passed browser visual / click E2E until the exact deployment is independently tested.
- Do not treat the Phase 3 content package or Phase 4 IA draft as owner-frozen; their Notion status remains Draft / Provisional.

## 5. Permanent owner content prohibition

The historical self-praise / test slogan is permanently prohibited in this portfolio. It must not appear in any current page, preview, screenshot, metadata, source comment, release note or derived asset. Historical commits remain immutable audit records only; they do not authorize reuse. The static source validator enforces the ban. The `ee6f8bd` / `dpl_6kq7...` candidate is withdrawn and must never be shared again.


### Version-recording rule

A deployment is always tied to the exact website source commit recorded in its Git metadata. Documentation-only commits may advance the active branch after deployment; they must never be mistaken for a new website artifact or a new deployment. Keep one active work branch, one current website source commit, and one current preview candidate. All other branches and deployments are historical, quarantined or explicitly superseded.
