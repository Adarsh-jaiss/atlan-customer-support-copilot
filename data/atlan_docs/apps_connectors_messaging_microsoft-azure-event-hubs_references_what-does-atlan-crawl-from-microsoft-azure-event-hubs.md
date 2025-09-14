# Source URL
https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/references/what-does-atlan-crawl-from-microsoft-azure-event-hubs

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/references/what-does-atlan-crawl-from-microsoft-azure-event-hubs
link-alternate: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/references/what-does-atlan-crawl-from-microsoft-azure-event-hubs
meta-description: Atlan crawls and maps the following assets and properties from Microsoft Azure Event Hubs.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Microsoft Azure Event Hubs.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Microsoft Azure Event Hubs? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/references/what-does-atlan-crawl-from-microsoft-azure-event-hubs
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Microsoft Azure Event Hubs? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Microsoft Azure Event Hubs?
======================================================

Atlan crawls and maps the following assets and properties from Microsoft Azure Event Hubs.

Once you've [crawled Microsoft Azure Event Hubs](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for these assets:

* [Event hubs](#event-hubs) \- Message count, size (MB), partition count, and cleanup policy filters
* [Consumer groups](#consumer-groups) \- Member count and topic name filters

Event hubs[â](#event-hubs "Direct link to Event hubs")
--------------------------------------------------------

Atlan maps event hubs from Microsoft Azure Event Hubs to its `AzureEventHub` asset type.

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
| status | azureEventHubStatus |
| retention.ms | kafkaTopicRetentionTimeInMs |

Consumer groups[â](#consumer-groups "Direct link to Consumer groups")
-----------------------------------------------------------------------

Atlan maps consumer groups from Microsoft Azure Event Hubs to either of the [following asset types](https://learn.microsoft.com/en-us/azure/event-hubs/apache-kafka-frequently-asked-questions#event-hubs-consumer-group-vs--kafka-consumer-group):

* `KafkaConsumerGroup` \- managed via Kafka clients.
* `AzureEventHubConsumerGroup` \- managed via Azure portal, SDK, or Azure Resource Manager templates.

**Did you know?**Consumer groups are most likely to show up only in streaming scenarios. This is because if a topic is not being consumed actively, Microsoft Azure Event Hubs will purge the consumer group. So, if a consumer group is inactive while the workflow runs in Atlan, it will not be cataloged as an asset.

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

[PreviousCrawl Microsoft Azure Event Hubs](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs)

Copyright Â© 2025 Atlan Pte. Ltd.

