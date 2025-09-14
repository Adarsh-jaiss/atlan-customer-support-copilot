# Source URL
https://developer.atlan.com/models/cosmosmongodb/

================================================================================

<!--
canonical: https://developer.atlan.com/models/cosmosmongodb/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/cosmosmongodb/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: CosmosMongoDB - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/cosmosmongodb/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/cosmosmongodb/index.png
meta-twitter:title: CosmosMongoDB - Developer
meta-viewport: width=device-width,initial-scale=1
title: CosmosMongoDB - Developer
-->

[Skip to content](#cosmosmongodb) Developer CosmosMongoDB Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

CosmosMongoDB[¶](#cosmosmongodb "Permanent link")
=================================================

These are the model elements in Atlan related to Cosmos MongoDB.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Cogmos MongoDB assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class CosmosMongoDB {
        <<abstract>>
    }
    link CosmosMongoDB "../cosmosmongodb"
    class NoSQL {
        <<abstract>>
    }
    link NoSQL "../nosql"
    NoSQL <|-- CosmosMongoDB : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- NoSQL : extends
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
    SQL <|-- Database : extends
    class SQL {
        <<abstract>>
    }
    link SQL "../entities/sql"
    SQL <|-- Table : extends
    Catalog <|-- SQL : extends
    NoSQL <|-- MongoDB : extends
    class MongoDBCollection
    link MongoDBCollection "../entities/mongodbcollection"
    MongoDB <|-- MongoDBCollection : extends
    Table <|-- MongoDBCollection : extends
    class CosmosMongoDBCollection
    link CosmosMongoDBCollection "../entities/cosmosmongodbcollection"
    MongoDBCollection <|-- CosmosMongoDBCollection : extends
    CosmosMongoDB <|-- CosmosMongoDBCollection : extends
    class MongoDBDatabase
    link MongoDBDatabase "../entities/mongodbdatabase"
    Database <|-- MongoDBDatabase : extends
    MongoDB <|-- MongoDBDatabase : extends
    class CosmosMongoDBDatabase
    link CosmosMongoDBDatabase "../entities/cosmosmongodbdatabase"
    MongoDBDatabase <|-- CosmosMongoDBDatabase : extends
    CosmosMongoDB <|-- CosmosMongoDBDatabase : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various MongoDB objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ CosmosMongoDBDatabase : ""
    CosmosMongoDBDatabase |o--o{ CosmosMongoDBCollection : cosmosMongoDBCollections
    CosmosMongoDBCollection |o--o{ Column : columns
```

---

2023\-09\-182024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/cosmosmongodb/) to provide us with more information. 

Back to top

[Previous AzureServiceBusTopic](../entities/azureservicebustopic/) [Next CosmosMongoDBAccount](../entities/cosmosmongodbaccount/) 

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

