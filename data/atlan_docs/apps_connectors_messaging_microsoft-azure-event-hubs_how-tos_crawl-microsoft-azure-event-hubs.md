# Source URL
https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs
link-alternate: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs
meta-description: Once you have [configured the Microsoft Azure Event Hubs permissions](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs), you can establish a connection between Atlan and Microsoft Azure Event Hubs.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Microsoft Azure Event Hubs permissions](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs), you can establish a connection between Atlan and Microsoft Azure Event Hubs.
meta-og-locale: en
meta-og-title: Crawl Microsoft Azure Event Hubs | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Microsoft Azure Event Hubs | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Microsoft Azure Event Hubs
================================

Once you have [configured the Microsoft Azure Event Hubs permissions](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs), you can establish a connection between Atlan and Microsoft Azure Event Hubs.

To crawl metadata from Microsoft Azure Event Hubs,

[https://demo.arcade.software/LBNg9jnMXbHvYKMNqexJ?embed](https://demo.arcade.software/LBNg9jnMXbHvYKMNqexJ?embed)

review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Microsoft Azure Event Hubs as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New workflow**.
2. From the *Marketplace* page, click **Azure Event Hubs Assets**.
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your authentication method:

* In **SAS Key**, you will need your [event hub namespace and a connection string\-primary key](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for authentication.
* In **Service Principal**, you will need your [event hub namespace](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) and the following:
    + If only fetching metadata from Microsoft Azure Event Hubs, you will need a [client ID, client secret, and tenant ID](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for authentication.
    + If fetching metadata from both Microsoft Azure Event Hubs and Apache Kafka, you will need a [connection string\-primary key](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs)Â and [client ID, client secret, and tenant ID](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for authentication.

### SAS key[â](#sas-key "Direct link to SAS key")

To enter your Microsoft Azure Event Hubs credentials:

1. For *Extraction method*, *Direct* is the default selection.
2. For *Select which metadata to fetch*, click **From Only Event hubs** to only fetch metadata from Microsoft Azure Event Hubs or click **From Both Kafka and Event hubs** to fetch metadata from both Microsoft Azure Event Hubs and Apache Kafka.
3. For *Bootstrap servers*, enter the [event hub namespace you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) from Microsoft Azure Event Hubs in the following format \- `<your event hub namespace>.servicebus.windows.net:9093`.
4. For *Connection string\-primary key*, enter the [connection string\-primary key you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) from Microsoft Azure Event Hubs.
5. For *Security protocol*, *SSL* is the default selection for connecting via a Secure Sockets Layer (SSL) channel.
6. Click the **Test Authentication** button to confirm connectivity to Microsoft Azure Event Hubs.
7. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### Service principal[â](#service-principal "Direct link to Service principal")

To enter your Microsoft Azure Event Hubs credentials:

1. For *Extraction method*, *Direct* is the default selection.
2. For *Bootstrap servers*, enter the [event hub namespace you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) from Microsoft Azure Event Hubs in the following format \- `<your event hub namespace>.servicebus.windows.net:9093`.
3. For *Select which metadata to fetch*, you can either:
    * Click **From Only Event hubs** to only fetch metadata from Microsoft Azure Event Hubs. If you choose not to fetch metadata from Apache Kafka, note that Atlan will not be able to display the message count for your event hubs and consumer groups. To enter your credentials:
        1. For *Client ID*, enter the [application (client) ID you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for the service principal.
        2. For *Client Secret*, enter the [client secret you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for the service principal.
        3. For *Tenant ID*,Â enter the [directory (tenant) ID you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for the service principal.
    * Click **From Both Kafka and Event hubs** to fetch metadata from both Microsoft Azure Event Hubs and Apache Kafka and then enter your credentials:
        1. For *Connection string\-primary key*, enter the [connection string\-primary key you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) from Microsoft Azure Event Hubs.
        2. For *Client ID*, enter the [application (client) ID you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for the service principal.
        3. For *Client Secret*, enter the [client secret you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for the service principal.
        4. For *Tenant ID*,Â enter the [directory (tenant) ID you copied](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) for the service principal.
4. For *Security protocol*, *SSL* is the default selection for connecting via a Secure Sockets Layer (SSL) channel.
5. Click the **Test Authentication** button to confirm connectivity to Microsoft Azure Event Hubs.
6. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Microsoft Azure Event Hubs connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Microsoft Azure Event Hubs crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* For *Skip internal event hubs*, keep the default option **Yes** to skip internal event hubs or click **No** to enable crawling them.
* To select the assets you want to exclude from crawling, click **Exclude event hubs regex**. (This will default to no assets, if none specified.)
* To select the assets you want to include in crawling, click **Include event hubs regex**. (This will default to all assets, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Microsoft Azure Event Hubs crawler, after completing the steps above:

* To run the crawler once, immediately, at the bottom of the screen, click the **Run** button.
* To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Microsoft Azure Event Hubs](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs)[NextWhat does Atlan crawl from Microsoft Azure Event Hubs?](/apps/connectors/messaging/microsoft-azure-event-hubs/references/what-does-atlan-crawl-from-microsoft-azure-event-hubs)

Copyright Â© 2025 Atlan Pte. Ltd.

