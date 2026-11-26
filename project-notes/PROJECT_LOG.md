# Project log

Keep this up to date as you go — a few lines per work session is enough. It's much harder to reconstruct at the end.

**Team name:** 
**Startup name:** SlopeSwap
**Live site link:** https://schafs13.github.io/ai-to-startup-template/

---

## Summary of website changes

The work below is reconstructed from the project's commit history.

1. **Started from the course template** — Created the original HTML/CSS/JavaScript workspace and project-note structure.
2. **Defined the SlopeSwap concept** — Replaced the sample startup data with the idea of a used ski and snowboard marketplace.
3. **Built the initial catalog** — Added 18 realistic fake listings across skis, snowboards, boots, protection and accessories, along with product illustrations.
4. **Created the home page journeys** — Added separate guidance for buyers and sellers, with links to shop, save or submit gear.
5. **Added the shop experience** — Built listing cards plus search, category, audience and price/name sorting controls.
6. **Added saved gear** — Added Save and undo actions, a saved-items view and a clear-saved control using browser local storage.
7. **Added the demo account flow** — Added account creation and gated the purchase and seller actions behind a browser-local profile.
8. **Added purchase requests** — Added buy/request buttons, a request-sent state and purchase-request counts.
9. **Built the seller flow** — Added a seller form for item details, condition and asking price, plus demo photo upload previews.
10. **Added market insights** — Calculated category price averages, typical sale times and suggested price ranges from the fake listings.
11. **Added seller history and dashboard** — Added seller ratings, sales counts, listing status, selling controls and submitted-listing tracking.
12. **Added network-effect messaging** — Added seller, buyer and active-listing stats plus text explaining how each side supports the other.
13. **Added demo trust tools** — Added a photo-quality score, rating history and founding-seller offer; clearly labeled these as estimates or demos.
14. **Added interface feedback** — Added confirmation toasts, undo for saving, clearing filters and responsive mobile navigation.
15. **Finished responsive styling** — Updated layout, cards, forms, navigation and status elements for the full SlopeSwap experience.
16. **Prepared the project log** — Reconstructed the work sessions and documented what would need to become real in a production version.

## Work sessions

Copy this block for each session.

### Session — 2026-11-25 — driver: project team

- **Goal for this session:** Build the first usable SlopeSwap prototype and replace the template's sample product with a ski and snowboard marketplace.
- **Key prompts we gave Copilot** (paste the important ones):
  1. "Create a startup for buying and selling used ski gear, with realistic fake listings and separate buyer and seller flows."
  2. "Add search, category and audience filters, saved listings, demo account gating, seller insights and listing submission."
- **What worked:** The shared fake listing data in `data.js` gave the prototype a consistent product catalog. The browser-only account, save and listing flows made the major journeys interactive without real services.
- **What broke, and how we fixed it:** The prototype needed multiple connected states rather than isolated pages. We kept the work in plain HTML, CSS and JavaScript and used the existing hash-based views plus browser `localStorage` to preserve demo state.
- **Committed?** yes — commit message: "started and changed a lot"

### Session — 2026-11-26 — driver: project team

- **Goal for this session:** Finish the prototype, verify the project documentation and prepare the concept for final submission.
- **Key prompts we gave Copilot** (paste the important ones):
  1. "Review the actual SlopeSwap prototype and fill the project log using its implemented buyer, seller and network-effect features."
  2. "Fill the business case with course concepts, a realistic revenue model, launch strategy, moat, cloud operations and ethics risks."
- **What worked:** The finished page includes shop filtering, saved gear, account-gated purchase requests, seller listings, market insights, photo previews and a seller dashboard.
- **What broke, and how we fixed it:** The fake account and payment flows could appear more real than they are, so the documentation records that they are browser-local demos and describes the real services a production version would need.
- **Committed?** yes — commit message: "finished website"

---

## Things that broke (running list)

| Date | What went wrong | What we tried | What finally fixed it |
|---|---|---|---|
| 2026-11-25 | The prototype needs consistent data for the shop and market-insight calculations. | We separated startup and listing data from the interaction code. | Keeping all example listings in `data.js` and adding `getBrowseListings()` made newly submitted listings appear in both views. |
| 2026-11-25 | Listing, saved-item and account actions must not share real user data. | We avoided real authentication and payment services. | Browser `localStorage` now demonstrates account, saved-listing and purchase-request state for the current browser only. |
| 2026-11-26 | A demo photo scan could be mistaken for a real safety or authenticity inspection. | We described the scan in the UI as an estimate. | The interface labels the score as a demo based on photo count, resolution and condition, not hidden damage or authenticity. |

## What a real version would need

Everything we wanted but faked or left out — real logins, a real database, payments, security, moderation, an app, staff, etc. For each one, say **why** it's needed and roughly **how hard or expensive** you think it would be.

| Feature we faked or skipped | Why a real company would need it | How hard / expensive? |
|---|---|---|
| Shared account authentication | Buyers and sellers need private, secure accounts and identity across devices. | Medium; use managed authentication plus server-side sessions, verification and account recovery. |
| Real database and synchronized listings | Other users and devices must see and update the same inventory. | Medium; a managed relational database and API would replace browser `localStorage`. |
| Payment processing and escrow | Purchases need refunds, fraud controls and protection for both sides. | Medium to high; integrate a payment provider and build transaction, dispute and payout workflows. |
| Shipping, tracking and return labels | Sellers and buyers need predictable delivery and a remedy when items are late or damaged. | Medium; integrate carrier or shipping SaaS and add address validation and tracking events. |
| Condition assessment and safety checks | Buyers need confidence and helmets and bindings require more careful verification than photos can provide. | High; recruit trained reviewers, define category standards and create escalation or refusal procedures. |
| Moderation and fraud prevention | Fake listings, scams and abusive users need detection and a route for customers to report them. | Medium to high; combine account checks, moderation tools, human review and audit logs. |
| Email and SMS notifications | Users need to know when listings sell, payments clear, items ship or disputes need action. | Low to medium; use managed notification and delivery services. |
| Mobile app | Repeat buyers and sellers may want push notifications and a faster listing workflow. | Medium to high; build separate mobile experiences or a higher-quality progressive web app. |
| Customer support and operations staff | Disputes, unsafe gear and incorrect listings cannot be handled only by software. | High recurring cost; start with one small support team and expand with transaction volume. |

## Reflection (fill in at the end)

1. What surprised you most about building software with AI?
   The speed of producing the visible interface was the biggest surprise. Adding views, forms and realistic listings was easy once the idea and data structure were clear. It was more surprising that the prototype could look complete while the most important real systems—identity, shared data, payments and trust—were still absent.
2. Which parts were easy, and which were hard? Why do you think that is?
   Content, layouts and repetitive components were relatively easy because an AI assistant could apply one pattern across the page. The harder part was coordinating multiple states, such as saving an item, submitting a seller listing, gating an action behind an account or preventing a repeat purchase request. Those behaviors require careful rules and testing, not only polished text or styling.
3. If a competitor had the same AI tool, how long would it take them to copy your site?
   A competitor could copy the visible design and straightforward client-side interactions in a few hours to a few days. However, copying the useful company would take much longer: a trustworthy inventory, working seller and buyer network, condition processes, payment and shipping operations, and a recognized brand could take roughly one to three years to establish.
