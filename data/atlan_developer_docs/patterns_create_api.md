# Source URL
https://developer.atlan.com/patterns/create/api/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/api/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on API assets (specs, paths, objects, queries, fields).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on API assets (specs, paths, objects, queries, fields).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/api.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage API assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/api/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on API assets (specs, paths, objects, queries, fields).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/api.png
meta-twitter:title: Manage API assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage API assets - Developer
-->

[Skip to content](#manage-api-assets) Developer Manage API assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operations on API assets (specs, paths, objects, queries, fields).

[https://demo.arcade.software/8WRUQKv9NU4QRRV0D4IH?embed](https://demo.arcade.software/8WRUQKv9NU4QRRV0D4IH?embed)

Example OpenAPI crawler

For a jump\-start, [read more about an example for crawling OpenAPI specifications](../../../samples/loaders/openapi/), or grab the code from:  [atlanhq/atlan\-java\-samples](https://github.com/atlanhq/atlan-java-samples)

In general, these should be:

* [Created in top\-down order](../) (connection, then spec/object/query, then path/field)
* Deleted in bottom\-up order (paths/fields, then specs/objects/queries, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ APISpec : contains
  APISpec ||--o{ APIPath : contains
  Connection ||--o{ APIObject : contains
  Connection ||--o{ APIQuery : contains
  APIObject ||--o{ APIField : contains
  APIQuery ||--o{ APIField : contains
  APIObject o|..o{ APIField : refers
  APIObject o|..o{ APIQuery : refers
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An API [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as an API connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create an API connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "api-connection", // (3)         AtlanConnectorType.API, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to API.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an API connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, APISpec, APIPath, APIObject, APIQuery, APIField from pyatlan.model.enums import AtlanConnectorType, APIQueryParamTypeEnum  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="api-connection", # (4)     connector_type=AtlanConnectorType.API, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"] # (8) )   response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to API.
6. List the workspace roles that should be able to administer the connection (or `None` if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the `qualified_name` for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an API connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin"); // (1) val connection = Connection.creator( // (2)         "api-connection", // (3)         AtlanConnectorType.API, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to API.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "api-connection", // (2)         "connectorName": "api", // (3)         "qualifiedName": "default/api/123456789", // (4)         "category": "API", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `api`.
4. The `qualifiedName` should follow the pattern: `default/api/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `API`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### APISpec[¶](#apispec "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An API [spec](../../../models/entities/apispec/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the spec.

Java

Python

Kotlin

Raw REST API

| Create an API spec | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` APISpec apiSpec = APISpec.creator( // (1)         "api-spec", // (2)         connectionQualifiedName) // (3)     .build(); AssetMutationResponse response = apiSpec.save(client); // (4) apiSpec = response.getResult(apiSpec); // (5)  ``` |

1. Build up the minimum request to create a spec.
2. Provide a human\-readable name for your spec.
3. Provide the qualifiedName of the connection for this spec.
4. Actually call Atlan to create the spec. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created spec for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an API spec | |
| --- | --- |
| ``` 17 18 19 20 21 22 ``` | ``` apiSpec = APISpec.creator( # (1)     name = "api-spec", # (2)     connection_qualified_name = connection_qualified_name # (3) ) response = client.asset.save(apiSpec) # (4) spec_qualified_name = response.assets_created(asset_type=APISpec)[0].qualified_name # (5)  ``` |

1. Build up the minimum request to create an spec.
2. Provide a human\-readable name for your spec.
3. Provide the `qualified_name` of the connection for this spec.
4. Actually call Atlan to create the spec.
5. Retrieve the created spec for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an API spec | |
| --- | --- |
| ``` 11 12 13 14 15 16 ``` | ``` var apiSpec = APISpec.creator( // (1)         "api-spec", // (2)         connectionQualifiedName) // (3)     .build() val response = apiSpec.save(client) // (4) apiSpec = response.getResult(apiSpec) // (5)  ``` |

1. Build up the minimum request to create a spec.
2. Provide a human\-readable name for your spec.
3. Provide the qualifiedName of the connection for this spec.
4. Actually call Atlan to create the spec. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. Retrieve the created spec for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "typeName": "APISpec", // (1)       "attributes": {         "name": "api-spec", // (2)         "qualifiedName": "default/api/123456789/api-spec", // (3)         "connectionQualifiedName": "default/api/123456789", // (4)         "connectorName": "api" // (5)       }     }   ] }  ``` |

1. The `typeName` must be exactly `APISpec`.
2. Human\-readable name for your spec.
3. The `qualifiedName` should follow the pattern: `default/api/<epoch>/<specName>`, where `default/api/<epoch>` is the qualifiedName of the connection for this spec and `<specName>` is the name of this spec.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this spec.
5. The `connectorName` must be exactly `api`.

### APIPath[¶](#apipath "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An API [path](../../../models/entities/apipath/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the path and the `apiSpec` the path is in. If the `name` of your path does no give the URI of the endpoint it represents, be sure to also specify the `apiPathRawURI`.

Java

Python

Kotlin

Raw REST API

| Create an API path | |
| --- | --- |
| ``` 18 19 20 21 22 ``` | ``` APIPath apiPath = APIPath.creator( // (1)         "/api/path", // (2)         apiSpec) // (3)     .build(); AssetMutationResponse response = apiPath.save(client); // (4)  ``` |

1. Build up the minimum request to create a path.
2. Provide the unique endpoint URI for this path. (The SDK will also use this by default as the name for the path. If you want a different name, simply add a `.name()` call onto the builder with your preferred name.)
3. Provide the spec for this path. If you did not already have the object, you could also use `APISpec.refByGuid()` with the GUID of the spec, or `APISpec.refByQualifiedName()` with the `qualifiedName` of the spec.
4. Actually call Atlan to create the path. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create an API path | |
| --- | --- |
| ``` 23 24 25 26 27 ``` | ``` apiPath = APIPath.creator( # (1)     path_raw_uri = "/api/path", # (2)     spec_qualified_name = spec_qualified_name # (3) ) response = client.asset.save(apiPath) # (4)  ``` |

1. Build up the minimum request to create an path.
2. Provide the unique endpoint URI for this path.
3. Provide the `qualified_name` of the API path.
4. Actually call Atlan to create the path.

| Create an API path | |
| --- | --- |
| ``` 18 19 20 21 22 ``` | ``` val apiPath = APIPath.creator( // (1)         "/api/path", // (2)         apiSpec) // (3)     .build() val response = apiPath.save(client) // (4)  ``` |

1. Build up the minimum request to create a path.
2. Provide the unique endpoint URI for this path. (The SDK will also use this by default as the name for the path. If you want a different name, simply add a `.name()` call onto the builder with your preferred name.)
3. Provide the spec for this path. If you did not already have the object, you could also use `APISpec.refByGuid()` with the GUID of the spec, or `APISpec.refByQualifiedName()` with the `qualifiedName` of the spec.
4. Actually call Atlan to create the path. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [     {       "typeName": "APIPath", // (1)       "attributes": {         "name": "/api/path", // (2)         "apiPathRawURI": "/api/path", // (3)         "qualifiedName": "default/api/123456789/api-spec/api/path", // (4)         "connectionQualifiedName": "default/api/123456789", // (5)         "connectorName": "api", // (6)         "apiSpec": { // (7)           "typeName": "APISpec", // (8)           "uniqueAttributes": { // (9)             "qualifiedName": "default/api/123456789/api-spec"           }         }       }     }   ] }  ``` |

1. The `typeName` must be exactly `APIPath`.
2. Human\-readable name for your path.
3. The `apiPathRawURI` should be the unique endpoint URI this path represents.
4. The `qualifiedName` should follow the pattern: `default/api/<epoch>/<specName>/<apiPathRawURI>`, where `default/api/<epoch>/<specName>` is the qualifiedName of the spec for this path and `<apiPathRawURI>` is the unique endpoint URI the path represents.
5. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this path.
6. The `connectorName` must be exactly `api`.
7. The spec in which this path exists is embedded in the `apiSpec` attribute.
8. The `typeName` for this embedded reference must be `APISpec`.
9. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the spec. Note: the spec must already exist in Atlan before creating the path.

### APIObject[¶](#apiobject "Permanent link")

[2\.5\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.5.3 "Minimum version")

An API [object](../../../models/entities/apiobject/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the object. Optionally, you can also provide the count of API field that exists in the object as `apiFieldCount`.

Python

Raw REST API

| Create an API object | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 ``` | ``` apiObject = APIObject.creator( # (1)     name = "api-object", # (2)     connection_qualified_name = connection_qualified_name, # (3)     api_field_count = 2 # (4) ) response = client.asset.save(apiObject) # (5) object_qualified_name = response.assets_created(asset_type=APIObject)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the `qualified_name` of the connection for this object.
4. Provide the count of fields that exist in the object. Use None if no field exists in this object.
5. Actually call Atlan to create the object.
6. Retrieve the created object for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "APIObject", // (1)       "attributes": {         "name": "api-object", // (2)         "qualifiedName": "default/api/123456789/api-object", // (3)         "connectionQualifiedName": "default/api/123456789", // (4)         "connectorName": "api", // (5)         "apiFieldCount": 2 // (6)       }     }   ] }  ``` |

1. The `typeName` must be exactly `APIObject`.
2. Human\-readable name for your object.
3. The `qualifiedName` should follow the pattern: `default/api/<epoch>/<objectName>`, where `default/api/<epoch>` is the qualifiedName of the connection for this object and `<objectName>` is the name of this object.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this object.
5. The `connectorName` must be exactly `api`.
6. The `apiFieldCount` should be the count of the fields present in the object. This is not a required attribute and can be excluded.

### APIQuery[¶](#apiquery "Permanent link")

[2\.5\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.5.3 "Minimum version")

An API [query](../../../models/entities/apiquery/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the query. 

Optionally, you can provide other attribute which enrich the query asset. Like `apiInputFieldCount` to store the count of input API fields in the query. `apiQueryOutputType` and `apiQueryOutputTypeSecondary` to store the query output types. If the query refers to an object in its output, it requires `apiIsObjectReference` and `apiObjectQualifiedName` to be populated.

Python

Raw REST API

| Create an API query | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` apiQuery = APIQuery.creator( # (1)     name = "api-query", # (2)     connection_qualified_name = connection_qualified_name, # (3)     api_input_field_count = 2, # (4)     api_query_output_type="api-object-ref", # (5)     api_query_output_type_secondary="Object", # (6)     is_object_reference=True, # (7)     reference_api_object_qualified_name="default/api/123456789/api-object-ref" # (8) ) response = client.asset.save(apiQuery) # (9) query_qualified_name = response.assets_created(asset_type=APIQuery)[0].qualified_name # (10)  ``` |

1. Build up the minimum request to create a query.
2. Provide a human\-readable name for your query.
3. Provide the `qualified_name` of the connection for this query.
4. Provide the count of input fields that exist in the query. Use `None` if no input field exists in this query.
5. Provide the primary type for the output of the query. E.g.: If Object/api\-obj\-ref, then api\-obj\-ref is primary.
6. Provide the secondary type for the output of the query. E.g.: If Object/api\-obj\-ref, then Object is secondary.
7. If the Output of the query refers to an object make it True or else False.
8. If `is_object_reference` is True, provide the qualified name of the object this query refers to in output. Or `None`.
9. Actually call Atlan to create the query.
10. Retrieve the created query for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` {   "entities": [     {       "typeName": "APIQuery", // (1)       "attributes": {         "name": "api-query", // (2)         "qualifiedName": "default/api/123456789/api-query", // (3)         "connectionQualifiedName": "default/api/123456789", // (4)         "connectorName": "api", // (5)         "apiInputFieldCount": 2, // (6)         "apiQueryOutputType": "api-object-ref", // (7)         "apiQueryOutputTypeSecondary": "Object", // (8)         "apiIsObjectReference": true, // (9)         "apiObjectQualifiedName": "default/api/123456789/api-object-ref" // (10)       }     }   ] }  ``` |

1. The `typeName` must be exactly `APIQuery`.
2. Human\-readable name for your query.
3. The `qualifiedName` should follow the pattern: `default/api/<epoch>/<queryName>`, where `default/api/<epoch>` is the qualifiedName of the connection for this query and `<queryName>` is the name of this query.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this query.
5. The `connectorName` must be exactly `api`.
6. The `apiInputFieldCount` should be the count of the input fields present in the object. For no input fields, remove the attribute from the request.
7. The `apiQueryOutputType` is the primary type for the output of the query. E.g.: If Object/api\-obj\-ref, then api\-obj\-ref is primary.
8. The `apiQueryOutputTypeSecondary` is the secondary type for the output of the query. E.g.: If Object/api\-obj\-ref, then Object is secondary.
9. The `apiIsObjectReference` should be true when the query refers to an object in its output.
10. The `apiObjectQualifiedName` is the qualified name of the object this query refers to in its output. Remove attribute when `apiIsObjectReference` is false.

### APIField[¶](#apifield "Permanent link")

[2\.5\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.5.3 "Minimum version")

An API [field](../../../models/entities/apifield/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the field and either the `apiObject` or the `apiQuery` the field is in.

Optionally, you can provide other attribute which enrich the field asset. Like `apiFieldType` and `apiFieldTypeSecondary` to store the field types. If the field refers to an object, it requires `apiIsObjectReference` and `apiObjectQualifiedName` to be populated.

#### APIField inside APIObject[¶](#apifield-inside-apiobject "Permanent link")

Python

Raw REST API

| Create an API field inside an API Object | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 30 31 32 33 34 ``` | ``` apifield = APIField.creator( # (1)     name = "api-field", # (2)     parent_api_object_qualified_name = object_qualified_name, # (3)     parent_api_query_qualified_name = None, # (4)     connection_qualified_name = connection_qualified_name, # (5)     api_field_type="api-object-ref", # (6)     api_field_type_secondary="Object", # (7)     is_api_object_reference=True, # (8)     reference_api_object_qualified_name="default/api/123456789/api-object-ref", # (9)     api_query_param_type=None # (10) ) response = client.asset.save(apifield) # (11)  ``` |

1. Build up the minimum request to create a field.
2. Provide the human\-readable name for this field.
3. Provide the `qualified_name` of the API object, this field exists in.
4. `None` for when this object exists in an object and not in a query.
5. Provide the `qualified_name` of the connection for this field.
6. Provide the primary type of the field.
7. Provide the secondary type of the field.
8. True when the field refers to an object. Else False.
9. Provide the `qualified_name` of the API object this field refers to. `None` when `is_api_object_reference` is False.
10. `None` when field is inside an object. Holds Enum value when inside a query as input.
11. Actually call Atlan to create the path.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` {   "entities": [     {       "typeName": "APIField", // (1)       "attributes": {         "name": "api-field", // (2)         "qualifiedName": "default/api/123456789/api-object/api-field", // (3)         "connectionQualifiedName": "default/api/123456789", // (4)         "connectorName": "api", // (5)         "apiFieldType": "String", // (6)         "apiFieldTypeSecondary": "String", // (7)         "apiObject": { // (8)           "typeName": "APIObject", // (9)           "uniqueAttributes": { // (10)             "qualifiedName": "default/api/123456789/api-object"           }         },         "apiIsObjectReference": true, // (11)         "apiObjectQualifiedName": "default/api/123456789/api-object-ref" // (12)       }     }   ] }  ``` |

1. The `typeName` must be exactly `APIField`.
2. Human\-readable name for your field.
3. The `qualifiedName` should follow the pattern: `default/api/<epoch>/<objectName>/<fieldName>`, where `default/api/<epoch>/<objectName>` is the qualifiedName of the object for this field and `<fieldName>` is the human\-readable name of the field.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this field.
5. The `connectorName` must be exactly `api`.
6. The `apiFieldType` is the primary type of the field.
7. The `apiFieldTypeSecondary` is the secondary type of the field.
8. The object in which this field exists is embedded in the `apiObject` attribute.
9. The `typeName` for this embedded reference must be `APIObject`.
10. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the object. Note: the object must already exist in Atlan before creating the path.
11. The `apiIsObjectReference` should be true when this field refers to an object.
12. The `apiObjectQualifiedName` should incldue the reference object qualified\_name when `apiIsObjectReference` is true.

#### APIField inside APIQuery[¶](#apifield-inside-apiquery "Permanent link")

Python

Raw REST API

| Create an API field inside an API Query | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 30 31 32 33 34 ``` | ``` apifield = APIField.creator( # (1)     name = "api-field", # (2)     parent_api_object_qualified_name = None, # (3)     parent_api_query_qualified_name = query_qualified_name, # (4)     connection_qualified_name = connection_qualified_name, # (5)     api_field_type="api-object-ref", # (6)     api_field_type_secondary="Object", # (7)     is_api_object_reference=True, # (8)     reference_api_object_qualified_name="default/api/123456789/api-object-ref", # (9)     api_query_param_type=APIQueryParamTypeEnum.INPUT # (10) ) response = client.asset.save(apifield) # (11)  ``` |

1. Build up the minimum request to create a field.
2. Provide the human\-readable name for this field.
3. `None` for when this object exists in a query and not in an object.
4. Provide the `qualified_name` of the API query, this field exists in.
5. Provide the `qualified_name` of the connection for this field.
6. Provide the primary type of the field.
7. Provide the secondary type of the field.
8. True when the field refers to an object. Else False.
9. Provide the `qualified_name` of the API object this field refers to. `None` when `is_api_object_reference` is False.
10. Provide the enum value INPUT, if the field is an input to the query.
11. Actually call Atlan to create the path.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` {   "entities": [     {       "typeName": "APIField", // (1)       "attributes": {         "name": "api-field", // (2)         "qualifiedName": "default/api/123456789/api-query/api-field", // (3)         "connectionQualifiedName": "default/api/123456789", // (4)         "connectorName": "api", // (5)         "apiFieldType": "String", // (6)         "apiFieldTypeSecondary": "String", // (7)         "apiQuery": { // (8)           "typeName": "APIQuery", // (9)           "uniqueAttributes": { // (10)             "qualifiedName": "default/api/123456789/api-query"           }         },         "apiIsObjectReference": true, // (11)         "apiObjectQualifiedName": "default/api/123456789/api-object-ref", // (12)         "apiQueryParamType": "Input" // (13)       }     }   ] }  ``` |

1. The `typeName` must be exactly `APIField`.
2. Human\-readable name for your field.
3. The `qualifiedName` should follow the pattern: `default/api/<epoch>/<queryName>/<fieldName>`, where `default/api/<epoch>/<queryName>` is the qualifiedName of the query for which this field is an input and `<fieldName>` is the human\-readable name of the field.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this field.
5. The `connectorName` must be exactly `api`.
6. The `apiFieldType` is the primary type of the field.
7. The `apiFieldTypeSecondary` is the secondary type of the field.
8. The query in which this field exists is embedded in the `apiQuery` attribute.
9. The `typeName` for this embedded reference must be `APIQuery`.
10. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the query. Note: the object must already exist in Atlan before creating the path.
11. The `apiIsObjectReference` should be true when this field refers to an object.
12. The `apiObjectQualifiedName` should incldue the reference object qualified\_name when `apiIsObjectReference` is true.
13. The `apiQueryParamType` should be present when the field is an input to a query. The value must exactly be "Input".

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the API structure is an `Asset`, and can therefore be related to the following other assets.

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

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/api/) to provide us with more information. 

Back to top

[Previous Manage Superset assets](../superset/) [Next Manage file assets](../file/) 

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

