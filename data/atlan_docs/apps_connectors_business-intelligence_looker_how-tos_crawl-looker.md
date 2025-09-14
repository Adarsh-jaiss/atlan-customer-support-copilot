# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/crawl-looker

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/crawl-looker
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/crawl-looker
meta-description: Once you have configured the [Looker user permissions](/apps/connectors/business-intelligence/looker/how-tos/set-up-looker), you can establish a connection between Atlan and Looker.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have configured the [Looker user permissions](/apps/connectors/business-intelligence/looker/how-tos/set-up-looker), you can establish a connection between Atlan and Looker.
meta-og-locale: en
meta-og-title: Crawl Looker | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/crawl-looker
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Looker | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Looker
============

Once you have configured the [Looker user permissions](/apps/connectors/business-intelligence/looker/how-tos/set-up-looker), you can establish a connection between Atlan and Looker.

[https://demo.arcade.software/IAB34M6a65mcEKfh9lnh?embed](https://demo.arcade.software/IAB34M6a65mcEKfh9lnh?embed)

To crawl metadata from Looker, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Looker as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Looker Assets** and click on **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to Looker and crawls metadata directly.
* In **Offline** extraction, you need to first [extract metadata yourself and make it available in S3](/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access).
* In **Agent** extraction, Atlanâs secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Looker credentials:

1. For *Host Name*, enter the full URL for your Looker API host, including the `https://`.
2. For *Port*, keep *443* for Looker instances created after July 7, 2020, or switch to *19999* for older instances.
3. For *Client ID*, enter the client ID you generated when [setting up user permissions](/apps/connectors/business-intelligence/looker/how-tos/set-up-looker).
4. For *Client Secret*, enter the client secret you generated when [setting up user permissions](/apps/connectors/business-intelligence/looker/how-tos/set-up-looker).
5. (Optional) For *Field Level Lineage*:
    1. For *Private SSH Key*, paste the [private SSH key for the key you configured in GitHub](/apps/connectors/business-intelligence/looker/how-tos/set-up-looker#ssh-key-for-lineage).
    2. For *Passphrase for the private key*, enter the passphrase that protects the key, if any. (If the key is not protected by a passphrase, leave this blank.)
    3. For *SSH Known Hosts*, add any value that needs to be hardcoded in the `~/.ssh/known-hosts` file before cloning your project Git repositories using SSH. (If not required, leave this blank.)
6. At the bottom of the form, click the **Test Authentication** button to confirm connectivity to Looker using these details.
7. When successful, at the bottom of the screen click the **Next** button.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan also supports the [offline extraction method](/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access) for fetching metadata from Looker. This method uses Atlan's looker\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access) yourself and then [make it available in S3](/apps/connectors/business-intelligence/looker/how-tos/crawl-on-premises-looker).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket or Atlan's bucket.
2. For *Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `projects.json`, `dashboards.json`, and so on.
3. For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen click **Next**.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from Looker. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the Looker data source by adding the secret keys for your secret store. For details on the required fields, refer to the [Direct extraction](#direct-extraction-method) section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Looker connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. At the bottom of the screen, click the **Next** button to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Looker crawler, you can further configure it. (These options are only available when using the [direct extraction method](#direct-extraction-method).)

You can override the defaults for any of these options:

* Looker folders contain saved content, such as [dashboards](/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker#for-dashboards), [looks](/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker#for-looks), and [tiles](/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker#for-tiles):
    + To select the Looker folders you want to include in crawling, click **Include Folders**. (This will default to all folders, if none are specified.)
    + To select the Looker folders you want to exclude from crawling, click **Exclude Folders**. (This will default to no folders, if none are specified.)
* Looker projects contain LookML files, such as [models](/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker#models-), [views](/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker#views-), and [explores](/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker#for-explores):
    + To select the Looker projects you want to include in crawling, click **Include Projects**. (This will default to all projects, if none are specified.)
    + To select the Looker projects you want to exclude from crawling, click **Exclude Projects**. (This will default to no projects, if none are specified.)
* For *Use Field Level Lineage*, click **True** to enable crawling field\-level lineage for Looker or click **False** to disable it.

**Did you know?**If a folder or project appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Looker crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/looker/references/preflight-checks-for-looker) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up on\-premises Looker access](/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access)[NextCrawl on\-premises Looker](/apps/connectors/business-intelligence/looker/how-tos/crawl-on-premises-looker)

Copyright Â© 2025 Atlan Pte. Ltd.

