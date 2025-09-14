# Source URL
https://developer.atlan.com/snippets/common-examples/glossary/categorize-terms/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/glossary/categorize-terms/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to organize glossary terms into categories.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to organize glossary terms into categories.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/categorize-terms.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Categorize terms - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/glossary/categorize-terms/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to organize glossary terms into categories.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/categorize-terms.png
meta-twitter:title: Categorize terms - Developer
meta-viewport: width=device-width,initial-scale=1
title: Categorize terms - Developer
-->

[Skip to content](#categorize-terms) Developer Categorize terms Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/entity/bulk (POST)](../../../../endpoints/#tag:apimetaentitybulk-post)

Categorize terms[¶](#categorize-terms "Permanent link")
=======================================================

Terms in a glossary can also be organized in one (or many) categories.

Remember the glossary is the container, not the category

Remember that the glossary is what contains the term, not the category. Therefore a term *must* have a glossary, but is not required to have a category. Also, a term can (optionally) be organized in many categories, but can only exist in *one* glossary.

Category must exist before creating or updating the term

Remember: each category must already exist before you create or update a term that refers to the category.

During term creation[¶](#during-term-creation "Permanent link")
---------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To categorize a term during its creation:

Java

Python

Kotlin

Raw REST API

| Categorize during creation | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` GlossaryTerm term = GlossaryTerm.creator(         "Example Term", // (1)         glossary) // (2)     .category(GlossaryCategory.refByGuid("dc4c0a08-a902-402b-bf24-cf935aecc343")) // (3)     .category(GlossaryCategory.refByQualifiedName(anotherCategoryQN)) // (4)     .build(); // (5) AssetMutationResponse response = term.save(client); // (6)  ``` |

1. A name for the new term.
2. The glossary in which to create the term.
3. You can then add any number of categories using the `category()` builder method. In this example the term will be categorized in a category with a GUID of `dc4c0a08-a902-402b-bf24-cf935aecc343`...
4. ...in this example the term will also be categorized in a category with a `qualifiedName` given by the `anotherCategoryQN` variable.
5. You need to build the object you've just defined.
6. You then only need to `save()`[1](#fn:1) the object to create it in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Categorize during creation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm  client = AtlanClient() term = AtlasGlossaryTerm.creator(     name="Example Term",  # (1)     anchor=glossary,  # (2)     categories=[         AtlasGlossaryCategory.ref_by_guid("dc4c0a08-a902-402b-bf24-cf935aecc343"),  # (3)         AtlasGlossaryCategory.ref_by_qualified_name(another_category_qn)  # (4)     ] response = client.asset.save(term);  # (5)  ``` |

1. A name for the new term.
2. The glossary in which to create the term.
3. You can then add any number of categories through the `categories` named argument. In this example the term will be categorized in a category with a GUID of `dc4c0a08-a902-402b-bf24-cf935aecc343`...
4. ...in this example the term will also be categorized in a category with a `qualified_name` given by the `another_category_qn` variable.
5. You then only need to `save()`[1](#fn:1) the object to create it in Atlan.

| Categorize during creation | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val term = GlossaryTerm.creator(         "Example Term", // (1)         glossary) // (2)     .category(GlossaryCategory.refByGuid("dc4c0a08-a902-402b-bf24-cf935aecc343")) // (3)     .category(GlossaryCategory.refByQualifiedName(anotherCategoryQN)) // (4)     .build() // (5) val response = term.save(client) // (6)  ``` |

1. A name for the new term.
2. The glossary in which to create the term.
3. You can then add any number of categories using the `category()` builder method. In this example the term will be categorized in a category with a GUID of `dc4c0a08-a902-402b-bf24-cf935aecc343`...
4. ...in this example the term will also be categorized in a category with a `qualifiedName` given by the `anotherCategoryQN` variable.
5. You need to build the object you've just defined.
6. You then only need to `save()`[1](#fn:1) the object to create it in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example Term", // (3)         "displayName": "Example Term", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary", // (6)           "guid": "b4113341-251b-4adc-81fb-2420501c30e6" // (7)         },         "categories": [ // (8)           {             "typeName": "AtlasGlossaryCategory", // (9)             "guid": "dc4c0a08-a902-402b-bf24-cf935aecc343" // (10)           },           {             "typeName": "AtlasGlossaryCategory",             "uniqueAttributes": {               "qualifiedName": "..." // (11)             }           }         ]       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the term (case\-sensitive), which for a term is `AtlasGlossaryTerm`.
3. You must provide the exact name of the term (case\-sensitive).
4. You must provide the exact name of the term (case\-sensitive) as you want it to appear in the UI.
5. You must provide an `anchor` relationship.
6. Within the `anchor` relationship you must provide the exact type name for a glossary: `AtlasGlossary`.
7. Within the `anchor` relationship you must provide the GUID of the glossary the category should be created within.
8. When you want to place the term into one or more categories, you must provide the `categories` relationship.
9. Within a `categories` relationship, you must provide the exact type name for a category: `AtlasGlossaryCategory`.
10. Within a `categories` relationship, you must provide either the GUID of the category (in this example)...
11. ...or the `qualifiedName` of the category, which itself must be further nested within a `uniqueAttributes` object.

Updating an existing term[¶](#updating-an-existing-term "Permanent link")
-------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a child category, the steps are very similar but you add in the reference to the parent category:

Java

Python

Kotlin

Raw REST API

| Update an existing term | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` GlossaryTerm term = GlossaryTerm.updater(         "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (1)         "Example Term", // (2)         "b4113341-251b-4adc-81fb-2420501c30e6") // (3)     .category(GlossaryCategory.refByGuid("dc4c0a08-a902-402b-bf24-cf935aecc343")) // (4)     .category(GlossaryCategory.refByQualifiedName(anotherCategoryQN)) // (5)     .build(); // (6) AssetMutationResponse response = child.save(client); // (7)  ``` |

1. The `qualifiedName` of the existing term.
2. The name of the existing term.
3. The GUID of the glossary in which the term exists.
4. You can then add any number of categories using the `category()` builder method. In this example the term will be categorized in a category with a GUID of `dc4c0a08-a902-402b-bf24-cf935aecc343`...
5. ...in this example the term will also be categorized in a category with a `qualifiedName` given by the `anotherCategoryQN` variable.
6. You need to build the object you've just defined.
7. You then only need to `save()`[1](#fn:1) the object to update it in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update an existing term | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm  term = AtlasGlossaryTerm.updater(         qualified_name="gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq",  # (1)         name="Example Term",  # (2)         glossary_guid="b4113341-251b-4adc-81fb-2420501c30e6")  # (3) term.categories = [     AtlasGlossaryCategory.ref_by_guid("dc4c0a08-a902-402b-bf24-cf935aecc343"),  # (4)     AtlasGlossaryCategory.ref_by_qualified_name(another_category_qn)  # (5) ] response = client.asset.save(term);  # (6)  ``` |

1. The `qualified_name` of the existing term.
2. The name of the existing term.
3. The GUID of the glossary in which the term exists.
4. You can then add any number of categories using the `categories` property. In this example the term will be categorized in a category with a GUID of `dc4c0a08-a902-402b-bf24-cf935aecc343`...
5. ...in this example the term will also be categorized in a category with a `qualified_name` given by the `another_category_qn` variable.
6. You then only need to `save()`[1](#fn:1) the object to update it in Atlan.

| Update an existing term | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` val term = GlossaryTerm.updater(         "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (1)         "Example Term", // (2)         "b4113341-251b-4adc-81fb-2420501c30e6") // (3)     .category(GlossaryCategory.refByGuid("dc4c0a08-a902-402b-bf24-cf935aecc343")) // (4)     .category(GlossaryCategory.refByQualifiedName(anotherCategoryQN)) // (5)     .build() // (6) val response = child.save(client) // (7)  ``` |

1. The `qualifiedName` of the existing term.
2. The name of the existing term.
3. The GUID of the glossary in which the term exists.
4. You can then add any number of categories using the `category()` builder method. In this example the term will be categorized in a category with a GUID of `dc4c0a08-a902-402b-bf24-cf935aecc343`...
5. ...in this example the term will also be categorized in a category with a `qualifiedName` given by the `anotherCategoryQN` variable.
6. You need to build the object you've just defined.
7. You then only need to `save()`[1](#fn:1) the object to update it in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryCategory", // (2)       "attributes": {         "name": "Example Term", // (3)         "qualifiedName": "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (4)         "anchor": { // (5)           "typeName": "AtlasGlossary", // (6)           "guid": "b4113341-251b-4adc-81fb-2420501c30e6" // (7)         },         "categories": [ // (8)           {             "typeName": "AtlasGlossaryCategory", // (9)             "guid": "dc4c0a08-a902-402b-bf24-cf935aecc343" // (10)           },           {             "typeName": "AtlasGlossaryCategory",             "uniqueAttributes": {               "qualifiedName": "..." // (11)             }           }         ]       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the term (case\-sensitive), which for a category is `AtlasGlossaryCategory`.
3. You must provide the exact name of the term (case\-sensitive).
4. You must provide the exact `qualifiedName` of the term (case\-sensitive), as it already exists in Atlan.
5. You must provide an `anchor` relationship.
6. Within the `anchor` relationship you must provide the exact type name for a glossary: `AtlasGlossary`.
7. Within the `anchor` relationship you must provide the GUID of the glossary the category should be created within.
8. When you want to place the term into one or more categories, you must provide the `categories` relationship.
9. Within a `categories` relationship, you must provide the exact type name for a category: `AtlasGlossaryCategory`.
10. Within a `categories` relationship, you must provide either the GUID of the category (in this example)...
11. ...or the `qualifiedName` of the category, which itself must be further nested within a `uniqueAttributes` object.

---

1. Why no distinction between create and update? This has to do with how Atlan detects changes — see the [Importance of identifiers](../../../../getting-started/#importance-of-identifiers) for a more detailed explanation.[↩](#fnref:1 "Jump back to footnote 1 in the text")[↩](#fnref2:1 "Jump back to footnote 1 in the text")[↩](#fnref3:1 "Jump back to footnote 1 in the text")[↩](#fnref4:1 "Jump back to footnote 1 in the text")[↩](#fnref5:1 "Jump back to footnote 1 in the text")[↩](#fnref6:1 "Jump back to footnote 1 in the text")

---

2022\-12\-222025\-01\-03

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/glossary/categorize-terms/) to provide us with more information. 

Back to top

[Previous Create a hierarchy](../create-hierarchy/) [Next Traverse category hierarchy](../hierarchy/) 

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

