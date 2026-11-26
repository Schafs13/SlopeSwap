# Business case

This case explains why SlopeSwap could become a business, using course concepts and the implemented prototype.

## 1. The idea

- **Customer:** Parents repeatedly buy and sell expensive children’s ski gear as children outgrow it.
- **Problem:** General classifieds provide poor search, condition information, fair-pricing guidance and safe shipping.
- **Solution:** A focused used ski and snowboard marketplace with searching, saved listings, gear submission, price guidance and seller profiles. Production features would add assessment, payments and shipping.
- **Revenue:** **$12/month, $30/season or $96/year** memberships. Assisted sales could also charge fees or commission if clearly disclosed.
- **Cold-start offer:** **“After 3 sales: 1 month free membership.”** The reward follows three completed sales; the first sales are not fee-free.

## 2. Where IT creates value

- **Marketing and sales:** Search, filters, saved listings, purchase requests and memberships attract and convert users.
- **Operations:** Shared listings, market insights, seller dashboards and transaction records support **scale** and **consistency**. The prototype currently uses browser-local demo data.
- **Logistics:** Shipping labels, tracking and delivery confirmation create a reliable **distribution channel**.
- **Service:** Ratings, condition feedback and dispute handling reduce uncertainty and unsafe or inaccurate listings.

These features create **IT-enabled differentiation** and improve **accessibility** by matching geographically distributed supply and demand.

## 3. Network effects

SlopeSwap is a **two-sided market** with **indirect network effects**: more sellers provide choice for buyers, while more buyers help listings sell. Ratings and transaction history become more valuable as the network grows.

The Shop figures are demonstrations. To solve the **empty-network problem**, launch in one ski community. Recruit local shops and parents’ groups with the founding-seller offer and local drop-off or assessment events. Open the buyer side only after enough relevant inventory exists in key child-size segments.

## 4. Can it be copied? (the moat)

The source code and prototype data are easy to copy. A durable advantage would come from:

- transaction and pricing history that becomes more accurate over time;
- verified, non-resettable ratings and seller history;
- trained assessors and consistent condition and safety processes;
- carrier, ski-shop and safety partnerships.

Together, these resources are valuable, potentially rare and take time to copy. Real transactions could create **switching costs** through ratings, saved listings and seller history.

**Brand trust** would grow through transparent condition grades, verified sales, fair fees and reliable dispute resolution, not a familiar logo alone.

## 5. Cloud and operations

A production deployment would use:

- **PaaS** for the website, API and managed database;
- **IaaS** object storage for listing photos;
- **SaaS** identity, payments, shipping, notifications and monitoring;
- a CDN and web security service.

These services improve availability and reduce maintenance but add vendor lock-in, outage risk and recurring cost. Contracts should support data export and tested restoration.

**Moderation:** Automated tools can queue suspicious listings, while trained moderators decide. Safety-sensitive removals, including helmets, damaged bindings or recalls, require strict checks and two-person approval. Users should receive appeals and auditable decisions.

## 6. Risks and ethics

- **Privacy:** Minimize collection, use encryption and restricted access, and retain only necessary records.
- **Unsafe gear:** Assessors should follow written safety checks, consult recall databases and reject unsafe items. Liability and inspection limits require legal review.
- **Fraud:** Use identity checks, escrow or transaction holds, two-factor authentication, audit logs and dispute escalation.
- **Authenticity:** Hold reported listings for moderator review of images, ownership and account history.
- **Pricing bias:** Label estimates as non-guaranteed, show their basis and test for systematic errors. Allow manual review.
- **Moderation bias:** Use written policies, training, quality checks and appeals.
- **Photos and retention:** Remove image metadata, warn users about private information and delete or anonymize data after its stated purpose ends.
