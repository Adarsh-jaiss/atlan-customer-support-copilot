# Source URL
https://developer.atlan.com/models/domo/

================================================================================

<!--
canonical: https://developer.atlan.com/models/domo/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/domo/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Domo - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/domo/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/domo/index.png
meta-twitter:title: Domo - Developer
meta-viewport: width=device-width,initial-scale=1
title: Domo - Developer
-->

[Skip to content](#domo) Developer Domo Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Domo[¶](#domo "Permanent link")
===============================

These are the model elements in Atlan related to Domo.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Domo assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Domo {
        <<abstract>>
    }
    link Domo "../domo"
    class BI {
        <<abstract>>
    }
    link BI "../bi"
    BI <|-- Domo : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- BI : extends
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
    class DomoDataset
    link DomoDataset "../entities/domodataset"
    Domo <|-- DomoDataset : extends
    class DomoCard
    link DomoCard "../entities/domocard"
    Domo <|-- DomoCard : extends
    class DomoDatasetColumn
    link DomoDatasetColumn "../entities/domodatasetcolumn"
    Domo <|-- DomoDatasetColumn : extends
    class DomoDashboard
    link DomoDashboard "../entities/domodashboard"
    Domo <|-- DomoDashboard : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Domo` (and all of its subtypes).

### domoId [¶](#domoid "Permanent link")

Id of the Domo dataset.

### domoOwnerId [¶](#domoownerid "Permanent link")

Id of the owner of the Domo dataset.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of Domo inter\-relate with each other:

```
erDiagram
    DomoDataset ||--o{ DomoCard : domoCards
    DomoDataset ||--o{ DomoDatasetColumn : domoDatasetColumns
    DomoCard }o--o{ DomoDashboard : domoDashboards
    DomoDashboard |o--o{ DomoDashboard : domoDashboardChildren
```

---

2024\-06\-182024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/domo/) to provide us with more information. 

Back to top

[Previous DbtTest](../entities/dbttest/) [Next DomoCard](../entities/domocard/) 

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

