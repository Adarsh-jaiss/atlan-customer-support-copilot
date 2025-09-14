# Source URL
https://developer.atlan.com/snippets/workflows/packages/glue-assets/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/glue-assets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to crawl AWS glue assets and publish them to Atlan for discovery.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to crawl AWS glue assets and publish them to Atlan for discovery.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/glue-assets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Glue assets package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/glue-assets/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to crawl AWS glue assets and publish them to Atlan for discovery.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/glue-assets.png
meta-twitter:title: Glue assets package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Glue assets package - Developer
-->

[Skip to content](#glue-assets-package) Developer Glue assets package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Glue assets package[¶](#glue-assets-package "Permanent link")
=============================================================

The [Glue assets package](https://ask.atlan.com/hc/en-us/articles/6335637665681) crawls AWS glue assets and publishes them to Atlan for discovery.

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this 
method it will create a new connection and new assets within that connection — which could
lead to duplicate assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow (see [Re\-run existing workflow](#re-run-existing-workflow) below).

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To crawl assets from AWS glue using the IAM user authentication:

Java

Python

Kotlin

Raw REST API

| Glue assets crawling using IAM user auth | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` Workflow crawler = GlueCrawler.creator( // (1)       client, // (2)       "production", // (3)       List.of(client.getRoleCache().getIdForName("$admin")), // (4)       null,       null,       false, // (5)       false, // (6)       0L // (7)     )     .iamUserAuth( // (8)       "your-access-key",       "your-secret-key"     )     .direct("ap-south-1") // (9)     .include( // (10)       List.of("dev-project")     )     .exclude(List.of()) // (11)     .build()  // (12)     .toWorkflow();  // (13) WorkflowResponse response = crawler.run(client);  // (14)  ``` |

1. The `GlueCrawler` package will create a workflow to crawl assets from AWS Glue.
2. You must provide Atlan client.
3. You must provide a name for the connection that the AWS Glue assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify whether you want to allow queries to this connection (`true`) or deny all query access to the connection (`false`).
6. You can specify whether you want to allow data previews on this connection (`true`) or deny all sample data previews to the connection (`false`).
7. You can specify a maximum number of rows that can be accessed for any asset in the connection.
8. When using `iamUserAuth()`, you need to provide the following information:

    * access key for accessing AWS Glue.
        * secret key for accessing AWS Glue.
9. You must provide AWS region where Glue is set up.
10. You can also optionally specify the list of schema names to include in crawling. (If set to null, all schemas will be crawled.)
11. You can also optionally specify the list of schema names to exclude from crawling. (If set to null, no schemas will be excluded.)
12. Build the minimal package object.
13. Now, you can convert the package into a `Workflow` object.
14. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Glue assets crawling using IAM user auth | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import GlueCrawler  client = AtlanClient()  crawler = (     GlueCrawler( # (1)         client=client,  # (2)         connection_name="production", # (3)         admin_roles=[client.role_cache.get_id_for_name("$admin")], # (4)         admin_groups=None,         admin_users=None,         row_limit=0, # (5)         allow_query=False, # (6)         allow_query_preview=False, # (7)     )     .iam_user_auth( # (8)         access_key="your-access-key",         secret_key="your-secret-key",     )     .direct(region="ap-south-1") # (9)     .include(assets=['dev-project']) # (10)     .exclude(assets=[]) # (11)     .to_workflow() # (12) ) response = client.workflow.run(crawler) # (13)  ``` |

1. Base configuration for a new AWS Glue crawler.
2. You must provide a client instance.
3. You must provide a name for the connection that the AWS Glue assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify a maximum number of rows that can be accessed for any asset in the connection.
6. You can specify whether you want to allow queries to this connection
(`True`) or deny all query access to the connection (`False`).
7. You can specify whether you want to allow data previews on this connection
(`True`) or deny all sample data previews to the connection (`False`).
8. When using `iam_user_auth()`, you need to provide the following information:

    * access key for accessing AWS Glue.
        * secret key for accessing AWS Glue.
9. You must provide AWS region where Glue is set up.
10. You can also optionally specify the list of schema names to include in crawling.
(If set to None, all schemas will be crawled.)
11. You can also optionally specify the list of schema names to exclude from crawling.
(If set to None, no schemas will be excluded.)
12. Now, you can convert the package into a `Workflow` object.
13. Run the workflow by invoking the `run()` method on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Glue assets crawling using IAM user auth | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` val crawler = GlueCrawler.creator( // (1)         client, // (2)         "production", // (3)         listOf(client.getRoleCache().getIdForName("\$admin")), // (4)         null,         null,         false, // (5)         false, // (6)         0L // (7)     )     .iamUserAuth( // (8)         "your-access-key",         "your-secret-key"     )     .direct("ap-south-1") // (9)     .include( // (10)         listOf("dev-project")     )     .exclude(emptyList()) // (11)     .build()  // (12)     .toWorkflow()  // (13) val response = crawler.run(client)  // (14)  ``` |

1. The `GlueCrawler` package will create a workflow to crawl assets from AWS Glue.
2. You must provide Atlan client.
3. You must provide a name for the connection that the AWS Glue assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify whether you want to allow queries to this connection (`true`) or deny all query access to the connection (`false`).
6. You can specify whether you want to allow data previews on this connection (`true`) or deny all sample data previews to the connection (`false`).
7. You can specify a maximum number of rows that can be accessed for any asset in the connection.
8. When using `iamUserAuth()`, you need to provide the following information:

    * access key for accessing AWS Glue.
        * secret key for accessing AWS Glue.
9. You must provide AWS region where Glue is set up.
10. You can also optionally specify the list of schema names to include in crawling. (If set to null, all schemas will be crawled.)
11. You can also optionally specify the list of schema names to exclude from crawling. (If set to null, no schemas will be excluded.)
12. Build the minimal package object.
13. Now, you can convert the package into a `Workflow` object.
14. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for Glue assets:

Java

Python

Kotlin

Raw REST API

| Re\-run existing Glue workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, GlueCrawler.PREFIX, 5); // (2) // Determine which of the results is the Glue workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `GlueCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Glue workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.GLUE, max_results=5 )  # Determine which Glue workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `GlueCrawler`. (You can also specify
the **maximum number of resulting workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Glue workflow | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val existing = WorkflowSearchRequest // (1)     .findByType(client, GlueCrawler.PREFIX, 5) // (2) // Determine which of the results is the // Glue workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `GlueCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-glue" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-glue` prefix will ensure you only find existing Glue assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-glue-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2023\-12\-292025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/glue-assets/) to provide us with more information. 

Back to top

[Previous Fivetran enrichment](../fivetran-enrichment/) [Next Looker assets](../looker-assets/) 

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

