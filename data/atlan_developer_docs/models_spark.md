# Source URL
https://developer.atlan.com/models/spark/

================================================================================

<!--
canonical: https://developer.atlan.com/models/spark/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/spark/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Spark - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/spark/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/spark/index.png
meta-twitter:title: Spark - Developer
meta-viewport: width=device-width,initial-scale=1
title: Spark - Developer
-->

[Skip to content](#spark) Developer Spark Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Spark[¶](#spark "Permanent link")
=================================

These are the model elements in Atlan related to Spark.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Spark assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Spark {
        <<abstract>>
    }
    link Spark "../spark"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- Spark : extends
    class Asset {
        <<abstract>>
    }
    link Asset "../asset"
    Asset <|-- Catalog : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../referenceable"
    Referenceable <|-- Asset : extends
    class SparkJob
    link SparkJob "../entities/sparkjob"
    Spark <|-- SparkJob : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Spark` (and all of its subtypes).

### sparkRunEndTime [¶](#sparkrunendtime "Permanent link")

End time of the Spark Job eg. 1695673598218

### sparkRunOpenLineageState [¶](#sparkrunopenlineagestate "Permanent link")

OpenLineage state of the Spark Job run eg. COMPLETE

### sparkRunOpenLineageVersion [¶](#sparkrunopenlineageversion "Permanent link")

OpenLineage Version of the Spark Job run eg. 1\.1\.0

### sparkRunStartTime [¶](#sparkrunstarttime "Permanent link")

Start time of the Spark Job eg. 1695673598218

### sparkRunVersion [¶](#sparkrunversion "Permanent link")

Spark Version for the Spark Job run eg. 3\.4\.1

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of Azure Service Bus inter\-relate with each other:

```
erDiagram
    Connection ||..o{ Process : ""
    Process ||--o{ SparkJob : sparkJobs
    Asset }o--o{ SparkJob : inputs
    Asset }o--o{ SparkJob : outputs
```

---

2023\-11\-302024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/spark/) to provide us with more information. 

Back to top

[Previous SodaCheck](../entities/sodacheck/) [Next SparkJob](../entities/sparkjob/) 

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

