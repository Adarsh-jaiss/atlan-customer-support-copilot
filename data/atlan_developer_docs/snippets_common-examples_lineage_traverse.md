# Source URL
https://developer.atlan.com/snippets/common-examples/lineage/traverse/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/lineage/traverse/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Explore how to retrieve and traverse lineage in Atlan, and learn about filtering options.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Explore how to retrieve and traverse lineage in Atlan, and learn about filtering options.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/lineage/traverse.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Traverse lineage - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/lineage/traverse/
meta-twitter:card: summary_large_image
meta-twitter:description: Explore how to retrieve and traverse lineage in Atlan, and learn about filtering options.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/lineage/traverse.png
meta-twitter:title: Traverse lineage - Developer
meta-viewport: width=device-width,initial-scale=1
title: Traverse lineage - Developer
-->

[Skip to content](#traverse-lineage) Developer Traverse lineage Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/lineage/getlineage (POST)](../../../../endpoints/#tag:apimetalineagegetlineage-post)[/api/meta/lineage/list (POST)](../../../../endpoints/#tag:apimetalineagelist-post)

Traverse lineage[¶](#traverse-lineage "Permanent link")
=======================================================

Retrieve lineage[¶](#retrieve-lineage "Permanent link")
-------------------------------------------------------

[2\.5\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.5.3 "Minimum version")[3\.1\.1](https://github.com/atlanhq/atlan-java/releases/tag/v3.1.1 "Minimum version")

To fetch lineage, you need to request lineage from Atlan from a particular starting point:

Java

Python

Kotlin

Raw REST API

| Retrieve lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` FluentLineage.builder(client,         "495b1516-aaaf-4390-8cfd-b11ade7a7799") // (1)     .depth(1000000) // (2)     .direction(AtlanLineageDirection.DOWNSTREAM) // (3)     .pageSize(10) // (4)     .includeOnResults(Asset.NAME) // (5)     .immediateNeighbors(true) // (6)     .stream() // (7)     .forEach(result -> { // (8)         // Do something with the result     });  ``` |

1. Build a request for lineage with the starting point for your lineage retrieval (the [GUID](../../../../getting-started/#guid_1) of an asset). If you already have an asset, you can also instead run `requestLineage()` on the asset to directly build the same request.
2. You can specify how far you want lineage to be fetched using `depth()`. A depth of `1` will only fetch immediate upstream and downstream assets, while `2` will also fetch the immediate upstream and downstream assets of those assets, and so on. The default value of `1000000` will fetch upstream and downstream assets up to 1,000,000 hops away (basically *all* lineage).
3. You can fetch only upstream assets or only downstream assets. In the list API, you cannot access both directions at the same time.
4. You can specify how many results to include per page of results (defaults to 10\).
5. You can also specify any extra attributes you want to include in each asset in the resulting list.
6. To include details about which asset is upstream and downstream of which other asset, set `immediateNeighbors` to `true`. (Without this, all downstream assets will be listed in breadth\-first order, but you will not know specifically which asset is downstream of which other asset.)
7. You can then directly stream the results from the request. These will be lazily\-fetched and paged automatically.
8. A normal Java `Stream` is created, so you can apply any stream\-based operations to it (filtering, mapping, collecting, or doing something for each result as in this example).

| Retrieve lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import LineageDirection from pyatlan.model.assets import Asset from pyatlan.model.lineage import FluentLineage  client = AtlanClient() request = FluentLineage( # (1)     starting_guid="495b1516-aaaf-4390-8cfd-b11ade7a7799",  # (2)     depth=1000000,  # (3)     direction=LineageDirection.DOWNSTREAM,  # (4)     size=10,  # (5)     includes_on_results=Asset.NAME,  # (6)     immediate_neighbors=True,  # (7) ).request response = client.asset.get_lineage_list(request)  # (8) for asset in response: # (9)     ...  ``` |

1. Build a request for lineage by specifying the parameters on the constructor.
2. The starting point for lineage must be the [GUID](../../../../getting-started/#guid_1) of an asset.
3. You can specify how far you want lineage to be fetched using `depth`. A depth of `1` will only fetch immediate upstream and downstream assets, while `2` will also fetch the immediate upstream and downstream assets of those assets, and so on. The default value of `1000000` will fetch upstream and downstream assets up to 1,000,000 hops away (basically *all* lineage).
4. You can fetch only upstream assets or only downstream assets. In the list API, you cannot access both directions at the same time.
5. You can specify how many results to include per page of results (defaults to 10\).
6. You can also specify any extra attributes you want to include in each asset in the resulting list.
7. The `immediate_neighbors` parameter, when set to `True`, includes direct upstream and downstream connections for each asset, enabling detailed lineage traversal.
8. Call the `asset.get_lineage_list()` method using the `request` to actually retrieve the lineage details from Atlan.
9. Iterate through the results

| Retrieve lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` FluentLineage.builder(client,         "495b1516-aaaf-4390-8cfd-b11ade7a7799") // (1)     .depth(1000000) // (2)     .direction(AtlanLineageDirection.DOWNSTREAM) // (3)     .pageSize(10) // (4)     .includeOnResults(Asset.NAME) // (5)     .immediateNeighbors(true) // (6)     .stream() // (7)     .forEach { // (8)         // Do something with the result     }  ``` |

1. Build a request for lineage with the starting point for your lineage retrieval (the [GUID](../../../../getting-started/#guid_1) of an asset). If you already have an asset, you can also instead run `requestLineage()` on the asset to directly build the same request.
2. You can specify how far you want lineage to be fetched using `depth()`. A depth of `1` will only fetch immediate upstream and downstream assets, while `2` will also fetch the immediate upstream and downstream assets of those assets, and so on. The default value of `1000000` will fetch upstream and downstream assets up to 1,000,000 hops away (basically *all* lineage).
3. You can fetch only upstream assets or only downstream assets. In the list API, you cannot access both directions at the same time.
4. You can specify how many results to include per page of results (defaults to 10\).
5. You can also specify any extra attributes you want to include in each asset in the resulting list.
6. To include details about which asset is upstream and downstream of which other asset, set `immediateNeighbors` to `true`. (Without this, all downstream assets will be listed in breadth\-first order, but you will not know specifically which asset is downstream of which other asset.)
7. You can then directly stream the results from the request. These will be lazily\-fetched and paged automatically.
8. A normal Java `Stream` is created, so you can apply any stream\-based operations to it (filtering, mapping, collecting, or doing something for each result as in this example).

| POST /api/meta/lineage/list | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799", // (1)   "depth": 1000000, // (2)   "direction": "OUTPUT", // (3)   "from": 0, // (4)   "size": 10, // (5)   "attributes": [ // (6)     "name"   ],   "excludeMeanings": true,   "excludeClassifications": true }  ``` |

1. The starting point for lineage must be the [GUID](../../../../getting-started/#guid_1) of an asset.
2. You can specify how far you want lineage to be fetched using `depth()`. A depth of `1` will only fetch immediate upstream and downstream assets, while `2` will also fetch the immediate upstream and downstream assets of those assets, and so on. A value of `1000000` will fetch upstream and downstream assets up to 1,000,000 hops away (basically *all* lineage).
3. You can fetch only upstream assets (`INPUT`) or only downstream assets (`OUTPUT`). In the list API, you cannot access both directions at the same time.
4. You can specify the starting point for a page of results (you must provide a value: `0` will start at the first result).
5. You can specify how many results to include per page of results (you must provide a value: we suggest starting at `10`).
6. You can also specify any extra attributes you want to include in each asset in the resulting list.

Traverse lineage[¶](#traverse-lineage_1 "Permanent link")
---------------------------------------------------------

The new lineage list API returns results in breadth\-first order. So you can traverse the lineage by progressing through the result list in the order they are returned, even across multiple pages of results.

### Downstream assets[¶](#downstream-assets "Permanent link")

[2\.5\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.5.3 "Minimum version")[3\.1\.1](https://github.com/atlanhq/atlan-java/releases/tag/v3.1.1 "Minimum version")

To traverse downstream assets in lineage:

Java

Python

Kotlin

Raw REST API

| Traverse downstream lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` FluentLineage.builder(client,         "495b1516-aaaf-4390-8cfd-b11ade7a7799") // (1)     .direction(AtlanLineageDirection.DOWNSTREAM) // (2)     .immediateNeighbors(true) // (3)     .stream() // (4)     .filter(a -> !(a instanceof ILineageProcess)) // (5)     .limit(100) // (6)     .forEach(result -> { // (7)         // Do something with each result         for (LineageRef ref : result.getImmediateDownstream()) { // (8)             String downstreamGuid = ref.getGuid(); // (9)         }     });  ``` |

1. Specify the [GUID](../../../../getting-started/#guid_1) of an asset for the starting point. (Or from an asset itself, use `requestLineage()` to start the same builder.)
2. Request the `DOWNSTREAM` direction.
3. If you want to understand specifically which assets are downstream from which other assets, set `immediateNeighbors` to `true`.
4. You can then stream the results from the request. The pages will be lazily\-fetched in the background, as\-needed.
5. With streams, you can apply additional filters over the results (in this example any processes in the results will be ignored).
6. With streams, you can also limit the total number of results you want to process — independently from page size of retrievals. With lazy\-fetching of the results, this will ensure you only retrieve the number of pages required to complete the stream.
7. Of course, you still need to actually do something with those remaining results.
8. If `immediateNeighbors` is `true`, each asset will have a list of downstream lineage references populated in `.getImmediateDownstream()`.
9. You can, for example, retrieve the GUID of each of these downstream references to see the assets that are immediately downstream from the asset you are iterating through in the lineage results.

| Traverse downstream lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import LineageDirection from pyatlan.model.lineage import FluentLineage   client = AtlanClient() request = FluentLineage(     starting_guid="495b1516-aaaf-4390-8cfd-b11ade7a7799", # (1)     direction=LineageDirection.DOWNSTREAM, # (2)     immediate_neighbors=True, # (3) ).request response = client.asset.get_lineage_list(request) # (4) for asset in response: # (5)     ... # (6)     for ref in asset.immediate_downstream:  # (7)         downstream_guid = ref.guid  # (8)  ``` |

1. Specify the [GUID](../../../../getting-started/#guid_1) of an asset for the starting point.
2. Request the `DOWNSTREAM` direction.
3. If you want to understand specifically which assets are downstream from which other assets, set `immediate_neighbors` to `True`.
4. Call the `get_lineage_list` method using the `request` to get the results
5. You can then iterate through all of the results. The pages will be lazily\-fetched in the background as\-needed, and each result looped through.
6. Do something with the result.
7. If `immediate_neighbors` is `True`, each asset will have a list of downstream lineage references populated in `.immediate_downstream`.
8. You can, for example, retrieve the GUID of each of these downstream references to see the assets that are immediately downstream from the asset you are iterating through in the lineage results.

| Traverse downstream lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` FluentLineage.builder(client,         "495b1516-aaaf-4390-8cfd-b11ade7a7799") // (1)     .direction(AtlanLineageDirection.DOWNSTREAM) // (2)     .immediateNeighbors(true) // (3)     .stream() // (4)     .filter { it !is ILineageProcess } // (5)     .limit(100) // (6)     .forEach { result -> // (7)         // Do something with each result         result.immediateDownstream.forEach { ref -> // (8)             val downstreamGuid = ref.guid // (9)         }     }  ``` |

1. Specify the [GUID](../../../../getting-started/#guid_1) of an asset for the starting point. (Or from an asset itself, use `requestLineage()` to start the same builder.)
2. Request the `DOWNSTREAM` direction.
3. If you want to understand specifically which assets are downstream from which other assets, set `immediateNeighbors` to `true`.
4. You can then stream the results from the request. The pages will be lazily\-fetched in the background, as\-needed.
5. With streams, you can apply additional filters over the results (in this example any processes in the results will be ignored).
6. With streams, you can also limit the total number of results you want to process — independently from page size of retrievals. With lazy\-fetching of the results, this will ensure you only retrieve the number of pages required to complete the stream.
7. Of course, you still need to actually do something with those remaining results.
8. If `immediateNeighbors` is `true`, each asset will have a list of downstream lineage references populated in `.getImmediateDownstream()`.
9. You can, for example, retrieve the GUID of each of these downstream references to see the assets that are immediately downstream from the asset you are iterating through in the lineage results.

| POST /api/meta/lineage/list | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799", // (1)   "depth": 1000000,   "direction": "OUTPUT", // (2)   "from": 0,   "size": 10,   "excludeMeanings": true,   "excludeClassifications": true }  ``` |

1. Specify the [GUID](../../../../getting-started/#guid_1) of an asset for the starting point.
2. Request the `OUTPUT` (downstream) direction.

### Upstream assets[¶](#upstream-assets "Permanent link")

[2\.5\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.5.3 "Minimum version")[3\.1\.1](https://github.com/atlanhq/atlan-java/releases/tag/v3.1.1 "Minimum version")

To traverse upstream assets in lineage:

Java

Python

Kotlin

Raw REST API

| Traverse upstream lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` FluentLineage.builder(client,         "495b1516-aaaf-4390-8cfd-b11ade7a7799") // (1)     .direction(AtlanLineageDirection.UPSTREAM) // (2)     .immediateNeighbors(true) // (3)     .stream() // (4)     .filter(a -> !(a instanceof ILineageProcess)) // (5)     .limit(100) // (6)     .forEach(result -> { // (7)         // Do something with each result         for (LineageRef ref : result.getImmediateUpstream()) { // (8)             String upstreamGuid = ref.getGuid(); // (9)         }     });  ``` |

1. Specify the [GUID](../../../../getting-started/#guid_1) of an asset for the starting point. (Or from an asset itself, use `requestLineage()` to start the same builder.)
2. Request the `UPSTREAM` direction.
3. If you want to understand specifically which assets are upstream from which other assets, set `immediateNeighbors` to `true`.
4. You can then stream the results from the request. The pages will be lazily\-fetched in the background, as\-needed.
5. With streams, you can apply additional filters over the results (in this example any processes in the results will be ignored).
6. With streams, you can also limit the total number of results you want to process — independently from page size of retrievals. With lazy\-fetching of the results, this will ensure you only retrieve the number of pages required to complete the stream.
7. Of course, you still need to actually do something with those remaining results.
8. If `immediateNeighbors` is `true`, each asset will have a list of upstream lineage references populated in `.getImmediateUpstream()`.
9. You can, for example, retrieve the GUID of each of these upstream references to see the assets that are immediately upstream from the asset you are iterating through in the lineage results.

| Traverse upstream lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import LineageDirection from pyatlan.model.lineage import FluentLineage  client = AtlanClient() request = (     FluentLineage(starting_guid="495b1516-aaaf-4390-8cfd-b11ade7a7799")  # (1)     .direction(LineageDirection.UPSTREAM)  # (2)     .immediate_neighbors(True) # (3)     .request ) response = client.asset.get_lineage_list(request)  # (4) for asset in response:  # (5)     ...  # (6)     for ref in asset.immediate_upstream:  # (7)         upstream_guid = ref.guid  # (8)  ``` |

1. Specify the [GUID](../../../../getting-started/#guid_1) of an asset for the starting point.
2. Request the `UPSTREAM` direction.
3. If you want to understand specifically which assets are upstream from which other assets, set `immediate_neighbors` to `True`.
4. Call the `get_lineage_list` method using the `request` to get the results
5. You can then iterate through all of the results. The pages will be lazily\-fetched in the background as\-needed, and each result looped through.
6. Do something with the result.
7. If `immediate_neighbors` is `True`, each asset will have a list of upstream lineage references populated in `.immediate_upstream`.
8. You can, for example, retrieve the GUID of each of these upstream references to see the assets that are immediately upstream from the asset you are iterating through in the lineage results.

| Traverse upstream lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` FluentLineage.builder(client,         "495b1516-aaaf-4390-8cfd-b11ade7a7799") // (1)     .direction(AtlanLineageDirection.UPSTREAM) // (2)     .immediateNeighbors(true) // (3)     .stream() // (4)     .filter { it !is ILineageProcess } // (5)     .limit(100) // (6)     .forEach {         // Do something with each result         result.immediateUpstream.forEach { ref -> // (8)             val upstreamGuid = ref.guid // (9)         }     }  ``` |

1. Specify the [GUID](../../../../getting-started/#guid_1) of an asset for the starting point. (Or from an asset itself, use `requestLineage()` to start the same builder.)
2. Request the `UPSTREAM` direction.
3. If you want to understand specifically which assets are upstream from which other assets, set `immediateNeighbors` to `true`.
4. You can then stream the results from the request. The pages will be lazily\-fetched in the background, as\-needed.
5. With streams, you can apply additional filters over the results (in this example any processes in the results will be ignored).
6. With streams, you can also limit the total number of results you want to process — independently from page size of retrievals. With lazy\-fetching of the results, this will ensure you only retrieve the number of pages required to complete the stream.
7. Of course, you still need to actually do something with those remaining results.
8. If `immediateNeighbors` is `true`, each asset will have a list of upstream lineage references populated in `.getImmediateUpstream()`.
9. You can, for example, retrieve the GUID of each of these upstream references to see the assets that are immediately upstream from the asset you are iterating through in the lineage results.

| POST /api/meta/lineage/list | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799", // (1)   "depth": 1000000,   "direction": "INPUT", // (2)   "from": 0,   "size": 10,   "excludeMeanings": true,   "excludeClassifications": true }  ``` |

1. Specify the [GUID](../../../../getting-started/#guid_1) of an asset for the starting point.
2. Request the `INPUT` (upstream) direction.

Filter lineage[¶](#filter-lineage "Permanent link")
---------------------------------------------------

You can also filter the information fetched through lineage. This can help improve performance of your code by limiting the results it will fetch to only those you require.

Retrieve only active assets

In most cases for lineage you only care about active assets. By filtering to only active assets, you can improve the performance of lineage retrieval by as much as 10x. (The new `FluentLineage` interface will do this automatically, unless you explicitly request the inclusion of archived assets.)

Not possible to filter by custom metadata

You currently cannot filter lineage based on the values of custom metadata.

### Limit assets in response[¶](#limit-assets-in-response "Permanent link")

[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can limit the assets you will see in the response through entity filters. These restrict what assets will be included in the results, but still traverse all of the lineage:

Java

Python

Kotlin

Raw REST API

| Limit assets in response | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` List<Asset> verifiedAssets = Asset.lineage(client, "495b1516-aaaf-4390-8cfd-b11ade7a7799") // (1)     .direction(AtlanLineageDirection.UPSTREAM)     .includeInResults(Asset.CERTIFICATE_STATUS.inLineage.eq(CertificateStatus.VERIFIED)) // (2)     .includesCondition(FilterList.Condition.AND) // (3)     .stream() // (4)     .collect(Collectors.toList()); // (5)  ``` |

1. Build the request as you would above, or request it directly from an asset. Because this operation will directly request lineage for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Add one or more `includeInResults` to the request before sending it to Atlan. Each of these defines criteria for which assets should be filtered for inclusion in the results, in this example only assets with a verified certificate will be included. The criterion itself is composed of:

    * The field by which you want to filter (`Asset.CERTIFICATE_STATUS` in this example).
        * A fixed member within that field that builds lineage filters, called `.inLineage`.
        * The operator you want to use to compare values for that field in order to determine whether or not an asset matches (`.eq()` in this example).
        * The value you want to compare against using that operator (`CertificateStatus.VERIFIED` in this example).
3. Optionally, you can use `includesCondition` in your lineage request to specify whether the `includeInResults` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
4. When you then stream the results, only those assets that match the filter criteria will be included in the response.
5. You can then collect them (standard stream operation) to give a complete list, across pages, of those assets that match the criteria.

| Limit assets in response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import CertificateStatus, LineageDirection from pyatlan.model.assets import Asset from pyatlan.model.lineage import FilterList  client = AtlanClient() request = (     Asset.lineage(guid="f23dfa3b-3a8a-417a-b2fb-17fdfca9d442") # (1)     .direction(LineageDirection.UPSTREAM)     .include_in_results(         Asset.CERTIFICATE_STATUS.in_lineage.eq(CertificateStatus.VERIFIED) # (2)     )     .includes_condition(FilterList.Condition.AND).request  # (3) ) response = client.asset.get_lineage_list(request)  # (4) verified_assets: list[Asset] = [] for asset in response: # (5)     verified_assets.append(asset)  ``` |

1. Build the request as you would above, or request it directly from an asset.
2. Add one or more `include_in_results` to the request before sending it to Atlan. Each of these defines criteria for which assets should be filtered for inclusion in the results, in this example only assets with a verified certificate will be included. The criterion itself is composed of:

    * The field by which you want to filter (`Asset.CERTIFICATE_STATUS` in this example).
        * A fixed member within that field that builds lineage filters, called `.in_lineage`.
        * The operator you want to use to compare values for that field in order to determine whether or not an asset matches (`.eq()` in this example).
        * The value you want to compare against using that operator (`CertificateStatus.VERIFIED` in this example).
3. Optionally, you can use `.includes_condition` in your lineage request to specify whether the `includes_in_results` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
4. Use the `request` to get the `response` that can be used to iterate through the assets.
5. Iterate through the assets and use them as you will.

| Limit assets in response | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val verifiedAssets = Asset.lineage(client, "495b1516-aaaf-4390-8cfd-b11ade7a7799") // (1)     .direction(AtlanLineageDirection.UPSTREAM)     .includeInResults(Asset.CERTIFICATE_STATUS.inLineage.eq(CertificateStatus.VERIFIED)) // (2)     .includesCondition(FilterList.Condition.AND) // (3)     .stream() // (4)     .toList() // (5)  ``` |

1. Build the request as you would above, or request it directly from an asset. Because this operation will directly request lineage for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Add one or more `includeInResults` to the request before sending it to Atlan. Each of these defines criteria for which assets should be filtered for inclusion in the results, in this example only assets with a verified certificate will be included. The criterion itself is composed of:

    * The field by which you want to filter (`Asset.CERTIFICATE_STATUS` in this example).
        * A fixed member within that field that builds lineage filters, called `.inLineage`.
        * The operator you want to use to compare values for that field in order to determine whether or not an asset matches (`.eq()` in this example).
        * The value you want to compare against using that operator (`CertificateStatus.VERIFIED` in this example).
3. Optionally, you can use `includesCondition` in your lineage request to specify whether the `includeInResults` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
4. When you then stream the results, only those assets that match the filter criteria will be included in the response.
5. You can then collect them (standard stream operation) to give a complete list, across pages, of those assets that match the criteria.

| POST /api/meta/lineage/list | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799",   "depth": 1000000,   "direction": "INPUT",   "entityFilters": { // (1)     "condition": "AND",     "criterion": [ // (2)       {         "attributeName": "certificateStatus",         "operator": "contains",         "attributeValue": "VERIFIED"       }     ]   },   "from": 0,   "size": 10,   "excludeMeanings": true,   "excludeClassifications": true }  ``` |

1. Build the request as you would above, but add `entityFilters` to the request before sending it to Atlan.
2. You can specify any number of criteria to include in your filters, and whether they should all apply (condition of `AND`) or only any one of them need apply (condition of `OR`) for a resulting asset to be included. Each filter criterion is a combination of:

    * The name of the field in Atlan to use for filtering the results
        * The value of that field that should be compared against for filtering
        * An operator that defines how that comparison should be done to be considered a match

### Limit lineage traversal[¶](#limit-lineage-traversal "Permanent link")

[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can also limit how much of the lineage is traversed. You can do this both at an asset\-level and a relationship\-level:

Java

Python

Kotlin

Raw REST API

| Limit lineage traversal | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` List<Asset> activeAssets = Asset.lineage(client, "495b1516-aaaf-4390-8cfd-b11ade7a7799")     .direction(AtlanLineageDirection.DOWNSTREAM)     .whereAsset(FluentLineage.ACTIVE) // (1)     .assetsCondition(FilterList.Condition.AND) // (2)     .whereRelationship(FluentLineage.ACTIVE)     .relationshipsCondition(FilterList.Condition.AND) // (3)     .stream() // (4)     .collect(Collectors.toList()); // (5)  ``` |

1. Provide your conditions to the `whereAsset` and `whereRelationship` of the request. This will ensure that once an asset (or relationship) is found in lineage traversal that does **not** match the conditions, further lineage traversal beyond that asset (or relationship) will not be done.

    In this example, that means that once we hit an archived or soft\-deleted asset (or relationship) in the lineage, we will not look for any further downstream lineage from that archived or soft\-deleted asset (or relationship). (In other words, we will limit the lineage results to only active assets by short\-circuiting traversal when we hit an archived or soft\-deleted asset or relationship.)

    FluentLineage.ACTIVE constant

    Note that the `FluentLineage.ACTIVE` example here is a predefined filter constant. If you look at its code, it is equivalent to writing any other lineage filter:

    ```
    Asset.STATUS.inLineage.eq(AtlanStatus.ACTIVE)

    ```
        When you request lineage directly on an asset, as in the example above, by default only active assets and relationships are included. (In other words, the filters by `FluentLineage.ACTIVE` are applied by default when using the `Asset.lineage()` request style.)
2. Optionally, you can use `assetsCondition` in your lineage request to specify whether the `whereAsset` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
3. Optionally, you can use `relationshipsCondition` in your lineage request to specify whether the `whereRelationship` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
4. When you then fetch the results and iterate through them, not only are those assets that match the filter criteria the only ones included in the response, but the traversal is likely to run significantly faster as well by entirely skipping any further downstream traversal through the assets that do not match.
5. You can continue to process the results from there as you would with any stream: filtering, mapping, running something for each result, or in this example collecting them into a list.

| Limit lineage traversal | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import LineageDirection from pyatlan.model.assets import Asset from pyatlan.model.lineage import FluentLineage from pyatlan.model.lineage import FilterList  client = AtlanClient() request = (     Asset.lineage(guid="495b1516-aaaf-4390-8cfd-b11ade7a7799")     .direction(LineageDirection.DOWNSTREAM)     .where_assets(FluentLineage.ACTIVE)  # (1)     .assets_condition(FilterList.Condition.AND)  # (2)     .where_relationships(FluentLineage.ACTIVE)     .relationships_condition(FilterList.Condition.AND)  # (3)     .request ) response = client.asset.get_lineage_list(request)  # (4) for asset in response: # (5)     ...  ``` |

1. Provide your conditions to the `where_assets` and `where_relationships` of FluentLineage. This will ensure that once an asset (or relationship) is found in lineage traversal that does **not** match the conditions, further lineage traversal beyond that asset (or relationship) will not be done.

    In this example, that means that once we hit an archived or soft\-deleted asset (or relationship) in the lineage, we will not look for any further downstream lineage from that archived or soft\-deleted asset (or relationship). (In other words, we will limit the lineage results to only active assets by short\-circuiting traversal when we hit an archived or soft\-deleted asset or relationship.)

    FluentLineage.ACTIVE constant

    Note that the `FluentLineage.ACTIVE` example here is a predefined filter constant. If you look at its code, it is equivalent to writing any other lineage filter:

    ```
    Asset.STATUS.in_lineage.eq(EntityStatus.ACTIVE)

    ```
        When you request lineage directly on an asset, as in the example above, by default only active assets and relationships are included. (In other words, the filters by `FluentLineage.ACTIVE` are applied by default when using the `Asset.lineage()` request style.)
2. Optionally, you can use `assets_condition` in your lineage request to specify whether the `where_assets` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
3. Optionally, you can use `relationships_condition` in your lineage request to specify whether the `where_relationships` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
4. Use the `request` to get the `response` that can be used to iterate through the assets.
5. Iterate through the assets and use them as you will.

| Limit lineage traversal | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` val activeAssets = Asset.lineage(client, "495b1516-aaaf-4390-8cfd-b11ade7a7799")     .direction(AtlanLineageDirection.DOWNSTREAM)     .whereAsset(FluentLineage.ACTIVE) // (1)     .assetsCondition(FilterList.Condition.AND) // (2)     .whereRelationship(FluentLineage.ACTIVE)     .relationshipsCondition(FilterList.Condition.AND) // (3)     .stream() // (4)     .collect(Collectors.toList()); // (5)  ``` |

1. Provide your conditions to the `whereAsset` and `whereRelationship` of the request. This will ensure that once an asset (or relationship) is found in lineage traversal that does **not** match the conditions, further lineage traversal beyond that asset (or relationship) will not be done.

    In this example, that means that once we hit an archived or soft\-deleted asset (or relationship) in the lineage, we will not look for any further downstream lineage from that archived or soft\-deleted asset (or relationship). (In other words, we will limit the lineage results to only active assets by short\-circuiting traversal when we hit an archived or soft\-deleted asset or relationship.)

    FluentLineage.ACTIVE constant

    Note that the `FluentLineage.ACTIVE` example here is a predefined filter constant. If you look at its code, it is equivalent to writing any other lineage filter:

    ```
    Asset.STATUS.inLineage.eq(AtlanStatus.ACTIVE)

    ```
        When you request lineage directly on an asset, as in the example above, by default only active assets and relationships are included. (In other words, the filters by `FluentLineage.ACTIVE` are applied by default when using the `Asset.lineage()` request style.)
2. Optionally, you can use `assetsCondition` in your lineage request to specify whether the `whereAsset` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
3. Optionally, you can use `relationshipsCondition` in your lineage request to specify whether the `whereRelationship` criteria
should be combined with **AND (default)** or if any matching is sufficient (**OR**).
4. When you then fetch the results and iterate through them, not only are those assets that match the filter criteria the only ones included in the response, but the traversal is likely to run significantly faster as well by entirely skipping any further downstream traversal through the assets that do not match.
5. You can continue to process the results from there as you would with any stream: filtering, mapping, running something for each result, or in this example collecting them into a list.

| POST /api/meta/lineage/list | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799",   "depth": 1000000,   "direction": "OUTPUT",   "entityFilters": {     "condition": "AND",     "criterion": [       {         "attributeName": "__state",         "operator": "=",         "attributeValue": "ACTIVE"       }     ]   },   "entityTraversalFilters": { // (1)     "condition": "AND",     "criterion": [       {         "attributeName": "__state",         "operator": "=",         "attributeValue": "ACTIVE"       }     ]   },   "from": 0,   "size": 10,   "excludeMeanings": true,   "excludeClassifications": true }  ``` |

1. Provide your conditions to the `entityTraversalFilters` of the request. This will ensure that once an asset is found in lineage traversal that does **not** match the conditions, further lineage traversal beyond that asset will not be done.

    In this example, that means that once we hit an archived of soft\-deleted asset in the lineage, we will not look for any further downstream lineage from that archived or soft\-deleted asset. (In other words, we will limit the lineage results to only active assets by short\-circuiting traversal when we hit an archived or soft\-deleted asset.)

### Limit asset details[¶](#limit-asset-details "Permanent link")

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can also limit the details for each asset returned by lineage:

Java

Python

Kotlin

Raw REST API

| Limit asset details | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` LineageListRequest request = Asset.lineage(client, "495b1516-aaaf-4390-8cfd-b11ade7a7799")     .direction(AtlanLineageDirection.DOWNSTREAM)     .includeOnResults(Asset.DESCRIPTION) // (1)     .toRequestBuilder() // (2)     .excludeAtlanTags(false) // (3)     .excludeMeanings(false) // (4)     .build(); List<Asset> withTagsAndTerms = request.fetch(client) // (5)     .stream() // (6)     .collect(Collectors.toList());  ``` |

1. Build the request as above, but chain as many `includeOnResults` as you like to specify the attributes you want to include on each asset in the lineage.
2. You can also decide whether to include or exclude Atlan tags and assigned business terms, but to do this you must first conver the fluent lineage request into a `LineageListRequest`. You can do this by chaining `toRequestBuilder()`.
3. You can then use `excludeAtlanTags(false)` to ensure that Atlan tags are included on each asset in lineage.
4. You can also use `excludeMeanings(false)` to ensure that assigned business terms are included on each asset in lineage.
5. You then need to call `fetch()` on the `LineageListRequest` to actually run the lineage request. Because this operation will directly request lineage for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. You can then stream and further transform or collect the results from the request, directly.

| Limit asset details | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import LineageDirection from pyatlan.model.assets import Asset  client = AtlanClient() request = (     Asset.lineage(guid="495b1516-aaaf-4390-8cfd-b11ade7a7799")     .direction(LineageDirection.DOWNSTREAM)     .include_on_results(Asset.DESCRIPTION) # (1)     .exclude_atlan_tags(False) # (2)     .exclude_meanings(False) # (3)     .request ) response = client.asset.get_lineage_list(request)  # (4) for asset in response:  # (5)     ...  ``` |

1. Build the request as above, but chain as many `include_on_results` as you like to specify the attributes you want to include on each asset in the lineage.
2. You can use `exclude_atlan_tags(False)` to ensure that Atlan tags are included on each asset in lineage.
3. You can use `exclude_meanings(False)` to ensure that assigned business terms are included on each asset in lineage.
4. You then need to call `get_lineage_list()` with the `LineageListRequest` to actually run the lineage request.
5. You can then iterate through and further transform or collect the results from the request.

| Limit asset details | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val request = Asset.lineage(client, "495b1516-aaaf-4390-8cfd-b11ade7a7799")     .direction(AtlanLineageDirection.DOWNSTREAM)     .includeOnResults(Asset.DESCRIPTION) // (1)     .toRequestBuilder() // (2)     .excludeAtlanTags(false) // (3)     .excludeMeanings(false) // (4)     .build() val withTagsAndTerms = request.fetch(client) // (5)     .stream() // (6)     .toList()  ``` |

1. Build the request as above, but chain as many `includeOnResults` as you like to specify the attributes you want to include on each asset in the lineage.
2. You can also decide whether to include or exclude Atlan tags and assigned business terms, but to do this you must first conver the fluent lineage request into a `LineageListRequest`. You can do this by chaining `toRequestBuilder()`.
3. You can then use `excludeAtlanTags(false)` to ensure that Atlan tags are included on each asset in lineage.
4. You can also use `excludeMeanings(false)` to ensure that assigned business terms are included on each asset in lineage.
5. You then need to call `fetch()` on the `LineageListRequest` to actually run the lineage request. Because this operation will directly request lineage for the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. You can then stream and further transform or collect the results from the request, directly.

| POST /api/meta/lineage/list | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799",   "depth": 1000000,   "direction": "OUTPUT",   "attributes": [ // (1)     "description"   ],   "from": 0,   "size": 10,   "excludeClassifications": false, // (2)   "excludeMeanings": false // (3) }  ``` |

1. Build the request as above, but add as many field names as you like to specify the attributes you want to include on each asset in the lineage.
2. You can use `"excludeClassifications": false` to ensure that Atlan tags are included on each asset in lineage.
3. You can use `"excludeMeanings": false` to ensure that assigned business terms are included on each asset in lineage.

Original API[¶](#original-api "Permanent link")
-----------------------------------------------

Deprecated and removed

The original lineage API was previously deprecated, and now no longer exists in the latest releases of the SDKs. It is slower, does not support paging, and will not receive any enhancements. We would therefore strongly recommend using the newer API (described above); however, the original API is described here for completeness.

**Retrieve lineage (deprecated)**

To fetch lineage, you need to request lineage from Atlan from a particular starting point:

Java

Python

Raw REST API

| Retrieve lineage | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` LineageRequest request = LineageRequest.builder() // (1)         .guid("495b1516-aaaf-4390-8cfd-b11ade7a7799") // (2)         .depth(0) // (3)         .direction(AtlanLineageDirection.BOTH) // (4)         .hideProcess(true) // (5)         .allowDeletedProcess(false) // (6)         .build(); // (7) LineageResponse response = request.fetch(); // (8)  ``` |

1. Build a `LineageRequest` to specify the starting point for your lineage retrieval.
2. The starting point for lineage must be the [GUID](../../../../getting-started/#guid_1) of an asset.
3. You can specify how far you want lineage to be fetched using `depth()`. A depth of `1` will only fetch immediate upstream and downstream assets, while `2` will also fetch the immediate upstream and downstream assets of those assets, and so on. The default value of `0` will fetch *all* upstream and downstream assets.

    If you expect extensive lineage, change the default!

    The default value of `0` can result in a long\-running API call with a very large response payload. If you expect your lineage to be extensive, you may want to try smaller depths first.
4. You can fetch only upstream assets, only downstream assets, or lineage in both directions.
5. Decide whether to include processes in the response.

    Use `true` if you want to use the SDK's traversal helpers

    Currently the SDK's traversal logic only works when this is set to `true`. Unless you want to code your own traversal logic, set `hideProcess` to `true`.
6. If `allowDeletedProcess` is set to `true` *and* `hideProcess` is set to `false` then deleted (archived) processes will also be included in the response.
7. Build the request.
8. Call the `fetch()` method to actually retrieve the lineage details from Atlan.

| Retrieve lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import LineageDirection from pyatlan.model.lineage import LineageRequest  client = AtlanClient() request = LineageRequest( # (1)     guid="495b1516-aaaf-4390-8cfd-b11ade7a7799", # (2)     depth=0, # (3)     direction=LineageDirection.BOTH, # (4)     hide_process=True, # (5)     allow_deleted_process=False, # (6) ) response = client.asset.get_lineage(request) # (7)  ``` |

1. Build a `LineageRequest` to specify the starting point for your lineage retrieval.
2. The starting point for lineage must be the [GUID](../../../../getting-started/#guid_1) of an asset.
3. You can specify how far you want lineage to be fetched using `depth`. A depth of `1` will only fetch immediate upstream and downstream assets, while `2` will also fetch the immediate upstream and downstream assets of those assets, and so on. The default value of `0` will fetch *all* upstream and downstream assets.

    If you expect extensive lineage, change the default!

    The default value of `0` can result in a long\-running API call with a very large response payload. If you expect your lineage to be extensive, you may want to try smaller depths first.
4. You can fetch only upstream assets, only downstream assets, or lineage in both directions.
5. Decide whether to include processes in the response.

    Use `True` if you want to use the SDK's traversal helpers

    Currently the SDK's traversal logic only works when this is set to `True`. Unless you want to code your own traversal logic, set `hide_process` to `True`.
6. If `allow_deleted_process` is set to `True` *and* `hide_process` is set to `False` then deleted (archived) processes will also be included in the response.
7. Call the `asset.get_lineage()` method to actually retrieve the lineage details from Atlan.

| POST /api/meta/lineage/getlineage | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799", // (1)   "depth": 0, // (2)   "direction": "BOTH", // (3)   "hideProcess": true, // (4)   "allowDeletedProcess": false // (5) }  ``` |

1. The starting point for lineage must be the [GUID](../../../../getting-started/#guid_1) of an asset.
2. You can specify how far you want lineage to be fetched using `depth`. A depth of `1` will only fetch immediate upstream and downstream assets, while `2` will also fetch the immediate upstream and downstream assets of those assets, and so on. The default value of `0` will fetch *all* upstream and downstream assets.

    If you expect extensive lineage, change the default!

    The default value of `0` can result in a long\-running API call with a very large response payload. If you expect your lineage to be extensive, you may want to try smaller depths first.
3. You can fetch only upstream assets, only downstream assets, or lineage in both directions.
4. Decide whether to include processes in the response.
5. If `allowDeletedProcess` is set to `true` *and* `hideProcess` is set to `false` then deleted (archived) processes will also be included in the response.

**Traverse lineage (deprecated)**

To assist with traversal of the lineage, the SDK provides some helper methods.

**Downstream assets (deprecated)**

To retrieve assets immediately downstream from the originally\-requested asset:

Java

Python

Raw REST API

| Retrieve downstream assets | |
| --- | --- |
| ```  9 10 11 ``` | ``` Set<String> downstreamGuids = response.getDownstreamAssetGuids(); // (1) List<Asset> downstreamAssets = response.getDownstreamAssets(); // (2) downstreamGuids = response.getDownstreamProcessGuids(); // (3)  ``` |

1. The `getDownstreamAssetGuids()` method will return the GUIDs of assets that are immediately downstream.
2. The `getDownstreamAssets()` method will return the asset objects for the assets that are immediately downstream.
3. The `getDownstreamProcessGuids()` method will return the GUIDs of the processes that run immediately downstream.

| Retrieve downstream assets | |
| --- | --- |
| ``` 14 15 16 ``` | ``` downstream_guids = response.get_downstream_asset_guids() # (1) downstream_assets = response.get_downstream_assets() # (2) downstream_process_guids = response.get_downstream_process_guids() # (3)  ``` |

1. The `get_downstream_asset_guids()` method will return the GUIDs of assets that are immediately downstream.
2. The `get_downstream_assets()` method will return the asset objects for the assets that are immediately downstream.
3. The `get_downstream_process_guids()` method will return the GUIDs of the processes that run immediately downstream.

| POST /api/meta/lineage/getlineage | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799", // (1)   "depth": 1, // (2)   "direction": "OUTPUT" // (3) }  ``` |

1. The starting point for lineage must be the [GUID](../../../../getting-started/#guid_1) of an asset.
2. A depth of `1` will only fetch immediate upstream and downstream assets.
3. A direction of `OUTPUT` will fetch only downstream assets.

**Upstream assets (deprecated)**

To retrieve assets immediately upstream from the originally\-requested asset:

Java

Python

Raw REST API

| Retrieve upstream assets | |
| --- | --- |
| ```  9 10 11 ``` | ``` Set<String> upstreamGuids = response.getUpstreamAssetGuids(); // (1) List<Asset> upstreamAssets = response.getUpstreamAssets(); // (2) upstreamGuids = response.getUpstreamProcessGuids(); // (3)  ``` |

1. The `getUpstreamAssetGuids()` method will return the GUIDs of assets that are immediately upstream.
2. The `getUpstreamAssets()` method will return the asset objects for the assets that are immediately upstream.
3. The `getUpstreamProcessGuids()` method will return the GUIDs of the processes that run immediately upstream.

| Retrieve upstream assets | |
| --- | --- |
| ``` 14 15 16 ``` | ``` upstream_guids = response.get_upstream_asset_guids() # (1) upstream_assets = response.get_upstream_assets() # (2) upstream_process_guids = response.get_upstream_process_guids() # (3)  ``` |

1. The `get_upstream_asset_guids()` method will return the GUIDs of assets that are immediately upstream.
2. The `get_upstream_assets()` method will return the asset objects for the assets that are immediately upstream.
3. The `get_upstream_process_guids()` method will return the GUIDs of the processes that run immediately upstream.

| POST /api/meta/lineage/getlineage | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` {   "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799", // (1)   "depth": 1, // (2)   "direction": "INPUT" // (3) }  ``` |

1. The starting point for lineage must be the [GUID](../../../../getting-started/#guid_1) of an asset.
2. A depth of `1` will only fetch immediate upstream and downstream assets.
3. A direction of `INPUT` will fetch only upstream assets.

**Depth\-first traversal (deprecated)**

You might want to traverse more than only the immediate upstream or downstream assets. To retrieve all assets that are downstream from the originally\-requested asset, across multiple degrees of separation, using a depth\-first search traversal:

Java

Python

Raw REST API

| Retrieve all downstream assets | |
| --- | --- |
| ```  9 10 ``` | ``` List<String> dfsDownstreamGuids = response.getAllDownstreamAssetGuidsDFS(); // (1) List<Asset> dfsDownstream = response.getAllDownstreamAssetsDFS(); // (2)  ``` |

1. The `getAllDownstreamAssetGuidsDFS()` method will return the GUIDs of all assets that are downstream.

    The first GUID will always be the GUID of the asset used as the starting point for lineage, so even if there is no downstream lineage this will still return a list with a single GUID.

    The traversal will be in depth\-first order downstream. This means after the GUID for the starting point, the list will contain GUIDs of assets immediately downstream. These will be followed by the assets that are immediately downstream from those assets, and so on. (The deeper you get into the list, the further downstream you will be in lineage from the starting point.)
2. The `getAllDownstreamAssetsDFS()` method will return the asset objects for all assets that are downstream.

    The first asset object will always be the object for the asset used as the starting point for lineage, so even if there is no downstream lineage this will still return a list with a single asset.

    The traversal will be in depth\-first order downstream. This means after the asset for the starting point, the list will contain assets of assets immediately downstream. These will be followed by the assets that are immediately downstream from those assets, and so on. (The deeper you get into the list, the further downstream you will be in lineage from the starting point.)

| Retrieve all upstream assets | |
| --- | --- |
| ```  9 10 ``` | ``` List<String> dfsDownstreamGuids = response.getAllUpstreamAssetGuidsDFS(); // (1) List<Asset> dfsUpstream = response.getAllUpstreamAssetsDFS(); // (2)  ``` |

1. The `getAllUpstreamAssetGuidsDFS()` method will return the GUIDs of all assets that are upstream.

    The first GUID will always be the GUID of the asset used as the starting point for lineage, so even if there is no upstream lineage this will still return a list with a single GUID.

    The traversal will be in depth\-first order upstream. This means after the GUID for the starting point, the list will contain GUIDs of assets immediately upstream. These will be followed by the assets that are immediately upstream from those assets, and so on. (The deeper you get into the list, the further upstream you will be in lineage from the starting point.)
2. The `getAllUpstreamAssetsDFS()` method will return the asset objects for all assets that are upstream.

    The first asset object will always be the object for the asset used as the starting point for lineage, so even if there is no upstream lineage this will still return a list with a single asset.

    The traversal will be in depth\-first order upstream. This means after the asset for the starting point, the list will contain assets of assets immediately upstream. These will be followed by the assets that are immediately upstream from those assets, and so on. (The deeper you get into the list, the further upstream you will be in lineage from the starting point.)

| Retrieve all downstream assets | |
| --- | --- |
| ``` 14 15 ``` | ``` dfs_downstream_guids = response.get_all_downstream_asset_guids_dfs() # (1) dfs_downstream_assets = response.get_all_downstream_assets_dfs() # (2)  ``` |

1. The `get_all_downstream_asset_guids_dfs()` method will return the GUIDs of all assets that are downstream.

    The first GUID will always be the GUID of the asset used as the starting point for lineage, so even if there is no downstream lineage this will still return a list with a single GUID.

    The traversal will be in depth\-first order downstream. This means after the GUID for the starting point, the list will contain GUIDs of assets immediately downstream. These will be followed by the assets that are immediately downstream from those assets, and so on. (The deeper you get into the list, the further downstream you will be in lineage from the starting point.)
2. The `get_all_downstream_assets_dfs()` method will return the asset objects for all assets that are downstream.

    The first asset object will always be the object for the asset used as the starting point for lineage, so even if there is no downstream lineage this will still return a list with a single asset.

    The traversal will be in depth\-first order downstream. This means after the asset for the starting point, the list will contain assets of assets immediately downstream. These will be followed by the assets that are immediately downstream from those assets, and so on. (The deeper you get into the list, the further downstream you will be in lineage from the starting point.)

| Retrieve all upstream assets | |
| --- | --- |
| ``` 14 15 ``` | ``` dfs_upstream_guids = response.get_all_upstream_asset_guids_dfs() # (1) dfs_upstream_assets = response.get_all_upstream_assets_dfs() # (2)  ``` |

1. The `get_all_upstream_asset_guids_dfs()` method will return the GUIDs of all assets that are upstream.

    The first GUID will always be the GUID of the asset used as the starting point for lineage, so even if there is no upstream lineage this will still return a list with a single GUID.

    The traversal will be in depth\-first order upstream. This means after the GUID for the starting point, the list will contain GUIDs of assets immediately upstream. These will be followed by the assets that are immediately upstream from those assets, and so on. (The deeper you get into the list, the further upstream you will be in lineage from the starting point.)
2. The `get_all_upstream_assets_dfs()` method will return the asset objects for all assets that are upstream.

    The first asset object will always be the object for the asset used as the starting point for lineage, so even if there is no upstream lineage this will still return a list with a single asset.

    The traversal will be in depth\-first order upstream. This means after the asset for the starting point, the list will contain assets of assets immediately upstream. These will be followed by the assets that are immediately upstream from those assets, and so on. (The deeper you get into the list, the further upstream you will be in lineage from the starting point.)

Multiple API calls

You may either need to make multiple API calls using the approaches above, or retrieve all downstream lineage and in your code traverse the returned relationships.

**More details on what *all* means here**

Keep in mind that when we say "all" above we mean all assets that are found *in the response*. If you have modified your request parameters to limit the lineage (for example, through `depth()` or `direction()`) then this will only traverse what is found in the response — not necessarily all lineage in Atlan.

---

2022\-12\-022024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/lineage/traverse/) to provide us with more information. 

Back to top

[Previous Manage lineage](../manage/) [Next Bulk updates](../../../../patterns/bulk/) 

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

