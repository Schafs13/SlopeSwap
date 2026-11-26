# Project log

**Team name:** Schafs13
**Startup name:** SlopeSwap
**Live site link:** https://schafs13.github.io/ai-to-startup-template/

## Work sessions

### Session — 2026-11-01 — Initial commit

- **Goal:** Create the starter project structure.
- **Key prompt:** Prepare the workspace and initial HTML, CSS, JavaScript and project-note structure.
- **What worked:** The template provided a clean base for the later SlopeSwap prototype.
- **What broke, and how I fixed it:** The SlopeSwap idea had not been implemented yet, so I kept the template until the main development sessions.
- **Committed?** yes — "Initial commit"

### Session — 2026-11-25 afternoon — Started the prototype

- **Goal:** Replace the template startup with a used ski and snowboard marketplace.
- **Key prompts:**
  1. "Create a startup for buying and selling used ski gear, with realistic fake listings and separate buyer and seller flows."
  2. "Add search, category and audience filters, saved listings, demo account gating, seller insights and listing submission."
- **What worked:** The shared listing data and plain HTML, CSS and JavaScript created a consistent, interactive prototype. Browser `localStorage` preserved demo saves and listings.
- **What broke, and how I fixed it:** The prototype required connected account, save and seller states rather than isolated pages. I used hash-based views and browser-local state.
- **Committed?** yes — "started and changed a lot"

### Session — 2026-11-25 night — Finished the website

- **Goal:** Complete the major buyer and seller journeys.
- **Key prompts:**
  1. "Make listings submitted on the Sell page also appear in the Shop."
  2. "Add a stats bar showing active sellers, buyers and listings."
  3. "Create boots and accessories SVGs and use them for the right listings."
  4. "Show a message when a signed-out user submits the Sell form."
  5. "Add a Menu button on screens under 600px."
  6. "Add seller ratings to listing cards."
  7. "Add a Market insights panel on the Sell page."
- **What worked:** The shop filters, saved gear, account-gated purchase requests, seller listings, market insights, photo previews and seller dashboard became interactive.
- **What broke, and how I fixed it:** Incorrect helmet images were replaced with category-specific SVG assets. A signed-out Sell form was made to redirect to account creation and return to the listing. A wrapped mobile nav was replaced with a Menu button.
- **Committed?** yes — "finished website"

### Session — 2026-11-26 — Project log

- **Goal:** Organize the prototype work and document the implementation details.
- **Key prompts:**
  1. "Review the actual SlopeSwap prototype and fill the project log using its implemented buyer, seller and network-effect features."
- **What worked:** The project log began recording prompts, sessions and real services that would be needed in production.
- **What broke, and how I fixed it:** Reconstructing work could lose detail, so I used the commit history and current implementation to document the major outcomes.
- **Committed?** yes — `8c64b39`

### Session — 2026-11-26 — Edited project log

- **Goal:** Correct the first documentation pass and align session periods with the Git history.
- **Key prompts:**
  1. "Update the project logs with the session and the previous commits."
- **What worked:** The log separated implementation periods from later documentation updates.
- **What broke, and how I fixed it:** Earlier session information did not match the actual commit periods closely enough, so I revised and restructured it.
- **Committed?** yes — `460b979`

### Session — 2026-11-26 — Updated the founding-seller offer

- **Goal:** Audit the prototype and replace the original three-sales fee offer.
- **Key prompts:**
  1. "change Founding sellers — No fees on your first 3 sales to after 3 sales 1 month free membership"
  2. "double check everything ive given you"
  3. "check all the previous work done on this website"
- **What worked:** The banner now reads "After 3 sales: 1 month free membership," and the implementation copy was audited.
- **What broke, and how I fixed it:** Temporary home-page background experiments did not belong in the finished site, so I removed them and restored the original styling.
- **Committed?** yes — `254b9e6`

### Session — 2026-11-26 — Expanded project documentation

- **Goal:** Restore detail to the business case after it had been trimmed too aggressively.
- **Key prompts:**
  1. "you trimmed it to much the grading rubric says 1500 words, expand back some of what u trimmed"
  2. "make sure to follow the initial setup of the business case from the template and keep the questions included"
- **What worked:** The report regained detail across the idea, IT value, revenue, network effects, defensibility, operations and ethics.
- **What broke, and how I fixed it:** One expanded draft became too long, later drafts were cut too far, and later work did not always preserve the template structure. I rewrote each section around the rubric questions and kept a concise version under 1,800 words.
- **Committed?** yes — `567e991`, `c17a2ef`, `220e427`

### Session — 2026-11-26 — Added VRIN and cold-start analysis

- **Goal:** Make the business defensibility and launch analysis more specific.
- **Key prompts:**
  1. "Use the term VRIN and test sold-price data, seller ratings, assessors and condition process, and local partnerships against all four parts."
  2. "Say which advantages strengthen over time and why."
  3. "Add what a well-funded rival would need and how long copying would take."
  4. "Name the Shop page stats bar (248 sellers · 1,842 buyers · 18 listings) and the line 'More sellers means more choice…'"
  5. "Explain how the founding-seller offer helps get the first sellers."
- **What worked:** The report gained a separate VRIN test for each resource, a strengthening-over-time explanation and a one-to-three-year rival timeline.
- **What broke, and how I fixed it:** The earlier defensibility section was too general. I replaced it with explicit criteria and one-line verdicts, and I replaced vague network-effect wording with the exact prototype UI and line.
- **Committed?** yes — `cb2c4fd`, `eb387e1`

### Session — 2026-11-26 evening — Trimmed and finalized business case

- **Goal:** Finish the business case under 1,800 words while preserving the requested grading points.
- **Key prompts:**
  1. "Make room, then add the AI-use line."
  2. "Decide whether the seller, buyer or both pays and align revenue with the $12/$30/$96 memberships."
  3. "Name operations, outbound logistics and service in the IT value-chain section."
  4. "Remove the short duplicate founding-seller sentence."
- **What worked:** The report retained the template structure, exact network evidence, four VRIN resources, cold-start plan, rival timeline and AI-use disclosure within 1,800 words.
- **What broke, and how I fixed it:** The first trim dropped required analysis, while the expansion reached 2,782 words. I cut the Executive summary and tightened less critical wording; I also corrected revenue so the report matches the site.
- **Committed?** yes — `267272b`, `fce5fd4`

### Session — 2026-11-26 — Final documentation cleanup

- **Goal:** Remove irrelevant project-log material and keep only useful implementation and grading details.
- **Key prompts:**
  1. "remove the stuff from the project log thats irrelevant"
- **What worked:** The log became shorter and focused on implementation, breakages and real-system requirements.
- **What broke, and how I fixed it:** It later lost the chronological Nov 26 sessions and business-case prompts, so those were restored with separate entries and commit matches.
- **Committed?** pending in the next final documentation commit.

## Previous commits

| Commit | Summary |
|---|---|
| `10709b7` | Initial course template commit. |
| `e853078` | Started and substantially changed the prototype. |
| `03091e6` | Finished the website and added its major interactions. |
| `8c64b39` | Added the project log. |
| `460b979` | Edited the project log. |
| `254b9e6` | Updated the founding-seller offer and removed temporary styling. |
| `567e991` | Added project-log work. |
| `c17a2ef` | Added the expanded business case. |
| `220e427` | Updated the business case. |
| `cb2c4fd` | Continued project documentation. |
| `eb387e1` | Updated the project log. |
| `267272b` | Edited the business case. |
| `fce5fd4` | Finalized the business case and project log. |
| `146f71b` | Continued final project updates. |
| `a493f74` | Continued final project updates. |

## Things that broke

| Date | What went wrong | What we tried | What finally fixed it |
|---|---|---|---|
| 2026-11-25 | Boot, pole and goggle listings showed the helmet picture. | I checked which listings used `protection.svg` and compared it with the category assets. | Separate SVG assets were added and assigned to the correct listings. |
| 2026-11-25 | The signed-out Sell form stopped silently. | I tested the submit action and found that it stopped without feedback. | The form added account-gating feedback, redirected to account creation and returned to the listing. |
| 2026-11-25 | The phone navigation wrapped and split "Create account". | I tried shrinking the text and reducing nav spacing. | A Menu button replaced the wrapped layout under 600px. |
| 2026-11-26 | A temporary home-page background did not match the intended design. | I tried adjusting the temporary background change. | The change was removed and the original styling restored. |

## What a real version would need

| Feature the prototype faked or skipped | Why it is needed | How hard or expensive |
|---|---|---|
| Shared account authentication | Buyers and sellers need private, device-independent accounts and verification. | Medium; use managed authentication, server-side sessions and account recovery. |
| Real database and synchronized listings | Users and devices need to share and update inventory. | Medium; use a managed relational database and API instead of `localStorage`. |
| Payment processing and escrow | Purchases need refunds, fraud controls and protection for both sides. | Medium to high; integrate payments and build transaction, payout and dispute workflows. |
| Shipping, tracking and returns | Sellers and buyers need predictable delivery and remedies for problems. | Medium; integrate shipping, address validation and tracking events. |
| Assessment and safety checks | Buyers need confidence, while helmets and bindings require category-specific review. | High; recruit trained reviewers and define refusal and escalation procedures. |
| Moderation and fraud prevention | Scams and abusive users require reporting, detection and human review. | Medium to high; combine account checks, moderation tools, human review and audit logs. |
| Notifications | Users need updates about listing status, payment, shipment and disputes. | Low to medium; use managed email or SMS services. |
| Customer support and operations staff | Disputes and safety issues cannot be handled by software alone. | High recurring cost; start small and expand with transaction volume. |

## Reflection

1. **What surprised you most about building software with AI?**
   The visible interface, realistic listings and repetitive layouts were produced quickly. It was more surprising that the finished-looking prototype still lacked real identity, shared data, payments and trust operations.

2. **Which parts were easy, and which were hard? Why?**
   Content and repetitive components were easy because the same patterns could be applied across the page. Coordinating account gating, saving, seller submission and repeat purchase actions was harder because those behaviors require consistent rules and testing.

3. **If a competitor had the same AI tool, how long would it take to copy the useful company?**
   The visible design could be copied in days or months. Trusted inventory, sellers, assessors, ratings and operating relationships would take roughly one to three years to establish.

### Business lesson

AI made the interface nearly free to build and copy: for example, Copilot added 18 realistic listings in minutes, while getting the sign-in rules right took several tries. SlopeSwap's real advantage would come from buyer and seller networks, trusted condition checks and reliable operations rather than code alone.
