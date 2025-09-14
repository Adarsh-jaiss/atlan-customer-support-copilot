# Source URL
https://developer.atlan.com/models/tableau/

================================================================================

<!--
canonical: https://developer.atlan.com/models/tableau/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/tableau/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Tableau - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/tableau/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/tableau/index.png
meta-twitter:title: Tableau - Developer
meta-viewport: width=device-width,initial-scale=1
title: Tableau - Developer
-->

[Skip to content](#tableau) Developer Tableau Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Tableau[¶](#tableau "Permanent link")
=====================================

Base class for Tableau assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Tableau assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Tableau {
        <<abstract>>
    }
    link Tableau "../tableau"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Tableau : extends
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
    class TableauWorkbook
    link TableauWorkbook "../entities/tableauworkbook"
    Tableau <|-- TableauWorkbook : extends
    class TableauDatasourceField
    link TableauDatasourceField "../entities/tableaudatasourcefield"
    Tableau <|-- TableauDatasourceField : extends
    class TableauCalculatedField
    link TableauCalculatedField "../entities/tableaucalculatedfield"
    Tableau <|-- TableauCalculatedField : extends
    class TableauProject
    link TableauProject "../entities/tableauproject"
    Tableau <|-- TableauProject : extends
    class TableauMetric
    link TableauMetric "../entities/tableaumetric"
    Tableau <|-- TableauMetric : extends
    class TableauSite
    link TableauSite "../entities/tableausite"
    Tableau <|-- TableauSite : extends
    class TableauDatasource
    link TableauDatasource "../entities/tableaudatasource"
    Tableau <|-- TableauDatasource : extends
    class TableauDashboard
    link TableauDashboard "../entities/tableaudashboard"
    Tableau <|-- TableauDashboard : extends
    class TableauFlow
    link TableauFlow "../entities/tableauflow"
    Tableau <|-- TableauFlow : extends
    class TableauWorksheet
    link TableauWorksheet "../entities/tableauworksheet"
    Tableau <|-- TableauWorksheet : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Tableau objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ TableauSite : ""
    TableauSite |o--o{ TableauProject : projects
    TableauProject |o--o{ TableauProject : childProjects
    TableauProject |o--o{ TableauDatasource : datasources
    TableauProject |o--o{ TableauFlow : flows
    TableauProject |o--o{ TableauWorkbook : workbooks
    TableauProject |o--o{ TableauMetric : metrics
    TableauWorkbook |o--o{ TableauDashboard : dashboards
    TableauWorkbook |o--o{ TableauDatasource : datasources
    TableauWorkbook |o--o{ TableauWorksheet : worksheets
    TableauDatasource |o--o{ TableauCalculatedField : fields
    TableauDatasource |o--o{ TableauDatasourceField : fields
    TableauDashboard }o--o{ TableauWorksheet : worksheets
    TableauWorksheet }o--o{ TableauDatasourceField : datasourceFields
    TableauWorksheet }o--o{ TableauCalculatedField : calculatedFields
```

---

2023\-01\-042023\-08\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/tableau/) to provide us with more information. 

Back to top

[Previous SupersetDataset](../entities/supersetdataset/) [Next TableauCalculatedField](../entities/tableaucalculatedfield/) 

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

