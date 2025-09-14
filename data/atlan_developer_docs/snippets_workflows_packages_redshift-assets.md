# Source URL
https://developer.atlan.com/snippets/workflows/packages/redshift-assets/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/redshift-assets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to crawl Amazon Redshift assets and publish them to Atlan for discovery.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to crawl Amazon Redshift assets and publish them to Atlan for discovery.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/redshift-assets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Redshift assets package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/redshift-assets/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to crawl Amazon Redshift assets and publish them to Atlan for discovery.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/redshift-assets.png
meta-twitter:title: Redshift assets package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Redshift assets package - Developer
-->

[Skip to content](#redshift-assets-package) Developer Redshift assets package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Redshift assets package[¶](#redshift-assets-package "Permanent link")
=====================================================================

The [Redshift assets package](https://ask.atlan.com/hc/en-us/articles/6326396122641) crawls Amazon Redshift assets and publishes them to Atlan for discovery.

Basic authentication[¶](#basic-authentication "Permanent link")
---------------------------------------------------------------

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this method it will create a new connection and new assets within that connection — which could lead to duplicate assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow (see [Re\-run existing workflow](#re-run-existing-workflow) below).

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To crawl assets from Redshift using basic authentication:

Java

Python

Kotlin

Raw REST API

| Basic authentication crawling of Redshift | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` Workflow redshift = RedshiftCrawler.basicAuth( // (1)         "production", // (2)         "abc123.kXufh3dOH2lg.ap-south-1.redshift.amazonaws.com", // (3)         5439, // (4)         "atlan_user", // (5)         "pU9ygRpgiAy2Iph3gQn5", // (6)         "dev", // (7)         List.of(client.getRoleCache().getIdForName("$admin")), // (8)         null,         null,         true, // (9)         true, // (10)         10000L, // (11)         Map.of("dev", List.of("public")), // (12)         null); // (13) WorkflowResponse response = redshift.run(client); // (14)  ``` |

1. The `RedshiftCrawler` package will create a workflow to crawl assets from Amazon Redshift. The `basicAuth()` method creates a workflow for crawling assets directly from Redshift using basic authentication.
2. You must provide a name for the connection that the Redshift assets will exist within.
3. You must provide the hostname of your Redshift instance.
4. You must specify the port number of the Redshift instance (use `5439` for the default).
5. You must provide your Redshift username.
6. You must provide your Redshift password.
7. You must specify the name of the Redshift database you want to crawl.
8. You must specify at least one connection admin, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins
        * a list of users (names) that will be connection admins
9. You can specify whether you want to allow queries to this connection (`true`, as in this example) or deny all query access to the connection (`false`).
10. You can specify whether you want to allow data previews on this connection (`true`, as in this example) or deny all sample data previews to the connection (`false`).
11. You can specify a maximum number of rows that can be accessed for any asset in the connection.
12. You can also optionally specify the set of assets to include in crawling. For Redshift assets, this should be specified as a map keyed by database name with values as a list of schemas within that database to crawl. (If set to null, all databases and schemas will be crawled.)
13. You can also optionally specify the list of assets to exclude from crawling. For Redshift assets, this should be specified as a map keyed by database name with values as a list of schemas within the database to exclude. (If set to null, no assets will be excluded.)
14. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Coming soon

| Basic authentication crawling of Redshift | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` val redshift = RedshiftCrawler.basicAuth( // (1)         "production", // (2)         "abc123.kXufh3dOH2lg.ap-south-1.redshift.amazonaws.com", // (3)         5439, // (4)         "atlan_user", // (5)         "pU9ygRpgiAy2Iph3gQn5", // (6)         "dev", // (7)         listOf(client.roleCache.getIdForName("\$admin")), // (8)         null,         null,         true, // (9)         true, // (10)         10000L, // (11)         mapOf("dev" to listOf("public")), // (12)         null) // (13) val response = redshift.run(client) // (14)  ``` |

1. The `RedshiftCrawler` package will create a workflow to crawl assets from Amazon Redshift. The `basicAuth()` method creates a workflow for crawling assets directly from Redshift using basic authentication.
2. You must provide a name for the connection that the Redshift assets will exist within.
3. You must provide the hostname of your Redshift instance.
4. You must specify the port number of the Redshift instance (use `5439` for the default).
5. You must provide your Redshift username.
6. You must provide your Redshift password.
7. You must specify the name of the Redshift database you want to crawl.
8. You must specify at least one connection admin, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins
        * a list of users (names) that will be connection admins
9. You can specify whether you want to allow queries to this connection (`true`, as in this example) or deny all query access to the connection (`false`).
10. You can specify whether you want to allow data previews on this connection (`true`, as in this example) or deny all sample data previews to the connection (`false`).
11. You can specify a maximum number of rows that can be accessed for any asset in the connection.
12. You can also optionally specify the set of assets to include in crawling. For Redshift assets, this should be specified as a map keyed by database name with values as a list of schemas within that database to crawl. (If set to null, all databases and schemas will be crawled.)
13. You can also optionally specify the list of assets to exclude from crawling. For Redshift assets, this should be specified as a map keyed by database name with values as a list of schemas within the database to exclude. (If set to null, no assets will be excluded.)
14. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for Redshift assets:

Java

Python

Kotlin

Raw REST API

| Re\-run existing Redshift workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, RedshiftCrawler.PREFIX, 5); // (2) // Determine which of the results is the Redshift workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `RedshiftCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Coming soon

| Re\-run existing Redshift workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val existing = WorkflowSearchRequest // (1)     .findByType(client, RedshiftCrawler.PREFIX, 5) // (2) // Determine which of the results is the Redshift workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `RedshiftCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-redshift" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-redshift` prefix will ensure you only find existing Redshift assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object. (Remember since this is a search, there could be multiple results, so you may want to use the other details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-redshift-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2022\-12\-282025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/redshift-assets/) to provide us with more information. 

Back to top

[Previous PowerBI assets](../powerbi-assets/) [Next Relational assets builder](../relational-assets-builder/) 

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

