# Source URL
https://developer.atlan.com/models/anomalo/

================================================================================

<!--
canonical: https://developer.atlan.com/models/anomalo/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/anomalo/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Anomalo - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/anomalo/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/anomalo/index.png
meta-twitter:title: Anomalo - Developer
meta-viewport: width=device-width,initial-scale=1
title: Anomalo - Developer
-->

[Skip to content](#anomalo-model) Developer Anomalo Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Anomalo model[¶](#anomalo-model "Permanent link")
=================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Anomalo assets.

These model elements all deal with Anomalo constructs.

```
classDiagram
    direction RL
    class Anomalo {
        <<abstract>>
    }
    class DataQuality {
        <<abstract>>
    }
    link DataQuality "../entities/dataquality"
    DataQuality <|-- Anomalo : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- DataQuality : extends
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    Asset <|-- Catalog : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    Referenceable <|-- Asset : extends
    class AnomaloCheck
    link AnomaloCheck "../entities/anomalocheck"
    Anomalo <|-- AnomaloCheck : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Anomalo objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ Asset : ""
    Asset ||--o{ AnomaloCheck : anomaloCheckAsset
```

---

2023\-01\-042024\-11\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/anomalo/) to provide us with more information. 

Back to top

[Previous AnaplanView](../entities/anaplanview/) [Next AnomaloCheck](../entities/anomalocheck/) 

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

