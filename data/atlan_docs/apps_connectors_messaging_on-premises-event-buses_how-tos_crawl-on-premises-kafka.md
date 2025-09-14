# Source URL
https://docs.atlan.com/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka
meta-description: Once you have [set up the kafka-extractor tool](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access), you can extract metadata from your on-premises Kafka instances by completing the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [set up the kafka-extractor tool](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access), you can extract metadata from your on-premises Kafka instances by completing the following steps.
meta-og-locale: en
meta-og-title: Crawl on-premises Kafka | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl on-premises Kafka | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl on\-premises Kafka
========================

Once you have [set up the kafka\-extractor tool](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access), you can extract metadata from your on\-premises Kafka instances by completing the following steps.

Run kafka\-extractor[â](#run-kafka-extractor "Direct link to Run kafka-extractor")
------------------------------------------------------------------------------------

### Crawl all Kafka connections[â](#crawl-all-kafka-connections "Direct link to Crawl all Kafka connections")

To crawl all Kafka connections using the kafka\-extractor tool:

1. Log into the server with Docker Compose installed.
2. Change to the directory containing the compose file.
3. Run Docker Compose: `sudo docker-compose up`

### Crawl a specific connection[â](#crawl-a-specific-connection "Direct link to Crawl a specific connection")

To crawl a specific Kafka connection using the kafka\-extractor tool:

1. Log into the server with Docker Compose installed.
2. Change to the directory containing the compose file.
3. Run Docker Compose: `sudo docker-compose up <connection-name>`

(Replace `<connection-name>` with the name of the connection from the `services` section of the compose file.)

(Optional) Review generated files[â](#optional-review-generated-files "Direct link to (Optional) Review generated files")
---------------------------------------------------------------------------------------------------------------------------

The kafka\-extractor tool will generate many folders with JSON files for each `service`. For example:

* `topics`
* `topic-configs`
* `consumer-groups`
* `consumer-groups-members`
* and many others

You can inspect the metadata and make sure it is acceptable for providing metadata to Atlan.

Upload generated files to S3[â](#upload-generated-files-to-s3 "Direct link to Upload generated files to S3")
--------------------------------------------------------------------------------------------------------------

To provide Atlan access to the extracted metadata, you will need to upload the metadata to an S3 bucket.Â

To upload the metadata to S3:

1. Ensure that all files for a particular connection have the same prefix.
2. [Upload the files to the S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html) using your preferred method \- include all the files from the output folder generated after running Docker Compose.

For example, to upload all files using the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html):

```
aws s3 cp output/kafka-example s3://my-bucket/metadata/kafka-example --recursive  

```

Crawl metadata in Atlan[â](#crawl-metadata-in-atlan "Direct link to Crawl metadata in Atlan")
-----------------------------------------------------------------------------------------------

Once you have extracted metadata on\-premises and uploaded the results to S3, you can crawl the metadata into Atlan:

* [How to crawl Apache Kafka](/apps/connectors/messaging/apache-kafka/how-tos/crawl-apache-kafka)
* [How to crawl Confluent Kafka](/apps/connectors/messaging/confluent-kafka/how-tos/crawl-confluent-kafka)
* [How to crawl Aiven Kafka](/apps/connectors/messaging/aiven-kafka/how-tos/crawl-aiven-kafka)
* [How to crawl Redpanda Kafka](/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka)

Be sure you select **S3** for the *Extraction method*.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up on\-premises Kafka access](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access)[NextWhat does Atlan crawl from Redpanda Kafka?](/apps/connectors/messaging/redpanda-kafka/references/what-does-atlan-crawl-from-redpanda-kafka)

Copyright Â© 2025 Atlan Pte. Ltd.

