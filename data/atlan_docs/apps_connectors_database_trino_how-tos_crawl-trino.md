# Source URL
https://docs.atlan.com/apps/connectors/database/trino/how-tos/crawl-trino

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/trino/how-tos/crawl-trino
link-alternate: https://docs.atlan.com/apps/connectors/database/trino/how-tos/crawl-trino
meta-description: To crawl metadata from Trino, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from Trino, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl Trino | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/trino/how-tos/crawl-trino
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Trino | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Trino
===========

[https://demo.arcade.software/12d8J3sY7NQhlPvHNPaZ?embed](https://demo.arcade.software/12d8J3sY7NQhlPvHNPaZ?embed)

Once you have configured the [Trino user permissions](/apps/connectors/database/trino/how-tos/set-up-trino), you can establish a connection between Atlan and Trino. (If you are also using a private network for Trino, you will need to [set that up first](/apps/connectors/database/trino/how-tos/set-up-a-private-network-link-to-trino), too.)

To crawl metadata from Trino, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Trino as your source:

1. In the top right of any screen, navigate toÂ**New** and then clickÂ**New Workflow**.
2. From the list of packages, selectÂ**Trino Assets** and click onÂ**Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Trino credentials:

1. ForÂ*Host*, enter the hostname (or [PrivateLink endpoint](/apps/connectors/database/trino/how-tos/set-up-a-private-network-link-to-trino)) for your Trino instance.
2. ForÂ*Port*, enter the port of your Trino instance.
3. ForÂ*Username*, enter the [username you created](/apps/connectors/database/trino/how-tos/set-up-trino#create-user-in-trino).
4. ForÂ*Password*, enter the [password for the user you created](/apps/connectors/database/trino/how-tos/set-up-trino#create-user-in-trino).
5. For *Enable TLS/HTTPS*, change to **True** to only allow TLS or HTTPS connections or keep the default *False*.
6. For *Disable SSL verification*, change to **True** to disable SSL verification for self\-signed certificates or keep the default *False.*
7. Click **Test Authentication** to confirm connectivity to Trino using these details.
8. Once successful, at the bottom of the screen click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Trino connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. At the bottom of the screen, click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Trino crawler, you can further configure it.

You can override the defaults for any of these options:

* To select the Trino assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To select the Trino assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* For *Advanced Config*, keep *Default* for the default configuration or click **Custom** to configure the crawler:
    + For *Enable Source Level Filtering*, click **True** to enable schema\-level filtering at source or click **False**Â to disable it.
    + For *Use JDBC Internal Methods*, click **True** to enable JDBC internal methods for data extraction or click **False** to disable it.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Trino crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/database/trino/references/preflight-checks-for-trino) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Trino](/apps/connectors/database/trino/how-tos/set-up-trino)[NextSet up a private network link to Trino](/apps/connectors/database/trino/how-tos/set-up-a-private-network-link-to-trino)

Copyright Â© 2025 Atlan Pte. Ltd.

