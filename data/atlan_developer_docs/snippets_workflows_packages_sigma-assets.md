# Source URL
https://developer.atlan.com/snippets/workflows/packages/sigma-assets/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/sigma-assets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to crawl Sigma assets and publish them to Atlan for discovery.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to crawl Sigma assets and publish them to Atlan for discovery.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/sigma-assets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Sigma assets package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/sigma-assets/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to crawl Sigma assets and publish them to Atlan for discovery.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/sigma-assets.png
meta-twitter:title: Sigma assets package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Sigma assets package - Developer
-->

[Skip to content](#sigma-assets-package) Developer Sigma assets package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Sigma assets package[¶](#sigma-assets-package "Permanent link")
===============================================================

The [Sigma assets package](https://ask.atlan.com/hc/en-us/articles/8731744918813-How-to-crawl-Sigma) crawls Sigma assets and publishes them to Atlan for discovery.

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this 
method it will create a new connection and new assets within that connection — which could
lead to duplicate assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow (see [Re\-run existing workflow](#re-run-existing-workflow) below).

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To crawl assets directly from Sigma:

Java

Python

Kotlin

Raw REST API

| Direct extraction from Sigma | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` Workflow crawler = SigmaCrawler.creator( // (1)       client, // (2)       "production", // (3)       List.of(client.getRoleCache().getIdForName("$admin")), // (4)       null,       null,       true, // (5)       true, // (6)       10000L // (7)     )     .direct( // (8)       "aws-api.sigmacomputing.com",     )     .apiToken(       "client-id", // (9)       "api-token" // (10)     )     .include( // (11)       List.of("995aecc2-fecf-497a-b169-5b3f96073618")     )     .exclude(List.of()) // (12)     .build()  // (13)     .toWorkflow();  // (14)  WorkflowResponse response = crawler.run(client);  // (15)  ``` |

1. The `SigmaCrawler` package will create a workflow to crawl assets from Sigma.
2. You must provide Atlan client.
3. You must provide a name for the connection that the Sigma assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify whether you want to allow queries to this connection (`true`, as in this example) or deny all query access to the connection (`false`).
6. You can specify whether you want to allow data previews on this connection (`true`, as in this example) or deny all sample data previews to the connection (`false`).
7. You can specify a maximum number of rows that can be accessed for any asset in the connection.
8. When crawling assets directly from Sigma, you are required to provide the following information:

    * hostname of the Sigma host, for example `aws-api.sigmacomputing.com`
9. You must provide client ID through which to access Sigma.
10. You must provide API token through which to access Sigma.
11. You can also optionally specify the list of workbooks to include in crawling. For Sigma assets, this should be specified as a list of workbook GUIDs. If set to null, all workbooks will be crawled.
12. You can also optionally specify the list of workbooks to exclude from crawling. For Sigma assets, this should be specified as a list of workbook GUIDs. If set to null, no workbooks will be excluded.
13. Build the minimal package object.
14. Now, you can convert the package into a `Workflow` object.
15. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Direct extraction from Sigma | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import SigmaCrawler  client = AtlanClient()  crawler = (     SigmaCrawler( # (1)         client=client, # (2)         connection_name="production", # (3)         admin_roles=[client.role_cache.get_id_for_name("$admin")], # (4)         admin_groups=None,         admin_users=None,         row_limit=10000, # (5)         allow_query=True, # (6)         allow_query_preview=True, # (7)     )     .direct(hostname=SigmaCrawler.Hostname.AWS) # (8)     .api_token(         client_id="client-id", # (9)         api_token="api-token" # (10)     )     .include(workbooks=["995aecc2-fecf-497a-b169-5b3f96073618"]) # (11)     .exclude(workbooks=[]) # (12)     .to_workflow()  # (13) )  response = client.workflow.run(crawler) # (14)  ``` |

1. Base configuration for a new Sigma crawler.
2. You must provide a client instance.
3. You must provide a name for the connection that the Sigma assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify a maximum number of rows that can be accessed for any asset in the connection.
6. You can specify whether you want to allow queries to this connection
(`True`, as in this example) or deny all query access to the connection (`False`).
7. You can specify whether you want to allow data previews on this connection
(`True`, as in this example) or deny all sample data previews to the connection (`False`).
8. When crawling assets directly from Sigma,
you are required to provide the following information:

    * hostname of the Sigma host, for example `aws-api.sigmacomputing.com`
9. You must provide client ID through which to access Sigma.
10. You must provide API token through which to access Sigma.
11. You can also optionally specify the list of workbooks to include in crawling.
For Sigma assets, this should be specified as a list of workbook GUIDs.
If set to None, all workbooks will be crawled.
12. You can also optionally specify the list of workbooks to exclude from crawling.
For Sigma assets, this should be specified as a list of workbook GUIDs.
If set to None, no workbooks will be excluded.
13. Now, you can convert the package into a `Workflow` object.
14. Run the workflow by invoking the `run()` method on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Direct extraction from Sigma | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` val crawler = SigmaCrawler.creator( // (1)       client, // (2)       "production", // (3)       listOf(client.roleCache.getIdForName("\$admin")), // (4)       null,       null,       true, // (5)       true, // (6)       10000L // (7)     )     .direct( // (8)       "aws-api.sigmacomputing.com",     )     .apiToken(       "client-id", // (9)       "api-token" // (10)     )     .include( // (11)       listOf("995aecc2-fecf-497a-b169-5b3f96073618")     )     .exclude(emptyList()) // (12)     .build()  // (13)     .toWorkflow()  // (14)  val response = crawler.run(client)  // (15)  ``` |

1. The `SigmaCrawler` package will create a workflow to crawl assets from Sigma.
2. You must provide Atlan client.
3. You must provide a name for the connection that the Sigma assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify whether you want to allow queries to this connection (`true`, as in this example) or deny all query access to the connection (`false`).
6. You can specify whether you want to allow data previews on this connection (`true`, as in this example) or deny all sample data previews to the connection (`false`).
7. You can specify a maximum number of rows that can be accessed for any asset in the connection.
8. When crawling assets directly from Sigma, you are required to provide the following information:

    * hostname of the Sigma host, for example `aws-api.sigmacomputing.com`
9. You must provide client ID through which to access Sigma.
10. You must provide API token through which to access Sigma.
11. You can also optionally specify the list of workbooks to include in crawling. For Sigma assets, this should be specified as a list of workbook GUIDs. If set to null, all workbooks will be crawled.
12. You can also optionally specify the list of workbooks to exclude from crawling. For Sigma assets, this should be specified as a list of workbook GUIDs. If set to null, no workbooks will be excluded.
13. Build the minimal package object.
14. Now, you can convert the package into a `Workflow` object.
15. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
========================================================================

[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for Sigma assets:

Java

Python

Kotlin

Raw REST API

| Re\-run existing Sigma workflow | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, SigmaCrawler.PREFIX, 5); // (2)  // Determine which of the results is the // Sigma workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `SigmaCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Sigma workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.Sigma, max_results=5 )  # Determine which Sigma workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `SigmaCrawler`. (You can also specify
the **maximum number of resulting workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Sigma workflow | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val existing = WorkflowSearchRequest // (1)     .findByType(client, SigmaCrawler.PREFIX, 5) // (2)  // Determine which of the results is the // Sigma workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `SigmaCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-sigma" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-sigma` prefix will ensure you only find existing Sigma assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-sigma-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2023\-12\-292025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/sigma-assets/) to provide us with more information. 

Back to top

[Previous Snowflake miner](../snowflake-miner/) [Next SQL Server assets](../sql-server-assets/) 

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

