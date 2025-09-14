# Source URL
https://developer.atlan.com/snippets/workflows/packages/fivetran-enrichment/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/fivetran-enrichment/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Enrich existing assets in Atlan associated with Fivetran connectors with column-level lineage.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Enrich existing assets in Atlan associated with Fivetran connectors with column-level lineage.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/fivetran-enrichment.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Fivetran enrichment package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/fivetran-enrichment/
meta-twitter:card: summary_large_image
meta-twitter:description: Enrich existing assets in Atlan associated with Fivetran connectors with column-level lineage.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/fivetran-enrichment.png
meta-twitter:title: Fivetran enrichment package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Fivetran enrichment package - Developer
-->

[Skip to content](#fivetran-enrichment-package) Developer Fivetran enrichment package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Fivetran enrichment package[¶](#fivetran-enrichment-package "Permanent link")
=============================================================================

The [Fivetran enrichment package](https://ask.atlan.com/hc/en-us/articles/8427123490065) enriches existing assets in Atlan associated with Fivetran connectors with column\-level lineage.

Requires access to Fivetran's metadata API

Direct API[¶](#direct-api "Permanent link")
-------------------------------------------

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this method it will create a new connection and new assets within that connection — which could lead to duplicate assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow (see [Re\-run existing workflow](#re-run-existing-workflow) below).

[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

To enrich assets from Fivetran via API:

Java

Python

Kotlin

Raw REST API

| Fivetran enrichment via API | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Workflow fivetran = FivetranCrawler.directApiAuth( // (1)     "production", // (2)     "E77yqOsBPrRXpVp0", // (3)     "XLQR73AKwGYmjzk5vlBMAUG4wo13VyY"); // (4) WorkflowResponse response = fivetran.run(client); // (5)  ``` |

1. The `FivetranCrawler` package will create a workflow to enrich assets from Fivetran. The `directApiAuth()` method creates a workflow for crawling assets from Fivetran's API.
2. You must provide a name for the connection for Fivetran enrichment. (Though this is currently unused since the workflow only enriches existing assets, and does not create any new assets.)
3. You must provide your API key for access to Fivetran's metadata API.
4. You must specify your API secret for access to Fivetran's metadata API.
5. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Coming soon

| Fivetran enrichment via API | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val fivetran = FivetranCrawler.directApiAuth( // (1)     "production", // (2)     "E77yqOsBPrRXpVp0", // (3)     "XLQR73AKwGYmjzk5vlBMAUG4wo13VyY") // (4) val response = fivetran.run(client) // (5)  ``` |

1. The `FivetranCrawler` package will create a workflow to enrich assets from Fivetran. The `directApiAuth()` method creates a workflow for crawling assets from Fivetran's API.
2. You must provide a name for the connection for Fivetran enrichment. (Though this is currently unused since the workflow only enriches existing assets, and does not create any new assets.)
3. You must provide your API key for access to Fivetran's metadata API.
4. You must specify your API secret for access to Fivetran's metadata API.
5. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for Fivetran assets:

Java

Python

Kotlin

Raw REST API

| Re\-run existing Fivetran workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, FivetranCrawler.PREFIX, 5); // (2) // Determine which of the results is the Fivetran workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `FivetranCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Coming soon

| Re\-run existing Fivetran workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val existing = WorkflowSearchRequest // (1)     .findByType(client, FivetranCrawler.PREFIX, 5) // (2) // Determine which of the results is the Fivetran workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `FivetranCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-fivetran" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-fivetran` prefix will ensure you only find existing Fivetran assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object. (Remember since this is a search, there could be multiple results, so you may want to use the other details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-fivetran-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2022\-12\-282025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/fivetran-enrichment/) to provide us with more information. 

Back to top

[Previous Databricks miner](../databricks-miner/) [Next Glue assets](../glue-assets/) 

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

