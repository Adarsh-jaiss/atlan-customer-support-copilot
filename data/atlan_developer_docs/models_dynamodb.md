# Source URL
https://developer.atlan.com/models/dynamodb/

================================================================================

<!--
canonical: https://developer.atlan.com/models/dynamodb/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/dynamodb/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: DynamoDB - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/dynamodb/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/dynamodb/index.png
meta-twitter:title: DynamoDB - Developer
meta-viewport: width=device-width,initial-scale=1
title: DynamoDB - Developer
-->

[Skip to content](#dynamodb-model) Developer DynamoDB Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

DynamoDB model[¶](#dynamodb-model "Permanent link")
===================================================

Base class for DynamoDB assets.

Complete reference

This is a complete reference for the `DynamoDB` object in Atlan, showing every possible property and relationship that can exist for these objects. For an introduction, you probably want to start with:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class DynamoDB {
        <<abstract>>
    }
    link DynamoDB "../dynamodb"
    class NoSQL {
        <<abstract>>
    }
    link NoSQL "../nosql"
    NoSQL <|-- DynamoDB : extends
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
    class DynamoDBSecondaryIndex {
        <<abstract>>
    }
    link DynamoDBSecondaryIndex "../entities/dynamodbsecondaryindex"
    Table <|-- DynamoDBSecondaryIndex : extends
    class DynamoDBLocalSecondaryIndex
    link DynamoDBLocalSecondaryIndex "../entities/dynamodblocalsecondaryindex"
    DynamoDBSecondaryIndex <|-- DynamoDBLocalSecondaryIndex : extends
    class DynamoDBGlobalSecondaryIndex
    link DynamoDBGlobalSecondaryIndex "../entities/dynamodbglobalsecondaryindex"
    DynamoDBSecondaryIndex <|-- DynamoDBGlobalSecondaryIndex : extends
    class DynamoDBTable
    link DynamoDBTable "../entities/dynamodbtable"
    Table <|-- DynamoDBTable : extends
    DynamoDB <|-- DynamoDBSecondaryIndex : extends
    DynamoDB <|-- DynamoDBTable : extends
    SQL <|-- Table : extends
    Catalog <|-- SQL : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `DynamoDB` (and all of its subtypes).

### dynamoDBPartitionKey [¶](#dynamodbpartitionkey "Permanent link")

Specifies the partition key of the DynamoDB Table/Index

### dynamoDBReadCapacityUnits [¶](#dynamodbreadcapacityunits "Permanent link")

The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException

### dynamoDBSortKey [¶](#dynamodbsortkey "Permanent link")

Specifies the sort key of the DynamoDB Table/Index

### dynamoDBStatus [¶](#dynamodbstatus "Permanent link")

Status of the DynamoDB Asset

### dynamoDBWriteCapacityUnits [¶](#dynamodbwritecapacityunits "Permanent link")

The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various DynamoDB objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ DynamoDBTable : ""
    DynamoDBTable ||--o{ DynamoDBGlobalSecondaryIndex : dynamoDBGlobalSecondaryIndexes
    DynamoDBTable ||--o{ DynamoDBLocalSecondaryIndex : dynamoDBLocalSecondaryIndexes
```

---

2023\-12\-082023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/dynamodb/) to provide us with more information. 

Back to top

[Previous Amazon AWS](../amazon/) [Next DynamoDBTable](../entities/dynamodbtable/) 

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

