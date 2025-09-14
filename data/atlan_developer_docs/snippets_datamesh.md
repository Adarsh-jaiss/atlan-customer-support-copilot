# Source URL
https://developer.atlan.com/snippets/datamesh/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/datamesh/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: An overview of data mesh architecture, including data domains and data products, and their relationships.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: An overview of data mesh architecture, including data domains and data products, and their relationships.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/datamesh/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Data mesh overview - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/datamesh/
meta-twitter:card: summary_large_image
meta-twitter:description: An overview of data mesh architecture, including data domains and data products, and their relationships.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/datamesh/index.png
meta-twitter:title: Data mesh overview - Developer
meta-viewport: width=device-width,initial-scale=1
title: Data mesh overview - Developer
-->

[Skip to content](#data-mesh-overview) Developer Data mesh overview Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Data mesh overview[¶](#data-mesh-overview "Permanent link")
===========================================================

```
erDiagram
    DataDomain ||--o{ DataDomain : SubDomains
    DataDomain ||--o{ DataProduct : contains
    DataProduct }o--o{ Asset : contains
    DataProduct }o--o{ Asset : OutputPort
```
* [Data domains](datadomains/) are a way to group data products together, for example by business area. Data domains themselves can be organized in a hierarchical structure of subdomains.
* [Data products](dataproducts/) are a way to group assets together. They both define the assets included in the product, as well as the assets that can be used to consume the product (as output ports).

---

2023\-11\-282024\-04\-25

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/datamesh/) to provide us with more information. 

Back to top

[Previous Connector types and icons](../../models/connectortypes/) [Next Manage data domains](datadomains/) 

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

