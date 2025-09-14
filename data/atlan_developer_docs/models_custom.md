# Source URL
https://developer.atlan.com/models/custom/

================================================================================

<!--
canonical: https://developer.atlan.com/models/custom/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/custom/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Custom - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/custom/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/custom/index.png
meta-twitter:title: Custom - Developer
meta-viewport: width=device-width,initial-scale=1
title: Custom - Developer
-->

[Skip to content](#custom) Developer Custom Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Custom[¶](#custom "Permanent link")
===================================

Base class for Custom assets.

Complete reference

This is a complete reference for the `Custom` object in Atlan, showing every possible property and relationship that can exist for these objects. For an introduction, you probably want to start with:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

`Custom` inherits its attributes and relationships from these other types:

```
classDiagram
    direction RL
    class Custom {
        <<abstract>>
    }
    link Custom "../custom"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- Custom : extends
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
    class CustomEntity
    link CustomEntity "../entities/customentity"
    Custom <|-- CustomEntity : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Custom` (and all of its subtypes).

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Custom assets inter\-relate with each other:

```
erDiagram
    Connection ||..o{ CustomEntity : ""
    CustomEntity |o..o{ CustomEntity : "customChildEntities"
    CustomEntity }o..o{ CustomEntity : "customRelatedToEntities"
```

---

2025\-01\-142025\-01\-30

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/custom/) to provide us with more information. 

Back to top

[Previous CogniteTimeseries](../entities/cognitetimeseries/) [Next CustomEntity](../entities/customentity/) 

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

