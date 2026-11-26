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

### Session — 2026-11-26 — Updated copy and documentation

- **Goal:** Refine the founding-seller offer and add the business-case and project-log documentation.
- **Key prompts:**
  1. "Change Founding sellers — No fees on your first 3 sales to after 3 sales 1 month free membership."
  2. "Test the site's implementation and fill in the project notes."
  3. "Add a VRIN test for sold-price data, seller ratings, assessors and condition process, and local partnerships."
  4. "Name the exact Shop page stats bar and network-effect line."
- **What worked:** The project log and business case now describe the prototype, cold-start strategy, competitive advantage and real implementation gaps.
- **What broke, and how I fixed it:** An initial business-case draft was too short, and later drafts were too long or did not test the VRIN resources systematically. I revised the structure and cut it to under 1,800 words.
- **Committed?** yes — documentation and final business-case commits, including `267272b`.

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

| Date | What went wrong | What finally fixed it |
|---|---|---|
| 2026-11-25 | Boot, pole and goggle listings showed the helmet picture. | Separate SVG assets were added and assigned to the correct listings. |
| 2026-11-25 | The signed-out Sell form stopped silently. | The form added account-gating feedback, redirected to account creation and returned to the listing. |
| 2026-11-25 | The phone navigation wrapped and split "Create account". | A Menu button replaced the wrapped layout under 600px. |
| 2026-11-26 | A temporary home-page background did not match the intended design. | The temporary change was removed and the original styling restored. |

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

AI made the interface nearly free to build and copy. SlopeSwap's useful advantage would come from buyer and seller networks, trusted condition checks and reliable operations rather than code alone.
