# Source URL
https://developer.atlan.com/snippets/workflows/packages/dbt-assets/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/dbt-assets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to crawl dbt assets and publish them to Atlan for discovery.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to crawl dbt assets and publish them to Atlan for discovery.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/dbt-assets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: dbt assets package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/dbt-assets/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to crawl dbt assets and publish them to Atlan for discovery.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/dbt-assets.png
meta-twitter:title: dbt assets package - Developer
meta-viewport: width=device-width,initial-scale=1
title: dbt assets package - Developer
-->

[Skip to content](#dbt-assets-package) Developer dbt assets package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

dbt assets package[¶](#dbt-assets-package "Permanent link")
===========================================================

The [dbt assets package](https://ask.atlan.com/hc/en-us/articles/6335824578705) crawls dbt assets and publishes them to Atlan for discovery.

Cloud[¶](#cloud "Permanent link")
---------------------------------

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this method
it will create a new connection and new assets within that connection — which could lead to
duplicate assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow
(see [Re\-run existing workflow](#re-run-existing-workflow) below).

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a new crawl of dbt assets from a multi\-tenant dbt Cloud account:

Java

Python

Kotlin

Raw REST API

| dbt Cloud multi\-tenant | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` Workflow crawler = DbtCrawler.creator( // (1)       client, // (2)       "dbt-snowflake", // (3)       List.of(client.getRoleCache().getIdForName("$admin")), // (4)       null,       null     )     .cloud( // (5)       "https://cloud.getdbt.com",       "example-token",        true     )     .limitToConnection( // (6)       "default/snowflake/1234567890"     )     .include("{\"24670\":{\"211208\":{\"163013\":{\"207502\":{}}}}}") // (7)     .exclude("{\"24670\":{}}") // (8)     .tags(true) // (9)     .enrichMaterializedAssets(true) // (10)     .build()  // (11)     .toWorkflow();  // (12) WorkflowResponse response = crawler.run(client);  // (13)  ``` |

1. The `DbtCrawler` package will create a workflow to crawl assets from dbt cloud.
2. You must provide Atlan client.
3. You must provide a name for the connection that the dbt assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. To configure the crawler for extracting dbt assets directly from dbt cloud account then you must provide the following information:

    * hostname of your dbt cloud instance.
        * token to use to authenticate against dbt cloud instance.
        * whether to use a multi\-tenant cloud config (`true`), otherwise a single\-tenant cloud config (`false`).
6. You can also optionally specify the `qualifiedName` of a connection to a source (such as Snowflake), to limit the crawling of dbt assets to that existing connection in Atlan.
7. You can also optionally specify the list of assets to include in crawling. This is a highly\-nested map structure of numeric IDs for the account, project, etc. You will almost certainly need to set up the filter you want through the UI first, and look at the developer console of your browser to see the structure.
8. You can also optionally specify the list of assets to exclude from crawling. This follows the same structure as the inclusion filter.
9. You can also optionally specify whether to enable dbt tag syncing as part of crawling dbt.
10. You can also optionally set whether to enable the enrichment of materialized SQL assets as part of crawling dbt.
11. Build the minimal package object.
12. Now, you can convert the package into a `Workflow` object.
13. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| dbt Cloud multi\-tenant | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import DbtCrawler  client = AtlanClient()  crawler = (     DbtCrawler( # (1)         client=client,  # (2)         connection_name="dbt-snowflake", # (3)         admin_roles=[client.role_cache.get_id_for_name("$admin")], # (4)         admin_groups=None,         admin_users=None,     )     .cloud( # (5)         hostname="https://cloud.getdbt.com",         service_token="example-token",          multi_tenant=True,     )     .limit_to_connection( # (6)         connection_qualified_name="default/snowflake/1234567890"     )     .include(filter='{"24690":{"327645":{}}}') # (7)     .exclude(filter='') # (8)     .tags(True) # (9)     .enrich_materialized_assets(True) # (10)     .to_workflow() # (11) ) response = client.workflow.run(crawler) # (12)  ``` |

1. Base configuration for a new dbt crawler.
2. You must provide a client instance.
3. You must provide a name for the connection that the dbt assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. To configure the crawler for extracting dbt assets directly from
dbt cloud account then you must provide the following information:

    * hostname of your dbt cloud instance.
        * token to use to authenticate against dbt cloud instance.
        * whether to use a multi\-tenant cloud config (`True`), otherwise a single\-tenant cloud config (`False`).
6. You can also optionally specify the `qualifiedName` of a connection to a source (such as Snowflake),
to limit the crawling of dbt assets to that existing connection in Atlan.
7. You can also optionally specify the list of assets to include in crawling.
This is a highly\-nested map structure of numeric IDs for the account, project, etc.
You will almost certainly need to set up the filter you want through the UI first,
and look at the developer console of your browser to see the structure.
(If set to None, all assets will be crawled.)
8. You can also optionally specify the list of assets to exclude from crawling.
This follows the same structure as the inclusion filter.
(If set to None, no assets will be excluded.)
9. You can also optionally specify whether to
enable dbt tag syncing as part of crawling dbt.
10. You can also optionally set whether to enable
the enrichment of materialized SQL assets as part of crawling dbt.
11. Now, you can convert the package into a `Workflow` object.
12. Run the workflow by invoking the `run()` method on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| dbt Cloud multi\-tenant | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` val crawler = DbtCrawler.creator( // (1)         client, // (2)         "dbt-snowflake", // (3)         listOf(client.getRoleCache().getIdForName("\$admin")), // (4)         null,         null     )     .cloud( // (5)         "https://cloud.getdbt.com",         "example-token",          true     )     .limitToConnection( // (6)         "default/snowflake/1234567890"     )     .include("{\"24670\":{\"211208\":{\"163013\":{\"207502\":{}}}}}") // (7)     .exclude("{\"24670\":{}}") // (8)     .tags(true) // (9)     .enrichMaterializedAssets(true) // (10)     .build()  // (11)     .toWorkflow()  // (12) val response = crawler.run(client)  // (13)  ``` |

1. The `DbtCrawler` package will create a workflow to crawl assets from dbt cloud.
2. You must provide Atlan client.
3. You must provide a name for the connection that the dbt assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. To configure the crawler for extracting dbt assets directly from dbt cloud account then you must provide the following information:

    * hostname of your dbt cloud instance.
        * token to use to authenticate against dbt cloud instance.
        * whether to use a multi\-tenant cloud config (`true`), otherwise a single\-tenant cloud config (`false`).
6. You can also optionally specify the `qualifiedName` of a connection to a source (such as Snowflake), to limit the crawling of dbt assets to that existing connection in Atlan.
7. You can also optionally specify the list of assets to include in crawling. This is a highly\-nested map structure of numeric IDs for the account, project, etc. You will almost certainly need to set up the filter you want through the UI first, and look at the developer console of your browser to see the structure.
8. You can also optionally specify the list of assets to exclude from crawling. This follows the same structure as the inclusion filter.
9. You can also optionally specify whether to enable dbt tag syncing as part of crawling dbt.
10. You can also optionally set whether to enable the enrichment of materialized SQL assets as part of crawling dbt.
11. Build the minimal package object.
12. Now, you can convert the package into a `Workflow` object.
13. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Core[¶](#core "Permanent link")
-------------------------------

Will create a new connection

This should only be used to create the workflow the first time. Each time you run this method it
will create a new connection and new assets within that connection — which could lead to duplicate assets
if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow
(see [Re\-run existing workflow](#re-run-existing-workflow) below).

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a new crawl of dbt assets from a dbt files location:

Java

Python

Kotlin

Raw REST API

| dbt Core | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` Workflow crawler = DbtCrawler.creator( // (1)       client, // (2)       "dbt-snowflake", // (3)       List.of(client.getRoleCache().getIdForName("$admin")), // (4)       null,       null     )     .core( // (5)       "dbt-bucket",       "dbt-data",        "ap-south-1"     )     .limitToConnection( // (6)       "default/snowflake/1234567890"     )     .tags(true) // (7)     .enrichMaterializedAssets(true) // (8)     .build()  // (9)     .toWorkflow();  // (10) WorkflowResponse response = crawler.run(client);  // (11)  ``` |

1. The `DbtCrawler` package will create a workflow to crawl assets from dbt files location.
2. You must provide Atlan client.
3. You must provide a name for the connection that the dbt assets will exist within
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. To configure the crawler for extracting dbt assets directly from the dbt files location, you must provide the following information:

    * s3 bucket containing the dbt Core files.
        * prefix within the S3 bucket where the dbt Core files are located.
        * s3 region where the bucket is located.
6. You can also optionally specify the `qualifiedName` of a connection to a source (such as Snowflake), to limit the crawling of dbt assets to that existing connection in Atlan.
7. You can also optionally specify the list of assets to include in crawling. This is a highly\-nested map structure of numeric IDs for the account, project, etc. You will almost certainly need to set up the filter you want through the UI first, and look at the developer console of your browser to see the structure.
8. You can also optionally set whether to enable the enrichment of materialized SQL assets as part of crawling dbt.
9. Build the minimal package object.
10. Now, you can convert the package into a `Workflow` object.
11. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| dbt Core | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import DbtCrawler  client = AtlanClient()  crawler = (     DbtCrawler( # (1)         client=client, # (2)         connection_name="dbt-snowflake", # (3)         admin_roles=[client.role_cache.get_id_for_name("$admin")], # (4)         admin_groups=None,         admin_users=None,     )     .core( # (5)         s3_bucket="dbt-bucket",         s3_prefix="dbt-data",         s3_region="ap-south-1",     )     .limit_to_connection( # (6)         connection_qualified_name="default/snowflake/1234567890"     )     .tags(True) # (7)     .enrich_materialized_assets(True) # (8)     .to_workflow() # (9) ) response = client.workflow.run(crawler) # (10)  ``` |

1. Base configuration for a new dbt crawler.
2. You must provide a client instance.
3. You must provide a name for the connection that the dbt assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. To configure the crawler for extracting dbt assets directly
from the dbt files location, you must provide the following information:

    * s3 bucket containing the dbt Core files.
        * prefix within the S3 bucket where the dbt Core files are located.
        * s3 region where the bucket is located.
6. You can also optionally specify the `qualifiedName` of a connection to a source (such as Snowflake),
to limit the crawling of dbt assets to that existing connection in Atlan.
7. You can also optionally specify whether to
enable dbt tag syncing as part of crawling dbt.
8. You can also optionally set whether to enable
the enrichment of materialized SQL assets as part of crawling dbt.
9. Now, you can convert the package into a `Workflow` object.
10. Run the workflow by invoking the `run()` method on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| dbt Core | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` val crawler = DbtCrawler.creator( // (1)         client, // (2)         "dbt-snowflake", // (3)         listOf(client.getRoleCache().getIdForName("\$admin")), // (4)         null,         null     )     .core( // (5)         "dbt-bucket",         "dbt-data",          "ap-south-1"     )     .limitToConnection( // (6)         "default/snowflake/1234567890"     )     .tags(true) // (7)     .enrichMaterializedAssets(true) // (8)     .build()  // (9)     .toWorkflow()  // (10) val response = crawler.run(client)  // (11)  ``` |

1. The `DbtCrawler` package will create a workflow to crawl assets from dbt files location.
2. You must provide Atlan client.
3. You must provide a name for the connection that the dbt assets will exist within
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users)
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. To configure the crawler for extracting dbt assets directly from the dbt files location, you must provide the following information:

    * s3 bucket containing the dbt Core files.
        * prefix within the S3 bucket where the dbt Core files are located.
        * s3 region where the bucket is located.
6. You can also optionally specify the `qualifiedName` of a connection to a source (such as Snowflake), to limit the crawling of dbt assets to that existing connection in Atlan.
7. You can also optionally specify the list of assets to include in crawling. This is a highly\-nested map structure of numeric IDs for the account, project, etc. You will almost certainly need to set up the filter you want through the UI first, and look at the developer console of your browser to see the structure.
8. You can also optionally set whether to enable the enrichment of materialized SQL assets as part of crawling dbt.
9. Build the minimal package object.
10. Now, you can convert the package into a `Workflow` object.
11. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for dbt assets:

Java

Python

Kotlin

Raw REST API

| Re\-run existing dbt workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, DbtCrawler.PREFIX, 5); // (2) // Determine which of the results is the dbt workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `DbtCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing dbt workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.DBT, max_results=5 )  # Determine which dbt workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `DbtCrawler`. (You can also specify
the **maximum number of resulting workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing dbt workflow | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val existing = WorkflowSearchRequest // (1)     .findByType(client, DbtCrawler.PREFIX, 5) // (2) // Determine which of the results is the // dbt workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `DbtCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-dbt" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-dbt` prefix will ensure you only find existing dbt assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object.
        (Remember since this is a search, there could be multiple results, so you may want to use the other
        details in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-dbt-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2022\-12\-282025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/dbt-assets/) to provide us with more information. 

Back to top

[Previous Confluent Kafka assets](../confluent-kafka-assets/) [Next DynamoDB assets](../dynamodb-assets/) 

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

