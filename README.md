# AI Product Portfolio

A static, self-contained portfolio website for Bruce Yii.

## Current content model

- `/` — three selected product projects (VIVIC, AWRP × Linear, Personal Context Keyboard), four main Case records (Laya, VIVIC, AWRP × Linear, Personal Context Keyboard), and eight repository-level open-source contribution groups.
- Laya remains a separate flagship casebook, linked from the homepage and contribution index.
- `/cases/laya/` — standalone Laya casebook with eight chapters and interactive evidence explorations.

The site is intentionally product-led: each Case explains the user/job, product problem, product question, decision and trade-off, mechanism, evidence, personal role, and limits. Repository names and PR counts support the story; they are not the story.

## Working branches

- Active v2 development: `portfolio/v2-information-architecture`.
- V1 rollback baseline: `freeze/portfolio-v1-2026-11-09`.
- The repository default `main` is an older snapshot and is not the active content or deployment source.

## Local preview

No build toolchain is required. Serve this directory with any static HTTP server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publication state

The repository is public by the owner's explicit choice. The v2 branch is a review candidate and has not been promoted to the public custom domain.

The live `hcfind.com` domain still serves the v1 portfolio content. Its custom-domain aliases are currently attached to a separate Vercel project (`hcfind-home`); the `ai-product-portfolio` project hosts the v2 preview and a separate Vercel production alias. Do not reassign the custom domain or change DNS without approval of the exact release candidate.

Search indexing remains disabled: both pages carry `noindex` metadata, `robots.txt` blocks crawlers, and Vercel adds an `X-Robots-Tag` header. Search indexing requires a separate release decision.

The HTML files are intentionally self-contained. Do not split, regenerate, or replace them with an older modular source package unless a concrete maintenance requirement justifies that change and visual parity is verified.
