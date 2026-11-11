# 作品集项目执行合同（长期规则）

> 由项目负责人于 2026-11-09 明确确认。适用于所有后续 ChatGPT 窗口、Agent 和协作者。  
> 本文件是跨窗口的执行依据；接手者必须先读，不得依赖旧聊天猜测。

## 0. 总目标

作品集是面向 AI 产品经理招聘与面试的产品化展示，不是项目仓库目录、技术简历复刻或 PR 排行榜。

每轮工作必须同时满足三项要求：

1. **产品经理表达**：把真实经历整理成招聘方能理解、能追问、本人能完整讲述的产品案例。
2. **内容呈现架构**：让招聘方快速理解定位、选择案例、看懂决策与结果，并能追溯证据。
3. **可查看交付**：每轮网站优化后部署到线上可查看版本，并验证实际页面。

## 1. 产品经理语言、包装与面试闭环

### 1.1 适用范围

需要产品化表达的经历不限于传统产品工作，包括 Issue、PR、代码审查、设计讨论、Bug 修复、兼容性处理、性能优化、测试与 CI、架构研究、竞品拆解、技术选型、模块复用、Agent 工作流、工具调用、权限边界、状态管理、产品定义、项目推进、跨团队协作和复盘。

不要机械写成“修复某 Bug”“提交某 PR”“使用某技术栈”。先识别这项工作改变了什么产品行为、用户体验、业务流程、交付效率、可靠性或维护成本，再决定标题和讲述方式。

### 1.2 允许并鼓励积极的简历包装

中国简历市场中的合理包装、润色和价值提炼是明确允许的，不要因为过度保守，把有产品价值的经历写成普通开发流水账。

允许：
- 重写案例标题、项目定位和成果表达，使其更符合 AI 产品经理岗位；
- 从用户价值、业务流程、产品机制、体验质量、交付效率和可靠性角度重新组织技术经历；
- 将相关 Issue、PR、Review、研究和集成组合成一个完整的产品问题案例；
- 把技术实现提炼为产品判断、关键机制、方案取舍和落地能力；
- 突出本人做过的判断、设计、推动、协调、审查和验证，不必沿用上游仓库的技术命名；
- 对有依据的实践进行有力度的表达，不必把技术贡献原样翻译成技术语言。

包装是表达策略，不是事实造假。不得虚构职位、团队身份、客户、用户规模、商业收入、上线状态、个人独立完成范围或实验结果。指标需说明口径、样本、时间和验证环境；团队成果需说清个人承担的部分。

### 1.3 重点案例必须能在产品经理面试中讲成闭环

默认叙事链：

**场景与目标用户 → 问题与影响 → 问题定义和产品判断 → 方案选择与取舍 → 产品机制和用户体验 → 推动执行与协作 → 验证证据和结果 → 复盘与下一步。**

面试官应能听明白：
- 谁在什么场景下遇到什么问题，问题为什么重要；
- 本人如何识别根因、定义目标、判断优先级；
- 为什么选择这个方案，放弃了什么方案；
- 产品或系统的关键机制如何工作，异常和边界如何处理；
- 本人具体做了什么，如何推动其他人或系统完成；
- 结果如何验证，证据是什么，仍有哪些限制。

短贡献可以压缩成“产品问题标题 + 机制/价值说明 + 原始证据”；重点案例必须足以支撑连续追问。不要为了套模板而写成长篇 PRD。

### 1.4 表达与证据规则

- 标题优先表达产品问题、机制或用户价值，不直接照搬 PR 标题。
- 先讲用户/产品问题和关键判断，再讲技术实现。
- 技术细节用于证明方案可行和技术理解，不替代产品主叙事。
- 明确区分本人负责、团队共同完成、上游维护者完成。
- 明确区分提案、研究、原型、内部验证、PR 合并、正式发布和生产使用。
- PR、Issue、代码、Review 和测试链接用于证明贡献，不让编号和数量代替成果。
- 一组相关贡献可以包装成一个产品能力案例；是否独立成页取决于故事完整度和证据，而非 PR 数量。

### 1.5 全站产品叙事检查

不要只把工程术语替换成产品术语。每个公开案例必须先回答：用户/开发者要完成什么；现有体验的阻碍和影响是什么；本人识别了什么产品机会；做出了什么优先级与方案取舍；用户因此更容易完成什么；证据证明到什么程度。

避免用“优化配置、完善一致性、打通链路、提升稳定性”等抽象工程动词作为最终价值表达。技术机制放在“为什么这个方案成立”的深读层，不抢占首屏主叙事。不得把工程修复夸大成没有证据的独立产品功能。
- 首页主标题只使用中性职业定位。自我评价、夸张口号或临时测试语均不得自行加入；不得从历史对话、旧稿、截图、模型记忆或其他 Agent 的输出中自动恢复。用户已对一条历史临时口号作出永久禁止决定，该禁止优先于所有旧文档、提交记录和部署记录。

## 2. 招聘方优先的内容呈现架构

### 2.1 招聘方阅读目标

网站必须帮助招聘方快速回答：
- 这个人的目标岗位和产品定位是什么？
- 他解决过哪些值得讨论的产品问题？
- 他本人做过什么判断、设计和推动？
- 方案如何落地，结果如何验证？
- 能否快速找到证据并继续深入了解？

内容数量不是目标。优先展示少量有辨识度、有产品闭环、有证据的案例。

### 2.2 首页应承担的职责

首页的具体模块和顺序可以随设计优化，但必须形成清楚的阅读路径：

1. **职业定位与价值主张**：快速说明目标岗位、关注的问题和核心优势；不得擅自发明口号、主标题或改变已确认的品牌表达。
2. **精选案例**：优先展示最能证明 AI 产品经理能力的实践，不按项目数量、时间或技术热度机械排列。
3. **开源与其他贡献**：按产品问题和用户价值组织，提供可追溯证据，不堆 PR 清单。
4. **能力证明**：能力标签必须由具体案例支撑，不能只列抽象形容词。
5. **个人介绍与联系**：提供可信的背景、角色边界、工作方式和联系入口。

首页必须有主次层级、明确入口和足够留白。不要把所有项目、指标、技术栈和长文塞进首屏。


#### 首页开源项目列表的固定表达原则

- **保留项目/仓库的真实名称**，尤其是具备行业认知度的开源项目；项目名称本身是招聘方快速识别经历的入口，不要为了“产品化”而隐藏或替换名称。
- 项目名称旁边用一句简洁、准确的产品语言概括**本人在这个项目中做出的产品改进或贡献价值**，不是复述该开源项目本身是什么、提供什么通用能力。
- 项目本身的定位无需在首页重复介绍；招聘方看到知名开源项目名即可识别上下文。右侧描述必须回答“我在这里改善了什么用户体验、产品行为或工作流”。
- PR 编号、文件路径、技术细节和完整证据放在贡献详情层，不挤占首页第一眼的信息。
- 首页列表保持轻量、可扫描：**公开项目名 + 本人在该项目中的产品贡献价值**。不重复介绍项目本身，也不把首页改造成冗长的产品决策卡片墙。项目名是招聘方识别经历的入口，贡献描述才是展示个人价值的内容。


### 2.3 案例分层阅读

- **约 10 秒：卡片层** — 案例主题、用户/产品问题、关键价值或可验证变化、成熟度。
- **约 1 分钟：摘要层** — 本人角色、关键产品判断、核心方案、结果与证据。
- **约 3–5 分钟：深读层** — 场景、问题拆解、方案取舍、产品机制、执行协作、验证证据、复盘与边界。

重点案例可以有独立页面或案例册；短贡献不必强行做成长篇案例。视觉演示、交互图和模拟数据必须标注，不得伪装成真实产品截图或线上指标。

### 2.4 内容对象

继续使用以下模型：
- **Project**：长期项目或工作载体。
- **Case**：面向招聘方讲述的完整实践单元。
- **Contribution**：具体贡献，可包含 Issue、PR、Review、设计讨论、研究或交付。
- **Evidence**：支撑贡献、决策和结果的原始证据。
- **Capability**：由多个案例证明的能力维度。

Project 不等于 Case；仓库不自动成为独立产品；关键结论应尽量关联 Evidence。

### 2.5 不得擅自改变既定方向

当前项目已有案例、项目分类、Laya 独立案例册、开源贡献分组、首页表达和视觉方向，以仓库当前实现及 V2 IA 文档为准。不得因换窗口或新 Agent 接手，就自行增加、删除、改名、重排项目，或重新发明首页主标题和视觉体系。

如认为架构确实需要调整，先说明招聘方阅读中存在什么问题、调整带来什么收益，再实施；不得把个人偏好当成用户决策。

## 3. 每轮网站优化必须部署并可查看

### 3.1 默认方式

**凡是改变网站内容、视觉、布局、路由或交互的有效优化，每轮完成后都必须部署到线上可查看版本。部署是该轮交付的一部分，不是可选的后续工作。**

默认使用：
- Vercel Preview 部署；
- 配置无需登录即可打开的分享链接；
- 如果现有域名已安全接入且不需要额外路由变更，也可以使用现有域名。

用户不应为了查看而登录 Vercel、GitHub 或本地开发环境。不得只交付代码、压缩包、本地 HTML 或要求用户自行启动。

### 3.2 部署后必须独立验收

- 核对部署状态、部署 ID、Git 分支和 Commit；
- 实际打开首页和本轮变更的页面/路由；
- 检查图片、字体、导航、关键交互和直接访问/刷新；
- 检查桌面与移动端的明显溢出、遮挡和布局断裂；
- 保留当前要求的访问控制与 noindex；
- 确认分享链接无需登录即可打开，或确认域名实际指向本轮版本。

构建 READY 不等于页面验收通过。未实际验证时必须明确标注，不能声称完成。

### 3.3 域名和权限边界

- 免登录 Vercel 预览链接是默认快速评审方式，必须直接交付给用户；分享 Token 不得写入公开仓库。
- 分享链接按“持有链接者可能访问”处理，不得在预览中放敏感内容。
- 可以使用已安全接入的现有域名；不得为了方便擅自修改 DNS、Nameserver、域名归属或跨项目转移 Alias。
- 如果域名绑定到其他 Vercel Project，或需要改变生产 Alias / DNS 才能部署，优先使用 Vercel Preview 分享链接，不要擅自切换生产流量。
- Preview 部署用于快速查看，不自动等于正式生产发布或开放搜索索引。
- 保持当前 noindex / robots 保护，除非用户明确要求开放搜索索引。

### 3.4 可以不部署的情况

仅限纯文档治理、仓库说明等不改变网站产物的改动，可以不触发网站部署；回报中必须说明“本轮为文档变更，网站产物未变化”。

网站改动若被构建、权限或外部依赖阻塞，必须说明具体阻塞、已完成部分和可验证证据，不能把“稍后可自行部署”当成交付。

## 4. 每轮执行流程

1. **接手检查**：读取本文件、README、V2 IA、Release Gate 和当前 Git/Vercel 状态；确认分支、版本、已有内容和待办。
2. **确定目标**：判断本轮解决产品表达、内容架构、视觉体验还是工程问题；避免顺手改无关部分。
3. **实施**：按已确认方向修改；不擅自创造主标题、品牌定位、项目范围或视觉体系。
4. **自检**：检查事实、个人贡献归属、证据链接、路由、响应式和交互。
5. **部署**：网站改动直接部署到可免登录查看的 Vercel Preview，或安全可用的现有域名。
6. **线上 Review**：独立打开实际部署版本，核对页面、路由和本轮变更。
7. **回报**：汇报真实完成项、部署链接、实际验证结果、未完成项和下一步。不要让用户自行阅读 Agent 日志或判断部署是否正确。

## 5. 完整交付验收

每轮网站迭代至少满足：
- **产品表达**：能用产品经理语言解释问题、判断、方案、执行、验证和结果。
- **面试可讲**：本人能据此讲清角色、关键决策、取舍和复盘。
- **内容架构**：首页、案例卡片、案例详情、贡献证据之间层级清楚。
- **事实可信**：个人与团队边界清楚，成熟度和指标口径明确，结论可追溯。
- **体验完整**：桌面和移动端可读，导航和交互可用。
- **交付可见**：线上版本已部署，用户拿到无需登录即可查看的链接，部署版本经过实际检查。

任何一项不满足，不得将本轮标记为完整交付。

## 6. 换窗口接手时的强制阅读顺序

1. 本文件：docs/PORTFOLIO-OPERATING-CONTRACT.md
2. README.md：仓库结构、运行与发布说明
3. docs/V2-IA-IMPLEMENTATION.md：当前内容定位、范围和信息架构
4. RELEASE-GATE.md：发布、权限、域名和证据 Gate
5. 当前 Git 分支、Commit、实际线上部署：确认 Live Truth

如文档与实际仓库/线上状态冲突，以 GitHub 当前分支和 Vercel 实际状态为准，并立即修正文档；不得凭旧对话或旧部署记录猜测。


## 7. 2026-11-10 Strategy Addendum — recruiter conversion, differentiation and guided reading

The detailed market research, strategy, case gates, visual rules and phased plan are maintained in [PORTFOLIO-STRATEGY-AND-ROADMAP-2026-11-10.md](./PORTFOLIO-STRATEGY-AND-ROADMAP-2026-11-10.md). This addendum is binding for future portfolio work.

### 7.1 Primary objective

The portfolio's primary outcome is to improve the likelihood that target employers invite the candidate to interview. Visual polish, project count, technical sophistication and site architecture are means, not ends.

### 7.2 Priority order

- **P0 — Career positioning and differentiation:** research current 2027 graduate / early-career AI PM roles and map their requirements to the candidate's actual evidence before freezing homepage positioning.
- **P0 — Case narrative and productized expression:** concise but substantive, strong product language, defensible résumé-style framing, visible personal judgment and contribution.
- **P0 — Information architecture and reading journey:** one clear default narrative path from positioning to selected work, deep cases, evidence and contact. Do not create a maze of equally weighted entrances.
- **P1 — Visual expression and information visualization:** real product assets first; AI-generated explanatory visuals only after a written brief and separate image handoff.
- **P1 — Evidence and credibility:** links to PRs, Issues, repositories, official project/team sites should be small, relevant and easy to verify, not a dominant evidence wall.
- **P1 — Interaction and user experience:** preserve orientation, clear back/next paths, optional anchor navigation, mobile usability and browser conventions.
- **P2 — Engineering quality and maintenance:** reliability, performance, accessibility, versioning, deployment and rollback remain mandatory delivery constraints, but do not displace P0 content work.

### 7.3 Career positioning must be market- and evidence-based

Do not define the candidate using generic self-praise or an AI tool/technology keyword list. Compare current early-career AI PM / Agent PM / AI platform roles separately from senior commercial roles. Derive positioning from the overlap of:
1. current employer demand;
2. actual personal case evidence;
3. differentiated product judgment and engineering understanding;
4. interview-defensible claims.

The current working hypothesis is **AI Product Manager, focused on Agent workflows and AI application productization**. It is not final homepage copy until Phase 1 and Phase 2 of the strategy plan are completed.

### 7.4 Case evaluation and packaging

A case must demonstrate role-relevant value, differentiated judgment, clear personal ownership, evidence-backed outcomes/stage, and incremental value to the portfolio. Use flagship / supporting / contribution / hold tiers. Do not force every project into a long case study.

Strong product framing and résumé-style polishing are encouraged. Do not understate real product work as a bare bug-fix log. Combine related issues, PRs, reviews, research and implementation when they form one coherent product story. Never invent ownership, release state, user/business impact or metrics.

### 7.5 One primary reading path

Design a default path: career positioning → selected projects → deep cases → supporting contributions/evidence → personal summary/contact. Use one primary story, not a project maze. Case pages may retain optional anchor navigation and direct links for deep readers, but must preserve current location, next/previous context, and a clear return path. Evidence links are secondary branches, not the main narrative.

### 7.6 Visual asset policy

Use real project/product screenshots, official website assets, public repo documentation, videos and existing diagrams first. Record source and capture date. Do not present historical screenshots as current UI or false before/after evidence.

For missing visuals, write an image brief before handing work to a separate image-generation window. The brief must specify the single message, theme, composition, hierarchy, style, palette, aspect ratio and forbidden elements. AI-generated visuals are explanatory/editorial assets, never fake UI, source evidence or fabricated metrics. Precise architecture and process relationships must be fact-checked after generation or reconstructed from an approved draft.

### 7.7 Evidence presentation

Place small, relevant links near the corresponding claim or at the end of a case: original PR / Issue / Review / repository / official project or team website. Do not flood the homepage with IDs or large evidence panels. The link must support the claim it accompanies.

### 7.8 Implementation sequence

Do not make large visual changes before the following dependencies are complete:
1. current hiring-market research and early-career role matrix;
2. personal project / case / evidence audit;
3. positioning and case-tier decisions;
4. concise multi-depth case copy;
5. primary reading journey and low-fidelity layout;
6. real asset inventory and separate AI image briefs;
7. site implementation, browser QA, preview deployment and freeze.

The strategy document is the detailed execution baseline. The current v2.3 site remains the implementation baseline until a later version passes its own review gate.


## 8. 2026-11-10 User-Confirmed Strategy Upgrade

The user explicitly confirmed the seven portfolio optimization directions and the six foundational AI PM capability directions, and requested senior-role capabilities as an additional upward reference. The dated decision is recorded in [2026-11-10 User-Confirmed Strategy](./portfolio-decisions/2026-11-10-user-confirmed-strategy.md).

### 8.1 Dual-level capability model

Always use both:
- **Foundational role standard:** scenario insight, product abstraction, Agent design, technical judgment, evaluation, end-to-end delivery.
- **Advanced reference standard:** product strategy / portfolio management; business value and ROI; platformization and ecosystem; enterprise reliability and governance; cross-organizational leadership and scale delivery; commercialization and GTM.

Do not make the advanced layer a false seniority claim. Map each capability to evidence maturity (executed / validated / research-design / planned), personal ownership, source and interview defensibility. Use value hypotheses and metric plans when actual business results do not exist.

### 8.2 Real portfolio UX benchmarking

Use recent real PM / AI PM portfolio websites and visual references, not only generic articles. The user allows approximately one-to-two-year freshness for portfolio UX examples. Study first-screen positioning, case ordering, case title, role/accountability, narrative, evidence, live demos, progressive disclosure, navigation and next action.

Borrow only patterns that improve this site's recruiter journey. The default path remains one coherent narrative; optional deep links must preserve orientation and return path. Do not reproduce unrelated novelty interactions or create a multi-entry maze.

Research record: [2026-11-10 Portfolio Benchmark & Senior AI PM Capability Research](./portfolio-reviews/2026-11-10-portfolio-benchmark-and-senior-capability-research.md).

### 8.3 Multi-window work

Helper windows may perform independent read-only research or evidence audits. W0 / ChatGPT owns scope, task boundaries, dependency ordering, synthesis, decisions and final review. Do not allow helper windows to concurrently edit the same website files, alter DNS / deployment / indexing, or publish public claims. Each task must specify Goal, Scope, Non-scope, sources, evidence format and acceptance criteria.

## 8. 2026-11-10 — Display Scope Freeze & User Approval Gate

The user explicitly confirmed that the current set of projects on the portfolio website is sufficient. This is a binding scope constraint.

1. The existing public project / case / contribution set is frozen by default. Internal asset audits do not authorize public additions.
2. W3's broad inventory is for evidence, ownership, maturity and risk auditing only. It is not a request to publish every discovered project.
3. No new public Project, Case, Contribution, homepage card, navigation item or showcase section may be added without the user's explicit approval. Do not delete, replace, rename, reorder or promote an existing item without approval either.
4. If W0 finds a candidate with material incremental value, submit one separate proposal containing: candidate name, unique capability signal, original evidence, overlap with current cases, display cost, and the consequence of not including it. Wait for explicit user approval before implementation.
5. Do not add projects merely to fill space, cover a capability matrix, increase project count, or make the portfolio look more complete.
6. Personal Context Keyboard is an existing flagship case and the user explicitly confirmed on 2026-11-10 that it is near completion. Its stale Notion stage must not be used to classify it as research-only or pre-implementation. Separate implementation maturity from formal product acceptance and external release gates; disclose outstanding gates without erasing completed implementation.

## 9. 2026-11-11 — Version identity, release governance and owner corrections

### 9.1 Single version authority

- `docs/VERSION-REGISTRY.md` is the sole operational ledger for current branch, commit, deployment, domain and approval state.
- A Git branch is a mutable pointer; a commit SHA is immutable. A Vercel deployment is an immutable build of a specific commit. A domain alias is mutable and must be verified independently.
- Never identify a version by branch name or URL alone. Record the full commit SHA and Deployment ID together.
- The owner-supplied reference baseline is `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae`. The later `1294634` rewrite is not owner-approved and must not silently replace the baseline.
- Use `portfolio/owner-feedback-rewrite-2026-11-11` as the sole active work branch. Do not run concurrent website edits on other branches. Do not push to `main` until an owner-approved release candidate and Vercel production-branch behavior are verified.
- One iteration means one scoped change set, one commit, one review deployment and one owner-facing URL. Keep historical deployments as records; do not create parallel previews for the same iteration.
- A Vercel `READY` state or HTTP 200 response is not browser QA and is not owner approval.
- No domain alias reassignment, production promotion, DNS change or search-indexing change without explicit owner approval. Keep noindex enabled.

### 9.2 Owner correction — portfolio is a product narrative

The portfolio must communicate product judgment, system focus, key mechanisms, architecture thesis and contribution scope. It is not a maturity dashboard or a repeated list of delivery disclaimers.

- Do not append repetitive not-completed / not-launched / not-tested caveats to every card or case. State a maturity boundary only where it changes the reader's interpretation.
- Case-page typography must remain readable: desktop H1 generally 38–68px, section H2 31–50px, lead copy 18–23px; mobile headings must not dominate the viewport.
- Personal Context Keyboard must explain the Local-first Personal Context Layer: authorized Sensors; Raw Fact Store; Temporal Spine and Evidence Slices; multi-path retrieval; Event / Thread / RELATED_ONLY / UNORGANIZED semantic assessment; bounded evidence Agent; durable orchestration; Validator and incremental publishing; user control; Unified AI Gateway; separate Device Sync. Raw Facts remain authoritative and Derived Context remains recomputable.
- VIVIC must distinguish rules, model decisions, host validation, executor actions and real receipts; team results and personal responsibility must remain separate. Use official product-site showcase assets where available, with provenance.
- AWRP × Linear must explain the original ChatGPT mobile/web ↔ local Agent workflow, research/execution separation, Project normalization, Channel / Lane / Claim isolation, Task / Subtask / Run execution rounds, Event / Artifact persistence, ACK / HANDOFF / REVIEW / RECONCILE, the actual Linear × Notion × GitHub division, and the DeepSeek Super-agent architecture comparison. Distinguish AWRP, current tools, third-party research and Agent Project OS design; do not present the latter as a shipped product.
- Laya public headline uses 40 merged PRs. The 10,394 added-line statistic is summed across the full authored PR diff set and must be explained separately. Do not use the 47 authored / 85 reviewed-by query matches as headline metrics.
- **Permanent owner prohibition:** the historical self-praise / test slogan is prohibited from all portfolio artifacts. It must never appear in homepage copy, case pages, metadata, screenshots, mockups, source comments, preview deployments, release notes, PR descriptions, documentation, or generated assets. Treat every historical occurrence as a withdrawn mistake, never as authorization.
- The current public project set and homepage order remain frozen: Personal Context Keyboard → VIVIC → AWRP × Linear, followed by the separate Laya flagship casebook and existing contribution index. No additions, deletions, replacements, renames or reorderings without explicit user approval.



### 9.3 Permanent owner prohibition and inheritance rule

- This is a binding, permanent owner decision for this project and applies to every future ChatGPT window, Agent, contributor, branch, design, content draft and deployment.
- Never restore, paraphrase, screenshot, quote, or otherwise reproduce the withdrawn self-praise / test slogan in any portfolio artifact. Do not infer permission from old conversations, summaries, memory, commits, screenshots, branches, or prior assistant output.
- The only approved homepage hero baseline remains the neutral `AI Product Manager.` wording from the recovery reference unless the owner explicitly approves a different neutral formulation in a future current-turn instruction.
- A historical artifact containing the prohibited wording is not a valid source of truth. Preserve its Git history for auditability, but correct all current source files and mark affected deployments as withdrawn.
- The static validator must reject the prohibited unique wording token anywhere in public HTML. A failed content gate blocks preview sharing regardless of build state or HTTP status.
- Do not ask the owner to reconfirm this prohibition. It is already settled.

## 10. Mandatory pre-deployment source validation

- Before every preview deployment, run `node scripts/validate-portfolio.mjs` against the source checkout. This gate parses the inline application script and checks homepage project membership/order, mount point, renderer, navigation handler and standalone Laya route.
- Do not use an HTTP 200 response or Vercel `READY` state as a substitute for JavaScript syntax validation. A static page can return 200 while its entire application script fails to parse.
- Run source validation against the repository file, not HTML returned by a hosted preview that may include Vercel-injected feedback scripts. Hosted checks are a separate deployment-identity / headers / routes gate.
- If any validation fails, do not share the preview. Record the root cause and fix it on the same active branch before creating the owner-facing deployment.
