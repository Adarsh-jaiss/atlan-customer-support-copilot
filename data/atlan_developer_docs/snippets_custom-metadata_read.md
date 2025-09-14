# Source URL
https://developer.atlan.com/snippets/custom-metadata/read/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/custom-metadata/read/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to retrieve an existing custom metadata structure in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to retrieve an existing custom metadata structure in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/read.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Retrieve custom metadata - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/custom-metadata/read/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to retrieve an existing custom metadata structure in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/read.png
meta-twitter:title: Retrieve custom metadata - Developer
meta-viewport: width=device-width,initial-scale=1
title: Retrieve custom metadata - Developer
-->

[Skip to content](#retrieve-custom-metadata) Developer Retrieve custom metadata Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/types/typedefs (GET)](../../../endpoints/#tag:apimetatypestypedefs-get)

Retrieve custom metadata[¶](#retrieve-custom-metadata "Permanent link")
=======================================================================

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can retrieve an existing custom metadata structure:

Java

Python

Kotlin

Raw REST API

| Retrieve existing custom metadata structure | |
| --- | --- |
| ``` 1 2 3 ``` | ``` CustomMetadataDef existing = client     .getCustomMetadataCache()     .getCustomMetadataDef("RACI"); // (1)  ``` |

1. You can retrieve the current custom metadata definition using the custom metadata cache from any client. In most cases you can simply use the default client (`Atlan.getDefaultClient()`). Pass the human\-readable name of the custom metadata structure to the cache.

| Retrieve existing custom metadata structure | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() existing = client.custom_metadata_cache.get_custom_metadata_def(client=client, name="RACI") # (1)  ``` |

1. You can retrieve the current custom metadata definition using the `client.custom_metadata_cache.get_custom_metadata_def()` method and passing the client and human\-readable name of the custom metadata structure.

| Retrieve existing custom metadata structure | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val existing = client     .customMetadataCache     .getCustomMetadataDef("RACI") // (1)  ``` |

1. You can retrieve the current custom metadata definition using the custom metadata cache from any client. In most cases you can simply use the default client (`Atlan.getDefaultClient()`). Pass the human\-readable name of the custom metadata structure to the cache.

| GET /api/meta/types/typedefs?type\=BUSINESS\_METADATA | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 ``` | ``` {   "businessMetadataDefs": [ // (1)     {       "category": "BUSINESS_METADATA", // (2)       "guid": "917ffec9-fa84-4c59-8e6c-c7b114d04be3",       "name": "MNJ8mpLsIOaP4OQnLNhRta", // (3)       "displayName": "RACI", // (4)       "description": "",       "typeVersion": "1.0",       "serviceType": "atlan",       "attributeDefs": [ // (5)         {           "name": "fWMB77RSjRGNYoFeD4FcGi", // (6)           "displayName": "Responsible", // (7)           "description": "",           "typeName": "string", // (8)           "includeInNotification": false,           "isIndexable": true,           "isOptional": true,           "isUnique": false,           "indexType": "DEFAULT",           "searchWeight": -1,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"Database\",\"Schema\",\"Table\"]\n",             "maxStrLength": "100000000",             "isEnum": false,             "multiValueSelect": false,             "allowFiltering": true,             "allowSearch": true,             "primitiveType": "string",             "customType": "users" // (9)           }         }       ],       "createdBy": "jsmith",       "updatedBy": "jsmith",       "createTime": 1648852296555,       "updateTime": 1649172284333,       "version": 2     }   ] }  ``` |

1. Each custom metadata structure will be wrapped in the top\-level `businessMetadataDefs` array.
2. Each custom metadata structure object will have a `category` of `BUSINESS_METADATA`.
3. The `name` of a custom metadata structure is a unique hashed\-string, but is not human\-readable. This is how the custom metadata is uniquely referred to through the raw APIs.
4. The `displayName` of a custom metadata structure is the human\-readable name you see in the UI.
5. Each property defined within the custom metadata structure is nested within an `attributeDefs` array.
6. As with the overall custom metadata structure, each attribute has a unique hashed\-string `name` that is not human\-readable. This is how the custom metadata property is uniquely referred to through the raw APIs.
7. As with the overall custom metadata structure, each attribute also has a `displayName` that is the human\-readable name you see in the UI.
8. The type of the custom metadata property is its simple type, but does not include custom types like SQL, users, groups and so on.
9. For the precise type, you also need to look at the `customType` within the `options`, within the attribute definition.

---

2023\-03\-072025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/custom-metadata/read/) to provide us with more information. 

Back to top

[Previous Create custom metadata](../create/) [Next Update custom metadata](../update/) 

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

