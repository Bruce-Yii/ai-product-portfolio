# Portfolio iteration · 2026-11-12 · Explicit Laya decision-model positioning

## Current website artifact

- Canonical branch: `main`.
- Website source commit: `94055a361162ca59512090060ac296f09332c4c0`.
- Vercel Preview: `dpl_5DutEtCKxs6guVWjRqMd5ARa7ozv` · READY · Preview only.
- Immutable review URL: https://ai-product-portfolio-n1o8l66fy-yu-ac3a.vercel.app/
- No production promotion, custom-domain change, DNS change or indexing change.

## Owner-approved homepage copy

> 2026 年 9 月开源后，Laya 曾在 Trendshift 全球趋势榜连续多日位居第 1，并登上 GitTrend 全球周增长榜第 1，单周新增约 2.23 万 Stars。Laya 是一款支持 100+ 种语言的开源 System 1 决策模型。与逐 Token 生成文本的生成式模型不同，它采用非自回归方式，在一次前向推理中直接完成分类、评分和是/否判断，并输出结构化决策结果及对应概率。

Trendshift and GitTrend references remain linked inline in the popularity sentence.

## Correction

The prior copy used “System 1 决策引擎” and did not explicitly identify Laya as a **决策模型**. That made the project category ambiguous. The new copy names the category directly in a standalone sentence: “Laya 是一款……开源 System 1 决策模型。”

The following sentence explains its distinction from token-by-token text generation and describes its actual decision outputs: classification, scoring, yes/no judgment, structured results and corresponding probabilities.

## Scope

- Homepage remains exactly one Laya introduction paragraph.
- “连续多日” remains; no exact four-day duration is stated.
- No new homepage module, metric wall, research block or casebook section was added.
- Laya casebook remains v2.4; existing product chapters and contribution narrative are unchanged.
- Detailed ranking and benchmark research remains internal-only.

## Verification

- Vercel reports deployment `dpl_5DutEtCKxs6guVWjRqMd5ARa7ozv` READY and confirms exact source commit `94055a361162ca59512090060ac296f09332c4c0`.
- Static source check confirms explicit “决策模型” wording, one intro paragraph, inline ranking links and no extra Laya intro blocks.
- Browser visual / click E2E and responsive screenshot checks are not claimed as completed.
