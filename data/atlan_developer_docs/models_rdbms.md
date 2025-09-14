# Source URL
https://developer.atlan.com/models/rdbms/

================================================================================

<!--
canonical: https://developer.atlan.com/models/rdbms/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/rdbms/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Relational databases - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/rdbms/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/rdbms/index.png
meta-twitter:title: Relational databases - Developer
meta-viewport: width=device-width,initial-scale=1
title: Relational databases - Developer
-->

[Skip to content](#relational-database-model) Developer Relational databases Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Relational database model[¶](#relational-database-model "Permanent link")
=========================================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage relational database assets in Atlan. For that, we would suggest starting with the [manage relational assets pattern](../../patterns/create/relational/).

These model elements all deal with relational database constructs.

```
classDiagram
    direction RL
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    Referenceable <|-- Asset : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Asset <|-- Catalog : extends
    class SQL {
        <<abstract>>
    }
    link SQL "../entities/sql"
    Catalog <|-- SQL : extends
    class Tag {
        <<abstract>>
    }
    link Tag "../entities/tag"
    Catalog <|-- Tag : extends
    class TablePartition
    link TablePartition "../entities/tablepartition"
    SQL <|-- TablePartition : extends
    class Table
    link Table "../entities/table"
    SQL <|-- Table : extends
    class Query
    link Query "../entities/query"
    SQL <|-- Query : extends
    class Column
    link Column "../entities/column"
    SQL <|-- Column : extends
    class Schema
    link Schema "../entities/schema"
    SQL <|-- Schema : extends
    class SnowflakeStream
    link SnowflakeStream "../entities/snowflakestream"
    SQL <|-- SnowflakeStream : extends
    class SnowflakePipe
    link SnowflakePipe "../entities/snowflakepipe"
    SQL <|-- SnowflakePipe : extends
    class Database
    link Database "../entities/database"
    SQL <|-- Database : extends
    class Procedure
    link Procedure "../entities/procedure"
    SQL <|-- Procedure : extends
    class View
    link View "../entities/view"
    SQL <|-- View : extends
    class MaterialisedView
    link MaterialisedView "../entities/materialisedview"
    SQL <|-- MaterialisedView : extends
    class SnowflakeTag
    link SnowflakeTag "../entities/snowflaketag"
    SQL <|-- SnowflakeTag : extends
    Tag <|-- SnowflakeTag : extends
    class Function
    link Function "../entities/function"
    SQL <|-- Function : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various relational database objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ Database : ""
    Database ||--o{ Schema : schemas
    Schema ||--o{ Table : tables
    Schema ||--o{ View : views
    Schema ||--o{ MaterialisedView : materialisedViews
    Schema ||--o{ Procedure : procedures
    Schema ||--o{ SnowflakePipe : snowflakePipes
    Schema ||--o{ SnowflakeStream : snowflakeStreams
    Schema ||--o{ SnowflakeTag : snowflakeTags
    Table |o--o{ TablePartition : partitions
    Table }o--o{ Query : queries
    Table |o--o{ Column : columns
    View }o--o{ Query : queries
    View |o--o{ Column : columns
    MaterialisedView |o--o{ Column : columns
    TablePartition |o--o{ Column : columns
    Column }o--o{ Query : queries
```

---

2023\-07\-072023\-08\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/rdbms/) to provide us with more information. 

Back to top

[Previous StakeholderTitle](../entities/stakeholdertitle/) [Next Database](../entities/database/) 

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

