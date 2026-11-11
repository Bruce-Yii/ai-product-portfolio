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

## Laya public introduction

**Homepage copy (2026-11-12):**

> Laya 是 Convai Innovations 开源的多语言非自回归 System 1 决策引擎，支持 100+ 种语言，可在单次前向传播中对文本或结构化状态完成选择、评分与是/否判断，并返回结构化结果与概率。它于 2026 年 9 月 18 日开源后迅速走红：Trendshift 总榜连续四天第 1，GitTrend 周榜第 1、单周新增约 2.23 万 Stars，OpenGithubs 9 月 Star 增长月榜第 3；截至 11 月 10 日，已有 35,341 Stars、3,170 Forks，Hacker News 讨论在 9 月 27 日快照中达到 1,349 points / 316 comments。

**Compact popularity note:** OpenGithubs 9 月 Star 增长月榜第 3；Hacker News 讨论在 2026-09-27 的历史快照为 1,349 points / 316 comments。

**Source register and interpretation:**
- Official repository description and model scope: https://github.com/NandhaKishorM/laya
- Repository creation date, exact 2026-11-10 snapshot (35,341 Stars / 3,170 Forks): https://rising.dev/gh/NandhaKishorM/laya/ (snapshot at 2026-11-10 15:13 UTC)
- Trendshift daily ranking: https://trendshift.io/repositories/244591 (overall rank #1 on 2026-09-20 through 2026-09-23; this is Trendshift's tracked ranking, not an official GitHub ranking)
- GitTrend weekly ranking: https://gittrend.io/weekly/2026-W39 (rank #1 among its tracked weekly repositories; approximately 22.3K Stars gained during 2026-09-21 to 2026-09-27)
- OpenGithubs September monthly star-growth ranking: https://github.com/OpenGithubs/github-monthly-rank/blob/main/2026/10.md (rank #3; +24,592 Stars)
- Hacker News discussion: https://news.ycombinator.com/item?id=49765348; historical count snapshot: https://www.hunteralphahub.com/laya/threads (1,349 points / 316 comments as of the 2026-09-27 snapshot)
- Vercel AI Gateway announcement: https://vercel.com/changelog/laya-decision-model-now-available-on-ai-gateway-free-through-october-31 (2026-10-01)

**Claim boundaries:** Trendshift, GitTrend and OpenGithubs are separate third-party ranking datasets; do not describe their ranks as an official GitHub Trending placement. The Hacker News and Stars/Forks figures are dated snapshots, not live counters.

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
