# Source URL
https://developer.atlan.com/models/microstrategy/

================================================================================

<!--
canonical: https://developer.atlan.com/models/microstrategy/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/microstrategy/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: MicroStrategy - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/microstrategy/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/microstrategy/index.png
meta-twitter:title: MicroStrategy - Developer
meta-viewport: width=device-width,initial-scale=1
title: MicroStrategy - Developer
-->

[Skip to content](#microstrategy) Developer MicroStrategy Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

MicroStrategy[¶](#microstrategy "Permanent link")
=================================================

Base class for MicroStrategy assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing MicroStrategy assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class MicroStrategy {
        <<abstract>>
    }
    link MicroStrategy "../microstrategy"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- MicroStrategy : extends
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
    class MicroStrategyReport
    link MicroStrategyReport "../entities/microstrategyreport"
    MicroStrategy <|-- MicroStrategyReport : extends
    class MicroStrategyProject
    link MicroStrategyProject "../entities/microstrategyproject"
    MicroStrategy <|-- MicroStrategyProject : extends
    class MicroStrategyMetric
    link MicroStrategyMetric "../entities/microstrategymetric"
    MicroStrategy <|-- MicroStrategyMetric : extends
    class MicroStrategyCube
    link MicroStrategyCube "../entities/microstrategycube"
    MicroStrategy <|-- MicroStrategyCube : extends
    class MicroStrategyDossier
    link MicroStrategyDossier "../entities/microstrategydossier"
    MicroStrategy <|-- MicroStrategyDossier : extends
    class MicroStrategyFact
    link MicroStrategyFact "../entities/microstrategyfact"
    MicroStrategy <|-- MicroStrategyFact : extends
    class MicroStrategyDocument
    link MicroStrategyDocument "../entities/microstrategydocument"
    MicroStrategy <|-- MicroStrategyDocument : extends
    class MicroStrategyAttribute
    link MicroStrategyAttribute "../entities/microstrategyattribute"
    MicroStrategy <|-- MicroStrategyAttribute : extends
    class MicroStrategyVisualization
    link MicroStrategyVisualization "../entities/microstrategyvisualization"
    MicroStrategy <|-- MicroStrategyVisualization : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `MicroStrategy` (and all of its subtypes).

### microStrategyCertifiedAt [¶](#microstrategycertifiedat "Permanent link")

Time (epoch) this asset was certified in MicroStrategy, in milliseconds.

### microStrategyCertifiedBy [¶](#microstrategycertifiedby "Permanent link")

User who certified this asset, in MicroStrategy.

### microStrategyCubeNames [¶](#microstrategycubenames "Permanent link")

Simple names of the cubes related to this asset.

### microStrategyCubeQualifiedNames [¶](#microstrategycubequalifiednames "Permanent link")

Unique names of the cubes related to this asset.

### microStrategyIsCertified [¶](#microstrategyiscertified "Permanent link")

Whether the asset is certified in MicroStrategy (true) or not (false).

### microStrategyLocation [¶](#microstrategylocation "Permanent link")

Location of this asset in MicroStrategy.

### microStrategyProjectName [¶](#microstrategyprojectname "Permanent link")

Simple name of the project in which this asset exists.

### microStrategyProjectQualifiedName [¶](#microstrategyprojectqualifiedname "Permanent link")

Unique name of the project in which this asset exists.

### microStrategyReportNames [¶](#microstrategyreportnames "Permanent link")

Simple names of the reports related to this asset.

### microStrategyReportQualifiedNames [¶](#microstrategyreportqualifiednames "Permanent link")

Unique names of the reports related to this asset.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various MicroStrategy objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ MicroStrategyProject : ""
    MicroStrategyProject |o--o{ MicroStrategyAttribute : microStrategyAttributes
    MicroStrategyProject |o--o{ MicroStrategyCube : microStrategyCubes
    MicroStrategyProject |o--o{ MicroStrategyDocument : microStrategyDocuments
    MicroStrategyProject |o--o{ MicroStrategyDossier : microStrategyDossiers
    MicroStrategyProject |o--o{ MicroStrategyFact : microStrategyFacts
    MicroStrategyProject |o--o{ MicroStrategyMetric : microStrategyMetrics
    MicroStrategyProject |o--o{ MicroStrategyReport : microStrategyReports
    MicroStrategyProject |o--o{ MicroStrategyVisualization : microStrategyVisualizations
    MicroStrategyReport }o--o{ MicroStrategyMetric : microStrategyMetrics
    MicroStrategyReport }o--o{ MicroStrategyAttribute : microStrategyAttributes
    MicroStrategyCube |o--o{ MicroStrategyAttribute : microStrategyAttributes
    MicroStrategyCube |o--o{ MicroStrategyMetric : microStrategyMetrics
    MicroStrategyDossier |o--o{ MicroStrategyVisualization : microStrategyVisualizations
    MicroStrategyFact |o--o{ MicroStrategyMetric : microStrategyMetrics
    MicroStrategyMetric }o--o{ MicroStrategyAttribute : microStrategyAttributes
    MicroStrategyMetric }o--o{ MicroStrategyFact : microStrategyFacts
    MicroStrategyMetric }o--o{ MicroStrategyMetric : microStrategyMetricChildren
    MicroStrategyMetric }o--o{ MicroStrategyMetric : microStrategyMetricParents
```

---

2023\-01\-042023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/microstrategy/) to provide us with more information. 

Back to top

[Previous MetabaseQuestion](../entities/metabasequestion/) [Next MicroStrategyAttribute](../entities/microstrategyattribute/) 

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

