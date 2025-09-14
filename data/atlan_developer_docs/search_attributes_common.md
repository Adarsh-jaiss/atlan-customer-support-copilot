# Source URL
https://developer.atlan.com/search/attributes/common/

================================================================================

<!--
canonical: https://developer.atlan.com/search/attributes/common/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Discover common search fields available for searching all assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Discover common search fields available for searching all assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/search/attributes/common.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Common search fields - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/attributes/common/
meta-twitter:card: summary_large_image
meta-twitter:description: Discover common search fields available for searching all assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/attributes/common.png
meta-twitter:title: Common search fields - Developer
meta-viewport: width=device-width,initial-scale=1
title: Common search fields - Developer
-->

[Skip to content](#common-search-fields) Developer Common search fields Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

Common search fields[¶](#common-search-fields "Permanent link")
===============================================================

These attributes exist on *all* [assets](../../../getting-started/#what-is-an-asset) in Atlan. You can therefore use them to search *all* assets in Atlan.

Look up the asset type you're interested in for a complete list

The complete list of attributes that can be searched is extensive. Rather than list every single attribute here, particularly since they vary based on the kind of asset you're looking for, instead see the [full model reference](../../../models/).

`Asset.GUID` [¶](#assetguid "Permanent link")
---------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The globally unique identifier (GUID) of any object in Atlan.

The identifier has no meaning, and is randomly generated, but is guaranteed to uniquely identify only a single asset.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.GUID.eq("25638e8c-0225-46fd-a70c-304117370c4c")) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific GUID. This uses a [term query](../../queries/terms/#term) to exactly match the GUID.

    Equivalent query from Elastic
    ```
    Query byGuid = TermQuery.of(t -> t
        .field("__guid")
        .value("25638e8c-0225-46fd-a70c-304117370c4c"))
      ._toQuery();

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 7 ``` | ``` Optional<Asset> asset = index.search(client).stream().findFirst(); if (asset.isPresent()) {     String guid = asset.get().getGuid(); // (1) }  ``` |

1. For a search by GUID, you would expect either no results, or at most a single result.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.GUID.eq("25638e8c-0225-46fd-a70c-304117370c4c"))  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific GUID. This uses a [term query](../../queries/terms/#term) to exactly match the GUID.

| Run the search | |
| --- | --- |
| ```  8  9 10 11 ``` | ``` client = AtlanClient() response = client.asset.search(index) if response.count > 0:     guid = response.current_page()[0].guid  # (1)  ``` |

1. For a search by GUID, you would expect either no results, or at most a single result.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.GUID.eq("25638e8c-0225-46fd-a70c-304117370c4c")) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific GUID. This uses a [term query](../../queries/terms/#term) to exactly match the GUID.

    Equivalent query from Elastic
    ```
    val byGuid = TermQuery.of(t -> t
        .field("__guid")
        .value("25638e8c-0225-46fd-a70c-304117370c4c"))
      ._toQuery()

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 7 ``` | ``` val asset = index.search(client).stream().findFirst() if (asset.isPresent) {     val guid = asset.get().guid // (1) }  ``` |

1. For a search by GUID, you would expect either no results, or at most a single result.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__guid": "25638e8c-0225-46fd-a70c-304117370c4c" } // (1)     }   },   "attributes": [ "__guid" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the GUID.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` {   "entities": [     {       "attributes": {         "__guid": "25638e8c-0225-46fd-a70c-304117370c4c"       },       "guid": "25638e8c-0225-46fd-a70c-304117370c4c"     }   ] }  ``` |

`Asset.CREATED_BY` [¶](#assetcreated_by "Permanent link")
---------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The Atlan user who created this asset.

If created via API, this will be a unique identifier for the API token used. Otherwise, this will be the username of the user that created the asset through the Atlan UI.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.CREATED_BY.eq("jdoe")) // (2)     .includeOnResults(Asset.CREATED_BY) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific username. This uses a [term query](../../queries/terms/#term) to exactly match the username.

    Equivalent query from Elastic
    ```
    Query byCreator = TermQuery.of(t -> t
        .field("__createdBy")
        .value("jdoe"))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     String creator = result.getCreatedBy(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The creator can be retrieved from a result through `.getCreatedBy()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.CREATED_BY.eq("jdoe"))  # (2)          .include_on_results(Asset.CREATED_BY)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific username. This uses a [term query](../../queries/terms/#term) to exactly match the username.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     creator = result.created_by  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The creator can be retrieved from a result through `.created_by`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.CREATED_BY.eq("jdoe")) // (2)     .includeOnResults(Asset.CREATED_BY) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific username. This uses a [term query](../../queries/terms/#term) to exactly match the username.

    Equivalent query from Elastic
    ```
    val byCreator = TermQuery.of(t -> t
        .field("__createdBy")
        .value("jdoe"))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val creator = result.createdBy // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The creator can be retrieved from a result through `.createdBy`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__createdBy": "jdoe" } // (1)     }   },   "attributes": [ "__createdBy" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the username.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` {   "entities": [     {       "attributes": {         "__createdBy": "jdoe"       },       "createdBy": "jdoe"     }   ] }  ``` |

`Asset.UPDATED_BY` [¶](#assetupdated_by "Permanent link")
---------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The Atlan user who last updated the asset.

If updated via API, this will be a unique identifier for the API token used. Otherwise, this will be the username of the user that made the change through the Atlan UI.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.UPDATED_BY.eq("jdoe")) // (2)     .includeOnResults(Asset.UPDATED_BY) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific username. This uses a [term query](../../queries/terms/#term) to exactly match the username.

    Equivalent query from Elastic
    ```
    Query byUpdater = TermQuery.of(t -> t
        .field("__modifiedBy")
        .value("jdoe"))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     String updater = result.getUpdatedBy(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The updater can be retrieved from a result through `.getUpdatedBy()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.UPDATED_BY.eq("jdoe"))  # (2)          .include_on_results(Asset.UPDATED_BY)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific username. This uses a [term query](../../queries/terms/#term) to exactly match the username.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     updater = result.updated_by  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The updater can be retrieved from a result through `.updated_by`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.UPDATED_BY.eq("jdoe")) // (2)     .includeOnResults(Asset.UPDATED_BY) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific username. This uses a [term query](../../queries/terms/#term) to exactly match the username.

    Equivalent query from Elastic
    ```
    val byUpdater = TermQuery.of(t -> t
        .field("__modifiedBy")
        .value("jdoe"))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val updater = result.updatedBy // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The updater can be retrieved from a result through `.updatedBy`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__modifiedBy": "jdoe" } // (1)     }   },   "attributes": [ "__modifiedBy" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the username.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` {   "entities": [     {       "attributes": {         "__modifiedBy": "jdoe"       },       "updatedBy": "jdoe"     }   ] }  ``` |

`Asset.CREATE_TIME` [¶](#assetcreate_time "Permanent link")
-----------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The time (in milliseconds) when the asset was created.

This is stored as an epoch: the milliseconds since January 1, 1970 (UTC).

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.CREATE_TIME.gte(1640995200000L)) // (2)     .includeOnResults(Asset.CREATE_TIME) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `gte()` predicate looks for any values greater than or equal to the provided epoch\-style date (milliseconds since January 1, 1970\). This uses a [range query](../../queries/terms/#range) to find any assets created on or after a particular date.

    Equivalent query from Elastic
    ```
    Query byCreation = RangeQuery.of(r -> r
        .field("__timestamp")
        .gte(JsonData.of(1640995200000L)))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     Long created = result.getCreateTime(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The creation time can be retrieved from a result through `.getCreateTime()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.CREATE_TIME.gte(1640995200000))  # (2)          .include_on_results(Asset.CREATE_TIME)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `gte()` predicate looks for any values greater than or equal to the provided epoch\-style date (milliseconds since January 1, 1970\). This uses a [range query](../../queries/terms/#range) to find any assets created on or after a particular date.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     created = result.create_time  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The creation time can be retrieved from a result through `.create_time`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.CREATE_TIME.gte(1640995200000L)) // (2)     .includeOnResults(Asset.CREATE_TIME) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `gte()` predicate looks for any values greater than or equal to the provided epoch\-style date (milliseconds since January 1, 1970\). This uses a [range query](../../queries/terms/#range) to find any assets created on or after a particular date.

    Equivalent query from Elastic
    ```
    val byCreation = RangeQuery.of(r -> r
        .field("__timestamp")
        .gte(JsonData.of(1640995200000L)))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val created = result.createTime // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The creation time can be retrieved from a result through `.createTime`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "range": { "__timestamp": { "gte": 1640995200000 }} // (1)     }   },   "attributes": [ "__timestamp" ] }  ``` |

1. You can use a [range query](../../queries/terms/#range) to find any assets created on or after a particular date.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` {   "entities": [     {       "attributes": {         "__timestamp": 1654992094524       },       "createTime": 1654992094524     }   ] }  ``` |

`Asset.UPDATE_TIME` [¶](#assetupdate_time "Permanent link")
-----------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The time (in milliseconds) when the asset was last updated.

This is stored as an epoch: the milliseconds since January 1, 1970 (UTC).

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.UPDATE_TIME.gte(1640995200000L)) // (2)     .includeOnResults(Asset.UPDATE_TIME) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `gte()` predicate looks for any values greater than or equal to the provided epoch\-style date (milliseconds since January 1, 1970\). This uses a [range query](../../queries/terms/#range) to find any assets modified on or after a particular date.

    Equivalent query from Elastic
    ```
    Query byUpdate = RangeQuery.of(r -> r
        .field("__modificationTimestamp")
        .gte(JsonData.of(1640995200000L)))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     Long updated = result.getUpdateTime(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The last modified time can be retrieved from a result through `.getUpdateTime()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.UPDATE_TIME.gte(1640995200000))  # (2)          .include_on_results(Asset.UPDATE_TIME)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `gte()` predicate looks for any values greater than or equal to the provided epoch\-style date (milliseconds since January 1, 1970\). This uses a [range query](../../queries/terms/#range) to find any assets modified on or after a particular date.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     updated = result.update_time  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The last modified time can be retrieved from a result through `.update_time`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.UPDATE_TIME.gte(1640995200000L)) // (2)     .includeOnResults(Asset.UPDATE_TIME) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `gte()` predicate looks for any values greater than or equal to the provided epoch\-style date (milliseconds since January 1, 1970\). This uses a [range query](../../queries/terms/#range) to find any assets modified on or after a particular date.

    Equivalent query from Elastic
    ```
    val byUpdate = RangeQuery.of(r -> r
        .field("__modificationTimestamp")
        .gte(JsonData.of(1640995200000L)))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val updated = result.updateTime // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The last modified time can be retrieved from a result through `.updateTime`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "range": { "__modificationTimestamp": { "gte": 1640995200000 }} // (1)     }   },   "attributes": [ "__modificationTimestamp" ] }  ``` |

1. You can use a [range query](../../queries/terms/#range) to find any assets modified on or after a particular date.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` {   "entities": [     {       "attributes": {         "__modificationTimestamp": 1654905667786       },       "updateTime": 1654905667786     }   ] }  ``` |

`Asset.STATUS` [¶](#assetstatus "Permanent link")
-------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The asset status in Atlan. The expected values are:

* `ACTIVE` for assets that are available in Atlan.
* `DELETED` for assets that are (soft\-)deleted in Atlan. These will not appear in the UI or API responses unless explicitly requested.

Only visible for soft\-deleted (archived) assets

Hard\-deleted, or "purged" assets are fully erased, and therefore no status exists for them.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.STATUS.eq(AtlanStatus.DELETED)) // (2)     .includeOnResults(Asset.STATUS) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific state. This uses a [term query](../../queries/terms/#term) to exactly match the state.

    Equivalent query from Elastic
    ```
    Query byState = TermQuery.of(t -> t
        .field("__state")
        .value(AtlanStatus.DELETED.getValue()))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     AtlanStatus status = result.getStatus(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The status can be retrieved from a result through `.getStatus()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.STATUS.eq(EntityStatus.DELETED.value))  # (2)          .include_on_results(Asset.STATUS)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific state. This uses a [term query](../../queries/terms/#term) to exactly match the state.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     status = result.status  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The status can be retrieved from a result through `.status`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.STATUS.eq(AtlanStatus.DELETED)) // (2)     .includeOnResults(Asset.STATUS) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match, in this case against a specific state. This uses a [term query](../../queries/terms/#term) to exactly match the state.

    Equivalent query from Elastic
    ```
    val byState = TermQuery.of(t -> t
        .field("__state")
        .value(AtlanStatus.DELETED.getValue()))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val status = result.status // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The status can be retrieved from a result through `.status`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__state": "DELETED" } // (1)     }   },   "attributes": [ "__state" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the state.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` {   "entities": [     {       "attributes": {         "__state": "DELETED"       },       "status": "DELETED"     }   ] }  ``` |

`Asset.ATLAN_TAGS` [¶](#assetatlan_tags "Permanent link")
---------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

All directly\-assigned Atlan tags that exist on an asset.

Internal representation

The Atlan tag names in the index are an Atlan\-internal hashed string, *not* the human\-readable name you see in the UI. The value you search for must be this Atlan\-internal hashed string.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.ATLAN_TAGS.hasAnyValue()) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `hasAnyValue()` predicate looks for any value in this field, in this case any Atlan tags. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.

    Equivalent query from Elastic
    ```
    Query byAtlanTag = ExistsQuery.of(q -> q
        .field("__traitNames"))
      ._toQuery();

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 ``` | ``` for (Asset result : index.search(client)) { // (1)     Set<AtlanTag> atlanTags = result.getAtlanTags(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.getAtlanTags()`. Note that the Java SDK will automatically translate these from the internal hashed string representation of Atlan into the Atlan tag names as you would recognize them in the UI.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.ATLAN_TAGS.has_any_value())  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `has_any_value()` predicate looks for any value in this field, in this case any Atlan tags. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.

| Run the search | |
| --- | --- |
| ```  8  9 10 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     atlan_tags = result.atlan_tags  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.atlan_tags`. Note that the Python SDK will automatically translate these from the internal hashed string representation of Atlan into the Atlan tag names as you would recognize them in the UI.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.ATLAN_TAGS.hasAnyValue()) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `hasAnyValue()` predicate looks for any value in this field, in this case any Atlan tags. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.

    Equivalent query from Elastic
    ```
    val byAtlanTag = ExistsQuery.of(q -> q
        .field("__traitNames"))
      ._toQuery()

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 ``` | ``` for (result in index.search(client)) { // (1)     val atlanTags = result.atlanTags // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.atlanTags`. Note that the Java SDK will automatically translate these from the internal hashed string representation of Atlan into the Atlan tag names as you would recognize them in the UI.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "exists": { "field": "__traitNames" } // (1)     }   },   "attributes": [ "__classificationNames" ] }  ``` |

1. You can use an [exists query](../../queries/terms/#exists) to find assets that have a directly\-assigned Atlan tag.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "attributes": {         "__classificationNames": "|E4FUqA9JFgb0VHRZWRAq95|I0oabU4LhZ69Nb0FKBGKfS|"       },       "classificationNames": [         "I0oabU4LhZ69Nb0FKBGKfS",         "E4FUqA9JFgb0VHRZWRAq95"       ]     }   ] }  ``` |

**Details**

* `attributes.__classificationNames` in the response is a single string of all Atlan tags, pipe\-delimited.
* `classificationNames` in the response is a set (unordered) of strings. Note that its order may or may not match that of the pipe\-delimited `attributes.__classificationNames` string.
* When searching for the existence of Atlan tags, the `__traitNames` field provides more reliable results than searching `__classificationNames`. The latter can return results that have no Atlan tags (but previously did), while the former returns only those that currently have Atlan tags.

`Asset.PROPAGATED_ATLAN_TAGS` [¶](#assetpropagated_atlan_tags "Permanent link")
-------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

All propagated Atlan tags that exist on an asset. This includes Atlan tags propagated by:

* Upstream assets in lineage (from source to target)
* Parent assets (for example, from tables to columns)
* Linked terms

Internal representation

The Atlan tag names in the index are an Atlan\-internal hashed string, *not* the human\-readable name you see in the UI. The value you search for must be this Atlan\-internal hashed string.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.PROPAGATED_ATLAN_TAGS.hasAnyValue()) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `hasAnyValue()` predicate looks for any value in this field, in this case any propagated Atlan tags. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.

    Equivalent query from Elastic
    ```
    Query byAtlanTag = ExistsQuery.of(q -> q
        .field("__propagatedTraitNames"))
      ._toQuery();

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 ``` | ``` for (Asset result : index.search(client)) { // (1)     Set<AtlanTag> atlanTags = result.getAtlanTags(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.getAtlanTags()`. Note that the Java SDK will automatically translate these from the internal hashed string representation of Atlan into the Atlan tag names as you would recognize them in the UI.

    How do I distinguish between propagated and direct tags?

    From each `AtlanTag` object you can use `.getEntityGuid()`.

    * If this matches the GUID of the asset, the tag has been directly assigned to the asset
        * If this is a different GUID from the asset, the tag has been propagated to the asset (the GUID indicates the asset the tag was propagated from)

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.PROPAGATED_ATLAN_TAGS.has_any_value())  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `has_any_value()` predicate looks for any value in this field, in this case any propagated Atlan tags. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.

| Run the search | |
| --- | --- |
| ```  8  9 10 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     atlan_tags = result.atlan_tags  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.atlan_tags`. Note that the Python SDK will automatically translate these from the internal hashed string representation of Atlan into the Atlan tag names as you would recognize them in the UI.

    How do I distinguish between propagated and direct tags?

    From each `AtlanTag` object you can use `.entity_guid`.

    * If this matches the GUID of the asset, the tag has been directly assigned to the asset
        * If this is a different GUID from the asset, the tag has been propagated to the asset (the GUID indicates the asset the tag was propagated from)

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.PROPAGATED_ATLAN_TAGS.hasAnyValue()) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `hasAnyValue()` predicate looks for any value in this field, in this case any propagated Atlan tags. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.

    Equivalent query from Elastic
    ```
    val byAtlanTag = ExistsQuery.of(q -> q
        .field("__propagatedTraitNames"))
      ._toQuery()

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 ``` | ``` for (result in index.search(client)) { // (1)     val atlanTags = result.atlanTags // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.atlanTags`. Note that the Java SDK will automatically translate these from the internal hashed string representation of Atlan into the Atlan tag names as you would recognize them in the UI.

    How do I distinguish between propagated and direct tags?

    From each `AtlanTag` object you can use `.entityGuid`.

    * If this matches the GUID of the asset, the tag has been directly assigned to the asset
        * If this is a different GUID from the asset, the tag has been propagated to the asset (the GUID indicates the asset the tag was propagated from)

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "exists": { "field": "__propagatedTraitNames" } // (1)     }   },   "attributes": [ "__propagatedClassificationNames" ] }  ``` |

1. You can use an [exists query](../../queries/terms/#exists) to find assets that have a propagated Atlan tag.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "attributes": {         "__propagatedClassificationNames": "|E4FUqA9JFgb0VHRZWRAq95|I0oabU4LhZ69Nb0FKBGKfS|"       },       "classificationNames": [         "I0oabU4LhZ69Nb0FKBGKfS",         "E4FUqA9JFgb0VHRZWRAq95"       ]     }   ] }  ``` |

**Details**

* `attributes.__propagatedClassificationNames` in the response is a single string of all Atlan tags, pipe\-delimited.
* `classificationNames` in the response is a set (unordered) of strings. Note that its order may or may not match that of the pipe\-delimited `attributes.__propagatedClassificationNames` string.
* When searching for the existence of propagated Atlan tags, the `__propagatedTraitNames` field provides more reliable results than searching `__propagatedClassificationNames`. The latter can return results that have no Atlan tags (but previously did), while the former returns only those that currently have Atlan tags.

`Asset.ASSIGNED_TERMS`  [¶](#assetassigned_terms "Permanent link")
------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

All terms attached to an asset.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.ASSIGNED_TERMS.hasAnyValue()) // (2)     .includeOnResults(Asset.ASSIGNED_TERMS) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `hasAnyValue()` predicate looks for any value in this field, in this case any term assignments. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.

    Equivalent query from Elastic
    ```
    Query byMeaning = ExistsQuery.of(q -> q
        .field("__meanings"))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     Set<IGlossaryTerm> assignedTerms = result.getAssignedTerms(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.getAssignedTerms()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.ASSIGNED_TERMS.has_any_value())  # (2)          .include_on_results(Asset.ASSIGNED_TERMS)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `hasAnyValue()` predicate looks for any value in this field, in this case any term assignments. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     assigned_terms = result.assigned_terms  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.assigned_terms`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.ASSIGNED_TERMS.hasAnyValue()) // (2)     .includeOnResults(Asset.ASSIGNED_TERMS) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `hasAnyValue()` predicate looks for any value in this field, in this case any term assignments. This uses an [exists query](../../queries/terms/#exists) to check that any value exists in the field.

    Equivalent query from Elastic
    ```
    val byMeaning = ExistsQuery.of(q -> q
        .field("__meanings"))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val assignedTerms = result.assignedTerms // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The assigned Atlan tags can be retrieved from a result through `.assignedTerms`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "exists": { "field": "__meanings" } // (1)     }   },   "attributes": [ "__meanings" ] }  ``` |

1. You can use an [exists query](../../queries/terms/#exists) to find assets that have any terms assigned.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "meanings": [         {           "termGuid": "b4113341-251b-4adc-81fb-2420501c30e6",           "relationGuid": "10df06a1-5b7c-492f-b827-bf4f46931c3e",           "displayText": "Example Term",           "confidence": 0         }       ]     }   ] }  ``` |

**Details**

* `__meanings` is a keyword array in Elastic, so cannot be searched by simple matching.
* `__meanings` has no separate response — the default `meanings` appears with or without `__meanings` in the attribute list of the request.
* `__meaningsText` has no separate response — the default `meaningNames` appears with or without `__meaningsText` in the attribute list of the request.
* `meaningNames` is an (unordered) set of term names, rather than a single string.

`Asset.TYPE_NAME`  [¶](#assettype_name "Permanent link")
--------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The type of asset. For example, `Table`, `Column`, and so on.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.TYPE_NAME.eq(GlossaryTerm.TYPE_NAME)) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. The Java SDK provides `Asset.TYPE_NAME.eq()` and `Asset.TYPE_NAME.in()` to restrict assets to one or more specific types.

    Equivalent query from Elastic
    ```
    Query byType = TermQuery.of(t -> t
        .field("__typeName.keyword")
        .value(GlossaryTerm.TYPE_NAME))
      ._toQuery();

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 ``` | ``` for (Asset result : index.search(client)) { // (1)     String typeName = result.getTypeName(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The type name can be retrieved from a result through `.getTypeName()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset, AtlasGlossaryTerm from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  index = (FluentSearch()  # (1)          .where(CompoundQuery.asset_type(AtlasGlossaryTerm))  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. The Python SDK provides `CompoundQuery.asset_type()` and `CompoundQuery.asset_types()` to restrict assets to one or more specific types.

| Run the search | |
| --- | --- |
| ```  8  9 10 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     type_name = result.type_name  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The type name can be retrieved from a result through `.type_name`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.TYPE_NAME.eq(GlossaryTerm.TYPE_NAME)) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. The Java SDK provides `Asset.TYPE_NAME.eq()` and `Asset.TYPE_NAME.in()` to restrict assets to one or more specific types.

    Equivalent query from Elastic
    ```
    val byType = TermQuery.of(t -> t
        .field("__typeName.keyword")
        .value(GlossaryTerm.TYPE_NAME))
      ._toQuery()

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 ``` | ``` for (result in index.search(client)) { // (1)     val typeName = result.typeName // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The type name can be retrieved from a result through `.typeName`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__typeName.keyword": "AtlasGlossaryTerm" } // (1)     }   },   "attributes": [ "__typeName" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the type.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` {   "entities": [     {       "typeName": "AtlasGlossaryTerm",       "attributes": {         "__typeName": "AtlasGlossaryTerm"       }     }   ] }  ``` |

`Asset.SUPER_TYPE_NAMES`  [¶](#assetsuper_type_names "Permanent link")
----------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

All super types of an asset.

For example:

* `Table` has super types of `SQL`, `Catalog`, `Asset` and `Referenceable`.
* `LookerField` has super types of `Looker`, `BI`, `Catalog`, `Asset` and `Referenceable`.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.SUPER_TYPE_NAMES.eq(ISQL.TYPE_NAME)) // (2)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. The Java SDK provides `Asset.SUPER_TYPE_NAMES.eq()` and `Asset.SUPER_TYPE_NAMES.in()` to restrict assets to subtypes of one or more specific supertypes.

    In the Java SDK, supertypes are interfaces

    Note that in the Java SDK, you can find the type name for most supertypes through an interface (prefixing `I` in front of the supertype name to get the appropriate Java interface class).

    Equivalent query from Elastic
    ```
    Query bySuperType = TermQuery.of(t -> t
        .field("__superTypeNames.keyword")
        .value(ISQL.TYPE_NAME))
      ._toQuery();

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 ``` | ``` for (Asset result : index.search(client)) { // (1)     String typeName = result.getTypeName(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The type name can be retrieved from a result through `.getTypeName()`. Note that in this example the results list will contain all subtypes of `SQL`: databases, schemas, tables, views, columns, and so on.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset, SQL from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  index = (FluentSearch()  # (1)          .where(CompoundQuery.super_types(SQL))  # (2)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. The Python SDK provides `CompoundQuery.super_types()` to restrict assets to subtypes of one or more specific supertypes.

| Run the search | |
| --- | --- |
| ```  8  9 10 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     type_name = result.type_name  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The type name can be retrieved from a result through `.type_name`. Note that in this example the results list will contain all subtypes of `SQL`: databases, schemas, tables, views, columns, and so on.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.SUPER_TYPE_NAMES.eq(ISQL.TYPE_NAME)) // (2)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. The Java SDK provides `Asset.SUPER_TYPE_NAMES.eq()` and `Asset.SUPER_TYPE_NAMES.in()` to restrict assets to subtypes of one or more specific supertypes.

    In the Java SDK, supertypes are interfaces

    Note that in the Java SDK, you can find the type name for most supertypes through an interface (prefixing `I` in front of the supertype name to get the appropriate Java interface class).

    Equivalent query from Elastic
    ```
    val bySuperType = TermQuery.of(t -> t
        .field("__superTypeNames.keyword")
        .value(ISQL.TYPE_NAME))
      ._toQuery()

    ```

| Run the search | |
| --- | --- |
| ``` 4 5 6 ``` | ``` for (result in index.search(client)) { // (1)     val typeName = result.typeName // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The type name can be retrieved from a result through `.typeName`. Note that in this example the results list will contain all subtypes of `SQL`: databases, schemas, tables, views, columns, and so on.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__superTypeNames.keyword": "SQL" } // (1)     }   },   "attributes": [ "__superTypeNames" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the type.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {   "entities": [     {       "typeName": "Query"     },     {       "typeName": "Table"     },     {       "typeName": "Database"     },     {       "typeName": "Column"     }   ] }  ``` |

**Details**

* `__superTypeNames` has no separate response — the default `typeName` appears with or without `__superTypeNames` in the attribute list of the request.

`Asset.HAS_LINEAGE` [¶](#assethas_lineage "Permanent link")
-----------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Flag that is true if an asset has at least one process upstream or downstream. Otherwise, it will be false.

Processes are also included

`Process` assets themselves will also be included in the `true` results, unless excluded by some other search criteria.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.HAS_LINEAGE.eq(true)) // (2)     .includeOnResults(Asset.HAS_LINEAGE) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for any assets with the lineage flag set to `true`. This uses a [term query](../../queries/terms/#term) to exactly match a `true` value.

    Equivalent query from Elastic
    ```
    Query byLineage = TermQuery.of(t -> t
        .field("__hasLineage")
        .value(true))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     Boolean hasLineage = result.getHasLineage(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The lineage status can be retrieved from a result through `.getHasLineage()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.HAS_LINEAGE.eq(True))  # (2)          .include_on_results(Asset.HAS_LINEAGE)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for any assets with the lineage flag set to `True`. This uses a [term query](../../queries/terms/#term) to exactly match a `True` value.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     has_lineage = result.has_lineage  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The lineage status can be retrieved from a result through `.has_lineage`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.HAS_LINEAGE.eq(true)) // (2)     .includeOnResults(Asset.HAS_LINEAGE) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for any assets with the lineage flag set to `true`. This uses a [term query](../../queries/terms/#term) to exactly match a `true` value.

    Equivalent query from Elastic
    ```
    val byLineage = TermQuery.of(t -> t
        .field("__hasLineage")
        .value(true))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val hasLineage = result.hasLineage // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The lineage status can be retrieved from a result through `.hasLineage`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__hasLineage": true } // (1)     }   },   "attributes": [ "__hasLineage" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the boolean value.

| Response | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` {   "entities": [     {       "attributes": {         "__hasLineage": true       }     }   ] }  ``` |

`Asset.QUALIFIED_NAME`  [¶](#assetqualified_name "Permanent link")
------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The unique fully\-qualified name of any asset in Atlan.

Qualified names are often constructed from the identity characteristics of an asset. For example, included in a database's `qualifiedName` is the connection that crawled the database. (And included in a schema's `qualifiedName` is the database it exists in, and therefore it *also* implicitly includes the connection's `qualifiedName` since the database's `qualifiedName` includes it.)

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.QUALIFIED_NAME.startsWith("default/snowflake/1662194632")) // (2)     .includeOnResults(Asset.QUALIFIED_NAME) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `startsWith()` predicate looks for any value that starts with the provided string, in this case matching any assets within this connection. This uses a [prefix query](../../queries/terms/#prefix) to match values that start with a particular string rather than the entire value.

    Equivalent query from Elastic
    ```
    Query byQN = PrefixQuery.of(p -> p
        .field("qualifiedName")
        .value("default/snowflake/1662194632"))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     String qualifiedName = result.getQualifiedName(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The `qualifiedName` can be retrieved from a result through `.getQualifiedName()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.QUALIFIED_NAME.startswith("default/snowflake/1662194632"))  # (2)          .include_on_results(Asset.QUALIFIED_NAME)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `startswith()` predicate looks for any value that starts with the provided string, in this case matching any assets within this connection. This uses a [prefix query](../../queries/terms/#prefix) to match values that start with a particular string rather than the entire value.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     qualified_name = result.qualified_name  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The `qualified_name` can be retrieved from a result through `.qualified_name`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.QUALIFIED_NAME.startsWith("default/snowflake/1662194632")) // (2)     .includeOnResults(Asset.QUALIFIED_NAME) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `startsWith()` predicate looks for any value that starts with the provided string, in this case matching any assets within this connection. This uses a [prefix query](../../queries/terms/#prefix) to match values that start with a particular string rather than the entire value.

    Equivalent query from Elastic
    ```
    val byQN = PrefixQuery.of(p -> p
        .field("qualifiedName")
        .value("default/snowflake/1662194632"))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val qualifiedName = result.qualifiedName // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The `qualifiedName` can be retrieved from a result through `.qualifiedName`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "prefix": { "qualifiedName": "default/snowflake/1662194632" } // (1)     }   },   "attributes": [ "qualifiedName" ] }  ``` |

1. You can use a [prefix query](../../queries/terms/#prefix) to find all the objects in a connection, based on the qualifiedName.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "attributes": {         "qualifiedName": "default/snowflake/1662194632" //(1)       }     },     {       "attributes": {         "qualifiedName": "default/snowflake/1662194632/SAMPLEDB" // (2)       }     }   ] }  ``` |

1. When searching on prefix you'll get exact matches...
2. ...and also matches of any other objects whose value for that attribute *starts with* the prefix value.

`Asset.NAME`  [¶](#assetname "Permanent link")
----------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The name of the asset in Atlan, as it appears in the UI.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(Asset.NAME.eq("dev", true)) // (2)     .includeOnResults(Asset.NAME) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match (case\-insensitively). This uses a [term query](../../queries/terms/#term) to exactly match the names, but ignores case due to the second parameter being `true`.

    Equivalent query from Elastic
    ```
    Query byName = TermQuery.of(t -> t
        .field("name.keyword")
        .value("dev")
        .caseInsensitive(true))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (Asset result : index.search(client)) { // (1)     String name = result.getName(); // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The `name` can be retrieved from a result through `.getName()`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(Asset.NAME.eq("dev", case_insensitive=True))  # (2)          .include_on_results(Asset.NAME)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match (case\-insensitively). This uses a [term query](../../queries/terms/#term) to exactly match the names, but ignores case due to the second parameter being `true`.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     name = result.name  # (2)  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The `name` can be retrieved from a result through `.name`.

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(Asset.NAME.eq("dev", true)) // (2)     .includeOnResults(Asset.NAME) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide a predicate and value to search. In this example the `eq()` predicate looks for an exact match (case\-insensitively). This uses a [term query](../../queries/terms/#term) to exactly match the names, but ignores case due to the second parameter being `true`.

    Equivalent query from Elastic
    ```
    val byName = TermQuery.of(t -> t
        .field("name.keyword")
        .value("dev")
        .caseInsensitive(true))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` for (result in index.search(client)) { // (1)     val name = result.name // (2) }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The `name` can be retrieved from a result through `.name`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "name.keyword": { "value": "dev" }} // (1)     }   },   "attributes": [ "name" ] }  ``` |

1. A [term query](../../queries/terms/#term) on the keyword index will only match results whose name is *exactly* `dev` — not `development` or `developer` or any other variation.

| Response | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` {   "entities": [     {       "attributes": {         "name": "dev"       }     }   ] }  ``` |

---

2022\-08\-222025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/attributes/common/) to provide us with more information. 

Back to top

[Previous Searchable fields](../) [Next Glossary\-specific search fields](../glossary/) 

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

