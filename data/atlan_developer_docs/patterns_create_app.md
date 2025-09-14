# Source URL
https://developer.atlan.com/patterns/create/app/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/app/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on App assets (Application).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on App assets (Application).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/app.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage App assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/app/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on App assets (Application).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/app.png
meta-twitter:title: Manage App assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage App assets - Developer
-->

[Skip to content](#manage-app-assets) Developer Manage App assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operations on App assets.

In general, these should be:

* [Created in top\-down order](../) (Connection, then Application, then ApplicationField)
* Deleted in bottom\-up order (ApplicationField, Application, then Connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ Application : contains
  Application ||--o{ ApplicationField : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An App [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as an App connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create an App connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "app-connection", // (3)         AtlanConnectorType.APP, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to APP.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an App connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, Application, Table, Schema from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="app-connection", # (4)     connector_type=AtlanConnectorType.APP, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"] # (8)   )   response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to APP.
6. List the workspace roles that should be able to administer the connection (or `None` if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the `qualified_name` for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an App connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "app-connection", // (3)         AtlanConnectorType.APP, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to APP.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "app-connection", // (2)         "connectorName": "app", // (3)         "qualifiedName": "default/app/123456789", // (4)         "category": "APP", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `app`.
4. The `qualifiedName` should follow the pattern: `default/app/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `APP`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### Application[¶](#application "Permanent link")

[2\.6\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.6.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An [Application](../../../models/entities/application/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the Application. You can also provide the `appId` and `applicationOwnedAssets` for the asset.

Java

Python

Kotlin

Raw REST API

| Create an Application | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 19 ``` | ``` Application application = Application.creator( // (1)         "application", // (2)         connectionQualifiedName,) // (3)      .appId("1234") // (4)     .applicationOwnedAssets(List.of(         Table.refByQualifiedName("default/snowflake/123456789/DATABASE/SCHEMA/TABLE"),         Schema.refByQualifiedName("default/snowflake/123456789/DATABASE/SCHEMA"))) // (5)     .build(); AssetMutationResponse response = application.save(client); // (6)  ``` |

1. Build up the minimum request to create an Application.
2. Provide a human\-readable name for your Application.
3. Provide the qualifiedName of the connection for this asset.
4. (Optional) Provide the `appId` of this application in the source system.
5. (Optional) Provide the list of assets that exist in this application. Also update the individual assets to hold the qualifiedName of this application in the attribute `applicationQualifiedName`.
6. Actually call Atlan to create the application. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create an Application | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` application = Application.creator( # (1)     name = "application", # (2)     connection_qualified_name = connection_qualified_name, # (3) ) application.app_id = "1234", # (4) application.application_owned_assets = [       Table.ref_by_qualified_name("default/snowflake/123456789/DATABASE/SCHEMA/TABLE"),       Schema.ref_by_qualified_name("default/snowflake/123456789/DATABASE/SCHEMA")   ] # (5) response = client.asset.save(application) # (6) application_qualified_name = response.assets_created(asset_type=Application)[0].qualified_name # (7)  ``` |

1. Build up the minimum request to create an Application.
2. Provide a human\-readable name for your Application.
3. Provide the `qualified_name` of the connection for this Application.
4. (Optional) Provide the `appId` of this application in the source system.
5. (Optional) Provide the list of assets that exist in this application. Also update the individual assets to hold the qualifiedName of this application in the attribute `applicationQualifiedName`.
6. Actually call Atlan to create the Application.
7. Retrieve the `qualified_name` for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an Application | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 19 ``` | ``` val application = Application.creator( // (1)         "application", // (2)         connectionQualifiedName,) // (3)      .appId("1234") // (4)     .applicationOwnedAssets(List.of(         Table.refByQualifiedName("default/snowflake/123456789/DATABASE/SCHEMA/TABLE"),         Schema.refByQualifiedName("default/snowflake/123456789/DATABASE/SCHEMA"))) // (5)     .build() val response = application.save(client) // (6)  ``` |

1. Build up the minimum request to create an Application.
2. Provide a human\-readable name for your Application.
3. Provide the qualifiedName of the connection for this asset.
4. (Optional) Provide the `appId` of this application in the source system.
5. (Optional) Provide the list of assets that exist in this application. Also update the individual assets to hold the qualifiedName of this application in the attribute `applicationQualifiedName`.
6. Actually call Atlan to create the application. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ``` | ``` {   "entities": [     {       "typeName": "Application", // (1)       "attributes": {         "name": "application", // (2)         "qualifiedName": "default/app/123456789/application", // (3)         "connectionQualifiedName": "default/app/123456789", // (4)         "connectorName": "app", // (5)         "appId": "1234", // (6)         "applicationOwnedAssets": [ // (7)             {                 "typeName": "Table", // (8)                 "uniqueAttributes": { // (9)                     "qualifiedName": "default/snowflake/123456789/DATABASE/SCHEMA/TABLE"                 }             },             {                 "typeName": "Schema",                 "uniqueAttributes": {                     "qualifiedName": "default/snowflake/123456789/DATABASE/SCHEMA"                 }             }         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Application`.
2. Human\-readable name for your asset.
3. The `qualifiedName` should follow the pattern: `default/app/<epoch>/<assetName>`, where `default/app/<epoch>` is the qualifiedName of the connection for this asset and `<assetName>` is the name of this asset.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this asset.
5. The `connectorName` must be exactly `app`.
6. (Optional) The `appId` should be id of the application in the source system.
7. (Optional) The Catalog assets which are present inside this application are added in `applicationOwnedAssets` attribute.
8. The `typeName` for this embedded reference must be the type of asset being embeded.
9. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the asset. Note: the asset must already exist in Atlan before creating the path.

### ApplicationField[¶](#applicationfield "Permanent link")

[4\.2\.0](https://github.com/atlanhq/atlan-python/releases/tag/4.2.0 "Minimum version")[4\.2\.4](https://github.com/atlanhq/atlan-java/releases/tag/v4.2.4 "Minimum version")

An [ApplicationField](../../../models/entities/applicationfield/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the ApplicationField, and the `applicationQualifiedName` of the field's ancestor. You can also provide the `applicationFieldOwnedAssets` for the asset.

Java

Python

Kotlin

Raw REST API

| Create an ApplicationField | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 ``` | ``` ApplicationField applicationField = ApplicationField.creator( // (1)         "application-field", // (2)         application) // (3)      .applicationFieldOwnedAssets(List.of(         Table.refByQualifiedName("default/snowflake/123456789/DATABASE/SCHEMA/TABLE"),         Schema.refByQualifiedName("default/snowflake/123456789/DATABASE/SCHEMA"))) // (4)     .build(); AssetMutationResponse response = applicationField.save(client); // (5)  ``` |

1. Build up the minimum request to create an ApplicationField.
2. Provide a human\-readable name for your ApplicationField.
3. Provide the application for this field.
4. (Optional) Provide the list of assets that exist in this ApplicationField. Also update the individual assets to hold the qualifiedName of this ApplicationField in the attribute `applicationFieldQualifiedName`.
5. Actually call Atlan to create the ApplicationField. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create an ApplicationField | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 ``` | ``` applicationField = ApplicationField.creator( # (1)     name = "application-field", # (2)     application_qualified_name = application_qualified_name, # (3) ) applicationField.application_field_owned_assets = [       Table.ref_by_qualified_name("default/snowflake/123456789/DATABASE/SCHEMA/TABLE"),       Schema.ref_by_qualified_name("default/snowflake/123456789/DATABASE/SCHEMA")   ] # (4) response = client.asset.save(applicationField) # (5)  ``` |

1. Build up the minimum request to create an ApplicationField.
2. Provide a human\-readable name for your ApplicationField.
3. Provide the `qualified_name` of the application for this ApplicationField.
4. (Optional) Provide the list of assets that exist in this ApplicationField. Also update the individual assets to hold the `qualifiedName` of this ApplicationField in the attribute `applicationFieldQualifiedName`.
5. Actually call Atlan to create the ApplicationField.

| Create an ApplicationField | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 ``` | ``` val applicationField = ApplicationField.creator( // (1)         "application-field", // (2)         application) // (3)      .applicationFieldOwnedAssets(List.of(         Table.refByQualifiedName("default/snowflake/123456789/DATABASE/SCHEMA/TABLE"),         Schema.refByQualifiedName("default/snowflake/123456789/DATABASE/SCHEMA"))) // (4)     .build() val response = applicationField.save(client) // (5)  ``` |

1. Build up the minimum request to create an ApplicationField.
2. Provide a human\-readable name for your ApplicationField.
3. Provide the application for this field.
4. (Optional) Provide the list of assets that exist in this ApplicationField. Also update the individual assets to hold the `qualifiedName` of this ApplicationField in the attribute `applicationFieldQualifiedName`.
5. Actually call Atlan to create the ApplicationField. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 ``` | ``` {   "entities": [     {       "typeName": "ApplicationField", // (1)       "attributes": {         "name": "application-field", // (2)         "qualifiedName": "default/app/123456789/application/field", // (3)         "connectionQualifiedName": "default/app/123456789", // (4)         "connectorName": "app", // (5)         "parentApplication": { // (6)           "typeName": "Application", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/app/123456789/application"           }         },         "applicationParentQualifiedName": "default/app/123456789/application", // (9)         "applicationFieldOwnedAssets": [ // (10)             {                 "typeName": "Table", // (11)                 "uniqueAttributes": { // (12)                     "qualifiedName": "default/snowflake/123456789/DATABASE/SCHEMA/TABLE"                 }             },             {                 "typeName": "Schema",                 "uniqueAttributes": {                     "qualifiedName": "default/snowflake/123456789/DATABASE/SCHEMA"                 }             }         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `ApplicationField`.
2. Human\-readable name for your asset.
3. The `qualifiedName` should follow the pattern: `default/app/<epoch>/<applicationName>/<fieldName>`, where `default/app/<epoch>/<applicationName>` is the qualifiedName of the application for this field and `<fieldName>` is the name of this asset.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this asset.
5. The `connectorName` must be exactly `app`.
6. The application in which this field exists is embedded in the `parentApplication` attribute.
7. The `typeName` for this embedded reference must be `Application`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the application. Note: the application must already exist in Atlan before creating the path.
9. The `applicationParentQualifiedName` must be the qualifiedName of the application which contains this field.
10. (Optional) The Catalog assets which are present inside this ApplicationField are added in `applicationFieldOwnedAssets` attribute.
11. The `typeName` for this embedded reference must be the type of asset being embeded.
12. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the asset. Note: the asset must already exist in Atlan before creating the path.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the App structure is an `Asset`, and can therefore be related to the following other assets.

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

2024\-11\-142025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/app/) to provide us with more information. 

Back to top

[Previous Manage Azure Event Hub assets](../azure_event_hub/) [Next Manage AI assets](../ai/) 

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

