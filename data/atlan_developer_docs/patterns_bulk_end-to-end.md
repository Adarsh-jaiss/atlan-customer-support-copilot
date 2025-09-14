# Source URL
https://developer.atlan.com/patterns/bulk/end-to-end/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/bulk/end-to-end/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to efficiently update multiple assets in Atlan with a step-by-step guide.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to efficiently update multiple assets in Atlan with a step-by-step guide.
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/bulk/end-to-end.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: End-to-end bulk update - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/bulk/end-to-end/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to efficiently update multiple assets in Atlan with a step-by-step guide.
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/bulk/end-to-end.png
meta-twitter:title: End-to-end bulk update - Developer
meta-viewport: width=device-width,initial-scale=1
title: End-to-end bulk update - Developer
-->

[Skip to content](#end-to-end-bulk-update) Developer End\-to\-end bulk update Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

End\-to\-end bulk update[¶](#end-to-end-bulk-update "Permanent link")
=====================================================================

Running example

To walk through this using an example, and to compare and contrast the approaches, imagine you want to:

* Mark all views (including materialized views) in a particular schema as verified, unless they already have some certificate.
* Change the owner of the same views.

Step\-by\-step[¶](#step-by-step "Permanent link")
-------------------------------------------------

The usual end\-to\-end pattern for updating many assets efficiently involves three steps:

1. Finding the assets you want to update.
2. Applying your updates to each asset (in\-memory).
3. Sending those changes to Atlan (in batches).

You can do each of these steps in sequence, for example:

### 1\. Find the assets[¶](#1-find-the-assets "Permanent link")

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

You start by first finding the assets you want to update. This is usually best done through a [search](../../../search/). (For other common examples, have a look at the [search snippets](../../../snippets/common-examples/finding/).)

Java

Python

Kotlin

Raw REST API

| Example: get all views in a schema | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` String schemaQN = "default/snowflake/1662194632/MYDB/MY_SCH"; // (1) IndexSearchRequest findViews = client.assets.select() // (2)     .where(Asset.QUALIFIED_NAME.startsWith(schemaQN)) // (3)     .where(Asset.TYPE_NAME.in(List.of(View.TYPE_NAME, MaterializedView.TYPE_NAME))) // (4)     .whereNot(Asset.CERTIFICATE_STATUS.hasAnyValue()) // (5)     .pageSize(100) // (6)     .includeOnResults(Asset.DESCRIPTION) // (7)     .includeOnResults(Asset.CERTIFICATE_STATUS)     .includeOnResults(Asset.OWNER_USERS)     .toRequest(); // (8)  IndexSearchResponse response = findViews.search(); // (9)  ``` |

1. The `qualifiedName` of every view starts with the `qualifiedName` of its parent (schema), so we can limit the results to a particular schema by using the `qualifiedName`.
2. To start building up a query with multiple conditions, you can use the `select()` helper on any client's `assets` member.
3. You can chain `where()` methods to define all the conditions the search results must match. You can use the static constants within any given type to select a particular attribute (like `QUALIFIED_NAME` in this example), and then limit results to only those assets whose `qualifiedName` starts with the `qualifiedName` of the schema (by using the `startsWith()` predicate). In this example, that means only assets that are within this particular schema will be returned as results.
4. Since there could be tables, views, materialized views and columns in this schema — but you only want views and materialized views — you can use the `Asset.TYPE_NAME.in()` method to restrict results to only views and materialized views.
5. Since you only want to update views that do not already have a certificate, you can further limit the results using the `whereNot()` method. This will exclude any assets where a certificate already `hasAnyValue()`.
6. Here you can play around with different page sizes, to further limit API calls by retrieving more results per page.
7. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every view will include its description, certificate, and individual owners. (Limit these attributes to the minimum you need about each view to do your intended work.)
8. You can translate the object you've built up into various outputs, for example immediately calculating a count of how many results match or streaming them directly for processing. In this case, the `toRequest()` method will give us the resulting set of criteria back as a complete index search request.
9. You can then execute the search based on the request.

| Example: get all views in a schema | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.client.asset import Batch from pyatlan.errors import AtlanError from pyatlan.model.enums import CertificateStatus from pyatlan.model.fluent_search import CompoundQuery, FluentSearch from pyatlan.model.assets import Asset, View, MaterialisedView  client = AtlanClient() schema_qualified_name = "default/snowflake/1662194632/MYDB/MY_SCH"  # (1) find_views = (     FluentSearch()  # (2)     .where(Asset.QUALIFIED_NAME.startswith(schema_qualified_name))  # (3)     .where(CompoundQuery.asset_types([View, MaterialisedView]))  # (4)     .where(CompoundQuery.active_assets())     .where_not(Asset.CERTIFICATE_STATUS.has_any_value())  # (5)     .page_size(100)  # (6)     .include_on_results(Asset.DESCRIPTION)  # (7)     .include_on_results(Asset.CERTIFICATE_STATUS)     .include_on_results(Asset.OWNER_USERS) ).to_request()  # (8)  response = client.asset.search(find_views)  # (9)  ``` |

1. The `qualified_name` of every view starts with the `qualified_name` of its parent (schema), so we can limit the results to a particular schema by using the `qualified_name`.
2. To start building up a query with multiple conditions, you can use a `FluentSearch()` object.
3. You can chain `where()` methods to define all the conditions the search results must match. You can use the class variables within any given type to select a particular attribute (like `QUALIFIED_NAME` in this example), and then limit results to only those assets whose `qualified_name` starts with the `qualified_name` of the schema (by using the `startswith()` predicate). In this example, that means only assets that are within this particular schema will be returned as results.
4. Since there could be tables, views, materialized views and columns in this schema — but you only want views and materialized views — you can use the `CompoundQuery.asset_types()` helper method to restrict results to only views and materialized views.
5. Since you only want to update views that do not already have a certificate, you can further limit the results using the `where_not()` method. This will exclude any assets where a certificate already `has_any_value()`.
6. Here you can play around with different page sizes, to further limit API calls by retrieving more results per page.
7. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every view will include its description, certificate, and individual owners. (Limit these attributes to the minimum you need about each view to do your intended work.)
8. You can translate the object you've built up into various outputs, for example immediately calculating a count of how many results match or executing the query to start processing results directly. In this case, the `to_request()` method will give us the resulting set of criteria back as a complete index search request.
9. You can then execute the search based on the request.

| Example: get all views in a schema | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` val schemaQN = "default/snowflake/1662194632/MYDB/MY_SCH" // (1) val findViews = client.assets.select() // (2)     .where(Asset.QUALIFIED_NAME.startsWith(schemaQN)) // (3)     .where(Asset.TYPE_NAME.`in`(listOf(View.TYPE_NAME, MaterializedView.TYPE_NAME))) // (4)     .whereNot(Asset.CERTIFICATE_STATUS.hasAnyValue()) // (5)     .pageSize(100) // (6)     .includeOnResults(Asset.DESCRIPTION) // (7)     .includeOnResults(Asset.CERTIFICATE_STATUS)     .includeOnResults(Asset.OWNER_USERS)     .toRequest() // (8)  val response = findViews.search() // (9)  ``` |

1. The `qualifiedName` of every view starts with the `qualifiedName` of its parent (schema), so we can limit the results to a particular schema by using the `qualifiedName`.
2. To start building up a query with multiple conditions, you can use the `select()` helper on any client's `assets` member.
3. You can chain `where()` methods to define all the conditions the search results must match. You can use the static constants within any given type to select a particular attribute (like `QUALIFIED_NAME` in this example), and then limit results to only those assets whose `qualifiedName` starts with the `qualifiedName` of the schema (by using the `startsWith()` predicate). In this example, that means only assets that are within this particular schema will be returned as results.
4. Since there could be tables, views, materialized views and columns in this schema — but you only want views and materialized views — you can use the `Asset.TYPE_NAME.in()` helper method to restrict results to only views and materialized views.
5. Since you only want to update views that do not already have a certificate, you can further limit the results using the `whereNot()` method. This will exclude any assets where a certificate already `hasAnyValue()`.
6. Here you can play around with different page sizes, to further limit API calls by retrieving more results per page.
7. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every view will include its description, certificate, and individual owners. (Limit these attributes to the minimum you need about each view to do your intended work.)
8. You can translate the object you've built up into various outputs, for example immediately calculating a count of how many results match or streaming them directly for processing. In this case, the `toRequest()` method will give us the resulting set of criteria back as a complete index search request.
9. You can then execute the search based on the request.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": { // (2)         "filter": [ // (3)           {             "prefix": { // (4)               "qualifiedName": {                 "value": "default/snowflake/1662194632/MYDB/MY_SCH"               }             }           },           {             "terms": { // (5)               "__typeName.keyword": [                 "View",                 "MaterialisedView"               ]             }           },           {             "term": { // (6)               "__state": {                 "value": "ACTIVE"               }             }           }         ],         "must_not": [ // (7)           {             "exists": {               "field": "certificateStatus"             }           }         ]       }     },     "sort": [ // (8)       {         "__guid": {           "order": "asc"         }       }     ],     "from": 0, // (9)     "size": 100,     "track_total_hits": true   },   "attributes": [ // (10)     "description",     "certificateStatus",     "ownerUsers"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Run a search to find the views and materialized views.
2. To start building up a query with multiple conditions, you can use a `bool` query in Elasticsearch.
3. You can use the `filter` criteria to define all the conditions the search results must match in a binary way (either matches or doesn't). This avoids the need to calculate a score for each result.
4. The `qualifiedName` of every view starts with the `qualifiedName` of its parent (schema), so we can limit the results to a particular schema by using the `qualifiedName`.
5. Since there could be tables, views, materialized views and columns in this schema — but you only want views and materialized views — you can use an exact match on multiple types to restrict results to only views and materialized views.
6. Searches by default will return *all* assets that are found — whether active or archived (soft\-deleted). In most cases, you probably only want the active ones.
7. Since you only want to update views that do not already have a certificate, you can further limit the results using the `must_not` clause. This will exclude any assets that already have a certificate present.
8. When paging through results, you should specify a sort to give a stable set of results across pages. The most reliable sort will be by GUID of the asset, as this is guaranteed to be unique for every asset.
9. Here you can play around with different page sizes, to further limit API calls by retrieving more results per page.
10. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every view will include its description, certificate, and individual owners. (Limit these attributes to the minimum you need about each column to do your intended work.)

### 2\. Build\-up your changes[¶](#2-build-up-your-changes "Permanent link")

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[1\.10\.5](https://github.com/atlanhq/atlan-java/releases/tag/v1.10.5 "Minimum version")

Next, you iterate through those results and make the changes you want to each one. Use the [multiple operations pattern](../../../snippets/advanced-examples/combine/) to make multiple changes to each asset.

Java

Python

Kotlin

Raw REST API

| Example: iterate through results and make changes | |
| --- | --- |
| ``` 13 14 15 16 17 18 19 20 21 ``` | ``` AssetBatch batch = new AssetBatch(client, 20); // (1) try {     for (Asset result : response) { // (2)         Asset revised = result.trimToRequired() // (3)             .certificateStatus(CertificateStatus.VERIFIED) // (4)             .ownerUser("jsmith")             .build();         batch.add(revised); // (5)     }  ``` |

1. Create a batch of assets to build\-up the changes across multiple assets before applying those changes in Atlan itself.

    * The first parameter defines the Atlan tenant on which the batch will be processed
        * The second specifies the maximum number of assets to build\-up before sending them across to Atlan
 **Additional parameters**

    By default (using only the options above) no classifications or custom metadata will be added or changed on the assets in each batch. To also include classifications and custom metadata, you need to use these additional parameters:

    * A third parameter of `true` to replace all classifications on the assets in the batch, which would include removing classifications if none are provided for the assets in the batch itself (or `false` if you still want to ignore classifications)
        * A fourth parameter to control how custom metadata should be handled for the assets: `IGNORE` any custom metadata changes in the batch, `OVERWRITE` to replace all custom metadata with what's provided in the batch (including removing custom metadata that already exists on an asset), or `MERGE` to only add or update custom metadata based on what's in the batch (leaving other existing custom metadata unchanged)
        * a fifth parameter to control whether failures should be captured across batches (`true`) or ignored (`false`)
        * a sixth parameter to control whether the batch should only attempt to update assets that already exist (`true`) or also create assets if they do not yet exist (`false`)
        * a seventh parameter to control whether details about each created and updated asset across batches should be tracked (`true`) or ignored (`false`) — counts will always be kept
        * an eighth parameter to control whether the matching for determining whether an asset already exists should be done in a case\-insensitive way (`true`) or case\-sensitively (`false`)
        * a ninth parameter to control what kind of assets to create, if not running in `updateOnly` mode: partial assets (only available in lineage), or full assets
        * a tenth parameter to control whether the matching for determining whether an asset already exists should be done strictly according to the data type specified (`false`), or if tables, views and materialized views should be treated interchangeably (`true`)
2. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../snippets/advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.
3. Every asset implements the `trimToRequired()` method, which gives you a builder containing only the bare minimum information needed to update that asset.

    Limit your asset to only what you intend to update

    When you send an update to Atlan, it will only attempt to change the information you send in your request — leaving any information not in your request as\-is (unchanged) on the asset in Atlan. By using `trimToRequired()` you can remove all information you do not want to update, and then chain on only the details you *do* want to update.
4. In this running example, you are updating the certificate to verified and setting a new owner — so you simply chain those updates onto the trimmed builder.
5. You can then add your (in\-memory) modified asset to the batch.

    Auto\-saves as it goes

    As long as the number of assets built\-up is below the maximum batch size specified when creating the batch, this will simply continue to build up the batch. As soon as you hit the size limit for the batch, though, this same method will call the `save()` operation to batch\-update all of those assets in a single API call.

    Remember to flush

    Since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up, when the size of the queue did not yet reach the full batch size.

| Example: iterate through results and make changes | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 ``` | ``` batch = Batch( # (1)    client=client,    max_size=20,    replace_atlan_tags=False,    custom_metadata_handling=CustomMetadataHandling.IGNORE,    capture_failures=False,    update_only=False,    track=False,    case_insensitive=False,    table_view_agnostic=False,    creation_handling=AssetCreationHandling.FULL, ) try:     for asset in response: # (2)         revised = asset.trim_to_required() # (3)         revised.certificate_status = CertificateStatus.VERIFIED # (4)         revised.owner_users = {"jsmith"}         batch.add(asset)  # (5)  ``` |

1. Create a batch of assets to accumulate changes across multiple 
assets before applying those changes in Atlan itself. The `Batch()` takes the following parameters:

    * `client`: an instance of `AssetClient`.
        * `max_size`: the maximum size of each batch to be processed (per API call).
 **Additional optional parameters**

    By default (using only the options above) no classifications or custom metadata will be added or changed on the assets in each batch. To also include classifications and custom metadata, you need to use these additional parameters:

    * `replace_atlan_tags` (**default: False**): If `True` replace all classifications (tags) on the assets in the batch, which would include removing classifications (tags) if none are provided for the assets in the batch itself (or `False` if you still want to ignore classifications)
        * `custom_metadata_handling` (**default: CustomMetadataHandling.IGNORE**): control how custom metadata should be handled for the assets: `IGNORE` any custom metadata changes in the batch, `OVERWRITE` to replace all custom metadata with what's provided in the batch (including removing custom metadata that already exists on an asset), or `MERGE` to only add or update custom metadata based on what's in the batch (leaving other existing custom metadata unchanged)
        * `capture_failures` (**default: False**): control whether failures should be captured across batches (`True`) or ignored (`False`)
        * `update_only` (**default: False**): control whether the batch should only attempt to update assets that already exist (`True`) or also create assets if they do not yet exist (`False`)
        * `track` (**default: False**): control whether details about each created and updated asset across batches should be tracked (`True`) or ignored (`False`) — counts will always be kept
        * `case_insensitive` (**default: False**): control whether the matching for determining whether an asset already exists should be done in a case\-insensitive way (`True`) or case\-sensitively (`False`)
        * `creation_handling` (**default: AssetCreationHandling.FULL**): control what kind of assets to create, if not running in `update_only` mode; `PARTIAL` assets (only available in lineage), or `FULL` assets
        * `table_view_agnostic` (**default: False**): control whether the matching for determining whether an asset already exists should be done strictly according to the data type specified (`False`), or if tables, views and materialized views should be treated interchangeably (`True`)
2. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../snippets/advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.
3. Every asset implements the `trim_to_required()` method, which gives you an object containing only the bare minimum information needed to update that asset.

    Limit your asset to only what you intend to update

    When you send an update to Atlan, it will only attempt to change the information you send in your request — leaving any information not in your request as\-is (unchanged) on the asset in Atlan. By using `trimToRequired()` you can remove all information you do not want to update, and then chain on only the details you *do* want to update.
4. In this running example, you are updating the certificate to verified and setting a new owner — so you simply add those updates onto the trimmed object.
5. You can then add your (in\-memory) modified asset to the batch.

    Auto\-saves as it goes

    As long as the number of assets built\-up is below the maximum batch size specified when creating the batch, this will simply continue to build up the batch. As soon as you hit the size limit for the batch, though, this same method will call the `save()` operation to batch\-update all of those assets in a single API call.

    Remember to flush

    Since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up, when the size of the queue did not yet reach the full batch size.

| Example: iterate through results and make changes | |
| --- | --- |
| ``` 13 14 15 16 17 18 19 20 21 ``` | ``` val batch = AssetBatch(client, 20) // (1) try {     for (result in response) { // (2)         val revised = result.trimToRequired() // (3)             .certificateStatus(CertificateStatus.VERIFIED) // (4)             .ownerUser("jsmith")             .build()         batch.add(revised) // (5)     }  ``` |

1. Create a batch of assets to build\-up the changes across multiple assets before applying those changes in Atlan itself.

    * The first parameter defines the Atlan tenant on which the batch will be processed
        * The second specifies the maximum number of assets to build\-up before sending them across to Atlan
 **Additional parameters**

    By default (using only the options above) no classifications or custom metadata will be added or changed on the assets in each batch. To also include classifications and custom metadata, you need to use these additional parameters:

    * A third parameter of `true` to replace all classifications on the assets in the batch, which would include removing classifications if none are provided for the assets in the batch itself (or `false` if you still want to ignore classifications)
        * A fourth parameter to control how custom metadata should be handled for the assets: `IGNORE` any custom metadata changes in the batch, `OVERWRITE` to replace all custom metadata with what's provided in the batch (including removing custom metadata that already exists on an asset), or `MERGE` to only add or update custom metadata based on what's in the batch (leaving other existing custom metadata unchanged)
        * a fifth parameter to control whether failures should be captured across batches (`true`) or ignored (`false`)
        * a sixth parameter to control whether the batch should only attempt to update assets that already exist (`true`) or also create assets if they do not yet exist (`false`)
        * a seventh parameter to control whether details about each created and updated asset across batches should be tracked (`true`) or ignored (`false`) — counts will always be kept
        * an eighth parameter to control whether the matching for determining whether an asset already exists should be done in a case\-insensitive way (`true`) or case\-sensitively (`false`)
        * a ninth parameter to control what kind of assets to create, if not running in `updateOnly` mode: partial assets (only available in lineage), or full assets
        * a tenth parameter to control whether the matching for determining whether an asset already exists should be done strictly according to the data type specified (`false`), or if tables, views and materialized views should be treated interchangeably (`true`)
2. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../snippets/advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.
3. Every asset implements the `trimToRequired()` method, which gives you a builder containing only the bare minimum information needed to update that asset.

    Limit your asset to only what you intend to update

    When you send an update to Atlan, it will only attempt to change the information you send in your request — leaving any information not in your request as\-is (unchanged) on the asset in Atlan. By using `trimToRequired()` you can remove all information you do not want to update, and then chain on only the details you *do* want to update.
4. In this running example, you are updating the certificate to verified and setting a new owner — so you simply chain those updates onto the trimmed builder.
5. You can then add your (in\-memory) modified asset to the batch.

    Auto\-saves as it goes

    As long as the number of assets built\-up is below the maximum batch size specified when creating the batch, this will simply continue to build up the batch. As soon as you hit the size limit for the batch, though, this same method will call the `save()` operation to batch\-update all of those assets in a single API call.

    Remember to flush

    Since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up, when the size of the queue did not yet reach the full batch size.

Up to your own code

There are no API calls to make to change the results in\-memory. How you implement this will be entirely up to how you are writing your code.

### 3\. Save them in batches[¶](#3-save-them-in-batches "Permanent link")

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

Finally, send the changes you have queued up in batches. Use the [multiple assets pattern](../multiple-assets/) to update multiple assets at the same time.

Java

Python

Kotlin

Raw REST API

| Example: save the changes in batches | |
| --- | --- |
| ``` 22 23 24 25 ``` | ```     batch.flush(); // (1) } catch (AtlanException e) {     // (2) }  ``` |

1. The `AssetBatch`'s `add()` method used in the previous step will automatically save as its internal queue of assets reaches a full batch size.

    Remember to flush

    However, since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up.
2. Both the `.add()` and `.flush()` operations of the `AssetBatch` could send a request over to Atlan. Either can therefore also run into trouble and raise an error through an `AtlanException`. It is up to you to handle such potential errors as you see fit.

| Example: save the changes in batches | |
| --- | --- |
| ``` 30 31 32 ``` | ``` batch.flush() # (1) except AtlanError as err:     ... # (2)  ``` |

1. The `Batch`'s `add()` method used in the previous step will automatically save as its internal queue of assets reaches a full batch size.

    Remember to flush

    However, since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up.
2. Both the `.add()` and `.flush()` operations of the `Batch` could send a request over to Atlan. Either can therefore also run into trouble and raise an error through an `AtlanError`. It is up to you to handle such potential errors as you see fit.

| Example: save the changes in batches | |
| --- | --- |
| ``` 22 23 24 25 ``` | ```     batch.flush() // (1) } catch (e: AtlanException) {     // (2) }  ``` |

1. The `AssetBatch`'s `add()` method used in the previous step will automatically save as its internal queue of assets reaches a full batch size.

    Remember to flush

    However, since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up.
2. Both the `.add()` and `.flush()` operations of the `AssetBatch` could send a request over to Atlan. Either can therefore also run into trouble and raise an error through an `AtlanException`. It is up to you to handle such potential errors as you see fit.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [ // (1)     {       "typeName": "View", // (2)       "attributes": {         "name": "VIEW1", // (3)         "qualifiedName": "default/snowflake/1662194632/MYDB/MY_SCH/VIEW1",         "certificateStatus": "VERIFIED", // (4)         "ownerUsers": ["jsmith"]       }     },     { // (5)       "typeName": "MaterialisedView",       "attributes": {         "name": "MVIEW2",         "qualifiedName": "default/snowflake/1662194632/MYDB/MY_SCH/MVIEW2",         "certificateStatus": "VERIFIED",         "ownerUsers": ["jsmith"]       }     }   ] }  ``` |

1. All details must still be included in an outer `entities` array.
2. You need to specify the type for each asset you are updating.
3. You need to specify other required attributes for each asset, such as its name and qualifiedName.
4. Add on any other attributes or relationships you want to set on the asset, such as in the running example a verified certificate and new individual owner.
5. Add another object to the payload to represent another asset that should be updated by the same API call. Once again specify all the required information for that kind of asset, and any of the details for attributes or relationships you want to set.

Pipelining[¶](#pipelining "Permanent link")
-------------------------------------------

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[1\.10\.5](https://github.com/atlanhq/atlan-java/releases/tag/v1.10.5 "Minimum version")

Alternatively, when using an SDK, you can pipeline these operations together. The pipeline will run just as efficiently as the step\-by\-step approach above:

* Pushing down the criteria to run as a search on Atlan
* Lazily\-fetching each page of results
* Batching up and bulk\-saving changes

Java

Python

Kotlin

Raw REST API

| Example: pipelining | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` String schemaQN = "default/snowflake/1662194632/MYDB/MY_SCH"; // (1) try (ParallelBatch batch = new ParallelBatch(client, 20)) { // (2)     client.assets.select() // (3)         .where(Asset.QUALIFIED_NAME.startsWith(schemaQN)) // (4)         .where(Asset.TYPE_NAME.in(List.of(View.TYPE_NAME, MaterializedView.TYPE_NAME))) // (5)         .whereNot(Asset.CERTIFICATE_STATUS.hasAnyValue()) // (6)         .pageSize(100) // (7)         .includeOnResults(Asset.DESCRIPTION) // (8)         .includeOnResults(Asset.CERTIFICATE_STATUS)         .includeOnResults(Asset.OWNER_USERS)         .stream(true) // (9)         .forEach(result -> { // (10)             try {                 batch.add(result.trimToRequired() // (11)                     .certificateStatus(CertificateStatus.VERIFIED) // (12)                     .ownerUser("jsmith")                     .build()); // (13)             } catch (AtlanException e) { // (14)                 log.error("Unable to update: {}", result.getQualifiedName());             }         });     batch.flush(); // (15)     log.info("Created: {}", batch.getCreated().size());     log.info("Updated: {}", batch.getUpdated().size()); }  ``` |

1. The `qualifiedName` of every view starts with the `qualifiedName` of its parent (schema), so we can limit the results to a particular schema by using the `qualifiedName`.
2. Create a batch of assets to build\-up the changes across multiple assets before applying those changes in Atlan itself. When parallel\-processing (see further notes on the `stream(true)`) you need to use a parallel\-capable `ParallelBatch`:

    * The first parameter defines the Atlan tenant on which the batch will be processed
        * The second specifies the maximum number of assets to build\-up before sending them across to Atlan
 **Additional parameters**

    By default (using only the options above) no classifications or custom metadata will be added or changed on the assets in each batch. To also include classifications and custom metadata, you need to use these additional parameters:

    * A third parameter of `true` to replace all classifications on the assets in the batch, which would include removing classifications if none are provided for the assets in the batch itself (or `false` if you still want to ignore classifications)
        * A fourth parameter to control how custom metadata should be handled for the assets: `IGNORE` any custom metadata changes in the batch, `OVERWRITE` to replace all custom metadata with what's provided in the batch (including removing custom metadata that already exists on an asset), or `MERGE` to only add or update custom metadata based on what's in the batch (leaving other existing custom metadata unchanged)
        * a fifth parameter to control whether failures should be captured across batches (`true`) or ignored (`false`)
        * a sixth parameter to control whether the batch should only attempt to update assets that already exist (`true`) or also create assets if they do not yet exist (`false`)
        * a seventh parameter to control whether details about each created and updated asset across batches should be tracked (`true`) or ignored (`false`) — counts will always be kept
        * an eighth parameter to control whether the matching for determining whether an asset already exists should be done in a case\-insensitive way (`true`) or case\-sensitively (`false`)
        * a ninth parameter to control what kind of assets to create, if not running in `updateOnly` mode: partial assets (only available in lineage), or full assets
        * a tenth parameter to control whether the matching for determining whether an asset already exists should be done strictly according to the data type specified (`false`), or if tables, views and materialized views should be treated interchangeably (`true`)
3. You can then start defining a pipeline directly against the client's `assets` by using the `select()` method.

    Including archived (soft\-deleted) assets

    Searches by default will return *all* assets that are found — whether active or archived (soft\-deleted). In most cases, you probably only want the active ones, so this is the default behavior of `select()`. Sending in `true` to this `select()` method will start the pipeline to *include* any archived (soft\-deleted) assets in the results, if you do want them.
4. You can chain as many `where()` methods as you want to define all the conditions the search results must match. You can use the static constants within any given type to select a particular attribute (like `QUALIFIED_NAME` in this example), and then limit results to only those assets whose `qualifiedName` starts with the `qualifiedName` of the schema (by using the `startsWith()` predicate). In this example, that means only assets that are within this particular schema will be returned as results.
5. Since there could be tables, views, materialized views and columns in this schema — but you only want views and materialized views — you can use the `Asset.TYPE_NAME.in()` method to restrict results to only views and materialized views.
6. Since you only want to update views that do not already have a certificate, you can further limit the results using the `whereNot()` method. This will exclude any assets where a certificate already `hasAnyValue()`.
7. (Optional) You can play around with different page sizes, to further limit API calls by retrieving more results per page.
8. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every view will include its description, certificate, and individual owners. (Limit these attributes to the minimum you need about each view to do your intended work.)
9. Once you have defined the criteria for your pipeline, call the `stream()` method to push\-down the pipeline to Atlan. This will:

    * Create a search that combines all the criteria you have specified.
        * Run that search against Atlan to produce the first page of results.
        * Page through the results by lazily fetching each subsequent page as you iterate through them. (So if you use a `limit()` on the stream, for example, you can break out before retrieving all pages.)
        Can also run in parallel threads

    You can also parallel\-stream the results by passing `true` to the `stream()` method. This will spawn multiple threads that each independently process a page of results and combine the results in parallel. While this can be significantly faster for processing many results, keep in mind if you are collecting the results into any structure that structure must be thread\-safe. (For example, you'll need to use things like `ConcurrentHashMap` rather than just `HashMap`, and to use `ParallelBatch` rather than `AssetBatch` if making changes.)
10. For each result, you can then carry out your changes and submit them into the batch.
11. Every asset implements the `trimToRequired()` method, which gives you a builder containing only the bare minimum information needed to update that asset.

    Limit your asset to only what you intend to update

    When you send an update to Atlan, it will only attempt to change the information you send in your request — leaving any information not in your request as\-is (unchanged) on the asset in Atlan. By using `trimToRequired()` you can remove all information you do not want to update, and then chain on only the details you *do* want to update.
12. In this running example, you are updating the certificate to verified and setting a new owner — so you simply chain those updates onto the trimmed builder.
13. You can then add your (in\-memory) modified asset to the batch.

    Auto\-saves as it goes

    As long as the number of assets built\-up is below the maximum batch size specified when creating the batch, this will simply continue to build up the batch. As soon as you hit the size limit for the batch, though, this same method will call the `save()` operation to batch\-update all of those assets in a single API call.

    Remember to flush

    Since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up, when the size of the queue did not yet reach the full batch size.
14. Both the `.add()` and `.flush()` operations of the `AssetBatch` could send a request over to Atlan. Either can therefore also run into trouble and raise an error through an `AtlanException`. It is up to you to handle such potential errors as you see fit.
15. The `AssetBatch`'s `add()` method used in the previous step will automatically save as its internal queue of assets reaches a full batch size.

    Remember to flush

    However, since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up.

| Example: pipelining | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 ``` | ``` import logging from pyatlan.client.atlan import AtlanClient from pyatlan.client.asset import Batch from pyatlan.model.enums import CertificateStatus from pyatlan.model.fluent_search import CompoundQuery, FluentSearch from pyatlan.model.assets import Asset, View, MaterialisedView  LOGGER = logging.getLogger(__name__)  client = AtlanClient() schema_qualified_name = "default/snowflake/1662194632/MYDB/MY_SCH"  # (1) batch = Batch( # (2)    client=client,    max_size=20,    replace_atlan_tags=False,    custom_metadata_handling=CustomMetadataHandling.IGNORE,    capture_failures=False,    update_only=False,    track=False,    case_insensitive=False,    table_view_agnostic=False,    creation_handling=AssetCreationHandling.FULL, ) find_views = (     FluentSearch()  # (3)     .where(Asset.QUALIFIED_NAME.startswith(schema_qualified_name))  # (4)     .where(CompoundQuery.asset_types([View, MaterialisedView]))  # (5)     .where(CompoundQuery.active_assets())     .where_not(Asset.CERTIFICATE_STATUS.has_any_value())  # (6)     .page_size(100)  # (7)     .include_on_results(Asset.DESCRIPTION)  # (8)     .include_on_results(Asset.CERTIFICATE_STATUS)     .include_on_results(Asset.OWNER_USERS) ).to_request()  # (9)  response = client.asset.search(find_views)  # (10)  try:     for asset in response: # (11)         revised = asset.trim_to_required() # (12)         revised.certificate_status = CertificateStatus.VERIFIED # (13)         revised.owner_users = {"jsmith"}         batch.add(asset) # (14)     batch.flush() # (15)     LOGGER.info("Created %s", len(batch.created))     LOGGER.info("Updated %s", len(batch.updated)) except AtlanError as err:     LOGGER.error("Unable to update: %s", asset.qualified_name)  ``` |

1. The `qualifiedName` of every view starts with the `qualifiedName` of its parent (schema), so we can limit the results to a particular schema by using the `qualifiedName`.
2. Create a batch of assets to accumulate changes across multiple
assets before applying those changes in Atlan itself. The `Batch()` takes the following parameters:

    * `client`: an instance of `AssetClient`.
        * `max_size`: the maximum size of each batch to be processed (per API call).
 **Additional optional parameters**

    By default (using only the options above) no classifications or custom metadata will be added or changed on the assets in each batch. To also include classifications and custom metadata, you need to use these additional parameters:

    * `replace_atlan_tags` (**default: False**): If `True` replace all classifications (tags) on the assets in the batch, which would include removing classifications (tags) if none are provided for the assets in the batch itself (or `False` if you still want to ignore classifications)
        * `custom_metadata_handling` (**default: CustomMetadataHandling.IGNORE**): control how custom metadata should be handled for the assets: `IGNORE` any custom metadata changes in the batch, `OVERWRITE` to replace all custom metadata with what's provided in the batch (including removing custom metadata that already exists on an asset), or `MERGE` to only add or update custom metadata based on what's in the batch (leaving other existing custom metadata unchanged)
        * `capture_failures` (**default: False**): control whether failures should be captured across batches (`True`) or ignored (`False`)
        * `update_only` (**default: False**): control whether the batch should only attempt to update assets that already exist (`True`) or also create assets if they do not yet exist (`False`)
        * `track` (**default: False**): control whether details about each created and updated asset across batches should be tracked (`True`) or ignored (`False`) — counts will always be kept
        * `case_insensitive` (**default: False**): control whether the matching for determining whether an asset already exists should be done in a case\-insensitive way (`True`) or case\-sensitively (`False`)
        * `creation_handling` (**default: AssetCreationHandling.FULL**): control what kind of assets to create, if not running in `update_only` mode; `PARTIAL` assets (only available in lineage), or `FULL` assets
        * `table_view_agnostic` (**default: False**): control whether the matching for determining whether an asset already exists should be done strictly according to the data type specified (`False`), or if tables, views and materialized views should be treated interchangeably (`True`)
3. You can then start defining a pipeline directly using a `FluentSearch()` object.
4. You can chain as many `where()` methods as you want to define all the conditions the search results must match. You can use the class variables within any given type to select a particular attribute (like `QUALIFIED_NAME` in this example), and then limit results to only those assets whose `qualified_name` starts with the `qualified_name` of the schema (by using the `startswith()` predicate). In this example, that means only assets that are within this particular schema will be returned as results.
5. Since there could be tables, views, materialized views and columns in this schema — but you only want views and materialized views — you can use the `CompoundQuery.asset_types()` helper method to restrict results to only views and materialized views.
6. Since you only want to update views that do not already have a certificate, you can further limit the results using the `where_not()` method. This will exclude any assets where a certificate already `has_any_value()`.
7. (Optional) You can play around with different page sizes, to further limit API calls by retrieving more results per page.
8. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every view will include its description, certificate, and individual owners. (Limit these attributes to the minimum you need about each view to do your intended work.)
9. You can translate the object you've built up into various outputs, for example immediately calculating a count of how many results match or streaming them directly for processing. In this case, the `toRequest()` method will give us the resulting set of criteria back as a complete index search request.
10. You can then execute the search based on the request.tore all of those details back into a response object.
11. For each result, you can then carry out your changes and submit them into the batch.
12. Every asset implements the `trim_to_required()` method, which gives you a builder containing only the bare minimum information needed to update that asset.

    Limit your asset to only what you intend to update

    When you send an update to Atlan, it will only attempt to change the information you send in your request — leaving any information not in your request as\-is (unchanged) on the asset in Atlan. By using `trim_to_required()` you can remove all information you do not want to update, and then chain on only the details you *do* want to update.
13. In this running example, you are updating the certificate to verified and setting a new owner — so you simply set those updates on the trimmed object.
14. You can then add your (in\-memory) modified asset to the batch.
15. The `Batch`'s `add()` method used in the previous step will automatically save as its internal queue of assets reaches a full batch size.

    Remember to flush

    However, since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up.

| Example: pipelining | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` val schemaQN = "default/snowflake/1662194632/MYDB/MY_SCH" // (1) ParallelBatch(client, 20).use { batch -> // (2)     client.assets.select() // (3)         .where(Asset.QUALIFIED_NAME.startsWith(schemaQN)) // (4)         .where(Asset.TYPE_NAME.`in`(listOf(View.TYPE_NAME, MaterializedView.TYPE_NAME))) // (5)         .whereNot(Asset.CERTIFICATE_STATUS.hasAnyValue()) // (6)         .pageSize(100) // (7)         .includeOnResults(Asset.DESCRIPTION) // (8)         .includeOnResults(Asset.CERTIFICATE_STATUS)         .includeOnResults(Asset.OWNER_USERS)         .stream(true) // (9)         .forEach(result -> { // (10)             try {                 batch.add(result.trimToRequired() // (11)                     .certificateStatus(CertificateStatus.VERIFIED) // (12)                     .ownerUser("jsmith")                     .build()) // (13)             } catch (AtlanException e) { // (14)                 log.error("Unable to update: {}", result.qualifiedName);             }         });     batch.flush() // (15)     log.info("Created: {}", batch.created.size)     log.info("Updated: {}", batch.updated.size) }  ``` |

1. The `qualifiedName` of every view starts with the `qualifiedName` of its parent (schema), so we can limit the results to a particular schema by using the `qualifiedName`.
2. Create a batch of assets to build\-up the changes across multiple assets before applying those changes in Atlan itself. When parallel\-processing (see further notes on the `stream(true)`) you need to use a parallel\-capable `ParallelBatch`:

    * The first parameter defines the Atlan tenant on which the batch will be processed
        * The second specifies the maximum number of assets to build\-up before sending them across to Atlan
 **Additional parameters**

    By default (using only the options above) no classifications or custom metadata will be added or changed on the assets in each batch. To also include classifications and custom metadata, you need to use these additional parameters:

    * A third parameter of `true` to replace all classifications on the assets in the batch, which would include removing classifications if none are provided for the assets in the batch itself (or `false` if you still want to ignore classifications)
        * A fourth parameter to control how custom metadata should be handled for the assets: `IGNORE` any custom metadata changes in the batch, `OVERWRITE` to replace all custom metadata with what's provided in the batch (including removing custom metadata that already exists on an asset), or `MERGE` to only add or update custom metadata based on what's in the batch (leaving other existing custom metadata unchanged)
        * a fifth parameter to control whether failures should be captured across batches (`true`) or ignored (`false`)
        * a sixth parameter to control whether the batch should only attempt to update assets that already exist (`true`) or also create assets if they do not yet exist (`false`)
        * a seventh parameter to control whether details about each created and updated asset across batches should be tracked (`true`) or ignored (`false`) — counts will always be kept
        * an eighth parameter to control whether the matching for determining whether an asset already exists should be done in a case\-insensitive way (`true`) or case\-sensitively (`false`)
        * a ninth parameter to control what kind of assets to create, if not running in `updateOnly` mode: partial assets (only available in lineage), or full assets
        * a tenth parameter to control whether the matching for determining whether an asset already exists should be done strictly according to the data type specified (`false`), or if tables, views and materialized views should be treated interchangeably (`true`)
3. You can then start defining a pipeline directly against the client's `assets` by using the `select()` method.

    Including archived (soft\-deleted) assets

    Searches by default will return *all* assets that are found — whether active or archived (soft\-deleted). In most cases, you probably only want the active ones, so this is the default behavior of `select()`. Sending in `true` to this `select()` method will start the pipeline to *include* any archived (soft\-deleted) assets in the results, if you do want them.
4. You can chain as many `where()` methods as you want to define all the conditions the search results must match. You can use the static constants within any given type to select a particular attribute (like `QUALIFIED_NAME` in this example), and then limit results to only those assets whose `qualifiedName` starts with the `qualifiedName` of the schema (by using the `startsWith()` predicate). In this example, that means only assets that are within this particular schema will be returned as results.
5. Since there could be tables, views, materialized views and columns in this schema — but you only want views and materialized views — you can use the `Asset.TYPE_NAME.in` helper method to restrict results to only views and materialized views.
6. Since you only want to update views that do not already have a certificate, you can further limit the results using the `whereNot()` method. This will exclude any assets where a certificate already `hasAnyValue()`.
7. (Optional) You can play around with different page sizes, to further limit API calls by retrieving more results per page.
8. Add as many attributes as needed. Each attribute you add here will ensure that detail is included in each search result. So in this example, every view will include its description, certificate, and individual owners. (Limit these attributes to the minimum you need about each view to do your intended work.)
9. Once you have defined the criteria for your pipeline, call the `stream()` method to push\-down the pipeline to Atlan. This will:

    * Create a search that combines all the criteria you have specified.
        * Run that search against Atlan to produce the first page of results.
        * Page through the results by lazily fetching each subsequent page as you iterate through them. (So if you use a `limit()` on the stream, for example, you can break out before retrieving all pages.)
        Can also run in parallel threads

    You can also parallel\-stream the results by passing `true` to the `stream()` method. This will spawn multiple threads that each independently process a page of results and combine the results in parallel. While this can be significantly faster for processing many results, keep in mind if you are collecting the results into any structure that structure must be thread\-safe. (For example, you'll need to use things like `ConcurrentHashMap` rather than just `HashMap`, and to use `ParallelBatch` rather than `AssetBatch` if making changes.)
10. For each result, you can then carry out your changes and submit them into the batch.
11. Every asset implements the `trimToRequired()` method, which gives you a builder containing only the bare minimum information needed to update that asset.

    Limit your asset to only what you intend to update

    When you send an update to Atlan, it will only attempt to change the information you send in your request — leaving any information not in your request as\-is (unchanged) on the asset in Atlan. By using `trimToRequired()` you can remove all information you do not want to update, and then chain on only the details you *do* want to update.
12. In this running example, you are updating the certificate to verified and setting a new owner — so you simply chain those updates onto the trimmed builder.
13. You can then add your (in\-memory) modified asset to the batch.

    Auto\-saves as it goes

    As long as the number of assets built\-up is below the maximum batch size specified when creating the batch, this will simply continue to build up the batch. As soon as you hit the size limit for the batch, though, this same method will call the `save()` operation to batch\-update all of those assets in a single API call.

    Remember to flush

    Since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up, when the size of the queue did not yet reach the full batch size.
14. Both the `.add()` and `.flush()` operations of the `AssetBatch` could send a request over to Atlan. Either can therefore also run into trouble and raise an error through an `AtlanException`. It is up to you to handle such potential errors as you see fit.
15. The `AssetBatch`'s `add()` method used in the previous step will automatically save as its internal queue of assets reaches a full batch size.

    Remember to flush

    However, since your loop could finish before you reach another full batch, you must always remember to `flush()` the batch. This will send any remaining assets that were queued up.

Requires numerous API calls

To implement the same logic purely through raw API calls will require making many calls:

* To run the search.
* To page through the results.
* To batch up a set of assets to update.
* To submit each batch of assets to update.

---

2023\-04\-122024\-12\-13

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/bulk/end-to-end/) to provide us with more information. 

Back to top

[Previous Update multiple assets](../multiple-assets/) [Next Event handling overview](../../events/) 

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

