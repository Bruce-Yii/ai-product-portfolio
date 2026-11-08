# Static Portfolio QA

Tested against the repository-ready ZIP contents on 2026-11-09. This is a local static-page test, not a live Vercel deployment test.

## Main site

- Eight case records render.
- Initial featured case resolves to the Dify case.
- Work index opens and lists all eight cases.
- Systems filter returns three records.
- Laya case opens and reveals the standalone casebook CTA.
- No horizontal overflow at 1440px, 390px, or 360px viewport widths.
- No browser JavaScript errors observed.

## Laya casebook

- Eight chapters and eight chapter visuals render.
- Chapter disclosure interaction works.
- Four evidence-scenario controls respond and update their selected state.
- No browser JavaScript errors observed.

## Limitations

- This does not verify live external links, Vercel routing, domain configuration, or team permission for project media.
- The older modular authoring package contains a stale `patch_mainline.py` migration script and stale smoke-test assertions; it was not used as the deployment source.


## 2026-11-09 review-branch delta

The following changes were made after the repository-ready ZIP QA above. This addendum does **not** claim that the new branch has received a full browser/E2E pass.

### Changed

- Vivic case: replaced the generic capture → card → confirm journey with a five-part decision/execution responsibility explainer (deterministic rules, model decision, host validation/execution, structured recovery, and result receipt).
- Vivic outcome: added project-internal 60-item API regression, p50 latency, and estimated token-cost evidence with explicit sample and measurement caveats. Added role-attribution, frontend-completion, and media-permission boundaries.
- Cherry Studio #21015: added a synthetic, clearly labelled All / Failed interaction demonstrating the read-only filter semantics. It is not an official product screenshot or real model-check dataset.
- Contribution index: expanded to eight selected upstream project groups. OpenClaw, Dify, Cherry Studio, RAGFlow, and EvalScope counts were checked with GitHub author+merged queries; QwenPaw #7593 and FunASR #3703 were individually verified. Laya's 40/47 and 85-review figures remain the existing casebook snapshot and were not re-counted in this pass.

### Static checks performed on this branch

- Parsed the embedded case, case-detail, contribution, and Vivic-step data blocks.
- Confirmed eight case records, a matching detail record for each, eight contribution groups, and five Vivic steps.
- Confirmed Cherry filter controls, delegated click handling, and initial state wiring are present.
- Confirmed the metrics block is rendered only for the Vivic case.
- Ran Node syntax checking and a standalone mocked-DOM interaction smoke test for the new functions: Vivic step 05 updates the five selected states correctly; Cherry Failed shows only the all-credentials-failed sample row, and All restores all five sample rows.
- Post-PR diff review caught a single-element selector where a multi-element query was required; it was corrected in a subsequent branch commit and the interaction smoke test was rerun.
- Re-fetched the final branch source after the correction and confirmed the five-step handler updates all five step buttons.
- Confirmed page-level noindex, robots.txt crawler blocking, and Vercel X-Robots-Tag remain in place.

### Not performed on this branch

- No full browser render or E2E pass after these changes.
- No new 1440 / 390 / 360px viewport regression pass.
- No live Vercel preview, production deployment, custom-domain change, or search-indexing change.
- No VIVIC private screenshot reuse or team-permission assumption.

The earlier ZIP QA results above remain historical evidence for that ZIP only; they must not be treated as validation of this review-branch delta.


## 2026-11-09 product-language and interaction pass

### Product narrative changes

- Rewrote all eight case cards around a named product area, a concrete Product Question, product levers, delivery state, and a user-facing value proposition.
- Reframed the case navigation as **User Problem → Product Mechanism → Change & Evidence**.
- Rewrote the case copy to foreground user/developer journey, product decision, behavior boundary, and what can actually be proven; implementation details remain as supporting evidence.
- Reframed the eight upstream project groups as product improvements rather than PR-title summaries. PR IDs and merge counts remain visible as evidence.
- Updated the Laya casebook CTA to identify its four product systems and eight chapters.

### Product interactions

- Added a synthetic dsh-market notification interaction with two distinct user decisions: try to find the plugin, or stop showing the notice. Dismissing the notice explicitly does not repair or reinstall the plugin.
- Corrected delegated event routing so Cherry's All / Failed controls and the dsh-market controls are reachable by clicks.
- The dsh-market interaction is labelled as a synthetic reconstruction, not an official product UI.
- Re-verified dsh-market #764 as merged on 2026-09-29 and updated the case's delivery status and outcome; public case approval remains pending.

### Validation performed

- Parsed the eight case records, their matching detail records, and the eight contribution groups.
- Confirmed every case has a non-empty Product Question and the new product-oriented navigation labels are present.
- Parsed the complete inline JavaScript block successfully.
- Ran a Node mocked-DOM interaction smoke test:
  - Vivic step 05 selects the correct responsibility state.
  - Cherry Failed filters to only the all-credentials-failed sample; All restores all five sample states.
  - dsh-market Find leaves the notice visible; Stop showing removes only the notice and explicitly preserves the plugin's unavailable state.
- Re-fetched the branch after the selector correction and verified the final source contains no malformed triple-dollar selector.

### Still not performed

- No full browser render, cross-browser check, or E2E pass on the branch.
- No new desktop/mobile viewport regression pass.
- No Vercel preview deployment, production deployment, domain change, or search-indexing change.
- No change to the Laya standalone casebook file; it remains the existing v2.4 casebook.
