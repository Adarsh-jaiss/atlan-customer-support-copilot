# Source URL
https://developer.atlan.com/snippets/advanced-examples/create/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/create/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Create assets using the builder pattern in the Atlan SDK, enriching them before creation.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Create assets using the builder pattern in the Atlan SDK, enriching them before creation.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/create.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Creating an asset - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/create/
meta-twitter:card: summary_large_image
meta-twitter:description: Create assets using the builder pattern in the Atlan SDK, enriching them before creation.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/create.png
meta-twitter:title: Creating an asset - Developer
meta-viewport: width=device-width,initial-scale=1
title: Creating an asset - Developer
-->

[Skip to content](#creating-an-asset) Developer Creating an asset Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Creating an asset[¶](#creating-an-asset "Permanent link")
=========================================================

All objects in the SDK that you can create within Atlan implement the builder pattern. This allows you to progressively build\-up the object you want to create. In addition, each object provides a method that takes the minimal set of required fields to create that [asset](../../../getting-started/#what-is-an-asset).

Each type of asset has a different containment hierarchy

Every asset in Atlan can have slightly different parent objects in which they exist. For example, a `GlossaryTerm` cannot exist outside a `Glossary`. A `Column` cannot exist outside a `Table`, `View` or `MaterializedView`; these cannot exist outside a `Schema`; which cannot exist outside a `Database`; which cannot exist outside a `Connection`.

The minimal required fields for each asset type will therefore be slightly different.

Creation order is important

As a result of this containment, creation order is important. Parent objects must be created (exist) before child objects can be created.

Build minimal object needed[¶](#build-minimal-object-needed "Permanent link")
-----------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

For example, to create a glossary term you need to provide the name of the term and either the GUID or `qualifiedName` of the glossary in which to create the term:

Java

Python

Kotlin

Raw REST API

| Build minimal asset necessary for creation | |
| --- | --- |
| ``` 1 2 3 ``` | ``` GlossaryTermBuilder<?,?> termCreator = GlossaryTerm         .creator("Example Term", // (1)                   "b4113341-251b-4adc-81fb-2420501c30e6"); // (2)  ``` |

1. A name for the new term.
2. The GUID or `qualifiedName` of the glossary in which to create the term.

| Build minimal asset necessary for creation | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm  client = AtlanClient() term = AtlasGlossaryTerm.creator(     name="Example Term", # (1)     glossary_guid="b4113341-251b-4adc-81fb-2420501c30e6" # (2) )  ``` |

1. A name for the new term.
2. The GUID of the glossary in which to create the term.

| Build minimal asset necessary for creation | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val termCreator = GlossaryTerm     .creator(         "Example Term",  // (1)         "b4113341-251b-4adc-81fb-2420501c30e6",  // (2)     )  ``` |

1. A name for the new term.
2. The GUID or `qualifiedName` of the glossary in which to create the term.

Implicit in the API calls below

There is nothing specific to do for this step when using the raw APIs — constructing the object is simply what you place in the payload of the API calls in the steps below.

Create the asset from the object[¶](#create-the-asset-from-the-object "Permanent link")
---------------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

This `term` object will have the minimal required information for Atlan to create it. You must then actually persist the object in Atlan[1](#fn:1):

Java

Python

Kotlin

Raw REST API

| Create the asset | |
| --- | --- |
| ```  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` GlossaryTerm term = termCreator.build(); // (1) AssetMutationResponse response = term.save(client); // (2) Asset created = response.getCreatedAssets().get(0); // (3) if (created instanceof GlossaryTerm) {     term = (GlossaryTerm) created; // (4) } Asset updated = response.getUpdatedAssets().get(0); // (5) Glossary glossary; if (updated instanceof Glossary) {     glossary = (Glossary) updated; // (6) }  ``` |

1. Before you can take actions on the builder object you've been interacting with, you need to `build()` it into a full object.
2. Then you can do operations, like `save()`, which will either:

    * create a new asset, if Atlan does not have a term with the same name in the same glossary
        * update an existing asset, if Atlan already has a term with the same name in the same glossary
        Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You can distinguish what was created or updated:

    * `getCreatedAssets()` lists assets that were created
        * `getUpdatedAssets()` lists assets that were updated
        Note that the `save()` method always returns objects of type `Asset`, though.
4. The `Asset` class is a superclass of all assets. So you need to cast to more specific types (like `GlossaryTerm`) after verifying the object that was actually returned.
5. In this example, creating the `GlossaryTerm` actually also updates the parent `Glossary`. This is why the `response` contains generic `Asset` objects rather than specific types — any operation could side\-effect a number of different assets.
6. Like with the `GlossaryTerm`, you can check and cast the generic `Asset` returned by the response into its more specific type (`Glossary`).

| Create the asset | |
| --- | --- |
| ```  9 10 11 12 13 14 15 ``` | ``` response = client.asset.save(term) # (1) created = response.assets_created(asset_type=AtlasGlossaryTerm) # (2) if created: # (3)     term = created[0] # (4) updated = response.assets_updated(asset_type=AtlasGlossaryTerm) # (5)  if updated: # (6)     term = updated[0] # (7)  ``` |

1. Call the `save` method which will create or update the asset in atlan.
2. You can distinguish what was created or updated:

    * `assets_created(asset_type=AtlasGlossaryTerm)` returns a lists assets of the specified type that were created.
        * `assets_updated(asset_type=AtlasGlossaryTerm)` returns a lists assets of the specified type that were updated.
3. Check if the list is empty to determine if an `AtlasGlossaryTerm` was created.
4. Get the new `AtlasGlossaryTerm` that was created.
5. In this example, creating the `AtlasGlossaryTerm` actually also updates the parent `AtlasGlossary`. This is why the `response` contains an `AtlasGlossary`.
6. Check if the list is empty to determine if an `AtlasGlossary` was updated.
7. Get the `AtlasGlossary` that was updated.

| Create the asset | |
| --- | --- |
| ```  6  7  8  9 10 11 12 13 ``` | ``` var term = termCreator.build() // (1) val response = term.save(client) // (2) val created = response.createdAssets[0] // (3) if (created is GlossaryTerm) {     term = created // (4) } val updated = response.updatedAssets[0] // (5) val glossary = if (updated is Glossary) updated else null // (6)  ``` |

1. Before you can take actions on the builder object you've been interacting with, you need to `build()` it into a full object.
2. Then you can do operations, like `save()`, which will either:

    * create a new asset, if Atlan does not have a term with the same name in the same glossary
        * update an existing asset, if Atlan already has a term with the same name in the same glossary
        Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. You can distinguish what was created or updated:

    * `getCreatedAssets()` lists assets that were created
        * `getUpdatedAssets()` lists assets that were updated
        Note that the `save()` method always returns objects of type `Asset`, though.
4. The `Asset` class is a superclass of all assets. So you need to cast to more specific types (like `GlossaryTerm`) after verifying the object that was actually returned.
5. In this example, creating the `GlossaryTerm` actually also updates the parent `Glossary`. This is why the `response` contains generic `Asset` objects rather than specific types — any operation could side\-effect a number of different assets.
6. Like with the `GlossaryTerm`, you can check and cast the generic `Asset` returned by the response into its more specific type (`Glossary`).

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example Term", // (3)         "qualifiedName": "Example Term", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary",           "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         }       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive). For a term, this is `AtlasGlossaryTerm`.
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide a `qualifiedName` of the asset (case\-sensitive). In the case of glossary objects (like terms), this will actually be replaced in the back\-end with a generated `qualifiedName`, but you must provide some value when creating the object.
5. You must also specify the parent object in which this object is contained (if any). In the case of a term, it can only exist within a glossary. So here we specify the details of the parent glossary through the `anchor` relationship (specific to glossary assets).

(Optional) Enrich before creating[¶](#optional-enrich-before-creating "Permanent link")
---------------------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

If you want to further enrich the asset before creating it, you can do this using the builder pattern:

Java

Python

Kotlin

Raw REST API

| Alternatively, further enrich the asset before creating it | |
| --- | --- |
| ```  5  6  7  8  9 10 11 ``` | ``` GlossaryTerm term = termCreator // (1)         .certificateStatus(CertificateStatus.VERIFIED) // (2)         .announcementType(AtlanAnnouncementType.INFORMATION)         .announcementTitle("Imported")         .announcementMessage("This term was imported from ...")         .build(); // (3) AssetMutationResponse response = term.save(client); // (4)  ``` |

1. We'll create an object you can take actions on from this creator.
2. In this example, you're adding a certificate and announcement to the object.
3. To persist the enrichment back to the object, you must `build()` the builder.
4. You can call the `save()` operation against this enriched object, the same as shown earlier. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

Assign the result back

Remember to assign the result of the `build()` operation back to a variable! (In the example above this happens on line 5 with `GlossaryTerm term =`.)

| Alternatively, further enrich the asset before creating it | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary, AtlasGlossaryTerm from pyatlan.model.enums import AnnouncementType, CertificateStatus  client = AtlanClient() term = AtlasGlossaryTerm.creator(     name="Example Term",     glossary_guid="b4113341-251b-4adc-81fb-2420501c30e6" ) term.certificate_status = CertificateStatus.VERIFIED announcement = Announcement(     announcement_type=AnnouncementType.INFORMATION,     announcement_title="Imported",     announcement_message="This term was imported from ..", ) term.set_announcement(announcement) response = client.asset.save(term) # (1)  ``` |

1. You can call the `save()` operation against this enriched object, the same as shown earlier.

| Alternatively, further enrich the asset before creating it | |
| --- | --- |
| ```  6  7  8  9 10 11 12 ``` | ``` val term = termCreator // (1)     .certificateStatus(CertificateStatus.VERIFIED) // (2)     .announcementType(AtlanAnnouncementType.INFORMATION)     .announcementTitle("Imported")     .announcementMessage("This term was imported from ...")     .build() // (3) val response = term.save(client) // (4)  ``` |

1. We'll create an object you can take actions on from this creator.
2. In this example, you're adding a certificate and announcement to the object.
3. To persist the enrichment back to the object, you must `build()` the builder.
4. You can call the `save()` operation against this enriched object, the same as shown earlier. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

Assign the result back

Remember to assign the result of the `build()` operation back to a variable! (In the example above this happens on line 6 with `val term =`.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm",       "attributes": {         "name": "Example Term",         "qualifiedName": "Example Term",         "anchor": {           "typeName": "AtlasGlossary",           "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         },         "certificateStatus": "VERIFIED", // (2)         "announcementType": "information",         "announcementTitle": "Imported",         "announcementMessage": "This term was imported from..."       }     }   ] }  ``` |

1. You would still create the asset by wrapping it within the `entities` array.
2. But you can also extend the information you store on the asset. In this example, you're adding a certificate and announcement to the object when it is created.

---

1. Why no distinction between creation and update? This has to do with how Atlan detects changes — see the [Importance of identifiers](../../../getting-started/#importance-of-identifiers) for a more detailed explanation.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2022\-09\-142024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/create/) to provide us with more information. 

Back to top

[Previous Asset CRUD operations](../) [Next Retrieve an asset](../read/) 

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

