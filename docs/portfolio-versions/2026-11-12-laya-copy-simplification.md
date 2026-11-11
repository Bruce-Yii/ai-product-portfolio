# Portfolio iteration · 2026-11-12 · Laya copy simplification

## Current website artifact

- Canonical branch: `main`.
- Website source commit: `9b4b9b8f89f36d86022dcdbd45cc392b465aa5d0`.
- Vercel Preview: `dpl_BrHWx1PddQDNwVFpeaGFpX6oVbvr` · READY · Preview only.
- Immutable review URL: https://ai-product-portfolio-aqr3oe3gi-yu-ac3a.vercel.app/
- No production promotion, custom-domain change, DNS change or indexing change.

## Owner correction and final presentation rule

The previous Laya impact expansion overfilled a portfolio page with research-report material. It is withdrawn as a public presentation direction.

The correct public presentation is:
1. Homepage Laya feature: exactly one short paragraph.
2. Lead with the project's historical popularity and open-source momentum.
3. Follow with one brief explanation that Laya is a multilingual, non-autoregressive, open-source System 1 decision model.
4. Do not add a ranking wall, metric dashboard, ecosystem inventory, benchmark section or a new Global Momentum section to the Laya casebook.
5. Keep the standalone casebook at its pre-expansion v2.4 structure. Do not repeat popularity research in the casebook.
6. Detailed ranking snapshots, source links, technical benchmark findings and caveats remain internal research material only.

## Exact homepage paragraph

> 2026 年 9 月开源后，Laya 曾连续 4 天登上 Trendshift 全球趋势榜第 1，并位列 GitTrend 全球周增长榜第 1，单周新增约 2.23 万 Stars，迅速成为当时备受关注的 AI 开源项目。它是一个支持 100+ 种语言的非自回归 System 1 开源决策模型，可通过单次前向推理完成选择、评分与判断。

The Trendshift and GitTrend references are linked inline. No other popularity metrics are placed in the public introduction.

## Changes made

- Replaced the three-paragraph homepage Laya introduction with the single paragraph above.
- Removed the extra homepage momentum / ecosystem paragraphs and their dedicated CSS.
- Restored `cases/laya/index.html` byte-for-byte to the pre-expansion v2.4 source snapshot (the parent of the first impact-section change).
- Removed the Global Momentum section, its navigation item, ranking cards, ecosystem signals, benchmark disclosure and related CSS.
- Preserved the existing Laya product chapters, contribution narrative, 40-PR metrics, four product systems, casebook navigation and noindex controls.
- Preserved the homepage project order and all other project cards.

## Source-level acceptance

- Homepage contains exactly one Laya intro paragraph.
- No homepage momentum / ecosystem intro paragraphs remain.
- Casebook title is v2.4 and has no `global-impact`, `impact-card` or `impact-benchmark` elements.
- Casebook navigation is restored to 产品能力 / 上游协作 / 贡献规模 / 证据索引.
- Existing Laya product chapters and contribution content remain intact.
- Homepage and casebook retain page-level noindex.

## Deployment / QA

- Vercel reports `dpl_BrHWx1PddQDNwVFpeaGFpX6oVbvr` READY and confirms the exact website source commit `9b4b9b8f89f36d86022dcdbd45cc392b465aa5d0`.
- Preview only; no production or domain changes.
- Static source checks passed. Browser visual / click E2E and responsive screenshot checks have not been claimed as completed.
