# Portfolio v2 QA & Release Verification

Snapshot: 2026-11-09 (Asia/Shanghai). This report distinguishes source checks, deployed HTTP checks, and visual/E2E checks that have not yet been performed.

## Source and deployment under review

- Repository: `Bruce-Yii/ai-product-portfolio`.
- Active branch: `portfolio/v2-information-architecture`.
- Website source commit deployed to Preview: `34c7bca6f389be2fc32a443ca1b96552386aa50c`.
- The branch contains subsequent documentation-only commits; no website source changes were made after the deployed Preview commit.
- V1 frozen baseline: `freeze/portfolio-v1-2026-11-09` at `2349e1a7a6b873b45a10e56830ef09c6679edb1c`.
- V2 preview deployment: `dpl_6vjtXdz4UeurPGxFgMxEwRL7wauJ` · READY.
- Preview URL: https://ai-product-portfolio-rn06syrk1-yu-ac3a.vercel.app
- The preview was explicitly deployed from the exact GitHub branch and commit. Automatic push-to-deploy was not relied upon or verified.

## Content model integrity

- Four main Case records:
  - Laya — `laya-decision-integrity`
  - VIVIC — `product`
  - AWRP × Linear — `agent-workflow-governance`
  - Personal Context Keyboard — `personal-context-layer`
- Four Case detail payloads exist and match the four Case records.
- Three homepage Project cards exist and resolve to VIVIC, AWRP × Linear, and Personal Context Keyboard.
- Nine contribution entries exist: Laya casebook plus eight repository-level groups (OpenClaw, Dify, RAGFlow, Cherry Studio, QwenPaw, FunASR, dsh-market, Google ADK).
- Four capability groups exist; all Case references resolve.
- Google ADK is labelled Draft / not merged.
- Make Again 2.0, Agent Evaluation Lab, EvalScope, and standalone Cherry Studio / dsh-market Case pages are absent from the public main-site source.
- The Laya casebook remains a separate route with eight chapter anchors; its source file was not modified in this revision.

## Product claims and evidence boundaries

- Laya GitHub search snapshot (2026-11-09): 47 authored PR matches, 40 merged PR matches, and 85 `reviewed-by:Bruce-Yii` query matches. These are three distinct query results, not additive totals or product KPIs.
- VIVIC: 53/60 → 59/60 is presented as an internal fixed API regression result; p50 3,625ms → 1,807ms is presented as an internal latency comparison. Neither is labelled as real-user success or production-wide improvement. Full front-end completion, browser scenario coverage, and real-device voice remain unverified.
- AWRP × Linear: historical protocol/code practice and current Linear × Notion workflow are distinguished from the unshipped standalone Agent Project OS design. DeepSeek Super-agent is a third-party comparison reference, not personal work.
- Personal Context Keyboard: product definition, architecture, and early simulator work are distinguished from a released cross-platform product.
- Contribution records retain upstream PR/evidence links; Google ADK remains explicitly unmerged.

## Static and source checks

- Parsed embedded Case, Case Detail, Home Project, Contribution, and Capability data blocks.
- Confirmed 4 Cases / 4 details / 3 Project cards / 9 contribution entries / 4 capability groups.
- Confirmed all Project and Capability Case references resolve.
- Confirmed the excluded standalone project names are absent from the public main-site source.
- Confirmed no private Notion or Linear URLs are present in the public main-site HTML.
- Complete inline JavaScript parse using the V8 parser: PASS.
- Confirmed the homepage hero contains “我是最强 AI 产品经理。”.
- Confirmed the main-site base palette uses cool-white / blue-gray neutrals rather than the former beige base.
- Confirmed page-level noindex metadata, `robots.txt` crawler blocking, and Vercel `X-Robots-Tag` configuration remain present.

## Vercel build and HTTP checks

- Deployment: `dpl_6vjtXdz4UeurPGxFgMxEwRL7wauJ` · READY.
- Build events show the intended GitHub branch and commit were cloned; static build completed; deployment completed.
- Homepage: HTTP 200; expected title and Chinese hero headline present.
- Laya casebook: HTTP 200; title and existing casebook version v2.4 present.
- Both routes return `X-Robots-Tag: noindex, nofollow, noarchive`.
- `/robots.txt`: HTTP 200; body contains `User-agent: *` and `Disallow: /`.
- `www.hcfind.com`: HTTP 308 redirect to `hcfind.com`.

## Current production-domain mapping

- `hcfind.com` and `www.hcfind.com` are attached to Vercel project `hcfind-home`, deployment `dpl_4CAprhY16boHWmPnKgQwqyToDHzx`.
- The separate `ai-product-portfolio` project has production deployment `dpl_DU86D71ntVNtihTr4spaUQZBXETr` on its own Vercel aliases, not the custom domain.
- The custom-domain page and the `ai-product-portfolio` V1 production alias returned byte-identical HTML during the audit. The live custom domain still displays the old seven-Case V1 content.
- No custom-domain reassignment, DNS change, nameserver change, production deployment, or indexing change was made.

## Not performed / remaining release blockers

- No full browser screenshot review, cross-browser pass, or responsive E2E run at 1440px / 390px / 360px in this pass.
- No permission confirmation for VIVIC team visuals or private repository screenshots.
- No final owner approval of the exact V2 release candidate.
- No production alias reassignment or search-indexing change.
- The Vercel custom-domain ownership mismatch must be resolved as part of an explicitly approved release plan.

A READY Preview and passing static checks do not constitute production approval.
