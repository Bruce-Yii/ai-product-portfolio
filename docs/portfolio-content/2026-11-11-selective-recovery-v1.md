# Portfolio Selective Recovery Candidate v1

 > Status: internal evidence and content reference. Date: 2026-11-11.  
> Public-facing copy follows docs/PORTFOLIO-CONTENT-RULES.md and section 1.6 of docs/PORTFOLIO-OPERATING-CONTRACT.md.  
> This file retains detailed factual, QA, attribution, and release notes for internal review. These notes are not public copy and must not be pasted into recruiter-facing pages.

## Binding scope
- Homepage order: Personal Context Keyboard → VIVIC → AWRP × Linear. Laya remains a separate flagship casebook.
- No new public project, case, navigation item or homepage project. Recruitment OS remains HOLD; supporting cases are not promoted.
- Preserve the reference site's visual language and routes. No full-site redesign, DNS, domain alias, production or indexing change. Keep noindex.
- This file is the content source for the embedded case data in `index.html`; the static site has no generator.

## Homepage hero
- Preserve the neutral professional positioning from the recovery reference: `AI Product Manager.`.
- No slogan, self-evaluation, superlative, temporary test copy or headline inferred from historical chat is authorized.
- Any future hero wording change requires explicit current-turn owner approval; otherwise retain the approved neutral baseline.

## Internal factual notes — keep out of public copy

The following details support internal fact-checking, engineering review, and release decisions. Recruiter-facing copy should select only the strongest completed product work and outcomes.

## Personal Context Keyboard
**Card:** PERSONAL PROJECT · ANDROID-FIRST / WINDOWS TARGET  
**Summary:** 以输入法为第一个高频入口，把分散输入沉淀为可追溯、可修订、由用户掌控的个人上下文，并按授权提供给不同 AI 工具。  
**Stage:** Android 核心模块已实现 · Local-first Context Core 已落地。

- Public implementation and evidence repository: https://github.com/Bruce-Yii/personal-context-keyboard

- Android emulator baseline on 2026-11-10: 80 tests / 0 fail / 0 error / 1 skip; the skipped item is the ignored `VoiceStoreInstrumentedTest` class.
- Separate 47-item full keyboard regression NOT_RUN; formal product acceptance 0; GQ NOT_RUN.
- Real device, real microphone end-to-end, arm64 runtime, Windows TSF real insertion, production signing and store publication remain outstanding.
- Implemented Android scope: IME, Chinese input, voice/ASR file path, Context Store/Recovery, Today/Smartbar, clipboard, personal dictionary, backup/restore and packaging.
- Internal release facts: real-device, arm64, Windows TSF, production signing and store publication are tracked as separate engineering gates. These facts guide internal claims review and stay out of public case copy.

## VIVIC
**Card:** TEAM PRODUCT · MULTIMODAL AGENT  
**Summary:** 团队打造的多模态卡片助理，支持语音与文本交互。我在比赛中与团队相识，赛后受邀加入，并接手既有产品的体验与 Agent 决策链路优化。  
**Stage:** 赛后受邀加入团队，持续推进 Agent 决策链路优化；后端部署与固定题集回归已有记录。苏客松生活办公赛道第四名是团队成绩。

- Old stable version: 53/60 on the fixed 60-item API set.
- 2026-11-05 online deployment report: 59/60 on the same fixed API set; do not substitute local 60/60.
- API request-to-final-result p50: 3,625ms → 1,807ms.
- Tool surface: 27 intermediate card-type tools consolidated into 14 capability-oriented tools. 27 is an intermediate refactor state, not the old stable baseline.
- New version unit-test report: 2,859 total; 2,848 passed, 8 pre-existing baseline failures, 3 skipped. 48 browser scenarios were not rerun.
- Team and personal attribution are tracked separately in the internal evidence record. Public copy focuses on the product experience and the owner's work within the team.
- Official images were captured on 2026-10-17 and are pinned to upstream commit `9b8665a0b62a17e0eef94c403f2c2c583d484330`. Historical private captures from 2026-11-01 are documented separately and are not screenshots of the 2026-11-05 backend release.
- Public portfolio publication remains gated on team showcase permission and privacy review.

## AWRP × Linear
**Card:** AGENT WORKFLOW · PRODUCT DESIGN  
**Summary:** 从 ChatGPT 与本地 Agent 的接力问题出发，先实现 AWRP 原型，再将真实项目治理落到 Linear × Notion × GitHub，并据此形成 Project-first Agent OS 设计。  
**Stage:** AWRP 原型已执行；Linear × Notion × GitHub 工作流在用；Agent Project OS 完成 G0–G2 产品与工程设计。

- AWRP is a historical task-handoff protocol and code prototype. Public-safe source snapshot: https://github.com/Bruce-Yii/awrp
- Linear × Notion × GitHub is the current real workflow: execution state, long-term semantics, code/live truth.
- Agent Project OS is a separate product-design track. Internal progress record: G0–G2 design documents completed; subsequent gates are tracked in the development plan.
- Architecture inputs include DeepSeek Super-agent's event triggers, authorization, task assignment, and recovery patterns.
- Current operating workflow: Linear × Notion × GitHub.

### Deep-case narrative
- **Problem:** ChatGPT on mobile/web is used for research and task definition; local Coding Agents execute on the computer. Chat-only handoff scatters project context, repeats explanations across windows, and makes parallel execution and result review hard to coordinate.
- **Product decision:** separate long-lived project identity, task boundaries, one execution attempt and its evidence. Keep the interactive object model available for deep readers, but explain the user-facing value before naming protocol objects.
- **Experience framing:** Project retains goals/decisions; Task defines owner, scope, dependencies and acceptance; Run records one Agent attempt; Event / Artifact retain execution changes and verifiable outputs.
- **Outcome framing:** projects continue across windows; tasks have explicit responsibility and acceptance; execution is traceable; results return to one project history. Linear × Notion × GitHub remain the real current workflow, while Agent Project OS is a separate next-step design.

## Laya metrics
- Public headline: 40 personally authored PRs merged upstream, organized into four product systems and eight selected product stories.
- Keep 10,394 additions as a secondary deep-case metric only; it is summed across the full authored PR diff set, including implementation, tests, evaluation tooling and docs, and is not the net additions of the 40 merged PRs.
- Do not use 47 authored / 85 reviewed-by query counts as public headline metrics. Do not claim official maintainer or co-author status.

## Reused improvements / exclusions
- Keep restrained case-page typography and explanatory PCK/AWRP diagrams where useful.
- Pin official VIVIC images to the immutable source commit and retain capture provenance.
- Preserve the Laya standalone casebook and corrected metric distinction.
- Restore delivery-state labels and validation boundaries.
- No new projects, routes, navigation, homepage reorder, DNS, root-domain, production alias or search indexing change.
