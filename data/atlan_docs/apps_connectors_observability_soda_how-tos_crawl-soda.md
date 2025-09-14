# Source URL
https://docs.atlan.com/apps/connectors/observability/soda/how-tos/crawl-soda

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/observability/soda/how-tos/crawl-soda
link-alternate: https://docs.atlan.com/apps/connectors/observability/soda/how-tos/crawl-soda
meta-description: Once you have [configured the Soda permissions](/apps/connectors/observability/soda/how-tos/set-up-soda), you can establish a connection between Atlan and Soda.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Soda permissions](/apps/connectors/observability/soda/how-tos/set-up-soda), you can establish a connection between Atlan and Soda.
meta-og-locale: en
meta-og-title: Crawl Soda | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/observability/soda/how-tos/crawl-soda
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Soda | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Soda
==========

Once you have [configured the Soda permissions](/apps/connectors/observability/soda/how-tos/set-up-soda), you can establish a connection between Atlan and Soda.

[https://demo.arcade.software/oyNNYsNX9YobmbNP3Yco?embed](https://demo.arcade.software/oyNNYsNX9YobmbNP3Yco?embed)

To crawl metadata from Soda, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Soda as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New workflow**.
2. From the *Marketplace* page, click **Soda**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

To enter your Soda credentials:

1. For *Host Name*, enter the hostname or base URL of your Soda instance to connect to the Soda APIs \- for example, [cloud.soda.io](https://cloud.soda.io), [cloud.us.soda.io](https://cloud.us.soda.io), or [demo.soda.io](https://demo.soda.io).
2. For *Authentication*, *API Key Authentication* is the default selection.
3. For *API Key ID*, enter the [API key ID you copied](/apps/connectors/observability/soda/how-tos/set-up-soda).
4. For *API Secret*, enter the [API secret you copied](/apps/connectors/observability/soda/how-tos/set-up-soda).
5. Click the **Test Authentication** button to confirm connectivity to Soda.
6. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Soda connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Soda crawler, you can further configure it.

1. On the *Metadata* page, you can override the defaults for any of these options:

* To select the assets you want to include in crawling, click the **Include filter**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click the **Exclude filter**. (This will default to no assets, if none specified.)

2. (Optional) For *Advanced Config*, keep *Default* for the default configuration or click **Custom** to configure the enrichment:
    * To map Soda metadata enrichment to assets from specific connections only, for *Include Connections*, specify the connections in Atlan, or leave it blank to include all connections. If you have specified any connections, Atlan will map [Soda checks](/apps/connectors/observability/soda/references/what-does-atlan-crawl-from-soda) only to the assets included in those connections.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Soda crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/observability/soda/references/preflight-checks-for-soda) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.
    Once the crawler has completed running, you will see the assets on Atlan's asset page! ð
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Soda](/apps/connectors/observability/soda/how-tos/set-up-soda)[NextWhat does Atlan crawl from Soda?](/apps/connectors/observability/soda/references/what-does-atlan-crawl-from-soda)

Copyright Â© 2025 Atlan Pte. Ltd.

