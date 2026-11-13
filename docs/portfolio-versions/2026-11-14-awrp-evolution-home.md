# Portfolio iteration · 2026-11-14 · AWRP evolution draft and homepage preview

## Identity

- Canonical branch: `main`.
- Website artifact source: `d99ba1c2879b995292d9331be167b2c48120d03c`.
- Vercel deployment: `dpl_FHsKLEejF5rj5iP3t9S8Yvbd4cSc` · READY · Preview only.
- Review URL: https://ai-product-portfolio-p7j00y15v-yu-ac3a.vercel.app/
- Draft: [../portfolio-decisions/2026-11-14-awrp-linear-evolution-draft.md](../portfolio-decisions/2026-11-14-awrp-linear-evolution-draft.md).

## User-confirmed content intent

The narrative has four historical/conceptual stages:
1. **AWRP** — independently designed and implemented protocol, CLI and tests.
2. **Linear** — adaptation of existing project management / task collaboration workflows, not modifications to Linear's upstream source.
3. **dsh-superagent** — comparison with the research prototype published by the DeepSeek Harness team; the released software name is `dsh-superagent`, not an invented product title.
4. **Agent OS** — further independent productization based on those inputs; distinguish proposals from implementation.

Homepage headline: **让 Agent 从一次性执行，走向长期项目协作。**

## Implemented website changes

- Only the AWRP × Linear featured card's headline, teaser, process visual, and local card styling were changed.
- Conceptual four-stage schematic uses text and CSS, not synthetic screenshots; existing navigation from the card to the case remains.
- The content draft is stored separately from public product PRD/engineering contracts.
- No changes to Laya copy, casebook, Hero, other featured project selection, Open Source Contribution selection or site-wide analytics.

## Verification and remaining gates

- Vercel reports READY for exactly `d99ba1c2879b995292d9331be167b2c48120d03c` and deployment `dpl_FHsKLEejF5rj5iP3t9S8Yvbd4cSc`.
- HTTP 200 verified on `/` and `/cases/laya/`; deployment identity verified in HTML.
- JavaScript syntax checks passed, plus static checks for four stages, selected headline, Laya intro and noindex.
- Browser-generated screenshots, card click-through and mobile clipping tests remain **not verified**. Do not count the Preview as browser E2E accepted.
- Production, domains, DNS and indexing untouched.

## Evidence

- [AWRP](https://github.com/Bruce-Yii/awrp)
- [AWRP × Linear / Agent Project OS development references](https://github.com/Bruce-Yii/agent-project-os)
- [DeepSeek Harness dsh-superagent research prototype](https://github.com/deepseek-ai/dsh-superagent-prototype)
