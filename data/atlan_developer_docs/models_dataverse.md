# Source URL
https://developer.atlan.com/models/dataverse/

================================================================================

<!--
canonical: https://developer.atlan.com/models/dataverse/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/dataverse/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Dataverse - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/dataverse/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/dataverse/index.png
meta-twitter:title: Dataverse - Developer
meta-viewport: width=device-width,initial-scale=1
title: Dataverse - Developer
-->

[Skip to content](#dataverse) Developer Dataverse Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Dataverse[¶](#dataverse "Permanent link")
=========================================

Base class for Dataverse assets.

Complete reference

This is a complete reference for the `Dataverse` object in Atlan, showing every possible property and relationship that can exist for these objects. For an introduction, you probably want to start with:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

`Dataverse` inherits its attributes and relationships from these other types:

```
classDiagram
    direction RL
    class Dataverse {
        <<abstract>>
    }
    link Dataverse "../dataverse"
    class SaaS {
        <<abstract>>
    }
    link SaaS "../entities/saas"
    SaaS <|-- Dataverse : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- SaaS : extends
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
    class DataverseEntity
    link DataverseEntity "../entities/dataverseentity"
    Dataverse <|-- DataverseEntity : extends
    class DataverseAttribute
    link DataverseAttribute "../entities/dataverseattribute"
    Dataverse <|-- DataverseAttribute : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Dataverse` (and all of its subtypes).

### dataverseIsAuditEnabled [¶](#dataverseisauditenabled "Permanent link")

Indicator if DataverseEntity has auditing enabled.

### dataverseIsCustom [¶](#dataverseiscustom "Permanent link")

Indicator if DataverseEntity is custom built.

### dataverseIsCustomizable [¶](#dataverseiscustomizable "Permanent link")

Indicator if DataverseEntity is customizable.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Superset objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ DataverseEntity : ""
    DataverseEntity ||--o{ DataverseAttribute : dataverseattribute
```

---

2025\-01\-142025\-01\-14

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/dataverse/) to provide us with more information. 

Back to top

[Previous CustomEntity](../entities/customentity/) [Next DataverseEntity](../entities/dataverseentity/) 

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

