# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks
meta-description: To crawl metadata from your Databricks instance, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from your Databricks instance, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl Databricks | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Databricks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Databricks
================

Once you have configured the [Databricks access permissions](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks), you can establish a connection between Atlan and your Databricks instance. (If you are also using [AWS PrivateLink](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-aws-private-network-link-to-databricks) or [Azure Private Link](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks) for Databricks, you will need to set that up first, too.)

To crawl metadata from your Databricks instance, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Databricks as your source:

1. In the top right corner of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Databricks Assets**, and click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly. Next, select an authentication method:
    + In **JDBC**, you will need a [personal access token and HTTP path for authentication](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
    + In **AWS Service**, you will need a [client ID and client secret for AWS service principal authentication](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
    + In **Azure Service**, you will need a [tenant ID, client ID, and client secret for Azure service principal authentication](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
* In **Offline** extraction, you will need to first [extract metadata yourself and make it available in S3](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases).
* In **Agent** extraction, Atlan's secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

#### JDBC[â](#jdbc "Direct link to JDBC")

To enter your Databricks credentials:

1. For *Host*, enter the hostname, [AWS PrivateLink endpoint](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-aws-private-network-link-to-databricks), or [Azure Private Link endpoint](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks) for your Databricks instance.
2. For *Port*, enter the port number of your Databricks instance.
3. For *Personal Access Token*, enter the access token you generated when [setting up access](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
4. For *HTTP Path*, enter one of the following:
    * A path starting with `/sql/1.0/warehouses` to use the [Databricks SQL warehouse](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
    * A path starting with `sql/protocolv1/o` to use the [Databricks interactive cluster](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
5. Click **Test Authentication** to confirm connectivity to Databricks using these details.
6. Once successful, at the bottom of the screen click **Next**.

dangerMake sure your Databricks instance (SQL warehouse or interactive cluster) is up and running, otherwise the **Test Authentication** step times out.

#### AWS service principal[â](#aws-service-principal "Direct link to AWS service principal")

To enter your Databricks credentials:

1. For *Host*, enter the hostname or [AWS PrivateLink endpoint](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-aws-private-network-link-to-databricks) for your Databricks instance.
2. For *Port*, enter the port number of your Databricks instance.
3. For *Client ID*, enter the [client ID for your AWS service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
4. For *Client Secret*, enter the [client secret for your AWS service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
5. Click **Test Authentication** to confirm connectivity to Databricks using these details.
6. Once successful, at the bottom of the screen click **Next**.

#### Azure service principal[â](#azure-service-principal "Direct link to Azure service principal")

To enter your Databricks credentials:

1. For *Host*, enter the hostname or [Azure Private Link endpoint](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks) for your Databricks instance.
2. For *Port*, enter the port number of your Databricks instance.
3. For *Client ID*, enter the [application (client) ID for your Azure service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
4. For *Client Secret*, enter the [client secret for your Azure service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
5. For *Tenant ID*, enter the [directory (tenant) ID for your Azure service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
6. Click **Test Authentication** to confirm connectivity to Databricks using these details.
7. Once successful, at the bottom of the screen click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan supports the [offline extraction method](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases) for fetching metadata from Databricks. This method uses Atlan's databricks\-extractor tool to fetch metadata. You need to first [extract the metadata](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases) yourself and then [make it available in S3](/apps/connectors/data-warehouses/databricks/how-tos/crawl-on-premises-databricks).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket.
2. For *Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `output/databricks-example/catalogs/success/result-0.json`, `output/databricks-example/schemas/{{catalog_name}}/success/result-0.json`, `output/databricks-example/tables/{{catalog_name}}/success/result-0.json`, and similar files.
3. (Optional) For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen, click **Next**.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from Databricks. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the Databricks data source by adding the secret keys for your secret store. For details on the required fields, refer to the Direct extraction section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Databricks connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you don't specify any user or group, nobody can manage the connection \- not even admins.
3. (Optional) To prevent users from querying any Databricks data, change *Enable SQL Query* to **No**.
4. (Optional) To prevent users from previewing any Databricks data, change *Enable Data Preview* to **No**.
5. (Optional) To prevent users from running large queries, change *Max Row Limit* or keep the default selection.
6. At the bottom of the screen, click the **Next** button to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Databricks crawler, you can further configure it.

### System tables extraction method[â](#system-tables-extraction-method "Direct link to System tables extraction method")

The system metadata extraction method is only available for [Unity Catalog\-enabled workspaces](https://docs.databricks.com/data-governance/unity-catalog/get-started.html). It provides access to detailed metadata from system tables and supports all three authentication types. You can extract metadata from your Databricks workspace using this method. Follow these steps:

1. Set up authentication using one of the following:

    * [Personal access token](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks#personal-access-token-authentication)
        * [AWS service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks#aws-service-principal-authentication)
        * [Azure service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks#azure-service-principal-authentication)
2. The default options can work as is. You may choose to override the defaults for any of the remaining options:

    * For *Asset selection*, select a filtering option:

    + For *SQL warehouse*, click the dropdown to select the SQL warehouse you want to configure.
            + To select the assets you want to include in crawling, click **Include by hierarchy** and filter for assets down to the database or schema level. (This defaults to all assets, if none are specified.)
            + To have the crawler include *Databases*, *Schemas*, or *Tables \& Views* based on a naming convention, click **Include by regex** and specify a regular expression \- for example, specifying `ATLAN_EXAMPLE_DB.*` for *Databases* includes all the matching databases and their child assets.
            + To select the assets you want to exclude from crawling, click **Exclude by hierarchy** and filter for assets down to the database or schema level. (This defaults to no assets, if none are specified.)
            + To have the crawler ignore *Databases*, *Schemas*, or *Tables \& Views* based on a naming convention, click **Exclude by regex** and specify a regular expression \- for example, specifying `ATLAN_EXAMPLE_TABLES.*` for *Tables \& Views* excludes all the matching tables and views.
            + Click **\+** to add more filters. If you add multiple filters, assets are crawled based on matching *all* the filtering conditions you have set.
            + To [import tags from Databricks to Atlan](/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags), change *Import Tags* to **Yes**. Note that you must have a [Unity Catalog\-enabled workspace](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html) to import Databricks tags in Atlan.
 **Did you know?** If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

#### Incremental extraction Public preview[â](#incremental-extraction- "Direct link to incremental-extraction-")

* Toggle incremental extraction, for a faster and more efficient metadata extraction.

### JDBC extraction method[â](#jdbc-extraction-method "Direct link to JDBC extraction method")

The JDBC extraction method uses JDBC queries to extract metadata from your Databricks instance. This was the original extraction method provided by Databricks. This extraction method is only supported for [personal access token authentication](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks#personal-access-token-authentication).

You can override the defaults for any of these options:

* To select the assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To have the crawler ignore tables and views based on a naming convention, specify a regular expression in the *Exclude regex for tables \& views* field.
* For *View Definition Lineage*, keep the default **Yes** to generate upstream lineage for views based on the tables referenced in the views or click **No** to exclude from crawling.
* For *Advanced Config*, keep *Default* for the default configuration or click **Advanced** to further configure the crawler:
    + To enable or disable schema\-level filtering at source, click **Enable Source Level Filtering** and select **True** to enable it or **False** to disable it.

### REST API extraction method[â](#rest-api-extraction-method "Direct link to REST API extraction method")

The REST API extraction method uses [Unity Catalog](https://docs.databricks.com/data-governance/unity-catalog/index.html) to extract metadata from your Databricks instance. This extraction method is supported for all three authentication options: [personal access token](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks#personal-access-token-authentication), [AWS service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks), and [Azure service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).

* This method is only supported by [Unity Catalog\-enabled](https://docs.databricks.com/data-governance/unity-catalog/get-started.html) workspaces.
* If you enable an existing workspace, you also need to [upgrade your tables and views to Unity Catalog](https://docs.databricks.com/data-governance/unity-catalog/migrate.html).

While REST APIs are used to extract metadata, JDBC queries are still used for querying purposes.

You can override the defaults for any of these options:

* Change the extraction method under *Extraction method* to **REST API**.
* To select the assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To [import tags from Databricks to Atlan](/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags), change *Import Tags* to **Yes**. Note that you must have a [Unity Catalog\-enabled workspace](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html) to import Databricks tags in Atlan.
    + For *SQL warehouse*, click the dropdown to select the SQL warehouse you have configured.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

Follow these steps to run the Databricks crawler:

1. To check for any [permissions or other configuration issues](/apps/connectors/data-warehouses/databricks/references/preflight-checks-for-databricks) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up cross\-workspace extraction](/apps/connectors/data-warehouses/databricks/how-tos/set-up-cross-workspace-extraction)[NextSet up on\-premises Databricks access](/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-access)

Copyright Â© 2025 Atlan Pte. Ltd.

