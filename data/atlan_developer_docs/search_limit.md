# Source URL
https://developer.atlan.com/search/limit/

================================================================================

<!--
canonical: https://developer.atlan.com/search/limit/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to include specific asset properties and relationship properties in search results in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to include specific asset properties and relationship properties in search results in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/search/limit.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Limiting search result details - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/limit/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to include specific asset properties and relationship properties in search results in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/limit.png
meta-twitter:title: Limiting search result details - Developer
meta-viewport: width=device-width,initial-scale=1
title: Limiting search result details - Developer
-->

[Skip to content](#limiting-search-result-details) Developer Limiting search result details Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

[/api/meta/search/indexsearch (POST)](../../endpoints/#tag:apimetasearchindexsearch-post)

Limiting search result details[¶](#limiting-search-result-details "Permanent link")
===================================================================================

By default, each search result will contain very limited details — typically only the unique identities (GUID and `qualifiedName`) and `name` of each asset. This is intentional, to prevent retrieving more information than you need, as every piece of information you retrieve will add a little bit of time to the overall runtime of your request.

You can request additional details on each search result, though, to ensure the search gives you back exactly the information you require:

Including asset properties[¶](#including-asset-properties "Permanent link")
---------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can specify any properties of an asset you want to include in each search result, including relationships:

Java

Python

Kotlin

Raw REST API

| Include asset properties | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` client.assets.select() // (1)     .includeOnResults(Table.CREATE_TIME) // (2)     .includeOnResults(Table.UPDATE_TIME)     .includeOnResults(Table.COLUMNS)     .stream() // (3)     ...  ``` |

1. Start building a FluentSearch query (in this example from a client, using its 'assets' member's `select()` method).
2. Chain as many `includeOnResults` calls as you like. Each method call should include a searchable Atlan field you want to include on each search result. (And this can include relationship attributes as well, such as the columns in a table in this example.)
3. You can then run the search as you like (in this example, streaming the results directly).

| Include asset properties | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient() request = (     FluentSearch.select()  # (1)     .include_on_results(Table.CREATE_TIME)  # (2)     .include_on_results(Table.UPDATE_TIME)     .include_on_results(Table.COLUMNS) ).to_request()  # (3) results = client.asset.search(criteria=request)  ``` |

1. Start building a FluentSearch query (in this example using its `select()` method directly).
2. Chain as many `include_on_results` calls as you like. Each method call should include a searchable Atlan field you want to include on each search result. (And this can include relationship attributes as well, such as the columns in a table in this example.)
3. You can then run the search as you like (in this example, converting to a request and running the search using the request).

| Include asset properties | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` client.assets.select() // (1)     .includeOnResults(Table.CREATE_TIME) // (2)     .includeOnResults(Table.UPDATE_TIME)     .includeOnResults(Table.COLUMNS)     .stream() // (3)     ...  ``` |

1. Start building a FluentSearch query (in this example from a client, using its 'assets' member's `select()` method).
2. Chain as many `includeOnResults` calls as you like. Each method call should include a searchable Atlan field you want to include on each search result. (And this can include relationship attributes as well, such as the columns in a table in this example.)
3. You can then run the search as you like (in this example, streaming the results directly).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "dsl": { // (1)     "query": {       ...     },     "from": 0,     "size": 100,     "track_total_hits": true   },   "attributes": [ // (2)     "createTime",     "updateTime",     "columns"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Define the search query as you normally would.
2. Specify the list of attributes you want to include on each result in the `attributes` list of the request.

Including relationship properties[¶](#including-relationship-properties "Permanent link")
-----------------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can also specify which attributes you want to include on each *relationship* in each search result:

Java

Python

Kotlin

Raw REST API

| Include relationship properties | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` client.assets.select() // (1)     .includeOnResults(Table.COLUMNS) // (2)     .includeOnRelations(Column.NAME) // (3)     .stream() // (4)     ...  ``` |

1. Start building a FluentSearch query (in this example from a client, using its 'assets' member's `select()` method).
2. Chain as many `includeOnResults` calls as you like, to include one or more relationships on each search result.
3. Then chain as many `includeOnRelations` calls as you like. Each method call should include a searchable Atlan field you want to include on each *relationship* included in each search result. (In this example, every related column that comes back for each search result will include the column's name.)
4. You can then run the search as you like (in this example, streaming the results directly).

| Include relationship properties | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table, Column from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient() request = (     FluentSearch.select()  # (1)     .include_on_results(Table.COLUMNS)  # (2)     .include_on_relations(Column.NAME)  # (3) ).to_request()  # (4) results = client.asset.search(criteria=request)  ``` |

1. Start building a FluentSearch query (in this example using its `select()` method directly).
2. Chain as many `include_on_results` calls as you like, to include one or more relationships on each search result.
3. Then chain as many `include_on_relations` calls as you like. Each method call should include a searchable Atlan field you want to include on each *relationship* included in each search result. (In this example, every related column that comes back for each search result will include the column's name.)
4. You can then run the search as you like (in this example, converting to a request and running the search using the request).

| Include asset properties | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` client.assets.select() // (1)     .includeOnResults(Table.COLUMNS) // (2)     .includeOnRelations(Column.NAME) // (3)     .stream() // (4)     ...  ``` |

1. Start building a FluentSearch query (in this example from a client, using its 'assets' member's `select()` method).
2. Chain as many `includeOnResults` calls as you like, to include one or more relationships on each search result.
3. Then chain as many `includeOnRelations` calls as you like. Each method call should include a searchable Atlan field you want to include on each *relationship* included in each search result. (In this example, every related column that comes back for each search result will include the column's name.)
4. You can then run the search as you like (in this example, streaming the results directly).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "dsl": { // (1)     "query": {       ...     },     "from": 0,     "size": 100,     "track_total_hits": true   },   "attributes": [ // (2)     "columns"   ],   "relationAttributes": [ // (3)     "name"   ]   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Define the search query as you normally would.
2. Specify the list of attributes (relationships) you want to include on each result in the `attributes` list of the request.
3. Specify the list of attributes you want to include on each *relationship* in each search result in the `relationAttributes` list of the request.

Only first\-degree attributes and relationships

It is currently only possible to include details for first\-degree attributes and first\-degree relationships and their attributes. If you want to see the attributes of related assets' relationships you must run a second search.

---

2024\-02\-202025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/limit/) to provide us with more information. 

Back to top

[Previous Glossary\-specific search fields](../attributes/glossary/) [Next Sorting search results](../sort/) 

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

