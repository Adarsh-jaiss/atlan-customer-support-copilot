# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau
meta-description: To crawl metadata from Tableau, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from Tableau, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl Tableau | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Tableau | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Tableau
=============

Once you have [configured Tableau](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau), you can establish a connection between Atlan and Tableau. (If you are also using a private network for Tableau, you will need to [set that up first](/apps/connectors/business-intelligence/tableau/how-tos/set-up-a-private-network-link-to-tableau-server), too.)

[https://demo.arcade.software/xdD7DaiTw2S0mmXQdhc7?embed](https://demo.arcade.software/xdD7DaiTw2S0mmXQdhc7?embed)

To crawl metadata from Tableau, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Tableau as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Tableau Assets** and click on **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

* InÂ**Direct** extraction, Atlan connects to Tableau and crawls metadata directly.
* InÂ**Offline** extraction, you need to first [extract metadata yourself and make it available in S3](/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access).
* In **Agent** extraction, Atlanâs secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Tableau credentials:

1. For *Host Name*, enter the host name of your Tableau Online or Tableau Server instance (or the [private DNS name if your Tableau Server instance uses an SSL certificate](/apps/connectors/business-intelligence/tableau/how-tos/set-up-a-private-network-link-to-tableau-server)).
2. For *Port*, enter the port number of your Tableau instance.
3. For *Authentication*, choose how you would like to connect to Tableau:

    * For **Basic** authentication, enter the *Username* and *Password* you use to log in to Tableau.
        * For **Personal Access Token** authentication, enter the *Personal Access Token Name* and *Personal Access Token Value* [you generated](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau)\_Create\_a\_personal\_access\_token).
        * For **JWT Bearer** authentication, enter your Tableau Server username or Tableau Online email address for *Username*, and the *Client ID*, *Secret ID*, and *Secret Value* [you copied from the connected app](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau) in Tableau.
4. (Optional) For *SSL*, keep the default *Enabled* to use HTTPS or click **Disabled** to use HTTP.
5. For *Site*, enter the name of the site you want to crawl. (If left blank, the default site will be used.)

    danger If you are using Tableau Online, the site is required for Atlan to authenticate properly.
6. (Optional) For *SSL certificate*, this is only required if [your Tableau Server instance uses a self\-signed or an internal CA SSL certificate](/apps/connectors/business-intelligence/tableau/how-tos/set-up-a-private-network-link-to-tableau-server), paste a [supported SSL certificate in the recommended format](/product/connections/how-tos/provide-ssl-certificates).
7. At the bottom of the form, click the **Test Authentication** button to confirm connectivity to Tableau using these details.
8. When successful, at the bottom of the screen click the **Next** button.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan also supports the [offline extraction method](/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access) for fetching metadata from Tableau. This method uses Atlan's tableau\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access) yourself and then [make it available in S3](/apps/connectors/business-intelligence/tableau/how-tos/crawl-on-premises-tableau).

To enter your S3 details:

1. ForÂ*Bucket name*, enter the name of your S3 bucket.
2. ForÂ*Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `dashboards/result-0.json`, `workbooks/result-0.json`, and so on.
3. (Optional) For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen, click **Next**.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from Tableau. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the Tableau data source by adding the secret keys for your secret store. For details on the required fields, refer to the [Direct extraction](#direct-extraction-method) section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Tableau connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Tableau crawler, you can further configure it.

1. On the *Metadata* page, you can override the defaults for any of these options:
    * To select the Tableau projects you want to include in crawling, click **Include Projects**. (This will default to all assets, if none are specified.)
    * To select the Tableau projects you want to exclude from crawling, click **Exclude Projects**. (This will default to no assets, if none are specified.)
    * To have the crawler ignore Tableau projects based on a naming convention, specify a regular expression in the *Exclude Projects Regex* field.
2. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/tableau/references/preflight-checks-for-tableau) before running the crawler, click **Preflight checks**.

**Did you know?**If a project appears in both the include and exclude filters, the exclude filter takes precedence. (The *Exclude Projects Regex* also takes precedence.)

Configure advanced controls[â](#configure-advanced-controls "Direct link to Configure advanced controls")
-----------------------------------------------------------------------------------------------------------

Before running the Tableau crawler, you can also configure advanced controls for the crawler.

On the *Advanced* page, you can override the defaults for any of these options:

* For *Alternate Host URL*, enter the protocol and host name to be used for viewing assets directly in Tableau.
* For *Crawl Unpublished Worksheets and Dashboards*, click **Yes** to enable crawling hidden worksheets and dashboards or **No** to skip crawling them.
* For *Hidden Datasource Fields*, click **Yes** to enable crawling hidden datasource fields or **No** to skip crawling them.
* Crawl embedded dashboards: Embedded dashboard here means linking or displaying a dashboard inside another dashboard by providing a link to the dashboard in a Web Page item of the embedding dashboard.
    + Click **Yes** to enable relationships between different embedded dashboards.
    + Click **No** to skip creating relationships between embedded dashboards.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Tableau crawler, after completing the steps above:

* You can either:
    + To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    + To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up a private network link to Tableau server](/apps/connectors/business-intelligence/tableau/how-tos/set-up-a-private-network-link-to-tableau-server)[NextCrawl on\-premises Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-on-premises-tableau)

Copyright Â© 2025 Atlan Pte. Ltd.

