# AI Product Portfolio

> **Current version authority:** [docs/VERSION-REGISTRY.md](./docs/VERSION-REGISTRY.md). The only active development branch is `main`. Current website source: `4298428bebd9db575d399968c0ad09617ff82185`; current Vercel Hobby Preview: https://ai-product-portfolio-a8fr6p2u4-yu-ac3a.vercel.app/ (public, no login). Homepage and Laya routes return HTTP 200; noindex and robots blocking remain enabled. Browser visual/click E2E and responsive/image QA remain in progress. Historical branches are frozen snapshots, not active workstreams.

A static, self-contained portfolio website for Bruce Yii.

## Pages

- `/` — main portfolio with three selected Project cards (Personal Context Keyboard, VIVIC, AWRP × Linear), four main Case records, a separate Laya flagship casebook, and a unified index of eight selected open-source contribution groups. Dify remains a grouped contribution entry, not a standalone Case page.
- `/cases/laya/` — standalone Laya casebook with eight chapters and interactive evidence explorations.

## Preview

No build toolchain is required. Serve this directory with any static HTTP server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publication state

This repository is public by the owner's explicit choice. The owner approved a dedicated portfolio subdomain; this does not replace the existing `hcfind.com` homepage. The portfolio subdomain is attached to this Vercel project; its current deployment mapping and approval state are maintained in [docs/VERSION-REGISTRY.md](./docs/VERSION-REGISTRY.md). The existing root domain `hcfind.com` and `www.hcfind.com` remain separate from this portfolio subdomain. Search indexing stays disabled: both portfolio pages carry `noindex` metadata, `robots.txt` blocks crawlers, and Vercel adds an `X-Robots-Tag` header. Search indexing remains gated on the content/evidence and visual-permission review in [RELEASE-GATE.md](./RELEASE-GATE.md).

The HTML application code/styles are intentionally self-contained; sourced VIVIC images live in `assets/vivic/` with an audit trail. Do not split, regenerate, or replace the page with an older modular source package unless a concrete maintenance requirement justifies that change and visual parity is verified.

## Historical v2.3 review (superseded as the current version by the version registry)

- **Strategy and phased roadmap:** [Portfolio Strategy & Roadmap (2026-11-10)](./docs/PORTFOLIO-STRATEGY-AND-ROADMAP-2026-11-10.md).
- **Binding execution contract:** [Portfolio Operating Contract](./docs/PORTFOLIO-OPERATING-CONTRACT.md).
- Source work branch: `portfolio/v2.3-real-assets-2026-11-10` (v2.2 freeze preserved).
- Historical review URL at the time: https://portfolio.hcfind.com/ (this domain now serves the older unapproved `1294634` candidate; do not use it for the current review).
- Media: five real historical screenshots, dated 2026-11-01, with provenance in [assets/vivic/README.md](./assets/vivic/README.md); never present them as screenshots of the 2026-11-05 backend release.
- [v2.3 QA and evidence review](./docs/portfolio-reviews/2026-11-10-v2.3.md) and [version history](./docs/portfolio-versions/README.md).
- Search-indexed/production publication remains gated; root `hcfind.com` untouched.

- Source work branch: `portfolio/v2.3-real-assets-2026-11-10` (v2.2 freeze preserved).
- Historical review URL at the time: https://portfolio.hcfind.com/ (this domain now serves the older unapproved `1294634` candidate; do not use it for the current review).
- Media: five real historical screenshots, dated 2026-11-01, with provenance in [assets/vivic/README.md](./assets/vivic/README.md); never present them as screenshots of the 2026-11-05 backend release.
- [v2.3 QA and evidence review](./docs/portfolio-reviews/2026-11-10-v2.3.md) and [version history](./docs/portfolio-versions/README.md).
- Search-indexed/production publication remains gated; root `hcfind.com` untouched.


## Portfolio operating contract

All future windows and agents must read [Portfolio Operating Contract](./docs/PORTFOLIO-OPERATING-CONTRACT.md) before changing the site. It defines three mandatory delivery rules:

1. Turn real work into persuasive, interview-ready AI Product Manager case narratives.
2. Preserve a recruiter-first information architecture instead of producing a project/PR dump.
3. Deploy every website iteration to a directly viewable Vercel Preview or an already-safe domain, then independently verify the live pages.

The contract explicitly permits strong résumé-style framing and product-value positioning while requiring evidence-backed claims and accurate role boundaries. A documentation-only change does not require a website deployment when the website artifact is unchanged.


- **2026-11-10 user-confirmed strategy decision:** [dated decision record](./docs/portfolio-decisions/2026-11-10-user-confirmed-strategy.md).
- **Advanced AI PM capability + real portfolio UX benchmark:** [research report](./docs/portfolio-reviews/2026-11-10-portfolio-benchmark-and-senior-capability-research.md).
- **Parallel Phase 1–2 task pack:** [W1 hiring capability matrix · W2 portfolio UX benchmark · W3 personal evidence audit](./docs/PORTFOLIO-WINDOW-DISPATCH-2026-11-10.md).
