# Source URL
https://developer.atlan.com/patterns/create/file/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/file/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on file assets (connections, files).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on file assets (connections, files).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/file.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage file assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/file/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on file assets (connections, files).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/file.png
meta-twitter:title: Manage file assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage file assets - Developer
-->

[Skip to content](#manage-file-assets) Developer Manage file assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage file assets[¶](#manage-file-assets "Permanent link")
===========================================================

Operations on file assets (connections, files).

In general, these should be:

* [Created in top\-down order](../) (connection, then files)
* Deleted in bottom\-up order (files, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ File : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A file [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, you can use any [connector type](../../../models/connectortypes/) you want, to give you a particular icon for the connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a file connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "file-connection", // (3)         AtlanConnectorType.FILE, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to `FILE`.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a file connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = str(client.role_cache.get_id_for_name("$admin")) # (1) connection = Connection.creator( # (2)     client=client, # (2)     name="file-connection", # (4)     connector_type=AtlanConnectorType.FILE, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"], # (8) ) response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to `FILE`.
6. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a file connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "file-connection", // (3)         AtlanConnectorType.FILE, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to `FILE`.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "file-connection", // (2)         "connectorName": "file", // (3)         "qualifiedName": "default/file/123456789", // (4)         "category": "ObjectStore", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` should be `file`..
4. The `qualifiedName` should follow the pattern: `default/file/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` should be `ObjectStore`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### File[¶](#file "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [file asset](../../../models/entities/file/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the file.

Java

Python

Kotlin

Raw REST API

| Create a file | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` File file = File.creator( // (1)         "example-file.pdf", // (2)         connectionQualifiedName, // (3)         FileType.PDF) // (4)     .build(); AssetMutationResponse response = file.save(client); // (5)  ``` |

1. Build up the minimum request to create a file.
2. Provide a human\-readable name for your file asset.
3. Provide the qualifiedName of the connection for this file asset.
4. Specify the type of the file. This will control the icon that is used for the file.
5. Actually call Atlan to create the file asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a file | |
| --- | --- |
| ``` 16 17 18 19 20 ``` | ``` file = File.creator( # (1)     name="example-file.pdf", # (2)     connection_qualified_name=connection_qualified_name, # (3)     file_type=FileType.PDF) # (4) response = client.asset.save(file) # (5)  ``` |

1. Build up the minimum request to create a file.
2. Provide a human\-readable name for your file asset.
3. Provide the qualifiedName of the connection for this file asset.
4. Specify the type of the file. This will control the icon that is used for the file.
5. Actually call Atlan to create the file asset.

| Create a file | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` val file = File.creator( // (1)     "example-file.pdf", // (2)     connectionQualifiedName, // (3)     FileType.PDF) // (4)     .build() val response = file.save(client) // (5)  ``` |

1. Build up the minimum request to create a file.
2. Provide a human\-readable name for your file asset.
3. Provide the qualifiedName of the connection for this file asset.
4. Specify the type of the file. This will control the icon that is used for the file.
5. Actually call Atlan to create the file asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "File", // (1)       "attributes": {         "name": "example-file.pdf", // (2)         "qualifiedName": "default/api/123456789/example-file.pdf", // (3)         "connectionQualifiedName": "default/api/123456789", // (4)         "connectorName": "api", // (5)         "fileType": "pdf" // (6)       }     }   ] }  ``` |

1. The `typeName` must be exactly `File`.
2. Human\-readable name for your asset.
3. The `qualifiedName` should follow the pattern: `default/<connectortype>/<epoch>/<asset_name>`, where `default/<connectortype>/<epoch>` is the qualifiedName of the connection for this asset and `<asset_name>` is the name of the asset.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this asset.
5. The `connectorName` must be the same value as the connector type used when creating the connection.
6. Use the `fileType` to control what icon should be shown for the file itself in the UI.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Each file is an `Asset`, and can therefore be related to the following other assets.

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

1. Note that unlike other assets, the packaged [connection delete utility](https://ask.atlan.com/hc/en-us/articles/6755306791697)  in the UI will **not** remove files associated with the connection. So files must themselves be deleted, separately from the connection.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2023\-06\-202025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/file/) to provide us with more information. 

Back to top

[Previous Manage API assets](../api/) [Next Manage Airflow assets](../airflow/) 

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

