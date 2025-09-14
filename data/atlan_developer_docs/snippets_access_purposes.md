# Source URL
https://developer.atlan.com/snippets/access/purposes/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/access/purposes/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage purposes in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage purposes in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/access/purposes/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Managing purposes - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/access/purposes/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage purposes in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/access/purposes/index.png
meta-twitter:title: Managing purposes - Developer
meta-viewport: width=device-width,initial-scale=1
title: Managing purposes - Developer
-->

[Skip to content](#purposes) Developer Managing purposes Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (DELETE)](../../../endpoints/#tag:apimetaentitybulk-delete)[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

Purposes[¶](#purposes "Permanent link")
=======================================

[Purposes](https://ask.atlan.com/hc/en-us/articles/4418690792849)  are a way of curating assets by a business area, or to further protect particularly sensitive data.

List purposes[¶](#list-purposes "Permanent link")
-------------------------------------------------

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a listing of purposes, run a search and page the results:

Java

Python

Kotlin

Go

Raw REST API

| List purposes | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Purpose.select(client) // (1)     .stream() // (2)     .filter(a -> a instanceof Purpose) // (3)     .forEach(p -> { // (4)         log.info("Purpose: {}", p);     });  ``` |

1. To start building up a query specifically for purposes, you can use the `select()` convenience method on `Purpose` itself. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
3. (Optional) You can do any other operations you might do on a stream, such as filtering the results to ensure they are of a certain type.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| List purposes | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Purpose from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  client = AtlanClient() search_request = (     FluentSearch()  # (1)     .where(CompoundQuery.active_assets())     .where(CompoundQuery.asset_type(Purpose))  # (2) ).to_request()  # (3) results = client.asset.search(search_request) # (4) for asset in results: # (5)     if isinstance(asset, Purpose):         # Do something with the Purpose  ``` |

1. Begin building up a query combining multiple conditions.
2. Ensure that we include only objects of type `Purpose`.
3. Build this query into a new search request.
4. Run the search.
5. Page through the results (each asset in the results will be a purpose).

| List purposes | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Purpose.select(client) // (1)     .stream() // (2)     .filter { it is Purpose } // (3)     .forEach { // (4)         log.info { "Purpose: $it" }     }  ``` |

1. To start building up a query specifically for purposes, you can use the `select()` convenience method on `Purpose` itself. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
3. (Optional) You can do any other operations you might do on a stream, such as filtering the results to ensure they are of a certain type.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| List purposes | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` response, atlanErr := assets.NewFluentSearch(). // (1)                         PageSizes(20).                         ActiveAssets().                         AssetType("Purpose").   // (2)                         Execute()   // (3) if atlanErr != nil {     logger.Log.Errorf("Error: %v", atlanErr) } for _, entity := range response[0].Entities { // (4)     if entity.TypeName != nil && *entity.TypeName == "Purpose" {         // Do something with the Purpose     } }  ``` |

1. Begin building up a query combining multiple conditions.
2. Ensure that we include only objects of type `Purpose`.
3. Run the search.
4. Page through the results (each asset in the results will be a purpose).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` {   "dsl": {     "query": { // (1)       "bool": {         "filter": [           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": {               "__typeName.keyword": {                 "value": "Purpose" // (2)               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Begin building up a query combining multiple conditions.
2. Ensure that we include only objects of type `Purpose`.

Create a purpose[¶](#create-a-purpose "Permanent link")
-------------------------------------------------------

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a new purpose:

Java

Python

Kotlin

Go

Raw REST API

| Create a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Purpose toCreate = Purpose.creator( // (1)         "Known Issues", // (2)         List.of("Issue")) // (3)     .build(); AssetMutationResponse response = toCreate.save(client); // (4) Purpose purpose = (Purpose) response.getCreatedAssets().get(0); // (5)  ``` |

1. Like other builder patterns in the SDK, the `creator()` method ensures all required information is provided for the purpose.
2. You must provide a name for the purpose.
3. You must provide a list of the tags that are included in the purpose.
4. To create the purpose in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. You can then retrieve the resulting details of the created purpose from the response (you may of course want to do some type checking first).

| Create a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Purpose  client = AtlanClient() to_create = Purpose.creator( # (1)     name="Data Assets", # (2)     atlan_tags=["Issue"]) # (3) response = client.asset.save(to_create) # (4) p = response.assets_created(asset_type=Purpose)[0] # (5)  ``` |

1. Like other builder patterns in the SDK, the `create()` method ensures all required information is provided for the purpose.
2. You must provide a name for the purpose.
3. You must provide a list of the Atlan tags that are included in the purpose.
4. To create the purpose in Atlan, call the `save()` method with the object you've built.
5. You can then retrieve the resulting details of the created purpose from the response.

| Create a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val toCreate = Purpose.creator( // (1)         "Known Issues", // (2)         listOf("Issue")) // (3)     .build() val response = toCreate.save(client) // (4) val purpose = response.createdAssets[0] as Purpose // (5)  ``` |

1. Like other builder patterns in the SDK, the `creator()` method ensures all required information is provided for the purpose.
2. You must provide a name for the purpose.
3. You must provide a list of the tags that are included in the purpose.
4. To create the purpose in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. You can then retrieve the resulting details of the created purpose from the response (you may of course want to do some type checking first).

| Create a purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` toCreate := &assets.Purpose{} toCreate.Creator( // (1)     "Data Assets", // (2)     []string{"Issue"}, // (3) ) response, err := assets.Save(toCreate) // (4) if err != nil {     logger.Log.Errorf("Error : %v", err) } else {     for _, entity := range response.MutatedEntities.CREATE { // (5)         fmt.Println("Purpose GUID:", entity.Guid, "Display Text:", entity.DisplayText)         // Do Something with Purpose     } }  ``` |

1. Like other builder patterns in the SDK, the `Creator()` method ensures all required information is provided for the purpose.
2. You must provide a name for the purpose.
3. You must provide a list of the Atlan tags that are included in the purpose.
4. To create the purpose in Atlan, call the `Save()` method with the object you've built.
5. You can then retrieve the resulting details of the created purpose from the response.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Purpose", // (2)       "attributes": {         "displayName": "Known Issues", // (3)         "purposeClassifications": [           "jRr7KmCSPliWQQSVK6dqTc" // (4)         ],         "isAccessControlEnabled": true, // (5)         "qualifiedName": "Known Issues", // (6)         "name": "Known Issues" // (7)       }     }   ] }  ``` |

1. Wrap the purpose definition in an `entities` array.
2. Ensure the type of each nested object is exactly `Purpose`.
3. Use the `displayName` to provide the name for the purpose as you want it to appear in the UI.
4. You must specify at least one Atlan tag in the `purposeClassifications` array. Note that this needs to use the [Atlan\-internal hashed\-string representation](../../common-examples/tags/#find-hashed-string-names) of the Atlan tag.
5. Ensure you explicitly set the access control to enabled when creating it.
6. You must provide a `qualifiedName` for the purpose, although this will be generated and overwritten by the back\-end
7. You must provide a `name` for the purpose, although this will also be normalized by the back\-end so will be slightly different once created.

Retrieve a purpose[¶](#retrieve-a-purpose "Permanent link")
-----------------------------------------------------------

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a purpose by its name:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve a purpose | |
| --- | --- |
| ``` 1 ``` | ``` List<Purpose> list = Purpose.findByName(client, "Known Issues"); // (1)  ``` |

1. The `findByName()` method handles searching for the purpose based on its name, which could therefore return more than one result. You can also (optionally) provide a second parameter with a list of attributes to retrieve for each purpose. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Retrieve a purpose | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() result = client.asset.find_purposes_by_name("Known Issues") # (1)  ``` |

1. The `asset.find_purposes_by_name()` method handles searching for the purpose based on its name, which could therefore return more than one result.

| Retrieve a purpose | |
| --- | --- |
| ``` 1 ``` | ``` val list = Purpose.findByName(client, "Known Issues") // (1)  ``` |

1. The `findByName()` method handles searching for the purpose based on its name, which could therefore return more than one result. You can also (optionally) provide a second parameter with a list of attributes to retrieve for each purpose. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Retrieve a purpose | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` result, atlanErr := assets.FindPurposesByName("Known Issues") // (1) if atlanErr != nil {     logger.Log.Errorf("Error: %v", atlanErr) }  ``` |

1. The `assets.FindPurposesByName()` method handles searching for the purpose based on its name, which could therefore return more than one result.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 ``` | ``` {   "dsl": {     "query": {       "bool": {         "filter": [           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": {               "__typeName.keyword": {                 "value": "Purpose" // (1)               }             }           },           {             "term": {               "name.keyword": {                 "value": "Known Issues" // (2)               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Define the search to include results for a type exactly matching `Purpose`, and...
2. ... with the exact name of the purpose you want to find.

Update a purpose[¶](#update-a-purpose "Permanent link")
-------------------------------------------------------

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To update a purpose:

Java

Python

Kotlin

Go

Raw REST API

| Update a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Purpose toUpdate = Purpose.updater( // (1)         "default/29LZO9Z6ipZbGT6caWTxRB", // (2)         "Known Issues", // (3)         true) // (4)     .description("Now with a description!") // (5)     .build(); AssetMutationResponse response = toUpdate.save(client); // (6)  ``` |

1. Use the `updater()` method to update a purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update.
5. You can then chain on any other updates, such as changing the description of the purpose.
6. To update the purpose in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update a purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Purpose  client = AtlanClient() to_update = Purpose.updater( # (1)     "default/29LZO9Z6ipZbGT6caWTxRB", # (2)     "Known Issues", # (3)     True # (4) ) to_update.description = "Now with a description!" # (5) response = client.asset.save(to_update) # (6)  ``` |

1. Use the `updater()` method to update a purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update.
5. You can then add on any other updates, such as changing the description of the purpose.
6. To update the purpose in Atlan, call the `save()` method with the object you've built.

| Update a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val toUpdate = Purpose.updater( // (1)         "default/29LZO9Z6ipZbGT6caWTxRB",  // (2)         "Known Issues",  // (3)         true) // (4)     .description("Now with a description!") // (5)     .build() val response = toUpdate.save(client) // (6)  ``` |

1. Use the `updater()` method to update a purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update.
5. You can then chain on any other updates, such as changing the description of the purpose.
6. To update the purpose in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Update a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` toUpdate := &assets.Purpose{} toUpdate.Updater( // (1)     "default/29LZO9Z6ipZbGT6caWTxRB", // (2)     "Known Issues", // (3)     true, // (4) ) Description := "Now with a description!" toUpdate.Description = &Description // (5) response, atlanErr := assets.Save(toUpdate) // (6)  ``` |

1. Use the `Updater()` method to update a purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update.
5. You can then add on any other updates, such as changing the description of the purpose.
6. To update the purpose in Atlan, call the `Save()` method with the object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Purpose", // (2)       "attributes": {         "qualifiedName": "default/29LZO9Z6ipZbGT6caWTxRB", // (3)         "name": "Known Issues" // (4)         "isAccessControlEnabled": true, // (5)         "description": "Now with a description!", // (6)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `Purpose`.
3. You must provide the qualifiedName of the purpose.
4. You must provide the name of the purpose.
5. You must provide whether the purpose should be active (enabled) or deactivated after the update.
6. You can then add on any other updates, such as changing the description of the purpose.

Delete a purpose[¶](#delete-a-purpose "Permanent link")
-------------------------------------------------------

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To permanently delete a purpose:

Java

Python

Kotlin

Go

Raw REST API

| Delete a purpose | |
| --- | --- |
| ``` 1 ``` | ``` Purpose.purge(client, "3886a92c-2510-40ea-a14d-803d7ac1616b"); // (1)  ``` |

1. To permanently delete a purpose in Atlan, call the `purge()` method with the GUID of the purpose. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete a purpose | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() client.asset.purge_by_guid("3886a92c-2510-40ea-a14d-803d7ac1616b") # (1)  ``` |

1. To permanently delete a purpose in Atlan, call the `asset.purge_by_guid()` method with the GUID of the purpose.

| Delete a purpose | |
| --- | --- |
| ``` 1 ``` | ``` Purpose.purge(client, "3886a92c-2510-40ea-a14d-803d7ac1616b") // (1)  ``` |

1. To permanently delete a purpose in Atlan, call the `purge()` method with the GUID of the purpose. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Delete a purpose | |
| --- | --- |
| ``` 1 ``` | ``` assets.PurgeByGuid([]string{"3886a92c-2510-40ea-a14d-803d7ac1616b"}) // (1)  ``` |

1. To permanently delete a purpose in Atlan, call the `assets.PurgeByGuid()` method with the GUID of the purpose.

| DELETE /api/meta/entity/bulk?guid\=3886a92c\-2510\-40ea\-a14d\-803d7ac1616b\&deleteType\=PURGE | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All the details for deleting the purpose are specified in the URL directly. Note that you must provide the GUID of the purpose to delete it.

Activate or deactivate a purpose[¶](#activate-or-deactivate-a-purpose "Permanent link")
---------------------------------------------------------------------------------------

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Alternatively, if you only want to temporarily deactivate a purpose:

Java

Python

Kotlin

Go

Raw REST API

| Deactivate a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Purpose toUpdate = Purpose.updater( // (1)         "default/29LZO9Z6ipZbGT6caWTxRB", // (2)         "Known Issues", // (3)         false) // (4)     .build(); AssetMutationResponse response = toUpdate.save(client); // (5)  ``` |

1. Use the `updater()` method to update the purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update. Setting this to `false` will deactivate the purpose, while setting it to `true` will activate the purpose.
5. To then apply that activation / deactivation to the purpose in Atlan, call the `save()` method against the object you've built. Because this operation will persist the state in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Deactivate a purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Purpose  client = AtlanClient() to_update = Purpose.updater( # (1)     "default/29LZO9Z6ipZbGT6caWTxRB", # (2)     "Known Issues", # (3)     False # (4) ) response = client.asset.save(to_update) # (5)  ``` |

1. Use the `updater()` method to update the purpose.
2. You must provide the qualified\_name of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update. Setting this to `False` will deactivate the purpose, while setting it to `True` will activate the purpose.
5. To then apply that activation / deactivation to the purpose in Atlan, call the `save()` method with the object you've built.

| Deactivate a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val toUpdate = Purpose.updater( // (1)         "default/29LZO9Z6ipZbGT6caWTxRB",  // (2)         "Known Issues",  // (3)         false) // (4)     .build() val response = toUpdate.save(client) // (5)  ``` |

1. Use the `updater()` method to update the purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update. Setting this to `false` will deactivate the purpose, while setting it to `true` will activate the purpose.
5. To then apply that activation / deactivation to the purpose in Atlan, call the `save()` method against the object you've built. Because this operation will persist the state in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Deactivate a purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` toUpdate := &assets.Purpose{} toUpdate.Updater( // (1)     "default/29LZO9Z6ipZbGT6caWTxRB", // (2)     "Known Issues", // (3)     false, // (4) ) response, atlanErr := assets.Save(toUpdate) // (5)  ``` |

1. Use the `Updater()` method to update the purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update. Setting this to `false` will deactivate the purpose, while setting it to `True` will activate the purpose.
5. To then apply that activation / deactivation to the purpose in Atlan, call the `Save()` method with the object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Purpose", // (2)       "attributes": {         "qualifiedName": "default/29LZO9Z6ipZbGT6caWTxRB", // (3)         "name": "Known Issues" // (4)         "isAccessControlEnabled": false // (5)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `Purpose`.
3. You must provide the qualifiedName of the purpose.
4. You must provide the name of the purpose.
5. You must provide whether the purpose should be active (enabled) or deactivated after the update. Setting this to `false` will deactivate the purpose, while setting it to `true` will activate the purpose.

Add policies to a purpose[¶](#add-policies-to-a-purpose "Permanent link")
-------------------------------------------------------------------------

Do not add policies in bulk

Be careful to only add policies one\-by\-one to a purpose. While the SDKs will allow you to add them in bulk, currently this results in a purpose where only the final policy in the batch is active at the end of the operation.

### Add a metadata policy[¶](#add-a-metadata-policy "Permanent link")

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a metadata policy to a purpose:

Java

Python

Kotlin

Go

Raw REST API

| Add metadata policy to purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` AuthPolicy metadata = Purpose.createMetadataPolicy( // (1)         "Simple read access", // (2)         "3886a92c-2510-40ea-a14d-803d7ac1616b", // (3)         AuthPolicyType.ALLOW, // (4)         Set.of(PurposeMetadataAction.READ), // (5)         null, // (6)         null, // (7)         true) // (8)     .build(); AssetMutationResponse response = metadata.save(client); // (9)  ``` |

1. Use the `createMetadataPolicy()` method to start building a metadata policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the purpose to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.

    To include all permissions

    If you want to include all permissions, you can simply use `Arrays.asList(PurposeMetadataAction.values())`.
6. (Optional) Specify the internal names of groups you want the policy to apply to. At least this or the list of users, or all users must be provided.
7. (Optional) Specify the usernames of users you want the policy to apply to. At least this or the list of groups, or all users must be provided.
8. (Optional) Apply this policy to all users. If this is set to `true` it will override the previous two parameters, or if false one of the previous two parameters (users or groups) must be specified.
9. To then add the policy to the purpose in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add metadata policy to purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Purpose from pyatlan.model.enums import AuthPolicyType, PurposeMetadataAction  client = AtlanClient() metadata = Purpose.create_metadata_policy( # (1)     client=client, # (2)     name="Simple read access", # (3)     purpose_id="3886a92c-2510-40ea-a14d-803d7ac1616b", # (4)     policy_type=AuthPolicyType.ALLOW, # (5)     actions={PurposeMetadataAction.READ}, # (6)     all_users=True, # (7) ) response = client.asset.save(metadata) # (8)  ``` |

1. Use the `create_metadata_policy()` method to start building a metadata policy with the minimal required information.
2. You must provide a client instance.
3. You must give the policy a name.
4. You must provide the GUID of the purpose to attach this policy to.
5. Specify the type of policy (granting or denying the actions specified next).
6. Specify the set of permissions you want to allow (or deny) in this policy.
7. Specify either the internal names of groups, the usernames of users, or this `all_users` option to control who you want the policy to apply to. At least one of these must be provided.
8. To then add the policy to the purpose in Atlan, call the `save()` method with the policy object you've built.

| Add metadata policy to purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val metadata = Purpose.createMetadataPolicy( // (1)         "Simple read access",  // (2)         "3886a92c-2510-40ea-a14d-803d7ac1616b",  // (3)         AuthPolicyType.ALLOW,  // (4)         setOf(PurposeMetadataAction.READ),  // (5)         null,  // (6)         null,  // (7)         true) // (8)     .build() val response = metadata.save(client) // (9)  ``` |

1. Use the `createMetadataPolicy()` method to start building a metadata policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the purpose to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.

    To include all permissions

    If you want to include all permissions, you can simply use `PurposeMetadataAction.values().toList()`.
6. (Optional) Specify the internal names of groups you want the policy to apply to. At least this or the list of users, or all users must be provided.
7. (Optional) Specify the usernames of users you want the policy to apply to. At least this or the list of groups, or all users must be provided.
8. (Optional) Apply this policy to all users. If this is set to `true` it will override the previous two parameters, or if false one of the previous two parameters (users or groups) must be specified.
9. To then add the policy to the purpose in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Add metadata policy to purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` purpose := &assets.Purpose{} metadata, _ := purpose.CreateMetadataPolicy( // (1)     "Simple read access", // (2)     "3886a92c-2510-40ea-a14d-803d7ac1616b", // (3)     atlan.AuthPolicyTypeAllow, // (4)     []atlan.PurposeMetadataAction{         atlan.PurposeMetadataActionRead, // (5)     },     nil, // (6)     nil, // (7)     true, // (8) ) response, atlanErr := assets.Save(metadata) // (9)  ``` |

1. Use the `CreateMetadataPolicy()` method to start building a metadata policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the purpose to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.
6. (Optional) Specify the internal names of groups you want the policy to apply to. At least this or the list of users, or all users must be provided.
7. (Optional) Specify the usernames of users you want the policy to apply to. At least this or the list of users, or all users must be provided.
8. (Optional) Apply this policy to all users. If this is set to `true` it will override the previous two parameters, or if false one of the previous two parameters (users or groups) must be specified.
9. To then add the policy to the purpose in Atlan, call the `Save()` method with the policy object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AuthPolicy", // (2)       "attributes": {         "policySubCategory": "metadata", // (3)         "policyCategory": "purpose", // (4)         "policyType": "allow", // (5)         "policyServiceName": "atlas_tag", // (6)         "name": "Simple read access", // (7)         "qualifiedName": "Simple read access", // (8)         "policyActions": [           "entity-read" // (9)         ],         "accessControl": { // (10)           "typeName": "Purpose", // (11)           "guid": "3886a92c-2510-40ea-a14d-803d7ac1616b" // (12)         },         "policyResourceCategory": "TAG", // (13)         "policyGroups": [           "public" // (14)         ]       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `AuthPolicy`.
3. You must use a policy subcategory of `metadata`.
4. You must use a policy category of `purpose`.
5. Specify the type of policy (granting or denying the actions specified next).
6. You must use a policy service name of `atlas_tag`.
7. You must give the policy a name.
8. You must give the policy itself a `qualifiedName`, although this will be overwritten by a generated value by the back\-end.
9. Specify the set of permissions you want to allow (or deny) in this policy.

    To review available permissions

    To review the available permissions, see the SDKs — for example, the `PurposeMetadataAction` enum in the Java SDK.
10. Use an embedded `accessControl` object to define the purpose to attach this policy to.
11. The embedded type name of the `accessControl` object must be exactly `Purpose`.
12. You must provide the GUID of the purpose to attach this policy to.
13. You must set the policy resource category to `TAG`.
14. You must specify at least one username in a `policyUsers` array or one internal group name in a `policyGroups` array. The special group `public` covers all users.

### Add a data policy[¶](#add-a-data-policy "Permanent link")

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a data policy to a purpose:

Java

Python

Kotlin

Go

Raw REST API

| Add data policy to purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` AuthPolicy data = Purpose.createDataPolicy( // (1)         "Mask the data", // (2)         "3886a92c-2510-40ea-a14d-803d7ac1616b", // (3)         AuthPolicyType.DATA_MASK, // (4)         null, // (5)         null, // (6)         true) // (7)     .policyMaskType(DataMaskingType.HASH) // (8)     .build(); AssetMutationResponse response = data.save(client); // (9)  ``` |

1. Use the `createDataPolicy()` method to start building a data policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the purpose to attach this policy to.
4. Specify the type of policy (granting, denying or masking the data of assets with the tags in the purpose).
5. (Optional) Specify the names of internal groups you want the policy to apply to. At least this or the list of users, or all users must be provided.
6. (Optional) Specify the usernames of users you want the policy to apply to. At least this or the list of groups, or all users must be provided.
7. (Optional) Apply this policy to all users. If this is set to `true` it will override the previous two parameters, or if false one of the previous two parameters (users or groups) must be specified.
8. If you set the policy type to `DATA_MASK`, you also need to chain on the type of masking you want to apply.
9. To then add the policy to the purpose in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add data policy to purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Purpose from pyatlan.model.enums import AuthPolicyType, DataMaskingType  client = AtlanClient() data = Purpose.create_data_policy( # (1)     client=client, # (2)     name="Mask the data", # (3)     purpose_id="3886a92c-2510-40ea-a14d-803d7ac1616b", # (4)     policy_type=AuthPolicyType.DATA_MASK, # (5)     all_users=True, # (6) ) data.policy_mask_type = DataMaskingType.HASH # (7) response = client.asset.save(data) # (8)  ``` |

1. Use the `create_data_policy()` method to start building a data policy with the minimal required information.
2. You must provide a client instance.
3. You must give the policy a name.
4. You must provide the GUID of the purpose to attach this policy to.
5. Specify the type of policy (granting, denying or masking the data of assets with the tags in the purpose).
6. Specify either the names of internal groups, the usernames of users, or this `all_users` option to control who you want the policy to apply to. At least one of these must be provided.
7. If you set the policy type to `DATAMASK`, you also need to set the type of masking you want to apply.
8. To then add the policy to the purpose in Atlan, call the `save()` method with the policy object you've built.

| Add data policy to purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val data = Purpose.createDataPolicy( // (1)         "Mask the data",  // (2)         "3886a92c-2510-40ea-a14d-803d7ac1616b",  // (3)         AuthPolicyType.DATA_MASK,  // (4)         null,  // (5)         null,  // (6)         true) // (7)     .policyMaskType(DataMaskingType.HASH) // (8)     .build() val response = data.save(client) // (9)  ``` |

1. Use the `createDataPolicy()` method to start building a data policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the purpose to attach this policy to.
4. Specify the type of policy (granting, denying or masking the data of assets with the tags in the purpose).
5. (Optional) Specify the names of internal groups you want the policy to apply to. At least this or the list of users, or all users must be provided.
6. (Optional) Specify the usernames of users you want the policy to apply to. At least this or the list of groups, or all users must be provided.
7. (Optional) Apply this policy to all users. If this is set to `true` it will override the previous two parameters, or if false one of the previous two parameters (users or groups) must be specified.
8. If you set the policy type to `DATA_MASK`, you also need to chain on the type of masking you want to apply.
9. To then add the policy to the purpose in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Add data policy to purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` purpose := &assets.Purpose{} data, _ := purpose.CreateDataPolicy( // (1)     "Mask the data", // (2)     "3886a92c-2510-40ea-a14d-803d7ac1616b", // (3)     atlan.AuthPolicyTypeDatamask, // (4)     nil, // (5)     nil, // (6)     true, // (7) ) data.PolicyMaskType = &atlan.DataMaskingTypeHASH // (8) response, atlanErr := assets.Save(data) // (9)  ``` |

1. Use the `CreateDataPolicy()` method to start building a data policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the purpose to attach this policy to.
4. Specify the type of policy (granting, denying or masking the data of assets with the tags in the purpose).
5. (Optional) Specify the names of internal groups you want the policy to apply to. At least this or the list of users, or all users must be provided.
6. (Optional) Specify the usernames of users you want the policy to apply to. At least this or the list of groups, or all users must be provided.
7. (Optional) Apply this policy to all users. If this is set to `true` it will override the previous two parameters, or if false one of the previous two parameters (users or groups) must be specified.
8. If you set the policy type to `DataMask`, you also need to chain on the type of masking you want to apply.
9. To then add the policy to the purpose in Atlan, call the `Save()` method against the policy object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AuthPolicy", // (2)       "attributes": {         "policySubCategory": "data", // (3)         "policyCategory": "purpose", // (4)         "policyType": "dataMask", // (5)         "policyMaskType": "MASK_HASH", // (6)         "policyServiceName": "atlas_tag", // (7)         "name": "Mask the data", // (8)         "qualifiedName": "Mask the data", // (9)         "policyActions": [           "select" // (10)         ],         "accessControl": { // (11)           "typeName": "Purpose", // (12)           "guid": "3886a92c-2510-40ea-a14d-803d7ac1616b" // (13)         },         "policyResourceCategory": "TAG", // (14)         "policyGroups": [           "public" // (15)         ]       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `AuthPolicy`.
3. You must use a policy subcategory of `metadata`.
4. You must use a policy category of `purpose`.
5. Specify the type of policy (granting, denying or masking the data of assets with the tags in the purpose).
6. If you set the policy type to `dataMask`, you also need to set the type of masking you want to apply.

    To review available masking options

    To review the available masking options, see the SDKs — for example, the `DataMaskingType` enum in the Java SDK.
7. You must use a policy service name of `atlas_tag`.
8. You must give the policy a name.
9. You must give the policy itself a `qualifiedName`, although this will be overwritten by a generated value by the back\-end.
10. Specify the set of permissions you want to allow (or deny) in this policy. A data policy for a purpose can only allow or deny `select` permissions.
11. Use an embedded `accessControl` object to define the purpose to attach this policy to.
12. The embedded type name of the `accessControl` object must be exactly `Purpose`.
13. You must provide the GUID of the purpose to attach this policy to.
14. You must set the policy resource category to `TAG`.
15. You must specify at least one username in a `policyUsers` array or one internal group name in a `policyGroups` array. The special group `public` covers all users.

List policies in a purpose[¶](#list-policies-in-a-purpose "Permanent link")
---------------------------------------------------------------------------

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To list all the policies in a purpose:

Java

Python

Kotlin

Go

Raw REST API

| List all policies in a purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` Purpose.select(client) // (1)     .where(Purpose.NAME.eq("Known Issues")) // (2)     .includeOnResults(Purpose.POLICIES) // (3)     .includeOnRelations(AuthPolicy.NAME) // (4)     .includeOnRelations(AuthPolicy.POLICY_TYPE)     .includeOnRelations(AuthPolicy.POLICY_ACTIONS)     .includeOnRelations(AuthPolicy.POLICY_USERS)     .includeOnRelations(AuthPolicy.POLICY_GROUPS)     .stream() // (5)     .filter(a -> a instanceof Purpose)     .forEach(p -> { // (6)         Set<IAuthPolicy> policies = ((Purpose) p).getPolicies();         for (IAuthPolicy policy : policies) {             // Do something with each policy         }     });  ``` |

1. Start by selecting a purpose, here using a FluentSearch\-based approach. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can select the purpose by whatever you like, in this example we are selecting based on its name.
3. Include the policies for the purpose as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and users controlled by each policy.
5. You can then directly stream the results of the search.
6. For each result of the search (itself a Purpose), you can then retrieve its policies and iterate through them.

| List all policies in a purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` from typing import cast  from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AuthPolicy, Purpose from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient() request = (     FluentSearch()     .where(FluentSearch.asset_type(Purpose))  # (1)     .where(Purpose.NAME.eq("Known Issues"))  # (2)     .include_on_results(Purpose.POLICIES)  # (3)     .include_on_relations(AuthPolicy.POLICY_TYPE)  # (4)     .include_on_relations(AuthPolicy.POLICY_ACTIONS)     .include_on_relations(AuthPolicy.POLICY_USERS)     .include_on_relations(AuthPolicy.POLICY_GROUPS) ).to_request()  # (5) response = client.asset.search(request)  # (6) for p in response:  # (7)     policies = cast(Purpose, p).policies     for policy in policies:         # Do something with each policy  ``` |

1. Start by selecting a purpose, here using a FluentSearch\-based approach.
2. You can select the purpose by whatever you like, in this example we are selecting based on its name.
3. Include the policies for the purpose as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and users controlled by each policy.
5. You can then translate the FluentSearch into a search request.
6. Run a search using the search request.
7. For each result of the search (itself a Purpose), you can then retrieve its policies and iterate through them.

| List all policies in a purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` Purpose.select(client) // (1)     .where(Purpose.NAME.eq("Known Issues")) // (2)     .includeOnResults(Purpose.POLICIES) // (3)     .includeOnRelations(AuthPolicy.NAME) // (4)     .includeOnRelations(AuthPolicy.POLICY_TYPE)     .includeOnRelations(AuthPolicy.POLICY_ACTIONS)     .includeOnRelations(AuthPolicy.POLICY_USERS)     .includeOnRelations(AuthPolicy.POLICY_GROUPS)     .stream() // (5)     .filter { it is Purpose }     .forEach { // (6)         val policies = (it as Purpose).policies         for (policy in policies) {             // Do something with each policy         }     }  ``` |

1. Start by selecting a purpose, here using a FluentSearch\-based approach. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can select the purpose by whatever you like, in this example we are selecting based on its name.
3. Include the policies for the purpose as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and users controlled by each policy.
5. You can then directly stream the results of the search.
6. For each result of the search (itself a Purpose), you can then retrieve its policies and iterate through them.

| List all policies in a purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` response, atlanErr := assets.NewFluentSearch().     AssetType("Purpose"). // (1)     Where(ctx.Purpose.NAME.Eq("Known Issues")). // (2)     IncludeOnResults(ctx.Purpose.POLICIES.GetAtlanFieldName()). // (3)     IncludeOnRelations(ctx.AuthPolicy.POLICY_TYPE.GetAtlanFieldName()). // (4)     IncludeOnRelations(ctx.AuthPolicy.POLICY_ACTIONS.GetAtlanFieldName()).     IncludeOnRelations(ctx.AuthPolicy.POLICY_USERS.GetAtlanFieldName()).     IncludeOnRelations(ctx.AuthPolicy.POLICY_GROUPS.GetAtlanFieldName()).     Execute() // (5) if atlanErr != nil {     logger.Log.Errorf("Error: %v", atlanErr) } for _, entity := range response[0].Entities { // (6)     if entity.TypeName != nil && *entity.TypeName == "Purpose" {         for _, policy := range *entity.Policies {             // Do something with each Policy         }     } }  ``` |

1. Start by selecting a purpose, here using a FluentSearch\-based approach.
2. You can select the purpose by whatever you like, in this example we are selecting based on its name.
3. Include the policies for the purpose as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and users controlled by each policy.
5. Run a search using the search request.
6. For each result of the search (itself a Purpose), you can then retrieve its policies and iterate through them.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": {         "filter": [           {             "term": {               "__typeName.keyword": {                 "value": "Purpose"               }             }           },           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": {               "name.keyword": {                 "value": "Known Issues" // (2)               }             }           }         ]       }     },     "sort": [       {         "__guid": {           "order": "asc"         }       }     ],     "track_total_hits": true   },   "attributes": [     "policies" // (3)   ],   "relationAttributes": [ // (4)     "name",     "policyType",     "policyResources",     "policyActions"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Start by running a search for purposes.
2. You can select the purpose by whatever you like, in this example we are selecting based on its name.
3. Include the `policies` for the purpose as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and users controlled by each policy.

Personalize the purpose[¶](#personalize-the-purpose "Permanent link")
---------------------------------------------------------------------

[0\.0\.14](https://github.com/atlanhq/atlan-go/releases/tag/0.0.14 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To personalize which details to show for assets within a purpose:

Java

Python

Kotlin

Go

Raw REST API

| Personalize the purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` Purpose toUpdate = Purpose.updater( // (1)         "default/29LZO9Z6ipZbGT6caWTxRB", // (2)         "Known Issues", // (3)         true) // (4)     .denyAssetTab(AssetSidebarTab.LINEAGE) // (5)     .denyAssetTab(AssetSidebarTab.RELATIONS)     .denyAssetTab(AssetSidebarTab.QUERIES)     .build(); AssetMutationResponse response = toUpdate.save(client); // (6)  ``` |

1. Use the `updater()` method to update a purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update.
5. You can then chain preferences on which metadata tabs should be hidden when using this purpose.
6. To update the purpose in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Personalize the purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Purpose from pyatlan.model.enums import AssetSidebarTab  client = AtlanClient() to_update = Purpose.updater( # (1)     "default/29LZO9Z6ipZbGT6caWTxRB", # (2)     "Known Issues", # (3)     True # (4) ) to_update.deny_asset_tabs = { # (5)     AssetSidebarTab.LINEAGE.value,     AssetSidebarTab.RELATIONS.value,     AssetSidebarTab.QUERIES.value, } response = client.asset.save(to_update) # (6)  ``` |

1. Use the `updater()` method to update a purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update.
5. You can then set preferences on which metadata tabs should be hidden when using this purpose.
6. To update the purpose in Atlan, call the `save()` method with the object you've built.

| Personalize the purpose | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val toUpdate = Purpose.updater( // (1)         "default/29LZO9Z6ipZbGT6caWTxRB",  // (2)         "Known Issues",  // (3)         true) // (4)     .denyAssetTab(AssetSidebarTab.LINEAGE) // (5)     .denyAssetTab(AssetSidebarTab.RELATIONS)     .denyAssetTab(AssetSidebarTab.QUERIES)     .build() val response = toUpdate.save(client) // (6)  ``` |

1. Use the `updater()` method to update a purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update.
5. You can then chain preferences on which metadata tabs should be hidden when using this purpose.
6. To update the purpose in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Personalize the purpose | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` toUpdate := &assets.Purpose{} toUpdate.Updater( // (1)     "default/29LZO9Z6ipZbGT6caWTxRB", // (2)     "Known Issues", // (3)     true, // (4) ) toUpdate.DenyAssetTabs = &[]string{ // (5)     atlan.AssetSidebarTabLineage.Name,     atlan.AssetSidebarTabRelations.Name,     atlan.AssetSidebarTabQueries.Name, } response, atlanErr := assets.Save(toUpdate) // (6)  ``` |

1. Use the `Updater()` method to update a purpose.
2. You must provide the qualifiedName of the purpose.
3. You must provide the name of the purpose.
4. You must provide whether the purpose should be active (enabled) or deactivated after the update.
5. You can then set preferences on which metadata tabs should be hidden when using this purpose.
6. To update the purpose in Atlan, call the `Save()` method with the object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Purpose", // (2)       "attributes": {         "qualifiedName": "default/29LZO9Z6ipZbGT6caWTxRB", // (3)         "name": "Known Issues" // (4)         "isAccessControlEnabled": true, // (5)         "denyAssetTabs": [ // (6)           "Lineage",           "Relations",           "Queries"         ]       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `Purpose`.
3. You must provide the qualifiedName of the purpose.
4. You must provide the name of the purpose.
5. You must provide whether the purpose should be active (enabled) or deactivated after the update.
6. You can then set preferences on which metadata tabs should be hidden when using this purpose.

    To review available tabs

    To review the available, see the SDKs — for example, the `AssetSidebarTab` enum in the Java SDK.

---

2023\-01\-272025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/access/purposes/) to provide us with more information. 

Back to top

[Previous Manage personas](../personas/) [Next Manage policies](../policies/) 

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

