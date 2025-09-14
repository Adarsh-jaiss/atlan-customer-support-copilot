# Source URL
https://developer.atlan.com/search/paging/

================================================================================

<!--
canonical: https://developer.atlan.com/search/paging/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to page through search results in Atlan and limit the number of results per page.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to page through search results in Atlan and limit the number of results per page.
meta-og-image: https://developer.atlan.com/assets/images/social/search/paging.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Paging search results - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/paging/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to page through search results in Atlan and limit the number of results per page.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/paging.png
meta-twitter:title: Paging search results - Developer
meta-viewport: width=device-width,initial-scale=1
title: Paging search results - Developer
-->

[Skip to content](#paging-search-results) Developer Paging search results Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

[/api/meta/search/indexsearch (POST)](../../endpoints/#tag:apimetasearchindexsearch-post)

Paging search results[¶](#paging-search-results "Permanent link")
=================================================================

Automatically (via SDK)[¶](#automatically-via-sdk "Permanent link")
-------------------------------------------------------------------

Our SDKs are designed to simplify paging, so you do not need to worry about the underlying details. You can simply iterate through a search response and the SDK will automatically fetch the next page(s) when it needs to (lazily).

The SDKs will even add a default sort by GUID to ensure stable results across pages, even when you do not provide any sorting criteria yourself.

Java

Python

Kotlin

Raw REST API

| Automatic paging | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` client.assets.select() // (1)     .pageSize(50) // (2)     .stream() // (3)     .limit(100) // (4)     .filter(a -> !(a instanceof ILineageProcess)) // (5)     .forEach(a -> log.info("Do something with each result: {}", a)); // (6)  ``` |

1. You can start building a query across all assets using the `select()` method on the `assets` member of any client. You can chain as many mandatory (`where()`) conditions, mandatory exclusion (`whereNot()`) conditions, and set of conditions some of which must match (`whereSome()`) as you want.
2. The number of results to include (per page).
3. You can stream the results direct from the response. This will also lazily load and loop through each page of results.

    Can be chained without creating a request in\-between

    You can actually chain the `stream()` method directly onto the end of your query and request construction, without creating a `request` or `response` object in\-between.
4. With streaming, you can apply your own limits to the maximum number of results you want to process.

    Independent of page size

    Note that this is independent of page size. You could page through results 50 at a time, but only process a maximum of 100 total results this way. Since the results are lazily\-loaded when streaming, only the first two pages of results would be retrieved in such a scenario.
5. You can also apply your own logical filters to the results.

    Push\-down as much as you can to the query

    You should of course push\-down as many of the filters as you can to the query itself, but if you have a particular complex check to apply that cannot be encoded in the query this can be a useful secondary filter over the results.
6. The `forEach()` on the resulting stream will then apply whatever actions you want with the results that come through.

| Build the query | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset, Process from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  builder = (     FluentSearch()  # (1)     .where(CompoundQuery.active_assets())  # (2) ).to_request()  # (3) results = client.asset.search(index)  # (4) for asset in results: # (5)     if not isinstance(asset, Process): # (6)         non_process = asset  ``` |

1. You can start building a query using a `FluentSearch` object. You can have as many mandatory (`where()`) conditions, mandatory exclusion (`where_not()`) conditions, and set of conditions some of which must match (`where_some()`) as you want.
2. This helper provides a query that ensures results are active (not archived) assets.
3. You can now build all of this search configuration into a request.
4. You can then run the search against this request.
5. This will iterate through all the results without the need to be concerned with pages.

    Iterating over results produces a [Generator](https://wiki.python.org/moin/Generators)

    This means that results are retrieved from the backend a page at time. This also means that you can only iterate over the results once.
6. Remember that each result is a generic `Asset`. You should of course push\-down as many of the filters as you can to the query itself, but if you have a particular complex check to apply that cannot be encoded in the query this can be a useful secondary filter over the results.

| Automatic paging | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` client.assets.select() // (1)     .pageSize(50) // (2)     .stream() // (3)     .limit(100) // (4)     .filter { it !is ILineageProcess } // (5)     .forEach { log.info { "Do something with each result: $it" } } // (6)  ``` |

1. You can start building a query across all assets using the `select()` method on the `assets` member of any client. You can chain as many mandatory (`where()`) conditions, mandatory exclusion (`whereNot()`) conditions, and set of conditions some of which must match (`whereSome()`) as you want.
2. The number of results to include (per page).
3. You can stream the results direct from the response. This will also lazily load and loop through each page of results.

    Can be chained without creating a request in\-between

    You can actually chain the `stream()` method directly onto the end of your query and request construction, without creating a `request` or `response` object in\-between.
4. With streaming, you can apply your own limits to the maximum number of results you want to process.

    Independent of page size

    Note that this is independent of page size. You could page through results 50 at a time, but only process a maximum of 100 total results this way. Since the results are lazily\-loaded when streaming, only the first two pages of results would be retrieved in such a scenario.
5. You can also apply your own logical filters to the results.

    Push\-down as much as you can to the query

    You should of course push\-down as many of the filters as you can to the query itself, but if you have a particular complex check to apply that cannot be encoded in the query this can be a useful secondary filter over the results.
6. The `forEach()` on the resulting stream will then apply whatever actions you want with the results that come through.

Use an SDK

The SDKs manage making multiple requests and parsing results to make subsequent requests in the most efficient way possible. You will need to make many different API requests if you want to do the same directly via the raw REST APIs.

Manually (via Elastic)[¶](#manually-via-elastic "Permanent link")
-----------------------------------------------------------------

For curious minds, though, you can page through search results using a combination of the following properties[1](#fn:1):

| Property | Description | Example |
| --- | --- | --- |
| `from` | Indicates the starting point for the results. | `0` |
| `size` | Indicates how many results to include per response (page). As a general rule of thumb we would recommend a size from `20`\-`100`, making `50` a common starting point. | `50` |
| `track_total_hits` | Includes an accurate number of total results, if set to `true`. With its default value on the raw REST APIs (`false`) the maximum number of results you will see in the `approximateCount` field in the response is 10000\. (Again, the SDKs set this to `true` by default to avoid this confusion.) | `true` |

Constraints with this approach

To have the most consistent results you can when paging, you must always use some sorting criteria and include at least one sorting criteria as a tie\-breaker. (You must also keep that criteria the same for every page.)

Furthermore, as you get to larger `from` sizes (more than \~10,000\) Elastic will begin to use significantly more resources to process your paging. To reduce this impact, if you need to page through many results you should implement your own timestamp\-based offset mechanism so that the `from` size is kept consistently low.

(Again, the SDKs do both of these for you automatically.)

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

For example:

Java

Python

Kotlin

Raw REST API

| Annotated sort options, as you would define them in the Java SDK | |
| --- | --- |
| ``` 1 2 ``` | ``` SortOptions byUpdate = Asset.UPDATE_TIME.order(SortOrder.Desc); // (1) SortOptions byGuid = Asset.GUID.order(SortOrder.Asc); // (2)  ``` |

1. Include any of your own sorting, like this example putting the most recently\-updated assets first in the results.
2. Also consider a tie\-breaker sorting mechanism. In this case, we use an asset's GUID to further sort any results that have the same last modified timestamp, since GUID is guaranteed to be unique for every asset.

| Build the request | |
| --- | --- |
| ```  3  4  5  6  7  8  9 10 11 ``` | ``` IndexSearchRequest index = IndexSearchRequest.builder(   IndexSearchDSL.builder(someQuery) // (1)       .from(100) // (2)       .size(50) // (3)       .trackTotalHits(true) // (4)       .sortOption(byUpdate) // (5)       .sortOption(byGuid)       .build())     .build();  ``` |

1. You still need a query, to get some results
2. Starting point for the page of results being requested. In this example, you would be asking for the third page. (`0` would be from `0-50` for the first page, `50` would be from `50-100` for the second page, and this gives us `100-150` for the third page.)
3. The number of results per page (in this example, `50` results per page).
4. Enable `trackTotalHits` so that your response includes an accurate total number of results. (Actually the Java SDK enables this by default, so this step is redundant unless you want to turn it *off*.)
5. And we need to include the sorting criteria we defined just above.

| Iterate through multiple pages of results | |
| --- | --- |
| ``` 12 13 14 15 16 17 18 19 20 21 ``` | ``` IndexSearchResponse response = index.search(client); // (1) long totalResults = response.getApproximateCount(); // (2) for (Asset result : response) { // (3)     // Do something with each result of the search... } response.forEach(a -> log.info("Found asset: {}", a.getGuid())); // (4) response.stream() // (5)     .filter(a -> !(a instanceof ILineageProcess)) // (6)     .limit(100) // (7)     .forEach(a -> log.info("Found asset: {}", a.getGuid())) // (8)  ``` |

1. Keep the response object from the initial search, as it has a helper method for paging.
2. Since we set `trackTotalHits` to `true` (the default for the Java SDK even if we do not set it), the `.getApproximateCount()` will give us the total number of results. This can be over 10,000\.
3. Iterate through all the results, across all pages (each page is lazily\-loaded, so you can break out at any time without actually retrieving all pages of results).
4. Alternatively, you can iterate through all the results using `forEach()` on the response. (This uses the same underlying iterable\-based implementation.)
5. Alternatively, you can stream the results. Streaming will also lazily\-load only the pages of results necessary to meet the chained criteria for processing the stream.
6. When streaming, you can further filter the results to apply any complex filtering logic you could not push\-down as part of the query itself.
7. When streaming, you can also limit the total number of results you want to process — independently of the page size.
8. Don't forget to actually *do* something with the results in the stream

| Annotated sort options, as you would define them in the Python SDK | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import SortOrder from pyatlan.model.assets import Referenceable from pyatlan.model.search import IndexSearchRequest, DSL  by_update = Referenceable.UPDATE_TIME.order(SortOrder.DESCENDING)  # (1) by_guid = Referenceable.GUID.order(SortOrder.ASCENDING)  # (2)  ``` |

1. Include any of your own sorting, like this example putting the most recently\-updated assets first in the results.
2. Also consider a tie\-breaker sorting mechanism. In this case, we use an asset's GUID to further sort any results that have the same last modified timestamp, since GUID is guaranteed to be unique for every asset.

| Build the request | |
| --- | --- |
| ```  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` index = IndexSearchRequest(     dsl=DSL(         query=someQuery,  # (1)         from_=100,  # (2)         size=50,  # (3)         track_total_hits=True,  # (4)         sort=[  # (5)             by_update,             by_guid         ],     ) )  ``` |

1. You still need a query, to get some results .
2. Starting point for the page of results being requested. In this example, you would be asking for the third page. (`0` would be from `0-50` for the first page, `50` would be from `50-100` for the second page, and this gives us `100-150` for the third page.)
3. The number of results per page (in this example, `50` results per page).
4. Enable `track_total_hits` so that your response includes an accurate total number of results. (Actually the Python SDK enables this by default, so this step is redundant unless you want to turn it *off*.)
5. And we need to include the sorting criteria we defined just above.

| Iterate through multiple pages of results | |
| --- | --- |
| ``` 20 21 22 23 24 ``` | ``` client = AtlanClient() response = client.asset.search(index)  # (1) total_results = response.count  # (2) for result in response:  # (3)     # Do something with each result of the search...  ``` |

1. Keep the response object from the initial search, as it has a helper method for paging.
2. Since we set `track_total_hits` to `True` (the default for the Python SDK even if we do not set it), the `.count` property will give us the total number of results. This can be over 10,000\.
3. Iterate through all the results, across all pages (each page is lazily\-loaded, so you can break out at any time without actually retrieving all pages of results). Don't forget to actually *do* something with the results in the stream

| Annotated sort options, as you would define them in the Java SDK | |
| --- | --- |
| ``` 1 2 ``` | ``` val byUpdate = Asset.UPDATE_TIME.order(SortOrder.Desc) // (1) val byGuid = Asset.GUID.order(SortOrder.Asc) // (2)  ``` |

1. Include any of your own sorting, like this example putting the most recently\-updated assets first in the results.
2. Also consider a tie\-breaker sorting mechanism. In this case, we use an asset's GUID to further sort any results that have the same last modified timestamp, since GUID is guaranteed to be unique for every asset.

| Build the request | |
| --- | --- |
| ```  3  4  5  6  7  8  9 10 11 ``` | ``` val index = IndexSearchRequest.builder(   IndexSearchDSL.builder(someQuery) // (1)       .from(100) // (2)       .size(50) // (3)       .trackTotalHits(true) // (4)       .sortOption(byUpdate) // (5)       .sortOption(byGuid)       .build())     .build()  ``` |

1. You still need a query, to get some results .
2. Starting point for the page of results being requested. In this example, you would be asking for the third page. (`0` would be from `0-50` for the first page, `50` would be from `50-100` for the second page, and this gives us `100-150` for the third page.)
3. The number of results per page (in this example, `50` results per page).
4. Enable `trackTotalHits` so that your response includes an accurate total number of results. (Actually the Java SDK enables this by default, so this step is redundant unless you want to turn it *off*.)
5. And we need to include the sorting criteria we defined just above.

| Iterate through multiple pages of results | |
| --- | --- |
| ``` 12 13 14 15 16 17 18 19 20 21 ``` | ``` val response = index.search(client) // (1) val totalResults = response.approximateCount // (2) for (result in response) { // (3)     // Do something with each result of the search... } response.forEach { log.info { "Found asset: ${it.guid}" } } // (4) response.stream() // (5)     .filter { it !is ILineageProcess } // (6)     .limit(100) // (7)     .forEach { log.info { "Found asset: ${it.guid}" } } // (8)  ``` |

1. Keep the response object from the initial search, as it has a helper method for paging.
2. Since we set `trackTotalHits` to `true` (the default for the Java SDK even if we do not set it), the `.getApproximateCount()` will give us the total number of results. This can be over 10,000\.
3. Iterate through all the results, across all pages (each page is lazily\-loaded, so you can break out at any time without actually retrieving all pages of results).
4. Alternatively, you can iterate through all the results using `forEach()` on the response. (This uses the same underlying iterable\-based implementation.)
5. Alternatively, you can stream the results. Streaming will also lazily\-load only the pages of results necessary to meet the chained criteria for processing the stream.
6. When streaming, you can further filter the results to apply any complex filtering logic you could not push\-down as part of the query itself.
7. When streaming, you can also limit the total number of results you want to process — independently of the page size.
8. Don't forget to actually *do* something with the results in the stream

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "dsl": {     "from": 100, // (1)     "size": 50, // (2)     "track_total_hits": true, // (3)     "query": {...}, // (4)     "sort": [ // (5)       { "__modificationTimestamp": { "order": "desc" }}, // (6)       { "__guid": { "order": "asc" }} // (7)     ]   } }  ``` |

1. Starting point for the page of results being requested. In this example, you would be asking for the third page. (`0` would be from `0-50` for the first page, `50` would be from `50-100` for the second page, and this gives us `100-150` for the third page.)
2. The number of results per page (in this example, `50` results per page).
3. Enable `track_total_hits` so that your response includes an accurate total number of results.
4. You still need a query, to get some results .
5. When paging, we should always sort the results (for consistency across the pages).
6. Include any of your own sorting, like this example putting the most recently\-updated assets first in the results.
7. Also consider a tie\-breaker sorting mechanism. In this case, we use the GUID of an asset to further sort any results that have the same last modified timestamp.

| Annotated response, in plain JSON | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "queryType": "INDEX",   "searchParameters": {       "showSearchScore": false,       "suppressLogs": false,       "allowDeletedRelations": false,       "query": "{\"from\":100,\"size\":50,\"track_total_hits\":true,\"query\":{...},\"sort\":[{\"__modificationTimestamp\":\"asc\"},{\"__guid\":\"asc\"}]}" // (1)   },   "entities": [ // (2)     {...},     {...},     ...   ],   "approximateCount": 24631 // (3) }  ``` |

1. Note that every response to a search includes the query that was run. You can deconstruct this programmatically to always determine the `from` you will need for the next page of results. (Basically: `from = from + size`.) And in fact, since you can programmatically extract both the query and sorting criteria from this you have everything you need to get the next page — the `query`, the `from`, the `size` and the `sort`.
2. The results themselves are the objects in the `entities` array. The size of this array will be *at most* `size` elements. Of course, your final page of results may not have a complete page of results, so it is possible that this array will be *less* than `size` (in particular, when you are on the final page).
3. Since the request sets `track_total_hits` to `true`, the `approximateCount` in the response will have an accurate number of total results. Note that this can go beyond 10,000\.

---

1. If you're familiar with Elasticsearch there are an alternative paging options using `search_after` and point\-in\-time (PIT) state preservation. (There also used to be scrolling, but this is no longer recommended by Elasticsearch.) We do not currently expose the `search_after` or PIT approaches through Atlan's search. However, you should still be able to page beyond the first 10,000 results using the approach outlined above.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2022\-09\-112025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/paging/) to provide us with more information. 

Back to top

[Previous Sorting search results](../sort/) [Next Aggregating search results](../aggregation/) 

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

