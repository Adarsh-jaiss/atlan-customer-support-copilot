# Source URL
https://developer.atlan.com/models/lineage/

================================================================================

<!--
canonical: https://developer.atlan.com/models/lineage/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/lineage/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Lineage - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/lineage/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/lineage/index.png
meta-twitter:title: Lineage - Developer
meta-viewport: width=device-width,initial-scale=1
title: Lineage - Developer
-->

[Skip to content](#lineage-model) Developer Lineage Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Lineage model[¶](#lineage-model "Permanent link")
=================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage lineage in Atlan. For that, we would suggest starting with the [lineage snippets](../../snippets/common-examples/lineage/).

These are the model elements in Atlan related to lineage.

```
classDiagram
    direction RL
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    Referenceable <|-- Asset : extends
    class Process
    link Process "../lineage"
    Asset <|-- Process : extends
    class BIProcess
    link BIProcess "../entities/biprocess"
    Process <|-- BIProcess : extends
    class DbtProcess
    link DbtProcess "../entities/dbtprocess"
    Process <|-- DbtProcess : extends
    class ColumnProcess
    link ColumnProcess "../entities/columnprocess"
    Process <|-- ColumnProcess : extends
    class DbtColumnProcess
    link DbtColumnProcess "../entities/dbtcolumnprocess"
    ColumnProcess <|-- DbtColumnProcess : extends
    class SparkJob
    link SparkJob "../entities/sparkjob"
    Spark <|-- SparkJob : extends
    link Spark "../spark"
    class Spark {
        <<abstract>>
    }
    Catalog <|-- Spark : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Asset <|-- Catalog : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Process` (and all of its subtypes).

### additionalEtlContext [¶](#additionaletlcontext "Permanent link")

TBC

### ast [¶](#ast "Permanent link")

TBC

### code [¶](#code "Permanent link")

TBC

### sql [¶](#sql "Permanent link")

TBC

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of lineage inter\-relate with each other:

```
erDiagram
    Process ||--o{ ColumnProcess : columnProcesses
    Process }o--|{ Asset : inputs
    Process }o--|{ Asset : outputs
    Process }o--o{ MatillionComponent: matillionComponent
    Process ||--o{ SparkJob : sparkJobs
    ColumnProcess }o--|{ Asset : inputs
    ColumnProcess }o--|{ Asset : outputs
```

---

2023\-07\-072024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/lineage/) to provide us with more information. 

Back to top

[Previous Incident](../entities/incident/) [Next ColumnProcess](../entities/columnprocess/) 

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

