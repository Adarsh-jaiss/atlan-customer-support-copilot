# Source URL
https://developer.atlan.com/models/azureservicebus/

================================================================================

<!--
canonical: https://developer.atlan.com/models/azureservicebus/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/azureservicebus/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: AzureServiceBus - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/azureservicebus/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/azureservicebus/index.png
meta-twitter:title: AzureServiceBus - Developer
meta-viewport: width=device-width,initial-scale=1
title: AzureServiceBus - Developer
-->

[Skip to content](#azureservicebus) Developer AzureServiceBus Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

AzureServiceBus[¶](#azureservicebus "Permanent link")
=====================================================

These are the model elements in Atlan related to Azure Service Bus.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Azure Service Bus assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class AzureServiceBus {
        <<abstract>>
    }
    link AzureServiceBus "../azureservicebus"
    class EventStore {
        <<abstract>>
    }
    link EventStore "../eventstore"
    EventStore <|-- AzureServiceBus : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- EventStore : extends
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
    class AzureServiceBusNamespace
    link AzureServiceBusNamespace "../entities/azureservicebusnamespace"
    AzureServiceBus <|-- AzureServiceBusNamespace : extends
    class AzureServiceBusSchema
    link AzureServiceBusSchema "../entities/azureservicebusschema"
    AzureServiceBus <|-- AzureServiceBusSchema : extends
    class AzureServiceBusTopic
    link AzureServiceBusTopic "../entities/azureservicebustopic"
    AzureServiceBus <|-- AzureServiceBusTopic : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `AzureServiceBus` (and all of its subtypes).

### azureServiceBusNamespaceName [¶](#azureservicebusnamespacename "Permanent link")

Simple name of the AzureServiceBus Namespace in which this asset exists.

### azureServiceBusNamespaceQualifiedName [¶](#azureservicebusnamespacequalifiedname "Permanent link")

Unique name of the AzureServiceBus Namespace in which this asset exists.

### azureServiceBusSchemaQualifiedName [¶](#azureservicebusschemaqualifiedname "Permanent link")

Unique name of the AzureServiceBus Schema in which this asset exists.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of Azure Service Bus inter\-relate with each other:

```
erDiagram
    Connection ||..o{ AzureServiceBusNamespace : ""
    AzureServiceBusNamespace ||--o{ AzureServiceBusTopic : azureServiceBusTopics
    AzureServiceBusTopic }o--o{ AzureServiceBusSchema : azureServiceBusSchemas
```

---

2024\-06\-182025\-01\-30

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/azureservicebus/) to provide us with more information. 

Back to top

[Previous AzureEventHubConsumerGroup](../entities/azureeventhubconsumergroup/) [Next AzureServiceBusNamespace](../entities/azureservicebusnamespace/) 

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

