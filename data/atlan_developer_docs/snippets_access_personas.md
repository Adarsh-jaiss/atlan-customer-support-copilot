# Source URL
https://developer.atlan.com/snippets/access/personas/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/access/personas/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage personas in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage personas in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/access/personas/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Managing personas - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/access/personas/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage personas in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/access/personas/index.png
meta-twitter:title: Managing personas - Developer
meta-viewport: width=device-width,initial-scale=1
title: Managing personas - Developer
-->

[Skip to content](#personas) Developer Managing personas Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (DELETE)](../../../endpoints/#tag:apimetaentitybulk-delete)[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

Personas[¶](#personas "Permanent link")
=======================================

[Personas](https://ask.atlan.com/hc/en-us/articles/4413870860049)  are a way of curating assets for a group of users.

List personas[¶](#list-personas "Permanent link")
-------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a listing of personas, run a search and page the results:

Java

Python

Kotlin

Go

Raw REST API

| List personas | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Persona.select(client) // (1)     .stream() // (2)     .filter(a -> a instanceof Persona) // (3)     .forEach(p -> { // (4)         log.info("Persona: {}", p);     });  ``` |

1. To start building up a query specifically for personas, you can use the `select()` convenience method on `Persona` itself. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
3. (Optional) You can do any other operations you might do on a stream, such as filtering the results to ensure they are of a certain type.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| List personas | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  client = AtlanClient() search_request = (     FluentSearch()  # (1)     .where(CompoundQuery.active_assets())     .where(CompoundQuery.asset_type(Persona))  # (2) ).to_request()  # (3) results = client.asset.search(search_request) # (4) for asset in results: # (5)     if isinstance(asset, Persona):         # Do something with the Persona  ``` |

1. Begin building up a query combining multiple conditions.
2. Ensure that we include only objects of type `Persona`.
3. Build this query into a new search request.
4. Run the search.
5. Page through the results (each asset in the results will be a persona).

| List personas | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Persona.select(client) // (1)     .stream() // (2)     .filter { it is Persona } // (3)     .forEach { // (4)         log.info { "Persona: $it" }     }  ``` |

1. To start building up a query specifically for personas, you can use the `select()` convenience method on `Persona` itself. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. The search will only run when you call the `stream()` method, which will then lazily\-load each page of results into a stream.
3. (Optional) You can do any other operations you might do on a stream, such as filtering the results to ensure they are of a certain type.
4. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

| List personas | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` response, atlanErr := assets.NewFluentSearch().  // (1)     PageSizes(20).     ActiveAssets().     AssetType("Persona"). // (2)     Execute() // (3) if atlanErr != nil {   fmt.Println("Error:", atlanErr) } for _, entity := range response[0].Entities { // (4)   if entity.TypeName != nil && *entity.TypeName == "Persona" {     // Do something with the Persona   } }  ``` |

1. Begin building up a query combining multiple conditions.
2. Ensure that we include only objects of type `Persona`.
3. Run the search.
4. Page through the results (each asset in the results will be a persona).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` {   "dsl": {     "query": { // (1)       "bool": {         "filter": [           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": {               "__typeName.keyword": {                 "value": "Persona" // (2)               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Begin building up a query combining multiple conditions.
2. Ensure that we include only objects of type `Persona`.

Create a persona[¶](#create-a-persona "Permanent link")
-------------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a new persona:

Java

Python

Kotlin

Go

Raw REST API

| Create a persona | |
| --- | --- |
| ``` 1 2 3 ``` | ``` Persona toCreate = Persona.creator("Data Assets").build(); // (1) AssetMutationResponse response = toCreate.save(client); // (2) Persona persona = (Persona) response.getCreatedAssets().get(0); // (3)  ``` |

1. Like other builder patterns in the SDK, the `creator()` method ensures all required information is provided for the persona.
2. To create the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You can then retrieve the resulting details of the created persona from the response (you may of course want to do some type checking first).

| Create a persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona  client = AtlanClient() to_create = Persona.creator(name="Data Assets") # (1) response = client.asset.save(to_create) # (2) p = response.assets_created(asset_type=Persona)[0] # (3)  ``` |

1. Like other builder patterns in the SDK, the `create()` method ensures all required information is provided for the persona.
2. To create the persona in Atlan, call the `save()` method against the object you've built.
3. You can then retrieve the resulting details of the created persona from the response (you may of course want to do some type checking first).

| Create a persona | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val toCreate = Persona.creator("Data Assets").build() // (1) val response = toCreate.save(client) // (2) val persona = response.createdAssets[0] as Persona // (3)  ``` |

1. Like other builder patterns in the SDK, the `creator()` method ensures all required information is provided for the persona.
2. To create the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. You can then retrieve the resulting details of the created persona from the response (you may of course want to do some type checking first).

| Create a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` toCreate := &assets.Persona{} toCreate.Creator("Data Assets") // (1) response, atlanErr := assets.Save(toCreate) // (2) if atlanErr != nil {   fmt.Println("Error:", atlanErr) } else { for _, entity := range response.MutatedEntities.CREATE { // (3)   fmt.Println("Persona ID:", entity.Guid, "Display Text:", entity.DisplayText)     // Do something with the Persona   } }  ``` |

1. Like other builder patterns in the SDK, the `Creator()` method ensures all required information is provided for the persona.
2. To create the persona in Atlan, call the `Save()` method against the object you've built.
3. You can then retrieve the resulting details of the created persona from the response (you may of course want to do some type checking first).

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Persona", // (2)       "attributes": {         "displayName": "Data Assets", // (3)         "isAccessControlEnabled": true, // (4)         "qualifiedName": "Data Assets", // (5)         "name": "Data Assets" // (6)       }     }   ] }  ``` |

1. Wrap the persona definition in an `entities` array.
2. Ensure the type of each nested object is exactly `Persona`.
3. Use the `displayName` to provide the name for the persona as you want it to appear in the UI.
4. Ensure you explicitly set the access control to enabled when creating it.
5. You must provide a `qualifiedName` for the persona, although this will be generated and overwritten by the back\-end
6. You must provide a `name` for the persona, although this will also be normalized by the back\-end so will be slightly different once created.

Retrieve a persona[¶](#retrieve-a-persona "Permanent link")
-----------------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a persona by its name:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve a persona | |
| --- | --- |
| ``` 1 ``` | ``` List<Persona> list = Persona.findByName(client, "Data Assets"); // (1)  ``` |

1. The `findByName()` method handles searching for the persona based on its name, which could therefore return more than one result. You can also (optionally) provide a second parameter with a list of attributes to retrieve for each persona. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Retrieve a persona | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() result = client.asset.find_personas_by_name("Data Assets") # (1)  ``` |

1. The `asset.find_personas_by_name()` method handles searching for the persona based on its name, which could therefore return more than one result.

| Retrieve a persona | |
| --- | --- |
| ``` 1 ``` | ``` val list = Persona.findByName(client, "Data Assets") // (1)  ``` |

1. The `findByName()` method handles searching for the persona based on its name, which could therefore return more than one result. You can also (optionally) provide a second parameter with a list of attributes to retrieve for each persona. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Retrieve a persona | |
| --- | --- |
| ``` 1 ``` | ``` response, atlanErr := assets.FindPersonasByName("Data Assets") // (1)  ``` |

1. The `assets.FindPersonasByName()` method handles searching for the persona based on its name, which could therefore return more than one result.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 ``` | ``` {   "dsl": {     "query": {       "bool": {         "filter": [           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": {               "__typeName.keyword": {                 "value": "Persona" // (1)               }             }           },           {             "term": {               "name.keyword": {                 "value": "Data Assets" // (2)               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Define the search to include results for a type exactly matching `Persona`, and...
2. ... with the exact name of the persona you want to find.

Update a persona[¶](#update-a-persona "Permanent link")
-------------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To update a persona:

Java

Python

Kotlin

Go

Raw REST API

| Update a persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Persona toUpdate = Persona.updater( // (1)         "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)         "Data Assets", // (3)         true) // (4)     .description("Now with a description!") // (5)     .build(); AssetMutationResponse response = toUpdate.save(client); // (6)  ``` |

1. Use the `updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then chain on any other updates, such as changing the description of the persona.
6. To update the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona  client = AtlanClient() to_update = Persona.updater( # (1)     "default/M5HnBQ8QWhrAVGuvBx8iSW", # (2)     "Data Assets", # (3)     True # (4) ) to_update.description = "Now with a description!" # (5) response = client.asset.save(to_update) # (7)  ``` |

1. Use the `updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then add on any other updates, such as changing the description of the persona.
6. To update the persona in Atlan, call the `save()` method with the object you've built.

| Update a persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val toUpdate = Persona.updater( // (1)         "default/M5HnBQ8QWhrAVGuvBx8iSW",  // (2)         "Data Assets",  // (3)         true) // (4)     .description("Now with a description!") // (5)     .build() val response = toUpdate.save(client) // (6)  ``` |

1. Use the `updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then chain on any other updates, such as changing the description of the persona.
6. To update the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Update a persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` toUpdate := &assets.Persona{} toUpdate.Updater( // (1)   "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)   "Data Assets", // (3)   true, // (4) )  description := "Now with a description " toUpdate.Description = &description // (5) response, atlanErr := assets.Save(toUpdate) // (6)  ``` |

1. Use the `updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then add on any other updates, such as changing the description of the persona.
6. To update the persona in Atlan, call the `Save()` method with the object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Persona", // (2)       "attributes": {         "qualifiedName": "default/M5HnBQ8QWhrAVGuvBx8iSW", // (3)         "name": "Data Assets" // (4)         "isAccessControlEnabled": true, // (5)         "description": "Now with a description!", // (6)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `Persona`.
3. You must provide the qualifiedName of the persona.
4. You must provide the name of the persona.
5. You must provide whether the persona should be active (enabled) or deactivated after the update.
6. You can then add on any other updates, such as changing the description of the persona.

Delete a persona[¶](#delete-a-persona "Permanent link")
-------------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To permanently delete a persona:

Java

Python

Kotlin

Go

Raw REST API

| Delete a persona | |
| --- | --- |
| ``` 1 ``` | ``` Persona.purge(client, "67e08ab7-9688-40bc-ae4a-da2bc06b1588"); // (1)  ``` |

1. To permanently delete a persona in Atlan, call the `purge()` method with the GUID of the persona. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete a persona | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() client.asset.purge_by_guid("67e08ab7-9688-40bc-ae4a-da2bc06b1588") # (1)  ``` |

1. To permanently delete a persona in Atlan, call the `asset.purge_by_guid()` method with the GUID of the persona.

| Delete a persona | |
| --- | --- |
| ``` 1 ``` | ``` Persona.purge(client, "67e08ab7-9688-40bc-ae4a-da2bc06b1588") // (1)  ``` |

1. To permanently delete a persona in Atlan, call the `purge()` method with the GUID of the persona. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Delete a persona | |
| --- | --- |
| ``` 1 ``` | ``` assets.PurgeByGuid([]string{"67e08ab7-9688-40bc-ae4a-da2bc06b1588"}) // (1)  ``` |

1. To permanently delete a persona in Atlan, call the `assets.PurgeByGuid()` method with the GUID of the persona.

| DELETE /api/meta/entity/bulk?guid\=67e08ab7\-9688\-40bc\-ae4a\-da2bc06b1588\&deleteType\=PURGE | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All the details for deleting the persona are specified in the URL directly. Note that you must provide the GUID of the persona to delete it.

Activate or deactivate a persona[¶](#activate-or-deactivate-a-persona "Permanent link")
---------------------------------------------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Alternatively, if you only want to temporarily deactivate a persona:

Java

Python

Kotlin

Go

Raw REST API

| Deactivate a persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Persona toUpdate = Persona.updater( // (1)         "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)         "Data Assets", // (3)         false) // (4)     .build(); AssetMutationResponse response = toUpdate.save(client); // (5)  ``` |

1. Use the `updater()` method to update the persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update. Setting this to `false` will deactivate the persona, while setting it to `true` will activate the persona.
5. To then apply that activation / deactivation to the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the state in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Deactivate a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona  client = AtlanClient() to_update = Persona.updater( # (1)     "default/M5HnBQ8QWhrAVGuvBx8iSW", # (2)     "Data Assets", # (3)     False # (4) ) response = client.asset.save(to_update) # (5)  ``` |

1. Use the `updater()` method to update the persona.
2. You must provide the qualified\_name of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update. Setting this to `False` will deactivate the persona, while setting it to `True` will activate the persona.
5. To then apply that activation / deactivation to the persona in Atlan, call the `save()` method with the object you've built.

| Deactivate a persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val toUpdate = Persona.updater( // (1)         "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)         "Data Assets", // (3)         false) // (4)     .build() val response = toUpdate.save(client) // (5)  ``` |

1. Use the `updater()` method to update the persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update. Setting this to `false` will deactivate the persona, while setting it to `true` will activate the persona.
5. To then apply that activation / deactivation to the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the state in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Deactivate a persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` toUpdate := &assets.Persona{}  toUpdate.Updater( // (1)   "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)   "Data Assets", // (3)   false, // (4) ) response, atlanErr := assets.Save(toUpdate) // (5)  ``` |

1. Use the `Updater()` method to update the persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update. Setting this to `False` will deactivate the persona, while setting it to `True` will activate the persona.
5. To then apply that activation / deactivation to the persona in Atlan, call the `Save()` method with the object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Persona", // (2)       "attributes": {         "qualifiedName": "default/M5HnBQ8QWhrAVGuvBx8iSW", // (3)         "name": "Data Assets" // (4)         "isAccessControlEnabled": false // (5)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `Persona`.
3. You must provide the qualifiedName of the persona.
4. You must provide the name of the persona.
5. You must provide whether the persona should be active (enabled) or deactivated after the update. Setting this to `false` will deactivate the persona, while setting it to `true` will activate the persona.

Add subjects to a persona[¶](#add-subjects-to-a-persona "Permanent link")
-------------------------------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Similarly, adding subjects to a persona is a matter of updating the persona:

Java

Python

Kotlin

Go

Raw REST API

| Add subjects to a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` Persona toUpdate = Persona.updater( // (1)         "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)         "Data Assets", // (3)         false) // (4)     .personaGroup("group1") // (5)     .personaGroup("group2")     .personaUser("jsmith") // (6)     .personaUser("jdoe")     .build(); AssetMutationResponse response = toUpdate.save(client); // (7)  ``` |

1. Use the `updater()` method to update the persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then chain any number of updates to the `personaGroup()` property. These should be internal names of groups that you want to be controlled through the persona's policies.
6. Similarly, you can chain any number of updates to the `personaUser()` property. These should be usernames of users that you want to be controlled through the persona's policies.
7. To then apply those membership updates to the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add subjects to a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona  client = AtlanClient() to_update = Persona.updater( # (1)     "default/M5HnBQ8QWhrAVGuvBx8iSW", # (2)     "Data Assets", # (3)     True # (4) ) to_update.persona_groups = ["group1", "group2"] # (5) to_update.persona_users = ["jsmith", "jdoe"] # (6) response = client.asset.save(to_update) # (7)  ``` |

1. Use the `updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then add any number of groups to the `persona_groups` property. These should be internal names of groups that you want to be controlled through the persona's policies.
6. Similarly, you can add any number of users to the `persona_users` property. These should be usernames of users that you want to be controlled through the persona's policies.
7. To then apply those membership updates to the persona in Atlan, call the `save()` method against the object you've built.

| Add subjects to a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val toUpdate = Persona.updater( // (1)         "default/M5HnBQ8QWhrAVGuvBx8iSW",  // (2)         "Data Assets",  // (3)         false) // (4)     .personaGroup("group1") // (5)     .personaGroup("group2")     .personaUser("jsmith") // (6)     .personaUser("jdoe")     .build() val response = toUpdate.save(client) // (7)  ``` |

1. Use the `updater()` method to update the persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then chain any number of updates to the `personaGroup()` property. These should be internal names of groups that you want to be controlled through the persona's policies.
6. Similarly, you can chain any number of updates to the `personaUser()` property. These should be usernames of users that you want to be controlled through the persona's policies.
7. To then apply those membership updates to the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Add subjects to a persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` toUpdate := &assets.Persona{} toUpdate.Updater( // (1)   "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)   "Data Assets",  // (3)   false, // (4) ) toUpdate.PersonaGroups = &[]string{"group1", "group2"} // (5) toUpdate.PersonaUsers = &[]string{"jsmith", "jdoe"} // (6) response, atlanErr := assets.Save(toUpdate) // (7)  ``` |

1. Use the `Updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then add any number of groups to the `PersonaGroups` property. These should be internal names of groups that you want to be controlled through the persona's policies.
6. Similarly, you can add any number of users to the `PersonaUsers` property. These should be usernames of users that you want to be controlled through the persona's policies.
7. To then apply those membership updates to the persona in Atlan, call the `Save()` method against the object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Persona", // (2)       "attributes": {         "qualifiedName": "default/M5HnBQ8QWhrAVGuvBx8iSW", // (3)         "name": "Data Assets" // (4)         "isAccessControlEnabled": false, // (5)         "personaGroups": ["group1", "group2"], // (6)         "personaUsers": ["jsmith", "jdoe"] // (7)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `Persona`.
3. You must provide the qualifiedName of the persona.
4. You must provide the name of the persona.
5. You must provide whether the persona should be active (enabled) or deactivated after the update.
6. You can then add any number of groups to the `personaGroups` property. These should be internal names of groups that you want to be controlled through the persona's policies.
7. Similarly, you can add any number of users to the `personaUsers` property. These should be usernames of users that you want to be controlled through the persona's policies.

Add policies to a persona[¶](#add-policies-to-a-persona "Permanent link")
-------------------------------------------------------------------------

Do not add policies in bulk

Be careful to only add policies one\-by\-one to a persona. While the SDKs will allow you to add them in bulk, currently this results in a persona where only the final policy in the batch is active at the end of the operation.

API token must be a connection admin

To manage policies for a connection, the API token must be a connection admin on that connection. When you create a connection using an API token, the API token is *automatically* made a connection admin; however, for any other connection you must [carry out extra steps to make the API token a connection admin](../tokens/#add-an-api-token-as-a-connection-admin).

### Add a metadata policy[¶](#add-a-metadata-policy "Permanent link")

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a metadata policy to a persona:

Java

Python

Kotlin

Go

Raw REST API

| Add metadata policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` AuthPolicy metadata = Persona.createMetadataPolicy( // (1)         "Simple read access", // (2)         "67e08ab7-9688-40bc-ae4a-da2bc06b1588", // (3)         AuthPolicyType.ALLOW, // (4)         Set.of(PersonaMetadataAction.READ), // (5)         "default/snowflake/1234567890", // (6)         Set.of("entity:default/snowflake/1234567890")) // (7)     .build(); AssetMutationResponse response = metadata.save(client); // (8)  ``` |

1. Use the `createMetadataPolicy()` method to start building a metadata policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.

    To include all permissions

    If you want to include all permissions, you can simply use `Arrays.asList(PersonaMetadataAction.values())`.
6. Specify the `qualifiedName` of the connection whose assets this policy should control.
7. Specify the set of `qualifiedName` prefixes for the assets this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualifiedName` of the connection itself.
8. To then add the policy to the persona in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add metadata policy to persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona from pyatlan.model.enums import AuthPolicyType, PersonaMetadataAction  client = AtlanClient() metadata = Persona.create_metadata_policy( # (1)     client=client, # (2)     name="Simple read access", # (3)     persona_id="67e08ab7-9688-40bc-ae4a-da2bc06b1588", # (4)     policy_type=AuthPolicyType.ALLOW, # (5)     actions={PersonaMetadataAction.READ}, # (6)     connection_qualified_name="default/snowflake/1234567890", # (7)     resources={"entity:default/snowflake/1234567890"}, # (8) ) response = client.asset.save(metadata) # (9)  ``` |

1. Use the `create_metadata_policy()` method to start building a metadata policy with the minimal required information.
2. You must provide a client instance.
3. You must give the policy a name.
4. You must provide the GUID of the persona to attach this policy to.
5. Specify the type of policy (granting or denying the actions specified next).
6. Specify the set of permissions you want to allow (or deny) in this policy.
7. Specify the `qualified_name` of the connection whose assets this policy should control.
8. Specify the set of `qualified_name` prefixes for the assets this policy should control. Each `qualified_name` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualified_name` of the connection itself.
9. To then add the policy to the persona in Atlan, call the `save()` method with the policy object you've built.

| Add metadata policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val metadata = Persona.createMetadataPolicy( // (1)         "Simple read access",  // (2)         "67e08ab7-9688-40bc-ae4a-da2bc06b1588",  // (3)         AuthPolicyType.ALLOW,  // (4)         setOf(PersonaMetadataAction.READ),  // (5)         "default/snowflake/1234567890",  // (6)         setOf("entity:default/snowflake/1234567890")) // (7)     .build() val response = metadata.save(client) // (8)  ``` |

1. Use the `createMetadataPolicy()` method to start building a metadata policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.

    To include all permissions

    If you want to include all permissions, you can simply use `PersonaMetadataAction.values().toList()`.
6. Specify the `qualifiedName` of the connection whose assets this policy should control.
7. Specify the set of `qualifiedName` prefixes for the assets this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualifiedName` of the connection itself.
8. To then add the policy to the persona in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Add metadata policy to persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` Persona := &assets.Persona{} metadata, _ := Persona.CreateMetadataPolicy( // (1)   "Simple read access", // (2)   "67e08ab7-9688-40bc-ae4a-da2bc06b1588", // (3)   atlan.AuthPolicyTypeAllow, // (4)   []atlan.PersonaMetadataAction{atlan.PersonaMetadataActionRead}, // (5)   "default/snowflake/1234567890", // (6)   []string{"entity:default/snowflake/1234567890"}, // (7) ) response, atlanErr := assets.Save(metadata) // (8)  ``` |

1. Use the `CreateMetadataPolicy()` method to start building a metadata policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.
6. Specify the `qualifiedName` of the connection whose assets this policy should control.
7. Specify the set of `qualifiedName` prefixes for the assets this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualifiedName` of the connection itself.
8. To then add the policy to the persona in Atlan, call the `save()` method with the policy object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AuthPolicy", // (2)       "attributes": {         "policySubCategory": "metadata", // (3)         "policyCategory": "persona", // (4)         "policyType": "allow", // (5)         "policyServiceName": "atlas", // (6)         "connectionQualifiedName": "default/snowflake/1234567890", // (7)         "policyResources": [           "entity:default/snowflake/1234567890" // (8)         ],         "name": "Simple read access", // (9)         "qualifiedName": "Simple read access", // (10)         "policyActions": [           "persona-asset-read" // (11)         ],         "accessControl": { // (12)           "typeName": "Persona", // (13)           "guid": "67e08ab7-9688-40bc-ae4a-da2bc06b1588" // (14)         },         "policyResourceCategory": "CUSTOM" // (15)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `AuthPolicy`.
3. You must use a policy subcategory of `metadata`.
4. You must use a policy category of `persona`.
5. Specify the type of policy (granting or denying the actions specified next).
6. You must use a policy service name of `atlas`.
7. Specify the `qualifiedName` of the connection whose assets will be controlled by this policy.
8. Specify the set of `qualifiedName` prefixes for the assets this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualifiedName` of the connection itself.
9. You must give the policy a name.
10. You must give the policy itself a `qualifiedName`, although this will be overwritten by a generated value by the back\-end.
11. Specify the set of permissions you want to allow (or deny) in this policy.

    To review available permissions

    To review the available permissions, see the SDKs — for example, the `PersonaMetadataAction` enum in the Java SDK.
12. Use an embedded `accessControl` object to define the persona to attach this policy to.
13. The embedded type name of the `accessControl` object must be exactly `Persona`.
14. You must provide the GUID of the persona to attach this policy to.
15. You must set the policy resource category to `CUSTOM`.

### Add a data policy[¶](#add-a-data-policy "Permanent link")

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a data policy to a persona:

Java

Python

Kotlin

Go

Raw REST API

| Add data policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` AuthPolicy data = Persona.createDataPolicy( // (1)         "Allow access to data", // (2)         "67e08ab7-9688-40bc-ae4a-da2bc06b1588", // (3)         AuthPolicyType.ALLOW, // (4)         "default/snowflake/1234567890", // (5)         Set.of("entity:default/snowflake/1234567890")) // (6)     .build(); AssetMutationResponse response = data.save(client); // (7)  ``` |

1. Use the `createDataPolicy()` method to start building a data policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying access to the data of the resources specified next).
5. Specify the `qualifiedName` of the connection whose assets this policy should control.
6. Specify the set of `qualifiedName` prefixes for the assets this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualifiedName` of the connection itself.
7. To then add the policy to the persona in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add data policy to persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona from pyatlan.model.enums import AuthPolicyType  client = AtlanClient() data = Persona.create_data_policy( # (1)     client=client, # (2)     name="Allow access to data", # (3)     persona_id="67e08ab7-9688-40bc-ae4a-da2bc06b1588", # (4)     policy_type=AuthPolicyType.ALLOW, # (5)     connection_qualified_name="default/snowflake/1234567890", # (6)     resources={"entity:default/snowflake/1234567890"}, # (7) ) response = client.asset.save(data) # (8)  ``` |

1. Use the `create_data_policy()` method to start building a data policy with the minimal required information.
2. You must provide a client instance.
3. You must give the policy a name.
4. You must provide the GUID of the persona to attach this policy to.
5. Specify the type of policy (granting or denying access to the data of the resources specified next).
6. Specify the `qualifiedName` of the connection whose assets this policy should control.
7. Specify the set of `qualified_name` prefixes for the assets this policy should control. Each `qualified_name` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualified_name` of the connection itself.
8. To then add the policy to the persona in Atlan, call the `save()` method with the policy object you've built.

| Add data policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` val data = Persona.createDataPolicy( // (1)         "Allow access to data",  // (2)         "67e08ab7-9688-40bc-ae4a-da2bc06b1588",  // (3)         AuthPolicyType.ALLOW,  // (4)         "default/snowflake/1234567890",  // (5)         setOf("entity:default/snowflake/1234567890")) // (6)     .build() val response = data.save(client) // (7)  ``` |

1. Use the `createDataPolicy()` method to start building a data policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying access to the data of the resources specified next).
5. Specify the `qualifiedName` of the connection whose assets this policy should control.
6. Specify the set of `qualifiedName` prefixes for the assets this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualifiedName` of the connection itself.
7. To then add the policy to the persona in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Add data policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` Persona := &assets.Persona{} data, _ := Persona.CreateDataPolicy( // (1)   "Allow access to data", // (2)   "67e08ab7-9688-40bc-ae4a-da2bc06b1588", // (3)   atlan.AuthPolicyTypeAllow, // (4)   "default/snowflake/1234567890", // (5)   []string{"entity:default/snowflake/1234567890"}, // (6) ) response, atlanErr := assets.Save(data) // (7)  ``` |

1. Use the `CreateDataPolicy()` method to start building a data policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying access to the data of the resources specified next).
5. Specify the `qualifiedName` of the connection whose assets this policy should control.
6. Specify the set of `qualifiedName` prefixes for the assets this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualifiedName` of the connection itself.
7. To then add the policy to the persona in Atlan, call the `Save()` method with the policy object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AuthPolicy", // (2)       "attributes": {         "policySubCategory": "data", // (3)         "policyCategory": "persona", // (4)         "policyType": "allow", // (5)         "policyServiceName": "heka", // (6)         "connectionQualifiedName": "default/snowflake/1234567890", // (7)         "policyResources": [           "entity-type:*", // (8)           "entity:default/snowflake/1234567890" // (9)         ],         "name": "Allow access to data", // (10)         "qualifiedName": "Allow access to data", // (11)         "policyActions": [           "select" // (12)         ],         "accessControl": { // (13)           "typeName": "Persona", // (14)           "guid": "67e08ab7-9688-40bc-ae4a-da2bc06b1588" // (15)         },         "policyResourceCategory": "ENTITY" // (16)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `AuthPolicy`.
3. You must use a policy subcategory of `data`.
4. You must use a policy category of `persona`.
5. Specify the type of policy (granting or denying the actions specified next).
6. You must use a policy service name of `heka`.
7. Specify the `qualifiedName` of the connection whose assets will be controlled by this policy.
8. You must include a resource of `entity-type:*` in the list of resources.
9. Specify the set of `qualifiedName` prefixes for the assets this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all assets within a connection, this can simply be the `qualifiedName` of the connection itself.
10. You must give the policy a name.
11. You must give the policy itself a `qualifiedName`, although this will be overwritten by a generated value by the back\-end.
12. Specify the set of permissions you want to allow (or deny) in this policy. A data policy for a persona can only allow or deny `select` permissions.
13. Use an embedded `accessControl` object to define the persona to attach this policy to.
14. The embedded type name of the `accessControl` object must be exactly `Persona`.
15. You must provide the GUID of the persona to attach this policy to.
16. You must set the policy resource category to `ENTITY`.

### Add a glossary policy[¶](#add-a-glossary-policy "Permanent link")

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a glossary policy to a persona:

Java

Python

Kotlin

Go

Raw REST API

| Add glossary policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` AuthPolicy glossary = Persona.createGlossaryPolicy( // (1)         "All glossaries", // (2)         "67e08ab7-9688-40bc-ae4a-da2bc06b1588", // (3)         AuthPolicyType.ALLOW, // (4)         Set.of(PersonaGlossaryAction.CREATE, PersonaGlossaryAction.UPDATE), // (5)         Set.of("entity:OpU9a9kG825gAqpamXugf")) // (6)     .build(); AssetMutationResponse response = glossary.save(client); // (7)  ``` |

1. Use the `createGlossaryPolicy()` method to start building a glossary policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.

    To include all permissions

    If you want to include all permissions, you can simply use `Arrays.asList(PersonaGlossaryAction.values())`.
6. Specify the set of `qualifiedName`s of glossaries this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`.
7. To then add the policy to the persona in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add glossary policy to persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona from pyatlan.model.enums import AuthPolicyType, PersonaGlossaryAction  client = AtlanClient() glossary = Persona.create_glossary_policy( # (1)     name="All glossaries", # (2)     persona_id="67e08ab7-9688-40bc-ae4a-da2bc06b1588", # (3)     policy_type=AuthPolicyType.ALLOW, # (4)     actions={PersonaGlossaryAction.CREATE, PersonaGlossaryAction.UPDATE}, # (5)     resources={"entity:OpU9a9kG825gAqpamXugf"}, # (6) ) response = client.asset.save(glossary) # (7)  ``` |

1. Use the `create_glossary_policy()` method to start building a glossary policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.
6. Specify the set of `qualified_name`s of glossaries this policy should control. Each `qualified_name` should itself be prefixed with `entity:`.
7. To then add the policy to the persona in Atlan, call the `save()` method with the policy object you've built.

| Add glossary policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` val glossary = Persona.createGlossaryPolicy( // (1)         "All glossaries",  // (2)         "67e08ab7-9688-40bc-ae4a-da2bc06b1588",  // (3)         AuthPolicyType.ALLOW,  // (4)         setOf(PersonaGlossaryAction.CREATE, PersonaGlossaryAction.UPDATE),  // (5)         setOf("entity:OpU9a9kG825gAqpamXugf")) // (6)     .build() val response = glossary.save(client) // (7)  ``` |

1. Use the `createGlossaryPolicy()` method to start building a glossary policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.

    To include all permissions

    If you want to include all permissions, you can simply use `PersonaGlossaryAction.values().toList()`.
6. Specify the set of `qualifiedName`s of glossaries this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`.
7. To then add the policy to the persona in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Add glossary policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` Persona := &assets.Persona{} glossary, _ := Persona.CreateGlossaryPolicy( // (1)   "All glossaries", // (2)   "67e08ab7-9688-40bc-ae4a-da2bc06b1588", // (3)   atlan.AuthPolicyTypeAllow, // (4)   []atlan.PersonaGlossaryAction{atlan.PersonaGlossaryActionCreate, atlan.PersonaGlossaryActionUpdate}, // (5)   []string{"entity:OpU9a9kG825gAqpamXugf"}, // (6) ) response, err := assets.Save(glossary) // (7)  ``` |

1. Use the `CreateGlossaryPolicy()` method to start building a glossary policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the type of policy (granting or denying the actions specified next).
5. Specify the set of permissions you want to allow (or deny) in this policy.
6. Specify the set of `qualifiedName`s of glossaries this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`.
7. To then add the policy to the persona in Atlan, call the `Save()` method with the policy object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AuthPolicy", // (2)       "attributes": {         "policySubCategory": "glossary", // (3)         "policyCategory": "persona", // (4)         "policyType": "allow", // (5)         "policyServiceName": "atlas", // (6)         "policyResources": [           "entity:OpU9a9kG825gAqpamXugf" // (7)         ],         "name": "All glossaries", // (8)         "qualifiedName": "All glossaries", // (9)         "policyActions": [           "persona-glossary-create", // (10)           "persona-glossary-update"         ],         "accessControl": { // (11)           "typeName": "Persona", // (12)           "guid": "67e08ab7-9688-40bc-ae4a-da2bc06b1588" // (13)         },         "policyResourceCategory": "CUSTOM" // (14)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `AuthPolicy`.
3. You must use a policy subcategory of `glossary`.
4. You must use a policy category of `persona`.
5. Specify the type of policy (granting or denying the actions specified next).
6. You must use a policy service name of `atlas`.
7. Specify the set of `qualifiedName`s of glossaries this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`.
8. You must give the policy a name.
9. You must give the policy itself a `qualifiedName`, although this will be overwritten by a generated value by the back\-end.
10. Specify the set of permissions you want to allow (or deny) in this policy.

    To review available permissions

    To review the available permissions, see the SDKs — for example, the `PersonaGlossaryAction` enum in the Java SDK.
11. Use an embedded `accessControl` object to define the persona to attach this policy to.
12. The embedded type name of the `accessControl` object must be exactly `Persona`.
13. You must provide the GUID of the persona to attach this policy to.
14. You must set the policy resource category to `CUSTOM`.

### Add a domain policy[¶](#add-a-domain-policy "Permanent link")

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[1\.7\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.7.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a domain policy to a persona:

Java

Python

Kotlin

Go

Raw REST API

| Add domain policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` AuthPolicy domain = Persona.createDomainPolicy( // (1)         "Read access to some domains", // (2)         "67e08ab7-9688-40bc-ae4a-da2bc06b1588", // (3)         Set.of(PersonaDomainAction.READ_DOMAIN, PersonaDomainAction.READ_SUBDOMAIN, PersonaDomainAction.READ_PRODUCTS), // (4)         Set.of("entity:default/domain/marketing", "entity:default/domain/finance")) // (5)     .build(); AssetMutationResponse response = domain.save(client); // (6)  ``` |

1. Use the `createDomainPolicy()` method to start building a domain policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the set of permissions you want to allow in this policy.

    To include all permissions

    If you want to include all permissions, you can simply use `Arrays.asList(PersonaDomainAction.values())`.
5. Specify the set of `qualifiedName`s for the domains this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all domains, this can simply be a single value of `entity:All domains`.
6. To then add the policy to the persona in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add domain policy to persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona from pyatlan.model.enums import AuthPolicyType, PersonaDomainAction  client = AtlanClient() domain = Persona.create_domain_policy(  # (1)     name="Read access to some domains",  # (2)     persona_id="67e08ab7-9688-40bc-ae4a-da2bc06b1588",  # (3)     actions={PersonaDomainAction.READ_DOMAIN, PersonaDomainAction.READ_SUBDOMAIN, PersonaDomainAction.READ_PRODUCTS},  # (4)     resources={"entity:default/domain/marketing", "entity:default/domain/finance"},  # (5) ) response = client.asset.save(domain)  # (6)  ``` |

1. Use the `create_domain_policy()` method to start building a domain policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the set of permissions you want to allow in this policy.
5. Specify the set of `qualified_name`s for the domains this policy should control. Each `qualified_name` should itself be prefixed with `entity:`. To control all domains, this can simply be a single value of `entity:All domains`.
6. To then add the policy to the persona in Atlan, call the `save()` method with the policy object you've built.

| Add domain policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val domain = Persona.createDomainPolicy( // (1)         "Read access to some domains",  // (2)         "67e08ab7-9688-40bc-ae4a-da2bc06b1588",  // (3)         setOf(PersonaDomainAction.READ_DOMAIN, PersonaDomainAction.READ_SUBDOMAIN, PersonaDomainAction.READ_PRODUCTS),  // (4)         setOf("entity:default/domain/marketing", "entity:default/domain/finance")) // (5)     .build() val response = domain.save(client) // (6)  ``` |

1. Use the `createDomainPolicy()` method to start building a domain policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the set of permissions you want to allow in this policy.

    To include all permissions

    If you want to include all permissions, you can simply use `PersonaDomainAction.values().toList()`.
5. Specify the set of `qualifiedName`s for the domains this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all domains, this can simply be a single value of `entity:All domains`.
6. To then add the policy to the persona in Atlan, call the `save()` method against the policy object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Add domain policy to persona | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` Persona := &assets.Persona{} domain, _ := Persona.CreateDomainPolicy( // (1)   "Allow access to domain", // (2)   "67e08ab7-9688-40bc-ae4a-da2bc06b1588", // (3)   []atlan.PersonaDomainAction{atlan.PersonaDomainActionRead, atlan.PersonaDomainActionReadSubdomain, atlan.PersonaDomainActionReadProducts}, // (4)   []string{"entity:default/domain/marketing", "entity:default/domain/finance"}, // (5) ) response, err := assets.Save(domain) // (6)  ``` |

1. Use the `CreateDomainPolicy()` method to start building a domain policy with the minimal required information.
2. You must give the policy a name.
3. You must provide the GUID of the persona to attach this policy to.
4. Specify the set of permissions you want to allow in this policy.
5. Specify the set of `qualifiedName`s for the domains this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all domains, this can simply be a single value of `entity:All domains`.
6. To then add the policy to the persona in Atlan, call the `Save()` method with the policy object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AuthPolicy", // (2)       "attributes": {         "policySubCategory": "domain", // (3)         "policyCategory": "persona", // (4)         "policyType": "allow", // (5)         "policyServiceName": "atlas", // (6)         "policyResources": [           "entity:default/domain/marketing", // (7)           "entity:default/domain/finance"         ],         "name": "Read access to some domains", // (8)         "qualifiedName": "Read access to some domains", // (9)         "policyActions": [           "persona-domain-read", // (10)           "persona-domain-sub-domain-read",           "persona-domain-product-read"         ],         "accessControl": { // (11)           "typeName": "Persona", // (12)           "guid": "67e08ab7-9688-40bc-ae4a-da2bc06b1588" // (13)         },         "policyResourceCategory": "CUSTOM" // (14)       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `AuthPolicy`.
3. You must use a policy subcategory of `domain`.
4. You must use a policy category of `persona`.
5. The type of policy should always be `allow`.
6. You must use a policy service name of `atlas`.
7. Specify the set of `qualifiedName`s for the domains this policy should control. Each `qualifiedName` should itself be prefixed with `entity:`. To control all domains, this can simply be a single value of `entity:All domains`.
8. You must give the policy a name.
9. You must give the policy itself a `qualifiedName`, although this will be overwritten by a generated value by the back\-end.
10. Specify the set of permissions you want to allow in this policy.

    To review available permissions

    To review the available permissions, see the SDKs — for example, the `PersonaDomainAction` enum in the Java SDK.
11. Use an embedded `accessControl` object to define the persona to attach this policy to.
12. The embedded type name of the `accessControl` object must be exactly `Persona`.
13. You must provide the GUID of the persona to attach this policy to.
14. You must set the policy resource category to `CUSTOM`.

List policies in a persona[¶](#list-policies-in-a-persona "Permanent link")
---------------------------------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To list all the policies in a persona:

Java

Python

Kotlin

Go

Raw REST API

| List all policies in a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` Persona.select(client) // (1)     .where(Persona.NAME.eq("Data Assets")) // (2)     .includeOnResults(Persona.POLICIES) // (3)     .includeOnRelations(AuthPolicy.NAME) // (4)     .includeOnRelations(AuthPolicy.POLICY_TYPE)     .includeOnRelations(AuthPolicy.POLICY_RESOURCES)     .includeOnRelations(AuthPolicy.POLICY_ACTIONS)     .stream() // (5)     .filter(a -> a instanceof Persona)     .forEach(p -> { // (6)         Set<IAuthPolicy> policies = ((Persona) p).getPolicies();         for (IAuthPolicy policy : policies) {             // Do something with each policy         }     });  ``` |

1. Start by selecting a persona, here using a FluentSearch\-based approach. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can select the persona by whatever you like, in this example we are selecting based on its name.
3. Include the policies for the persona as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and resources controlled by each policy.
5. You can then directly stream the results of the search.
6. For each result of the search (itself a Persona), you can then retrieve its policies and iterate through them.

| List all policies in a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` from typing import cast  from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona, AuthPolicy from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient() request = (     FluentSearch()     .where(FluentSearch.asset_type(Persona))  # (1)     .where(Persona.NAME.eq("Data Assets"))  # (2)     .include_on_results(Persona.POLICIES)  # (3)     .include_on_relations(AuthPolicy.NAME)  # (4)     .include_on_relations(AuthPolicy.POLICY_TYPE)     .include_on_relations(AuthPolicy.POLICY_RESOURCES)     .include_on_relations(AuthPolicy.POLICY_ACTIONS) ).to_request()  # (5) response = client.asset.search(request)  # (6) for p in response:  # (7)     policies = cast(Persona, p).policies     for policy in policies:         # Do something with each policy  ``` |

1. Start by selecting a persona, here using a FluentSearch\-based approach.
2. You can select the persona by whatever you like, in this example we are selecting based on its name.
3. Include the policies for the persona as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and resources controlled by each policy.
5. You can then translate the FluentSearch into a search request.
6. Run a search using the search request.
7. For each result of the search (itself a Persona), you can then retrieve its policies and iterate through them.

| List all policies in a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` Persona.select(client) // (1)     .where(Persona.NAME.eq("Data Assets")) // (2)     .includeOnResults(Persona.POLICIES) // (3)     .includeOnRelations(AuthPolicy.NAME) // (4)     .includeOnRelations(AuthPolicy.POLICY_TYPE)     .includeOnRelations(AuthPolicy.POLICY_RESOURCES)     .includeOnRelations(AuthPolicy.POLICY_ACTIONS)     .stream() // (5)     .filter { it is Persona }     .forEach { // (6)         val policies = (it as Persona).policies         for (policy in policies) {             // Do something with each policy         }     }  ``` |

1. Start by selecting a persona, here using a FluentSearch\-based approach. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can select the persona by whatever you like, in this example we are selecting based on its name.
3. Include the policies for the persona as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and resources controlled by each policy.
5. You can then directly stream the results of the search.
6. For each result of the search (itself a Persona), you can then retrieve its policies and iterate through them.

| List all policies in a persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` response, atlanErr := assets.NewFluentSearch().        PageSizes(20).       AssetType("Persona"). // (1)       Where(ctx.Persona.NAME.Eq("Data Assets")). // (2)       IncludeOnResults("policies"). // (3)       IncludeOnRelations("name"). // (4)       IncludeOnRelations("policyActions").        IncludeOnRelations("policyResources").        IncludeOnRelations("policyType").        Execute() // (5) if atlanErr != nil {   fmt.Println("Error:", atlanErr) } for _, entity := range response[0].Entities { // (6)   if entity.TypeName != nil && *entity.TypeName == "Persona" {     fmt.Println("Persona Found: Name:", *entity.Name, "QualifiedName:", *entity.QualifiedName)     for _, policy := range *entity.Policies {       fmt.Println("Policy Found: QualifiedName:", *policy.UniqueAttributes.QualifiedName)       // Do something with the policies     }   } }  ``` |

1. Start by selecting a persona, here using a FluentSearch\-based approach.
2. You can select the persona by whatever you like, in this example we are selecting based on its name.
3. Include the policies for the persona as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and resources controlled by each policy.
5. Run a fluent search request using the `Execute()`.
6. For each result of the search (itself a Persona), you can then retrieve its policies and iterate through them.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": {         "filter": [           {             "term": {               "__typeName.keyword": {                 "value": "Persona"               }             }           },           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": {               "name.keyword": {                 "value": "Data Assets" // (2)               }             }           }         ]       }     },     "sort": [       {         "__guid": {           "order": "asc"         }       }     ],     "track_total_hits": true   },   "attributes": [     "policies" // (3)   ],   "relationAttributes": [ // (4)     "name",     "policyType",     "policyResources",     "policyActions"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Start by running a search for personas.
2. You can select the persona by whatever you like, in this example we are selecting based on its name.
3. Include the `policies` for the persona as part of the search results.
4. Include all the attributes you want about each policy on the relations of the search results. Here we are including the name, type, actions and resources controlled by each policy.

Personalize the persona[¶](#personalize-the-persona "Permanent link")
---------------------------------------------------------------------

[0\.0\.12](https://github.com/atlanhq/atlan-go/releases/tag/0.0.12 "Minimum version")[2\.1\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.1.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To personalize which details to show for assets within a persona:

Java

Python

Kotlin

Go

Raw REST API

| Personalize the persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` Persona toUpdate = Persona.updater( // (1)         "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)         "Data Assets", // (3)         true) // (4)     .denyAssetTab(AssetSidebarTab.LINEAGE) // (5)     .denyAssetTab(AssetSidebarTab.RELATIONS)     .denyAssetTab(AssetSidebarTab.QUERIES)     .denyAssetType("Table") // (6)     .denyAssetType("Column")     .denyAssetFilter(AssetFilterGroup.TAGS) // (7)     .denyAssetFilter(AssetFilterGroup.OWNERS)     .denyAssetFilter(AssetFilterGroup.CERTIFICATE)     .denyCustomMetadataGuid("59220d25-5d39-4f3a-8de5-072098bee793") // (8)     .denyCustomMetadataGuid("bb0c9836-94fd-4a54-9007-0f25fb802c2c")     .build(); AssetMutationResponse response = toUpdate.save(client); // (9)  ``` |

1. Use the `updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then chain preferences on which metadata tabs should be hidden when using this persona.
6. You can then set preferences on which asset types should be hidden when using this persona.
7. You can then set preferences on which asset filters should be hidden when using this persona.
8. You can then set preferences on which custom metadata should be hidden when using this persona.
9. To update the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Personalize the persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona from pyatlan.model.enums import AssetSidebarTab, AssetFilterGroup  client = AtlanClient() to_update = Persona.updater( # (1)     "default/M5HnBQ8QWhrAVGuvBx8iSW", # (2)     "Data Assets", # (3)     True # (4) ) to_update.deny_asset_tabs = { # (5)     AssetSidebarTab.LINEAGE.value,     AssetSidebarTab.RELATIONS.value,     AssetSidebarTab.QUERIES.value, } to_update.deny_asset_types = {"Table", "Column"} # (6) to_update.deny_asset_filters = { # (7)     AssetFilterGroup.TAGS.value,     AssetFilterGroup.OWNERS.value,     AssetFilterGroup.CERTIFICATE.value, } to_update.deny_custom_metadata_guids = { # (8)     "59220d25-5d39-4f3a-8de5-072098bee793",     "bb0c9836-94fd-4a54-9007-0f25fb802c2c", } response = client.asset.save(to_update) # (9)  ``` |

1. Use the `updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then set preferences on which metadata tabs should be hidden when using this persona.
6. You can then set preferences on which asset types should be hidden when using this persona.
7. You can then set preferences on which asset filters should be hidden when using this persona.
8. You can then set preferences on which custom metadata should be hidden when using this persona.
9. To update the persona in Atlan, call the `save()` method with the object you've built.

| Personalize the persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` val toUpdate = Persona.updater( // (1)         "default/M5HnBQ8QWhrAVGuvBx8iSW",  // (2)         "Data Assets",  // (3)         true) // (4)     .denyAssetTab(AssetSidebarTab.LINEAGE) // (5)     .denyAssetTab(AssetSidebarTab.RELATIONS)     .denyAssetTab(AssetSidebarTab.QUERIES)     .denyAssetType("Table") // (6)     .denyAssetType("Column")     .denyAssetFilter(AssetFilterGroup.TAGS) // (7)     .denyAssetFilter(AssetFilterGroup.OWNERS)     .denyAssetFilter(AssetFilterGroup.CERTIFICATE)     .denyCustomMetadataGuid("59220d25-5d39-4f3a-8de5-072098bee793") // (8)     .denyCustomMetadataGuid("bb0c9836-94fd-4a54-9007-0f25fb802c2c")     .build() val response = toUpdate.save(client) // (9)  ``` |

1. Use the `updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then chain preferences on which metadata tabs should be hidden when using this persona.
6. You can then set preferences on which asset types should be hidden when using this persona.
7. You can then set preferences on which asset filters should be hidden when using this persona.
8. You can then set preferences on which custom metadata should be hidden when using this persona.
9. To update the persona in Atlan, call the `save()` method against the object you've built. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Personalize the persona | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` toUpdate := &assets.Persona{} toUpdate.Updater( // (1)   "default/M5HnBQ8QWhrAVGuvBx8iSW", // (2)   "Data Assets", // (3)   true, // (4) ) toUpdate.DenyAssetTabs = &[]string{ // (5)   atlan.AssetSidebarTabLineage.Name,    atlan.AssetSidebarTabRelations.Name,    atlan.AssetSidebarTabQueries.Name, }  toUpdate.DenyAssetTypes = &[]string{"Table", "Column"} // (6) toUpdate.DenyAssetFilters = &[]string{ // (7)   atlan.AssetFilterGroupTags.Name,    atlan.AssetFilterGroupOwners.Name,    atlan.AssetFilterGroupCertificate.Name, }  toUpdate.DenyCustomMetadataGuids = &[]string{ // (8)   "59220d25-5d39-4f3a-8de5-072098bee793",    "bb0c9836-94fd-4a54-9007-0f25fb802c2c", }  response, atlanErr := assets.Save(toUpdate) // (9)  ``` |

1. Use the `Updater()` method to update a persona.
2. You must provide the qualifiedName of the persona.
3. You must provide the name of the persona.
4. You must provide whether the persona should be active (enabled) or deactivated after the update.
5. You can then set preferences on which metadata tabs should be hidden when using this persona.
6. You can then set preferences on which asset types should be hidden when using this persona.
7. You can then set preferences on which asset filters should be hidden when using this persona.
8. You can then set preferences on which custom metadata should be hidden when using this persona.
9. To update the persona in Atlan, call the `Save()` method with the object you've built.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Persona", // (2)       "attributes": {         "qualifiedName": "default/M5HnBQ8QWhrAVGuvBx8iSW", // (3)         "name": "Data Assets" // (4)         "isAccessControlEnabled": true, // (5)         "denyAssetTabs": [ // (6)           "Lineage",           "Relations",           "Queries"         ],         "denyAssetTypes": [ // (7)           "Table",           "Column"         ],         "denyAssetFilters": [ // (8)           "__traitNames",           "owners",           "certificateStatus"         ],         "denyCustomMetadataGuids": [ // (9)           "59220d25-5d39-4f3a-8de5-072098bee793",           "bb0c9836-94fd-4a54-9007-0f25fb802c2c"         ],       }     }   ] }  ``` |

1. Wrap all updates in an `entities` array.
2. For each embedded object, use the exact type name `Persona`.
3. You must provide the qualifiedName of the persona.
4. You must provide the name of the persona.
5. You must provide whether the persona should be active (enabled) or deactivated after the update.
6. You can then set preferences on which metadata tabs should be hidden when using this persona.
7. You can then set preferences on which asset types should be hidden when using this persona.
8. You can then set preferences on which asset filters should be hidden when using this persona.
9. You can then set preferences on which custom metadata should be hidden when using this persona.

To review available tabs/filters

To review the values of tabs and filters, refer to the SDKs.
For example, check the `AssetSidebarTab` and `AssetFilterGroup` enums in the SDKs.

---

2023\-01\-272025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/access/personas/) to provide us with more information. 

Back to top

[Previous Access control and personalization](../) [Next Manage purposes](../purposes/) 

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

