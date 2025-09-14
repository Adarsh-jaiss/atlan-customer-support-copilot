# Source URL
https://developer.atlan.com/patterns/create/aws/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/aws/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on S3 assets (connections, buckets, objects).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on S3 assets (connections, buckets, objects).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/aws.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage AWS S3 assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/aws/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on S3 assets (connections, buckets, objects).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/aws.png
meta-twitter:title: Manage AWS S3 assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage AWS S3 assets - Developer
-->

[Skip to content](#manage-aws-s3-assets) Developer Manage AWS S3 assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operations on S3 assets (connections, buckets, objects).

[https://demo.arcade.software/yAIutfEfyng4ev2S08hO?embed](https://demo.arcade.software/yAIutfEfyng4ev2S08hO?embed)

In general, these should be:

* [Created in top\-down order](../) (connection, then bucket, then object)
* Deleted in bottom\-up order (objects, then buckets, then connections)[1](#fn:1)

```
erDiagram
  Connection ||--o{ S3Bucket : contains
  S3Bucket ||--o{ S3Object : contains
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An AWS S3 [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as an AWS S3 connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

| Create an S3 connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "aws-s3-connection", // (3)         AtlanConnectorType.S3, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .build(); AssetMutationResponse response = connection.save(client); // (8) String connectionQualifiedName = response.getCreatedAssets().get(0).getQualifiedName(); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to S3\.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an S3 connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection, S3Bucket, S3Object from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin")  # (1) connection = Connection.creator(  # (2)     client=client,  # (3)     name="aws-s3-connection",  # (4)     connector_type=AtlanConnectorType.S3,  # (5)     admin_roles=[admin_role_guid],  # (6)     admin_groups=["group2"],  # (7)     admin_users=["jsmith"],  # (8) ) response = client.asset.save(connection)  # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name  # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to S3\.
6. List the workspace roles that should be able to administer the connection (if any, defaults to `None`). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (if any, defaults to `None`). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (if any, defaults to `None`). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the qualified\_name for use in subsequent creation calls. (You'd probably want to do some other checks first.)

| Create an S3 connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin"); // (1) val connection = Connection.creator( // (2)         "aws-s3-connection", // (3)         AtlanConnectorType.S3, // (4)         listOf(adminRoleGuid), // (5)         listOf("group2"), // (6)         listOf("jsmith")) // (7)     .build() val response = connection.save(client) // (8) val connectionQualifiedName = response.createdAssets[0].qualifiedName // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection, such as `production` or `development`.
4. Set the type of connection to S3\.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
9. Retrieve the qualifiedName for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "aws-s3-connection", // (2)         "connectorName": "s3", // (3)         "qualifiedName": "default/s3/123456789", // (4)         "category": "ObjectStore", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `s3`.
4. The `qualifiedName` should follow the pattern: `default/s3/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `ObjectStore`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### S3Bucket[¶](#s3bucket "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An AWS S3 [bucket](../../../models/entities/s3bucket/) requires both a `name` and a `qualifiedName`. During creation, you also need to specify the `connectionQualifiedName` of the connection associated with the bucket, and optionally provide a unique `awsArn`.

Java

Python

Kotlin

Raw REST API

| Create an S3 bucket | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 ``` | ``` S3Bucket s3Bucket = S3Bucket.creator( // (1)         "mybucket", // (2)         connectionQualifiedName, // (3)         "arn:aws:s3:::mybucket") // (4)     .s3ObjectCount(10) // (5)     .build(); AssetMutationResponse response = s3Bucket.save(client); // (6) s3Bucket = response.getResult(s3Bucket); // (7)  ``` |

1. Build up the minimum request to create a bucket.
2. Provide a human\-readable name for your bucket.
3. Provide the `qualifiedName` of the connection for this bucket.
4. (Optional) If `awsArn` is provided, it will be used to construct the `qualifiedName` for the bucket; otherwise, the `name` of the bucket will be used.
5. (Optional) To ensure the UI displays the correct count of `S3Object`'s, set the `s3ObjectCount` directly on the `S3Bucket` instance.
6. Actually call Atlan to create the bucket. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
7. Retrieve the created bucket for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| Create an S3 bucket | |
| --- | --- |
| ``` 16 17 18 19 20 21 22 23 ``` | ``` s3bucket = S3Bucket.creator(  # (1)     name="mybucket",  # (2)     connection_qualified_name=connection_qualified_name,  # (3)     aws_arn="arn:aws:s3:::mybucket"  # (4) ) s3bucket.s3_object_count = 10 # (5) response = client.asset.save(s3bucket)  # (6) bucket_qualified_name = response.assets_created(asset_type=S3Bucket)[0].qualified_name  # (7)  ``` |

1. Build up the minimum request to create a bucket.
2. Provide a human\-readable name for your bucket.
3. Provide the `qualified_name` of the connection for this bucket.
4. (Optional) If `aws_arn` is provided, it will be used to construct the `qualified_name` for the bucket; otherwise, the `name` of the bucket will be used.
5. (Optional) To ensure the UI displays the correct count of `S3Object`'s,
set the `s3_object_count` directly on the `S3Bucket` instance.
6. Actually call Atlan to create the bucket.
7. Retrieve the `qualified_name` for use in subsequent creation calls.
(You'd probably want to do some checks first.)

| Create an S3 bucket | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 ``` | ``` var s3Bucket = S3Bucket.creator( // (1)         "mybucket", // (2)         connectionQualifiedName, // (3)         "arn:aws:s3:::mybucket") // (4)     .s3ObjectCount(10) // (5)     .build() val response = s3Bucket.save(client) // (6) s3Bucket = response.getResult(s3Bucket) // (7)  ``` |

1. Build up the minimum request to create a bucket.
2. Provide a human\-readable name for your bucket.
3. Provide the `qualifiedName` of the connection for this bucket.
4. (Optional) If `awsArn` is provided, it will be used to construct the `qualifiedName` for the bucket; otherwise, the `name` of the bucket will be used.
5. (Optional) To ensure the UI displays the correct count of `S3Object`'s, set the `s3ObjectCount` directly on the `S3Bucket` instance.
6. Actually call Atlan to create the bucket. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
7. Retrieve the created bucket for use in subsequent creation calls. (You'd probably want to do some null checking first.)

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "S3Bucket", // (1)       "attributes": {         "name": "mybucket", // (2)         "awsArn": "arn:aws:s3:::mybucket", // (3)         "qualifiedName": "default/s3/123456789/arn:aws:s3:::mybucket", // (4)         "connectionQualifiedName": "default/s3/123456789", // (5)         "connectorName": "s3" // (6)       }     }   ] }  ``` |

1. The `typeName` must be exactly `S3Bucket`.
2. Human\-readable name for your bucket.
3. The `awsArn` should be the unique ARN from AWS for this bucket.
4. The `qualifiedName` should follow the pattern: `default/s3/<epoch>/<awsArn>`, where `default/s3/<epoch>` is the qualifiedName of the connection for this bucket and `<awsArn>` is the unique ARN for this bucket.
5. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this bucket.
6. The `connectorName` must be exactly `s3`.

### S3Object[¶](#s3object "Permanent link")

[5\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/5.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

An AWS S3 [object](../../../models/entities/s3object/) requires a `name` and a `qualifiedName`. For creation, you also need to specify the `connectionQualifiedName` of the connection for the object, and a unique `awsArn` or `prefix`. You should also specify the `bucket` the object is in, along with its `s3BucketName` and `s3BucketQualifiedName`.

#### By AWS ARN[¶](#by-aws-arn "Permanent link")

Create an S3 object using AWS ARN:

Java

Python

Kotlin

Raw REST API

| Create an S3 object using AWS ARN | |
| --- | --- |
| ``` 18 19 20 21 22 23 ``` | ``` S3Object s3Object = S3Object.creator( // (1)         "myobject.csv", // (2)         s3Bucket, // (3)         "arn:aws:s3:::mybucket/prefix/myobject.csv") // (4)     .build(); AssetMutationResponse response = s3Object.save(client); // (5)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the bucket in which this object should be created.
4. Provide the unique ARN from AWS for this object.
5. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create an S3 object using AWS ARN | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 30 ``` | ``` s3object = S3Object.creator(  # (1)     name="myobject.csv",  # (2)     connection_qualified_name=connection_qualified_name,  # (3)     aws_arn="arn:aws:s3:::mybucket/prefix/myobject.csv",  # (4)     s3_bucket_name=bucket_name, # (5)     s3_bucket_qualified_name=bucket_qualified_name,  # (6) ) response = client.asset.save(s3object)  # (7)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the `qualified_name` of the connection for this object.
4. Provide the unique ARN from AWS for this object.
5. Provide the `name` of the bucket this object should be created within.
6. Provide the `qualified_name` of the bucket this object should be created within.
7. Actually call Atlan to create the object.

| Create an S3 object using AWS ARN | |
| --- | --- |
| ``` 18 19 20 21 22 23 ``` | ``` var s3Object = S3Object.creator( // (1)         "myobject.csv", // (2)         s3Bucket, // (3)         "arn:aws:s3:::mybucket/prefix/myobject.csv") // (4)     .build() val response = s3Object.save(client) // (5)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the bucket in which this object should be created.
4. Provide the unique ARN from AWS for this object.
5. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "S3Object", // (1)       "attributes": {         "name": "myobject.csv", // (2)         "awsArn": "arn:aws:s3:::mybucket/prefix/myobject.csv", // (3)         "qualifiedName": "default/s3/123456789/arn:aws:s3:::mybucket/prefix/myobject.csv", // (4)         "connectionQualifiedName": "default/s3/123456789", // (5)         "connectorName": "s3", // (6)         "bucket": { // (7)           "typeName": "S3Bucket", // (8)           "uniqueAttributes": { // (9)             "qualifiedName": "default/s3/123456789/arn:aws:s3:::mybucket"           }         },         "s3BucketName": "mybucket", // (10)         "s3BucketQualifiedName": "default/s3/123456789/arn:aws:s3:::mybucket" // (11)       }     }   ] }  ``` |

1. The `typeName` must be exactly `S3Object`.
2. Human\-readable name for your object.
3. The `awsArn` should be the unique ARN from AWS for this object.
4. The `qualifiedName` should follow the pattern: `default/s3/<epoch>/<awsArn>`,
where `default/s3/<epoch>` is the `qualifiedName` of the connection for this
object and `<awsArn>` is the unique ARN for this object.
5. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this object.
6. The `connectorName` must be exactly `s3`.
7. The bucket in which this object exists is embedded in the `bucket` attribute.
8. The `typeName` for this embedded reference must be `S3Bucket`.
9. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the bucket. Note: the bucket must already exist in Atlan before creating the object.
10. The `s3BucketName` should be the human\-readable name of the bucket.
11. The `s3BucketQualifiedName` should be the qualifiedName of the bucket.

#### By prefix[¶](#by-prefix "Permanent link")

Create an S3 object using prefix:

Java

Python

Kotlin

Raw REST API

| Create an S3 object using prefix | |
| --- | --- |
| ``` 18 19 20 21 22 23 ``` | ``` S3Object s3Object = S3Object.creatorWithPrefix( // (1)         "myobject.csv", // (2)         s3Bucket, // (3)         "/some/folder/structure") // (4)     .build(); AssetMutationResponse response = s3Object.save(client); // (5)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the bucket in which this object should be created.
4. Provide the folder path where the object is located within the bucket.
5. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create an S3 object using prefix | |
| --- | --- |
| ``` 23 24 25 26 27 28 29 30 ``` | ``` s3object = S3Object.creator_with_prefix(  # (1)     name="myobject.csv",  # (2)     connection_qualified_name=connection_qualified_name,  # (3)     prefix="/some/folder/structure",  # (4)     s3_bucket_name=bucket_name, # (5)     s3_bucket_qualified_name=bucket_qualified_name,  # (6) ) response = client.asset.save(s3object)  # (7)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the `qualified_name` of the connection for this object.
4. Provide the folder path where the object is located within the bucket.
5. Provide the `name` of the bucket this object should be created within.
6. Provide the `qualified_name` of the bucket this object should be created within.
7. Actually call Atlan to create the object.

| Create an S3 object using prefix | |
| --- | --- |
| ``` 18 19 20 21 22 23 ``` | ``` var s3Object = S3Object.creatorWithPrefix( // (1)         "myobject.csv", // (2)         s3Bucket, // (3)         "/some/folder/structure") // (4)     .build() val response = s3Object.save(client) // (5)  ``` |

1. Build up the minimum request to create an object.
2. Provide a human\-readable name for your object.
3. Provide the bucket in which this object should be created.
4. Provide the folder path where the object is located within the bucket.
5. Actually call Atlan to create the object. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` {   "entities": [     {       "typeName": "S3Object", // (1)       "attributes": {         "name": "myobject.csv", // (2)         "s3ObjectKey": "/some/folder/structure/myobject.csv", // (3)         "qualifiedName": "default/s3/123456789/mybucket//some/folder/structure/myobject.csv",         // (4)         "connectionQualifiedName": "default/s3/123456789", // (5)         "connectorName": "s3", // (6)         "bucket": { // (7)           "typeName": "S3Bucket", // (8)           "uniqueAttributes": { // (9)             "qualifiedName": "default/s3/123456789/arn:aws:s3:::mybucket"           }         },         "s3BucketName": "mybucket", // (10)         "s3BucketQualifiedName": "default/s3/123456789/arn:aws:s3:::mybucket" // (11)       }     }   ] }  ``` |

1. The `typeName` must be exactly `S3Object`.
2. Human\-readable name for your object.
3. Provide the folder path where the object is located within the bucket.
4. The `qualifiedName` should follow the pattern: `default/s3/<epoch>/<bucket-name>/<prefix>/<name>`,
where `default/s3/<epoch>` is the `qualifiedName` of the connection for this object,
and `<prefix>/<name>` is the folder path where this object is located within the bucket.
5. The `connectionQualifiedName` must be the exact qualifiedName of the connection for this object.
6. The `connectorName` must be exactly `s3`.
7. The bucket in which this object exists is embedded in the `bucket` attribute.
8. The `typeName` for this embedded reference must be `S3Bucket`.
9. To complete the reference, you must include a `uniqueAttributes` object with the qualifiedName of the bucket. Note: the bucket must already exist in Atlan before creating the object.
10. The `s3BucketName` should be the human\-readable name of the bucket.
11. The `s3BucketQualifiedName` should be the qualifiedName of the bucket.

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

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/aws/) to provide us with more information. 

Back to top

[Previous Manage cube assets](../cube/) [Next Manage Azure Data Lake Storage assets](../adls/) 

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

