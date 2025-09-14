# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-ibm-cognos-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-ibm-cognos-analytics
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-ibm-cognos-analytics
meta-description: Once you have [configured the IBM Cognos Analytics permissions](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics), you can establish a connection between Atlan and IBM Cognos Analytics.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the IBM Cognos Analytics permissions](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics), you can establish a connection between Atlan and IBM Cognos Analytics.
meta-og-locale: en
meta-og-title: Crawl IBM Cognos Analytics | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-ibm-cognos-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl IBM Cognos Analytics | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl IBM Cognos Analytics
==========================

Once you have [configured the IBM Cognos Analytics permissions](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics), you can establish a connection between Atlan and IBM Cognos Analytics.

To crawl metadata from IBM Cognos Analytics, revie

[https://demo.arcade.software/0jx7HeIuurqghPBFFb4O?embed&show_copy_link=true](https://demo.arcade.software/0jx7HeIuurqghPBFFb4O?embed&show_copy_link=true)

w the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select IBM Cognos Analytics as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **IBM Cognos Analytics Assets**.Â
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Offline** extraction, you will need to first [extract metadata](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access) yourself and [make it available in S3](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-on-premises-ibm-cognos-analytics).

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your IBM Cognos Analytics credentials:

1. For *Host Name*, enter the hostname of your IBM Cognos Analytics instance.
2. For *Port*, enter the port number of your IBM Cognos Analytics instance.
3. For *Authentication*, select the method you configured when [setting up the IBM Cognos Analytics access permissions](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics):
    * For **Basic**, enter the [*Username* and *Password*](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics) you configured for the new user.
    * For **API Key**, enter the [*Username*](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics) and [*API Key*](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics) you configured for the new user.
    * For **OKTA**, enter the [*Username* and *Password*](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics#optional-create-user-in-okta) you configured for the new user in OKTA.
4. For *Namespace*, enter the [name of the namespace where you created the new user](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics).
5. Click the **Test Authentication** button to confirm connectivity to IBM Cognos Analytics.
6. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan supports the [offline extraction method](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access) for fetching metadata from IBM Cognos Analytics. This method uses Atlan's cognos\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access) yourself and then [make it available in S3](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-on-premises-ibm-cognos-analytics).

To enter your bucket details:

1. For *Bucket name*, enter the name of your S3 bucket.
2. For *Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `output/cognos-example/contents/0/result-0.json`, `output/cognos-example/contents-details/0/result-0.json`, and so on.
3. (Optional) For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the IBM Cognos Analytics connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you don't specify any user or group, no one can manage the connection\-not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the IBM Cognos Analytics crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the assets you want to include in crawling, click **Include Folders**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Folders**. (This will default to no assets, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the IBM Cognos Analytics crawler, after completing the steps above:

* To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
* To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up on\-premises IBM Cognos Analytics access](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access)[NextCrawl on\-premises IBM Cognos Analytics](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-on-premises-ibm-cognos-analytics)

Copyright Â© 2025 Atlan Pte. Ltd.

