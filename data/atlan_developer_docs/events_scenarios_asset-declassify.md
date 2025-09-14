# Source URL
https://developer.atlan.com/events/scenarios/asset-declassify/

================================================================================

<!--
canonical: https://developer.atlan.com/events/scenarios/asset-declassify/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/scenarios/asset-declassify.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset is untagged - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/scenarios/asset-declassify/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/scenarios/asset-declassify.png
meta-twitter:title: Asset is untagged - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset is untagged - Developer
-->

[Skip to content](#events-when-an-asset-is-untagged) Developer Asset is untagged Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Events when an asset is untagged[¶](#events-when-an-asset-is-untagged "Permanent link")
=======================================================================================

When an [asset](../../../getting-started/#what-is-an-asset) is untagged in Atlan, the following event is emitted.

`CLASSIFICATION_DELETE`[¶](#classification_delete "Permanent link")
-------------------------------------------------------------------

Atlan always emits a [`CLASSIFICATION_DELETE`](../../types/classification_delete/) event when a tag is removed from an asset.

For both direct tags and propagations

Remember that these events will be emitted for both the asset from which the tag was directly removed as well as all assets to which the tag removal is propagated.

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/scenarios/asset-declassify/) to provide us with more information. 

Back to top

[Previous Asset is tagged](../asset-classify/) [Next Lineage is created](../lineage-create/) 

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

