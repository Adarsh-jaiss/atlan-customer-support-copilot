# Source URL
https://developer.atlan.com/snippets/advanced-examples/history/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/history/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Access and interpret asset history in Atlan, including contextual details and specific changes.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Access and interpret asset history in Atlan, including contextual details and specific changes.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/history.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Viewing the history of an asset - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/history/
meta-twitter:card: summary_large_image
meta-twitter:description: Access and interpret asset history in Atlan, including contextual details and specific changes.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/history.png
meta-twitter:title: Viewing the history of an asset - Developer
meta-viewport: width=device-width,initial-scale=1
title: Viewing the history of an asset - Developer
-->

[Skip to content](#viewing-the-history-of-an-asset) Developer Viewing the history of an asset Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/auditSearch (POST)](../../../endpoints/#tag:apimetaentityauditsearch-post)

Viewing the history of an asset[¶](#viewing-the-history-of-an-asset "Permanent link")
=====================================================================================

Accessing the history of an asset in Atlan is a flexible operation. This also makes it a bit more complex to understand than the other operations. To encapsulate the full flexibility of Atlan's search, the SDK provides a dedicated `AuditSearchRequest` object.

Similar but not identical to searching in general

Atlan's audit log that contains the history of an asset uses Elasticsearch. This makes the approach you use to access history similar to [searching](../../../search/). However, there are differences as the audit log uses a different index than the broader search. If you're feeling brave, feel free to experiment with the more complex search mechanisms outlined in the [searching](../../../search/) section. But this should be sufficient to get you started with accessing asset history.

Build the request[¶](#build-the-request "Permanent link")
---------------------------------------------------------

To retrieve an asset's history in Atlan, you need to define the request. For simplicity, we provide helper methods to retrieve a defined number of entries in reverse\-chronological order (most recent entries first).

### By GUID[¶](#by-guid "Permanent link")

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To request the history of an asset by GUID:

Java

Python

Kotlin

Raw REST API

| Build the query by GUID | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` AuditSearchRequest request = AuditSearchRequest.byGuid( // (1)         client, // (2)         "6fc01478-1263-42ae-b8ca-c4a57da51392", // (3)         10) // (4)     .build(); // (5)  ``` |

1. Create a request for the history of an asset, by its GUID.
2. Because this operation will directly look up the asset's history in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. Specify the GUID of the asset.
4. Specify the amount of history (maximum number of activities). This will be in reverse\-chronological order (most recent entries first).
5. Build the request.

| Build the query by GUID | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` import logging from pyatlan.model.audit import CustomMetadataAttributesAuditDetail from pyatlan.model.assets import Table from pyatlan.model.core import AtlanTag from pyatlan.client.atlan import AtlanClient from pyatlan.client.audit import AuditSearchRequest from pyatlan.model.search import SortItem from pyatlan.model.enums import SortOrder  LOGGER = logging.getLogger(__name__) LOGGER.setLevel(logging.INFO)  client = AtlanClient() request = AuditSearchRequest.by_guid( # (1)     guid="6fc01478-1263-42ae-b8ca-c4a57da51392", # (2)     size=10, # (3)     sort=[SortItem("created", order=SortOrder.DESCENDING)] # (4) )  ``` |

1. Create a request for the history of an asset, by its GUID.
2. Specify the GUID of the asset.
3. (optional) Specify the amount of history (maximum number of activities). Defaults to `10`.
4. (optional) Specify sorting criteria for the results.
By default, it sorts in reverse\-chronological order, with the most recent entries first.

| Build the query by GUID | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val request = AuditSearchRequest.byGuid( // (1)         client, // (2)         "6fc01478-1263-42ae-b8ca-c4a57da51392",  // (3)         10 // (4)     ).build() // (5)  ``` |

1. Create a request for the history of an asset, by its GUID.
2. Because this operation will directly look up the asset's history in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. Specify the GUID of the asset.
4. Specify the amount of history (maximum number of activities). This will be in reverse\-chronological order (most recent entries first).
5. Build the request.

### By qualifiedName[¶](#by-qualifiedname "Permanent link")

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To request the history of an asset by qualifiedName:

Java

Python

Kotlin

Raw REST API

| Build the query by qualifiedName | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` AuditSearchRequest request = AuditSearchRequest.byQualifiedName( // (1)         client, // (2)         Glossary.TYPE_NAME, "FzCMyPR2LxkPFgr8eNGrq", // (3)         10) // (4)     .build(); // (5)  ``` |

1. Create a request for the history of an asset, by its qualifiedName.
2. Because this operation will directly look up the asset's history in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. Specify the type of the asset and qualifiedName of the asset.
4. Specify the amount of history (maximum number of activities). This will be in reverse\-chronological order (most recent entries first).
5. Build the request.

| Build the query by qualifiedName | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` import logging from pyatlan.model.audit import CustomMetadataAttributesAuditDetail from pyatlan.model.assets import Table from pyatlan.model.core import AtlanTag from pyatlan.client.atlan import AtlanClient from pyatlan.client.audit import AuditSearchRequest from pyatlan.model.search import SortItem from pyatlan.model.enums import SortOrder  LOGGER = logging.getLogger(__name__) LOGGER.setLevel(logging.INFO)  client = AtlanClient() request = AuditSearchRequest.by_qualified_name( # (1)     type_name="AtlasGlossary", # (2)     qualified_name="FzCMyPR2LxkPFgr8eNGrq", # (3)     size=10, # (4)     sort=[SortItem("created", order=SortOrder.DESCENDING)]  # (5) )  ``` |

1. Create a request for the history of an asset, by its qualifiedName.
2. Specify the type of the asset
3. Specify the qualifiedName of the asset.
4. (optional) Specify the amount of history (maximum number of activities). Defaults to `10`.
5. (optional) Specify sorting criteria for the results.
By default, it sorts in reverse\-chronological order, with the most recent entries first.

| Build the query by qualifiedName | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val request = AuditSearchRequest.byQualifiedName( // (1)         client, // (2)         Glossary.TYPE_NAME, "FzCMyPR2LxkPFgr8eNGrq",  // (3)         10 // (4)     ).build() // (5)  ``` |

1. Create a request for the history of an asset, by its qualifiedName.
2. Because this operation will directly look up the asset's history in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. Specify the type of the asset and qualifiedName of the asset.
4. Specify the amount of history (maximum number of activities). This will be in reverse\-chronological order (most recent entries first).
5. Build the request.

1. To retrieve history for a specific asset by that asset's qualifiedName, you need to combine several conditions.
2. You need a term query for both conditions.
3. One condition you must provide is for the `entityQualifiedName`, giving the qualifiedName of the asset for which you want to retrieve history.
4. You also need to define the `typeName` of the asset for which you want to retrieve history, when retrieving by qualifiedName.

Run the search[¶](#run-the-search "Permanent link")
---------------------------------------------------

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To now run the search, we call the `search()` method against our request object:

Java

Python

Kotlin

Raw REST API

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` AuditSearchResponse response = request.search(client); log.info(response.getCount()); // (1) List<EntityAudit> results = response.getEntityAudits(); // (2)  ``` |

1. The `getCount()` method gives the total number of activities. Note that this could be smaller than the number requested, if fewer activities have occurred against the asset than the number used in the request.
2. The details of each activity can be accessed through the `getEntityAudits()` method on the response.

| Run the search | |
| --- | --- |
| ``` 17 18 ``` | ``` response = client.audit.search(criteria=request, bulk=False) #(1) LOGGER.info(response.total_count) # (2)  ``` |

1. `client.audit.search()` method takes following parameters:

    * `criteria`: defines the search query to execute the search.
        * `bulk`(**default: False**): specifies whether to execute the search in audit bulk mode for retrieving the history of assets matching the criteria. This mode is optimized for handling large results (more than `10,000`). When enabled (`True`), the results will be reordered based on the creation timestamp to facilitate iterating through large datasets.
        Note

    If the number of results exceeds the predefined threshold
        (`10,000` assets) audit search will be automatically converted into a `bulk` audit search.
2. The `total_count` property gives the total number of activities. Note that this could be smaller than the number requested, if fewer activities have occurred against the asset than the number used in the request.

| Run the search | |
| --- | --- |
| ``` 5 6 7 ``` | ``` val response: AuditSearchResponse = request.search(client) log.info(response.count) // (1) val results = response.entityAudits // (2)  ``` |

1. The `.count` member gives the total number of activities. Note that this could be smaller than the number requested, if fewer activities have occurred against the asset than the number used in the request.
2. The details of each activity can be accessed through the `entityAudits` member on the response.

Review details of each activity[¶](#review-details-of-each-activity "Permanent link")
-------------------------------------------------------------------------------------

Each `EntityAudit` entry contains details of what occurred during an activity.

### Contextual details[¶](#contextual-details "Permanent link")

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

To access contextual details about the activity:

Java

Python

Kotlin

Raw REST API

| Access contextual details about each activity | |
| --- | --- |
| ```  8  9 10 11 12 13 ``` | ``` for (EntityAudit result : results) { // (1)     AuditActionType action = result.getAction(); // (2)     String user = result.getUser(); // (3)     Long when = result.getTimestamp(); // (4)     AuditDetail detail = result.getDetail(); // (5)     ...  ``` |

1. You can then iterate through each activity, in reverse\-chronological order (most recent first).
2. You can access the type of activity through `getAction()`. This will tell you whether attributes were updated on the asset, an Atlan tag was added, custom metadata was changed, and so on.
3. You can access who carried out the activity through `getUser()`. This will give you the username (or API token) that made the change.
4. You can review when the activity occurred through `getTimestamp()`. This gives an epoch\-based time (in milliseconds) for when the activity occurred.
5. You can also review what specifically changed through the activity, using `getDetail()`. More information on what this includes is in the section below.

| Access contextual details about each activity | |
| --- | --- |
| ``` 19 20 21 22 23 ``` | ``` for result in response: # (1)      action = result.action # (2)     user = result.user # (3)      when = result.timestamp # (4)     detail = result.detail # (5)  ``` |

1. You can then iterate through each activity, in reverse\-chronological order (most recent first).
2. You can access the type of activity through the `action` property. This will tell you whether attributes were updated on the asset, an Atlan tag was added, custom metadata was changed, and so on.
3. You can access who carried out the activity through the `user` property. This will give you the username (or API token) that made the change.
4. You can review when the activity occurred through then `timestamp` property. This gives an epoch\-based time (in milliseconds) for when the activity occurred.
5. You can also review what specifically changed through the activity, using the `detail` property. More information on what this includes is in the section below.

| Access contextual details about each activity | |
| --- | --- |
| ```  8  9 10 11 12 13 ``` | ``` for (result in results) { // (1)     val action = result.action // (2)     val user = result.user // (3)     val timestamp = result.timestamp // (4)     val detail = result.detail // (5)     ...  ``` |

1. You can then iterate through each activity, in reverse\-chronological order (most recent first).
2. You can access the type of activity through `.action`. This will tell you whether attributes were updated on the asset, an Atlan tag was added, custom metadata was changed, and so on.
3. You can access who carried out the activity through `.user`. This will give you the username (or API token) that made the change.
4. You can review when the activity occurred through `.timestamp`. This gives an epoch\-based time (in milliseconds) for when the activity occurred.
5. You can also review what specifically changed through the activity, using `.detail`. More information on what this includes is in the section below.

Response contains contextual details

Each object entry in the `entityAudits` portion of the response will contain contextual details about a single activity on the asset.

### Details of the change[¶](#details-of-the-change "Permanent link")

Each `detail` of each record in the activity log tells you the details of what specifically changed through one specific activity. This can be one of three kinds of objects:

| Action | Detail type | Contents |
| --- | --- | --- |
| `ENTITY_UPDATE`, `ENTITY_CREATE` | An asset object (the specific subtype, such as `Column` or `Table`) | What was changed on the asset by the activity. |
| `CLASSIFICATION_ADD`, `CLASSIFICATION_DELETE`, `PROPAGATED_CLASSIFICATION_ADD`, `PROPAGATED_CLASSIFICATION_DELETE` | An Atlan tag object | The Atlan tag that was added or removed. |
| `CUSTOM_METADATA_UPDATE` | A custom metadata object | Which specific custom metadata attributes (and values) were set by the activity. |

[1\.3\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.3.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

For example:

Java

Python

Kotlin

Raw REST API

| View specific changes made by an activity | |
| --- | --- |
| ``` 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 ``` | ``` if (detail instanceof Table) { // (1)     Table table = (Table) detail; // (2)     String description = table.getDescription(); // (3)     Set<String> clearedFields = table.getNullFields(); // (4)     if (clearedFields.contains("description")) {         // (5)     } } if (detail instanceof AtlanTag) { // (6)     AtlanTag tag = (AtlanTag) detail; // (7)     String tagName = tag.getTypeName(); // (8)     if (tagName.equals("PII")) { // (9)         ...     } } if (detail instanceof CustomMetadataAttributesAuditDetail) { // (10)     CustomMetadataAttributesAuditDetail cmad = (CustomMetadataAttributesAuditDetail) detail; // (11)     String cmName = cmad.getTypeName(); // (12)     Map<String, Object> attributes = cmad.getAttributes(); // (13)     if (cmName.equals("RACI") && attributes.get("Responsible").equals("jsmith")) { // (14)         ...     } }  ``` |

1. You can safely type\-check the detailed object. You could generically use `Asset` here instead of `Table`, but if you know the type of asset you've requested the history for then the detailed object should be the same detailed type.
2. Once you've type\-checked it, you can then coerce it.
3. From there you can access any properties. Note that only properties actually set by the activity will have values in this detail object. So in this example, only if the description was actually changed to a new value would the `description` variable now have any content.
4. This also means that if a field was actually *removed* (or cleared) by an activity you won't be able to distinguish that by just attempting to retrieve it. (It will be `null` whether it was removed by the activity or simply wasn't changed by the activity.) To distinguish what was actually *removed* by an activity, you need to use `getNullFields()`. The set returned by this method will contain the names of any fields that were actually *removed* (cleared) by the activity.
5. You can then take whatever action you like if a field was removed (cleared) by checking for its existence within the `getNullFields()` set.
6. You can type\-check the detailed object to see if it is an Atlan tag.
7. Once you've type\-checked it, you can then coerce it.
8. You can access the Atlan tag name using `getTypeName()`.
9. You can then compare this human\-readable Atlan tag name to your expectations to take whatever action you like.
10. You can type\-check the detailed object to see if it details changes to custom metadata.
11. Once you've type\-checked it, you can then coerce it.
12. You can access the name of the custom metadata using `getTypeName()`.
13. You can retrieve which custom metadata attributes were changed using `getAttributes()`. Since the result is a map, it will only contain attributes that were changed. If an attribute was *removed* (cleared) it will have a null value in the map but the name of the attribute will still be a key in the map. If a custom metadata attribute was not changed by the activity, it will not be a key in this map.
14. You can then compare these human\-readable names to your expectations to take whatever action you like.

| View specific changes made by an activity | |
| --- | --- |
| ``` 24 25 26 27 28 29 30 31 32 33 34 35 ``` | ``` if isinstance(detail, Table): # (1)     description = detail.description # (2)     ... # (3) if isinstance(detail, AtlanTag): # (4)     class_name = detail.type_name # (5)     if class_name == "PII": # (6)         ... if isinstance(detail, CustomMetadataAttributesAuditDetail): # (7)     cm_name = detail.type_name # (8)     attributes = detail.attributes # (9)     if cm_name == "RACI" and attributes["Responsible"] == "jsmith": # (10)         ...  ``` |

1. You can safely type\-check the detailed object. You could generically use `Asset` here instead of `Table`, but if you know the type of asset you've requested the history for then the detailed object should be the same detailed type.
2. From there you can access any properties. Note that only properties actually set by the activity will have values in this detail object. So in this example, only if the description was actually changed to a new value would the `description` variable now have any content.
3. You can then take whatever action you like
4. You can type\-check the detailed object to see if it is a 'AtlanTag'.
5. You can access the 'AtlanTag' name using \`type\_name' property.
6. You can then compare this human\-readable Atlan tag name to your expectations to take whatever action you like.
7. You can type\-check the detailed object to see if it details changes to custom metadata.
8. You can access the name of the custom metadata using then `type_name` attribute.
9. You can retrieve which custom metadata attributes were changed using the `attributes` propery. Since the result is a dict, it will only contain attributes that were changed. If an attribute was *removed* (cleared) it will have a null value in the dict but the name of the attribute will still be a key in the map. If a custom metadata attribute was not changed by the activity, it will not be a key in this map.
10. You can then compare these human\-readable names to your expectations to take whatever action you like.

| View specific changes made by an activity | |
| --- | --- |
| ``` 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 ``` | ``` if (detail is Table) { // (1)     val description = detail.description // (2)     val clearedFields = detail.nullFields // (3)     if (clearedFields.contains("description")) {         // (4)     } } if (detail is AtlanTag) { // (5)     val tagName = detail.typeName // (6)     if (tagName == "PII") { // (7)         ...     } } if (detail is CustomMetadataAttributesAuditDetail) { // (8)     val cmName = detail.typeName // (9)     val attributes = detail.attributes // (10)     if (cmName == "RACI" && attributes["Responsible"] == "jsmith") { // (11)         ...     } }  ``` |

1. You can safely type\-check the detailed object. You could generically use `Asset` here instead of `Table`, but if you know the type of asset you've requested the history for then the detailed object should be the same detailed type.
2. From there you can access any properties. Note that only properties actually set by the activity will have values in this detail object. So in this example, only if the description was actually changed to a new value would the `description` variable now have any content.
3. This also means that if a field was actually *removed* (or cleared) by an activity you won't be able to distinguish that by just attempting to retrieve it. (It will be `null` whether it was removed by the activity or simply wasn't changed by the activity.) To distinguish what was actually *removed* by an activity, you need to use `.nullFields`. The set returned by this method will contain the names of any fields that were actually *removed* (cleared) by the activity.
4. You can then take whatever action you like if a field was removed (cleared) by checking for its existence within the `.nullFields` set.
5. You can type\-check the detailed object to see if it is an Atlan tag.
6. You can access the Atlan tag name using `.typeName`.
7. You can then compare this human\-readable Atlan tag name to your expectations to take whatever action you like.
8. You can type\-check the detailed object to see if it details changes to custom metadata.
9. You can access the name of the custom metadata using `.typeName`.
10. You can retrieve which custom metadata attributes were changed using `.attributes`. Since the result is a map, it will only contain attributes that were changed. If an attribute was *removed* (cleared) it will have a null value in the map but the name of the attribute will still be a key in the map. If a custom metadata attribute was not changed by the activity, it will not be a key in this map.
11. You can then compare these human\-readable names to your expectations to take whatever action you like.

You will need to implement your own detection and inference

The key point to note is that the format of the object within the `detail` of each record will vary, depending on the type of activity that occurred. You will therefore need to implement your own logic for detecting and inferring what kind of details are included when retrieving these from a raw API response.

---

2022\-11\-302024\-12\-13

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/history/) to provide us with more information. 

Back to top

[Previous Restore an asset](../restore/) [Next Review accesses of an asset](../../search-logs/) 

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

