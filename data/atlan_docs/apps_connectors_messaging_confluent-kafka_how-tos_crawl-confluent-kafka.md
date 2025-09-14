# Source URL
https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/how-tos/crawl-confluent-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/how-tos/crawl-confluent-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/how-tos/crawl-confluent-kafka
meta-description: Learn about crawl confluent kafka.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about crawl confluent kafka.
meta-og-locale: en
meta-og-title: Crawl Confluent Kafka | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/how-tos/crawl-confluent-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Confluent Kafka | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Confluent Kafka
=====================

Atlan crawls metadata from your Confluent Kafka cl

[https://demo.arcade.software/8ki0fmD7mC1e6W2CDiJj?embed](https://demo.arcade.software/8ki0fmD7mC1e6W2CDiJj?embed)

uster, allowing you to discover, classify, and govern your Kafka topics and schemas. This guide walks you through the steps to configure and run the Confluent Kafka crawler in Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, complete the following prerequisites:

* **Confluent Kafka setup:** You have [configured the Confluent Kafka permissions](/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka), you can establish a connection between Atlan and Confluent Kafka.
* **Order of operations:** Review the [order of operations](/product/connections/how-tos/order-workflows) to understand the sequence of tasks for crawling metadata.
* **Access to Atlan workspace:** You must have the required permissions in Atlan to create and manage a connection.

[https://demo.arcade.software/599IyW0gsE3pffu4hDc8?embed](https://demo.arcade.software/599IyW0gsE3pffu4hDc8?embed)

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Confluent Kafka as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **Confluent Kafka Assets**.
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

In **Direct extraction**, Atlan connects to Confluent Kafka and crawls metadata directly.

In **Offline extraction**, you need to first extract metadata yourself and make it available in S3\.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Confluent Kafka credentials:

1. For *Bootstrap servers*, enter the hostname(s) of your Confluent Kafka broker(s). Separate multiple hostnames with a comma `,` or semicolon `;`.
2. For *API Key*, enter the API key you copied.
3. For *API Secret*, enter the API secret you copied.
4. For Security protocol, click **SASL\_PLAINTEXT** to connect to Confluent Kafka through a non\-encrypted channel or click **SASL\_SSL** to connect via a Secure Sockets Layer (SSL) channel.
5. Click the **Test Authentication** button to confirm connectivity to Confluent Kafka.
6. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan also supports the [offline extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Confluent Kafka. This method uses Atlan's kafka\-extractor tool to fetch metadata. You will need to first extract the metadata yourself and then [make it available in S3](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket.
2. For *Bucket prefix*, enter the S3 prefix under which all the [metadata files](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka) exist. These include `topics.json`, `topic-configs.json`, and so on.
3. Based on your cloud platform, enter the following details:
    * If using AWS, for *Role ARN*, enter the ARN of the AWS role to assume. This role ARN will be used to copy the files from S3\.
    * If using Microsoft Azure, enter the name of your *Azure Storage Account* and the SAS token for *Blob SAS Token*.
    * If using Google Cloud Platform, no further configuration is required.
4. When complete, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Confluent Kafka connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users who can manage this connection, update the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Confluent Kafka crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* For *Skip internal topics*, keep the default option **Yes** to skip [internal Kafka topics](https://kafka.apache.org/11/documentation/streams/developer-guide/manage-topics#streams-developer-guide-topics-internal) or click **No** to enable crawling them.
* To select the assets you want to exclude from crawling, clickÂ**Exclude topics regex**. (This will default to no assets, if none specified.)
* To select the assets you want to include in crawling, click **Include topics regex**. (This will default to all assets, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Confluent Kafka crawler:

* To run the crawler once, immediately, click the **Run** button at the bottom of the screen.
* To schedule the crawler to run hourly, daily, weekly, or monthly, click the **Schedule \& Run** button at the bottom of the screen.

Once the crawl completes, your assets appear in Atlan! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Confluent Kafka](/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka)[NextSet up on\-premises Kafka access](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access)

Copyright Â© 2025 Atlan Pte. Ltd.

