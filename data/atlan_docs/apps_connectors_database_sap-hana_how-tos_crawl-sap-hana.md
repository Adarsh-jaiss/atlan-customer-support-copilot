# Source URL
https://docs.atlan.com/apps/connectors/database/sap-hana/how-tos/crawl-sap-hana

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/sap-hana/how-tos/crawl-sap-hana
link-alternate: https://docs.atlan.com/apps/connectors/database/sap-hana/how-tos/crawl-sap-hana
meta-description: Once you have [configured the SAP HANA permissions](/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana), you can establish a connection between Atlan and SAP HANA.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the SAP HANA permissions](/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana), you can establish a connection between Atlan and SAP HANA.
meta-og-locale: en
meta-og-title: Crawl SAP HANA | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/sap-hana/how-tos/crawl-sap-hana
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl SAP HANA | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl SAP HANA
==============

[https://demo.arcade.software/FXDdzFFEtKJoaztWvlSk?embed](https://demo.arcade.software/FXDdzFFEtKJoaztWvlSk?embed)

Once you have [configured the SAP HANA permissions](/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana), you can establish a connection between Atlan and SAP HANA.

To crawl metadata from SAP HANA, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select SAP HANA as your source:

1. In the top right of any screen in Atlan, navigate to **New** and then click **New workflow**.
2. From the *Marketplace* page, click **SAP HANA Assets**.Â
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Offline** extraction, you will need to first [extract metadata yourself](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) and [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases).

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your SAP HANA credentials:

1. For *Host*, enter the host name for your SAP HANA instance.
2. For *Port*, enter the port number for your SAP HANA instance.
3. For *Username*, enter the username you created for the instance.
4. For *Password*, enter the password for the username.
5. Click the **Test Authentication** button to confirm connectivity to SAP HANA.
6. Once authentication is successful, navigate to the bottom of the screen and then click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan supports the [offline extraction method](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) for fetching metadata from SAP HANA. This method uses Atlan's metadata\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases) yourself and then [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket or Atlan's bucket.
2. ForÂ*Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `databases.json`, `columns-<database>.json`, and so on.
3. For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the SAP HANA connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the SAP HANA crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the SAP HANA assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To select the SAP HANA assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the SAP HANA crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/database/sap-hana/references/preflight-checks-for-sap-hana) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run**Â button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run**Â button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up SAP HANA](/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana)[NextWhat does Atlan crawl from SAP HANA?](/apps/connectors/database/sap-hana/references/what-does-atlan-crawl-from-sap-hana)

Copyright Â© 2025 Atlan Pte. Ltd.

