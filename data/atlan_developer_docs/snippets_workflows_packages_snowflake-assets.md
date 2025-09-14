# Source URL
https://developer.atlan.com/snippets/workflows/packages/snowflake-assets/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/snowflake-assets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to crawl Snowflake assets and publish them to Atlan for discovery.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to crawl Snowflake assets and publish them to Atlan for discovery.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/snowflake-assets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Snowflake assets package - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/snowflake-assets/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to crawl Snowflake assets and publish them to Atlan for discovery.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/snowflake-assets.png
meta-twitter:title: Snowflake assets package - Developer
meta-viewport: width=device-width,initial-scale=1
title: Snowflake assets package - Developer
-->

[Skip to content](#snowflake-assets-package) Developer Snowflake assets package Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/service/workflows/indexsearch (POST)](../../../../endpoints/#tag:apiserviceworkflowsindexsearch-post)[/api/service/workflows/submit (POST)](../../../../endpoints/#tag:apiserviceworkflowssubmit-post)

Snowflake assets package[¶](#snowflake-assets-package "Permanent link")
=======================================================================

The [Snowflake assets package](https://ask.atlan.com/hc/en-us/articles/6037440864145) crawls Snowflake assets and publishes them to Atlan for discovery.

Information schema[¶](#information-schema "Permanent link")
-----------------------------------------------------------

Will create a new connection

This should only be used to create the workflow the first time. Each time you
run this method it will create a new connection and new assets within that connection
— which could lead to duplicate assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow
(see [Re\-run existing workflow](#re-run-existing-workflow) below).

[6\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/6.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To crawl assets from Snowflake using the built\-in information schema and basic authentication:

Java

Python

Kotlin

Raw REST API

| Information schema crawling of Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ``` | ``` Workflow crawler = SnowflakeCrawler.creator( // (1)       client, // (2)       "production", // (3)       List.of(client.getRoleCache().getIdForName("$admin")), // (4)       null,       null,       true, // (5)       true, // (6)       10000L // (7)     )     .basicAuth( // (8)       "atlan-user", // (9)       "atlan-pass", // (10)       "Transformer", // (11)       "COMPUTE_WH" // (12)     )     .informationSchema("dev.ap-south.snowflakecomputing.com") // (13)     .include( // (14)       Map.of(         "ANALYTICS", List.of("WIDE_WORLD_IMPORTERS")       )     )     .exclude(Map.of()) // (15)     .lineage(true) // (16)     .tags(false) // (17)     .build()  // (18)     .toWorkflow();  // (19) WorkflowResponse response = crawler.run(client);  // (20)  ``` |

1. The `SnowflakeCrawler` package will create a workflow to crawl assets from Snowflake.
2. You must provide Atlan client.
3. You must provide a name for the connection that the Snowflake assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify whether you want to allow queries to this connection (`true`, as in this example) or deny all query access to the connection (`false`).
6. You can specify whether you want to allow data previews on this connection (`true`, as in this example) or deny all sample data previews to the connection (`false`).
7. You can specify a maximum number of rows that can be accessed for any asset in the connection.
8. You can also use `.keypairAuth` for information schema crawling.
9. You must provide your Snowflake username.
10. You must provide your Snowflake password.
11. You must specify the name of the Snowflake role you want to use for crawling.
12. You must specify the name of the Snowflake warehouse you want to use for crawling.
13. You must provide the hostname of your Snowflake instance.
14. You can also optionally specify the set of assets to include in crawling. For Snowflake assets, this should be specified as a map keyed by database name with values as a list of schemas within that database to crawl. (If set to null, all databases and schemas will be crawled.)
15. You can also optionally specify the list of assets to exclude from crawling. For Snowflake assets, this should be specified as a map keyed by database name with values as a list of schemas within the database to exclude. (If set to null, no assets will be excluded.)
16. You can also optionally specify whether to enable lineage as part of crawling Snowflake.
17. You can also optionally specify whether to enable Snowflake tag syncing as part of crawling Snowflake.
18. Build the minimal package object.
19. Now, you can convert the package into a `Workflow` object.
20. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Information schema crawling of Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import SnowflakeCrawler  client = AtlanClient()  crawler = (     SnowflakeCrawler( # (1)         connection_name="production", # (2)         admin_roles=[client.role_cache.get_id_for_name("$admin")], # (3)         admin_groups=None,         admin_users=None,         row_limit=10000, # (4)         allow_query=True, # (5)         allow_query_preview=True, # (6)     )     .basic_auth( # (7)         username="atlan-user", # (8)         password="atlan-pass", # (9)         role="Transformer",  # (10)         warehouse="COMPUTE_WH",  # (11)     )     .information_schema(hostname="dev.ap-south.snowflakecomputing.com")  # (12)     .include(assets={"ANALYTICS": ["WIDE_WORLD_IMPORTERS"]})  # (13)     .exclude(assets={})  # (14)     .lineage(True)  # (15)     .tags(False) # (15)     .to_workflow() # (16) ) response = client.workflow.run(crawler) # (17)  ``` |

1. Base configuration for a new Snowflake crawler.
2. You must provide a name for the connection that the Snowflake assets will exist within.
3. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
4. You can specify a maximum number of rows that can be accessed for any asset in the connection.
5. You can specify whether you want to allow queries to this connection.
(`True`, as in this example) or deny all query access to the connection (`False`).
6. You can specify whether you want to allow data previews on this connection
(`True`, as in this example) or deny all sample data previews to the connection (`False`).
7. You can also use `.keypair_auth` for information schema crawling.
8. You must provide your Snowflake username.
9. You must provide your Snowflake password.
10. You must specify the name of the Snowflake role you want to use for crawling.
11. You must specify the name of the Snowflake warehouse you want to use for crawling.
12. When using the built\-in information schema, you must provide the hostname of your Snowflake instance.
13. You can also optionally specify the set of assets to include in crawling. For Snowflake assets,
this should be specified as a dict keyed by database name with values as a list of schemas within that
database to crawl. (If set to None, all databases and schemas will be crawled.)
14. You can also optionally specify the list of assets to exclude from crawling.
For Snowflake assets, this should be specified as a dict keyed by database name with values
as a list of schemas within the database to exclude. (If set to None, no assets will be excluded.)
15. You can also optionally specify whether to enable lineage as part of crawling Snowflake.
16. You can also optionally specify whether to enable Snowflake tag syncing as part of crawling Snowflake.
17. Now, you can convert the package into a `Workflow` object.
18. Run the workflow by invoking the `run()` method on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Information schema crawling of Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 ``` | ``` val crawler = SnowflakeCrawler.creator(         client,  // (2)         "production",  // (3)         listOf(client.roleCache.getIdForName("\$admin")),  // (4)         null,         null,         true,  // (5)         true,  // (6)         10000L  // (7)     )     .basicAuth( // (9)         "atlan-user",  // (9)         "atlan-pass",  // (10)         "Transformer",  // (11)         "COMPUTE_WH"  // (12)     )     .informationSchema("dev.ap-south.snowflakecomputing.com")  // (13)     .include(  // (14)         mapOf(             "ANALYTICS" to listOf("WIDE_WORLD_IMPORTERS")         )     )     .exclude(mapOf())  // (15)     .lineage(true)  // (16)     .tags(false)  // (17)     .build()  // (18)     .toWorkflow()  // (19) val response = crawler.run(client)  // (20)  ``` |

1. The `SnowflakeCrawler` package will create a workflow to crawl assets from Snowflake.
2. You must provide Atlan client.
3. You must provide a name for the connection that the Snowflake assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify whether you want to allow queries to this connection (`true`, as in this example) or deny all query access to the connection (`false`).
6. You can specify whether you want to allow data previews on this connection (`true`, as in this example) or deny all sample data previews to the connection (`false`).
7. You can specify a maximum number of rows that can be accessed for any asset in the connection.
8. You can also use `.keypairAuth` for information schema crawling.
9. You must provide your Snowflake username.
10. You must provide your Snowflake password.
11. You must specify the name of the Snowflake role you want to use for crawling.
12. You must specify the name of the Snowflake warehouse you want to use for crawling.
13. You must provide the hostname of your Snowflake instance.
14. You can also optionally specify the set of assets to include in crawling. For Snowflake assets, this should be specified as a map keyed by database name with values as a list of schemas within that database to crawl. (If set to null, all databases and schemas will be crawled.)
15. You can also optionally specify the list of assets to exclude from crawling. For Snowflake assets, this should be specified as a map keyed by database name with values as a list of schemas within the database to exclude. (If set to null, no assets will be excluded.)
16. You can also optionally specify whether to enable lineage as part of crawling Snowflake.
17. You can also optionally specify whether to enable Snowflake tag syncing as part of crawling Snowflake.
18. Build the minimal package object.
19. Now, you can convert the package into a `Workflow` object.
20. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Account usage[¶](#account-usage "Permanent link")
-------------------------------------------------

Will create a new connection

This should only be used to create the workflow the first time
Each time you run this method it will create a new connection and new assets within that connection
— which could lead to duplicate assets if you run the workflow this way multiple times with the same settings.

Instead, when you want to re\-crawl assets, re\-run the existing workflow 
(see [Re\-run existing workflow](#re-run-existing-workflow) below).

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To crawl assets from Snowflake using the account usage and keypair authentication:

Java

Python

Kotlin

Raw REST API

| Account usage crawling of Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` Workflow crawler = SnowflakeCrawler.creator( // (1)       client, // (2)       "production", // (3)       List.of(client.getRoleCache().getIdForName("$admin")), // (4)       null,       null,       true, // (5)       true, // (6)       10000L // (7)     )     .keypairAuth( // (8)         "atlan-user", // (9)         "private-key", // (10)         "private-key-pass", // (11)         "Transformer", // (12)         "COMPUTE_WH", // (13)     )     .accountUsage( // (14)         "dev.ap-south.snowflakecomputing.com",          "db",         "schema",     )     .include( // (15)       Map.of(         "ANALYTICS", List.of("WIDE_WORLD_IMPORTERS")       )     )     .exclude(Map.of()) // (16)     .lineage(true) // (17)     .tags(false) // (18)     .build()  // (19)     .toWorkflow();  // (20) WorkflowResponse response = crawler.run(client);  // (21)  ``` |

1. The `SnowflakeCrawler` package will create a workflow to crawl assets from Snowflake.
2. You must provide Atlan client.
3. You must provide a name for the connection that the Snowflake assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify whether you want to allow queries to this connection (`true`, as in this example) or deny all query access to the connection (`false`).
6. You can specify whether you want to allow data previews on this connection (`true`, as in this example) or deny all sample data previews to the connection (`false`).
7. You can specify a maximum number of rows that can be accessed for any asset in the connection.
8. You can also use `.basicAuth` for account usage crawling.
9. You must provide your Snowflake username.
10. You must provide encrypted private key for authenticating with Snowflake.
11. You must provide password for the encrypted private key.
12. You must specify the name of the Snowflake role you want to use for crawling.
13. You must specify the name of the Snowflake warehouse you want to use for crawling.
14. To configure the crawler for extracting data from Snowflake's account usage database and schema, provide the following information:

    * hostname of your Snowflake instance.
        * name of the database to use.
        * name of the schema to use.
15. You can also optionally specify the set of assets to include in crawling. For Snowflake assets, this should be specified as a map keyed by database name with values as a list of schemas within that database to crawl. (If set to null, all databases and schemas will be crawled.)
16. You can also optionally specify the set of assets to exclude from crawling. For Snowflake assets, this should be specified as a map keyed by database name with values as a list of schemas within the database to exclude. (If set to null, no assets will be excluded.)
17. You can also optionally specify whether to enable lineage as part of crawling Snowflake.
18. You can also optionally specify whether to enable Snowflake tag syncing as part of crawling Snowflake.
19. Build the minimal package object.
20. Now, you can convert the package into a `Workflow` object.
21. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Account usage crawling of Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.packages import SnowflakeCrawler  client = AtlanClient()  crawler = (     SnowflakeCrawler( # (1)         client=client, # (2)         connection_name="production", # (3)         admin_roles=[client.role_cache.get_id_for_name("$admin")], # (4)         admin_groups=None,         admin_users=None,         row_limit=10000, # (5)         allow_query=True, # (6)         allow_query_preview=True, # (7)     )     .keypair_auth( # (8)         username="atlan-user", # (9)         private_key="private-key", # (10)         private_key_password="private-key-pass", # (11)         role="Transformer", # (12)         warehouse="COMPUTE_WH", # (13)     )     .account_usage( # (14)         hostname="dev.ap-south.snowflakecomputing.com",          database_name="db",         schema_name="schema",     )     .include(assets={"ANALYTICS": ["WIDE_WORLD_IMPORTERS"]})  # (15)     .exclude(assets={})  # (16)     .lineage(True)  # (17)     .tags(False) # (18)     .to_workflow() # (19) ) response = client.workflow.run(crawler) # (20)  ``` |

1. Base configuration for a new Snowflake crawler.
2. You must provide a client instance.
3. You must provide a name for the connection that the Snowflake assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify a maximum number of rows that can be accessed for any asset in the connection.
6. You can specify whether you want to allow queries to this connection
(`True`, as in this example) or deny all query access to the connection (`False`).
7. You can specify whether you want to allow data previews on this connection
(`True`, as in this example) or deny all sample data previews to the connection (`False`).
8. You can also use `.basic_auth` for account usage crawling.
9. You must provide your Snowflake username.
10. You must provide encrypted private key for authenticating with Snowflake.
11. You must provide password for the encrypted private key.
12. You must specify the name of the Snowflake role you want to use for crawling.
13. You must specify the name of the Snowflake warehouse you want to use for crawling.
14. To configure the crawler for extracting data from Snowflake's
account usage database and schema, provide the following information:

    * hostname of your Snowflake instance.
        * name of the database to use.
        * name of the schema to use.
15. You can also optionally specify the set of assets to include in crawling. For Snowflake assets,
this should be specified as a dict keyed by database name with values as a list of schemas within that
database to crawl. (If set to None, all databases and schemas will be crawled.)
16. You can also optionally specify the set of assets to exclude from crawling.
For Snowflake assets, this should be specified as a dict keyed by database name with values
as a list of schemas within the database to exclude. (If set to None, no assets will be excluded.)
17. You can also optionally specify whether to enable lineage as part of crawling Snowflake.
18. You can also optionally specify whether to enable Snowflake tag syncing as part of crawling Snowflake.
19. Now, you can convert the package into a `Workflow` object.
20. Run the workflow by invoking the `run()` method on the workflow client, passing the created object.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Account usage crawling of Snowflake | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` val crawler = SnowflakeCrawler.creator(         client, // (2)         "production", // (3)         listOf(client.getRoleCache().getIdForName("\$admin")), // (4)         null,         null,         true, // (5)         true, // (6)         10000L // (7)    )     .keypairAuth( // (8)         "atlan-user", // (9)         "private-key", // (10)         "private-key-pass", // (11)         "Transformer", // (12)         "COMPUTE_WH", // (13)     )     .accountUsage( // (14)         "dev.ap-south.snowflakecomputing.com",         "db",         "schema",     )     .include( // (15)         mapOf(             "ANALYTICS" to listOf("WIDE_WORLD_IMPORTERS")         )     )     .exclude(emptyMap()) // (16)     .lineage(true) // (17)     .tags(false) // (18)     .build() // (19)     .toWorkflow() // (20) val response = crawler.run(client) // (21)  ``` |

1. The `SnowflakeCrawler` package will create a workflow to crawl assets from Snowflake.
2. You must provide Atlan client.
3. You must provide a name for the connection that the Snowflake assets will exist within.
4. You must specify at **least one connection admin**, either:

    * everyone in a role (in this example, all `$admin` users).
        * a list of groups (names) that will be connection admins.
        * a list of users (names) that will be connection admins.
5. You can specify whether you want to allow queries to this connection (`true`, as in this example) or deny all query access to the connection (`false`).
6. You can specify whether you want to allow data previews on this connection (`true`, as in this example) or deny all sample data previews to the connection (`false`).
7. You can specify a maximum number of rows that can be accessed for any asset in the connection.
8. You can also use `.basicAuth` for account usage crawling.
9. You must provide your Snowflake username.
10. You must provide encrypted private key for authenticating with Snowflake.
11. You must provide password for the encrypted private key.
12. You must specify the name of the Snowflake role you want to use for crawling.
13. You must specify the name of the Snowflake warehouse you want to use for crawling.
14. To configure the crawler for extracting data from Snowflake's account usage database and schema, provide the following information:

    * hostname of your Snowflake instance.
        * name of the database to use.
        * name of the schema to use.
15. You can also optionally specify the set of assets to include in crawling. For Snowflake assets, this should be specified as a map keyed by database name with values as a list of schemas within that database to crawl. (If set to null, all databases and schemas will be crawled.)
16. You can also optionally specify the set of assets to exclude from crawling. For Snowflake assets, this should be specified as a map keyed by database name with values as a list of schemas within the database to exclude. (If set to null, no assets will be excluded.)
17. You can also optionally specify whether to enable lineage as part of crawling Snowflake.
18. You can also optionally specify whether to enable Snowflake tag syncing as part of crawling Snowflake.
19. Build the minimal package object.
20. Now, you can convert the package into a `Workflow` object.
21. You can then run the workflow using the `run()` method on the object you've created. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Create the workflow via UI only

We recommend creating the workflow only via the UI. To rerun an existing workflow, see the steps below.

Re\-run existing workflow[¶](#re-run-existing-workflow "Permanent link")
------------------------------------------------------------------------

[1\.9\.5](https://github.com/atlanhq/atlan-python/releases/tag/1.9.5 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To re\-run an existing workflow for Snowflake assets:

Java

Python

Kotlin

Raw REST API

| Re\-run existing Snowflake workflow | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` List<WorkflowSearchResult> existing = WorkflowSearchRequest // (1)     .findByType(client, SnowflakeCrawler.PREFIX, 5); // (2) // Determine which of the results is the Snowflake workflow you want to re-run... WorkflowRunResponse response = existing.get(n).rerun(client); // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `SnowflakeCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Snowflake workflow | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.enums import WorkflowPackage  client = AtlanClient()  existing = client.workflow.find_by_type(  # (1)   prefix=WorkflowPackage.SNOWFLAKE, max_results=5 )  # Determine which Snowflake workflow (n) # from the list of results you want to re-run. response = client.workflow.rerun(existing[n]) # (2)  ``` |

1. You can find workflows by their type using the workflow client `find_by_type()` method and providing the **prefix** for one of the packages.
In this example, we do so for the `SnowflakeCrawler`. (You can also specify
the **maximum number of resulting workflows** you want to retrieve as results.)
2. Once you've found the workflow you want to re\-run,
you can simply call the workflow client `rerun()` method.

    * Optionally, you can use `rerun(idempotent=True)` to avoid re\-running a workflow that is already in running or in a pending state.
         This will return details of the already running workflow if found, and by default, it is set to `False`.
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

| Re\-run existing Snowflake workflow | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val existing = WorkflowSearchRequest // (1)     .findByType(client, SnowflakeCrawler.PREFIX, 5) // (2) // Determine which of the results is the // Snowflake workflow you want to re-run... val response = existing.get(n).rerun(client) // (3)  ``` |

1. You can search for existing workflows through the `WorkflowSearchRequest` class.
2. You can find workflows by their type using the `findByType()` helper method and providing the prefix for one of the packages. In this example, we do so for the `SnowflakeCrawler`. (You can also specify the maximum number of resulting workflows you want to retrieve as results.)
3. Once you've found the workflow you want to re\-run, you can simply call the `rerun()` helper method on the workflow search result. The `WorkflowRunResponse` is just a subtype of `WorkflowResponse` so has the same helper method to monitor progress of the workflow run. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

    * Optionally, you can use the `rerun(client, true)` method with idempotency to avoid re\-running a workflow that is already in running or in a pending state. This will return details of the already running workflow if found, and by default, it is set to `false`
        Workflows run asynchronously

    Remember that workflows run asynchronously. See the [packages and workflows introduction](../) for details on how you can check the status and wait until the workflow has been completed.

Requires multiple steps through the raw REST API

1. Find the existing workflow.
2. Send through the resulting re\-run request.

| POST /api/service/workflows/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` {   "from": 0,   "size": 5,   "query": {     "bool": {       "filter": [         {           "nested": {             "path": "metadata",             "query": {               "prefix": {                 "metadata.name.keyword": {                   "value": "atlan-snowflake" // (1)                 }               }             }           }         }       ]     }   },   "sort": [     {       "metadata.creationTimestamp": {         "nested": {           "path": "metadata"         },         "order": "desc"       }     }   ],   "track_total_hits": true }  ``` |

1. Searching by the `atlan-snowflake` prefix will ensure you only find existing Snowflake assets workflows.

    Name of the workflow

    The name of the workflow will be nested within the `_source.metadata.name` property of the response object. 
        (Remember since this is a search, there could be multiple results, so you may want to use the other details 
        in each result to determine which workflow you really want.)

| POST /api/service/workflows/submit | |
| --- | --- |
| ``` 100 101 102 103 104 ``` | ``` {   "namespace": "default",   "resourceKind": "WorkflowTemplate",   "resourceName": "atlan-snowflake-1684500411" // (1) }  ``` |

1. Send the name of the workflow as the `resourceName` to rerun it.

---

2022\-12\-282025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/snowflake-assets/) to provide us with more information. 

Back to top

[Previous Relational assets builder](../relational-assets-builder/) [Next Snowflake miner](../snowflake-miner/) 

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

