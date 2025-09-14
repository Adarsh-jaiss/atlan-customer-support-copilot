# Source URL
https://developer.atlan.com/patterns/create/airflow/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/airflow/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on Airflow assets (AirflowDag, AirflowTask).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on Airflow assets (AirflowDag, AirflowTask).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/airflow.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Airflow assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/airflow/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on Airflow assets (AirflowDag, AirflowTask).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/airflow.png
meta-twitter:title: Manage Airflow assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Airflow assets - Developer
-->

[Skip to content](#manage-airflow-assets) Developer Manage Airflow assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage Airflow assets[¶](#manage-airflow-assets "Permanent link")
=================================================================

Operations on Airflow assets (AirflowDag, AirflowTask).

In general, these should be:

* [Created in top\-down order](../) (connection, then AirflowDag, then AirflowTask)
* Deleted in bottom\-up order (tasks, then dags, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ AirflowDag : contains
  AirflowDag ||--o{ AirflowTask : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[1\.11\.2](https://github.com/atlanhq/atlan-java/releases/tag/v1.11.2 "Minimum version")

An Airflow [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as an Airflow connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create an Airflow connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "airflow-connection", // (3)         AtlanConnectorType.AIRFLOW, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later
for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to `AIRFLOW`.
5. List the workspace roles that should be able to administer the connection
(or null if none). All users with that workspace role (current and future) will be
administrators of the connection. Note that the values here need to be the GUID(s)
of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an Airflow connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, AirflowDag, AirflowTask from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="airflow-connection", # (4)     connector_type=AtlanConnectorType.AIRFLOW, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"] # (8) )  response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to `AIRFLOW`.
6. List the workspace roles that should be able to administer the connection
(or `None` if none). All users with that workspace role (current and future) will be
administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the qualifiedName for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

| Create an Airflow connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "airflow-connection", // (3)         AtlanConnectorType.AIRFLOW, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later
for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to `AIRFLOW`.
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
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "airflow-connection", // (2)         "connectorName": "airflow", // (3)         "qualifiedName": "default/airflow/123456789", // (4)         "category": "elt", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `airflow`.
4. The `qualifiedName` should follow the pattern: `default/airflow/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `elt`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### AirflowDag[¶](#airflowdag "Permanent link")

[2\.1\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.1.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An [`AirflowDag`](../../../models/entities/airflowdag/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `connectionQualifiedName` of the connection for the dag.

Java

Python

Kotlin

Raw REST API

| Create an Airflow dag | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` AirflowDag airflowDag = AirflowDag.creator( // (1)         "myAirflowDag", // (2)         connectionQualifiedName // (3)     )     .build(); AssetMutationResponse response = airflowDag.save(client); // (4) airflowDag = response.getResult(airflowDag); // (5)  ``` |

1. Build up the minimum request to create a dag.
2. Provide a human\-readable name for your dag.
3. Provide the `qualifiedName` of the Airflow connection.
4. Actually call Atlan to create the dag. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created dag for use in subsequent creation calls. (You'd probably want to do some `null` checking first.)

| Create an Airflow dag | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` airflow_dag = AirflowDag.creator( # (1)     name="myAirflowDag", # (2)     connection_qualified_name=connection_qualified_name # (3) ) response = client.asset.save(airflow_dag) # (4) airflow_dag_qualifed_name = response.assets_created(asset_type=AirflowDag)[0].qualified_name # (5)  ``` |

1. Build up the minimum request to create a dag.
2. Provide a human\-readable name for your dag.
3. Provide the `qualifiedName` of the Airflow connection.
4. Actually call Atlan to create the dag.
5. Retrieve the created dag for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

| Create an Airflow dag | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` var airflowDag = AirflowDag.creator( // (1)         "myAirflowDag", // (2)         connectionQualifiedName // (3)     )     .build() val response = airflowDag.save(client) // (4) airflowDag = response.getResult(airflowDag) // (5)  ``` |

1. Build up the minimum request to create a dag.
2. Provide a human\-readable name for your dag.
3. Provide the `qualifiedName` of the Airflow connection.
4. Actually call Atlan to create the dag. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created dag for use in subsequent creation calls. (You'd probably want to do some `null` checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "typeName": "AirflowDag", // (1)       "attributes": {         "name": "myAirflowDag", // (2)         "qualifiedName": "default/airflow/123456789/myAirflowDag", // (3)         "connectionQualifiedName": "default/airflow/123456789", // (4)         "connectorName": "airflow" // (5)       }     }   ] }  ``` |

1. The `typeName` must be exactly `AirflowDag`.
2. Human\-readable name for your dag.
3. The `qualifiedName` should follow the pattern: `default/airflow/<epoch>/<name>`,
where `default/airflow/<epoch>` is the qualifiedName of the connection for this
dag and `<name>` is the unique name for this dag.
4. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this dag.
5. The `connectorName` must be exactly `airflow`.

### AirflowTask[¶](#airflowtask "Permanent link")

[2\.1\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.1.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An [`AirflowTask`](../../../models/entities/airflowtask/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `airflowDagQualifiedName` of the dag that will contain the task.

Java

Python

Kotlin

Raw REST API

| Create an Airflow task | |
| --- | --- |
| ``` 18 19 20 21 22 23 ``` | ``` AirflowTask airflowTask = AirflowTask.creator( // (1)         "myAirflowTask", // (2)         airflowDag  // (3)     )     .build(); AssetMutationResponse response = airflowTask.save(client); // (4)  ``` |

1. Build up the minimum request to create a task.
2. Provide a human\-readable name for your task.
3. Provide the dag for this task. If you did not already have the DAG, you could also use `AirflowDag.refByGuid()` with the GUID of the DAG, or `AirflowDag.refByQualifiedName()` with the `qualifiedName` of the DAG.
4. Actually call Atlan to create the task. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create an Airflow task | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` airflowTask = AirflowTask.creator( # (1)     name="myAirflowTask", # (2)     airflow_dag_qualified_name=airflow_dag_qualifed_name # (3) ) response = client.asset.save(airflowTask) # (4)  ``` |

1. Build up the minimum request to create a task.
2. Provide a human\-readable name for your task.
3. Provide the `qualified_name` of the dag for this task.
4. Actually call Atlan to create the task.

| Create an Airflow task | |
| --- | --- |
| ``` 18 19 20 21 22 23 ``` | ``` val airflowTask = AirflowTask.creator( // (1)         "myAirflowTask", // (2)         airflowDag  // (3)     )     .build() val response = airflowTask.save(client) // (4)  ``` |

1. Build up the minimum request to create a task.
2. Provide a human\-readable name for your task.
3. Provide the dag for this task. If you did not already have the DAG, you could also use `AirflowDag.refByGuid()` with the GUID of the DAG, or `AirflowDag.refByQualifiedName()` with the `qualifiedName` of the DAG.
4. Actually call Atlan to create the task. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "entities": [     {       "typeName": "AirflowTask", // (1)       "attributes": {         "name": "myAirflowTask", // (2)         "qualifiedName": "default/airflow/123456789/myAirflowDag/myAirflowTask", // (3)         "connectionQualifiedName": "default/airflow/123456789", // (4)         "connectorName": "airflow", // (5)         "airflowDag": { // (6)           "typeName": "AirflowDag", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/airflow/123456789/myAirflowDag",           }         },         "airflowDagName": "myAirflowDag", // (9)         "airflowDagQualifiedName": "default/airflow/123456789/myAirflowDag" // (10)       }     }   ] }  ``` |

1. The `typeName` must be exactly `AirflowTask`.
2. Human\-readable name for your task.
3. The `qualifiedName` should follow the pattern: `default/airflow/<epoch>/<dag>/<name>`,
where `default/airflow/<epoch>/<dag>` is the qualifiedName of the dag that contains
this task and `<name>` is the unique name for this task.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this task.
5. The `connectorName` must be exactly `airflow`.
6. The dag in which this task exists is embedded in the `airflowDag` attribute.
7. The `typeName` for this embedded reference must be `AirflowDag`.
8. To complete the reference, you must include a `uniqueAttributes` task
with the `qualifiedName` of the dag. Note: the dag must already exist 
in Atlan before creating the task.
9. The `airflowDagName` should be the human\-readable name of the dag.
10. The `airflowDagQualifiedName` should be the qualifiedName of the dag.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the `Airflow` structure is an `Asset`, and can therefore be related to the following other assets.

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

1. Although if you want to delete everything in a connection, your better avenue is the packaged [connection delete utility](https://ask.atlan.com/hc/en-us/articles/6755306791697)  in the UI.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2024\-05\-022025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/airflow/) to provide us with more information. 

Back to top

[Previous Manage file assets](../file/) [Next Manage Kafka assets](../kafka/) 

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

