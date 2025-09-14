# Source URL
https://developer.atlan.com/snippets/common-examples/tags/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/tags/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to add, update, and remove tags for assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to add, update, and remove tags for assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/tags.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage asset tags - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/tags/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to add, update, and remove tags for assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/tags.png
meta-twitter:title: Manage asset tags - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage asset tags - Developer
-->

[Skip to content](#tag-classify-assets) Developer Manage asset tags Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)[/api/meta/entity/uniqueAttribute/type/{typeName}/classification/{name}?attr:qualifiedName\={qualifiedName} (DELETE)](../../../endpoints/#tag:apimetaentityuniqueattributetypetypenameclassificationnameattrqualifiednamequalifiedname-delete)[/api/meta/entity/uniqueAttribute/type/{typeName}/classifications?attr:qualifiedName\={qualifiedName} (POST)](../../../endpoints/#tag:apimetaentityuniqueattributetypetypenameclassificationsattrqualifiednamequalifiedname-post)

Tag (classify) assets[¶](#tag-classify-assets "Permanent link")
===============================================================

Atlan tags must exist before tagging assets

Remember that you must first [create the Atlan tag](../../tags/manage/) before you will be able to tag any assets.

Cannot add tags when creating assets

Currently it is not possible to add tags when creating [assets](../../../getting-started/#what-is-an-asset), other than via dbt.

Add to an existing asset[¶](#add-to-an-existing-asset "Permanent link")
-----------------------------------------------------------------------

[6\.2\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.2.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add tags to an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

| Add tags to an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         classificationNames: # (2)           - PII # (3)           - Marketing Analysis         classificationNames: # (4)           - name: PII # (5)             propagate: true # (6)             removePropagationsOnEntityDelete: true # (7)             restrictPropagationThroughLineage: false # (8)             restrictPropagationThroughHierarchy: false # (9)           - name: Marketing Analysis             propagate: true             removePropagationsOnEntityDelete: true             restrictPropagationThroughLineage: false             restrictPropagationThroughHierarchy: false         classifications: # (10)           - typeName: yQBDoKHdTLJhqAsdR3RMq6 # (11)             propagate: true             removePropagationsOnEntityDelete: true             restrictPropagationThroughLineage: false             restrictPropagationThroughHierarchy: false           - typeName: WCVjmgKnW40G151dESXZ03             propagate: true             removePropagationsOnEntityDelete: true             restrictPropagationThroughLineage: false             restrictPropagationThroughHierarchy: false  ``` |

1. You must of course give the name of the object.
2. The simplest way to tag an asset, using the default values for propagation (those shown below), is to use the `meta`.`atlan`.`classificationNames` structure.
3. When using this simplified form, you can give the normal human\-readable name of the tags rather than the [hashed\-string representation](#find-hashed-string-names).
4. Alternatively, if you want to override the propagation settings, you can use this more detailed structure.
5. Each listed item must itself be a YAML object consisting of the human\-readable `name` of the tag and the propagation setting overrides:
6. (Optional) You can decide whether to propagate this tag (true) or not (false). If you choose false, no propagation of this tag from the asset will occur — neither through lineage nor parent\-child relationships.
7. (Optional) If propagation is allowed, you can then define whether propagated tags should be removed if this asset is deleted (true) or not (false).
8. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for lineage (true) or still allow it through lineage (false).
9. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for hierarchy (true) or still allow it through hierarchy (false).
10. Alternatively, you can specify tags nested within the `meta`.`atlan`.`classifications` structure.
11. In this structure, each tag you want to add must be given using its [hashed\-string representation](#find-hashed-string-names). Its propagation settings can be overridden using the same options described above.

Replaces all tags

Unlike the examples for the SDKs and raw APIs, dbt will always replace all tags on the asset. Any tags that already exist on the asset that are not specified here will be removed.

| Add tags to an existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Table.appendAtlanTags( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (3)     List.of("PII", "Marketing Analysis")); // (4)  ``` |

1. Use the `appendAtlanTags()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to add the tags all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset.
4. A list of the tags (the names as you set them up in the UI) to add to the asset.

| Add tags to an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() client.asset.add_atlan_tags( # (1)     asset_type=Table,     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     atlan_tag_names=["PII", "Marketing Analysis"], # (2) )  ``` |

1. Use the `asset.add_atlan_tags()` method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to add the tags all\-in\-one.
2. A list of the tags (the names as you set them up in the UI) to add to the asset.

| Add tags to an existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val table = Table.appendAtlanTags(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (3)     listOf("PII", "Marketing Analysis"))  // (4)  ``` |

1. Use the `appendAtlanTags()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to add the tags all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset.
4. A list of the tags (the names as you set them up in the UI) to add to the asset.

| POST /api/meta/entity/bulk?replaceTags\=false\&appendTags\=true\&replaceBusinessAttributes\=false\&overwriteBusinessAttributes\=false | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {   "entities": [  // (1)     {       "typeName": "Table", // (2)       "attributes": {         "qualifiedName": "default/snowflake/1746022526/WIDE_WORLD_IMPORTERS/BRONZE_WAREHOUSE/FIVETRAN_AUDIT", // (3)         "name": "FIVETRAN_AUDIT"  // (4)       },       "addOrUpdateClassifications": [           {           "typeName": "VfsfmLbnuxc2vdNJ0Ysh", // (5)           "propagate": false, // (6)           "removePropagationsOnEntityDelete": true, // (7)           "restrictPropagationThroughLineage": false, // (8)           "restrictPropagationThroughHierarchy": true // (9)         },         {           "typeName": "RsCmLbnuxc2vdNJ234Ysh",           "propagate": false,           "removePropagationsOnEntityDelete": true,           "restrictPropagationThroughLineage": false,           "restrictPropagationThroughHierarchy": true         }         ]     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
4. You must provide the exact name of the asset (case\-sensitive).
5. Each tag you want to add must be given using its [hashed\-string representation](#find-hashed-string-names).
6. (Optional) You can decide whether to propagate this tag (true) or not (false). If you choose false, no propagation of this tag from the asset will occur — neither through lineage nor parent\-child relationships.
7. (Optional) If propagation is allowed, you can then define whether propagated tags should be removed if this asset is deleted (true) or not (false).
8. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for lineage (true) or still allow it through lineage (false).
9. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for hierarchy (true) or still allow it through hierarchy (false).

Update on an existing asset[¶](#update-on-an-existing-asset "Permanent link")
-----------------------------------------------------------------------------

[6\.2\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.2.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To update tags on an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

Not possible through dbt

In dbt, the tags will be replaced in their entirety. It is not possible to just update a single tag through dbt.

| Update tags on an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` Table.updateAtlanTags( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (3)     List.of("PII", "Marketing Analysis"), // (4)     true, // (5)     true, // (6)     false, // (7)     false // (8) );  ``` |

1. Use the `updateAtlanTags()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to update tags for an asset, all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset.
4. A list of the tags (the names as you set them up in the UI) to update for the asset.
5. (Optional) You can decide whether to propagate these tags (true) or not (false). If you choose false, no propagation for these tags from the asset will occur — neither through lineage nor parent\-child relationships.
6. (Optional) If propagation is allowed, you can then define whether propagated tags should be removed if this asset is deleted (true) or not (false).
7. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tags only for lineage (true) or still allow it through lineage (false).
8. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for hierarchy (true) or still allow it through hierarchy (false).

| Update tags on an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() client.asset.update_atlan_tags( # (1)     asset_type=Table,     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     atlan_tag_names=["PII", "Marketing Analysis"], # (2)     True, # (3)     True, # (4)     False, # (5)     False, # (6) )  ``` |

1. Use the `asset.update_atlan_tags()` method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to update tags for an asset, all\-in\-one.
2. A list of the tags (the names as you set them up in the UI) to update for the asset.
3. (Optional) You can decide whether to propagate these tags (True) or not (False). If you choose False, no propagation for these tags from the asset will occur — neither through lineage nor parent\-child relationships.
4. (Optional) If propagation is allowed, you can then define whether propagated tags should be removed if this asset is deleted (True) or not (False).
5. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tags only for lineage (True) or still allow it through lineage (False).
6. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for hierarchy (True) or still allow it through hierarchy (False).

| Update tags on an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val table = Table.updateAtlanTags(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (3)     listOf("PII", "Marketing Analysis"), // (4)     true, // (5)     true, // (6)     false, // (7)     false // (8) )  ``` |

1. Use the `updateAtlanTags()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to update tags for an asset, all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset.
4. A list of the tags (the names as you set them up in the UI) to update for the asset.
5. (Optional) You can decide whether to propagate these tags (true) or not (false). If you choose false, no propagation for these tags from the asset will occur — neither through lineage nor parent\-child relationships.
6. (Optional) If propagation is allowed, you can then define whether propagated tags should be removed if this asset is deleted (true) or not (false).
7. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tags only for lineage (true) or still allow it through lineage (false).
8. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for hierarchy (true) or still allow it through hierarchy (false).

| POST /api/meta/entity/bulk?replaceTags\=false\&appendTags\=true\&replaceBusinessAttributes\=false\&overwriteBusinessAttributes\=false | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "qualifiedName": "default/snowflake/1746022526/WIDE_WORLD_IMPORTERS/BRONZE_WAREHOUSE/FIVETRAN_AUDIT", // (3)         "name": "FIVETRAN_AUDIT"  // (4)       },       "addOrUpdateClassifications": [           {           "typeName": "VfsfmLbnuxc2vdNJ0Ysh", // (5)           "propagate": false, // (6)           "removePropagationsOnEntityDelete": false, // (7)           "restrictPropagationThroughLineage": false, // (8)           "restrictPropagationThroughHierarchy": false // (9)         },         {           "typeName": "RsCmLbnuxc2vdNJ234Ysh",           "propagate": true,           "removePropagationsOnEntityDelete": true,           "restrictPropagationThroughLineage": false,           "restrictPropagationThroughHierarchy": false         }         ]     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
4. You must provide the exact name of the asset (case\-sensitive).
5. Each tag you want to add must be given using its [hashed\-string representation](#find-hashed-string-names).
6. (Optional) You can decide whether to propagate this tag (true) or not (false). If you choose false, no propagation of this tag from the asset will occur — neither through lineage nor parent\-child relationships.
7. (Optional) If propagation is allowed, you can then define whether propagated tags should be removed if this asset is deleted (true) or not (false).
8. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for lineage (true) or still allow it through lineage (false).
9. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for hierarchy (true) or still allow it through hierarchy (false).

Remove from existing assets[¶](#remove-from-existing-assets "Permanent link")
-----------------------------------------------------------------------------

### Remove a single tag[¶](#remove-a-single-tag "Permanent link")

[6\.2\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.2.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove a single tag from an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

| Remove one tag from an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         classificationNames: # (2)           - PII # (3)         classifications: # (4)           - typeName: yQBDoKHdTLJhqAsdR3RMq6 # (5)             propagate: true             removePropagationsOnEntityDelete: true             restrictPropagationThroughLineage: false             restrictPropagationThroughHierarchy: false  ``` |

1. You must of course give the name of the object.
2. You can use the `meta`.`atlan`.`classificationNames` structure, as above.
3. When using this simplified form, you can give the normal human\-readable name of the tags you want to remain, rather than the [hashed\-string representation](#find-hashed-string-names).

    The tag being *removed* is no longer present

    You are *removing* the tag by not specifying it anymore here in dbt.
4. The tags must be nested within the `meta`.`atlan`.`classifications` structure.
5. Each tag you want to remain must be given using its [hashed\-string representation](#find-hashed-string-names).

    The tag being *removed* is no longer present

    You are *removing* the tag by not specifying it anymore here in dbt.

| Remove one tag from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Table.removeAtlanTag( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (3)     "Marketing Analysis"); // (4)  ``` |

1. Use the `removeAtlanTag()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to remove a tag from an asset, all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset.
4. The tag (the name you set up in the UI) to remove from the asset.

| Remove one tag from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() client.asset.remove_atlan_tag(  # (1)     asset_type=Table,     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     atlan_tag_name="Marketing Analysis",  # (2) )  ``` |

1. Use the `asset.remove_atlan_tag()` method, which for most objects requires a minimal set of information. This method will construct the necessary request and call the necessary API(s) to remove a tag from an asset, all\-in\-one.
2. The tag (the name you set up in the UI) to remove from the asset.

| Remove one tag from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Table.removeAtlanTag(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (3)     "Marketing Analysis")  // (4)  ``` |

1. Use the `removeAtlanTag()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to remove a tag from an asset, all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset.
4. The tag (the name you set up in the UI) to remove from the asset.

| DELETE /api/meta/entity/uniqueAttribute/type/Table/classification/WCVjmgKnW40G151dESXZ03?attr:qualifiedName\=default%2Fsnowflake%2F1657037873%2FSAMPLE\_DB%2FFOOD\_BEV%2FTOP\_BEVERAGE\_USERS | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. Note that all of the details for the deletion are embedded in the URL or query parameters to the request. Once again the [hashed\-string representation](#find-hashed-string-names) of the tag is required. You would either need to first retrieve the list of tags via API to determine this value, or look through the development console of your browser while opening the tag in the Atlan UI.

### Remove multiple tags[¶](#remove-multiple-tags "Permanent link")

[6\.2\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.2.0 "Minimum version")

To remove one or more tags from an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

Coming soon

Coming soon

| Remove multiple tags from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() client.asset.remove_atlan_tags(  # (1)     asset_type=Table,     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     atlan_tag_names=["Marketing Analysis","PII"],  # (2) )  ``` |

1. Use the `asset.remove_atlan_tags()` method, which for most objects requires a minimal set of information. This method will construct the necessary request and call the necessary API(s) to remove a tag from an asset, all\-in\-one.
2. A list of the tags (the names as you set them up in the UI) to remove for the asset.

Coming soon

| POST /api/meta/entity/bulk?replaceTags\=false\&appendTags\=true\&replaceBusinessAttributes\=false\&overwriteBusinessAttributes\=false | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "qualifiedName": "default/snowflake/1746022526/WIDE_WORLD_IMPORTERS/BRONZE_WAREHOUSE/FIVETRAN_AUDIT", // (3)         "name": "FIVETRAN_AUDIT"  // (4)       },       "removeClassifications": [           {           "typeName": "VfsfmLbnuxc2vdNJ0Ysh" // (5)           },         {           "typeName": "RsCmLbnuxc2vdNJ234Ysh"         }         ]     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
4. You must provide the exact name of the asset (case\-sensitive).
5. Each tag you want to add must be given using its [hashed\-string representation](#find-hashed-string-names).

### Remove all tags[¶](#remove-all-tags "Permanent link")

Could create a new asset

Remember that Atlan matches the provided `qualifiedName` to determine whether to [update or create the asset](../../../getting-started/#importance-of-identifiers).

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove all tags from an existing asset, you need to specify no tags in your object:

dbt

Java

Python

Kotlin

Raw REST API

| Remove all tags from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         classifications: [] # (2)  ``` |

1. You must of course give the name of the object.
2. The tags must be nested within the `meta`.`atlan`.`classifications` structure. To remove all of them, send an explicit empty list.

| Remove all tags from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Table table = Table.updater( // (1)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     "TOP_BEVERAGE_USERS").build(); AssetMutationResponse response = table.save(client, true); // (2) assert response.getUpdatedAssets().size() == 1; // (3)  ``` |

1. Use the `updater()` method to initialize the object with all necessary attributes for updating it(../advanced\-examples/update.md\#build\-minimal\-object\-needed). (Removing the tags is still an update to the asset, we are not deleting the asset itself.)
2. Call the `save()` method to actually update the asset, using `true` as the second argument to overwrite tags. Since we have not provided any tags in our object, this will *replace* the existing tags on the asset with no tags. (In other words, it will remove all tags from the asset.) Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The response will include that single asset that was updated (again, removing tags is an update to the asset — we are not deleting the asset itself).

| Remove all tags from an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) response = client.asset.save(table, replace_atlan_tags=True) #  (2) assert 1 == len(response.assets_updated(asset_type=Table)) # (3)  ``` |

1. Use the `updater()` method to create an asset suitable for modifiaction i.e. with all the requisite attributes.
2. Call the `save()` method to actually update the asset, using `True` for the replace\_atlan\_tags argument will cause the tags to be overwritten. Since we have not provided any tags in our object, this will *replace* the existing tags on the asset with no tags. (In other words, it will remove all tags from the asset.)
3. The response should only include that single asset that was updated (again, removing tags is an update to the asset — we are not deleting the asset itself).

| Remove all tags from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val table = Table.updater(  // (1)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     "TOP_BEVERAGE_USERS").build() val response = table.save(client, true)  // (2) assert(response.updatedAssets.size == 1)  // (3)  ``` |

1. Use the `updater()` method to initialize the object with all necessary attributes for updating it(../advanced\-examples/update.md\#build\-minimal\-object\-needed). (Removing the tags is still an update to the asset, we are not deleting the asset itself.)
2. Call the `save()` method to actually update the asset, using `true` as the second argument to overwrite tags. Since we have not provided any tags in our object, this will *replace* the existing tags on the asset with no tags. (In other words, it will remove all tags from the asset.) Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The response will include that single asset that was updated (again, removing tags is an update to the asset — we are not deleting the asset itself).

| POST /api/meta/entity/bulk?replaceTags\=true\&replaceBusinessAttributes\=false\&overwriteBusinessAttributes\=false | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` { // (1)   "entities": [ // (2)     {       "typeName": "Table", // (3)       "attributes": {         "qualifiedName": "default/snowflake/1665450065/DBT_FOOD_BEVERAGE/PUBLIC/INSTACART_ORDER_PRODUCTS_USERS_TIME_MASTER", // (4)         "name": "INSTACART_ORDER_PRODUCTS_USERS_TIME_MASTER" // (5)       }     }   ] }  ``` |

1. Note that the query parameter `replaceTags` is equal to `true` in the request. This is what causes the override behavior — so when you do not specify any tags in the request body those overwrite any existing tags on the asset. (The result being that there are then no tags on the asset.)
2. All assets must be wrapped in an `entities` array.
3. You must provide the exact type name for the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. You must provide the exact name of the asset (case\-sensitive).

In bulk[¶](#in-bulk "Permanent link")
-------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can modify many tags, for many assets, at the same time.

Operates as a replace

Applying tags in bulk can currently only be done as a replacement. All tags on the asset(s) you upate will be replaced with the tags you specify. This means any tags that already exist on the asset in Atlan that are *not* in your update will be *removed* from that asset.

dbt

Java

Python

Kotlin

Raw REST API

| Replace tags on multiple assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         classificationNames: # (2)           - PII # (3)           - Marketing Analysis         classificationNames: # (4)           - name: PII # (5)             propagate: true # (6)             removePropagationsOnEntityDelete: true # (7)             restrictPropagationThroughLineage: false # (8)             restrictPropagationThroughHierarchy: false # (9)           - name: Marketing Analysis             propagate: true             removePropagationsOnEntityDelete: true             restrictPropagationThroughLineage: false             restrictPropagationThroughHierarchy: false         classifications: # (10)           - typeName: yQBDoKHdTLJhqAsdR3RMq6 # (11)             propagate: true             removePropagationsOnEntityDelete: true             restrictPropagationThroughLineage: false             restrictPropagationThroughHierarchy: false           - typeName: WCVjmgKnW40G151dESXZ03             propagate: true             removePropagationsOnEntityDelete: true             restrictPropagationThroughLineage: false             restrictPropagationThroughHierarchy: false   - name: ANOTHER_ASSET # (12)     meta:       atlan:         classificationNames:           - ...  ``` |

1. You must of course give the name of the object.
2. The simplest way to tag an asset, using the default values for propagation (those shown below), is to use the `meta`.`atlan`.`classificationNames` structure.
3. When using this simplified form, you can give the normal human\-readable name of the tags rather than the [hashed\-string representation](#find-hashed-string-names).
4. Alternatively, if you want to override the propagation settings, you can use this more detailed structure.
5. Each listed item must itself be a YAML object consisting of the human\-readable `name` of the tag and the propagation setting overrides:
6. (Optional) You can decide whether to propagate this tag (true) or not (false). If you choose false, no propagation of this tag from the asset will occur — neither through lineage nor parent\-child relationships.
7. (Optional) If propagation is allowed, you can then define whether propagated tags should be removed if this asset is deleted (true) or not (false).
8. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for lineage (true) or still allow it through lineage (false).
9. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for hierarchy (true) or still allow it through hierarchy (false).
10. Alternatively, you can specify tags nested within the `meta`.`atlan`.`classifications` structure.
11. In this structure, each tag you want to add must be given using its [hashed\-string representation](#find-hashed-string-names). Its propagation settings can be overridden using the same options described above.
12. To apply tags to multiple assets, just list all of the assets in the model file.

| Replace tags on multiple assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` Table table = Table.updater( // (1)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", "TOP_BEVERAGE_USERS")     .atlanTag(AtlanTag.of("PII")) // (2)     .atlanTag(AtlanTag.builder() // (3)         .typeName("Marketing Analysis")         .propagate(true)         .removePropagationsOnEntityDelete(true)         .restrictPropagationThroughLineage(false)         .restrictPropagationThroughHierarchy(false)         .build())     .atlanTag(AtlanTag.of("Sensitivity", // (4)         SourceTagAttachment.byName(client, // (5)             SourceTagCache.SourceTagName("snowflake/development@@DB/SCH/SENSITIVITY"), // (6)             List.of(SourceTagAttachmentValue.of(null, "Restricted"))))) // (7)     .build(); AtlanMutationResponse response = table.save(client, true); // (8)  ``` |

1. Use the `updater()` helper method, which for most objects requires a minimal set of information. This helper method will construct a builder onto which you can chain any tag details. (You can also do this at creation time, using the `creator()` helper method, which will also return a builder.)
2. You can chain simple Atlan tags using `.atlanTag()` and the `AtlanTag.of()` helper.
3. You can chain a fully\-configured Atlan tag using `.atlanTag()` and the `AtlanTag.builder()` helper to specify the exact propagation options.
4. Or you can chain a source\-synced tag using `.atlanTag()` and the `AtlanTag.of()` helper that takes a `SourceTagAttachment` object.
5. Because creating a source tag attachment may need to look up information in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. You can build a source tag attachment by name or qualifiedName of the source tag. To build by name, you need to specify the source tag in the format: `{{connectorType}}/{{connectionName}}@@DB_NAME/SCHEMA_NAME/TAG_NAME`.
7. You can then also specify the value(s) for that source tag, either by key (first argument to `SourceTagAttachemntValue.of()`) or value (second argument to `SourceTagAttachmentValue.of()`).
8. When you save the object, you must send `true` to the optional parameter to replace tags (otherwise all tags in your request will be ignored). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Replace tags on multiple assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.core import AtlanTag, AtlanTagName from pyatlan.cache.source_tag_cache import SourceTagName from pyatlan.model.structs import SourceTagAttachment, SourceTagAttachmentValue  client = AtlanClient()  table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", )  table.atlan_tags = [ # (2)     AtlanTag.of(atlan_tag_name=AtlanTagName("PII")),      AtlanTag(         type_name=AtlanTagName("Marketing Analysis"), # (3)         remove_propagations_on_entity_delete=True,         restrict_propagation_through_lineage=False,         restrict_propagation_through_hierarchy=False,     ),     AtlanTag.of( # (4)         atlan_tag_name=AtlanTagName("Sensitivity"),         source_tag_attachment=SourceTagAttachment.by_name(             client=client,             name=SourceTagName(client=client, tag="snowflake/development@@DB/SCH/SENSITIVITY"), # (5)             source_tag_values=[                 SourceTagAttachmentValue(                     tag_attachment_key="", tag_attachment_value="Restricted"                 ) # (6)             ],         ),     ), ] response = client.asset.save(table, replace_atlan_tags=True) # (7)  ``` |

1. Use the `updater()` helper method, which typically requires
only a minimal set of information for most objects.
2. You can assign Atlan tags directly to `table.atlan_tags`.
3. To create a fully\-configured Atlan tag, use the `AtlanTag()` model,
allowing you to specify precise propagation options.
4. Alternatively, create a source\-synced tag using the `AtlanTag.of()` helper,
which takes a `SourceTagAttachment` object.
5. Build a source tag attachment using either the `name` or `qualified_name` of the source tag. To build by name, specify the source tag in this format: `{{connectorType}}/{{connectionName}}@@DB_NAME/SCHEMA_NAME/TAG_NAME`.
6. Specify the value(s) for the source tag using either the key
(`tag_attachment_key`) or the value (`tag_attachment_value`).
7. When saving the object, include the optional parameter `replace_atlan_tags=true` to replace the tags
(otherwise, all tags in the request will be ignored).

| Add tags to an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` val table = Table.updater( // (1)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", "TOP_BEVERAGE_USERS")     .atlanTag(AtlanTag.of("PII")) // (2)     .atlanTag(AtlanTag.builder() // (3)         .typeName("Marketing Analysis")         .propagate(true)         .removePropagationsOnEntityDelete(true)         .restrictPropagationThroughLineage(false)         .restrictPropagationThroughHierarchy(false)         .build())     .atlanTag(AtlanTag.of("Sensitivity", // (4)         SourceTagAttachment.byName(client, // (5)             SourceTagCache.SourceTagName("snowflake/development@@DB/SCH/SENSITIVITY"), // (6)             listOf(SourceTagAttachmentValue.of(null, "Restricted"))))) // (7)     .build() val response = table.save(client, true) // (8)  ``` |

1. Use the `updater()` helper method, which for most objects requires a minimal set of information. This helper method will construct a builder onto which you can chain any tag details. (You can also do this at creation time, using the `creator()` helper method, which will also return a builder.)
2. You can chain simple Atlan tags using `.atlanTag()` and the `AtlanTag.of()` helper.
3. You can chain a fully\-configured Atlan tag using `.atlanTag()` and the `AtlanTag.builder()` helper to specify the exact propagation options.
4. Or you can chain a source\-synced tag using `.atlanTag()` and the `AtlanTag.of()` helper that takes a `SourceTagAttachment` object.
5. Because creating a source tag attachment may need to look up information in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. You can build a source tag attachment by name or qualifiedName of the source tag. To build by name, you need to specify the source tag in the format: `{{connectorType}}/{{connectionName}}@@DB_NAME/SCHEMA_NAME/TAG_NAME`.
7. You can then also specify the value(s) for that source tag, either by key (first argument to `SourceTagAttachemntValue.of()`) or value (second argument to `SourceTagAttachmentValue.of()`).
8. When you save the object, you must send `true` to the optional parameter to replace tags (otherwise all tags in your request will be ignored). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS" // (4)       },       "classifications": [ // (5)         {           "typeName": "yQBDoKHdTLJhqAsdR3RMq6", // (6)           "propagate": true, // (7)           "removePropagationsOnEntityDelete": true, // (8)           "restrictPropagationThroughLineage": false, // (9)           "restrictPropagationThroughHierarchy": false // (10)         },         {           "typeName": "WCVjmgKnW40G151dESXZ03",           "propagate": true,           "removePropagationsOnEntityDelete": true,           "restrictPropagationThroughLineage": false,           "restrictPropagationThroughHierarchy": false         },         {           "typeName": "Z96sGJrF0S68PxYTUdKG6b",           "propagate": true,           "removePropagationsOnEntityDelete": true,           "restrictPropagationThroughLineage": false,           "restrictPropagationThroughHierarchy": false,           "attributes": { // (11)             "rt5N3mHZTcxXafuu6ZPpyL": [ // (12)               {                 "sourceTagName": "CONFIDENTIAL", // (13)                 "sourceTagQualifiedName": "default/snowflake/1726834662/ANALYTICS/WIDE_WORLD_IMPORTERS/CONFIDENTIAL", // (14)                 "sourceTagGuid": "c28c08a8-320b-4a1a-b52e-75d120b4a8cc", // (15)                 "sourceTagConnectorName": "snowflake", // (16)                 "isSourceTagSynced": false,                 "sourceTagSyncTimestamp": 0,                 "sourceTagValue": [ // (17)                   {                     "tagAttachmentValue": "Highly Restricted" // (18)                   }                 ]               }             ]           }         }       ]     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. Each tag you want to apply to the asset must be wrapped in a `classifications` array.
6. Each tag you want to add must be given using its [hashed\-string representation](#find-hashed-string-names).
7. (Optional) You can decide whether to propagate this tag (true) or not (false). If you choose false, no propagation of this tag from the asset will occur — neither through lineage nor parent\-child relationships.
8. (Optional) If propagation is allowed, you can then define whether propagated tags should be removed if this asset is deleted (true) or not (false).
9. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for lineage (true) or still allow it through lineage (false).
10. (Optional) If propagation is allowed, you can also decide whether to disable propagation of the tag only for hierarchy (true) or still allow it through hierarchy (false).
11. For source tags, you must also specify an embedded `attributes` in the tag.
12. You must give the [hashed\-string representation](#find-hashed-string-names) of the attribute whose `displayName` is `sourceTagAttachment`.
13. You must give the name of the tag in the source.
14. You must give the `qualifiedName` of the Tag asset representing that tag in Atlan.
15. You must give the `guid` of the Tag asset representing that tag in Atlan.
16. You must give the name of the connector for the source where the tag comes from.
17. To specify a value for the tag, you must wrap it in a `sourceTagValue` array.
18. You can then specify the value using `tagAttachmentValue` or its key using `tagAttachmentKey`.

Find hashed\-string names[¶](#find-hashed-string-names "Permanent link")
------------------------------------------------------------------------

When using either the raw APIs or dbt, you must provide the custom metadata names using Atlan's hashed\-string representation.

Not necessary for SDKs

Note that this is not needed when using the SDKs, which translate these for you!

To look up the hashed\-string representations:

GET /api/meta/types/typedefs?type\=classification
```

```
The response will include `displayName` and `name` for each tag. The `displayName` is what you see in Atlan's UI, and the `name` is the hashed\-string representation:

| Simplified response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 ``` | ``` {   "enumDefs": [],   "structDefs": [],   "classificationDefs": [     {       "category": "CLASSIFICATION",       "guid": "c43e2f52-975f-40b6-88fa-93697fb54f52",       "name": "WCVjmgKnW40G151dESXZ03", // (1)       "displayName": "Marketing Analysis",       "description": "Assets relevant to the marketing domain"     },     {       "category": "CLASSIFICATION",       "guid": "ec641061-d8fa-4090-9145-a5f23c9c3e99",       "name": "yQBDoKHdTLJhqAsdR3RMq6", // (2)       "displayName": "PII",       "description": "Personally-identifiable information can be used to uniquely identify an individual person."     },     {       "category": "CLASSIFICATION",       "guid": "70211696-f3fb-4a4a-a81a-db589e29f436",       "name": "Z96sGJrF0S68PxYTUdKG6b", // (3)       "displayName": "Sensitivity",       "attributeDefs": [         {           "name": "rt5N3mHZTcxXafuu6ZPpyL", // (4)           "displayName": "sourceTagAttachment",           "description": "",           "typeName": "array<SourceTagAttachment>",           "isDefaultValueNull": false,           "isOptional": true,           "cardinality": "SET",           "valuesMinCount": 0,           "valuesMaxCount": 2147483647,           "isUnique": false,           "isIndexable": false,           "includeInNotification": false,           "skipScrubbing": false,           "searchWeight": -1,           "isNew": true         }       ],     }   ],   "entityDefs": [],   "relationshipDefs": [],   "businessMetadataDefs": [] }  ``` |

1. Hashed\-string name for the tag named `Marketing Analysis`.
2. Hashed\-string name for the tag named `PII`.
3. Hashed\-string name for the tag named `Sensitivity`.
4. Hashed\-string name for the `sourceTagAttachment` attribute in the `Sensitivity` classification.

---

2022\-08\-222025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/tags/) to provide us with more information. 

Back to top

[Previous Change owners](../owners/) [Next Change custom metadata](../custom-metadata/) 

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

