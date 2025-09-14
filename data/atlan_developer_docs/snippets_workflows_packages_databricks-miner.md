# Source URL
https://developer.atlan.com/snippets/workflows/packages/databricks-miner/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/databricks-miner/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to extract lineage and usage from databricks to Atlan for discovery.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to extract lineage and usage from databricks to Atlan for discovery.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/databricks-miner.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Databricks miner package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/databricks-miner/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to extract lineage and usage from databricks to Atlan for discovery.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/databricks-miner.png
meta-twitter:title: Databricks miner package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Databricks miner package - Developer
-->

[Skip to content](#databricks-miner-package) Developer Databricks miner package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Databricks miner package[¶](#databricks-miner-package "Permanent link")
=======================================================================

The [Databricks miner package](https://ask.atlan.com/hc/en-us/articles/7034583224081) extract lineage and usage from databricks to Atlan for discovery.

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this method
it will create a new connection and new assets within that connection — which could lead to duplicate
assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow
(see [Re\-run existing workflow](#re-run-existing-workflow) below).

[6\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.0.0 "Minimum version")

To extract lineage and usage from databricks to Atlan for discovery.

Java

Python

Kotlin

Raw REST API

Coming soon

| Extract lineage and usage from databricks | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import DatabricksMiner  client = AtlanClient()  crawler = (     DatabricksMiner( # (1)         connection_qualified_name="default/databricks/1234567890"         # (2)     )     .rest_api() # (3)     .popularity_configuration( # (4)         start_date="1234567890",         extraction_method=DatabricksMiner.ExtractionMethod.SYSTEM_TABLE,         window_days=30,         excluded_users=["test-user-1", "test-user-2"],         warehouse_id="test-warehouse-id",     )     .to_workflow() # (5) ) response = client.workflow.run(crawler) # (6)  ``` |

1. Base configuration for a new Databricks miner.
2. You must provide the exact `qualified_name` of the Databricks
connection in Atlan for which you want to mine query history.
3. You can sets up the Databricks miner to use the REST API method for fetching lineage.

    You can also utilize any of the following methods for fetching lineage:

    * `offline()`

    + **bucket\_name:** name of the S3 bucket to extract data from.
            + **bucket\_prefix:** prefix within the S3 bucket to narrow the extraction scope.
        * `system_table()`

    + **warehouse\_id:** unique identifier of the SQL warehouse to be used for system table extraction.
4. Optionally, you can define `popularity_configuration()`:

    * epoch timestamp from which queries will be fetched
        for calculating popularity. This does not affect lineage generation.
        * method used to fetch popularity data. Defaults to `ExtractionMethod.REST_API`.
        * (Optional) number of days to consider for calculating popularity metrics.
        * (Optional) list of usernames to exclude from usage metrics calculations.
        * (Optional) unique identifier of the SQL warehouse to use for popularity calculations.
         Required if `extraction_method` is `ExtractionMethod.SYSTEM_TABLE`.
5. Now, you can convert the package into a `Workflow` object.
6. Run the workflow by invoking the `run()` method on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously.
        See the [packages and workflows introduction](../) for details on how you can check the status
        and wait until the workflow has been completed.

Coming soon

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[1\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.1.0 "Minimum version")

To re\-run an existing workflow for databricks assets:

Java

Python

Kotlin

Raw REST API

Coming soon

| Re\-run existing databricks miner workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.DATABRICKS_LINEAGE, max_results=5 )  # Determine which Databricks workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `DatabricksMiner`. (You can also specify
the **maximum number of resulting workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Coming soon

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-databricks-lineage" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-databricks-lineage` prefix will ensure you only find existing Databricks assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-databricks-lineage-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2025\-01\-132025\-04\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/databricks-miner/) to provide us with more information. 

Back to top

[Previous Databricks assets](../databricks-assets/) [Next Fivetran enrichment](../fivetran-enrichment/) 

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

