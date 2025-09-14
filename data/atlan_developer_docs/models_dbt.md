# Source URL
https://developer.atlan.com/models/dbt/

================================================================================

<!--
canonical: https://developer.atlan.com/models/dbt/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/dbt/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Dbt - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/dbt/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/dbt/index.png
meta-twitter:title: Dbt - Developer
meta-viewport: width=device-width,initial-scale=1
title: Dbt - Developer
-->

[Skip to content](#dbt-model) Developer Dbt Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

dbt model[¶](#dbt-model "Permanent link")
=========================================

Base class for dbt assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand integrating dbt metadata with Atlan. For that, we would suggest starting with the [common asset actions snippets](../../snippets/common-examples/).

```
classDiagram
    direction RL
    class Dbt {
        <<abstract>>
    }
    link Dbt "../dbt"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- Dbt : extends
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
    class Metric {
        <<abstract>>
    }
    link Metric "../entities/metric"
    DataQuality <|-- Metric : extends
    class DbtMetric
    link DbtMetric "../entities/dbtmetric"
    Metric <|-- DbtMetric : extends
    class DataQuality {
        <<abstract>>
    }
    link DataQuality "../entities/dataquality"
    Catalog <|-- DataQuality : extends
    class DbtModelColumn
    link DbtModelColumn "../entities/dbtmodelcolumn"
    Dbt <|-- DbtModelColumn : extends
    class DbtModel
    link DbtModel "../entities/dbtmodel"
    Dbt <|-- DbtModel : extends
    class DbtColumnProcess
    link DbtColumnProcess "../entities/dbtcolumnprocess"
    Dbt <|-- DbtColumnProcess : extends
    class DbtMetric
    link DbtMetric "../entities/dbtmetric"
    Dbt <|-- DbtMetric : extends
    class DbtSource
    link DbtSource "../entities/dbtsource"
    Dbt <|-- DbtSource : extends
    class DbtProcess
    link DbtProcess "../entities/dbtprocess"
    Dbt <|-- DbtProcess : extends
    Process <|-- DbtProcess : extends
    ColumnProcess <|-- DbtColumnProcess : extends
    class DbtTag
    link DbtTag "../entities/dbttag"
    Dbt <|-- DbtTag : extends
    class DbtTest
    link DbtTest "../entities/dbttest"
    Dbt <|-- DbtTest : extends
    class Process
    link Process "../process"
    Asset <|-- Process : extends
    class ColumnProcess
    link ColumnProcess "../entities/columnprocess"
    Process <|-- ColumnProcess : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Dbt` (and all of its subtypes).

### dbtAccountName [¶](#dbtaccountname "Permanent link")

TBC

### dbtAlias [¶](#dbtalias "Permanent link")

TBC

### dbtConnectionContext [¶](#dbtconnectioncontext "Permanent link")

TBC

### dbtEnvironmentDbtVersion [¶](#dbtenvironmentdbtversion "Permanent link")

TBC

### dbtEnvironmentName [¶](#dbtenvironmentname "Permanent link")

TBC

### dbtJobLastRun [¶](#dbtjoblastrun "Permanent link")

TBC

### dbtJobName [¶](#dbtjobname "Permanent link")

TBC

### dbtJobNextRun [¶](#dbtjobnextrun "Permanent link")

TBC

### dbtJobNextRunHumanized [¶](#dbtjobnextrunhumanized "Permanent link")

TBC

### dbtJobRuns [¶](#dbtjobruns "Permanent link")

List of latest DBT job runs across all environments

### dbtJobSchedule [¶](#dbtjobschedule "Permanent link")

TBC

### dbtJobScheduleCronHumanized [¶](#dbtjobschedulecronhumanized "Permanent link")

TBC

### dbtJobStatus [¶](#dbtjobstatus "Permanent link")

TBC

### dbtMeta [¶](#dbtmeta "Permanent link")

TBC

### dbtPackageName [¶](#dbtpackagename "Permanent link")

TBC

### dbtProjectName [¶](#dbtprojectname "Permanent link")

TBC

### dbtSemanticLayerProxyUrl [¶](#dbtsemanticlayerproxyurl "Permanent link")

TBC

### dbtTags [¶](#dbttags "Permanent link")

TBC

### dbtUniqueId [¶](#dbtuniqueid "Permanent link")

TBC

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various dbt objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ DbtProcess : ""
    Connection ||..o{ DbtSource : ""
    Connection ||..o{ DbtModel : ""
    DbtModel |o--o{ DbtMetric : dbtMetrics
    DbtModel |o--o{ DbtModelColumn : dbtModelColumns
    DbtModel }o--o{ Asset : dbtModelSqlAssets
    DbtModel |o--o| Asset : sqlAsset
    DbtMetric }o--o{ Column : dbtMetricFilterColumns
    DbtModelColumn }o--o{ Column : dbtModelColumnSqlColumns
    DbtModelColumn }o--o| Column : sqlColumn
    DbtSource }o--o{ Asset : sqlAssets
    DbtSource }o--o| Asset : sqlAsset
    DbtProcess }o--|{ Asset : inputs
    DbtProcess }o--|{ Asset : outputs
    DbtProcess ||--o{ DbtColumnProcess : columnProcesses
    DbtColumnProcess }o--|{ Asset : inputs
    DbtColumnProcess }o--|{ Asset : outputs
    Asset }o--o{ DbtTest : dbtTests
    DbtModelColumn }o--o{ DbtTest : dbtTests
    DbtModel }o--o{ DbtTest : dbtTests
    DbtSource }o--o{ DbtTest : dbtTests
```

---

2023\-01\-042024\-04\-22

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/dbt/) to provide us with more information. 

Back to top

[Previous DataverseAttribute](../entities/dataverseattribute/) [Next DbtColumnProcess](../entities/dbtcolumnprocess/) 

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

