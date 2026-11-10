# 2026-11-11 Owner Feedback Rewrite

## Source and deployment boundary
- Current preview URL supplied by the owner: ai-product-portfolio-aqu466asw-yu-ac3a.vercel.app.
- Vercel deployment ID: dpl_2UJ7aErkfXtSRsJyHnjcK9BWYrRA.
- Preview branch: portfolio/phase3-content-review-2026-11-10; starting head: a061a2505f2c6da2ce5f813a58628209e10522f6.
- Work is committed only to the existing preview branch. Production aliases, DNS, indexing and main remain unchanged.

## Product narrative
- Personal Context Keyboard: rebuilt the case around the user-owned Local-first Personal Context Layer. The architecture now explains Sensor → Raw Fact Store → Evidence / Temporal Spine → Semantic Assessment → bounded evidence Agent → Durable Orchestration → Validator / Derived Store → User Control → Unified AI Gateway. Device Sync is separate.
- VIVIC: reframed around Intent → Decision → Validation → Action → Receipt, with explicit boundaries between rules, model, host, executor and real receipt. Team award and personal role are distinguished.
- AWRP × Linear: restored the original ChatGPT mobile/web ↔ local Agent collaboration problem; explains research/execution separation, Project normalization, Channel / Lane / Claim, Task / Subtask / Run, Event / Artifact, state transitions, ACK / HANDOFF / REVIEW / RECONCILE, Linear × Notion × GitHub, and the DeepSeek architecture comparison.
- Laya: displays 40 merged PRs and 10K+ added lines. The 10,394 additions are counted across the full authored PR diff set; the merged PR count is a separate measure. 47 / 85 query counts are removed from public headlines.

## Visual and interaction
- VIVIC uses official showcase images referenced from the source repository docs/images directory, whose README records that they originate from the official VIVIC site at a 1600px desktop viewport.
- The former empty system cover for PCK / AWRP is replaced with architecture-led cover art.
- Case typography is reduced on desktop and mobile.
- Repeated delivery-state disclaimers and placeholder labels are replaced with product principles and architecture language.

## Verification still required after commit
- [ ] Preview deployment reaches READY and points to the new commit.
- [ ] Open home, PCK, VIVIC, AWRP and Laya routes at 1440px, 390px and 360px.
- [ ] Confirm official VIVIC image requests return successfully.
- [ ] Confirm no horizontal overflow, broken links or JavaScript errors.
- [ ] Confirm production aliases, DNS and indexing remain unchanged.
