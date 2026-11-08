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
- Final source audit caught a duplicated `CASE_DETAILS` declaration introduced during a data-only rewrite; it was corrected, the final branch was re-fetched, and the complete inline JavaScript syntax check passed.

### Still not performed

- No full browser render, cross-browser check, or E2E pass on the branch.
- No new desktop/mobile viewport regression pass.
- No Vercel preview deployment, production deployment, domain change, or search-indexing change.
- No change to the Laya standalone casebook file; it remains the existing v2.4 casebook.


## 2026-11-09 portfolio optimization pass

Target: `portfolio/modular-mainline-2026-11-09`. This update is part of the existing review PR; it does not merge to `main` or deploy the site.

### Product and presentation changes

- Replaced the generic "Making AI useful" hero with an explicit **AI Product Manager** positioning statement and a concrete product promise: user-understandable, executable, verifiable AI products.
- Reordered featured cases to **Vivic → Laya → Cherry Studio → Dify**, keeping the strongest team-product story first and bringing the Laya casebook into the second featured position.
- Reframed the About copy around the target role and the actual product / upstream collaboration work.
- Removed the internal "0 public approved" count from the visible Work index summary.

### Case evidence and narrative changes

- Vivic now presents the fixed API test-set result as **53/60 → 59/60** and p50 request-to-result latency as **3,625ms → 1,807ms**. The third metric records tool-entry consolidation **27 → 14**. All are labelled as internal project/test-set evidence, not real-user success or production-wide metrics.
- Laya now presents **47 authored / 40 merged / 85 reviewed-by query matches**, with the 85-query result explicitly separated from authored PR counts.
- Case detail pages now build public source links from each case's own public GitHub evidence records. Private Notion / Linear sources are not rendered as public evidence.
- Laya casebook metadata and its upstream-footprint snapshot date now identify the 2026-11-09 GitHub query snapshot. The page remains noindex.

### Source-level validation performed after the edits

- Complete inline JavaScript block parsed successfully using the JavaScript Function parser.
- Main-site data parsed: **8 case records**, **8 matching case-detail records**; every case ID resolves to a detail record.
- Featured order is explicitly Vivic, Laya, Cherry Studio, Dify.
- Public source-link data is present for Dify (1), Cherry Studio (2), dsh-market (2), and Laya (4); AWRP's DeepSeek link is presented as a public reference, not as the author's contribution.
- Confirmed the updated metric strings, Laya query labels, and the standalone Laya page's noindex metadata.
- Confirmed `robots.txt` remains `Disallow: /` and `vercel.json` retains `X-Robots-Tag: noindex, nofollow, noarchive`.

### Not performed

- No full browser render, cross-browser interaction regression, or new 1440 / 390 / 360px viewport pass after this optimization pass.
- No Vercel preview, production deployment, domain change, or indexing change.
- The existing PR remains a review branch; this pass does not authorize public launch.


### Editorial polish added after the source-level pass

- Tightened the Dify, Agent Evaluation, AWRP, and dsh-market case titles for faster scanning while retaining their original product meaning.
- Replaced generic placeholder captions with case-specific explanatory captions for Agent Evaluation, AWRP, dsh-market, Laya, and Personal Context Layer. Captions explicitly identify the visuals as illustrative models / workflows, not product screenshots.
- Shortened the compact header and hero signature line to avoid mobile-width overflow risk.
- Re-parsed the complete inline JavaScript after these edits: **PASS**. Re-checked 8 case records, 8 matching detail records, all 8 distinct captions, and the explicit Vivic → Laya → Cherry → Dify featured order.


### Second iteration · homepage evidence strip

- Added a compact proof strip directly between the hero and featured case studies.
- It surfaces the Laya upstream collaboration footprint: **47 authored PRs**, **40/47 merged**, and **85 reviewed-by query matches**.
- The note explicitly identifies the 2026-11-09 GitHub snapshot and separates reviewed-by matches from authored PR counts.
- Added a three-column mobile layout for the metrics and a compact evidence note.
- Re-ran source checks: inline JavaScript **PASS**; 8 case records / 8 detail records; proof-strip values and mobile CSS present; main and Laya noindex protections unchanged.


### Preview deployment · second iteration

- Deployed branch commit `14884d23f4db1cf99de4182055e7934bf890725a` to Vercel preview.
- Preview URL: https://ai-product-portfolio-48me6yklu-yu-ac3a.vercel.app
- Post-deploy fetch returned HTTP 200 and confirmed the updated title, proof-strip markup and values, mobile proof-strip CSS, and `X-Robots-Tag: noindex, nofollow, noarchive`.
- This is a separate Vercel project / preview URL. The existing `hcfind.com` domain remains attached to `hcfind-home`; no domain binding or DNS record was changed.


### Production domain replacement · 2026-11-09

- Created Vercel **production** deployment `dpl_8SPG1qJMXwvCTEuv9Czj47hApzTL` from branch commit `89220a0ec51bc2309c24570fde882425caf58886`; deployment state **READY**.
- Reassigned `hcfind.com` from `hcfind-home` to `ai-product-portfolio`. Existing `www.hcfind.com` alias now redirects to `hcfind.com` with HTTP **308**.
- Verified `https://hcfind.com` returns HTTP **200** and the portfolio title; `https://hcfind.com/cases/laya/` also returns HTTP **200**.
- Verified the old `hcfind-home` project no longer owns either custom-domain alias. Its Vercel project and prior deployment were left intact; only the aliases were reassigned.
- No DNS records or nameservers were changed.
- Search indexing intentionally remains blocked by page-level `noindex`, `robots.txt`, and Vercel `X-Robots-Tag` pending the remaining evidence / visual-permission review. This is not a search-indexing release.
- Full browser / responsive E2E testing remains outstanding; this deployment check verifies HTTP routing and rendered HTML, not every interactive path.


### Dify presentation correction · 2026-11-09

- Replaced the Dify homepage / Work-preview media placeholder with an inline HTML/CSS mechanism diagram. It shows the exact PR #42171 behavior: Notion `rich_text` contains text, mention, and equation segments; the old text-only extraction skips mention/equation; the fix reads `plain_text` first and falls back to `text.content`.
- Replaced the Dify case-cover placeholder with the same mechanism-led visual. It is explicitly an explanatory reconstruction, not a Dify product screenshot.
- Replaced the Dify detail-page mock "knowledge import" UI with a neutral data-extraction comparison. Before/After controls now show the retained and skipped segments and the actual fallback rule.
- Removed the redundant M07 pending-media slot from the Dify case; the interactive mechanism explanation already covers the relevant behavior.
- Corrected the Dify contribution index summary to make clear that the four merged PRs are separate improvements: Notion rich-text extraction (#42171), keyword-row validation (#42212), annotation CSV literal-NA preservation (#42221), and PDF worker base-path resolution (#42956).
- Updated the media registry statuses and the case's visual/evidence boundary copy. No RAG accuracy, user KPI, or business-conversion lift is claimed.
- Source validation: complete inline JavaScript parse **PASS**; 8 case records / 8 detail records; Dify visual and case-cover functions present; old fake knowledge-import window absent; M02/M07 pending placeholders absent from Dify rendering paths.
- Interaction smoke test with a mocked DOM: Before shows text retained / mention and equation skipped; After shows all three segments retained and the correct `plain_text`-first / `text.content` fallback rule; ARIA pressed state switches correctly.
- Vercel staging deployment `dpl_D5epUSEsHZ9RCSe68ijXmD1VX2d9` is **READY**. Main page fetch returned HTTP 200 and confirmed the new Dify visual, interactive explainer, no old mock UI, no M02/M07 placeholders, and retained `noindex` response header.
- Full visual browser review and responsive E2E have not yet been run; the checks above are source-level, mocked interaction, and post-deploy HTML checks.


### Dify correction promoted to production · 2026-11-09

- Production deployment: `dpl_5uFv25CXDq8DkmD64NZMU7FHDvcK` · READY · commit `d43c5f51c391906670653f4aa4fab5b5e080632e`.
- Reassigned `hcfind.com` and `www.hcfind.com` to the new production deployment; `www` remains a 308 redirect to the root domain.
- Post-deploy verification: `https://hcfind.com` HTTP 200; page source contains the Dify inline visual and interactive rich-text explainer; M02 pending placeholder and faux knowledge-import UI are absent; `X-Robots-Tag: noindex, nofollow, noarchive` remains.
- No DNS records or nameservers changed.


## 2026-11-09 case admission correction — Dify demoted to Contribution

This section supersedes the earlier Dify visual/case-page implementation notes above. Those notes documented a presentation fix to an incorrectly admitted standalone Case; they do not represent the final content decision.

### Content decision

- Dify is **not** a standalone Case. It is removed from the CASES collection, homepage featured cases, Work case browser, and case-detail payload.
- Dify remains in the homepage and Work-page Open Source Contributions index as one repository-level contribution group.
- The four merged PRs are listed as independent contributions, not as stages of one feature or one shared product problem:
  - #42171 — Notion rich-text extraction (plain_text first, text.content fallback).
  - #42212 — moderation keyword-row validation ignores trailing blank rows.
  - #42221 — annotation CSV import preserves literal NA.
  - #42956 — PDF.js worker resolves correctly under a configured base path.
- Dify-specific media briefs, visual, Before/After demo, and case-only copy were removed. The generic open-source artwork path no longer uses Dify-specific content.
- Remaining main-site Case records: **7**. The homepage's initial featured Case is now the first selected Case (Vivic), not Dify.

### Case admission rule

A repository grouping or merged-PR count is not enough to justify a standalone Case. Admission requires a coherent product problem/user journey, attributable personal decisions, primary evidence, meaningful validation, and a defensible outcome. Independent issues remain Contributions under their project/repository grouping.

### Static checks

- Parsed the embedded JavaScript after the change.
- Confirmed 7 Case records with sequential numbers 001–007.
- Confirmed all Case records resolve to a matching Case detail payload.
- Confirmed homepage feature IDs resolve to existing Case records; Dify is absent from CASES and FEATURED_ORDER.
- Confirmed Dify remains in VERIFIED_CONTRIBUTIONS with four distinct PR IDs.
- Confirmed no Dify-only visual, case interaction, or M02/M04/M07 media records remain.
- Full browser visual review, responsive E2E, and live deployment verification are pending for this revised candidate.

### Release boundary

- This is a review-branch correction only.
- The current production deployment still contains the prior eight-case candidate.
- Do not reassign hcfind.com to this revision until the owner approves the revised candidate.


### Revised candidate staging verification

- Vercel staging deployment: dpl_7SMd3LiyJgjDmuc6JqoiD3oGDweT · READY · commit a166982d993e83b87eccd6a545d9686585540fc4.
- Preview: https://ai-product-portfolio-lxwa40l6c-yu-ac3a.vercel.app
- Main page: HTTP 200; seven Case records; Dify absent from Case records and featured order; Dify present in the contribution index with four independent PR identifiers; Dify-specific visual and demo absent.
- Laya casebook route: HTTP 200.
- Both routes retain X-Robots-Tag: noindex, nofollow, noarchive.
- No production alias or DNS change was made for this revised candidate.
- This remains source-level and post-deploy HTML verification; full visual browser review and responsive E2E are still outstanding.


### Final source cleanup and staging recheck

- Removed residual Dify-specific CSS and the stale hardcoded Dify source-link label; the generic source-art path is no longer Dify-branded.
- Re-ran complete inline JavaScript parsing: PASS.
- Reconfirmed 7 cases / 7 matching detail payloads, sequential IDs 001–007, and all three featured IDs resolve.
- Reconfirmed Dify appears only in the contribution index and About text; no Dify case ID, visual, demo, media slot, or featured entry remains.
- Latest staging deployment: dpl_HaFhgdtRW1TdMhnuJ1jvXZimpBB4 · READY · commit 4b9000ba59b904fdd6afb0569f49a086c6fa5d68.
- Latest preview: https://ai-product-portfolio-5lrrbku69-yu-ac3a.vercel.app
- Homepage and /cases/laya/ both return HTTP 200 and retain noindex.


## Portfolio v2 — project-first preview · 2026-11-09

- Development branch: portfolio/v2-information-architecture.
- Source commit: dce2e80a89a7e6ddf11b0e3c3ee5d881cc524400.
- Vercel Preview: dpl_6JNgwJyVS2fYzf3JrebYTQpuxezJ · READY.
- Preview URL: https://ai-product-portfolio-i6crjqnne-yu-ac3a.vercel.app.
- Homepage HTTP 200; Laya casebook route HTTP 200.
- Four first-class project cards are wired to existing Cases: Vivic, Agent Evaluation Lab, AWRP / Agent Workflow, Personal Context Layer.
- Five capability groups are mapped to existing Cases; previous empty capability mapping was replaced.
- Laya remains a separate flagship casebook; the homepage now gives it a dedicated section and retains precise metric definitions.
- Seven Case records and all existing contribution records remain.
- Removed public-facing internal editorial-review labels and replaced case status copy with factual delivery boundaries.
- Hidden the internal design inspector from public navigation.
- Inline JavaScript syntax parse: PASS.
- Runtime error/fatal query for the latest 30m returned no matching preview logs.
- Preview and Laya route retain X-Robots-Tag: noindex, nofollow, noarchive.
- Production aliases hcfind.com and www.hcfind.com still point to V1 deployment dpl_DU86D71ntVNtihTr4spaUQZBXETr; no DNS/nameserver changes.
- Full visual browser review and responsive E2E remain outstanding; this is a review preview, not a production release.


### Portfolio v2 public-evidence cleanup · 2026-11-09

- Latest source commit: a40af18b52aed5f16c9dca5fd8dcd1ec55a1a645.
- Latest Preview deployment: dpl_JCCmAEicSsv8tARBopwX5jeESkkR · READY.
- Latest Preview URL: https://ai-product-portfolio-la3ir2b5p-yu-ac3a.vercel.app.
- Removed private Notion and Linear URLs from public case payloads; confirmed zero Notion / Linear URLs remain in the deployed homepage source.
- Narrative evidence renderer now only displays explicitly public GitHub records. Design-stage cases with no public repository artifact display a clear no-public-record note.
- Rewrote case headnotes and personal contribution descriptions to remove internal editorial-review language.
- Inline JavaScript syntax parse: PASS.
- Homepage and /cases/laya/ both return HTTP 200; both retain X-Robots-Tag: noindex, nofollow, noarchive.
- Seven Case records, four Project cards, and five capability groups remain.
- Production aliases remain on frozen V1 deployment dpl_DU86D71ntVNtihTr4spaUQZBXETr.
- Runtime error/fatal query for latest 30m returned no matching Preview logs.
- Full visual browser review and responsive E2E remain outstanding.


### Make Again 2.0 product-discovery case · 2026-11-09

- Added Make Again 2.0 as Project card 05 and Case 008.
- Framing is explicitly Product Discovery / Research & Feasibility; product problem and MVP remain unlocked.
- Public-facing summary distinguishes public-case synthesis, 9 longitudinal observations, and a model-free PostgreSQL/pgvector Spike from validated user demand or a shipped product.
- No private repository, Notion, or Linear links are exposed. The historical Make Again repository is not listed as a separate achievement, and the separate team version is not conflated with 2.0.
- Five Project cards and six capability groups resolve to eight existing Case records.
- Latest source commit: 59a7632949c1a214aef4f9e447aea1e4713ba019.
- Latest Preview deployment: dpl_Gthev3cbExjvqMakspqSHsAe9Pev · READY.
- Latest Preview URL: https://ai-product-portfolio-jfthd4hd2-yu-ac3a.vercel.app.
- Homepage and Laya casebook route return HTTP 200; noindex remains enabled.
- Full visual browser review and responsive E2E remain outstanding.
