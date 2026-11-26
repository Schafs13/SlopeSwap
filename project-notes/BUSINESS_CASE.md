# Business case

## Executive summary

SlopeSwap is a proposed two-sided marketplace for used ski and snowboard equipment. Parents and recreational riders face a recurring problem: gear becomes too small or is no longer needed while remaining usable, but general classified sites do not provide useful fit, price or safety information. Buyers cannot reliably judge an item from photographs, while sellers cannot easily reach people who need that specific size or category.

SlopeSwap would reduce this information problem. Buyers could search a curated catalog, filter listings, save items and submit purchase requests. Sellers could provide photos and condition information, receive suggested pricing and track listing status. In production, trained assessors, secure payments and shipping would connect the complete transaction instead of leaving buyers and sellers to coordinate every step.

The prototype demonstrates the concept, not a real market. It includes 18 example listings across skis, snowboards, boots, protection and accessories. It supports search, filters, sorting, saved gear, account gating, purchase requests, seller submission, market insights and seller history. These features show a connected journey, but browser-local data and fake listings do not prove demand or completed sales.

SlopeSwap could become viable if it combines a clear customer need with information technology, network effects and trusted operations. It would not succeed merely because it has a polished interface: a competitor could copy the website quickly with AI tools. Durable value would need to come from local relationships, verified transaction history, repeatable condition checks and a growing buyer and seller network.

## 1. Target customers and the problem

The primary buyer is a parent purchasing gear for a child. The parent wants the correct size, a reasonable price and confidence that the item matches the description. Many parents have limited knowledge of binding compatibility, boot flex, helmet safety or the difference between cosmetic wear and structural damage. They may therefore accept a small membership or transaction fee for curation and verification.

The primary seller is a parent or rider whose gear is still usable but no longer needed. The seller must photograph the item, describe its condition, answer questions and arrange delivery or pickup. General platforms expose the item to a wide audience but not necessarily to a person looking for that particular youth size or season. SlopeSwap can organize listings by category, audience and condition and provide category-specific prompts.

A local ski shop could be a complementary partner. It may have trade-in inventory, equipment knowledge and a physical location for assessment or drop-off. The partner could lend credibility that an unknown start-up does not initially possess.

The problem is both a search problem and a trust problem. A general listing does not tell a parent whether a helmet has an unknown impact history or whether bindings need professional adjustment. A specialized marketplace can label the evidence supporting a condition claim and distinguish seller statements, automated estimates and verified checks.

The value proposition is: **used winter-sport gear, organized and assessed for families and riders, so buyers can shop with less uncertainty and sellers can reach a relevant audience**. The promise must remain narrower than SlopeSwap's real capability. The company should not claim every item is safe if it has not inspected it.

## 2. How IT creates value

Information technology creates value in marketing, sales, operations and service. Search, filters and saved listings help buyers find relevant gear and return to it. Seller dashboards and listing-status records reduce uncertainty. Ratings and sales counts provide quality signals for a new transaction partner.

A shared database could maintain one record for each item, seller, assessment, purchase and shipment. This would improve scale and consistency compared with browser-local data. A production database, server-side API and secure account system would be necessary because the current prototype cannot synchronize real users or listings.

Market insights are another information advantage. The prototype calculates category averages and suggested price ranges from fake listings. A real service could compare sold items by season, category, audience, size and condition. The estimate should show supporting sample size and be labeled as a range rather than a guaranteed value.

Logistics could turn SlopeSwap into a complete distribution channel. Shipping labels, address validation, parcel tracking, insurance, delivery confirmation and returns would make distance less important. Shipment events would also create an audit trail for disputes.

Customer service should allow customers to report an item, receive a written decision and appeal a removal. Seller history should not be the only trust signal: clear condition grades and transparent moderator decisions explain what the platform knows.

The most valuable features are those that reduce expensive uncertainty by matching fit, filtering unsafe items, supporting a fair price, preventing duplicate payments or detecting unusual accounts.

## 3. Revenue model and unit economics

The proposed revenue model is $12 per month, $30 per season or $96 per year. The season plan would suit an active winter cycle, while the annual plan would suit repeat families and riders. These prices are hypotheses, not validated willingness-to-pay measurements. SlopeSwap should test memberships, per-listing payments, transaction commissions or a combination.

A membership may not suit a seller who lists only one or two items. A per-sale commission may better align revenue with a completed outcome. Assisted sales could charge a clearly disclosed fee for assessment, photography or shipping. The platform should state whether the fee is charged to the buyer, seller or both.

Direct costs include payment processing, disputes, assessors, packaging, shipping, support and cloud operations. Customer acquisition is also expensive in a local two-sided market. A membership is unlikely to cover these costs if SlopeSwap spends heavily to recruit only one side.

A repeatable transaction would follow this flow: a seller submits a listing; SlopeSwap completes a condition assessment; condition and fit information improve buyer conversion; the platform completes secure payment and delivery; and ratings encourage repeat use.

Early measures should include listing-view to purchase-request conversion, completed-transaction rate, seller activation, dispute rate, gross merchandise value, contribution margin and repeat transactions. A high listing count does not prove success if items remain unsold or assessment costs exceed revenue.

## 4. Network effects and launch strategy

SlopeSwap is a two-sided market with indirect network effects. More sellers provide choice for buyers, while more buyers give sellers a reason to list. Growth on one side can harm the other: too many sellers with few buyers creates stale listings, while too many buyers with too little inventory causes abandoned searches.

The prototype demonstrates the intended network effect in the **Shop page stats bar (248 sellers · 1,842 buyers · 18 listings)** and the line **“More sellers means more choice for buyers, and more buyers means faster sales for sellers.”** These figures are demonstrations, not real active users. They show first users how both sides benefit, but a production launch should start in one or two ski communities with enough families and shops to support several categories and youth sizes.

The cold-start plan should recruit sellers before a broad buyer campaign. Local ski shops and parent organizations could host drop-off or assessment events. SlopeSwap could initially publish inventory in a few popular categories and expand only after each category has a credible number of listings.

The founding-seller offer helps get the first sellers: **after three completed sales, receive one month of free membership**. It gives new sellers a visible reason to join before the market is dense and encourages them to stay active through the difficult launch stage. Recruiting shops and parent groups can pair the offer with drop-off or assessment events, giving founding sellers immediate support and a credible chance of making a sale. The reward also rewards retention and completed transactions rather than mere listing activity. The offer should state which geography and category qualify, and the reward should activate only after delivery or pickup is accepted.

Buyer searches reveal unmet demand. Seller success attracts additional sellers. Sold-price history should improve future estimates, while successful ratings make later transactions easier to evaluate.

## 5. Defensibility and competitive advantage

The source code and user interface are easy to copy. A competitor could reproduce search, filtering and the seller form in a short time. SlopeSwap's durable advantage would need to come from resources that become more valuable with use.

Using the **VRIN** framework, a resource is defensible only if it is valuable, rare, hard to imitate and non-substitutable:

### Sold-price data

- **Valuable:** Verified sold prices improve demand forecasting, listing advice and inventory matching.
- **Rare:** A sufficiently large, category-specific record of accepted transactions would be unusual; public asking prices alone are much less useful.
- **Hard to imitate:** A rival could gather its own data, but not SlopeSwap's verified history at launch. Real sales across seasons, sizes and conditions take time to collect.
- **Non-substitutable:** General marketplaces and manufacturer prices are substitutes for rough estimates, but they do not provide the same local, accepted transaction history.
- **One-line verdict:** Sold-price data is a potentially strong moat once its volume and verification are sufficient, although early or sparse data would offer little advantage.

### Seller ratings

- **Valuable:** Non-resettable ratings and sales history help buyers choose sellers and help SlopeSwap moderate repeat behavior.
- **Rare:** A trusted history accumulated across real, completed and delivered transactions is rare at a new platform.
- **Hard to imitate:** A rival cannot simply transfer or copy another platform's reputation. SlopeSwap must also prevent account deletion and re-registration from removing a poor record.
- **Non-substitutable:** Buyer reviews or platform payment records may substitute in narrow cases, but neither reproduces a seller's full SlopeSwap history and outcomes.
- **One-line verdict:** Seller ratings are defensible because they create switching costs and become more credible with every completed transaction.

### Assessors and condition process

- **Valuable:** Trained assessors reduce unsafe listings, improve buyer confidence and make condition grades more consistent.
- **Rare:** Local reviewers with winter-sport knowledge, recall awareness and escalation experience are not immediately available to every competitor.
- **Hard to imitate:** A rival can copy a checklist, but not SlopeSwap's trained staff, recorded decisions, quality controls and accumulated judgment.
- **Non-substitutable:** Automated photo analysis or a seller-written form can substitute for some checks, but neither is sufficient for every helmet, binding or structural safety concern.
- **One-line verdict:** The assessors and process are a strong advantage only if they are independently trained and consistently applied.

### Local partnerships

- **Valuable:** Shops, coaches, carriers and community organizations provide inventory, drop-off, buyer acquisition and local credibility.
- **Rare:** Trusted relationships with a limited set of local partners can be rare, especially in a specific ski community.
- **Hard to imitate:** A competitor may eventually sign similar partners, but existing contracts, personal relationships and shared operating experience are difficult to replicate quickly.
- **Non-substitutable:** National advertising, a larger ad budget or remote carriers may substitute for some distribution, but they cannot easily replace a shop's physical presence and community trust.
- **One-line verdict:** Local partnerships are valuable and relationship-based, but they remain less durable than data and ratings if they are not exclusive or operationally integrated.

**Advantages that strengthen over time:** Sold-price data improves as verified sales cover more categories, sizes, seasons and conditions. Seller ratings strengthen as more non-resettable transactions accumulate and users gain more confidence in a seller's history. The two-sided network strengthens as buyers attract sellers and successful listings attract buyers, creating a reinforcing cycle. The assessment process may also improve over time through more decision examples and quality checks, but this advantage grows mainly from disciplined training rather than transaction volume alone.

**What a well-funded rival would need:** A rival would need enough money to subsidize both sides of the cold-start market, recruit and train assessors, establish carrier and shop partnerships, fund customer support and pay for a long period of low transaction density. It would also need to build a real sales history, verified ratings and a network of users willing to complete transactions. A company could copy the interface and basic workflows in days or a few months, but copying the useful company—trusted inventory, non-resettable reputation, working processes and local relationships—would take roughly **one to three years**.

## 6. Cloud architecture and operations

The prototype is a static front end using browser `localStorage`. It is suitable for quick testing but does not synchronize real users or authenticate accounts. A production architecture could use PaaS for the website and API, a managed relational database and IaaS object storage for photos. SaaS could provide identity, payments, shipping, notifications and monitoring. A CDN and web-security service could improve delivery and protection.

Managed services reduce maintenance and may improve availability, but they add recurring cost and vendor lock-in. Contracts should support data export, deletion and tested recovery.

Each listing should maintain a server-side record, assessment state and publication decision. Purchase requests should become authorized payments or holds. Shipment events should update the transaction and trigger delivery, refund or dispute procedures. Audit logs should preserve important moderation decisions.

Moderation should combine automation and human judgment. Automated tools could queue duplicate photos, suspicious language or unusual accounts. A moderator should decide safety-sensitive cases involving helmets, bindings, recalls or damaged gear. Two-person approval may be appropriate for removal or a high-value refund. Users should receive a reason for a decision and a route to appeal.

## 7. Risks and ethics

**Unsafe gear** is the highest physical risk. A written assessment policy, trained reviewers and recall checks should reduce the chance of selling a compromised item. The platform should state inspection limits and obtain legal review of liability.

**Fraud** can be reduced with identity checks, escrow or transaction holds, two-factor authentication, audit logs and dispute escalation. Support staff need evidence-based rules so fraud prevention does not unfairly favor high-value sellers.

**Privacy** requires collecting only necessary account, payment, address and support data. Information should be encrypted and restricted. Photos should have metadata removed where practical, and users should be warned not to include private documents or locations. Records should be retained only for a stated purpose.

**Pricing and moderation bias** are also concerns. Price estimates should be labeled as non-guaranteed, show their basis and be tested across category, audience and location. Written policies, training, quality checks and appeals can reduce inconsistent moderation decisions. Decisions should be recorded so the company can identify patterns and correct them.

**Authenticity** requires image checks, ownership evidence and review of account history. Mass reporting should not permanently remove an item, and repeat sales should not give a seller unlimited trust.

## 8. Validation plan

Validation should proceed in stages. First, the company should interview parents, youth coaches and local sellers. It should ask about recent sales, the time spent answering questions, safety concerns and willingness to pay for assessment or shipping.

Second, SlopeSwap should run a limited paid pilot in one community with real sellers and buyers. The goal is to complete transactions and learn assessment cost, conversion and dispute frequency.

Third, the company should test operations. It should measure assessment time, sale completion, shipping delay, damage reports and repeat use. The platform should not expand marketing until it can complete transactions safely and at a reasonable cost.

Fourth, SlopeSwap should expand only in categories and geographic areas where supply and demand are balanced. Search data can show where inventory is missing; transaction data can show whether a category earns enough revenue to justify assessment.

The present prototype is useful for the first stage because it demonstrates search, saved gear, buyer gating and seller status. It is not a live market. Success should be measured by completed transactions, contribution margin, disputes, repeat use and seller and buyer retention.

## Conclusion

SlopeSwap addresses a focused problem: used ski and snowboard gear creates repeated fit, condition and trust challenges. The prototype shows that buyer and seller journeys can be organized around search, saved listings, purchase requests, seller submission and market insights.

The business could become viable if it delivers a complete outcome rather than only an advertisement: the right gear, an understandable condition grade, secure payment and reliable delivery or pickup. Revenue could come from memberships or assisted-sale fees, but the service must be designed around transaction economics rather than page views. A local launch and shop partnerships are more credible than immediate national expansion.

The durable advantage would come from verified history, repeat sellers, trained assessment processes and local relationships. These assets could generate network effects and switching costs that the initial code does not provide.

AI can reduce the cost of building the interface and help competitors copy its visible features. SlopeSwap's defensibility will therefore depend on the quality of its operations and data, not only on the appearance of the site. If it validates a safe and efficient local market, it could grow into a repeatable two-sided service that extends the useful life of winter-sport equipment.
