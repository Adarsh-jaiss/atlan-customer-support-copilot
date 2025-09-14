# Source URL
https://developer.atlan.com/snippets/advanced-examples/search/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/search/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to search for assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to search for assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/search.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Searching for assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/search/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to search for assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/search.png
meta-twitter:title: Searching for assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Searching for assets - Developer
-->

[Skip to content](#searching-for-assets) Developer Searching for assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

Searching for assets[¶](#searching-for-assets "Permanent link")
===============================================================

Searching is a very flexible operation in Atlan. This also makes it a bit more complex to understand than the other operations. To encapsulate the full flexibility of Atlan's search, the SDK provides a dedicated `IndexSearchRequest` object and a `FluentSearch` class for configuring such a request using a fluent builder pattern.

More details on the power and flexibility of searching

See the dedicated [Searching](../../../search/) section of this site for more details on Atlan's search. This covers the various kinds of searches you can run, and the detailed attributes you can search against.

Build the query[¶](#build-the-query "Permanent link")
-----------------------------------------------------

[0\.1\.0](https://github.com/atlanhq/atlan-go/releases/tag/0.1.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v2.0.0 "Minimum version")

To run a search in Atlan, you need to define the query using Elastic's structures. While you can always use Elastic's own structures to make use of its full power, for the vast majority of cases you may find it easier to use the helpers built\-in to the SDK:

Java

Python

Kotlin

Go

Raw REST API

| Build the query | |
| --- | --- |
| ``` 1 2 3 ``` | ``` FluentSearch.FluentSearchBuilder<?,?> builder = client.assets.select() // (1)     .active() // (2)     .where(Asset.TYPE_NAME.eq(GlossaryTerm.TYPE_NAME)); // (3)  ``` |

1. You can start building a query across all assets using the `select()` method on the `assets` member of any client. You can chain as many conditions as you want:

    * `where()` is mandatory inclusion
        * `whereNot()` is mandatory exclusion
        * `whereSome()` for conditions where some of them must match
2. This helper provides a query that ensures results are active (not archived) assets.

    Equivalent Elastic query
    ```
    Query beActive = TermQuery.of(m -> m
          .field("__state")
          .value(AtlanStatus.ACTIVE.getValue()))
      ._toQuery();

    ```
3. This condition provides a query that restricts results to a specific type of assets (glossary terms in this example).

    Equivalent Elastic query
    ```
    Query beTerm = TermQuery.of(m -> m
          .field("__typeName.keyword")
          .value(GlossaryTerm.TYPE_NAME))
      ._toQuery();

    ```

| Build the query | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset, AtlasGlossaryTerm from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  builder = (     FluentSearch()  # (1)     .where(CompoundQuery.active_assets())  # (2)     .where(CompoundQuery.asset_type(AtlasGlossaryTerm))  # (3) )  ``` |

1. You can start building a query using a `FluentSearch` object. You can have as many mandatory (`where()`) conditions, mandatory exclusion (`where_not()`) conditions, and set of conditions some of which must match (`where_some()`) as you want.
2. This helper provides a query that ensures results are active (not archived) assets.
3. This helper provides a query that restricts results to a specific type of assets (glossary terms in this example).

| Build the query | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val builder = client.assets.select() // (1)     .active() // (2)     .where(Asset.TYPE_NAME.eq(GlossaryTerm.TYPE_NAME)) // (3)  ``` |

1. You can start building a query across all assets using the `select()` method on the `assets` member of any client. You can chain as many mandatory (`where()`) conditions, mandatory exclusion (`whereNot()`) conditions, and set of conditions some of which must match (`whereSome()`) as you want.
2. This helper provides a query that ensures results are active (not archived) assets.

    Equivalent Elastic query
    ```
    val beActive = TermQuery.of(m -> m
          .field("__state")
          .value(AtlanStatus.ACTIVE.getValue()))
      ._toQuery()

    ```
3. This helper provides a query that restricts results to a specific type of assets (glossary terms in this example).

    Equivalent Elastic query
    ```
    val beTerm = TermQuery.of(m -> m
          .field("__typeName.keyword")
          .value(GlossaryTerm.TYPE_NAME))
      ._toQuery()

    ```

| Build the query | |
| --- | --- |
| ``` 1 2 3 ``` | ``` builder := assets.NewFluentSearch(). // (1)     ActiveAssets(). // (2)     AssetType("AtlasGlossaryTerm"). // (3)  ``` |

1. You can start building a query using a `FluentSearch` object. You can have as many mandatory (`where()`) conditions, mandatory exclusion (`WhereNot()`) conditions, and set of conditions some of which must match (`WhereSome()`) as you want.
2. This helper provides a query that ensures results are active (not archived) assets.
3. This helper provides a query that restricts results to a specific type of assets (glossary terms in this example).

1. A `bool` query combines together multiple conditions.
2. A `filter` clause exactly matches all of the conditions, without scoring (so can be slightly faster than other scoring\-based combination mechanisms).
3. Term queries are generally used to exactly match values.
4. The `__state` field will match the status of an asset in Atlan.
5. So in this example you will only match assets that are currently ACTIVE (not archived or soft\-deleted).
6. You will also only match assets that are of a specific type, since `__typeName.keyword` will match the type of asset.

    Note these names do not exactly match attribute names

    Note that these names are field names in the search index, and may vary from the attribute names of the assets in Atlan. To find the appropriate field name and how it relates to an attribute name, use the [full model reference](../../../models/).
7. In this example, you will only match terms.

Build the request[¶](#build-the-request "Permanent link")
---------------------------------------------------------

[0\.0\.17](https://github.com/atlanhq/atlan-go/releases/tag/0.0.17 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

Once the query is defined, we can then build up the search request. The request includes not only the query, but also parameters like paging and which attributes to include in the response:

Java

Python

Kotlin

Go

Raw REST API

| Build the request | |
| --- | --- |
| ``` 4 5 6 7 8 ``` | ``` IndexSearchRequest index = builder // (1)     .pageSize(100) // (2)     .includeOnResults(GlossaryTerm.ANCHOR) // (3)     .includeOnRelations(Asset.CERTIFICATE_STATUS) // (4)     .toRequest(); // (5)  ``` |

1. You can then chain additional parameters onto the fluent search. (You could of course do this all directly as part of the same chain, you do not need to store the interim `builder` variable.)
2. The number of results to include (per page).
3. You can chain as many attributes as you want to include in each result. In this case we will return the `anchor` attribute for terms, which gives the relationship from the term to its parent glossary.
4. You can chain as many attributes to include on each related asset to each result. Since we are returning `anchor` relationships, this will ensure that the `certificateStatus` of those related glossaries is also included in each result.
5. You can now build all of this search configuration into a request.

| Build the request | |
| --- | --- |
| ``` 10 11 12 13 14 15 ``` | ``` index = (     builder  # (1)     .page_size(100)  # (2)     .include_on_results(AtlasGlossaryTerm.ANCHOR)  # (3)     .include_on_relations(Asset.CERTIFICATE_STATUS)  # (4) ).to_request()  # (5)  ``` |

1. You can then chain additional parameters onto the fluent search. (You could of course do this all directly as part of the same chain, you do not need to store the interim `builder` variable.)
2. The number of results to include (per page).
3. You can chain as many attributes as you want to include in each result. In this case we will return the `anchor` attribute for terms, which gives the relationship from the term to its parent glossary.
4. You can chain as many attributes to include on each related asset to each result. Since we are returning `anchor` relationships, this will ensure that the `certificate_status` of those related glossaries is also included in each result.
5. You can now build all of this search configuration into a request.

| Build the request | |
| --- | --- |
| ``` 4 5 6 7 8 ``` | ``` val index = builder // (1)     .pageSize(100) // (2)     .includeOnResults(GlossaryTerm.ANCHOR) // (3)     .includeOnRelations(Asset.CERTIFICATE_STATUS) // (4)     .toRequest() // (5)  ``` |

1. You can then chain additional parameters onto the fluent search. (You could of course do this all directly as part of the same chain, you do not need to store the interim `builder` variable.)
2. The number of results to include (per page).
3. You can chain as many attributes as you want to include in each result. In this case we will return the `anchor` attribute for terms, which gives the relationship from the term to its parent glossary.
4. You can chain as many attributes to include on each related asset to each result. Since we are returning `anchor` relationships, this will ensure that the `certificateStatus` of those related glossaries is also included in each result.
5. You can now build all of this search configuration into a request.

| Build the request | |
| --- | --- |
| ``` 4 5 6 7 8 ``` | ``` index := builder. // (1)     PageSize(100). // (2)     IncludeOnResults("anchor"). // (3)           IncludeOnRelations("certificateStatus"). // (4)      ToRequest() // (5)  ``` |

1. You can then chain additional parameters onto the fluent search. (You could of course do this all directly as part of the same chain, you do not need to store the interim `builder` variable.)
2. The number of results to include (per page).
3. You can chain as many attributes as you want to include in each result. In this case we will return the `anchor` attribute for terms, which gives the relationship from the term to its parent glossary.
4. You can chain as many attributes to include on each related asset to each result. Since we are returning `anchor` relationships, this will ensure that the `certificateStatus` of those related glossaries is also included in each result.
5. You can now build all of this search configuration into a request for executing.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "dsl": { // (1)     "from": 0, // (2)     "size": 100,     "query": {       // (3)     },     "track_total_hits": true // (4)   },   "attributes": [ // (5)     "anchor"   ],   "relationAttributes": [ // (6)     "certificateStatus"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false, // (7)   "excludeClassifications": false }  ``` |

1. A query should always be defined within the `dsl` portion of the request.
2. In addition to the query, you can specify `from` and `size` parameters for pagination.
3. The query itself should be provided within the `query` portion of the `dsl`. Here you would use the query body provided in the earlier step.
4. You must set `track_total_hits` to `true` if you want an exact count of the number of results (in particular for pagination).
5. The list of attributes to include in each result. In this case we will return the `anchor` attribute for terms, which gives the relationship from the term to its parent glossary.
6. The list of attributes to include on each relationship that is included in each result. Since we are returning `anchor` relationships, this will ensure that the `certificateStatus` of those related glossaries is also included in each result.
7. You can also choose whether to include other related information, such as the terms and Atlan tags assigned to each result. In general, only include the information you require — this will provide the best performance.

(Optional) Build request directly from JSON[¶](#optional-build-request-directly-from-json "Permanent link")
-----------------------------------------------------------------------------------------------------------

[5\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/5.0.0 "Minimum version")

While we recommend [using `FluentSearch`](./#build-the-request) to build search requests, there might be scenarios where quick prototyping or testing of search queries is needed. For such use cases, we also support directly constructing search requests from raw JSON.

Java

Python

Kotlin

Raw REST API

Coming soon

| Build request directly from JSON | |
| --- | --- |
| ``` 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 ``` | ``` from pyatlan.model.search import IndexSearchRequest  raw_json_payload = r"""  { "dsl": {     "from_": 0,     "size": 100,     "aggregations": {},     "track_total_hits": true,     "query": {     "bool": {         "filter": [         {             "term": {             "__state": {                 "value": "ACTIVE",                 "case_insensitive": false             }             }         },         {             "term": {             "__typeName.keyword": {                 "value": "AtlasGlossaryTerm",                 "case_insensitive": false             }             }         }         ]     }     },     "sort": [     {         "__guid": {         "order": "asc"         }     }     ] }, "attributes": [     "anchor" ], "relation_attributes": [     "certificateStatus" ], "suppress_logs": true, "show_search_score": false, "exclude_meanings": false } """ index = IndexSearchRequest.parse_raw(raw_json_payload) # (1)  ``` |

1. You can use Pydantic's [`.parse_raw(raw_json_payload)`](https://docs.pydantic.dev/1.10/usage/models/#helper-functions) method to parse a JSON string and construct an SDK `IndexSearchRequest` object. If you're using a dictionary instead of a JSON string, use [`.parse_obj(dict_payload)`](https://docs.pydantic.dev/1.10/usage/models/#helper-functions) instead.

Coming soon

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "dsl": { // (1)     "from": 0, // (2)     "size": 100,     "query": {       // (3)     },     "track_total_hits": true // (4)   },   "attributes": [ // (5)     "anchor"   ],   "relationAttributes": [ // (6)     "certificateStatus"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false, // (7)   "excludeClassifications": false }  ``` |

1. A query should always be defined within the `dsl` portion of the request.
2. In addition to the query, you can specify `from` and `size` parameters for pagination.
3. The query itself should be provided within the `query` portion of the `dsl`. Here you would use the query body provided in the earlier step.
4. You must set `track_total_hits` to `true` if you want an exact count of the number of results (in particular for pagination).
5. The list of attributes to include in each result. In this case we will return the `anchor` attribute for terms, which gives the relationship from the term to its parent glossary.
6. The list of attributes to include on each relationship that is included in each result. Since we are returning `anchor` relationships, this will ensure that the `certificateStatus` of those related glossaries is also included in each result.
7. You can also choose whether to include other related information, such as the terms and Atlan tags assigned to each result. In general, only include the information you require — this will provide the best performance.

Run the search[¶](#run-the-search "Permanent link")
---------------------------------------------------

[0\.1\.0](https://github.com/atlanhq/atlan-go/releases/tag/0.1.0 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To now run the search, we call the `search()` method against our request object:

Java

Python

Kotlin

Go

Raw REST API

| Run the search | |
| --- | --- |
| ```  9 10 ``` | ``` IndexSearchResponse response = index.search(client); log.info(response.getApproximateCount()) // (1)  ``` |

1. The `getApproximateCount()` method gives the total number of results overall (not restricted by page).

| Run the search | |
| --- | --- |
| ``` 16 17 ``` | ``` results = client.asset.search(index) print(results.count) # (1)  ``` |

1. The `count` property gives the total number of results overall (not restricted by page).

| Run the search | |
| --- | --- |
| ```  9 10 ``` | ``` val response = index.search(client) log.info(response.approximateCount); // (1)  ``` |

1. The `.approximateCount` member gives the total number of results overall (not restricted by page).

| Run the search | |
| --- | --- |
| ```  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` results, _ := assets.Search(*index) // (1) fmt.Printf("Found %d assets\n", results.Count()) // (2)  entities, errIter := results.Iter() // (3)  for asset := range entities { // (4)     fmt.Println("asset name:", *asset.Name) }  if err := <-errIter; err != nil { // (5)     fmt.Println("Error during iteration:", err) }  ``` |

1. This will execute the search and return the first page of results.
2. The `ApproximateCount` property gives the total number of results overall (not restricted by page).
3. When working with paginated search results, the `.Iter()` method
provides a convenient way to iterate over all results without manually handling pagination.
4. You can then directly iterate through the search results.
The SDK handles pagination for you, fetching each page lazily as needed.
5. If an error occurs during iteration (e.g: a failed API request),
it is sent to the `errIter` channel. The iteration stops, and you can handle the error accordingly.

Implicit in the previous step

Actually running the search is implicit in the example above for the previous raw API step.

Iterate through results[¶](#iterate-through-results "Permanent link")
---------------------------------------------------------------------

### One page of results[¶](#one-page-of-results "Permanent link")

[0\.1\.0](https://github.com/atlanhq/atlan-go/releases/tag/0.1.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

To iterate through one page of results, loop through the list of assets:

Java

Python

Kotlin

Go

Raw REST API

| Iterate through one page of results | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` List<Asset> results = response.getAssets(); // (1) for (Asset result : results) { // (2)     if (result instanceof GlossaryTerm) {         GlossaryTerm term = (GlossaryTerm) result; // (3)     } }  ``` |

1. The page of results itself can be accessed through the `getAssets()` method on the response.
2. You can then iterate through these results from a single page.
3. Remember that each result is a generic `Asset`. In our example we searched for a specific type, but another example may search for any asset with a given name (or Atlan tag) — so each result could be a different type. So again we should check and cast the results as\-needed.

| Iterate through one page of results | |
| --- | --- |
| ``` 18 19 20 ``` | ``` for asset in results.current_page(): # (1)     if isinstance(asset, AtlasGlossaryTerm): # (2)         term = asset  ``` |

1. You can iterate through the results from a single page.
2. Remember per the type hints each result is a generic `Asset`. In our example we searched for a specific type, but another example may search for any asset with a given name (or Atlan tags) \- so each result could be a different type. So if we want to take allow an IDE to provide better code completion, we need include an `if isinstance(asset, asset_type)` where `asset_type` is the type of the asset we want the IDE to know about. Inside the IDE will know the object is of the specified type. It's also a good practice that will prevent run\-time errors if an asset is not of the expected type.

| Iterate through one page of results | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` val results = response.assets // (1) for (result in results) { // (2)     if (result is GlossaryTerm) {         val term = result // (3)     } }  ``` |

1. The page of results itself can be accessed through the `.assets` member on the response.
2. You can then iterate through these results from a single page.
3. Remember that each result is a generic `Asset`. In our example we searched for a specific type, but another example may search for any asset with a given name (or Atlan tag) — so each result could be a different type. So again we should check and cast the results as\-needed.

| Iterate through one page of results | |
| --- | --- |
| ``` 14 15 16 17 18 19 20 ``` | ``` current, _ := results.CurrentPage()  // (1)  for _, asset := range current.Entities {     if *asset.TypeName == "AtlasGlossaryTerm" { // (2)         // Do something with AtlasGlossaryTerm     } }  ``` |

1. You can iterate through the results from a single page.
2. You can filter the asset based on the typename and perform operations on the asset.

Each object in `entities` is a matching asset

Each item in the `entities` array of the response will give details about a matching asset.

### Multiple pages of results[¶](#multiple-pages-of-results "Permanent link")

[0\.0\.17](https://github.com/atlanhq/atlan-go/releases/tag/0.0.17 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.0.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

To iterate through multiple pages of results:

Java

Python

Kotlin

Go

Raw REST API

| Iterate through multiple pages of results | |
| --- | --- |
| ``` 11 12 13 ``` | ``` for (Asset result : response) { // (1)     // Do something with each result in the page of results... }  ``` |

1. You can simply iterate over the reponse itself. This will lazily load and loop through each page of results until the loop finishes or you break out of it. (You could also use `response.forEach()`, which uses the same iteratable\-based implementation behind\-the\-scenes.)

| Iterate through multiple pages of results (streaming) | |
| --- | --- |
| ``` 11 12 13 14 ``` | ``` response.stream() // (1)     .limit(100) // (2)     .filter(a -> !(a instanceof ILineageProcess)) // (3)     .forEach(a -> log.info("Do something with each result: {}", a)); // (4)  ``` |

1. Alternatively, you can also stream the results direct from the response. This will also lazily load and loop through each page of results.

    Can be chained without creating a request in\-between

    You can actually chain the `stream()` method directly onto the end of your query and request construction, without creating a `request` or `response` object in\-between.
2. With streaming, you can apply your own limits to the maximum number of results you want to process.

    Independent of page size

    Note that this is independent of page size. You could page through results 50 at a time, but only process a maximum of 100 total results this way. Since the results are lazily\-loaded when streaming, only the first two pages of results would be retrieved in such a scenario.
3. You can also apply your own logical filters to the results.

    Push\-down as much as you can to the query

    You should of course push\-down as many of the filters as you can to the query itself, but if you have a particular complex check to apply that cannot be encoded in the query this can be a useful secondary filter over the results.
4. The `forEach()` on the resulting stream will then apply whatever actions you want with the results that come through.

| Iterate through multiple pages of results one page at a time | |
| --- | --- |
| ``` 18 19 20 21 22 23 ``` | ``` while results.current_page(): # (1)     for asset in results.current_page(): # (2)         if isinstance(asset, AtlasGlossaryTerm): # (3)             term = asset     if not results.next_page(): # (4)         break # (5)  ``` |

1. The `current_page()` method returns a `list` of the assets for the current page. If there are none then an empty `list` will be returned.
2. Iterate through the assets in the current page.
3. Remember per the type hints each result is a generic `Asset`. In our example we searched for a specific type, but another example may search for any asset with a given name (or classifications) \- so each result could be a different type. So if we want to take allow an IDE to provide better code completion, we need include an `if isinstance(asset, asset_type)` where `asset_type` is the type of the asset we want the IDE to know about. Inside the IDE will know the object is of the specified type. It's also a good practice that will prevent run\-time errors if an asset is not of the expected type.
4. The `next_pages()` method retrieves the next page of results and return `True` if more assets are available and `False` if they are not.
5. Break out of the `While` loop if no more assets are available.

| Alternatively iterate through all the pages of results | |
| --- | --- |
| ``` 18 19 20 ``` | ``` for asset in results: # (1)     if isinstance(asset, AtlasGlossaryTerm): # (2)         term = asset  ``` |

1. This will iterate through all the results without the need to be concerned with pages.

    Iterating over results produces a [Generator](https://wiki.python.org/moin/Generators)

    This means that results are retrieved from the backend a page at time. This also means that you can only iterate over the results once.
2. Remember that each result is a generic `Asset`. In our example we searched for a specific type, but another example may search for any asset with a given name (or classification) — so each result could be a different type. So again we should check and cast the results as\-needed.

| Iterate through multiple pages of results | |
| --- | --- |
| ``` 11 12 13 ``` | ``` for (result in response) { // (1)     // Do something with each result in the page of results... }  ``` |

1. You can simply iterate over the reponse itself. This will lazily load and loop through each page of results until the loop finishes or you break out of it. (You could also use `response.forEach{ }`, which uses the same iteratable\-based implementation behind\-the\-scenes.)

| Iterate through multiple pages of results (streaming) | |
| --- | --- |
| ``` 11 12 13 14 ``` | ``` response.stream() // (1)     .limit(100) // (2)     .filter { it !is ILineageProcess } // (3)     .forEach { log.info("Do something with each result: {}", it) } // (4)  ``` |

1. Alternatively, you can also stream the results direct from the response. This will also lazily load and loop through each page of results.

    Can be chained without creating a request in\-between

    You can actually chain the `stream()` method directly onto the end of your query and request construction, without creating a `request` or `response` object in\-between.
2. With streaming, you can apply your own limits to the maximum number of results you want to process.

    Independent of page size

    Note that this is independent of page size. You could page through results 50 at a time, but only process a maximum of 100 total results this way. Since the results are lazily\-loaded when streaming, only the first two pages of results would be retrieved in such a scenario.
3. You can also apply your own logical filters to the results.

    Push\-down as much as you can to the query

    You should of course push\-down as many of the filters as you can to the query itself, but if you have a particular complex check to apply that cannot be encoded in the query this can be a useful secondary filter over the results.
4. The `forEach{ }` on the resulting stream will then apply whatever actions you want with the results that come through.

| Iterate through multiple pages of results one page at a time | |
| --- | --- |
| ``` 14 15 16 17 18 19 20 21 22 ``` | ``` entities, errIter := results.Iter() // (1)  for asset := range entities { // (2)     fmt.Println("asset name:", *asset.Name) }  if err := <-errIter; err != nil { // (3)     fmt.Println("Error during iteration:", err) }  ``` |

1. When working with paginated search results, the `.Iter()` method
provides a convenient way to iterate over all results without manually handling pagination.
2. You can then directly iterate through the search results.
The SDK handles pagination for you, fetching each page lazily as needed.
3. If an error occurs during iteration (e.g: a failed API request),
it is sent to the `errIter` channel. The iteration stops, and you can handle the error accordingly.

Use the `searchParameters.query` of the response

Each search response includes a `searchParameters` with a nested `query` string. This query string gives the details of the query that was run to produce the response — so to get a next page you can:

1. Use this `query` string from the response to start building a new query using the same logic.
2. Add the page size to the `from` parameter embedded in that query string, to give the starting point for the next page of results.
3. Re\-include any `attributes` or `relationAttributes` from the query string into the new query.
4. Send this new query to retrieve the next page of results.

---

2022\-09\-142025\-03\-26

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/search/) to provide us with more information. 

Back to top

[Previous Get all assets that...](../../common-examples/finding/) [Next Search examples](../../common-examples/finding/examples/) 

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

