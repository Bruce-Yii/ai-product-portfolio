# Portfolio v2 — Product-led Content Strategy & Implementation

## Decision baseline

This revision follows the user's confirmed portfolio scope from 2026-11-05 onward. Do not add projects merely because research material exists.

### Selected product work

- **Personal Context Keyboard** — personal project; Android-first with Windows as a target. The keyboard is a high-frequency Sensor, while the user-controlled Context Layer is the product core. The current implementation has substantial Android IME and Local-first Context Core capability and is near completion; do not describe it as an early simulator-only project.
- **VIVIC** — multimodal Agent product; focus on the user intent → model decision → host validation → tool execution → result receipt chain.
- **AWRP × Linear** — one Agent workflow product-design case, grounded in the historical AWRP protocol and the current Linear × Notion workflow. DeepSeek Super-agent is a third-party architecture comparison object, not a personal project or contribution.
- **Laya** — separate flagship open-source casebook. Keep the existing dedicated visual treatment and route at `/cases/laya/`.

### Unified open-source contribution index

Show these as repository-level contribution groups, not standalone flagship projects:

1. OpenClaw
2. Dify
3. RAGFlow
4. Cherry Studio
5. QwenPaw
6. FunASR
7. dsh-market

Laya remains its own flagship casebook. Google ADK's unmerged RFC / tests-only Draft is retained as internal research evidence and is excluded from the current public showcase.

### Explicit exclusions and classification

- Remove **Make Again 2.0** and **Agent Evaluation Lab** from the public portfolio.
- Do not add **EvalScope** as an extra project.
- Cherry Studio and dsh-market are contribution groups, not standalone main-site Case pages.
- Do not present a repository, a PR count, or a technical Spike as a standalone product merely to increase project count.

## Information architecture

### Home

1. Hero — AI Product Manager positioning and product-to-delivery proposition.
2. Selected product work — three cards in the approved order: Personal Context Keyboard, VIVIC, AWRP × Linear.
3. Laya flagship — existing dedicated casebook treatment retained.
4. Selected open-source contributions — seven selected upstream groups; unmerged Google ADK research is excluded from the public showcase.
5. Capabilities & evidence — four evidence-linked dimensions.
6. About.

### Work

- Three selected Project cards.
- Four main Case records: Laya, Personal Context Keyboard, VIVIC, AWRP × Linear.
- Unified contribution index for the seven selected public open-source groups.
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

- Story: after taking over an existing multimodal card assistant, drive the Agent decision-chain refactor from a multi-owner planning path into one verifiable product execution loop.
- Personal role: core project collaborator responsible for problem framing, product/architecture judgment, task decomposition and acceptance; coordinate Agent/team implementation and delivery. Do not claim all team/Agent code as individually authored.
- Core decision: deterministic rules handle exact formats; the model owns semantic/tool/target selection; the host owns permission, Schema and target validation plus real execution; structured ToolIssue returns repairable failures; final speech follows the actual execution receipt.
- Key trade-off: remove experimental 4B routing, slot planner, local classifier, directOperations and duplicate business-decision paths instead of adding another Agent or more tools.
- Evidence: the 60-item API regression baseline was 53/60; the 2026-11-05 deployment report snapshot was 59/60, and six subsequent same-set rounds recorded 58/60, 59/60, 60/60, 60/60, 59/60 and 60/60. API request-to-final-result p50 moved from 3,625ms to 1,807ms; estimated per-turn token cost fell about 97% under high-cache-hit conditions (not an actual billing comparison); tool entry points were consolidated from 27 to 14. These are internal team records, not real-user or commercial outcomes.
- Boundary: backend deployment and API regression are recorded; frontend remained on the 11-03 release, 48 browser scenarios were not rerun, real-device voice and end-to-end user experience remain unverified. Public-display permission and commit-level personal authorship still require separate confirmation.
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
- Current maturity: substantial Android IME, input, context-store, recovery, UI and regression implementation is recorded; the owner confirmed the project is near completion on 2026-11-10. Formal product acceptance and some external device / platform / release gates remain separate. Do not revert to the obsolete 'early simulator prototype' description or claim a formal public release.

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


## Contribution mini-case presentation

Google ADK's unmerged RFC / tests-only Draft remains internal research and is excluded from the current public showcase. The unified open-source contribution index is not a PR leaderboard and must not become a set of unrelated standalone project pages. Each selected upstream group is a compact product mini-case with four parts:

1. **Product problem** — the user/developer task or workflow that failed.
2. **Product judgment** — the rule, state, boundary, or experience decision that addresses the root problem.
3. **Actual change** — what the merged PRs or current proposal really changed; distinguish behavior fixes from test-only additions.
4. **Evidence and status** — direct upstream links, selected PR count, merged/open/draft state, and explicit non-shipping boundaries.

The homepage keeps the contribution index compact. The Work page adds the fuller problem → decision → change narrative so a recruiter can understand the product value without opening a separate page for every repository. Dify and other upstream repositories remain grouped contribution entries, not standalone Case pages.

## Current source and release boundary

- Development branch: `portfolio/v2-information-architecture`.
- Current website source and aligned documentation commit: `a54baf3aad04510d7be14b2784a4d0b238b9b310`.
- Current website source includes three selected Project cards, four Case records, one standalone Laya casebook, and seven selected public open-source contribution groups. Google ADK's unmerged proposal is excluded from the public showcase.
- V1 freeze branch: `freeze/portfolio-v1-2026-11-09`.
- Production aliases `hcfind.com` and `www.hcfind.com` remain on frozen V1 deployment `dpl_DU86D71ntVNtihTr4spaUQZBXETr` as last verified.
- No DNS or nameserver changes.
- Keep noindex enabled on review previews and the casebook until a separate release decision.
- Vercel Preview SSO protection is enabled for non-custom deployment URLs; owner-facing review uses a verified no-login share link delivered in chat.
- Do not promote this candidate to the production domain until the owner has reviewed the actual page and responsive behavior.

## Latest review deployment

- Deployment: `dpl_GHTydoCyYeMk6iWt8dJ8M9APquCN` · READY.
- Preview base URL: `https://ai-product-portfolio-eo95g4txp-yu-ac3a.vercel.app`.
- A no-login share link was generated and verified on 2026-11-09; its token is intentionally not stored in this public repository.
- Homepage and `/cases/laya/` both return HTTP 200 and retain `noindex, nofollow, noarchive`.
- Production aliases remain on frozen V1; no DNS, nameserver, or production alias changes were made.

## Verification

- Four main Case records map to four Case detail payloads.
- Three homepage Project cards map to Personal Context Keyboard, VIVIC, and AWRP × Linear.
- Laya remains a separate flagship casebook.
- Seven selected public open-source contribution groups are present; Google ADK's unmerged research is excluded from the public showcase.
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


## 2026-11-09 · Product narrative audit and correction

The previous pass changed technical vocabulary but retained an implementation-first narrative. New order: user task → friction/adoption barrier → product opportunity → judgment/trade-off → user outcome → evidence and maturity boundary.

- VIVIC: user journey from expressing a need to confirming task completion.
- AWRP × Linear: project continuity across windows, Agents, handoffs, and waiting periods; not a shipped SaaS.
- Personal Context: reuse personal context across AI tools while retaining user ownership, correction, deletion, and authorization.
- Laya: developer adoption journey—understand model behavior, judge evidence, control rollout, and receive consistent behavior across interfaces.
- Open-source index: public project name + Bruce's own product contribution; never a generic project description.
