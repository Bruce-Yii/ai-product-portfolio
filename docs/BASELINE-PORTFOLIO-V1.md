# Portfolio v1 Baseline Freeze

> Status: FROZEN — do not edit or deploy from this branch.
> Freeze date: 2026-11-09 (Asia/Shanghai).

## Immutable production baseline

- Production domain: https://hcfind.com
- Production Vercel deployment: `dpl_DU86D71ntVNtihTr4spaUQZBXETr`
- Deployment state at freeze: `READY`
- Deployed source branch: `portfolio/modular-mainline-2026-11-09`
- Deployed source commit: `2349e1a7a6b873b45a10e56830ef09c6679edb1c`
- Frozen Git branch: `freeze/portfolio-v1-2026-11-09`
- Development branch: `portfolio/v2-information-architecture`
- Previous production deployment retained for rollback: `dpl_5uFv25CXDq8DkmD64NZMU7FHDvcK`

The frozen branch and the development branch were both created from the exact deployed source commit. GitHub compare verification returned `identical` for each branch against the production commit (0 ahead / 0 behind).

## v1 content and page structure

### Routes
- `/` — single-page portfolio with home, work index, case detail, and about views.
- `/cases/laya/` — standalone Laya casebook.

### Home page sequence
1. Personal positioning / hero.
2. Open-source contribution metrics (Laya).
3. Selected Work interactive showcase.
4. Beyond the casebook — selected upstream contribution index.
5. Another way in — browse by capability or all work.

### Work page
- Seven Case records.
- Browse by Work / Capability.
- Filters for product practice, open-source collaboration, and systems design.
- A separate public-contribution index.

### About page
- Background, working approach, GitHub contact.

### Content model already present in source
- `CASES`: seven Case records (Vivic, Agent Evaluation Lab, Agent Workflow Governance, Cherry Studio, dsh-market, Laya, Personal Context Layer).
- `VERIFIED_CONTRIBUTIONS`: project-level contribution entries.
- Laya has a separate eight-chapter casebook route.

## Baseline observations for v2

These are design observations, not changes to v1:

1. The home page gives disproportionate visual weight to Laya contribution metrics and the upstream contribution list; product/system projects are less discoverable.
2. Selected Work currently foregrounds Vivic, Laya, and Cherry Studio, while Agent Evaluation Lab, AWRP/Agent Workflow Governance, and Personal Context Layer are only discoverable deeper in the Work index.
3. Contribution collections appear in both the home page and the Work page. The distinction between a long-running Project, an independently presentable Case, and a verifiable Contribution is not sufficiently explicit in the navigation and page hierarchy.
4. The standalone Laya casebook is valuable and should remain a distinct flagship deep dive, but it should be connected more clearly to the broader portfolio rather than competing with it.
5. The public site contains editorial/review-state language and internal-source references in some case payloads. Before v2 production release, public-facing copy and evidence links must be reviewed so internal workflow notes are not exposed as portfolio content.
6. Current live checks confirmed homepage HTTP 200, Laya route HTTP 200, `www` redirect to root, and `noindex, nofollow, noarchive` remains enabled. This was an HTTP/content verification, not a full visual/responsive E2E review.

## v2 direction

Rebuild information architecture around the professional story, not around the repository's contribution inventory:

1. **Product & System Projects** — a first-class home section for representative product and system work: Vivic, Agent Evaluation Lab, AWRP / Agent Workflow Governance, Personal Context Layer, and selected additional product cases where evidence supports them.
2. **Open-source product collaboration** — Laya as the flagship casebook; other repositories grouped into project-level contribution records with links to Issues, PRs, reviews, design discussions, and merged outcomes.
3. **Capabilities & evidence** — capability dimensions supported by linked Projects, Cases, and Contributions; avoid unsupported self-ratings or vanity metrics.
4. **About & contact** — concise background and direct GitHub contact.

### Content object definitions
- **Project:** a sustained body of work or product initiative.
- **Case:** a coherent product problem and decision story that can stand on its own.
- **Contribution:** a traceable action or upstream outcome (Issue, PR, review, design discussion, implementation, handoff).
- **Evidence:** the source record supporting a claim.

A Project may contain multiple Cases; each Case may link to multiple Contributions and Evidence. A repository or PR count alone does not qualify as a standalone Case.

## Release constraints

- Do not modify `freeze/portfolio-v1-2026-11-09`.
- Do not deploy the development branch to production during exploration.
- Keep `hcfind.com` on the frozen v1 production deployment until a new version is reviewed and explicitly released.
- Preserve the standalone Laya casebook unless a deliberate migration is designed and checked for route compatibility.
- Keep search indexing disabled until the public content/evidence review is complete.
- Every preview iteration should be inspectable as a live preview URL or a self-contained HTML artifact.
- A v2 production release must be independently checked for content, visual hierarchy, mobile responsiveness, navigation, case links, Laya route compatibility, and robots/noindex behavior.

## Current work branch

`portfolio/v2-information-architecture`

All v2 design and implementation work starts here. The frozen branch is the rollback/source-of-truth baseline for v1.
