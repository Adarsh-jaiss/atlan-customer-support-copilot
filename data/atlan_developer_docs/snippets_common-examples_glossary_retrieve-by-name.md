# Source URL
https://developer.atlan.com/snippets/common-examples/glossary/retrieve-by-name/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/glossary/retrieve-by-name/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Fetch glossary objects (terms, categories, and glossaries) in Atlan by their human-readable names.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Fetch glossary objects (terms, categories, and glossaries) in Atlan by their human-readable names.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/retrieve-by-name.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Fetch glossary objects by name - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/glossary/retrieve-by-name/
meta-twitter:card: summary_large_image
meta-twitter:description: Fetch glossary objects (terms, categories, and glossaries) in Atlan by their human-readable names.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/retrieve-by-name.png
meta-twitter:title: Fetch glossary objects by name - Developer
meta-viewport: width=device-width,initial-scale=1
title: Fetch glossary objects by name - Developer
-->

[Skip to content](#retrieving-glossary-objects-by-name) Developer Fetch glossary objects by name Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/search/indexsearch (POST)](../../../../endpoints/#tag:apimetasearchindexsearch-post)

Retrieving glossary objects by name[¶](#retrieving-glossary-objects-by-name "Permanent link")
=============================================================================================

Glossary objects (terms, categories and even glossaries themselves) in Atlan have complicated `qualifiedName`s. This makes retrieving them using the `get()` operation less than ideal.

To address this, the SDKs provide helper methods to retrieve glossary objects based on their human\-readable names.

Retrieve a glossary by name[¶](#retrieve-a-glossary-by-name "Permanent link")
-----------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a glossary by its human\-readable name:

Java

Python

Kotlin

Raw REST API

| Retrieve glossary by name | |
| --- | --- |
| ``` 1 2 3 ``` | ``` Glossary glossary = Glossary.findByName( // (1)     client, // (2)     "Concepts") // (3)  ``` |

1. The `findByName()` helper method retrieves the glossary based on its human\-readable name.
2. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You must provide the human\-readable name of the glossary. The method will only include a bare minimum set of attributes about the glossary — you can request additional attributes by providing a list of them as an (optional) second parameter to this method.

| Retrieve category by name | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() glossary = client.asset.find_glossary_by_name( # (1)     name="Concepts", # (2)     attributes=None) # (3)  ``` |

1. The `asset.find_glossary_by_name()` method retrieves the glossary based on its human\-readable name.
2. You must provide the human\-readable name of the glossary.
3. The method will only include a bare minimum set of attributes about the glossary — you can request additional attributes by providing a list of them as the second parameter to this method.

| Retrieve glossary by name | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val glossary = Glossary.findByName( // (1)     client, // (2)     "Concepts") // (3)  ``` |

1. The `findByName()` helper method retrieves the glossary based on its human\-readable name.
2. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. You must provide the human\-readable name of the glossary. The method will only include a bare minimum set of attributes about the glossary — you can request additional attributes by providing a list of them as an (optional) second parameter to this method.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 ``` | ``` {   "dsl": { // (1)     "from": 0,     "size": 2,     "query": {       "bool": {         "filter": [           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": { // (2)               "__typeName.keyword": {                 "value": "AtlasGlossary"               }             }           },           {             "term": { // (3)               "name.keyword": {                 "value": "Concepts"               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. You actually need to run a search to retrieve glossary objects by name.
2. You should filter the search by a specific type, in this example `AtlasGlossary` is the name of the type in Atlan for glossaries.
3. You then must also filter by the name of the glossary you want to find. This example does an exact match against the provided `Concepts` value (case\-sensitive).

Retrieve a category by name[¶](#retrieve-a-category-by-name "Permanent link")
-----------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a category by its human\-readable name:

Java

Python

Kotlin

Raw REST API

| Retrieve category by name | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` GlossaryCategory category = GlossaryCategory.findByName( // (1)     client, // (2)     "Finance", // (3)     "Concepts"); // (4)  ``` |

1. The `findByName()` helper method retrieves the category based on its human\-readable name.
2. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You must provide the human\-readable name of the category.
4. You must also provide the human\-readable name of the glossary for that category. (A category with the same name can exist in different glossaries, but not in the same glossary.) The method will only include a bare minimum set of attributes about the category — you can request additional attributes by providing a list of them as an (optional) third parameter to this method.

| Retrieve category by name | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() category = client.asset.find_category_by_name( # (1)     name="Finance", # (2)     glossary_name="Concepts", #(3)     attributes=None) # (4)  ``` |

1. The `asset.find_category_by_name()` method retrieves the category based on its human\-readable name.
2. You must provide the human\-readable name of the category.
3. You must also provide the human\-readable name of the glossary for that category. (A category with the same name can exist in different glossaries, but not in the same glossary.)
4. The method will only include a bare minimum set of attributes about the category — you can request additional attributes by providing a list of them as the third parameter to this method.

| Retrieve category by name | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val category = GlossaryCategory.findByName( // (1)     client, // (2)     "Finance", // (3)     "Concepts") // (4)  ``` |

1. The `findByName()` helper method retrieves the category based on its human\-readable name.
2. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. You must provide the human\-readable name of the category.
4. You must also provide the human\-readable name of the glossary for that category. (A category with the same name can exist in different glossaries, but not in the same glossary.) The method will only include a bare minimum set of attributes about the category — you can request additional attributes by providing a list of them as an (optional) third parameter to this method.

Requires multiple API operations

To find a category by its name, using the name of the glossary it exists within (rather than the `qualifiedName` of the glossary), you must first find the glossary by name. (See above example.) Then use the returned `qualifiedName` of the glossary to run the search below for the category within that glossary.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 ``` | ``` {   "dsl": { // (1)     "from": 0,     "size": 2,     "query": {       "bool": {         "filter": [           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": { // (2)               "__typeName.keyword": {                 "value": "AtlasGlossaryCategory"               }             }           },           {             "term": { // (3)               "name.keyword": {                 "value": "Finance"               }             }           },           {             "term": { // (4)               "__glossary": {                 "value": "LD5Tb30qbuYCZKsmFRpmS"               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. You actually need to run a search to retrieve category objects by name.
2. You should filter the search by a specific type, in this example `AtlasGlossaryCategory` is the name of the type in Atlan for categories.
3. You then must also filter by the name of the category you want to find. This example does an exact match against the provided `Finance` value (case\-sensitive).
4. Finally, you should also filter the search for the specific glossary in which to find the category. (Since the same category name could exist in many glossaries.)

    Requires qualifiedName of the glossary

    Note that this requires the \`qualifiedName of the glossary, which therefore must first be known or found by an earlier search on glossaries.

Retrieve a term by name[¶](#retrieve-a-term-by-name "Permanent link")
---------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a term by its human\-readable name:

Java

Python

Kotlin

Raw REST API

| Retrieve term by name | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` GlossaryTerm term = GlossaryTerm.findByName( // (1)     client, // (2)     "Revenue", // (3)     "Concepts"); // (4)  ``` |

1. The `findByName()` helper method retrieves the term based on its human\-readable name.
2. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You must provide the human\-readable name of the term.
4. You must also provide the human\-readable name of the glossary for that term. (A term with the same name can exist in different glossaries, but not in the same glossary.) The method will only include a bare minimum set of attributes about the term — you can request additional attributes by providing a list of them as an (optional) third parameter to this method.

| Retrieve term by name | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() term = client.asset.find_term_by_name( # (1)     name="Revenue", # (2)     glossary_name="Concepts", #(3)     attributes=None) # (4)  ``` |

1. The `asset.find_term_by_name()` method retrieves the term based on its human\-readable name.
2. You must provide the human\-readable name of the term.
3. You must also provide the human\-readable name of the glossary for that term. (A term with the same name can exist in different glossaries, but not in the same glossary.)
4. The method will only include a bare minimum set of attributes about the term — you can request additional attributes by providing a list of them as the third parameter to this method.

| Retrieve term by name | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val term = GlossaryTerm.findByName( // (1)     client, // (2)     "Revenue", // (3)     "Concepts") // (4)  ``` |

1. The `findByName()` helper method retrieves the term based on its human\-readable name.
2. Because this operation will lookup the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. You must provide the human\-readable name of the term.
4. You must also provide the human\-readable name of the glossary for that term. (A term with the same name can exist in different glossaries, but not in the same glossary.) The method will only include a bare minimum set of attributes about the term — you can request additional attributes by providing a list of them as an (optional) third parameter to this method.

Requires multiple API operations

To find a term by its name, using the name of the glossary it exists within (rather than the `qualifiedName` of the glossary), you must first find the glossary by name. (See above example.) Then use the returned `qualifiedName` of the glossary to run the search below for the term within that glossary.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 ``` | ``` {   "dsl": { // (1)     "from": 0,     "size": 2,     "query": {       "bool": {         "filter": [           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": { // (2)               "__typeName.keyword": {                 "value": "AtlasGlossaryTerm"               }             }           },           {             "term": { // (3)               "name.keyword": {                 "value": "Revenue"               }             }           },           {             "term": { // (4)               "__glossary": {                 "value": "LD5Tb30qbuYCZKsmFRpmS"               }             }           }         ]       }     },     "track_total_hits": true   },   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. You actually need to run a search to retrieve term objects by name.
2. You should filter the search by a specific type, in this example `AtlasGlossaryTerm` is the name of the type in Atlan for terms.
3. You then must also filter by the name of the term you want to find. This example does an exact match against the provided `Revenue` value (case\-sensitive).
4. Finally, you should also filter the search for the specific glossary in which to find the term. (Since the same term name could exist in many glossaries.)

    Requires qualifiedName of the glossary

    Note that this requires the \`qualifiedName of the glossary, which therefore must first be known or found by an earlier search on glossaries.

---

2023\-01\-272025\-01\-03

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/glossary/retrieve-by-name/) to provide us with more information. 

Back to top

[Previous Create objects](../create/) [Next Create a hierarchy](../create-hierarchy/) 

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

