# Source URL
https://developer.atlan.com/snippets/advanced-examples/restore/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/restore/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to restore archived (soft-deleted) assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to restore archived (soft-deleted) assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/restore.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Restoring assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/restore/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to restore archived (soft-deleted) assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/restore.png
meta-twitter:title: Restoring assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Restoring assets - Developer
-->

[Skip to content](#restoring-assets) Developer Restoring assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Restoring assets[¶](#restoring-assets "Permanent link")
=======================================================

Restoring an [asset](../../../getting-started/#what-is-an-asset) from an archived (soft\-deleted) state back to active uses a similar pattern to the deletion operations.

By `qualifiedName`[¶](#by-qualifiedname "Permanent link")
---------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To restore an asset by its `qualifiedName`:

Java

Python

Kotlin

Raw REST API

| Restore an asset by its qualifiedName | |
| --- | --- |
| ``` 1 2 ``` | ``` boolean restored = GlossaryTerm     .restore(client, "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq"); // (1)  ``` |

1. If an asset with the provided qualifiedName exists and is now active, the operation will return true. If no archived (soft\-deleted) version of the asset could be found the operation will return false. Because this operation will restore the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Restore an asset by its qualifiedName | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm  client = AtlanClient() restored = client.asset.restore(     asset_type=AtlasGlossaryTerm,     qualified_name="gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq"  # (1) )  ``` |

1. If an asset with the provided qualified\_name exists and is now active, the operation will return true. If no archived (soft\-deleted) version of the asset could be found the operation will return false.

| Restore an asset by its qualifiedName | |
| --- | --- |
| ``` 1 2 ``` | ``` val restored = GlossaryTerm     .restore("gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq") // (1)  ``` |

1. If an asset with the provided qualifiedName exists and is now active, the operation will return true. If no archived (soft\-deleted) version of the asset could be found the operation will return false. Because this operation will restore the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk?replaceClassifications\=false\&replaceBusinessAttributes\=false\&overwriteBusinessAttributes\=false | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example", // (3)         "qualifiedName": "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary", // (6)           "guid": "51a28d46-b700-4c9d-807d-397f25f2b6d6" // (7)         }       },       "status": "ACTIVE" // (8)     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive). For a glossary, this is `AtlasGlossary`.
3. You must provide the exact name of the existing asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the existing asset (case\-sensitive).

    Must exactly match the `qualifiedName` of an existing asset

    If this does not exactly match the `qualifiedName` of an existing asset, the API call will instead *create a new asset* rather than restoring an existing one.
5. For glossary\-contained objects (terms and categories), you must also specify the glossary in which they are contained. You do this using the `anchor` attribute.
6. Nested within the `anchor` attribute you must give the `typeName` as exactly `AtlasGlossary`.
7. Nested within the `anchor` attribute you must also give the GUID of the glossary the archived object is contained within.
8. The piece that actually triggers the restore is to change the `status` of the asset. When soft\-deleted (archived) the status will be `DELETED`. Therefore, changing this to `ACTIVE` will restore the asset.

In bulk[¶](#in-bulk "Permanent link")
-------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v2.0.0 "Minimum version")

To restore a number of assets at the same time, for example after retrieving them via a search:

Java

Python

Kotlin

Raw REST API

| Restore assets in bulk | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` List<Asset> toRestore = client.assets.select(true) // (1)     .archived()     .stream() // (2)     .limit(50) // (3)     .collect(Collectors.toList()); // (4) AssetMutationResponse response = client.assets.restore(toRestore); // (4) response.getUpdatedAssets(); // (5)  ``` |

1. You would want more to your search criteria than this, but the `true` sent to the `select(true)` will ensure archived (soft\-deleted) assets are returned, while the `.archived()` will ensure *only* archived assets are returned.
2. Run the search to retrieve such results, and page through them automatically.
3. Limit the results to some maximum number, as you will need to limit how many you try to restore at the same time to avoid timeouts or other issues.
4. You can collect up the assets to be restored into a list from the stream.
5. You can then simply pass the results of the search across to the restore operation to re\-activate all of them en masse.

    The restore will only be run on that *limited* set of results

    In this example, the restore is only running on the first set of 50 results. To restore *all* assets that match the search criteria, don't forget to loop over this logic or create your own batching mechanism to process all pages!
6. You can retrieve the details of the specific assets that were restored from the bulk restore response.

Restoring assets in bulk is not currently available in the Python SDK, but will be coming soon.

| Restore assets in bulk | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val toRestore = client.assets.select(true) // (1)     .archived()     .stream() // (2)     .limit(50) // (3)     .collect(Collectors.toList()) // (4) val response = client.assets.restore(toRestore) // (4) response.updatedAssets // (5)  ``` |

1. You would want more to your search criteria than this, but the `true` sent to the `select(true)` will ensure archived (soft\-deleted) assets are returned, while the `.archived()` will ensure *only* archived assets are returned.
2. Run the search to retrieve such results, and page through them automatically.
3. Limit the results to some maximum number, as you will need to limit how many you try to restore at the same time to avoid timeouts or other issues.
4. You can collect up the assets to be restored into a list from the stream.
5. You can then simply pass the results of the search across to the restore operation to re\-activate all of them en masse.

    The restore will only be run on that *limited* set of results

    In this example, the restore is only running on the first set of 50 results. To restore *all* assets that match the search criteria, don't forget to loop over this logic or create your own batching mechanism to process all pages!
6. You can retrieve the details of the specific assets that were restored from the bulk restore response.

Multiple API calls required

You will need to first run a search for all assets with a status of `DELETED`. You can then bulk\-restore them by placing all of the returned assets into a single API call.

| POST /api/meta/entity/bulk?replaceClassifications\=false\&replaceBusinessAttributes\=false\&overwriteBusinessAttributes\=false | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example", // (3)         "qualifiedName": "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary", // (6)           "guid": "51a28d46-b700-4c9d-807d-397f25f2b6d6" // (7)         }       },       "status": "ACTIVE" // (8)     },     {       "typeName": "AtlasGlossaryTerm",       "attributes": {         "name": "Another Example",         "qualifiedName": "...",         "anchor": {           "typeName": "AtlasGlossary",           "guid": "51a28d46-b700-4c9d-807d-397f25f2b6d6"         }       },       "status": "ACTIVE"     }     { ... },     { ... },     { ... }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for each asset (case\-sensitive).
3. You must provide the exact name of each existing asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of each existing asset (case\-sensitive).

    Must exactly match the `qualifiedName` of an existing asset

    If this does not exactly match the `qualifiedName` of an existing asset, the API call will instead *create a new asset* rather than restoring an existing one.
5. For glossary\-contained objects (terms and categories), you must also specify the glossary in which they are contained. You do this using the `anchor` attribute.
6. Nested within the `anchor` attribute you must give the `typeName` as exactly `AtlasGlossary`.
7. Nested within the `anchor` attribute you must also give the GUID of the glossary the archived object is contained within.
8. The piece that actually triggers the restore is to change the `status` of each asset. When soft\-deleted (archived) the status will be `DELETED`. Therefore, changing this to `ACTIVE` will restore each asset.

---

2022\-11\-302024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/restore/) to provide us with more information. 

Back to top

[Previous Find and apply suggestions](../suggestions/) [Next Review changes to an asset](../history/) 

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

