# Source URL
https://developer.atlan.com/patterns/create/relational/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/relational/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on RDMS assets.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on RDMS assets.
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/relational.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage RDMS assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/relational/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on RDMS assets.
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/relational.png
meta-twitter:title: Manage RDMS assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage RDMS assets - Developer
-->

[Skip to content](#manage-relational-assets) Developer Manage RDMS assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage relational assets[¶](#manage-relational-assets "Permanent link")
=======================================================================

You can represent most relational database and data warehousing objects through a common set of relational assets. You can use this structure to create assets for any relational system you like:

```
erDiagram
    Connection ||--o{ Database : contains
    Database ||--o{ Schema : schemas
    Schema ||--o{ Table : tables
    Schema ||--o{ View : views
    Schema ||--o{ MaterialisedView : materialisedViews
    Table |o--o{ TablePartition : partitions
    Table }o--o{ Query : queries
    Table |o--o{ Column : columns
    Table }o--o{ DbtModel : dbtModels
    View }o--o{ Query : queries
    View |o--o{ Column : columns
    View }o--o{ DbtModel : dbtModels
    MaterialisedView |o--o{ Column : columns
    TablePartition |o--o{ Column : columns
    Column }o--o{ Query : queries
    Column }o--o{ DbtMetric : dbtMetrics
    Column |o--o{ Metric : dataQualityMetricDimensions
    Column |o--o{ DbtModelColumn : dbtModelColumns
```
In general, these should be:

* [Created in top\-down order](../) (connection, then database, then schema, and so on)
* Deleted in bottom\-up order (columns, then tables, then schema, then database, then connection)[1](#fn:1)

Where do the icons come from?

Atlan will display icons for these assets based on the [type of connector](../../../models/connectortypes/) you define in the Connection. You can use out\-of\-the\-box types like `athena`, or API\-first types like `netsuite` and `vertica`.

However, note that in all cases the same structure (and types) as illustrated above are used — there are no differences in types between these relational assets across different systems.

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. As noted above, a specific setting is also required to determine the icons to use for assets in the connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a relational connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "relational-connection", // (3)         AtlanConnectorType.VERTICA, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

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

| Create a relational connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, Database, Schema, Table, View, MaterialisedView, Column from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="relational-connection", # (4)     connector_type=AtlanConnectorType.VERTICA, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"], # (8) ) response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

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

| Create a relational connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin"); // (1) val connection = Connection.creator( // (2)         "relational-connection", // (3)         AtlanConnectorType.VERTICA, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() var response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

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
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "relational-connection", // (2)         "connectorName": "vertica", // (3)         "qualifiedName": "default/vertica/123456789", // (4)         "category": "warehouse", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` should be a known value, such as `vertica`.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection. If you use a value that is *not* a known value, you will have a default gear icon instead.
4. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created, and `<connectorName>` exactly matches the value used for `connectorName` (above).
5. The `category` should also be a known value, that defines the kind of relational store. This could for example be `warehouse` or `rdbms`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### Database[¶](#database "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [database](../../../models/entities/database/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the database.

Java

Python

Kotlin

Raw REST API

| Create a relational database | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` Database database = Database.creator( // (1)         "reln_db", // (2)         connectionQualifiedName) // (3)     .schemaCount(10) // (4)     .build(); AssetMutationResponse response = database.save(client); // (5) database = response.getResult(database); // (6)  ``` |

1. Build up the minimum request to create a database.
2. Provide a human\-readable name for your database.
3. Provide the qualifiedName of the connection for this database.
4. (Optional) To ensure the UI displays the correct count of `Schema`'s, set the `schemaCount` directly on the `Database` instance.
5. Actually call Atlan to create the database. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created database for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a relational database | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 ``` | ``` database = Database.creator( # (1)     name="reln_db", # (2)     connection_qualified_name=connection_qualified_name # (3) ) database.schema_count = 10 # (4) response = client.asset.save(database) # (5) database_qualified_name = response.assets_created(asset_type=Database)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a database.
2. Provide a human\-readable name for your database.
3. Provide the qualified\_name of the connection for this database.
4. (Optional) To ensure the UI displays the correct count of `Schema`'s, set the `schema_count` directly on the `Database` instance.
5. Actually call Atlan to create the database.
6. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a relational database | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` var database = Database.creator( // (1)         "reln_db", // (2)         connectionQualifiedName) // (3)     .schemaCount(10) // (4)     .build() var ar = database.save(client) // (5) database = ar.getResult(database) // (6)  ``` |

1. Build up the minimum request to create a database.
2. Provide a human\-readable name for your database.
3. Provide the qualifiedName of the connection for this database.
4. (Optional) To ensure the UI displays the correct count of `Schema`'s, set the `schemaCount` directly on the `Database` instance.
5. Actually call Atlan to create the database. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created database for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "Database", // (1)       "attributes": {         "name": "reln_db", // (2)         "qualifiedName": "default/vertica/123456789/reln_db", // (3)         "connectionQualifiedName": "default/vertica/123456789", // (4)         "connectorName": "vertica", // (5)         "schemaCount": 10 // (6)       }     }   ] }  ``` |

1. The `typeName` must be exactly `Database`.
2. Human\-readable name for your database.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<db_name>`, where `default/<connectorName>/<epoch>` is the qualifiedName of the connection for this database and `<db_name>` is the name of this database.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this database.
5. The `connectorName` must be exactly as used when defining the connection.
6. (Optional) To ensure the UI displays the correct count of `Schema`'s, set the `schemaCount` directly on the `Database` instance.

### Schema[¶](#schema "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [schema](../../../models/entities/schema/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the schema, and the names and qualifiedNames of the schema's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a relational schema | |
| --- | --- |
| ``` 18 19 20 21 22 23 24 25 ``` | ``` Schema schema = Schema.creator( // (1)         "reln_schema", // (2)         database) // (3)     .tableCount(10) // (4)     .viewCount(10) // (5)     .build(); AssetMutationResponse response = schema.save(client); // (6) schema = response.getResult(schema); // (7)  ``` |

1. Build up the minimum request to create a schema.
2. Provide a human\-readable name for your schema.
3. Provide the database for this schema. If you did not already have the object, you could also use `Database.refByGuid()` with the GUID of the database, or `Database.refByQualifiedName()` with the `qualifiedName` of the database.
4. (Optional) To ensure the UI displays the correct count of `Table`'s, set the `tableCount` directly on the `Schema` instance.
5. (Optional) To ensure the UI displays the correct count of `View`'s,
set the `viewCount` directly on the `Schema` instance.
6. Actually call Atlan to create the schema. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
7. Retrieve the created schema for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a relational schema | |
| --- | --- |
| ``` 24 25 26 27 28 29 30 31 ``` | ``` schema = Schema.creator( # (1)     name="reln_schema", # (2)     database_qualified_name=database_qualified_name # (3) ) schema.table_count = 10 # (4) schema.views_count = 10 # (5) response = client.asset.save(schema) # (6) schema_qualified_name = response.assets_created(asset_type=Schema)[0].qualified_name # (7)  ``` |

1. Build up the minimum request to create a schema.
2. Provide a human\-readable name for your schema.
3. Provide the qualified\_name of the database for this schema.
4. (Optional) To ensure the UI displays the correct count of `Table`'s, set the `table_count` directly on the `Schema` instance.
5. (Optional) To ensure the UI displays the correct count of `View`'s, set the `views_count` directly on the `Schema` instance.
6. Actually call Atlan to create the schema.
7. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a relational schema | |
| --- | --- |
| ``` 18 19 20 21 22 23 24 25 ``` | ``` var schema = Schema.creator( // (1)         "reln_schema", // (2)         database) // (3)     .tableCount(10) // (4)     .viewCount(10) // (5)     .build() ar = schema.save(client) // (6) schema = ar.getResult(schema) // (7)  ``` |

1. Build up the minimum request to create a schema.
2. Provide a human\-readable name for your schema.
3. Provide the database for this schema. If you did not already have the object, you could also use `Database.refByGuid()` with the GUID of the database, or `Database.refByQualifiedName()` with the `qualifiedName` of the database.
4. (Optional) To ensure the UI displays the correct count of `Table`'s,
set the `tableCount` directly on the `Schema` instance.
5. (Optional) To ensure the UI displays the correct count of `View`'s, set the `viewCount` directly on the `Schema` instance.
6. Actually call Atlan to create the schema. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
7. Retrieve the created schema for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Schema", // (1)       "attributes": {         "name": "reln_schema", // (2)         "qualifiedName": "default/vertica/123456789/reln_db/reln_schema", // (3)         "connectionQualifiedName": "default/vertica/123456789", // (4)         "connectorName": "vertica", // (5)         "database": { // (6)           "typeName": "Database", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/vertica/123456789/reln_db"           }         },         "databaseName": "reln_db", // (9)         "databaseQualifiedName": "default/vertica/123456789/reln_db", // (10)         "viewCount": 10 // (11)       }     }   ] }  ``` |

1. The `typeName` must be exactly `Schema`.
2. Human\-readable name for your schema.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<db_name>/<schema_name>`, where `default/<connectorName>/<epoch>/<db_name>` is the qualifiedName of the database for this schema, and `<schema_name>` is the name of the schema.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this schema.
5. The `connectorName` must be exactly as used when defining the connection.
6. The database in which this schema exists is embedded in the `database` attribute.
7. The `typeName` for this embedded reference must be `Database`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the database. Note: the database must already exist in Atlan before creating the schema.
9. The `databaseName` should be the human\-readable name of the database.
10. The `databaseQualifiedName` should be the qualifiedName of the database.
11. (Optional) To ensure the UI displays the correct count of `View`'s, set the `viewCount` directly on the `Schema` instance.

### Table[¶](#table "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [table](../../../models/entities/table/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the table, and the names and qualifiedNames of the table's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a relational table | |
| --- | --- |
| ``` 26 27 28 29 30 31 32 ``` | ``` Table table = Table.creator( // (1)         "reln_table", // (2)         schema) // (3)     .columnCount(10) // (4)     .build(); AssetMutationResponse response = table.save(client); // (5) table = response.getResult(table).get(0).getQualifiedName(); // (6)  ``` |

1. Build up the minimum request to create a table.
2. Provide a human\-readable name for your table.
3. Provide the schema for this table. If you did not already have the object, you could also use `Schema.refByGuid()` with the GUID of the schema, or `Schema.refByQualifiedName()` with the `qualifiedName` of the schema.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `Table` instance.
5. Actually call Atlan to create the table. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created table for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a relational table | |
| --- | --- |
| ``` 32 33 34 35 36 37 38 ``` | ``` table = Table.creator( # (1)     name="reln_table", # (2)     schema_qualified_name=schema_qualified_name # (3) ) table.column_count = 10 # (4) response = client.asset.save(table) # (5) table_qualified_name = response.assets_created(asset_type=Table)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a table.
2. Provide a human\-readable name for your table.
3. Provide the qualified\_name of the schema for this table.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `column_count` directly on the `Table` instance.
5. Actually call Atlan to create the table.
6. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a relational table | |
| --- | --- |
| ``` 26 27 28 29 30 31 32 ``` | ``` var table = Table.creator( // (1)         "reln_table", // (2)         schema) // (3)     .columnCount(10) // (4)     .build() ar = table.save(client) // (5) table = ar.getResult(table) // (6)  ``` |

1. Build up the minimum request to create a table.
2. Provide a human\-readable name for your table.
3. Provide the schema for this table. If you did not already have the object, you could also use `Schema.refByGuid()` with the GUID of the schema, or `Schema.refByQualifiedName()` with the `qualifiedName` of the schema.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `Table` instance.
5. Actually call Atlan to create the table. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created table for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` {   "entities": [     {       "typeName": "Table", // (1)       "attributes": {         "name": "reln_table", // (2)         "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table", // (3)         "connectionQualifiedName": "default/vertica/123456789", // (4)         "connectorName": "vertica", // (5)         "atlanSchema": { // (6)           "typeName": "Schema", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema"           }         },         "schemaName": "reln_schema", // (9)         "schemaQualifiedName": "default/vertica/123456789/reln_db/reln_schema", // (10)         "databaseName": "reln_db", // (11)         "databaseQualifiedName": "default/vertica/123456789/reln_db", // (12)         "columnCount": 10 // (13)       }     }   ] }  ``` |

1. The `typeName` must be exactly `Table`.
2. Human\-readable name for your table.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<db_name>/<schema_name>/<table_name>`, where `default/<connectorName>/<epoch>/<db_name>/<schema_name>` is the qualifiedName of the schema for this table, and `<table_name>` is the name of the table.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this table.
5. The `connectorName` must be exactly as used when defining the connection.
6. The schema in which this table exists is embedded in the `atlanSchema` attribute.
7. The `typeName` for this embedded reference must be `Schema`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the schema. Note: the schema must already exist in Atlan before creating the table.
9. The `schemaName` should be the human\-readable name of the schema.
10. The `schemaQualifiedName` should be the qualifiedName of the schema.
11. The `databaseName` should be the human\-readable name of the database.
12. The `databaseQualifiedName` should be the qualifiedName of the database.
13. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `Table` instance.

### View[¶](#view "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [view](../../../models/entities/view/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the view, and the names and qualifiedNames of the view's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a relational view | |
| --- | --- |
| ``` 26 27 28 29 30 31 32 ``` | ``` View view = View.creator( // (1)         "reln_view", // (2)         schema) // (3)     .columnCount(10) // (4)     .build(); AssetMutationResponse response = view.save(client); // (5) view = response.getResult(view); // (6)  ``` |

1. Build up the minimum request to create a view.
2. Provide a human\-readable name for your view.
3. Provide the schema for this table. If you did not already have the object, you could also use `Schema.refByGuid()` with the GUID of the schema, or `Schema.refByQualifiedName()` with the `qualifiedName` of the schema.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `View` instance.
5. Actually call Atlan to create the view. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created view for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a relational view | |
| --- | --- |
| ``` 32 33 34 35 36 37 38 ``` | ``` view = View.creator( # (1)     name="reln_view", # (2)     schema_qualified_name=schema_qualified_name # (3) ) view.column_count = 10 # (4) response = client.asset.save(view) # (5) view_qualified_name = response.assets_created(asset_type=View)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a view.
2. Provide a human\-readable name for your view.
3. Provide the qualified\_name of the schema for this view.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `column_count` directly on the `View` instance.
5. Actually call Atlan to create the view.
6. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a relational view | |
| --- | --- |
| ``` 26 27 28 29 30 31 32 ``` | ``` var view = View.creator( // (1)         "reln_view", // (2)         schema) // (3)     .columnCount(10) // (4)     .build() ar = view.save(client) // (5) view = ar.getResult(view) // (6)  ``` |

1. Build up the minimum request to create a view.
2. Provide a human\-readable name for your view.
3. Provide the schema for this table. If you did not already have the object, you could also use `Schema.refByGuid()` with the GUID of the schema, or `Schema.refByQualifiedName()` with the `qualifiedName` of the schema.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `View` instance.
5. Actually call Atlan to create the view. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created view for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` {   "entities": [     {       "typeName": "View", // (1)       "attributes": {         "name": "reln_view", // (2)         "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_view", // (3)         "connectionQualifiedName": "default/vertica/123456789", // (4)         "connectorName": "vertica", // (5)         "atlanSchema": { // (6)           "typeName": "Schema", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema"           }         },         "schemaName": "reln_schema", // (9)         "schemaQualifiedName": "default/vertica/123456789/reln_db/reln_schema", // (10)         "databaseName": "reln_db", // (11)         "databaseQualifiedName": "default/vertica/123456789/reln_db", // (12)         "columnCount": 10 // (13)       }     }   ] }  ``` |

1. The `typeName` must be exactly `View`.
2. Human\-readable name for your view.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<db_name>/<schema_name>/<view_name>`, where `default/<connectorName>/<epoch>/<db_name>/<schema_name>` is the qualifiedName of the schema for this view, and `<view_name>` is the name of the view.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this view.
5. The `connectorName` must be exactly as used when defining the connection.
6. The schema in which this view exists is embedded in the `atlanSchema` attribute.
7. The `typeName` for this embedded reference must be `Schema`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the schema. Note: the schema must already exist in Atlan before creating the view.
9. The `schemaName` should be the human\-readable name of the schema.
10. The `schemaQualifiedName` should be the qualifiedName of the schema.
11. The `databaseName` should be the human\-readable name of the database.
12. The `databaseQualifiedName` should be the qualifiedName of the database.
13. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `View` instance.

### MaterialisedView[¶](#materialisedview "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [materialized view](../../../models/entities/materialisedview/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the materialized view, and the names and qualifiedNames of the materialized view's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a relational materialized view | |
| --- | --- |
| ``` 26 27 28 29 30 31 32 ``` | ``` MaterializedView mview = MaterializedView.creator( // (1)         "reln_mat_view", // (2)         schema) // (3)     .columnCount(10) // (4)     .build(); AssetMutationResponse response = mview.save(client); // (5) mview = response.getResult(mview); // (6)  ``` |

1. Build up the minimum request to create a materialized view.
2. Provide a human\-readable name for your materialized view.
3. Provide the schema for this table. If you did not already have the object, you could also use `Schema.refByGuid()` with the GUID of the schema, or `Schema.refByQualifiedName()` with the `qualifiedName` of the schema.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `MaterializedView` instance.
5. Actually call Atlan to create the materialized view. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created materialized view for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a relational materialized view | |
| --- | --- |
| ``` 32 33 34 35 36 37 38 ``` | ``` mview = MaterialisedView.creator( # (1)     name="reln_mat_view", # (2)     schema_qualified_name=schema_qualified_name # (3) ) mview.column_count = 10 response = client.asset.save(mview) # (5) mview_qualified_name = response.assets_created(asset_type=MaterialisedView)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a materialized view.
2. Provide a human\-readable name for your materialized view.
3. Provide the qualified\_name of the schema for this materialized view.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `column_count` directly on the `MaterializedView` instance.
5. Actually call Atlan to create the materialized view.
6. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a relational materialized view | |
| --- | --- |
| ``` 26 27 28 29 30 31 32 ``` | ``` var mview = MaterializedView.creator( // (1)         "reln_mat_view", // (2)         schema) // (3)     .columnCount(10) // (4)     .build(); ar = mview.save(client) // (5) mview = ar.getResult(mview) // (6)  ``` |

1. Build up the minimum request to create a materialized view.
2. Provide a human\-readable name for your materialized view.
3. Provide the schema for this table. If you did not already have the object, you could also use `Schema.refByGuid()` with the GUID of the schema, or `Schema.refByQualifiedName()` with the `qualifiedName` of the schema.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `MaterializedView` instance.
5. Actually call Atlan to create the materialized view. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created materialized view for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` {   "entities": [     {       "typeName": "MaterialisedView", // (1)       "attributes": {         "name": "reln_mat_view", // (2)         "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_mat_view", // (3)         "connectionQualifiedName": "default/vertica/123456789", // (4)         "connectorName": "vertica", // (5)         "atlanSchema": { // (6)           "typeName": "Schema", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema"           }         },         "schemaName": "reln_schema", // (9)         "schemaQualifiedName": "default/vertica/123456789/reln_db/reln_schema", // (10)         "databaseName": "reln_db", // (11)         "databaseQualifiedName": "default/vertica/123456789/reln_db", // (12)         "columnCount": 10 // (13)       }     }   ] }  ``` |

1. The `typeName` must be exactly `MaterialisedView`. (Yes, the
2. Human\-readable name for your materialized view.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<db_name>/<schema_name>/<view_name>`, where `default/<connectorName>/<epoch>/<db_name>/<schema_name>` is the qualifiedName of the schema for this materialized view, and `<view_name>` is the name of the materialized view.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this materialized view.
5. The `connectorName` must be exactly as used when defining the connection.
6. The schema in which this materialized view exists is embedded in the `atlanSchema` attribute.
7. The `typeName` for this embedded reference must be `Schema`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the schema. Note: the schema must already exist in Atlan before creating the materialized view.
9. The `schemaName` should be the human\-readable name of the schema.
10. The `schemaQualifiedName` should be the qualifiedName of the schema.
11. The `databaseName` should be the human\-readable name of the database.
12. The `databaseQualifiedName` should be the qualifiedName of the database.
13. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `MaterializedView` instance.

### TablePartition[¶](#tablepartition "Permanent link")

[4\.0\.1](https://github.com/atlanhq/atlan-python/releases/tag/4.0.1 "Minimum version")[4\.2\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.2.0 "Minimum version")

A [table partition](../../../models/entities/tablepartition/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the table partition, and the names and qualifiedNames of the table partition's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a relational table partition | |
| --- | --- |
| ``` 26 27 28 29 30 31 32 ``` | ``` TablePartition tpartition = TablePartition.creator( // (1)         "reln_table_partition", // (2)         table) // (3)     .columnCount(10) // (4)     .build(); AssetMutationResponse response = tpartition.save(); // (5) tpartition = response.getResult(tpartition); // (6)  ``` |

1. Build up the minimum request to create a table partition.
2. Provide a human\-readable name for your table partition.
3. Provide the table for this table partition. If you did not already have the object, you could also use `Table.refByGuid()` with the GUID of the table, or `Table.refByQualifiedName()` with the `qualifiedName` of the table.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `TablePartition` instance.
5. Actually call Atlan to create the table partition.
6. Retrieve the created table partition for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a relational table partition | |
| --- | --- |
| ``` 32 33 34 35 36 37 38 ``` | ``` tpartition = TablePartition.creator( # (1)     name="reln_table_partition", # (2)     table_qualified_name=table_qualified_name # (3) ) tpartition.column_count = 10 # (4) response = client.asset.save(tpartition) # (5) tpartition_qualified_name = response.assets_created(asset_type=TablePartition)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a table partition.
2. Provide a human\-readable name for your table partition.
3. Provide the qualified\_name of the table for this table partition.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `column_count` directly on the `TablePartition` instance.
5. Actually call Atlan to create the table partition.
6. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some checks first.)

| Create a relational table partition | |
| --- | --- |
| ``` 26 27 28 29 30 31 32 ``` | ``` var tpartition = TablePartition.creator( // (1)         "reln_table_partition", // (2)         table) // (3)     .columnCount(10) // (4)     .build() ar = tpartition.save() // (4) tpartition = ar.getResult(tpartition) // (5)  ``` |

1. Build up the minimum request to create a table partition.
2. Provide a human\-readable name for your table partition.
3. Provide the table for this table partition. If you did not already have the object, you could also use `Table.refByGuid()` with the GUID of the table, or `Table.refByQualifiedName()` with the `qualifiedName` of the table.
4. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `TablePartition` instance.
5. Actually call Atlan to create the table partition.
6. Retrieve the created table partition for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [     {       "typeName": "TablePartition", // (1)       "attributes": {         "name": "reln_table_partition", // (2)         "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table_partition", // (3)         "connectionQualifiedName": "default/vertica/123456789", // (4)         "connectorName": "vertica", // (5)         "schemaName": "reln_schema", // (6)         "schemaQualifiedName": "default/vertica/123456789/reln_db/reln_schema", // (7)         "databaseName": "reln_db", // (8)         "databaseQualifiedName": "default/vertica/123456789/reln_db", // (9)         "tableName": "reln_table",         "tableQualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table",         "columnCount": 10 // (12)       }     }   ] }  ``` |

1. The `typeName` must be exactly `TablePartition`.
2. Human\-readable name for your table partition.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<db_name>/<schema_name>/<table _partition_name>`, where `default/<connectorName>/<epoch>/<db_name>/<schema_name>` is the qualifiedName of the schema for this table partition, and `<table _partition_name>` is the name of the table partition.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this table partition.
5. The `connectorName` must be exactly as used when defining the connection.
6. The `schemaName` should be the human\-readable name of the schema.
7. The `schemaQualifiedName` should be the qualifiedName of the schema.
8. The `databaseName` should be the human\-readable name of the database.
9. The `databaseQualifiedName` should be the qualifiedName of the database.
10. The `tableName` should be the human\-readable name of the table.
11. The `tableQualifiedName` should be the qualifiedName of the table.
12. (Optional) To ensure the UI displays the correct count of `Column`'s, set the `columnCount` directly on the `TablePartition` instance.

### Column[¶](#column "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A [column](../../../models/entities/column/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the column, the column's `order` (position) within its parent, and the names and qualifiedNames of the column's ancestors.

Java

Python

Kotlin

Raw REST API

| Create a relational column | |
| --- | --- |
| ``` 33 34 35 36 37 38 ``` | ``` Column column = Column.creator( // (1)         "reln_col1", // (2)         table, // (3)         1) // (4)     .build(); AssetMutationResponse response = column.save(client); // (5)  ``` |

1. Build up the minimum request to create a column.
2. Provide a human\-readable name for your column.
3. Provide the parent container for this column. If you did not already have the object, you could also use `Table.refByGuid()` with the GUID of a table (or `View.refByGuid()`, etc), or `Table.refByQualifiedName()` with the `qualifiedName` of a table (or `View.refByQualifiedName()`, etc).
4. The order (position) of the column within the table.
5. Actually call Atlan to create the column. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a relational column | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 ``` | ``` column = Column.creator( # (1)     name="reln_col1", # (2)     parent_type=Table, # (3)     parent_qualified_name=table_qualified_name, # (4)     order=1 # (5) ) response = client.asset.save(column) # (6)  ``` |

1. Build up the minimum request to create a column.
2. Provide a human\-readable name for your column.
3. Specify the type of the parent asset for the column (table, view, or materialized view).
4. Provide the qualified\_name of the parent asset for this column. In this example you're defining a column in a table, so you can use the `table_qualified_name` created above. If the parent asset type were `View` you would want to use the `view_qualified_name` created above.
5. The order (position) of the column within the table.
6. Actually call Atlan to create the column.

| Create a relational column | |
| --- | --- |
| ``` 33 34 35 36 37 38 ``` | ``` val column = Column.creator( // (1)         "reln_col1", // (2)         table, // (3)         1) // (4)     .build() ar = column.save(client) // (5)  ``` |

1. Build up the minimum request to create a column.
2. Provide a human\-readable name for your column.
3. Provide the parent container for this column. If you did not already have the object, you could also use `Table.refByGuid()` with the GUID of a table (or `View.refByGuid()`, etc), or `Table.refByQualifiedName()` with the `qualifiedName` of a table (or `View.refByQualifiedName()`, etc).
4. The order (position) of the column within the table.
5. Actually call Atlan to create the column. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 ``` | ``` {   "entities": [     {       "typeName": "Column", // (1)       "attributes": {         "name": "reln_col1", // (2)         "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table/reln_col1", // (3)         "connectionQualifiedName": "default/vertica/123456789", // (4)         "connectorName": "vertica", // (5)         "table": { // (6)           "typeName": "Table", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table"           }         },         "view": { // (9)           "typeName": "View", // (10)           "uniqueAttributes": { // (11)             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_view"           }         },         "materialisedView": { // (12)           "typeName": "MaterialisedView", // (13)           "uniqueAttributes": { // (14)             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_mat_view"           }         },         "tableName": "reln_table", // (15)         "tableQualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table", // (16)         "viewName": "reln_view", // (17)         "viewQualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_view", // (18)         "schemaName": "reln_schema", // (19)         "schemaQualifiedName": "default/vertica/123456789/reln_db/reln_schema", // (20)         "databaseName": "reln_db", // (21)         "databaseQualifiedName": "default/vertica/123456789/reln_db", // (22)         "order": 1 // (23)       }     }   ] }  ``` |

1. The `typeName` must be exactly `Column`.
2. Human\-readable name for your column.
3. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>/<db_name>/<schema_name>/<parent_name>/<column_name>`, where `default/<connectorName>/<epoch>/<db_name>/<schema_name>/<parent_name>` is the qualifiedName of the parent container (table, view, materialized view) for this column, and `<column_name>` is the name of the column.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this column.
5. The `connectorName` must be exactly as used when defining the connection.
6. If the column exists in a table, the table in which it exists is embedded in the `table` attribute.
7. The `typeName` for this embedded reference must be `Table`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the table. Note: the table must already exist in Atlan before creating the column.
9. If the column exists in a view, the view in which it exists is embedded in the `view` attribute.
10. The `typeName` for this embedded reference must be `View`.
11. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the view. Note: the view must already exist in Atlan before creating the column.
12. If the column exists in a materialized view, the materialized view in which it exists is embedded in the `materialisedView` attribute.
13. The `typeName` for this embedded reference must be `MaterialisedView`.
14. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the materialized view. Note: the materialized view must already exist in Atlan before creating the column.
15. If the column exists in a table, the `tableName` should be the human\-readable name of the table.
16. If the column exists in a table, the `tableQualifiedName` should be the qualifiedName of the table.
17. If the column exists in either a view or materialized view, the `viewName` should be the human\-readable name of the (materialized) view.
18. If the column exists in either a view or materialized view, the `viewQualifiedName` should be the qualifiedName of the (materialized) view.
19. The `schemaName` should be the human\-readable name of the schema.
20. The `schemaQualifiedName` should be the qualifiedName of the schema.
21. The `databaseName` should be the human\-readable name of the database.
22. The `databaseQualifiedName` should be the qualifiedName of the database.
23. The order (position) of the column within the table.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the relational structure is also an `Asset`, and can therefore be related to the following other assets.

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

### Primary keys[¶](#primary-keys "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can define a column as a primary key by setting the `isPrimary` attribute to `true`:

Java

Python

Kotlin

Raw REST API

| Create a primary key column | |
| --- | --- |
| ``` 33 34 35 36 37 38 39 ``` | ``` Column column = Column.creator(         "reln_col1",         table,         1)     .isPrimary(true)     .build(); AssetMutationResponse response = column.save(client);  ``` |

| Create a primary key column | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 ``` | ``` column = Column.creator(     name="reln_col1",     parent_type=Table,     parent_qualified_name=table_qualified_name,     order=1 ) column.is_primary = True response = client.asset.save(column)  ``` |

| Create a primary key column | |
| --- | --- |
| ``` 33 34 35 36 37 38 39 ``` | ``` val column = Column.creator(         "reln_col1",         table,         1)     .isPrimary(true)     .build() ar = column.save(client)  ``` |

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 ``` | ``` {   "entities": [     {       "typeName": "Column",       "attributes": {         "name": "reln_col1",         "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table/reln_col1",         "connectionQualifiedName": "default/vertica/123456789",         "connectorName": "vertica",         "table": {           "typeName": "Table",           "uniqueAttributes": {             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table"           }         },         "view": {           "typeName": "View",           "uniqueAttributes": {             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_view"           }         },         "materialisedView": {           "typeName": "MaterialisedView",           "uniqueAttributes": {             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_mat_view"           }         },         "tableName": "reln_table",         "tableQualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table",         "viewName": "reln_view",         "viewQualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_view",         "schemaName": "reln_schema",         "schemaQualifiedName": "default/vertica/123456789/reln_db/reln_schema",         "databaseName": "reln_db",         "databaseQualifiedName": "default/vertica/123456789/reln_db",         "order": 1,         "isPrimary": true       }     }   ] }  ``` |

### Foreign keys[¶](#foreign-keys "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can link one column to another, as a foreign key, by setting the `isForeign` attribute to `true` and creating a relationship to another column through the `foreignKeyFrom` attribute:

Java

Python

Kotlin

Raw REST API

| Create a foreign key relationship | |
| --- | --- |
| ``` 33 34 35 36 37 38 39 40 ``` | ``` Column column = Column.creator(         "reln_col1",         table,         1)     .isForeign(true) // (1)     .foreignKeyFrom(Column.refByGuid("e31c5cec-54fa-4f99-8157-d845082561e2")) // (2)     .build(); AssetMutationResponse response = column.save(client);  ``` |

1. Mark the column that whose values are foreign keys pointing to another column.
2. Use the `foreignKeyFrom` attribute to specify the other column that this column's values point to.

| Create a foreign key relationship | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 ``` | ``` column = Column.creator(     name="reln_col1",     parent_type=Table,     parent_qualified_name=table_qualified_name,     order=1 ) column.is_foreign = True  # (1) column.foreign_key_from(Column.ref_by_guid("e31c5cec-54fa-4f99-8157-d845082561e2"))  # (2) response = client.asset.save(column)  ``` |

1. Mark the column that whose values are foreign keys pointing to another column.
2. Use the `foreign_key_from` attribute to specify the other column that this column's values point to.

| Create a foreign key relationship | |
| --- | --- |
| ``` 33 34 35 36 37 38 39 40 ``` | ``` val column = Column.creator(         "reln_col1",         table,         1)     .isForeign(true) // (1)     .foreignKeyFrom(Column.refByGuid("e31c5cec-54fa-4f99-8157-d845082561e2")) // (2)     .build() ar = column.save(client)  ``` |

1. Mark the column that whose values are foreign keys pointing to another column.
2. Use the `foreignKeyFrom` attribute to specify the other column that this column's values point to.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 ``` | ``` {   "entities": [     {       "typeName": "Column",       "attributes": {         "name": "reln_col1",         "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table/reln_col1",         "connectionQualifiedName": "default/vertica/123456789",         "connectorName": "vertica",         "table": {           "typeName": "Table",           "uniqueAttributes": {             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table"           }         },         "view": {           "typeName": "View",           "uniqueAttributes": {             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_view"           }         },         "materialisedView": {           "typeName": "MaterialisedView",           "uniqueAttributes": {             "qualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_mat_view"           }         },         "tableName": "reln_table",         "tableQualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_table",         "viewName": "reln_view",         "viewQualifiedName": "default/vertica/123456789/reln_db/reln_schema/reln_view",         "schemaName": "reln_schema",         "schemaQualifiedName": "default/vertica/123456789/reln_db/reln_schema",         "databaseName": "reln_db",         "databaseQualifiedName": "default/vertica/123456789/reln_db",         "order": 1,         "isForeign": true, // (1)         "foreignKeyFrom": { // (2)           "typeName": "Column",           "guid": "e31c5cec-54fa-4f99-8157-d845082561e2"         }       }     }   ] }  ``` |

1. Mark the column that whose values are foreign keys pointing to another column.
2. Use the `foreignKeyFrom` attribute to specify the other column that this column's values point to.

---

1. Although if you want to delete everything in a connection, your better avenue is the packaged [connection delete utility](https://ask.atlan.com/hc/en-us/articles/6755306791697)  in the UI.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2022\-09\-162025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/relational/) to provide us with more information. 

Back to top

[Previous Creating assets](../) [Next Manage cube assets](../cube/) 

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

