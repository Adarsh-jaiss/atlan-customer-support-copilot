# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/crawl-microsoft-azure-data-factory

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/crawl-microsoft-azure-data-factory
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/crawl-microsoft-azure-data-factory
meta-description: Once you have [configured the Microsoft Azure Data Factory permissions](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Microsoft Azure Data Factory permissions](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-.
meta-og-locale: en
meta-og-title: Crawl Microsoft Azure Data Factory | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/crawl-microsoft-azure-data-factory
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Microsoft Azure Data Factory | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Microsoft Azure Data Factory
==================================

Once you have [configured the Microsoft Azure Data Factory permissions](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory), you can establish a connection between Atlan and Microsoft Azure Data Factory.

To crawl metadata from Microsoft Azure Data Factor

[https://demo.arcade.software/dvWFSr2DJmQCa1U4UVbK?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/dvWFSr2DJmQCa1U4UVbK?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

y, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Microsoft Azure Data Factory as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New workflow**.
2. From the *Marketplace* page, click **Azure Data Factory Assets**.
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Microsoft Azure Data Factory credentials:

1. For *Extraction method*, *Direct* is the default selection.
2. For *Authentication*, *Service Principal* is the default selection.
3. For *Client ID*, enter the [application (client) ID you copied](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory) for the service principal.
4. For *Client Secret*, enter the [client secret you copied](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory) for the service principal.
5. For *Tenant ID*,Â enter the [directory (tenant) ID you copied](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory) for the service principal.
6. Click the **Test Authentication** button to confirm connectivity to Microsoft Azure Data Factory.
7. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Microsoft Azure Data Factory connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Microsoft Azure Data Factory crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/etl-tools/microsoft-azure-data-factory/references/preflight-checks-for-microsoft-azure-data-factory) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Microsoft Azure Data Factory](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory)[NextWhat does Atlan crawl from Microsoft Azure Data Factory?](/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-does-atlan-crawl-from-microsoft-azure-data-factory)

Copyright Â© 2025 Atlan Pte. Ltd.

