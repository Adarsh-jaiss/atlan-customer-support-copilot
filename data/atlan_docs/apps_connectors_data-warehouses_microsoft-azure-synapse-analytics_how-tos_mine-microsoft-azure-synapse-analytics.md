# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/mine-microsoft-azure-synapse-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/mine-microsoft-azure-synapse-analytics
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/mine-microsoft-azure-synapse-analytics
meta-description: Learn about mine microsoft azure synapse analytics.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about mine microsoft azure synapse analytics.
meta-og-locale: en
meta-og-title: Mine Microsoft Azure Synapse Analytics | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/mine-microsoft-azure-synapse-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Mine Microsoft Azure Synapse Analytics | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Mine Microsoft Azure Synapse Analytics
======================================

dangerAtlan currently only supports mining query history for dedicated SQL pools with the Microsoft Azure Synapse Analytics miner. Mining query history for serverless SQL pools is currently not supported.

Once you have [crawled assets from Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics), you can mine query history to construct lineage.

To mine lineage from Microsoft Azure Synapse Analy

[https://demo.arcade.software/DbBhnwqbNWAzqCA9aGJi?embed&show_copy_link=true](https://demo.arcade.software/DbBhnwqbNWAzqCA9aGJi?embed&show_copy_link=true)

tics, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the miner[â](#select-the-miner "Direct link to Select the miner")
--------------------------------------------------------------------------

To select the Microsoft Azure Synapse Analytics miner:

1. In the top right of any screen, navigate to **\+ New** and then click **New workflow**.
2. Under *Marketplace*, from the filters along the top, click **Miner**.
3. From the list of packages, select **Synapse Miner** and then click **Setup Workflow**.

Configure the miner[â](#configure-the-miner "Direct link to Configure the miner")
-----------------------------------------------------------------------------------

To configure the Microsoft Azure Synapse Analytics miner:

1. For *Connection*, select the connection to mine. (To select a connection, [the crawler must have already run](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics).)
2. For *Miner Extraction Method*, choose your extraction method:
    * In **Query History**, Atlan connects to your database and [mines query history](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#mine-query-history) directly.
    * In **Offline**, you will need to first [mine query history yourself](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-on-premises-microsoft-azure-synapse-analytics-miner-access) and [make it available in S3](/product/connections/how-tos/mine-queries-through-s3).

Run the miner[â](#run-the-miner "Direct link to Run the miner")
-----------------------------------------------------------------

To run the Microsoft Azure Synapse Analytics miner, after completing the steps above:

* To run the miner once, immediately, at the bottom of the screen, click the **Run** button.
* To schedule the miner to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the miner has completed running, you will see lineage for Microsoft Azure Synapse Analytics assets that were created in Microsoft Azure Synapse Analytics! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics)[NextSet up on\-premises Microsoft Azure Synapse Analytics miner access](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-on-premises-microsoft-azure-synapse-analytics-miner-access)

Copyright Â© 2025 Atlan Pte. Ltd.

