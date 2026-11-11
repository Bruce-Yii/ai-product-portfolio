# Portfolio Selective Recovery Candidate v1

> Status: review candidate; not an owner-frozen release. Date: 2026-11-11.  
> Reference baseline: `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae`.  
> Selectively reviewed source: `1294634512a87c383e5ed3aedf8b85b460103801`.

## Binding scope
- Homepage order: Personal Context Keyboard → VIVIC → AWRP × Linear. Laya remains a separate flagship casebook.
- No new public project, case, navigation item or homepage project. Recruitment OS remains HOLD; supporting cases are not promoted.
- Preserve the reference site's visual language and routes. No full-site redesign, DNS, domain alias, production or indexing change. Keep noindex.
- This file is the content source for the embedded case data in `index.html`; the static site has no generator.

## Homepage hero
- Preserve the neutral professional positioning from the recovery reference: `AI Product Manager.`.
- No slogan, self-evaluation, superlative, temporary test copy or headline inferred from historical chat is authorized.
- Any future hero wording change requires explicit current-turn owner approval; otherwise retain the approved neutral baseline.

## Personal Context Keyboard
**Card:** PERSONAL PROJECT · ANDROID / WINDOWS  
**Summary:** 以输入作为高频信息入口，将原始事实、事件与长期上下文组织为用户可追溯、可修订、可授权使用的个人 Context，让不同 AI 工具能够在用户控制下复用这些信息。  
**Stage:** Android 主体实现接近完成；正式产品验收与部分平台 Gate 待完成。

- Public implementation and evidence repository: https://github.com/Bruce-Yii/personal-context-keyboard

- Android emulator baseline on 2026-11-10: 80 tests / 0 fail / 0 error / 1 skip; the skipped item is the ignored `VoiceStoreInstrumentedTest` class.
- Separate 47-item full keyboard regression NOT_RUN; formal product acceptance 0; GQ NOT_RUN.
- Real device, real microphone end-to-end, arm64 runtime, Windows TSF real insertion, production signing and store publication remain outstanding.
- Target architecture must not be presented as if every layer has shipped. Android IME, Chinese input, voice/ASR file path, Context Store/Recovery, Today/Smartbar, clipboard, personal dictionary, backup/restore and packaging have implementation evidence.
- Do not call it an early prototype or a formally released / fully device-qualified product.

## VIVIC
**Card:** TEAM PRODUCT · MULTIMODAL AGENT  
**Summary:** 团队打造的多模态卡片助理，支持语音与文本交互。我在比赛中与团队相识，赛后受邀加入，并接手既有产品的体验与 Agent 决策链路优化。  
**Stage:** 赛后加入并持续优化；后端部署与专项回归已有记录。苏客松生活办公赛道第四名是团队成绩。

- Old stable version: 53/60 on the fixed 60-item API set.
- 2026-11-05 online deployment report: 59/60 on the same fixed API set; do not substitute local 60/60.
- API request-to-final-result p50: 3,625ms → 1,807ms.
- Tool surface: 27 intermediate card-type tools consolidated into 14 capability-oriented tools. 27 is an intermediate refactor state, not the old stable baseline.
- New version unit-test report: 2,859 total; 2,848 passed, 8 pre-existing baseline failures, 3 skipped. 48 browser scenarios were not rerun.
- No real-user success rate, retention, commercial ROI or external notification delivery result is claimed. Keep team and personal attribution separate.
- Official images were captured on 2026-10-17 and are pinned to upstream commit `9b8665a0b62a17e0eef94c403f2c2c583d484330`. Historical private captures from 2026-11-01 are documented separately and are not screenshots of the 2026-11-05 backend release.
- Public portfolio publication remains gated on team showcase permission and privacy review.

## AWRP × Linear
**Card:** AGENT WORKFLOW · PRODUCT DESIGN  
**Summary:** 从 ChatGPT 手机/网页端与本地 Agent 的协同问题出发，先做 AWRP 接力原型，再把真实工作流落到 Linear × Notion × GitHub，并据此设计 Project-first Agent OS。  
**Stage:** AWRP 原型已执行；Linear × Notion 工作流在用；Agent Project OS 设计阶段 GO，代码未开始。

- AWRP is a historical task-handoff protocol and code prototype. Public-safe source snapshot: https://github.com/Bruce-Yii/awrp
- Linear × Notion × GitHub is the current real workflow: execution state, long-term semantics, code/live truth.
- Agent Project OS is separate product design. G0–G2 docs are complete on Draft PR #1 (open/unmerged); G3–G5 not started; no product code started.
- DeepSeek Super-agent is a third-party reference, not personal implementation.
- The current workflow diagram must not present AWRP as the active production task system.

## Laya metrics
- Public headline: 40 personally authored PRs merged upstream.
- Separate metric: 10,394 additions summed across the full authored PR diff set, including implementation, tests, evaluation tooling and docs. This is not the net additions of the 40 merged PRs.
- Do not use 47 authored / 85 reviewed-by query counts as public headline metrics. Do not claim official maintainer or co-author status.

## Reused improvements / exclusions
- Keep restrained case-page typography and explanatory PCK/AWRP diagrams where useful.
- Pin official VIVIC images to the immutable source commit and retain capture provenance.
- Preserve the Laya standalone casebook and corrected metric distinction.
- Restore delivery-state labels and validation boundaries.
- No new projects, routes, navigation, homepage reorder, DNS, root-domain, production alias or search indexing change.
