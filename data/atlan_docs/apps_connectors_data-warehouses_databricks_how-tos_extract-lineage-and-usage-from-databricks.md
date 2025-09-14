# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks
meta-description: Once you have [crawled assets from Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks), you can retrieve lineage from [Unity Catalog](https://docs.databricks.com/data-governance/unity-catalog/index.html) and [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) from [query history](https://docs.databricks.com/api/workspace/queryhistory/list) or system tables. This is supported for all [three authentication methods](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks): personal access token, AWS service principal, and Azure service principal.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [crawled assets from Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks), you can retrieve lineage from [Unity Catalog](https://docs.databricks.com/data-governance/unity-catalog/index.html) and [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) from [query history](https://docs.databricks.com/api/workspace/queryhistory/list) or system tables. This is supported for all [three authentication methods](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks): personal access token, AWS service principal, and Azure service principal.
meta-og-locale: en
meta-og-title: extract lineage and usage from Databricks | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: extract lineage and usage from Databricks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

extract lineage and usage from Databricks
=========================================

Once you have [crawled assets from Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks), you can retrieve lineage from [Unity Catalog](https://docs.databricks.com/data-governance/unity-catalog/index.html) and [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) from [query history](https://docs.databricks.com/api/workspace/queryhistory/list) or system tables. This is supported for all [three authentication methods](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks): personal access token, AWS service principal, and Azure service principal.

Both Atlan and Databricks strongly recommend using the system tables method to extract [lineage](#configure-the-lineage-extractor) and [usage and popularity metrics](#optional-configure-the-usage-extractor) from Databricks.

danger[Usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) can be retrieved for all Databricks users. However, your Databricks workspace must be [Unity Catalog\-enabled](https://docs.databricks.com/data-governance/unity-catalog/get-started.html) for the retrieval of lineage and usage and popularity metrics to succeed. You may also need to [upgrade existing tables and views to Unity Catalog](https://docs.databricks.com/data-governance/unity-catalog/migrate.html), as well as reach out to your Databricks account executive to enable lineage in Unity Catalog. (As of publishing, the feature is still in preview from Databricks on AWS and Azure.)

To retrieve lineage and usage from Databricks, rev

[https://demo.arcade.software/rOE5UNrknGw7mITcKdWD?embed](https://demo.arcade.software/rOE5UNrknGw7mITcKdWD?embed)

iew the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the extractor[â](#select-the-extractor "Direct link to Select the extractor")
--------------------------------------------------------------------------------------

To select the Databricks lineage and usage extractor:

1. In the top right of any screen, navigate toÂ**New** and then clickÂ**New Workflow**.
2. From the filters along the top, click **Miner**.
3. From the list of packages, select **Databricks Miner** and click on **Setup Workflow**.

Configure the lineage extractor[â](#configure-the-lineage-extractor "Direct link to Configure the lineage extractor")
-----------------------------------------------------------------------------------------------------------------------

Choose your lineage extraction method:

* In **REST API**, Atlan connects to your database and extracts lineage directly.
* In **Offline**, you will need to first [extract lineage yourself](/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-lineage-extraction) and [make it available in S3](/apps/connectors/data-warehouses/databricks/how-tos/extract-on-premises-databricks-lineage).
* In **System Table**, Atlan connects to your database and [queries system tables](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks) to extract lineage directly.

### REST API[â](#rest-api "Direct link to REST API")

To configure the Databricks lineage extractor:

1. For *Connection*, select the connection to extract. (To select a connection, [the crawler](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks) must have already run.)
2. Click **Next** to proceed.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan supports the [offline extraction method](/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-lineage-extraction) for extracting lineage from Databricks This method uses Atlan's databricks\-extractor tool to extract lineage. You will need to first [extract lineage yourself](/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-lineage-extraction) and [make it available in S3](/apps/connectors/data-warehouses/databricks/how-tos/extract-on-premises-databricks-lineage).

To enter your S3 details:

1. For *Connection*, select the connection to extract. (To select a connection, [the crawler](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks) must have already run.)
2. For *Bucket name*, enter the name of your S3 bucket.
3. For *Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `extracted-lineage/result-0.json`, `extracted-query-history/result-0.json`, and so on.
4. For *Bucket region*, enter the name of the S3 region.
5. When complete, at the bottom of the screen, click **Next**.

### System table[â](#system-table "Direct link to System table")

To configure the Databricks lineage extractor:

1. For *Connection*, select the connection to extract. (To select a connection, [the crawler](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks) must have already run.)
2. \***Extraction Catalog Type**:
    * **Default**: Select to fetch lineage from the system catalog and `access` schema.
    * **Cloned\_catalog**: Select to fetch lineage from a cloned catalog and schema.  
    Before proceeding, make sure the following prerequisites are met:
    
    
        + You have already created cloned views named `column_lineage` and `table_lineage` in your schema.  
        If not, follow the steps in [Create cloned views of system tables](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks#optional-create-cloned-views-of-system-tables).
        + The `atlan-user` must have `SELECT` permissions on both views to access lineage data.
        Then, provide values for the following fields:
    
    
        + **Cloned Catalog Name** â Catalog containing the cloned views.
        + **Cloned Schema Name** â Schema containing the cloned views.
3. For *SQL Warehouse ID*, enter the [ID you copied from your SQL warehouse](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
4. Click **Next** to proceed.

(Optional) Configure the usage extractor[â](#optional-configure-the-usage-extractor "Direct link to (Optional) Configure the usage extractor")
------------------------------------------------------------------------------------------------------------------------------------------------

Atlan extracts [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) from:

* [Query history](https://docs.databricks.com/api/workspace/queryhistory/list)
* [System tables](https://docs.databricks.com/en/admin/system-tables/index.html#grant-access-to-system-tables)

This feature is currently limited to queries on SQL warehouses \- queries on interactive clusters are not supported. Additionally, expensive queries and compute costs for Databricks assets are currently unavailable due to limitations of the [Databricks APIs](https://docs.databricks.com/api/workspace/queryhistory/list).

To configure the Databricks usage and popularity extractor:

1. For *Fetch Query History and Calculate Popularity*, click **Yes** to retrieve [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for your Databricks assets.
2. For *Popularity Extraction Method*: Choose one of the following methods to extract usage and popularity metrics::
    * Click **REST API** to extract usage and popularity metrics from query history.
    * Click **System table** to extract metrics directly from system tables:
        + **Extraction catalog type for popularity**: Choose where to fetch popularity data from:
        
        
            - **Default**: Uses the system catalog and `query` schema to fetch popularity metrics.
            - **Cloned\_catalog**: Select to fetch popularity from cloned views in a separate catalog and schema.  
            Before proceeding:
            - The `query_history` view must exist in the provided schema.
            - The `atlan-user` must have `SELECT` permission on the view.
            Then provide:
        
        
            - **Cloned Catalog Name** â The catalog that contains the `query_history` view.
            - **Cloned Schema Name** â The schema that contains the `query_history` view.
            For more information, see [Create cloned views of system tables](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks#optional-create-cloned-views-of-system-tables).
        + For *SQL Warehouse ID*, enter the [ID you copied from your SQL warehouse](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).
3. Configure the usage extractor: Â Â
    * For *Popularity Window (days)*, 30 days is the maximum limit. You can set a shorter popularity window of less than 30 days.
    * For *Start time*, choose the earliest date from which to mine query history. If you're using the [offline extraction method](#offline-extraction-method) to extract query history from Databricks, skip to the next step.
    * For *Excluded Users*, type the names of users to be excluded while calculating [usage metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for Databricks assets. Press `enter` after each name to add more names.Â

dangerIf running the miner for the first time, Atlan recommends setting a start date around three days prior to the current date and then scheduling it daily to build up to two weeks of query history. Mining two weeks of query history on the first miner run may cause delays. For all subsequent runs, Atlan requires a minimum lag of 24 to 48 hours to capture all the relevant transformations that were part of a session. Learn more about the miner logic [here](/product/capabilities/usage-and-popularity/troubleshooting/troubleshooting-usage-and-popularity-metrics).

Run the extractor[â](#run-the-extractor "Direct link to Run the extractor")
-----------------------------------------------------------------------------

To run the Databricks lineage and popularity extractor, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/data-warehouses/databricks/references/preflight-checks-for-databricks) before running the crawler, click **Preflight checks**. This isÂ currently only supported when using REST API and offline extraction methods. If you're using system tables, skip to step 2\.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the extractor has completed running, you will see lineage for Databricks assets! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousSet up an Azure private network link to Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks)[NextHow to extract on\-premises Databricks lineage](/apps/connectors/data-warehouses/databricks/how-tos/extract-on-premises-databricks-lineage)

Copyright Â© 2025 Atlan Pte. Ltd.

