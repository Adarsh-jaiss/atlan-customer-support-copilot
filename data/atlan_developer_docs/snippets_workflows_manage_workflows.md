# Source URL
https://developer.atlan.com/snippets/workflows/manage/workflows/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/manage/workflows/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage workflows in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage workflows in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/manage/workflows.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage workflows - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/manage/workflows/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage workflows in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/manage/workflows.png
meta-twitter:title: Manage workflows - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage workflows - Developer
-->

[Skip to content](#manage-workflows) Developer Manage workflows Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Manage workflows[¶](#manage-workflows "Permanent link")
=======================================================

Retrieve workflow[¶](#retrieve-workflow "Permanent link")
---------------------------------------------------------

### By ID[¶](#by-id "Permanent link")

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[2\.3\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.3.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Retrieve an existing workflow by its ID:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve workflows by its type | |
| --- | --- |
| ``` 1 2 ``` | ``` WorkflowSearchResult result = WorkflowSearchRequest // (1)     .findById(client, "atlan-snowflake-miner-1714638976"); // (2)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their ID using the `findById()` helper method and providing the ID for one of the packages. In this example, we're retrieving a specific Snowflake miner package. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Retrieve workflow by its ID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  result = client.workflow.find_by_id(  # (1)     id="atlan-snowflake-miner-1714638976" )  ``` |

1. You can find a workflow by its identifier using the `find_by_id()` method
of the workflow client, providing the `id` for the specific workflow.
In this example, we're retrieving the `SnowflakeMiner` workflow.

| Retrieve workflows by its type | |
| --- | --- |
| ``` 1 2 ``` | ``` val result = WorkflowSearchRequest // (1)     .findById(client, "atlan-snowflake-miner-1714638976") // (2)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their ID using the `findById()` helper method and providing the ID for one of the packages. In this example, we're retrieving a specific Snowflake miner package. Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Retrieve workflow by its ID | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` result, atlanErr := ctx.WorkflowClient.FindByID("atlan-snowflake-miner-1714638976") // (1) if atlanErr != nil {     logger.Log.Errorf("Error : %v", atlanErr) }  ``` |

1. You can find a workflow by its identifier using the `FindByID()` method
of the workflow client, providing the `id` for the specific workflow.
In this example, we're retrieving the `SnowflakeMiner` workflow.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 ``` | ``` {    "from": 0,    "size": 1,    "track_total_hits": true,    "query": {        "bool": {        "filter": [            {            "nested": {                "path": "metadata",                "query": {                "bool": {                    "must": [                    {                        "term": {                        "metadata.name.keyword": {                            "value": "atlan-snowflake-miner-1714638976"                             // (1)                        }                        }                    }                    ]                }                }            }            }        ]        }    },    "sort": [        {        "metadata.creationTimestamp": {            "order": "desc",            "nested": {            "path": "metadata"            }        }        }    ] }  ``` |

1. You can find a workflow by its identifier. In this example, we're retrieving the `SnowflakeMiner` workflow.

### By type[¶](#by-type "Permanent link")

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Retrieve existing workflows by its type:

Java

Python

Kotlin

Go

Raw REST API

| Retrieve workflows by its type | |
| --- | --- |
| ``` 1 2 ``` | ``` List<WorkflowSearchResult> results = WorkflowSearchRequest // (1)     .findByType(client, SnowflakeMiner.PREFIX, 5); // (2)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `SnowflakeMiner`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.) Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Retrieve workflows by its type | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  results = client.workflow.find_by_type(  # (1)     prefix=WorkflowPackage.SNOWFLAKE_MINER, max_results=5 )  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()`method and providing the **prefix** for one of the packages.
In this example, we do so for the `SnowflakeMiner`.
(You can also specify the **maximum number of resulting
workflows** you want to retrieve as results.)

| Retrieve workflows by its type | |
| --- | --- |
| ``` 1 2 ``` | ``` var results = WorkflowSearchRequest // (1)     .findByType(client, SnowflakeMiner.PREFIX, 5); // (2)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `SnowflakeMiner`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.) Because this operation will retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| Retrieve workflows by its type | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` result, atlanErr := ctx.WorkflowClient.FindByType(atlan.WorkflowPackageSnowflakeMiner, 5) // (1) if atlanErr != nil {     logger.Log.Errorf("Error : %v", atlanErr) }  ``` |

1. You can find workflows by their type using the workflow client `FindByType()`method and providing the **prefix** for one of the packages.
In this example, we do so for the `SnowflakeMiner`.
(You can also specify the **maximum number of resulting
workflows** you want to retrieve as results.)

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {    "from": 0,    "size": 5, // (1)    "track_total_hits": true,    "query": {        "bool": {        "filter": [            {            "nested": {                "path": "metadata",                "query": {                "regexp": {                    "metadata.name.keyword": {                    "value": "atlan[-]snowflake[-]miner[-][0-9]{10}"                    } // (2)                }                }            }            }        ]        }    },    "sort": [        {        "metadata.creationTimestamp": {            "order": "desc",            "nested": {            "path": "metadata"            }        }        }    ] }  ``` |

1. Specify the maximum number of resulting workflows you want to retrieve as results.
2. In this example, we do so for the `SnowflakeMiner` with `regexp: atlan[-]snowflake[-]miner[-][0-9]{10}`.

Create workflow credentials[¶](#create-workflow-credentials "Permanent link")
-----------------------------------------------------------------------------

[4\.2\.1](https://github.com/atlanhq/atlan-python/releases/tag/4.2.1 "Minimum version")

To create workflow credentials for example, for [Snowflake](../../packages/snowflake-assets/):

Java

Python

Kotlin

Raw REST API

Coming soon

| Create workflow credentials | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.credential import Credential  client = AtlanClient()  snowflake_credential = Credential() # (1) snowflake_credential.name = "snowflake-credential" # (2) snowflake_credential.connector_config_name = "atlan-connectors-snowflake" # (3) snowflake_credential.connector="snowflake" # (4) snowflake_credential.auth_type = "basic" # (5)  snowflake_credential.username = "username" # (6)  snowflake_credential.password = "password" snowflake_credential.extras = {     "role": "role-here",     "warehouse": "warehouse-here", } snowflake_credential.host = "test-host" # (7) snowflake_credential.port = 1234  response = client.credentials.creator(     credential = snowflake_credential, test = True # (8) )   ``` |

1. Initialize the credential object for credential creation.
2. You must provide a `name` for the credential being created.
3. You must specify the `connector_config_name` for the credential.
4. You must specify the `connector name` for the credential.
5. You must specify the `authentication type` of the credential.
6. You can provide the sensitive details such as the `username`, `password`, and `extras` when creating credentials. This behavior aligns with the Atlan workflow config.
7. You can specify the `host` and `port` being used.
8. To create workflow credentials using the `creator()` method. You need to provide the below params:

    * **`credential`** : the `credential` object is passed to create new credentials in Atlan. For example, in this case, `snowflake_credential` serves as the credential object.
        * **`test`** : specify whether to validate the credentials (`True`) or skip validation (`False`) before creations. Defaults to `True`

Coming soon

| POST /api/service/credentials?testCredential\=true | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {     "authType": "basic",// (1)     "name": "snowflake-credential", //(2)     "connector": "snowflake", // (3)     "connectorConfigName": "atlan-connectors-snowflake", // (4)     "username": "username", // (5)     "password": "password",     "extra": {         "role": "role-here",         "warehouse": "warehouse-here",     },     "host": "test-host", // (6)     "port": 1234, }  ``` |

1. You must specify the `authType` for the credential.
2. You must provide a Human\-readable name for your credential.
3. You must specify the `connector` for the credential.
4. You must specify the `connectorConfigName` for the credential.
5. You can provide the sensitive details such as the `username`, `password`, and `extras` when creating credentials.
6. You can specify the `host` and `port` being used.

Retrieve all workflow credentials[¶](#retrieve-all-workflow-credentials "Permanent link")
-----------------------------------------------------------------------------------------

[6\.0\.3](https://github.com/atlanhq/atlan-python/releases/tag/6.0.3 "Minimum version")

To retrive all workflow credentials for example, for [Snowflake](../../packages/snowflake-assets/):

Java

Python

Kotlin

Raw REST API

Coming soon

| Retrieve all workflow credentials | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  response = client.credentials.get_all( #(1)     filter={"connector": "snowflake"},     limit=5,                  offset=1,     workflow_name="atlan-bigquery-1735837155",           )  ``` |

1. To retrieve workflow credentials using the `get_all()` method. When run without any parameters, it returns all existing records. You can also use following optional parameters to filter, limit, or paginate through the results:

    * *(Optional)* **`filter`** : filters records based on specific key\-value criteria, such as `{"connector": "snowflake"}` returns credentials for workflows using the `snowflake` connector.
        * *(Optional)* **`limit`** : restricts the maximum number of records returned in a single call, for example, `limit=5` retrieves up to `5` records only.
        * *(Optional)* **`offset`** : skips a specified number of records before starting retrieval, such as `offset=10` to skip the first `10` records and retrieve from the `11th` onward.
        * *(Optional)* **`workflow_name`** : retrieves credentials for a specific workflow. The name should match the workflow name as shown in the Atlan UI.

Coming soon

| GET api/service/credentials?filter\=%7B%22name%22%3A%22atlan\-snowflake\-17891%22%7D\&limit\=1\&offset\=1 | |
| --- | --- |
| ``` 1 ``` | ``` //(1)  ``` |

1. All details are in the URL itself.

    URL\-encoded filter

    Note that the filter is URL\-encoded. Decoded it would be: `{"name":"atlan-snowflake-17891"}`

Update workflow source credentials[¶](#update-workflow-source-credentials "Permanent link")
-------------------------------------------------------------------------------------------

[1\.8\.4](https://github.com/atlanhq/atlan-python/releases/tag/1.8.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To update workflow source credentials for example, for [Snowflake](../../packages/snowflake-assets/):

Java

Python

Kotlin

Raw REST API

| Update workflow source credentials | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` Credential snowflakeCredential = client.credentials.get( // (1)     "972a87c1-28d7-8bf2-896d-ea5bd3e9c691"     ).toCredential()     .authType("basic") // (2)     .username("username") // (3)     .password("password")     .extra("role", "role-here")     .extra("warehouse", "warehouse-here")     .build() // (4)  CredentialResponse response = snowflakeCredential.update(client) // (5)  ``` |

1. You can retrieve the workflow credential object by providing its `GUID`.
2. You must specify the authentication type of the credential.
3. You must provide the sensitive details such as the `username`, `password`, and `extra` when updating credentials. This behavior aligns with the Atlan workflow config update UI.
4. Build the minimal `Credential` object.
5. Now, use the `update()` method of the `Credential` object to update this new credentials in Atlan after initially testing it for successful validation. Because this operation will update details in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update workflow source credentials | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  snowflake_credential = client.credentials.get(     guid="972a87c1-28d7-8bf2-896d-ea5bd3e9c691" ).to_credential() # (1)  # Basic Authentication snowflake_credential.auth_type = "basic" # (2) snowflake_credential.username = "username" # (3) snowflake_credential.password = "password" snowflake_credential.extras = {     "role": "role-here",     "warehouse": "warehouse-here", }  response = client.credentials.test_and_update( # (4)     credential=snowflake_credential )  ``` |

1. You can retrieve the workflow credential object by providing its `GUID`.
2. You must specify the authentication type of the credential.
3. You must provide the sensitive details such as the `username`, `password`, and `extras` when updating credentials.
This behavior aligns with the Atlan workflow config update UI.
4. Now, pass the `credential` object to the `test_and_update()` method to update this new credentials in Atlan after
initially testing it to confirm its successful validation.

| Update workflow source credentials | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` val snowflakeCredential = client.credentials.get( // (1)     "972a87c1-28d7-8bf2-896d-ea5bd3e9c691"     ).toCredential()     .authType("basic") // (2)     .username("username") // (3)     .password("password")     .extra("role", "role-here")     .extra("warehouse", "warehouse-here")     .build() // (4)  val response = snowflakeCredential.update() // (5)  ``` |

1. You can retrieve the workflow credential object by providing its `GUID`.
2. You must specify the authentication type of the credential.
3. You must provide the sensitive details such as the `username`, `password`, and `extra` when updating credentials. This behavior aligns with the Atlan workflow config update UI.
4. Build the minimal `Credential` object.
5. Now, use the `update()` method of the `Credential` object to update this new credentials in Atlan after initially testing it for successful validation. Because this operation will update details in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| GET /api/service/credentials/972a87c1\-28d7\-8bf2\-896d\-ea5bd3e9c691 | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. You can retrieve the workflow credential object by providing its `GUID`.

| POST /api/service/credentials/972a87c1\-28d7\-8bf2\-896d\-ea5bd3e9c691/test | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. You can also test the existing credential authentication by providing its `GUID`.

| POST /api/service/credentials/test | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {    "name": "default-snowflake-1735595539-0", // (1)    "host": "test.snowflake.com",    "port": 443,    "authType": "basic",    "connectorType": "jdbc",    "username": "test-username", // (2)    "password": "test-password",    "extra": {        "role": "test-role",        "warehouse": "test-warehouse",    },    "connectorConfigName": "atlan-connectors-snowflake" }   ``` |

1. This example demonstrates how to test \& update the source
credentials for the `Snowflake` crawler (basic authentication).
2. You can update the following credentials fields:

    * `username`: update with the new username.
        * `password`: update with the new password.
        * `role`: update with the new role.
        * `warehouse`: update with the new warehouse.

Hard\-delete an workflow credentials[¶](#hard-delete-an-workflow-credentials "Permanent link")
----------------------------------------------------------------------------------------------

[4\.2\.0](https://github.com/atlanhq/atlan-python/releases/tag/4.2.0 "Minimum version")

Hard\-deletes (also called a purge) are irreversible operations. The workflow credential is removed from Atlan entirely, so no longer appears in the UI and also no longer exists in Atlan's back\-end.

To hard\-delete (purge) an asset, you only need to provide the GUID for [Snowflake](../../packages/snowflake-assets/):

Java

Python

Kotlin

Raw REST API

Coming soon

| Delete workflow credentials | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  response = client.credentials.purge_by_guid(guid="972a87c1-28d7-8bf2-896d-ea5bd3e9c691") #(1)  ``` |

1. The credentials.purge\_by\_guid() method returns `None` when the credentials deleted sucessfully.

Coming soon

| POST api/service/credentials/972a87c1\-28d7\-8bf2\-896d\-ea5bd3e9c691/archive | |
| --- | --- |
| ``` 1 ``` | ``` //(1)  ``` |

1. Specify the GUID of the credential to be deleted: `api/service/credentials/{credential-guid}/archive`

Update workflow configuration[¶](#update-workflow-configuration "Permanent link")
---------------------------------------------------------------------------------

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[2\.3\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.3.1 "Minimum version")

To update workflow configuration for example, for [Snowflake](../../packages/snowflake-assets/):

Java

Python

Kotlin

Go

Coming soon

| Update workflow configuration | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  result = client.workflow.find_by_id(  # (1)     id="atlan-snowflake-1714638976" )  workflow_task = result.source.spec.templates[0].dag.tasks[0] workflow_params = workflow_task.arguments.parameters # (2)  for option in workflow_params:     if option.name == "enable-lineage": # (3)         option.value = True  response = client.workflow.update(workflow=result.to_workflow()) # (4)  ``` |

1. You can find a workflow by its identifier using the `find_by_id()` method
of the workflow client, providing the `id` for the specific workflow.
In this example, we're retrieving the `Snowflake` workflow for an update.
2. Retrieve the workflow template and specific task that you need to update.
3. Update the specific workflow parameter. In this example,
we're enabling lineage for the `Snowflake` workflow.
4. Convert the workflow search result object to a workflow object
and pass that to the `update()` method to actually perform the workflow update in Atlan.

Coming soon

| Update workflow configuration | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` result, _ := ctx.WorkflowClient.FindByID("atlan-snowflake-1714638976") // (1)  workflowTask := result.Source.Spec.Templates[0].DAG.Tasks[0] // (2) workflowParams := workflowTask.Arguments.Parameters   for _, option := range workflowParams {     if option.Name == "enable-lineage" { // (3)         option.Value = true     } }  response, atlanErr := ctx.WorkflowClient.Update(result.ToWorkflow()) // (4) if atlanErr != nil {     logger.Log.Errorf("Error : %v", atlanErr) }  ``` |

1. You can find a workflow by its identifier using the `FindByID()` method
of the workflow client, providing the `id` for the specific workflow.
In this example, we're retrieving the `Snowflake` workflow for an update.
2. Retrieve the workflow template and specific task that you need to update.
3. Update the specific workflow parameter. In this example,
we're enabling lineage for the `Snowflake` workflow.
4. Convert the workflow search result object to a workflow object
and pass that to the `Update()` method to actually perform the workflow update in Atlan.

Retrieve workflow run[¶](#retrieve-workflow-run "Permanent link")
-----------------------------------------------------------------

### By ID[¶](#by-id_1 "Permanent link")

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[2\.4\.2](https://github.com/atlanhq/atlan-python/releases/tag/2.4.2 "Minimum version")

Retrieve an existing workflow run by its ID:

Java

Python

Kotlin

Go

Raw REST API

Coming soon

| Retrieve workflow run by its ID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  result = client.workflow.find_run_by_id(  # (1)     id="atlan-snowflake-miner-1714638976-mzdza" )  ``` |

1. You can find a workflow run by its identifier using the `find_run_by_id()` method
of the workflow client, providing the `id` for the specific workflow run.
In this example, we're retrieving the existing `SnowflakeMiner` workflow run.

Coming soon

| Retrieve workflow run by its ID | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` result, atlanErr := ctx.WorkflowClient.FindRunByID("atlan-snowflake-miner-1714638976-mzdza") // (1) if atlanErr != nil {     logger.Log.Errorf("Error : %v", atlanErr) }  ``` |

1. You can find a workflow run by its identifier using the `FindRunByID()` method
of the workflow client, providing the `id` for the specific workflow run.
In this example, we're retrieving the existing `SnowflakeMiner` workflow run.

| POST /api/service/runs/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ``` | ``` {    "from": 0,    "size": 1,    "track_total_hits": true,    "query": {        "bool": {        "filter": [            {            "term": {                "_id": {                "value": "atlan-snowflake-miner-1714638976-mzdza"                } // (1)            }            }        ]        }    },    "sort": [        {        "metadata.creationTimestamp": {            "order": "desc",            "nested": {            "path": "metadata"            }        }        }    ] }  ``` |

1. You can find a workflow run by its identifier.
In this example, we're retrieving the existing `SnowflakeMiner` workflow run.

### By status and time range[¶](#by-status-and-time-range "Permanent link")

[6\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.1.0 "Minimum version")

Retrieve existing workflow runs by their status and time range:

Java

Python

Kotlin

Go

Raw REST API

Coming soon

| Retrieve workflow runs by status and time range | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanWorkflowPhase  client = AtlanClient()  results = client.workflow.find_runs_by_status_and_time_range(  # (1)     status=[AtlanWorkflowPhase.SUCCESS, AtlanWorkflowPhase.FAILED],     started_at="now-6h",     finished_at="now-1h",     from_=0,     size=100, ) for result in results: # (2)     # Do something with the workflow...  ``` |

1. To search for workflow runs based on their status and time range, use the `find_runs_by_status_and_time_range()` method with the following parameters:

    * `status` (required): filters workflow runs by their status. Acceptable values are defined in the `AtlanWorkflowPhase` enum.  
         For example, setting `status=[AtlanWorkflowPhase.SUCCESS, AtlanWorkflowPhase.FAILED]` will retrieve workflow runs that have either a `success` or `failed` status.
        * `started_at` (optional): Filters workflow runs based on their start time.  
         For example, setting `started_at="now-6h"` will retrieve runs that started within the last 6 hours.
        * `finished_at` (optional): Filters workflow runs based on their finish time.  
         For example, setting `finished_at="now-1h"` will retrieve runs that finished within the last hour.
        * `from_` (optional): starting index of the search results (default: `0`).
        * `size` (optional): maximum number of search results to return (default: `100`).
        Returns a WorkflowSearchResponse object.

    Not sure about Elasticsearch time range format?

    Check out the [Elasticsearch date math](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/common-options#date-math) guide for more details.
2. This is the pattern for iterating through all results (across pages) covered in the [Searching for assets](../../../advanced-examples/search/#multiple-pages-of-results) portion of the SDK documentation.

Coming soon

Coming soon

| POST /api/service/runs/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 ``` | ``` { "from": 0, // (1) "size": 100, // (2) "track_total_hits": true, "query": {     "bool": {     "must": [         {         "nested": {             "path": "metadata",             "query": {             "terms": {                 "metadata.labels.workflows.argoproj.io/phase.keyword": [ // (3)                 "Succeeded",                 "Failed"                 ]             }             }         }         },         {         "range": {             "status.startedAt": { // (4)             "gte": "now-6h"             }         }         },         {         "range": {             "status.finishedAt": { // (5)             "gte": "now-1h"             }         }         },         {         "nested": {             "path": "metadata",             "query": {             "exists": {                 "field": "metadata.labels.workflows.argoproj.io/creator"             }             }         }         }     ]     } }, "sort": [     {     "metadata.creationTimestamp": {         "order": "desc",         "nested": {         "path": "metadata"         }     }     } ] }  ``` |

1. Starting index of the search results (default: `0`).
2. Maximum number of search results to return (default: `100`).
3. You can find workflow runs by their status.
In this example, we're retrieving workflow runs that have either a `Succeeded` or `Failed` status.
4. You can use a [`Range` query](../../../../search/queries/terms/#range) to filter workflow runs based on their start time. 
For example, setting `"status.startedAt": {"gte": "now-6h"}` will retrieve runs that started within the last 6 hours.
5. You can use a [`Range` query](../../../../search/queries/terms/#range) to filter workflow runs based on their finish time.  
 For example, setting `"status.finishedAt": {"gte": "now-1h"}` will retrieve runs that finished within the last hour.

Not sure about Elasticsearch time range format?

Check out the [Elasticsearch date math](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/common-options#date-math) guide for more details.

Retrieve all workflow runs[¶](#retrieve-all-workflow-runs "Permanent link")
---------------------------------------------------------------------------

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[2\.1\.8](https://github.com/atlanhq/atlan-python/releases/tag/2.1.8 "Minimum version")

### By their phase:[¶](#by-their-phase "Permanent link")

To retrieve all existing workflow runs based on 
their phase, such as `Succeeded`, `Running`, `Failed`, etc

Java

Python

Kotlin

Go

Raw REST API

Coming soon

| Retrieve all workflow runs by their phase | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import AtlanWorkflowPhase  client = AtlanClient()  response = client.workflow.get_runs(     workflow_name="atlan-snowflake-miner-1714638976",     workflow_phase=AtlanWorkflowPhase.RUNNING,     from_=0,     size=100, ) # (1)  ``` |

1. To retrieve all existing workflow runs
based on their phase, you need to specify:

    * name of the workflow as displayed in the UI, eg: `atlan-snowflake-miner-1714638976`.
        * phase of the given workflow (e.g: `Succeeded`, `Running`, `Failed`, etc)
        * starting index of the search results (default: `0`).
        * maximum number of search results to return (default: `100`).

Coming soon

| Retrieve all workflow runs by their phase | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` result, atlanErr := ctx.WorkflowClient.GetRuns(     "atlan-snowflake-miner-1714638976",      atlan.AtlanWorkflowPhaseSuccess,      0,      100, ) // (1) if atlanErr != nil {     logger.Log.Errorf("Error : %v", atlanErr) }   ``` |

1. To retrieve all existing workflow runs
based on their phase, you need to specify:

    * name of the workflow as displayed in the UI, eg: `atlan-snowflake-miner-1714638976`.
        * phase of the given workflow (e.g: `AtlanWorkflowPhaseSuccess`, `AtlanWorkflowPhaseRunning`, `AtlanWorkflowPhaseFailed`, etc)
        * starting index of the search results (default: `0`).
        * maximum number of search results to return (default: `100`).

| POST /api/service/runs/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 ``` | ``` {    "from": 0, // (1)    "size": 100, // (2)    "track_total_hits": true,    "query": {        "bool": {        "must": [            {            "nested": {                "path": "spec",                "query": {                "term": {                    "spec.workflowTemplateRef.name.keyword": {                    "value": "atlan-snowflake-miner-1714638976"                    } // (3)                }                }            }            }        ],        "filter": [            {            "term": {                "status.phase.keyword": {                "value": "Succeeded"                } // (4)            }            }        ]        }    },    "sort": [        {        "metadata.creationTimestamp": {            "order": "desc",            "nested": {            "path": "metadata"            }        }        }    ] }  ``` |

1. Starting index of the search results (default: `0`).
2. Maximum number of search results to return (default: `100`).
3. Name of the workflow as displayed in the UI, eg: `atlan-snowflake-miner-1714638976`.
4. Phase of the given workflow (e.g: `Succeeded`, `Running`, `Failed`, etc)

Stop a running workflow[¶](#stop-a-running-workflow "Permanent link")
---------------------------------------------------------------------

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[2\.1\.8](https://github.com/atlanhq/atlan-python/releases/tag/2.1.8 "Minimum version")

To stop a running workflow:

Java

Python

Kotlin

Go

Coming soon

| Retrieve all workflow runs by their phase | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  runs = client.workflow.get_runs(     workflow_name="atlan-snowflake-miner-1714638976",     workflow_phase=AtlanWorkflowPhase.RUNNING, ) # (1)  response = client.workflow.stop(     workflow_run_id=runs[0].id ) # (2)  ``` |

1. First, retrieve all existing running workflows.
2. From the list of existing running workflows, provide 
the identifier of the specific workflow run to the `client.workflow.stop()` method, e.g: `atlan-snowflake-miner-1714638976-9wfxz`.

Coming soon

| Retrieve all workflow runs by their phase | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` runs, _ := ctx.WorkflowClient.GetRuns(     "atlan-snowflake-miner-1714638976-9wfxz",      atlan.AtlanWorkflowPhaseRunning,      0,      100, ) // (1) response, atlanErr := ctx.WorkflowClient.Stop(runs[0].ID) // (2) if atlanErr != nil {     logger.Log.Errorf("Error : %v", atlanErr) }  ``` |

1. First, retrieve all existing running workflows.
2. From the list of existing running workflows, provide 
the identifier of the specific workflow run to the `ctx.WorkflowClient.Stop()` method, e.g: `atlan-snowflake-miner-1714638976-9wfxz`.

Delete a workflow[¶](#delete-a-workflow "Permanent link")
---------------------------------------------------------

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")[2\.1\.8](https://github.com/atlanhq/atlan-python/releases/tag/2.1.8 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To delete a workflow:

Java

Python

Kotlin

Go

| Delete a workflow | |
| --- | --- |
| ``` 1 2 3 ``` | ``` client.workflows.archive(     "atlan-snowflake-miner-1714638976" ); // (1)  ``` |

1. To delete an existing workflow, specify the name of the workflow as displayed in the UI (e.g: `atlan-snowflake-miner-1714638976`).

| Delete a workflow | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  client.workflow.delete(     workflow_name="atlan-snowflake-miner-1714638976" ) # (1)  ``` |

1. To delete an existing workflow, specify:

    * name of the workflow as displayed in the
        UI (e.g: `atlan-snowflake-miner-1714638976`).

| Delete a workflow | |
| --- | --- |
| ``` 1 2 3 ``` | ``` client.workflows.archive(     "atlan-snowflake-miner-1714638976" ) // (1)  ``` |

1. To delete an existing workflow, specify the name of the workflow as displayed in the UI (e.g: `atlan-snowflake-miner-1714638976`).

| Delete a workflow | |
| --- | --- |
| ``` 1 ``` | ``` ctx.WorkflowClient.Delete("atlan-snowflake-miner-1714638976") // (1)  ``` |

1. To delete an existing workflow, specify:

    * name of the workflow as displayed in the
        UI (e.g: `atlan-snowflake-miner-1714638976`).

---

2022\-09\-092025\-05\-14

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/manage/workflows/) to provide us with more information. 

Back to top

[Previous Packages and workflows introduction](../../) [Next Manage workflow schedules](../schedules/) 

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

