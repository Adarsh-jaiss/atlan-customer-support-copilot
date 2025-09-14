# Source URL
https://developer.atlan.com/patterns/create/insight/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/insight/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on Insights assets (Collection, Folder, Query).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on Insights assets (Collection, Folder, Query).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/insight.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Insights assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/insight/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on Insights assets (Collection, Folder, Query).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/insight.png
meta-twitter:title: Manage Insights assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Insights assets - Developer
-->

[Skip to content](#manage-insights-assets-collection-folder-query) Developer Manage Insights assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage Insights assets (Collection, Folder, Query)[¶](#manage-insights-assets-collection-folder-query "Permanent link")
=======================================================================================================================

In general, these should be:

* [Created in top\-down order](../) (collection, folder, query)
* Deleted in bottom\-up order (query, folder, collection)[1](#fn:1)

```
erDiagram
  Collection ||--o{ Folder : contains
  Folder ||--o{ Query : contains
```

### Collection[¶](#collection "Permanent link")

[3\.1\.2](https://github.com/atlanhq/atlan-python/releases/tag/3.1.2 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a [`Collection`](../../../models/entities/collection/):

Java

Python

Kotlin

Raw REST API

| Create a collection | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` AtlanCollection collection = AtlanCollection.creator(client, "MyCollection")          .adminGroup("admins")         .build(); // (1) AssetMutationResponse response = collection.save(client); // (2)  ``` |

1. Build the minimum request to create a collection.

    * provide an instance of `AtlanClient`.
        * specify a human\-readable name for your collection.
        * **(optional)** specify the name of the group that can administer this collection.
        You can use also use `adminUsers`, `viewerUsers`, `ownerUsers`, etc to manage different levels of access control for the collection.
2. Actually call Atlan to create the collection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a collection | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Collection  client = AtlanClient()  collection = Collection.creator(client=client, name="my-collection") # (1)  collection.admin_groups = ["admins"] # (2) response = client.asset.save(collection) # (3)  ``` |

1. Build the minimum request to create a collection

    * provide an instance of `AtlanClient`.
        * specify a human\-readable name for your collection.
2. **(optional)** Specify the name of the group that can administer this collection.
You can use also use `adminUsers`, `viewerUsers`, `ownerUsers`, etc to manage
different levels of access control for the collection.
3. Actually call Atlan to create the collection.

| Create a collection | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val collection = AtlanCollection.creator(client, "MyCollection")          .adminGroup("admins")         .build() // (1) val response = collection.save(client) // (2)  ``` |

1. Build the minimum request to create a collection.

    * provide an instance of `AtlanClient`.
        * specify a human\-readable name for your collection.
        * **(optional)** specify the name of the group that can administer this collection.
        You can use also use `adminUsers`, `viewerUsers`, `ownerUsers`, etc to manage different levels of access control for the collection.
2. Actually call Atlan to create the collection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {    "entities": [      {        "typeName": "Collection",        "attributes": {          "qualifiedName": "default/collection/service-account-apikey-9468b3e4-d30d-98ba-87d2-f080841a99ef/a08e5dcb-38bd-47d2-b2ea-e439cd0bbe22",           // (1)          "name": "MyCollection", // (2)          "adminGroups": [ // (3)            "admins"          ]        }      }    ] }  ``` |

1. When creating a collection through API tokens, make sure your qualified
name follows this convention: `default/collection/<api-token-username-here>/<some-uuid4-string>`.
2. Specify a human\-readable name for your collection.
3. **(optional)** Specify the name of the group that can administer this collection.
You can use also use `adminUsers`, `viewerUsers`, `ownerUsers`, etc to manage
different levels of access control for the collection.

### Folder[¶](#folder "Permanent link")

[3\.1\.2](https://github.com/atlanhq/atlan-python/releases/tag/3.1.2 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a [`Folder`](../../../models/entities/folder/):

Java

Python

Kotlin

Raw REST API

| Create a folder | |
| --- | --- |
| ``` 5 6 ``` | ``` Folder folder = Folder.creator("MyFolder", collection).build(); // (1) AssetMutationResponse response = folder.save(client); // (2)  ``` |

1. Build the minimum request to create a folder.

    * specify a human\-readable name for your folder.
        * provide an instance of `Collection`, or if you want to create a sub\-folder, provide an instance of `Folder`.
2. Actually call Atlan to create the folder. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a folder | |
| --- | --- |
| ```  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Folder  client = AtlanClient()  folder = Folder.creator(     name="my-folder",     collection_qualified_name="default/collection/user/abcdxyz", )  # (1)  response = client.asset.save(folder) # (2)  ``` |

1. Build the minimum request to create a folder.

    * specify a human\-readable name for your folder.
        * provide the `qualifiedName` of the `Collection`, or
        if you want to create a sub\-folder, provide the `parent_folder_qualified_name`.
2. Actually call Atlan to create the folder.

| Create a folder | |
| --- | --- |
| ``` 5 6 ``` | ``` val folder = Folder.creator("MyFolder", collection).build() // (1) val response = folder.save(client) // (2)  ``` |

1. Build the minimum request to create a folder.

    * specify a human\-readable name for your folder.
        * provide an instance of `Collection`, or if you want to create a sub\-folder, provide an instance of `Folder`.
2. Actually call Atlan to create the folder. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {    "entities": [     {        "typeName": "Folder",        "attributes": {          "qualifiedName": "default/collection/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/5zNMTC3MUzvfTS4L5QuRi/MyFolder", // (1)          "name": "MyFolder", // (2)          "parentQualifiedName": "default/collection/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/5zNMTC3MUzvfTS4L5QuRi", // (3)          "collectionQualifiedName": "default/collection/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/5zNMTC3MUzvfTS4L5QuRi", // (4)          "parent": {            "typeName": "Collection", // (5)            "uniqueAttributes": {              "qualifiedName": "default/collection/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/5zNMTC3MUzvfTS4L5QuRi"            }          }        }      }    ] }  ``` |

1. When creating a folder through API tokens, make sure your qualified
name follows this convention: `<parent-qualified-name>/<folder-name>`.
2. Specify a human\-readable name for your folder.
3. In this example, we're creating a folder inside an existing collection;
therefore, we specify the `qualifiedName` of the collection here. If you're
creating a sub\-folder, you should provide the `qualifiedName` of the parent `Folder`.
4. Specify the `qualifiedName` of the collection.
5. In this example, we're creating a folder inside an existing collection;
therefore, we specify the `qualifiedName` of the collection here. If you're
creating a sub\-folder, you should provide the `qualifiedName` of the parent `Folder`.

### Query[¶](#query "Permanent link")

[3\.1\.2](https://github.com/atlanhq/atlan-python/releases/tag/3.1.2 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a [`Query`](../../../models/entities/query/):

Java

Python

Kotlin

Raw REST API

| Create a query | |
| --- | --- |
| ```  7  8  9 10 11 ``` | ``` String schemaQualifiedName = "default/snowflake/1735591234/DB/SCHEMA"; AtlanQuery query = AtlanQuery.creator("MyQuery", folder) // (1)         .withRawQuery(schemaQualifiedName, "SELECT * FROM CUSTOMERS;") // (2)         .build();  AssetMutationResponse response = query.save(client); // (3)  ``` |

1. Build the minimum request to create a query.

    * specify a human\-readable name for your query.
        * provide an instance of `Folder`, or if you want to create a query inside a collectin, provide an instance of `Collection`.
2. In this example, we're creating a query for an existing `Snowflake` schema.
3. Actually call Atlan to create the folder. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a query | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Query  client = AtlanClient() schema_qualified_name = "default/snowflake/1735591234/DB/SCHEMA"  query = Query.creator(     name="my-query",     parent_folder_qualified_name="default/collection/user/abc/folder/user/xyz" )  # (1)  query.with_raw_query(     schema_qualified_name=schema_qualified_name,      query="SELECT * FROM CUSTOMERS;" ) # (2)  response = client.asset.save(query) # (3)  ``` |

1. Build the minimum request to create a query.

    * specify a human\-readable name for your query.
        * provide the qualifedName of the `Folder`, or if you want
        to create a query inside a collection, provide the `collection_qualified_name`.
2. In this example, we're creating a query for an existing `Snowflake` schema.
3. Actually call Atlan to create the folder.

| Create a query | |
| --- | --- |
| ```  7  8  9 10 11 ``` | ``` val schemaQualifiedName = "default/snowflake/1735591234/DB/SCHEMA" val query = AtlanQuery.creator("MyQuery", folder) // (1)         .withRawQuery(schemaQualifiedName, "SELECT * FROM CUSTOMERS;") // (2)         .build() val response = query.save(client) // (3)  ``` |

1. Build the minimum request to create a query.

    * specify a human\-readable name for your query.
        * provide an instance of `Folder`, or if you want to create a query inside a collectin, provide an instance of `Collection`.
2. In this example, we're creating a query for an existing `Snowflake` schema.
3. Actually call Atlan to create the folder. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {    "entities": [      {        "typeName": "Query",        "attributes": {          "qualifiedName": "default/collection/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/5zNMTC3MUzvfTS4L5QuRi/folder/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/V2ddMTTMJItUy1aV6biSh/MyQuery",          // (1)          "name": "MyQuery", // (2)          "connectionName": "snowflake", // (3)          "connectionQualifiedName": "default/snowflake/1735591234", // (4)          "rawQueryText": "SELECT * FROM CUSTOMERS;", // (5)          "defaultSchemaQualifiedName": "default/snowflake/1735591234/DB/SCHEMA", // (6)          "defaultDatabaseQualifiedName": "default/snowflake/1735591234/DB", // (7)          "variablesSchemaBase64": "eyJjdXN0b212YXJpYWJsZXNEYXRlVGltZUZvcm1hdCI6IHsiZGVmYXVsdERhdGVGb3JtYXQiOiAiWVlZWS1NTS1ERCIsICJkZWZhdWx0VGltZUZvcm1hdCI6ICJISDptbSJ9LCAiY3VzdG9tVmFyaWFibGVzIjogW119",          "parentQualifiedName": "default/collection/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/5zNMTC3MUzvfTS4L5QuRi/folder/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/V2ddMTTMJItUy1aV6biSh", // (8)          "collectionQualifiedName": "default/collection/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/5zNMTC3MUzvfTS4L5QuRi", // (9)          "isVisualQuery": false, // (10)          "parent": {            "typeName": "Folder", // (11)            "uniqueAttributes": {              "qualifiedName": "default/collection/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/5zNMTC3MUzvfTS4L5QuRi/folder/service-account-apikey-d468b3e4-d30d-48ba-87d2-f080841a59ef/V2ddMTTMJItUy1aV6biSh"            }          }        }      }    ] }  ``` |

1. When creating a query through API tokens, ensure that your `qualifiedName` follows this convention: `<parent-qualified-name>/<query-name>`.
2. Specify a human\-readable name for your query.
3. Since we're creating a query for a `Snowflake` schema.
4. Provide the `qualifiedName` of the `Snowflake` connection.
5. Specify the raw SQL query.
6. Provide the `qualifiedName` of the `Snowflake` schema.
7. Provide the `qualifiedName` of the `Snowflake` database.
8. In this example, we're creating a folder inside an existing collection; therefore, we specify the `qualifiedName` of the collection here. If you're creating a sub\-folder, you should provide the `qualifiedName` of the parent folder.
9. Specify the `qualifiedName` of the collection.
10. Since this is a non\-visual query, ensure it is appropriately marked as such.
11. In this example, we're creating a query inside an existing folder; therefore, we specify the `qualifiedName` of the folder here. If you're creating a query inside a collection, you should provide the `qualifiedName` of the collection.

---

1. Although if you want to delete everything in a connection, your better avenue is the packaged [connection delete utility](https://ask.atlan.com/hc/en-us/articles/6755306791697)  in the UI.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2024\-12\-312025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/insight/) to provide us with more information. 

Back to top

[Previous Manage AI assets](../ai/) [Next Manage QuickSight assets](../quick_sight/) 

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

