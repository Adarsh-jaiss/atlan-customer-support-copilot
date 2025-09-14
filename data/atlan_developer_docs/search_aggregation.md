# Source URL
https://developer.atlan.com/search/aggregation/

================================================================================

<!--
canonical: https://developer.atlan.com/search/aggregation/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to aggregate search results using bucket and metric aggregation.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to aggregate search results using bucket and metric aggregation.
meta-og-image: https://developer.atlan.com/assets/images/social/search/aggregation/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Aggregating search results - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/aggregation/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to aggregate search results using bucket and metric aggregation.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/aggregation/index.png
meta-twitter:title: Aggregating search results - Developer
meta-viewport: width=device-width,initial-scale=1
title: Aggregating search results - Developer
-->

[Skip to content](#aggregating-search-results) Developer Aggregating search results Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

[/api/meta/search/indexsearch (POST)](../../endpoints/#tag:apimetasearchindexsearch-post)

Aggregating search results[¶](#aggregating-search-results "Permanent link")
===========================================================================

You can aggregate information about your search results in a few ways.

Currently only the following are implemented through the SDKs, though Elasticsearch itself supports many additional scenarios[1](#fn:1).

Bucket aggregation[¶](#bucket-aggregation "Permanent link")
-----------------------------------------------------------

You can group results together based on a field using bucket aggregation. With this, you can answer questions like:

> Which kinds of assets most frequently match my search criteria?

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example:

Java

Python

Kotlin

Raw REST API

| Build a bucket aggregation | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` IndexSearchRequest request = client.assets.select() // (1)     .aggregate("type", Asset.TYPE_NAME.bucketBy()) // (2)     .sort(Asset.CREATE_TIME.order(SortOrder.Desc))     .toRequest(); // (3) IndexSearchResponse response = request.search(client); // (4)  ``` |

1. Start building a query from a client, using its 'assets' member's `select()` method.
2. Add an aggregation by chaining one or more `aggregate()` methods, and passing:

    * Any arbitrary key you want, which you'll use to look up the results of the aggregation in the response. You can add as many aggregations as you want, but each must have a unique key to look up its unique results.
        * The field you want to aggregate, along with the kind of aggregation you want to do on that field. This example will bucket the results based on the distinct types of assets (tables, columns, etc).
3. You can then turn these criteria into a search request using the `toRequest()` helper.
4. And once you have a request, you can then run the search. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Do something with the results | |
| --- | --- |
| ```  6  7  8  9 10 11 12 ``` | ``` Map<String, AggregationResult> aggregates = response.getAggregations(); // (1) AggregationBucketResult result = (AggregationBucketResult) aggregates.get("type"); // (2) List<AggregationBucketDetails> buckets = result.getBuckets(); // (3) for (AggregationBucketDetails detail : buckets) { // (4)     detail.getKey(); // (5)     detail.getDocCount(); // (6) }  ``` |

1. From the search response, not only can you retrieve the results (as in previous examples), but when an aggregation is requested you can also retrieve the aggregation result.
2. Since multiple aggregations can be requested, you can retrieve a specific aggregation result by name. (You would probably want to type\-check this before the explicit cast.)
3. If the result is to a request that produces aggregation buckets, there will be bucket\-specific details within it.
4. You can iterate through these details...
5. ...to retrieve the key of the bucket (in the example this would be the type of asset: table, column, etc).
6. ...to retrieve the number of results that match that bucket key (in the example, how many tables, columns, etc there are in the results).

| Build a bucket aggregation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient() request = (     FluentSearch.select() # (1)     .aggregate("type", Asset.TYPE_NAME.bucket_by()) # (2)     .sort(Asset.CREATE_TIME.order()) ).to_request() # (3) results = client.asset.search(criteria=request) # (4)  ``` |

1. Start building a query from a FluentSearch, using its `select()` method.
2. Add an aggregation by chaining one or more `aggregate()` methods, and passing:

    * Any arbitrary key you want, which you'll use to look up the results of the aggregation in the response. You can add as many aggregations as you want, but each must have a unique key to look up its unique results.
        * The field you want to aggregate, along with the kind of aggregation you want to do on that field. This example will bucket the results based on the distinct types of assets (tables, columns, etc).
3. You can then turn these criteria into a search request using the `to_request()` helper.
4. And once you have a request, you can then run the search.

| Do something with the results | |
| --- | --- |
| ``` 12 13 14 15 16 ``` | ``` result = results.aggregations["type"] # (1) buckets = result.buckets: # (2) for detail in buckets: # (3)     detail.key # (4)     detail.doc_count # (5)  ``` |

1. Since multiple aggregations can be requested, you can retrieve a specific aggregation result by name.
2. If the result is to a request that produces aggregation buckets, there will be bucket\-specific details within it.
3. You can iterate through these details...
4. ...to retrieve the key of the bucket (in the example this would be the type of asset: table, column, etc).
5. ...to retrieve the number of results that match that bucket key (in the example, how many tables, columns, etc there are in the results).

| Build a bucket aggregation | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val request = client.assets.select() // (1)     .aggregate("type", Asset.TYPE_NAME.bucketBy()) // (2)     .sort(Asset.CREATE_TIME.order(SortOrder.Desc))     .toRequest() // (3) val response = request.search(client) // (4)  ``` |

1. Start building a query from a client, using its 'assets' member's `select()` method.
2. Add an aggregation by chaining one or more `aggregate()` methods, and passing:

    * Any arbitrary key you want, which you'll use to look up the results of the aggregation in the response. You can add as many aggregations as you want, but each must have a unique key to look up its unique results.
        * The field you want to aggregate, along with the kind of aggregation you want to do on that field. This example will bucket the results based on the distinct types of assets (tables, columns, etc).
3. You can then turn these criteria into a search request using the `toRequest()` helper.
4. And once you have a request, you can then run the search. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Do something with the results | |
| --- | --- |
| ```  6  7  8  9 10 11 12 ``` | ``` val aggregates = response.aggregations // (1) val result = aggregates["type"] as AggregationBucketResult // (2) val buckets = result.buckets // (3) for (detail in buckets) { // (4)     detail.key // (5)     detail.docCount // (6) }  ``` |

1. From the search response, not only can you retrieve the results (as in previous examples), but when an aggregation is requested you can also retrieve the aggregation result.
2. Since multiple aggregations can be requested, you can retrieve a specific aggregation result by name. (You would probably want to type\-check this before the explicit cast.)
3. If the result is to a request that produces aggregation buckets, there will be bucket\-specific details within it.
4. You can iterate through these details...
5. ...to retrieve the key of the bucket (in the example this would be the type of asset: table, column, etc).
6. ...to retrieve the number of results that match that bucket key (in the example, how many tables, columns, etc there are in the results).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "dsl": {     "aggregations": { // (1)       "type": {         "terms": {           "field": "__typeName.keyword"         }       }     }     "query": {       "bool": {         "filter": [           { "term": { "__typeName.keyword": "Table" }}         ]       }     },     "sort": [       { "__modificationTimestamp": { "order": "desc" }}     ]   } }  ``` |

1. Add an aggregation to your search. You can add multiple aggregations to a single search, but each must have a unique name (`type` in this example is such a name).

Metric aggregation[¶](#metric-aggregation "Permanent link")
-----------------------------------------------------------

You can also calculate metrics about your search results. With this, you can answer questions like:

> What is the average number of columns I have in tables and views in a particular schema?

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example:

Java

Python

Kotlin

Raw REST API

| Build a metric aggregation | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` IndexSearchRequest request = client.assets.select() // (1)     .aggregate("avg_columns", Table.COLUMN_COUNT.avg()) // (2)     .sort(Asset.CREATE_TIME.order(SortOrder.Desc))     .toRequest(); // (3) IndexSearchResponse response = request.search(client); // (4)  ``` |

1. Start building a query from a client, using its 'assets' member's `select()` method.
2. Add an aggregation by chaining one or more `aggregate()` methods, and passing:

    * Any arbitrary key you want, which you'll use to look up the results of the aggregation in the response. You can add as many aggregations as you want, but each must have a unique key to look up its unique results.
        * The field you want to aggregate, along with the kind of aggregation you want to do on that field. This example will calculate an average of numeric values across the results (in this case, column counts on tables).
3. You can then turn these criteria into a search request using the `toRequest()` helper.
4. And once you have a request, you can then run the search. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Do something with the results | |
| --- | --- |
| ``` 6 7 8 ``` | ``` Map<String, AggregationResult> aggregates = response.getAggregations(); // (1) AggregationMetricResult result = (AggregationMetricResult) aggregates.get("avg_columns"); // (2) result.getValue(); // (3)  ``` |

1. From the search response, not only can you retrieve the results (as in previous examples), but when an aggregation is requested you can also retrieve the aggregation result.
2. Since multiple aggregations can be requested, you can retrieve a specific aggregation result by name. (You would probably want to type\-check this before the explicit cast.)
3. If the result is to a request that produces an aggregation metric, you can retrieve the value of that calculated metric directly.

| Build a metric aggregation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset, Table from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient() request = (     FluentSearch     .select() # (1)     .aggregate("avg_columns", Table.COLUMN_COUNT.avg()) # (2)     .sort(Asset.CREATE_TIME.order()) ).to_request() # (3) results = client.asset.search(criteria=request)  ``` |

1. Start building a query from the FluentSearch, using its `select()` method.
2. Add an aggregation by chaining one or more `aggregate()` methods, and passing:

    * Any arbitrary key you want, which you'll use to look up the results of the aggregation in the response. You can add as many aggregations as you want, but each must have a unique key to look up its unique results.
        * The field you want to aggregate, along with the kind of aggregation you want to do on that field. This example will calculate an average of numeric values across the results (in this case, column counts on tables).
3. You can then turn these criteria into a search request using the `to_request()` helper.

| Do something with the results | |
| --- | --- |
| ``` 13 14 ``` | ``` result = results.aggregations['avg_columns'] # (1) result.value # (2)  ``` |

1. Since multiple aggregations can be requested, you can retrieve a specific aggregation result by name.
2. If the result is to a request that produces an aggregation metric, you can retrieve the value of that calculated metric directly.

| Build a metric aggregation | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val request = client.assets.select() // (1)     .aggregate("avg_columns", Table.COLUMN_COUNT.avg()) // (2)     .sort(Asset.CREATE_TIME.order(SortOrder.Desc))     .toRequest() // (3) val response = request.search(client) // (4)  ``` |

1. Start building a query from a client, using its 'assets' member's `select()` method.
2. Add an aggregation by chaining one or more `aggregate()` methods, and passing:

    * Any arbitrary key you want, which you'll use to look up the results of the aggregation in the response. You can add as many aggregations as you want, but each must have a unique key to look up its unique results.
        * The field you want to aggregate, along with the kind of aggregation you want to do on that field. This example will calculate an average of numeric values across the results (in this case, column counts on tables).
3. You can then turn these criteria into a search request using the `toRequest()` helper.
4. And once you have a request, you can then run the search. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Do something with the results | |
| --- | --- |
| ``` 6 7 8 ``` | ``` val aggregates = response.aggregations // (1) val result = aggregates["avg_columns"] as AggregationMetricResult // (2) result.value // (3)  ``` |

1. From the search response, not only can you retrieve the results (as in previous examples), but when an aggregation is requested you can also retrieve the aggregation result.
2. Since multiple aggregations can be requested, you can retrieve a specific aggregation result by name. (You would probably want to type\-check this before the explicit cast.)
3. If the result is to a request that produces an aggregation metric, you can retrieve the value of that calculated metric directly.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "dsl": {     "aggregations": { // (1)       "avg_columns": {         "avg": {           "field": "columnCount"         }       }     }     "query": {       "bool": {         "filter": [           { "term": { "__typeName.keyword": "Table" }}         ]       }     },     "sort": [       { "__modificationTimestamp": { "order": "desc" }}     ]   } }  ``` |

1. Add an aggregation to your search. You can add multiple aggregations to a single search, but each must have a unique name (`avg_columns` in this example is such a name).

---

1. This page is a summary of the details in the Elasticsearch Guide's [aggregation guide](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html)  [↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2022\-09\-092025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/aggregation/) to provide us with more information. 

Back to top

[Previous Paging search results](../paging/) [Next Events overview](../../events/) 

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

