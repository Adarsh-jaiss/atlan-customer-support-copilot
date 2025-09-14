# Source URL
https://developer.atlan.com/snippets/advanced-examples/delete/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/delete/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Delete assets in Atlan using both soft-delete (archive) and hard-delete (purge) methods, including bulk deletion.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Delete assets in Atlan using both soft-delete (archive) and hard-delete (purge) methods, including bulk deletion.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/delete.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Deleting assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/delete/
meta-twitter:card: summary_large_image
meta-twitter:description: Delete assets in Atlan using both soft-delete (archive) and hard-delete (purge) methods, including bulk deletion.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/delete.png
meta-twitter:title: Deleting assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Deleting assets - Developer
-->

[Skip to content](#deleting-assets) Developer Deleting assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (DELETE)](../../../endpoints/#tag:apimetaentitybulk-delete)

Deleting assets[¶](#deleting-assets "Permanent link")
=====================================================

Deleting an [asset](../../../getting-started/#what-is-an-asset) uses a similar pattern to the retrieval operations. For this you can use static methods provided by the `Asset` class.

Avoid deleting connections

If you want to delete a connection and all of its assets, consider using the [connection delete package](../../workflows/packages/connection-delete/) instead. In particular, avoid deleting a connection directly (using the methods below) without first deleting the assets contained within it. Once you delete a connection, you will be unable to delete any assets that were within it.

Soft\-delete an asset[¶](#soft-delete-an-asset "Permanent link")
----------------------------------------------------------------

Soft\-deletes (also called an *archive*) are a reversible operation. The status of the asset is changed to `DELETED` and it no longer appears in the UI, but the asset is still present in Atlan's back\-end.

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To soft\-delete (archive) an asset, you only need to provide the GUID:

Java

Python

Kotlin

Raw REST API

| Soft\-delete an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` AssetMutationResponse response =         Asset.delete(client, "b4113341-251b-4adc-81fb-2420501c30e6"); // (1) Asset deleted = response.getDeletedAssets().get(0); // (2) Glossary glossary; if (deleted instanceof Glossary) {     glossary = (Glossary) deleted; // (3) }  ``` |

1. The `delete()` method returns the deleted form of the asset. Because this operation will archive the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can distinguish what was deleted through the `getDeletedAssets()` method. This lists only the assets deleted by the operation.
3. The `Asset` class is a superclass of all assets. So you need to cast to more specific types (like `Glossary`) after verifying the object that was actually returned.

| Soft\-delete an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary  client = AtlanClient() response = client.asset.delete_by_guid("b4113341-251b-4adc-81fb-2420501c30e6") # (1) if deleted := response.assets_deleted(asset_type=AtlasGlossary): # (2)     term = deleted[0] # (3)  ``` |

1. The `asset.delete_by_guid()` method returns the deleted form of the asset.
2. The `assets_deleted(asset_type=AtlasGlossary)` method returns a list of the assets of the given type that were deleted.
3. If an asset of the given type was deleted, then the deleted form of the asset is available.

| Soft\-delete an asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val response =     Asset.delete(client, "b4113341-251b-4adc-81fb-2420501c30e6") // (1) val deleted = response.deletedAssets[0] // (2) val glossary = if (deleted is Glossary) deleted else null // (3)  ``` |

1. The `delete()` method returns the deleted form of the asset. Because this operation will archive the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can distinguish what was deleted through the `deletedAssets` method. This lists only the assets deleted by the operation.
3. The `Asset` class is a superclass of all assets. So you need to cast to more specific types (like `Glossary`) after verifying the object that was actually returned.

| DELETE /api/meta/entity/bulk?guid\=b4113341\-251b\-4adc\-81fb\-2420501c30e6\&deleteType\=SOFT | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. In the case of deleting an asset, all necessary information is included in the URL of the request. There is no payload for the body of the request. To archive an asset, use `deleteType` of `SOFT`.

Hard\-delete an asset[¶](#hard-delete-an-asset "Permanent link")
----------------------------------------------------------------

Hard\-deletes (also called a *purge*) are irreversible operations. The asset is removed from Atlan entirely, so no longer appears in the UI and also no longer exists in Atlan's back\-end.

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To hard\-delete (purge) an asset, you only need to provide the GUID:

Java

Python

Kotlin

Raw REST API

| Hard\-delete (purge) an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` AssetMutationResponse response =         Asset.purge(client, "b4113341-251b-4adc-81fb-2420501c30e6"); // (1) Asset deleted = response.getDeletedAssets().get(0); // (2) Glossary glossary; if (deleted instanceof Glossary) {     glossary = (Glossary) deleted; // (3) }  ``` |

1. The `purge()` method returns the purged form of the asset. Because this operation will remove the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can distinguish what was purged through the `getDeletedAssets()` method. This lists only the assets deleted by the operation.
3. The `Asset` class is a superclass of all assets. So you need to cast to more specific types (like `Glossary`) after verifying the object that was actually returned.

| Hard\-delete (purge) an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary  client = AtlanClient() response = client.asset.purge_by_guid("b4113341-251b-4adc-81fb-2420501c30e6") # (1) if deleted := response.assets_deleted(asset_type=AtlasGlossary): # (2)     term = deleted[0] # (3)  ``` |

1. The `asset.purge_by_guid()` method returns the deleted form of the asset.
2. The `assets_deleted(asset_type=AtlasGlossary)` method returns a list of the assets of the given type that were deleted.
3. If an asset of the given type was deleted, then the deleted form of the asset is available.

| Hard\-delete (purge) an asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val response =     Asset.purge(client, "b4113341-251b-4adc-81fb-2420501c30e6") // (1) val deleted = response.deletedAssets[0] // (2) val glossary = if (deleted is Glossary) deleted else null // (3)  ``` |

1. The `purge()` method returns the purged form of the asset. Because this operation will remove the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can distinguish what was purged through the `deletedAssets` method. This lists only the assets deleted by the operation.
3. The `Asset` class is a superclass of all assets. So you need to cast to more specific types (like `Glossary`) after verifying the object that was actually returned.

| DELETE /api/meta/entity/bulk?guid\=b4113341\-251b\-4adc\-81fb\-2420501c30e6\&deleteType\=PURGE | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. In the case of deleting an asset, all necessary information is included in the URL of the request. There is no payload for the body of the request. To permanently and irreversibly remove an asset, use `deleteType` of `PURGE`.

Bulk\-delete assets[¶](#bulk-delete-assets "Permanent link")
------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

You can also delete a number of [assets](../../../getting-started/#what-is-an-asset) at the same time:

Up to a limit

You cannot send an unlimited number of assets to be deleted in a single request. As you can see from the  Raw REST API tab, each GUID will be sent as a query parameter in the URI — so there is a maximum beyond which the URI is too long.

We generally recommend sending no more than 20\-50 GUIDs at a time using this approach.

Java

Python

Kotlin

Raw REST API

| Hard\-delete (purge) multiple assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` AssetMutationResponse response =         client.assets.delete( // (1)             List.of("b4113341-251b-4adc-81fb-2420501c30e6", // (2)                     "21e5be62-7a0b-4547-ab7a-6ddf273d0640",                     "a0fb35e5-690d-4a5b-8918-9ee267c8fa55"),             AtlanDeleteType.PURGE); // (3) List<Asset> deleted = response.getDeletedAssets(); // (4)  ``` |

1. The `delete()` method on the endpoint itself can be used to either archive (soft\-delete) or purge (hard\-delete).
2. You can provide a list of any number of assets to delete (their GUIDs).
3. You need to also specify whether you want to soft\-delete (archive) using `AtlanDeleteType.SOFT` or hard\-delete (purge) the assets using `AtlanDeleteType.PURGE`.
4. The response will contain details of all of the assets that were deleted.

| Hard\-delete (purge) multiple assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary  client = AtlanClient() response = client.asset.purge_by_guid([  # (1)     "b4113341-251b-4adc-81fb-2420501c30e6",     "21e5be62-7a0b-4547-ab7a-6ddf273d0640",     "a0fb35e5-690d-4a5b-8918-9ee267c8fa55" ]) if deleted := response.assets_deleted(asset_type=AtlasGlossary):  # (2)     term = deleted[0]  # (3)  ``` |

1. You can alternatively provide either the `asset.purge_by_guid()` or `asset.delete_by_guid()` methods with a list of any number of assets to delete (their GUIDs).
2. The `assets_deleted(asset_type=AtlasGlossary)` method returns a list of the assets of the given type that were deleted.
3. If an asset of the given type was deleted, then the deleted form of the asset is available.

| Hard\-delete (purge) multiple assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val response =     client.assets.delete( // (1)         listOf(             "b4113341-251b-4adc-81fb-2420501c30e6",  // (2)             "21e5be62-7a0b-4547-ab7a-6ddf273d0640",             "a0fb35e5-690d-4a5b-8918-9ee267c8fa55"         ),         AtlanDeleteType.PURGE // (3)     ) val deleted = response.deletedAssets // (4)  ``` |

1. The `delete()` method on the endpoint itself can be used to either archive (soft\-delete) or purge (hard\-delete).
2. You can provide a list of any number of assets to delete (their GUIDs).
3. You need to also specify whether you want to soft\-delete (archive) using `AtlanDeleteType.SOFT` or hard\-delete (purge) the assets using `AtlanDeleteType.PURGE`.
4. The response will contain details of all of the assets that were deleted.

| DELETE /api/meta/entity/bulk?guid\=b4113341\-251b\-4adc\-81fb\-2420501c30e6\&guid\=21e5be62\-7a0b\-4547\-ab7a\-6ddf273d0640\&guid\=a0fb35e5\-690d\-4a5b\-8918\-9ee267c8fa55\&deleteType\=SOFT | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. In the case of deleting multiple assets, all necessary information is included in the URL of the request. Each separate asset's GUID should be given after a `guid=` query parameter. There is no payload for the body of the request.

Bulk deletion occurs asynchronously

Be aware that bulk deleting assets occurs asynchronously. The response above will come back indicating the deleted assets; however, there can still be a delay before those assets are fully deleted in Atlan.

---

2022\-09\-142024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/delete/) to provide us with more information. 

Back to top

[Previous Update an asset](../update/) [Next Find and apply suggestions](../suggestions/) 

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

