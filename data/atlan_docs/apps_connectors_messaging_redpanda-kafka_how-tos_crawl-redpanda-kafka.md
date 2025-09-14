# Source URL
https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka
meta-description: Once you have [configured the Redpanda Kafka permissions](/apps/connectors/messaging/redpanda-kafka/how-tos/set-up-redpanda-kafka), you can establish a connection between Atlan and Redpanda Kafka.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Redpanda Kafka permissions](/apps/connectors/messaging/redpanda-kafka/how-tos/set-up-redpanda-kafka), you can establish a connection between Atlan and Redpanda Kafka.
meta-og-locale: en
meta-og-title: Crawl Redpanda Kafka | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Redpanda Kafka | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Redpanda Kafka
====================

Once you have [configured the Redpanda Kafka permissions](/apps/connectors/messaging/redpanda-kafka/how-tos/set-up-redpanda-kafka), you can establish a connection between Atlan and Redpanda Kafka.

**Did you know?**Atlan currently supports the [offline extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Redpanda Kafka. This method uses Atlan's kafka\-extractor tool to fetch metadata.

To crawl metadata from Redpanda Kafka after [uploading the results to S3](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka), review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

[https://demo.arcade.software/LjfIMCoFHrCVv0yw3hd4?embed](https://demo.arcade.software/LjfIMCoFHrCVv0yw3hd4?embed)

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Redpanda Kafka as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New workflow**.
2. From the *Marketplace* page, click **Redpanda Kafka Assets**.
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

In offline extraction, you need to first [extract metadata yourself and make it available in S3](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access).

To enter your S3 details:

1. For *Extraction method*, *Offline* is the default selection.
2. For *Bucket name*, enter the name of your S3 bucket.
3. For *Bucket prefix*, enter the S3 prefix under which all the [metadata files](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka) exist. These include `topics.json`, `topic-configs.json`, and so on.
4. Based on your cloud platform, enter the following details:
    * If using AWS, for *Role ARN*, enter the ARN of the AWS role to assume. This role ARN will be used to copy the files from S3\.
    * If using Microsoft Azure, enter the name of your *Azure Storage Account* and the SAS token for *Blob SAS Token*.
    * If using Google Cloud Platform, no further configuration is required.
5. When complete, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Redpanda Kafka connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Redpanda Kafka crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* To select the assets you want to exclude from crawling, clickÂ**Exclude topics regex**. (This will default to no assets, if none specified.)
* To select the assets you want to include in crawling, click **Include topics regex**. (This will default to all assets, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Redpanda Kafka crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/messaging/redpanda-kafka/references/preflight-checks-for-redpanda-kafka) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run**Â button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run**Â button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Redpanda Kafka](/apps/connectors/messaging/redpanda-kafka/how-tos/set-up-redpanda-kafka)[NextSet up on\-premises Kafka access](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access)

Copyright Â© 2025 Atlan Pte. Ltd.

