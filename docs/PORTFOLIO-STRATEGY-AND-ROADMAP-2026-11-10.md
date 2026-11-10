# 作品集策略与阶段建设计划
**日期：** 2026-11-10  
**适用范围：** AI 产品经理求职作品集  
**状态：** 策略基线 / 下一轮执行依据；本文件不代表网站改版已经开始或完成  
**当前网站基线：** v2.3 preview；v2.2 冻结点保留

---

## 0. 核心目标

作品集不是个人项目目录、技术简历复刻、PR 排行榜或单纯的视觉作品。

**唯一首要目标：提高目标企业招聘方因为浏览作品集而邀请候选人面试的概率。**

网站需要在不同阅读深度完成四件事：

1. 让招聘方快速理解候选人的岗位方向和差异化。
2. 让招聘方看到候选人真正解决过哪些值得讨论的产品问题。
3. 让招聘方理解候选人的个人判断、产品决策、技术理解和执行能力。
4. 让招聘方能低成本核验关键成果，并自然进入面试沟通。

视觉、动效、技术架构、项目数量都服务于这个目标，不能反过来成为目标。

## 1. 七个优化方向与优先级

### P0 — 职业定位与差异化

回答：**为什么这个候选人值得作为 AI 产品经理面试？**

不能仅凭自我评价或抽象标签定义定位。必须同时基于：
- 2026 年仍有效的目标岗位招聘要求；
- 2027 届 / 0–3 年经验候选人的真实入场要求；
- 候选人已经完成的项目、开源贡献、原型和验证证据；
- 与普通产品经理、纯技术开发者、只会使用模型工具的候选人的差异。

#### 当前市场研究结论（截至 2026-11-10）

抽样核对的 2027 届招聘岗位包括：
- 沐瞳科技：AI Agent 产品经理（平台）；
- 小米：AI 数据产品经理；
- 中兴新云：AI 产品经理；
- 小红书：AI 平台产品经理培训生；
- 滴普科技：AI 产品经理；
- 彩讯科技：AI 产品经理（大模型 / 智能体方向，2027 届）。

岗位反复出现的能力：
1. **场景洞察：** 从真实用户 / 业务流程中找到高价值 AI 机会，而不是从模型能力倒推需求。
2. **产品抽象：** 将复杂任务拆解为产品功能、流程、规则和可执行工作流。
3. **Agent 机制设计：** 任务边界、工具调用、Skill、上下文、知识检索、人机协同和异常处理。
4. **技术判断：** 理解模型能力边界、RAG、API、成本、延迟、幻觉和系统约束。
5. **效果评测：** Benchmark、Badcase、任务成功率、结果采纳、质量指标和用户反馈闭环。
6. **端到端推进：** 需求、PRD、原型、验收、研发协作、上线和持续迭代。

高级社招岗位还会要求商业化、规模化交付、经营指标和组织协同；这些是后续成长方向，不能把多年经验岗位的要求冒充 2027 届求职者已经具备的能力。

#### 当前定位假设（尚未冻结为首页文案）

**岗位方向：AI 产品经理**  
**专业侧重：Agent 工作流与 AI 应用产品化**

候选的一句话表达：

> 从复杂工作流中识别高价值 AI 场景，完成 Agent 产品机制设计，并通过成熟开源能力复用、原型验证和上游协作推进方案落地。

候选人的三个差异化支点：
- **产品判断：** 能从复杂问题中识别真正值得解决的产品问题，完成抽象、优先级和方案取舍。
- **工程理解：** 理解 AI 应用和 Agent 系统的关键机制，能够讨论技术可行性、成熟模块复用、模型限制和验证方法；不把自己包装成算法工程师或纯架构师。
- **真实实践：** 通过个人项目、团队产品、开源协作、PR / Issue / Review、原型与评测，证明判断和执行并非纸面方案。

以上是定位假设。必须经过项目证据映射和招聘岗位匹配验证后，才决定最终首页表达。

### P0 — 案例叙事与产品化表达

回答：**候选人具体创造了什么价值，为什么这些经历能证明 AI PM 能力？**

案例不能写成技术流水账，也不能为了简短而把关键判断删掉。

每个重点案例提供三个阅读深度：

| 深度 | 目标 | 必须回答 |
|---|---|---|
| 10 秒 | 识别案例 | 做的是什么、解决什么问题、本人角色、为什么值得看 |
| 约 1 分钟 | 理解价值 | 关键洞察、决定性产品判断、方案、结果 / 阶段 |
| 3–5 分钟 | 面试深读 | 场景、问题、备选方案、取舍、产品机制、执行、验证、反思 |

重点案例默认叙事链：

**场景与目标用户 → 真实问题与影响 → 问题重构 / 产品洞察 → 方案选择与取舍 → 产品机制与体验 → 本人推动的执行 → 验证与结果 → 限制和下一步。**

写作规则：
- 标题先表达产品问题、用户价值或关键机制，不直接复制 PR 标题。
- 首先讲用户 / 产品问题和关键判断，再解释技术实现。
- 用清楚、短而有力的产品语言，不用无意义的术语堆砌。
- 一段只承担一个信息任务；不重复解释同一事实。
- 允许把相关 Issue、PR、Review、研究、原型和验证组合成完整产品故事。
- 不必把每个 PR 独立包装成 Case；贡献集合可以形成一个更有价值的产品能力叙事。
- 技术细节放在深读层，证明方案为什么成立，不抢占首屏主叙事。

#### 合理包装原则

明确允许并鼓励中国求职语境下合理的简历式润色、产品化表达和价值提炼。

可以：
- 将技术工作重新组织成产品问题、体验改进、流程优化、决策机制或可靠性成果；
- 突出本人识别的问题、关键判断、推动、审查、协调和验证；
- 把相关贡献组织成更完整的产品叙事；
- 使用更有力度的案例标题和成果语言，不必照抄上游仓库的技术命名。

不能：
- 虚构岗位、官方身份、客户、用户规模、商业收入或团队关系；
- 把研究 / 设计 / 原型写成已上线产品；
- 把 Draft / Open PR 写成 merged；
- 把内部固定题集或 API 实验写成真实用户效果；
- 把团队成果全部归为个人独立完成；
- 把第三方项目或开源作者的工作写成个人原创。

**表达可以更有竞争力，事实边界不能被改写。** 不要过度保守，也不要虚构。

### P0 — 信息架构与连续阅读路径

回答：**招聘方从打开网站到结束，是否一直知道自己在看什么、为什么看下一段、最终应该记住什么？**

网站必须有一条明确的主阅读路径，而不是多个权重相同、互不关联的入口。

建议的主线（最终顺序以案例证据审计后冻结）：

1. **职业定位：** 说明目标岗位、专业侧重和差异化。
2. **代表性实践：** 以精选项目建立能力认知，项目排序必须有理由。
3. **重点案例：** 通过连续叙事解释问题、判断、取舍和结果。
4. **开源贡献与证据：** 用轻量入口核验真实协作、上游交付和技术判断。
5. **个人总结与联系：** 收束为清晰的职业印象，提供简历、GitHub 和联系入口。

体验约束：
- 一个主要入口、一条默认叙事主线；避免多个平级菜单、神秘命名和项目迷宫。
- 首页应能通过自然滚动完整理解主线，不要求用户先研究导航。
- 重点案例可使用独立详情页，但必须提供明确的上一案例 / 下一案例、返回作品集和当前位置反馈。
- 长案例可以提供锚点导航，作为深读者的快捷入口，不替代主叙事。
- 证据链接、团队官网和外部项目网站是次级入口，不应把用户从主故事中强行带走。
- 浏览器返回、直接访问、刷新和移动端阅读必须自然。
- 连续阅读不等于禁止跳转：提供清晰的快捷路径，但不能让用户迷路或丢失阅读位置。

### P1 — 视觉表达与信息可视化

回答：**视觉是否让招聘方更快理解产品，而不只是觉得网站漂亮？**

视觉需要同时满足高级感、专业感、信息清晰度和叙事连贯性。

图片来源分两类：

**A. 已有真实素材优先**
- 从项目官方官网、团队官网、公开产品页面、真实仓库文档、已有截图和演示视频中寻找。
- 真实产品界面优先于概念图；视频 / GIF 可用于解释交互。
- 每个素材记录来源、采集时间、展示的产品阶段和可证明的事实。
- 不把旧版截图伪装成新版本，不用不同环境截图冒充同环境 Before / After。
- 不把第三方项目官网的内容伪装成个人独立成果。

**B. AI 生图作为补充**
- 先确定每张图的主题、要传递的唯一信息、构图、视觉层级、风格、色彩、画幅和禁止元素。
- 先产出低成本视觉草稿 / 生图 Brief，再交给独立生图窗口执行；本轮策略窗口不直接消耗上下文生成全部图片。
- AI 图用于概念视觉、编辑式插画、抽象机制解释和视觉叙事；不得冒充真实产品界面、代码截图、PR 证据或实验结果。
- 对精确架构 / 流程 / 决策图，先锁定节点、关系和标签，再交给生图或后期重绘；不能让模型自行编造技术结构或文字。
- 所有图片必须有明确的信息任务，不能为了填空而添加。

### P1 — 证据与可信度

证据是贯穿全站的硬约束，但不应抢占正文视觉层级。

展示方式：
- 在对应主张附近或案例末端提供小而明确的“原始证据 / 项目官网 / GitHub PR / Issue”入口。
- 团队项目可以链接团队官网和项目官网。
- 开源贡献链接到具体 Issue / PR / Review / Commit。
- 不在首页堆砌 PR 编号；编号只在需要核验时出现。
- 证据链接必须支持当前叙事，不是用大量链接制造可信度假象。

### P1 — 交互与用户体验

交互只服务于阅读、理解和核验：
- 项目卡片、案例路由和返回路径清楚；
- 长案例可锚点跳转；
- 上一 / 下一案例衔接自然；
- 图片可查看原图或放大；
- 关键演示交互必须可用，不用装饰性交互冒充产品能力；
- 桌面和移动端都保持阅读顺序、可点击区域和可访问性。

### P2 — 工程质量与长期维护

作为交付底线：
- 页面性能、图片压缩、懒加载、字体和资源稳定；
- 语义结构、键盘操作、对比度和移动端可读性；
- 链接、路由、直接访问、刷新、浏览器返回；
- 版本冻结、部署记录、回滚能力；
- 保持 noindex 和现有域名边界，除非另行批准；
- 不为了“架构先进”而重写稳定的静态站点。

## 2. 案例筛选与评价方法

不使用“看起来专业”的泛化评价表。每个维度都必须能展示候选人的能力、价值或差异化。

每个案例先通过五个 Gate：

1. **岗位相关性：** 是否证明目标 AI PM 岗位真正需要的能力？
2. **差异化判断：** 是否有候选人自己的问题洞察、产品决策、方案取舍或关键机制？
3. **个人责任：** 能否清楚说明本人做了什么、团队做了什么？
4. **证据与结果：** 是否有真实截图、代码、PR、Issue、评测、原型或其他验证？结果能证明到什么程度？
5. **组合价值：** 是否为整体作品集增加新的能力信号，而不是重复另一个案例？

案例分层：
- **旗舰 Case：** 有独特问题、关键判断、足够深度和可核验证据，值得 3–5 分钟阅读。
- **支撑 Case：** 有明确价值，但故事较短，适合 1 分钟摘要。
- **Contribution：** 适合放在开源贡献索引，保留原始证据，不强行独立成页。
- **HOLD / 不公开：** 价值不足、证据不足、重复、公开边界不清或个人归因不成立。

不要求所有项目都有商业收入或真实用户增长。研究、设计、原型和工程验证也有展示价值，但必须准确说明阶段和可证明的结果。

当前候选资产先以 v2.3 网站和现有 Notion 案例资料为准：Personal Context Keyboard、VIVIC、AWRP × Linear / Agent Project OS、Laya、开源贡献及 Agent Evaluation Lab。不要擅自增加项目或机械凑齐项目数量。当前首页既有顺序作为基线，是否调整须在证据审计后决定。

## 3. 阶段建设计划

### Phase 0 — 策略基线与规则入库
**状态：本轮完成**

- 归纳用户最新要求；
- 完成初步招聘市场和作品集 UX 研究；
- 明确七个优化方向、优先级、包装边界和视觉素材策略；
- 将计划写入仓库和第二大脑。

### Phase 1 — 职业定位与招聘市场研究
**目标：确定最有竞争力且证据支持的 AI PM 定位。**

执行：
1. 扩展 2027 届 / 应届 / 0–3 年经验岗位样本，优先杭州、上海、苏州、南京及可接受的远程 / 异地岗位。
2. 把 AI PM、Agent PM、AI 平台产品、开发者工具产品分开比较，避免把高级社招要求混入校招。
3. 提取岗位职责、技术深度、产品交付、评测指标、行业经验、加分项和招聘证据。
4. 将岗位能力映射到候选人的真实案例与贡献。
5. 形成 2–3 个定位候选，比较岗位覆盖、差异化、证据强度和潜在误解。
6. 输出最终推荐定位、首页 Hero 文案方向和不能使用的过度承诺。

交付：
- 招聘要求矩阵；
- 竞争力能力模型；
- 个人证据映射；
- 定位候选与推荐理由。

### Phase 2 — 项目、案例与证据盘点
**目标：确定什么值得展示、展示到什么深度。**

执行：
1. 读取现有 Notion Case Brief、项目页和素材库。
2. 核对 GitHub 仓库、PR、Issue、Review、Commit、产品官网和实际运行页面。
3. 对每个候选案例记录：用户问题、产品价值、个人角色、关键判断、实现 / 研究阶段、结果、证据和公开边界。
4. 通过五个案例 Gate，决定旗舰、支撑、Contribution、HOLD。
5. 检查案例之间是否重复，是否共同证明了定位中的三个差异化支点。

交付：
- Case / Contribution 总表；
- 个人责任与团队责任矩阵；
- 证据索引；
- 案例展示层级与推荐顺序。

### Phase 3 — 职业定位冻结与案例文案重构
**目标：先把内容写对，再设计页面。**

执行：
1. 基于 Phase 1 + 2 锁定职业定位。
2. 为每个案例编写 10 秒卡片、1 分钟摘要、3–5 分钟深读。
3. 使用产品语言重新组织技术经历和开源贡献。
4. 对关键成果进行积极、有力但可防守的润色。
5. 对所有成熟度、个人责任和指标口径进行交叉核验。
6. 形成全站统一词汇和标题体系，避免不同页面把同一能力写成不同身份。

交付：
- 首页定位文案；
- 代表项目卡片文案；
- 旗舰 Case 完整稿；
- 支撑 Case / Contribution 短稿；
- 面试追问与事实防守表。

### Phase 4 — 信息架构与连续阅读路径
**目标：让招聘方从打开网站到结束，始终沿着清晰的故事理解候选人。**

执行：
1. 绘制招聘方的默认阅读旅程。
2. 明确每一屏 / 每一段承担的唯一信息任务。
3. 确定项目排序和案例之间的叙事关系。
4. 设计首页主线、案例深读、开源证据、团队官网和联系入口。
5. 画低保真页面草图，验证是否存在重复入口、选择疲劳、跳转迷路和内容断层。
6. 保留深读者的锚点导航和快捷访问，但不让它们破坏主线。

交付：
- 阅读旅程图；
- 页面信息架构；
- 首页与案例低保真草图；
- 路由 / 导航规则。

### Phase 5 — 真实素材盘点与视觉任务单
**目标：以真实素材建立可信度，以设计图降低理解成本。**

执行：
1. 从 VIVIC、Laya、Personal Context Keyboard、开源项目等已有官网和仓库收集真实界面、图片、视频和现成图表。
2. 建立素材清单：来源、时间、项目阶段、用途、画幅、公开边界。
3. 识别真实素材不足的部分。
4. 为每张补充视觉图写 Image Brief：主题、核心信息、构图、视觉层级、风格、颜色、比例和禁用元素。
5. 将 Image Brief 交给独立生图窗口执行；准确技术图再进行人工校对 / 重绘。
6. 将真实截图、第三方原图和 AI 说明图明确区分。

交付：
- 真实素材清单；
- 图片与视频使用映射；
- AI 生图任务单；
- 页面视觉草图。

### Phase 6 — 网站视觉、交互与工程实施
**目标：把已经确定的内容和阅读路径实现为完整作品集。**

执行：
1. 以 v2.3 为基线，不做没有收益的重写。
2. 先完成首页主线和重点案例的视觉层级。
3. 统一图片比例、背景、字体、颜色、留白、标题和图注。
4. 实现自然滚动、锚点、案例衔接、返回路径和证据链接。
5. 完成移动端适配和资源性能优化。
6. 每个有效网站改动都部署到无需登录的预览地址。

交付：
- 新版本预览；
- 变更说明；
- 资源和交互清单。

### Phase 7 — 独立验收与冻结
**目标：在交给用户审阅前，先由主负责人完成完整 Review。**

验收：
- 10 秒内能否理解职业定位和核心差异；
- 30 秒内能否识别最值得看的案例；
- 1 分钟内能否理解一个案例的个人角色和关键判断；
- 3–5 分钟内能否理解完整案例且经得住面试追问；
- 从首页到结束是否有连续主线，没有迷路或入口冲突；
- 真实截图、AI 说明图和证据链接是否准确；
- 所有关键主张是否可核验；
- 1440 / 390 / 360 px 视口是否正常；
- 直接访问、刷新、返回、前后案例切换是否正常；
- 页面是否存在明显性能、可访问性或浏览器错误。

通过后形成冻结版本、QA 报告和回滚点，再交用户做一次完整审阅。公开索引 / 正式发布继续单独执行 Release Gate。

## 4. 研究来源与质量说明

### 中国 AI PM 招聘岗位（优先级最高：真实雇主岗位）

- [沐瞳科技｜2027 届 AI Agent 产品经理（平台）](https://moonton.jobs.feishu.cn/campus/position/7669735314894555411/detail?spread=XT4NTZQ)
- [小米｜2027 届 AI 数据产品经理](https://xiaomi.jobs.f.mioffice.cn/campus/position/7671290609248192795/detail)
- [中兴新云｜2027 届 AI 产品经理](https://www.ztccloud.com.cn/careers/campus-product-manager.html)
- [小红书｜2027 校招 AI 平台产品](https://job.xiaohongshu.com/campus/position/22164)
- [滴普科技｜AI 产品经理校招](https://www.deepexi.com/join-us/campus/c6)
- [彩讯科技｜2027 届 AI 产品经理（大模型 / 智能体）](https://jobs.tiangong.edu.cn/correcruit/content/id/55998.html)
- [阿里淘天｜AI 产品经理（阿里资产，2026-10-12 更新）](https://talent.taotian.com/off-campus/position-detail?positionId=100013680001) — 有 3 年经验要求，作为更成熟岗位参考，不作为应届岗位门槛。
- [百度｜AI 产品经理（语音大模型）](https://talent.baidu.com/jobs/detail/SOCIAL/6de8b72f-3c95-4078-be9e-df2602a9aab5) — 页面日期与搜索摘要日期存在不一致，保留能力参考，谨慎使用时效结论。

### AI 产品实践（优先级高：实际构建者 / 产品团队）

- [PostHog｜38 things we've learned about building AI products（2026-10-12）](https://posthog.com/newsletter/building-ai-products) — 构建者实践；部分数据为企业自述。
- [Teresa Torres｜Lessons from 9 AI Product Teams（2025-11-19）](https://www.producttalk.org/learning-from-8-ai-product-teams/) — 对多家真实 AI 产品团队的访谈总结。
- [Hugo Bowne-Anderson｜Four Months Inside a Production AI Agent（2026-07-25）](https://hugobowne.substack.com/p/four-months-inside-a-production-ai) — 真实生产 Agent 的使用变化、评测和模型取舍。

### 作品集与招聘评审（辅助证据，不把设计岗位数据直接等同 PM）

- [UXfolio｜State of UX Portfolios 2026](https://uxfol.io/state-of-ux-portfolios-2026/report) — 100+ 招聘决策者、5,000+ 作品集；样本主要来自产品设计 / UX 招聘，作为阅读和呈现方式的方向性参考。
- [UXfolio｜UX Portfolio Playbook（2026-01-29）](https://blog.uxfol.io/ux-portfolio-playbook/) — 74 名招聘人员 / 设计负责人的反馈整理；供应商自有研究，需考虑样本选择偏差。
- [Aakash Gupta｜Product Manager Portfolio Guide](https://www.news.aakashg.com/p/product-manager-portfolio) — 原文 2024-06，页面标注 2026-04-23 更新；包含 PM 招聘经理反馈和案例经验，样本不大，适合作为实践参考而非统计结论。
- [Lena Kul｜Recruiter reviewing 10,000+ portfolios（2025-10）](https://www.linkedin.com/posts/lena-kul_i-spent-7-years-as-a-recruiter-reviewing-activity-7388578140362760192-MO7b) — 招聘人员第一手经验，但属于个人分享，不视为普遍统计规律。

**研究原则：** 优先真实岗位、真实构建者和招聘参与者；区分应届与高级社招；不把供应商调查、个人经验或搜索摘要包装成普遍规律。新岗位和来源随时间变化，后续定位冻结前重新核对。

## 5. 本阶段明确不做的事

- 不在职业定位和案例内容未完成前大规模改视觉。
- 不增加与差异化无关的项目。
- 不把首页做成项目、技术栈、PR 和标签的目录。
- 不把每个案例都做成同样长度、同样复杂度的长页面。
- 不让 AI 生图模型自行编造产品界面、架构节点、数据或成果。
- 不把所有证据链接做成醒目的大块内容；证据应轻量、就近、可追溯。
- 不为炫技添加复杂动效或不必要的前端框架。
- 不擅自修改根域名、生产流量、搜索索引或公开边界。

## 6. 当前下一步

先完成 **Phase 1（招聘定位研究）与 Phase 2（案例证据盘点）**，再综合决定最终职业定位和案例组合。内容和阅读路径完成后，才进入视觉任务单与页面改版。

本文件是策略和路线基线，不等于任何尚未完成的 Phase 已验收。


## 7. 2026-11-10 USER-CONFIRMED STRATEGY UPGRADE

<badge>USER-CONFIRMED · 2026-11-10</badge>

The user explicitly confirmed the seven optimization directions and strongly endorsed the six foundational AI PM capabilities. This is a binding strategy decision, not a tentative assistant proposal. Full decision record: [2026-11-10 User-Confirmed Strategy](./portfolio-decisions/2026-11-10-user-confirmed-strategy.md).

### 7.1 Seven directions are confirmed

- **P0:** career positioning and differentiation; case narrative and productized expression; information architecture and continuous reading path.
- **P1:** visual expression and information visualization; evidence and credibility; interaction and user experience.
- **P2:** engineering quality and long-term maintenance.

These priorities remain unchanged. They are not seven parallel workstreams: P0 establishes the content and reading logic; P1 expresses and supports it; P2 protects delivery quality.

### 7.2 The six foundational capabilities are confirmed

The user explicitly endorsed the six capabilities extracted from early-career AI PM hiring research:
1. Scenario insight.
2. Product abstraction.
3. Agent design.
4. Technical judgment.
5. Evaluation and quality measurement.
6. End-to-end product delivery.

They must be reflected in case selection, case narratives and evidence. Do not turn them into a homepage keyword wall.

### 7.3 Add a senior-capability reference layer

The user explicitly requests that senior-role capabilities also be absorbed as an upward reference ("求其上者得其中"). Do not limit the portfolio's thinking depth to graduate hiring requirements.

Use a dual-level model:
- **Foundational competitiveness:** the six capabilities repeatedly required by 2027 graduate / 0–3 year AI PM roles.
- **Advanced reference standard:** product strategy and portfolio management; business value / ROI; platformization and ecosystem; enterprise reliability and governance; cross-organizational leadership and scale delivery; commercialization and go-to-market.

Advanced capabilities should improve the depth of product questions and case reasoning: opportunity cost, roadmap, reusable platform boundaries, build/buy/retire, scale/stop decisions, ROI hypotheses, adoption, governance, enterprise integration and stakeholder operating models.

This is an aspirational design bar, not permission to fabricate senior experience. Distinguish executed, validated, research/design and planned evidence. If there is no actual ROI or production-scale result, present a value hypothesis, metric design or validation plan accurately.

The detailed senior-role sample and capability mapping are in [Portfolio Benchmark & Senior AI PM Capability Research](./portfolio-reviews/2026-11-10-portfolio-benchmark-and-senior-capability-research.md).

### 7.4 Add real portfolio UX benchmark research

The user requests real, strong portfolio examples and their actual presentation patterns, with a freshness window of roughly one to two years. Do not rely only on generic portfolio design articles.

The first benchmark round includes:
- PM / AI PM sites: Serhii Kibitkin, Matthew Stublefield, Kireeti Varma, David Jones, Priank Ravichandar, Elena Calvillo, Gerald Yuan, and Chinese AI PM portfolio examples;
- visual / interaction references: Simon Pan, Marco Cornacchia, Conor O'Hollaren, Mike Matas and Raffi Chilingaryan;
- curated sample and case-structure research: AllthingsPM 2026 and Figma's 2026 portfolio examples.

Use the observed patterns selectively: outcome-first positioning, problem-led case titles, explicit role/accountability, visible decisions and trade-offs, real working proof, lessons/failures, and a clear next action. Borrow visual or interaction patterns only when they support the candidate's identity and the recruiter's reading task. Do not copy gimmicks or turn the homepage into a multi-filter project catalogue.

Research limitations are explicit: AllthingsPM is commercially affiliated with PM training; Figma examples are primarily designer portfolios; UX portfolio recruiter samples do not directly equal AI PM hiring. Treat these as directional evidence, not universal laws.

### 7.5 Execution update

- Phase 1 must map both the six foundational and six advanced capabilities to actual target roles, then identify which are supported by the candidate's evidence.
- Phase 2 must map every candidate project / contribution to capability, personal ownership, evidence maturity, public boundary and interview defensibility.
- Phase 4 must include a real-site UX benchmark and turn the best patterns into a recruiter reading journey and low-fidelity layout.
- Phase 5 must inventory actual product screenshots / official assets first; missing visuals receive a written AI image brief before handoff to a separate image-generation window.
- Multiple local windows may perform independent read-only research / audit tasks. W0 / ChatGPT remains the sole coordinator and reviewer. No concurrent website-code edits or deployment by helper windows without explicit assignment and gate.
- The website remains v2.3 preview. This strategy upgrade is documentation-only; it does not mean a new website version has been implemented.
