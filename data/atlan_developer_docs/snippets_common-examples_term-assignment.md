# Source URL
https://developer.atlan.com/snippets/common-examples/term-assignment/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/term-assignment/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to append, remove, and replace terms from an asset in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to append, remove, and replace terms from an asset in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/term-assignment.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Link terms and assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/term-assignment/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to append, remove, and replace terms from an asset in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/term-assignment.png
meta-twitter:title: Link terms and assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Link terms and assets - Developer
-->

[Skip to content](#link-terms-and-assets) Developer Link terms and assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Link terms and assets[¶](#link-terms-and-assets "Permanent link")
=================================================================

Append terms to an asset[¶](#append-terms-to-an-asset "Permanent link")
-----------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To append new terms to an [asset](../../../getting-started/#what-is-an-asset), without changing any of the existing terms on the asset:

dbt

Java

Python

Kotlin

Raw REST API

This is currently not possible via dbt, term assignments are replaced rather than appended.

| Append terms to an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Column column = Column.appendTerms( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", // (3)     List.of( // (4)         GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6"),         GlossaryTerm.refByGuid("b267858d-8316-4c41-a56a-6e9b840cef4a")));  ``` |

1. Use the `appendTerms()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to add the terms all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset on which to add the terms.
4. A list of term references. Each reference can be to either a term by its GUID or its `qualifiedName`. At the completion of this code, the terms in this list will be *added to* any other terms that are already linked to the asset.

| Append terms to an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm, Column  client = AtlanClient() column = client.asset.append_terms( # (1)     asset_type=Column, # (2)     qualified_name="default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", # (3)     terms=[AtlasGlossaryTerm.ref_by_guid(guid="b4113341-251b-4adc-81fb-2420501c30e6"), # (4)            AtlasGlossaryTerm.ref_by_guid(guid="b267858d-8316-4c41-a56a-6e9b840cef4a")] ) # (5)  ``` |

1. Use the `asset.append_terms()` method, which will construct the necessary
request and call the necessary API(s) to add the terms all\-in\-one.
2. The `asset_type` of the asset on which to add the terms.
3. The `qualified_name` of the asset on which to add the terms.
    * Note: Alternatively the parameter name `guid` could have been
    specified along with the `guid` of the asset on which to add the terms.
4. A list of term references. Each reference can be to either a term by its GUID
or its `qualified_name`. At the completion of this code, the terms in this list will
be *added to* any other terms that are already linked to the asset.
5. The `asset` returned by this call will be a mininmal asset and will not contain
any `terms`. If you need an `asset` which contains the `terms` retrieve it via
the `asset.get_by_guid` or `asset.get_by_qualified_name` methods.

| Append terms to an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val column = Column.appendTerms(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME",  // (3)     listOf(  // (4)         GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6"),         GlossaryTerm.refByGuid("b267858d-8316-4c41-a56a-6e9b840cef4a")))  ``` |

1. Use the `appendTerms()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to add the terms all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset on which to add the terms.
4. A list of term references. Each reference can be to either a term by its GUID or its `qualifiedName`. At the completion of this code, the terms in this list will be *added to* any other terms that are already linked to the asset.

Requires multiple steps through the raw REST API

1. [Retrieve the existing asset](../../advanced-examples/read/).
2. Iterate through the assigned terms that exist on the asset to build up a temporary list, including only those that are not deleted.
3. Add the terms you want to append to the list built\-up in (2\).
4. Send through the resulting complete list, as in the example below.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Column", // (2)       "attributes": {         "name": "CUSTOMER_NAME", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", // (4)         "meanings": [ // (5)           { ... }, // (6)           {             "typeName": "AtlasGlossaryTerm",             "guid": "b4113341-251b-4adc-81fb-2420501c30e6"           },           {             "typeName": "AtlasGlossaryTerm",             "guid": "b267858d-8316-4c41-a56a-6e9b840cef4a"           }         ]       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. Provide the details of the terms to assign to the asset in the `meanings` array. Each reference to a term must include the `typeName` (always `AtlasGlossaryTerm`) and `guid` for the term.
6. Remember you will need to first retrieve the existing asset to retrieve the full set of existing term assignments to append onto.

Replace terms on an asset[¶](#replace-terms-on-an-asset "Permanent link")
-------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To replace all the terms on an asset, meaning any not specified in the request will be removed from the asset:

dbt

Java

Python

Kotlin

Raw REST API

| Replace terms on an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` models:   - name: ORDER_ANALYSIS # (1)     columns:       - name: CUSTOMER_NAME # (2)         meta:           atlan:             termGUIDs: # (3)               - "b4113341-251b-4adc-81fb-2420501c30e6"               - "b267858d-8316-4c41-a56a-6e9b840cef4a"             termQualifiedNames: # (4)               - "SepizCqzgygmdTvVk5a9i@yJuFhD0LiU1QDl5YwXiQy"               - "BfoxTP4209kT5zZFKPKqZ@yJuFhD0LiU1QDl5YwXiQy"             termNames: # (5)               - "Customer Name"               - "Data Governance@Full Name"               - "Finance@Marketing Budget"  ``` |

1. You must of course give the name of the object.
2. If you are applying the terms to a column, you need to give the name of the column as well.
3. You can either specify the terms as a list of GUIDs (each GUID refers to one term).
4. Or you can specify the terms as a list of qualifiedNames.
5. Or you can specify the terms as a list of human\-readable names.

    Handling duplicate term names

    You can disambiguate terms with the same name across different glossaries using the format `glossaryName@termName` (e.g., `"Data Governance@Full Name"`).

    Use `glossaryName@termName` in `termNames`, when term names aren't unique across glossaries.

| Replace terms on an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Column column = Column.replaceTerms( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", // (3)     "CUSTOMER_NAME", // (4)     List.of( // (5)         GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6"),         GlossaryTerm.refByGuid("b267858d-8316-4c41-a56a-6e9b840cef4a")));  ``` |

1. Use the `replaceTerms()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to replace the terms on the asset all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset for which to replace the terms.
4. The human\-readable name of the asset for which to replace the terms.
5. A list of term references. Each reference can be to either a term by its GUID or its `qualifiedName`. After the completion of this code, only the terms in this list will be assigned to the asset.

| Replace terms to an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm, Column  client = AtlanClient() column = client.asset.replace_terms( # (1)     asset_type=Column, # (2)     qualified_name="default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", # (3)     terms=[AtlasGlossaryTerm.ref_by_guid(guid="b4113341-251b-4adc-81fb-2420501c30e6"), # (4)            AtlasGlossaryTerm.ref_by_guid(guid="b267858d-8316-4c41-a56a-6e9b840cef4a")] ) # (5)  ``` |

1. Use the `asset.replace_terms()` method, which will construct the necessary
request and call the necessary API(s) to replace the terms all\-in\-one.
2. The `asset_type` of the asset on which to replace the terms.
3. The `qualified_name` of the asset on which to replace the terms.
    * Note: Alternatively the parameter name `guid` could have been
    specified along with the `guid` of the asset on which to replace the terms.
4. A list of term references. Each reference can be to either a term by its GUID
or its `qualified_name`. At the completion of this code, the terms in this list wil *replace* any other terms that are already linked to the asset.
5. The `asset` returned by this call will be a mininmal asset and will not contain
any `terms`. If you need an `asset` which contains the `terms` retrieve it via the `asset.get_by_guid` or `asset.get_by_qualified_name` methods.

| Replace terms on an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val column = Column.replaceTerms(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME",  // (3)     "CUSTOMER_NAME",  // (4)     listOf(  // (5)         GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6"),         GlossaryTerm.refByGuid("b267858d-8316-4c41-a56a-6e9b840cef4a")))  ``` |

1. Use the `replaceTerms()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to replace the terms on the asset all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset for which to replace the terms.
4. The human\-readable name of the asset for which to replace the terms.
5. A list of term references. Each reference can be to either a term by its GUID or its `qualifiedName`. After the completion of this code, only the terms in this list will be assigned to the asset.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Column", // (2)       "attributes": {         "name": "CUSTOMER_NAME", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", // (4)         "meanings": [ // (5)           {             "typeName": "AtlasGlossaryTerm",             "guid": "b4113341-251b-4adc-81fb-2420501c30e6"           },           {             "typeName": "AtlasGlossaryTerm",             "guid": "b267858d-8316-4c41-a56a-6e9b840cef4a"           }         ]       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. Provide the details of the terms to assign to the asset in the `meanings` array. Each reference to a term must include the `typeName` (always `AtlasGlossaryTerm`) and `guid` for the term. After the completion of this code, only the terms in this list will be assigned to the asset.

Remove terms from an asset[¶](#remove-terms-from-an-asset "Permanent link")
---------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove some terms from an asset, without removing all of the terms on the asset:

dbt

Java

Python

Kotlin

Raw REST API

This is currently not possible via dbt, term assignments are replaced rather than selectively removed.

| Remove terms from an asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Column column = Column.removeTerms( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", // (3)     List.of( // (4)         GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6")));  ``` |

1. Use the `removeTerms()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to remove the terms all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset from which to remove the terms.
4. A list of term references. Each reference *must* be to a term by its GUID. At the completion of this code, the terms in this list will be *removed from* those linked to the asset.

| Remove terms from an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm, Column  client = AtlanClient() column = client.asset.remove_terms( # (1)     asset_type=Column, # (2)     qualified_name="default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", # (3)     terms=[AtlasGlossaryTerm.ref_by_guid(guid="b4113341-251b-4adc-81fb-2420501c30e6")] # (4) )  ``` |

1. Use the `asset.remove_terms()` method, which will construct the necessary
request and call the necessary API(s) to remove the terms on the asset all\-in\-one.
2. The `asset_type` of the asset on which to remove the terms.
3. The `qualified_name` of the asset on which to remove the terms.
    * Note: Alternatively the parameter name `guid` could have been 
    specified along with the `guid` of the asset on which to remove the terms.
4. A list of term references. Each reference *must* be to a term by its GUID.
At the completion of this code, the terms in this list will be *removed from* those linked to the asset.

| Remove terms from an asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val column = Column.removeTerms(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME",  // (3)     listOf(  // (4)         GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6")))  ``` |

1. Use the `removeTerms()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to remove the terms all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset from which to remove the terms.
4. A list of term references. Each reference *must* be to a term by its GUID. At the completion of this code, the terms in this list will be *removed from* those linked to the asset.

Requires multiple steps through the raw REST API

1. [Retrieve the existing asset](../../advanced-examples/read/).
2. Iterate through the assigned terms that exist on the asset to build up a temporary list, excluding any that you want to remove.
3. Send through the resulting reduced list, as in the example below.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Column", // (2)       "attributes": {         "name": "CUSTOMER_NAME", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", // (4)         "meanings": [ // (5)           { ... }, // (6)           {             "typeName": "AtlasGlossaryTerm",             "guid": "b267858d-8316-4c41-a56a-6e9b840cef4a"           }         ]       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. Provide the details of the terms to assign to the asset in the `meanings` array. Each reference to a term must include the `typeName` (always `AtlasGlossaryTerm`) and `guid` for the term.
6. Remember you will need to first retrieve the existing asset to retrieve the reduced set of term assignemnts that should remain, which should not include the ones you want to remove.

Remove all terms from an asset[¶](#remove-all-terms-from-an-asset "Permanent link")
-----------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove all terms linked to an asset:

dbt

Java

Python

Kotlin

Raw REST API

| Remove all terms from an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` models:   - name: ORDER_ANALYSIS # (1)     columns:       - name: CUSTOMER_NAME # (2)         meta:           atlan:             termGUIDs: [] # (3)  ``` |

1. You must of course give the name of the object.
2. If you are applying the terms to a column, you need to give the name of the column as well.
3. If you send an explicit empty list (`[]`) as the list of GUIDs this will remove all terms from the asset.

| Remove all terms from an asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Column column = Column.replaceTerms( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", // (3)     "CUSTOMER_NAME", // (4)     null); // (5)  ``` |

1. Use the `replaceTerms()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to replace (remove) the terms on the asset all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset from which to remove the terms.
4. The human\-readable name of the asset from which to remove the terms.
5. A `null` as the list of term references. This will replace any existing terms on the asset with no terms at all — in other words, it will remove all terms from the asset.

| Remove all terms from an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm, Column  client = AtlanClient() column = client.asset.replace_terms( # (1)     asset_type=Column, # (2)     qualified_name="default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", # (3)     terms=[] # (4) )  ``` |

1. Use the `asset.replace_terms()` method, which will construct the necessary
request and call the necessary API(s) to replace (remove) the terms on the asset all\-in\-one.
2. The `asset_type` of the asset on which to remove the terms.
3. The `qualified_name` of the asset on which to remove the terms.
    * Note: Alternatively the parameter name `guid` could have been
    specified along with the `guid` of the asset on which to remove the terms.
4. An empty list of term references. This will replace any existing terms
on the asset with no terms at all — in other words, it will remove all terms from the asset.

| Remove all terms from an asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val column = Column.replaceTerms(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME",  // (3)     "CUSTOMER_NAME",  // (4)     null)  // (5)  ``` |

1. Use the `replaceTerms()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request and call the necessary API(s) to replace (remove) the terms on the asset all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the asset from which to remove the terms.
4. The human\-readable name of the asset from which to remove the terms.
5. A `null` as the list of term references. This will replace any existing terms on the asset with no terms at all — in other words, it will remove all terms from the asset.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Column", // (2)       "attributes": {         "name": "CUSTOMER_NAME", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DATA/FOOD_BEVERAGE/ORDER_ANALYSIS/CUSTOMER_NAME", // (4)         "meanings": [] // (5)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. To remove all terms, send an empty array (`[]`) for the `meanings` array.

When creating an asset[¶](#when-creating-an-asset "Permanent link")
-------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To link terms when creating an asset:

dbt

Java

Python

Kotlin

Raw REST API

| Link terms when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` models:   - name: ORDER_ANALYSIS # (1)     columns:       - name: CUSTOMER_NAME # (2)         meta:           atlan:             termGUIDs: # (3)               - "b4113341-251b-4adc-81fb-2420501c30e6"               - "b267858d-8316-4c41-a56a-6e9b840cef4a"             termQualifiedNames: # (4)               - "SepizCqzgygmdTvVk5a9i@yJuFhD0LiU1QDl5YwXiQy"               - "BfoxTP4209kT5zZFKPKqZ@yJuFhD0LiU1QDl5YwXiQy"             termNames: # (5)               - "Customer Name"               - "Data Governance@Full Name"               - "Finance@Marketing Budget"  ``` |

1. You must of course give the name of the object.
2. If you are applying the terms to a column, you need to give the name of the column as well.
3. You can either specify the terms as a list of GUIDs (each GUID refers to one term).
4. Or you can specify the terms as a list of qualifiedNames.
5. Or you can specify the terms as a list of human\-readable names.

    Handling duplicate term names

    You can disambiguate terms with the same name across different glossaries using the format `glossaryName@termName` (e.g., `"Data Governance@Full Name"`).

    Use `glossaryName@termName` in `termNames`, when term names aren't unique across glossaries.

| Link terms when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` S3Object s3Object = S3Object     .creator("sample-file.csv", // (1)         S3Bucket.refByGuid("8aa53eb2-3630-4de0-81e1-d57922f43336"),         "aws::test:samples-bucket:a/prefix/sample-file.csv")     .assignedTerm(GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6")) // (2)     .assignedTerm(GlossaryTerm.refByGuid("b267858d-8316-4c41-a56a-6e9b840cef4a"))     .build(); AssetMutationResponse response = s3Object.save(client); // (3) assert response.getCreatedAssets().size() == 1; // (4) assert response.getUpdatedAssets().size() == 3; // (5)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
2. Directly chain the `assignedTerm` enrichment methods to add the linked terms. Note that we only need a `Reference` to the linked term, in these examples the type and GUID of the term.
3. Call the `save()` method to actually create the asset (with its linked terms). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
4. The response will include that single asset that was created...
5. ... and the two linked terms that were updated, along with the bucket the object is created within.

| Link terms when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossaryTerm, S3Object  client = AtlanClient() s3_object = S3Object.creator( # (1)     name="sample-file.csv",     connection_qualified_name = "default/s3/1661068484",     aws_arn="aws::test:samples-bucket:a/prefix/sample-file.csv") s3_object.assigned_terms = [AtlasGlossaryTerm.ref_by_guid("b4113341-251b-4adc-81fb-2420501c30e6"), # (2)                    AtlasGlossaryTerm.ref_by_guid("b267858d-8316-4c41-a56a-6e9b840cef4a")] response = client.asset.save(s3_object) # (3) assert (s3_objects_added := response.assets_created(S3Object)) assert len(s3_objects_added) == 1 # (4) assert (terms_updated := response.assets_updated(AtlasGlossaryTerm)) assert len(terms_updated) == 2 # (5)  ``` |

1. Use the `create()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
2. Provide a `list` of the terms to be linked to the `asset`. Note that we only need a Reference to the linked term, in these examples the type and GUID of the term.
3. Call the `save()` method to actually create the asset (with its linked terms).
4. The response will include the single asset created
5. ... and the two linked terms that were updated.

| Link terms when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val s3Object = S3Object     .creator("sample-file.csv",  // (1)         S3Bucket.refByGuid("8aa53eb2-3630-4de0-81e1-d57922f43336"),         "aws::test:samples-bucket:a/prefix/sample-file.csv")     .assignedTerm(GlossaryTerm.refByGuid("b4113341-251b-4adc-81fb-2420501c30e6"))  // (2)     .assignedTerm(GlossaryTerm.refByGuid("b267858d-8316-4c41-a56a-6e9b840cef4a"))     .build() val response = s3Object.save(client)  // (3) assert(response.createdAssets.size == 1)  // (4) assert(response.updatedAssets.size == 3)  // (5)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
2. Directly chain the `assignedTerm` enrichment methods to add the linked terms. Note that we only need a `Reference` to the linked term, in these examples the type and GUID of the term.
3. Call the `save()` method to actually create the asset (with its linked terms). Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
4. The response will include that single asset that was created...
5. ... and the two linked terms that were updated, along with the bucket the object is created within.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [ // (1)     {       "typeName": "S3Object", // (2)       "attributes": {         "name": "sample-file.csv", // (3)         "qualifiedName": "default/s3/1661068484/aws::test:samples-bucket:a/prefix/sample-file.csv", // (4)         "awsArn": "aws::test:samples-bucket:a/prefix/sample-file.csv",         "meanings": [ // (5)           {             "typeName": "AtlasGlossaryTerm",             "guid": "b4113341-251b-4adc-81fb-2420501c30e6"           },           {             "typeName": "AtlasGlossaryTerm",             "guid": "b267858d-8316-4c41-a56a-6e9b840cef4a"           }         ]       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. Provide the details of the terms to assign to the asset in the `meanings` array. Each reference to a term must include the `typeName` (always `AtlasGlossaryTerm`) and `guid` for the term. After the completion of this code, only the terms in this list will be assigned to the asset.

---

2022\-08\-222025\-06\-25

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/term-assignment/) to provide us with more information. 

Back to top

[Previous Change custom metadata](../custom-metadata/) [Next Link domains to assets](../domain-assignment/) 

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

