# Source URL
https://developer.atlan.com/patterns/create/preset/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/preset/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on Preset assets (connections, workspaces, collections, charts, datasets).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on Preset assets (connections, workspaces, collections, charts, datasets).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/preset.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Preset assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/preset/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on Preset assets (connections, workspaces, collections, charts, datasets).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/preset.png
meta-twitter:title: Manage Preset assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Preset assets - Developer
-->

[Skip to content](#manage-preset-assets) Developer Manage Preset assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operations on Preset assets (connections, workspaces, collections, charts, datasets).

[https://demo.arcade.software/2YEA5L4gu2KnGbC52Sq9?embed](https://demo.arcade.software/2YEA5L4gu2KnGbC52Sq9?embed)

In general, these should be:

* [Created in top\-down order](../) (connection, then workspace, then collection, then charts and datasets)
* Deleted in bottom\-up order (charts and datasets, then collections, then workspaces, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ PresetWorkspace : contains
  PresetWorkspace ||--o{ PresetDashboard : contains
  PresetDashboard ||--o{ PresetChart : contains
  PresetDashboard ||--o{ PresetDataset : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Preset [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as a Preset connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a Preset connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "preset-connection", // (3)         AtlanConnectorType.PRESET, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to Preset.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Preset connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, PresetWorkspace, PresetDashboard, PresetChart, PresetDataset from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)   client=client, # (3)   name="preset-connection", # (4)   connector_type=AtlanConnectorType.PRESET, # (5)   admin_roles=[admin_role_guid], # (6)   admin_groups=["group2"], # (7)   admin_users=["jsmith"] # (8) )  response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to Preset.
6. List the workspace roles that should be able to administer the connection (or `None` if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the `qualified_name` for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Preset connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "preset-connection", // (3)         AtlanConnectorType.PRESET, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to Preset.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "preset-connection", // (2)         "connectorName": "preset", // (3)         "qualifiedName": "default/preset/123456789", // (4)         "category": "bi", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `preset`.
4. The `qualifiedName` should follow the pattern: `default/preset/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `bi`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### PresetWorkspace[¶](#presetworkspace "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Preset [workspace](../../../models/entities/presetworkspace/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the workspace.

Java

Python

Kotlin

Raw REST API

| Create a Preset workspace | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` PresetWorkspace workspace = PresetWorkspace.creator( // (1)         "ps-workspace", // (2)         connectionQualifiedName) // (3)     .build(); AssetMutationResponse response = workspace.save(client); // (4) workspace = response.getResult(workspace); // (5)  ``` |

1. Build up the minimum request to create a workspace.
2. Provide a human\-readable name for your workspace.
3. Provide the qualifiedName of the connection for this workspace.
4. Actually call Atlan to create the workspace. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created workspace for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Preset workspace | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` workspace = PresetWorkspace.creator( # (1)   name = "ps-workspace", # (2)   connection_qualified_name = connection_qualified_name # (3) ) response = client.asset.save(workspace) # (4) preset_workspace_qualified_name = response.assets_created(asset_type=PresetWorkspace)[0].qualified_name # (5)  ``` |

1. Build up the minimum request to create a workspace.
2. Provide a human\-readable name for your workspace.
3. Provide the `qualified_name` of the connection for this workspace.
4. Actually call Atlan to create the workspace.
5. Retrieve the created workspace for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Preset workspace | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` var workspace = PresetWorkspace.creator( // (1)     "ps-workspace", // (2)     connectionQualifiedName) // (3)     .build() val response = workspace.save(client) // (4) workspace = response.getResult(workspace) // (5)  ``` |

1. Build up the minimum request to create a workspace.
2. Provide a human\-readable name for your workspace.
3. Provide the qualifiedName of the connection for this workspace.
4. Actually call Atlan to create the workspace. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created workspace for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "typeName": "PresetWorkspace", // (1)       "attributes": {         "name": "ps-workspace", // (2)         "qualifiedName": "default/preset/123456789/ps-workspace", // (3)         "connectionQualifiedName": "default/preset/123456789", // (4)         "connectorName": "preset" // (5)       }     }   ] }  ``` |

1. The `typeName` must be exactly `PresetWorkspace`.
2. Human\-readable name for your workspace.
3. The `qualifiedName` should follow the pattern: `default/preset/<epoch>/<workspace_name>`, where `default/preset/<epoch>` is the qualifiedName of the connection for this workspace and `<workspace_name>` is the name of the workspace.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this workspace.
5. The `connectorName` must be exactly `preset`.

### PresetDashboard[¶](#presetdashboard "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Preset [collection](../../../models/entities/presetdashboard/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the collection, and the names and qualifiedNames of the collection's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a Preset collection | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` PresetDashboard collection = PresetDashboard.creator( // (1)         "ps-collection", // (2)         workspace) // (3)     .build(); AssetMutationResponse response = collection.save(client); // (4) collection = response.getResult(collection); // (5)  ``` |

1. Build up the minimum request to create a collection.
2. Provide a human\-readable name for your collection.
3. Provide the workspace for this collection. If you did not already have the object, you could also use `PresetWorkspace.refByGuid()` with the GUID of the workspace, or `PresetWorkspace.refByQualifiedName()` with the `qualifiedName` of the workspace.
4. Actually call Atlan to create the collection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created collection for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an Preset collection | |
| --- | --- |
| ``` 23 24 25 26 27 28 ``` | ``` collection = PresetDashboard.creator( # (1)   name = "ps-collection", # (2)   preset_workspace_qualified_name = preset_workspace_qualified_name # (3) ) response = client.asset.save(collection) # (4) preset_dashboard_qualified_name = response.assets_created(asset_type=PresetDashboard)[0].qualified_name # (5)  ``` |

1. Build up the minimum request to create a collection.
2. Provide a human\-readable name for your collection.
3. Provide the `qualified_name` of the Preset workspace for this collection.
4. Actually call Atlan to create the collection.
5. Retrieve the created collection for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Preset collection | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` var collection = PresetDashboard.creator( // (1)     "ps-collection", // (2)     workspace) // (3)     .build() val response = collection.save(client) // (4) collection = response.getResult(collection) // (5)  ``` |

1. Build up the minimum request to create a collection.
2. Provide a human\-readable name for your collection.
3. Provide the workspace for this collection. If you did not already have the object, you could also use `PresetWorkspace.refByGuid()` with the GUID of the workspace, or `PresetWorkspace.refByQualifiedName()` with the `qualifiedName` of the workspace.
4. Actually call Atlan to create the collection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created collection for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [     {       "typeName": "PresetDashboard", // (1)       "attributes": {         "name": "ps-collection", // (2)         "qualifiedName": "default/preset/123456789/ps-workspace/ps-collection", // (3)         "connectionQualifiedName": "default/preset/123456789", // (4)         "connectorName": "preset", // (5)         "presetWorkspace": { // (6)           "typeName": "PresetWorkspace", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/preset/123456789/ps-workspace"           }         },         "presetWorkspaceQualifiedName": "default/preset/123456789/ps-workspace" // (9)       }     }   ] }  ``` |

1. The `typeName` must be exactly `PresetDashboard`.
2. Human\-readable name for your collection.
3. The `qualifiedName` should follow the pattern: `default/preset/<epoch>/<workspace_name>/<collection_name>`, where `default/preset/<epoch>/<workspace_name>` is the qualifiedName of the workspace for this collection and `<collection_name>` is the name for this collection.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this collection.
5. The `connectorName` must be exactly `preset`.
6. The workspace in which this collection exists is embedded in the `presetWorkspace` attribute.
7. The `typeName` for this embedded reference must be `PresetWorkspace`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the workspace. Note: the workspace must already exist in Atlan before creating the collection.
9. The `presetWorkspaceQualifiedName` should be the qualifiedName of the workspace.

### PresetChart[¶](#presetchart "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Preset [chart](../../../models/entities/presetchart/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the chart, and the names and qualifiedNames of the chart's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a Preset chart | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` PresetChart chart = PresetChart.creator( // (1)         "ps-chart", // (2)         collection) // (3)     .build(); AssetMutationResponse response = chart.save(client); // (4)  ``` |

1. Build up the minimum request to create a chart.
2. Provide a human\-readable name for your chart.
3. Provide the collection for this chart.
4. Actually call Atlan to create the chart. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a Preset chart | |
| --- | --- |
| ``` 29 30 31 32 33 ``` | ``` chart = PresetChart.creator( # (1)   name = "ps-chart ", # (2)   preset_dashboard_qualified_name = preset_dashboard_qualified_name # (3) ) response = client.asset.save(chart) # (4)  ``` |

1. Build up the minimum request to create a chart.
2. Provide a human\-readable name for your chart.
3. Provide the `qualified_name` of the collection.
4. Actually call Atlan to create the chart.

| Create a Preset chart | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` val chart = PresetChart.creator( // (1)     "ps-chart", // (2)     collection) // (3)     .build() val response = chart.save(client) // (4)  ``` |

1. Build up the minimum request to create a chart.
2. Provide a human\-readable name for your chart.
3. Provide the collection for this chart.
4. Actually call Atlan to create the chart. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "entities": [     {       "typeName": "PresetChart", // (1)       "attributes": {         "name": "ps-chart", // (2)         "qualifiedName": "default/preset/123456789/ps-workspace/ps-collection/ps-chart", // (3)         "connectionQualifiedName": "default/preset/123456789", // (4)         "connectorName": "preset", // (5)         "presetDashboard": { // (6)           "typeName": "PresetDashboard", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/preset/123456789/ps-workspace/ps-collection"           }         },         "presetDashboardQualifiedName": "default/preset/123456789/ps-workspace/ps-collection", // (9)         "presetWorkspaceQualifiedName": "default/preset/123456789/ps-workspace" // (10)       }     }   ] }  ``` |

1. The `typeName` must be exactly `PresetChart`.
2. Human\-readable name for your chart.
3. The `qualifiedName` should follow the pattern: `default/preset/<epoch>/<workspace_name>/<collection_name>/<chart_name>`, where `default/preset/<epoch>/<workspace_name>/<collection_name>` is the qualifiedName of the collection for this chart and `<chart_name>` is the name for this chart.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this chart.
5. The `connectorName` must be exactly `preset`.
6. The collection in which this chart exists is embedded in the `presetDashboard` attribute.
7. The `typeName` for this embedded reference must be `PresetDashboard`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the collection. Note: the collection must already exist in Atlan before creating the chart.
9. The `presetDashboardQualifiedName` should be the qualifiedName of the collection.
10. The `presetWorkspaceQualifiedName` should be the qualifiedName of the workspace.

### PresetDataset[¶](#presetdataset "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Preset [dataset](../../../models/entities/presetdataset/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the dataset, and the names and qualifiedNames of the dataset's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a Preset dataset | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` PresetDataset dataset = PresetDataset.creator( // (1)         "ps-dataset", // (2)         collection) // (3)     .build(); AssetMutationResponse response = dataset.save(client); // (4)  ``` |

1. Build up the minimum request to create a dataset.
2. Provide a human\-readable name for your dataset.
3. Provide the collection for this dataset.
4. Actually call Atlan to create the dataset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a Preset dataset | |
| --- | --- |
| ``` 29 30 31 32 33 ``` | ``` dataset = PresetDataset.creator( # (1)   name = "ps-dataset ", # (2)   preset_dashboard_qualified_name = preset_dashboard_qualified_name # (3) ) response = client.asset.save(dataset) # (4)  ``` |

1. Build up the minimum request to create a dataset.
2. Provide a human\-readable name for your dataset.
3. Provide the `qualified_name` of the collection.
4. Actually call Atlan to create the dataset.

| Create a Preset dataset | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` val dataset = PresetDataset.creator( // (1)     "ps-dataset", // (2)     collection) // (3)     .build() val response = dataset.save(client) // (4)  ``` |

1. Build up the minimum request to create a dataset.
2. Provide a human\-readable name for your dataset.
3. Provide the collection for this dataset.
4. Actually call Atlan to create the dataset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "entities": [     {       "typeName": "PresetDataset", // (1)       "attributes": {         "name": "ps-dataset", // (2)         "qualifiedName": "default/preset/123456789/ps-workspace/ps-collection/ps-dataset", // (3)         "connectionQualifiedName": "default/preset/123456789", // (4)         "connectorName": "preset", // (5)         "presetDashboard": { // (6)           "typeName": "PresetDashboard", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/preset/123456789/ps-workspace/ps-collection"           }         },         "presetDashboardQualifiedName": "default/preset/123456789/ps-workspace/ps-collection", // (9)         "presetWorkspaceQualifiedName": "default/preset/123456789/ps-workspace" // (10)       }     }   ] }  ``` |

1. The `typeName` must be exactly `PresetDataset`.
2. Human\-readable name for your dataset.
3. The `qualifiedName` should follow the pattern: `default/preset/<epoch>/<workspace_name>/<collection_name>/<dataset_name>`, where `default/preset/<epoch>/<workspace_name>/<collection_name>` is the qualifiedName of the collection for this dataset and `<dataset_name>` is the name for this dataset.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this dataset.
5. The `connectorName` must be exactly `preset`.
6. The collection in which this dataset exists is embedded in the `presetDashboard` attribute.
7. The `typeName` for this embedded reference must be `PresetDashboard`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the collection. Note: the collection must already exist in Atlan before creating the dataset.
9. The `presetDashboardQualifiedName` should be the qualifiedName of the collection.
10. The `presetWorkspaceQualifiedName` should be the qualifiedName of the workspace.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the business intelligence structure is an `Asset`, and can therefore be related to the following other assets.

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

2022\-09\-092025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/preset/) to provide us with more information. 

Back to top

[Previous Manage Google Data Studio assets](../gds/) [Next Manage Superset assets](../superset/) 

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

