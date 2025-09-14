# Source URL
https://developer.atlan.com/models/sisense/

================================================================================

<!--
canonical: https://developer.atlan.com/models/sisense/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/sisense/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Sisense - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/sisense/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/sisense/index.png
meta-twitter:title: Sisense - Developer
meta-viewport: width=device-width,initial-scale=1
title: Sisense - Developer
-->

[Skip to content](#sisense) Developer Sisense Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Sisense[¶](#sisense "Permanent link")
=====================================

Base class for Sisense assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Sisense assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Sisense {
        <<abstract>>
    }
    link Sisense "../sisense"
    class BI {
        <<abstract>>
    }
    link BI "../bi"
    BI <|-- Sisense : extends
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
    class SisenseFolder
    link SisenseFolder "../entities/sisensefolder"
    Sisense <|-- SisenseFolder : extends
    class SisenseWidget
    link SisenseWidget "../entities/sisensewidget"
    Sisense <|-- SisenseWidget : extends
    class SisenseDatamodel
    link SisenseDatamodel "../entities/sisensedatamodel"
    Sisense <|-- SisenseDatamodel : extends
    class SisenseDatamodelTable
    link SisenseDatamodelTable "../entities/sisensedatamodeltable"
    Sisense <|-- SisenseDatamodelTable : extends
    class SisenseDashboard
    link SisenseDashboard "../entities/sisensedashboard"
    Sisense <|-- SisenseDashboard : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Sisense objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ SisenseFolder : ""
    SisenseFolder |o--o{ SisenseFolder : "sisenseChildFolders"
    SisenseFolder |o--o{ SisenseDashboard : "sisenseDashboards"
    SisenseFolder |o--o{ SisenseWidget : "sisenseWidgets"
    SisenseDashboard |o--o{ SisenseWidget : "sisenseWidgets"
    SisenseDashboard }o--o{ SisenseDatamodel : "sisenseDatamodels"
    SisenseDatamodel |o--o{ SisenseDatamodelTable : "sisenseDatamodelTables"
    SisenseWidget }o--o{ SisenseDatamodelTable : "sisenseDatamodelTables"
```

---

2023\-11\-062024\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/sisense/) to provide us with more information. 

Back to top

[Previous SigmaDatasetColumn](../entities/sigmadatasetcolumn/) [Next SisenseDashboard](../entities/sisensedashboard/) 

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

