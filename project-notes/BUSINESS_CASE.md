# Business case

Your prototype shows what the product looks like. This document explains why it could become a business. Refer to course concepts by name.

## 1. The idea

- **Customer:** Who exactly is it for?

The primary buyer is a parent seeking the right size, fair price and reliable details; adults seeking lower-cost gear are another segment. Buyers may lack expertise on bindings, boot flex or helmet condition. Sellers are parents and riders with usable gear. General classifieds offer little category guidance or reach.

- **Problem:** What problem do they have today, and how do they solve it now?

The problem combines search and trust: general classifieds or shop retail rarely provide category-specific information, and listings cannot establish helmet impact history or binding condition.

- **Solution:** What does your product do differently or better?

SlopeSwap organizes listings and separates seller claims, estimates and verified checks. Shops could provide inventory, drop-off or assessment. Its promise: **used winter-sport gear, organized and assessed to reduce uncertainty and help sellers reach buyers**. Never imply uninspected items are safe. The demo collects condition, prompts for size, limits photos and tracks assessment, active, paused and sold statuses; only Active seller listings appear in the Shop.

The current site is a fictional, browser-only demo: profiles, saves, seller submissions and purchase-request status are local; it does not perform real inspections, process payments or arrange shipments. Those are planned services, not working features.

- **Revenue:** How does the company make money?

Avoid buyer memberships for infrequent, low-cost purchases. The proposal is a 10% seller commission after an accepted sale. At a $45 price, it cannot cover assessment and support:

| Illustrative cost per order | Assumption | Cost |
| --- | --- | ---: |
| Sale price and 10% commission | One item sold for $45 | $4.50 revenue |
| Payment processing | 2.9% + $0.30 of the $45 charge | $1.61 |
| Assessment labor | 15 minutes at $18/hour | $4.50 |
| Shipping support | Label and tracking assistance; postage excluded | $1.00 |
| Refund/dispute reserve | Planning allowance per order | $0.50 |
| **Contribution after these variable costs** | $4.50 − $7.61 | **−$3.11** |

These are illustrative, unmeasured assumptions. The $3.11 loss excludes customer acquisition, insurance, taxes and fixed costs; postage is paid separately at cost, and any subsidy increases the loss. The commission would need to be about 16.9% to cover these variable costs alone.

One hypothesis is a disclosed $4.50 assessment fee in addition to the commission. It would yield about $1.39 contribution before fixed costs if collected separately and processing stays as modeled. Test willingness to pay and assessment time before adopting it; higher-value bundles, a higher rate or an unassessed tier are alternatives to test, not proven fixes.

The model waives commission for founding sellers' first season, matching the site banner; assessment-fee coverage is unspecified. The demo collects no fees (its account form says no money will be charged). A live service must disclose fees and postage terms. Track per-order contribution, assessment time, conversion, support costs, disputes and repeat use—not page views or gross merchandise value.

## 2. Where IT creates value

Which parts of the value chain does your product change, and how? Which course concepts apply (e.g. scale, distribution channels, differentiation, data, switching costs)?

Category checks differentiate the service; shared records support scale; shops can be distribution channels. Data may improve decisions; saves and ratings may support retention but do not prove switching costs.

**Marketing and sales:** Search, filters and saves help buyers find gear; seller dashboards and insights support listing and pricing. Category targeting and purchase requests support conversion.

**Operations:** A shared database would replace browser-only data with searchable inventory and seller, assessment and transaction records. Audit history makes decisions traceable. Prototype price insights use fictional listings; real estimates need sample sizes and uncertainty labels.

**Outbound logistics:** A production service could use labels, tracking and delivery confirmation to make shipping auditable and trigger dispute workflows.

**Service:** A production service could use verified sales, condition reports and appeals as buyer signals. Trained moderators would document decisions and handle safety-sensitive concerns consistently.

## 3. Network effects

Does your product get more valuable as more people use it?

- Is it a **one-sided** or **two-sided** market? Who are the sides?
- Where does the extra value come from as the network grows?
- How would you solve the "empty network" problem at launch?
- Point to the part of your prototype that shows this.

This two-sided market has indirect network effects: more sellers increase buyer choice; more buyers increase seller demand. One-sided growth leaves stale listings or empty searches. Prototype evidence is the **Shop stats bar (248 sellers · 1,842 buyers · 18 listings)** and “More sellers means more choice for buyers, and more buyers means faster sales for sellers.” These are demo, not live, figures.

Launch in one ski community. Recruit sellers first; use shops or parent groups for drop-off, assessment and inventory. **Free for the first season** lowers seller entry cost. Search data can reveal unmet demand; too many sellers can reduce listing visibility. Begin with a few categories and youth sizes.

## 4. Can it be copied? (the moat question)

Anyone in this class could rebuild your website in a weekend with the same AI tool. So the code is **not** your competitive advantage.

- What about your business is **valuable, rare, hard to imitate and well-organized** (VRIN)?
- What would a competitor with a bigger budget need to copy you, and how long would it take?
- Which of your advantages get *stronger* over time (data, network, brand, switching costs)?

The interface is easy to copy. **VRIN** tests whether a resource is valuable, rare, hard to imitate and non-substitutable. The site displays fictional sample ratings but has no transaction history or verified-review workflow; users can multi-home, so these are potential advantages. Capturing value also requires consistent assessments, documented decisions and dispute handling—capabilities the prototype has not proven.

- **Sold-price data:** Verified prices by size, condition and season can improve decisions (**valuable**). A deep local dataset may be **rare** and takes time to build, but rivals can collect sales data; price guides are **substitutes**. It needs enough comparable transactions and accuracy checks. **Verdict:** a temporary advantage only with dense, reliable data.
- **Seller ratings:** Verified delivered-sale reviews can reduce uncertainty (**valuable**), but established marketplaces already have reviews (**not rare**). Competitors can implement them (**imitable**); guarantees and inspections are **substitutes**. Ratings create switching costs only when credible, useful and hard to transfer. Sellers can still multi-home, so these costs are limited. **Verdict:** supports trust, not a moat alone.
- **Assessment process:** Consistent trained reviews can reduce uncertainty (**valuable**). Local expertise and decision records may be scarce, but checklists can be copied; building a reliable team takes time (**partly imitable**). Shop inspections and warranties are **substitutes**. A record of accurate decisions could improve training, but only if outcomes are monitored. **Verdict:** a differentiator only if quality is measured and consistent.
- **Local partnerships:** Shop inventory, drop-off and referrals improve supply and convenience (**valuable**). Access is **rare** only when exclusive or meaningfully integrated; ordinary agreements are **imitable**. Other shops, pickup and carriers are **substitutes**. **Verdict:** useful leverage, otherwise replicable.

Sales can strengthen data, reputation and assessment consistency only with sufficient volume. A funded rival could subsidize both sides, recruit assessors and build shop, carrier and support operations. Trusted inventory and relationships may take **one to three years** to build, but this is an estimate, not a proven barrier.

## 5. Cloud and operations

What would it take to run this for real? Which parts would you buy as cloud services (SaaS, PaaS, IaaS), and what are the risks of relying on them?

The prototype uses browser `localStorage`; production needs hosting and a database (PaaS), photo storage (IaaS), and authentication, payment and shipping services (SaaS). Use MFA, recovery controls, tested backups, data exports and photo limits. Monitor fees, retain provider alternatives and keep a fallback carrier. Combine automated queues with trained moderation.

On payment or shipping failure, pause affected payouts, mark orders “processing” and notify both users. Retry or switch providers for up to 48 hours; then refund or rebook and document the resolution.

## 6. Risks and ethics

What could go wrong—for your customers, their data, or society? What would you do about it?

**Safety:** The demo includes fictional helmet listings; their descriptions are not evidence of inspection. For a live service, use written category-specific assessment and recall checks, state inspection limits and obtain liability review. Prohibit used-helmet resale unless a qualified professional verifies no impact history. The photo score cannot detect hidden damage and is not an inspection.

**Fraud and ratings:** Identity checks, payment holds, two-factor authentication and dispute escalation reduce risk. Check ownership; link reviews to completed sales, detect coordination and give new sellers a fair way to build history. Review reports and do not grant unlimited trust based on repeat sales.

**Privacy:** Minimize personal data, encrypt and restrict access, remove photo metadata where practical and set retention limits. Warn users not to post private documents or locations.

**Bias and sustainability:** Label estimates non-guaranteed, show their basis and test errors across category, audience and location. Use written moderation rules, quality checks and appeals. Reuse can lower waste and gear costs, particularly for children who quickly outgrow equipment.

### Validation plan

Interview parents, coaches and sellers about sales, safety and willingness to pay. Run a paid local pilot to measure assessment cost, conversion, disputes, delivery and repeat use. Expand only when transactions are safe, contribution-positive and supply and demand are balanced.

The prototype demonstrates search, saves, account gating and seller status, not demand. Judge success by completed sales, contribution margin, disputes and retention; assess category economics separately.

## Conclusion

SlopeSwap addresses gear search and trust, but viability depends on safe, reliable operations and positive transaction economics. Start locally and validate real demand, willingness to pay and repeat use. Any defensibility must come from trusted operations and accumulated data—not the easily copied interface.
