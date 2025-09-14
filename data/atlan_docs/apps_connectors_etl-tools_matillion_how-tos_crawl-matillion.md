# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/matillion/how-tos/crawl-matillion

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/matillion/how-tos/crawl-matillion
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/matillion/how-tos/crawl-matillion
meta-description: Once you have [configured the Matillion user permissions](/apps/connectors/etl-tools/matillion/how-tos/set-up-matillion), you can establish a connection between Atlan and Matillion.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Matillion user permissions](/apps/connectors/etl-tools/matillion/how-tos/set-up-matillion), you can establish a connection between Atlan and Matillion.
meta-og-locale: en
meta-og-title: Crawl Matillion | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/matillion/how-tos/crawl-matillion
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Matillion | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Matillion
===============

Once you have [configured the Matillion user permissions](/apps/connectors/etl-tools/matillion/how-tos/set-up-matillion), you can establish a connection between Atlan and Matillion.

To crawl metadata from Matillion, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

[https://demo.arcade.software/SNeAQUvk2TG6DHywSU9Z?embed](https://demo.arcade.software/SNeAQUvk2TG6DHywSU9Z?embed)

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Matillion as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **Matillion Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

To enter your Matillion credentials:

1. For *Extraction method*, *Direct* is the default selection.
2. For *Hostname*, enter the host name of your Matillion instance.
3. For *Authentication*, *Basic Authentication* is the default method.
4. For *Username*, enter the [username you created in Matillion](/apps/connectors/etl-tools/matillion/how-tos/set-up-matillion#create-user).
5. For *Password*, enter the [password you created for the username](/apps/connectors/etl-tools/matillion/how-tos/set-up-matillion#create-user).
6. For *SSL*, keep **Enabled** to connect via a Secure Sockets Layer (SSL) channel or click **Disabled**.
7. Click the **Test Authentication** button to confirm connectivity to Matillion.
8. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Matillion connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*. If you don't specify any user or group, no one can manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Matillion crawler, you can further configure it.

On the *Metadata Filters* page, you can override the defaults for any of these options. If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

* To select the assets you want to include in crawling, click **Include Projects**. (This defaults to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Projects**. (This defaults to no assets, if none specified.)
* For *Enable Lineage*, keep the default option **Yes** to crawl lineage or click **No** to disable it. End\-to\-end lineage is currently not supported for Matillion version 1\.68 LTS due to limitations of the Matillion APIs \- only lineage for asset transformations is supported at present.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Matillion crawler, after completing the previous steps:

* To run the crawler once, immediately, at the bottom of the screen, click the **Run** button.
* To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the crawler has completed running, you can see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Matillion](/apps/connectors/etl-tools/matillion/how-tos/set-up-matillion)[NextWhat does Atlan crawl from Matillion?](/apps/connectors/etl-tools/matillion/references/what-does-atlan-crawl-from-matillion)

Copyright Â© 2025 Atlan Pte. Ltd.

