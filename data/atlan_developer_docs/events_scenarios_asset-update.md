# Source URL
https://developer.atlan.com/events/scenarios/asset-update/

================================================================================

<!--
canonical: https://developer.atlan.com/events/scenarios/asset-update/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/scenarios/asset-update.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset is updated - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/scenarios/asset-update/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/scenarios/asset-update.png
meta-twitter:title: Asset is updated - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset is updated - Developer
-->

[Skip to content](#events-when-an-asset-is-updated) Developer Asset is updated Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Events when an asset is updated[¶](#events-when-an-asset-is-updated "Permanent link")
=====================================================================================

When an [asset](../../../getting-started/#what-is-an-asset) is updated in Atlan, the following events can be emitted.

`ENTITY_UPDATE`[¶](#entity_update "Permanent link")
---------------------------------------------------

Atlan always emits an [`ENTITY_UPDATE`](../../types/entity_update/) event when an asset is updated.[1](#fn:1) The details in the event are for the asset that was updated.

When a relationship is defined as part of an asset update, Atlan will also emit an [`ENTITY_UPDATE`](../../types/entity_update/) event for that related asset. The details in this event cover the related asset.

**More details**

**Parent\-child relationships**

Unlike with asset creation, typically the parent\-child relationship already exists when an asset is updated and thus does not need to be redefined. So it is rare that you would see Atlan emitting `ENTITY_UPDATE` events for parent\-child relationships during an asset update.

**Peer\-to\-peer relationships**

For example, specifying a term to link to a column when updating the column.

* An `ENTITY_UPDATE` event will be emitted for the term that is specified.

Note: this means a single asset creation (single `ENTITY_CREATE` event) could emit any number of `ENTITY_UPDATE` events.

---

1. Note that events are only emitted when an asset is *actually* updated. Since Atlan's [save operation](../../../snippets/advanced-examples/update/) is idempotent, when no changes are actually sent in the payload it behaves as a NOOP — the asset is not actually changed or updated. In these cases, no events are emitted, either.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/scenarios/asset-update/) to provide us with more information. 

Back to top

[Previous Asset is created](../asset-create/) [Next Asset is deleted](../asset-delete/) 

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

