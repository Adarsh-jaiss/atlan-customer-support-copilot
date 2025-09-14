# Source URL
https://developer.atlan.com/models/sigma/

================================================================================

<!--
canonical: https://developer.atlan.com/models/sigma/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/sigma/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Sigma - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/sigma/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/sigma/index.png
meta-twitter:title: Sigma - Developer
meta-viewport: width=device-width,initial-scale=1
title: Sigma - Developer
-->

[Skip to content](#sigma) Developer Sigma Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Sigma[¶](#sigma "Permanent link")
=================================

Base class for Sigma assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Sigma assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Sigma {
        <<abstract>>
    }
    link Sigma "../sigma"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Sigma : extends
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
    class SigmaDatasetColumn
    link SigmaDatasetColumn "../entities/sigmadatasetcolumn"
    Sigma <|-- SigmaDatasetColumn : extends
    class SigmaDataset
    link SigmaDataset "../entities/sigmadataset"
    Sigma <|-- SigmaDataset : extends
    class SigmaWorkbook
    link SigmaWorkbook "../entities/sigmaworkbook"
    Sigma <|-- SigmaWorkbook : extends
    class SigmaDataElementField
    link SigmaDataElementField "../entities/sigmadataelementfield"
    Sigma <|-- SigmaDataElementField : extends
    class SigmaPage
    link SigmaPage "../entities/sigmapage"
    Sigma <|-- SigmaPage : extends
    class SigmaDataElement
    link SigmaDataElement "../entities/sigmadataelement"
    Sigma <|-- SigmaDataElement : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Sigma` (and all of its subtypes).

### sigmaDataElementName [¶](#sigmadataelementname "Permanent link")

Simple name of the data element in which this asset exists.

### sigmaDataElementQualifiedName [¶](#sigmadataelementqualifiedname "Permanent link")

Unique name of the data element in which this asset exists.

### sigmaPageName [¶](#sigmapagename "Permanent link")

Simple name of the page on which this asset exists.

### sigmaPageQualifiedName [¶](#sigmapagequalifiedname "Permanent link")

Unique name of the page on which this asset exists.

### sigmaWorkbookName [¶](#sigmaworkbookname "Permanent link")

Simple name of the workbook in which this asset exists.

### sigmaWorkbookQualifiedName [¶](#sigmaworkbookqualifiedname "Permanent link")

Unique name of the workbook in which this asset exists.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Sigma objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ SigmaWorkbook : ""
    Connection ||..o{ SigmaDataset : ""
    SigmaWorkbook |o--o{ SigmaPage : sigmaPages
    SigmaPage |o--o{ SigmaDataElement : sigmaDataElements
    SigmaDataElement |o--o{ SigmaDataElementField : sigmaDataElementFields
    SigmaDataset |o--o{ SigmaDatasetColumn : sigmaDatasetColumns
```

---

2023\-01\-042024\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/sigma/) to provide us with more information. 

Back to top

[Previous SaaS](../entities/saas/) [Next SigmaWorkbook](../entities/sigmaworkbook/) 

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

