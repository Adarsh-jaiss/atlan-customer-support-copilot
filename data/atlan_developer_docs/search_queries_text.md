# Source URL
https://developer.atlan.com/search/queries/text/

================================================================================

<!--
canonical: https://developer.atlan.com/search/queries/text/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/search/queries/text.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Full text queries - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/queries/text/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/queries/text.png
meta-twitter:title: Full text queries - Developer
meta-viewport: width=device-width,initial-scale=1
title: Full text queries - Developer
-->

[Skip to content](#full-text-queries) Developer Full text queries Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Full text queries[¶](#full-text-queries "Permanent link")
=========================================================

Full text queries allow you to find results based on analyzed text fields.[1](#fn:1) For example, by a word or phrase within a longer description.

Unlike [term\-level queries](../terms/), the search terms you use in a full\-text query *are* analyzed. This means what you search for is tokenized first (broken up into separate words), singular / plural variants determined, synonyms applied, and so on.

**Details**

Below are the various kinds of full text queries. These are sorted with the most commonly used at the top, and cover their usual usage. Each one is linked to Elasticsearch's own documentation to provide greater details. (In most cases there are many more options for each kind of query than what is documented here.)

Match[¶](#match "Permanent link")
---------------------------------

[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

[Match queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html)  return results where the asset's value for that attribute matches some part of what you're searching.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.NAME.match("tmp")) // (1)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `match()` predicate creates a match query.

    Equivalent query through Elastic
    ```
    Query byMatch =  MatchQuery.of(m -> m
        .field("name")
        .query("tmp")
      ._toQuery();

    ```

| Build the query | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.NAME.match("tmp"))  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Use the class variable representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `match()` predicate creates a match query.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.NAME.match("tmp")) // (1)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client.
2. Chain a `where()` onto the select, with the static constant representing a field of the type you want to search to start a query, in this case the `NAME` of an `Asset`. Adding the `match()` predicate creates a match query.

    Equivalent query through Elastic
    ```
    val byMatch =  MatchQuery.of(m -> m
        .field("name")
        .query("tmp")
      ._toQuery()

    ```

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` {   "dsl": { // (1)     "query": { // (2)       "match": { // (3)         "name": { // (4)           "query": "tmp" // (5)         }       }     }   } }  ``` |

1. Queries must be within the `dsl` object in the API...
2. ...and within that the `query` object.
3. For a match query, there needs to be a `match` object embedded within the `query` object.
4. Within this object should be a key with the name of the Elasticsearch field (Atlan attribute) to match against.
5. The value for this field (attribute) to match against should be given through the `query` property.

Match phrase[¶](#match-phrase "Permanent link")
-----------------------------------------------

[5\.0\.1](https://github.com/atlanhq/atlan-python/releases/tag/5.0.1 "Minimum version")

Unlike a regular [`match`](./#match) query, which performs a full\-text search and may return results with individual words appearing in any order, a `match_phrase` query ensures that the terms appear in the exact order specified.

For example, to search for assets where the `description` field contains the exact phrase `"data pipeline"`:

Java

Python

Kotlin

Raw REST API

Coming soon

| Build the query | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (     FluentSearch()  # (1)     .where(Asset.DESCRIPTION.match_phrase("data pipeline")) # (2) ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object.
2. Use the class variable representing a field of the type you want to search to start a query, in this case the `DESCRIPTION` of an `Asset`. Adding the `match_phrase()` predicate creates a match phrase query.

Coming soon

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` {   "dsl": { // (1)     "query": { // (2)       "match_phrase": { // (3)         "description": { // (4)           "query": "data pipeline" // (5)         }       }     }   } }  ``` |

1. Queries must be within the `dsl` object in the API...
2. ...and within that the `query` object.
3. For a match phrase query, there needs to be a `match_phrase` object embedded within the `query` object.
4. Within this object should be a key with the name of the Elasticsearch field (Atlan attribute) to match against.
5. The value for this field (attribute) to match against should be given through the `query` property.

---

1. This page is a summary of the details in the Elasticsearch Guide's [Full text queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query-phrase.html)  [↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2022\-09\-092025\-03\-03

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/queries/text/) to provide us with more information. 

Back to top

[Previous Term\-level queries](../terms/) [Next Rank feature queries](../rank/) 

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

