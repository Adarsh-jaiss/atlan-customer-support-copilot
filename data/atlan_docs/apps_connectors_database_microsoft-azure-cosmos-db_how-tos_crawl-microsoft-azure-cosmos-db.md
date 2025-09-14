# Source URL
https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db
link-alternate: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db
meta-description: Once you have [configured the Microsoft Azure Cosmos DB permissions](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db), you can establish a connection between Atlan and Microsoft Azure Cosmos DB.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Microsoft Azure Cosmos DB permissions](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db), you can establish a connection between Atlan and Microsoft Azure Cosmos DB.
meta-og-locale: en
meta-og-title: Crawl Microsoft Azure Cosmos DB | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Microsoft Azure Cosmos DB | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Microsoft Azure Cosmos DB
===============================

Once you have [configured the Microsoft Azure Cosmos DB permissions](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db), you can establish a connection between Atlan and Microsoft Azure Cosmos DB.

To crawl metadata from Microsoft Azure Cosmos DB,

[https://demo.arcade.software/zbRHXsti84AX5ZSHruWu?embed&show_copy_link=true](https://demo.arcade.software/zbRHXsti84AX5ZSHruWu?embed&show_copy_link=true)

review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Microsoft Azure Cosmos DB as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New workflow**.
2. From the *Marketplace* page, click **Cosmos DB Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

Choose your deployment method:

* In **vCore**Â deployment, you will need the [primary connection string(s)](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) of your vCore\-based Microsoft Azure Cosmos DB account(s).
* In **RU** deployment, you will need the [client ID, client secret, and tenant ID](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) of the service principal you created for your RU\-based Microsoft Azure Cosmos DB account.
* In **vCore and RU** deployment,Â you will need the [primary connection string(s)](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) of your vCore\-based account(s) and [client ID, client secret, and tenant ID](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) of the service principal you created for yourÂ RU\-based account.

### vCore deployment[â](#vcore-deployment "Direct link to vCore deployment")

To enter your Microsoft Azure Cosmos DB credentials:

1. For *Database API*, *MongoDB* is the default selection.
2. For *Extraction method*, *Direct* is the default selection.
3. For *Select the deployment types to crawl*, click **vCore**.
4. For *Connection Strings*, enter the [primary connection string(s) you copied](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) from your Microsoft Azure Cosmos DB account(s).
5. Click the **Test Authentication** button to confirm connectivity to Microsoft Azure Cosmos DB.
6. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### RU deployment[â](#ru-deployment "Direct link to RU deployment")

To enter your Microsoft Azure Cosmos DB credentials:

1. For *Database API*, *MongoDB* is the default selection.
2. For *Extraction method*, *Direct* is the default selection.
3. For *Select the deployment types to crawl*, click **RU**.
4. For *Client ID*, enter the [application (client) ID you copied](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) for your service principal.
5. For *Client Secret*, enter the [client secret you copied](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) for your service principal.
6. For *Tenant ID*, enter the [directory (tenant) ID you copied](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) for your service principal.
7. Click the **Test Authentication** button to confirm connectivity to Microsoft Azure Cosmos DB.
8. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### vCore and RU deployment[â](#vcore-and-ru-deployment "Direct link to vCore and RU deployment")

To enter your Microsoft Azure Cosmos DB credentials:

1. For *Database API*, *MongoDB* is the default selection.
2. For *Extraction method*, *Direct* is the default selection.
3. For *Select the deployment types to crawl*, click **vCore and RU**.
4. For *Client ID*, enter the [application (client) ID you copied](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) of the service principal for your RU\-based account.
5. For *Client Secret*, enter the [client secret you copied](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) of the service principal for your RU\-based account.
6. For *Tenant ID*, enter the [directory (tenant) ID you copied](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) of the service principal for your RU\-based account.
7. For *Connection Strings*, enter the [primary connection string(s) you copied](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) from your vCore\-based account(s).
8. Click the **Test Authentication** button to confirm connectivity to Microsoft Azure Cosmos DB.
9. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Microsoft Azure Cosmos DB connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Microsoft Azure Cosmos DB crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for the following:

* For *Extract Collection Schemas*, change to **Yes** to enable Atlan to extract collection schemas by reading a subset of the documents in the collection and [map them to column assets](/apps/connectors/database/microsoft-azure-cosmos-db/references/what-does-atlan-crawl-from-microsoft-azure-cosmos-db). For *SchemaÂ extraction sample size*, you can set a custom value of up to 1,000 for documents to be read for schema analysis.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Microsoft Azure Cosmos DB crawler, after completing the steps above:

* To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
* To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Microsoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db)[NextWhat does Atlan crawl from Microsoft Azure Cosmos DB?](/apps/connectors/database/microsoft-azure-cosmos-db/references/what-does-atlan-crawl-from-microsoft-azure-cosmos-db)

Copyright Â© 2025 Atlan Pte. Ltd.

