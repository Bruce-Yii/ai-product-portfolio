# 2026-11-11 — Selective Recovery Candidate

- Reference baseline: `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae`.
- Selective review source: `1294634512a87c383e5ed3aedf8b85b460103801`.
- Active branch: `portfolio/owner-feedback-rewrite-2026-11-11`.
- Restores PCK, VIVIC and AWRP maturity / validation boundaries; restores VIVIC internal metrics; retains Laya metric corrections.
- AWRP workflow diagram reflects Linear × Notion as the current workflow, not AWRP.
- Pins VIVIC image URLs to an immutable source commit and preserves historical screenshot provenance.
- Detailed source: [selective recovery content](../portfolio-content/2026-11-11-selective-recovery-v1.md).

No new project, route, navigation or homepage reorder. No full-site redesign, DNS, root-domain, Vercel alias, production promotion or indexing change. noindex remains enabled.

Static invariants checked in the commit. Hosted route, image-load and browser E2E verification pending deployment. Owner review and public release approval pending.


## Validation correction — 2026-11-11

The first preview deployment for this candidate (`dpl_2XGv86EWnM5AfLeL3aHtXjQFc5uA`, commit `0c5ef28`) is **superseded and must not be shared**. It returned HTTP 200, but its application script inherited an extra closing brace in `systemArt()` from the earlier `1294634` candidate, so the inline JavaScript did not parse.

The extra brace is removed in this follow-up. Source-level inline-script parsing and the repository validator's static invariants (script count, project order, homepage mount/renderer, navigation handler and Laya route) pass. A new preview must be created from the corrected commit and checked independently before owner review.


## Corrected review deployment — 2026-11-11

- Corrected code commit: `f9cb2ce741258edebec73d136030c53c20f21517`.
- Vercel deployment: `dpl_DkZZvbcnN9V1AfjMR2JH4Qv4Jc4e` (`READY`, preview target).
- Preview URL: https://ai-product-portfolio-ojkrc4arr-yu-ac3a.vercel.app/
- Source inline JavaScript parse and repository static invariants: PASS.
- Hosted `/` and `/cases/laya/`: HTTP 200; deployment identity confirmed; noindex header and robots disallow confirmed.
- The five official VIVIC image paths exist at the pinned source commit. Actual browser image rendering, visual breakpoints and click E2E remain unverified.
- The previous `0c5ef28` / `dpl_2XGv...` preview is superseded due an inherited extra brace in `systemArt()`; it must not be shared.
- Temporary Vercel access-bypass link expires after 7 days; token is not stored in the repository.
- Owner review and public release approval remain pending.


## Owner correction — 2026-11-11

The later `ee6f8bd` / `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR` deployment is withdrawn. Its homepage hero violated a permanent owner content prohibition. The earlier record calling it the corrected review deployment is superseded by this correction. Preserve the commit/deployment only as immutable audit history; do not share it. The neutral heading from the recovery reference is restored, and the static validator now blocks the prohibited wording from public HTML. No owner review is requested until a new exact preview passes independent QA.


## Corrected internal QA deployment — 2026-11-11

- Website source commit: `62a551a3e375e77a9a22c7ddf78df74a973fbc94`.
- Vercel deployment: `dpl_GFJyeVg2nEk95KVN738sUxJ4Ueo3` (`READY`, preview target).
- Internal preview host: `https://ai-product-portfolio-ehxlktct8-yu-ac3a.vercel.app/` (SSO-protected; no owner share link generated).
- Source syntax, homepage project order, route invariants, hosted HTTP responses, deployment identity, noindex / robots and exact homepage source parity pass.
- Browser visual/click E2E, responsive viewport rendering and image rendering remain pending. This is not yet an owner-facing review candidate.
- The previous `ee6f8bd` deployment remains withdrawn and must not be shared.


## Additional historical deployment withdrawal

The earlier commit `84f8773f3eabe6e79806d4c884c15707cb07b783` produced Vercel deployment `dpl_6Jf7WMaV8rETHXAchZUKXtky7HQE` on `portfolio/phase3-content-review-2026-11-10`. Its hosted homepage contained owner-prohibited copy. Mark it WITHDRAWN and never share it. The later `1294634` source removed the wording; the immutable earlier deployment remains invalid for review.
