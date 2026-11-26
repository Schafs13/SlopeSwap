# Business case

## Executive summary

SlopeSwap is a two-sided marketplace for used ski and snowboard gear. Parents and riders repeatedly need or sell items as children outgrow equipment or riders stop using it. General classifieds provide little specialized fit, price or safety information.

Buyers could search, filter, save and request gear; sellers could provide photos and condition information, receive pricing guidance and track listings. Assessors, secure payments and shipping would connect the transaction.

The prototype has 18 fake listings across skis, snowboards, boots, protection and accessories, plus search, saved gear, account gating, purchase requests, seller submission and market insights. Demo data proves the interface concept, not demand or completed sales.

SlopeSwap could become viable through customer need, information technology, network effects and trusted operations. Because competitors could copy the interface, durable value must come from relationships, verified history, condition processes and a growing network.

## 1. The idea

The primary buyer is a parent purchasing for a child who wants the correct size, fair price and confidence in the description. Many know little about binding compatibility, boot flex, helmet safety or structural damage. The secondary buyer is an adult seeking lower-cost gear.

The primary seller is a parent or rider with usable gear that is no longer needed. Sellers must photograph it, describe its condition, answer questions and arrange delivery or pickup. General platforms may not reach someone seeking that youth size or category. SlopeSwap can organize listings and provide category-specific prompts.

Local ski shops could supply inventory, technical knowledge and physical assessment or drop-off. They give SlopeSwap credibility that an unknown start-up lacks.

The problem is both search and trust: a listing does not show unknown helmet impact history or whether bindings need adjustment. SlopeSwap should distinguish seller statements, estimates and verified checks. Its value proposition is: **used winter-sport gear, organized and assessed for families and riders, so buyers shop with less uncertainty and sellers reach relevant buyers**. It must not claim every item is safe if it has not inspected it.

## 2. Where IT creates value

Search, filters and saved listings support marketing and repeat visits. Seller dashboards and listing status reduce uncertainty, while ratings and sales counts provide quality signals.

A shared database could maintain records for items, sellers, assessments, purchases and shipments. A production database, API and account system are necessary because the prototype cannot synchronize users or listings.

Market insights can compare sold items by season, category, audience, size and condition. Estimates should show supporting sample size and be labeled as ranges, not guaranteed values. This prototype currently calculates category averages and suggested ranges from fake listings.

Shipping labels, address validation, parcel tracking, insurance, delivery confirmation and returns create a distribution channel and an audit trail for disputes. Customer service should allow reports, written decisions and appeals, with seller history supplemented by condition grades and moderator decisions.

The most valuable features reduce uncertainty: matching fit, filtering unsafe items, supporting fair prices, preventing duplicate payments and detecting unusual accounts.

## 3. Revenue model and unit economics

The proposed consumer prices are $12 per month, $30 per season or $96 per year. The season plan may suit an active winter cycle, while the annual plan may suit repeat families. These are hypotheses that require willingness-to-pay tests. SlopeSwap should test memberships, per-listing payments, transaction commissions or a combination.

A membership may not suit a seller with one or two items. A per-sale commission may better align revenue with a completed outcome. Assisted sales could charge a disclosed fee for assessment, photography or shipping. SlopeSwap should clearly identify who pays.

Direct costs include payments, disputes, assessment, packaging, shipping, support and cloud operations. Customer acquisition is expensive in a local two-sided market. A membership may not cover these costs if spending focuses on only one side.

A repeatable transaction moves from submission through assessment, buyer conversion, payment and delivery to a rating. Measure listing-view conversion, completed transactions, seller activation, disputes, contribution margin and repeat use. Listing count is not success if items remain unsold or costs exceed revenue.

## 4. Network effects

SlopeSwap is a two-sided market with indirect network effects. More sellers provide buyer choice, while more buyers give sellers a reason to list. Growth on only one side creates stale listings or abandoned searches.

The prototype demonstrates this in the **Shop page stats bar (248 sellers · 1,842 buyers · 18 listings)** and the line **“More sellers means more choice for buyers, and more buyers means faster sales for sellers.”** These figures are demonstrations, not real users. A real launch should begin in one or two ski communities with enough families and shops to serve several categories and youth sizes.

The cold-start plan should recruit sellers before a broad buyer campaign. Shops and parent organizations could host drop-off or assessment events. SlopeSwap could publish inventory in a few popular categories and expand only after each category has credible choice.

The founding-seller offer helps get the first sellers: **after three completed sales, receive one month of free membership**. It gives sellers a reason to join before the market is dense and encourages activity through launch. Shops and parent groups can combine it with assessment events, giving sellers support and a plausible chance to sell. The reward activates after delivery or pickup and specifies eligibility, so it drives acquisition and completion, not merely listing activity.

Buyer searches reveal demand, seller success attracts additional sellers, sold-price history improves estimates and accumulated ratings build trust.

## 5. Can it be copied? (the moat)

The interface is easy to copy, so durable advantage must come from resources that become more valuable with use.

Using **VRIN**, a resource must be valuable, rare, hard to imitate and non-substitutable:

- **Sold-price data:** Valuable for forecasting, pricing and inventory matching. Accepted transactions by category, size and season are rare and superior to asking prices. Rivals cannot copy verified history at launch, and real sales take time. **Verdict:** strong with volume, weak when sparse.
- **Seller ratings:** Valuable for choice and moderation and rare when accumulated across deliveries. Rivals cannot transfer or quickly reproduce this history; reviews or payments may substitute in limited cases. SlopeSwap must prevent account deletion or re-registration from erasing poor behavior. **Verdict:** ratings create switching costs.
- **Assessors and condition process:** Valuable for reducing unsafe listings and improving consistency. Local reviewers with recall knowledge are rare. A rival can copy a checklist but not trained staff, recorded decisions, controls and judgment; photo analysis is a limited substitute. **Verdict:** strong only with consistent application.
- **Local partnerships:** Valuable for inventory, drop-off, acquisition and credibility. Trusted relationships are rare and harder to imitate than advertising, though similar partners could eventually be signed. Remote carriers cannot replace physical presence and community trust. **Verdict:** valuable but less durable unless exclusive or integrated.

Sold-price data strengthens across categories and seasons. Seller ratings strengthen as non-resettable transactions accumulate. The network strengthens as buyers attract sellers and successful listings attract buyers. The assessment process improves through decision examples and quality checks.

A well-funded rival would need money to subsidize both sides, recruit and train assessors, establish carrier and shop partnerships, fund customer support and sustain low transaction density. It would also need real sales history, verified ratings and a willing user network. The interface and basic workflows could be copied in days or months, but trusted inventory, reputation, operating processes and relationships would take roughly **one to three years**.

## 6. Cloud and operations

The prototype is a static front end using browser `localStorage`. It cannot synchronize real users or authenticate accounts. Production could use PaaS for the website and API, a managed database and IaaS object storage for photos. SaaS could provide identity, payments, shipping, notifications and monitoring, with a CDN and web-security service.

Managed services add cost and vendor lock-in. Contracts should support export, deletion and recovery. Each listing needs a server-side record, assessment state and publication decision. Purchase requests should become payments or holds, and shipment events should trigger delivery, refund or disputes with audit logs.

Moderation should combine automation and human judgment. Automated tools can queue duplicate photos, suspicious language or unusual accounts. A moderator should decide safety-sensitive helmet, binding, recall or damage cases, with two-person approval for removal or high-value refunds. Users should receive reasons and an appeal route.

## 7. Risks and ethics

**Unsafe gear:** A written assessment policy, trained reviewers and recall checks reduce risk. SlopeSwap should state inspection limits and obtain legal review of liability.

**Fraud and authenticity:** Identity checks, escrow or holds, two-factor authentication, audit logs and dispute escalation can reduce fraud. Image checks, ownership evidence and account history can reduce counterfeit or misrepresented goods. Mass reporting should not permanently remove an item, and repeat sales should not grant unlimited trust.

**Privacy:** Collect only necessary account, payment, address and support data. Encrypt and restrict it, remove photo metadata where practical and warn users not to include private documents or locations. Retain records only for a stated purpose.

**Pricing and moderation bias:** Label price estimates non-guaranteed, show their basis and test for systematic error across category, audience and location. Use written policies, training, quality checks and appeals to reduce inconsistent moderation. Record decisions and analyze patterns.

## 8. Validation plan

First, interview parents, youth coaches and local sellers about recent sales, selling time, safety concerns and willingness to pay for assessment or shipping. Second, run a limited paid pilot in one community with real sellers and buyers to learn assessment cost, conversion and dispute frequency.

Third, measure assessment time, sale completion, shipping delay, damage reports and repeat use. Do not expand until transactions are safe and economical. Fourth, expand only where supply and demand are balanced. Search and transaction data can reveal missing inventory and unprofitable categories.

The prototype is useful for the first stage because it demonstrates search, saved gear, buyer gating and seller status, but it is not a live market. Success should be measured by completed transactions, contribution margin, disputes, repeat use and seller and buyer retention.

## Conclusion

SlopeSwap addresses fit, condition and trust problems. The prototype demonstrates buyer and seller journeys around search, saved listings, requests, seller submission and market insights.

The business could become viable if it delivers the right gear, a condition grade, secure payment and reliable delivery or pickup. Revenue must reflect transaction economics rather than page views. A local launch and shop partnerships are more credible than immediate national expansion.

Durable advantage would come from verified history, repeat sellers, assessment processes and local relationships. These assets could generate network effects and switching costs.

AI lowers interface costs and helps competitors copy visible features. SlopeSwap's defensibility therefore depends on operations and data, not appearance. If it validates a safe, efficient local market, it could grow into a repeatable two-sided service that extends the useful life of winter-sport equipment.
