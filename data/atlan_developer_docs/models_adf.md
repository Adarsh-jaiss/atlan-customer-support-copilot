# Source URL
https://developer.atlan.com/models/adf/

================================================================================

<!--
canonical: https://developer.atlan.com/models/adf/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/adf/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Azure Data Factory - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/adf/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/adf/index.png
meta-twitter:title: Azure Data Factory - Developer
meta-viewport: width=device-width,initial-scale=1
title: Azure Data Factory - Developer
-->

[Skip to content](#azure-data-factory-model) Developer Azure Data Factory Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Azure Data Factory model[¶](#azure-data-factory-model "Permanent link")
=======================================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Azure Data Factory assets in Atlan.

These model elements all deal with Azure Data Factory constructs.

```
classDiagram
    direction RL
    class ADF {
        <<abstract>>
    }
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- ADF : extends
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
    class AdfActivity
    link AdfActivity "../entities/adfactivity"
    ADF <|-- AdfActivity : extends
    class AdfDataflow
    link AdfDataflow "../entities/adfdataflow"
    ADF <|-- AdfDataflow : extends
    class AdfDataset
    link AdfDataset "../entities/adfdataset"
    ADF <|-- AdfDataset : extends
    class AdfLinkedservice
    link AdfLinkedservice "../entities/adflinkedservice"
    ADF <|-- AdfLinkedservice : extends
    class AdfPipeline
    link AdfPipeline "../entities/adfpipeline"
    ADF <|-- AdfPipeline : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are unique to instances of `ADF` (and all of its subtypes).

### adfAssetFolderPath [¶](#adfassetfolderpath "Permanent link")

Defines the folder path in which this ADF asset exists.

### adfFactoryName [¶](#adffactoryname "Permanent link")

Defines the name of the factory in which this asset exists.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Azure Data Factory objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ AdfPipeline : ""
    AdfPipeline ||--o{ AdfActivity : "adfActivities"
    AdfPipeline }o--o{ AdfDataflow : "adfDataflows"
    AdfPipeline }o--o{ AdfDataset : "adfDatasets"
    AdfPipeline }o--o{ AdfLinkedservice : "adfLinkedservices"
    AdfDataflow ||--o{ AdfActivity : "adfActivities"
    AdfDataflow }o--o{ AdfDataset : "adfDatasets"
    AdfDataflow }o--o{ AdfLinkedservice : "adfLinkedservices"
    AdfLinkedservice }o--o{ AdfActivity : "adfActivities"
    AdfLinkedservice ||--o{ AdfDataset : "adfDatasets"
    AdfActivity }o--o{ AdfDataset : "adfDatasets"
```

---

2024\-11\-292024\-11\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/adf/) to provide us with more information. 

Back to top

[Previous Microsoft Azure](../azure/) [Next AdfActivity](../entities/adfactivity/) 

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

