# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift
meta-description: Once you have [crawled assets from Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift), you can mine its query history to construct lineage and retrieve [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [crawled assets from Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift), you can mine its query history to construct lineage and retrieve [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics).
meta-og-locale: en
meta-og-title: Mine Amazon Redshift | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Mine Amazon Redshift | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Mine Amazon Redshift
====================

[https://demo.arcade.software/XONG5FV3rX6lm4LKCiqt?embed](https://demo.arcade.software/XONG5FV3rX6lm4LKCiqt?embed)

Once you have [crawled assets from Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift), you can mine its query history to construct lineage and retrieve [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics).

To mine lineage from Amazon Redshift, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the miner[â](#select-the-miner "Direct link to Select the miner")
--------------------------------------------------------------------------

To select the Amazon Redshift miner:

1. In the top right of any screen, navigate toÂ**New** and then clickÂ**New Workflow**.
2. From the filters along the top, click **Miner**.
3. From the list of packages, select **Redshift Miner** and click on **Setup Workflow**.

Configure the miner[â](#configure-the-miner "Direct link to Configure the miner")
-----------------------------------------------------------------------------------

To configure the Amazon Redshift miner:

1. For *Connection*, select the connection to mine. (To select a connection, [the crawler](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift) must have already run.)
2. For *Miner extraction method*, select **Query History**.
3. For *Start time*, choose the earliest date from which to mine query history.

    danger Amazon Redshift only stores query history for [2\-5 days](https://docs.aws.amazon.com/redshift/latest/dg/r_STL_QUERY.html). If you need to query more history, for example in an initial load, consider using the [S3 miner](/product/connections/how-tos/mine-queries-through-s3) first. After the initial load, you can [modify the miner's configuration](/product/connections/how-tos/manage-connectivity) to use query history extraction.
4. (Optional) For *Advanced Config*, keep *Default* for the default configuration or click **Advanced** to further configure the miner:

    1. For *Cross Connection*, click **Yes** to extract lineage across all available data source connections or click **No** to only extract lineage from the selected Amazon Redshift connection.
        2. For *Control Config*, if Atlan support has provided you with a custom control configuration, select **Custom** and enter the configuration into theÂ*Custom Config* box. You can also:
            * Enter `{âignore-all-caseâ: true}` to enable crawling assets with case\-sensitive identifiers.
5. (Optional) For *Enable Popularity*, click **Yes** to retrieve [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for your Amazon Redshift assets from query history:

    * For *Excluded Users*, type the names of users to be excluded while calculating [usage metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for Amazon Redshift assets. Press `enter` after each name to add more names.

Run the miner[â](#run-the-miner "Direct link to Run the miner")
-----------------------------------------------------------------

To run the Amazon Redshift miner, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/data-warehouses/amazon-redshift/references/preflight-checks-for-amazon-redshift) before running the miner, click **Preflight checks**.
2. You can either:
    * To run the miner once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the miner to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the miner has completed running, you will see lineage for Amazon Redshift assets that were created in Amazon Redshift between the start time and when the miner ran! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift)[NextWhat does Atlan crawl from Amazon Redshift?](/apps/connectors/data-warehouses/amazon-redshift/references/what-does-atlan-crawl-from-amazon-redshift)

Copyright Â© 2025 Atlan Pte. Ltd.

