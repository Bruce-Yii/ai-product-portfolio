# AWRP × Linear｜从 Agent 接力到长期项目协作的产品演进（作品集草稿）

> 状态：**DRAFT / 待审阅**  
> 日期：2026-11-14  
> 用途：作品集首页叙事和 AWRP × Linear 案例页的内容基线。不是 Agent Project OS 的 PRD，也不是已发布功能清单。  
> 范围：AWRP → Linear 工作流实践 → dsh-superagent 架构对照 → Agent OS 产品化方向。  
> 不改变现有 Laya、PCK、VIVIC 和其他作品集内容。

## 1. 核心命题

**让 Agent 从一次性执行，走向长期项目协作。**

随着项目推进，我们从解决“Agent 如何可靠执行与交接”，逐步扩展到“长期项目如何组织任务、保存状态并跨 Agent 持续推进”，再通过外部架构研究，形成独立 Agent OS 的产品化方向。

## 2. 四阶段演进（内部证据与公开文案分层）

### 01｜AWRP：自主设计并落地

**状态：已有实际实现与公开参考快照。**

从跨窗口、跨 Agent 接力的真实需求出发，设计 AWRP 的 Project、Channel、Task、Run、Event、Artifact 对象体系，以及明确执行权、Guarded Dispatch、事件记录、确定性恢复、并发控制和结构化交接 / Review 等机制。

核心产品判断：聊天内容不能代替持久执行事实；一个 Run 的授权、身份和完成证据必须可检验。

证据：[AWRP 仓库](https://github.com/Bruce-Yii/awrp)、[架构文档](https://github.com/Bruce-Yii/awrp/blob/main/docs/ARCHITECTURE.md)、[协议与测试](https://github.com/Bruce-Yii/awrp/tree/main/tests)。

### 02｜Linear：基于成熟产品进行工作流改造

**状态：基于 Linear、Notion、GitHub 的真实工作流实践；不是修改 Linear 官方源代码。**

发现长期项目治理不适合完全重造。因此复用 Linear 的 Project、Issue、状态、依赖与协作能力，把研究成果、Agent 派发、运行回传、Review、Current State 与长期上下文组织起来。

核心产品判断：先复用成熟任务系统，再补上 Agent 执行和项目恢复缺口；任务的持续身份与单次执行不能混淆。

证据：[Linear 工作流项目](https://linear.app/yi383775/project/personal-project-oslinear-notion-governance-a75ee24846a2)、[Agent Project OS 设计源](https://github.com/Bruce-Yii/agent-project-os/blob/main/docs/03-project-and-work-management.md)。

### 03｜dsh-superagent：外部架构研究与对照

**状态：研究 / 对照 / 选择性吸收；不是我们创建或完整集成的产品。**

在 AWRP 和 Linear 实践之后，研究 DeepSeek Harness 团队发布的 **dsh-superagent** 研究原型，比较 Source / Trigger / Eval、Mandate、Ticket / Assignment、授权边界、事件驱动及恢复机制与既有方案的共性和差异，吸收值得验证的部分。

**命名与真实性：** 发布仓库名为 `deepseek-ai/dsh-superagent-prototype`，README 中的软件名称为 **dsh-superagent**；作者明确声明它只是研究原型，非正式 DeepSeek 产品，并且不完全等同于文章中的架构。作品集首页使用 **dsh-superagent**，副标题为“架构对照”，不把它当作我们原创的成果，也不宣传两套架构完全相同。

证据：[发布仓库](https://github.com/deepseek-ai/dsh-superagent-prototype)、[官方领域模型](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/001-domain.md)。

### 04｜Agent OS：结合三条路径继续产品化

**状态：独立产品方向 / 产品与工程设计推进中；成熟度依据专属仓库的最新证据更新。**

以 AWRP 的可靠执行机制、Linear 工作流实践的长期项目治理、dsh-superagent 的架构启发为输入，探索以 Project 为长期身份的统一 Agent 工作空间，覆盖项目、任务、Session、执行、上下文、协作、Review 和交付。

核心产品判断：目标是统一可持续的项目工作，而不只是把既有工具连起来，或照搬 DeepSeek 的原型。

证据：[Agent Project OS 仓库](https://github.com/Bruce-Yii/agent-project-os)、[长期设计文档](https://github.com/Bruce-Yii/agent-project-os/blob/main/docs/00-product-charter.md)。独立产品的代码、集成和发布状态须以其实际仓库/PR 为准，不根据旧版 README 或概念设计推断已上线。

## 3. 首页内容草案（本轮选择的表达）

**AWRP × LINEAR / AGENT WORKFLOW SYSTEMS**

### 让 Agent 从一次性执行，走向长期项目协作。

从自主落地的 Agent 接力协议，到 Linear 项目工作流实践，再到 Agent OS 的产品化探索。

| 阶段 | 首页标签 | 事实边界 |
|---|---|---|
| AWRP | 设计与实现 | 已有协议、CLI、参考实现和测试 |
| Linear | 工作流改造 | 对现有工作流的改造，而非 Linear 官方产品代码改造 |
| dsh-superagent | 架构对照 | 第三方发布研究原型 |
| Agent OS | 产品化探索 | 后续独立产品方向，按最新证据描述成熟度 |

首页以四阶段简洁示意呈现；详细架构、本人职责、原始证据及决策取舍进入案例页。本草稿尚未经过最终逐字文案审批。

## 4. 展示与验收约束

- **时间顺序必须准确：** AWRP 已设计并落地 → Linear 工作流实践 → 研究 dsh-superagent → Agent OS 产品化。
- 不把 AWRP 描述为研究 DeepSeek 后才设计；不声称 DeepSeek 复制或验证了我们。
- 不将 Linear 工作流改造说成修改 Linear 官方源代码。
- AWRP 的协议/CLI/测试、Linear 的实际实践、dsh-superagent 的外部参考和 Agent OS 的产品化探索，必须各有成熟度标识。
- 首页为引导阅读的浓缩叙事，不把全部技术对象塞在一张卡片。
- 不把 AI 生成的概念界面伪装成已上线截图。
- 本草稿不触发 Agent Project OS 的功能设计修改、额外研发 Issue 或外部发布。

## 5. 待后续审阅的内容

- 独立案例页是否以“时间轴 + 两张关键架构图 + 一次真实工作流演示”组织；
- AWRP 可公开呈现的实现证据及 Linear 改造前后的代表性场景；
- Agent OS 最新工程进展及成熟度措辞是否需要随真实 PR 更新。
