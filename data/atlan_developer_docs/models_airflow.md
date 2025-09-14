# Source URL
https://developer.atlan.com/models/airflow/

================================================================================

<!--
canonical: https://developer.atlan.com/models/airflow/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/airflow/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Airflow - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/airflow/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/airflow/index.png
meta-twitter:title: Airflow - Developer
meta-viewport: width=device-width,initial-scale=1
title: Airflow - Developer
-->

[Skip to content](#apache-airflow-model) Developer Airflow Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Apache Airflow model[¶](#apache-airflow-model "Permanent link")
===============================================================

Base class for Apache Airflow assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand developing with Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Airflow {
        <<abstract>>
    }
    link Airflow "../airflow"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- Airflow : extends
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
    class AirflowDag
    link AirflowDag "../entities/airflowdag"
    Airflow <|-- AirflowDag : extends
    class AirflowTask
    link AirflowTask "../entities/airflowtask"
    Airflow <|-- AirflowTask : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Airflow` (and all of its subtypes).

### airflowRunEndTime [¶](#airflowrunendtime "Permanent link")

End time of the run.

### airflowRunName [¶](#airflowrunname "Permanent link")

Name of the run.

### airflowRunOpenLineageState [¶](#airflowrunopenlineagestate "Permanent link")

State of the run in OpenLineage.

### airflowRunOpenLineageVersion [¶](#airflowrunopenlineageversion "Permanent link")

Version of the run in OpenLineage.

### airflowRunStartTime [¶](#airflowrunstarttime "Permanent link")

Start time of the run.

### airflowRunType [¶](#airflowruntype "Permanent link")

Type of the run.

### airflowRunVersion [¶](#airflowrunversion "Permanent link")

Version of the run in Airflow.

### airflowTags [¶](#airflowtags "Permanent link")

Tags assigned to the asset in Airflow.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various S3 objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ AirflowDag : ""
    AirflowDag ||--o{ AirflowTask : airflowTasks
```

---

2023\-08\-042023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/airflow/) to provide us with more information. 

Back to top

[Previous APIField](../entities/apifield/) [Next AirflowDag](../entities/airflowdag/) 

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

