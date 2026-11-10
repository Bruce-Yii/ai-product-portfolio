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


## Portfolio scope and product-language correction · 2026-11-09

This correction supersedes the earlier five-project / eight-case / Make Again candidate notes above.

### User-confirmed scope

- Three selected project cards: VIVIC, AWRP × Linear, Personal Context Keyboard.
- Laya remains the separate flagship casebook; its visual system was not changed.
- Four main-site Case records: Laya, VIVIC, AWRP × Linear, Personal Context Keyboard.
- Eight repository-level contribution groups: OpenClaw, Dify, RAGFlow, Cherry Studio, QwenPaw, FunASR, dsh-market, Google ADK.
- Google ADK is RFC / tests-only Draft / not merged.
- Make Again 2.0, Agent Evaluation Lab, and EvalScope are excluded.
- Cherry Studio and dsh-market are contribution groups, not standalone main-site Case pages.

### Product narrative and interaction changes

- Rewrote VIVIC around the user's job: turn multimodal intent into an authorized action with a truthful receipt.
- Rewrote AWRP × Linear around long-running task continuity, evidence-based acceptance, mature-tool reuse, and an explicitly third-party DeepSeek comparison.
- Rewrote Personal Context Keyboard around the product definition: keyboard as Sensor, Context Layer as the user-owned product core.
- Added a four-object AWRP interaction: Task → Run → Evidence → Acceptance, plus a non-ranking comparison of AWRP, Linear × Notion, and DeepSeek Super-agent.
- Added a five-layer Personal Context interaction: Sensor → Raw Facts → Derived Context → User Control → AI Gateway.
- Reframed open-source entries around user tasks and product behavior rather than presenting repository names and PR counts as standalone products.
- Preserved the separate Laya casebook visual system and route.

### Static checks

- Latest main-site source commit before documentation updates: 67b780176e6eb113dca62bdb6cffc54520281324.
- Four Case records: PASS.
- Three selected homepage Project cards: PASS.
- Nine contribution entries including Laya casebook + eight ecosystems: PASS.
- Four capability groups: PASS.
- Google ADK visibly marked DRAFT / NOT MERGED: PASS.
- Excluded terms and standalone case IDs absent from public source: PASS.
- Inline JavaScript syntax parse: PASS.
- No private Notion / Linear URLs found in the current public case payload.
- Laya casebook source was not modified in this revision.

### Deployment boundary

- Production aliases were read back and still point to frozen V1 deployment dpl_DU86D71ntVNtihTr4spaUQZBXETr.
- No DNS, nameserver, or production alias change was made.
- New v2 Preview deployment and no-login share link have been created and verified.
- Browser visual review, responsive E2E, and owner review remain outstanding.


### Owner-accessible preview verification · 2026-11-09

- Final review deployment: dpl_FW2yCXELaXPh74oUNW9p4Y2osbHC · READY.
- Source commit: c2cd00a2798c483b59d779e881f7b508a2e45bc4.
- Preview base URL: https://ai-product-portfolio-59nq0wc6g-yu-ac3a.vercel.app.
- Generated a no-login Vercel share link with expiry 2028-11-08; the token is provided directly in the owner conversation and intentionally omitted from public repository docs.
- Verified share-link homepage HTTP 200, title present, and all selected project / contribution labels present.
- Verified Make Again, Agent Evaluation Lab, EvalScope, and the excluded standalone case IDs are absent from the deployed homepage source.
- Verified Laya casebook route HTTP 200; its source and visual system were not modified in this revision.
- Both routes retain X-Robots-Tag: noindex, nofollow, noarchive.
- Latest 30-minute Preview error/fatal runtime log query returned no matching logs.
- Live Vercel alias read-back confirms hcfind.com and www.hcfind.com still point to frozen V1 deployment dpl_DU86D71ntVNtihTr4spaUQZBXETr.
- Browser visual review and responsive E2E remain outstanding.


## Mandatory acceptance checks for future website iterations

A future website iteration is not complete merely because its source was edited or a build passed. Before reporting delivery:

1. Confirm the deployed deployment ID and source commit match the intended Git revision.
2. Open the owner-facing URL without requiring Vercel/GitHub login.
3. Check the homepage and every changed route, including direct route entry and refresh.
4. Check key assets, navigation, interactions, console/runtime errors, and 1440px / 390px / 360px layouts.
5. Confirm current noindex / access-protection requirements remain intact.
6. Include the actual accessible URL and checks performed in the completion report.

A pure documentation-only change may skip website deployment only when the website artifact is unchanged; say so explicitly. See [Portfolio Operating Contract](./PORTFOLIO-OPERATING-CONTRACT.md).


## 2026-11-09 · Restored preview and productized contribution narratives

### Source and deployment

- Branch: `portfolio/v2-information-architecture`.
- Deployed source commit: `a54baf3aad04510d7be14b2784a4d0b238b9b310`.
- Deployment: `dpl_PKEZsYkHwAnRSBpBDtwEJDH4kJXZ` · READY.
- Owner-facing no-login Preview share link verified separately; token is not recorded here.
- Homepage and `/cases/laya/` return HTTP 200.
- Both responses retain `X-Robots-Tag: noindex, nofollow, noarchive`.
- Build event confirms expected repository, branch and commit; deployment completed.
- Production aliases and DNS were not changed.

### Content change

- The Work page's unified contribution index now gives each selected group a compact product narrative: product problem, product judgment, actual change, and evidence/status.
- Homepage contribution rows remain compact; fuller explanations appear on the Work page.
- Dify remains a grouped contribution entry, not a standalone Case page.
- OpenClaw, Dify, RAGFlow, Cherry Studio, QwenPaw, FunASR, dsh-market and Google ADK remain grouped; Google ADK is explicitly labelled as an open RFC plus tests-only Draft, not merged.
- PR counts are labelled as selected contributions rather than implied totals.

### Static verification

- Parsed the embedded JavaScript successfully.
- Parsed all 9 contribution records; all 9 have a non-empty product narrative.
- Confirmed 4 Case records and 4 matching detail payloads remain unchanged.
- Confirmed 3 homepage Project cards remain unchanged.
- Confirmed homepage contribution index remains compact and Work page renders the new narrative field.
- Confirmed Make Again 2.0, Agent Evaluation Lab and EvalScope remain absent from the public source.
- No case routes, project scope, homepage headline, or visual palette were changed.

### Remaining verification

- Full browser visual review and responsive E2E at 1440px / 390px / 360px remain outstanding because no browser-rendering session was available in this pass.


## 2026-11-09 · VIVIC case interview-closure pass

### Content and evidence

- Reframed the VIVIC lead from a generic “participated in refactor” statement to taking over an existing product and driving the Agent decision-chain refactor.
- Added an explicit personal-role panel: problem framing, product/architecture judgment, task decomposition and acceptance; implementation is described as collaboration with Agents/team rather than claiming every line as personally authored.
- Added the key product trade-off: remove experimental 4B routing, slot planner, local classifier, directOperations and duplicate business-decision paths rather than add another Agent.
- Updated the evaluation range to 53/60 baseline → 58–60/60 across six same-set rounds; preserved the 11-05 deployment snapshot of 59/60 and final round 60/60.
- Retained p50 3,625ms → 1,807ms; added the estimated ~97% token-cost reduction only with its high-cache-hit caveat; retained 27 → 14 tool-entry consolidation.
- Explicitly separated personal contribution from team/Agent implementation and marked public-display permission, browser E2E, real-device voice and real-user outcomes as unresolved.

### Source checks

- Read the 2026-11-05 VIVIC deployment report and frontend handoff directly from the private repository branch `codex/live-backend-20261103`.
- Deployment report records backend batch 2/3 at `069b2dc`, 59/60 for that deployment snapshot, p50 1,807ms, frontend release `sections-20261103-final`, and outstanding frontend/browser/voice validation.
- Parsed the updated inline JavaScript successfully.
- Confirmed the role panel is rendered only for VIVIC; other Case records retain their existing evidence-led role/boundary sections.
- Confirmed VIVIC remains labelled as a team-product draft with publication permission pending.

### Deployment

- Source commit: `ab8164006917b5414c4a455a551e1b93a049ba7d`.
- Deployment: `dpl_GHTydoCyYeMk6iWt8dJ8M9APquCN` · READY.
- Preview base URL: https://ai-product-portfolio-eo95g4txp-yu-ac3a.vercel.app.
- No-login share link verified in the owner conversation; token is not stored here.
- Homepage, hash-addressed case entry and Laya casebook return HTTP 200.
- All checked pages retain `X-Robots-Tag: noindex, nofollow, noarchive`.
- Production aliases and DNS were not changed.

### Remaining visual QA

- Full browser visual inspection and responsive E2E at 1440px / 390px / 360px remain outstanding; source-level and live HTTP checks do not replace those tests.

## 2026-11-09 · Product-decision narrative pass

### Root cause

- The homepage contribution renderer showed repository names, contribution titles, PR counts and technical scope, but did not render the existing `story` field.
- Product problem, product judgment and user-facing change were therefore hidden from the first-read experience; the section visually read as a repository/patch list.
- The Work page exposed the story, but repository identity and contribution metadata still had stronger hierarchy than the product narrative.

### Changes

- Reframed the section as **Product decisions, in practice.**
- Rewrote the eight non-casebook entries around user scenarios and product behavior: Agent onboarding/recovery, knowledge workflow, Agent configuration, desktop AI workflow, multi-directory workspace, speech timeline, user control and streaming contracts.
- Added an explicit **Product decision** layer to each entry; repository, PR count, technical scope and merge state are now supporting evidence.
- Applied the same hierarchy to the full Work-page contribution index.
- Google ADK remains explicitly marked as an open RFC plus tests-only Draft; no production behavior change is claimed.

### Source checks

- Source commit: `4f1b48402566dc274669c46c2787eb1197c85580`.
- Parsed all inline JavaScript successfully.
- Confirmed 9 contribution records remain present; homepage shows 8 non-casebook entries, while Laya remains in its dedicated casebook.
- Confirmed the new homepage renderer exposes scenario, product decision and upstream evidence.
- No project cards, Case records, route structure, production aliases or DNS records were changed.

### Deployment

- Preview deployment: `dpl_GFwuMZADGSD9YxTzF4sAPf3SEVZg` · READY.
- Preview URL: https://ai-product-portfolio-2tyh5wss7-yu-ac3a.vercel.app.
- Homepage and Laya casebook both return HTTP 200.
- Both checked pages retain `X-Robots-Tag: noindex, nofollow, noarchive`.
- Production aliases remain on the frozen V1 deployment; this candidate has not been promoted.

### Remaining visual QA

- Full browser visual inspection and responsive E2E at 1440px / 390px / 360px remain outstanding. Source parsing and live HTTP checks do not replace rendered-browser verification.

## 2026-11-09 · Homepage project-list direction correction

### User clarification

- Keep recognizable open-source project names visible; popular project names are an asset and improve recruiter recognition.
- The problem was engineering-heavy descriptions, not the presence of project names.
- Homepage row hierarchy: **project name + concise product-language description of what the project does + a brief summary of the user's product practice**.
- Keep detailed PR/module evidence in the deeper contribution view; do not replace the homepage index with long narrative cards.

### Implementation

- Added concise, user-facing product descriptions for OpenClaw, Dify, RAGFlow, Cherry Studio, QwenPaw, FunASR, dsh-market and Google ADK.
- Restored the compact project-index row pattern with project names prominent and product descriptions adjacent.
- Preserved the separate Laya casebook feature and deeper Work-page contribution evidence.
- This correction supersedes the previous homepage narrative-card treatment; it does not remove project names or rename repositories.
- Inline JavaScript syntax parsed successfully before commit.

## 2026-11-09 · Corrected contribution-summary semantics

- Correct interpretation: homepage descriptions summarize **the user's own contribution on each public project**, not generic descriptions of what the open-source projects do.
- Removed generic project introductions from homepage rows.
- Kept public repository/project names prominent and paired each with one concise product-language summary of the user's work.
- Detailed titles, context, decisions and PR evidence remain in the deeper contribution view.

## 2026-11-09 · Portfolio-wide product narrative audit

- Reframed the hero around AI PM identity and product opportunity.
- Reframed VIVIC around the user journey from expressing a need to confirming task completion.
- Reframed AWRP around project continuity across Agents, sessions, handoffs, and waiting periods; retained the non-shipped SaaS boundary.
- Reframed Personal Context around user ownership and reuse across AI tools.
- Reframed Laya around developer adoption and confidence, preserving contribution attribution.
- Rewrote eight contribution summaries around user-facing outcomes; project names remain visible.
- Updated Laya casebook titles and README domain statement.
- Inline JavaScript syntax validation: PASS. Live deployment and visual QA required before completion.

## 2026-11-09 · Product narrative pass — deployed review candidate

- Source commit: `10683b1cbc5a4420820184a86003f476f30ed428`.
- Vercel deployment: `dpl_HSsD8fVGr6y5o2E13EScJh4kRpx2` · READY.
- Public review URL: https://portfolio.hcfind.com/.
- Homepage and Laya casebook return HTTP 200; both retain `X-Robots-Tag: noindex, nofollow, noarchive`.
- Root domain `hcfind.com` remains a separate deployment and was not changed in this pass.
- Source inline JavaScript parsed successfully before deployment.
- This pass moved VIVIC, AWRP, Personal Context, Laya and open-source contribution narratives toward user tasks, product opportunity, user outcome and evidence; implementation details remain in the deeper explanation layer.
- Noindex remains in place pending owner review.
- Full browser visual QA and responsive E2E remain outstanding; HTTP 200 and source parsing are not a substitute for visual review.

## 2026-11-10 · Portfolio v2.2 — featured projects and navigation

- Source checkpoint: `a67d304fa6d7ad55eb8724bf9d105807bcd45c47`.
- Homepage featured order is Personal Context Keyboard → VIVIC → AWRP × Linear.
- Project-introduction copy now states what each project is, its ownership context and maturity instead of using abstract benefit-only subtitles.
- VIVIC identifies the SuKeSong Hackathon Life & Office track fourth-place team context, the post-competition invitation to join, and the subsequent product work; team and project links are present.
- AWRP narrative distinguishes early protocol prototype, current Linear × Notion workflow, DeepSeek Super-agent as third-party reference, and unbuilt productization exploration.
- Project-card delegated click handler selector was invalid due to a trailing comma; corrected. Case pages now expose a visible return-to-work control.
- Laya cover and casebook role framing now emphasize sustained product direction, review, implementation collaboration and upstream evolution; "External contributor" headline removed.
- Laya explanatory SVG redesigned around four product systems. It is explicitly illustrative, not official UI or an official architecture diagram.
- Open-source project entries now include short repository introductions and GitHub star snapshots from repository API, dated 2026-11-10.
- Inline JavaScript syntax parse: PASS.
- Source-level route/data review: PASS for all three featured IDs. Full browser interaction, responsive visual QA and route refresh/back-forward E2E remain to be completed.
- Noindex remains enabled. Vercel deployment and public-page verification pending this checkpoint.

### Deployment verification · 2026-11-10

- Vercel deployment: `dpl_4Z4tDXHwN7VockWnKEHKcqfc2qT4` · READY.
- Public alias: https://portfolio.hcfind.com/ · reassigned to this deployment.
- Homepage and standalone Laya casebook return HTTP 200.
- The three project hash URLs return the same application shell (expected for the single-page case router); server-side fetch does not execute client-side JavaScript, so route interaction is not claimed as browser-E2E verified.
- Source review confirms all three featured IDs exist in `CASES` and `CASE_DETAILS`; the delegated click selector is syntactically valid and includes workflow/context controls.
- VIVIC team/project URLs are embedded in the case detail; Laya page includes a visible return-to-portfolio link.
- Visual runtime review at desktop/mobile and click-through/back-forward browser E2E remain pending.


- Final source checkpoint after Laya star metadata: `f2217ed74d8833c74ddc458bd568b14505a5eb2c`.


## 2026-11-10 · Homepage / case-navigation regression correction

### Root cause

- A Phase 3 content edit introduced two malformed JavaScript string literals in `CASE_DETAILS`: the Personal Context boundary value lost its terminating quote, and the VIVIC outcome value gained a duplicated trailing quote.
- Because the site uses one inline application script, the parser rejected the entire script before execution. The homepage's three Project cards are generated by `renderProjectCards('home-projects')`, and in-site case navigation is registered by the same script's delegated click handler; neither could run. The Laya casebook remained reachable because its homepage link is a static HTML anchor to `./cases/laya/`.
- Vercel's READY state and HTTP 200 did not detect this client-side parse failure. The previous delivery report incorrectly treated deployment readiness as sufficient verification.

### Correction

- Fixed both malformed string literals on `portfolio/phase3-content-review-2026-11-10`.
- Added `scripts/validate-portfolio.mjs`, a dependency-free Node check that parses the inline script and asserts the three homepage Project IDs/order, homepage render mount, navigation handler, and standalone Laya route.
- Command: `node scripts/validate-portfolio.mjs`.

### Verification on corrected source

- Static validator: **PASS**; one inline application script parsed; homepage order is Personal Context Keyboard → VIVIC → AWRP × Linear; Laya standalone route present.
- Chromium local-source interaction smoke test at 1440px and 390px: all three homepage cards rendered; each card opened its matching case; Work navigation opened and listed four cases; no JavaScript page errors observed.
- Responsive width check at 1440px and 390px: document scroll width matched viewport width; no horizontal overflow observed.
- Laya standalone casebook opened at 390px; page title and main heading rendered; no JavaScript page errors observed.
- At the time of the initial correction note, 360px and hosted E2E had not yet been verified; both were subsequently covered by the hosted Chromium run recorded below. Cross-browser behavior and full long-page visual inspection remain outstanding.

### Deployment status

- The corrected source is on the isolated review branch only. Production aliases, DNS, and search-indexing settings remain untouched.
- Do not treat this correction as approval for public launch or search indexing; owner review and the remaining Release Gate still apply.


### Live preview verification · navigation regression fix

- Deployment: `dpl_2UJ7aErkfXtSRsJyHnjcK9BWYrRA` · **READY**.
- Deployed source: branch `portfolio/phase3-content-review-2026-11-10`, commit `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae`.
- Preview base URL: https://ai-product-portfolio-aqu466asw-yu-ac3a.vercel.app.
- Live homepage fetch: HTTP **200**; live Laya route `/cases/laya/`: HTTP **200**.
- Live homepage application inline script compiled successfully when checked from the fetched deployment HTML; the additional empty Vercel feedback script is external and excluded from application-script parsing.
- Live HTML contains the expected three Project IDs in the approved order and the `home-projects` mount / navigation function. `X-Robots-Tag: noindex, nofollow, noarchive` remains present on both routes.
- A no-login Vercel share link was created for owner review. Its token is shared only in the owner conversation and is not stored in this repository.
- The subsequent hosted Chromium E2E below supersedes the earlier local-only interaction note.


### Hosted Chromium E2E · 2026-11-10

Tested the exact live owner-preview deployment `dpl_2UJ7aErkfXtSRsJyHnjcK9BWYrRA` using a browser session with the no-login share link.

- Viewports: **1440×1000**, **390×844**, **360×800**.
- At all three widths, homepage rendered exactly three Project cards in the approved order: Personal Context Keyboard → VIVIC → AWRP × Linear.
- At all three widths, clicking each Project card opened the correct case route and title; all three case views became active.
- At all three widths, the Work navigation opened and listed four Cases.
- No horizontal overflow: document scroll width equalled viewport width at all three widths.
- No JavaScript page errors and no failed network requests were observed during the tested home / case / Work flows.
- Laya homepage link opened the standalone `/cases/laya/` page at 390×844; title and H1 rendered, no horizontal overflow, no JavaScript page errors.
- Cross-browser testing beyond Chromium and full long-page visual / content inspection remain outstanding.
