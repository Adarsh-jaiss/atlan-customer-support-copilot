# Source URL
https://developer.atlan.com/models/powerbi/

================================================================================

<!--
canonical: https://developer.atlan.com/models/powerbi/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/powerbi/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: PowerBI - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/powerbi/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/powerbi/index.png
meta-twitter:title: PowerBI - Developer
meta-viewport: width=device-width,initial-scale=1
title: PowerBI - Developer
-->

[Skip to content](#power-bi-powerbi) Developer PowerBI Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

PowerBI[¶](#power-bi-powerbi "Permanent link")
==============================================

Base class for Power BI assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Power BI assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class PowerBI {
        <<abstract>>
    }
    link PowerBI "../powerbi"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- PowerBI : extends
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
    class PowerBIReport
    link PowerBIReport "../entities/powerbireport"
    PowerBI <|-- PowerBIReport : extends
    class PowerBIMeasure
    link PowerBIMeasure "../entities/powerbimeasure"
    PowerBI <|-- PowerBIMeasure : extends
    class PowerBIColumn
    link PowerBIColumn "../entities/powerbicolumn"
    PowerBI <|-- PowerBIColumn : extends
    class PowerBITable
    link PowerBITable "../entities/powerbitable"
    PowerBI <|-- PowerBITable : extends
    class PowerBITile
    link PowerBITile "../entities/powerbitile"
    PowerBI <|-- PowerBITile : extends
    class PowerBIDatasource
    link PowerBIDatasource "../entities/powerbidatasource"
    PowerBI <|-- PowerBIDatasource : extends
    class PowerBIWorkspace
    link PowerBIWorkspace "../entities/powerbiworkspace"
    PowerBI <|-- PowerBIWorkspace : extends
    class PowerBIDataset
    link PowerBIDataset "../entities/powerbidataset"
    PowerBI <|-- PowerBIDataset : extends
    class PowerBIDashboard
    link PowerBIDashboard "../entities/powerbidashboard"
    PowerBI <|-- PowerBIDashboard : extends
    class PowerBIDataflow
    link PowerBIDataflow "../entities/powerbidataflow"
    PowerBI <|-- PowerBIDataflow : extends
    class PowerBIPage
    link PowerBIPage "../entities/powerbipage"
    PowerBI <|-- PowerBIPage : extends
    class PowerBIDataflowEntityColumn
    link PowerBIDataflowEntityColumn "../entities/powerbidataflowentitycolumn"
    PowerBI <|-- PowerBIDataflowEntityColumn : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `PowerBI` (and all of its subtypes).

### powerBIEndorsement [¶](#powerbiendorsement "Permanent link")

Endorsement status of this asset, in Power BI.

### powerBIFormatString [¶](#powerbiformatstring "Permanent link")

Format of this asset, as specified in the FORMAT\_STRING of the MDX cell property.

### powerBIIsHidden [¶](#powerbiishidden "Permanent link")

Whether this asset is hidden in Power BI (true) or not (false).

### powerBITableQualifiedName [¶](#powerbitablequalifiedname "Permanent link")

Unique name of the Power BI table in which this asset exists.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Power BI objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ PowerBIWorkspace : ""
    PowerBIWorkspace |o--o{ PowerBIDashboard : dashboards
    PowerBIWorkspace |o--o{ PowerBIDataflow : dataflows
    PowerBIWorkspace |o--o{ PowerBIDataset : datasets
    PowerBIWorkspace |o--o{ PowerBIReport : reports
    PowerBIDashboard |o--o{ PowerBITile : tiles
    PowerBIDataflow }o--o{ PowerBIDataset : datasets
    PowerBIDataflow |o--o{ IPowerBIDataflowEntityColumn : powerBIDataflowEntityColumns
    PowerBIDataset }o--o{ PowerBIDatasource : datasources
    PowerBIDataset |o--o{ PowerBIReport : reports
    PowerBIDataset |o--o{ PowerBITable : tables
    PowerBIDataset |o--o{ PowerBITile : tiles
    PowerBIReport |o--o{ PowerBIPage : pages
    PowerBIReport |o--o{ PowerBITile : tiles
    PowerBITable |o--o{ PowerBIColumn : columns
    PowerBITable |o--o{ PowerBIMeasure : measures
```

---

2023\-01\-042025\-01\-30

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/powerbi/) to provide us with more information. 

Back to top

[Previous MCMonitor](../entities/mcmonitor/) [Next PowerBIColumn](../entities/powerbicolumn/) 

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

