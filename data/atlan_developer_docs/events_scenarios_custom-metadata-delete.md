# Source URL
https://developer.atlan.com/events/scenarios/custom-metadata-delete/

================================================================================

<!--
canonical: https://developer.atlan.com/events/scenarios/custom-metadata-delete/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/scenarios/custom-metadata-delete.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Custom metadata is removed - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/scenarios/custom-metadata-delete/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/scenarios/custom-metadata-delete.png
meta-twitter:title: Custom metadata is removed - Developer
meta-viewport: width=device-width,initial-scale=1
title: Custom metadata is removed - Developer
-->

[Skip to content](#events-when-custom-metadata-is-removed-from-an-asset) Developer Custom metadata is removed Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Events when custom metadata is removed from an asset[¶](#events-when-custom-metadata-is-removed-from-an-asset "Permanent link")
===============================================================================================================================

When custom metadata is removed from an [asset](../../../getting-started/#what-is-an-asset) in Atlan, the following event is emitted.

`BUSINESS_ATTRIBUTE_UPDATE`[¶](#business_attribute_update "Permanent link")
---------------------------------------------------------------------------

Atlan always emits a [`BUSINESS_ATTRIBUTE_UPDATE`](../../types/business_attribute_update/) event when custom metadata is removed from an asset.

The `detail.message.mutatedDetails` object contains the details of the removed attributes. Any attributes with a value of `null` were removed.

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/scenarios/custom-metadata-delete/) to provide us with more information. 

Back to top

[Previous Custom metadata is added](../custom-metadata-add/) [Next Asset is tagged](../asset-classify/) 

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

