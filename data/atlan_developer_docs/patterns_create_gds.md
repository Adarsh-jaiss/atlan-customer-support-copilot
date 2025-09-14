# Source URL
https://developer.atlan.com/patterns/create/gds/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/gds/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on Google Data Studio assets (connections, data sources, reports).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on Google Data Studio assets (connections, data sources, reports).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/gds.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Google Data Studio assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/gds/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on Google Data Studio assets (connections, data sources, reports).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/gds.png
meta-twitter:title: Manage Google Data Studio assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Google Data Studio assets - Developer
-->

[Skip to content](#manage-google-data-studio-assets) Developer Manage Google Data Studio assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operations on Google Data Studio assets (connections, data sources, reports).

[https://demo.arcade.software/IVvxxJCHNrJjSQHHrJEi?embed](https://demo.arcade.software/IVvxxJCHNrJjSQHHrJEi?embed)

In general, these should be:

* [Created in top\-down order](../) (connection, then data sources and reports)
* Deleted in bottom\-up order (data sources and reports, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ DataStudioAsset : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Google Data Studio [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as a Google Data Studio connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a Google Data Studio connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "gds-connection", // (3)         AtlanConnectorType.DATASTUDIO, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to Google Data Studio.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a GDS connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, DataStudioAsset from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="gds-connection", # (4)     connector_type=AtlanConnectorType.DATASTUDIO, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"] # (8) )  response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to Google Data Studio.
6. List the workspace roles that should be able to administer the connection (or `None` if none) . All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.* It's important to note that the provided admin roles, groups, or users pertain to Atlan and not Google Data Studio. They define who has administrative control over this connection within Atlan.
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.* It's important to note that the provided admin roles, groups, or users pertain to Atlan and not Google Data Studio. They define who has administrative control over this connection within Atlan.
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.* It's important to note that the provided admin roles, groups, or users pertain to Atlan and not Google Data Studio. They define who has administrative control over this connection within Atlan.
9. Actually call Atlan to create the connection.
10. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a Google Data Studio connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "gds-connection", // (3)         AtlanConnectorType.DATASTUDIO, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to Google Data Studio.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "gds-connection", // (2)         "connectorName": "datastudio", // (3)         "qualifiedName": "default/datastudio/123456789", // (4)         "category": "bi", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `datastudio`.
4. The `qualifiedName` should follow the pattern: `default/datastudio/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `bi`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### DataStudioAsset (report)[¶](#datastudioasset-report "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Google Data Studio [report asset](../../../models/entities/datastudioasset/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the workspace and set the `dataStudioAssetType` to `REPORT`.

Java

Python

Kotlin

Raw REST API

| Create a Google Data Studio report | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` DataStudioAsset report = DataStudioAsset.creator( // (1)         "gds-report", // (2)         connectionQualifiedName, // (3)         GoogleDataStudioAssetType.REPORT, // (4)         "identifier-from-gds") // (5)     .build(); AssetMutationResponse response = report.save(client); // (6)  ``` |

1. Build up the minimum request to create a report asset.
2. Provide a human\-readable name for your report asset.
3. Provide the qualifiedName of the connection for this report asset.
4. Specify the type of the asset, to ensure we are creating a report asset.
5. (Recommended) Provide the unique identifier of this asset, from Google Data Studio itself. This will allow you to reconstruct the qualifiedName, for example if you later want to update this same asset. Alternatively, you can leave out this final parameter and a random UUID will be generated for you; however, you will not have a way to reconstruct this later for more efficient updates.
6. Actually call Atlan to create the report asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a Google Data Studio report | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` report = DataStudioAsset.creator( # (1)     name = "gds-report", # (2)     connection_qualified_name = connection_qualified_name # (3)     data_studio_asset_type = GoogleDataStudioAssetType.REPORT # (4) ) response = client.asset.save(report) # (5)  ``` |

1. Build up the minimum request to create a report asset.
2. Provide a human\-readable name for your report asset.
3. Provide the `qualified_name` of the connection for this report asset.
4. Specify the type of the asset, to ensure we are creating a report asset.
5. Actually call Atlan to create the report asset.

| Create a Google Data Studio report | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` val report = DataStudioAsset.creator( // (1)         "gds-report", // (2)         connectionQualifiedName, // (3)         GoogleDataStudioAssetType.REPORT, // (4)         "identifier-from-gds") // (5)     .build() val response = report.save(client) // (6)  ``` |

1. Build up the minimum request to create a report asset.
2. Provide a human\-readable name for your report asset.
3. Provide the qualifiedName of the connection for this report asset.
4. Specify the type of the asset, to ensure we are creating a report asset.
5. (Recommended) Provide the unique identifier of this asset, from Google Data Studio itself. This will allow you to reconstruct the qualifiedName, for example if you later want to update this same asset. Alternatively, you can leave out this final parameter and a random UUID will be generated for you; however, you will not have a way to reconstruct this later for more efficient updates.
6. Actually call Atlan to create the report asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "DataStudioAsset", // (1)       "attributes": {         "name": "gds-report", // (2)         "qualifiedName": "default/datastudio/123456789/gds-report", // (3)         "connectionQualifiedName": "default/datastudio/123456789", // (4)         "connectorName": "datastudio", // (5)         "dataStudioAssetType": "REPORT" // (6)       }     }   ] }  ``` |

1. The `typeName` must be exactly `DataStudioAsset`.
2. Human\-readable name for your asset.
3. The `qualifiedName` should follow the pattern: `default/datastudio/<epoch>/<asset_name>`, where `default/datastudio/<epoch>` is the qualifiedName of the connection for this asset and `<asset_name>` is the name of the asset.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this asset.
5. The `connectorName` must be exactly `datastudio`.
6. The `dataStudioAssetType` must be exactly `REPORT`.

### DataStudioAsset (source)[¶](#datastudioasset-source "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Google Data Studio [data source asset](../../../models/entities/datastudioasset/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the workspace and set the `dataStudioAssetType` to `DATA_SOURCE`.

Java

Python

Kotlin

Raw REST API

| Create a Google Data Studio data source | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` DataStudioAsset source = DataStudioAsset.creator( // (1)         "gds-source", // (2)         connectionQualifiedName, // (3)         GoogleDataStudioAssetType.DATA_SOURCE, // (4)         "identifier-from-gds") // (5)     .build(); AssetMutationResponse response = source.save(client); // (6)  ``` |

1. Build up the minimum request to create a data source asset.
2. Provide a human\-readable name for your data source asset.
3. Provide the qualifiedName of the connection for this data source asset.
4. Specify the type of the asset, to ensure we are creating a data source asset.
5. (Recommended) Provide the unique identifier of this asset, from Google Data Studio itself. This will allow you to reconstruct the qualifiedName, for example if you later want to update this same asset. Alternatively, you can leave out this final parameter and a random UUID will be generated for you; however, you will not have a way to reconstruct this later for more efficient updates.
6. Actually call Atlan to create the data source asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a Google Data Studio data source | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` source = DataStudioAsset.creator( # (1)     name = "gds-source", # (2)     connection_qualified_name = connection_qualified_name # (3)     data_studio_asset_type = GoogleDataStudioAssetType.DATA_SOURCE # (4) ) response = client.asset.save(source) # (5)  ``` |

1. Build up the minimum request to create a data source asset.
2. Provide a human\-readable name for your data source asset.
3. Provide the `qualified_name` of the connection for this data source asset.
4. Specify the type of the asset, to ensure we are creating a data source asset.
5. Actually call Atlan to create the data source asset.

| Create a Google Data Studio data source | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` val source = DataStudioAsset.creator( // (1)         "gds-source", // (2)         connectionQualifiedName, // (3)         GoogleDataStudioAssetType.DATA_SOURCE, // (4)         "identifier-from-gds") // (5)     .build() val response = source.save(client) // (6)  ``` |

1. Build up the minimum request to create a data source asset.
2. Provide a human\-readable name for your data source asset.
3. Provide the qualifiedName of the connection for this data source asset.
4. Specify the type of the asset, to ensure we are creating a data source asset.
5. (Recommended) Provide the unique identifier of this asset, from Google Data Studio itself. This will allow you to reconstruct the qualifiedName, for example if you later want to update this same asset. Alternatively, you can leave out this final parameter and a random UUID will be generated for you; however, you will not have a way to reconstruct this later for more efficient updates.
6. Actually call Atlan to create the data source asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "DataStudioAsset", // (1)       "attributes": {         "name": "gds-source", // (2)         "qualifiedName": "default/datastudio/123456789/gds-source", // (3)         "connectionQualifiedName": "default/datastudio/123456789", // (4)         "connectorName": "datastudio", // (5)         "dataStudioAssetType": "DATA_SOURCE" // (6)       }     }   ] }  ``` |

1. The `typeName` must be exactly `DataStudioAsset`.
2. Human\-readable name for your asset.
3. The `qualifiedName` should follow the pattern: `default/datastudio/<epoch>/<asset_name>`, where `default/datastudio/<epoch>` is the qualifiedName of the connection for this asset and `<asset_name>` is the name of the asset.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this asset.
5. The `connectorName` must be exactly `datastudio`.
6. The `dataStudioAssetType` must be exactly `DATA_SOURCE`.

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

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/gds/) to provide us with more information. 

Back to top

[Previous Manage Google Cloud Storage assets](../gcs/) [Next Manage Preset assets](../preset/) 

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

