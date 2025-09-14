# Source URL
https://developer.atlan.com/snippets/advanced-examples/update/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/update/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to update assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to update assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/update.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Updating an asset - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/update/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to update assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/update.png
meta-twitter:title: Updating an asset - Developer
meta-viewport: width=device-width,initial-scale=1
title: Updating an asset - Developer
-->

[Skip to content](#updating-an-asset) Developer Updating an asset Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Updating an asset[¶](#updating-an-asset "Permanent link")
=========================================================

All objects in the SDK that you can update within Atlan implement the builder pattern. This allows you to progressively build\-up the object you want to update. In addition, each object provides a method that takes the minimal set of required fields to *update* that [asset](../../../getting-started/#what-is-an-asset), when it already exists in Atlan.

Include only your intended changes, nothing more

When enriching an asset in Atlan, you only need to specify the information you want to change. Any information you do not include in your update will be left untouched on the asset in Atlan. This way you do not need to:

* try to reproduce the complete asset in your request to do targeted updates to specific attributes
* worry about other changes that may be made to the asset in parallel to the changes you will be making to the asset

Build minimal object needed[¶](#build-minimal-object-needed "Permanent link")
-----------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

For example, to update a glossary term we need to provide the `qualifiedName` and name of the term, and the GUID of the glossary in which it exists:

Java

Python

Kotlin

Raw REST API

| Build minimal asset necessary for update | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` GlossaryTermBuilder<?,?> termUpdater = GlossaryTerm     .updater("gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (1)         "Example Term", // (2)         "b4113341-251b-4adc-81fb-2420501c30e6"); // (3)  ``` |

1. The `qualifiedName` of the existing term, which must match exactly (case\-sensitive). Note that for some assets (like terms), this may be a strange\-looking Atlan\-internal string.
2. The name of the existing term. This must match exactly (case\-sensitive).
3. The GUID of the glossary in which the term exists.

| Build minimal asset necessary for update | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Announcement, AtlasGlossaryTerm from pyatlan.model.enums import AnnouncementType, CertificateStatus  client = AtlanClient() term = AtlasGlossaryTerm.updater(     qualified_name="gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", # (1)     name="Example Term", # (2)     glossary_guid="b4113341-251b-4adc-81fb-2420501c30e6", # (3) )  ``` |

1. The `qualifiedName` of the existing term, which must match exactly (case\-sensitive). Note that for some assets (like terms), this may be a strange\-looking Atlan\-internal string.
2. The name of the existing term. This must match exactly (case\-sensitive).
3. The GUID of the glossary in which the term exists.

| Build minimal asset necessary for update | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val termUpdater = GlossaryTerm     .updater(         "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq",  // (1)         "Example Term",  // (2)         "b4113341-251b-4adc-81fb-2420501c30e6" // (3)     )  ``` |

1. The `qualifiedName` of the existing term, which must match exactly (case\-sensitive). Note that for some assets (like terms), this may be a strange\-looking Atlan\-internal string.
2. The name of the existing term. This must match exactly (case\-sensitive).
3. The GUID of the glossary in which the term exists.

Implicit in the API calls below

There is nothing specific to do for this step when using the raw APIs — constructing the object is simply what you place in the payload of the API calls in the steps below.

**What if I already have an asset (for example, from a search)?**

Since you should only include your intended changes, and nothing more, the SDKs provide a convenience method to reduce an asset down to its minimal properties. **You should use this method** to trim an object in your code down to a starting point for the changes you want to make to that asset:

Java

Python

| Trim existing asset to minimal properties | |
| --- | --- |
| ``` 4 ``` | ``` GlossaryTermBuilder<?,?> termUpdater = existing.trimToRequired(); // (1)  ``` |

1. Assuming you have an existing asset in a variable called `existing`, you can call `trimToRequired()` to reduce it to a builder with the minimal properties needed to update that asset.

| Trim existing asset to minimal properties | |
| --- | --- |
| ``` 10 ``` | ``` term = existing.trim_to_required() # (1)  ``` |

1. Assuming you have an existing asset in a variable called `existing`, you can call `trim_to_required()` to reduce it to an object with the minimal properties needed to update that asset.

Enrich before updating[¶](#enrich-before-updating "Permanent link")
-------------------------------------------------------------------

The `term` object now has the minimal required information for Atlan to update it. Without any additional enrichment, though, there isn't really anything to update...

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

So first you should enrich the object:

Java

Python

Kotlin

Raw REST API

| Enrich the asset before updating it | |
| --- | --- |
| ```  5  6  7  8  9 10 ``` | ``` GlossaryTerm term = termUpdater // (1)     .certificateStatus(CertificateStatus.VERIFIED) // (2)     .announcementType(AtlanAnnouncementType.INFORMATION) // (3)     .announcementTitle("Imported")     .announcementMessage("This term was imported from ...")     .build(); // (4)  ``` |

1. We'll create an object we can take actions on from this updater.
2. In this example, we're adding a certificate to the object.
3. Note that you can chain any number of enrichments together. Here we are also adding an announcement to the asset.
4. To persist the enrichment back to the object, we must `build()` the builder.

    Assign the result back

    Remember to assign the result of the `build()` operation back to your original object. Otherwise the result is not persisted back into any variable! (In this case we're assigning to the `term` variable back on line 5\.)

| Enrich the asset before updating it | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` term.certificate_status = CertificateStatus.VERIFIED # (1) announcement = Announcement(     announcement_type=AnnouncementType.INFORMATION,     announcement_title="Imported",     announcement_message="This term was imported from ..", ) term.set_announcement(announcement) # (2)  ``` |

1. In this example, we're adding a certificate to the object.
2. In this example, we're adding an announcement to the object.

| Enrich the asset before updating it | |
| --- | --- |
| ```  7  8  9 10 11 12 ``` | ``` val term = termUpdater // (1)     .certificateStatus(CertificateStatus.VERIFIED) // (2)     .announcementType(AtlanAnnouncementType.INFORMATION) // (3)     .announcementTitle("Imported")     .announcementMessage("This term was imported from ...")     .build() // (4)  ``` |

1. We'll create an object we can take actions on from this updater.
2. In this example, we're adding a certificate to the object.
3. Note that you can chain any number of enrichments together. Here we are also adding an announcement to the asset.
4. To persist the enrichment back to the object, we must `build()` the builder.

    Assign the result back

    Remember to assign the result of the `build()` operation back to your original object. Otherwise the result is not persisted back into any variable! (In this case we're assigning to the `term` variable back on line 5\.)

Implicit in the API calls below

There is nothing specific to do for this step when using the raw APIs — constructing the object is simply what you place in the payload of the API calls in the steps below.

Update the asset from the object[¶](#update-the-asset-from-the-object "Permanent link")
---------------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can then actually update the object in Atlan[1](#fn:1):

Java

Python

Kotlin

Raw REST API

| Update (or create) the asset | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` AssetMutationResponse response = term.save(client); // (1) Asset updated = response.getUpdatedAssets().get(0); // (2) GlossaryTerm term; if (updated instanceof GlossaryTerm) {     term = (GlossaryTerm) updated; // (3) }  ``` |

1. The `save()` method will either update an existing asset (if Atlan already has a term with the same name and `qualifiedName` in the same glossary) or create a new asset (if Atlan does not have a term with the same name in the same glossary). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can distinguish what was created or updated:

    * `getCreatedAssets()` lists assets that were created
        * `getUpdatedAssets()` lists assets that were updated
        Note that the `save()` method always returns objects of type `Asset`, though.
3. The `Asset` class is a superclass of all assets. So we need to cast to more specific types (like `GlossaryTerm`) after verifying the object that was actually returned.

| Strictly update the asset | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 19 20 ``` | ``` try {     AssetMutationResponse response = term.updateMergingCM(client, false); // (1)     Asset updated = response.getUpdatedAssets().get(0); // (2)     GlossaryTerm term;     if (updated instanceof GlossaryTerm) {         term = (GlossaryTerm) updated; // (3)     } } catch (NotFoundException e) { // (4)     log.warn("No existing asset to update, so nothing changed or created.", e); }  ``` |

1. The `updateMergingCM()` method will only update an existing asset (if Atlan already has an asset of the same type with the same name `qualifiedName`). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant. Depending on the update behavior you want, you could also use:

    * `updateMergingCM(false)` to only overwrite any custom metadata provided in your update (leaving anything you don't provide untouched on the existing asset), while leaving any Atlan tags on the existing asset untouched
        * `updateMergingCM(true)` to only overwrite any custom metadata provided in your update (leaving anything you don't provide untouched on the existing asset), while replacing any Atlan tags on the existing asset
        * `updateReplacingCM(false)` to overwrite all custom metadata on the existing asset with what you're providing in your update, while leaving any Atlan tags on the existing asset untouched
        * `updateReplacingCM(true)` to overwrite all custom metadata on the existing asset with what you're providing in your update, while replacing any Atlan tags on the existing asset
2. You can distinguish what was created or updated:

    * `getUpdatedAssets()` lists assets that were updated
        Note that the `update...()` methods always returns objects of type `Asset`, though.
3. The `Asset` class is a superclass of all assets. So we need to cast to more specific types (like `GlossaryTerm`) after verifying the object that was actually returned.
4. Since the `update...()` methods strictly update (and never create) an asset, if the asset you are trying to update does not exist the operation will throw a `NotFoundException`.

| Update (or create) the asset | |
| --- | --- |
| ``` 18 19 20 ``` | ``` response = client.asset.save(term)  # (1) if updated := response.assets_updated(asset_type=AtlasGlossaryTerm):  # (2)     term = updated[0]  # (3)  ``` |

1. The `save(term)` method will either update an existing asset (if Atlan already has a term with the same name and `qualifiedName` in the same glossary) or (create a new asset, if Atlan does not have a term with the same name in the same glossary).
2. You can distinguish what was created or updated:

    * `assets_created(asset_type = AtlasGlossaryType)` returns a list assets of the specified type that were created.
        * `assets_updated(asset_type = AtlasGlossaryType)` returns a list assets of the specified type that were updated.
3. If the returned list is not empty, get the term that was updated.

| Strictly update the asset | |
| --- | --- |
| ``` 18 19 20 21 22 23 ``` | ``` try:     response = client.asset.update_merging_cm(term)  # (1)     if updated := response.assets_updated(asset_type=AtlasGlossaryTerm):  # (2)         term = updated[0] except NotFoundError:  # (3)     print("No existing asset to update, so nothing changed or created.")  ``` |

1. The `update_merging_cm()` method will only update an existing asset (if Atlan already has an asset of the same type with the same name `qualified_name`). Depending on the update behavior you want, you could also use:

    * `update_merging_cm(replace_atlan_tags=False)` to only overwrite any custom metadata provided in your update (leaving anything you don't provide untouched on the existing asset), while leaving any Atlan tags on the existing asset untouched
        * `update_merging_cm(replace_atlan_tags=True)` to only overwrite any custom metadata provided in your update (leaving anything you don't provide untouched on the existing asset), while replacing any Atlan tags on the existing asset
        * `update_replacing_cm(replace_atlan_tags=False)` to overwrite all custom metadata on the existing asset with what you're providing in your update, while leaving any Atlan tags on the existing asset untouched
        * `update_replacing_cm(replace_atlan_tags=True)` to overwrite all custom metadata on the existing asset with what you're providing in your update, while replacing any Atlan tags on the existing asset
2. You can distinguish what was created or updated:

    * `assets_updated(asset_type = AtlasGlossaryType)` returns a list assets of the specified type that were updated.
3. Since the `update...()` methods strictly update (and never create) an asset, if the asset you are trying to update does not exist the operation will throw a `NotFoundError`.

| Update (or create) the asset | |
| --- | --- |
| ``` 13 14 15 ``` | ``` val response = term.save(client) // (1) val updated = response.updatedAssets[0] // (2) val term = if (updated is GlossaryTerm) updated else null // (3)  ``` |

1. The `save()` method will either update an existing asset (if Atlan already has a term with the same name and `qualifiedName` in the same glossary) or create a new asset (if Atlan does not have a term with the same name in the same glossary). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can distinguish what was created or updated:

    * `createdAssets` lists assets that were created
        * `updatedAssets` lists assets that were updated
        Note that the `save()` method always returns objects of type `Asset`, though.
3. The `Asset` class is a superclass of all assets. So we need to cast to more specific types (like `GlossaryTerm`) after verifying the object that was actually returned.

| Strictly update the asset | |
| --- | --- |
| ``` 13 14 15 16 17 18 19 ``` | ``` try {     val response = term.updateMergingCM(client, false) // (1)     val updated = response.updatedAssets[0] // (2)     val term = if (updated is GlossaryTerm) updated else null // (3) } catch (e: NotFoundException) { // (4)     log.warn("No existing asset to update, so nothing changed or created.", e) }  ``` |

1. The `updateMergingCM()` method will only update an existing asset (if Atlan already has an asset of the same type with the same name `qualifiedName`). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant. Depending on the update behavior you want, you could also use:

    * `updateMergingCM(false)` to only overwrite any custom metadata provided in your update (leaving anything you don't provide untouched on the existing asset), while leaving any Atlan tags on the existing asset untouched
        * `updateMergingCM(true)` to only overwrite any custom metadata provided in your update (leaving anything you don't provide untouched on the existing asset), while replacing any Atlan tags on the existing asset
        * `updateReplacingCM(false)` to overwrite all custom metadata on the existing asset with what you're providing in your update, while leaving any Atlan tags on the existing asset untouched
        * `updateReplacingCM(true)` to overwrite all custom metadata on the existing asset with what you're providing in your update, while replacing any Atlan tags on the existing asset
2. You can distinguish what was created or updated:

    * `getUpdatedAssets()` lists assets that were updated
        Note that the `update...()` methods always returns objects of type `Asset`, though.
3. The `Asset` class is a superclass of all assets. So we need to cast to more specific types (like `GlossaryTerm`) after verifying the object that was actually returned.
4. Since the `update...()` methods strictly update (and never create) an asset, if the asset you are trying to update does not exist the operation will throw a `NotFoundException`.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example Term", // (3)         "qualifiedName": "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary",           "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         },         "certificateStatus": "VERIFIED", // (6)         "announcementType": "information", // (7)         "announcementTitle": "Imported",         "announcementMessage": "This term was imported from ..."       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive). For a term, this is `AtlasGlossaryTerm`.
3. You must provide the exact name of the existing asset (case\-sensitive). (Unless you want to change its name, in which case you can provide the new name instead.)
4. You must provide the exact `qualifiedName` of the existing asset (case\-sensitive).

    Must exactly match the `qualifiedName` of an existing asset

    If this does not exactly match the `qualifiedName` of an existing asset, the API call will instead *create a new asset* rather than updating an existing one.
5. For most assets, you do *not* need to re\-specify the parent object for an update. However, for glossary assets (like terms), you are required to re\-specify the parent glossary.
6. In this example, we're adding a certificate to the object.
7. Note that you can include any number of enrichments together. Here we are also adding an announcement to the asset.

Case\-sensitive, exact match

If you use a different capitalization or spelling for the `qualifiedName`, you may accidentally *create* a new asset rather than updating the existing one.[2](#fn:2)

Remove information from an asset[¶](#remove-information-from-an-asset "Permanent link")
---------------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

As mentioned in [Enrich before updating](#enrich-before-updating) section, only the information in your request will be updated on the object. But what if you want to *remove* some information that already exists on the asset in Atlan?

Java

Python

Kotlin

Raw REST API

| Enrich and update the asset | |
| --- | --- |
| ```  5  6  7  8  9 10 11 12 13 14 ``` | ``` GlossaryTerm term = termUpdater // (1)         .removeCertificate() // (2)         .removeAnnouncement() // (3)         .build(); // (4) AssetMutationResponse response = term.save(client); // (5) Asset updated = response.getUpdatedAssets().get(0); // (6) GlossaryTerm term; if (updated instanceof GlossaryTerm) {     term = (GlossaryTerm) updated; // (7) }  ``` |

1. We'll create an object we can take actions on from this updater.
2. In this example, we'll remove any existing certificate from the object in Atlan.
3. Note that you can chain any number of enrichments together. Here we are also removing any announcement from the asset.
4. To persist the enrichment back to the object, we must `build()` the builder.

    Assign the result back

    Remember to assign the result of the `build()` operation back to your original object. Otherwise the result is not persisted back into any variable! (In this case we're assigning to the `term` variable back on line 5\.)
5. The `save()` method will either:

    * Update an existing asset, if Atlan already has a term with the same name and `qualifiedName` in the same glossary.
        * Create a new asset, if Atlan does not have a term with the same name in the same glossary.
        Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. You can distinguish what was created or updated:

    * `getCreatedAssets()` lists assets that were created
        * `getUpdatedAssets()` lists assets that were updated
        Note that the `save()` method always returns objects of type `Asset`, though.
7. The `Asset` class is a superclass of all assets. So we need to cast to more specific types (like `GlossaryTerm`) after verifying the object that was actually returned.

| Enrich and update the asset | |
| --- | --- |
| ``` 11 12 13 14 15 ``` | ``` term.remove_certificate()  # (1) term.remove_announcement()  # (2)  response = client.asset.save(term) if updated := response.assets_updated(asset_type=AtlasGlossaryTerm):     term = updated[0]  ``` |

1. In this example we will remove an existing certificate from any existing certificate from the object.
2. In this example we will remove any existing announcement from the object.

| Enrich and update the asset | |
| --- | --- |
| ```  7  8  9 10 11 12 13 ``` | ``` var term = termUpdater // (1)     .removeCertificate() // (2)     .removeAnnouncement() // (3)     .build() // (4) val response = term.save(client) // (5) val updated = response.updatedAssets[0] // (6) term = if (updated is GlossaryTerm) updated else null // (7)  ``` |

1. We'll create an object we can take actions on from this updater.
2. In this example, we'll remove any existing certificate from the object in Atlan.
3. Note that you can chain any number of enrichments together. Here we are also removing any announcement from the asset.
4. To persist the enrichment back to the object, we must `build()` the builder.

    Assign the result back

    Remember to assign the result of the `build()` operation back to your original object. Otherwise the result is not persisted back into any variable! (In this case we're assigning to the `term` variable back on line 5\.)
5. The `save()` method will either:

    * Update an existing asset, if Atlan already has a term with the same name and `qualifiedName` in the same glossary.
        * Create a new asset, if Atlan does not have a term with the same name in the same glossary.
        Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. You can distinguish what was created or updated:

    * `createdAssets` lists assets that were created
        * `updatedAssets` lists assets that were updated
        Note that the `save()` method always returns objects of type `Asset`, though.
7. The `Asset` class is a superclass of all assets. So we need to cast to more specific types (like `GlossaryTerm`) after verifying the object that was actually returned.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example Term", // (3)         "qualifiedName": "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary",           "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         },         "certificateStatus": null, // (6)         "certificateStatusMessage": null,         "announcementType": null, // (7)         "announcementTitle": null,         "announcementMessage": null       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive). For a term, this is `AtlasGlossaryTerm`.
3. You must provide the exact name of the existing asset (case\-sensitive). (Unless you want to change its name, in which case you can provide the new name instead.)
4. You must provide the exact `qualifiedName` of the existing asset (case\-sensitive).

    Must exactly match the `qualifiedName` of an existing asset

    If this does not exactly match the `qualifiedName` of an existing asset, the API call will instead *create a new asset* rather than updating an existing one.
5. For most assets, you do *not* need to re\-specify the parent object for an update. However, for glossary assets (like terms), you are required to re\-specify the parent glossary.
6. In this example, we're removing any existing certificate information from the object in Atlan (by sending `null`).
7. Note that you can include any number of enrichments together. Here we are also removing any announcement from the asset.

---

1. Atlan automatically detects changes to determine whether to create or update an asset — see the [Importance of identifiers](../../../getting-started/#importance-of-identifiers) for a more detailed explanation. To strictly update (and avoid creating) an asset, you must first look for the existing asset and only if found proceed with your update. When the SDKs provide such strict update functionality, this is what they are doing behind\-the\-scenes. Be aware that this will impact performance, so you should only do this where strictly necessary for your logic.[↩](#fnref:1 "Jump back to footnote 1 in the text")
2. This is because Atlan uses the *exact* `qualifiedName` to determine whether it should do an update. For a more detailed explanation, see the [Importance of identifiers](../../../getting-started/#importance-of-identifiers).[↩](#fnref:2 "Jump back to footnote 2 in the text")

---

2022\-09\-142024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/update/) to provide us with more information. 

Back to top

[Previous Retrieve an asset](../read/) [Next Delete an asset](../delete/) 

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

