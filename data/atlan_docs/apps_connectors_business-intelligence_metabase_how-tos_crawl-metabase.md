# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/metabase/how-tos/crawl-metabase

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/metabase/how-tos/crawl-metabase
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/metabase/how-tos/crawl-metabase
meta-description: Once you have [configured the Metabase user permissions](/apps/connectors/business-intelligence/metabase/how-tos/set-up-metabase), you can establish a connection between Atlan and Metabase.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Metabase user permissions](/apps/connectors/business-intelligence/metabase/how-tos/set-up-metabase), you can establish a connection between Atlan and Metabase.
meta-og-locale: en
meta-og-title: Crawl Metabase | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/metabase/how-tos/crawl-metabase
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Metabase | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Metabase
==============

[https://demo.arcade.software/SyUeVVXSDVCRC8ETMpHL?embed](https://demo.arcade.software/SyUeVVXSDVCRC8ETMpHL?embed)

Once you have [configured the Metabase user permissions](/apps/connectors/business-intelligence/metabase/how-tos/set-up-metabase), you can establish a connection between Atlan and Metabase.

To crawl metadata from Metabase, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Metabase as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Metabase Assets** and click on **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Metabase credentials:

1. For *Host Name*, enter the full URL for your Metabase instance, including the `https://`.
2. For *Port*, enter the port number of your Metabase instance.
3. For *Authentication*, enter the *Username* and *Password* you configured.
4. Click the **Test Authentication** button to confirm connectivity to Metabase using these details.
5. Once successful, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Metabase connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. At the bottom of the screen, click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Metabase crawler, you can further configure it.

You can override the defaults for any of the remaining options:

* Select collections you want to include in crawling in the *Include Collections* field. (This will default to all collections, if none are specified.)
* Select collections you want to exclude from crawling in the *Exclude Collections* field. (This will default to no collections, if none are specified.)

**Did you know?**If a collection appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

You can now run the Metabase crawler.

1. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/metabase/references/preflight-checks-for-metabase) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Metabase](/apps/connectors/business-intelligence/metabase/how-tos/set-up-metabase)[NextWhat does Atlan crawl from Metabase?](/apps/connectors/business-intelligence/metabase/references/what-does-atlan-crawl-from-metabase)

Copyright Â© 2025 Atlan Pte. Ltd.

