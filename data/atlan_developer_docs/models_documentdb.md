# Source URL
https://developer.atlan.com/models/documentdb/

================================================================================

<!--
canonical: https://developer.atlan.com/models/documentdb/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/documentdb/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: DocumentDB - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/documentdb/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/documentdb/index.png
meta-twitter:title: DocumentDB - Developer
meta-viewport: width=device-width,initial-scale=1
title: DocumentDB - Developer
-->

[Skip to content](#documentdb) Developer DocumentDB Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

DocumentDB[¶](#documentdb "Permanent link")
===========================================

Base class for DocumentDB assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing DocumentDB assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class DocumentDBCollection
    link DocumentDBCollection "../entities/documentdbcollection"
    class Table
    link Table "../entities/table"
    Table <|-- DocumentDBCollection : extends
    DocumentDB <|-- DocumentDBCollection : extends
    class DocumentDBDatabase
    link DocumentDBDatabase "../entities/documentdbdatabase"
    class Database {
        <<abstract>>
    }
    link Database "../entities/database"
    Database <|-- DocumentDBDatabase : extends
    DocumentDB <|-- DocumentDBDatabase : extends
    SQL <|-- Database : extends
    class SQL {
        <<abstract>>
    }
    link SQL "../entities/sql"
    SQL <|-- Table : extends
    Catalog <|-- SQL : extends
    class DocumentDB {
        <<abstract>>
    }
    link DocumentDB "../entities/documentdb"
    class NoSQL {
        <<abstract>>
    }
    link NoSQL "../entities/nosql"
    NoSQL <|-- DocumentDB : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- NoSQL : extends
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
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various DocumentDB objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ DocumentDBDatabase : ""
    DocumentDBDatabase |o--o{ DocumentDBCollection : documentDBCollections
    DocumentDBCollection |o--o{ Column : columns
```

---

2023\-09\-182025\-04\-09

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/documentdb/) to provide us with more information. 

Back to top

[Previous DomoDatasetColumn](../entities/domodatasetcolumn/) [Next DocumentDBCollection](../entities/documentdbcollection/) 

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

