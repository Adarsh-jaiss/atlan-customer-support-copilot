# Source URL
https://developer.atlan.com/models/azure/

================================================================================

<!--
canonical: https://developer.atlan.com/models/azure/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/azure/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Microsoft Azure - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/azure/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/azure/index.png
meta-twitter:title: Microsoft Azure - Developer
meta-viewport: width=device-width,initial-scale=1
title: Microsoft Azure - Developer
-->

[Skip to content](#azure) Developer Microsoft Azure Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Azure[¶](#azure "Permanent link")
=================================

Base class for Azure assets.

```
classDiagram
    direction RL
    class ADLS {
        <<abstract>>
    }
    link ADLS "../adls"
    class ObjectStore {
        <<abstract>>
    }
    link ObjectStore "../entities/objectstore"
    ObjectStore <|-- ADLS : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- ObjectStore : extends
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
    class Azure {
        <<abstract>>
    }
    link Azure "../azure"
    Azure <|-- ADLS : extends
    class Cloud {
        <<abstract>>
    }
    link Cloud "../entities/cloud"
    Cloud <|-- Azure : extends
    Asset <|-- Cloud : extends
    class ADLSAccount
    link ADLSAccount "../entities/adlsaccount"
    ADLS <|-- ADLSAccount : extends
    class ADLSContainer
    link ADLSContainer "../entities/adlscontainer"
    ADLS <|-- ADLSContainer : extends
    class ADLSObject
    link ADLSObject "../entities/adlsobject"
    ADLS <|-- ADLSObject : extends
    class Kafka {
        <<abstract>>
    }
    link Kafka "../entities/kafka"
    class EventStore {
        <<abstract>>
    }
    link EventStore "../entities/eventstore"
    EventStore <|-- Kafka : extends
    Catalog <|-- EventStore : extends
    class AzureEventHub
    link AzureEventHub "../entities/azureeventhub"
    class KafkaTopic
    link KafkaTopic "../entities/kafkatopic"
    Kafka <|-- KafkaTopic : extends
    KafkaTopic <|-- AzureEventHub : extends
    class KafkaConsumerGroup
    link KafkaConsumerGroup "../entities/kafkaconsumergroup"
    Kafka <|-- KafkaConsumerGroup : extends
    class AzureEventHubConsumerGroup
    link AzureEventHubConsumerGroup "../entities/azureeventhubconsumergroup"
    KafkaConsumerGroup <|-- AzureEventHubConsumerGroup : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Azure` (and all of its subtypes).

### adlsAccountSecondaryLocation [¶](#adlsaccountsecondarylocation "Permanent link")

Secondary location of the ADLS account.

### azureLocation [¶](#azurelocation "Permanent link")

Location of this asset in Azure.

### azureResourceId [¶](#azureresourceid "Permanent link")

Resource identifier of this asset in Azure.

### azureTags [¶](#azuretags "Permanent link")

Tags that have been applied to this asset in Azure.

---

2023\-07\-072023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/azure/) to provide us with more information. 

Back to top

[Previous ApplicationField](../entities/applicationfield/) [Next Azure Data Factory](../adf/) 

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

