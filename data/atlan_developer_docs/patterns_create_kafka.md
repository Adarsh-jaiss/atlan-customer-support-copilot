# Source URL
https://developer.atlan.com/patterns/create/kafka/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/kafka/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on Kafka assets (KafkaTopic, KafkaConsumerGroup).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on Kafka assets (KafkaTopic, KafkaConsumerGroup).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/kafka.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Kafka assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/kafka/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on Kafka assets (KafkaTopic, KafkaConsumerGroup).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/kafka.png
meta-twitter:title: Manage Kafka assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Kafka assets - Developer
-->

[Skip to content](#manage-kafka-assets) Developer Manage Kafka assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage Kafka assets[¶](#manage-kafka-assets "Permanent link")
=============================================================

In general, these should be:

* [Created in top\-down order](../) (connection, then KafkaTopic, then KafkaConsumerGroup)
* Deleted in bottom\-up order (consumer groups, then topics, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ KafkaTopic : contains
  KafkaTopic ||--o{ KafkaConsumerGroup : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Kafka [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as a Kafka connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a Kafka connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "kafka-connection", // (3)         AtlanConnectorType.KAFKA, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later
for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to `KAFKA`.
5. List the workspace roles that should be able to administer the connection
(or null if none). All users with that workspace role (current and future) will be
administrators of the connection. Note that the values here need to be the GUID(s)
of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Kafka connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, KafkaTopic, KafkaConsumerGroup from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="kafka-connection", # (4)     connector_type=AtlanConnectorType.KAFKA, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"] # (8) )  response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to `KAFKA`.
6. List the workspace roles that should be able to administer the connection
(or `None` if none). All users with that workspace role (current and future) will be
administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the qualifiedName for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

| Create a Kafka connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "kafka-connection", // (3)         AtlanConnectorType.KAFKA, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later
for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to `KAFKA`.
5. List the workspace roles that should be able to administer the connection
(or null if none). All users with that workspace role (current and future) will be
administrators of the connection. Note that the values here need to be the GUID(s)
of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "kafka-connection", // (2)         "connectorName": "kafka", // (3)         "qualifiedName": "default/kafka/123456789", // (4)         "category": "eventbus", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `kafka`.
4. The `qualifiedName` should follow the pattern: `default/kafka/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `eventbus`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### KafkaTopic[¶](#kafkatopic "Permanent link")

[2\.2\.2](https://github.com/atlanhq/atlan-python/releases/tag/2.2.2 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [`KafkaTopic`](../../../models/entities/kafkatopic/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `connectionQualifiedName` of the connection for the topic.

Java

Python

Kotlin

Raw REST API

| Create a Kafka topic | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` KafkaTopic kafkaTopic = KafkaTopic.creator( // (1)         "myKafkaTopic", // (2)         connectionQualifiedName) // (3)     .build(); response = kafkaTopic.save(client); // (4) kafkaTopic = response.getResult(kafkaTopic); // (5)  ``` |

1. Build up the minimum request to create a topic.
2. Provide a human\-readable name for your topic.
3. Provide the `qualifiedName` of the Kafka connection.
4. Actually call Atlan to create the topic. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created topic for use in subsequent creation calls.

| Create a Kafka topic | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` kafka_topic = KafkaTopic.creator( # (1)     name="myKafkaTopic", # (2)     connection_qualified_name=connection_qualified_name # (3) ) response = client.asset.save(kafka_topic) # (4) kafka_topic_qualifed_name = response.assets_created(asset_type=KafkaTopic)[0].qualified_name # (5)  ``` |

1. Build up the minimum request to create a topic.
2. Provide a human\-readable name for your topic.
3. Provide the `qualifiedName` of the Kafka connection.
4. Actually call Atlan to create the topic.
5. Retrieve the created topic for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

| Create a Kafka topic | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` var kafkaTopic = KafkaTopic.creator( // (1)         "myKafkaTopic", // (2)         connectionQualifiedName) // (3)     .build() response = kafkaTopic.save(client) // (4) kafkaTopic = response.getResult(kafkaTopic) // (5)  ``` |

1. Build up the minimum request to create a topic.
2. Provide a human\-readable name for your topic.
3. Provide the `qualifiedName` of the Kafka connection.
4. Actually call Atlan to create the topic. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created topic for use in subsequent creation calls.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "typeName": "KafkaTopic", // (1)       "attributes": {         "name": "myKafkaTopic", // (2)         "qualifiedName": "default/kafka/123456789/topic/myKafkaTopic", // (3)         "connectionQualifiedName": "default/kafka/123456789", // (4)         "connectorName": "kafka" // (5)       }     }   ] }  ``` |

1. The `typeName` must be exactly `KafkaTopic`.
2. Human\-readable name for your topic.
3. The `qualifiedName` should follow the pattern: `default/kafka/<epoch>/topic/<name>`,
where `default/kafka/<epoch>` is the `qualifiedName` of the connection
for this topic and `<name>` is the unique name for this topic.
4. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this topic.
5. The `connectorName` must be exactly `kafka`.

### KafkaConsumerGroup[¶](#kafkaconsumergroup "Permanent link")

[2\.2\.2](https://github.com/atlanhq/atlan-python/releases/tag/2.2.2 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [`KafkaConsumerGroup`](../../../models/entities/kafkaconsumergroup/) requires a `name` and a `qualifiedName`. For creation, you also need to
specify the list of `kafkaTopicQualifiedNames` of the topics that will contain the consumer group.

Java

Python

Kotlin

Raw REST API

| Create a Kafka consumer group | |
| --- | --- |
| ``` 17 18 19 20 21 ``` | ``` KafkaConsumerGroup consumerGroup = KafkaConsumerGroup.creatorObj( // (1)         "myKafkaConsumerGroup", // (2)         List.of(kafkaTopic)) // (3)     .build(); response = consumerGroup.save(client); // (4)  ``` |

1. Build up the minimum request to create a consumer group.
2. Provide a human\-readable name for your consumer group.
3. Provide the list of topics for this consumer group.
4. Actually call Atlan to create the consumer group. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a Kafka consumer group | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` consumer_group = KafkaConsumerGroup.creator( # (1)     name="myKafkaConsumerGroup", # (2)     kafka_topic_qualified_names=[kafka_topic_qualified_name], # (3) ) response = client.asset.save(consumer_group) # (4)  ``` |

1. Build up the minimum request to create a consumer group.
2. Provide a human\-readable name for your consumer group.
3. Provide the list of `qualified_names` of the topic for this consumer group.
4. Actually call Atlan to create the consumer group.

| Create a Kafka consumer group | |
| --- | --- |
| ``` 17 18 19 20 21 ``` | ``` val consumerGroup = KafkaConsumerGroup.creatorObj( // (1)         "myKafkaConsumerGroup", // (2)         listOf(kafkaTopic)) // (3)     .build() response = consumerGroup.save(client) // (4)  ``` |

1. Build up the minimum request to create a consumer group.
2. Provide a human\-readable name for your consumer group.
3. Provide the list of topics for this consumer group.
4. Actually call Atlan to create the consumer group. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [     {       "typeName": "KafkaConsumerGroup", // (1)       "attributes": {         "name": "myKafkaConsumerGroup", // (2)         "qualifiedName": "default/kafka/123456789/consumer-group/myKafkaConsumerGroup", // (3)         "connectionQualifiedName": "default/kafka/123456789", // (4)         "connectorName": "kafka", // (5)         "kafkaTopics": [{ // (6)           "typeName": "KafkaTopic", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/kafka/123456789/topic/myKafkaTopic",           }         }],         "kafkaTopicQualifiedNames": ["default/kafka/123456789/topic/myKafkaTopic"], // (9)       }     }   ] }  ``` |

1. The `typeName` must be exactly `KafkaConsumerGroup`.
2. Human\-readable name for your consumer group.
3. The `qualifiedName` should follow the pattern: `default/kafka/<epoch>/consumer-group/<name>`,
where `default/kafka/<epoch>` is the qualifiedName of the connection that contains
this consumer group and `<name>` is the unique name for this consumer group.
4. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this consumer group.
5. The `connectorName` must be exactly `kafka`.
6. The list of topics in which this consumer group exists is embedded in the `kafkaTopics` attribute.
7. The `typeName` for this embedded reference must be `KafkaTopic`.
8. To complete the reference, you must include a `uniqueAttributes` with the `qualifiedName` of the topic. Note: the topic must already exist 
in Atlan before creating the consumer group.
9. The list of topic qualified names.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the `Kafka` structure is an `Asset`,
and can therefore be related to the following other assets.

```
erDiagram
  Asset }o--o{ AtlasGlossaryTerm : meanings
  Asset ||--o{ Link : links
  Asset ||--o| Readme : readme
  Asset }o--o{ Process : inputToProcesses
  Asset }o--o{ Process : outputFromProcesses
```

### AtlasGlossaryTerm[¶](#atlasglossaryterm "Permanent link")

A [glossary term](../../../models/entities/atlasglossaryterm/) provides meaning to an asset. The [link terms to assets snippet](../../../snippets/common-examples/term-assignment/) provides more detail on setting this relationship.

### Link[¶](#link "Permanent link")

A [link](../../../models/entities/link/) provides additional context to an asset, by providing a URL to additional information.

### Readme[¶](#readme "Permanent link")

A [README](../../../models/entities/readme/) provides rich documentation for an asset. The [add asset READMEs snippet](../../../snippets/common-examples/readme/) provides more detail on setting this relationship.

### Process[¶](#process "Permanent link")

A [process](../../../models/lineage/) provides lineage information for an asset. An asset can be both an input and an output for one or more processes. The [lineage snippets](../../../snippets/common-examples/lineage/) provide more detail on creating and working with lineage.

---

1. Although if you want to delete everything in a connection,your better avenue is the packaged [connection delete utility](https://ask.atlan.com/hc/en-us/articles/6755306791697)  in the UI.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2024\-05\-022025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/kafka/) to provide us with more information. 

Back to top

[Previous Manage Airflow assets](../airflow/) [Next Manage Azure Event Hub assets](../azure_event_hub/) 

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

