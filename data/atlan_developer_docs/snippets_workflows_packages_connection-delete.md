# Source URL
https://developer.atlan.com/snippets/workflows/packages/connection-delete/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/connection-delete/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Package for deleting a connection and its related assets, with options for soft-delete (archive) and hard-delete (purge).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Package for deleting a connection and its related assets, with options for soft-delete (archive) and hard-delete (purge).
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/connection-delete.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Connection delete package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/connection-delete/
meta-twitter:card: summary_large_image
meta-twitter:description: Package for deleting a connection and its related assets, with options for soft-delete (archive) and hard-delete (purge).
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/connection-delete.png
meta-twitter:title: Connection delete package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Connection delete package - Developer
-->

[Skip to content](#connection-delete-package) Developer Connection delete package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

Connection delete package[¶](#connection-delete-package "Permanent link")
=========================================================================

The [connection delete package](https://ask.atlan.com/hc/en-us/articles/6755306791697) deletes a connection and all its related assets.

Soft\-delete (archive) assets[¶](#soft-delete-archive-assets "Permanent link")
------------------------------------------------------------------------------

[2\.2\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.2.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To soft\-delete (archive) all assets in a connection:

Java

Python

Kotlin

Raw REST API

| Archive assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Workflow workflow = ConnectionDelete.creator( // (1)         "default/snowflake/1234567890", false // (2)     ).build() // (3)     .toWorkflow(); // (4)  WorkflowResponse response = workflow.run(client); // (5)  ``` |

1. The `ConnectionDelete` package will create a workflow to delete a connection and its assets using the `creator()` method.
2. You need to provide the following:

    * qualified name of the connection whose assets should be deleted.
        * whether to permanently delete the connection and its assets (hard\-delete) (`true`), or only archive (soft\-delete) them (`false`).
3. Build the minimal package object.
4. Convert the package into a `Workflow` object.
5. Run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how to check the status and wait until the workflow has been completed.

| Archive assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import ConnectionDelete  client = AtlanClient()  workflow = ConnectionDelete( # (1)     qualified_name="default/snowflake/1234567890", purge=False # (2) ).to_workflow() # (3)  response = client.workflow.run(workflow) # (4)  ``` |

1. The `ConnectionDelete` package will create
a workflow to delete a connection and its assets.
2. You need to provide the following:

    * qualified name of the connection whose assets should be deleted.
        * whether to permanently delete the connection and its assets
        (hard\-delete) (`True`), or only archive (soft\-delete) them (`False`).
3. Convert the package into a `Workflow` object.
4. Run the workflow by invoking the `run()` method
on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously.
        See the [packages and workflows introduction](../) for details on how to check the status and wait
        until the workflow has been completed.

| Archive assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val workflow = ConnectionDelete.creator( // (1)         "default/snowflake/1234567890", false // (2)     ).build() // (3)     .toWorkflow() // (4)  val response = workflow.run(client) // (5)  ``` |

1. The `ConnectionDelete` package will create a workflow to delete a connection and its assets using the `creator()` method.
2. You need to provide the following:

    * qualified name of the connection whose assets should be deleted.
        * whether to permanently delete the connection and its assets (hard\-delete) (`true`), or only archive (soft\-delete) them (`false`).
3. Build the minimal package object.
4. Convert the package into a `Workflow` object.
5. Run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how to check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI.
To rerun an existing workflow, see the steps below.

Hard\-delete (purge) assets[¶](#hard-delete-purge-assets "Permanent link")
--------------------------------------------------------------------------

Permanent and irreversible

A hard\-delete (purge) is permanent and irreversible.
Be certain that you want to entirely remove all of the
assets in a connection before running in this way!

[2\.2\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.2.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To hard\-delete (purge) all assets in a connection:

Java

Python

Kotlin

Raw REST API

| Purge assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` Workflow workflow = ConnectionDelete.creator( // (1)         "default/snowflake/1234567890", true // (2)     ).build() // (3)     .toWorkflow(); // (4)  WorkflowResponse response = workflow.run(client); // (5)  ``` |

1. The `ConnectionDelete` package will create a workflow to delete a connection and its assets using the `creator()` method.
2. You need to provide the following:

    * qualified name of the connection whose assets should be deleted.
        * whether to permanently delete the connection and its assets (hard\-delete) (`true`), or only archive (soft\-delete) them (`false`).
3. Build the minimal package object.
4. Convert the package into a `Workflow` object.
5. Run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how to check the status and wait until the workflow has been completed.

| Purge assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import ConnectionDelete  client = AtlanClient()  workflow = ConnectionDelete( # (1)     qualified_name="default/snowflake/1234567890", purge=True # (2) ).to_workflow() # (3)  response = client.workflow.run(workflow) # (4)  ``` |

1. The `ConnectionDelete` package will create
a workflow to delete a connection and its assets.
2. You need to provide the following:

    * qualified name of the connection whose assets should be deleted.
        * whether to permanently delete the connection and its assets
        (hard\-delete) (`True`), or only archive (soft\-delete) them (`False`).
3. Convert the package into a `Workflow` object.
4. Run the workflow by invoking the `run()` method
on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously.
        See the [packages and workflows introduction](../) for details on how to check the status and wait
        until the workflow has been completed.

| Purge assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val workflow = ConnectionDelete.creator( // (1)         "default/snowflake/1234567890", true // (2)     ).build() // (3)     .toWorkflow() // (4)  val response = workflow.run(client) // (5)  ``` |

1. The `ConnectionDelete` package will create a workflow to delete a connection and its assets using the `creator()` method.
2. You need to provide the following:

    * qualified name of the connection whose assets should be deleted.
        * whether to permanently delete the connection and its assets (hard\-delete) (`true`), or only archive (soft\-delete) them (`false`).
3. Build the minimal package object.
4. Convert the package into a `Workflow` object.
5. Run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how to check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI.
To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing connection delete workflow:

Java

Python

Kotlin

Raw REST API

| Re\-run existing connection delete workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)             .findByType(client, ConnectionDelete.PREFIX, 5); // (2) // Determine which of the results is the Connection delete workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `ConnectionDelete`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing connection delete workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.CONNECTION_DELETE, max_results=5 )  # Determine which Connection delete workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `ConnectionDelete`. (You can also specify
the **maximum number of resulting workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing connection delete workflow | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val existing = WorkflowSearchRequest // (1)             .findByType(client, ConnectionDelete.PREFIX, 5) // (2) // Determine which of the results is the // connection delete workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `ConnectionDelete`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-connection-delete" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-connection-delete` prefix will ensure you only find existing connection delete workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object. 
        (Remember since this is a search, there could be multiple results, so you may want to use the other details 
        in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-connection-delete-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2022\-12\-282025\-01\-28

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/connection-delete/) to provide us with more information. 

Back to top

[Previous BigQuery assets](../bigquery-assets/) [Next Confluent Kafka assets](../confluent-kafka-assets/) 

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

