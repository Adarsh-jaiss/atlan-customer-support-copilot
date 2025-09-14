# Source URL
https://developer.atlan.com/patterns/create/documentdb/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/documentdb/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on DocumentDB assets (connections, databases, collections).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on DocumentDB assets (connections, databases, collections).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/documentdb.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage DocumentDB assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/documentdb/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on DocumentDB assets (connections, databases, collections).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/documentdb.png
meta-twitter:title: Manage DocumentDB assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage DocumentDB assets - Developer
-->

[Skip to content](#manage-documentdb-assets) Developer Manage DocumentDB assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage DocumentDB assets[¶](#manage-documentdb-assets "Permanent link")
=======================================================================

Operations on DocumentDB assets (connections, databases, collections).

In general, these should be:

* [Created in top\-down order](../) (connection, then database, then collection)
* Deleted in bottom\-up order (collections, then databases, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ DocumentDBDatabase : contains
  DocumentDBDatabase ||--o{ DocumentDBCollection : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[5\.0\.6](https://github.com/atlanhq/atlan-java/releases/tag/v5.0.6 "Minimum version")

A DocumentDB [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as a DocumentDB connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a DocumentDB connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "documentdb-connection", // (3)         AtlanConnectorType.DOCUMENTDB, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to DocumentDB.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a DocumentDB connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, DocumentDBDatabase, DocumentDBCollection from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = str(client.role_cache.get_id_for_name("$admin")) # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="documentdb-connection", # (4)     connector_type=AtlanConnectorType.DOCUMENTDB, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"], # (8) ) response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to DocumentDB.
6. List the workspace roles that should be able to administer the connection (or `None` if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the `qualified_name` for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a DocumentDB connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "documentdb-connection", // (3)         AtlanConnectorType.DOCUMENTDB, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to DocumentDB.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "documentdb-connection", // (2)         "connectorName": "documentdb", // (3)         "qualifiedName": "default/documentdb/123456789", // (4)         "category": "database", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `documentdb`.
4. The `qualifiedName` should follow the pattern: `default/documentdb/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `database`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### DocumentDBDatabase[¶](#documentdbdatabase "Permanent link")

[6\.0\.3](https://github.com/atlanhq/atlan-python/releases/tag/6.0.3 "Minimum version")[5\.0\.6](https://github.com/atlanhq/atlan-java/releases/tag/v5.0.6 "Minimum version")

A [DocumentDB database](../../../models/entities/documentdbdatabase/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the database.

Java

Python

Kotlin

Raw REST API

| Create a DocumentDB database | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` DocumentDBDatabase database = DocumentDBDatabase.creator( // (1)         "my-docdb", // (2)         connectionQualifiedName) // (3)     .documentDBDatabaseCollectionCount(10) // (4)     .build(); AssetMutationResponse response = database.save(client); // (5) database = response.getResult(database); // (6)  ``` |

1. Build up the minimum request to create a DocumentDB database.
2. Provide a human\-readable name for your database.
3. Provide the qualifiedName of the connection for this database.
4. Optionally provide additional metadata about the database.
5. Actually call Atlan to create the database. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created database for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a DocumentDB database | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 ``` | ``` database = DocumentDBDatabase.creator( # (1)     name="my-docdb", # (2)     connection_qualified_name=connection_qualified_name, # (3) ) database.document_dbdatabase_collection_count = 10 # (4) response = client.asset.save(database) # (5) database = response.assets_created(asset_type=DocumentDBDatabase)[0] # (6)  ``` |

1. Build up the minimum request to create a DocumentDB database.
2. Provide a human\-readable name for your database.
3. Provide the qualifiedName of the connection for this database.
4. Optionally provide additional metadata about the database.
5. Actually call Atlan to create the database.
6. Retrieve the created database for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a DocumentDB database | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` val database = DocumentDBDatabase.creator( // (1)         "my-docdb", // (2)         connectionQualifiedName) // (3)     .documentDBDatabaseCollectionCount(10) // (4)     .build() val response = database.save(client) // (5) val createdDatabase = response.getResult(database) // (6)  ``` |

1. Build up the minimum request to create a DocumentDB database.
2. Provide a human\-readable name for your database.
3. Provide the qualifiedName of the connection for this database.
4. Optionally provide additional metadata about the database.
5. Actually call Atlan to create the database. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created database for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "DocumentDBDatabase", // (1)       "attributes": {         "name": "my-docdb", // (2)         "qualifiedName": "default/documentdb/123456789/my-docdb", // (3)         "connectionQualifiedName": "default/documentdb/123456789", // (4)         "connectorName": "documentdb", // (5)         "documentDBDatabaseCollectionCount": 10 // (6)       }     }   ] }  ``` |

1. The `typeName` must be exactly `DocumentDBDatabase`.
2. Human\-readable name for your database.
3. The `qualifiedName` should follow the pattern: `default/documentdb/<epoch>/<database_name>`, where `default/documentdb/<epoch>` is the qualifiedName of the connection for this asset and `<database_name>` is the name of the database.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this asset.
5. The `connectorName` must be the same value as the connector type used when creating the connection.
6. Optionally include additional metadata about the database.

### DocumentDBCollection[¶](#documentdbcollection "Permanent link")

[6\.0\.3](https://github.com/atlanhq/atlan-python/releases/tag/6.0.3 "Minimum version")[5\.0\.6](https://github.com/atlanhq/atlan-java/releases/tag/v5.0.6 "Minimum version")

A [DocumentDB collection](../../../models/entities/documentdbcollection/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `databaseQualifiedName` of the database that contains the collection.

Java

Python

Kotlin

Raw REST API

| Create a DocumentDB collection | |
| --- | --- |
| ``` 18 19 20 21 22 23 24 25 ``` | ``` DocumentDBCollection collection = DocumentDBCollection.creator( // (1)         "users", // (2)         database.getQualifiedName()) // (3)     .documentDBCollectionSchemaDefinition("{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"}}}") // (4)     .documentDBCollectionIsCapped(false) // (5)     .documentDBCollectionNumIndexes(3) // (6)     .build(); AssetMutationResponse response = collection.save(client); // (7)  ``` |

1. Build up the minimum request to create a DocumentDB collection.
2. Provide a human\-readable name for your collection.
3. Provide the qualifiedName of the database that contains this collection.
4. Optionally provide the schema definition for the collection.
5. Optionally specify whether the collection is capped or not.
6. Optionally provide additional metadata about the collection.
7. Actually call Atlan to create the collection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a DocumentDB collection | |
| --- | --- |
| ``` 24 25 26 27 28 29 30 31 ``` | ``` collection = DocumentDBCollection.creator( # (1)     name="users", # (2)     database_qualified_name=database.qualified_name, # (3) ) collection.document_dbcollection_schema_definition = "{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"}}}" # (4) collection.document_dbcollection_is_capped = False # (5) collection.document_dbcollection_num_indexes = 3 # (6) response = client.asset.save(collection) # (7)  ``` |

1. Build up the minimum request to create a DocumentDB collection.
2. Provide a human\-readable name for your collection.
3. Provide the qualifiedName of the database that contains this collection.
4. Optionally provide the schema definition for the collection.
5. Optionally specify whether the collection is capped or not.
6. Optionally provide additional metadata about the collection.
7. Actually call Atlan to create the collection.

| Create a DocumentDB collection | |
| --- | --- |
| ``` 18 19 20 21 22 23 24 25 ``` | ``` val collection = DocumentDBCollection.creator( # (1)         "users", # (2)         database.qualifiedName) # (3)     .documentDBCollectionSchemaDefinition("{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"}}}") # (4)     .documentDBCollectionIsCapped(false) # (5)     .documentDBCollectionNumIndexes(3) # (6)     .build() val response = collection.save(client) # (7)  ``` |

1. Build up the minimum request to create a DocumentDB collection.
2. Provide a human\-readable name for your collection.
3. Provide the qualifiedName of the database that contains this collection.
4. Optionally provide the schema definition for the collection.
5. Optionally specify whether the collection is capped or not.
6. Optionally provide additional metadata about the collection.
7. Actually call Atlan to create the collection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {   "entities": [     {       "typeName": "DocumentDBCollection", // (1)       "attributes": {         "name": "users", // (2)         "qualifiedName": "default/documentdb/123456789/my-docdb/users", // (3)         "databaseQualifiedName": "default/documentdb/123456789/my-docdb", // (4)         "connectorName": "documentdb", // (5)         "documentDBCollectionSchemaDefinition": "{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"}}}", // (6)         "documentDBCollectionIsCapped": false, // (7)         "documentDBCollectionNumIndexes": 3 // (8)       }     }   ] }  ``` |

1. The `typeName` must be exactly `DocumentDBCollection`.
2. Human\-readable name for your collection.
3. The `qualifiedName` should follow the pattern: `default/documentdb/<epoch>/<database_name>/<collection_name>`, where `default/documentdb/<epoch>/<database_name>` is the qualifiedName of the database that contains this collection.
4. The `databaseQualifiedName` must be the exact qualifiedName of the database that contains this collection.
5. The `connectorName` must be the same value as the connector type used when creating the connection.
6. Optionally provide the schema definition for the collection.
7. Optionally specify whether the collection is capped or not.
8. Optionally provide additional metadata about the collection.

Additional collection properties[¶](#additional-collection-properties "Permanent link")
---------------------------------------------------------------------------------------

The `DocumentDBCollection` asset type has a number of specific properties that you can use to provide more detailed information:

* `documentDBCollectionAverageObjectSize`: Average size of an object in the collection
* `documentDBCollectionExpireAfterSeconds`: Seconds after which documents in a time series collection or clustered collection expire
* `documentDBCollectionMaxSize`: Maximum size allowed in a capped collection
* `documentDBCollectionMaximumDocumentCount`: Maximum number of documents allowed in a capped collection
* `documentDBCollectionNumOrphanDocs`: Number of orphaned documents in the collection
* `documentDBCollectionSubtype`: Subtype of a DocumentDB collection (e.g., Capped, Time Series, etc.)
* `documentDBCollectionTimeField`: Name of the field containing the date in each time series document
* `documentDBCollectionTimeGranularity`: Closest match to the time span between consecutive incoming measurements
* `documentDBCollectionTotalIndexSize`: Total size of all indexes

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Each DocumentDB asset is an `Asset`, and can therefore be related to the following other assets.

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

1. Note that unlike other assets, the packaged [connection delete utility](https://ask.atlan.com/hc/en-us/articles/6755306791697)  in the UI will **not** remove DocumentDB assets associated with the connection. So the DocumentDB assets themselves must be deleted, separately from the connection.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2025\-04\-112025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/documentdb/) to provide us with more information. 

Back to top

[Previous Manage QuickSight assets](../quick_sight/) [Next Manage Data Quality rules](../dq_rules/) 

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

