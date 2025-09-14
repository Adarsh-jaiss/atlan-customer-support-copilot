# Source URL
https://developer.atlan.com/snippets/common-examples/finding/examples/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/finding/examples/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Examples of running searches for various kinds of assets by various criteria.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Examples of running searches for various kinds of assets by various criteria.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/finding/examples.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Search examples - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/finding/examples/
meta-twitter:card: summary_large_image
meta-twitter:description: Examples of running searches for various kinds of assets by various criteria.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/finding/examples.png
meta-twitter:title: Search examples - Developer
meta-viewport: width=device-width,initial-scale=1
title: Search examples - Developer
-->

[Skip to content](#search-examples) Developer Search examples Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/search/indexsearch (POST)](../../../../endpoints/#tag:apimetasearchindexsearch-post)

Search examples[¶](#search-examples "Permanent link")
=====================================================

Connection by name and type[¶](#connection-by-name-and-type "Permanent link")
-----------------------------------------------------------------------------

You may have noticed that connections in Atlan have [`qualifiedName`s](../../../../getting-started/#qualifiedname_1) that include a timestamp. As a result, they are not trivial to directly construct.

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

However, you can search for them by name and type to resolve their `qualifiedName`:

Java

Python

Kotlin

Raw REST API

| Find a connection by name and type | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<Connection> connections = Connection.findByName( // (1)     client, // (2)     "production", // (3)     AtlanConnectorType.SNOWFLAKE); // (4)  ``` |

1. Use the `findByName` static method on the `Connection` class to search for connections by name and type. If you name your connections uniquely (by type), this should only return a single\-item list.
2. Because this operation will directly search for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. Provide the name of the connection (this will be exact\-matched).
4. Provide the type of the connection. You can also (optionally) provide a list of extra attributes you want to retrieve for the connection. Core attributes like `qualifiedName` and its GUID are already included.

| Find a connection by name and type | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() connections = client.asset.find_connections_by_name( # (1)     name="production", # (2)     connector_type=AtlanConnectorType.SNOWFLAKE, # (3)     attributes=[] # (4) )  ``` |

1. Use the `asset.find_connections_by_name` method on the `AtlanClient` class to search for connections by name and type. If you name your connections uniquely (by type), this should only return a single\-item list.
2. Provide the name of the connection (this will be exact\-matched).
3. Provide the type of the connection.
4. You can also (optionally) provide a list of extra attributes you want to retrieve for the connection. Core attributes like `qualifiedName` and its GUID are already included.

| Find a connection by name and type | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val connections = Connection.findByName( // (1)     client, // (2)     "production", // (3)     AtlanConnectorType.SNOWFLAKE) // (4)  ``` |

1. Use the `findByName` static method on the `Connection` class to search for connections by name and type. If you name your connections uniquely (by type), this should only return a single\-item list.
2. Because this operation will directly search for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. Provide the name of the connection (this will be exact\-matched).
4. Provide the type of the connection. You can also (optionally) provide a list of extra attributes you want to retrieve for the connection. Core attributes like `qualifiedName` and its GUID are already included.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": { // (2)         "filter": [ // (3)           {             "term": { // (4)               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": { // (5)               "__typeName.keyword": {                 "value": "Connection"               }             }           },           {             "term": { // (6)               "name.keyword": {                 "value": "production"               }             }           },           {             "term": { // (7)               "connectorName": {                 "value": "snowflake"               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the connections.
2. To start building up a query with multiple conditions, you can use a `bool` query in Elasticsearch.
3. You can use the `filter` criteria to define all the conditions the search results must match in a binary way (either matches or doesn't). This avoids the need to calculate a score for each result.
4. Searches by default will return *all* assets that are found — whether active or archived (soft\-deleted). In most cases, you probably only want the active ones.
5. Since there could be tables, views, materialized views, columns, databases, schemas, etc in this connection — but you only want the connection itself — you can use an exact match on the type to restrict results to only connections.
6. Exact match search (case\-sensitive) on the name of the connection.
7. Exact match search on the type of the connector for the connection.

All connections[¶](#all-connections "Permanent link")
-----------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

On the other hand, you may want to find all the connections that exist in the environment:

Java

Python

Kotlin

Raw REST API

| Find all connections | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Connection.select(client) // (1)     .pageSize(100) // (2)     .stream() // (3)     .filter(a -> a instanceof Connection) // (4)     .forEach(c -> { // (5)         log.info("Connection: {}", c);     });  ``` |

1. To start building up a query to include all connections, you can use the `select()` convenience method on `Connection` itself. This will already limit results to only active (non\-archived) connections. Because this operation will directly search for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. (Optional) You can chain a `pageSize()` method to control the page sizes, to further limit API calls by retrieving more results per page.
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. (Optional) You can do any other operations you might do on a stream, such as filtering the results to ensure they are of a certain type.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Find all connections | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection from pyatlan.model.fluent_search import FluentSearch, CompoundQuery  client = AtlanClient()  # (1) request = (     FluentSearch()  # (2)     .where(CompoundQuery.asset_type(Connection))  # (3)     .where(CompoundQuery.active_assets())  # (4)     .page_size(100)  # (5) ).to_request()  # (6) for result in client.asset.search(request):  # (7)     if isinstance(result, Connection):  # (8)         print(result)  ``` |

1. Start with a client to run the search through. For the default client, you can always use `AtlanClient()`.
2. To search across all assets, you can use a `FluentSearch` object.
3. The `.where()` method allows you to limit to only certain assets. In this example, we are looking for connections, so use the `CompoundQuery.asset_type()` helper to narrow to only connections.
4. You can chain additional `.where()` methods to add further conditions, like this example where we limit to only active (non\-archived) assets.
5. (Optional) You can chain a `pageSize()` method to control the page sizes, to further limit API calls by retrieving more results per page.
6. You can then translate the fluent search into an index search request.
7. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.
8. Use the `isinstance` method to ensure that the asset is of the desired type. This will also allow an IDE to provide specific type hints for this asset type.

| Find all connections | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Connection.select(client) // (1)     .pageSize(100) // (2)     .stream() // (3)     .filter { it is Connection } // (4)     .forEach {  // (5)         log.info { "Connection: $it" }     }  ``` |

1. To start building up a query to include all connections, you can use the `select()` convenience method on `Connection` itself. This will already limit results to only active (non\-archived) connections. Because this operation will directly search for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. (Optional) You can chain a `pageSize()` method to control the page sizes, to further limit API calls by retrieving more results per page.
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. (Optional) You can do any other operations you might do on a stream, such as filtering the results to ensure they are of a certain type.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 ``` | ``` {   "dsl": { // (1)     "from": 0,     "size": 100,     "query": {       "bool": { // (2)         "filter": [ // (3)           {             "term": { // (4)               "__typeName.keyword": {                 "value": "Connection"               }             }           },           {             "term": {               "__state": { // (5)                 "value": "ACTIVE"               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the connections.
2. To start building up a query with multiple conditions, you can use a `bool` query in Elasticsearch.
3. You can use the `filter` criteria to define all the conditions the search results must match in a binary way (either matches or doesn't). This avoids the need to calculate a score for each result.
4. You can use an exact match on the type to restrict results to only connections.
5. Searches by default will return *all* assets that are found — whether active or archived (soft\-deleted). In most cases, you probably only want the active ones.

Columns in a schema[¶](#columns-in-a-schema "Permanent link")
-------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

This example finds all columns that exist in a particular schema — irrespective of the table, view, or materialized view they exist within.

Java

Python

Kotlin

Raw REST API

| Get all columns in a schema | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String schemaQN = "default/snowflake/1662194632/MYDB/MY_SCH"; // (1) Column.select(client) // (2)     .where(Asset.QUALIFIED_NAME.startsWith(schemaQN)) // (3)     .pageSize(100) // (4)     .includeOnResults(Asset.DESCRIPTION) // (5)     .stream() // (6)     .filter(a -> a instanceof Column) // (7)     .forEach(c -> { // (8)         log.info("Column: {}", c);     });  ``` |

1. Part of the trick here is that the `qualifiedName` of a column starts with the `qualifiedName` of its parent (table, view or materialized view). Similarly, the `qualifiedName` of the table, view or materialized view starts with the `qualifiedName` of its parent schema. (And so on, all the way up to the connection itself.)
2. To start building up a query specifically for columns, you can use the `select()` convenience method on `Column` itself. Because this operation will directly search for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You can use the `where()` method to define all the conditions the search results must match. For this example, use the `Asset.QUALIFIED_NAME` constant to limit to only those assets whose `qualifiedName` starts with the `qualifiedName` of the schema (by using the `startsWith()` predicate). In this example, that means only assets that are within this particular schema will be returned as results.
4. (Optional) You can play around with different page sizes, to further limit API calls by retrieving more results per page.
5. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every column will include its description. (Limit these attributes to the minimum you need about each column to do your intended work.)
6. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
7. (Optional) You can do any other operations you might do on a stream, such as filtering the results to ensure they are of a certain type.
8. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all columns in a schema | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Column from pyatlan.model.fluent_search import FluentSearch, CompoundQuery  schema_qn = "default/snowflake/1646836521/ATLAN_SAMPLE_DATA/PUBLIC"  # (1) client = AtlanClient()  # (2) request = (     FluentSearch()  # (3)     .where(CompoundQuery.asset_type(Column))  # (4)     .where(CompoundQuery.active_assets())  # (5)     .where(Column.QUALIFIED_NAME.startswith(schema_qn))  # (6) ).to_request()  # (7) for result in client.asset.search(request):  # (8)     if isinstance(result, Column):  # (9)         print(result)  ``` |

1. Part of the trick here is that the `qualified_name` of a column starts with the `qualified_name` of its parent (table, view or materialized view). Similarly, the `qualified_name` of the table, view or materialized view starts with the `qualified_name` of its parent schema. (And so on, all the way up to the connection itself.)
2. Start with a client to run the search through. For the default client, you can always use `AtlanClient()`.
3. To search across all assets, you can use a `FluentSearch` object.
4. The `.where()` method allows you to limit to only certain assets. In this example, we are looking for columns, so use the `CompoundQuery.asset_type()` helper to narrow to only columns.
5. You can chain additional `.where()` methods to add further conditions, like this example where we limit to only active (non\-archived) assets.
6. For this example, use the `Column.QUALIFIED_NAME` constant to limit to only those columns whose `qualified_name` starts with the `qualified_name` of the schema (by using the `startswith()` predicate). In this example, that means only columns that are within this particular schema will be returned as results.
7. You can then translate the fluent search into an index search request.
8. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.
9. Use the `isinstance` method to ensure that the asset is of the desired type. This will also allow an IDE to provide specific type hints for this asset type.

| Get all columns in a schema | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val schemaQN = "default/snowflake/1662194632/MYDB/MY_SCH" // (1) Column.select(client) // (2)     .where(Asset.QUALIFIED_NAME.startsWith(schemaQN)) // (3)     .pageSize(100) // (4)     .includeOnResults(Asset.DESCRIPTION) // (5)     .stream() // (6)     .filter { it is Column } // (7)     .forEach { // (8)         log.info { "Column: $it" }     });  ``` |

1. Part of the trick here is that the `qualifiedName` of a column starts with the `qualifiedName` of its parent (table, view or materialized view). Similarly, the `qualifiedName` of the table, view or materialized view starts with the `qualifiedName` of its parent schema. (And so on, all the way up to the connection itself.)
2. To start building up a query specifically for columns, you can use the `select()` convenience method on `Column` itself. Because this operation will directly search for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You can use the `where()` method to define all the conditions the search results must match. For this example, use the `Asset.QUALIFIED_NAME` constant to limit to only those assets whose `qualifiedName` starts with the `qualifiedName` of the schema (by using the `startsWith()` predicate). In this example, that means only assets that are within this particular schema will be returned as results.
4. (Optional) You can play around with different page sizes, to further limit API calls by retrieving more results per page.
5. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every column will include its description. (Limit these attributes to the minimum you need about each column to do your intended work.)
6. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
7. (Optional) You can do any other operations you might do on a stream, such as filtering the results to ensure they are of a certain type.
8. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": { // (2)         "filter": [ // (3)           {             "prefix": { // (4)               "qualifiedName": {                 "value": "default/snowflake/1662194632/MYDB/MY_SCH"               }             }           },           {             "term": { // (5)               "__typeName.keyword": {                 "value": "Column"               }             }           },           {             "term": { // (6)               "__state": {                 "value": "ACTIVE"               }             }           }         ]       }     },     "from": 0, // (7)     "size": 100,     "track_total_hits": true   },   "attributes": [ // (8)     "description"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the columns.
2. To start building up a query with multiple conditions, you can use a `bool` query in Elasticsearch.
3. You can use the `filter` criteria to define all the conditions the search results must match in a binary way (either matches or doesn't). This avoids the need to calculate a score for each result.
4. Part of the trick here is that the `qualifiedName` of a column starts with the `qualifiedName` of its parent (table, view or materialized view). Similarly, the `qualifiedName` of the table, view or materialized view starts with the `qualifiedName` of its parent schema. (And so on, all the way up to the connection itself.)
5. Since there could be tables, views, materialized views and columns in this schema — but you only want columns — you can use an exact match on the type to restrict results to only columns.
6. Searches by default will return *all* assets that are found — whether active or archived (soft\-deleted). In most cases, you probably only want the active ones.
7. Here you can play around with different page sizes, to further limit API calls by retrieving more results per page.
8. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every column will include its description. (Limit these attributes to the minimum you need about each column to do your intended work.)

Assets with custom metadata[¶](#assets-with-custom-metadata "Permanent link")
-----------------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

This example finds all assets with a particular custom metadata attribute populated — irrespective of the specific value of the attribute.

Java

Python

Kotlin

Raw REST API

| Get all assets with a custom metadata attribute populated | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` client.assets.select() // (1)     .where(CustomMetadataField.of(client, "RACI", "Responsible").hasAnyValue()) // (2)     ._includesOnResults(client.getCustomMetadataCache().getAttributesForSearchResults("RACI")) // (3)     .stream() // (4)     .forEach(a -> { // (5)         log.info("Asset: {}", a);     });  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. When searching for custom metadata attributes, you can construct a `CustomMetadataField` to start a clause that will match a custom metadata property. Since you are searching for the custom metadata attribute itself, there is no enum for the custom metadata or its property names, so these must be provided as strings. (The `CustomMetadataField` will handle translating these from their human\-readable values to the Atlan\-internal ID strings needed for the search.)

    The `hasAnyValue()` predicate allows you to limit to assets that have any value for this custom metadata attribute.
3. Since you are searching for custom metadata, you probably want to include the values for custom metadata in each search result. This `getAttributesForSearchResults()` helper method will return all of the custom attributes within the `RACI` custom metadata structure. These will be encoded in the specific form required by the search for you.

    Note the use of `_includesOnResults`

    Since the `getAttributesForSearchResults()` helper will return a list of strings, you'll need to use the special `_includesOnResults()` method to add these for inclusion.
4. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all assets with a custom metadata attribute populated | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.fields.atlan_fields import CustomMetadataField from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient()  # (1) request = (     FluentSearch(_includes_on_results=client.custom_metadata_cache.get_attributes_for_search_results("RACI"))  # (2)     .where(CustomMetadataField(client=client, set_name="RACI", attribute_name="Responsible").has_any_value())  # (3) ).to_request()  # (4) for result in client.asset.search(request):  # (5)     print(result)  ``` |

1. Start with a client to run the search through. For the default client, you can always use `AtlanClient()`.
2. To search across all assets, you can use a `FluentSearch` object.

    Since you are searching for custom metadata, you probably want to include the values for custom metadata in each search result. This `get_attributes_for_search_results()` helper method will return all of the custom attributes within the `RACI` custom metadata structure. These will be encoded in the specific form required by the search for you.

    Note the use of `_includes_on_results`

    Since the `get_attributes_for_search_results()` helper will return a list of strings, you'll need to use the special `_includes_on_results` parameter to add these for inclusion.
3. When searching for custom metadata attributes, you can construct a `CustomMetadataField` to start a clause that will match a custom metadata property. Since you are searching for the custom metadata attribute itself, there is no enum for the custom metadata or its property names, so these must be provided as strings. (The `CustomMetadataField` will handle translating these from their human\-readable values to the Atlan\-internal ID strings needed for the search.)

    The `has_any_value()` predicate allows you to limit to assets that have any value for this custom metadata attribute.
4. You can then translate the fluent search into an index search request.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all assets with a custom metadata attribute populated | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` client.assets.select() // (1)     .where(CustomMetadataField.of(client, "RACI", "Responsible").hasAnyValue()) // (2)     ._includesOnResults(client.customMetadataCache.getAttributesForSearchResults("RACI")) // (3)     .stream() // (4)     .forEach { // (5)         log.info { "Asset: $it" }     }  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. When searching for custom metadata attributes, you can construct a `CustomMetadataField` to start a clause that will match a custom metadata property. Since you are searching for the custom metadata attribute itself, there is no enum for the custom metadata or its property names, so these must be provided as strings. (The `CustomMetadataField` will handle translating these from their human\-readable values to the Atlan\-internal ID strings needed for the search.)

    The `hasAnyValue()` predicate allows you to limit to assets that have any value for this custom metadata attribute.
3. Since you are searching for custom metadata, you probably want to include the values for custom metadata in each search result. This `getAttributesForSearchResults()` helper method will return all of the custom attributes within the `RACI` custom metadata structure. These will be encoded in the specific form required by the search for you.

    Note the use of `_includesOnResults`

    Since the `getAttributesForSearchResults()` helper will return a list of strings, you'll need to use the special `_includesOnResults()` method to add these for inclusion.
4. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

Requires multiple API operations

Before you can search for custom metadata, you first need to have the Atlan\-internal hashed\-string representation of the custom metadata property. You will likely need to first [retrieve the hashed\-string representation](../../custom-metadata/#find-hashed-string-names).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` {   "dsl": { // (1)     "query": { // (2)       "exists": { // (3)         "field": "omrIzGB4oYlZrFKfTIUz6D" // (4)       }     },     "track_total_hits": true   },   "attributes": [     "UQot6bU4XcGcIx8gAQ1dsW.omrIzGB4oYlZrFKfTIUz6D" // (5)   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the assets.
2. For a search with only a single condition, we can directly provide the condition.
3. You can use the `exists` criteria to match any assets that have some value (no matter what that value is) for a given field.
4. Use the [Atlan\-internal hashed\-string representation](../../custom-metadata/#find-hashed-string-names) of the custom metadata field name.
5. Include the [Atlan\-internal hashed\-string representation](../../custom-metadata/#find-hashed-string-names) of the custom metadata field name in the attributes list, so you can see the value of the custom metadata on each result. In this attributes list it needs to be written as `<CustomMetadata>.<Attribute>`, using the hashed\-string representation for both pieces.

Assets with specific custom metadata value[¶](#assets-with-specific-custom-metadata-value "Permanent link")
-----------------------------------------------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

This example finds all assets with a particular custom metadata attribute populated — with a specific value for the attribute.

Java

Python

Kotlin

Raw REST API

| Get all assets with a specific custom metadata attribute value | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` client.assets.select() // (1)     .where(CustomMetadataField.of(client, "RACI", "Responsible").eq("This exact value", false)) // (2)     ._includesOnResults(client.getCustomMetadataCache().getAttributesForSearchResults("RACI")) // (3)     .stream() // (4)     .forEach(a -> { // (5)         log.info("Asset: {}", a);     });  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. When searching for custom metadata attributes, you can construct a `CustomMetadataField` to start a clause that will match a custom metadata property. Since you are searching for the custom metadata attribute itself, there is no enum for the custom metadata or its property names, so these must be provided as strings. (The `CustomMetadataField` will handle translating these from their human\-readable values to the Atlan\-internal ID strings needed for the search.)

    The `eq()` predicate allows you to limit to assets that have only the exact value provided for this custom metadata attribute (and in the case of a string value, you must supply a second parameter indicating whether the search should be case\-sensitive (false) or case\-insensitive (true)).
3. Since you are searching for custom metadata, you probably want to include the values for custom metadata in each search result. This `getAttributesForSearchResults()` helper method will return all of the custom attributes within the `RACI` custom metadata structure. These will be encoded in the specific form required by the search for you.

    Note the use of `_includesOnResults`

    Since the `getAttributesForSearchResults()` helper will return a list of strings, you'll need to use the special `_includesOnResults()` method to add these for inclusion.
4. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all assets with a custom metadata attribute populated | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.fields.atlan_fields import CustomMetadataField from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient()  # (1) request = (     FluentSearch(_includes_on_results=client.custom_metadata_cache.get_attributes_for_search_results("RACI"))  # (2)     .where(CustomMetadataField(client=client, set_name="RACI", attribute_name="Responsible").eq("This exact value"))  # (3) ).to_request()  # (4) for result in client.asset.search(request):  # (5)     print(result)  ``` |

1. Start with a client to run the search through. For the default client, you can always use `AtlanClient()`.
2. To search across all assets, you can use a `FluentSearch` object.

    Since you are searching for custom metadata, you probably want to include the values for custom metadata in each search result. This `get_attributes_for_search_results()` helper method will return all of the custom attributes within the `RACI` custom metadata structure. These will be encoded in the specific form required by the search for you.

    Note the use of `_includes_on_results`

    Since the `get_attributes_for_search_results()` helper will return a list of strings, you'll need to use the special `_includes_on_results` parameter to add these for inclusion.
3. When searching for custom metadata attributes, you can construct a `CustomMetadataField` to start a clause that will match a custom metadata property. Since you are searching for the custom metadata attribute itself, there is no enum for the custom metadata or its property names, so these must be provided as strings. (The `CustomMetadataField` will handle translating these from their human\-readable values to the Atlan\-internal ID strings needed for the search.)

    The `eq()` predicate allows you to limit to assets that have only the exact value provided for this custom metadata attribute.
4. You can then translate the fluent search into an index search request.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all assets with a specific custom metadata attribute value | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` client.assets.select() // (1)     .where(CustomMetadataField.of(client, "RACI", "Responsible").eq("This exact value", false)) // (2)     ._includesOnResults(client.customMetadataCache.getAttributesForSearchResults("RACI")) // (3)     .stream() // (4)     .forEach { // (5)         log.info { "Asset: $it" }     }  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. When searching for custom metadata attributes, you can construct a `CustomMetadataField` to start a clause that will match a custom metadata property. Since you are searching for the custom metadata attribute itself, there is no enum for the custom metadata or its property names, so these must be provided as strings. (The `CustomMetadataField` will handle translating these from their human\-readable values to the Atlan\-internal ID strings needed for the search.)

    The `eq()` predicate allows you to limit to assets that have only the exact value provided for this custom metadata attribute (and in the case of a string value, you must supply a second parameter indicating whether the search should be case\-sensitive (false) or case\-insensitive (true)).
3. Since you are searching for custom metadata, you probably want to include the values for custom metadata in each search result. This `getAttributesForSearchResults()` helper method will return all of the custom attributes within the `RACI` custom metadata structure. These will be encoded in the specific form required by the search for you.

    Note the use of `_includesOnResults`

    Since the `getAttributesForSearchResults()` helper will return a list of strings, you'll need to use the special `_includesOnResults()` method to add these for inclusion.
4. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

Requires multiple API operations

Before you can search for custom metadata, you first need to have the Atlan\-internal hashed\-string representation of the custom metadata property. You will likely need to first [retrieve the hashed\-string representation](../../custom-metadata/#find-hashed-string-names).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "dsl": { // (1)     "query": { // (2)       "term": { // (3)         "omrIzGB4oYlZrFKfTIUz6D": { // (4)           "value": "This exact value" // (5)         }       }     },     "track_total_hits": true   },   "attributes": [     "UQot6bU4XcGcIx8gAQ1dsW.omrIzGB4oYlZrFKfTIUz6D" // (6)   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the assets.
2. For a search with only a single condition, we can directly provide the condition.
3. You can use the `term` query to exactly match a value on assets, for a given field.
4. Use the [Atlan\-internal hashed\-string representation](../../custom-metadata/#find-hashed-string-names) of the custom metadata field name.
5. Provide the exact value you want to match in that custom metadata property.
6. Include the [Atlan\-internal hashed\-string representation](../../custom-metadata/#find-hashed-string-names) of the custom metadata field name in the attributes list, so you can see the value of the custom metadata on each result. In this attributes list it needs to be written as `<CustomMetadata>.<Attribute>`, using the hashed\-string representation for both pieces.

Assets linked to a term[¶](#assets-linked-to-a-term "Permanent link")
---------------------------------------------------------------------

This example finds all assets that are linked to a specific glossary term. (And could be extended to do find assets linked to any one of a number of glossary terms.) In this specific example we will find any assets linked to a glossary term named `Revenue` in a glossary named `Metrics`.

You'll need the qualifiedName of the glossary term

To find the assets linked to the glossary term, you'll need to search using the `qualifiedName` of the term. This is not the human\-readable name you see in the UI. So this example is split into two parts:

1. Finding the `qualifiedName` of the glossary term from its human\-readable name and the result of (1\).
2. Finding all assets linked to that glossary term.

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example:

Java

Python

Kotlin

Raw REST API

| Find qualifiedName of the term | |
| --- | --- |
| ``` 1 2 ``` | ``` GlossaryTerm term = GlossaryTerm.findByName(client, "Revenue", "Concepts"); // (1) String termQualifiedName = term.getQualifiedName(); // (2)  ``` |

1. The `GlossaryTerm.findByName()` helper method will retrieve the glossary term by its human\-readable name, given the name of the glossary in which it should exist. If the term does not exist (within that glossary), it will throw a `NotFoundException`. Because this operation will directly search for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. If no exception was thrown, you can retrieve the qualifiedName of the glossary term.

| Get all assets linked to a specific term | |
| --- | --- |
| ``` 3 4 5 6 7 8 ``` | ``` client.assets.select() // (1)     .where(Asset.ASSIGNED_TERMS.in(List.of(termQualifiedName))) // (2)     .stream() // (3)     .forEach(a -> { // (4)         log.info("Asset: {}", a);     });  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. When searching for assets linked to one or more terms, you need to use the `qualifiedName` of the term(s). (This example shows searching for just one term, but you could search for any number of them in the list. The search will find assets that are assigned at least one of those terms in the list.)
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Find qualifiedName of the term | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.fluent_search import FluentSearch, CompoundQuery  client = AtlanClient()  # (1) term = client.asset.find_term_by_name("Revenue", "Concepts")  # (2) term_qualified_name = term.qualified_name  # (3)  ``` |

1. Start with a client to run the search through. For the default client, you can always use `AtlanClient()`.
2. The `asset.find_term_by_name()` helper method will retrieve the glossary term by its human\-readable name, given the name of the glossary in which it should exist. If the term does not exist (within that glossary), it will throw a `NotFoundError`.
3. If no exception was thrown, you can retrieve the `qualified_name` of the glossary term.

| Get all assets linked to a specific term | |
| --- | --- |
| ```  7  8  9 10 11 12 ``` | ``` request = (     FluentSearch()  # (1)     .where(CompoundQuery.assigned_term([term_qualified_name]))  # (2) ).to_request()  # (3) for result in client.asset.search(request):  # (4)     print(result)  ``` |

1. To search across all assets, you can use a `FluentSearch` object.
2. When searching for assets linked to a given term, you need to use the `qualified_name` of the term.
3. You can then translate the fluent search into an index search request.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Find qualifiedName of the term | |
| --- | --- |
| ``` 1 2 ``` | ``` val term = GlossaryTerm.findByName(client, "Revenue", "Concepts") // (1) val termQualifiedName = term.qualifiedName // (2)  ``` |

1. The `GlossaryTerm.findByName()` helper method will retrieve the glossary term by its human\-readable name, given the name of the glossary in which it should exist. If the term does not exist (within that glossary), it will throw a `NotFoundException`. Because this operation will directly search for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. If no exception was thrown, you can retrieve the qualifiedName of the glossary term.

| Get all assets linked to a specific term | |
| --- | --- |
| ``` 3 4 5 6 7 8 ``` | ``` client.assets.select() // (1)     .where(Asset.ASSIGNED_TERMS.`in`(listOf(termQualifiedName))) // (2)     .stream() // (3)     .forEach { // (4)         log.info { "Asset: $it" }     }  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. When searching for assets linked to one or more terms, you need to use the `qualifiedName` of the term(s). (This example shows searching for just one term, but you could search for any number of them in the list. The search will find assets that are assigned at least one of those terms in the list.)
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

Requires multiple API operations

Before you can search for assets linked to a term, you first need to have the qualifiedName of the term. You will likely need to first [find the term by its name](../../glossary/retrieve-by-name/#retrieve-a-term-by-name).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {   "dsl": { // (1)     "query": { // (2)       "terms": { // (3)         "__meanings": [ // (4)           "5h2wMbSbWtRN1V1b05Mtb@LD5Tb30qbuYCZKsmFRpmS" // (5)         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the assets.
2. For a search with only a single condition, we can directly provide the condition.
3. You can use the `terms` query to exactly match a value on assets, for a given field, against a list of possible matches.
4. To find terms, match against the `__meanings` field.
5. Provide the exact value of the `qualifiedName` for the term for which you want to find linked assets.

Assets with an Atlan tag[¶](#assets-with-an-atlan-tag "Permanent link")
-----------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v2.0.0 "Minimum version")

This example finds all assets that are assigned a specific Atlan tag — irrespective of whether they were directly assigned the tag or it was propagated.

Java

Python

Kotlin

Raw REST API

| Get all assets with a specific tag | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` client.assets.select() // (1)     .tagged(List.of("PII")) // (2)     .stream() // (3)     .forEach(a -> { // (4)         log.info("Asset: {}", a);     });  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. The `.tagged()` helper method allows us to limit to assets that match at least one of potentially multiple values (since there could be many tags on an asset). The SDK will translate the provided Atlan tag into the necessary internal representation required for the search — you can just provide the human\-readable names of the Atlan tags.
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all assets with a specific tag | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.fluent_search import FluentSearch, CompoundQuery  client = AtlanClient()  # (1) request = (     FluentSearch()  # (2)     .where(CompoundQuery.tagged(client=client, with_one_of=["PII"]))  # (3) ).to_request()  # (4) for result in client.asset.search(request):  # (5)     print(result)  ``` |

1. Start with a client to run the search through. For the default client, you can always use `AtlanClient()`.
2. To search across all assets, you can use a `FluentSearch` object.
3. The `CompoundQuery.tagged()` helper method allows us to limit to assets that match at least one of potentially multiple values (since there could be many tags on an asset). The SDK will translate the provided Atlan tag into the necessary internal representation required for the search — you can just provide the human\-readable names of the Atlan tags.
4. You can then translate the fluent search into an index search request.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all assets with a specific tag | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` client.assets.select() // (1)     .tagged(listOf("PII")) // (2)     .stream() // (3)     .forEach { // (4)         log.info { "Asset: $it" }     }  ``` |

1. Start with a client to run the search through. For the default client, you can always use `Atlan.getDefaultClient()`.
2. To search across all assets, you can use the `assets.select()` convenience method on a client.
3. The `.tagged()` helper method allows us to limit to assets that match at least one of potentially multiple values (since there could be many tags on an asset). The SDK will translate the provided Atlan tag into the necessary internal representation required for the search — you can just provide the human\-readable names of the Atlan tags.
4. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

Requires multiple API operations

Before you can search for Atlan tags, you first need to have the Atlan\-internal hashed\-string representation of the tags. You will likely need to first [retrieve the hashed\-string representation](../../tags/#find-hashed-string-names).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": { // (2)         "minimum_should_match": "1", // (3)         "should": [ // (4)           {             "terms": {               "__traitNames": [ // (4)                 "wAI4bROOqCQzES8HCNso9F" // (5)               ]             }           },           {             "terms": {               "__propagatedTraitNames": [ // (6)                 "wAI4bROOqCQzES8HCNso9F" // (7)               ]             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the assets.
2. To match both assets that are directly assigned the Atlan tag and those that were propagated the Atlan tag, use a `bool` query for multiple conditions.
3. Define the minimum number of conditions that need to match on an asset to be included in the results. In this example, you want either a direct or propagated Atlan tag, so should match at least one of the conditions provided.
4. Use `__traitNames` to match directly\-classified assets.
5. Use the [Atlan\-internal hashed\-string representation](../../tags/#find-hashed-string-names) of the Atlan tag.
6. Use `__propagatedTraitNames` to match assets that have been propagated this Atlan tag.
7. Once again, use the [Atlan\-internal hashed\-string representation](../../tags/#find-hashed-string-names) of the Atlan tag.

Assets with a source tag[¶](#assets-with-a-source-tag "Permanent link")
-----------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v2.0.0 "Minimum version")

This example finds all assets that are assigned a specific source tag.

Java

Python

Kotlin

Raw REST API

| Get all assets with a specific tag | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` client.assets.select() // (1)     .taggedWithValue( // (2)         "Sensitivity", // (3)         "Highly Restricted", // (4)         true // (5)     )     .stream() // (6)     .forEach(a -> { // (7)         log.info("Asset: {}", a);     });  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. The `.taggedWithValue()` helper method allows us to limit to assets that match having this particular tag and value combination.
3. You must specify the human\-readable name of the Atlan tag that is mapped to a source tag. The SDK will translate the provided Atlan tag into the necessary internal representation required for the search — you can just provide the human\-readable names of the Atlan tags.
4. You must also provide the value you want to match.
5. (Optional) You can restrict the search to only directly\-tagged assets with the value using `true`, or look for all assets tagged with the value (whether directly or propagated).
6. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
7. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all assets with a specific tag | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets.core.asset import Asset from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  client = AtlanClient() # (1)  request = (     FluentSearch()     .select() # (2)     .where(CompoundQuery.tagged_with_value( # (3)       client=client, # (4)       atlan_tag_name="Confidential", # (5)       value="Highly Restricted", # (6)       directly=True, # (7)       source_tag_qualified_name="default/snowflake/1711669993/ANALYTICS/PRODUCTION/CONFIDENTIAL", # (8)     )   ) ).to_request() # (9)  response = client.asset.search(request) # (10)  for asset in response: # (11)     ...  ``` |

1. Start with a client to run the search through.
2. To search across all active assets, you can use the `FluentSearch.select()` method.
3. The `CompoundQuery.tagged_with_value()` helper method allows.
us to limit to assets that match having this particular tag and value combination.
4. You must provide a client instance.
5. You must specify the human\-readable name of the Atlan tag that is mapped to a source tag.
The SDK will translate the provided Atlan tag into the necessary internal representation
required for the search — you can just provide the human\-readable names of the Atlan tags.
6. You must also provide the value you want to match.
7. (Optional) You can restrict the search to only directly\-tagged assets
with the value using `True`, or look for all assets tagged with the value
(whether directly or propagated) (`False`).
8. (Optional) You can specify which source tag qualified name to use when multiple mapped `source-synced tags` are found.
9. Now convert the given `FluentSearch` into an `IndexSearchRequest` object for the search.
10. The search will only run when you call the `client.asset.search()` method.
11. This is the pattern for iterating through all results (across pages)
covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all assets with a specific tag | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` client.assets.select() // (1)     .taggedWithValue( // (2)         "Sensitivity", // (3)         "Highly Restricted", // (4)         true // (5)     )     .stream() // (6)     .forEach { // (7)         log.info { "Asset: $it" }     }  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. The `.taggedWithValue()` helper method allows us to limit to assets that match having this particular tag and value combination.
3. You must specify the human\-readable name of the Atlan tag that is mapped to a source tag. The SDK will translate the provided Atlan tag into the necessary internal representation required for the search — you can just provide the human\-readable names of the Atlan tags.
4. You must also provide the value you want to match.
5. (Optional) You can restrict the search to only directly\-tagged assets with the value using `true`, or look for all assets tagged with the value (whether directly or propagated).
6. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
7. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

Requires multiple API operations

Before you can search for Atlan tags, you first need to have the Atlan\-internal hashed\-string representation of the tags. You will likely need to first [retrieve the hashed\-string representation](../../tags/#find-hashed-string-names).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": { // (2)         "filter": [           {             "term": {               "__traitNames": { // (3)                 "value": "Z96sGJrF0S68PxYTUdKG6b", // (4)                 "case_insensitive": false               }             }           },           {             "span_within": { // (5)               "big": {                 "span_near": {                   "clauses": [                     {                       "span_term": {                         "__classificationsText.text": { // (6)                           "value": "Z96sGJrF0S68PxYTUdKG6b"                         }                       }                     },                     {                       "span_term": {                         "__classificationsText.text": { // (7)                           "value": "default/snowflake/1726834662/ANALYTICS/WIDE_WORLD_IMPORTERS/CONFIDENTIAL"                         }                       }                     }                   ],                   "in_order": true,                   "slop": 10000000                 }               },               "little": {                 "span_near": {                   "clauses": [                     {                       "span_term": {                         "__classificationsText.text": { // (8)                           "value": "tagAttachmentValue"                         }                       }                     },                     {                       "span_term": {                         "__classificationsText.text": {                           "value": "Highly" // (9)                         }                       }                     },                     {                       "span_term": {                         "__classificationsText.text": {                           "value": "Restricted"                         }                       }                     },                     {                       "span_term": {                         "__classificationsText.text": {                           "value": "tagAttachmentKey" // (10)                         }                       }                     }                   ],                   "in_order": true,                   "slop": 0                 }               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the assets.
2. To match assets that are directly assigned the Atlan tag, use a `bool` query for multiple conditions.
3. Use `__traitNames` to match directly\-classified assets.
4. Use the [Atlan\-internal hashed\-string representation](../../tags/#find-hashed-string-names) of the Atlan tag.
5. To match a source tag, you must use a `span_within` query that has this exact structure.
6. Once again, everywhere you specify the Atlan tag you must use the [Atlan\-internal hashed\-string representation](../../tags/#find-hashed-string-names) of the Atlan tag.
7. You must also specify the `qualifiedName` of the source Tag asset.
8. When matching a value, you must specify these `little.span_near` clauses in exactly the order shown in this example, starting with `tagAttachmentValue`.
9. The value itself should come next, but note that if there are any spaces in the value then you must specify a `span_term` for each individual word of the value.
10. Finally you must specify a `span_term` of `tagAttachmentKey` as the final clause.

Deprecated assets[¶](#deprecated-assets "Permanent link")
---------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

This example finds all assets that are marked as deprecated.

Java

Python

Kotlin

Raw REST API

| Get all deprecated assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` client.assets.select() // (1)     .where(Asset.CERTIFICATE_STATUS.eq(CertificateStatus.DEPRECATED)) // (2)     .stream() // (3)     .forEach(a -> { // (4)         log.info("Asset: {}", a);     });  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. The `.where()` method allows you to limit to only assets that have a particular value in a particular field. In this example, we are looking for values for the certificate status, so use `Asset.CERTIFICATE_STATUS`.

    Since we only want assets that are deprecated, we will query where that certificate is set to the `CertificateStatus.DEPRECATED` value. (No need to try to remember or ever even know what the precise string values for the certificates are — we've provided enums for them in the SDK.)
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all deprecated assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.enums import CertificateStatus from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient()  # (1) request = (     FluentSearch()  # (2)     .where(Asset.CERTIFICATE_STATUS.eq(CertificateStatus.DEPRECATED.value))  # (3) ).to_request()  # (4) for result in client.asset.search(request):  # (5)     print(result)  ``` |

1. Start with a client to run the search through. For the default client, you can always use `AtlanClient()`.
2. To search across all assets, you can use a `FluentSearch` object.
3. The `.where()` method allows you to limit to only assets that have a particular value in a particular field. In this example, we are looking for values for the certificate status, so use `Asset.CERTIFICATE_STATUS`.

    Since we only want assets that are deprecated, we will query where that certificate is set to the `CertificateStatus.DEPRECATED` value. (No need to try to remember or ever even know what the precise string values for the certificates are — we've provided enums for them in the SDK.)
4. You can then translate the fluent search into an index search request.
5. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all deprecated assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` client.assets.select() // (1)     .where(Asset.CERTIFICATE_STATUS.eq(CertificateStatus.DEPRECATED)) // (2)     .stream() // (3)     .forEach { // (4)         log.info { "Asset: $it" }     }  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. The `.where()` method allows you to limit to only assets that have a particular value in a particular field. In this example, we are looking for values for the certificate status, so use `Asset.CERTIFICATE_STATUS`.

    Since we only want assets that are deprecated, we will query where that certificate is set to the `CertificateStatus.DEPRECATED` value. (No need to try to remember or ever even know what the precise string values for the certificates are — we've provided enums for them in the SDK.)
3. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

Requires multiple API operations

Before you can search for classifications, you first need to have the Atlan\-internal hashed\-string representation of the classification. You will likely need to first [retrieve the hashed\-string representation](../../tags/#find-hashed-string-names).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {   "dsl": { // (1)     "query": { // (2)       "term": { // (3)         "certificateStatus": { // (4)           "value": "DEPRECATED" // (5)         }       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the assets.
2. For a search with only a single condition, we can directly provide the condition.
3. You can use the `term` query to exactly match a value on assets, for a given field.
4. Use the name of the field you want to match. In this example, since you want to match a specific certificate, you can use the `certificateStatus` field.
5. Provide the exact value you want to match in that field. In this example, you will be matching only assets with a certificate of `DEPRECATED`.

Certified but incomplete assets[¶](#certified-but-incomplete-assets "Permanent link")
-------------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

This example finds all assets that are marked as verified, but are missing a description — suggesting they are in fact incomplete.

Java

Python

Kotlin

Raw REST API

| Get all verified assets that have no description | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` client.assets.select() // (1)     .where(Asset.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED)) // (2)     .whereNot(Asset.DESCRIPTION.hasAnyValue()) // (3)     .whereNot(Asset.USER_DESCRIPTION.hasAnyValue())     .includeOnResults(Asset.OWNER_USERS) // (4)     .includeOnResults(Asset.OWNER_GROUPS) // (5)     .stream() // (6)     .forEach(a -> { // (7)         log.info("Asset: {}", a);     });  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. The `where()` helper method allows us to limit to only assets that meet a a particular condition. In this example, we are looking for values for the certificate status, so use `Asset.CERTIFICATE_STATUS`. (No need to try to remember or ever even know what the precise string value is for the name of this field — we've provided enums for them in the SDK.)

    Since we only want assets that are verified, we will query where that certificate is set to the `CertificateStatus.VERIFIED` value. (No need to try to remember or ever even know what the precise string values for the certificates are — we've provided enums for them in the SDK.)
3. You can use the `whereNot()` method to do the opposite — define all the conditions the search results must *not* match. Here we are limiting to only assets that have a description populated.

    The `hasAnyValue()` predicate method allows us to limit to only assets that have a user\-defined description populated. In Atlan you have both `description` (crawled from source) and `userDescription` (user\-defined or overridden). For this example use case, you probably want to check that *both* of these are empty.
4. As part of the search, you may want certain details included in every result. In this use case, you may want to know the asset owner — someone to confirm this should really be certified when there is no description.
5. In Atlan you have both users and groups that can own assets. For this example use case, you probably want to retrieve *both* of these for every result.
6. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
7. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all verified assets that have no description | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.enums import CertificateStatus from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient()  # (1) request = (     FluentSearch()  # (2)     .where(Asset.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED.value))  # (3)     .where_not(Asset.DESCRIPTION.has_any_value())  # (4)     .where_not(Asset.USER_DESCRIPTION.has_any_value())     .include_on_results(Asset.OWNER_USERS)  # (5)     .include_on_results(Asset.OWNER_GROUPS)  # (6) ).to_request()  # (7) for result in client.asset.search(request):  # (8)     print(result)  ``` |

1. Start with a client to run the search through. For the default client, you can always use `AtlanClient()`.
2. To search across all assets, you can use a `FluentSearch` object.
3. The `.where()` method allows you to limit to only assets that have a particular value in a particular field. In this example, we are looking for values for the certificate status, so use `Asset.CERTIFICATE_STATUS`.

    Since we only want assets that are verified, we will query where that certificate is set to the `CertificateStatus.VERIFIED` value. (No need to try to remember or ever even know what the precise string values for the certificates are — we've provided enums for them in the SDK.)
4. You can use the `.where_not()` method to do the opposite — define all the conditions the search results must *not* match. Here we are limiting to only assets that have a description populated.

    The `has_any_value()` predicate method allows us to limit to only assets that have a user\-defined description populated. In Atlan you have both `description` (crawled from source) and `userDescription` (user\-defined or overridden). For this example use case, you probably want to check that *both* of these are empty.
5. As part of the search, you may want certain details included in every result. In this use case, you may want to know the asset owner — someone to confirm this should really be certified when there is no description.
6. In Atlan you have both users and groups that can own assets. For this example use case, you probably want to retrieve *both* of these for every result.
7. You can then translate the fluent search into an index search request.
8. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| Get all verified assets that have no description | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` client.assets.select() // (1)     .where(Asset.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED)) // (2)     .whereNot(Asset.DESCRIPTION.hasAnyValue()) // (3)     .whereNot(Asset.USER_DESCRIPTION.hasAnyValue())     .includeOnResults(Asset.OWNER_USERS) // (4)     .includeOnResults(Asset.OWNER_GROUPS) // (5)     .stream() // (6)     .forEach { // (7)         log.info { "Asset: $it" }     }  ``` |

1. To search across all assets, you can use the `assets.select()` convenience method on a client.
2. The `where()` helper method allows us to limit to only assets that meet a a particular condition. In this example, we are looking for values for the certificate status, so use `Asset.CERTIFICATE_STATUS`. (No need to try to remember or ever even know what the precise string value is for the name of this field — we've provided enums for them in the SDK.)

    Since we only want assets that are verified, we will query where that certificate is set to the `CertificateStatus.VERIFIED` value. (No need to try to remember or ever even know what the precise string values for the certificates are — we've provided enums for them in the SDK.)
3. You can use the `whereNot()` method to do the opposite — define all the conditions the search results must *not* match. Here we are limiting to only assets that have a description populated.

    The `hasAnyValue()` predicate method allows us to limit to only assets that have a user\-defined description populated. In Atlan you have both `description` (crawled from source) and `userDescription` (user\-defined or overridden). For this example use case, you probably want to check that *both* of these are empty.
4. As part of the search, you may want certain details included in every result. In this use case, you may want to know the asset owner — someone to confirm this should really be certified when there is no description.
5. In Atlan you have both users and groups that can own assets. For this example use case, you probably want to retrieve *both* of these for every result.
6. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
7. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": { // (2)         "filter": [ // (3)           {             "term": {               "certificateStatus": { // (4)                 "value": "VERIFIED"               }             }           }         ],         "must_not": [ // (5)           {             "exists": {               "field": "description"             }           },           {             "exists": {               "field": "userDescription"             }           }         ]       }     },     "track_total_hits": true   },   "attributes": [     "ownerUsers", // (6)     "ownerGroups" // (7)   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the columns.
2. To start building up a query with multiple conditions, you can use a `bool` query in Elasticsearch.
3. You can use the `filter` criteria to define all the conditions the search results must match in a binary way (either matches or doesn't). This avoids the need to calculate a score for each result.
4. In this example, you are looking for verified assets. So you can begin by filtering only those assets with a `certificateStatus` of `VERIFIED`.
5. Since you want to find assets that specifically do *not* have other characteristics, use the `must_not` criteria to specify these. Specifically, match assets that do *not* have either a `description` or `userDescription` populated.
6. As part of the search, you may want certain details included in every result. In this use case, you may want to know the asset owner — someone to confirm this should really be certified when there is no description.

 **Where did `ownerUsers` come from?**

    The [Models](../../../../models/entities/asset/) section of the site details all the attributes that exist in each different type of asset, and therefore which ones you can retrieve as additional details in each search result, like `ownerUsers`.
7. In Atlan you have both users and groups that can own assets. For this example use case, you probably want to retrieve *both* of these for every result.

 **Where did `ownerGroups` come from?**

    The [Models](../../../../models/entities/asset/) section of the site details all the attributes that exist in each different type of asset, and therefore which ones you can retrieve as additional details in each search result, like `ownerGroups`.

---

2024\-07\-012025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/finding/examples/) to provide us with more information. 

Back to top

[Previous Search for assets](../../../advanced-examples/search/) [Next Lineage overview](../../lineage/) 

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

