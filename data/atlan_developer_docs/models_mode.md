# Source URL
https://developer.atlan.com/models/mode/

================================================================================

<!--
canonical: https://developer.atlan.com/models/mode/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/mode/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Mode - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/mode/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/mode/index.png
meta-twitter:title: Mode - Developer
meta-viewport: width=device-width,initial-scale=1
title: Mode - Developer
-->

[Skip to content](#mode) Developer Mode Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Mode[¶](#mode "Permanent link")
===============================

Base class for Mode assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Mode assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Mode {
        <<abstract>>
    }
    link Mode "../mode"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Mode : extends
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
    class ModeReport
    link ModeReport "../entities/modereport"
    Mode <|-- ModeReport : extends
    class ModeQuery
    link ModeQuery "../entities/modequery"
    Mode <|-- ModeQuery : extends
    class ModeChart
    link ModeChart "../entities/modechart"
    Mode <|-- ModeChart : extends
    class ModeWorkspace
    link ModeWorkspace "../entities/modeworkspace"
    Mode <|-- ModeWorkspace : extends
    class ModeCollection
    link ModeCollection "../entities/modecollection"
    Mode <|-- ModeCollection : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Mode` (and all of its subtypes).

### modeId [¶](#modeid "Permanent link")

TBC

### modeQueryName [¶](#modequeryname "Permanent link")

TBC

### modeQueryQualifiedName [¶](#modequeryqualifiedname "Permanent link")

TBC

### modeReportName [¶](#modereportname "Permanent link")

TBC

### modeReportQualifiedName [¶](#modereportqualifiedname "Permanent link")

TBC

### modeToken [¶](#modetoken "Permanent link")

TBC

### modeWorkspaceName [¶](#modeworkspacename "Permanent link")

TBC

### modeWorkspaceQualifiedName [¶](#modeworkspacequalifiedname "Permanent link")

TBC

### modeWorkspaceUsername [¶](#modeworkspaceusername "Permanent link")

TBC

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Mode objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ ModeWorkspace : ""
    ModeWorkspace |o--o{ ModeCollection : modeCollections
    ModeCollection }o--o{ ModeReport : modeReports
    ModeReport |o--o{ ModeQuery : modeQueries
    ModeQuery |o--o{ ModeChart : modeCharts
```

---

2023\-01\-042024\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/mode/) to provide us with more information. 

Back to top

[Previous MicroStrategyVisualization](../entities/microstrategyvisualization/) [Next ModeChart](../entities/modechart/) 

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

