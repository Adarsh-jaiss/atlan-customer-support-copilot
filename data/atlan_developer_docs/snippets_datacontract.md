# Source URL
https://developer.atlan.com/snippets/datacontract/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/datacontract/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: An overview of data contracts and how they can be managed.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: An overview of data contracts and how they can be managed.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/datacontract/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Data contracts overview - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/datacontract/
meta-twitter:card: summary_large_image
meta-twitter:description: An overview of data contracts and how they can be managed.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/datacontract/index.png
meta-twitter:title: Data contracts overview - Developer
meta-viewport: width=device-width,initial-scale=1
title: Data contracts overview - Developer
-->

[Skip to content](#data-contracts-overview) Developer Data contracts overview Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Data contracts overview[¶](#data-contracts-overview "Permanent link")
=====================================================================

```
erDiagram
    DataContract |o--o{ DataContract : versions
    DataContract |o--|| Asset : latest
    DataContract |o--|| Asset : latestCertified
```
[Data contracts](https://ask.atlan.com/hc/en-us/articles/9281528742799)  are agreements between data producers and consumers, that specify requirements for generating and using high\-quality, reliable data.

* You can [manage data contracts](manage/) using Atlan's [command\-line interface (CLI)](../../sdks/cli/).
* You may also want to refer to the [data contracts specification](../../reference/specs/datacontracts/), to understand how data contracts are defined.

---

2024\-04\-222024\-07\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/datacontract/) to provide us with more information. 

Back to top

[Previous Manage data products](../datamesh/dataproducts/) [Next Manage data contracts (via CLI)](manage/) 

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

