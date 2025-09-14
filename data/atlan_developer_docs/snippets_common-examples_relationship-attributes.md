# Source URL
https://developer.atlan.com/snippets/common-examples/relationship-attributes/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/relationship-attributes/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to create, retrieve, and delete attributed relationships in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to create, retrieve, and delete attributed relationships in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/relationship-attributes.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage asset relationships with attributes - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/relationship-attributes/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to create, retrieve, and delete attributed relationships in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/relationship-attributes.png
meta-twitter:title: Manage asset relationships with attributes - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage asset relationships with attributes - Developer
-->

[Skip to content](#manage-asset-relationships-with-attributes) Developer Manage asset relationships with attributes Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage asset relationships with attributes[¶](#manage-asset-relationships-with-attributes "Permanent link")
===========================================================================================================

Atlan supports relationships between assets that can include attributes, similar to how assets themselves have attributes. These relationship\-level attributes provide additional context and metadata about the connection between assets.

The SDK enables you to create, retrieve, and delete these attributed relationships programmatically.

Relationships with attribute support[¶](#relationships-with-attribute-support "Permanent link")
-----------------------------------------------------------------------------------------------

The following relationship types support attributes that you can set via the SDK:

**Available attributed relationships**

1. `AtlasGlossaryAntonym`
2. `AtlasGlossarySynonym`
3. `AtlasGlossaryReplacementTerm`
4. `AtlasGlossarySemanticAssignment`
5. `AtlasGlossaryPreferredTerm`
6. `AtlasGlossaryRelatedTerm`
7. `AtlasGlossaryTermCategorization`
8. `AtlasGlossaryTranslation`
9. `AtlasGlossaryValidValue`
10. `AtlasGlossaryIsARelationship`
11. `CustomParentEntityCustomChildEntities`
12. `CustomRelatedFromEntitiesCustomRelatedToEntities`
13. `UserDefRelationship`

Add user\-defined relationship[¶](#add-user-defined-relationship "Permanent link")
----------------------------------------------------------------------------------

[7\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.1.0 "Minimum version")

This example demonstrates how to add `UserDefRelationship` between glossary terms. While this relationship type is currently visible in the Atlan UI for glossary terms, you can create any other supported relationship types that have attributes ([as listed above](#relationships-with-attribute-support)) between any asset types using similar steps shown in the snippet below. All these relationships will be persisted in the backend (metastore) even if they're not currently visible in the Atlan UI.

Python

Java

Raw REST API

| Add user\-defined relationship between terms | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm from pyatlan.model.assets.relations import UserDefRelationship  client = AtlanClient()  # Create updater for the source term term1_to_update = AtlasGlossaryTerm.updater( # (1)     qualified_name="FpWBfqOfP0qZQ6tCpK10n@nrrnNyRABZTc6CEKwHh73",     name="Policy",     glossary_guid="55aaaa56-d8cd-4f19-8026-10d511a9b071" )  # Create reference to the target term term2 = AtlasGlossaryTerm.ref_by_guid(   "f558a01a-2e16-440c-ba2d-fed2099e540a" ) # (2)  # Create the user-defined relationship with attributes udr = UserDefRelationship( # (3)     from_type_label="Sold by",     to_type_label="Sells" )  # Build and assign the relationship term1_to_update.user_def_relationship_to = [ # (4)     udr.user_def_relationship_to(term2) ]  # Save the relationship response = client.asset.save(term1_to_update) # (5)  ``` |

1. Create an updater for the source term using `.updater()` with the `qualified_name`, `name`, and `glossary_guid` of the term you want to add the relationship to.
2. Create a reference to the target term using `ref_by_guid()` or `ref_by_qualified_name()`.
3. Define the relationship by creating a `UserDefRelationship` object with attributes like `from_type_label` and `to_type_label`.
4. Build the relationship using the `user_def_relationship_to()` method and assign it to the `user_def_relationship_to` attribute.
5. Save the changes using `client.asset.save()` to persist the relationship in Atlan.

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` {   "entities": [     {       "typeName": "AtlasGlossaryTerm",       "attributes": {         "name": "Policy", // (1)         "qualifiedName": "FpWBfqOfP0qZQ6tCpK10n@nrrnNyRABZTc6CEKwHh73",         "anchor": {           "typeName": "AtlasGlossary",           "guid": "55aaaa56-d8cd-4f19-8026-10d511a9b071"         },         "userDefRelationshipTo": [           {             "typeName": "AtlasGlossaryTerm", // (2)             "guid": "f558a01a-2e16-440c-ba2d-fed2099e540a",             "relationshipAttributes": {               "typeName": "UserDefRelationship", // (3)               "attributes": {                 "toTypeLabel": "Sells",                 "fromTypeLabel": "Sold by"               }             },             "relationshipType": "UserDefRelationship"           }         ]       }     }   ] }  ``` |

1. Provide source asset details: Include the required attributes `name`, `qualifiedName`, and glossary `guid` for the term you want to add the relationship to.
2. Reference the target asset: Create a reference to the target term using its `guid`.
3. Define relationship attributes: Provide the necessary attributes for the `UserDefRelationship`, including `toTypeLabel` and `fromTypeLabel`.

Relationship visibility

User\-defined relationships between glossary terms are visible in the Atlan UI. For other asset types, relationships are stored in the backend but may not be visible in the UI until support is added.

Remove user\-defined relationship[¶](#remove-user-defined-relationship "Permanent link")
----------------------------------------------------------------------------------------

[7\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.1.0 "Minimum version")

This example demonstrates how to remove `UserDefRelationship` between glossary terms. You can use the same approach to remove any attributed relationship type ([as listed above](#relationships-with-attribute-support)) between any asset types using the steps shown in the snippet below.

Python

Java

Raw REST API

| Remove user\-defined relationship between terms | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm  client = AtlanClient()  # Create updater for the source term term1_to_update = AtlasGlossaryTerm.updater( # (1)     qualified_name="FpWBfqOfP0qZQ6tCpK10n@nrrnNyRABZTc6CEKwHh73",     name="Policy",     glossary_guid="55aaaa56-d8cd-4f19-8026-10d511a9b071" )  # Remove all outgoing relationships by setting to empty list term1_to_update.user_def_relationship_to = [] # (2)  # Save the changes to remove the relationship response = client.asset.save(term1_to_update) # (3)  ``` |

1. Create an updater for the source term using `.updater()` with the `qualified_name`, `name`, and `glossary_guid` of the term you want to remove relationships from.
2. Clear relationships by assigning an empty list `[]` to `user_def_relationship_to` to remove all existing outgoing relationships.
3. Save the changes using `client.asset.save()` to persist the removal in Atlan.

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {    "entities": [      {        "typeName": "AtlasGlossaryTerm",        "attributes": {          "anchor": { // (1)            "typeName": "AtlasGlossary",            "guid": "55aaaa56-d8cd-4f19-8026-10d511a9b071"          },          "name": "Policy",          "qualifiedName": "FpWBfqOfP0qZQ6tCpK10n@nrrnNyRABZTc6CEKwHh73",          "userDefRelationshipTo": [] // (2)        }      }    ] }  ``` |

1. Provide source asset details: Include the required attributes `name`, `qualifiedName`, and glossary `guid` for the term you want to add the relationship to.
2. Clear relationships by assigning an empty array `[]` to `userDefRelationshipTo` to remove all existing outgoing relationships.

Complete removal

Setting `user_def_relationship_to = []` removes **all** outgoing user\-defined relationships from the asset. To remove only specific relationships while keeping others, you would need to retrieve the existing relationships first and reconstruct the list without the unwanted ones.

Retrieve user\-defined relationship[¶](#retrieve-user-defined-relationship "Permanent link")
--------------------------------------------------------------------------------------------

[7\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.1.0 "Minimum version")

This example demonstrates how to retrieve `UserDefRelationship` between glossary terms. You can use the same approach to retrieve any attributed relationship type ([as listed above](#relationships-with-attribute-support)) between any asset types. While `UserDefRelationship` is visible in the UI for glossary terms, all relationships are persisted in the backend regardless of UI visibility.

Python

Java

Raw REST API

| Retrieve user\-defined relationships between terms | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm from pyatlan.model.assets.relations import UserDefRelationship from pyatlan.model.query import FluentSearch  client = AtlanClient()  # Build search request for both terms in the relationship request = (     FluentSearch()     .select()     .where_some(AtlasGlossaryTerm.GUID.eq("f558a01a-2e16-440c-ba2d-fed2099e540a")) # (1)     .where_some(AtlasGlossaryTerm.GUID.eq("540ee0f6-bb26-4b1a-88b7-31cfc26746b4")) # (2)     .include_on_results(AtlasGlossaryTerm.USER_DEF_RELATIONSHIP_TO) # (3)     .include_on_results(AtlasGlossaryTerm.USER_DEF_RELATIONSHIP_FROM) # (4)     .include_relationship_attributes(True) # (5)     .to_request() )  # Execute the search results = client.asset.search(request) # (6) assert results and results.count == 2 # (7)  # Access the source term (with outgoing relationship) source_term = results.current_page()[0] # (8) if source_term.user_def_relationship_to:     relationship = source_term.user_def_relationship_to[0]     print(f"Source term GUID: {relationship.guid}")     print(f"Relationship type: {relationship.type_name}")     print(f"Relationship attributes: {relationship.attributes.relationship_attributes.attributes}")  # Access the target term (with incoming relationship) target_term = results.current_page()[1] if target_term.user_def_relationship_from:     relationship = target_term.user_def_relationship_from[0]     print(f"Target term GUID: {relationship.guid}")     print(f"Relationship type: {relationship.type_name}")     print(f"Relationship attributes: {relationship.attributes.relationship_attributes.attributes}")  ``` |

1. Search for source term: Provide the GUID of the source term (relationship origin \- `USER_DEF_RELATIONSHIP_TO`).
2. Search for target term: Provide the GUID of the target term (relationship destination \- `USER_DEF_RELATIONSHIP_FROM`).
3. Include outgoing relationships: Ensure results include the `USER_DEF_RELATIONSHIP_TO` attribute.
4. Include incoming relationships: Ensure results include the `USER_DEF_RELATIONSHIP_FROM` attribute.
5. Include relationship attributes: Set to `True` to retrieve attributes for each relationship.
6. Execute search: Run the search request using `client.asset.search()`.
7. Verify results: Since we're retrieving two specific terms with relationships, `results.count` should be `2`.
8. Access results: Iterate through results or use `current_page()[index]` to access specific terms.

Coming soon

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 ``` | ``` {    "attributes": [      "userDefRelationshipTo",  // (1)      "userDefRelationshipFrom" // (2)    ],    "dsl": {      "from": 0,      "size": 100,      "aggregations": {},      "track_total_hits": true,      "query": {        "bool": {          "must": [            {              "term": {                "__superTypeNames.keyword": {                  "value": "Referenceable"                }              }            }          ],          "should": [            {              "term": {                "__guid": {                  "value": "f558a01a-2e16-440c-ba2d-fed2099e540a", // (3)                  "case_insensitive": false                }              }            },            {              "term": {                "__guid": {                  "value": "540ee0f6-bb26-4b1a-88b7-31cfc26746b4", // (4)                  "case_insensitive": false                }              }            }          ],          "filter": [            {              "term": {                "__superTypeNames.keyword": {                  "value": "Asset"                }              }            },            {              "term": {                "__state": {                  "value": "ACTIVE"                }              }            },            {              "term": {                "__superTypeNames.keyword": {                  "value": "Referenceable"                }              }            }          ],          "minimum_should_match": 1        }      },      "sort": [        {          "__guid": {            "order": "asc"          }        }      ]    },    "relationAttributes": [      "name"    ],    "includeRelationshipAttributes": true // (5) }  ``` |

1. Include outgoing relationships: Ensure results include the `USER_DEF_RELATIONSHIP_TO` attribute.
2. Include incoming relationships: Ensure results include the `USER_DEF_RELATIONSHIP_FROM` attribute.
3. Search for source term: Provide the GUID of the source term (relationship origin \- `USER_DEF_RELATIONSHIP_TO`).
4. Search for target term: Provide the GUID of the target term (relationship destination \- `USER_DEF_RELATIONSHIP_FROM`).
5. Include relationship attributes: Set to `true` to retrieve attributes for each relationship.

Relationship direction

* `USER_DEF_RELATIONSHIP_TO`: Outgoing relationships from this asset
* `USER_DEF_RELATIONSHIP_FROM`: Incoming relationships to this asset

Accessing attributes

Relationship attributes are nested under `relationship.attributes.relationship_attributes.attributes`. Make sure to include `include_relationship_attributes(True)` in your search to retrieve these values.

---

2025\-06\-272025\-06\-27

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/relationship-attributes/) to provide us with more information. 

Back to top

[Previous Add asset resources](../resources/) [Next Asset CRUD operations](../../advanced-examples/) 

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

