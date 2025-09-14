# Source URL
https://docs.atlan.com/apps/connectors/database/hive/how-tos/crawl-hive

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/hive/how-tos/crawl-hive
link-alternate: https://docs.atlan.com/apps/connectors/database/hive/how-tos/crawl-hive
meta-description: To crawl metadata from Hive, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from Hive, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl Hive | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/hive/how-tos/crawl-hive
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Hive | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Hive
==========

[https://demo.arcade.software/kVfHGSt5YY3WbRTHva6N?embed](https://demo.arcade.software/kVfHGSt5YY3WbRTHva6N?embed)

Once you have [configured the Hive permissions](/apps/connectors/database/hive/how-tos/set-up-hive), you can establish a connection between Atlan and Hive. (If you are also using a private network for Hive, you will need to [set that up first](/apps/connectors/database/hive/how-tos/set-up-a-private-network-link-to-hive), too.)

To crawl metadata from Hive, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Hive as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **Hive Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* InÂ**Offline** extraction, you need to first [extract metadata yourself and make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access).

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Hive credentials:

1. For *Host Name*, enter the host name (or [PrivateLink endpoint](/apps/connectors/database/hive/how-tos/set-up-a-private-network-link-to-hive)) for your Hive instance.
2. For *Port*, enter the port number for your Hive instance.
3. For *Username*, enter the username you created for that instance.
4. For *Password*, enter the password for the username.
5. For *Default Schema*, enter the default schema name for your Hive instance.
6. Click the **Test Authentication** button to confirm connectivity to Hive.
7. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan also supports the [offline extraction method](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) for fetching metadata from Hive. This method uses Atlan's metadata\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) yourself and then [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases).

To enter your bucket details:

1. ForÂ*Bucket name*, enter the name of your S3 bucket or Atlan's bucket.
2. ForÂ*Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `databases.json`, `columns-<database>.json`, and so on.
3. For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen clickÂ**Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Hive connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Hive crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the Hive assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To select the Hive assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Hive crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/database/hive/references/preflight-checks-for-hive) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Did you know?**Once you have crawled assets from Hive, you can run the *Hive Miner* to [mine query history through S3](/product/connections/how-tos/mine-queries-through-s3).

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up a private network link to Hive](/apps/connectors/database/hive/how-tos/set-up-a-private-network-link-to-hive)[NextWhat does Atlan crawl from Hive?](/apps/connectors/database/hive/references/what-does-atlan-crawl-from-hive)

Copyright Â© 2025 Atlan Pte. Ltd.

