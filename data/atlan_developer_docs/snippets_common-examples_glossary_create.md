# Source URL
https://developer.atlan.com/snippets/common-examples/glossary/create/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/glossary/create/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to create glossaries, categories, and terms in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to create glossaries, categories, and terms in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/create.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Creating glossary objects - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/glossary/create/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to create glossaries, categories, and terms in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/create.png
meta-twitter:title: Creating glossary objects - Developer
meta-viewport: width=device-width,initial-scale=1
title: Creating glossary objects - Developer
-->

[Skip to content](#creating-glossary-objects) Developer Creating glossary objects Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/entity/bulk (POST)](../../../../endpoints/#tag:apimetaentitybulk-post)

Creating glossary objects[¶](#creating-glossary-objects "Permanent link")
=========================================================================

You can create objects in glossaries in the same way as [all other objects in the SDK](../../../advanced-examples/create/). Each object provides a method that takes the minimal set of required fields to create that [asset](../../../../getting-started/#what-is-an-asset).

Create a glossary[¶](#create-a-glossary "Permanent link")
---------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a glossary:

Java

Python

Kotlin

Raw REST API

| Create a glossary | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Glossary glossary = Glossary     .creator("Example Glossary") // (1)     .assetIcon(AtlanIcon.BOOK_OPEN_TEXT) // (2)     .build(); // (3) AssetMutationResponse response = glossary.save(client); // (4)  ``` |

1. A name for the new glossary.
2. You can chain any other enrichment onto the creator, such as an icon for the glossary in this example.
3. You then build the object (in\-memory).
4. And finally you can save the glossary back to Atlan (and the result of that save is returned). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a glossary | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary from pyatlan.model.enums import AtlanIcon  client = AtlanClient() glossary = AtlasGlossary.creator(     name="Example Glossary"  # (1) ) glossary.asset_icon = AtlanIcon.BOOK_OPEN_TEXT.value  # (2) response = client.asset.save(glossary)  # (3)  ``` |

1. A name for the new glossary.
2. You can chain any other enrichment onto the creator, such as an icon for the glossary in this example.
3. You then build the object (in\-memory).
4. And finally you can save the glossary back to Atlan (and the result of that save is returned).

| Create a glossary | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val glossary = Glossary     .creator("Example Glossary") // (1)     .assetIcon(AtlanIcon.BOOK_OPEN_TEXT) // (2)     .build() // (3) val response = glossary.save(client) // (4)  ``` |

1. A name for the new glossary.
2. You can chain any other enrichment onto the creator, such as an icon for the glossary in this example.
3. You then build the object (in\-memory).
4. And finally you can save the glossary back to Atlan (and the result of that save is returned). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossary", // (2)       "attributes": {         "name": "Example Glossary", // (3)         "qualifiedName": "Example Glossary", // (4)         "assetIcon": "PhBookOpenText" // (5)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive). For a glossary, this is `AtlasGlossary`.
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide a `qualifiedName` of the asset (case\-sensitive). In the case of glossaries, this will actually be replaced in the back\-end with a generated `qualifiedName`, but you must provide some value when creating the object.
5. You can also provide other enrichment, such as an icon for the glossary in this example.

Create a category[¶](#create-a-category "Permanent link")
---------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a category:

Java

Python

Kotlin

Raw REST API

| Create a category | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` GlossaryCategory category = GlossaryCategory     .creator("Example Category", // (1)         "b4113341-251b-4adc-81fb-2420501c30e6") // (2)     .build(); // (3) AssetMutationResponse response = category.save(client); // (4)  ``` |

1. You must provide a name for the new category.
2. You must provide the ID of the glossary in which the category should be created (GUID or qualifiedName).
3. You then build the object (in\-memory).
4. And finally you can save the category back to Atlan (and the result of that save is returned). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a category | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryCategory  client = AtlanClient() category = AtlasGlossaryCategory.creator(     name="Example Category",  # (1)     glossary_guid="b4113341-251b-4adc-81fb-2420501c30e6"  # (2) ) response = client.asset.save(category)  # (3)  ``` |

1. You must provide a name for the new category.
2. You must provide the ID of the glossary (GUID) in which the category should be created.
3. And finally you can save the category back to Atlan (and the result of that save is returned).

| Create a category | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val category = GlossaryCategory     .creator("Example Category", // (1)         "b4113341-251b-4adc-81fb-2420501c30e6") // (2)     .build() // (3) val response = category.save(client) // (4)  ``` |

1. You must provide a name for the new category.
2. You must provide the ID of the glossary in which the category should be created (GUID or qualifiedName).
3. You then build the object (in\-memory).
4. And finally you can save the category back to Atlan (and the result of that save is returned). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryCategory", // (2)       "attributes": {         "name": "Example Category", // (3)         "qualifiedName": "Example Category", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary",           "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         }       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive). For a category, this is `AtlasGlossaryCategory`.
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide a `qualifiedName` of the asset (case\-sensitive). In the case of categories, this will actually be replaced in the back\-end with a generated `qualifiedName`, but you must provide some value when creating the object.
5. You must also specify the parent glossary in which the category should be created. This must be placed in an `anchor` property, which itself has an embedded `typeName` (of `AtlasGlossary`) and the GUID of the glossary.

Create a term[¶](#create-a-term "Permanent link")
-------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a term:

Java

Python

Kotlin

Raw REST API

| Create a term | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` GlossaryTerm term = GlossaryTerm     .creator("Example Term", // (1)         "b4113341-251b-4adc-81fb-2420501c30e6") // (2)     .build(); // (3) AssetMutationResponse response = term.save(client); // (4)  ``` |

1. You must provide a name for the new term.
2. You must provide the ID of the glossary in which the term should be created (GUID or qualifiedName).
3. You then build the object (in\-memory).
4. And finally you can save the term back to Atlan (and the result of that save is returned). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a term | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm  client = AtlanClient() term = AtlasGlossaryTerm.creator(     name="Example Term",  # (1)     glossary_guid="b4113341-251b-4adc-81fb-2420501c30e6"  # (2) ) response = client.asset.save(term)  # (3)  ``` |

1. You must provide a name for the new term.
2. You must provide the ID of the glossary (GUID) in which the term should be created.
3. And finally you can save the term back to Atlan (and the result of that save is returned).

| Create a term | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val term = GlossaryTerm     .creator("Example Term", // (1)         "b4113341-251b-4adc-81fb-2420501c30e6") // (2)     .build() // (3) val response = term.save(client) // (4)  ``` |

1. You must provide a name for the new term.
2. You must provide the ID of the glossary in which the term should be created (GUID or qualifiedName).
3. You then build the object (in\-memory).
4. And finally you can save the term back to Atlan (and the result of that save is returned). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example Term", // (3)         "qualifiedName": "Example Term", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary",           "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         }       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive). For a term, this is `AtlasGlossaryTerm`.
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide a `qualifiedName` of the asset (case\-sensitive). In the case of terms, this will actually be replaced in the back\-end with a generated `qualifiedName`, but you must provide some value when creating the object.
5. You must also specify the parent glossary in which the term should be created. This must be placed in an `anchor` property, which itself has an embedded `typeName` (of `AtlasGlossary`) and the GUID of the glossary.

---

2023\-12\-272025\-01\-03

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/glossary/create/) to provide us with more information. 

Back to top

[Previous Glossary introduction](../) [Next Retrieval by name](../retrieve-by-name/) 

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

