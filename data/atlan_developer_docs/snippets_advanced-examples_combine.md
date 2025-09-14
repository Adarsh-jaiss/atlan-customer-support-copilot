# Source URL
https://developer.atlan.com/snippets/advanced-examples/combine/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/combine/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to optimize changes to a single asset by combining multiple operations into a single API call.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to optimize changes to a single asset by combining multiple operations into a single API call.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/combine.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Combining multiple operations - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/combine/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to optimize changes to a single asset by combining multiple operations into a single API call.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/combine.png
meta-twitter:title: Combining multiple operations - Developer
meta-viewport: width=device-width,initial-scale=1
title: Combining multiple operations - Developer
-->

[Skip to content](#combining-multiple-operations) Developer Combining multiple operations Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Combining multiple operations[¶](#combining-multiple-operations "Permanent link")
=================================================================================

For most of the write operations covered in the sections above, there is also an approach you can use to combine multiple operations together.

Optimizes changes to a single asset

This is useful when you have many changes to make to an asset. Rather than making a separate API call for each change, with this approach you can make a single API call and include all the information within it.

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to create a term complete with a description, parent category, announcement, certificate, several owners, and several linked assets:

Java

Python

Kotlin

Raw REST API

| Combine multiple operations | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` GlossaryTerm term = GlossaryTerm         .creator("Example Term", // (1)                  "b4113341-251b-4adc-81fb-2420501c30e6")         .description("This is only an example.") // (2)         .category(GlossaryCategory.refByGuid( // (3)             "1b736a83-207b-4269-ab92-44d77e1aca28",             Reference.SaveSemantic.APPEND // (4)         ))         .announcementType(AtlanAnnouncementType.INFORMATION) // (5)         .announcementTitle("New!") // (6)         .announcementMessage("This term is newly created.") // (7)         .certificateStatus(CertificateStatus.VERIFIED) // (8)         .certificateStatusMessage("For good measure!") // (9)         .ownerUser("jdoe") // (10)         .ownerUser("jsmith") // (11)         .build(); // (12) AssetMutationResponse response = term.save(client); // (13) assert response.getCreatedAssets().size() == 1 // (14) assert response.getUpdatedAssets().size() == 1 // (15)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../create/#build-minimal-object-needed). For a term, this is a name and the GUID of the glossary in which to create the term. (The final `null` is for a `qualifiedName` of the glossary, which could be used instead of the GUID.)
2. Set a description for the term.
3. Add a category for the term. (This category must already exist, or be created before this operation.)
4. (Optional) You can specify whether this category should be `APPEND`ed to any categories the term is already organized within, or `REMOVE`d from the existing set of categories. If this argument is left out, the entire set of categories the term is linked to will be `REPLACE`d.
5. Set the announcement that should be added (in this example, we're using `INFORMATION`).
6. Add a title for the announcement.
7. Add a message for the announcement.
8. Set the certificate for the term (in this example, we're using `VERIFIED`).
9. Add a message for the certificate.
10. Add an owner.
11. Add another owner. Note that we can just continue chaining single owners, we do not need to create our own list first.
12. Call the `build()` method to build the enriched object.
13. Call the `save()` method to actually create the term with all of these initial details. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
14. The response will include that single term that was created.
15. The response will also include any related objects (the category) that were updated by this term being related to them.

| Combine multiple operations | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import (     Announcement,     AtlasGlossaryTerm,     AtlasGlossaryCategory,     AtlasGlossary, ) from pyatlan.model.enums import AnnouncementType, CertificateStatus  client = AtlanClient() term = AtlasGlossaryTerm.creator( # (1)     name="Example Term",      glossary_guid="b4113341-251b-4adc-81fb-2420501c30e6" ) term.description = "This is only an example."  # (2) term.attributes.categories = [  # (3)     AtlasGlossaryCategory.ref_by_guid(         "1b736a83-207b-4269-ab92-44d77e1aca28",         SaveSemantic.APPEND  # (4)     ) ] announcement = Announcement(  # (5)     announcement_type=AnnouncementType.INFORMATION,  # (6)     announcement_title="New!",  # (7)     announcement_message="This term is newly created.",  # (8) ) term.set_announcement(announcement)  # (9) term.certificate_status = CertificateStatus.VERIFIED  # (10) term.certificate_status_message = "For good measure!"  # (11) term.owner_users = {"jdoe", "jsmith"}  # (12) response = client.asset.save(term)  # (13) assert len(response.assets_created(asset_type=AtlasGlossaryTerm)) == 1  # (14) assert len(response.assets_updated(asset_type=AtlasGlossary)) == 1  # (15) assert len(response.assets_updated(asset_type=AtlasGlossaryCategory)) == 1  # (16)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../create/#build-minimal-object-needed). For a term, this is a name and the GUID of the glossary in which to create the term.
2. Set a description for the term.
3. Add the categories for the term. (This parameter is a list and the categories must already exist, or be created before this operation.).
4. (Optional) You can specify whether this category should be `APPEND`ed to any categories the term is already organized within, or `REMOVE`d from the existing set of categories. If this argument is left out, the entire set of categories the term is linked to will be `REPLACE`d.
5. Create the announcement.
6. Set the announcement that should be added (in this example, we're using `INFORMATION`).
7. Add a title for the announcement.
8. Add a message for the announcement.
9. Set the announcement for the term.
10. Set the certificate for the term (in this example, we're using `VERIFIED`).
11. Add a message for the certificate.
12. Add the owners. This parameter is a set of strings.
13. Call the `save()` method to actually create the term with all of these initial details.
14. The response will include that single term that was created.
15. The response will include that single glossary that was updated.
16. The response will include that single category that was updated.

| Combine multiple operations | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` val term = GlossaryTerm         .creator("Example Term", // (1)                  "b4113341-251b-4adc-81fb-2420501c30e6")         .description("This is only an example.") // (2)         .category(GlossaryCategory.refByGuid( // (3)             "1b736a83-207b-4269-ab92-44d77e1aca28",             Reference.SaveSemantic.APPEND // (4)         ))         .announcementType(AtlanAnnouncementType.INFORMATION) // (5)         .announcementTitle("New!") // (6)         .announcementMessage("This term is newly created.") // (7)         .certificateStatus(CertificateStatus.VERIFIED) // (8)         .certificateStatusMessage("For good measure!") // (9)         .ownerUser("jdoe") // (10)         .ownerUser("jsmith") // (11)         .build() // (12) val response = term.save(client) // (13) assert(response.createdAssets.size == 1) // (14) assert(response.updatedAssets.size == 1) // (15)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../create/#build-minimal-object-needed). For a term, this is a name and the GUID of the glossary in which to create the term. (The final `null` is for a `qualifiedName` of the glossary, which could be used instead of the GUID.)
2. Set a description for the term.
3. Add a category for the term. (This category must already exist, or be created before this operation.)
4. (Optional) You can specify whether this category should be `APPEND`ed to any categories the term is already organized within, or `REMOVE`d from the existing set of categories. If this argument is left out, the entire set of categories the term is linked to will be `REPLACE`d.
5. Set the announcement that should be added (in this example, we're using `INFORMATION`).
6. Add a title for the announcement.
7. Add a message for the announcement.
8. Set the certificate for the term (in this example, we're using `VERIFIED`).
9. Add a message for the certificate.
10. Add an owner.
11. Add another owner. Note that we can just continue chaining single owners, we do not need to create our own list first.
12. Call the `build()` method to build the enriched object.
13. Call the `save()` method to actually create the term with all of these initial details. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
14. The response will include that single term that was created.
15. The response will also include any related objects (the category) that were updated by this term being related to them.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example Term", // (3)         "qualifiedName": "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq",         "anchor": {           "typeName": "AtlasGlossary",           "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         },         "description": "This is only an example.", // (4)         "announcementType": "information", // (5)         "announcementTitle": "New!", // (6)         "announcementMessage": "This term is newly created.", // (7)         "certificateStatus": "VERIFIED", // (8)         "certificateStatusMessage": "For good measure!", // (9)         "ownerUsers": [ // (10)           "jdoe",           "jsmith"         ]       },       "appendRelationshipAttributes": {         "categories": [ // (11)           {             "typeName": "AtlasGlossaryCategory",             "guid": "1b736a83-207b-4269-ab92-44d77e1aca28"           }         ]       }     }   ] }  ``` |

1. All details must still be included in an outer `entities` array.
2. You need to specify the type for each asset you are updating.
3. You need to specify other required attributes for each asset, such as its name and qualifiedName. (And in the case of terms and categories, also the parent glossary they exist within.)
4. Set a description for the term.
5. Set the announcement that should be added.
6. Add a title for the announcement.
7. Add a message for the announcement.
8. Set the certificate for the term (in this example, we're using `VERIFIED`).
9. Add a message for the certificate.
10. Add multiple owners.
11. Add one or more categories for the term. (Each category must already exist, or be created before this operation.) When you want the relationship to be appended, you must specify it within the `appendRelationshipAttributes` portion of the payload. If it is within the `attributes` portion of the payload, it will replace all such relationships on the asset.

What are the available enrichments?

The list of methods that are available to enrich each type of asset in Atlan should be directly visible to you within your favorite IDE (when using one of the SDKs).

---

2022\-08\-222024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/combine/) to provide us with more information. 

Back to top

[Previous Bulk updates](../../../patterns/bulk/) [Next Update multiple assets](../../../patterns/bulk/multiple-assets/) 

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

