# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics
meta-description: Once you have [configured the Microsoft Azure Synapse Analytics permissions](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics), you can establish a connection between Atlan and Microsoft Azure Synapse Analytics.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Microsoft Azure Synapse Analytics permissions](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics), you can establish a connection between Atlan and Microsoft Azure Synapse Analytics.
meta-og-locale: en
meta-og-title: Crawl Microsoft Azure Synapse Analytics | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Microsoft Azure Synapse Analytics | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Microsoft Azure Synapse Analytics
=======================================

Once you have [configured the Microsoft Azure Synapse Analytics permissions](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics), you can establish a connection between Atlan and Microsoft Azure Synapse Analytics.

To crawl metadata from Microsoft Azure Synapse Ana

[https://demo.arcade.software/97dagmf2o6UzPUHR6ZEh?embed](https://demo.arcade.software/97dagmf2o6UzPUHR6ZEh?embed)

lytics, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Microsoft Azure Synapse Analytics as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **Synapse Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

Choose your authentication method:

* In **Basic** authentication, you will need a [username](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#basic-authentication), [password](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#basic-authentication), and database name.
* In **Service principal** authentication, you will need a [client ID, client secret, tenant ID](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#register-app-with-microsoft-entra-id), and database name.

### Basic authentication[â](#basic-authentication "Direct link to Basic authentication")

To enter your Microsoft Azure Synapse Analytics credentials:

1. For *Host*, enter the [server name of your SQL pool](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#find-your-sql-pool-server).
2. For *Port*, enter the port number where your SQL pool is available.
3. For *Username*, enter the [username you created](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#create-a-user) when setting up user permissions.
4. For *Password*, enter the [password you created](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#create-a-login) when setting up user permissions.
5. For *Database*, enter the name of the database you want to crawl.
6. Click the **Test Authentication** button to confirm connectivity to Microsoft Azure Synapse Analytics.
7. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### Service principal authentication[â](#service-principal-authentication "Direct link to Service principal authentication")

**Did you know?**For service principal authentication, Atlan fetches Synapse pipeline metadata from the [Azure Synapse Analytics REST API](https://learn.microsoft.com/en-us/rest/api/synapse/) to generate lineage. Refer to [What lineage does Atlan extract from Microsoft Azure Synapse Analytics?](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-lineage-does-atlan-extract-from-microsoft-azure-synapse-analytics) to learn more.

To enter your Microsoft Azure Synapse Analytics credentials:

1. For *Host*, enter the [server name of your SQL pool](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#find-your-sql-pool-server).
2. For *Port*, enter the port number where your SQL pool is available.
3. For *Client ID*, enter the [application (client) ID you copied](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#register-app-with-microsoft-entra-id) for your service principal.
4. For *Client Secret*, enter the [client secret you copied](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#register-app-with-microsoft-entra-id) for your service principal.
5. For *Tenant ID*, enter the [directory (tenant) ID you copied](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#register-app-with-microsoft-entra-id) for your service principal.
6. For *Database*, enter the name of the database you want to crawl.
7. Click the **Test Authentication** button to confirm connectivity to Microsoft Azure Synapse Analytics.
8. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Microsoft Azure Synapse Analytics connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Microsoft Azure Synapse Analytics crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To select the assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To have the crawler ignore tables and views based on a naming convention, specify a regular expression in the *Exclude regex for tables \& views* field.
* For *Advanced Config*, keep *Default* for the default configuration or click **Custom** to configure the crawler:
    + For *Use JDBC Internal Methods*, click **True** to enable JDBC internal methods for data extraction or click **False** to disable it.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Microsoft Azure Synapse Analytics crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/preflight-checks-for-microsoft-azure-synapse-analytics) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up on\-premises Microsoft Azure Synapse Analytics miner access](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-on-premises-microsoft-azure-synapse-analytics-miner-access)[NextWhat does Atlan crawl from Microsoft Azure Synapse Analytics?](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-does-atlan-crawl-from-microsoft-azure-synapse-analytics)

Copyright Â© 2025 Atlan Pte. Ltd.

