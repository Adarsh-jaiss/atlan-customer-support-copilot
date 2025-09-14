# Source URL
https://developer.atlan.com/snippets/access/policies/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/access/policies/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage policies in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage policies in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/access/policies/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Managing policies - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/access/policies/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage policies in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/access/policies/index.png
meta-twitter:title: Managing policies - Developer
meta-viewport: width=device-width,initial-scale=1
title: Managing policies - Developer
-->

[Skip to content](#policies) Developer Managing policies Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (DELETE)](../../../endpoints/#tag:apimetaentitybulk-delete)[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

Policies[¶](#policies "Permanent link")
=======================================

Policies control which assets users can access, and what operations they can carry out on those assets.

Retrieve policies[¶](#retrieve-policies "Permanent link")
---------------------------------------------------------

### From a persona[¶](#from-a-persona "Permanent link")

[0\.0\.15](https://github.com/atlanhq/atlan-go/releases/tag/0.0.15 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve a policy from a persona, you need to search for the policy by some characteristic:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve policies | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` AuthPolicy.select(client) // (1)     .where(AuthPolicy.POLICY_CATEGORY.eq("persona"))     .where(AuthPolicy.POLICY_RESOURCES.startsWith("entity:default/snowflake/1696324735")) // (2)     .includeOnResults(AuthPolicy.NAME) // (3)     .includeOnResults(AuthPolicy.ACCESS_CONTROL)     .includeOnResults(AuthPolicy.POLICY_RESOURCES)     .includeOnResults(AuthPolicy.CONNECTION_QUALIFIED_NAME)     .includeOnResults(AuthPolicy.POLICY_TYPE)     .includeOnResults(AuthPolicy.POLICY_SUB_CATEGORY)     .includeOnRelations(IAccessControl.IS_ACCESS_CONTROL_ENABLED) // (4)     .includeOnRelations(Asset.NAME)     .stream() // (5)     .filter(a -> a instanceof AuthPolicy)     .forEach(p -> { // (6)         AuthPolicy policy = (AuthPolicy) p;     });  ``` |

1. Start by selecting policies, here using a FluentSearch\-based approach. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically in this example any assets in a particular snowflake connection).
3. Include details about the policy itself in each search result, such as the access control mechanism the policy is defined within (the persona).
4. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that persona is enabled or not.
5. You can then directly stream the results of the search.
6. For each result of the search (itself an AuthPolicy), you can then decide what to do with it.

| Retrieve policies | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` from typing import cast  from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AuthPolicy, AccessControl from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient() request = (     FluentSearch()     .where(FluentSearch.asset_type(AuthPolicy))  # (1)     .where(AuthPolicy.POLICY_CATEGORY.eq("persona"))     .where(AuthPolicy.POLICY_RESOURCES.startswith("entity:default/snowflake/1696324735"))  # (2)     .include_on_results(AuthPolicy.NAME)  # (3)     .include_on_results(AuthPolicy.ACCESS_CONTROL)     .include_on_results(AuthPolicy.POLICY_RESOURCES)     .include_on_results(AuthPolicy.CONNECTION_QUALIFIED_NAME)     .include_on_results(AuthPolicy.POLICY_TYPE)     .include_on_results(AuthPolicy.POLICY_SUB_CATEGORY)     .include_on_relations(AccessControl.IS_ACCESS_CONTROL_ENABLED)  # (4)     .include_on_relations(AccessControl.NAME) ).to_request()  # (5) response = client.asset.search(request)  # (6) for p in response:  # (7)     policy = cast(AuthPolicy, p)  ``` |

1. Start by selecting policies, here using a FluentSearch\-based approach.
2. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically in this example any assets in a particular snowflake connection).
3. Include details about the policy itself in each search result, such as the access control mechanism the policy is defined within (the persona).
4. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that persona is enabled or not.
5. You can then translate the FluentSearch into a search request.
6. Run a search using the search request.
7. For each result of the search (itself an AuthPolicy), you can then decide what to do with it.

| Retrieve policies | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` AuthPolicy.select(client) // (1)     .where(AuthPolicy.POLICY_CATEGORY.eq("persona"))     .where(AuthPolicy.POLICY_RESOURCES.startsWith("entity:default/snowflake/1696324735")) // (2)     .includeOnResults(AuthPolicy.NAME) // (3)     .includeOnResults(AuthPolicy.ACCESS_CONTROL)     .includeOnResults(AuthPolicy.POLICY_RESOURCES)     .includeOnResults(AuthPolicy.CONNECTION_QUALIFIED_NAME)     .includeOnResults(AuthPolicy.POLICY_TYPE)     .includeOnResults(AuthPolicy.POLICY_SUB_CATEGORY)     .includeOnRelations(IAccessControl.IS_ACCESS_CONTROL_ENABLED) // (4)     .includeOnRelations(Asset.NAME)     .stream() // (5)     .filter { it is AuthPolicy }     .forEach { // (6)         val policy = it as AuthPolicy     }  ``` |

1. Start by selecting policies, here using a FluentSearch\-based approach. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically in this example any assets in a particular snowflake connection).
3. Include details about the policy itself in each search result, such as the access control mechanism the policy is defined within (the persona).
4. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that persona is enabled or not.
5. You can then directly stream the results of the search.
6. For each result of the search (itself an AuthPolicy), you can then decide what to do with it.

| Retrieve policies | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` response, atlanErr := assets.NewFluentSearch().     AssetType("AuthPolicy"). // (1)     Where(ctx.AuthPolicy.POLICY_CATEGORY.Eq("persona")).     Where(ctx.AuthPolicy.POLICY_RESOURCES.StartsWith("entity:default/snowflake/1696324735", nil)). // (2)     IncludeOnResults(ctx.AuthPolicy.NAME.GetAtlanFieldName()). // (3)     IncludeOnResults(ctx.AuthPolicy.ACCESS_CONTROL.GetAtlanFieldName()).     IncludeOnResults(ctx.AuthPolicy.POLICY_RESOURCES.GetAtlanFieldName()).     IncludeOnResults(ctx.AuthPolicy.CONNECTION_QUALIFIED_NAME.GetAtlanFieldName()).     IncludeOnResults(ctx.AuthPolicy.POLICY_TYPE.GetAtlanFieldName()).     IncludeOnResults(ctx.AuthPolicy.POLICY_SUB_CATEGORY.GetAtlanFieldName()).     IncludeOnRelations(ctx.AccessControl.IS_ACCESS_CONTROL_ENABLED.GetAtlanFieldName()). // (4)     IncludeOnRelations(ctx.AccessControl.NAME.GetAtlanFieldName()).     Execute() // (5) if atlanErr != nil {     logger.Log.Errorf("Error: %v", atlanErr) } for _, entity := range response[0].Entities { // (6)     if entity.TypeName != nil && *entity.TypeName == "AuthPolicy" {         // Do something with the policy     } }  ``` |

1. Start by selecting policies, here using a FluentSearch\-based approach.
2. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically in this example any assets in a particular snowflake connection).
3. Include details about the policy itself in each search result, such as the access control mechanism the policy is defined within (the persona).
4. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that persona is enabled or not.
5. Run a search using the search request.
6. For each result of the search (itself an AuthPolicy), you can then decide what to do with it.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": {         "filter": [           {             "term": {               "__typeName.keyword": {                 "value": "AuthPolicy"               }             }           },           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": {               "policyCategory": {                 "value": "persona"               }             }           },           {             "prefix": {               "policyResources": { // (2)                 "value": "entity:default/snowflake/1696324735"               }             }           }         ]       }     },     "sort": [       {         "__guid": {           "order": "asc"         }       }     ],     "track_total_hits": true   },   "attributes": [     "name",     "accessControl", // (3)     "policyResources",     "connectionQualifiedName",     "policyType",     "policySubCategory"   ],   "relationAttributes": [ // (4)     "isAccessControlEnabled",     "name"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Start by running a search for policies.
2. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls.
3. Include details about the policy itself in each search result, such as the `accessControl` mechanism the policy is defined within (the persona).
4. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that persona is enabled or not.

### From a purpose[¶](#from-a-purpose "Permanent link")

[0\.0\.15](https://github.com/atlanhq/atlan-go/releases/tag/0.0.15 "Minimum version")[6\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Similarly, to retrieve a policy from a purpose you need to search for the policy by some characteristic:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve policies | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` String tagId = client.getAtlanTagCache().getIdForName("Issue"); // (1) AuthPolicy.select(client) // (2)     .where(AuthPolicy.POLICY_CATEGORY.eq("purpose"))     .where(AuthPolicy.POLICY_RESOURCES.startsWith("tag:" + tagId)) // (3)     .includeOnResults(AuthPolicy.NAME) // (4)     .includeOnResults(AuthPolicy.ACCESS_CONTROL)     .includeOnResults(AuthPolicy.POLICY_RESOURCES)     .includeOnRelations(IAccessControl.IS_ACCESS_CONTROL_ENABLED) // (5)     .includeOnRelations(Asset.NAME)     .stream() // (6)     .filter(a -> a instanceof AuthPolicy)     .forEach(p -> { // (7)         AuthPolicy policy = (AuthPolicy) p;     });  ``` |

1. Since purposes work around Atlan tags, you may first want to retrieve the tag of interest (you need its internal ID rather than human\-readable name).
2. Start by selecting policies, here using a FluentSearch\-based approach. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically in this example the tag we retrieved earlier).
4. Include details about the policy itself in each search result, such as the access control mechanism the policy is defined within (the purpose).
5. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that purpose is enabled or not.
6. You can then directly stream the results of the search.
7. For each result of the search (itself an AuthPolicy), you can then decide what to do with it.

| Retrieve policies | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` from typing import cast  from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AuthPolicy, AccessControl from pyatlan.model.fluent_search import FluentSearch  client = AtlanClient() tag_id = client.atlan_tag_cache.get_id_for_name("Issue")  # (1) request = (     FluentSearch()     .where(FluentSearch.asset_type(AuthPolicy))  # (2)     .where(AuthPolicy.POLICY_CATEGORY.eq("purpose"))     .where(AuthPolicy.POLICY_RESOURCES.startswith(f"tag:{tag_id}"))  # (3)     .include_on_results(AuthPolicy.NAME)  # (4)     .include_on_results(AuthPolicy.ACCESS_CONTROL)     .include_on_results(AuthPolicy.POLICY_RESOURCES)     .include_on_relations(AccessControl.IS_ACCESS_CONTROL_ENABLED)  # (5)     .include_on_relations(AccessControl.NAME) ).to_request()  # (6) response = client.asset.search(request)  # (7) for p in response:  # (8)     policy = cast(AuthPolicy, p)  ``` |

1. Since purposes work around Atlan tags, you may first want to retrieve the tag of interest (you need its internal ID rather than human\-readable name).
2. Start by selecting policies, here using a FluentSearch\-based approach.
3. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically in this example the tag we retrieved earlier).
4. Include details about the policy itself in each search result, such as the access control mechanism the policy is defined within (the purpose).
5. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that purpose is enabled or not.
6. You can then translate the FluentSearch into a search request.
7. Run a search using the search request.
8. For each result of the search (itself an AuthPolicy), you can then decide what to do with it.

| Retrieve policies | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` val tagId = client.atlanTagCache.getIdForName("Issue") // (1) AuthPolicy.select(client) // (2)     .where(AuthPolicy.POLICY_CATEGORY.eq("purpose"))     .where(AuthPolicy.POLICY_RESOURCES.startsWith("tag:$tagId")) // (3)     .includeOnResults(AuthPolicy.NAME) // (4)     .includeOnResults(AuthPolicy.ACCESS_CONTROL)     .includeOnResults(AuthPolicy.POLICY_RESOURCES)     .includeOnRelations(IAccessControl.IS_ACCESS_CONTROL_ENABLED) // (5)     .includeOnRelations(Asset.NAME)     .stream() // (6)     .filter { it is AuthPolicy }     .forEach { // (7)         val policy = it as AuthPolicy     }  ``` |

1. Since purposes work around Atlan tags, you may first want to retrieve the tag of interest (you need its internal ID rather than human\-readable name).
2. Start by selecting policies, here using a FluentSearch\-based approach. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically in this example the tag we retrieved earlier).
4. Include details about the policy itself in each search result, such as the access control mechanism the policy is defined within (the purpose).
5. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that purpose is enabled or not.
6. You can then directly stream the results of the search.
7. For each result of the search (itself an AuthPolicy), you can then decide what to do with it.

| Retrieve policies | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` tagID, _ := assets.GetAtlanTagIDForName("Issue") // (1) response, atlanErr := assets.NewFluentSearch().     AssetType("AuthPolicy"). // (2)     Where(ctx.AuthPolicy.POLICY_CATEGORY.Eq("purpose")).     Where(ctx.AuthPolicy.POLICY_RESOURCES.StartsWith("tag:"+tagID, nil)). // (3)     IncludeOnResults(ctx.AuthPolicy.NAME.GetAtlanFieldName()). // (4)     IncludeOnResults(ctx.AuthPolicy.ACCESS_CONTROL.GetAtlanFieldName()).     IncludeOnResults(ctx.AuthPolicy.POLICY_RESOURCES.GetAtlanFieldName()).     IncludeOnRelations(ctx.AccessControl.IS_ACCESS_CONTROL_ENABLED.GetAtlanFieldName()). // (5)     IncludeOnRelations(ctx.AccessControl.NAME.GetAtlanFieldName()).     Execute() // (6) if atlanErr != nil {     logger.Log.Errorf("Error: %v", atlanErr) } for _, entity := range response[0].Entities { // (7)     if entity.TypeName != nil && *entity.TypeName == "AuthPolicy" {         // Do something with the Policy     } }  ``` |

1. Since purposes work around Atlan tags, you may first want to retrieve the tag of interest (you need its internal ID rather than human\-readable name).
2. Start by selecting policies, here using a FluentSearch\-based approach.
3. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically in this example the tag we retrieved earlier).
4. Include details about the policy itself in each search result, such as the access control mechanism the policy is defined within (the purpose).
5. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that purpose is enabled or not.
6. Run a search using the search request.
7. For each result of the search (itself an AuthPolicy), you can then decide what to do with it.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 ``` | ``` {   "dsl": { // (1)     "query": {       "bool": {         "filter": [           {             "term": {               "__typeName.keyword": {                 "value": "AuthPolicy"               }             }           },           {             "term": {               "__state": {                 "value": "ACTIVE"               }             }           },           {             "term": {               "policyCategory": {                 "value": "purpose"               }             }           },           {             "prefix": {               "policyResources": { // (2)                 "value": "tag:RRbkpEJKNC4qsbKB7fKFNN"               }             }           }         ]       }     },     "sort": [       {         "__guid": {           "order": "asc"         }       }     ],     "track_total_hits": true   },   "attributes": [ // (4)     "name",     "accessControl",     "policyResources",     "policyCategory",     "policySubCategory"   ],   "relationAttributes": [     "isAccessControlEnabled",     "name"   ],   "suppressLogs": true,   "showSearchScore": false,   "excludeMeanings": false,   "excludeClassifications": false }  ``` |

1. Start by running a search for policies.
2. You can select the policy by whatever you like, in this example we are selecting based on the resources it controls (specifically via the tag defined as part of the purpose). Note that the tag needs to be given as its internal ID, not the human\-readable name.
3. Include details about the policy itself in each search result, such as the `accessControl` mechanism the policy is defined within (the purpose).
4. Include all the attributes you want about the access control mechanism on the relations of the search results. Here we are including the name of and whether that purpose is enabled or not.

Update policies[¶](#update-policies "Permanent link")
-----------------------------------------------------

Different update approach from most assets

Unlike most assets, to update policies you should first retrieve the existing policy and then update it in its entirety. You can do this by either retrieving the entire policy asset by its GUID (if you know it), or by retrieving the policy using the instructions above under [Retrieve policies](#retrieve-policies). You **must** request *at least* the attributes defined in that section on each policy to be able to update the policy.

[0\.0\.15](https://github.com/atlanhq/atlan-go/releases/tag/0.0.15 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To update an existing policies, once you have retrieved it:

Java

Python

Kotlin

Go

Raw REST API

| Update an existing policy | |
| --- | --- |
| ``` 14 15 16 17 ``` | ``` AuthPolicy policy = policy.toBuilder() // (1)     .description("Revised explanation about what this policy does.") // (2)     .build(); // (3) AssetMutationResponse response = policy.save(client); // (4)  ``` |

1. Assuming you have already retrieved the policy you want to update (`policy` in this example), you can turn it into a mutable object using `toBuilder()`.
2. You can then apply any updates you want to the policy. These will either overwrite (where only a single value is allowed, such as `description`) or append to the existing values defined in the policy.
3. Build up your changes.
4. You can then save the revised policy back to Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update an existing policy | |
| --- | --- |
| ``` 22 23 24 ``` | ``` policy.policy_type = AuthPolicyType.ALLOW  # (1) policy.policy_actions = [PersonaMetadataAction.READ, PersonaMetadataAction.UPDATE, PersonaMetadataAction.CREATE, PersonaMetadataAction.DELETE]  # (2) client.asset.save(policy)  # (3)  ``` |

1. Assuming you have already retrieved the policy you want to update (`policy` in this example), you can directly modify its attributes, such as `policy_type`.
2. You can then apply updates to the policy by replacing the existing values with the new ones. This overwrites the previous values for attributes like `policy_actions`.
3. You can then save the revised policy back to Atlan.

| Update an existing policy | |
| --- | --- |
| ``` 14 15 16 17 ``` | ``` val toUpdate = policy.toBuilder() // (1)     .description("Revised explanation about what this policy does.") // (2)     .build() // (3) val response = toUpdate.save(client) // (4)  ``` |

1. Assuming you have already retrieved the policy you want to update (`policy` in this example), you can turn it into a mutable object using `toBuilder()`.
2. You can then apply any updates you want to the policy. These will either overwrite (where only a single value is allowed, such as `description`) or append to the existing values defined in the policy.
3. Build up your changes.
4. You can then save the revised policy back to Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Update an existing policy | |
| --- | --- |
| ``` 17 18 19 ``` | ``` entity.PolicyType = &atlan.AuthPolicyTypeAllow // (1) entity.PolicyActions = &[]string{atlan.PersonaMetadataActionRead.Name, atlan.PersonaMetadataActionUpdate.Name, atlan.PersonaMetadataActionDelete.Name, atlan.PersonaMetadataActionCreate.Name} // (2) assets.Save(&entity) // (3)  ``` |

1. Assuming you have already retrieved the policy you want to update (`entity` in this example), you can directly modify its attributes, such as `PolicyType`.
2. You can then apply updates to the policy by replacing the existing values with the new ones. This overwrites the previous values for attributes like `PolicyActions`.
3. You can then Save the revised policy back to Atlan.

Multiple API calls required

1. You will need to first [retrieve the policy](#retrieve-policies) you want to update.
2. You can then replace any values in the response payload for that policy and `POST` the revised payload to `/api/meta/entity/bulk`.

Remove policies[¶](#remove-policies "Permanent link")
-----------------------------------------------------

To remove a policy, you need only [delete it as you would any other asset](../../advanced-examples/delete/).

### From a persona[¶](#from-a-persona_1 "Permanent link")

[0\.0\.15](https://github.com/atlanhq/atlan-go/releases/tag/0.0.15 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To find the GUID of a specific policy in a persona:

Java

Python

Kotlin

Go

Raw REST API

| Find a persona policy's GUID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` List<Persona> list = Persona.findByName(client, "Data Assets"); // (1) Persona persona = Persona.get(client, list.get(0).getGuid(), true); // (2) for (AuthPolicy policy : persona.getPolicies()) { // (3)     log.info("Policy {} has guid = {}",              policy.getDisplayText(), // (4)              policy.getGuid()); // (5) }  ``` |

1. If you already have the persona or its GUID or qualifiedName, you can simply use it directly. This example reuses the search by name to obtain it. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Once you have the minimal information about the persona, you may still need to retrieve the full persona itself (to ensure you have all of its policies and their inner details). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You can then iterate through these policies...
4. ...and check each policy's `displayText` for the name that's been given to the policy.
5. ...and retrieve each policy's `guid` to be able to individually delete the appropriate policy.

| Find a persona policy's GUID | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Persona  client = AtlanClient() result = client.asset.find_personas_by_name("Data Assets")  # (1) persona = client.asset.get_by_guid(result[0].guid, asset_type=Persona)  # (2) for policy in persona.policies:  # (3)     print(         f"Policy {policy.display_text} has guid = {policy.guid}"  # (4)     )  ``` |

1. If you already have the persona or its GUID or qualified\_name, you can simply use it directly. This example reuses the search by name to obtain it.
2. Once you have the minimal information about the persona, you may still need to retrieve the full persona itself (to ensure you have all of its policies and their inner details).
3. You can then iterate through these policies...
4. ...and check each policy's `display_text` for the name that's been given to the policy, and retrieve each policy's `guid` to be able to individually delete the appropriate policy.

| Find a persona policy's GUID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val list = Persona.findByName(client, "Data Assets") // (1) val persona = Persona.get(client, list[0].getGuid(), true) // (2) for (policy in persona.policies) { // (3)     log.info {         "Policy ${policy.displayText} has guid = ${policy.guid}"     } // (4) }  ``` |

1. If you already have the persona or its GUID or qualifiedName, you can simply use it directly. This example reuses the search by name to obtain it. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Once you have the minimal information about the persona, you may still need to retrieve the full persona itself (to ensure you have all of its policies and their inner details). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. You can then iterate through these policies...
4. ...and check each policy's `displayText` for the name that's been given to the policy and each policy's `guid` to be able to individually delete the appropriate policy.

| Find a persona policy's GUID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` PersonaName := "Data Assets" result, atlanErr := assets.FindPersonasByName(PersonaName) // (1) if atlanErr != nil {     logger.Log.Errorf("Error: %v", atlanErr) } persona, _ := assets.GetByGuid[*assets.Persona](*result.Entities[0].Guid) // (2) for _, policy := range *persona.Policies { // (3)     fmt.Printf("Policy %v has guid = %v", *policy.DisplayName, *policy.Guid) // (4) }  ``` |

1. If you already have the persona or its GUID or qualified\_name, you can simply use it directly. This example reuses the search by name to obtain it.
2. Once you have the minimal information about the persona, you may still need to retrieve the full persona itself (to ensure you have all of its policies and their inner details).
3. You can then iterate through these policies...
4. ...and check each policy's `DisplayName` for the name that's been given to the policy, and retrieve each policy's `Guid` to be able to individually delete the appropriate policy.

Multiple API calls required

1. You will need to first [run a search for all personas with a given name](../personas/#retrieve-a-persona).
2. You can then [retrieve the full persona by its GUID](../../advanced-examples/read/#by-guid), to see all of its policies and their details.
3. You can then iterate through those details to see the `displayText` for the name that's been given to each policy, and retrieve each policy's `guid` to be able to individually delete the appropriate policy.

### From a purpose[¶](#from-a-purpose_1 "Permanent link")

[0\.0\.15](https://github.com/atlanhq/atlan-go/releases/tag/0.0.15 "Minimum version")[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To find the GUID of a specific policy in a purpose:

Java

Python

Kotlin

Go

Raw REST API

| Find a purpose policy's GUID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` List<Purpose> list = Purpose.findByName(client, "Known Issues"); // (1) Purpose purpose = Purpose.get(client, list.get(0).getGuid(), true); // (2) for (AuthPolicy policy : purpose.getPolicies()) { // (3)     log.info("Policy {} has guid = {}",              policy.getDisplayText(), // (4)              policy.getGuid()); // (5) }  ``` |

1. If you already have the purpose or its GUID or qualifiedName, you can simply use it directly. This example reuses the search by name to obtain it. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Once you have the minimal information about the purpose, you may still need to retrieve the full purpose itself (to ensure you have all of its policies and their inner details). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. You can then iterate through these policies...
4. ...and check each policy's `displayText` for the name that's been given to the policy.
5. ...and retrieve each policy's `guid` to be able to individually delete the appropriate policy.

| Find a purpose policy's GUID | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Purpose  client = AtlanClient() result = client.asset.find_purposes_by_name("Data Assets")  # (1) purpose = client.asset.get_by_guid(result[0].guid, asset_type=Purpose)  # (2) for policy in purpose.policies:  # (3)     print(         f"Policy {policy.display_text} has guid = {policy.guid}"  # (4)     )  ``` |

1. If you already have the purpose or its GUID or qualified\_name, you can simply use it directly. This example reuses the search by name to obtain it.
2. Once you have the minimal information about the purpose, you may still need to retrieve the full purpose itself (to ensure you have all of its policies and their inner details).
3. You can then iterate through these policies...
4. ...and check each policy's `display_text` for the name that's been given to the policy, and retrieve each policy's `guid` to be able to individually delete the appropriate policy.

| Find a purpose policy's GUID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val list = Purpose.findByName(client, "Known Issues") // (1) val purpose = Purpose.get(client, list[0].guid, true) // (2) for (policy in purpose.policies) { // (3)     log.info {         "Policy ${policy.displayText} has guid = ${policy.guid}"     } // (4) }  ``` |

1. If you already have the purpose or its GUID or qualifiedName, you can simply use it directly. This example reuses the search by name to obtain it. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Once you have the minimal information about the purpose, you may still need to retrieve the full purpose itself (to ensure you have all of its policies and their inner details). Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. You can then iterate through these policies...
4. ...and check each policy's `displayText` for the name that's been given to the policy, and retrieve each policy's `guid` to be able to individually delete the appropriate policy.

| Find a purpose policy's GUID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` PurposeName := "Data Assets" result, atlanErr := assets.FindPurposesByName(PurposeName) // (1) if atlanErr != nil {     logger.Log.Errorf("Error: %v", atlanErr) } purpose, _ := assets.GetByGuid[*assets.Purpose](*result.Entities[0].Guid) // (2) for _, policy := range *purpose.Policies { // (3)     fmt.Printf("Policy %v has guid = %v\n", *policy.DisplayName, *policy.Guid) // (4) }  ``` |

1. If you already have the purpose or its GUID or qualifiedName, you can simply use it directly. This example reuses the search by name to obtain it.
2. Once you have the minimal information about the purpose, you may still need to retrieve the full purpose itself (to ensure you have all of its policies and their inner details).
3. You can then iterate through these policies...
4. ...and check each policy's `DisplayName` for the name that's been given to the policy, and retrieve each policy's `Guid` to be able to individually delete the appropriate policy.

Multiple API calls required

1. You will need to first [run a search for all purposes with a given name](../purposes/#retrieve-a-purpose).
2. You can then [retrieve the full purpose by its GUID](../../advanced-examples/read/#by-guid), to see all of its policies and their details.
3. You can then iterate through those details to see the `displayText` for the name that's been given to each policy, and retrieve each policy's `guid` to be able to individually delete the appropriate policy.

---

2023\-11\-132025\-04\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/access/policies/) to provide us with more information. 

Back to top

[Previous Manage purposes](../purposes/) [Next Access events](../events/) 

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

