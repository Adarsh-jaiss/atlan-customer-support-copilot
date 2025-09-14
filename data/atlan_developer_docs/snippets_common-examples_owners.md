# Source URL
https://developer.atlan.com/snippets/common-examples/owners/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/owners/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to change, add, or remove owners for assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to change, add, or remove owners for assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/owners.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage asset owners - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/owners/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to change, add, or remove owners for assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/owners.png
meta-twitter:title: Manage asset owners - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage asset owners - Developer
-->

[Skip to content](#change-owners) Developer Manage asset owners Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Change owners[¶](#change-owners "Permanent link")
=================================================

There are actually two kinds of owners per asset

There are actually two fields in Atlan that capture the owners of an asset: `ownerUsers` and `ownerGroups`.

The examples below illustrate how to change individual (user) owners. To change group owners, replace `ownerUsers` with `ownerGroups`.

Change an existing asset[¶](#change-an-existing-asset "Permanent link")
-----------------------------------------------------------------------

Could create a new asset

Remember that Atlan matches the provided `qualifiedName` to determine whether to [update or create the asset](../../../getting-started/#importance-of-identifiers).

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To change owners on an existing [asset](../../../getting-started/#what-is-an-asset):

dbt

Java

Python

Kotlin

Raw REST API

| Change owners on existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         attributes: # (2)           ownerUsers: ["jsmith", "jdoe"] # (3)  ``` |

1. You must of course give the name of the object.
2. The usernames must be nested within the `meta`.`atlan`.`attributes` structure.
3. You must provide valid usernames, or email addresses, as a list.

    Users must be valid

    If the user does not exist in Atlan, there will be no updates to the asset. Please verify the usernames or email addresses in Atlan before assigning them to assets.

| Change owners on existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Table table = Table.updater( // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (2)         "TOP_BEVERAGE_USERS") // (3)     .ownerUsers(List.of("jsmith", "jdoe")) // (4)     .build(); // (5) AssetMutationResponse response = table.save(client); // (6) assert response.getUpdatedAssets().size() == 1 // (7)  ``` |

1. Use the `updater()` helper method to create the minimal object necessary to do an update.
2. The `qualifiedName` of the object.
3. The `name` of the object.
4. Provide the new owners. Note that this is a list of the usernames of the users.
5. Build the updater into an object.
6. Send the update to Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was updated.

| Change owners on existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) table.owner_users = ["jsmith", "jdoe"] # (2) response = client.asset.save(table) # (3) assert 1 == len(response.assets_updated(asset_type=Table)) # (4)  ``` |

1. Use the `updater()` method to create an asset suitable for modification i.e. with all the requisite attributes.
2. Provide the new owners. Note that this is a list of the usernames of the users.
3. Send the update to Atlan.
4. The response should only include that single asset that was updated.

| Change owners on existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val table = Table.updater(  // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (2)         "TOP_BEVERAGE_USERS")  // (3)     .ownerUsers(listOf("jsmith", "jdoe"))  // (4)     .build()  // (5) val response = table.save(client)  // (6) assert(response.updatedAssets.size == 1)  // (7)  ``` |

1. Use the `updater()` helper method to create the minimal object necessary to do an update.
2. The `qualifiedName` of the object.
3. The `name` of the object.
4. Provide the new owners. Note that this is a list of the usernames of the users.
5. Build the updater into an object.
6. Send the update to Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was updated.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "ownerUsers": [ "jsmith", "jdoe" ] // (5)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. Provide the new owners, as a list of usernames of users.

Remove from an existing asset[¶](#remove-from-an-existing-asset "Permanent link")
---------------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove owners from an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

| Remove owners from existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         attributes: # (2)           ownerUsers: [ "jdoe" ] # (3)  ``` |

1. You must of course give the name of the object.
2. The details for the owners must be nested within the `meta`.`atlan`.`attributes` structure.
3. Specify only the usernames or email addresses of the users you want to *keep* as owners. (Compared to the other examples, this would remove `jsmith` and keep `jdoe`.)

    Users must be valid

    If the user does not exist in Atlan, there will be no updates to the asset. Please verify the usernames or email addresses in Atlan before assigning them to assets.

| Remove owners from existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Table table = Table.removeOwners( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (3)     "TOP_BEVERAGE_USERS"); // (4)  ``` |

1. Use the `removeOwners()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the object.
4. The `name` of the object.

| Remove owners from existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) table.owner_users = None # (2) response = client.asset.save(table) # (3) assert 1 == len(response.assets_updated(asset_type=Table)) # (4)  ``` |

1. Use the `updater()` method to create an asset suitable for modification i.e. with all the requisite attributes.
2. Set the owners to `None`.
3. Send the update to Atlan.
4. The response should only include that single asset that was updated (again, removing owners is an update to the asset — we are not deleting the asset itself).

| Remove owners from existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val table = Table.removeOwners(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (3)     "TOP_BEVERAGE_USERS")  // (4)  ``` |

1. Use the `removeOwners()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the object.
4. The `name` of the object.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "ownerUsers": [], // (5)         "ownerGroups": []       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. You must set the `ownerUsers` and `ownerGroups` to an empty list.

When creating an asset[¶](#when-creating-an-asset "Permanent link")
-------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add owners when creating an asset:

dbt

Java

Python

Kotlin

Raw REST API

| Add owners when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         attributes: # (2)           ownerUsers: ["jsmith", "jdoe"] # (3)  ``` |

1. You must of course give the name of the object.
2. The usernames must be nested within the `meta`.`atlan`.`attributes` structure.
3. You must provide valid usernames, or email addresses, as a list.

    Users must be valid

    If the user does not exist in Atlan, there will be no updates to the asset. Please verify the usernames or email addresses in Atlan before assigning them to assets.

| Add owners when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Table table = Table     .creator("TOP_BEVERAGE_USERS", // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .ownerUsers(List.of("jsmith", "jdoe")) // (2)     .build(); // (3) AssetMutationResponse response = table.save(client); // (4) assert response.getCreatedAssets().size() == 1 // (5)  ``` |

1. Use the `creator()` method to initialize the object with all necessary attributes for creating it](../advanced\-examples/create.md\#build\-minimal\-object\-needed).
2. Set the owners that should be added. Note that this is a list of the usernames of the users.
3. Call the `build()` method to build the enriched object.
4. Call the `save()` method to actually create the asset with these owners. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. The response will include that single asset that was created.

| Add owners when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.creator( # (1)     name="TOP_BEVERAGE_USERS",     schema_qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV", ) table.owner_users = ["jsmith", "jdoe"] # (2) response = client.asset.save(table) # (3) assert 1 == len(assets_created := response.assets_created(asset_type=Table)) # (4) table = assets_created[0] # (5)  ``` |

1. Use the `creator()` method to initialize the object with all necessary attributes for creating it.
2. Set the owners that should be added. Note that this is a list of the usernames of the users.
3. Call the `save()` method to actually create the asset with these owners.
4. Since a save can add, update, delete or partially update multiple assets the `assets_created()` method can be used to return a list of the assets of the specified type that were added. The assert statement is present to ensure a `Table` asset was created.
5. Since only one `Table` has been created we use an index of 0 to retrieve the newly created table.

| Add owners when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val table = Table     .creator("TOP_BEVERAGE_USERS",  // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .ownerUsers(listOf("jsmith", "jdoe"))  // (2)     .build()  // (3) val response = table.save(client)  // (4) assert(response.createdAssets.size == 1)  // (5)  ``` |

1. Use the `creator()` method to initialize the object with all necessary attributes for creating it](../advanced\-examples/create.md\#build\-minimal\-object\-needed).
2. Set the owners that should be added. Note that this is a list of the usernames of the users.
3. Call the `build()` method to build the enriched object.
4. Call the `save()` method to actually create the asset with these owners. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. The response will include that single asset that was created.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "atlanSchema": { // (5)           "typeName": "Schema",           "uniqueAttributes": {             "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV"           }         },         "ownerUsers": [ "jsmith", "jdoe" ] // (6)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide a name for the asset.
4. In the case of a table, the `qualifiedName` must be the concatenation of the parent schema's qualifiedName and the name of the table.
5. When creating a table, you must specify the schema to create it within. This is defined by the `atlanSchema` attribute. You must specify both the type (must be `Schema`) and qualifiedName of the schema within the `atlanSchema` attribute — and the schema must already exist.
6. Provide the owners, as a list of usernames of users.

---

2022\-08\-222024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/owners/) to provide us with more information. 

Back to top

[Previous Change description](../descriptions/) [Next Tag (classify) assets](../tags/) 

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

