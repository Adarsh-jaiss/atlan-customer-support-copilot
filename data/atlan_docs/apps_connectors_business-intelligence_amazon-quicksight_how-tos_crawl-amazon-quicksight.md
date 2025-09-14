# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/how-tos/crawl-amazon-quicksight

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/how-tos/crawl-amazon-quicksight
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/how-tos/crawl-amazon-quicksight
meta-description: Once you have [configured the Amazon QuickSight permissions](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight),.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Amazon QuickSight permissions](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight),.
meta-og-locale: en
meta-og-title: Crawl Amazon QuickSight | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/how-tos/crawl-amazon-quicksight
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Amazon QuickSight | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Amazon QuickSight
=======================

Once you have [configured the Amazon QuickSight permissions](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight), you can establish a connection between Atlan and Amazon QuickSight.

To crawl metadata from Amazon QuickSight, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

[https://demo.arcade.software/sHSFbNF0uFEPHPj4I7xb?embed](https://demo.arcade.software/sHSFbNF0uFEPHPj4I7xb?embed)

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Amazon QuickSight as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **QuickSight Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Agent** extraction, Atlanâs secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Amazon QuickSight credentials:

1. For *Authentication,* *IAM User* is the default authentication method.
2. For *AWS Access Key*, enter the [AWS access key you downloaded](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight#configure-user-based-authentication).
3. For *AWS Secret Key*, enter the [AWS secret key you downloaded](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight#configure-user-based-authentication).
4. At the bottom, enter the *Region* and *AWS Account ID* of your Amazon QuickSight instance.
5. Click the **Test Authentication** button to confirm connectivity to Amazon QuickSight.
6. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from Amazon QuickSight. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the Amazon QuickSight data source by adding the secret keys for your secret store. For details on the required fields, refer to the [Direct extraction](#direct-extraction-method) section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Amazon QuickSight connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Amazon QuickSight crawler, you can further configure it.

On the *Metadata Filters* page, you can override the defaults for any of these options:

* For *Fetch all assets without folder*, click **Yes** to fetch assets not linked to any folders, including datasets, analyses, and dashboards, or click **No** to only fetch assets linked to folders.
* To select the folders you want to include in crawling, click **Include Folders**. (This will default to all folders, if none are specified.)
* To select the folders you want to exclude from crawling, click **Exclude Folders**. (This will default to no folders, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Amazon QuickSight crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/amazon-quicksight/references/preflight-checks-for-amazon-quicksight) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Amazon QuickSight](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/set-up-amazon-quicksight)[NextWhat does Atlan crawl from Amazon QuickSight?](/apps/connectors/business-intelligence/amazon-quicksight/references/what-does-atlan-crawl-from-amazon-quicksight)

Copyright Â© 2025 Atlan Pte. Ltd.

