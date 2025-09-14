# Source URL
https://developer.atlan.com/search/sort/

================================================================================

<!--
canonical: https://developer.atlan.com/search/sort/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to sort search results in Atlan by one or multiple properties using Elasticsearch's query DSL.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to sort search results in Atlan by one or multiple properties using Elasticsearch's query DSL.
meta-og-image: https://developer.atlan.com/assets/images/social/search/sort.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Sorting search results - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/sort/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to sort search results in Atlan by one or multiple properties using Elasticsearch's query DSL.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/sort.png
meta-twitter:title: Sorting search results - Developer
meta-viewport: width=device-width,initial-scale=1
title: Sorting search results - Developer
-->

[Skip to content](#sorting-search-results) Developer Sorting search results Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

[/api/meta/search/indexsearch (POST)](../../endpoints/#tag:apimetasearchindexsearch-post)

Sorting search results[¶](#sorting-search-results "Permanent link")
===================================================================

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can sort search results by one or multiple properties.

Limited to iterating through less than 100,000 results

You can sort any number of results; however, if you plan to [page](../paging/) through more than 100,000 total results you cannot specify any sort order.

Java

Python

Kotlin

Raw REST API

| Annotated sort options, as you would define them in the Java SDK | |
| --- | --- |
| ``` 1 2 ``` | ``` SortOptions byUpdate = Asset.UPDATE_TIME.order(SortOrder.Desc); // (1) SortOptions byCreation = Asset.CREATE_TIME.order(SortOrder.Asc); // (2)  ``` |

1. For each property you can specify whether to sort the results in `desc`ending order or `asc`ending order. In this example our first results would be the ones changed most recently.

    Equivalent sort option from Elastic
    ```
    SortOptions byUpdate = SortOptions.of(s -> s
        .field(FieldSort.of(f -> f // (1)
            .field("__modificationTimestamp")
            .order(SortOrder.Desc))));

    ```
2. In this example, our first results would be the oldest ones (based on when they were created).

    Equivalent sort option from Elastic
    ```
    SortOptions byCreation = SortOptions.of(s -> s
        .field(FieldSort.of(f -> f // (2)
            .field("__timestamp")
            .order(SortOrder.Asc))));

    ```

| Build the request | |
| --- | --- |
| ``` 3 4 5 6 7 ``` | ``` IndexSearchRequest index = client.assets.select()     .where(...) // (1)     .sort(byUpdate) // (2)     .sort(byCreation) // (3)     .toRequest();  ``` |

1. You still need a query, to get some results to sort.
2. Note that the sort itself is an array — hence we can add multiple sort options and they'll be evaluated in order (to sort by multiple properties). In this example our first results would be the ones changed most recently.
3. For any results that have identical modification dates, we would then sort within those results to present the oldest (created) results first.

| Run the search | |
| --- | --- |
| ```  8  9 10 11 ``` | ``` IndexSearchResponse response = index.search(client); for (Asset result : response) {     // Do something with the ordered results... }  ``` |

| Annotated sort options, as you would define them in the Python SDK | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import SortOrder from pyatlan.model.assets import Referenceable from pyatlan.model.search import IndexSearchRequest, DSL  by_update = Referenceable.UPDATE_TIME.order(SortOrder.DESCENDING)  # (1) by_creation = Referenceable.CREATE_TIME.order(SortOrder.ASCENDING)  # (2)  ``` |

1. For each property you can specify whether to sort the results in descending order or ascending order. In this example our first results would be the ones changed most recently.
2. In this example, our first results would be the oldest ones (based on when they were created).

| Build the request | |
| --- | --- |
| ```  8  9 10 11 12 13 ``` | ``` index = (     FluentSearch()     .where(...)  # (1)     .sort(by_update)  # (2)     .sort(by_creation)  # (3) ).to_request()  ``` |

1. You still need a query, to get some results to sort.
2. Note that the sort itself is an array — hence we can add multiple sort options and they'll be evaluated in order (to sort by multiple properties). In this example our first results would be the ones changed most recently.
3. For any results that have identical modification dates, we would then sort within those results to present the oldest (created) results first.

| Run the search | |
| --- | --- |
| ``` 14 15 16 17 ``` | ``` client = AtlanClient(); response = client.asset.search(index) for result in response:     # Do something with the ordered results...  ``` |

| Annotated sort options, as you would define them in the Java SDK | |
| --- | --- |
| ``` 1 2 ``` | ``` val byUpdate = Asset.UPDATE_TIME.order(SortOrder.Desc) // (1) val byCreation = Asset.CREATE_TIME.order(SortOrder.Asc) // (2)  ``` |

1. For each property you can specify whether to sort the results in `desc`ending order or `asc`ending order. In this example our first results would be the ones changed most recently.

    Equivalent sort option from Elastic
    ```
    val byUpdate = SortOptions.of(s -> s
        .field(FieldSort.of(f -> f // (1)
            .field("__modificationTimestamp")
            .order(SortOrder.Desc))))

    ```
2. In this example, our first results would be the oldest ones (based on when they were created).

    Equivalent sort option from Elastic
    ```
    val byCreation = SortOptions.of(s -> s
        .field(FieldSort.of(f -> f // (2)
            .field("__timestamp")
            .order(SortOrder.Asc))))

    ```

| Build the request | |
| --- | --- |
| ``` 3 4 5 6 7 ``` | ``` val index = client.assets.select()     .where(...) // (1)     .sort(byUpdate) // (2)     .sort(byCreation) // (3)     .toRequest()  ``` |

1. You still need a query, to get some results to sort.
2. Note that the sort itself is an array — hence we can add multiple sort options and they'll be evaluated in order (to sort by multiple properties). In this example our first results would be the ones changed most recently.
3. For any results that have identical modification dates, we would then sort within those results to present the oldest (created) results first.

| Run the search | |
| --- | --- |
| ```  8  9 10 11 ``` | ``` val response = index.search(client) for (result in response) {     // Do something with the ordered results... }  ``` |

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` {   "dsl": {     "query": {...}, // (1)     "sort": [ // (2)       { "__modificationTimestamp": { "order": "desc" }}, // (3)       { "__timestamp": { "order": "asc" }} // (4)     ]   } }  ``` |

1. You still need a query, to get some results to sort.
2. Note that the sort itself is an array — hence you can sort by multiple properties.
3. For each property you can specify whether to sort the results in `desc`ending order or `asc`ending order. In this example our first results would be the ones changed most recently.
4. For any results that have identical modification dates, we would then sort within those results to present the oldest (created) results first.

See Elastic's documentation for more details

The examples above should cover most scenarios. If you want to get fancy, see [Elastic's documentation on sorting](https://www.elastic.co/guide/en/elasticsearch/reference/current/sort-search-results.html) .

---

2022\-09\-082025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/sort/) to provide us with more information. 

Back to top

[Previous Limiting details](../limit/) [Next Paging search results](../paging/) 

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

