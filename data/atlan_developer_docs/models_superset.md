# Source URL
https://developer.atlan.com/models/superset/

================================================================================

<!--
canonical: https://developer.atlan.com/models/superset/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/superset/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Superset - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/superset/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/superset/index.png
meta-twitter:title: Superset - Developer
meta-viewport: width=device-width,initial-scale=1
title: Superset - Developer
-->

[Skip to content](#superset) Developer Superset Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Superset[¶](#superset "Permanent link")
=======================================

Base class for Superset assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Superset assets in Atlan. For that, we would suggest starting with the [manage Superset assets pattern](../../patterns/create/superset/).

```
classDiagram
    direction RL
    class Superset {
        <<abstract>>
    }
    link Superset "../superset"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Superset : extends
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
    class SupersetChart
    link SupersetChart "../entities/supersetchart"
    Superset <|-- SupersetChart : extends
    class SupersetDataset
    link SupersetDataset "../entities/supersetdataset"
    Superset <|-- SupersetDataset : extends
    class SupersetDashboard
    link SupersetDashboard "../entities/supersetdashboard"
    Superset <|-- SupersetDashboard : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Superset` (and all of its subtypes).

### supersetDashboardId [¶](#supersetdashboardid "Permanent link")

Identifier of the dashboard in which this asset exists, in Superset.

### supersetDashboardQualifiedName [¶](#supersetdashboardqualifiedname "Permanent link")

Unique name of the dashboard in which this asset exists.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Superset objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ SupersetDashboard : ""
    SupersetDashboard ||--o{ SupersetChart : supersetCharts
    SupersetDashboard ||--o{ SupersetDataset : supersetDatasets
```

---

2024\-07\-092024\-07\-23

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/superset/) to provide us with more information. 

Back to top

[Previous SparkJob](../entities/sparkjob/) [Next SupersetChart](../entities/supersetchart/) 

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

