# Portfolio v2 — Product-led Content Strategy & Implementation

## Decision baseline

This revision follows the user's confirmed portfolio scope from 2026-11-05 onward. Do not add projects merely because research material exists.

## Visual direction

- The homepage hero uses the owner-requested headline: **“我是最强 AI 产品经理。”**
- The main-site base palette has moved away from the former beige/cream background to a clean cool-white and blue-gray neutral palette; the oxide-red accent is retained.
- Preserve the current information architecture and card layout. The Laya casebook is a separate visual system and remains unchanged.

### Selected product work

- **VIVIC** — multimodal Agent product; focus on the user intent → model decision → host validation → tool execution → result receipt chain.
- **AWRP × Linear** — one Agent workflow product-design case, grounded in the historical AWRP protocol and the current Linear × Notion workflow. DeepSeek Super-agent is a third-party architecture comparison object, not a personal project or contribution.
- **Personal Context Keyboard** — product architecture case; the keyboard is a high-frequency Sensor, while the user-controlled Context Layer is the product core.
- **Laya** — separate flagship open-source casebook. Keep the existing dedicated visual treatment and route at `/cases/laya/`.

### Unified open-source contribution index

Show these as repository-level contribution groups, not eight independent flagship projects:

1. OpenClaw
2. Dify
3. RAGFlow
4. Cherry Studio
5. QwenPaw
6. FunASR
7. dsh-market
8. Google ADK — explicitly marked RFC / tests-only Draft / **not merged**.

Laya remains its own flagship casebook and is also linked from the contribution index.

### Explicit exclusions and classification

- Remove **Make Again 2.0** and **Agent Evaluation Lab** from the public portfolio.
- Do not add **EvalScope** as an extra project.
- Cherry Studio and dsh-market are contribution groups, not standalone main-site Case pages.
- Do not present a repository, a PR count, or a technical Spike as a standalone product merely to increase project count.

## Information architecture

### Home

1. Hero — AI Product Manager positioning and product-to-delivery proposition.
2. Selected product work — three cards: VIVIC, AWRP × Linear, Personal Context Keyboard.
3. Laya flagship — existing dedicated casebook treatment retained.
4. Selected open-source contributions — eight explicitly selected ecosystems; merged work and unmerged research are visibly distinguished.
5. Capabilities & evidence — four evidence-linked dimensions.
6. About.

### Work

- Three selected Project cards.
- Four main Case records: Laya, VIVIC, AWRP × Linear, Personal Context Keyboard.
- Unified contribution index for the eight open-source ecosystems.
- Case is the primary storytelling unit; a Project may contain multiple Cases. A repository is not automatically a Project or Case.

## Product-language standard

Every major case should answer, in this order:

1. **User and job** — who is trying to do what?
2. **Product problem** — where does the existing experience fail?
3. **Product question** — what must the system guarantee?
4. **Decision and trade-off** — what was chosen, what was rejected, and why?
5. **Mechanism** — how the product behavior works, in plain language.
6. **Outcome and evidence** — what actually changed and what can be verified?
7. **Personal role and boundary** — what Bruce did, what teammates/upstream owners did, and what is not yet proven.

Do not lead with technology names, PR counts, or internal workflow vocabulary. Technical detail supports the product story; it does not replace it.

## Case presentation

### VIVIC

- Story: make a user's multimodal intent turn into a correctly authorized, executed, and acknowledged action.
- Core decision: model owns semantic selection; host owns permission/parameter validation and real execution; the system returns a truthful receipt or explicit failure.
- Evidence: fixed 60-item API regression and backend deployment records; 53/60 → 59/60 and p50 3,625ms → 1,807ms are internal test-set results, not real-user success metrics.
- Boundary: full front-end experience, 48 browser scenarios, and real-device voice remain unverified.

### AWRP × Linear

- Story: long-running work must survive changing Agents and Sessions.
- Core abstraction: Task identity ≠ Run/Session; Agent self-report ≠ acceptance; evidence comes from GitHub, CI, artifacts, and external systems.
- Current workflow: Linear manages execution state; Notion holds durable project semantics and decisions; GitHub is code/upstream truth.
- DeepSeek Super-agent: public third-party comparison reference only; no superiority ranking.
- Boundary: historical AWRP has protocol/code/test practice; the current workflow uses mature third-party tools; no standalone Agent Project OS has shipped.

### Personal Context Keyboard

- Story: personal facts, preferences, and task context should not be trapped inside one app or AI conversation.
- Product definition: keyboard is a Sensor, not the Context Core.
- Architecture: authorized capture → traceable Raw Facts → rebuildable Derived Context → user confirmation/control → scoped AI Gateway.
- Boundary: product definition, architecture, and early simulator prototype; not a released cross-platform product.

### Laya

- Keep the standalone Laya casebook visual system and eight-chapter editorial treatment.
- Keep the distinctions between authored PRs, merged PRs, and reviewed-by query matches.
- Do not claim official maintainer/collaborator status or turn GitHub activity into product KPIs.

## Open-source contribution language

Contributions are grouped by the product problem they improve, with the source PRs remaining individually traceable:

- OpenClaw — predictable setup, credentials, diagnostics, and recovery.
- Dify — preserve source semantics during knowledge import and data handling.
- RAGFlow — consistent semantics across Agent handoff, knowledge parsing, and model configuration.
- Cherry Studio — make model diagnosis and content input follow user intent.
- QwenPaw — preserve fast path input while supporting multi-directory workspaces.
- FunASR — align speech timestamps with utterance and punctuation boundaries.
- dsh-market — let users dismiss an exception notice without pretending the plugin is repaired.
- Google ADK — investigate partial/final event semantics; RFC and tests-only Draft are not merged.

## Current source and release boundary

- Development branch: `portfolio/v2-information-architecture`.
- Current website source commit (Preview): `34c7bca6f389be2fc32a443ca1b96552386aa50c`.
- The branch contains subsequent documentation-only commits; no website source changes were made after the deployed Preview commit.
- V1 freeze branch: `freeze/portfolio-v1-2026-11-09` at `2349e1a7a6b873b45a10e56830ef09c6679edb1c`.
- V1 remains the rollback baseline; the default `main` branch is an older snapshot and must not be used as the current release source.
- V2 is deployed only as a protected Preview; no production alias, custom domain, DNS, or search-indexing change has been made.
- Vercel automatic push-to-deploy is not verified. The current Preview was explicitly created from the exact GitHub branch and commit.
- Current public custom-domain mapping: `hcfind.com` and `www.hcfind.com` are attached to Vercel project `hcfind-home`, deployment `dpl_4CAprhY16boHWmPnKgQwqyToDHzx`. The separate `ai-product-portfolio` project has production deployment `dpl_DU86D71ntVNtihTr4spaUQZBXETr` on its own Vercel aliases, not the custom domain.
- The live custom domain and the V1 project alias returned byte-identical HTML at the 2026-11-09 audit; both serve the old seven-Case V1 content. The domain/project ownership mismatch must be resolved deliberately at release, not during preview work.
- Keep noindex enabled on review previews and the casebook until a separate release decision.

## Latest review deployment

- Deployment: `dpl_6vjtXdz4UeurPGxFgMxEwRL7wauJ` · READY · Preview.
- Source commit: `34c7bca6f389be2fc32a443ca1b96552386aa50c`.
- Preview URL: `https://ai-product-portfolio-rn06syrk1-yu-ac3a.vercel.app`.
- Build log confirms the intended GitHub branch and commit were cloned and the static deployment completed.
- Homepage and `/cases/laya/` both return HTTP 200 and retain `noindex, nofollow, noarchive`.
- `robots.txt` returns HTTP 200 with crawler access blocked.
- A temporary no-login share link was generated for owner review; its token is not stored in the repository.
- Production aliases and DNS were not changed.

## Verification

- Four main Case records map to four Case detail payloads.
- Three homepage Project cards map to VIVIC, AWRP × Linear, and Personal Context Keyboard.
- Laya remains a separate flagship casebook.
- Eight open-source contribution groups are present; Google ADK is explicitly not merged.
- Make Again 2.0, Agent Evaluation Lab, EvalScope, and standalone Cherry/dsh case pages are absent from public source.
- AWRP has a dedicated four-object workflow visual and a non-ranking AWRP / Linear × Notion / DeepSeek comparison.
- Personal Context Keyboard has a dedicated five-layer architecture visual.
- Inline JavaScript syntax parse: PASS.
- Hero headline and cool-white neutral palette match the current owner direction.
- Full browser visual review and responsive E2E remain outstanding.
