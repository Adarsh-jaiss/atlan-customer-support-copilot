# Source URL
https://developer.atlan.com/snippets/common-examples/glossary/hierarchy/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/glossary/hierarchy/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to efficiently traverse category hierarchies in Atlan glossaries.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to efficiently traverse category hierarchies in Atlan glossaries.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/hierarchy.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Traverse glossary categories - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/glossary/hierarchy/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to efficiently traverse category hierarchies in Atlan glossaries.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/hierarchy.png
meta-twitter:title: Traverse glossary categories - Developer
meta-viewport: width=device-width,initial-scale=1
title: Traverse glossary categories - Developer
-->

[Skip to content](#traverse-categories) Developer Traverse glossary categories Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/search/indexsearch (POST)](../../../../endpoints/#tag:apimetasearchindexsearch-post)

Traverse categories[¶](#traverse-categories "Permanent link")
=============================================================

You can populate glossaries in Atlan with arbitrarily deep category hierarchies.

```
graph
    g([Glossary])
    c1([Category 1])
    c2([Category 2])
    c1a([Category 1a])
    c1b([Category 1b])
    c1ai(["Category 1a(i)"])
    c1aii(["Category 1a(ii)"])
    tA([Term A])
    tB([Term B])
    g-->c1-->c1a
    g-->c2
    c1-->c1b
    c1a-->c1ai
    c1a-->c1aii
    c1b-->tB
    c1ai-->tA
```
To traverse these categories efficiently (without retrieving each level through a separate API call) you need to search for all categories in a glossary and reconstruct the hierarchy in\-memory. This reconstruction can be cumbersome, so we've provided a helper method for that in the SDKs.

Retrieve the hierarchy[¶](#retrieve-the-hierarchy "Permanent link")
-------------------------------------------------------------------

[1\.6\.2](https://github.com/atlanhq/atlan-python/releases/tag/1.6.2 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a traversable hierarchy for a glossary:

Java

Python

Kotlin

Raw REST API

| Retrieve traversable hierarchy | |
| --- | --- |
| ``` 1 2 ``` | ``` Glossary glossary = Glossary.findByName(client, "Concepts"); // (1) Glossary.CategoryHierarchy tree = glossary.getHierarchy(client); // (2)  ``` |

1. Start by retrieving the glossary itself, for example using `Glossary.findByName()`. The glossary object used *must* have its `qualifiedName` present, so if you already know the `qualifiedName` you could also use `Glossary._internal().qualifiedName("...").build();` as a shortcut, which does not require making any API call. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Call the `.getHierarchy()` method on the glossary to retrieve a traversable `Glossary.CategoryHierarchy` object. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

**More details**

The `.getHierarchy()` method will only retrieve the bare minimum information about each category (its GUID, qualifiedName and name). If you want to retrieve additional details, such as the terms in that category or certificate for the category, you need to pass these as an additional argument. To do this, use the `.getHierarchy(AtlanClient, List<String>)` method, and pass a list of strings giving the names of any additional attributes you want to retrieve for each category. (For example, to retrieve terms you would use `terms`, for certificates you would use `certificateStatus`.)

| Retrieve traversable hierarchy | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() glossary = client.asset.find_glossary_by_name("Concepts")  # (1) hierarchy = client.asset.get_hierarchy(glossary)  # (2)  ``` |

1. Start by retrieving the glossary itself, for example using `find_glossary_by_name()`. The glossary object used *must* have its `qualified_name` present.
2. Call the `get_hierarchy()` to retrieve a traversable `AtlasGlossary.CategoryHierarchy` object.

**More details**

The `.get_hierarchy()` method will only retrieve the bare minimum information about each category (its GUID, qualifiedName and name). If you want to retrieve additional details, such as the terms in that category or certificate for the category, you need to pass these as an additional argument. To do this, add the additional `attributes` parameter and pass a list of strings giving the names of any additional attributes ou want to retrieve for each category. (For example, to retrieve terms you would use `terms`, for certificates you would use `certificateStatus`.)

| Retrieve traversable hierarchy | |
| --- | --- |
| ``` 1 2 ``` | ``` val glossary = Glossary.findByName(client, "Concepts") // (1) val tree = glossary.getHierarchy(client) // (2)  ``` |

1. Start by retrieving the glossary itself, for example using `Glossary.findByName()`. The glossary object used *must* have its `qualifiedName` present, so if you already know the `qualifiedName` you could also use `Glossary._internal().qualifiedName("...").build();` as a shortcut, which does not require making any API call. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Call the `.getHierarchy()` method on the glossary to retrieve a traversable `Glossary.CategoryHierarchy` object. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

**More details**

The `.getHierarchy()` method will only retrieve the bare minimum information about each category (its GUID, qualifiedName and name). If you want to retrieve additional details, such as the terms in that category or certificate for the category, you need to pass these as an additional argument. To do this, use the `.getHierarchy(AtlanClient, List<String>)` method, and pass a list of strings giving the names of any additional attributes you want to retrieve for each category. (For example, to retrieve terms you would use `terms`, for certificates you would use `certificateStatus`.)

Requires multiple API operations and non\-API logic

To retrieve all categories in a glossary could require multiple API operations, to page through results. You would do this by incrementing the `from` in each subsequent call (in increments equal to the `size`) to get the next page of results.

Each page of results from the search will return a flat list of categories. You will need to use the `parentCategory` relationship within each result to reverse\-engineer the hierarchical structure of the categories from the flat lists.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 ``` | ``` {   "dsl": { // (1)     "from": 0, // (2)     "size": 20, // (3)     "query": {       "bool": {         "filter": [           {             "term": { // (4)               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": { // (5)               "__typeName.keyword": {                 "value": "AtlasGlossaryCategory"               }             }           },           {             "term": { // (6)               "__glossary": {                 "value": "LD5Tb30qbuYCZKsmFRpmS"               }             }           }         ]       }     },     "sort": [ // (7)       {         "name.keyword": {           "order": "asc"         }       }     ],     "track_total_hits": true   },   "attributes": [     "parentCategory" // (8)   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. You should run a search to efficiently retrieve many categories at the same time.
2. Use the `from` parameter to define the start of each page. If you have many categories in the glossary, page through them rather than trying to retrieve them all in a single request. The `from` should be incremented in multiples of the `size`, so in this example would be `0`, `20`, `40`, and so on.
3. The `size` parameter controls how many categories you will try to retrieve per search request.
4. You will probably want to filter the categories to only those that are active (excluding any archived or soft\-deleted categories).
5. You should filter the search by a specific type, in this example `AtlasGlossaryCategory` is the name of the type in Atlan for categories.
6. Finally, you should also filter the search for the specific glossary in which to find the categories.

    Requires qualifiedName of the glossary

    Note that this requires the \`qualifiedName of the glossary, which therefore must first be known or found by an earlier search on glossaries.
7. When you expect to page through results, it is always a good idea to sort the results so that each page returns them in a consistent order.
8. Since we want to be able to understand the hierarchy of categories, we also need to include the `parentCategory` in each result.

Traverse the hierarchy[¶](#traverse-the-hierarchy "Permanent link")
-------------------------------------------------------------------

To traverse the hierarchy of categories you then have a few options.

### Depth\-first traversal[¶](#depth-first-traversal "Permanent link")

[1\.6\.2](https://github.com/atlanhq/atlan-python/releases/tag/1.6.2 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

To list every category in the hierarchy in depth\-first order:

Java

Python

Kotlin

Raw REST API

| Traverse the hierarchy depth\-first | |
| --- | --- |
| ``` 3 4 5 6 7 ``` | ``` List<IGlossaryCategory> dfs = tree.depthFirst(); // (1) for (GlossaryCategory category : dfs) { // (2)     // Do something with the category...     // Order: [1, 1a, 1a(i), 1a(ii), 1b, 2] }  ``` |

1. The `.depthFirst()` method will return an ordered list of all the categories in the glossary, ordered by a depth\-first traversal.
2. You can then iterate through them in this particular order.

| Traverse the hierarchy depth\-first | |
| --- | --- |
| ``` 6 7 8 ``` | ``` for category in hierarchy.depth_first: # (1)     ...  # Do something with the category     ...  # Order [1, 1a, 1a(i), 1a(ii), 1b, 2]  ``` |

1. The `depth_first` property will return an ordered list of all the categories in the glossary, ordered by a depth\-first traversal. You can then iterate through them in this particular order.

| Traverse the hierarchy depth\-first | |
| --- | --- |
| ``` 3 4 5 6 7 ``` | ``` val dfs = tree.depthFirst() // (1) for (category in dfs) { // (2)     // Do something with the category...     // Order: [1, 1a, 1a(i), 1a(ii), 1b, 2] }  ``` |

1. The `.depthFirst()` method will return an ordered list of all the categories in the glossary, ordered by a depth\-first traversal.
2. You can then iterate through them in this particular order.

Non\-API logic

Once you have retrieved the categories using the search approach outlined above, traversing them becomes an operation entirely in your own program (does not interact with Atlan APIs).

For a depth\-first traversal:

1. Start by listing a single top\-level category (those whose `parentCategory` relationship is empty).
2. Then output a single child category of that top\-level category.
3. Then output a single child category of (2\).
4. Continue in this way down the hierarchy.
5. Once exhausted, then move on to the next (grand\-)child category and exhaust its (grand\-)children.
6. Continue in this way until all categories are listed.

### Breadth\-first traversal[¶](#breadth-first-traversal "Permanent link")

[1\.6\.2](https://github.com/atlanhq/atlan-python/releases/tag/1.6.2 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

To list every category in the hierarchy in breadth\-first order:

Java

Python

Kotlin

Raw REST API

| Traverse the hierarchy breadth\-first | |
| --- | --- |
| ``` 3 4 5 6 7 ``` | ``` List<IGlossaryCategory> bfs = tree.breadthFirst(); // (1) for (GlossaryCategory category : bfs) { // (2)     // Do something with the category...     // Order: [1, 2, 1a, 1b, 1a(i), 1a(ii)] }  ``` |

1. The `.breadthFirst()` method will return an ordered list of all the categories in the glossary, ordered by a breadth\-first traversal.
2. You can then iterate through them in this particular order.

| Traverse the hierarchy breadth\-first | |
| --- | --- |
| ``` 6 7 8 ``` | ``` for category in hierarchy.breadth_first: # (1)     ...  # Do something with the category     ...  # Order [1, 1a, 1a(i), 1a(ii), 1b, 2]  ``` |

1. The `breadth-first` property will return an ordered list of all the categories in the glossary, ordered by a depth\-first traversal. You can then iterate through them in this particular order.

| Traverse the hierarchy breadth\-first | |
| --- | --- |
| ``` 3 4 5 6 7 ``` | ``` val bfs = tree.breadthFirst() // (1) for (category in bfs) { // (2)     // Do something with the category...     // Order: [1, 2, 1a, 1b, 1a(i), 1a(ii)] }  ``` |

1. The `.breadthFirst()` method will return an ordered list of all the categories in the glossary, ordered by a breadth\-first traversal.
2. You can then iterate through them in this particular order.

Non\-API logic

Once you have retrieved the categories using the search approach outlined above, traversing them becomes an operation entirely in your own program (does not interact with Atlan APIs).

For a breadth\-first traversal:

1. Start by listing the top\-level categories (those whose `parentCategory` relationship is empty).
2. For each of these categories, then list all of its children.
3. Continue the logic from (1\) for each child category.

### Build\-your\-own traversal[¶](#build-your-own-traversal "Permanent link")

[1\.6\.2](https://github.com/atlanhq/atlan-python/releases/tag/1.6.2 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

Alternatively, you may want to iterate through the hierarchy in your own order. From the traversable hierarchy you can retrieve the top\-level categories, and then decide what to do from there:

Java

Python

Kotlin

Raw REST API

| Traverse the hierarchy as you like, starting from the top | |
| --- | --- |
| ```  3  4  5  6  7  8  9 10 11 12 ``` | ``` for (IGlossaryCategory top : tree.getRootCategories()) { // (1)     // Do something with the top-level categories [1, 2]     for (IGlossaryCategory child : top.getChildrenCategories()) { // (2)         // Do something with the child categories [1a, 1b]         for (IGlossaryCategory gc : child.getChildrenCategories()) {             // Do something with the grand-children categories [1a(i), 1a(ii)]             // ... and so on         }     } }  ``` |

1. The `.getRootCategories()` method will return a list of only those categories at the root of the glossary. (The categories that have no parent categories themselves.)
2. You can then retrieve the child categories using `.getChildrenCategories()`. And you can do this iteratively as you traverse down the hierarchy.

| Traverse the hierarchy as you like, starting from the top | |
| --- | --- |
| ```  6  7  8  9 10 ``` | ``` for top in hierarchy.root_categories: # (1)     for child in top.children_categories or []: # (2)         for gc in child.children_categories or []:         ... # Do something with the grand-children categories [1a(i), 1a(ii)]         ... # ... and so on  ``` |

1. The `root_categories` property will return a list of only those categories at the root of the glossary. (The categories that have no parent categories themselves.)
2. You can then retrieve the child categories using `children_categories` property. And you can do this iteratively as you traverse down the hierarchy.

| Traverse the hierarchy as you like, starting from the top | |
| --- | --- |
| ```  3  4  5  6  7  8  9 10 11 12 ``` | ``` for (top in tree.rootCategories) { // (1)     // Do something with the top-level categories [1, 2]     for (child in top.childrenCategories) { // (2)         // Do something with the child categories [1a, 1b]         for (gc in child.childrenCategories) {             // Do something with the grand-children categories [1a(i), 1a(ii)]             // ... and so on         }     } }  ``` |

1. The `.rootCategories` member will return a list of only those categories at the root of the glossary. (The categories that have no parent categories themselves.)
2. You can then retrieve the child categories using `.childrenCategories`. And you can do this iteratively as you traverse down the hierarchy.

Non\-API logic

Once you have retrieved the categories using the search approach outlined above, traversing them becomes an operation entirely in your own program (does not interact with Atlan APIs).

---

2022\-10\-052025\-01\-03

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/glossary/hierarchy/) to provide us with more information. 

Back to top

[Previous Categorize terms](../categorize-terms/) [Next Creating assets](../../../../patterns/create/) 

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

