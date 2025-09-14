# Source URL
https://docs.atlan.com/apps/connectors/erp/sap-ecc/how-tos/crawl-sap-ecc

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/erp/sap-ecc/how-tos/crawl-sap-ecc
link-alternate: https://docs.atlan.com/apps/connectors/erp/sap-ecc/how-tos/crawl-sap-ecc
meta-description: To crawl metadata from your SAP ECC system, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from your SAP ECC system, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl SAP ECC | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/erp/sap-ecc/how-tos/crawl-sap-ecc
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl SAP ECC | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl SAP ECC
=============

Once you have configured the [SAP ECC access permissions](/apps/connectors/erp/sap-ecc/how-tos/set-up-sap-ecc), you can establish a connection between Atlan and your SAP ECC system.

To crawl metadata from your SAP ECC system, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select SAP ECC as your source:

1. In the top right corner of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **SAP ECC Assets**, and click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Atlan supports using a Secure Agent for fetching metadata from SAP ECC. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Add secret keys for your SAP ECC credentials in the linked secret store.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. The SAP ECC agent configuration requires the following parameters:
    * **SAP Host Name**: The hostname or IP address of your SAP ECC system
    * **SAP User Name**: The dedicated user account for metadata extraction
    * **SAP Password**: The password for the user account
    * **Connection Type**: Choose between Application Server or Message Server. If you have chosen Message server, provide below details:
        + **Port**: Port number (required if using Message Server)
        + **Group**: Group number (required if using Message Server)
    * **SAP System Number**: Two\-digit system identifier (00\-99\)
    * **SAP Client Number**: Three\-digit client identifier (001\-999\)
    * **Use SAP Router**: Choose **Yes**, if using a SAP Router, and provide the **SAP Router String**.
5. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the SAP ECC connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you don't specify any user or group, nobody can manage the connection \- not even admins.
3. **Use Secure Network Connection**: Choose **Yes** to use secure communication. When using a secure connection, prvoide below details:

    * **SNC Name**: Your SNC name
        * **SNC Partner**: Partner SNC name
        * **SNC Security Level**: Security level
        * **SNC Library Path**: Path to SNC library
4. At the bottom of the screen, click the **Next** button to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the SAP ECC crawler, you can configure which components to include or exclude:

* To select the components you want to include in crawling, click **Include Components** and use the dropdown to select specific SAP components and their subcomponents. You can search for components using the search bar or use the advanced search option.
* To select the components you want to exclude from crawling, click **Exclude Components** and use the dropdown to select specific SAP components and their subcomponents to exclude from the crawl.
* The component selection supports hierarchical browsing, allowing you to expand and collapse component categories to select specific subcomponents.
* You may choose to configure the crawler to use advance settings by providing below details:
    + **SAP Language**: Language code (default: EN)
    + **SAP Codepage**: Character encoding (default: 0\)
    + **SAP Unicode System**: Choose **Yes** to use unicode
    + **Unicode Support**: Choose **Yes** to enable Unicode support
    + **SAP Trace**: Choose **Yes** to enable trace logging for debugging
    + **Connection Pool Size**: Maximum number of connections (default: 5\)

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

Follow these steps to run the SAP ECC crawler:

1. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you see the assets in Atlan's asset page! ð

**Tags:*** [erp](/tags/erp)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up SAP ECC](/apps/connectors/erp/sap-ecc/how-tos/set-up-sap-ecc)[NextWhat does Atlan crawl from SAP ECC?](/apps/connectors/erp/sap-ecc/references/what-does-atlan-crawl-from-sap-ecc)

Copyright Â© 2025 Atlan Pte. Ltd.

