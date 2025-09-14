# Source URL
https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/references/what-does-atlan-crawl-from-redpanda-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/references/what-does-atlan-crawl-from-redpanda-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/references/what-does-atlan-crawl-from-redpanda-kafka
meta-description: Atlan crawls and maps the following assets and properties from Redpanda Kafka.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Redpanda Kafka.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Redpanda Kafka? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/references/what-does-atlan-crawl-from-redpanda-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Redpanda Kafka? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Redpanda Kafka?
==========================================

Atlan crawls and maps the following assets and properties from Redpanda Kafka.

Once you've [crawled Redpanda Kafka](/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for these assets:

* [Topics](#topics) \- Message count, size (MB), partition count, and cleanup policy filters
* [Consumer groups](#consumer-groups) \- Member count and topic name filters

Topics[â](#topics "Direct link to Topics")
--------------------------------------------

Atlan maps topics from Redpanda Kafka to its `KafkaTopic` asset type.

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

Consumer groups[â](#consumer-groups "Direct link to Consumer groups")
-----------------------------------------------------------------------

Atlan maps consumer groups from Redpanda Kafka to its `KafkaConsumerGroup` asset type.

**Did you know?**Consumer groups are most likely to show up only in streaming scenarios. This is because if a topic is not being consumed actively, Redpanda Kafka will purge the consumer group. So, if a consumer group is inactive while the workflow runs in Atlan, it will not be cataloged as an asset.

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

[PreviousCrawl on\-premises Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka)[NextPreflight checks for Redpanda Kafka](/apps/connectors/messaging/redpanda-kafka/references/preflight-checks-for-redpanda-kafka)

Copyright Â© 2025 Atlan Pte. Ltd.

