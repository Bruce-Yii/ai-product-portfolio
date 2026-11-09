# Portfolio v2 — Product-led Content Strategy & Implementation

## Decision baseline

This revision follows the user's confirmed portfolio scope from 2026-11-05 onward. Do not add projects merely because research material exists.

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

## Product-manager positioning and interview narrative

This portfolio is a job-search and interview artifact for AI Product Manager roles. Do not merely paraphrase technical activity in more polished engineering language. Reframe real work as product judgment and product delivery.

Strong Chinese résumé-style positioning and editorial packaging are explicitly allowed and expected: improve case names, select a stronger product framing, combine related Issues / PRs / Reviews / research / integration into a coherent case, and foreground user value, workflow change, reliability, cost, delivery efficiency, or product mechanisms. Do not leave a contribution looking like a bug-fix diary when a defensible product problem and product decision can be explained.

Every flagship case must support an interview narrative:
**user/scenario → problem and impact → product judgment → options and trade-offs → product mechanism and experience → execution and collaboration → validation/evidence → outcome, limits, and next iteration.**

The story should make clear what the owner personally decided, designed, drove, implemented, reviewed, or validated, and what was delivered by teammates or upstream maintainers. Use confident product language, not inflated facts. Do not fabricate roles, customers, adoption, revenue, release status, test results, or individual ownership. Distinguish internal test-set outcomes from real-user outcomes and merged contributions from shipped product behavior.

For short contributions, compress this into a product-problem headline, a one-paragraph mechanism/value explanation, and direct evidence links. Do not force every contribution into a long case study.

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
- Main-site content revision: `67b780176e6eb113dca62bdb6cffc54520281324` (workflow/context visual revision).
- Preview source commit including aligned documentation: `c2cd00a2798c483b59d779e881f7b508a2e45bc4`.
- V1 freeze branch: `freeze/portfolio-v1-2026-11-09`.
- Production aliases `hcfind.com` and `www.hcfind.com` remain on frozen V1 deployment `dpl_DU86D71ntVNtihTr4spaUQZBXETr` as last verified.
- No DNS or nameserver changes.
- Keep noindex enabled on review previews and the casebook until a separate release decision.
- Vercel Preview SSO protection is enabled for non-custom deployment URLs; owner-facing review uses the verified no-login share link delivered in chat.
- Do not promote this candidate to the production domain until the owner has reviewed the actual page and responsive behavior.

## Latest review deployment

- Deployment: `dpl_FW2yCXELaXPh74oUNW9p4Y2osbHC` · READY.
- Preview base URL: `https://ai-product-portfolio-59nq0wc6g-yu-ac3a.vercel.app`.
- A no-login share link was generated and verified; it expires 2028-11-08. The token is intentionally not stored in this public repository.
- Homepage and `/cases/laya/` both return HTTP 200 and retain `noindex, nofollow, noarchive`.
- Production aliases remain on frozen V1; no DNS, nameserver, or production alias changes were made.

## Verification

- Four main Case records map to four Case detail payloads.
- Three homepage Project cards map to VIVIC, AWRP × Linear, and Personal Context Keyboard.
- Laya remains a separate flagship casebook.
- Eight open-source contribution groups are present; Google ADK is explicitly not merged.
- Make Again 2.0, Agent Evaluation Lab, EvalScope, and standalone Cherry/dsh case pages are absent from public source.
- AWRP has a dedicated four-object workflow visual and a non-ranking AWRP / Linear × Notion / DeepSeek comparison.
- Personal Context Keyboard has a dedicated five-layer architecture visual.
- Inline JavaScript syntax parse: PASS.
- Full browser visual review and responsive E2E remain outstanding.


## Recruiter-first presentation and delivery contract

- The homepage is an entry point for hiring managers: establish role/value quickly, surface the strongest product cases, organize open-source work by product problem, connect capabilities to evidence, and provide a concise About/contact path.
- Use layered reading: roughly 10 seconds for a case card, 1 minute for a case summary, and 3–5 minutes for a deep case. The detail view should explain problem, judgment, trade-offs, mechanism, execution, evidence, role boundary, and learning.
- Preserve the Project / Case / Contribution / Evidence / Capability model. A repository or PR count is not automatically a product or a Case.
- Do not invent a new hero headline, brand slogan, project scope, or visual direction without an explicit owner decision. Existing approved positioning and current source implementation take precedence over unrelated conversations.
- Every website content, visual, layout, route, or interaction iteration must be deployed to a no-login Vercel Preview or a safely configured existing domain, then independently checked. A protected URL that requires the owner to log in is not sufficient.
- Deployment must be followed by real HTTP/page checks and desktop/mobile review. The actual working link and verification result belong in the completion report.
- Domain/DNS/Nameserver changes or cross-project production alias changes are separate routing operations; use a Vercel Preview instead unless the exact production change is explicitly authorized.
- Read [Portfolio Operating Contract](./PORTFOLIO-OPERATING-CONTRACT.md) for the binding cross-window workflow and acceptance criteria.
