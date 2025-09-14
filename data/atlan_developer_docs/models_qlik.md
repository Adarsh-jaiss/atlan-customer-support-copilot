# Source URL
https://developer.atlan.com/models/qlik/

================================================================================

<!--
canonical: https://developer.atlan.com/models/qlik/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/qlik/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Qlik - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/qlik/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/qlik/index.png
meta-twitter:title: Qlik - Developer
meta-viewport: width=device-width,initial-scale=1
title: Qlik - Developer
-->

[Skip to content](#qlik) Developer Qlik Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Qlik[¶](#qlik "Permanent link")
===============================

Base class for Qlik assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Qlik assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Qlik {
        <<abstract>>
    }
    link Qlik "../qlik"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Qlik : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- BI : extends
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
    class QlikSpace
    link QlikSpace "../entities/qlikspace"
    Qlik <|-- QlikSpace : extends
    class QlikStream
    link QlikStream "../entities/qlikstream"
    QlikSpace <|-- QlikStream : extends
    class QlikApp
    link QlikApp "../entities/qlikapp"
    Qlik <|-- QlikApp : extends
    class QlikChart
    link QlikChart "../entities/qlikchart"
    Qlik <|-- QlikChart : extends
    class QlikDataset
    link QlikDataset "../entities/qlikdataset"
    Qlik <|-- QlikDataset : extends
    class QlikSheet
    link QlikSheet "../entities/qliksheet"
    Qlik <|-- QlikSheet : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Qlik` (and all of its subtypes).

### qlikAppId [¶](#qlikappid "Permanent link")

Identifier of the app in which this asset belongs, from Qlik.

### qlikAppQualifiedName [¶](#qlikappqualifiedname "Permanent link")

Unique name of the app where this asset belongs.

### qlikId [¶](#qlikid "Permanent link")

Identifier of this asset, from Qlik.

### qlikIsPublished [¶](#qlikispublished "Permanent link")

Whether this asset is published in Qlik (true) or not (false).

### qlikOwnerId [¶](#qlikownerid "Permanent link")

Identifier of the owner of this asset, in Qlik.

### qlikQRI [¶](#qlikqri "Permanent link")

Unique QRI of this asset, from Qlik.

### qlikSpaceId [¶](#qlikspaceid "Permanent link")

Identifier of the space in which this asset exists, from Qlik.

### qlikSpaceQualifiedName [¶](#qlikspacequalifiedname "Permanent link")

Unique name of the space in which this asset exists.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Qlik objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ QlikSpace : ""
    Connection ||..o{ QlikStream : ""
    QlikSpace |o--o{ QlikApp : qlikApps
    QlikSpace |o--o{ QlikDataset : qlikDatasets
    QlikStream |o--o{ QlikApp : qlikApps
    QlikStream |o--o{ QlikDataset : qlikDatasets
    QlikApp |o--o{ QlikSheet : qlikSheets
    QlikSheet |o--o{ QlikChart : qlikCharts
```

---

2023\-01\-042024\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/qlik/) to provide us with more information. 

Back to top

[Previous PresetWorkspace](../entities/presetworkspace/) [Next QlikApp](../entities/qlikapp/) 

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

