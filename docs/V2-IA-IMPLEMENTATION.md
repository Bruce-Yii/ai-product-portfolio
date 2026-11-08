# Portfolio v2 — Information Architecture & Implementation

## Goal

Reposition the portfolio from an open-source-contribution-heavy homepage to a product-led presentation of product judgment, Agent systems, architecture, delivery, and upstream collaboration.

## Information architecture

### Home
1. **Hero** — concise AI Product Manager positioning and product-to-delivery proposition.
2. **Product & System Projects** — five first-class projects:
   - Vivic — Agent decision and execution loop.
   - Agent Evaluation Lab — evaluation validity, independent verification, and evidence provenance.
   - AWRP / Agent Workflow — long-running task identity, runs, evidence, and acceptance.
   - Personal Context Layer — user-controlled, traceable personal context infrastructure.
   - Make Again 2.0 — product discovery and technical feasibility research; MVP is not locked and no shipped-product or user-outcome claim is made.
3. **Laya flagship** — a dedicated open-source product collaboration section linking to the existing eight-chapter casebook. Laya's GitHub contribution metrics are moved here rather than dominating the first screen.
4. **Upstream Product Contributions** — concise project-level index for OpenClaw, Dify, Cherry Studio, RAGFlow, QwenPaw, EvalScope, and FunASR.
5. **Capabilities & Evidence** — six capability groups, each linked to relevant cases.
6. **About** — retained as a separate view.

### Work
- Long-running Project directory first.
- Independent Case studies second, with Work / Capability browsing.
- Project-level upstream Contribution index retained as a separate evidence layer.

### Content model
- **Project:** a sustained body of work or product initiative.
- **Case:** a coherent product problem and decision story.
- **Contribution:** a traceable action or upstream outcome (Issue, PR, review, design discussion, implementation, handoff).
- **Evidence:** the source record supporting a claim.

A Project may contain multiple Cases; each Case may link to multiple Contributions and Evidence. A repository or PR count alone does not qualify as a standalone Case.

## Product-card presentation

The four project cards use original explanatory flow diagrams, not fabricated product screenshots:
- Vivic: user intent → model decision → host check → action → receipt.
- Agent Evaluation Lab: task → environment → evidence → verifier → result.
- AWRP: task → run → evidence → acceptance.
- Personal Context Layer: sources → raw facts → context → AI gateway.

The diagrams explain the system responsibility boundaries; they do not claim to be captured production UI.

## Laya presentation

- Kept the existing dedicated route at `/cases/laya/`.
- Homepage gives Laya a flagship feature area with its four product systems: intent fidelity, decision trust, controlled adoption, and developer contract.
- Metrics retain their original definitions: 47 authored PRs, 40/47 merged, and 85 reviewed-by matches. The reviewed-by query is explicitly distinguished from authored PR counts.

## Public-facing content corrections

- Removed the public-facing `INTERNAL EDITORIAL REVIEW / NOT FOR PUBLIC RELEASE` labels.
- Replaced internal editorial status wording with factual project / delivery descriptions.
- Removed private Notion and Linear URLs from the public case payload; narrative evidence now renders only explicitly public GitHub records. Design-stage cases without public repository artifacts say so instead of exposing private workspace references.
- Rewrote role descriptions to explain personal contribution and attribution in portfolio language, removing internal window/review process wording.
- Kept project-stage and evidence boundaries explicit:
  - Vivic: backend internal validation is not described as external user impact.
  - Agent Evaluation Lab: 9 valid baseline trials are not presented as proof of an improvement.
  - AWRP / Project OS: current workflow use is distinguished from the new OS design stage.
  - Cherry Studio and dsh-market: merged PRs are not represented as proof of a release in every distribution.
  - Personal Context Layer: architecture and early prototype are not described as a launched cross-platform product.
  - Laya metrics are identified as GitHub query snapshots, not product KPIs or maintainer status.
- Hidden the internal design inspector from the public navigation.
- Fixed the Capability browser mapping so all six capability groups resolve to relevant Cases.

## Preview and release state

- Development branch: `portfolio/v2-information-architecture`.
- Implementation commit: `59a7632949c1a214aef4f9e447aea1e4713ba019`.
- Vercel Preview deployment: `dpl_Gthev3cbExjvqMakspqSHsAe9Pev` (READY; latest preview after public-evidence cleanup).
- Preview URL: https://ai-product-portfolio-jfthd4hd2-yu-ac3a.vercel.app
- Production remains on v1 deployment `dpl_DU86D71ntVNtihTr4spaUQZBXETr` at https://hcfind.com.
- The V1 freeze branch remains `freeze/portfolio-v1-2026-11-09`.
- No production alias, DNS, or nameserver changes were made.
- `noindex, nofollow, noarchive` remains enabled on the preview and Laya casebook.

## Verification

- Vercel deployment state: READY.
- Vercel build events: deployment completed.
- Inline JavaScript syntax parse: PASS.
- Seven Case records retained.
- Four homepage Project cards resolve to existing Case IDs.
- Five capability groups resolve to existing Case IDs.
- Homepage and Laya casebook routes return HTTP 200.
- Preview runtime error/fatal log query for the latest 30 minutes: no matching logs.
- Production domain aliases still point to the frozen V1 deployment.
- Full visual browser review and responsive E2E remain outstanding; the owner should inspect the preview before any production release.

## Next

1. Review the preview's visual hierarchy and copy.
2. Adjust card density, mobile layout, and project ordering from actual browser review.
3. Review each Case page for public evidence, attribution, and status accuracy.
4. Only after review, run responsive E2E and request explicit production release approval.
