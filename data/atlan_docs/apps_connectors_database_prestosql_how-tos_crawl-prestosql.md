# Source URL
https://docs.atlan.com/apps/connectors/database/prestosql/how-tos/crawl-prestosql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/prestosql/how-tos/crawl-prestosql
link-alternate: https://docs.atlan.com/apps/connectors/database/prestosql/how-tos/crawl-prestosql
meta-description: Once you have configured the [PrestoSQL user permissions](/apps/connectors/database/prestosql/how-tos/set-up-prestosql), you can establish a connection between Atlan and PrestoSQL.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have configured the [PrestoSQL user permissions](/apps/connectors/database/prestosql/how-tos/set-up-prestosql), you can establish a connection between Atlan and PrestoSQL.
meta-og-locale: en
meta-og-title: Crawl PrestoSQL | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/prestosql/how-tos/crawl-prestosql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl PrestoSQL | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl PrestoSQL
===============

[https://demo.arcade.software/RI3ES72JQ9AxjHe29DUi?embed](https://demo.arcade.software/RI3ES72JQ9AxjHe29DUi?embed)

Once you have configured the [PrestoSQL user permissions](/apps/connectors/database/prestosql/how-tos/set-up-prestosql), you can establish a connection between Atlan and PrestoSQL.

**Did you know?**Atlan currently only supports PrestoSQL until version 349\. PrestoDB is not supported at present.

To crawl metadata from PrestoSQL, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select PrestoSQL as your source:

1. In the top right of any screen, navigate toÂ**New** and then clickÂ**New Workflow**.
2. From the list of packages, select **PrestoSQLÂ Assets** and click onÂ**Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your PrestoSQL credentials:

1. ForÂ*Host* enter the host for your PrestoSQL instance.
2. ForÂ*Port* enter the port of your PrestoSQL instance.
3. ForÂ*Username* enter the [name of the user you created](/apps/connectors/database/prestosql/how-tos/set-up-prestosql).
4. ForÂ*Password* enter the [password for the user you created](/apps/connectors/database/prestosql/how-tos/set-up-prestosql).
5. ClickÂ**Test Authentication** to confirm connectivity to PrestoSQL using these details.
6. When successful, at the bottom of the screen clickÂ**Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the PrestoSQL connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. At the bottom of the screen, click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the PrestoSQL crawler, you can further configure it.

You can override the defaults for any of these options:

* To select the PrestoSQL assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To select the PrestoSQL assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To enable or disable schema\-level filtering at source, click **Enable Source Level Filtering** and select the relevant option.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the PrestoSQL crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/database/prestosql/references/preflight-checks-for-prestosql) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up PrestoSQL](/apps/connectors/database/prestosql/how-tos/set-up-prestosql)[NextWhat does Atlan crawl from PrestoSQL?](/apps/connectors/database/prestosql/references/what-does-atlan-crawl-from-prestosql)

Copyright Â© 2025 Atlan Pte. Ltd.

