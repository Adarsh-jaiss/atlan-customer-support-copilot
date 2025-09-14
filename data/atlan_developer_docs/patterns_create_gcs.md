# Source URL
https://developer.atlan.com/patterns/create/gcs/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/gcs/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on GCS assets (connections, buckets, objects).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on GCS assets (connections, buckets, objects).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/gcs.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Google Cloud Storage assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/gcs/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on GCS assets (connections, buckets, objects).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/gcs.png
meta-twitter:title: Manage Google Cloud Storage assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Google Cloud Storage assets - Developer
-->

[Skip to content](#manage-google-cloud-storage-assets) Developer Manage Google Cloud Storage assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operations on GCS assets (connections, buckets, objects).

[https://demo.arcade.software/VvteeaCyNYZlNjad3ERS?embed](https://demo.arcade.software/VvteeaCyNYZlNjad3ERS?embed)

In general, these should be:

* [Created in top\-down order](../) (connection, then bucket, then object)
* Deleted in bottom\-up order (objects, then buckets, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ GCSBucket : contains
  GCSBucket ||--o{ GCSObject : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Google Cloud Storage [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as a Google Cloud Storage connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create a GCS connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "gcs-connection", // (3)         AtlanConnectorType.GCS, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to GCS.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a GCS connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, GCSBucket, GCSObject from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="gcs-connection", # (4)     connector_type=AtlanConnectorType.GCS, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"] # (8) )  response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to GCS.
6. List the workspace roles that should be able to administer the connection (or `None` if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a GCS connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin"); // (1) val connection = Connection.creator( // (2)         "gcs-connection", // (3)         AtlanConnectorType.GCS, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to GCS.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "gcs-connection", // (2)         "connectorName": "gcs", // (3)         "qualifiedName": "default/gcs/123456789", // (4)         "category": "ObjectStore", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `gcs`.
4. The `qualifiedName` should follow the pattern: `default/gcs/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `ObjectStore`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### GCSBucket[¶](#gcsbucket "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Google Cloud Storage [bucket](../../../models/entities/gcsbucket/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the bucket.

Java

Python

Kotlin

Raw REST API

| Create a GCS bucket | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` GCSBucket gcsBucket = GCSBucket.creator( // (1)         "mybucket", // (2)         connectionQualifiedName) // (3)     .gcsObjectCount(10) // (4)     .build(); AssetMutationResponse response = gcsBucket.save(client); // (5) gcsBucket = response.getResult(gcsBucket); // (6)  ``` |

1. Build up the minimum request to create a bucket.
2. Provide a human\-readable name for your bucket.
3. Provide the qualifiedName of the connection for this bucket.
4. (Optional) To ensure the UI displays the correct count of `GCSObject`'s,
set the `gcsObjectCount` directly on the `GCSBucket` instance.
5. Actually call Atlan to create the bucket. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created bucket for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create a GCS bucket | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 ``` | ``` gcsBucket = GCSBucket.creator( # (1)     name = "mybucket", # (2)     connection_qualified_name = connection_qualified_name # (3) ) gcsBucket.gcs_object_count = 10 # (4) response = client.asset.save(gcsBucket) # (5) gcs_bucket_qualifed_name = response.assets_created(asset_type=GCSBucket)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a bucket.
2. Provide a human\-readable name for your bucket.
3. Provide the `qualified_name` of the connection for this bucket.
4. (Optional) To ensure the UI displays the correct count of `GCSObject`'s,
set the `gcs_object_count` directly on the `GCSBucket` instance.
5. Actually call Atlan to create the bucket.
6. Retrieve the created bucket for use in subsequent creation calls.(You'd probably want to do some null checking first.)

| Create a GCS bucket | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 ``` | ``` var gcsBucket = GCSBucket.creator( // (1)         "mybucket", // (2)         connectionQualifiedName) // (3)     .gcsObjectCount(10) // (4)     .build() val response = gcsBucket.save(client) // (5) gcsBucket = response.getResult(gcsBucket) // (6)  ``` |

1. Build up the minimum request to create a bucket.
2. Provide a human\-readable name for your bucket.
3. Provide the qualifiedName of the connection for this bucket.
4. (Optional) To ensure the UI displays the correct count of `GCSObject`'s,
set the `gcsObjectCount` directly on the `GCSBucket` instance.
5. Actually call Atlan to create the bucket. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Retrieve the created bucket for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "typeName": "GCSBucket", // (1)       "attributes": {         "name": "mybucket", // (2)         "qualifiedName": "default/gcs/123456789/mybucket", // (3)         "connectionQualifiedName": "default/gcs/123456789", // (4)         "connectorName": "gcs" // (5)       }     }   ] }  ``` |

1. The `typeName` must be exactly `GCSBucket`.
2. Human\-readable name for your bucket.
3. The `qualifiedName` should follow the pattern: `default/gcs/<epoch>/<name>`, where `default/gcs/<epoch>` is the qualifiedName of the connection for this bucket and `<name>` is the unique name for this bucket.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this bucket.
5. The `connectorName` must be exactly `gcs`.

### GCSObject[¶](#gcsobject "Permanent link")

[5\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/5.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

A Google Cloud Storage [object](../../../models/entities/gcsobject/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `bucketQualifiedName` of the bucket that will contain the object.

Java

Python

Kotlin

Raw REST API

| Create a GCS object | |
| --- | --- |
| ``` 18 19 20 21 22 ``` | ``` GCSObject gcsObject = GCSObject.creator( // (1)         "myobject.csv", // (2)         gcsBucket) // (3)     .build(); AssetMutationResponse response = gcsObject.save(client); // (4)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the bucket for this object. If you did not already have the bucket, you could also use `GCSBucket.refByGuid()` with the GUID of the bucket, or `GCSBucket.refByQualifiedName()` with the `qualifiedName` of the bucket.
4. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a GCS object | |
| --- | --- |
| ``` 23 24 25 26 27 28 ``` | ``` gcsObject = GCSObject.creator( # (1)     name="myobject.csv", # (2)     gcs_bucket_name=bucket_name, # (3)     gcs_bucket_qualified_name=gcs_bucket_qualified_name # (4) ) response = client.asset.save(gcsObject) # (5)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the `name` of the bucket this object should be created within.
4. Provide the `qualified_name` of the bucket for this object.
5. Actually call Atlan to create the object.

| Create a GCS object | |
| --- | --- |
| ``` 18 19 20 21 22 ``` | ``` val gcsObject = GCSObject.creator( // (1)         "myobject.csv", // (2)         gcsBucket) // (3)     .build() val response = gcsObject.save(client) // (4)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the bucket for this object. If you did not already have the bucket, you could also use `GCSBucket.refByGuid()` with the GUID of the bucket, or `GCSBucket.refByQualifiedName()` with the `qualifiedName` of the bucket.
4. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "entities": [     {       "typeName": "GCSObject", // (1)       "attributes": {         "name": "myobject.csv", // (2)         "qualifiedName": "default/gcs/123456789/mybucket/myobject.csv", // (3)         "connectionQualifiedName": "default/gcs/123456789", // (4)         "connectorName": "gcs", // (5)         "gcsBucket": { // (6)           "typeName": "GSCBucket", // (7)           "uniqueAttributes": { // (8)             "qualifiedName": "default/gcs/123456789/mybucket"           }         },         "gcsBucketName": "mybucket", // (9)         "gcsBucketQualifiedName": "default/gcs/123456789/mybucket" // (10)       }     }   ] }  ``` |

1. The `typeName` must be exactly `GCSObject`.
2. Human\-readable name for your object.
3. The `qualifiedName` should follow the pattern: `default/gcs/<epoch>/<bucket>/<name>`, where `default/gcs/<epoch>/<bucket>` is the qualifiedName of the bucket that contains this object and `<name>` is the unique name for this object.
4. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this object.
5. The `connectorName` must be exactly `gcs`.
6. The bucket in which this object exists is embedded in the `gcsBucket` attribute.
7. The `typeName` for this embedded reference must be `GCSBucket`.
8. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the bucket. Note: the bucket must already exist in Atlan before creating the object.
9. The `gcsBucketName` should be the human\-readable name of the bucket.
10. The `gcsBucketQualifiedName` should be the qualifiedName of the bucket.

#### By prefix[¶](#by-prefix "Permanent link")

Create a GCS object using prefix:

Java

Python

Java

Raw REST API

Coming soon

| Create a GCS object using prefix | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 30 ``` | ``` gcs_object = GCSObject.creator_with_prefix(  # (1)     name="myobject.csv",  # (2)     connection_qualified_name=connection_qualified_name,  # (3)     prefix="/some/folder/structure",  # (4)     gcs_bucket_name=bucket_name, # (5)     gcs_bucket_qualified_name=bucket_qualified_name,  # (6) ) response = client.asset.save(gcs_object)  # (7)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the `qualified_name` of the connection for this object.
4. Provide the folder path where the object is located within the bucket.
5. Provide the `name` of the bucket this object should be created within.
6. Provide the `qualified_name` of the bucket this object should be created within.
7. Actually call Atlan to create the object.

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "GCSObject", // (1)       "attributes": {         "name": "myobject.csv", // (2)         "qualifiedName": "default/gcs/123456789/mybucket//some/folder/structure/myobject.csv", // (3)         "gcsObjectKey": "/some/folder/structure/myobject.csv", // (4)         "connectionQualifiedName": "default/gcs/123456789", // (5)         "connectorName": "gcs", // (6)         "gcsBucket": { // (7)           "typeName": "GSCBucket", // (8)           "uniqueAttributes": { // (9)             "qualifiedName": "default/gcs/123456789/mybucket"           }         },         "gcsBucketName": "mybucket", // (10)         "gcsBucketQualifiedName": "default/gcs/123456789/mybucket" // (11)       }     }   ] }  ``` |

1. The `typeName` must be exactly `GCSObject`.
2. Human\-readable name for your object.
3. The `qualifiedName` should follow the pattern: `default/gcs/<epoch>/<bucket-name>/<prefix>/<name>`,
where `default/gcs/<epoch>` is the `qualifiedName` of the connection for this object,
and `<prefix>/<name>` is the folder path where this object is located within the bucket.
4. Provide the folder path where the object is located within the bucket.
5. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this object.
6. The `connectorName` must be exactly `gcs`.
7. The bucket in which this object exists is embedded in the `gcsBucket` attribute.
8. The `typeName` for this embedded reference must be `GCSBucket`.
9. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the bucket. Note: the bucket must already exist in Atlan before creating the object.
10. The `gcsBucketName` should be the human\-readable name of the bucket.
11. The `gcsBucketQualifiedName` should be the qualifiedName of the bucket.

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

2022\-09\-162025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/gcs/) to provide us with more information. 

Back to top

[Previous Manage Azure Data Lake Storage assets](../adls/) [Next Manage Google Data Studio assets](../gds/) 

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

