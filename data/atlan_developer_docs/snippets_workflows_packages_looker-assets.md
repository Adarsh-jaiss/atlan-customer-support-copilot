# Source URL
https://developer.atlan.com/snippets/workflows/packages/looker-assets/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/looker-assets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to crawl Looker assets and publish them to Atlan for discovery.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to crawl Looker assets and publish them to Atlan for discovery.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/looker-assets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Looker assets package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/looker-assets/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to crawl Looker assets and publish them to Atlan for discovery.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/looker-assets.png
meta-twitter:title: Looker assets package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Looker assets package - Developer
-->

[Skip to content](#looker-assets-package) Developer Looker assets package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Looker assets package[¶](#looker-assets-package "Permanent link")
=================================================================

The [Looker assets package](https://ask.atlan.com/hc/en-us/articles/6330214610193) crawls Looker assets and publishes them to Atlan for discovery.

Direct extraction[¶](#direct-extraction "Permanent link")
---------------------------------------------------------

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this method it will create a new connection and new assets within that connection — which could lead to duplicate assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow (see [Re\-run existing workflow](#re-run-existing-workflow) below).

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To crawl Looker assets directly from Looker:

Java

Python

Kotlin

Raw REST API

| Direct extraction from Looker | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` Workflow looker = LookerCrawler.directResourceOwner( // (1)         "production", // (2)         "https://example.cloud.looker.com", // (3)         443, // (4)         "pEBDcOauyVfCtQacdvJUL", // (5)         "eKnUIFK2JvmVO5mruqbxjnzXf", // (6)         "-----BEGIN OPENSSH PRIVATE KEY-----\n-99+PmSlex0FmY9ov1J8H1H9Y3IMWXbL...\n-----END OPENSSH PRIVATE KEY-----", // (7)         "b3WnMIjaZJaTYZd", // (8)         List.of(client.getRoleCache().getIdForName("$admin")), // (9)         null,         null,         List.of("67"), // (10)         List.of("dbt_food_beverage"), // (11)         null, // (12)         null); // (13) WorkflowResponse response = looker.run(client); // (14)  ``` |

1. The `LookerCrawler` package will create a workflow to crawl assets from Looker. The `directResourceOwner()` method creates a workflow for crawling assets directly from Looker.
2. You must provide a name for the connection that the Looker assets will exist within.
3. You must provide the hostname of your Looker instance.
4. You must specify the port number of the Looker instance (use `443` for the default).
5. You must provide your admin client ID.
6. You must provide your admin client secret.
7. If you want to crawl field\-level lineage, you must provide your SSH private key.
8. If you want to crawl field\-level lineage, you must provide the passphrase for your SSH private key (if any).
9. You must specify at least one connection admin, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins
        * a list of users (names) that will be connection admins
10. You can also optionally specify the list of folders to include in crawling. For Looker assets, this should be specified as a list of numeric folder IDs. (If set to null, all folders will be crawled.)
11. You can also optionally specify the list of projects to include in crawling. For Looker assets, this should be specified as a list of project names. (If set to null, all projects will be crawled.)
12. You can also optionally specify the list of folders to exclude from crawling. For Looker assets, this should be specified as a list of numeric folder IDs. (If set to null, no folders will be excluded.)
13. You can also optionally specify the list of projects to exclude from crawling. For Looker assets, this should be specified as a list of project names. (If set to null, no projects will be excluded.)
14. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Coming soon

| Direct extraction from Looker | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` val looker = LookerCrawler.directResourceOwner( // (1)         "production", // (2)         "https://example.cloud.looker.com", // (3)         443, // (4)         "pEBDcOauyVfCtQacdvJUL", // (5)         "eKnUIFK2JvmVO5mruqbxjnzXf", // (6)         "-----BEGIN OPENSSH PRIVATE KEY-----\n-99+PmSlex0FmY9ov1J8H1H9Y3IMWXbL...\n-----END OPENSSH PRIVATE KEY-----", // (7)         "b3WnMIjaZJaTYZd", // (8)         listOf(client.roleCache.getIdForName("\$admin")), // (9)         null,         null,         List.of("67"), // (10)         List.of("dbt_food_beverage"), // (11)         null, // (12)         null) // (13) val response = looker.run(client) // (14)  ``` |

1. The `LookerCrawler` package will create a workflow to crawl assets from Looker. The `directResourceOwner()` method creates a workflow for crawling assets directly from Looker.
2. You must provide a name for the connection that the Looker assets will exist within.
3. You must provide the hostname of your Looker instance.
4. You must specify the port number of the Looker instance (use `443` for the default).
5. You must provide your admin client ID.
6. You must provide your admin client secret.
7. If you want to crawl field\-level lineage, you must provide your SSH private key.
8. If you want to crawl field\-level lineage, you must provide the passphrase for your SSH private key (if any).
9. You must specify at least one connection admin, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins
        * a list of users (names) that will be connection admins
10. You can also optionally specify the list of folders to include in crawling. For Looker assets, this should be specified as a list of numeric folder IDs. (If set to null, all folders will be crawled.)
11. You can also optionally specify the list of projects to include in crawling. For Looker assets, this should be specified as a list of project names. (If set to null, all projects will be crawled.)
12. You can also optionally specify the list of folders to exclude from crawling. For Looker assets, this should be specified as a list of numeric folder IDs. (If set to null, no folders will be excluded.)
13. You can also optionally specify the list of projects to exclude from crawling. For Looker assets, this should be specified as a list of project names. (If set to null, no projects will be excluded.)
14. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for Looker assets:

Java

Python

Kotlin

Raw REST API

| Re\-run existing Looker workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, LookerCrawler.PREFIX, 5); // (2) // Determine which of the results is the Looker workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `LookerCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Coming soon

| Re\-run existing Looker workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val existing = WorkflowSearchRequest // (1)     .findByType(client, LookerCrawler.PREFIX, 5) // (2) // Determine which of the results is the Looker workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `LookerCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-looker" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-looker` prefix will ensure you only find existing Looker assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object. (Remember since this is a search, there could be multiple results, so you may want to use the other details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-looker-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2022\-12\-282025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/looker-assets/) to provide us with more information. 

Back to top

[Previous Glue assets](../glue-assets/) [Next Lineage builder](../lineage-builder/) 

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

