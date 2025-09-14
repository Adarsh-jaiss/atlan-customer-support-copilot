# Source URL
https://developer.atlan.com/search/queries/compound/

================================================================================

<!--
canonical: https://developer.atlan.com/search/queries/compound/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to use compound queries in Atlan to combine multiple term-level and full-text queries.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to use compound queries in Atlan to combine multiple term-level and full-text queries.
meta-og-image: https://developer.atlan.com/assets/images/social/search/queries/compound.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Compound queries - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/queries/compound/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to use compound queries in Atlan to combine multiple term-level and full-text queries.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/queries/compound.png
meta-twitter:title: Compound queries - Developer
meta-viewport: width=device-width,initial-scale=1
title: Compound queries - Developer
-->

[Skip to content](#compound-queries) Developer Compound queries Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

Compound queries[¶](#compound-queries "Permanent link")
=======================================================

Compound queries[1](#fn:1) wrap other queries to either:

* Combine their results
* Change their behavior
* Switch query contexts (in particular, from [query](../#query-context) to [filter](../#filter-context) context)

In other words, you can use compound queries to *combine* any number of [term\-level](../terms/) and [full\-text](../text/) queries (and in fact other compound queries as well).

**Details**

Below are the various kinds of compound queries. These are sorted with the most commonly used at the top, and cover their usual usage. Each one is linked to Elasticsearch's own documentation to provide greater details. (In most cases there are many more options for each kind of query than what is documented here.)

Bool[¶](#bool "Permanent link")
-------------------------------

[Bool queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html)  combine multiple queries using `must`, `should`, `must_not` and `filter` clauses. These allow you to combine queries with logic like `AND`, `OR` and `NOT`.

| Clause | Description | Context |
| --- | --- | --- |
| `must` | Query clauses must match the results, and will contribute to the score. These act like a logical `AND` operation. | [query](../#query-context) |
| `should` | Query clauses should match the results, and will contribute to the score. These act like a logical `OR` operation. | [query](../#query-context) |
| `must_not` | Query clauses must *not* match the results, and are used to either include or exclude results (no scoring). These act like a logical `NOT` operation. | [filter](../#filter-context) |
| `filter` | Query clauses must match the results, but will *not* contribute to the score. | [filter](../#filter-context) |

Fluent search uses filter context exclusively

Note that the `where` clause in fluent search is actually translated to a `filter` clause, and not a `must` clause. Therefore, fluent search exclusively uses [filter](../#filter-context) context. If you truly want to use [query](../#query-context) context you will need to construct your queries using lower\-level Elastic queries rather than fluent search's clauses.

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, this query would find all active (non\-archived) tables with either a classification or a term assigned:

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` IndexSearchRequest index = Table.select(client) // (1)     .whereSome(Asset.ATLAN_TAGS.hasAnyValue()) // (2)     .whereSome(Asset.ASSIGNED_TERMS.hasAnyValue())     .minSomes(1) // (3)     .toRequest(); // (4)  ``` |

1. You can build up a compound query progressively, starting from the type of asset you want to query using the `select()` method. This will start a query that narrows results to only active assets of this type (`Table` in this example). Because this operation may retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can add any number of conditions where some of them must match using the `whereSome()` helper with a query as a condition. (You can add any number of *mandatory* conditions using the `where()` helper with a query as a condition, instead.) Each query you provide can either be from a helper (like these examples) or a full\-fledged Elastic `Query`, if you need ultimate flexibility.
3. You can specify how many of these `whereSome()` conditions must match using the `minSomes()` helper.
4. Finally, you can build the compound query into a search request using the `toRequest()` helper method.

| Build the query and request | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.model.fluent_search import CompoundQuery, FluentSearch from pyatlan.model.assets import Table from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  index = (FluentSearch()  # (1)      .where(CompoundQuery.asset_type(Table))  # (2)      .where(CompoundQuery.active_assets())      .where_some(CompoundQuery.tagged(client=client, directly=True))  # (3)      .where_some(CompoundQuery.assigned_term())      .min_somes(1)  # (4)     ).to_request()  # (5)  ``` |

1. You can build up a compound query progressively by creating a `FluentSearch()` object and chaining conditions onto it.
2. You can add any number of mandatory conditions using the `where()` helper with a query as a condition. You can use query helpers (like these examples from `CompoundQuery` to narrow to assets of a particular type (`Table`) and only active assets), or full\-fledged Elastic `Query`'s.
3. You can add any number of conditions where some of them must match using the `where_some()` helper with a query as a condition.
4. You can specify how many of these `where_some()` conditions must match using the `min_somes()` helper.
5. Finally, you can build the compound query into a search request using the `to_request()` helper method.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val index = Table.select(client) // (1)     .whereSome(Asset.ATLAN_TAGS.hasAnyValue()) // (2)     .whereSome(Asset.ASSIGNED_TERMS.hasAnyValue())     .minSomes(1) // (3)     .toRequest() // (4)  ``` |

1. You can build up a compound query progressively, starting from the type of asset you want to query using the `select()` method. This will start a query that narrows results to only active assets of this type (`Table` in this example). Because this operation may retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can add any number of conditions where some of them must match using the `whereSome()` helper with a query as a condition. (You can add any number of *mandatory* conditions using the `where()` helper with a query as a condition, instead.) Each query you provide can either be from a helper (like these examples) or a full\-fledged Elastic `Query`, if you need ultimate flexibility.
3. You can specify how many of these `whereSome()` conditions must match using the `minSomes()` helper.
4. Finally, you can build the compound query into a search request using the `toRequest()` helper method.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "dsl": {     "query": {       "bool": {         "must": {           "term": { "__state": { "value": "ACTIVE" }}         },         "filter": {           "term": { "__typeName.keyword": { "value": "Table" }}         },         "should": [           "exists": { "field": "__traitNames" },           "exists": { "field": "__meanings" }         ],         "minimum_should_match": 1       }     }   } }  ``` |

In the vast majority of cases you will use `bool` queries, which the SDK examples above create. There are other compound query options for influencing scores, but details for these are left to the Elasticsearch documentation linked below.

---

1. This page is a summary of the details in the Elasticsearch Guide's [Compound queries](https://www.elastic.co/guide/en/elasticsearch/reference/current/compound-queries.html)  [↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2022\-09\-092025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/queries/compound/) to provide us with more information. 

Back to top

[Previous Rank feature queries](../rank/) [Next Searchable fields](../../attributes/) 

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

