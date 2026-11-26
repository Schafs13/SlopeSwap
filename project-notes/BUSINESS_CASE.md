# Business case

## Executive summary

SlopeSwap connects used-ski and snowboard buyers and sellers. Parents need fit and safety confidence; sellers need demand. General classifieds provide little specialized information.

The prototype demonstrates buyer and seller journeys but not real demand. Viability requires trusted operations and a growing local network because competitors could copy the interface.

## 1. The idea

The primary buyer is a parent seeking the correct size, fair price and confidence in the description. Many know little about bindings, boot flex or helmet safety. The secondary buyer is an adult seeking lower-cost gear.

The primary seller is a parent or rider with usable gear that is no longer needed. Sellers must photograph it, describe its condition, answer questions and arrange delivery or pickup. General platforms may not reach someone seeking that youth size or category. SlopeSwap can organize listings and provide category-specific prompts.

Local ski shops could supply inventory and physical assessment or drop-off.

The problem is both search and trust: a listing does not show unknown helmet impact history or whether bindings need adjustment. SlopeSwap should distinguish seller statements, estimates and verified checks. Its value proposition is: **used winter-sport gear, organized and assessed for families and riders, so buyers shop with less uncertainty and sellers reach relevant buyers**. It must not claim every item is safe if it has not inspected it.

## 2. Where IT creates value

**Marketing and sales:** Search, filters and saved listings attract and convert buyers, while seller dashboards, submitted-listing status and market insights make selling easier. IT changes marketing by segmenting skis, snowboards, boots and protection by audience and size, and it changes sales by recording purchase requests and encouraging account activation.

**Operations:** A shared database could maintain records for items, sellers, assessments, purchases and shipments, replacing isolated browser data. Searchable inventory, standardized condition fields and audit logs improve transaction scale and consistency. The prototype currently calculates category averages and suggested price ranges from fake listings; production estimates should show sample size and remain non-guaranteed.

**Outbound logistics:** Shipping labels, address validation, parcel tracking, insurance, delivery confirmation and returns could coordinate delivery and prove completion. These systems change outbound logistics from manual seller-buyer arrangements to tracked, auditable distribution. Shipment events would also trigger refund or dispute workflows.

**Service:** Ratings, sales counts and seller history give buyers quality signals. Reports, condition grades, written decisions and appeals give customers a structured support process. IT changes service by routing safety-sensitive issues to trained moderators, preserving records and making outcomes more consistent.

## 3. Revenue model and unit economics

Buyers should not pay a membership fee. A parent buying one pair of youth boots should not need to commit to $12 each month, and a buyer fee would make a low-cost, infrequent purchase less attractive. Instead, sellers should pay a 10% commission only after SlopeSwap delivers a successful, accepted sale. The seller bears the fee because SlopeSwap creates the buyer, assessment, payment and shipping service that produces the outcome.

Founding sellers receive no commission during their first season. The 10% fee would be held with the completed payment and disclosed before listing or checkout. It must cover assessment labor, payment fees, shipping support and disputes, with an assisted-sale fee or adjusted rate if needed.

A repeatable transaction moves from submission through assessment, buyer conversion, payment and delivery to a rating. Measure listing-view conversion, completed transactions, seller activation, disputes, contribution margin and repeat use.

## 4. Network effects

SlopeSwap is a two-sided market with indirect network effects. More sellers provide buyer choice, while more buyers give sellers a reason to list. Growth on only one side creates stale listings or abandoned searches.

The prototype demonstrates this in the **Shop page stats bar (248 sellers · 1,842 buyers · 18 listings)** and the line **“More sellers means more choice for buyers, and more buyers means faster sales for sellers.”** A real launch should begin in one ski community with families and shops serving several categories and youth sizes.

Recruit sellers before a broad buyer campaign. Shops and parent groups could host drop-off or assessment events and seed inventory in a few categories.

The **Founding sellers: free for the first season** offer lets sellers join before demand is dense, avoiding an empty-market barrier.

Buyer searches reveal demand and successful sellers attract more sellers. More sellers may reduce individual visibility, while more buyers improve demand and the usefulness of ratings and price data.

## 5. Can it be copied? (the moat)

The interface is easy to copy, so durable advantage must come from resources that become more valuable with use.

Using **VRIN**, a resource must be valuable, rare, hard to imitate and non-substitutable:

- **Sold-price data:** Accepted transactions improve forecasting. A large, verified history across sizes and seasons is valuable and rare; rivals can collect public or new data, so copying is hard mainly until exclusive history accumulates. Manufacturer catalogs and general marketplaces offer partial substitutes but lack accepted local prices. **Verdict:** strong only after real volume.
- **Seller ratings:** Verified deliveries make ratings valuable and rare, and a rival cannot transfer non-resettable history. ID checks or guarantees partially substitute, but not a history of outcomes. **Verdict:** ratings create switching costs.
- **Assessors and condition process:** Trained local staff and calibrated recall knowledge are valuable and rare. A rival can copy a checklist but not staff, records and judgment; personal inspection partially substitutes. **Verdict:** strong only if consistently applied.
- **Local partnerships:** Shops provide inventory, drop-off, rates and credibility. A rival can sign the same shops, so relationships are rare only with better terms or integration. Remote carriers partially substitute, but not local trust or logistics. **Verdict:** valuable when exclusive or integrated.

Data, ratings and network size strengthen with real transactions and the assessment process improves through decision records.

A well-funded rival would need money to subsidize both sides, recruit and train assessors, establish carrier and shop partnerships, fund customer support and sustain low transaction density. It would also need real sales history, verified ratings and a willing user network. The interface and basic workflows could be copied in days or months, but trusted inventory, reputation, operating processes and relationships would take roughly **one to three years**.

## 6. Cloud and operations

The static prototype uses `localStorage`; real accounts need PaaS hosting and managed databases, IaaS photo storage and SaaS authentication, payments and shipping. Authentication risk requires MFA and recovery controls. Payment SaaS could raise fees or block the service; exported records, provider alternatives and fee monitoring reduce lock-in. Database PaaS may lose or block access, so it needs tested backups and exports. Photo limits control IaaS cost; carrier abstraction and a standby provider reduce shipping disruption. Moderation combines automated queues with trained review.

If payments or shipping fail, freeze affected payouts, label transactions "processing," and notify both users. Retry or switch providers for up to 48 hours; then refund or rebook and document the outcome.

## 7. Risks and ethics

**Unsafe gear:** A written assessment policy, trained reviewers and recall checks reduce risk. SlopeSwap should state inspection limits and obtain legal review of liability.

Used helmets should not be sold unless a documented professional inspection confirms that they have never sustained an impact; the safest default is to prohibit used-helmet resale. The photo-quality score should state that it cannot detect hidden damage and is not a safety inspection.

**Fraud and authenticity:** Identity checks, escrow or holds, two-factor authentication, audit logs and dispute escalation can reduce fraud. Image checks, ownership evidence and account history can reduce counterfeit or misrepresented goods. Mass reporting should not permanently remove an item, and repeat sales should not grant unlimited trust.

Ratings need fake-review detection and a way for new sellers to establish trustworthy history without permanent disadvantage. Reviews should connect to completed transactions, and moderators should investigate coordinated rating activity.

**Privacy:** Collect only necessary account, payment, address and support data. Encrypt and restrict it, remove photo metadata where practical and warn users not to include private documents or locations. Retain records only for a stated purpose.

**Pricing and moderation bias:** Label price estimates non-guaranteed, show their basis and test for systematic error across category, audience and location. Use written policies, training, quality checks and appeals to reduce inconsistent moderation. Record decisions and analyze patterns.

Extending gear reuse can reduce waste and make skiing cheaper, especially for children whose sizes change quickly.

## 8. Validation plan

First, interview parents, youth coaches and local sellers about recent sales, selling time, safety concerns and willingness to pay for assessment or shipping. Second, run a limited paid pilot in one community with real sellers and buyers to learn assessment cost, conversion and dispute frequency.

Third, measure assessment time, sale completion, shipping delay, damage reports and repeat use. Do not expand until transactions are safe and economical. Fourth, expand only where supply and demand are balanced. Search and transaction data can reveal missing inventory and unprofitable categories.

The prototype is useful for the first stage because it demonstrates search, saved gear, buyer gating and seller status, but it is not a live market. Success should be measured by completed transactions, contribution margin, disputes, repeat use and seller and buyer retention.

## Conclusion

SlopeSwap addresses fit, condition and trust problems. The prototype demonstrates buyer and seller journeys around search, saved listings, requests, seller submission and market insights.

The business could become viable if it delivers the right gear, a condition grade, secure payment and reliable delivery or pickup. Revenue must reflect transaction economics rather than page views. A local launch and shop partnerships are more credible than immediate national expansion.

Durable advantage would come from verified history, repeat sellers, assessment processes and local relationships. These assets could generate network effects and switching costs.

AI lowers interface costs and helps competitors copy visible features. SlopeSwap's defensibility therefore depends on operations and data, not appearance. If it validates a safe, efficient local market, it could grow into a repeatable two-sided service that extends the useful life of winter-sport equipment.
