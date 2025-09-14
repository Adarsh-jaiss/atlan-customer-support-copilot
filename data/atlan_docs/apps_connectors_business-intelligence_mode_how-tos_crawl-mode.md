# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/mode/how-tos/crawl-mode

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/mode/how-tos/crawl-mode
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/mode/how-tos/crawl-mode
meta-description: Once you have [configured the Mode user permissions](/apps/connectors/business-intelligence/mode/how-tos/set-up-mode), you can establish a connection between Atlan and Mode.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Mode user permissions](/apps/connectors/business-intelligence/mode/how-tos/set-up-mode), you can establish a connection between Atlan and Mode.
meta-og-locale: en
meta-og-title: Crawl Mode | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/mode/how-tos/crawl-mode
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Mode | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Mode
==========

[https://demo.arcade.software/jr34oHVVNctwAudfvpFl?embed](https://demo.arcade.software/jr34oHVVNctwAudfvpFl?embed)

Once you have [configured the Mode user permissions](/apps/connectors/business-intelligence/mode/how-tos/set-up-mode), you can establish a connection between Atlan and Mode.

To crawl metadata from Mode, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Mode as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Mode Assets** and click on **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Mode credentials:

1. For *Authentication*, *Basic* is the default selection.
2. For *API Key ID*, enter the [API key ID you copied for your API token](/apps/connectors/business-intelligence/mode/how-tos/set-up-mode).
3. For *API Secret*, enter the [API secret you copied for your API token](/apps/connectors/business-intelligence/mode/how-tos/set-up-mode).
4. For *Workspace*, enter the name of your Mode workspace as retrieved from the API or workspace URL.
5. For *Exclude all personal collections*, change to **Yes** to exclude your [personal collections](https://mode.com/help/articles/spaces/#personal-content) or keep the default selection *No* to include them.
6. Click the **Test Authentication** button to confirm connectivity to Mode using these details.
7. Once successful, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Mode connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. At the bottom of the screen, click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

dangerIf you're authenticating in Atlan using a [member API token](/apps/connectors/business-intelligence/mode/how-tos/set-up-mode), Atlan currently does not distinguish between collections you have access to and ones restricted at source. This is due to limitations with the Mode API. However, Atlan will only extract basic metadata for restricted collections and no underlying assets such as reports or queries.

Before running the Mode crawler, you can further configure it.

You can override the defaults for any of these options:

* To select the collections you want to exclude from crawling, click **Exclude Collections**. (This will default to no collections, if none are specified.)
* To select the collections you want to include in crawling, click **Include Collections**. (This will default to all collections, if none are specified.)
* To disable crawling archived reports and associated queries and charts from Mode, for *Crawl Archived Reports*, change to **No**.

**Did you know?**If a collection appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Mode crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/mode/references/preflight-checks-for-mode) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Mode](/apps/connectors/business-intelligence/mode/how-tos/set-up-mode)[NextWhat does Atlan crawl from Mode?](/apps/connectors/business-intelligence/mode/references/what-does-atlan-crawl-from-mode)

Copyright Â© 2025 Atlan Pte. Ltd.

