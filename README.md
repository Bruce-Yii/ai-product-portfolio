# AI Product Portfolio

A static, self-contained portfolio website for Bruce Yii.

## Pages

- `/` — main portfolio with three selected Project cards (VIVIC, AWRP × Linear, Personal Context Keyboard), four main Case records, a separate Laya flagship casebook, and a unified index of eight selected open-source contribution groups. Dify remains a grouped contribution entry, not a standalone Case page.
- `/cases/laya/` — standalone Laya casebook with eight chapters and interactive evidence explorations.

## Preview

No build toolchain is required. Serve this directory with any static HTTP server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publication state

This repository is public by the owner's explicit choice. The owner has approved replacing the `hcfind.com` homepage with this portfolio. The site is accessible on the custom domain, but search indexing stays disabled: both pages carry `noindex` metadata, `robots.txt` blocks crawlers, and Vercel adds an `X-Robots-Tag` header. Search indexing remains gated on the content/evidence and visual-permission review in [RELEASE-GATE.md](./RELEASE-GATE.md).

The HTML files are intentionally self-contained. Do not split, regenerate, or replace them with an older modular source package unless a concrete maintenance requirement justifies that change and visual parity is verified.


## Portfolio operating contract

All future windows and agents must read [Portfolio Operating Contract](./docs/PORTFOLIO-OPERATING-CONTRACT.md) before changing the site. It defines three mandatory delivery rules:

1. Turn real work into persuasive, interview-ready AI Product Manager case narratives.
2. Preserve a recruiter-first information architecture instead of producing a project/PR dump.
3. Deploy every website iteration to a directly viewable Vercel Preview or an already-safe domain, then independently verify the live pages.

The contract explicitly permits strong résumé-style framing and product-value positioning while requiring evidence-backed claims and accurate role boundaries. A documentation-only change does not require a website deployment when the website artifact is unchanged.
