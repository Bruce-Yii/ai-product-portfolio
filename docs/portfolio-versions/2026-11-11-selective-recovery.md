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
