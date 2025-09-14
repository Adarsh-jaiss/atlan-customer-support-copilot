# Source URL
https://developer.atlan.com/events/scenarios/asset-create/

================================================================================

<!--
canonical: https://developer.atlan.com/events/scenarios/asset-create/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/scenarios/asset-create.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset is created - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/scenarios/asset-create/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/scenarios/asset-create.png
meta-twitter:title: Asset is created - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset is created - Developer
-->

[Skip to content](#events-when-an-asset-is-created) Developer Asset is created Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Events when an asset is created[¶](#events-when-an-asset-is-created "Permanent link")
=====================================================================================

When an [asset](../../../getting-started/#what-is-an-asset) is created in Atlan, the following events can be emitted.

`ENTITY_CREATE`[¶](#entity_create "Permanent link")
---------------------------------------------------

Atlan always emits an [`ENTITY_CREATE`](../../types/entity_create/) event when an asset is created. The details in the event are for the asset that was created.

`ENTITY_UPDATE`[¶](#entity_update "Permanent link")
---------------------------------------------------

When a relationship is defined as part of asset creation, Atlan will also emit an [`ENTITY_UPDATE`](../../types/entity_update/) event. The details in this event cover the related asset.

**More details**

**Parent\-child relationships**

For example, a column in Atlan must exist within a table.

* When a column is created, the table must be specified.
* An `ENTITY_UPDATE` event will be emitted for the table in which that column was created.

Details of the relationship are not included in `detail.message.mutatedDetails`

In the case of a parent\-child relationship, the details of the relationship are not included in the `ENTITY_UPDATE` event's payload.

**Peer\-to\-peer relationships**

For example, specifying a term to link to a column when creating the column.

* An `ENTITY_UPDATE` event will be emitted for the term that is specified.

Note: this means a single asset creation (single `ENTITY_CREATE` event) could emit any number of `ENTITY_UPDATE` events.

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/scenarios/asset-create/) to provide us with more information. 

Back to top

[Previous Events overview](../../) [Next Asset is updated](../asset-update/) 

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

