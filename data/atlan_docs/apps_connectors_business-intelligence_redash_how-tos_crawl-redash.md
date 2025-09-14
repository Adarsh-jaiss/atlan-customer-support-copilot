# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/redash/how-tos/crawl-redash

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/redash/how-tos/crawl-redash
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/redash/how-tos/crawl-redash
meta-description: Once you have [configured the Redash permissions](/apps/connectors/business-intelligence/redash/how-tos/set-up-redash), you can establish a connection between Atlan and Redash.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Redash permissions](/apps/connectors/business-intelligence/redash/how-tos/set-up-redash), you can establish a connection between Atlan and Redash.
meta-og-locale: en
meta-og-title: Crawl Redash | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/redash/how-tos/crawl-redash
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Redash | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Redash
============

[https://demo.arcade.software/PVILkp2nCNuMnFSXwYYs?embed](https://demo.arcade.software/PVILkp2nCNuMnFSXwYYs?embed)

Once you have [configured the Redash permissions](/apps/connectors/business-intelligence/redash/how-tos/set-up-redash), you can establish a connection between Atlan and Redash.

To crawl metadata from Redash, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Redash as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **Redash Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

To enter your Redash credentials:

1. For *Host Name*, enter the URL for your Redash instance.
2. For *Authentication*, *API Key* is the default selection.
3. For *API Key*, enter the [API key you copied](/apps/connectors/business-intelligence/redash/how-tos/set-up-redash#configure-new-user) from your Redash instance.
4. Click the **Test Authentication** button to confirm connectivity to Redash.
5. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Redash connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Redash crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the queries with tags you want to include in crawling, click **Include queries with tags**. (This will default to all assets, if none are specified.)
* To select the queries with tags you want to exclude from crawling, click **Exclude queries with tags**. (This will default to no assets, if none are specified.)
* To select the dashboards with tags you want to include in crawling, click **Include dashboards with tags**. (This will default to all assets, if none are specified.)
* To select the dashboards with tags you want to exclude from crawling, click **Exclude dashboards with tags**. (This will default to no assets, if none are specified.)
* For *Advanced Config*, you can either keep **Default** to allow default options for asset inclusion or click **Custom** to further configure the crawler:
    + For *Include unpublished queries*, click **Yes** to enable crawling unpublished queries or **No** to skip crawling them.
    + For *Include queries without tags*, click **Yes** to enable crawling queries without tags or **No** to skip crawling them.
    + For *Include dashboards without tags*, click **Yes** to enable crawling dashboards without tags or **No** to skip crawling them.
    + For *Alternate Host URL*, enter the protocol and host name to be used for viewing your assets directly in Redash from Atlan. If added, the *View in Redash* option will redirect to the alternate host URL instead of the [host URL used to run the crawler](/apps/connectors/business-intelligence/redash/how-tos/crawl-redash).

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Redash crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/redash/references/preflight-checks-for-redash) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Redash](/apps/connectors/business-intelligence/redash/how-tos/set-up-redash)[NextWhat does Atlan crawl from Redash?](/apps/connectors/business-intelligence/redash/references/what-does-atlan-crawl-from-redash)

Copyright Â© 2025 Atlan Pte. Ltd.

