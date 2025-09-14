# Source URL
https://developer.atlan.com/snippets/custom-metadata/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/custom-metadata/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn about the composition of custom metadata structures in Atlan and how to create them programmatically.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn about the composition of custom metadata structures in Atlan and how to create them programmatically.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Custom metadata structures overview - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/custom-metadata/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn about the composition of custom metadata structures in Atlan and how to create them programmatically.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/index.png
meta-twitter:title: Custom metadata structures overview - Developer
meta-viewport: width=device-width,initial-scale=1
title: Custom metadata structures overview - Developer
-->

[Skip to content](#custom-metadata-structures-overview) Developer Custom metadata structures overview Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Custom metadata structures overview[¶](#custom-metadata-structures-overview "Permanent link")
=============================================================================================

Custom metadata in Atlan is structurally composed of two levels:

1. The custom metadata definition (sometimes referred to as *set*) itself, defined as a `CustomMetadataDef`
2. The *attributes* (or properties) within that custom metadata set, each defined as an `AttributeDef`

```
erDiagram
    CustomMetadataDef ||--o{ AttributeDef : contains
```
Through Atlan's APIs, you can [create your own custom metadata](create/) sets and attributes programmatically.

Once the structures exist, you can then also [change custom metadata values](../common-examples/custom-metadata/) on assets themselves.

---

2022\-09\-092024\-03\-14

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/custom-metadata/) to provide us with more information. 

Back to top

[Previous Governance structures](../../governance/) [Next Create custom metadata](create/) 

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

