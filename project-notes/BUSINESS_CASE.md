# Business case

Your prototype shows *what* the product looks like. This document explains *why* it could become a business. Answers refer to course concepts by name and are based on the implemented SlopeSwap prototype.

## 1. The idea

- **Main customer:** Parents who buy and sell gear for children whose sizes change every season. The broader market includes recreational skiers and snowboarders, but parents are the clearest initial target because they repeatedly face the same problem: children quickly outgrow expensive skis, boots and protection.
- **Problem:** Used children’s gear is hard to value, verify and sell safely. Parents may use general classifieds or local buy/sell groups, but those channels provide little help with condition, fair pricing, search or shipping. They must also judge safety issues and compete for attention across fragmented listings.
- **Solution:** SlopeSwap gives this customer a focused marketplace for used ski and snowboard equipment. The prototype lets buyers search and save listings and lets sellers submit gear for assessment, see category price guidance and track a seller profile. The real SlopeSwap concept would also provide condition assessment, rating history, payment and shipping.
- **Revenue:** The implemented membership choices are the main revenue model: **$12 per month, $30 per season or $96 per year**. For both buyers and sellers, a recurring membership can unlock marketplace access or benefits. Separately, SlopeSwap could charge a fee or commission on an assisted sale, such as secure payment, assessment and shipping, but this is not the current membership model and would need to be disclosed in the final pricing policy.
- **Cold-start offer:** The founding-seller banner on the Sell page matches the prototype: **“After 3 sales: 1 month free membership.”** Founding sellers earn the reward after completing three sales; this does not promise that the first three sales are fee-free.

## 2. Where IT creates value

SlopeSwap changes several parts of the value chain:

- **Marketing and sales:** Search filters, audience and category discovery, saved listings, purchase requests and the membership offer help the company attract and convert buyers and sellers. The active-seller, active-buyer and listing figures shown in the Shop create a visible reason to join.
- **Operations:** Shared listing data, Market insights, seller dashboards, submitted-listing status and rating history support marketplace operations. In a real deployment, these tools would help staff manage inventory, assess condition and review transactions. A database and workflow system would provide **scale** and **consistency**; the prototype currently substitutes browser-local demo data.
- **Outbound logistics:** Carrier integrations, labels, tracking and delivery confirmation would give sellers and buyers a reliable route from the seller to the buyer. This reduces the cost and friction of a distributed marketplace and is an important **distribution channel**.
- **Service:** Seller ratings, photo-quality feedback, condition assessments and dispute handling increase confidence and reduce the risk of an unsafe or inaccurate listing. A real customer-support process would handle refunds, damages and unsafe gear.

The most direct course concept is **IT-enabled differentiation**: SlopeSwap is not just a listing directory. Shared data and reliable operations could turn assessment, pricing guidance, ratings and logistics into a better buying and selling experience. IT also improves **accessibility** and **scale** because it can match a large, geographically distributed supply of gear with geographically distributed demand.

## 3. Network effects

SlopeSwap is a **two-sided market**: buyers need enough sellers to provide choice, while sellers need enough buyers to receive offers and complete sales. It has an **indirect network effect** in both directions:

- More sellers create more selection and raise the chance that a buyer finds the right child’s size or model.
- More buyers create more demand and make each listing more likely to sell.
- Seller ratings and successful transactions create reputational value, while Market insights become more useful as the catalog and sales history grow.

The prototype’s Shop page is the pointer for this effect: it shows 248 active sellers, 1,842 active buyers and 18 gear listings, followed by the line “More sellers means more choice for buyers, and more buyers means faster sales for sellers.” These are demonstration numbers, not real transactions.

To solve the **empty-network problem**, SlopeSwap should launch in one ski region or local community instead of everywhere. It could seed the supply side with local ski shops and organized parents’ ski groups, invite sellers with the “After 3 sales: 1 month free membership” founding offer, and subsidize or promote early listings. The product could add preloaded “coming soon” inventory and local drop-off or assessment events. Then it should open the buyer side once enough listings exist in the main child-size and category segments. Requiring at least a few relevant options per size would prevent buyers from joining an empty marketplace.

## 4. Can it be copied? (the moat question)

The HTML, CSS, JavaScript and the prototype data are not a durable advantage. The project log also estimates that a competitor could copy the visible design and straightforward client-side behavior **in a few hours to a few days**. The useful company—trusted inventory, a working network, assessment operations, payments, shipping and brand—would take much longer to establish.

The VRIN test is about the operating resources, not the source code:

| Resource | Valuable? | Rare? | Hard to imitate? | Non-substitutable? | Assessment |
|---|---|---:|---:|---:|---|
| Sales and pricing data | Yes | Potentially, once real transaction history is large and accepted | Hard to imitate while exclusive history is growing; public listings alone are not enough | Yes, if it produces more reliable local price and sale-time estimates | The prototype’s fake listings demonstrate the feature, but they do not yet constitute a defensible data resource. A competitor could initially copy visible averages, so the advantage starts weak and strengthens with real, structured sales. |
| Seller ratings and seller-history records | Yes | Yes at scale, because accumulated verified ratings follow real sellers and transactions | Hard to imitate: a rival cannot transfer users’ histories or the evidence of completed sales | Partially: a generic star score is substitutable, but verified transaction history plus repeat-seller behaviour is more distinctive | Seller ratings and sales counts are visible in the prototype. In production, verified, non-resettable ratings could improve trust and create **switching costs**, although fake accounts and review manipulation must be prevented. |
| Trained assessors and condition processes | Yes | Yes, if trained to recognize wear and safety defects consistently | Moderately to very hard: procedures, training records and assessor accuracy take time to build | Partially: buyers can inspect gear themselves or rely on retailers, but those substitutes lose SlopeSwap’s convenience | This resource is only described in the prototype and log. Establishing an assessor team and a calibrated, category-specific standard would take longer than copying the page. |
| Carrier, ski-shop and safety-partnerships | Yes | Potentially, where an arrangement gives better rates, local drop-off or exclusivity | Hard to imitate if relationships and volume discounts are established | Yes if the partnership provides lower delivery cost or a trusted physical service point | Partnerships are an intended production resource rather than demonstrated capabilities on the site. Broadly available carrier APIs are substitutes, but a working local network may not be easy to copy quickly. |

The project can demonstrate a few advantages **at prototype level**. Market insights and seller ratings are already on the Sell and listing pages, so the claim is not that none of these resources exist. However, only real transactions can turn demonstration estimates and browser-local ratings into defensible data.

**Brand trust** would not be strong merely because a logo is familiar. It could build through transparent condition grades, verified completed transactions, consistent safety decisions, seller ratings, honest fee information and responsive dispute resolution. Each successful transaction adds an observable record that a new competitor cannot instantly copy. Over time, data becomes more predictive, ratings become harder to replace, the network makes matching faster, and users’ saved gear, ratings and seller history increase switching costs.

## 5. Cloud and operations

A production deployment could separate the prototype’s browser behavior into the following services:

- **PaaS:** managed application hosting and serverless functions for the website and marketplace API.
- **PaaS:** a managed relational database for accounts, listings, transactions and seller history. It should use encryption at rest and isolated backups.
- **IaaS:** object storage for listing and proof photos, with private upload URLs and lifecycle rules for removing disputed or deleted content.
- **SaaS:** managed identity for sign-in, verification and account recovery.
- **SaaS:** payment processing for cards, payouts, refunds and fraud checks.
- **SaaS:** shipping and tracking integrations for labels and delivery events.
- **SaaS:** email and SMS notification providers for verification, listing activity, payment, shipping and dispute updates.
- **SaaS:** monitoring and alerting for uptime, error rates, database health and API abuse.
- **SaaS:** a CDN and managed web security service for fast static assets and basic traffic protection.

These cloud choices add availability, lower the amount of infrastructure to maintain and allow the team to scale, but they create vendor lock-in, outage risk, recurring cost and data-residence obligations. Contracts should include export formats and a tested restore process.

**Real content moderation:** every listing and report would go to a risk queue. Automated SaaS tools could detect prohibited, duplicate or highly suspicious images and text, but the final decision would be made by trained SlopeSwap moderators. They would review escalated photos and descriptions, with two-person approval for safety-sensitive removals. Helmets, damaged bindings and recalled equipment would require a stricter refusal or assessor check. Users could appeal and moderators would keep an auditable record of decisions.

## 6. Risks and ethics

- **Account and privacy data:** Passwords, addresses, payment information and purchase history are sensitive. A real system should use managed identity, role-based access, minimal data collection, encrypted transport and storage, short-lived sessions and deletion controls. It should never store payment credentials or expose addresses before both sides are authenticated.
- **Unsafe or misrepresented gear:** Helmets, boots and bindings can be involved in injury. Sellers should provide truthful condition details; assessors should use a written checklist and refuse gear that fails safety criteria. Recall databases and category-specific rules should inform rejections. Liability, inspection limits and user disclaimers should be reviewed with legal counsel.
- **Fraud and abusive accounts:** Chargebacks, stolen gear, fake payouts and repeated nonpayment could harm both sides. Controls include identity checks, verified transactions, transaction holds or escrow, two-factor authentication for sensitive actions, rate limits, audit logs and dispute escalation.
- **Listing authenticity:** Reported listings should be placed on hold while a trained moderator checks image and text consistency, proof of ownership and account history. Repeat offenders should lose listing privileges, while good-faith mistakes receive correction requests and lower-risk interventions.
- **Algorithmic and pricing bias:** Market insights could systematically favor some brands, regions or categories with more data. SlopeSwap should label estimates as non-guaranteed, show the sample size and category, test price ranges for systematic under- or over-valuation across seller groups and allow manual review instead of using one price as an automated decision. Pricing guidance should never be used to reject a seller or determine safety solely because the item is unusual or data is sparse.
- **Moderation bias:** Moderators may apply inconsistent rules across age groups or types of gear. A written policy, training, periodic inter-reviewer agreement checks and a user appeal route would reduce inconsistent decisions. The moderation team should report aggregate false-positive and false-negative trends.
- **Photo and privacy misuse:** Listings could reveal home addresses or personal data in images. The listing system should strip unnecessary image metadata, warn users before upload and let moderators remove images containing private information. Real object storage and moderation rules should replace the prototype’s simple photo preview.
- **Over-collection and data retention:** Logging everything creates privacy and breach risk. SlopeSwap should retain account, transaction and moderation records only for stated purposes and legal periods, then delete or anonymize unnecessary data.
