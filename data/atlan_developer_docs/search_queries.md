# Source URL
https://developer.atlan.com/search/queries/

================================================================================

<!--
canonical: https://developer.atlan.com/search/queries/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn about query context for scoring results and filter context for binary decisions in Elasticsearch.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn about query context for scoring results and filter context for binary decisions in Elasticsearch.
meta-og-image: https://developer.atlan.com/assets/images/social/search/queries/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Querying overview - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/queries/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn about query context for scoring results and filter context for binary decisions in Elasticsearch.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/queries/index.png
meta-twitter:title: Querying overview - Developer
meta-viewport: width=device-width,initial-scale=1
title: Querying overview - Developer
-->

[Skip to content](#querying-overview) Developer Querying overview Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

[/api/meta/search/indexsearch (POST)](../../endpoints/#tag:apimetasearchindexsearch-post)

Querying overview[¶](#querying-overview "Permanent link")
=========================================================

**The query defines what you want to find in your search.**

At the highest level, what is key to understand is the *context* of your query.

Query context[¶](#query-context "Permanent link")
-------------------------------------------------

By default, Elasticsearch sorts results by a *relevance score*, which measures how well each document matches a query.[1](#fn:1) When you as a person are running a search through a UI this is fantastic — your results are presented back in a logical order even with some fuzziness applied to your search terms.

This works because queries calculate these scores to rank (sort) the results.

Queries that calculate these scores run in *query context*. They answer the question:

> "How *well* does this result match this query clause?"

Filter context[¶](#filter-context "Permanent link")
---------------------------------------------------

When we're talking about machines running searches, though, this kind of scoring and ranking is often unnecessary. In most cases, in your program you only want to know whether a result matches what you're looking for or not — a much more binary decision.

Queries that include or exclude a result as a binary decision run in *filter context*. They answer the question:

> "Does this result match this query clause (yes or no)?"

Filter context is therefore faster, and in addition is cached automatically by Elasticsearch.

Our SDK interfaces use filter context exclusively

Since programmatic searching rarely (if ever) needs relevance scoring, our SDKs use filter context exclusively. If you have a strong need for relevance scoring of your results when searching programmatically, please let us know your use case!

[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

What this means in practice:

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = Table.select(client) // (1)     .where(Table.NAME.startsWith("abc")) // (2)     .sort(Table.UPDATE_TIME.order(SortOrder.Desc)) // (3)     .toRequest();  ``` |

1. Starting with the fluent search's `select()` helper will construct a query in the background that uses `filter`s to narrow results by type (`Table` in this example) and to only active assets. Because this operation may retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Any other conditions you chain onto the query (through a `.where()`) will also be translated to `filter`s.
3. If you are [sorting](../sort/) by some property of the results anyway, like when they were last modified, you probably do not need a score for each result — so filters will be the more performant option.

| Build the query and request | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.model.enums import SortOrder from pyatlan.model.fluent_search import CompoundQuery, FluentSearch from pyatlan.model.assets import Table  index = (FluentSearch()  # (1)      .where(CompoundQuery.asset_type(Table))  # (2)      .where(CompoundQuery.active_assets())      .where(Table.NAME.startswith("abc"))      .sort(Table.UPDATE_TIME.order(SortOrder.DESCENDING))  # (3)     ).to_request()  ``` |

1. Starting with a `FluentSearch()` will construct a query.
2. Every chained `.where()` condition will be translated to a `filter` in Elastic.
3. If you are [sorting](../sort/) by some property of the results anyway, like when they were last modified, you probably do not need a score for each result — so filters will be the more performant option.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = Table.select(true) // (1)     .where(Table.NAME.startsWith("abc")) // (2)     .sort(Table.UPDATE_TIME.order(SortOrder.Desc)) // (3)     .toRequest()  ``` |

1. Starting with the fluent search's `select()` helper will construct a query in the background that uses `filter`s to narrow results by type (`Table` in this example) and to only active assets. Because this operation may retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Any other conditions you chain onto the query (through a `.where()`) will also be translated to `filter`s.
3. If you are [sorting](../sort/) by some property of the results anyway, like when they were last modified, you probably do not need a score for each result — so filters will be the more performant option.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "dsl": {     "query": { // (1)       "bool": {         "filter": [ // (2)           { "term": { "__typeName.keyword": "Table" }}         ]       }     },     "sort": [ // (3)       { "__modificationTimestamp": { "order": "desc" }}     ]   } }  ``` |

1. Although we use a query construct (which we must to get any results)...
2. ...if we are looking for exact matches only (and don't care about scoring), then we should put our search requirements into a `filter`.
3. This is particularly true if we are [sorting](../sort/) by some property of the results anyway, like when they were last modified.

---

1. This page is a summary of the details in the Elasticsearch Guide's [Query and filter context](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html)  [↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2022\-09\-082025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/queries/) to provide us with more information. 

Back to top

[Previous Introduction to searching](../) [Next Term\-level queries](terms/) 

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

