# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot
meta-description: Once you have [configured the ThoughtSpot permissions](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot), you can establish a connection between Atlan and ThoughtSpot.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the ThoughtSpot permissions](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot), you can establish a connection between Atlan and ThoughtSpot.
meta-og-locale: en
meta-og-title: Crawl ThoughtSpot | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl ThoughtSpot | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl ThoughtSpot
=================

Once you have [configured the ThoughtSpot permissions](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot), you can establish a connection between Atlan and ThoughtSpot.

[https://demo.arcade.software/4Yc3PqMa8NH685xQPEy6?embed](https://demo.arcade.software/4Yc3PqMa8NH685xQPEy6?embed)

To crawl metadata from ThoughtSpot, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select ThoughtSpot as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **ThoughtSpot Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Offline** extraction, you will need to first [extract metadata yourself and make it available in S3](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-on-premises-thoughtspot-access).
* In **Agent** extraction, Atlanâs secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your ThoughtSpot credentials:

1. For *Extraction method*, **Direct** is the default selection.
2. For *Hostname*, enter the hostname of your ThoughtSpot cloud instance in the following format \- `<company_name>.thoughtspot.cloud`.
3. For *Authentication*, select the method you configured when [setting up the ThoughtSpot access permissions](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot):
    * For *Basic *Authentication**, enter the [username and password you created](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot#basic-authentication).
    * For *Trusted Authentication*, enter the username of your ThoughtSpot instance and the [secret key you created](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot#trusted-authentication).
4. Click the **Test Authentication** button to confirm connectivity to ThoughtSpot.
5. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan supports the [offline extraction method](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-on-premises-thoughtspot-access) for fetching metadata from ThoughtSpot. This method uses Atlan's thoughtspot\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-on-premises-thoughtspot-access) yourself and then [make it available in S3](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-on-premises-thoughtspot).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket.
2. For *Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `output/thoughtspot-example/filter/answers/result-0.json`, `output/thoughtspot-example/filter/liveboards/result-0.json`, `output/thoughtspot-example/filter/answer-sql-queries/result-0.json`, and so on.
3. For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen, click **Next**.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from ThoughtSpot. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the ThoughtSpot data source by adding the secret keys for your secret store. For details on the required fields, refer to the [Direct extraction](#direct-extraction-method) section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the ThoughtSpot connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the ThoughtSpot crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the assets you want to include in crawling, click **Include tags**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude tags**. (This will default to no assets, if none specified.)
* For *Assets without tags*, keep the default option **Yes** to skip crawling assets without [tags](https://docs.thoughtspot.com/seekwell/latest/tags-and-search)Â or click **No** to enable crawling them.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the ThoughtSpot crawler, after completing the steps above:

1. To check for any permissions or other configuration issues before running the crawler, click **Preflight checks** \- currently only supported for [offline extraction method](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot#offline-extraction-method).
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up on\-premises ThoughtSpot access](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-on-premises-thoughtspot-access)[NextCrawl on\-premises ThoughtSpot](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-on-premises-thoughtspot)

Copyright Â© 2025 Atlan Pte. Ltd.

