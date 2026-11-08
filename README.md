# AI Product Portfolio

A static, self-contained portfolio website for Bruce Yii.

## Pages

- `/` — main portfolio with eight selected case studies and a contribution index.
- `/cases/laya/` — standalone Laya casebook with eight chapters and interactive evidence explorations.

## Preview

No build toolchain is required. Serve this directory with any static HTTP server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publication state

This repository is public by the owner's explicit choice. The website itself remains an editorial review build: both pages carry `noindex` metadata, `robots.txt` blocks crawlers, and Vercel adds an `X-Robots-Tag` header. Repository visibility is not approval for a public portfolio launch. See [RELEASE-GATE.md](./RELEASE-GATE.md).

The HTML files are intentionally self-contained. Do not split, regenerate, or replace them with an older modular source package unless a concrete maintenance requirement justifies that change and visual parity is verified.
