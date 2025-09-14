# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake
meta-description: Once you have [crawled assets from Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake), you can mine its query history to construct lineage.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [crawled assets from Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake), you can mine its query history to construct lineage.
meta-og-locale: en
meta-og-title: Mine Snowflake | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Mine Snowflake | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Mine Snowflake
==============

[https://demo.arcade.software/dfPshxfNWuCzpo9KjiKe?embed](https://demo.arcade.software/dfPshxfNWuCzpo9KjiKe?embed)

Once you have [crawled assets from Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake), you can mine its query history to construct lineage.

To mine lineage from Snowflake, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the miner[â](#select-the-miner "Direct link to Select the miner")
--------------------------------------------------------------------------

To select the Snowflake miner:

1. In the top right of any screen, navigate toÂ**New** and then clickÂ**New Workflow**.
2. From the filters along the top, click **Miner**.
3. From the list of packages, select **Snowflake Miner** and then click **Setup Workflow**.

Configure the miner[â](#configure-the-miner "Direct link to Configure the miner")
-----------------------------------------------------------------------------------

To configure the Snowflake miner:

1. For *Connection*, select the connection to mine. (To select a connection, [the crawler](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake) must have already run.)
2. For *Miner Extraction Method*, select **Source**, **Agent**, or see the separate instructions for the [S3 miner](/product/connections/how-tos/mine-queries-through-s3).
3. For *Snowflake Database*:

    * If the connection is configured with [access to the snowflake database](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake), choose **Default**.
        * If the connection can only [access a separate cloned database](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake), choose **Cloned Database**.
4. If you are using a cloned database, enter the name of the cloned database in *Database Name* and the name of the cloned schema in *Schema Name*.
5. For *Start time*, choose the earliest date from which to mine query history.

    info ðª **Did you know?** The miner restricts you to only querying the past two weeks of query history. If you need to query more history, for example in an initial load, consider using the [S3 miner](/product/connections/how-tos/mine-queries-through-s3) first. After the initial load, you can [modify the miner's configuration](/product/connections/how-tos/manage-connectivity) to use query history extraction.
6. To check for any permissions or other configuration issues before running the miner, click **Preflight checks**.
7. At the bottom of the screen, click **Next** to proceed.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for mining query history from Snowflake. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the Snowflake data source by adding the secret keys for your secret store. For details on the required fields, refer to the connection configuration used when [crawling Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake).
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

dangerIf running the miner for the first time, Atlan recommends setting a start date around three days prior to the current date and then scheduling it daily to build up to two weeks of query history. Mining two weeks of query history on the first miner run may cause delays. For all subsequent runs, Atlan requires a minimum lag of 24 to 48 hours to capture all the relevant transformations that were part of a session. Learn more about the miner logic [here](/product/capabilities/lineage/troubleshooting/troubleshooting-lineage#miner-logic).

Configure the miner behavior[â](#configure-the-miner-behavior "Direct link to Configure the miner behavior")
--------------------------------------------------------------------------------------------------------------

To configure the Snowflake miner behavior:

1. (Optional) For *Calculate popularity*, keep **True** to retrieve [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for your Snowflake assets from query history.
    * For *Excluded Users*, type the names of users to be excluded while calculating [usage metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for Snowflake assets. Press `Enter` after each name to add more names.Â
2. (Optional) For *Advanced Config*, keep *Default* for the default configuration or click **Custom** to configure the miner:
    * If Atlan support has provided you with a custom control configuration,Â enter the configuration into theÂ*Custom Config* box.
    * You can also enter `{âignore-all-caseâ: true}` to enable crawling assets with case\-sensitive identifiers.
    * For *Popularity Window (days)*, 90 days is the maximum limit. You can set a shorter popularity window of less than 90 days.

Run the miner[â](#run-the-miner "Direct link to Run the miner")
-----------------------------------------------------------------

To run the Snowflake miner, after completing the steps above:

* To run the miner once immediately, at the bottom of the screen, click the **Run** button.
* To schedule the miner to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the miner has completed running, you will see lineage for Snowflake assets that were created in Snowflake between the start time and when the miner ran! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousCrawl Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)[NextManage Snowflake tags](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags)

Copyright Â© 2025 Atlan Pte. Ltd.

