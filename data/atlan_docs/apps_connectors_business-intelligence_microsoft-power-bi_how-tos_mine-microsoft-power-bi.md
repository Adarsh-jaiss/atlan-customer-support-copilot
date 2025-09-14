# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/mine-microsoft-power-bi

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/mine-microsoft-power-bi
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/mine-microsoft-power-bi
meta-description: Once you have crawled assets from Microsoft Power BI, you can mine its activity events to generate usage metrics.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have crawled assets from Microsoft Power BI, you can mine its activity events to generate usage metrics.
meta-og-locale: en
meta-og-title: Mine Microsoft Power BI | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/mine-microsoft-power-bi
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Mine Microsoft Power BI | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Mine Microsoft Power BI
=======================

Once you have [crawled assets from Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi), you can mine its activity events to generate [usage metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics).

[https://demo.arcade.software/ZTE8jAXeEwQDe0eAHEhF?embed](https://demo.arcade.software/ZTE8jAXeEwQDe0eAHEhF?embed)

To mine activity events from Microsoft Power BI, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the miner[â](#select-the-miner "Direct link to Select the miner")
--------------------------------------------------------------------------

To select the Microsoft Power BI miner:

1. In the top right of any screen, navigate toÂ**New** and then clickÂ**New Workflow**.
2. From the filters along the top, click **Miner**.
3. From the list of packages, select **Power BI Miner** and then click **Setup Workflow**.

Configure the miner[â](#configure-the-miner "Direct link to Configure the miner")
-----------------------------------------------------------------------------------

To configure the Microsoft Power BI miner:

1. For *Connection*, select the connection to mine. (To select a connection, [the crawler](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi) must have already run.)
2. (Optional) For *Advanced Config*, keep *Default* for the default configuration or click **Advanced** to configure the miner:
    1. For *Start time*, choose the earliest date from which to mine activity events.
    2. For *Excluded Users*, type the names of users to be excluded while calculating [usage metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for Microsoft Power BI assets. Press `enter` after each name to add more names.

Run the miner[â](#run-the-miner "Direct link to Run the miner")
-----------------------------------------------------------------

To run the Microsoft Power BI miner, after completing the steps above:

* To run the miner once immediately, at the bottom of the screen, click the **Run** button.
* To schedule the miner to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the miner has completed running, you can see usage metrics for Microsoft Power BI assets that were created in Microsoft Power BI between the start time and when the miner ran! ð

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi)[NextWhat does Atlan crawl from Microsoft Power BI?](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi)

Copyright Â© 2025 Atlan Pte. Ltd.

