# Source URL
https://developer.atlan.com/events/scenarios/lineage-create/

================================================================================

<!--
canonical: https://developer.atlan.com/events/scenarios/lineage-create/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/scenarios/lineage-create.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Lineage is created - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/scenarios/lineage-create/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/scenarios/lineage-create.png
meta-twitter:title: Lineage is created - Developer
meta-viewport: width=device-width,initial-scale=1
title: Lineage is created - Developer
-->

[Skip to content](#events-when-lineage-is-created) Developer Lineage is created Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Events when lineage is created[¶](#events-when-lineage-is-created "Permanent link")
===================================================================================

When lineage between [assets](../../../getting-started/#what-is-an-asset) is created in Atlan, the following events can be emitted.

`ENTITY_CREATE`[¶](#entity_create "Permanent link")
---------------------------------------------------

Atlan always emits an [`ENTITY_CREATE`](../../types/entity_create/) event for the lineage process. The details in the event are for the process that represents the lineage flow.

`ENTITY_UPDATE`[¶](#entity_update "Permanent link")
---------------------------------------------------

Atlan will also emit an [`ENTITY_UPDATE`](../../types/entity_update/) event for each input and output involved in the lineage process.

**More details**

For example:

* If the lineage is:
    + from table A and table B as inputs
    + to table C and table D as outputs
* Four (4\) `ENTITY_UPDATE` events will be emitted — one for each table.

Note: this means a single lineage process creation (single `ENTITY_CREATE` event) could emit any number of `ENTITY_UPDATE` events.

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/scenarios/lineage-create/) to provide us with more information. 

Back to top

[Previous Asset is untagged](../asset-declassify/) [Next ENTITY\_CREATE](../../types/entity_create/) 

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

