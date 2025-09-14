# Source URL
https://developer.atlan.com/snippets/common-examples/lineage/manage/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/lineage/manage/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to create and remove lineage between assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to create and remove lineage between assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/lineage/manage.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage lineage - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/lineage/manage/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to create and remove lineage between assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/lineage/manage.png
meta-twitter:title: Manage lineage - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage lineage - Developer
-->

[Skip to content](#manage-lineage) Developer Manage lineage Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/entity/bulk (DELETE)](../../../../endpoints/#tag:apimetaentitybulk-delete)[/api/meta/entity/bulk (POST)](../../../../endpoints/#tag:apimetaentitybulk-post)

Manage lineage[¶](#manage-lineage "Permanent link")
===================================================

Create lineage between assets[¶](#create-lineage-between-assets "Permanent link")
---------------------------------------------------------------------------------

### Directly[¶](#directly "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create lineage between assets, you need to create a `Process` entity.

Input and output assets must already exist

Note that the assets you reference as the inputs and outputs of the process must already exist, before creating the process.

Java

Python

Kotlin

Raw REST API

| Create lineage between assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` LineageProcess process = LineageProcess.creator( // (1)         "Source 1, Source 2, Source 3 -> Target 1, Target 2", // (2)         "default/snowflake/1657025257", // (3)         "dag_123", // (4)         List.of( // (5)             Table.refByGuid("495b1516-aaaf-4390-8cfd-b11ade7a7799"),             Table.refByGuid("d002dead-1655-4d75-abd6-ad889fa04bd4"),             Table.refByQualifiedName("default/snowflake/1657025257/OPS/DEFAULT/RUN_STATS")),         List.of( // (6)             Table.refByGuid("86d9a061-7753-4884-b988-a02d3954bc24"),             Table.refByQualifiedName("default/snowflake/1657025257/OPS/DEFAULT/FULL_STATS")),         null) // (7)     .sql("select * from somewhere;") // (8)     .sourceURL("https://your.orchestrator/unique/id/123") // (9)     .build(); AssetMutationResponse response = process.save(client); // (10) assert response.getCreatedAssets().size() == 1 // (11) assert response.getUpdatedAssets().size() == 5 // (12)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../../advanced-examples/create/#build-minimal-object-needed).
2. Provide a name for how the process will be shown in the UI.
3. Provide the `qualifiedName` of the connection that ran the process.

    Tips for the connection

    The process itself must be created within a connection for both access control and icon labelling. Use a connection `qualifiedName` that indicates the system that ran the process:

    * You could use the same connection `qualifiedName` as the source system, if it was the source system "pushing" data to the target(s).
        * You could use the same connection `qualifiedName` as the target system, if it was the target system "pulling" data from the source(s).
        * You could use a different connection `qualifiedName` from either source or target, if there is a system in\-between doing the processing (for example an ETL engine or orchestrator).
4. (Optional) Provide the unique ID of the process within that connection. This could be the unique DAG ID for an orchestrator, for example. Since it is optional, you can also send `null` and the SDK will generate a unique ID for you based on the unique combination of inputs and outputs for the process.

    Use your own ID if you can

    While the SDK can generate this ID for you, since it is based on the unique combination of inputs and outputs the ID can change if those inputs or outputs change. This could result in extra processes in lineage as this process itself changes over time.

    By using your own ID for the process, any changes that occur in that process over time (even if the inputs or outputs change) the same single process in Atlan will be updated.
5. Provide the list of inputs to the process. Note that each of these is only a `Reference` to an asset, not a full asset object. For a reference you only need (in addition to the type of asset) either:

    * its GUID (for the static `<Type>.refByGuid()` method)
        * its `qualifiedName` (for the static `<Type>.refByQualifiedName()` method)
6. Provide the list of outputs to the process. Note that each of these is again only a `Reference` to an asset.
7. (Optional) Provide the parent `LineageProcess` in which this process ran (for example, if this process is a subprocess of some higher\-level process). If this is a top\-level process, you can also send `null` for this parameter (as in this example).
8. (Optional) You can also add other properties to the lineage process, such as SQL code that runs within the process.
9. (Optional) You can also provide a link to the process, which will provide a button to click to go to that link from the Atlan UI when viewing the process in Atlan.
10. Call the `save()` method to actually create the process. Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
11. The response will include that single lineage process asset that was created.
12. The response will also include the 5 data assets (3 inputs, 2 outputs) that were updated.

| Create lineage between assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Process, Table  client = AtlanClient() process = Process.creator( # (1)      name="Source 1, Source 2, Source 3 -> Target 1, Target 2", # (2)     connection_qualified_name="default/snowflake/1657025257", # (3)     process_id="dag_123", # (4)     inputs=[ # (5)         Table.ref_by_guid(guid="495b1516-aaaf-4390-8cfd-b11ade7a7799"),         Table.ref_by_guid(guid="d002dead-1655-4d75-abd6-ad889fa04bd4"),         Table.ref_by_qualified_name(qualified_name="default/snowflake/1657025257/OPS/DEFAULT/RUN_STATS"),     ],     outputs=[ # (6)         Table.ref_by_guid(guid="86d9a061-7753-4884-b988-a02d3954bc24"),         Table.ref_by_qualified_name(qualified_name="default/snowflake/1657025257/OPS/DEFAULT/FULL_STATS"),     ], ) # (7) process.sql = "select * from somewhere;" # (8) process.source_url = "https://your.orchestrator/unique/id/123" # (9) response = client.asset.save(process) # (10) assert (processes := response.assets_created(Process)) # (11) assert len(processes) == 1 # (12) assert (tables := response.assets_updated(Table)) # (13) assert len(tables) == 2 # (14)  ``` |

1. Use the `create()` method to initialize the object with all [necessary attributes for creating it](../../../advanced-examples/create/#build-minimal-object-needed).
2. Provide a name for how the process will be shown in the UI.
3. Provide the `qualified_name` of the connection that ran the process.

    Tips for the connection

    The process itself must be created within a connection for both access control and icon labelling. Use a connection `qualified_name` that indicates the system that ran the process:

    * You could use the same connection `qualified_name` as the source system, if it was the source system "pushing" data to the target(s).
        * You could use the same connection `qualified_name` as the target system, if it was the target system "pulling" data from the source(s).
        * You could use a different connection `qualified_name` from either source or target, if there is a system in\-between doing the processing (for example an ETL engine or orchestrator).
4. (Optional) Provide the unique ID of the process within that connection. This could be the unique DAG ID for an orchestrator, for example. Since it is optional, you can also leave it out and the SDK will generate a unique ID for you based on the unique combination of inputs and outputs for the process.

    Use your own ID if you can

    While the SDK can generate this ID for you, since it is based on the unique combination of inputs and outputs the ID can change if those inputs or outputs change. This could result in extra processes in lineage as this process itself changes over time.

    By using your own ID for the process, any changes that occur in that process over time (even if the inputs or outputs change) the same single process in Atlan will be updated.
5. Provide the list of inputs to the process. Note that each of these is only a `Reference` to an asset, not a full asset object. For a reference you only need (in addition to the type of asset) either:

    * its GUID (for the `ref_by_guid()` method)
        * its `qualifiedName` (for the `ref_by_qualified_name()` method)
6. Provide the list of outputs to the process. Note that each of these is again only a `Reference` to an asset.
7. (Optional) Provide the parent `Process` in which this process ran (for example, if this process is a subprocess of some higher\-level process). If this is a top\-level process, you can also send `None` for this parameter (as in this example).
8. (Optional) You can also add other properties to the lineage process, such as SQL code that runs within the process.
9. (Optional) You can also provide a link to the process, which will provide a button to click to go to that link from the Atlan UI when viewing the process in Atlan.
10. Call the `save()` method to actually create the process.
11. Check that a `Process` was created.
12. Check that only 1 `Process` was created.
13. Check that tables were updated.
14. Check that 5 tables (3 inputs, 2 outputs) were updated.

| Create lineage between assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` val process = LineageProcess.creator( // (1)         "Source 1, Source 2, Source 3 -> Target 1, Target 2",  // (2)         "default/snowflake/1657025257",  // (3)         "dag_123",  // (4)         listOf<ICatalog>( // (5)             Table.refByGuid("495b1516-aaaf-4390-8cfd-b11ade7a7799"),             Table.refByGuid("d002dead-1655-4d75-abd6-ad889fa04bd4"),             Table.refByQualifiedName("default/snowflake/1657025257/OPS/DEFAULT/RUN_STATS")),         listOf<ICatalog>( // (6)             Table.refByGuid("86d9a061-7753-4884-b988-a02d3954bc24"),             Table.refByQualifiedName("default/snowflake/1657025257/OPS/DEFAULT/FULL_STATS")),         null) // (7)     .sql("select * from somewhere;") // (8)     .sourceURL("https://your.orchestrator/unique/id/123") // (9)     .build() val response = process.save(client) // (10) assert(response.createdAssets.size == 1) // (11) assert(response.updatedAssets.size == 5) // (12)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../../advanced-examples/create/#build-minimal-object-needed).
2. Provide a name for how the process will be shown in the UI.
3. Provide the `qualifiedName` of the connection that ran the process.

    Tips for the connection

    The process itself must be created within a connection for both access control and icon labelling. Use a connection `qualifiedName` that indicates the system that ran the process:

    * You could use the same connection `qualifiedName` as the source system, if it was the source system "pushing" data to the target(s).
        * You could use the same connection `qualifiedName` as the target system, if it was the target system "pulling" data from the source(s).
        * You could use a different connection `qualifiedName` from either source or target, if there is a system in\-between doing the processing (for example an ETL engine or orchestrator).
4. (Optional) Provide the unique ID of the process within that connection. This could be the unique DAG ID for an orchestrator, for example. Since it is optional, you can also send `null` and the SDK will generate a unique ID for you based on the unique combination of inputs and outputs for the process.

    Use your own ID if you can

    While the SDK can generate this ID for you, since it is based on the unique combination of inputs and outputs the ID can change if those inputs or outputs change. This could result in extra processes in lineage as this process itself changes over time.

    By using your own ID for the process, any changes that occur in that process over time (even if the inputs or outputs change) the same single process in Atlan will be updated.
5. Provide the list of inputs to the process. Note that each of these is only a `Reference` to an asset, not a full asset object. For a reference you only need (in addition to the type of asset) either:

    * its GUID (for the static `<Type>.refByGuid()` method)
        * its `qualifiedName` (for the static `<Type>.refByQualifiedName()` method)
6. Provide the list of outputs to the process. Note that each of these is again only a `Reference` to an asset.
7. (Optional) Provide the parent `LineageProcess` in which this process ran (for example, if this process is a subprocess of some higher\-level process). If this is a top\-level process, you can also send `null` for this parameter (as in this example).
8. (Optional) You can also add other properties to the lineage process, such as SQL code that runs within the process.
9. (Optional) You can also provide a link to the process, which will provide a button to click to go to that link from the Atlan UI when viewing the process in Atlan.
10. Call the `save()` method to actually create the process. Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
11. The response will include that single lineage process asset that was created.
12. The response will also include the 5 data assets (3 inputs, 2 outputs) that were updated.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Process", // (2)       "attributes": {         "name": "Source 1, Source 2, Source 3 -> Target 1, Target 2", // (3)         "qualifiedName": "default/snowflake/1657025257/dag_123", // (4)         "inputs": [ // (5)           {             "typeName": "Table",             "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799"           },           {             "typeName": "Table",             "guid": "d002dead-1655-4d75-abd6-ad889fa04bd4"           },           {             "typeName": "Table",             "uniqueAttributes": {               "qualifiedName": "default/snowflake/1657025257/OPS/DEFAULT/RUN_STATS"             }           }         ],         "outputs": [ // (6)           {             "typeName": "Table",             "guid": "86d9a061-7753-4884-b988-a02d3954bc24"           },           {             "typeName": "Table",             "uniqueAttributes": {               "qualifiedName": "default/snowflake/1657025257/OPS/DEFAULT/FULL_STATS"             }           }         ]       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for a `Process` asset (case\-sensitive).
3. You must provide a name of the integration process.
4. You must provide a unique `qualifiedName` for the integration process (case\-sensitive).
5. You must list all of the input assets to the process. These can be referenced by GUID or by `qualifiedName`.
6. You must list all of the output assets from the process. These can also be referenced by either GUID or `qualifiedName`.

### Using OpenLineage[¶](#using-openlineage "Permanent link")

#### Creating connection for OpenLineage[¶](#creating-connection-for-openlineage "Permanent link")

[6\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.0.0 "Minimum version")

You must first configure OpenLineage before creating lineage between assets. You can either configure a [Spark Assets](https://ask.atlan.com/hc/en-us/articles/8320171069199)  connection in Atlan before sending any OpenLineage events. (You can skip the *Configure the integration in Apache Spark* section), or you can follow the steps below to create the Spark connection via SDKs.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create Spark connection for using OpenLineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") #(1) spark_connection = client.open_lineage.create_connection( #(2)     name="open_lineage_connection",      connector_type = AtlanConnectorType.SPARK,     admin_roles=[admin_role_guid],     admin_users=["jsmith"],     admin_groups=["group2"], )  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. To create OpenLineage connection using the `open_lineage.create_connection()` method. Below params are required:

    * **`name`** : Provide a human\-readable name for your connections.
        * **`connector_type`** : Set the type of connection. Defaults to `AtlanConnectorType.SPARK`.
        * *(Optional)* **`admin_roles`** : List the workspace roles that should be able to administer the connection (if any, defaults to `None`). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). At least one of admin\_roles, admin\_groups, or admin\_users must be provided.
        * *(Optional)* **`admin_users`** : List the user names that can administer this connection (if any, defaults to `None`). Note that the values here are the username(s) of the user(s). At least one of admin\_roles, admin\_groups, or admin\_users must be provided.
        * *(Optional)* **`admin_groups`** : List the group names that can administer this connection (if any, defaults to `None`). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). At least one of admin\_roles, admin\_groups, or admin\_users must be provided.

    Warning

    Note: At least one of the optional parameters `admin_roles`, `admin_users`, or `admin_groups` must be provided to successfully create the connection.

Coming soon

| POST /api/service/credentials?testCredential\=true | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {     "authType": "atlan_api_key",// (1)     "name": "default-spark-1716979138-0", //(2)     "connector": "spark", // (3)     "connectorConfigName": "atlan-connectors-spark", // (4)     "connectorType": "event", // (5)     "extra": {         "events.enable-partial-assets": true,         "events.enabled": true,         "events.topic": "openlineage_spark", // (6)         "events.urlPath": "/events/openlineage/spark/api/v1/lineage"// (7)     } }  ``` |

1. The `authType` must be exactly `atlan_api_key`.
2. Human\-readable name for your credential which should follow the pattern: `default-spark-<epoch>-0`, where `<epoch>` is the time in milliseconds at which the credential is being created.
3. The `connector` must be exactly `spark`.
4. The `connectorConfigName` must be exactly `atlan-connectors-spark`.
5. The `connectorType` must be exactly `event`.
6. The `events.topic` must be exactly `openlineage_spark`.
7. The `events.urlPath` must be exactly `/events/openlineage/spark/api/v1/lineages`.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "open_lineage_connection", // (2)         "connectorName": "spark", // (3)         "qualifiedName": "default/spark/123456789", // (4)         "category": "connector", // (5)         "defaultCredentialGuid": "8b579147-6054-4a4c-8137-463cd349b393", // (6)         "adminRoles": [ // (7)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (8)           "group2"         ],         "adminUsers": [ // (9)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `spark`.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection. If you use a value that is *not* a known value, you will have a default gear icon instead.
4. The `qualifiedName` should follow the pattern: `default/spark/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be exactly `connector`.
6. The `defaultCredentialGuid` should be obtained from the `id` in the response of the previous request.
7. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
9. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

#### Creating lineage between assets using OpenLineage[¶](#creating-lineage-between-assets-using-openlineage "Permanent link")

[2\.5\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.5.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create lineage between assets through [OpenLineage](../../../../reference/specs/openlineage/), you need to send *at least* two events: one indicating the start of a job run and the other indicating that job run is finished.

Java

Python

Kotlin

Raw REST API

| Start lineage between assets via OpenLineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` String snowflake = "snowflake://abc123.snowflakecomputing.com"; // (1) OpenLineageJob olj = OpenLineageJob.creator( // (2)     "ol-spark",     "dag_123",     "https://your.orchestrator/unique/id/123" ).build(); OpenLineageRun olr = OpenLineageRun.creator(olj).build(); // (3) OpenLineageInputDataset inputDataset = olj.createInput(snowflake, "OPS.DEFAULT.RUN_STATS")     .build(); // (4) OpenLineageOutputDataset outputDataset = olj.createOutput(snowflake, "OPS.DEFAULT.FULL_STATS")     .build(); // (5) OpenLineageEvent start = OpenLineageEvent.creator( // (6)     olr,     OpenLineage.RunEvent.EventType.START )     .input(inputDataset) // (7)     .input(olj.createInput(snowflake, "SOME.OTHER.TBL").build())     .input(olj.createInput(snowflake, "AN.OTHER.TBL").build())     .output(outputDataset) // (8)     .output(olj.createOutput(snowflake, "AN.OTHER.VIEW").build())     .build(); start.emit(client); // (9)  ``` |

1. Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
2. Lineage is tracked through jobs. Each job must have:
    * the name of a connection (that already exists in Atlan),
    * a unique job name (used to idempotently update the same job with multiple runs), and
    * a unique URI indicating the code or system responsible for producing this lineage.
3. A job must be run at least once for any lineage to exist, and these separate runs of the same job are tracked through `OpenLineageRun` objects.
4. You can define any number of inputs (sources) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
5. You can define any number of outputs (targets) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
6. Each run of a job must consist of *at least* two events — a `START` event indicating when the job ran began, and some terminal state indicating when the job run finished.
7. You can chain any number of `input`s to the event to indicate the source datasets for the lineage.
8. You can chain any number of `output`s to the event to indicate the target datasets for the lineage.
9. Use the `emit()` method to actually send the event to Atlan to be processed. The processing itself occurs asynchronously, so a successful `emit()` will only indicate that the event has been successfully sent to Atlan, not that it has (yet) been processed. Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Complete lineage between assets via OpenLineage | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` OpenLineageEvent complete = OpenLineageEvent.creator( // (1)     olr,     OpenLineage.RunEvent.EventType.COMPLETE ).build(); complete.emit(client); // (2)  ``` |

1. Since each run of a job must consist of *at least* two events, do not forget to send the terminal state indicating when the job has finished (and whether it was successful with a `COMPLETE` or had some error with a `FAIL`.)
2. Once again, use the `emit()` method to actually send the event to Atlan to be processed (asynchronously). Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Start lineage between assets via OpenLineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import OpenLineageEventType from pyatlan.model.open_lineage import OpenLineageEvent, OpenLineageJob, OpenLineageRun  client = AtlanClient()  snowflake = "snowflake://abc123.snowflakecomputing.com" # (1)  job = OpenLineageJob.creator( # (2)     connection_name="ol-spark",     job_name="dag_123",     producer="https://your.orchestrator/unique/id/123" )  run = OpenLineageRun.creator(job=job) # (3)  input_dataset = job.create_input(     namespace=snowflake, asset_name="OPS.DEFAULT.RUN_STATS" ) # (4)  output_dataset = job.create_output(     namespace=snowflake, asset_name="OPS.DEFAULT.FULL_STATS" ) # (5)  start = OpenLineageEvent.creator(     run=run, event_type=OpenLineageEventType.START ) # (6)  start.inputs = [     input_dataset,     job.create_input(namespace=snowflake, asset_name="SOME.OTHER.TBL"),     job.create_input(namespace=snowflake, asset_name="AN.OTHER.TBL"), ] # (7)  start.outputs = [     output_dataset,      job.create_output(namespace=snowflake, asset_name="AN.OTHER.VIEW") ] # (8)  start.emit(client=client) # (9)  ``` |

1. Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
2. Lineage is tracked through jobs. Each job must have:
    * the name of a connection (that already exists in Atlan),
    * a unique job name (used to idempotently update the same job with multiple runs), and
    * a unique URI indicating the code or system responsible for producing this lineage.
3. A job must be run at least once for any lineage to exist, and these separate runs of the same job are tracked through `OpenLineageRun` objects.
4. You can define any number of inputs (sources) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
5. You can define any number of outputs (targets) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
6. Each run of a job must consist of *at least* two events — a `START` event indicating when the job ran began, and some terminal state indicating when the job run finished.
7. You can chain any number of `input`s to the event to indicate the source datasets for the lineage.
8. You can chain any number of `output`s to the event to indicate the target datasets for the lineage.
9. Use the `emit()` method to actually send the event to Atlan to be processed. The processing itself occurs asynchronously, so a successful `emit()` will only indicate that the event has been successfully sent to Atlan, not that it has (yet) been processed.

| Complete lineage between assets via OpenLineage | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` complete = OpenLineageEvent.creator(     run=run, event_type=OpenLineageEventType.COMPLETE ) # (1)  complete.emit(client=client)  # (2)  ``` |

1. Since each run of a job must consist of *at least* two events,
do not forget to send the terminal state indicating when the job
has finished (and whether it was successful with a `COMPLETE` or had some error with a `FAIL`.)
2. Once again, use the `emit()` method to actually send the
event to Atlan to be processed (asynchronously).

| Start lineage between assets via OpenLineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` val snowflake = "snowflake://abc123.snowflakecomputing.com" // (1) val olj = OpenLineageJob.creator( // (2)     "ol-spark",     "dag_123",     "https://your.orchestrator/unique/id/123" ).build() val olr = OpenLineageRun.creator(olj).build() // (3) val inputDataset = olj.createInput(snowflake, "OPS.DEFAULT.RUN_STATS")     .build() // (4) val outputDataset = olj.createOutput(snowflake, "OPS.DEFAULT.FULL_STATS")     .build() // (5) val start = OpenLineageEvent.creator( // (6)     olr,     OpenLineage.RunEvent.EventType.START )     .input(inputDataset) // (7)     .input(olj.createInput(snowflake, "SOME.OTHER.TBL").build())     .input(olj.createInput(snowflake, "AN.OTHER.TBL").build())     .output(outputDataset) // (8)     .output(olj.createOutput(snowflake, "AN.OTHER.VIEW").build())     .build() start.emit(client) // (9)  ``` |

1. Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
2. Lineage is tracked through jobs. Each job must have:
    * the name of a connection (that already exists in Atlan),
    * a unique job name (used to idempotently update the same job with multiple runs), and
    * a unique URI indicating the code or system responsible for producing this lineage.
3. A job must be run at least once for any lineage to exist, and these separate runs of the same job are tracked through `OpenLineageRun` objects.
4. You can define any number of inputs (sources) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
5. You can define any number of outputs (targets) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
6. Each run of a job must consist of *at least* two events — a `START` event indicating when the job ran began, and some terminal state indicating when the job run finished.
7. You can chain any number of `input`s to the event to indicate the source datasets for the lineage.
8. You can chain any number of `output`s to the event to indicate the target datasets for the lineage.
9. Use the `emit()` method to actually send the event to Atlan to be processed. The processing itself occurs asynchronously, so a successful `emit()` will only indicate that the event has been successfully sent to Atlan, not that it has (yet) been processed. Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Complete lineage between assets via OpenLineage | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val complete = OpenLineageEvent.creator( // (1)     olr,     OpenLineage.RunEvent.EventType.COMPLETE ).build() complete.emit(client) // (2)  ``` |

1. Since each run of a job must consist of *at least* two events, do not forget to send the terminal state indicating when the job has finished (and whether it was successful with a `COMPLETE` or had some error with a `FAIL`.)
2. Once again, use the `emit()` method to actually send the event to Atlan to be processed (asynchronously). Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /events/openlineage/spark/api/v1/lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 ``` | ``` {   "eventTime": "2024-07-01T08:23:37.491542Z", // (1)   "producer": "https://your.orchestrator/unique/id/123", // (2)   "schemaURL": "https://openlineage.io/spec/2-0-2/OpenLineage.json#/$defs/RunEvent",   "eventType": "START", // (3)   "job": { // (4)     "namespace": "ol-spark",     "name": "dag_123",     "facets": {}   },   "run": { // (5)     "runId": "eefd52c3-5871-4f0e-8ff5-237e9a6efb53",     "facets": {}   },   "inputs": [ // (6)     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "OPS.DEFAULT.RUN_STATS",       "facets": {}     },     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "SOME.OTHER.TBL",       "facets": {}     },     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "AN.OTHER.TBL",       "facets": {}     }   ],   "outputs": [ // (7)     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "OPS.DEFAULT.FULL_STATS",       "facets": {}     },     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "AN.OTHER.VIEW",       "facets": {}     }   ] }  ``` |

1. Each event for a job run must have a time at which the event occurred.
2. Each event must have a URI indicating the code or system responsible for producing this lineage.
3. Each run of a job must consist of *at least* two events — a `START` event indicating when the job ran began, and some terminal state indicating when the job run finished.
4. Lineage is tracked through jobs. Each job must have:
    * the name of a connection (that already exists in Atlan) as its `namespace`,
    * a unique job name (used to idempotently update the same job with multiple runs)
5. A job must be run at least once for any lineage to exist, and each event for the same run of a job must be associated with the same `runId`.
6. You can define any number of inputs (sources) for lineage.
    * Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
    * The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
7. You can define any number of outputs (targets) for lineage.
    * Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
    * The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.

| POST /events/openlineage/spark/api/v1/lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "eventTime": "2024-07-01T08:23:38.360567Z",   "producer": "https://your.orchestrator/unique/id/123",   "schemaURL": "https://openlineage.io/spec/2-0-2/OpenLineage.json#/$defs/RunEvent",   "eventType": "COMPLETE", // (1)   "run": {     "runId": "eefd52c3-5871-4f0e-8ff5-237e9a6efb53",     "facets": {}   },   "job": {     "namespace": "ol-spark",     "name": "dag_123",     "facets": {}   } }  ``` |

1. Since each run of a job must consist of *at least* two events, do not forget to send the terminal state indicating when the job has finished (and whether it was successful with a `COMPLETE` or had some error with a `FAIL`.)

Create lineage between columns[¶](#create-lineage-between-columns "Permanent link")
-----------------------------------------------------------------------------------

### Directly[¶](#directly_1 "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create lineage between [relational asset columns](../../../../patterns/create/relational/#column),
it is necessary to create a `ColumnProcess` entity.

Lineage with relational columns

Before creating the ColumnProcess, verify [lineage already exists](#create-lineage-between-assets) between the associated [relational assets](../../../../patterns/create/relational/), and ensure that the
columns referenced as inputs and outputs already exist.

Java

Python

Kotlin

Raw REST API

| Create lineage between columns | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` ColumnProcess columnProcess = ColumnProcess.creator( // (1)         "Source 1, Source 2, Source 3 -> Target 1, Target 2", // (2)         "default/snowflake/1657025257", // (3)         "dag_123", // (4)         List.of( // (5)             Column.refByGuid("495b1516-aaaf-4390-8cfd-b11ade7a7799"),             Column.refByGuid("d002dead-1655-4d75-abd6-ad889fa04bd4"),             Column.refByQualifiedName("default/snowflake/1657025257/OPS/DEFAULT/RUN_STATS/COLUMN")),         List.of( // (6)             Column.refByGuid("86d9a061-7753-4884-b988-a02d3954bc24"),             Column.refByQualifiedName("default/snowflake/1657025257/OPS/DEFAULT/FULL_STATS/COLUMN")),         Process.refByGuid("76d9a061-7753-9884-b988-a02d3954bc25")) // (7)     .sql("select * from somewhere;") // (8)     .sourceURL("https://your.orchestrator/unique/id/123") // (9)     .build(); AssetMutationResponse response = columnProcess.save(client); // (10) assert response.getCreatedAssets().size() == 1 // (11) assert response.getUpdatedAssets().size() == 5 // (12)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../../advanced-examples/create/#build-minimal-object-needed).
2. Provide a name for how the column process will be shown in the UI.
3. Provide the `qualifiedName` of the connection that ran the column process.

    Tips for the connection

    The column process itself must be created within a connection for both access control and icon labelling. Use a connection `qualifiedName` that indicates the system that ran the column process:

    * You could use the same connection `qualifiedName` as the source system, if it was the source system "pushing" data to the target(s).
        * You could use the same connection `qualifiedName` as the target system, if it was the target system "pulling" data from the source(s).
        * You could use a different connection `qualifiedName` from either source or target, if there is a system in\-between doing the processing (for example an ETL engine or orchestrator).
4. (Optional) Provide the unique ID of the column process within that connection. This could be the unique DAG ID for an orchestrator, for example. Since it is optional, you can also send `null` and the SDK will generate a unique ID for you based on the unique combination of inputs and outputs for the column process.

    Use your own ID if you can

    While the SDK can generate this ID for you, since it is based on the unique combination of inputs and outputs the ID can change if those inputs or outputs change. This could result in extra column processes in lineage as this process itself changes over time.

    By using your own ID for the column process, any changes that occur in that process over time (even if the inputs or outputs change) the same single process in Atlan will be updated.
5. Provide the list of inputs to the column process. Note that each of these is only a `Reference` to an asset, not a full asset object. For a reference you only need (in addition to the type of asset) either:

    * its GUID (for the static `<Type>.refByGuid()` method)
        * its `qualifiedName` (for the static `<Type>.refByQualifiedName()` method)
6. Provide the list of outputs to the column process. Note that each of these is again only a `Reference` to an asset.
7. Provide the parent `LineageProcess` in which this process ran since this process is a subprocess of some higher\-level process.
8. (Optional) You can also add other properties to the column process, such as SQL code that runs within the column process.
9. (Optional) You can also provide a link to the column process, which will provide a button to click to go to that link from the Atlan UI when viewing the column process in Atlan.
10. Call the `save()` method to actually create the column process. Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
11. The response will include that single column process asset that was created.
12. The response will also include the 5 column assets (3 inputs, 2 outputs) that were updated.

| Create lineage between columns | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Process, ColumnProcess, Column  client = AtlanClient() column_process = ColumnProcess.creator( # (1)     name="Source 1, Source 2, Source 3 -> Target 1, Target 2", # (2)     connection_qualified_name="default/snowflake/1657025257", # (3)     process_id="dag_123", # (4)     inputs=[ # (5)         Column.ref_by_guid(guid="495b1516-aaaf-4390-8cfd-b11ade7a7799"),         Column.ref_by_guid(guid="d002dead-1655-4d75-abd6-ad889fa04bd4"),         Column.ref_by_qualified_name(qualified_name="default/snowflake/1657025257/OPS/DEFAULT/RUN_STATS/COLUMN"),     ],     outputs=[ # (6)         Column.ref_by_guid(guid="86d9a061-7753-4884-b988-a02d3954bc24"),         Column.ref_by_qualified_name(qualified_name="default/snowflake/1657025257/OPS/DEFAULT/FULL_STATS/COLUMN"),     ],     parent=Process.ref_by_guid("76d9a061-7753-9884-b988-a02d3954bc25"), ) # (7) column_process.sql = "select * from somewhere;" # (8) column_process.source_url = "https://your.orchestrator/unique/id/123" # (9) response = client.asset.save(column_process) # (10) assert (column_processes := response.assets_created(ColumnProcess)) # (11) assert len(column_processes) == 1 # (12) assert (columns := response.assets_updated(Column)) # (13) assert len(columns) == 2 # (14)  ``` |

1. Use the `create()` method to initialize the object with all [necessary attributes for creating it](../../../advanced-examples/create/#build-minimal-object-needed).
2. Provide a name for how the column process will be shown in the UI.
3. Provide the `qualified_name` of the connection that ran the column process.

    Tips for the connection

    The column process itself must be created within a connection for both access control and icon labelling. Use a connection `qualified_name` that indicates the system that ran the column process:

    * You could use the same connection `qualified_name` as the source system, if it was the source system "pushing" data to the target(s).
        * You could use the same connection `qualified_name` as the target system, if it was the target system "pulling" data from the source(s).
        * You could use a different connection `qualified_name` from either source or target, if there is a system in\-between doing the processing (for example an ETL engine or orchestrator).
4. (Optional) Provide the unique ID of the column process within that connection. This could be the unique DAG ID for an orchestrator, for example. Since it is optional, you can also leave it out and the SDK will generate a unique ID for you based on the unique combination of inputs and outputs for the column process.

    Use your own ID if you can

    While the SDK can generate this ID for you, since it is based on the unique combination of inputs and outputs the ID can change if those inputs or outputs change. This could result in extra column processes in lineage as this column process itself changes over time.

    By using your own ID for the column process, any changes that occur in that column process over time (even if the inputs or outputs change) the same single column process in Atlan will be updated.
5. Provide the list of inputs to the column process. Note that each of these is only a `Reference` to an asset, not a full asset object. For a reference you only need (in addition to the type of asset) either:

    * its GUID (for the `ref_by_guid()` method)
        * its `qualifiedName` (for the `ref_by_qualified_name()` method)
6. Provide the list of outputs to the column process. Note that each of these is again only a `Reference` to an asset.
7. Provide the parent `Process` in which this process ran since this process is a subprocess of some higher\-level process.
8. (Optional) You can also add other properties to the column process, such as SQL code that runs within the column process.
9. (Optional) You can also provide a link to the column process, which will provide a button to click to go to that link from the Atlan UI when viewing the column process in Atlan.
10. Call the `save()` method to actually create the column process.
11. Check that a `ColumnProcess` was created.
12. Check that only 1 `ColumnProcess` was created.
13. Check that tables were updated.
14. Check that 5 tables (3 inputs, 2 outputs) were updated.

| Create lineage between columns | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` val columnProcess = ColumnProcess.creator( // (1)         "Source 1, Source 2, Source 3 -> Target 1, Target 2",  // (2)         "default/snowflake/1657025257",  // (3)         "dag_123",  // (4)         listOf<ICatalog>( // (5)             Column.refByGuid("495b1516-aaaf-4390-8cfd-b11ade7a7799"),             Column.refByGuid("d002dead-1655-4d75-abd6-ad889fa04bd4"),             Column.refByQualifiedName("default/snowflake/1657025257/OPS/DEFAULT/RUN_STATS/COLUMN")),         listOf<ICatalog>( // (6)             Column.refByGuid("86d9a061-7753-4884-b988-a02d3954bc24"),             Column.refByQualifiedName("default/snowflake/1657025257/OPS/DEFAULT/FULL_STATS/COLUMN")),         Process.refByGuid("76d9a061-7753-9884-b988-a02d3954bc25")) // (7)     .sql("select * from somewhere;") // (8)     .sourceURL("https://your.orchestrator/unique/id/123") // (9)     .build() val response = columnProcess.save(client) // (10) assert(response.createdAssets.size == 1) // (11) assert(response.updatedAssets.size == 5) // (12)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../../advanced-examples/create/#build-minimal-object-needed).
2. Provide a name for how the column process will be shown in the UI.
3. Provide the `qualifiedName` of the connection that ran the column process.

    Tips for the connection

    The column process itself must be created within a connection for both access control and icon labelling. Use a connection `qualifiedName` that indicates the system that ran the column process:

    * You could use the same connection `qualifiedName` as the source system, if it was the source system "pushing" data to the target(s).
        * You could use the same connection `qualifiedName` as the target system, if it was the target system "pulling" data from the source(s).
        * You could use a different connection `qualifiedName` from either source or target, if there is a system in\-between doing the processing (for example an ETL engine or orchestrator).
4. (Optional) Provide the unique ID of the column process within that connection. This could be the unique DAG ID for an orchestrator, for example. Since it is optional, you can also send `null` and the SDK will generate a unique ID for you based on the unique combination of inputs and outputs for the column process.

    Use your own ID if you can

    While the SDK can generate this ID for you, since it is based on the unique combination of inputs and outputs the ID can change if those inputs or outputs change. This could result in extra column processes in lineage as this process itself changes over time.

    By using your own ID for the column process, any changes that occur in that process over time (even if the inputs or outputs change) the same single process in Atlan will be updated.
5. Provide the list of inputs to the column process. Note that each of these is only a `Reference` to an asset, not a full asset object. For a reference you only need (in addition to the type of asset) either:

    * its GUID (for the static `<Type>.refByGuid()` method)
        * its `qualifiedName` (for the static `<Type>.refByQualifiedName()` method)
6. Provide the list of outputs to the column process. Note that each of these is again only a `Reference` to an asset.
7. Provide the parent `LineageProcess` in which this process ran since this process is a subprocess of some higher\-level process.
8. (Optional) You can also add other properties to the column process, such as SQL code that runs within the column process.
9. (Optional) You can also provide a link to the column process, which will provide a button to click to go to that link from the Atlan UI when viewing the column process in Atlan.
10. Call the `save()` method to actually create the column process. Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
11. The response will include that single column process asset that was created.
12. The response will also include the 5 column assets (3 inputs, 2 outputs) that were updated.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 ``` | ``` {   "entities": [ // (1)     {       "typeName": "ColumnProcess", // (2)       "attributes": {         "name": "Source 1, Source 2, Source 3 -> Target 1, Target 2", // (3)         "qualifiedName": "default/snowflake/1657025257/dag_123", // (4)         "inputs": [ // (5)           {             "typeName": "Column",             "guid": "495b1516-aaaf-4390-8cfd-b11ade7a7799"           },           {             "typeName": "Column",             "guid": "d002dead-1655-4d75-abd6-ad889fa04bd4"           },           {             "typeName": "Column",             "uniqueAttributes": {               "qualifiedName": "default/snowflake/1657025257/OPS/DEFAULT/RUN_STATS"             }           }         ],         "outputs": [ // (6)           {             "typeName": "Column",             "guid": "86d9a061-7753-4884-b988-a02d3954bc24"           },           {             "typeName": "Column",             "uniqueAttributes": {               "qualifiedName": "default/snowflake/1657025257/OPS/DEFAULT/FULL_STATS"             }           }         ],         "process": { // (7)             "guid": "76d9a061-7753-9884-b988-a02d3954bc25",             "typeName": "Process",             "uniqueAttributes": {                 "qualifiedName": "default/snowflake/1657025257/parent_123"             }         }       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for a `ColumnProcess` asset (case\-sensitive).
3. You must provide a name of the integration column process.
4. You must provide a unique `qualifiedName` for the integration column process (case\-sensitive).
5. You must list all of the input assets to the column process. These can be referenced by GUID or by `qualifiedName`.
6. You must list all of the output assets from the column process. These can also be referenced by either GUID or `qualifiedName`.
7. You must provide the parent `LineageProcess` in which this process ran since this process is a subprocess of some higher\-level process.

### Using OpenLineage[¶](#using-openlineage_1 "Permanent link")

[2\.5\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.5.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create column\-lineage between assets through [OpenLineage](../../../../reference/specs/openlineage/), you need only extend the details of the `outputs` you send in your OpenLineage events.

You must first configure OpenLineage

You must first configure a [Spark Assets](https://ask.atlan.com/hc/en-us/articles/8320171069199)  connection in Atlan before sending any OpenLineage events. (You can skip the *Configure the integration in Apache Spark* section.)

Java

Python

Kotlin

Raw REST API

| Start column\-level lineage between assets via OpenLineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 ``` | ``` String snowflake = "snowflake://abc123.snowflakecomputing.com"; // (1) OpenLineageJob olj = OpenLineageJob.creator( // (2)     "ol-spark",     "dag_123",     "https://your.orchestrator/unique/id/123" ).build(); OpenLineageRun olr = OpenLineageRun.creator(olj).build(); // (3) OpenLineageInputDataset inputDataset = olj.createInput(snowflake, "OPS.DEFAULT.RUN_STATS")     .build(); // (4) OpenLineageOutputDataset outputDataset = olj.createOutput(snowflake, "OPS.DEFAULT.FULL_STATS") // (5)     .toField( // (6)         "COLUMN", // (7)         listOf( // (8)             inputDataset.fromField("COLUMN").build(),             inputDataset.fromField("ONE").build(),             inputDataset.fromField("TWO").build(),         ),     )     .toField(         "ANOTHER",         listOf(             inputDataset.fromField("THREE").build(),         ),     )     .build(); OpenLineageEvent start = OpenLineageEvent.creator( // (9)     olr,     OpenLineage.RunEvent.EventType.START )     .input(inputDataset) // (10)     .input(olj.createInput(snowflake, "SOME.OTHER.TBL").build())     .input(olj.createInput(snowflake, "AN.OTHER.TBL").build())     .output(outputDataset) // (11)     .output(olj.createOutput(snowflake, "AN.OTHER.VIEW").build())     .build(); start.emit(client); // (12)  ``` |

1. Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
2. Lineage is tracked through jobs. Each job must have:
    * the name of a connection (that already exists in Atlan),
    * a unique job name (used to idempotently update the same job with multiple runs), and
    * a unique URI indicating the code or system responsible for producing this lineage.
3. A job must be run at least once for any lineage to exist, and these separate runs of the same job are tracked through `OpenLineageRun` objects.
4. You can define any number of inputs (sources) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
5. You can define any number of outputs (targets) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
6. For column\-level lineage, you specify the mapping *only* on the target (outputs) end of the lineage, by chaining a `toField` for each output column.
7. Each key for such a `toField()` chain is the name of a field (column) in the *output* dataset.
8. You can then provide a list that defines *all* input (source) fields that map to this output field in column\-level lineage.

    Create input fields from input datasets

    You can quickly create such a input (source) field from an input dataset using the `fromField()` method and the name of the column in that input dataset.
9. Each run of a job must consist of *at least* two events — a `START` event indicating when the job ran began, and some terminal state indicating when the job run finished.
10. You can chain any number of `input`s to the event to indicate the source datasets for the lineage.
11. You can chain any number of `output`s to the event to indicate the target datasets for the lineage.
12. Use the `emit()` method to actually send the event to Atlan to be processed. The processing itself occurs asynchronously, so a successful `emit()` will only indicate that the event has been successfully sent to Atlan, not that it has (yet) been processed. Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Complete lineage between assets via OpenLineage | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` OpenLineageEvent complete = OpenLineageEvent.creator( // (1)     olr,     OpenLineage.RunEvent.EventType.COMPLETE ).build(); complete.emit(client); // (2)  ``` |

1. Since each run of a job must consist of *at least* two events, do not forget to send the terminal state indicating when the job has finished (and whether it was successful with a `COMPLETE` or had some error with a `FAIL`.)
2. Once again, use the `emit()` method to actually send the event to Atlan to be processed (asynchronously). Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Start column\-level lineage between assets via OpenLineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import OpenLineageEventType from pyatlan.model.open_lineage import OpenLineageEvent, OpenLineageJob, OpenLineageRun  client = AtlanClient()  snowflake = "snowflake://abc123.snowflakecomputing.com" # (1)  job = OpenLineageJob.creator( # (2)     connection_name="ol-spark",     job_name="dag_123",     producer="https://your.orchestrator/unique/id/123" )  run = OpenLineageRun.creator(job=job) # (3)  input_dataset = job.create_input(     namespace=snowflake, asset_name="OPS.DEFAULT.RUN_STATS" ) # (4)  output_dataset = job.create_output(     namespace=snowflake, asset_name="OPS.DEFAULT.FULL_STATS" ) # (5)  output_dataset.to_fields = [ # (6)   {       # (7)       "COLUMN": [            input_dataset.from_field(field_name="COLUMN"),           input_dataset.from_field(field_name="ONE"),           input_dataset.from_field(field_name="TWO"),       ] # (8)   },   {       "ANOTHER": [           input_dataset.from_field(field_name="THREE"),       ]   }, ]  start = OpenLineageEvent.creator(     run=run, event_type=OpenLineageEventType.START ) # (9)  start.inputs = [     input_dataset,     job.create_input(namespace=snowflake, asset_name="SOME.OTHER.TBL"),     job.create_input(namespace=snowflake, asset_name="AN.OTHER.TBL"), ] # (10)  start.outputs = [     output_dataset,      job.create_output(namespace=snowflake, asset_name="AN.OTHER.VIEW") ] # (11)  start.emit() # (12)  ``` |

1. Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
2. Lineage is tracked through jobs. Each job must have:
    * the name of a connection (that already exists in Atlan),
    * a unique job name (used to idempotently update the same job with multiple runs), and
    * a unique URI indicating the code or system responsible for producing this lineage.
3. A job must be run at least once for any lineage to exist, and these separate runs of the same job are tracked through `OpenLineageRun` objects.
4. You can define any number of inputs (sources) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
5. You can define any number of outputs (targets) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
6. For column\-level lineage, you specify the mapping *only* on the target (outputs) end of the lineage to the `to_fields` attribute.
7. Each key is the name of a field (column) in the *output* dataset.
8. You can then provide a list that defines *all* input (source)
fields that map to this output field in column\-level lineage.

    Create input fields from input datasets

    You can quickly create such a input (source) field from an input dataset using the `from_Field()` method and the name of the column in that input dataset.
9. Each run of a job must consist of *at least* two events — a `START` event indicating when the job ran began, and some terminal state indicating when the job run finished.
10. You can chain any number of `input`s to the event to indicate the source datasets for the lineage.
11. You can chain any number of `output`s to the event to indicate the target datasets for the lineage.
12. Use the `emit()` method to actually send the event to Atlan to be processed. The processing itself occurs asynchronously, so a successful `emit()` will only indicate that the event has been successfully sent to Atlan, not that it has (yet) been processed.

| Complete lineage between assets via OpenLineage | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` complete = OpenLineageEvent.creator(     run=run, event_type=OpenLineageEventType.COMPLETE ) # (1)  complete.emit()  # (2)  ``` |

1. Since each run of a job must consist of *at least* two events,
do not forget to send the terminal state indicating when the job
has finished (and whether it was successful with a `COMPLETE` or had some error with a `FAIL`.)
2. Once again, use the `emit()` method to actually send the
event to Atlan to be processed (asynchronously).

| Start column\-level lineage between assets via OpenLineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 ``` | ``` val snowflake = "snowflake://abc123.snowflakecomputing.com" // (1) val olj = OpenLineageJob.creator( // (2)     "ol-spark",     "dag_123",     "https://your.orchestrator/unique/id/123" ).build() val olr = OpenLineageRun.creator(olj).build() // (3) val inputDataset = olj.createInput(snowflake, "OPS.DEFAULT.RUN_STATS")     .build() // (4) val outputDataset = olj.createOutput(snowflake, "OPS.DEFAULT.FULL_STATS") // (5)     .toField( // (6)         "COLUMN", // (7)         listOf( // (8)             inputDataset.fromField("COLUMN").build(),             inputDataset.fromField("ONE").build(),             inputDataset.fromField("TWO").build(),         ),     )     .toField(         "ANOTHER",         listOf(             inputDataset.fromField("THREE").build(),         ),     )     .build() val start = OpenLineageEvent.creator( // (9)     olr,     OpenLineage.RunEvent.EventType.START )     .input(inputDataset) // (10)     .input(olj.createInput(snowflake, "SOME.OTHER.TBL").build())     .input(olj.createInput(snowflake, "AN.OTHER.TBL").build())     .output(outputDataset) // (11)     .output(olj.createOutput(snowflake, "AN.OTHER.VIEW").build())     .build() start.emit(client) // (12)  ``` |

1. Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
2. Lineage is tracked through jobs. Each job must have:
    * the name of a connection (that already exists in Atlan),
    * a unique job name (used to idempotently update the same job with multiple runs), and
    * a unique URI indicating the code or system responsible for producing this lineage.
3. A job must be run at least once for any lineage to exist, and these separate runs of the same job are tracked through `OpenLineageRun` objects.
4. You can define any number of inputs (sources) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
5. You can define any number of outputs (targets) for lineage. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
6. For column\-level lineage, you specify the mapping *only* on the target (outputs) end of the lineage, by chaining a `toField` for each output column.
7. Each key for such a `toField()` chain is the name of a field (column) in the *output* dataset.
8. You can then provide a list that defines *all* input (source) fields that map to this output field in column\-level lineage.

    Create input fields from input datasets

    You can quickly create such a input (source) field from an input dataset using the `fromField()` method and the name of the column in that input dataset.
9. Each run of a job must consist of *at least* two events — a `START` event indicating when the job ran began, and some terminal state indicating when the job run finished.
10. You can chain any number of `input`s to the event to indicate the source datasets for the lineage.
11. You can chain any number of `output`s to the event to indicate the target datasets for the lineage.
12. Use the `emit()` method to actually send the event to Atlan to be processed. The processing itself occurs asynchronously, so a successful `emit()` will only indicate that the event has been successfully sent to Atlan, not that it has (yet) been processed. Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Complete lineage between assets via OpenLineage | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val complete = OpenLineageEvent.creator( // (1)     olr,     OpenLineage.RunEvent.EventType.COMPLETE ).build() complete.emit(client) // (2)  ``` |

1. Since each run of a job must consist of *at least* two events, do not forget to send the terminal state indicating when the job has finished (and whether it was successful with a `COMPLETE` or had some error with a `FAIL`.)
2. Once again, use the `emit()` method to actually send the event to Atlan to be processed (asynchronously). Because this operation will directly persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /events/openlineage/spark/api/v1/lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 ``` | ``` {   "eventTime": "2024-07-01T08:23:37.491542Z", // (1)   "producer": "https://your.orchestrator/unique/id/123", // (2)   "schemaURL": "https://openlineage.io/spec/2-0-2/OpenLineage.json#/$defs/RunEvent",   "eventType": "START", // (3)   "job": { // (4)     "namespace": "ol-spark",     "name": "dag_123",     "facets": {}   },   "run": { // (5)     "runId": "eefd52c3-5871-4f0e-8ff5-237e9a6efb53",     "facets": {}   },   "inputs": [ // (6)     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "OPS.DEFAULT.RUN_STATS",       "facets": {}     },     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "SOME.OTHER.TBL",       "facets": {}     },     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "AN.OTHER.TBL",       "facets": {}     }   ],   "outputs": [ // (7)     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "OPS.DEFAULT.FULL_STATS",       "facets": {         "columnLineage": { // (8)           "_producer": "https://your.orchestrator/unique/id/123",           "_schemaURL": "https://openlineage.io/spec/facets/1-1-0/ColumnLineageDatasetFacet.json#/$defs/ColumnLineageDatasetFacet",           "fields": {             "COLUMN": { // (9)               "inputFields": [ // (10)                 {                   "namespace": "snowflake://abc123.snowflakecomputing.com",                   "name": "OPS.DEFAULT.RUN_STATS",                   "field": "COLUMN"                 },                 {                   "namespace": "snowflake://abc123.snowflakecomputing.com",                   "name": "OPS.DEFAULT.RUN_STATS",                   "field": "ONE"                 },                 {                   "namespace": "snowflake://abc123.snowflakecomputing.com",                   "name": "OPS.DEFAULT.RUN_STATS",                   "field": "TWO"                 }               ]             },             "ANOTHER": {               "inputFields": [                 {                   "namespace": "snowflake://abc123.snowflakecomputing.com",                   "name": "OPS.DEFAULT.RUN_STATS",                   "field": "THREE"                 }               ]             }           }         }       }     },     {       "namespace": "snowflake://abc123.snowflakecomputing.com",       "name": "AN.OTHER.VIEW",       "facets": {}     }   ] }  ``` |

1. Each event for a job run must have a time at which the event occurred.
2. Each event must have a URI indicating the code or system responsible for producing this lineage.
3. Each run of a job must consist of *at least* two events — a `START` event indicating when the job ran began, and some terminal state indicating when the job run finished.
4. Lineage is tracked through jobs. Each job must have:
    * the name of a connection (that already exists in Atlan) as its `namespace`,
    * a unique job name (used to idempotently update the same job with multiple runs)
5. A job must be run at least once for any lineage to exist, and each event for the same run of a job must be associated with the same `runId`.
6. You can define any number of inputs (sources) for lineage.
    * Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
    * The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
7. You can define any number of outputs (targets) for lineage.
    * Datasets used in data lineage need a `namespace` that follows the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
    * The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
8. For column\-level lineage, you specify the mapping *only* on the target (outputs) end of the lineage, by including a `columnLineage` facet with an embedded `fields` object.
9. Each key for the `fields` object is the name of a field (column) in the *output* dataset.
10. You can then provide a list that defines *all* input (source) fields that map to this output field in column\-level lineage.

| POST /events/openlineage/spark/api/v1/lineage | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` {   "eventTime": "2024-07-01T08:23:38.360567Z",   "producer": "https://your.orchestrator/unique/id/123",   "schemaURL": "https://openlineage.io/spec/2-0-2/OpenLineage.json#/$defs/RunEvent",   "eventType": "COMPLETE", // (1)   "run": {     "runId": "eefd52c3-5871-4f0e-8ff5-237e9a6efb53",     "facets": {}   },   "job": {     "namespace": "ol-spark",     "name": "dag_123",     "facets": {}   } }  ``` |

1. Since each run of a job must consist of *at least* two events, do not forget to send the terminal state indicating when the job has finished (and whether it was successful with a `COMPLETE` or had some error with a `FAIL`.)

Remove lineage between assets[¶](#remove-lineage-between-assets "Permanent link")
---------------------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove lineage between assets, you need to delete the `Process` entity that links them:

Only deletes the process indicated, no more

Also be aware that this will only delete the process with the GUID specified. It will **not** remove any column processes that may also exist. To remove those column processes as well, you must identify the GUID of each column\-level process and call the same `purge` method against each of those GUIDs.

Java

Python

Kotlin

Raw REST API

| Remove lineage between assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` AssetMutationResponse response =         Asset.purge(client, "b4113341-251b-4adc-81fb-2420501c30e6"); // (1) Asset deleted = response.getDeletedAssets().get(0); // (2) LineageProcess process; if (deleted instanceof LineageProcess) {     process = (LineageProcess) deleted; // (3) }  ``` |

1. Provide the GUID for the process to the static `Asset.purge()` method. Because this operation will directly remove the asset from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. The response will include that single process that was purged.
3. If you want to confirm the details, you'll need to type\-check and then cast the generic `Asset` returned into a `Process`.

| Remove lineage between assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Process  client = AtlanClient() response = client.asset.purge_by_guid( # (1)     guid="b4113341-251b-4adc-81fb-2420501c30e6") # (2) assert (processes := response.assets_deleted(Process)) # (3) assert len(processes) == 1 # (4)  ``` |

1. Invoke the `asset.purge_by_guid` to delete the `Process`.
2. Provide the GUID of the process to be purged.
3. Check that a `Process` was purged.
4. Check that only 1 `Process` was purged.

| Remove lineage between assets | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val response: AssetMutationResponse =     Asset.purge(client, "b4113341-251b-4adc-81fb-2420501c30e6") // (1) val deleted = response.deletedAssets[0] // (2) val process = if (deleted is LineageProcess) deleted else null // (3)  ``` |

1. Provide the GUID for the process to the static `Asset.purge()` method. Because this operation will directly remove the asset from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. The response will include that single process that was purged.
3. If you want to confirm the details, you'll need to type\-check and then cast the generic `Asset` returned into a `Process`.

| DELETE /api/meta/entity/bulk?guid\=6fa1f0d0\-5720\-4041\-8243\-c2a5628b68bf\&deleteType\=PURGE | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All of the details are in the request URL, there is no payload for a deletion. The GUID for the process itself (not any of its inputs or outputs) is what is listed in the URL.

**More information**

This will irreversibly delete the process, and therefore the lineage it represented. The input and output assets themselves will also be updated, to no longer be linked to the (now non\-existent) process. However, the input and output assets themselves will continue to exist in Atlan.

---

2022\-08\-222025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/lineage/manage/) to provide us with more information. 

Back to top

[Previous Lineage overview](../) [Next Traverse lineage](../traverse/) 

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

