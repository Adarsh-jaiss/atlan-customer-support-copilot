# Source URL
https://developer.atlan.com/snippets/workflows/packages/snowflake-miner/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/snowflake-miner/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to mine query history from Snowflake to generate lineage and usage metrics.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to mine query history from Snowflake to generate lineage and usage metrics.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/snowflake-miner.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Snowflake miner package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/snowflake-miner/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to mine query history from Snowflake to generate lineage and usage metrics.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/snowflake-miner.png
meta-twitter:title: Snowflake miner package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Snowflake miner package - Developer
-->

[Skip to content](#snowflake-miner-package) Developer Snowflake miner package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Snowflake miner package[¶](#snowflake-miner-package "Permanent link")
=====================================================================

The [Snowflake miner package](https://ask.atlan.com/hc/en-us/articles/6482067592337) mines query history from Snowflake. This data is used for generating lineage and usage metrics.

Source extraction[¶](#source-extraction "Permanent link")
---------------------------------------------------------

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[2\.1\.8](https://github.com/atlanhq/atlan-python/releases/tag/2.1.8 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To mine query history directly from Snowflake using its built\-in database:

Java

Python

Kotlin

Go

Raw REST API

| Mine query history direct from Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` Workflow miner = SnowflakeMiner.creator( // (1)         "default/snowflake/1234567890" // (2)     )     .direct( // (3)         "TEST_DB",         "TEST_SCHEMA",         1713225600     )     .excludeUsers( // (4)         List.of(           "test-user-1",           "test-user-2"         )     )     .nativeLineage(true) // (5)     .build()  // (6)     .toWorkflow();  // (7)  WorkflowResponse response = miner.run(client);  // (8)  ``` |

1. Base configuration for a new Snowflake miner.
2. You must provide the exact `qualifiedName` of the Snowflake connection in Atlan for which you want to mine query history.
3. To create a workflow for mining history directly from Snowflake using its built\-in database you need to provide:

    * name of the database to extract from.
        * name of the schema to extract from.
        * date and time from which to start mining, as an epoch.
4. Optionally, you can specify list of users who should be excluded when calculating usage metrics for assets (for example, system accounts).
5. Optionally, you can specify whether to enable native lineage from Snowflake, using Snowflake's `ACCESS_HISTORY.OBJECTS_MODIFIED` Column. Note: this is only available only for Snowflake Enterprise customers.
6. Build the minimal package object.
7. Now, you can convert the package into a `Workflow` object.
8. Run the workflow by invoking the `run()` method on the workflow client, passing the created object. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Mine query history direct from Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import SnowflakeMiner  miner = (     SnowflakeMiner( # (1)         connection_qualified_name="default/snowflake/1234567890"         # (2)     )     .direct( # (3)         start_epoch=1713225600,         database="TEST_DB",         schema="TEST_SCHEMA",     )     .exclude_users( # (4)         users=[           "test-user-1",           "test-user-2",         ]     )     .popularity_window(days=30) # (5)     .native_lineage(enabled=True) # (6)     .custom_config( # (7)         config={           "test": True,           "feature": 1234       }     )     .to_workflow() # (8) )  response = client.workflow.run(miner) # (9)  ``` |

1. Base configuration for a new Snowflake miner.
2. You must provide the exact `qualified_name` of the Snowflake
connection in Atlan for which you want to mine query history.
3. To create a workflow for mining history directly from Snowflake
using its built\-in database you need to provide:

    * date and time from which to start mining, as an epoch.
        * name of the database to extract from.
        * name of the schema to extract from.
4. Optionally, you can specify list of users who should be excluded
when calculating usage metrics for assets (for example, system accounts).
5. Optionally, you can provide number of days to consider for calculating popularity.
6. Optionally, you can specify whether to enable native lineage from Snowflake,
using Snowflake's `ACCESS_HISTORY.OBJECTS_MODIFIED` Column. `Note:` this is only available only for Snowflake Enterprise customers.
7. Optionally, you can provide custom configuration
controlling experimental feature flags for the miner.
8. Now, you can convert the package into a `Workflow` object.
9. Run the workflow by invoking the `run()` method on the
workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously.
        See the [packages and workflows introduction](../) for details on how you can check the status and wait until
        the workflow has been completed.

| Mine query history direct from Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` val miner = SnowflakeMiner.creator( // (1)         "default/snowflake/1234567890" // (2)     )     .direct( // (3)         "TEST_DB",         "TEST_SCHEMA",         1713225600     )     .excludeUsers( // (4)         listOf(           "test-user-1",           "test-user-2"         )     )     .nativeLineage(true) // (5)     .build()  // (6)     .toWorkflow()  // (7)  val response = miner.run(client)  // (8)  ``` |

1. Base configuration for a new Snowflake miner.
2. You must provide the exact `qualifiedName` of the Snowflake connection in Atlan for which you want to mine query history.
3. To create a workflow for mining history directly from Snowflake using its built\-in database you need to provide:

    * name of the database to extract from.
        * name of the schema to extract from.
        * date and time from which to start mining, as an epoch.
4. Optionally, you can specify list of users who should be excluded when calculating usage metrics for assets (for example, system accounts).
5. Optionally, you can specify whether to enable native lineage from Snowflake, using Snowflake's `ACCESS_HISTORY.OBJECTS_MODIFIED` Column. Note: this is only available only for Snowflake Enterprise customers.
6. Build the minimal package object.
7. Now, you can convert the package into a `Workflow` object.
8. Run the workflow by invoking the `run()` method on the workflow client, passing the created object. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Mine query history direct from Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` miner := assets.NewSnowflakeMiner( // (1)     "default/snowflake/1234567890", // (2)     ).      Direct( // (3)         1713225600,          "TEST_DB",          "TEST_SCHEMA",     ).     ExcludeUsers([]string{"test-user-1","test-user-2"}). // (4)     PopularityWindow(30). // (5)     NativeLineage(true). // (6)     CustomConfig(map[string]interface{}{ // (7)         "test":    true,         "feature": 1234,     }).     ToWorkflow() // (8)  response, atlanErr := ctx.WorkflowClient.Run(miner, nil) // (9)  ``` |

1. Base configuration for a new Snowflake miner.
2. You must provide the exact `qualifiedName` of the Snowflake
connection in Atlan for which you want to mine query history.
3. To create a workflow for mining history directly from Snowflake
using its built\-in database you need to provide:

    * date and time from which to start mining, as an epoch.
        * name of the database to extract from.
        * name of the schema to extract from.
4. Optionally, you can specify list of users who should be excluded
when calculating usage metrics for assets (for example, system accounts).
5. Optionally, you can provide number of days to consider for calculating popularity.
6. Optionally, you can specify whether to enable native lineage from Snowflake,
using Snowflake's `ACCESS_HISTORY.OBJECTS_MODIFIED` Column. `Note:` this is only available only for Snowflake Enterprise customers.
7. Optionally, you can provide custom configuration
controlling experimental feature flags for the miner.
8. Now, you can convert the package into a `Workflow` object.
9. Run the workflow by invoking the `ctx.WorkflowClient.Run()` method on the
workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously.
        See the [packages and workflows introduction](../) for details on how you can check the status and wait until
        the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI.
To rerun an existing workflow, see the steps below.

Offline extraction[¶](#offline-extraction "Permanent link")
-----------------------------------------------------------

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[2\.1\.8](https://github.com/atlanhq/atlan-python/releases/tag/2.1.8 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To mine query history from the S3 bucket:

Java

Python

Kotlin

Go

Raw REST API

| Mine query history from the S3 bucket | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` Workflow miner = SnowflakeMiner.creator( // (1)         "default/snowflake/1234567890" // (2)     )     .s3( // (3)         "test-s3-bucket",         "test-s3-prefix",         "TEST_QUERY",         "TEST_DB",         "TEST_SCHEMA",         "TEST_SESSION_ID"     )     .nativeLineage(true) // (4)     .build()  // (5)     .toWorkflow();  // (6)  WorkflowResponse response = miner.run(client);  // (7)  ``` |

1. Base configuration for a new Snowflake miner.
2. You must provide the exact `qualifiedName` of the Snowflake connection in Atlan for which you want to mine query history.
3. To create a workflow for mining history from S3 bucket you need to provide:

    * S3 bucket where the JSON line\-separated files are located.
        * prefix within the S3 bucket in which the JSON line\-separated files are located.
        * JSON key containing the query definition.
        * JSON key containing the default database name to use if a query is not qualified with database name.
        * JSON key containing the default schema name to use if a query is not qualified with schema name.
        * JSON key containing the `session ID` of the SQL query.
4. Optionally, you can specify whether to enable native lineage from Snowflake, using Snowflake's `ACCESS_HISTORY.OBJECTS_MODIFIED` Column. Note: this is only available only for Snowflake Enterprise customers.
5. Build the minimal package object.
6. Now, you can convert the package into a `Workflow` object.
7. Run the workflow by invoking the `run()` method on the workflow client, passing the created object. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Mine query history from the S3 bucket | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import SnowflakeMiner  miner = (     SnowflakeMiner( # (1)         connection_qualified_name="default/snowflake/1234567890"         # (2)     )     .s3( # (3)         s3_bucket="test-s3-bucket",         s3_prefix="test-s3-prefix",         s3_bucket_region="test-s3-bucket-region",         sql_query_key="TEST_QUERY",         default_database_key="TEST_DB",         default_schema_key="TEST_SCHEMA",         session_id_key="TEST_SESSION_ID",     )     .popularity_window(days=30) # (4)     .native_lineage(enabled=True) # (5)     .custom_config( # (6)         config={           "test": True,           "feature": 1234       }     )     .to_workflow() # (7) )  response = client.workflow.run(miner) # (8)  ``` |

1. Base configuration for a new Snowflake miner.
2. You must provide the exact `qualified_name` of the Snowflake
connection in Atlan for which you want to mine query history.
3. To create a workflow for mining history
from S3 bucket you need to provide:

    * S3 bucket where the JSON line\-separated files are located.
        * prefix within the S3 bucket in which the JSON line\-separated files are located.
        * (Optional) region of the S3 bucket if applicable.
        * JSON key containing the query definition.
        * JSON key containing the default database name
         to use if a query is not qualified with database name.
        * JSON key containing the default schema name
        to use if a query is not qualified with schema name.
        * JSON key containing the `session ID` of the SQL query.
4. Optionally, you can provide number of days to consider for calculating popularity.
5. Optionally, you can specify whether to enable native lineage from Snowflake,
using Snowflake's `ACCESS_HISTORY.OBJECTS_MODIFIED` Column. `Note:` this is only available only for Snowflake Enterprise customers.
6. Optionally, you can provide custom configuration
controlling experimental feature flags for the miner.
7. Now, you can convert the package into a `Workflow` object.
8. Run the workflow by invoking the `run()` method on the
workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously.
        See the [packages and workflows introduction](../) for details on how you can check the status and wait until
        the workflow has been completed.

| Mine query history from the S3 bucket | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` val miner = SnowflakeMiner.creator( // (1)         "default/snowflake/1234567890" // (2)     )     .s3( // (3)         "test-s3-bucket",         "test-s3-prefix",         "TEST_QUERY",         "TEST_DB",         "TEST_SCHEMA",         "TEST_SESSION_ID"     )     .nativeLineage(true) // (4)     .build()  // (5)     .toWorkflow()  // (6)  val response = miner.run(client)  // (7)  ``` |

1. Base configuration for a new Snowflake miner.
2. You must provide the exact `qualifiedName` of the Snowflake connection in Atlan for which you want to mine query history.
3. To create a workflow for mining history from S3 bucket you need to provide:

    * S3 bucket where the JSON line\-separated files are located.
        * prefix within the S3 bucket in which the JSON line\-separated files are located.
        * JSON key containing the query definition.
        * JSON key containing the default database name to use if a query is not qualified with database name.
        * JSON key containing the default schema name to use if a query is not qualified with schema name.
        * JSON key containing the `session ID` of the SQL query.
4. Optionally, you can specify whether to enable native lineage from Snowflake, using Snowflake's `ACCESS_HISTORY.OBJECTS_MODIFIED` Column. Note: this is only available only for Snowflake Enterprise customers.
5. Build the minimal package object.
6. Now, you can convert the package into a `Workflow` object.
7. Run the workflow by invoking the `run()` method on the workflow client, passing the created object. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Mine query history from the S3 bucket | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` miner := assets.NewSnowflakeMiner( // (1)     "default/snowflake/1234567890" // (2)     ).      S3( // (3)         "test-s3-bucket",         "test-s3-prefix",         "TEST_QUERY",         "TEST_SNOWFLAKE",         "TEST_SCHEMA",         "TEST_SESSION_ID",         structs.StringPtr("test-s3-bucket-region"),     ).     PopularityWindow(30). // (4)     NativeLineage(true). // (5)     CustomConfig(map[string]interface{}{ // (6)         "test":    true,         "feature": 1234,     }).     ToWorkflow() // (7)  response, atlanErr := ctx.WorkflowClient.Run(miner, &Schedule) // (8)  ``` |

1. Base configuration for a new Snowflake miner.
2. You must provide the exact `qualifiedName` of the Snowflake
connection in Atlan for which you want to mine query history.
3. To create a workflow for mining history
from S3 bucket you need to provide:

    * S3 bucket where the JSON line\-separated files are located.
        * prefix within the S3 bucket in which the JSON line\-separated files are located.
        * (Optional) region of the S3 bucket if applicable.
        * JSON key containing the query definition.
        * JSON key containing the default database name
         to use if a query is not qualified with database name.
        * JSON key containing the default schema name
        to use if a query is not qualified with schema name.
        * JSON key containing the `session ID` of the SQL query.
4. Optionally, you can provide number of days to consider for calculating popularity.
5. Optionally, you can specify whether to enable native lineage from Snowflake,
using Snowflake's `ACCESS_HISTORY.OBJECTS_MODIFIED` Column. `Note:` this is only available only for Snowflake Enterprise customers.
6. Optionally, you can provide custom configuration
controlling experimental feature flags for the miner.
7. Now, you can convert the package into a `Workflow` object.
8. Run the workflow by invoking the `ctx.WorkflowClient.Run()` method on the
workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously.
        See the [packages and workflows introduction](../) for details on how you can check the status and wait until
        the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI.
To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for Snowflake query mining:

Java

Python

Kotlin

Go

Raw REST API

| Re\-run existing Snowflake workflow | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, SnowflakeMiner.PREFIX, 5); // (2) // Determine which of the results is the // Snowflake workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `SnowflakeMiner`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Snowflake workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.SNOWFLAKE_MINER, max_results=5 )  # Determine which Snowflake workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()`method and providing the **prefix** for one of the packages.
In this example, we do so for the `SnowflakeMiner`.
(You can also specify the **maximum number of resulting
workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid
         re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Snowflake workflow | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` var existing = WorkflowSearchRequest // (1)     .findByType(client, SnowflakeMiner.PREFIX, 5) // (2) // Determine which of the results is the // Snowflake workflow you want to re-run... var response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `SnowflakeMiner`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Snowflake workflow | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` existingWorkflow, _ := ctx.WorkflowClient.FindByType( // (1)     atlan.WorkflowPackageSnowflakeMiner,     1, ) response, atlanErr := ctx.WorkflowClient.Rerun(existingWorkflow[0], true) // (2)  ``` |

1. You can find workflows by their type using the workflow client `FindByType()`method and providing the **prefix** for one of the packages.
In this example, we do so for the `SnowflakeMiner`.
(You can also specify the **maximum number of resulting
workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `Rerun()` method.

    * Optionally, you can use `Rerun(idempotent=True)` to avoid
         re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-snowflake-miner" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-snowflake-miner` prefix will ensure you only find existing Snowflake miner workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object. (Remember since this is a search, there could be multiple results, so you may want to use the other details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-snowflake-miner-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2022\-12\-282025\-02\-24

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/snowflake-miner/) to provide us with more information. 

Back to top

[Previous Snowflake assets](../snowflake-assets/) [Next Sigma assets](../sigma-assets/) 

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

