# Source URL
https://developer.atlan.com/patterns/create/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Provides guidance on creating various assets in Atlan via APIs and SDKs.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Provides guidance on creating various assets in Atlan via APIs and SDKs.
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Creating assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/
meta-twitter:card: summary_large_image
meta-twitter:description: Provides guidance on creating various assets in Atlan via APIs and SDKs.
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/index.png
meta-twitter:title: Creating assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Creating assets - Developer
-->

[Skip to content](#creating-assets) Developer Creating assets Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Creating assets[¶](#creating-assets "Permanent link")
=====================================================

API\-first models[¶](#api-first-models "Permanent link")
--------------------------------------------------------

There are several [types](../../concepts/review/#type-definitions) in Atlan that are intended for use primarily through the APIs and SDKs:

* [Relational](relational/) databases, schemas, tables, views, columns (and more)
* Object store assets:
    + [AWS S3](aws/) buckets and objects
    + [Azure Data Lake Storage](adls/) accounts, containers, and objects
    + [Google Cloud Storage](gcs/) buckets and objects
* Business intelligence assets:
    + [Google Data Studio](gds/) sources and reports
    + [Preset](preset/) workspaces, dashboards, charts, and datasets
    + [Superset](superset/) dashboards, charts, and datasets
* [API](api/) specs, paths, objects, queries and fields
* [App](app/) assets
* [AI](ai/) assets (AI models, AI applications)
* [Insights](insight/) assets

Asset creation order[¶](#asset-creation-order "Permanent link")
---------------------------------------------------------------

When creating data assets in Atlan, the order in which you create them is important.

1. At the top level of *all* data assets in Atlan is the [Connection](../../models/entities/connection/). Connections are the basis for access control, so you must create (or use an existing) connection before you can create any other assets.
2. You must then create each subsequent level of the data asset's structure(s) in parent\-first order.

You can bulk\-create assets at the same level

While parent assets must exist before creating child assets, you can create multiple assets at the same level all at the same time.

Example: relational database structure

1. You must first create a [Connection](../../models/entities/connection/) (or decide to reuse an existing one).
2. You can then create any number [Database](../../models/entities/database/)s within that connection, at the same time.
3. You can then create any number of [Schema](../../models/entities/schema/)s within any of those databases, at the same time.
4. You can then create any number of [Table](../../models/entities/table/)s or [View](../../models/entities/view/)s within any of those schemas, at the same time.
5. And you can then finally create any number of [Column](../../models/entities/column/)s within any of those tables or views, at the same time.

---

2023\-04\-122025\-07\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/) to provide us with more information. 

Back to top

[Previous Traverse category hierarchy](../../snippets/common-examples/glossary/hierarchy/) [Next Manage relational assets](relational/) 

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

