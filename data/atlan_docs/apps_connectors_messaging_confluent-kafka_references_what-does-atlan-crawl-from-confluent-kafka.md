# Source URL
https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/references/what-does-atlan-crawl-from-confluent-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/references/what-does-atlan-crawl-from-confluent-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/references/what-does-atlan-crawl-from-confluent-kafka
meta-description: Atlan crawls and maps the following assets and properties from Confluent Kafka.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Confluent Kafka.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Confluent Kafka? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/references/what-does-atlan-crawl-from-confluent-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Confluent Kafka? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Confluent Kafka?
===========================================

Atlan crawls and maps the following assets and properties from Confluent Kafka.

Once you've [crawled Confluent Kafka](/apps/connectors/messaging/confluent-kafka/how-tos/crawl-confluent-kafka), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for these assets:

* [Topics](#topics) \- Message count, size (MB), partition count, and cleanup policy filters
* [Consumer groups](#consumer-groups) \- Member count and topic name filters

Topics[â](#topics "Direct link to Topics")
--------------------------------------------

Atlan maps topics from Confluent Kafka to its `KafkaTopic` asset type.

| Source property | Atlan property |
| --- | --- |
| Topic | name |
| PartitionCount | kafkaTopicPartitionsCount |
| ReplicationFactor | kafkaTopicReplicationFactor |
| segment.byte | kafkaTopicSegmentBytes |
| compression.type | kafkaTopicCompressionType |
| cleanup.policy | kafkaLogTopicCleanupPolicy |
| isInternal | kafkaTopicIsInternal |
| sizeInBytes | kafkaTopicSizeInBytes |
| recordCount | kafkaTopicRecordCount |
| retention.ms | kafkaTopicRetentionTimeInMs |

dangerRetrieving `sizeInBytes` [Confluent Kafka to be set up with a Cloud API key and secret](/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka). If the Cloud API key is not configured or [the API key and Secret are not set](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access), `sizeInBytes` will be set to `0`.

Consumer groups[â](#consumer-groups "Direct link to Consumer groups")
-----------------------------------------------------------------------

Atlan maps consumer groups from Confluent Kafka to its `KafkaConsumerGroup` asset type.

**Did you know?**Consumer groups are most likely to show up only in streaming scenarios. This is because if a topic is not being consumed actively, Confluent Kafka will purge the consumer group. So, if a consumer group is inactive while the workflow runs in Atlan, it will not be cataloged as an asset.

| Source property | Atlan property |
| --- | --- |
| GROUP | name |
| memberCount | kafkaConsumerGroupMemberCount |
| ReplicationFactor | kafkaTopicReplicationFactor |
| topic\_names | kafkaTopicNames |
| TOPIC | kafkaConsumerGroupTopicConsumptionProperties.topicName |
| PARTITION | kafkaConsumerGroupTopicConsumptionProperties.topicPartition |
| LAG | kafkaConsumerGroupTopicConsumptionProperties.topicLag |
| CURRENT\-OFFSET | kafkaConsumerGroupTopicConsumptionProperties.topicCurrentOffset |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl on\-premises Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka)

Copyright Â© 2025 Atlan Pte. Ltd.

