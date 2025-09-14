# Source URL
https://developer.atlan.com/models/cognite/

================================================================================

<!--
canonical: https://developer.atlan.com/models/cognite/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/cognite/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Cognite - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/cognite/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/cognite/index.png
meta-twitter:title: Cognite - Developer
meta-viewport: width=device-width,initial-scale=1
title: Cognite - Developer
-->

[Skip to content](#cognite) Developer Cognite Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Cognite[¶](#cognite "Permanent link")
=====================================

These are the model elements in Atlan related to Cognite.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Cognite assets in Atlan.

```
classDiagram
    direction RL
    class Cognite {
        <<abstract>>
    }
    link Cognite "../cognite"
    class SaaS {
        <<abstract>>
    }
    link SaaS "../saas"
    SaaS <|-- Cognite : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- SaaS : extends
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
    class CogniteEvent
    link CogniteEvent "../entities/cogniteevent"
    Cognite <|-- CogniteEvent : extends
    class CogniteAsset
    link CogniteAsset "../entities/cogniteasset"
    Cognite <|-- CogniteAsset : extends
    class CogniteSequence
    link CogniteSequence "../entities/cognitesequence"
    Cognite <|-- CogniteSequence : extends
    class Cognite3DModel
    link Cognite3DModel "../entities/cognite3dmodel"
    Cognite <|-- Cognite3DModel : extends
    class CogniteTimeSeries
    link CogniteTimeSeries "../entities/cognitetimeseries"
    Cognite <|-- CogniteTimeSeries : extends
    class CogniteFile
    link CogniteFile "../entities/cognitefile"
    Cognite <|-- CogniteFile : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of Cognite inter\-relate with each other:

```
erDiagram
    Connection ||..o{ CogniteAsset : ""
    CogniteAsset ||--o{ Cognite3DModel : cognite3dmodels
    CogniteAsset ||--o{ CogniteEvent : cogniteEvents
    CogniteAsset ||--o{ CogniteFile : cogniteFiles
    CogniteAsset ||--o{ CogniteSequence : cogniteSequences
    CogniteAsset ||--o{ CogniteTimeSeries : cogniteTimeseries
```

---

2024\-06\-182024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/cognite/) to provide us with more information. 

Back to top

[Previous CosmosMongoDBDatabase](../entities/cosmosmongodbdatabase/) [Next Cognite3DModel](../entities/cognite3dmodel/) 

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

