# Source URL
https://developer.atlan.com/snippets/common-examples/descriptions/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/descriptions/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to update, remove, or add descriptions to assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to update, remove, or add descriptions to assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/descriptions.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage asset descriptions - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/descriptions/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to update, remove, or add descriptions to assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/descriptions.png
meta-twitter:title: Manage asset descriptions - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage asset descriptions - Developer
-->

[Skip to content](#change-description) Developer Manage asset descriptions Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Change description[¶](#change-description "Permanent link")
===========================================================

There are actually two descriptions per asset

There are actually two fields in Atlan that capture the description of an asset: `description` and `userDescription`.

In the UI, `userDescription` will take precedence. This is the field that is updated when a user updates the description through the UI.

When a system updates a description, it will populate the `description` field. This field is only shown in the UI when the `userDescription` field is empty.

The examples below therefore all update the `description` field, to allow a user to still override this value through the UI. If you want to actually override any users' descriptions, however, replace `description` in the examples below with `userDescription`.

Change an existing asset[¶](#change-an-existing-asset "Permanent link")
-----------------------------------------------------------------------

Could create a new asset

Remember that Atlan matches the provided `qualifiedName` to determine whether to [update or create the asset](../../../getting-started/#importance-of-identifiers).

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To change a description on an existing [asset](../../../getting-started/#what-is-an-asset):

dbt

Java

Python

Kotlin

Raw REST API

| Change description on existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     description: >- # (2)       My new description  ``` |

1. You must of course give the name of the object.
2. You just use the normal dbt `description` field to provide a description — no need for the `meta`.`atlan`.`attributes` structure.

| Change description on existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Table table = Table.updater( // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (2)         "TOP_BEVERAGE_USERS") // (3)     .description("My new description") // (4)     .build(); // (5) AssetMutationResponse response = table.save(client); // (6) assert response.getUpdatedAssets().size() == 1 // (7)  ``` |

1. Use the `updater()` helper method to create the minimal object necessary to do an update.
2. The `qualifiedName` of the object.
3. The `name` of the object.
4. Provide the new description.
5. Build the updater into an object.
6. Send the update to Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was updated.

| Change description on existing an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) table.description = "My new description" # (2) response = client.asset.save(table) # (3) assert 1 == len(response.assets_updated(asset_type=Table)) # (4)  ``` |

1. Use the `updater()` method to create an asset suitable for modification i.e. with all the requisite attributes.
2. Provide the new description.
3. Send the update to Atlan.
4. The response should only include that single asset that was updated.

| Change description on existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val table = Table.updater(  // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (2)         "TOP_BEVERAGE_USERS")  // (3)     .description("My new description")  // (4)     .build()  // (5) val response = table.save(client)  // (6) assert(response.updatedAssets.size == 1)  // (7)  ``` |

1. Use the `updater()` helper method to create the minimal object necessary to do an update.
2. The `qualifiedName` of the object.
3. The `name` of the object.
4. Provide the new description.
5. Build the updater into an object.
6. Send the update to Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was updated.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "description": "My new description" // (5)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. Provide the new description.

Remove from an existing asset[¶](#remove-from-an-existing-asset "Permanent link")
---------------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove a description from an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

It is currently not possible to *remove* a description from an asset via dbt.

| Remove description from existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Table table = Table.removeDescription( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (3)     "TOP_BEVERAGE_USERS"); // (4)  ``` |

1. Use the `removeDescription()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the object.
4. The `name` of the object.

| Remove description from an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) table.description = None # (2) response = client.asset.save(table) # (3) assert 1 == len(response.assets_updated(asset_type=Table)) # (4)  ``` |

1. Use the `updater()` method to create an asset suitable for modification i.e. with all the requisite attributes.
2. Set the description to `None`.
3. Send the update to Atlan.
4. The response should only include that single asset that was updated (again, removing owners is an update to the asset — we are not deleting the asset itself).

| Remove description from existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val table = Table.removeDescription(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (3)     "TOP_BEVERAGE_USERS")  // (4)  ``` |

1. Use the `removeDescription()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the object.
4. The `name` of the object.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "description": null // (5)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. You must set the `description` to `null`.

When creating an asset[¶](#when-creating-an-asset "Permanent link")
-------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a description when creating an asset:

dbt

Java

Python

Kotlin

Raw REST API

| Add description when creating an asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     description: >- # (2)       My description of the asset  ``` |

1. You must of course give the name of the object.
2. You just use the normal dbt `description` field to provide a description — no need for the `meta`.`atlan`.`attributes` structure.

| Add description when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Table table = Table     .creator("TOP_BEVERAGE_USERS", // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .description("My description of the asset") // (2)     .build(); // (3) AssetMutationResponse response = table.save(client); // (4) assert response.getCreatedAssets().size() == 1 // (5)  ``` |

1. Use the `creator()` method to initialize the object with all necessary attributes for creating it (../advanced\-examples/create.md\#build\-minimal\-object\-needed).
2. Set the description that should be added.
3. Call the `build()` method to build the enriched object.
4. Call the `save()` method to actually create the asset with this description. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. The response will include that single asset that was created.

| Add description when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.creator( # (1)     name="TOP_BEVERAGE_USERS",     schema_qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV", ) table.description = "My description of the asset" # (2) response = client.asset.save(table) # (3) assert 1 == len(assets_created := response.assets_created(asset_type=Table)) # (4) table = assets_created[0] # (5)  ``` |

1. Use the `creator()` method to initialize the object with all necessary attributes for creating it.
2. Set the description.
3. Call the `save()` method to actually create the asset with these owners.
4. Since a save can add, update, delete or partially update multiple assets the `assets_created()` method can be used to return a list of the assets of the specified type that were added. The assert statement is present to ensure a `Table` asset was created.
5. Since only one `Table` has been created we use an index of 0 to retrieve the newly created table.

| Add description when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val table = Table     .creator("TOP_BEVERAGE_USERS",  // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .description("My description of the asset")  // (2)     .build()  // (3) val response = table.save(client)  // (4) assert(response.createdAssets.size == 1)  // (5)  ``` |

1. Use the `creator()` method to initialize the object with all necessary attributes for creating it (../advanced\-examples/create.md\#build\-minimal\-object\-needed).
2. Set the description that should be added.
3. Call the `build()` method to build the enriched object.
4. Call the `save()` method to actually create the asset with this description. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. The response will include that single asset that was created.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "atlanSchema": { // (5)           "typeName": "Schema",           "uniqueAttributes": {             "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV"           }         },         "description": "My description of the asset" // (6)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide a name for the asset.
4. In the case of a table, the `qualifiedName` must be the concatenation of the parent schema's qualifiedName and the name of the table.
5. When creating a table, you must specify the schema to create it within. This is defined by the `atlanSchema` attribute. You must specify both the type (must be `Schema`) and qualifiedName of the schema within the `atlanSchema` attribute — and the schema must already exist.
6. Provide the description.

---

2022\-11\-302024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/descriptions/) to provide us with more information. 

Back to top

[Previous Manage announcements](../announcements/) [Next Change owners](../owners/) 

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

