# Source URL
https://developer.atlan.com/search/attributes/glossary/

================================================================================

<!--
canonical: https://developer.atlan.com/search/attributes/glossary/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/search/attributes/glossary.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Glossary-specific search fields - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/search/attributes/glossary/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/search/attributes/glossary.png
meta-twitter:title: Glossary-specific search fields - Developer
meta-viewport: width=device-width,initial-scale=1
title: Glossary-specific search fields - Developer
-->

[Skip to content](#glossary-attributes) Developer Glossary\-specific search fields Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Glossary attributes[¶](#glossary-attributes "Permanent link")
=============================================================

These attributes only exist on glossary\-related objects in Atlan (terms and categories). Attempting to search for them on other asset types will produce no results.

`[Atlas]GlossaryTerm.ANCHOR` [¶](#atlasglossarytermanchor "Permanent link")
---------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The `qualifiedName` of the glossary in which the term is contained in Atlan.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(GlossaryTerm.ANCHOR.eq("hvhGIKJi7N4xrUhyy8SAP")) // (2)     .includeOnResults(GlossaryTerm.ANCHOR) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualifiedName of the glossary in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualifiedName.

    Equivalent query from Elastic
    ```
    Query byGlossary = TermQuery.of(t -> t
        .field("__glossary")
        .value("hvhGIKJi7N4xrUhyy8SAP"))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 8 9 ``` | ``` for (Asset result : index.search(client)) { // (1)     if (result instanceof GlossaryTerm) { // (2)         IGlossary parent = ((GlossaryTerm) result).getAnchor();     } }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent glossary can be retrieved from a result through `.getAnchor()`, but only after the result has been cast to the appropriate type (`GlossaryTerm`).

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(AtlasGlossaryTerm.ANCHOR.eq("hvhGIKJi7N4xrUhyy8SAP"))  # (2)          .include_on_results(AtlasGlossaryTerm.ANCHOR)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualified\_name of the glossary in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualified\_name.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 12 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     if isinstance(result, AtlasGlossaryTerm):  # (2)         parent = result.anchor  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent glossary can be retrieved from a result through `.anchor`, but only after the result has been confirmed to the appropriate type (`AtlasGlossaryTerm`).

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(GlossaryTerm.ANCHOR.eq("hvhGIKJi7N4xrUhyy8SAP")) // (2)     .includeOnResults(GlossaryTerm.ANCHOR) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualifiedName of the glossary in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualifiedName.

    Equivalent query from Elastic
    ```
    val byGlossary = TermQuery.of(t -> t
        .field("__glossary")
        .value("hvhGIKJi7N4xrUhyy8SAP"))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 8 9 ``` | ``` for (result in index.search(client)) { // (1)     if (result is GlossaryTerm) { // (2)         val parent = result.anchor     } }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent glossary can be retrieved from a result through `.anchor`, but only after the result has been cast to the appropriate type (`GlossaryTerm`).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__glossary": { "value": "hvhGIKJi7N4xrUhyy8SAP" }} // (1)     }   },   "attributes": [ "anchor" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the qualifiedName of the parent glossary.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "entities": [     {       "attributes": {         "anchor": {           "guid": "3b7fc7d6-0447-4229-a5c8-53f793aefe0b",           "typeName": "AtlasGlossary",           "uniqueAttributes": {             "qualifiedName": "hvhGIKJi7N4xrUhyy8SAP"           }         }       }     }   ] }  ``` |

`[Atlas]GlossaryCategory.ANCHOR` [¶](#atlasglossarycategoryanchor "Permanent link")
-----------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The `qualifiedName` of the glossary in which the category is contained in Atlan.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(GlossaryCategory.ANCHOR.eq("hvhGIKJi7N4xrUhyy8SAP")) // (2)     .includeOnResults(GlossaryCategory.ANCHOR) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualifiedName of the glossary in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualifiedName.

    Equivalent query from Elastic
    ```
    Query byGlossary = TermQuery.of(t -> t
        .field("__glossary")
        .value("hvhGIKJi7N4xrUhyy8SAP"))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 8 9 ``` | ``` for (Asset result : index.search(client)) { // (1)     if (result instanceof GlossaryCategory) { // (2)         IGlossary parent = ((GlossaryCategory) result).getAnchor();     } }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent glossary can be retrieved from a result through `.getAnchor()`, but only after the result has been cast to the appropriate type (`GlossaryCategory`).

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryCategory from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(AtlasGlossaryCategory.ANCHOR.eq("hvhGIKJi7N4xrUhyy8SAP"))  # (2)          .include_on_results(AtlasGlossaryCategory.ANCHOR)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualified\_name of the glossary in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualified\_name.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 12 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     if isinstance(result, AtlasGlossaryCategory):  # (2)         parent = result.anchor  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent glossary can be retrieved from a result through `.anchor`, but only after the result has been confirmed to the appropriate type (`AtlasGlossaryCategory`).

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(GlossaryCategory.ANCHOR.eq("hvhGIKJi7N4xrUhyy8SAP")) // (2)     .includeOnResults(GlossaryCategory.ANCHOR) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualifiedName of the glossary in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualifiedName.

    Equivalent query from Elastic
    ```
    val byGlossary = TermQuery.of(t -> t
        .field("__glossary")
        .value("hvhGIKJi7N4xrUhyy8SAP"))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 8 9 ``` | ``` for (result in index.search(client)) { // (1)     if (result is GlossaryCategory) { // (2)         val parent = result.anchor     } }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent glossary can be retrieved from a result through `.anchor`, but only after the result has been cast to the appropriate type (`GlossaryCategory`).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": { "__glossary": { "value": "hvhGIKJi7N4xrUhyy8SAP" }} // (1)     }   },   "attributes": [ "anchor" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the qualifiedName of the parent glossary.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "entities": [     {       "attributes": {         "anchor": {           "guid": "3b7fc7d6-0447-4229-a5c8-53f793aefe0b",           "typeName": "AtlasGlossary",           "uniqueAttributes": {             "qualifiedName": "hvhGIKJi7N4xrUhyy8SAP"           }         }       }     }   ] }  ``` |

`[Atlas]GlossaryTerm.CATEGORIES` [¶](#atlasglossarytermcategories "Permanent link")
-----------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The `qualifiedName` of one or more categories in which the term is organized in Atlan.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(GlossaryTerm.CATEGORIES.in( // (2)         List.of("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP",                 "SWpBeZFipHmXhSvxUrVNw@hvhGIKJi7N4xrUhyy8SAP")));     .includeOnResults(GlossaryTerm.CATEGORIES) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualifiedName of one or more categories in the `in()` predicate. This uses a [terms query](../../queries/terms/#terms) to exactly match the qualifiedName.

    Equivalent query from Elastic
    ```
    Query byCategory = TermsQuery.of(t -> t
        .field("__categories")
        .terms(TermsQueryField.of(f -> f
            .value(List.of(FieldValue.of("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP"),
                           FieldValue.of("SWpBeZFipHmXhSvxUrVNw@hvhGIKJi7N4xrUhyy8SAP"))))))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ```  7  8  9 10 11 ``` | ``` for (Asset result : index.search(client)) { // (1)     if (result instanceof GlossaryTerm) { // (2)         Set<IGlossaryCategory> categories = ((GlossaryTerm) result).getCategories();     } }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The categories organizing the term can be retrieved from a result through `.getCategories()`, but only after the result has been cast to the appropriate type (`GlossaryTerm`).

| Build the query and request | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(AtlasGlossaryTerm.CATEGORIES.within([  # (2)               "Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP",               "SWpBeZFipHmXhSvxUrVNw@hvhGIKJi7N4xrUhyy8SAP"          ]))          .include_on_results(AtlasGlossaryTerm.CATEGORIES)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualified\_name of one or more categories in the `within()` predicate. This uses a [terms query](../../queries/terms/#terms) to exactly match the qualified\_name.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ``` 12 13 14 15 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     if isinstance(result, AtlasGlossaryTerm):  # (2)         categories = result.categories  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The categories organizing the term can be retrieved from a result through `.categories`, but only after the result has been confirmed to the appropriate type (`AtlasGlossaryTerm`).

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val index = client.assets.select() // (1)     .where(GlossaryTerm.CATEGORIES.in( // (2)         List.of("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP",                 "SWpBeZFipHmXhSvxUrVNw@hvhGIKJi7N4xrUhyy8SAP")));     .includeOnResults(GlossaryTerm.CATEGORIES) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualifiedName of one or more categories in the `in()` predicate. This uses a [terms query](../../queries/terms/#terms) to exactly match the qualifiedName.

    Equivalent query from Elastic
    ```
    val byCategory = TermsQuery.of(t -> t
        .field("__categories")
        .terms(TermsQueryField.of(f -> f
            .value(List.of(FieldValue.of("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP"),
                           FieldValue.of("SWpBeZFipHmXhSvxUrVNw@hvhGIKJi7N4xrUhyy8SAP"))))))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ```  7  8  9 10 11 ``` | ``` for (result in index.search(client)) { // (1)     if (result is GlossaryTerm) { // (2)         val categories = result.categories     } }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The categories organizing the term can be retrieved from a result through `.categories`, but only after the result has been cast to the appropriate type (`GlossaryTerm`).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "dsl": {     "query": {       "terms": { // (1)         "__categories": [           "Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP",           "SWpBeZFipHmXhSvxUrVNw@hvhGIKJi7N4xrUhyy8SAP"         ]       }     }   },   "attributes": [ "categories" ] }  ``` |

1. You can use a [terms query](../../queries/terms/#terms) to exactly match the qualifiedName of one of several categories.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "entities": [     {       "attributes": {         "anchor": {           "guid": "324f7d64-9ebb-4c61-8e95-129b88dbad60",           "typeName": "AtlasGlossaryCategory",           "uniqueAttributes": {             "qualifiedName": "Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP"           }         }       }     }   ] }  ``` |

`[Atlas]GlossaryCategory.PARENT_CATEGORY` [¶](#atlasglossarycategoryparent_category "Permanent link")
-----------------------------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The `qualifiedName` of the parent category in which a subcategory is contained in Atlan.

Java

Python

Kotlin

Raw REST API

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` IndexSearchRequest index = client.assets.select() // (1)     .where(GlossaryCategory.PARENT_CATEGORY.eq("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP")) // (2)     .includeOnResults(GlossaryCategory.PARENT_CATEGORY) // (3)     .toRequest();  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualifiedName the parent category in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualifiedName.

    Equivalent query from Elastic
    ```
    Query byParentCategory = TermQuery.of(t -> t
        .field("__parentCategory")
        .value("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP"))
      ._toQuery();

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 8 9 ``` | ``` for (Asset result : index.search(client)) { // (1)     if (result instanceof GlossaryCategory) { // (2)         IGlossaryCategory parent = ((GlossaryCategory) result).getParentCategory();     } }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent category in which the subcategory is contained can be retrieved from a result through `.getParentCategory()`, but only after the result has been cast to the appropriate type (`GlossaryCategory`).

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryCategory from pyatlan.model.fluent_search import FluentSearch  index = (FluentSearch()  # (1)          .where(AtlasGlossaryCategory.PARENT_CATEGORY.eq("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP"))  # (2)          .include_on_results(AtlasGlossaryCategory.PARENT_CATEGORY)  # (3)         ).to_request()  ``` |

1. You can search across all assets using a `FluentSearch()` object. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualified\_name the parent category in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualified\_name.
3. To ensure the details of this field are included in each result, add the field to `include_on_results()`.

| Run the search | |
| --- | --- |
| ```  9 10 11 12 ``` | ``` client = AtlanClient() for result in client.asset.search(index):  # (1)     if isinstance(result, AtlasGlossaryCategory):  # (2)         parent = result.parent_category  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent category in which the subcategory is contained can be retrieved from a result through `.parent_category`, but only after the result has been confirmed to the appropriate type (`AtlasGlossaryCategory`).

| Build the query and request | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val index = client.assets.select() // (1)     .where(GlossaryCategory.PARENT_CATEGORY.eq("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP")) // (2)     .includeOnResults(GlossaryCategory.PARENT_CATEGORY) // (3)     .toRequest()  ``` |

1. You can search across all assets using the `select()` method of the `assets` member on any client. (For details, see [Searching for assets](../../../snippets/advanced-examples/search/).)
2. Then provide the exact, full qualifiedName the parent category in the `eq()` predicate. This uses a [term query](../../queries/terms/#term) to exactly match the qualifiedName.

    Equivalent query from Elastic
    ```
    val byParentCategory = TermQuery.of(t -> t
        .field("__parentCategory")
        .value("Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP"))
      ._toQuery()

    ```
3. To ensure the details of this field are included in each result, add the field to `includeOnResults()`.

| Run the search | |
| --- | --- |
| ``` 5 6 7 8 9 ``` | ``` for (result in index.search(client)) { // (1)     if (result is GlossaryCategory) { // (2)         val parent = result.parentCategory     } }  ``` |

1. For details, see [Searching for assets](../../../snippets/advanced-examples/search/#iterate-through-results).
2. The parent category in which the subcategory is contained can be retrieved from a result through `.parentCategory`, but only after the result has been cast to the appropriate type (`GlossaryCategory`).

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` {   "dsl": {     "query": {       "term": {"__parentCategory":{"value":"Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP"} // (1)     }   },   "attributes": [ "parentCategory" ] }  ``` |

1. You can use a [term query](../../queries/terms/#term) to exactly match the qualifiedName of the parent category.

| Response | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "entities": [     {       "attributes": {         "parentCategory": {           "guid": "324f7d64-9ebb-4c61-8e95-129b88dbad60",           "typeName": "AtlasGlossaryCategory",           "uniqueAttributes": {             "qualifiedName": "Y5kzMdHDHbKWncb3EK1w8@hvhGIKJi7N4xrUhyy8SAP"           }         }       }     }   ] }  ``` |

---

2022\-08\-222025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/search/attributes/glossary/) to provide us with more information. 

Back to top

[Previous Common search fields](../common/) [Next Limiting details](../../limit/) 

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

