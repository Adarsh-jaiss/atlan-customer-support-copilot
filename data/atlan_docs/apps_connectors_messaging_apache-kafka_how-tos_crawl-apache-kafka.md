# Source URL
https://docs.atlan.com/apps/connectors/messaging/apache-kafka/how-tos/crawl-apache-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/apache-kafka/how-tos/crawl-apache-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/apache-kafka/how-tos/crawl-apache-kafka
meta-description: Learn about crawl apache kafka.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about crawl apache kafka.
meta-og-locale: en
meta-og-title: Crawl Apache Kafka | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/apache-kafka/how-tos/crawl-apache-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Apache Kafka | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Apache Kafka
==================

Atlan crawls metadata from your Apache Kafka clust

[https://demo.arcade.software/599IyW0gsE3pffu4hDc8?embed](https://demo.arcade.software/599IyW0gsE3pffu4hDc8?embed)

er, allowing you to discover, classify, and govern your Kafka topics and schemas. This guide walks you through the steps to configure and run the Apache Kafka crawler in Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, complete the following prerequisites:

* **Apache Kafka setup:** You have [configured the Apache Kafka permissions](/apps/connectors/messaging/apache-kafka/how-tos/set-up-apache-kafka), you can establish a connection between Atlan and Apache Kafka.
* **Order of operations:** Review the [order of operations](/product/connections/how-tos/order-workflows) to understand the sequence of tasks for crawling metadata.
* **Access to Atlan workspace:** You must have the required permissions in Atlan to create and manage a connection.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Apache Kafka as your source:

1. In Atlan, click **New**, and from the menu, select **New Workflow**.
2. From the **Marketplace** page, click **Apache Kafka Assets**.
3. Click **Setup Workflow** in the right panel to proceed with configuration.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

* InÂ**Direct** extraction, Atlan connects to Apache Kafka and crawls metadata directly.
* InÂ**Offline** extraction, you need to first [extract metadata yourself and make it available in S3](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access).

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Apache Kafka credentials:

1. For *Bootstrap servers*, enter the hostname(s) of your Apache Kafka broker(s) \- for multiple hostnames, separate each entry with a comma `,` or semicolon `;`.
2. For *Authentication*, Atlan provides the following authentication methods:
    * **No Authentication:** If your Apache Kafka cluster does not require authentication, Atlan can connect without any credentials..
    * **Basic Authentication (SASL/PLAIN):** Uses a [username and password](/apps/connectors/messaging/apache-kafka/how-tos/set-up-apache-kafka#use-basic-authentication-with-sasl_plain-mechanism) with the SASL\_PLAIN mechanism for authentication.
    * **SCRAM Authentication (SASL/SCRAM):** Uses a [username and password](/apps/connectors/messaging/apache-kafka/how-tos/set-up-apache-kafka#use-scram-authentication-with-sasl_scram-mechanism) with the SASL\_SCRAM mechanism (SCRAM\-SHA\-256 or SCRAM\-SHA\-512\) for secure authentication.
    * *Username,* enter the username for your Apache Kafka brokers.
    * *Password,* enter the password for the username.
3. For *Security protocol*, select **Plaintext** or **SSL** for No Auth, and **SASL\_PLAINTEXT** or **SASL\_SSL** for Basic and SCRAM authentication.
4. For *SASL Mechanism* (optional for SCRAM authentication), choose the appropriate mechanism for your Kafka cluster.
5. Click **Test Authentication** to confirm connectivity.
6. Once authentication is successful, click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan also supports the [offline extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Apache Kafka. This method uses Atlan's kafka\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) yourself and then [make it available in S3](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka).

To enter your S3 details:

1. ForÂ*Bucket name*, enter the name of your S3 bucket.
2. For *Bucket prefix*, enter the S3 prefix under which all the [metadata files](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka) exist. These include `topics.json`, `topic-configs.json`, and so on.
3. Based on your cloud platform, enter the following details:
    * If using AWS, for *Role ARN*, enter the ARN of the AWS role to assume. This role ARN will be used to copy the files from S3\.
    * If using Microsoft Azure, enter the name of your *Azure Storage Account* and the SAS token for *Blob SAS Token*.
    * If using Google Cloud Platform, no further configuration is required.
4. When complete, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Apache Kafka connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Apache Kafka crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* For *Skip internal topics*, keep the default option **Yes** to skip [internal Apache Kafka topics](https://kafka.apache.org/11/documentation/streams/developer-guide/manage-topics#streams-developer-guide-topics-internal) or click **No** to enable crawling them.
* To select the Apache Kafka assets you want to exclude from crawling, clickÂ**Exclude topics regex**. (This will default to no assets, if none specified.)
* To select the Apache Kafka assets you want to include in crawling, click **Include topics regex**. (This will default to all assets, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Apache Kafka crawler, after completing the steps above:

1. Click **Preflight checks** to verify configuration.
2. Choose one of the following options:
    * To run the crawler once immediately, click **Run**.
    * To schedule the crawler, click **Schedule \& Run**.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Apache Kafka](/apps/connectors/messaging/apache-kafka/how-tos/set-up-apache-kafka)[NextSet up on\-premises Kafka access](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access)

Copyright Â© 2025 Atlan Pte. Ltd.

