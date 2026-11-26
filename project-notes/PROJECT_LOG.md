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
17. **Checked and refined the latest copy** — Audited the full website implementation and changed the founding-seller offer to “After 3 sales: 1 month free membership.”

## Work sessions

### Session — 2026-11-01 — Initial commit

- **Goal for this session:** I started the course project by creating the initial website template and project structure.
- **Key prompts I gave Copilot:** I began with the starter repository and prepared the workspace for a new startup prototype.
- **What worked:** I established the initial HTML, CSS, JavaScript and project-notes structure that the later SlopeSwap work could build on.
- **What broke, and how I fixed it:** I had not yet added the SlopeSwap concept or the later interactive features, so I left the template in place until the implementation sessions began.
- **Committed?** yes — commit message: "Initial commit"

### Session — 2026-11-25 afternoon — started and changed a lot

- **Goal for this session:** I built the first usable SlopeSwap prototype and replaced the template's sample product with a ski and snowboard marketplace.
- **Key prompts I gave Copilot** (important prompts from this work period):
  1. "Create a startup for buying and selling used ski gear, with realistic fake listings and separate buyer and seller flows."
  2. "Add search, category and audience filters, saved listings, demo account gating, seller insights and listing submission."
- **What worked:** The shared fake listing data in `data.js` gave the prototype a consistent product catalog. My browser-only account, save and listing flows made the major journeys interactive without real services.
- **What broke, and how I fixed it:** The prototype needed multiple connected states rather than isolated pages. I kept the work in plain HTML, CSS and JavaScript and used the existing hash-based views plus browser `localStorage` to preserve demo state.
- **Committed?** yes — commit message: "started and changed a lot"

### Session — 2026-11-25 night — finished website

- **Goal for this session:** I finished the prototype and prepared the concept for final submission.
- **Key prompts I gave Copilot** (important prompts from this work period):
  1. "Make listings submitted on the Sell page also appear in the Shop"
  2. "Add a stats bar showing active sellers, buyers and listings"
  3. "Create boots and accessories SVGs and use them for the right listings"
  4. "Show a message when a signed-out user submits the Sell form"
  5. "Add a Menu button on screens under 600px"
  6. "Add seller ratings to listing cards"
  7. "Add a Market insights panel on the Sell page"
  8. "Add How to buy and How to sell steps on the home page"
- **What worked:** I completed the shop filtering, saved gear, account-gated purchase requests, seller listings, market insights, photo previews and seller dashboard.
- **What broke, and how I fixed it:** The fake account and payment flows could appear more real than they are, so I documented that they are browser-local demos and described the real services a production version would need.
- **Committed?** yes — commit message: "finished website"

### Session — 2026-11-26 — project log

- **Goal for this session:** I organized the project log and began documenting the prototype's work sessions and implementation details.
- **Key prompts I gave Copilot** (important prompts from this work period):
  1. "Review the actual SlopeSwap prototype and fill the project log using its implemented buyer, seller and network-effect features."
- **What worked:** I added a readable summary of the website changes and began keeping the project session information in `PROJECT_LOG.md`.
- **What broke, and how I fixed it:** Reconstructing the work from the finished prototype could lose detail, so I used the commit history and existing implementation to record the major features and outcomes.
- **Committed?** yes — commit message: "project log"

### Session — 2026-11-26 — edited project log

- **Goal for this session:** I reviewed and updated the project log after the first documentation pass.
- **Key prompts I gave Copilot** (important prompts from this work period):
  1. "Update the project logs with the session and the previous commits."
- **What worked:** I refined the project log's session history and made the commit history and work periods easier to follow.
- **What broke, and how I fixed it:** The earlier session information needed to match the actual Git work periods more closely, so I revised the log to separate the documentation updates and implementation periods.
- **Committed?** yes — commit message: "edited project log"

### Session — 2026-11-26 — worked some more

- **Goal for this session:** I double-checked the existing SlopeSwap prototype and updated the founding-seller offer.
- **Key prompts I gave Copilot** (important prompts from this work period):
  1. "change Founding sellers — No fees on your first 3 sales to after 3 sales 1 month free membership"
  2. "double check everything ive given you"
  3. "check all the previous work done on this website"
- **What worked:** I audited the full website, confirmed that the core files and assets were consistent, and changed the banner to "After 3 sales: 1 month free membership."
- **What broke, and how I fixed it:** I also removed temporary home-page background experiments that did not belong in the final site, preserving the original styling and routing behavior.
- **Committed?** yes — worked some more

## Previous commits

| Commit | Summary |
|---|---|
| `10709b7` | Initial course template commit. |
| `e853078` | Started and substantially changed the prototype: added SlopeSwap concept, catalog, views, interactions, styles and project structure. |
| `03091e6` | Finished the website: expanded listings and app behavior, seller and account flows, market insights, responsive styling and documentation. |
| `8c64b39` | Added the project log. |
| `460b979` | Edited the project log. |
| `254b9e6` | Worked some more: audited the website, fixed final copy and removed temporary background experiments. |

---

## Things that broke (running list)

| Date | What went wrong | What we tried | What finally fixed it |
|---|---|---|---|
| 2026-11-25 | The boot, pole and goggle listings showed the helmet picture. | We checked which listings used `protection.svg`. | Copilot created separate SVGs for each item and used the correct picture for each listing. |
| 2026-11-26 | The Sell form did nothing when a signed-out user submitted it. | We tested it and found that it silently stopped. | We added a message and a redirect to Create account, then returned the user to the listing. |
| 2026-11-26 | On a phone, the nav wrapped to two lines and "Create account" split in half. | We tried shrinking the text. | We added a Menu button for screens under 600px. |
| 2026-11-26 | A home-page background change did not match what I wanted. | We tried adjusting it. | We undid the change and restored the original styles. |

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

### Business lesson

I learned that AI made the website nearly free to build and copy: for example, Copilot added 18 realistic listings in minutes, while getting the sign-in rules right took several tries. SlopeSwap's real advantage would not be its code, but its buyer and seller network, trusted condition checks and reliable operations.
