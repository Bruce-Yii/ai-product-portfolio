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

**Homepage copy (2026-11-12 · expanded global-impact pass):**

> Laya 是 Convai Innovations 开源的多语言非自回归 System 1 决策引擎，支持 100+ 种语言，可在单次前向传播中对文本或结构化状态完成选择、评分与是/否判断，并返回结构化结果与概率。GitHub 仓库创建于 2026 年 9 月 18 日。
>
> 9 月下旬，Laya 在多个独立开源增长榜单中迅速冲到前列：Trendshift 全球与 Python 趋势榜连续四天第 1，GitTrend 第 39 周全球周增长榜第 1（单周新增约 2.23 万 Stars），OpenGithubs 9 月 Star 增长月榜第 3（+24,592）。Hacker News 主讨论截至 11 月 12 日达到 1,363 Points / 319 Comments。
>
> 关注随后延伸到 AI 模型平台与开发者基础设施：Startup Fortune 于 10 月 2 日报道 Laya 登上 Hugging Face Trending Models 榜首；Vercel AI Gateway 于 10 月 1 日正式提供 Laya 调用。独立社区目录收录 115 条生态记录（71 个 GitHub 项目记录、40 条 X 动态）。截至 11 月 12 日，GitHub 约 35.4K Stars / 3.17K Forks，Hugging Face 模型页约 65.9K Downloads / 5,948 Likes。

**Casebook impact module:**
- GitTrend Week 39 (2026-09-21 to 09-27): #1 weekly star growth, approximately +22.3K Stars.
- Trendshift: overall and Python tracked trending lists #1 for four consecutive days, 2026-09-20 to 09-23; 2026-09-22 daily peak +6,379 Stars.
- OpenGithubs September star-growth monthly list: #3, +24,592 Stars.
- GitTrend September star-growth monthly list: #8, approximately +29K Stars. Different third-party dataset and counting window; do not merge values.
- GitNova 2026-09-21 daily tracker: #1, +4,318 Stars, proprietary breakout magnitude 9.9 (not a model score).
- Hacker News launch thread: 1,363 points / 319 comments in the 2026-11-12 current read; separate 2026-09-27 archive snapshot was 1,349 / 316.
- Hugging Face Trending Models #1 on 2026-10-02 is reported by Startup Fortune; label it as a media report, not a preserved official HF historical leaderboard snapshot.
- Vercel AI Gateway: official Vercel changelog dated 2026-10-01; Laya available free for one month through 2026-10-31 via Boundless. This is a model-catalog / inference distribution listing, not a commercial partnership or endorsement.
- Independent community catalog Made with Laya: 115 curated records, consisting of 71 GitHub entries, 40 X posts, 2 sites, 1 skill and 1 resource. It explicitly says it is not affiliated with ConvAI Innovations and numbers are author-reported. Treat these as catalog records, not 115 products, installs or customers.
- Current snapshots on 2026-11-12: GitHub 35,408 Stars / 3,174 Forks; Hugging Face `convaiinnovations/laya` 65.9K downloads / 5,948 likes.
- A ModelScope studio listing for `laya-demo` appeared on 2026-09-20; the listing showed 5.3K / 123, but the current search result does not make the metric labels sufficiently clear. Do not use the numbers publicly.

**Decision-model benchmark research — internal interpretation:**
- No single official, industry-wide decision-model leaderboard was found. Distinguish repository growth rankings, model-hub trending lists, social discussion and model-quality benchmarks.
- S1MB community benchmark snapshot published 2026-09-30: 23 models completed 137 benchmarks, 14,009 cases and 26,269 judgments. Ranks: `laya-typed-decisions` 19/23; base `laya` 20/23; `laya-multilingual` 21/23. This is a community benchmark, not a standardized industry certification.
- A separate 2,000-decision typed-decisions suite lists the task-fine-tuned Laya checkpoint at #2 (0.714 → 0.762 after held-out calibration); base Laya is lower. The fine-tuned checkpoint was trained on that suite, so this is task-specific, not a universal zero-shot ranking.
- Public casebook includes a collapsed benchmark-context disclosure so a deep reader can distinguish popularity from model accuracy. Do not describe Laya as the world's best decision model or as #1 in model quality.
- The correct portfolio story is a global open-source / developer-community breakout and an emerging System One ecosystem, not a blanket claim of technical performance leadership.

**Source register:**
- Official upstream repository and current GitHub counters: https://github.com/NandhaKishorM/laya
- Trendshift daily ranking and historical snapshots: https://trendshift.io/repositories/244591
- GitTrend weekly W39: https://gittrend.io/weekly/2026-W39
- GitTrend September monthly list: https://gittrend.io/monthly/2026-09
- OpenGithubs September monthly star-growth list: https://github.com/OpenGithubs/github-monthly-rank/blob/main/2026/10.md
- GitNova 2026-09-21 daily ranking: https://gitnova.dev/en/day/2026-09-21
- Hacker News original launch thread: https://news.ycombinator.com/item?id=49765348
- Startup Fortune report about the Hugging Face Trending position: https://startupfortune.com/open-source-is-pulling-away-from-jev-laya-mukkunnoth/
- Official Vercel AI Gateway announcement: https://vercel.com/changelog/laya-decision-model-now-available-on-ai-gateway-free-through-october-31
- Independent community build directory and its non-affiliation / author-reported-data note: https://www.madewithlaya.com/
- Current Hugging Face model page: https://huggingface.co/convaiinnovations/laya
- S1MB 2026-09-30 benchmark snapshot: https://huggingface.co/blog/hotchpotch/system-one-mosaic-benchmark
- Typed-decisions 2,000-decision benchmark: https://metatext.ai/system-one/typed-decisions-benchmark
- ConvAI's own Laya demo Space and its 2026-09-24 historical likes snapshot: https://systemonemodels.org/examples/tools/laya-demo/

**Claim boundaries / do not publish:**
- Trendshift, GitTrend, OpenGithubs and GitNova are independent third-party trackers; never call their rankings official GitHub Trending rankings.
- Different star-growth platforms use different windows and algorithms; do not add their counts together or treat the ranks as directly comparable.
- Hugging Face Trending #1 is a contemporaneous media report; no preserved official dated HF leaderboard screenshot was located.
- Vercel AI Gateway listing is not evidence of partnership, endorsement or customer adoption.
- Made with Laya's 115 records are catalog entries, not unique products, downloads, active users or customers.
- A prior 1,008-vote Reddit claim was not verified. The located r/LocalLLaMA post showed 54 votes; do not publish 1,008.
- A DeAI article's "87 X posts in six hours" claim relied on a Grok sweep and was not independently reproducible; do not use.
- A third-party X post showing a Laya Tetris demo was listed at 112.2K views / 627 likes / 61 reposts on laya.tools; X itself returned 403 in this research pass. Keep this out of headline copy unless the original post metrics can be rechecked.
- GitHub repository creation date is 2026-09-18; do not conflate it with a definitively verified public-release date.

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
