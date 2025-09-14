# Source URL
https://docs.atlan.com/apps/connectors/schema/confluent-schema-registry/how-tos/crawl-confluent-schema-registry

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/schema/confluent-schema-registry/how-tos/crawl-confluent-schema-registry
link-alternate: https://docs.atlan.com/apps/connectors/schema/confluent-schema-registry/how-tos/crawl-confluent-schema-registry
meta-description: Once you have [configured the Confluent Schema Registry access permissions](/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry), you can establish a connection between Atlan and Confluent Schema Registry.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Confluent Schema Registry access permissions](/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry), you can establish a connection between Atlan and Confluent Schema Registry.
meta-og-locale: en
meta-og-title: Crawl Confluent Schema Registry | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/schema/confluent-schema-registry/how-tos/crawl-confluent-schema-registry
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Confluent Schema Registry | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Confluent Schema Registry
===============================

Once you have [configured the Confluent Schema Registry access permissions](/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry), you can establish a connection between Atlan and Confluent Schema Registry.

To crawl metadata from Confluent Schema Registry,

[https://demo.arcade.software/PtfSd2baHBOre632OSZF?embed](https://demo.arcade.software/PtfSd2baHBOre632OSZF?embed)

review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Confluent Schema Registry as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New workflow**.
2. From the *Marketplace* page, click **Confluent Schema Registry Assets**.
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Confluent Schema Registry credentials:

1. For *Host*, enter your [schema registry endpoint](/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry).
2. For *API Key*, enter the [API key you copied](/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry).
3. For *API Secret*, enter the [API secret you copied](/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry).
4. Click the **Test Authentication** button to confirm connectivity to Confluent Schema Registry.
5. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Confluent Schema Registry connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Confluent Schema Registry crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the subjects you want to exclude from crawling, click **Exclude subjects**. (This will default to no subjects, if none specified.)
* To select the subjects you want to include in crawling, click **Include subjects**. (This will default to all subjects, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Confluent Schema Registry crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/schema/confluent-schema-registry/references/preflight-checks-for-confluent-schema-registry) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Confluent Schema Registry](/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry)[NextWhat does Atlan crawl from Confluent Schema Registry?](/apps/connectors/schema/confluent-schema-registry/references/what-does-atlan-crawl-from-confluent-schema-registry)

Copyright Â© 2025 Atlan Pte. Ltd.

