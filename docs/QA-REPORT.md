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
- The 360px viewport, cross-browser behavior, and full long-page visual inspection have **not** been verified in this correction pass.

### Deployment status

- The corrected source is on the isolated review branch only. Production aliases, DNS, and search-indexing settings remain untouched.
- Do not treat this correction as approval for public launch or search indexing; owner review and the remaining Release Gate still apply.

## 2026-11-11 — Version-specific QA boundary

- The hosted Chromium E2E recorded above applies to the exact owner-supplied reference deployment `dpl_2UJ7aErkfXtSRsJyHnjcK9BWYrRA` at commit `4f558b5fdf49a8e57ce99a0500010ca99caaa2ae`.
- It does **not** validate the later rewrite commit `1294634512a87c383e5ed3aedf8b85b460103801` or deployment `dpl_DfeCKvr4bdJdYwQbWTN9ApSxVjE4`.
- The later owner-feedback rewrite record leaves its post-commit route, viewport, image and interaction checks pending. Do not transfer the earlier E2E pass to the later deployment.
- Current deployment identity and approval state: [VERSION-REGISTRY.md](./VERSION-REGISTRY.md).

## 2026-11-11 — Selective recovery preview validation

### Exact artifact
- Code commit: `f9cb2ce741258edebec73d136030c53c20f21517`.
- Vercel deployment: `dpl_DkZZvbcnN9V1AfjMR2JH4Qv4Jc4e`.
- Preview: https://ai-product-portfolio-ojkrc4arr-yu-ac3a.vercel.app/
- Vercel state: `READY`, target `null` (preview only).

### Source-level verification
- One inline application script found in the repository source; V8 syntax parse: **PASS**.
- Homepage Project IDs and order: Personal Context Keyboard → VIVIC → AWRP × Linear.
- Homepage mount, renderer, navigation handler and standalone Laya route: **PASS**.
- Deployed HTML exactly matches the GitHub source after removing the Vercel-injected feedback script.
- All five VIVIC image paths exist at immutable upstream commit `9b8665a0b62a17e0eef94c403f2c2c583d484330`. Actual browser `naturalWidth` / image rendering was not verified.

### Hosted response checks
- `/`: HTTP 200; deployment ID matches `dpl_DkZZvbcnN9V1AfjMR2JH4Qv4Jc4e`.
- `/cases/laya/`: HTTP 200.
- `robots.txt`: HTTP 200; `User-agent: * / Disallow: /`.
- Both inspected page responses: `X-Robots-Tag: noindex, nofollow, noarchive`.

### Not verified
- Real Chromium / Playwright visual and click E2E on this exact deployment.
- 1440px / 390px / 360px rendered layout, horizontal overflow and actual VIVIC image rendering.
- Owner review and public release approval.

The prior 2026-11-10 local-source interaction smoke test is not transferred to this exact deployed artifact. A connected-browser attempt could not run because the Firecrawl connected account had exhausted its available credits.

### Superseded failed preview
- `0c5ef28` / `dpl_2XGv86EWnM5AfLeL3aHtXjQFc5uA` returned HTTP 200 but failed inline JavaScript parsing due to an extra closing brace in `systemArt()`.
- The brace was removed in `f9cb2ce`; the corrected preview above is the only current owner-review candidate.

## 2026-11-11 — Selective recovery content-correction preview

### Exact artifact
- Code commit: `ee6f8bdd5239b80cf8ea72f563ece351105906af`.
- Vercel deployment: `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR` (`READY`, preview target only).
- Preview URL: https://ai-product-portfolio-lyrhy78kp-yu-ac3a.vercel.app/
- Owner-accessible share URL was verified with HTTP 200; Vercel reports expiry at `2026-11-12 07:04:18`. The token is not stored in the repository.

### Source-level verification
- One inline application script in GitHub source; V8 syntax parse: **PASS**.
- Three homepage Project cards and order: Personal Context Keyboard → VIVIC → AWRP × Linear.
- Four Case records and four matching detail payloads: **PASS**.
- Nine contribution groups (Laya casebook plus eight selected upstream groups): **PASS**.
- Homepage mount, renderer, navigation handler and standalone Laya route: **present**.
- PCK and AWRP public repository evidence links are present in their case records.
- The visible Laya contribution line no longer exposes the 47-authored / 85-reviewed-by query counts; it reports 40 personally authored merged PRs.
- VIVIC unit-test note now distinguishes the eight pre-existing baseline failures from newly introduced failures.
- Deployed homepage HTML exactly matches the GitHub source after removing Vercel's injected feedback script. The deployed Laya page exactly matches its GitHub source.

### Hosted response checks
- Homepage `/`: HTTP 200; embedded deployment ID matches `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR`.
- `/cases/laya/`: HTTP 200.
- `robots.txt`: HTTP 200; `User-agent: * / Disallow: /`.
- Homepage and Laya page responses: `X-Robots-Tag: noindex, nofollow, noarchive`.

### Not verified
- Real-browser visual / click E2E on this exact deployment.
- Rendered layout, horizontal overflow and navigation at 1440px / 390px / 360px.
- Actual VIVIC image `naturalWidth` / rendered state, and team showcase permission.
- Owner review and public release approval.

No production promotion, custom-domain reassignment, DNS change or search-indexing change was performed. The earlier 2026-11-09 / 2026-11-10 E2E results are not transferred to this exact deployment.


## 2026-11-11 — Owner content gate failure and withdrawal

- Exact source artifact: commit `ee6f8bdd5239b80cf8ea72f563ece351105906af`; Vercel deployment `dpl_6kq7ggcrRiRCDrsYKmzjpbDK7AnR`.
- The deployment reached `READY`, returned HTTP 200 and passed the recorded inline-script syntax check. Those technical checks do not override content acceptance.
- Its homepage hero contained wording explicitly and permanently prohibited by the owner. The candidate is **WITHDRAWN** and must never be shared as a review link.
- This is a source-content governance failure, not a runtime failure. Preserve the immutable commit and deployment as audit history; do not rewrite Git history.
- The corrected source adds a static public-HTML content gate. Any matching prohibited token fails validation before deployment or sharing.
- Earlier route/header/noindex observations remain factual observations about `ee6f8bd`; they do not establish owner acceptance or make the deployment usable.


## 2026-11-11 — Corrected owner-prohibition candidate: internal QA

### Exact artifact
- Website source commit: `62a551a3e375e77a9a22c7ddf78df74a973fbc94`.
- Vercel deployment: `dpl_GFJyeVg2nEk95KVN738sUxJ4Ueo3` (`READY`, target `null`, preview only).
- At the time of this historical internal QA record, the preview host was SSO-protected. This is no longer the current access configuration; see the later public mainline Preview record.

### Source and hosted checks
- Inline application script count: 1; V8 parse: PASS.
- Homepage Project IDs/order: Personal Context Keyboard → VIVIC → AWRP × Linear; renderer, mount point, navigation handler and standalone Laya route invariants: PASS.
- Updated static validator includes the permanent prohibited-copy guard.
- Homepage `/`: HTTP 200; deployment ID in HTML matches `dpl_GFJyeVg2nEk95KVN738sUxJ4Ueo3`; neutral hero baseline present; prohibited wording absent.
- `/cases/laya/`: HTTP 200.
- Both HTML routes carry `X-Robots-Tag: noindex, nofollow, noarchive`; `/robots.txt` returns `Disallow: /`.
- Deployed homepage HTML matches the exact GitHub source after removing Vercel's injected feedback script.

### Remaining QA
- Browser visual/click E2E not yet performed.
- Rendered 1440px / 390px / 360px layout and image naturalWidth checks not yet performed.
- This is an internal QA candidate, not owner-review-ready. Do not distribute a share link or claim full acceptance until remaining checks pass.
- No production promotion, alias reassignment, DNS change or indexing change occurred.


## 2026-11-11 — Earlier prohibited-copy deployment withdrawal

- Source commit: `84f8773f3eabe6e79806d4c884c15707cb07b783`.
- Branch at deployment: `portfolio/phase3-content-review-2026-11-10`.
- Vercel deployment: `dpl_6Jf7WMaV8rETHXAchZUKXtky7HQE`.
- Direct hosted verification: HTTP 200; HTML deployment ID matched; the homepage contained owner-prohibited copy; `X-Robots-Tag: noindex, nofollow, noarchive` remained enabled.
- Status: **WITHDRAWN**. Do not share or reuse this deployment. The later `1294634` commit removed the wording, but the historical deployment remains immutable and invalid for review.


## 2026-11-11 — Single-mainline public Preview verification

### Canonical source and deployment
- Repository default branch: `main`.
- Website source commit: `4298428bebd9db575d399968c0ad09617ff82185`.
- Vercel Hobby Preview deployment: `dpl_73xUxmvPVEtJkeqTmSzUzL5Bv9Gx` (`READY`, target `null`).
- Public no-login URL: https://ai-product-portfolio-a8fr6p2u4-yu-ac3a.vercel.app/.
- Deployment Git metadata confirms branch `main` and the exact source SHA above.

### Hosted checks
- Homepage `/`: HTTP 200; embedded deployment ID matches `dpl_73xUxmvPVEtJkeqTmSzUzL5Bv9Gx`; neutral hero present; prohibited wording absent.
- `/cases/laya/`: HTTP 200.
- `/robots.txt`: HTTP 200; `User-agent: * / Disallow: /`.
- Homepage and Laya routes carry `X-Robots-Tag: noindex, nofollow, noarchive`.
- Project SSO protection is disabled; direct unauthenticated HTTP access to the preview returned 200 without a login page.
- Project password protection and trusted-IP restrictions are disabled.

### Remaining QA
- Browser visual/click E2E, 1440px / 390px / 360px rendered checks and independent image rendering remain pending.
- This is a public, no-login Preview for review, not a production deployment or search-indexing approval.
- No custom-domain alias, DNS, production target or indexing change occurred.


## 2026-11-11 — Content clarity pass

- Updated homepage card copy to distinguish Android-first implementation from the Windows target for Personal Context Keyboard.
- Reframed project maturity labels around implemented scope and evidence; retained exact validation boundaries in the relevant case notes.
- AWRP now distinguishes the executed relay prototype, current Linear × Notion × GitHub workflow, and G0–G2 Agent Project OS design documents.
- Laya homepage emphasizes merged collaboration and product systems; the 10,394 additions count remains a secondary deep-case metric with explicit scope.
- Updated static validator to guard PCK platform wording and Laya metric hierarchy.
- Browser visual/click and responsive QA remain separate checks after deployment.


## 2026-11-11 — Content clarity pass deployment verification

### Source and deployment
- Website source commit: `faf9a528477557f4fded4c94020af31473973201` on GitHub `main`.
- Vercel Hobby Preview: `dpl_4SnvH4ZJefZXSTPmG9p3NKyGEYfp` · READY · Preview only.
- Public no-login URL: https://ai-product-portfolio-h38fv57pf-yu-ac3a.vercel.app/.
- Deployment Git metadata confirms the exact source SHA and `main` ref.

### Hosted checks
- Homepage: HTTP 200; embedded deployment ID matches; neutral `AI Product Manager.` hero; prohibited copy absent.
- Laya casebook `/cases/laya/`: HTTP 200; 10,394 additions metric and its separate-count explanation remain in the deep casebook.
- Homepage and Laya responses carry `X-Robots-Tag: noindex, nofollow, noarchive`.
- `/robots.txt`: HTTP 200; `User-agent: * / Disallow: /`.
- Project SSO, password and trusted-IP protections are disabled; direct unauthenticated access returned HTTP 200 without a login page.

### Static source checks
- Exactly one inline application script; syntax compilation passed.
- Homepage project order remains Personal Context Keyboard → VIVIC → AWRP × Linear.
- PCK is labelled Android-first / Windows target.
- Laya homepage presents 40 merged PRs, four product systems and eight selected stories; no 10K+ code-volume headline remains on the main homepage.
- Permanent prohibited wording absent.

### Remaining QA
- Real-browser visual/click E2E, 1440px / 390px / 360px rendered checks and independent image-render verification remain pending.
- No custom-domain alias, production target, DNS or indexing change occurred.


## 2026-11-11 — AWRP case narrative refinement

- Reframed the AWRP case detail around the user's cross-window workflow problem before introducing protocol objects.
- Kept the interactive object model, but moved its terminology behind a clear explanation of Project, Task, Run, Event and Artifact responsibilities.
- Shortened the outcome narrative while preserving the distinction between the executed AWRP prototype, current Linear × Notion × GitHub workflow, Agent Project OS G0–G2 design docs and DeepSeek as a third-party reference.
- No project, route, visual system, domain or publication state changed.


## 2026-11-11 — AWRP case narrative deployment verification

- Website source commit: `0cdaa07789a4b8e3193b972898618b91b4b24dc0` on GitHub `main`.
- Vercel Hobby Preview: `dpl_GcaiXuMKFYTpR3x5CQxUeMyJE2Q2` · READY · Preview only.
- Public no-login URL: https://ai-product-portfolio-2hsn5r37q-yu-ac3a.vercel.app/.
- Deployment metadata confirms the exact source SHA and `main` ref.
- Homepage and Laya casebook return HTTP 200; deployment identity matches; noindex headers and robots blocking remain enabled.
- Project SSO, password and trusted-IP protection remain disabled; direct unauthenticated HTTP access is verified.
- AWRP copy now leads with the cross-window continuity problem, then explains Project / Task / Run / Event / Artifact responsibilities; maturity and third-party attribution boundaries remain explicit.
- Browser visual/click E2E and rendered breakpoint/image checks remain pending.


## 2026-11-12 — Public copy showcase pass

### Source and deployment
- Website source commit: `f63fd225409d124aeb2f2e468a5b24b487d76f50` on GitHub `main`.
- Vercel Hobby Preview: `dpl_CmwMtYfv8CBMFQscWEuXg7GrG35P` · READY · Preview only.
- Public no-login URL: https://ai-product-portfolio-iqifybh25-yu-ac3a.vercel.app/.

### Content changes
- Homepage: removed the public-facing delivery/validation boundary note; removed the unmerged Google ADK proposal from the contribution list; changed PCK status to describe implemented Android capability; rewrote contribution descriptions and Agent step copy as direct product statements.
- Case details: removed internal acceptance caveats and defensive scope statements; kept product mechanism, personal contribution, concrete outcomes and supporting evidence.
- Laya casebook: removed non-official/attribution disclaimers and internal QA caveats; rewrote chapters around developer tasks, product decisions and merged outcomes; removed follow-up work credited to another contributor from the public narrative.
- Added a binding public-copy rule to `docs/PORTFOLIO-CONTENT-RULES.md` and section 1.6 of `docs/PORTFOLIO-OPERATING-CONTRACT.md`: recruiter-facing pages are a showcase, not an audit log. Detailed QA and factual gates remain internal.

### Static and hosted checks
- Homepage inline application script parses; Laya inline scripts parse.
- Homepage selected project order remains Personal Context Keyboard → VIVIC → AWRP × Linear.
- Google ADK Draft contribution and public case-scope audit note are absent.
- Homepage and Laya routes return HTTP 200; deployment ID matches the homepage response.
- Project SSO, password and trusted-IP protection are disabled; direct unauthenticated access is verified.
- Both routes retain `noindex` headers; `robots.txt` blocks crawlers.

### Remaining QA
- Real-browser visual/click E2E and rendered 1440px / 390px / 360px checks remain to be completed.
- No custom-domain alias, production target, DNS or indexing change occurred.


## 2026-11-12 — Laya global momentum and benchmark context

- Website artifact commit: `edaf0c593486ff782899e3b171b26e163ea16a6d` on GitHub `main`.
- Vercel Preview: `dpl_Gks1MsHCVP99CZKon1ceH33QwQGA` · READY · Preview only.
- Immutable review URL: https://ai-product-portfolio-4f4ytzm4r-yu-ac3a.vercel.app/
- Vercel deployment metadata confirms the exact Git commit and `main` ref; build event reports deployment completed.
- Homepage selected-project order remains Personal Context Keyboard → VIVIC → AWRP × Linear.
- Laya homepage now contains product definition, Trendshift / GitTrend / OpenGithubs growth rankings, Hacker News discussion, Hugging Face Trending reporting, Vercel AI Gateway distribution, community-directory records and dated GitHub / Hugging Face snapshots.
- Laya casebook contains the new Global Momentum section, navigation anchor, source links and collapsed benchmark-context disclosure.
- Source checks: section IDs unique; new anchor present; benchmark context and evidence links present; page-level noindex retained; prohibited homepage slogan absent.
- Vercel project settings report SSO, password protection and trusted-IP restrictions disabled.
- Direct hosted page extraction was not completed in this pass. Real-browser visual/click E2E, 1440px / 390px / 360px rendered checks and image-render verification remain pending.
- No custom-domain alias, production promotion, DNS or indexing change occurred.


## 2026-11-12 — Laya media and benchmark evidence expansion

- Website artifact commit: `96a2c02ad396a4c95f22030d54259f59a8001d75` on GitHub `main`.
- Vercel Preview: `dpl_G6tDnWgSYLA46sxMouBTTynbuKnE` · READY · Preview only.
- Immutable review URL: https://ai-product-portfolio-b4yggrvzi-yu-ac3a.vercel.app/
- Vercel deployment metadata confirms the exact Git commit and `main` ref; build completed.
- Homepage project data order remains Personal Context Keyboard → VIVIC → AWRP × Linear.
- Homepage Laya momentum copy now includes CyberQ's dated first-week report (23,092 Stars / 1,985 Forks) in addition to Trendshift, GitTrend, OpenGithubs and Hacker News evidence.
- Laya casebook v2.6 contains four impact cards, four platform/media/community signals, CyberQ coverage and JevBench rank context; benchmark scope caveats remain collapsed for deep readers.
- Static checks: homepage order correct; casebook impact section / nav anchor present; section IDs unique; S1MB / JevBench / typed-decisions references present; page-level noindex retained; prohibited slogan absent.
- Vercel project settings report SSO, password protection and trusted-IP restrictions disabled.
- Direct hosted page extraction was not completed in this pass. Real-browser visual/click E2E, 1440px / 390px / 360px rendered checks and image-render verification remain pending.
- No custom-domain alias, production promotion, DNS or indexing change occurred.


## 2026-11-12 — Laya copy simplification and casebook restoration

- Website source commit: `9b4b9b8f89f36d86022dcdbd45cc392b465aa5d0` on GitHub `main`.
- Vercel Preview: `dpl_BrHWx1PddQDNwVFpeaGFpX6oVbvr` · READY · Preview only.
- Immutable review URL: https://ai-product-portfolio-aqr3oe3gi-yu-ac3a.vercel.app/
- Homepage Laya introduction contains exactly one paragraph. It leads with Trendshift's four-day global trending #1 and GitTrend's weekly growth #1 / approximately +22.3K Stars, then briefly identifies Laya as a multilingual non-autoregressive open-source System 1 decision model.
- Extra homepage momentum and ecosystem paragraphs and their dedicated CSS are absent.
- Laya casebook restored to the pre-impact-expansion v2.4 source snapshot. Global Momentum section, nav item, ranking cards, ecosystem signals, benchmark disclosure and related CSS are absent.
- Existing product chapters, contribution narrative, 40-PR metrics, four product systems and page-level noindex remain.
- Static source checks passed. Vercel reports READY and exact Git commit.
- Browser visual / click E2E and responsive screenshot checks are not claimed as completed.
- No production promotion, custom-domain change, DNS change or indexing change.
