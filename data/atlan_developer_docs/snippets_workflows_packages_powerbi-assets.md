# Source URL
https://developer.atlan.com/snippets/workflows/packages/powerbi-assets/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/powerbi-assets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to crawl Microsoft Power BI assets and publish them to Atlan for discovery.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to crawl Microsoft Power BI assets and publish them to Atlan for discovery.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/powerbi-assets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Power BI assets package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/powerbi-assets/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to crawl Microsoft Power BI assets and publish them to Atlan for discovery.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/powerbi-assets.png
meta-twitter:title: Power BI assets package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Power BI assets package - Developer
-->

[Skip to content](#power-bi-assets-package) Developer Power BI assets package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Power BI assets package[¶](#power-bi-assets-package "Permanent link")
=====================================================================

The [Power BI assets package](https://ask.atlan.com/hc/en-us/articles/6332245668881) crawls Microsoft Power BI assets and publishes them to Atlan for discovery.

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this method
it will create a new connection and new assets within that connection — which could lead to duplicate
assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow
(see [Re\-run existing workflow](#re-run-existing-workflow) below).

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To crawl assets from Microsoft Power BI using the delegated user authentication:

Java

Python

Kotlin

Raw REST API

| Power BI assets crawling using delegated user auth | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` Workflow crawler = PowerBICrawler.creator( // (1)       client, // (2)       "production", // (3)       List.of(client.getRoleCache().getIdForName("$admin")), // (4)       null,       null     )     .direct() // (5)     .delegatedUser( // (6) (7)       "username",       "password",       "tenant-id-here",       "client-id-here",       "client-secret-here"     )     .directEndorsements(true)  // (8)     .include( // (9)       List.of("fc2923bd-cf94-2b29-9cdd-9cc2f7a4f029")     )     .exclude(List.of()) // (10)     .build()  // (11)     .toWorkflow();  // (12) WorkflowResponse response = crawler.run(client);  // (13)  ``` |

1. The `PowerBICrawler` package will create a workflow to crawl assets from Power BI.
2. You must provide Atlan client.
3. You must provide a name for the connection that the Snowflake assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. Set up the crawler to extract directly from Power BI.
6. When using `delegatedUser()` authentication, you are required to provide the following information:

    * username for accessing Power BI.
        * password for accessing Power BI.
        * unique ID (GUID) of the Power BI tenant.
        * unique ID (GUID) of the Power BI client.
        * client secret for accessing Power BI.
7. When utilizing `servicePrincipal()` authentication, you must provide the following information:

    * unique ID (GUID) of the Power BI tenant.
        * unique ID (GUID) of the Power BI client.
        * client secret for accessing Power BI.
8. You can also optionally set whether to directly attach endorsements as certificates (`true`), or instead raise these as requests (`false`).
9. You can also optionally specify the list of workspaces to include in crawling. For Power BI assets, this should be specified as a list of workspaces GUIDs. (If set to null, all workspaces will be crawled.)
10. You can also optionally specify the list of workspaces to exclude from crawling. For Power BI assets, this should be specified as a list of workspaces GUIDs.
(If set to null, no workspaces will be excluded.)
11. Build the minimal package object.
12. Now, you can convert the package into a `Workflow` object.
13. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Power BI assets crawling using delegated user auth | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import PowerBICrawler  client = AtlanClient()  crawler = (     PowerBICrawler( # (1)         client=client,  # (2)         connection_name="production", # (3)         admin_roles=[client.role_cache.get_id_for_name("$admin")], # (4)         admin_groups=None,         admin_users=None,     )     .direct() # (5)     .delegated_user( # (6) # (7)         username="user",         password="pass",         tenant_id="tenant-id-here",         client_id="client-id-here",         client_secret="client-secret-here"     )     .direct_endorsements(True) # (8)     .include(workspaces=["9622cbfb-9b0e-412c-9fcf-2ac1bbc1ad9e"]) # (9)     .exclude(workspaces=[]) # (10)     .to_workflow() # (11) ) response = client.workflow.run(crawler) # (12)  ``` |

1. Base configuration for a new Power BI crawler.
2. You must provide a client instance.
3. You must provide a name for the connection that the Power BI assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. Set up the crawler to extract directly from Power BI.
6. When using `delegated_user()` authentication,
you are required to provide the following information:

    * username for accessing Power BI.
        * password for accessing Power BI.
        * unique ID (GUID) of the Power BI tenant.
        * unique ID (GUID) of the Power BI client.
        * client secret for accessing Power BI.
7. When utilizing `service_principal()` authentication,
you must provide the following information:

    * unique ID (GUID) of the Power BI tenant.
        * unique ID (GUID) of the Power BI client.
        * client secret for accessing Power BI.
8. You can also optionally set whether to directly attach endorsements
as certificates (`True`), or instead raise these as requests (`False`).
9. You can also optionally specify the list of workspaces to include in crawling.
For Power BI assets, this should be specified as a list of workspaces GUIDs.
(If set to None, all workspaces will be crawled.)
10. You can also optionally specify the list of workspaces to exclude from crawling.
For Power BI assets, this should be specified as a list of workspaces GUIDs.
(If set to None, no workspaces will be excluded.)
11. Now, you can convert the package into a `Workflow` object.
12. Run the workflow by invoking the `run()` method on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Power BI assets crawling using delegated user auth | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` val crawler = PowerBICrawler.creator( // (1)         client, // (2)         "production", // (3)         listOf(client.roleCache.getIdForName("\$admin")), // (4)         null,         null     )     .direct() // (5)     .delegatedUser( // (6) (7)         "username",         "password",         "tenant-id-here",         "client-id-here",         "client-secret-here"     )     .directEndorsements(true)  // (8)     .include( // (9)         listOf("fc2923bd-cf94-2b29-9cdd-9cc2f7a4f029")     )     .exclude(emptyList()) // (10)     .build()  // (11)     .toWorkflow()  // (12) val response = crawler.run(client)  // (13)  ``` |

1. The `PowerBICrawler` package will create a workflow to crawl assets from Power BI.
2. You must provide Atlan client.
3. You must provide a name for the connection that the Snowflake assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. Set up the crawler to extract directly from Power BI.
6. When using `delegatedUser()` authentication, you are required to provide the following information:

    * username for accessing Power BI.
        * password for accessing Power BI.
        * unique ID (GUID) of the Power BI tenant.
        * unique ID (GUID) of the Power BI client.
        * client secret for accessing Power BI.
7. When utilizing `servicePrincipal()` authentication, you must provide the following information:

    * unique ID (GUID) of the Power BI tenant.
        * unique ID (GUID) of the Power BI client.
        * client secret for accessing Power BI.
8. You can also optionally set whether to directly attach endorsements as certificates (`true`), or instead raise these as requests (`false`).
9. You can also optionally specify the list of workspaces to include in crawling. For Power BI assets, this should be specified as a list of workspaces GUIDs. (If set to null, all workspaces will be crawled.)
10. You can also optionally specify the list of workspaces to exclude from crawling. For Power BI assets, this should be specified as a list of workspaces GUIDs. (If set to null, no workspaces will be excluded.)
11. Build the minimal package object.
12. Now, you can convert the package into a `Workflow` object.
13. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for Power BI assets:

Java

Python

Kotlin

Raw REST API

| Re\-run existing Power BI workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, PowerBICrawler.PREFIX, 5); // (2) // Determine which of the results is the Power BI workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `PowerBICrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Power BI workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.POWERBI, max_results=5 )  # Determine which Power BI workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `PowerBICrawler`. (You can also specify
the **maximum number of resulting workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Power BI workflow | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val existing = WorkflowSearchRequest // (1)     .findByType(client, PowerBICrawler.PREFIX, 5) // (2) // Determine which of the results is the // Power BI workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `PowerBICrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-powerbi" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-powerbi` prefix will ensure you only find existing Power BI assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-powerbi-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2023\-12\-292025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/powerbi-assets/) to provide us with more information. 

Back to top

[Previous Postgres assets](../postgres-assets/) [Next Redshift assets](../redshift-assets/) 

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

