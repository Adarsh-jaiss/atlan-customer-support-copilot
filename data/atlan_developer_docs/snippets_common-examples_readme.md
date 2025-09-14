# Source URL
https://developer.atlan.com/snippets/common-examples/readme/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/readme/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage asset READMEs in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage asset READMEs in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/readme.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset READMEs - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/readme/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage asset READMEs in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/readme.png
meta-twitter:title: Asset READMEs - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset READMEs - Developer
-->

[Skip to content](#manage-asset-readmes) Developer Asset READMEs Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage asset READMEs[¶](#manage-asset-readmes "Permanent link")
===============================================================

READMEs can only be added to [assets](../../../getting-started/#what-is-an-asset) after an asset exists. (The asset itself must be created first.)

README content is written in HTML

The content of a README needs to be HTML. The HTML should be everything that would be *inside* the `<body></body>` tags, but not include the `<body></body>` tags themselves. (So it should also exclude the outer `<html></html>` tags.)

Add to an existing asset[¶](#add-to-an-existing-asset "Permanent link")
-----------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Each README can be assigned to only a single asset. To create a README and assign it to an asset:

Java

Python

Kotlin

Raw REST API

| Add to an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` final String readmeContent = "<h1>Overview</h1><p>Details about this term...</p>"; // (1) GlossaryTerm term = GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6")  // (2)     .toBuilder()     .name("Example Term")  // (3)     .build(); Readme readme = Readme.creator( // (4)         term, // (5)         readmeContent)     .build(); AssetMutationResponse response = readme.save(client); // (6) assert response.getCreatedAssets().size() == 1 // (7) assert response.getUpdatedAssets().size() == 1 // (8)  ``` |

1. Pick up your HTML content from somewhere (here it is defined directly in the code).
2. The README must be attached to some asset. You could either first search for or retrieve that asset, or build up a reference directly (as in this example).
3. The asset you send to the README creation **must** have its name populated, not only its GUID or qualifiedName.
4. Use the `creator()` method to initialize the README with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
5. For a README, you need to send the asset to attach it to and the content for the README itself (the HTML).
6. Call the `save()` method to actually create the README and attach it to the asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was created (the README).
8. The response will also include a single asset that was updated (the asset to which we've attached the README).

| Add to an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Readme, AtlasGlossaryTerm  client = AtlanClient() content = "<h1>Overview</h1><p>More Details about this term...</p>"  # (1) readme = Readme.creator( # (2)     asset=AtlasGlossaryTerm.ref_by_guid(guid="b4113341-251b-4adc-81fb-2420501c30e6"), # (3)     content=content, # (4)     asset_name="Example Term") # (5) response = client.asset.save(readme) # (6) assert (readmes := response.assets_created(asset_type=Readme)) # (7) assert (glossaries := response.assets_updated(asset_type=AtlasGlossaryTerm)) # (8)  ``` |

1. Pick up your HTML content from somewhere (here it is defined directly in the code).
2. Use the `create()` method to initialize the README with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
3. We need to give the asset to attach the README to.
4. The content for the README itself (the HTML).
5. The name of the asset to which we want to attach the README.
    * Note: The name is only required because we are using the `ref_by_guid` method to create the `AtlasGlossaryTerm` consequently it will not have a name. If we had an asset we had previosly retrieved via a search or using the `asset.get_by_guid` method we could leave the `asset_name` parameter out and the name from the given `asset` would be used.
6. Call the `save()` method to actually create the README and attach it to the asset.
7. Assert that the README was created.
8. Assert a GlossaryTerm was updated (the asset to which we've attached the README).

| Add to an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` val readmeContent = "<h1>Overview</h1><p>Details about this term...</p>"  // (1) val term = GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6")  // (2)     .toBuilder()     .name("Example Term")  // (3)     .build() val readme = Readme.creator(  // (4)         term,  // (5)         readmeContent)     .build() val response = readme.save(client)  // (6) assert(response.createdAssets.size == 1)  // (7) assert(response.updatedAssets.size == 1)  // (8)  ``` |

1. Pick up your HTML content from somewhere (here it is defined directly in the code).
2. The README must be attached to some asset. You could either first search for or retrieve that asset, or build up a reference directly (as in this example).
3. The asset you send to the README creation **must** have its name populated, not only its GUID or qualifiedName.
4. Use the `creator()` method to initialize the README with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
5. For a README, you need to send the asset to attach it to and the content for the README itself (the HTML).
6. Call the `save()` method to actually create the README and attach it to the asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was created (the README).
8. The response will also include a single asset that was updated (the asset to which we've attached the README).

Note that you are actually creating a new README asset

When adding a README through the API, you are really creating a new instance of a README asset. At the same time, you're attaching this new object to an existing asset.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Readme", // (2)       "attributes": {         "name": "Example Term Readme", // (3)         "qualifiedName": "b4113341-251b-4adc-81fb-2420501c30e6/readme", // (4)         "description": "%3Ch1%3EOverview%3C%2Fh1%3E%3Cp%3EDetails%20about%20this%20term...%3C%2Fp%3E", // (5)         "asset":{    // (6)             "typeName": "AtlasGlossaryTerm",             "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         }       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the README asset, which will always be `Readme` (case\-sensitive).
3. You must also provide a name for the README. This will not show up on the UI, but should be a concatenation of the name of the asset the README will be attached to and `Readme`.
4. You must also provide a unique `qualifiedName` for the README. This will not show up on the UI, but should be a concatenation of the GUID of the asset the README will be attached to and `/readme`.
5. The content of the README should be provided in the `description` field. Note that this must be HTML, which must further be url\-encoded.

    Use a library

    Most languages will provide a library to url\-encode and url\-decode strings. Use this, wherever possible. For an example of translating raw HTML into url\-encoded form (or decoding an encoded form) you can also try [urlencoder.org](https://urlencoder.org)  and [urldecoder.org](https://urldecoder.org) , respectively.
6. Finally, you need to include the reference information for the asset the README should be attached to.

Retrieve a README from an existing asset[¶](#retrieve-a-readme-from-an-existing-asset "Permanent link")
-------------------------------------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a README and its content for an existing asset:

Java

Python

Kotlin

Raw REST API

| Retrieve README's content from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` String termQn = "fb45981203221-atlan"; // (1) var results = client.assets.select() // (2)      .where(Asset.QUALIFIED_NAME.eq(termQn))      .includeOnResults(Asset.README)      .includeOnRelations(Readme.DESCRIPTION)       .stream()      .toList(); System.out.println(results.get(0).getReadme().getDescription()); // (3)  ``` |

1. Store the qualified name of the asset (GlossaryTerm) connected to the README in the termQn variable.
2. Configure the search to match the qualified name, include the README, and fetch its description.
3. Extract and print the README's content.

| Retrieve README's content from an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm, Readme from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  client = AtlanClient()  term_qn = "fb45981203221-atlan" # (1)  response = ( # (2)     FluentSearch()     .select()     .where(CompoundQuery.asset_type(AtlasGlossaryTerm))     .where(AtlasGlossaryTerm.QUALIFIED_NAME.eq(term_qn))     .include_on_results(AtlasGlossaryTerm.README)     .include_on_relations(Readme.DESCRIPTION)     .execute(client=client) ) if first := response.current_page():      readme_content = first[0].readme.description # (3)     print(readme_content)  ``` |

1. Store the asset's qualified name in the term\_qn variable.
2. Filter by asset type, match the qualified name, include the README, and fetch its description.
3. Extract and print the README's content.

| Retrieve README's content from an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` val assetQualifiedName = "fb45981203221-atlan" // (1)  val description = client.assets.select() // (2)     .where(Asset.QUALIFIED_NAME.eq(assetQualifiedName))     .includeOnResults(Asset.README)      .includeOnRelations(Readme.DESCRIPTION)      .stream()     .toList()     .firstOrNull()     ?.readme      ?.description      ?: "README description not found."  println("README Description: $description") // (3)  ``` |

1. Store the qualified name of the asset in the assetQualifiedName variable.
2. Search for the asset, include the README, and fetch its description.
3. Extract and print the README's content.

| GET /api/meta/entity/bulk?guid\=b4113341\-251b\-4adc\-81fb\-2420501c30e6 | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. When retrieving the README, you need to use the README's GUID, not the GUID of the asset to which it is attached.

Update a README attached to an existing asset[¶](#update-a-readme-attached-to-an-existing-asset "Permanent link")
-----------------------------------------------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To update a README and its content for an existing asset:

Java

Python

Kotlin

Raw REST API

| Updating README's content | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` String termQn = "fb45981203221-atlan"; // (1) List<Asset> assets = client.assets.select()           .where(Asset.QUALIFIED_NAME.eq(termQn))          .includeOnResults(Asset.README)          .includeOnRelations(Readme.DESCRIPTION)          .includeOnRelations(Readme.NAME)          .stream()          .toList();  Asset asset = assets.get(0); String newDescription = "<p>This is the updated README description</p>"; Readme updatedReadme = Readme.updater(asset.getGuid(), asset.getName()) //(2)          .description(newDescription)          .build();  AssetMutationResponse response = updatedReadme.save(client); // (3)  ``` |

1. Store the qualified name of the asset (GlossaryTerm) connected to the README in the termQn variable.
2. Use Readme.updater() to update the README's description.
3. Save the updated README. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Updating README's content | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm, Readme from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  client = AtlanClient()  term_qn = "fb45981203221-atlan" # (1)  response = (      FluentSearch()     .select()     .where(CompoundQuery.asset_type(AtlasGlossaryTerm))     .where(AtlasGlossaryTerm.QUALIFIED_NAME.eq(term_qn))     .include_on_results(AtlasGlossaryTerm.README)     .include_on_relations(Readme.DESCRIPTION)     .execute(client=client) )  if first := response.current_page():      current_content = first[0].readme.description      updated_content = "<p>Added new information to the Readme.</p>"     updated_readme = Readme.creator( # (2)       asset=first[0],       content=updated_content     )     save_response = client.asset.save(updated_readme) # (3)  ``` |

1. Store the asset's qualified name in the term\_qn variable.
2. Use Readme.creator() to create a new README for the same asset (AtlasGlossaryTerm).
3. Save the updated README.

| Updating README's content | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` val assetQualifiedName = "fb45981203221-atlan" // (1)  val assets: List<Asset> = client.assets.select()     .where(Asset.QUALIFIED_NAME.eq(termQualifiedName))     .includeOnResults(Asset.README)      .includeOnRelations(Readme.DESCRIPTION)     .includeOnRelations(Readme.NAME)     .stream()     .toList()  val asset = assets.firstOrNull()  val newDescription = "<p>Final Changes</p>" val updatedReadme = Readme.updater(asset.guid, asset.name) // (2)     .description(newDescription)     .build()  val response = updatedReadme.save(client) // (3)  ``` |

1. Store the asset's qualified name in the assetQualifiedName variable.
2. Use Readme.updater() to update the README's description.
3. Save the updated README. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| ``` 1 ``` | ``` // (1)  ``` |
| --- | --- |

1. REST API for updating a README is not available

Remove a README from an Existing Asset[¶](#remove-a-readme-from-an-existing-asset "Permanent link")
---------------------------------------------------------------------------------------------------

To remove a README from an existing asset, delete the README itself. (A README is treated as a separate asset with its own GUID.)

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To hard\-delete (purge) a README, provide the README's GUID:

Java

Python

Kotlin

Raw REST API

| Hard\-delete (purge) a README asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` AssetMutationResponse response =         Asset.purge(client, "b4113341-251b-4adc-81fb-2420501c30e6"); // (1) Asset deleted = response.getDeletedAssets().get(0); // (2) Readme readme; if (deleted instanceof Readme) {   readme = (Readme) deleted; // (3) }  ``` |

1. Call the purge() method with the README's GUID to remove it permanently. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can distinguish what was purged through the `getDeletedAssets()` method. This lists only the assets deleted by the operation.
3. If the deleted asset is a README, cast it to the Readme type.

| Hard\-delete (purge) a README asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Readme  client = AtlanClient() response = client.asset.purge_by_guid("b4113341-251b-4adc-81fb-2420501c30e6") # (1) if deleted := response.assets_deleted(asset_type=Readme): # (2)     Readme = deleted[0] # (3)  ``` |

1. Use the asset.purge\_by\_guid() method with the README's GUID to perform the hard\-delete.
2. Use the assets\_deleted(asset\_type\=Readme) method to filter for deleted READMEs.
3. If a README was deleted, access its details through the returned response.

| Hard\-delete (purge) a README asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val response =     Asset.purge(client, "b4113341-251b-4adc-81fb-2420501c30e6") // (1) val deleted = response.deletedAssets[0] // (2) val readme = if (deleted is Readme) deleted else null // (3)  ``` |

1. Call the purge() method with the README's GUID to permanently remove. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can distinguish what was purged through the `deletedAssets` method. This lists only the assets deleted by the operation.
3. Verify and cast the deleted asset to the README type

| DELETE /api/meta/entity/bulk?guid\=b4113341\-251b\-4adc\-81fb\-2420501c30e6\&deleteType\=PURGE | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. When deleting a README via the API, specify its GUID in the URL and use a deleteType of PURGE.

For more options on deleting README assets: [Deleting an asset](../../advanced-examples/delete/).

The README will have its own GUID, separate from the asset to which it is attached

When deleting the README, you need to use the README's GUID, not the GUID of the asset to which it is attached.

---

2022\-08\-222025\-06\-17

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/readme/) to provide us with more information. 

Back to top

[Previous Link domains to assets](../domain-assignment/) [Next Add asset resources](../resources/) 

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

