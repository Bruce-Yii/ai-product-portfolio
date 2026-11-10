# Portfolio Version Registry

> **Operational source of truth for version identity and release state.**
> Last verified: 2026-11-11 (Asia/Taipei). This ledger records observed GitHub and Vercel state; branch names and domain aliases are mutable, commit SHAs and deployment IDs are immutable.

Do not infer the current version from a branch name, a deployment display URL, or a historical README entry alone. A version is identified by **commit SHA + Vercel deployment ID**. Check the actual page response for its deployment ID before treating a URL as current.

## 1. Current authoritative decision

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
- Current latest deployment: `dpl_DfeCKvr4bdJdYwQbWTN9ApSxVjE4`
- Deployment inventory at audit time: 32 records returned.
- Attached custom domain: `portfolio.hcfind.com` (verified)
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

| Branch | HEAD (short SHA) | Operational status |
|---|---:|---|
| `main` | `1294634` | Default branch currently points to unapproved rewrite; do not use as work baseline |
| `freeze/portfolio-v1-2026-11-09` | `2349e1a` | Historical V1 freeze |
| `portfolio/owner-feedback-rewrite-2026-11-11` | `4f558b5` | Recovery work branch; sole active branch for subsequent approved changes |
| `portfolio/phase3-content-review-2026-11-10` | `1294634` | Quarantined rewrite candidate |
| `portfolio/v2.3-real-assets-2026-11-10` | `3e89b20` | Historical V2.3 line |
| `portfolio/v2-information-architecture` | `aceeaae` | Historical IA line |
| `portfolio/modular-mainline-2026-11-09` | `063744c` | Historical modular line |
| `portfolio/editorial-product-positioning-2026-11-09` | `0024f93` | Historical positioning exploration |
| `portfolio/phase3-content-draft-2026-11-10` | `2b23fb2` | Draft-content line |

The branch name stored in a Vercel deployment is the branch name at deployment time. It does not prove the branch still points to that deployment's commit. Always compare the full commit SHA.

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

- Verify the Vercel project's Git integration and configured production branch before relying on automatic deployments.
- Add GitHub branch protection for the default branch through an explicitly reviewed administrative change; it is not currently enabled.
- Do not claim `1294634` has passed browser E2E until the exact deployment is independently tested.
- Do not treat the Phase 3 content package or Phase 4 IA draft as owner-frozen; their Notion status remains Draft / Provisional.