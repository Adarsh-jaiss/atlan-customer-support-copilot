# Source URL
https://developer.atlan.com/models/thoughtspot/

================================================================================

<!--
canonical: https://developer.atlan.com/models/thoughtspot/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/thoughtspot/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Thoughtspot - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/thoughtspot/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/thoughtspot/index.png
meta-twitter:title: Thoughtspot - Developer
meta-viewport: width=device-width,initial-scale=1
title: Thoughtspot - Developer
-->

[Skip to content](#thoughtspot) Developer Thoughtspot Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Thoughtspot[¶](#thoughtspot "Permanent link")
=============================================

Base class for ThoughtSpot assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing ThoughtSpot assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Thoughtspot {
        <<abstract>>
    }
    link Thoughtspot "../thoughtspot"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Thoughtspot : extends
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
    class ThoughtspotWorksheet
    link ThoughtspotWorksheet "../entities/thoughtspotworksheet"
    Thoughtspot <|-- ThoughtspotWorksheet : extends
    class ThoughtspotLiveboard
    link ThoughtspotLiveboard "../entities/thoughtspotliveboard"
    Thoughtspot <|-- ThoughtspotLiveboard : extends
    class ThoughtspotTable
    link ThoughtspotTable "../entities/thoughtspottable"
    Thoughtspot <|-- ThoughtspotTable : extends
    class ThoughtspotColumn
    link ThoughtspotColumn "../entities/thoughtspotcolumn"
    Thoughtspot <|-- ThoughtspotColumn : extends
    class ThoughtspotView
    link ThoughtspotView "../entities/thoughtspotview"
    Thoughtspot <|-- ThoughtspotView : extends
    class ThoughtspotDashlet
    link ThoughtspotDashlet "../entities/thoughtspotdashlet"
    Thoughtspot <|-- ThoughtspotDashlet : extends
    class ThoughtspotAnswer
    link ThoughtspotAnswer "../entities/thoughtspotanswer"
    Thoughtspot <|-- ThoughtspotAnswer : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Thoughtspot` (and all of its subtypes).

### thoughtspotChartType [¶](#thoughtspotcharttype "Permanent link")

TBC

### thoughtspotColumnCount [¶](#thoughtspotcolumncount "Permanent link")

Number of Columns.

### thoughtspotJoinCount [¶](#thoughtspotjoincount "Permanent link")

Total number of data table joins executed for analysis.

### thoughtspotQuestionText [¶](#thoughtspotquestiontext "Permanent link")

TBC

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various ThoughtSpot objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ ThoughtspotLiveboard : ""
    Connection ||..o{ ThoughtspotAnswer : ""
    Connection ||..o{ ThoughtspotWorksheet : ""
    Connection ||..o{ ThoughtspotTable : ""
    Connection ||..o{ ThoughtspotView : ""
    ThoughtspotLiveboard |o--o{ ThoughtspotDashlet : thoughtspotDashlets
    ThoughtspotWorksheet |o--o{ ThoughtspotColumn : thoughtspotColumns
    ThoughtspotTable |o--o{ ThoughtspotColumn : thoughtspotColumns
    ThoughtspotView |o--o{ ThoughtspotColumn : thoughtspotColumns
```

---

2023\-05\-042024\-06\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/thoughtspot/) to provide us with more information. 

Back to top

[Previous TableauWorksheet](../entities/tableauworksheet/) [Next ThoughtspotAnswer](../entities/thoughtspotanswer/) 

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

