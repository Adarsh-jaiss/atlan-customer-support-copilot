# Source URL
https://developer.atlan.com/sdks/dbt/

================================================================================

<!--
canonical: https://developer.atlan.com/sdks/dbt/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: You can use dbt's meta field to enrich metadata from dbt into Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: You can use dbt's meta field to enrich metadata from dbt into Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/sdks/dbt.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: dbt - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/sdks/dbt/
meta-twitter:card: summary_large_image
meta-twitter:description: You can use dbt's meta field to enrich metadata from dbt into Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/sdks/dbt.png
meta-twitter:title: dbt - Developer
meta-viewport: width=device-width,initial-scale=1
title: dbt - Developer
-->

[Skip to content](#dbt) Developer dbt Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

dbt[¶](#dbt "Permanent link")
=============================

Atlan University

See it in action in our [automated enrichment course](https://university.atlan.com/training/e12c0834-0ad9-11ee-8e89-06e5f0a66511/overview) (45 mins).

You can use [dbt's `meta` field](https://docs.getdbt.com/reference/resource-configs/meta)  to enrich metadata resources from dbt into Atlan. Atlan will ingest the information from this field and update the [assets](../../getting-started/#what-is-an-asset) in Atlan accordingly.

With this, you have a powerful way to keep the dbt assets documented directly as part of your dbt work.

The following is an example:

| dbt example | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 ``` | ``` version: 2 models:   - name: customers     description: >- # (1)       This table has basic information about a customer, as well as some derived       facts based on a customer's orders.     meta: # (2)       atlan: # (3)         attributes: # (4)           certificateStatus: DRAFT           ownerUsers: ["bryan", "ashwin"]         classifications: # (5)           - typeName: "ipubxAPPb0zRcNU1Gkjs9b"             propagate: true             removePropagationsOnEntityDelete: true             restrictPropagationThroughLineage: true             restrictPropagationThroughHierarchy: false      columns:       - name: customer_id         description: This is a unique identifier for a customer         tests:           - unique           - not_null       - name: total_order_amount         description: Total value (AUD) of a customer's orders.       - name: customer_lifetime_value         meta: # (6)           atlan:             attributes:               description: Customer lifetime value.               certificateStatus: DRAFT               ownerUsers: ["ravi"]             classifications:               - typeName: "ipubxAPPb0zRcNU1Gkjs9b"                 propagate: true                 removePropagationsOnEntityDelete: true  ``` |

1. The `description` at the top level of an asset defined in dbt will already be mapped to the description field for that asset in Atlan.
2. More detailed metadata, however, needs to be specified within the `meta` field.
3. ... and within the `meta` field, further within the `atlan` sub\-field.
4. For attributes, such as certificates, announcements, or owners these need to be specified within the `attributes` sub\-field.
5. Classifications need to be specified within a `classifications` sub\-field.
6. Note that the `meta` field and its sub\-structure (including all the detailed attributes) can also be applied to columns within a model.

This rich metadata will then be loaded to the corresponding attributes on the asset in Atlan.

For more details on specific examples, see the **dbt** tabs in the [Common asset actions](../../snippets/common-examples/) snippets.

---

2023\-12\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/sdks/dbt/) to provide us with more information. 

Back to top

[Previous CLI](../cli/) [Next Java](../java/) 

Copyright © 2024 Atlan — [🍪 settings](#__consent) 
Built with 💙 for the 🤖\-making humans of data 

#### Cookie consent

We use cookies to: - [x] Anonymously measure page views, and
- [x] Allow you to give us one\-click feedback on any page.

 We do **not** collect or store: - [ ] Any personally identifiable information.
- [ ] Any information for any (re)marketing purposes.

 With your consent, you're helping us to make our documentation better 💙

- [x] Google Analytics

Accept

Reject

Manage settings

