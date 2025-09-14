# Source URL
https://developer.atlan.com/snippets/common-examples/glossary/create-hierarchy/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/glossary/create-hierarchy/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to organize glossary categories into a hierarchy.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to organize glossary categories into a hierarchy.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/create-hierarchy.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Glossary category hierarchy - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/glossary/create-hierarchy/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to organize glossary categories into a hierarchy.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/create-hierarchy.png
meta-twitter:title: Glossary category hierarchy - Developer
meta-viewport: width=device-width,initial-scale=1
title: Glossary category hierarchy - Developer
-->

[Skip to content](#creating-a-hierarchy) Developer Glossary category hierarchy Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/entity/bulk (POST)](../../../../endpoints/#tag:apimetaentitybulk-post)

Creating a hierarchy[¶](#creating-a-hierarchy "Permanent link")
===============================================================

Categories in a glossary can be organized within another category, to create a hierarchy of categories.

To do this, you need to create the upper levels of the hierarchy before the lower levels. Each level you create should refer to its parent, and therefore its parent must first exist.

Create a root\-level category[¶](#create-a-root-level-category "Permanent link")
--------------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a root\- or top\-level category (no parent):

Java

Python

Kotlin

Raw REST API

| Create a top\-level category | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` GlossaryCategory top = GlossaryCategory.creator(         "Top", // (1)         glossary) // (2)     .build(); // (3) AssetMutationResponse response = top.save(client); // (4)  ``` |

1. A name for the new category.
2. The glossary in which to create the category. Note that we do not specify any parent category anywhere, since this will be a top\-level category.
3. You need to build the object you've just defined.
4. You then only need to `save()`[1](#fn:1) the object to create it in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a top\-level category | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryCategory  client = AtlanClient() top = AtlasGlossaryCategory.creator(     name="Top",  # (1)     anchor=glossary  # (2) ) response = client.asset.save(top)  # (3)  ``` |

1. A name for the new category.
2. The glossary in which to create the category. Note that we do not specify any parent category anywhere, since this will be a top\-level category.
3. You then only need to `save()`[1](#fn:1) the object to create it in Atlan.

| Create a top\-level category | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val top = GlossaryCategory.creator(         "Top", // (1)         glossary) // (2)     .build() // (3) val response = top.save(client) // (4)  ``` |

1. A name for the new category.
2. The glossary in which to create the category. Note that we do not specify any parent category anywhere, since this will be a top\-level category.
3. You need to build the object you've just defined.
4. You then only need to `save()`[1](#fn:1) the object to create it in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryCategory", // (2)       "attributes": {         "name": "Top", // (3)         "displayName": "Top", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary", // (6)           "guid": "b4113341-251b-4adc-81fb-2420501c30e6" // (7)         }       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the category (case\-sensitive), which for a category is `AtlasGlossaryCategory`.
3. You must provide the exact name of the category (case\-sensitive).
4. You must provide the exact name of the category (case\-sensitive) as you want it to appear in the UI.
5. You must provide an `anchor` relationship.
6. Within the `anchor` relationship you must provide the exact type name for a glossary: `AtlasGlossary`.
7. Within the `anchor` relationship you must provide the GUID of the glossary the category should be created within.

Create a child category[¶](#create-a-child-category "Permanent link")
---------------------------------------------------------------------

Parent must exist before creating the child

Remember: the parent category must exist before you create the child category.

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a child category, the steps are very similar but you add in the reference to the parent category:

Java

Python

Kotlin

Raw REST API

| Create a child category | |
| --- | --- |
| ```  6  7  8  9 10 11 ``` | ``` GlossaryCategory child = GlossaryCategory.creator(         "Middle", // (1)         glossary) // (2)     .parentCategory(top.trimToReference()) // (3)     .build(); // (4) AssetMutationResponse response = child.save(client); // (5)  ``` |

1. A name for the new category.
2. The glossary in which to create the category.
3. Now you add in the reference to the parent category. There are multiple ways you can reference the category:

    * If you have the parent category already, you can use `trimToReference()` to obtain the minimal reference to it.
        * If you only know the GUID, you can use `GlossaryCategory.refByGuid()` to create a minimal reference to it.
        * If you only know the qualifiedName, you can use `GlossaryCategory.refByQualifiedName()` to create a minimal reference to it.
4. You need to build the object you've just defined.
5. You then only need to `save()`[1](#fn:1) the object to create it in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a child category | |
| --- | --- |
| ``` 10 11 12 13 14 15 16 17 18 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryCategory  client = AtlanClient() child = AtlasGlossaryCategory.creator(         name="Middle",  # (1)         anchor=glossary,  # (2)         parent_category=top)  # (3) response = client.asset.save(child);  # (4)  ``` |

1. A name for the new category.
2. The glossary in which to create the category.
3. Now you add in the reference to the parent category. There are multiple ways you can reference the category:

    * If you have the parent category already, you can send it through as\-is.
        * If you only know the GUID, you can use `AtlasGlossaryCategory.ref_by_guid()` to create a minimal reference to it.
        * If you only know the qualifiedName, you can use `GlossaryCategory.ref_by_qualified_name()` to create a minimal reference to it.
4. You then only need to `save()`[1](#fn:1) the object to create it in Atlan.

| Create a child category | |
| --- | --- |
| ```  6  7  8  9 10 11 ``` | ``` val child = GlossaryCategory.creator(         "Middle", // (1)         glossary) // (2)     .parentCategory(top.trimToReference()) // (3)     .build() // (4) val response = child.save(client) // (5)  ``` |

1. A name for the new category.
2. The glossary in which to create the category.
3. Now you add in the reference to the parent category. There are multiple ways you can reference the category:

    * If you have the parent category already, you can use `trimToReference()` to obtain the minimal reference to it.
        * If you only know the GUID, you can use `GlossaryCategory.refByGuid()` to create a minimal reference to it.
        * If you only know the qualifiedName, you can use `GlossaryCategory.refByQualifiedName()` to create a minimal reference to it.
4. You need to build the object you've just defined.
5. You then only need to `save()`[1](#fn:1) the object to create it in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryCategory", // (2)       "attributes": {         "name": "Middle", // (3)         "displayName": "Middle", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary", // (6)           "guid": "b4113341-251b-4adc-81fb-2420501c30e6" // (7)         },         "parentCategory": { // (8)           "typeName": "AtlasGlossaryCategory", // (9)           "guid": "dc4c0a08-a902-402b-bf24-cf935aecc343" // (10)         }       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the category (case\-sensitive), which for a category is `AtlasGlossaryCategory`.
3. You must provide the exact name of the category (case\-sensitive).
4. You must provide the exact name of the category (case\-sensitive) as you want it to appear in the UI.
5. You must provide an `anchor` relationship.
6. Within the `anchor` relationship you must provide the exact type name for a glossary: `AtlasGlossary`.
7. Within the `anchor` relationship you must provide the GUID of the glossary the category should be created within.
8. You must provide a `parentCategory` relationship to define the parent category.
9. Within the `parentCategory` relationship you must provide the exact type name for a category: `AtlasGlossaryCategory`.
10. Within the `parentCategory` relationship you must provide the GUID of the category this category should be organized within.

---

1. Why no distinction between create and update? This has to do with how Atlan detects changes — see the [Importance of identifiers](../../../../getting-started/#importance-of-identifiers) concept for a more detailed explanation.[↩](#fnref:1 "Jump back to footnote 1 in the text")[↩](#fnref2:1 "Jump back to footnote 1 in the text")[↩](#fnref3:1 "Jump back to footnote 1 in the text")[↩](#fnref4:1 "Jump back to footnote 1 in the text")[↩](#fnref5:1 "Jump back to footnote 1 in the text")[↩](#fnref6:1 "Jump back to footnote 1 in the text")

---

2022\-12\-222025\-01\-03

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/glossary/create-hierarchy/) to provide us with more information. 

Back to top

[Previous Retrieval by name](../retrieve-by-name/) [Next Categorize terms](../categorize-terms/) 

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

