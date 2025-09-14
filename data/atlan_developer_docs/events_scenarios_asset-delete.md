# Source URL
https://developer.atlan.com/events/scenarios/asset-delete/

================================================================================

<!--
canonical: https://developer.atlan.com/events/scenarios/asset-delete/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/scenarios/asset-delete.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset is deleted - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/scenarios/asset-delete/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/scenarios/asset-delete.png
meta-twitter:title: Asset is deleted - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset is deleted - Developer
-->

[Skip to content](#events-when-an-asset-is-deleted) Developer Asset is deleted Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Events when an asset is deleted[¶](#events-when-an-asset-is-deleted "Permanent link")
=====================================================================================

When an [asset](../../../getting-started/#what-is-an-asset) is deleted in Atlan, the following event is emitted.

`ENTITY_DELETE`[¶](#entity_delete "Permanent link")
---------------------------------------------------

Atlan always emits an [`ENTITY_DELETE`](../../types/entity_delete/) event when an asset is deleted. The details in the event are for the asset that was deleted.

No entity update or relationship deletion events

Note that there are no `ENTITY_UPDATE` events for any related assets, nor any events about any relationships being deleted.

In the case of a soft\-delete, the relationship actually still exists (just in a soft\-deleted state).

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/scenarios/asset-delete/) to provide us with more information. 

Back to top

[Previous Asset is updated](../asset-update/) [Next Custom metadata is added](../custom-metadata-add/) 

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

