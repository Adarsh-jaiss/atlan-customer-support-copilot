# Source URL
https://developer.atlan.com/models/kafka/

================================================================================

<!--
canonical: https://developer.atlan.com/models/kafka/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/kafka/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Kafka - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/kafka/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/kafka/index.png
meta-twitter:title: Kafka - Developer
meta-viewport: width=device-width,initial-scale=1
title: Kafka - Developer
-->

[Skip to content](#kafka) Developer Kafka Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Kafka[¶](#kafka "Permanent link")
=================================

Base model for Kafka assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Kafka assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Kafka {
        <<abstract>>
    }
    link Kafka "../kafka"
    class EventStore {
        <<abstract>>
    }
    link EventStore "../entities/eventstore"
    EventStore <|-- Kafka : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- EventStore : extends
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
    class KafkaTopic
    link KafkaTopic "../entities/kafkatopic"
    Kafka <|-- KafkaTopic : extends
    class KafkaConsumerGroup
    link KafkaConsumerGroup "../entities/kafkaconsumergroup"
    Kafka <|-- KafkaConsumerGroup : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Kafka objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ KafkaTopic : ""
    KafkaTopic |o--o{ KafkaConsumerGroup : kafkaConsumerGroups
```

---

2023\-01\-042023\-08\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/kafka/) to provide us with more information. 

Back to top

[Previous CognosReport](../entities/cognosreport/) [Next KafkaConsumerGroup](../entities/kafkaconsumergroup/) 

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

