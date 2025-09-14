# Source URL
https://developer.atlan.com/snippets/common-examples/announcements/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/announcements/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to add/remove announcements from assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to add/remove announcements from assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/announcements.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage announcements - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/announcements/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to add/remove announcements from assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/announcements.png
meta-twitter:title: Manage announcements - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage announcements - Developer
-->

[Skip to content](#manage-announcements) Developer Manage announcements Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage announcements[¶](#manage-announcements "Permanent link")
===============================================================

Add to an existing asset[¶](#add-to-an-existing-asset "Permanent link")
-----------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add an announcement to an existing [asset](../../../getting-started/#what-is-an-asset):

dbt

Java

Python

Kotlin

Raw REST API

| Add announcement to existing assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         attributes: # (2)           announcementType: warning # (3)           announcementTitle: "Caution!" # (4)           announcementMessage: >- # (5)             This table was changed.  ``` |

1. You must of course give the name of the object.
2. The details for the announcement must be nested within the `meta`.`atlan`.`attributes` structure.
3. You must provide a valid status for the announcement (`information`, `warning` or `issue`).
4. (Optional) You can also provide a title for the announcement.
5. (Optional) You can also provide a message to include in the announcement.

| Add announcement to existing assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Table result = Table.updateAnnouncement( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (3)     AtlanAnnouncementType.WARNING, // (4)     "Caution!", // (5)     "This table was changed."); // (6)  ``` |

1. Use the `updateAnnouncement()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the update operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the object.
4. The type of the announcement (the `AtlanAnnouncementType` enumeration gives the valid values).
5. A title for the announcement.
6. A message to include in the announcement.

| Add announcement to existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.core import Announcement from pyatlan.model.enums import AnnouncementType  client = AtlanClient() announcement = Announcement( # (1)     announcement_title="Caution",     announcement_message="This table was changed.",     announcement_type=AnnouncementType.WARNING, # (2) ) table = client.asset.update_announcement( # (3)     asset_type=Table, # (4)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS",     announcement=announcement, )  ``` |

1. Create the announcement.
2. The type of the announcement (the `AnnouncementType` enum gives the valid values).
3. Use the `update_announcment()` method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the update operation all\-in\-one.
4. Specify the type of asset to be updated.

| Add announcement to existing assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val result = Table.updateAnnouncement(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (3)     AtlanAnnouncementType.WARNING,  // (4)     "Caution!",  // (5)     "This table was changed.")  // (6)  ``` |

1. Use the `updateAnnouncement()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the update operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the object.
4. The type of the announcement (the `AtlanAnnouncementType` enumeration gives the valid values).
5. A title for the announcement.
6. A message to include in the announcement.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "announcementType": "warning", // (5)         "announcementTitle": "Caution!", // (6)         "announcementMessage": "This table was changed."       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. You must provide a valid type for the announcement.
6. (Optional) You can also provide a title and message for the announcement.

Remove from an existing asset[¶](#remove-from-an-existing-asset "Permanent link")
---------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove an announcement from an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

It is currently not possible to *remove* an announcement from an asset via dbt.

| Remove announcement from existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Column column = Column.removeAnnouncement( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS/USER_ID", // (3)     "USER_ID"); // (4)  ``` |

1. Use the `removeAnnouncement()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the column (this is generally needed on all assets).
4. The name of the column (this varies by asset, but most assets need the name specified).

| Remove announcement from existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = client.asset.remove_announcement( # (1)     asset_type=Table, # (2)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS/USER_ID",     name="USER_ID", )  ``` |

1. Use the `asset.remove_announcement()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Specify the type of asset from which to remove the announcement.

| Remove announcement from existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val column = Column.removeAnnouncement(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS/USER_ID",  // (3)     "USER_ID")  // (4)  ``` |

1. Use the `removeAnnouncement()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the column (this is generally needed on all assets).
4. The name of the column (this varies by asset, but most assets need the name specified).

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "announcementType": null, // (5)         "announcementTitle": null,         "announcementMessage": null       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. You must provide the value `null` for the type of the announcement, its title, and its message.

When creating an asset[¶](#when-creating-an-asset "Permanent link")
-------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add an announcement when creating an asset:

dbt

Java

Python

Kotlin

Raw REST API

| Add announcement when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         attributes: # (2)           announcementType: information # (3)           announcementTitle: "New!" # (4)           announcementMessage: >- # (5)             This table is newly created.  ``` |

1. You must of course give the name of the object.
2. The details for the announcement must be nested within the `meta`.`atlan`.`attributes` structure.
3. You must provide a valid status for the announcement (`information`, `warning` or `issue`).
4. (Optional) You can also provide a title for the announcement.
5. (Optional) You can also provide a message to include in the announcement.

| Add announcement when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` Table table = Table     .creator("TOP_BEVERAGE_USERS", // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .announcementType(AtlanAnnouncementType.INFORMATION) // (2)     .announcementTitle("New!") // (3)     .announcementMessage("This table is newly created.") // (4)     .build(); // (5) AssetMutationResponse response = table.save(client); // (6) assert response.getCreatedAssets().size() == 1 // (7)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
2. Set the announcement that should be added (in this example, we're using `INFORMATION`).
3. Add a title for the announcement.
4. Add a message for the announcement.
5. Call the `build()` method to build the enriched object.
6. Call the `save()` method to actually create the asset with this announcement. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was created.

| Add announcement when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.core import Announcement from pyatlan.model.enums import AnnouncementType from pyatlan.model.response import AssetMutationResponse  client = AtlanClient() table = Table.creator( # (1)     name="TOP_BEVERAGE_USERS",     schema_qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV", ) announcement = Announcement( # (2)     announcement_title="New!",     announcement_message="This table is newly created.",     announcement_type=AnnouncementType.INFORMATION, ) table.set_announcement(announcement=announcement) response = client.asset.save(table) # (3) assert response.assets_created(Table) # (4) table = response.assets_created(Table)[0] # (5)  ``` |

1. Use the `create()` method to initialize the object with all \[necessary attributes for creating it.
2. Create the `Announcement` to be used.
3. Invoke the `save()` method with asset. This method will return an AssetMutationResponse object that encapsulates the results.
4. Since a save can add, update, delete or partially update multiple assets the `assets_created()` method can be used to return a list of the assets of the specified type that were added. The assert statement is present to ensure a `Table` asset was created.
5. Since only one `Table` should have been created we use an index of 0 to retrieve the newly created table.

| Add announcement when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val table = Table     .creator("TOP_BEVERAGE_USERS",  // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .announcementType(AtlanAnnouncementType.INFORMATION)  // (2)     .announcementTitle("New!")  // (3)     .announcementMessage("This table is newly created.")  // (4)     .build()  // (5) val response = table.save(client)  // (6) assert(response.createdAssets.size == 1)  // (7)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
2. Set the announcement that should be added (in this example, we're using `INFORMATION`).
3. Add a title for the announcement.
4. Add a message for the announcement.
5. Call the `build()` method to build the enriched object.
6. Call the `save()` method to actually create the asset with this announcement. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was created.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "atlanSchema": { // (5)           "typeName": "Schema",           "uniqueAttributes": {             "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV"           }         },         "announcementType": "information", // (6)         "announcementTitle": "New!", // (7)         "announcementMessage": "This table is newly created."       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide a name for the asset.
4. In the case of a table, the `qualifiedName` must be the concatenation of the parent schema's qualifiedName and the name of the table.
5. When creating a table, you must specify the schema to create it within. This is defined by the `atlanSchema` attribute. You must specify both the type (must be `Schema`) and qualifiedName of the schema within the `atlanSchema` attribute — and the schema must already exist.
6. You must provide a valid status for the announcement.
7. (Optional) You can also provide a title and message for the announcement.

---

2022\-08\-222024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/announcements/) to provide us with more information. 

Back to top

[Previous Certify assets](../certificates/) [Next Change description](../descriptions/) 

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

