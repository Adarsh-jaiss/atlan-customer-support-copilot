# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/sigma/how-tos/crawl-sigma

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/how-tos/crawl-sigma
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/how-tos/crawl-sigma
meta-description: Once you have [configured the Sigma permissions](/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma), you can establish a connection between Atlan and Sigma.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Sigma permissions](/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma), you can establish a connection between Atlan and Sigma.
meta-og-locale: en
meta-og-title: Crawl Sigma | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/how-tos/crawl-sigma
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Sigma | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Sigma
===========

[https://demo.arcade.software/RtkHLsPyPEpSusT9H8tr?embed](https://demo.arcade.software/RtkHLsPyPEpSusT9H8tr?embed)

Once you have [configured the Sigma permissions](/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma), you can establish a connection between Atlan and Sigma.

To crawl metadata from Sigma, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Sigma as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **Sigma Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

To enter your Sigma credentials:

1. For *Endpoint*, from the dropdown, select your [organization's cloud](/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma).
2. For *Authentication*, *API Token* is the default method.
3. For *Client ID*, enter the client ID associated with your [API token](/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma#create-an-api-token-and-client-id).
4. For *API Token*, enter the API token that you created.
5. Click the **Test Authentication** button to confirm connectivity to Sigma.
6. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Sigma connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Sigma crawler, you can further configure it.

On the *Metadata Filters* page, you can override the defaults for any of these options:

* To select the Sigma workbooks you want to include in crawling, click **Include Workbooks**. (This will default to all workbooks, if none are specified.)
* To select the Sigma workbooks you want to exclude from crawling, click **Exclude Workbooks**. (This will default to no workbooks if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Sigma crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/sigma/references/preflight-checks-for-sigma) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Sigma](/apps/connectors/business-intelligence/sigma/how-tos/set-up-sigma)[NextWhat does Atlan crawl from Sigma?](/apps/connectors/business-intelligence/sigma/references/what-does-atlan-crawl-from-sigma)

Copyright Â© 2025 Atlan Pte. Ltd.

