# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/domo/how-tos/crawl-domo

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/domo/how-tos/crawl-domo
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/domo/how-tos/crawl-domo
meta-description: Once you have [configured the Domo permissions](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo), you can establish a connection between Atlan and Domo.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Domo permissions](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo), you can establish a connection between Atlan and Domo.
meta-og-locale: en
meta-og-title: Crawl Domo | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/domo/how-tos/crawl-domo
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Domo | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Domo
==========

Once you have [configured the Domo permissions](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo), you can establish a connection between Atlan and Domo.

To crawl metadata from Domo, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

[https://demo.arcade.software/QqmniGPa7Km95m4KlSWu?embed&show_copy_link=true](https://demo.arcade.software/QqmniGPa7Km95m4KlSWu?embed&show_copy_link=true)

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Domo as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New workflow**.
2. From the *Marketplace* page, click **Domo Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

To enter your Domo credentials:

1. For *Host Name*, enter the URL for your Domo instance.
2. For *Authentication*, *Basic* is the default selection.
3. For *Client ID*, enter the [client ID you copied](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo) from the Domo developer portal.
4. For *Client Secret*, enter the [client secret you copied](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo) from the Domo developer portal.
5. For *Access Token*, enter the [access token you copied](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo) from your Domo instance.
6. Click the **Test Authentication** button to confirm connectivity to Domo.
7. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Domo connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Domo crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the dashboards you want to include in crawling, click **Include dashboards**. (This will default to all assets, if none are specified.)
* To select the dashboards you want to exclude from crawling, click **Exclude dashboards**. (This will default to no assets, if none are specified.)
* For *DomoStats dataset ID to get cards metadata*, enter the dataset ID for the [dataset you created to import card metadata](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo) on the DomoStats connector.
* For *DomoStats dataset ID to get card\-dashboard relationship metadata*, enter the dataset ID for the [dataset you created to import card\-dashboard relationship metadata](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo) on the DomoStats connector.
* For *DomoStats dataset ID to get dataset\-card relationship metadata*, enter the dataset ID for the [dataset you created to import dataset\-card relationship metadata](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo) on the DomoStats connector.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Domo crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/domo/references/preflight-checks-for-domo) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Domo](/apps/connectors/business-intelligence/domo/how-tos/set-up-domo)[NextWhat does Atlan crawl from Domo?](/apps/connectors/business-intelligence/domo/references/what-does-atlan-crawl-from-domo)

Copyright Â© 2025 Atlan Pte. Ltd.

