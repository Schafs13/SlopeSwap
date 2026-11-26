# Project log

**Team name:** Schafs13
**Startup name:** SlopeSwap
**Live site link:** https://schafs13.github.io/ai-to-startup-template/

## Work sessions

### Session — 2026-11-01 — Initial commit

- **Goal:** Create the starter course project structure.
- **Key prompt:** Begin from the AI to Startup template and prepare the workspace.
- **What worked:** The initial HTML, CSS, JavaScript, assets and project-notes structure were established.
- **What broke, and how I fixed it:** The final SlopeSwap idea was not present yet, so the template remained until the prototype work began.
- **Committed?** yes — `10709b7` — "Initial commit"

### Session — 2026-11-25 afternoon — Started and changed a lot

- **Goal:** Replace the template startup with a used ski and snowboard marketplace.
- **Key prompts:**
  1. "Create a startup for buying and selling used ski gear, with realistic fake listings and separate buyer and seller flows."
  2. "Add search, category and audience filters, saved listings, demo account gating, seller insights and listing submission."
- **What worked:** The shared listing data and plain HTML, CSS and JavaScript created a consistent, interactive prototype. Browser `localStorage` preserved demo saves and listings.
- **What broke, and how I fixed it:** The prototype required connected account, save and seller states rather than isolated pages. I used hash-based views and browser-local state.
- **Committed?** yes — `e853078` — "started and changed a lot"

### Session — 2026-11-26 night — Finished the website

- **Goal:** Complete the major buyer and seller journeys.
- **Key prompts:**
  1. "Make listings submitted on the Sell page also appear in the Shop."
  2. "Add a stats bar showing active sellers, buyers and listings."
  3. "Create boots and accessories SVGs and use them for the right listings."
  4. "Show a message when a signed-out user submits the Sell form."
  5. "Add a Menu button on screens under 600px."
  6. "Add seller ratings to listing cards."
  7. "Add a Market insights panel on the Sell page."
- **What worked:** The shop filtering, saved gear, account-gated purchase requests, seller listings, market insights, photo previews and seller dashboard became interactive.
- **What broke, and how I fixed it:** Several listing cards showed the wrong helmet image. I added category-specific SVG assets. The signed-out Sell form stopped silently, so I added account-gating feedback and a redirect back to the seller form. The mobile nav wrapped and split "Create account", so I added a Menu button under 600px.
- **Committed?** yes — `03091e6` — "finished website"

### Session — 2026-11-26 — Project log and first correction

- **Goal:** Document the implemented prototype and correct the first project-log pass.
- **Key prompts:**
  1. "Review the actual SlopeSwap prototype and fill the project log using its implemented buyer, seller and network-effect features."
  2. "Update the project logs with the session and previous commits."
- **What worked:** `8c64b39` added the project-log structure and `460b979` corrected the work-session and commit organization.
- **What broke, and how I fixed it:** I wrote this entry after the session using the commit history, and the first session periods did not match it closely enough, so I separated implementation and documentation periods.
- **Committed?** yes — `8c64b39` and `460b979`

### Session — 2026-11-26 — Updated founding-seller copy

- **Goal:** Audit the prototype and change the founding-seller offer.
- **Key prompts:**
  1. "change Founding sellers — No fees on your first 3 sales to after 3 sales 1 month free membership"
  2. "double check everything ive given you"
  3. "check all the previous work done on this website"
- **What worked:** The original banner was audited and later updated to "Free for the first season" so founding sellers do not face an upfront joining cost.
- **What broke, and how I fixed it:** Temporary home-page background experiments did not belong in the finished design, so I removed them and restored the original styling.
- **Committed?** yes — `254b9e6`

### Session — 2026-11-26 — Added project-log detail

- **Goal:** Add a project-log work entry and reconcile later commit details.
- **Key prompt:** "Update the project logs with the session and the previous commits."
- **What worked:** The project log gained another documented work session and commit detail.
- **Committed?** yes — `567e991`

### Session — 2026-11-26 — Expanded the business case

- **Goal:** Replace the template business-case prompt text with a substantive SlopeSwap answer.
- **Key prompts:**
  1. "you trimmed it to much the grading rubric says 1500 words, expand back some of what u trimmed"
  2. "make sure to follow the initial setup of the business case from the template and keep the questions included"
- **What worked:** `c17a2ef` filled the case with the idea, value chain, network effects, moat, cloud operations and risks.
- **What broke, and how I fixed it:** The expanded draft became too long, so later revisions and trims restored a smaller, rubric-focused version.
- **Committed?** yes — `c17a2ef`

### Session — 2026-11-26 — Added VRIN and shortened the report

- **Goal:** Make the moat and cold-start analysis more specific and continue tightening the report.
- **Key prompts:**
  1. "Use the term VRIN and test sold-price data, seller ratings, assessors and condition process, and local partnerships against all four parts."
  2. "Say which advantages strengthen over time and why."
  3. "Add what a well-funded rival would need and how long copying would take."
  4. "Name the Shop page stats bar (248 sellers · 1,842 buyers · 18 listings) and the line 'More sellers means more choice…'"
  5. "Explain how the founding-seller offer helps get the first sellers."
- **What worked:** `220e427` retained the long-form business case, `cb2c4fd` added exact network evidence and a complete VRIN section, and `eb387e1` updated the project log.
- **Committed?** yes — `220e427`, `cb2c4fd`, `eb387e1`

### Session — 2026-11-26 — Revised cold start and project-log summary

- **Goal:** Replace the later report summary and strengthen the exact cold-start and defensibility sections.
- **Key prompts:**
  1. "Name the exact prototype network-effect evidence."
  2. "Explain how the founding-seller offer gets the first sellers."
  3. "Remove irrelevant project-log summary material and fill in the team name."
- **What worked:** `c6e6b69` removed the 17-point summary, set the team name, added real night-session breakages and added the exact VRIN/cold-start changes.
- **Committed?** yes — `c6e6b69`

### Session — 2026-11-26 evening — Finalized, trimmed and aligned the case

- **Goal:** Finalize revenue, length, AI-use, moat, cloud-outage and value-chain details.
- **Key prompts:**
  1. "Decide whether the seller, buyer or both pays and align revenue with the $12/$30/$96 memberships."
  2. "Shorten the Executive summary and keep the file below 1,800 words."
  3. "Add the AI-use line."
  4. "Name operations, outbound logistics and service in the IT value-chain section."
  5. "Remove the short duplicate founding-seller sentence."
- **What worked:** `267272b` added the membership decision and final requested report details; `fce5fd4` committed the report and log.
- **What broke, and how I fixed it:** The first trims were not complete enough or cut too much, and later reports briefly exceeded 1,800 words. I preserved required VRIN and template sections and tightened the Executive summary.
- **Committed?** yes — `267272b`, `fce5fd4`

### Session — 2026-11-26 — Final business-case cleanup

- **Goal:** Remove duplicate or now-inaccurate text from the final report.
- **What changed:** `146f71b` removed the AI-use line from the final business-case revision. `a493f74` changed the revenue model alignment, expanded the exact value-chain activities and removed the duplicate founding-seller paragraph in Sections 2–4.
- **Committed?** yes — `146f71b`, `a493f74`

### Session — 2026-11-26 — Project-log cleanup and restoration

- **Goal:** Remove irrelevant project-log material, then restore details whose removal made the commit history unclear.
- **What changed:** `825e2ad` replaced the project log with a shorter implementation log. `9a6383d` then restored the chronological Nov 26 sessions, key prompts, "what we tried" column and specific business lesson.
- **Committed?** yes — `825e2ad`, `9a6383d`

### Session — 2026-11-26 evening — Applied the rubric fixes

- **Goal:** Align the revenue model, cold-start offer and risk analysis with the prototype and term-project rubric.
- **Key prompts:**
  1. "Decide who pays and explain why, including whether a seller commission and assessment or shipping costs fit."
  2. "Fix the founding-seller offer so the first sellers join free."
  3. "Add same-side network effects and deepen the four VRIN tests."
  4. "Give each cloud choice a risk and response and expand the outage procedure."
- **What worked:** The report now charges sellers a disclosed 10% commission after a successful sale, makes the first season free for founding sellers and adds same-side network effects, deeper VRIN reasons and separate cloud responses.
- **What broke, and how I fixed it:** The old report left membership and seller payments unclear and called an old "after three sales" offer a cold-start solution. I replaced it with seller commission and first-season free access, and changed the matching site banner and account text.
- **Committed?** yes — `b626658` — "fix rubric and live project log"

## Previous commits

| Commit | Summary |
|---|---|
| `10709b7` | Added the initial course template and starter files. |
| `e853078` | Replaced the template startup and added SlopeSwap listings and assets. |
| `03091e6` | Finished the website, account, seller, saved-item and market-insight interactions. |
| `8c64b39` | Added the first project-log documentation. |
| `460b979` | Corrected and restructured the project log. |
| `254b9e6` | Updated the founding-seller offer and removed temporary styling. |
| `567e991` | Added another project-log work entry. |
| `c17a2ef` | Replaced the business-case template text with the expanded SlopeSwap case. |
| `220e427` | Updated and continued shortening the expanded business case. |
| `cb2c4fd` | Added the exact Shop network evidence, founding-seller cold-start paragraph and VRIN rivalry analysis. |
| `eb387e1` | Updated the project log for the business-case and VRIN work. |
| `c6e6b69` | Removed the 17-point summary, filled the team name and corrected the night-session and breakage records. |
| `267272b` | Added the final revenue, cold-start, AI-use, moat and cloud-outage edits and trimmed the report. |
| `fce5fd4` | Finalized and committed the business case and project log. |
| `146f71b` | Removed the AI-use line from the business-case revision. |
| `a493f74` | Expanded value-chain IT sections and aligned revenue, membership and founding-seller wording with the site. |
| `825e2ad` | Replaced the project log with a shorter implementation log and removed most repeated documentation sessions. |
| `9a6383d` | Restored the chronological Nov 26 sessions, business-case prompts and detailed breakage table. |
| `d18e725` | Finalized and reconciled the project log, including the session structure and commit-history details. |
| `b626658` | Applied the rubric fixes to revenue, cold start, VRIN, cloud operations and the live project log. |
| `dac773e` | Recorded the rubric-fix commit hash in the live project-log session. |
| `2bcff3b` | Completed the project-log commit audit. |

## Things that broke

| Date | What went wrong | What we tried | What finally fixed it |
|---|---|---|---|
| 2026-11-25 | Boot, pole and goggle listings showed the helmet picture. | I checked which listings used `protection.svg` and compared it with category assets. | Separate SVG assets were added and assigned to the correct listings. |
| 2026-11-25 | The signed-out Sell form stopped silently. | I tested the submit action and found it stopped without feedback. | The form added account-gating feedback, redirected to account creation and returned to the listing. |
| 2026-11-25 | The phone navigation wrapped and split "Create account". | I tried shrinking the text and reducing nav spacing. | A Menu button replaced the wrapped layout under 600px. |
| 2026-11-26 | A temporary home-page background did not match the intended design. | I tried adjusting the temporary background change. | The change was removed and the original styling restored. |
| 2026-11-26 evening | Removing the buyer membership form left a stale account-page membership reference in the JavaScript. | I checked the account rendering code and compared it with the updated HTML. | I removed the profile-membership variable and text update, and changed the account button to "Create account". |

## What a real version would need

| Feature the prototype faked or skipped | Why it is needed | How hard or expensive |
|---|---|---|
| Shared account authentication | Buyers and sellers need private, device-independent accounts and verification. | Medium; use managed authentication, server-side sessions and account recovery. |
| Real database and synchronized listings | Users and devices need to share and update inventory. | Medium; use a managed relational database and API instead of `localStorage`. |
| Payment processing and escrow | Purchases need refunds, fraud controls and protection for both sides. | Medium to high; integrate payments and build transaction, payout and dispute workflows. |
| Shipping, tracking and returns | Sellers and buyers need predictable delivery and remedies. | Medium; integrate shipping, address validation and tracking events. |
| Assessment and safety checks | Buyers need confidence, while helmets and bindings require category-specific review. | High; recruit trained reviewers and define escalation and refusal procedures. |
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

One concrete prompt that needed correction was "you trimmed it too much — expand it back." It caused the business case to grow to 2,782 words, even though the required format and length still needed a clear limit. I learned not to trust a longer answer without counting it, checking every rubric section and comparing the final text with the implemented site.

### Business lesson

AI made the interface nearly free to build and copy: for example, Copilot added 18 realistic listings in minutes, while getting the sign-in rules right took several tries. SlopeSwap's real advantage would come from buyer and seller networks, trusted condition checks and reliable operations rather than code alone.
