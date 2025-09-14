# Source URL
https://developer.atlan.com/models/datamesh/

================================================================================

<!--
canonical: https://developer.atlan.com/models/datamesh/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/datamesh/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: DataMesh - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/datamesh/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/datamesh/index.png
meta-twitter:title: DataMesh - Developer
meta-viewport: width=device-width,initial-scale=1
title: DataMesh - Developer
-->

[Skip to content](#datamesh) Developer DataMesh Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

DataMesh[¶](#datamesh "Permanent link")
=======================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand developing with Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

Base class for data mesh assets.

```
classDiagram
    direction RL
    class DataMesh {
        <<abstract>>
    }
    link DataMesh "../datamesh"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- DataMesh : extends
    class Asset {
        <<abstract>>
    }
    link Asset "../asset"
    Asset <|-- Catalog : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../referenceable"
    Referenceable <|-- Asset : extends
    class DataContract
    link DataContract "../entities/datacontract"
    DataMesh <|-- DataContract : extends
    class DataDomain
    link DataDomain "../entities/datadomain"
    DataMesh <|-- DataDomain : extends
    class DataProduct
    link DataProduct "../entities/dataproduct"
    DataMesh <|-- DataProduct : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `DataMesh` (and all of its subtypes).

### parentDomainQualifiedName [¶](#parentdomainqualifiedname "Permanent link")

Unique name of the parent domain in which this asset exists.

### superDomainQualifiedName [¶](#superdomainqualifiedname "Permanent link")

Unique name of the top\-level domain in which this asset exists.

---

2023\-11\-302023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/datamesh/) to provide us with more information. 

Back to top

[Previous AtlasGlossaryTerm](../entities/atlasglossaryterm/) [Next DataDomain](../entities/datadomain/) 

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

