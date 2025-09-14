# Source URL
https://developer.atlan.com/patterns/create/cube/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/cube/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on multidimensional cube assets.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on multidimensional cube assets.
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/cube.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage cube assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/cube/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on multidimensional cube assets.
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/cube.png
meta-twitter:title: Manage cube assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage cube assets - Developer
-->

[Skip to content](#manage-cube-assets) Developer Manage cube assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage cube assets[¶](#manage-cube-assets "Permanent link")
===========================================================

You can represent most multidimensional cube objects through a common set of multidimensional dataset assets. You can use this structure to create assets for any cube\-oriented system you like:

```
erDiagram
    Connection ||--o{ Cube : contains
    Cube ||--o{ CubeDimension : cubeDimensions
    CubeDimension ||--o{ CubeHierarchy : cubeHierarchies
    CubeHierarchy ||--o{ CubeField : cubeFields
    CubeField ||--o{ CubeField : cubeNestedFields
```
In general, these should be:

* [Created in top\-down order](../) (connection, then cube, then dimension, and so on)
* Deleted in bottom\-up order (fields, then hierarchies, then dimensions, then cubes, then connection)[1](#fn:1)

Where do the icons come from?

Atlan will display icons for these assets based on the [type of connector](../../../models/connectortypes/) you define in the Connection. You can use API\-first types like `essbase`, for example.

However, note that in all cases the same structure (and types) as illustrated above are used — there are no differences in types between these multidimensional dataset assets across different systems.

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. As noted above, a specific setting is also required to determine the icons to use for assets in the connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a cube connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "cube-connection", // (3)         AtlanConnectorType.ESSBASE, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a cube connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, Cube, CubeDimension, CubeHierarchy, CubeField from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="cube-connection", # (4)     connector_type=AtlanConnectorType.ESSBASE, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"], # (8) ) response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection.
6. List the workspace roles that should be able to administer the connection (if any, defaults to `None`). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (if any, defaults to `None`). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (if any, defaults to `None`). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a cube connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "cube-connection", // (3)         AtlanConnectorType.ESSBASE, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "cube-connection", // (2)         "connectorName": "essbase", // (3)         "qualifiedName": "default/essbase/123456789", // (4)         "category": "database", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` should be a known value, such as `essbase`.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection. If you use a value that is *not* a known value, you will have a default gear icon instead.
4. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created, and `<connectorName>` exactly matches the value used for `connectorName` (above).
5. The `category` should also be a known value, that defines the kind of cube store. This should be `database`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### Cube[¶](#cube "Permanent link")

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [cube](../../../models/entities/cube/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the cube.

Java

Python

Kotlin

Raw REST API

| Create a cube | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` Cube cube = Cube.creator( // (1)         "cube_name", // (2)         connectionQualifiedName) // (3)     .cubeDimensionCount(10) // (4)     .build(); AssetMutationResponse response = cube.save(client); // (5) cube = response.getResult(cube); // (6)  ``` |

1. Build up the minimum request to create a cube.
2. Provide a human\-readable name for your cube.
3. Provide the qualifiedName of the connection for this cube.
4. (Optional) To ensure the UI displays the correct count of `CubeDimensions`'s, set the `cubeDimensionCount` directly on the `cube` instance.
5. Actually call Atlan to create the cube. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created cube for use in subsequent creation calls.

Coming soon

| Create a cube | |
| --- | --- |
| ``` 16 17 18 19 20 21 22 ``` | ``` cube = Cube.creator( # (1)     name="cube_name", # (2)     connection_qualified_name=connection_qualified_name # (3) ) cube.cube_dimension_count = 10 # (4) response = client.asset.save(cube) # (5) cube_qualified_name = response.assets_created(asset_type=Cube)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a cube.
2. Provide a human\-readable name for your cube.
3. Provide the qualified\_name of the connection for this cube.
4. (Optional) To ensure the UI displays the correct count of `CubeDimensions`'s, set the `cube_dimension_count` directly on the `Cube` instance.
5. Actually call Atlan to create the cube.
6. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a cube | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` var cube = Cube.creator( // (1)         "cube_name", // (2)         connectionQualifiedName) // (3)     .cubeDimensionCount(10) // (4)     .build() val response = cube.save(client) // (5) cube = response.getResult(cube) // (6)  ``` |

1. Build up the minimum request to create a cube.
2. Provide a human\-readable name for your cube.
3. Provide the qualifiedName of the connection for this cube.
4. (Optional) To ensure the UI displays the correct count of `CubeDimensions`'s, set the `cubeDimensionCount` directly on the `cube` instance.
5. Actually call Atlan to create the cube. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created cube for use in subsequent creation calls.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "Cube", // (1)       "attributes": {         "name": "cube_name", // (2)         "qualifiedName": "default/essbase/123456789/cube_name", // (3)         "connectionQualifiedName": "default/essbase/123456789", // (4)         "connectorName": "essbase", // (5)         "cubeDimensionCount": 10 // (6)       }     }   ] }  ``` |

1. The `typeName` must be exactly `Cube`.
2. Human\-readable name for your cube.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<name>`, where `default/<connectorName>/<epoch>` is the qualifiedName of the connection for this cube and `<name>` is the name of this cube.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this cube.
5. The `connectorName` must be exactly as used when defining the connection.
6. (Optional) To ensure the UI displays the correct count of `CubeDimensions`'s, set the `cubeDimensionCount` directly on the `cube` instance.

### CubeDimension[¶](#cubedimension "Permanent link")

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [dimension](../../../models/entities/cubedimension/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the dimension, and the names and qualifiedNames of the dimension's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a cube dimension | |
| --- | --- |
| ``` 18 19 20 21 22 23 24 ``` | ``` CubeDimension dimension = CubeDimension.creator( // (1)         "dimension_name", // (2)         cube) // (3)     .cubeHierarchyCount(10) // (4)     .build(); AssetMutationResponse response = dimension.save(client); // (5) dimension = response.getResult(dimension); // (6)  ``` |

1. Build up the minimum request to create a dimension.
2. Provide a human\-readable name for your dimension.
3. Provide the cube for this dimension. If you did not already have the object, you could also use `Cube.refByGuid()` with the GUID of the cube, or `Cube.refByQualifiedName()` with the `qualifiedName` of the cube.
4. (Optional) To ensure the UI displays the correct count of `CubeHierarchy`'s, set the `cubeHierarchyCount` directly on the `CubeHierarchy` instance.
5. Actually call Atlan to create the dimension. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created dimension for use in subsequent creation calls.

Coming soon

| Create a cube dimension | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 ``` | ``` dimension = CubeDimension.creator( # (1)     name="dimension_name", # (2)     cube_qualified_name=cube_qualified_name # (3) ) dimension.cube_hierarchy_count = 10 # (4) response = client.asset.save(dimension) # (5) dimension_qualified_name = response.assets_created(asset_type=CubeDimension)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a dimension.
2. Provide a human\-readable name for your dimension.
3. Provide the qualified\_name of the cube for this dimension.
4. (Optional) To ensure the UI displays the correct count of `CubeHierarchy`'s, set the `cube_hierarchy_count` directly on the `CubeDimension` instance.
5. Actually call Atlan to create the dimension.
6. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a cube dimension | |
| --- | --- |
| ``` 18 19 20 21 22 23 24 ``` | ``` var dimension = CubeDimension.creator( // (1)         "dimension_name", // (2)         cube) // (3)     .cubeHierarchyCount(10) // (4)     .build() val response = dimension.save(client) // (5) dimension = response.getResult(dimension) // (6)  ``` |

1. Build up the minimum request to create a dimension.
2. Provide a human\-readable name for your dimension.
3. Provide the cube for this dimension. If you did not already have the object, you could also use `Cube.refByGuid()` with the GUID of the cube, or `Cube.refByQualifiedName()` with the `qualifiedName` of the cube.
4. (Optional) To ensure the UI displays the correct count of `CubeHierarchy`'s, set the `cubeHierarchyCount` directly on the `CubeHierarchy` instance.
5. Actually call Atlan to create the dimension. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created dimension for use in subsequent creation calls.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "CubeDimension", // (1)       "attributes": {         "name": "dimension_name", // (2)         "qualifiedName": "default/essbase/123456789/cube_name/dimension_name", // (3)         "connectionQualifiedName": "default/essbase/123456789", // (4)         "connectorName": "essbase", // (5)         "cube": { // (6)           "typeName": "Cube", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/essbase/123456789/cube_name"           }         },         "cubeName": "cube_name", // (9)         "cubeQualifiedName": "default/essbase/123456789/cube_name", // (10)         "cubeHierarchyCount": 10 // (11)       }     }   ] }  ``` |

1. The `typeName` must be exactly `CubeDimension`.
2. Human\-readable name for your dimension.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<cube_name>/<name>`, where `default/<connectorName>/<epoch>/<cube_name>` is the qualifiedName of the cube for this dimension, and `<name>` is the name of the dimension.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this dimension.
5. The `connectorName` must be exactly as used when defining the connection.
6. The cube in which this dimension exists is embedded in the `cube` attribute.
7. The `typeName` for this embedded reference must be `Cube`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the cube. Note: the cube must already exist in Atlan before creating the dimension.
9. The `cubeName` should be the human\-readable name of the cube.
10. The `cubeQualifiedName` should be the qualifiedName of the cube.
11. (Optional) To ensure the UI displays the correct count of `CubeHierarchy`'s, set the `cubeHierarchyCount` directly on the `CubeHierarchy` instance.

### CubeHierarchy[¶](#cubehierarchy "Permanent link")

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [hierarchy](../../../models/entities/cubehierarchy/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the hierarchy, and the names and qualifiedNames of the hierarchy's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a cube hierarchy | |
| --- | --- |
| ``` 25 26 27 28 29 30 31 ``` | ``` CubeHierarchy hierarchy = CubeHierarchy.creator( // (1)         "hierarchy_name", // (2)         dimension) // (3)     .cubeFieldCount(10) // (4)     .build(); AssetMutationResponse response = hierarchy.save(client); // (5) hierarchy = response.getResult(hierarchy); // (6)  ``` |

1. Build up the minimum request to create a hierarchy.
2. Provide a human\-readable name for your hierarchy.
3. Provide the dimension for this hierarchy. If you did not already have the object, you could also use `CubeDimension.refByGuid()` with the GUID of the dimension, or `CubeDimension.refByQualifiedName()` with the `qualifiedName` of the dimension.
4. (Optional) To ensure the UI displays the correct count of `CubeField`'s, set the `cubeFieldCount` directly on the `CubeHierarchy` instance.
5. Actually call Atlan to create the hierarchy. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created hierarchy for use in subsequent creation calls.

Coming soon

| Create a cube hierarchy | |
| --- | --- |
| ``` 30 31 32 33 34 35 36 ``` | ``` hierarchy = CubeHierarchy.creator( # (1)     name="hierarchy_name", # (2)     cube_dimension_qualified_name=dimension_qualified_name # (3) ) hierarchy.cube_field_count = 10 # (4) response = client.asset.save(hierarchy) # (5) hierarchy_qualified_name = response.assets_created(asset_type=CubeHierarchy)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a hierarchy.
2. Provide a human\-readable name for your hierarchy.
3. Provide the qualified\_name of the dimension for this hierarchy.
4. (Optional) To ensure the UI displays the correct count of `CubeField`'s, set the `cube_field_count` directly on the `CubeHierarchy` instance.
5. Actually call Atlan to create the hierarchy.
6. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a cube hierarchy | |
| --- | --- |
| ``` 25 26 27 28 29 30 31 ``` | ``` var hierarchy = CubeHierarchy.creator( // (1)         "hierarchy_name", // (2)         dimension) // (3)     .cubeFieldCount(10) // (4)     .build() val response = hierarchy.save(client) // (5) hierarchy = response.getResult(hierarchy) // (6)  ``` |

1. Build up the minimum request to create a hierarchy.
2. Provide a human\-readable name for your hierarchy.
3. Provide the dimension for this hierarchy. If you did not already have the object, you could also use `CubeDimension.refByGuid()` with the GUID of the dimension, or `CubeDimension.refByQualifiedName()` with the `qualifiedName` of the dimension.
4. (Optional) To ensure the UI displays the correct count of `CubeField`'s, set the `cubeFieldCount` directly on the `CubeHierarchy` instance.
5. Actually call Atlan to create the hierarchy. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created hierarchy for use in subsequent creation calls.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` {   "entities": [     {       "typeName": "CubeHierarchy", // (1)       "attributes": {         "name": "hierarchy_name", // (2)         "qualifiedName": "default/essbase/123456789/cube_name/dimension_name/hierarchy_name", // (3)         "connectionQualifiedName": "default/essbase/123456789", // (4)         "connectorName": "essbase", // (5)         "cubeDimension": { // (6)           "typeName": "CubeDimension", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/essbase/123456789/cube_name/dimension_name"           }         },         "cubeDimensionName": "dimension_name", // (9)         "cubeDimensionQualifiedName": "default/essbase/123456789/cube_name/dimension_name", // (10)         "cubeName": "cube_name", // (11)         "cubeQualifiedName": "default/essbase/123456789/cube_name", // (12)         "cubeFieldCount": 10 // (13)       }     }   ] }  ``` |

1. The `typeName` must be exactly `CubeHierarchy`.
2. Human\-readable name for your hierarchy.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<cube_name>/<dimension_name>/<name>`, where `default/<connectorName>/<epoch>/<cube_name>/<dimension_name>` is the qualifiedName of the dimension for this hierarchy, and `<name>` is the name of the hierarchy.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this hierarchy.
5. The `connectorName` must be exactly as used when defining the connection.
6. The dimension in which this hierarchy exists is embedded in the `cubeDimension` attribute.
7. The `typeName` for this embedded reference must be `CubeDimension`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the dimension. Note: the dimension must already exist in Atlan before creating the hierarchy.
9. The `cubeDimensionName` should be the human\-readable name of the dimension.
10. The `cubeDimensionQualifiedName` should be the qualifiedName of the dimension.
11. The `cubeName` should be the human\-readable name of the cube.
12. The `cubeQualifiedName` should be the qualifiedName of the cube.
13. (Optional) To ensure the UI displays the correct count of `CubeField`'s, set the `cubeFieldCount` directly on the `CubeHierarchy` instance.

### CubeField[¶](#cubefield "Permanent link")

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [field](../../../models/entities/cubefield/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the field, and the names and qualifiedNames of the fields's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a cube field | |
| --- | --- |
| ``` 32 33 34 35 36 ``` | ``` CubeField field = CubeField.creator( // (1)         "field1", // (2)         hierarchy) // (3)     .build(); AssetMutationResponse response = field.save(client); // (4)  ``` |

1. Build up the minimum request to create a field.
2. Provide a human\-readable name for your field.
3. Provide the parent for this field. If you did not already have the object, you could also use `CubeHierarchy.refByGuid()` with the GUID of a hierarchy (or `CubeField.refByGuid()` if this is a nested field), or `CubeHierarchy.refByQualifiedName()` with the `qualifiedName` of a hierarchy (or `CubeField.refByQualifiedName()` if this is a nested field).
4. Actually call Atlan to create the field. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

Coming soon

| Create a cube field | |
| --- | --- |
| ``` 37 38 39 40 41 42 ``` | ``` field = CubeField.creator( # (1)     name="field1", # (2)     parent_type=Table, # (3)     parent_qualified_name=hierarchy_qualified_name # (4) ) response = client.asset.save(field) # (5)  ``` |

1. Build up the minimum request to create a field.
2. Provide a human\-readable name for your field.
3. Specify the type of the parent asset for the field (hierarchy or field).
4. Provide the qualified\_name of the parent asset for this field. In this example you're defining a field in a hierarchy, so you can use the `hierarchy_qualified_name` created above. If the parent asset type were `CubeField` you would want to use the `qualified_name` of some previously\-created field.
5. Actually call Atlan to create the field.

| Create a cube field | |
| --- | --- |
| ``` 32 33 34 35 36 ``` | ``` val field = CubeField.creator( // (1)         "field1", // (2)         hierarchy) // (3)     .build() val response = field.save(client) // (4)  ``` |

1. Build up the minimum request to create a field.
2. Provide a human\-readable name for your field.
3. Provide the parent for this field. If you did not already have the object, you could also use `CubeHierarchy.refByGuid()` with the GUID of a hierarchy (or `CubeField.refByGuid()` if this is a nested field), or `CubeHierarchy.refByQualifiedName()` with the `qualifiedName` of a hierarchy (or `CubeField.refByQualifiedName()` if this is a nested field).
4. Actually call Atlan to create the field. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` {   "entities": [     {       "typeName": "CubeField", // (1)       "attributes": {         "name": "field1", // (2)         "qualifiedName": "default/essbase/123456789/cube_name/dimension_name/hierarchy_name/field1", // (3)         "connectionQualifiedName": "default/essbase/123456789", // (4)         "connectorName": "essbase", // (5)         "cubeHierarchy": { // (6)           "typeName": "CubeHierarchy", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/essbase/123456789/cube_name/dimension_name/hierarchy_name"           }         },         "cubeHierarchyName": "hierarchy_name", // (9)         "cubeHierarchyQualifiedName": "default/essbase/123456789/cube_name/dimension_name/hierarchy_name", // (10)         "cubeDimensionName": "dimension_name", // (11)         "cubeDimensionQualifiedName": "default/essbase/123456789/cube_name/dimension_name", // (12)         "cubeName": "cube_name", // (13)         "cubeQualifiedName": "default/essbase/123456789/cube_name" // (14)       }     }   ] }  ``` |

1. The `typeName` must be exactly `CubeField`.
2. Human\-readable name for your field.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<cube_name>/<dimension_name>/<hierarchy_name>/<name>`, where `default/<connectorName>/<epoch>/<cube_name>/<dimension_name>/<hierarchy_name>` is the qualifiedName of the parent hierarchy for this field, and `<name>` is the name of the field.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this field.
5. The `connectorName` must be exactly as used when defining the connection.
6. The hierarchy in which the field exists is embedded in the `cubeHierarchy` attribute.
7. The `typeName` for this embedded reference must be `CubeHierarchy`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the hierarchy. Note: the hierarchy must already exist in Atlan before creating the field.
9. The `cubeHierarchyName` should be the human\-readable name of the hierarchy.
10. The `cubeHierarchyQualifiedName` should be the qualifiedName of the hierarchy.
11. The `cubeDimensionName` should be the human\-readable name of the dimension.
12. The `cubeDimensionQualifiedName` should be the qualifiedName of the dimension.
13. The `cubeName` should be the human\-readable name of the cube.
14. The `cubeQualifiedName` should be the qualifiedName of the cube.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the cube structure is an `Asset`, and can therefore be related to the following other assets.

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

2024\-06\-162025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/cube/) to provide us with more information. 

Back to top

[Previous Manage relational assets](../relational/) [Next Manage AWS S3 assets](../aws/) 

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

