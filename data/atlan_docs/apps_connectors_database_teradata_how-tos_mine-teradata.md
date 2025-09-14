# Source URL
https://docs.atlan.com/apps/connectors/database/teradata/how-tos/mine-teradata

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/mine-teradata
link-alternate: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/mine-teradata
meta-description: Once you have [crawled assets from Teradata](/apps/connectors/database/teradata/how-tos/crawl-teradata), you can mine its query history to construct lineage.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [crawled assets from Teradata](/apps/connectors/database/teradata/how-tos/crawl-teradata), you can mine its query history to construct lineage.
meta-og-locale: en
meta-og-title: Mine Teradata | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/mine-teradata
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Mine Teradata | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Mine Teradata
=============

Once you have [crawled assets from Teradata](/apps/connectors/database/teradata/how-tos/crawl-teradata), you can mine its query history to construct lineage.

To mine lineage from Teradata, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

[https://demo.arcade.software/lJVnseeUlWg6jcPBmRUG?embed](https://demo.arcade.software/lJVnseeUlWg6jcPBmRUG?embed)

Select the miner[â](#select-the-miner "Direct link to Select the miner")
--------------------------------------------------------------------------

To select the Teradata miner:

1. In the top right of any screen, navigate to *\+New* and then clickÂ**New workflow**.
2. Under *Marketplace*, from the filters along the top, click **Miner**.
3. From the list of packages, selectÂ**Teradata Miner** and then click **Setup Workflow**.

Configure the miner[â](#configure-the-miner "Direct link to Configure the miner")
-----------------------------------------------------------------------------------

To configure the Teradata miner:

1. For *Connection*, select the connection to mine. (To select a connection, [the crawler](/apps/connectors/database/teradata/how-tos/crawl-teradata) must have already run.)
2. For *Miner Extraction Method*, choose your extraction method:

    * In **Query History**, Atlan connects to your database and mines query history directly.
        * In **Offline**, you will need to first [mine query history yourself](/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access) and [make it available in S3](/product/connections/how-tos/mine-queries-through-s3). This method uses Atlan's [teradata\-miner tool](/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access) to mine query history.
3. For *Start date*, choose the earliest date from which to mine query history.

    info ðª **Did you know?** The miner restricts you to only querying the past two weeks of query history. If you need to query more history, for example in an initial load, consider using the [S3 miner](/product/connections/how-tos/mine-queries-through-s3) first. After the initial load, you can [modify the miner's configuration](/product/connections/how-tos/manage-connectivity) to use query history extraction.
4. (Optional) For *Advanced Config*, keep *Default* for the default configuration or click **Advanced** to configure the miner:

    1. For *Cross Connection*, click **Yes** to extract lineage across all available data source connections or click **No** to only extract lineage from the selected Teradata connection.
        2. For *Control Config*, if Atlan support has provided you with a custom control configuration, select **Custom** and enter the configuration into theÂ*Custom Config* box. You can also:
            * Enter `{âignore-all-caseâ: true}` to enable crawling assets with case\-sensitive identifiers.

dangerIf running the miner for the first time, Atlan recommends setting a start date roughly three days prior to the current date and then scheduling it daily to build up to two weeks of query history. Mining two weeks of query history on the first miner run may cause delays. Atlan requires a minimum lag of 24 to 48 hours to capture all the relevant transformations that were part of a session. Learn more about the miner logic [here](/product/capabilities/lineage/troubleshooting/troubleshooting-lineage#miner-logic).

Run the miner[â](#run-the-miner "Direct link to Run the miner")
-----------------------------------------------------------------

To run the TeradataÂ miner, after completing the steps above:

* To run the miner once, immediately, at the bottom of the screen, click the **Run** button.
* To schedule the miner to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the miner has completed running, you will see lineage for Teradata assets that were created in Teradata between the start date and when the miner ran! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousCrawl Teradata](/apps/connectors/database/teradata/how-tos/crawl-teradata)[NextSet up on\-premises Teradata miner access](/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access)

Copyright Â© 2025 Atlan Pte. Ltd.

