# Source URL
https://developer.atlan.com/patterns/create/adls/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/adls/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on ADLS assets (connections, accounts, containers, objects).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on ADLS assets (connections, accounts, containers, objects).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/adls.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Azure Data Lake Storage assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/adls/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on ADLS assets (connections, accounts, containers, objects).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/adls.png
meta-twitter:title: Manage Azure Data Lake Storage assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Azure Data Lake Storage assets - Developer
-->

[Skip to content](#manage-azure-data-lake-storage-assets) Developer Manage Azure Data Lake Storage assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operations on ADLS assets (connections, accounts, containers, objects).

[https://demo.arcade.software/FQ460FKSyEc3ZFF09sBA?embed](https://demo.arcade.software/FQ460FKSyEc3ZFF09sBA?embed)

In general, these should be:

* [Created in top\-down order](../) (connection, then account, then container, then object)
* Deleted in bottom\-up order (objects, then containers, then accounts, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ ADLSAccount : contains
  ADLSAccount ||--o{ ADLSContainer : contains
  ADLSContainer ||--o{ ADLSObject : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An Azure Data Lake Storage [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as an Azure Data Lake Storage connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create an ADLS connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "adls-connection", // (3)         AtlanConnectorType.ADLS, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to ADLS.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an ADLS connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, ADLSAccount, ADLSContainer, ADLSObject from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)   client=client, # (3)   name="adls-connection", # (4)   connector_type=AtlanConnectorType.ADLS, # (5)   admin_roles=[admin_role_guid], # (6)   admin_groups=["group2"], # (7)   admin_users=["jsmith"] # (8) )  response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to ADLS.
6. List the workspace roles that should be able to administer the connection (or `None` if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the `qualified_name` for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an ADLS connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin"); // (1) val connection = Connection.creator( // (2)         "adls-connection", // (3)         AtlanConnectorType.ADLS, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to ADLS.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "adls-connection", // (2)         "connectorName": "adls", // (3)         "qualifiedName": "default/adls/123456789", // (4)         "category": "ObjectStore", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `adls`.
4. The `qualifiedName` should follow the pattern: `default/adls/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `ObjectStore`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### ADLSAccount[¶](#adlsaccount "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An Azure Data Lake Storage [account](../../../models/entities/adlsaccount/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the account.

Java

Python

Kotlin

Raw REST API

| Create an ADLS account | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` ADLSAccount adlsAccount = ADLSAccount.creator( // (1)         "myaccount", // (2)         connectionQualifiedName) // (3)     .build(); AssetMutationResponse response = adlsAccount.save(client); // (4) adlsAccount = response.getResult(adlsAccount); // (5)  ``` |

1. Build up the minimum request to create an account.
2. Provide a human\-readable name for your account.
3. Provide the qualifiedName of the connection for this account.
4. Actually call Atlan to create the account. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created account for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an ADLS account | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` adlsaccount = ADLSAccount.creator( # (1)   name = "myaccount", # (2)   connection_qualified_name = connection_qualified_name # (3) ) response = client.asset.save(adlsaccount) # (4) adls_account_qualified_name = response.assets_created(asset_type=ADLSAccount)[0].qualified_name # (5)  ``` |

1. Build up the minimum request to create an account.
2. Provide a human\-readable name for your account.
3. Provide the `qualified_name` of the connection for this account.
4. Actually call Atlan to create the account.
5. Retrieve the created account for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an ADLS account | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` var adlsAccount = ADLSAccount.creator( // (1)         "myaccount", // (2)         connectionQualifiedName) // (3)     .build() val response = adlsAccount.save(client) // (4) adlsAccount = response.getResult(adlsAccount) // (5)  ``` |

1. Build up the minimum request to create an account.
2. Provide a human\-readable name for your account.
3. Provide the qualifiedName of the connection for this account.
4. Actually call Atlan to create the account. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created account for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "typeName": "ADLSAccount", // (1)       "attributes": {         "name": "myaccount", // (2)         "qualifiedName": "default/adls/123456789/myaccount", // (3)         "connectionQualifiedName": "default/adls/123456789", // (4)         "connectorName": "adls" // (5)       }     }   ] }  ``` |

1. The `typeName` must be exactly `ADLSAccount`.
2. Human\-readable name for your account.
3. The `qualifiedName` should follow the pattern: `default/adls/<epoch>/<name>`, where `default/adls/<epoch>` is the qualifiedName of the connection for this account and `<name>` is the unique name for this account.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this account.
5. The `connectorName` must be exactly `adls`.

### ADLSContainer[¶](#adlscontainer "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An Azure Data Lake Storage [container](../../../models/entities/adlscontainer/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the account that will contain the container.

Java

Python

Kotlin

Raw REST API

| Create an ADLS container | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 ``` | ``` ADLSContainer adlsContainer = ADLSContainer.creator( // (1)         "mycontainer", // (2)         adlsAccount) // (3)     .adlsObjectCount(10) // (4)     .build(); AssetMutationResponse response = adlsContainer.save(client); // (5) adlsContainer = response.getResult(adlsContainer); // (6)  ``` |

1. Build up the minimum request to create a container.
2. Provide a human\-readable name for your container.
3. Provide the account for this container. If you did not already have the object, you could also use `ADLSAccount.refByGuid()` with the GUID of the account, or `ADLSAccount.refByQualifiedName()` with the `qualifiedName` of the account.
4. (Optional) To ensure the UI displays the correct count of `ADLSObject`'s,
set the `adlsObjectCount` directly on the `ADLSContainer` instance.
5. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created container for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an ADLS container | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 ``` | ``` adlscontainer = ADLSContainer.creator( # (1)   name = "mycontainer", # (2)   adls_account_qualified_name = adls_account_qualified_name # (3) ) adlscontainer.adls_object_count = 10 # (4) response = client.asset.save(adlscontainer) # (5) adls_container_qualified_name = response.assets_created(asset_type=ADLSContainer)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a container.
2. Provide a human\-readable name for your container.
3. Provide the `qualified_name` of the ADLS account for this container.
4. (Optional) To ensure the UI displays the correct count of `ADLSObject`'s,
set the `adls_object_count` directly on the `ADLSContainer` instance.
5. Actually call Atlan to create the object.
6. Retrieve the created container for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an ADLS container | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 ``` | ``` var adlsContainer = ADLSContainer.creator( // (1)         "mycontainer", // (2)         adlsAccount) // (3)     .adlsObjectCount(10) // (4)     .build() val response = adlsContainer.save(client) // (5) adlsContainer = response.getResult(adlsContainer) // (6)  ``` |

1. Build up the minimum request to create a container.
2. Provide a human\-readable name for your container.
3. Provide the account for this container. If you did not already have the object, you could also use `ADLSAccount.refByGuid()` with the GUID of the account, or `ADLSAccount.refByQualifiedName()` with the `qualifiedName` of the account.
4. (Optional) To ensure the UI displays the correct count of `ADLSObject`'s,
set the `adlsObjectCount` directly on the `ADLSContainer` instance.
5. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created container for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "entities": [     {       "typeName": "ADLSContainer", // (1)       "attributes": {         "name": "mycontainer", // (2)         "qualifiedName": "default/adls/123456789/myaccount/mycontainer", // (3)         "connectionQualifiedName": "default/adls/123456789", // (4)         "connectorName": "adls", // (5)         "adlsAccount": { // (6)           "typeName": "ADLSAccount", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/adls/123456789/myaccount"           }         }       }     }   ] }  ``` |

1. The `typeName` must be exactly `ADLSContainer`.
2. Human\-readable name for your container.
3. The `qualifiedName` should follow the pattern: `default/adls/<epoch>/<account>/<name>`, where `default/adls/<epoch>/<account>` is the qualifiedName of the account for this container and `<name>` is the unique name for this container.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this container.
5. The `connectorName` must be exactly `adls`.
6. The account in which this container exists is embedded in the `adlsAccount` attribute.
7. The `typeName` for this embedded reference must be `ADLSAccount`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the account. Note: the account must already exist in Atlan before creating the container.

### ADLSObject[¶](#adlsobject "Permanent link")

[5\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/5.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An Azure Data Lake Storage [object](../../../models/entities/adlsobject/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `containerQualifiedName` of the container that will contain the object.

Java

Python

Kotlin

Raw REST API

| Create an ADLS object | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` ADLSObject adlsObject = ADLSObject.creator( // (1)         "myobject.csv", // (2)         adlsContainer) // (3)     .build(); AssetMutationResponse response = adlsObject.save(client); // (4)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the container for this object. If you did not already have the container, you could also use `ADLSContainer.refByGuid()` with the GUID of the container, or `ADLSContainer.refByQualifiedName()` with the `qualifiedName` of the container.
4. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create an ADLS object | |
| --- | --- |
| ``` 29 30 31 32 33 34 ``` | ``` adlsobject = ADLSObject.creator( # (1)   name = "myobject.csv", # (2)   adls_container_name=adls_container_name, # (3)   adls_container_qualified_name=adls_container_qualified_name # (4) ) response = client.asset.save(adlsobject) # (5)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the `name` of the container this object should be created within.
4. Provide the `qualified_name` of the ADLS container.
5. Actually call Atlan to create the object.

| Create an ADLS object | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` val adlsObject = ADLSObject.creator( // (1)         "myobject.csv", // (2)         adlsContainer) // (3)     .build() val response = adlsObject.save(client) // (4)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the container for this object. If you did not already have the container, you could also use `ADLSContainer.refByGuid()` with the GUID of the container, or `ADLSContainer.refByQualifiedName()` with the `qualifiedName` of the container.
4. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "entities": [     {       "typeName": "ADLSObject", // (1)       "attributes": {         "name": "myobject.csv", // (2)         "qualifiedName": "default/adls/123456789/myaccount/mycontainer/myobject.csv", // (3)         "connectionQualifiedName": "default/adls/123456789", // (4)         "adlsAccountQualifiedName": "default/adls/123456789/myaccount", // (5)         "connectorName": "adls", // (6)         "adlsContainerName": "mycontainer", // (7)         "adlsContainer": { // (8)           "typeName": "ADLSContainer", // (9)           "uniqueAttributes": { // (10)             "qualifiedName": "default/adls/123456789/myaccount/mycontainer"           }         }       }     }   ] }  ``` |

1. The `typeName` must be exactly `ADLSObject`.
2. Human\-readable name for your object.
3. The `qualifiedName` should follow the pattern: `default/adls/<epoch>/<account>/<container>/<name>`, where `default/adls/<epoch>/<account>/<container>` is the qualifiedName of the container for this object and `<name>` is the unique name for this object.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this object.
5. The `adlsAccountQualifiedName` must be the exact qualifiedName of the ADLS account.
6. The `connectorName` must be exactly `adls`.
7. The `name` of the container this object should be created within.
8. The container in which this object exists is embedded in the `adlsContainer` attribute.
9. The `typeName` for this embedded reference must be `ADLSContainer`.
10. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the container. Note: the container must already exist in Atlan before creating the object.

#### By prefix[¶](#by-prefix "Permanent link")

Create an ADLS object using prefix:

Java

Python

Java

Raw REST API

Coming soon

| Create an ADLS object using prefix | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 30 ``` | ``` adls_object = ADLSObject.creator_with_prefix(  # (1)     name="myobject.csv",  # (2)     connection_qualified_name=connection_qualified_name,  # (3)     prefix="/some/folder/structure",  # (4)     adls_container_name=container_name, # (5)     adls_container_qualified_name=container_qualified_name,  # (6) ) response = client.asset.save(adls_object)  # (7)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the `qualified_name` of the connection for this object.
4. Provide the folder path where the object is located within the container.
5. Provide the `name` of the container this object should be created within.
6. Provide the `qualified_name` of the container this object should be created within.
7. Actually call Atlan to create the object.

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "ADLSObject", // (1)       "attributes": {         "name": "myobject.csv", // (2)         "qualifiedName": "default/adls/123456789/myaccount/mycontainer//some/folder/structure/myobject.csv", // (3)         "adlsObjectKey": "/some/folder/structure/myobject.csv", // (4)         "connectionQualifiedName": "default/adls/123456789", // (5)         "adlsAccountQualifiedName": "default/adls/123456789/myaccount", // (6)         "connectorName": "adls", // (7)         "adlsContainerName": "mycontainer", // (8)         "adlsContainer": { // (9)           "typeName": "ADLSContainer", // (10)           "uniqueAttributes": { // (11)             "qualifiedName": "default/adls/123456789/myaccount/mycontainer"           }         }       }     }   ] }  ``` |

1. The `typeName` must be exactly `ADLSObject`.
2. Human\-readable name for your object.
3. The `qualifiedName` should follow the pattern: `default/adls/<epoch>/<account>/<container>/<prefix>/<name>`, where `default/adls/<epoch>/<account>/<container>` is the qualifiedName of the container for this object and `<name>` is the unique name for this object.
4. Provide the folder path where the object is located within the bucket.
5. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this object.
6. The `adlsAccountQualifiedName` must be the exact qualifiedName of the ADLS account.
7. The `connectorName` must be exactly `adls`.
8. The `name` of the container this object should be created within.
9. The container in which this object exists is embedded in the `adlsContainer` attribute.
10. The `typeName` for this embedded reference must be `ADLSContainer`.
11. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the container. Note: the container must already exist in Atlan before creating the object.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the object store structure is an `Asset`, and can therefore be related to the following other assets.

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

2023\-01\-112025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/adls/) to provide us with more information. 

Back to top

[Previous Manage AWS S3 assets](../aws/) [Next Manage Google Cloud Storage assets](../gcs/) 

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

