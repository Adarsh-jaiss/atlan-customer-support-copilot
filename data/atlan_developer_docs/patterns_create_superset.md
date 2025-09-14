# Source URL
https://developer.atlan.com/patterns/create/superset/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/superset/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on Superset assets (connections, dashboards, charts, datasets).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on Superset assets (connections, dashboards, charts, datasets).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/superset.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Superset assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/superset/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on Superset assets (connections, dashboards, charts, datasets).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/superset.png
meta-twitter:title: Manage Superset assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Superset assets - Developer
-->

[Skip to content](#manage-superset-assets) Developer Manage Superset assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operations on Superset assets (connections, dashboards, charts, datasets).

[https://demo.arcade.software/iRlCKqnjVYDXQ756Safd?embed&show_copy_link=true](https://demo.arcade.software/iRlCKqnjVYDXQ756Safd?embed&show_copy_link=true)

In general, these should be:

* [Created in top\-down order](../) (connection, then dashboards, then charts and datasets)
* Deleted in bottom\-up order (charts and datasets, then dashboards, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ SupersetDashboard : contains
  SupersetDashboard ||--o{ SupersetChart : contains
  SupersetDashboard ||--o{ SupersetDataset : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Superset [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as a Superset connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a Superset connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "superset-connection", // (3)         AtlanConnectorType.SUPERSET, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to Superset.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Superset connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, SupersetDashboard, SupersetChart, SupersetDataset from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)   client=client, # (3)   name="superset-connection", # (4)   connector_type=AtlanConnectorType.SUPERSET, # (5)   admin_roles=[admin_role_guid], # (6)   admin_groups=["group2"], # (7)   admin_users=["jsmith"] # (8) )  response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to Superset.
6. List the workspace roles that should be able to administer the connection (or `None` if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the `qualified_name` for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Superset connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "superset-connection", // (3)         AtlanConnectorType.SUPERSET, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to Superset.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "superset-connection", // (2)         "connectorName": "superset", // (3)         "qualifiedName": "default/superset/123456789", // (4)         "category": "bi", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `superset`.
4. The `qualifiedName` should follow the pattern: `default/superset/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `bi`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### SupersetDashboard[¶](#supersetdashboard "Permanent link")

[2\.2\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.2.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Superset [dashboard](../../../models/entities/supersetdashboard/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the dashboard.

Java

Python

Kotlin

Raw REST API

| Create a Superset dashboard | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` SupersetDashboard dashboard = SupersetDashboard.creator( // (1)         "ss-dashboard", // (2)         connectionQualifiedName) // (3)     .build(); AssetMutationResponse response = dashboard.save(client); // (4) dashboard = response.getResult(dashboard); // (5)  ``` |

1. Build up the minimum request to create a dashboard.
2. Provide a human\-readable name for your dashboard.
3. Provide the qualifiedName of the connection for this dashboard.
4. Actually call Atlan to create the dashboard. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created dashboard for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an Superset dashboard | |
| --- | --- |
| ``` 23 24 25 26 27 28 ``` | ``` dashboard = SupersetDashboard.creator( # (1)   name = "ss-dashboard", # (2)   connection_qualified_name = connection_qualified_name # (3) ) response = client.asset.save(dashboard) # (4) superset_dashboard_qualified_name = response.assets_created(asset_type=SupersetDashboard)[0].qualified_name # (5)  ``` |

1. Build up the minimum request to create a dashboard.
2. Provide a human\-readable name for your dashboard.
3. Provide the `qualified_name` of the Superset connection for this dashboard.
4. Actually call Atlan to create the dashboard.
5. Retrieve the created dashboard for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Superset dashboard | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` var dashboard = SupersetDashboard.creator( // (1)     "ss-dashboard", // (2)     connectionQualifiedName) // (3)     .build() val response = dashboard.save(client) // (4) dashboard = response.getResult(dashboard) // (5)  ``` |

1. Build up the minimum request to create a dashboard.
2. Provide a human\-readable name for your dashboard.
3. Provide the qualifiedName of the connection for this dashboard.
4. Actually call Atlan to create the dashboard. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created dashboard for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "typeName": "SupersetDashboard", // (1)       "attributes": {         "name": "ss-dashboard", // (2)         "qualifiedName": "default/superset/123456789/ss-dashboard", // (3)         "connectionQualifiedName": "default/superset/123456789", // (4)         "connectorName": "superset" // (5)       }     }   ] }  ``` |

1. The `typeName` must be exactly `SupersetDashboard`.
2. Human\-readable name for your dashboard.
3. The `qualifiedName` should follow the pattern: `default/superset/<epoch>/<dashboard_name>`, where `default/superset/<epoch>` is the qualifiedName of the connection for this dashboard and `<dashboard_name>` is the name for this dashboard.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this dashboard.
5. The `connectorName` must be exactly `superset`.

### SupersetChart[¶](#supersetchart "Permanent link")

[2\.2\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.2.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Superset [chart](../../../models/entities/supersetchart/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the chart, and the names and qualifiedNames of the chart's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a Superset chart | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` SupersetChart chart = SupersetChart.creator( // (1)         "ss-chart", // (2)         dashboard) // (3)     .build(); AssetMutationResponse response = chart.save(client); // (4)  ``` |

1. Build up the minimum request to create a chart.
2. Provide a human\-readable name for your chart.
3. Provide the dashboard for this chart.
4. Actually call Atlan to create the chart. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a Superset chart | |
| --- | --- |
| ``` 29 30 31 32 33 34 ``` | ``` chart = SupersetChart.creator( # (1)   name = "ss-chart ", # (2)   superset_dashboard_qualified_name = superset_dashboard_qualified_name, # (3)   connection_qualified_name = connection_qualified_name # (4) ) response = client.asset.save(chart) # (5)  ``` |

1. Build up the minimum request to create a chart.
2. Provide a human\-readable name for your chart.
3. Provide the `qualified_name` of the dashboard.
4. Optional, provide the `qualified_name` of the connection for the chart.
5. Actually call Atlan to create the chart.

| Create a Superset chart | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` val chart = SupersetChart.creator( // (1)     "ss-chart", // (2)     dashboard) // (3)     .build() val response = chart.save(client) // (4)  ``` |

1. Build up the minimum request to create a chart.
2. Provide a human\-readable name for your chart.
3. Provide the dashboard for this chart.
4. Actually call Atlan to create the chart. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [     {       "typeName": "SupersetChart", // (1)       "attributes": {         "name": "ss-chart", // (2)         "qualifiedName": "default/superset/123456789/ss-dashboard/ss-chart", // (3)         "connectionQualifiedName": "default/superset/123456789", // (4)         "connectorName": "superset", // (5)         "SupersetDashboard": { // (6)           "typeName": "SupersetDashboard", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/superset/123456789/ss-dashboard"           }         },         "supersetDashboardQualifiedName": "default/superset/123456789/ss-dashboard" // (9)       }     }   ] }  ``` |

1. The `typeName` must be exactly `SupersetChart`.
2. Human\-readable name for your chart.
3. The `qualifiedName` should follow the pattern: `default/superset/<epoch>/<dashboard_name>/<chart_name>`, where `default/superset/<epoch>/<dashboard_name>` is the qualifiedName of the dashboard for this chart and `<chart_name>` is the name for this chart.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this chart.
5. The `connectorName` must be exactly `superset`.
6. The dashboard in which this chart exists is embedded in the `SupersetDashboard` attribute.
7. The `typeName` for this embedded reference must be `SupersetDashboard`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the dashboard. Note: the dashboard must already exist in Atlan before creating the chart.
9. The `supersetDashboardQualifiedName` should be the qualifiedName of the dashboard.

### SupersetDataset[¶](#supersetdataset "Permanent link")

[2\.2\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.2.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Superset [dataset](../../../models/entities/supersetdataset/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the dataset, and the names and qualifiedNames of the dataset's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a Superset dataset | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` SupersetDataset dataset = SupersetDataset.creator( // (1)         "ss-dataset", // (2)         dashboard) // (3)     .build(); AssetMutationResponse response = dataset.save(client); // (4)  ``` |

1. Build up the minimum request to create a dataset.
2. Provide a human\-readable name for your dataset.
3. Provide the dashboard for this dataset.
4. Actually call Atlan to create the dataset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a Superset dataset | |
| --- | --- |
| ``` 29 30 31 32 33 34 ``` | ``` dataset = SupersetDataset.creator( # (1)   name = "ss-dataset ", # (2)   superset_dashboard_qualified_name = superset_dashboard_qualified_name, # (3)   connection_qualified_name = connection_qualified_name # (4) ) response = client.asset.save(dataset) # (5)  ``` |

1. Build up the minimum request to create a dataset.
2. Provide a human\-readable name for your dataset.
3. Provide the `qualified_name` of the dashboard.
4. Optional, provide the `qualified_name` of the connection for the dataset.
5. Actually call Atlan to create the dataset.

| Create a Superset dataset | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` val dataset = SupersetDataset.creator( // (1)     "ss-dataset", // (2)     dashboard) // (3)     .build() val response = dataset.save(client) // (4)  ``` |

1. Build up the minimum request to create a dataset.
2. Provide a human\-readable name for your dataset.
3. Provide the dashboard for this dataset.
4. Actually call Atlan to create the dataset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [     {       "typeName": "SupersetDataset", // (1)       "attributes": {         "name": "ss-dataset", // (2)         "qualifiedName": "default/superset/123456789/ss-dashboard/ss-dataset", // (3)         "connectionQualifiedName": "default/superset/123456789", // (4)         "connectorName": "superset", // (5)         "SupersetDashboard": { // (6)           "typeName": "SupersetDashboard", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/superset/123456789/ss-dashboard"           }         },         "supersetDashboardQualifiedName": "default/superset/123456789/ss-dashboard" // (9)       }     }   ] }  ``` |

1. The `typeName` must be exactly `SupersetDataset`.
2. Human\-readable name for your dataset.
3. The `qualifiedName` should follow the pattern: `default/superset/<epoch>/<dashboard_name>/<dataset_name>`, where `default/superset/<epoch>/<dashboard_name>` is the qualifiedName of the dashboard for this dataset and `<dataset_name>` is the name for this dataset.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this dataset.
5. The `connectorName` must be exactly `superset`.
6. The dashboard in which this dataset exists is embedded in the `SupersetDashboard` attribute.
7. The `typeName` for this embedded reference must be `SupersetDashboard`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the dashboard. Note: the dashboard must already exist in Atlan before creating the dataset.
9. The `supersetDashboardQualifiedName` should be the qualifiedName of the dashboard.

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

2024\-07\-092025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/superset/) to provide us with more information. 

Back to top

[Previous Manage Preset assets](../preset/) [Next Manage API assets](../api/) 

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

