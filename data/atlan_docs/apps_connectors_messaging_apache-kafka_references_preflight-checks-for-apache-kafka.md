# Source URL
https://docs.atlan.com/apps/connectors/messaging/apache-kafka/references/preflight-checks-for-apache-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/apache-kafka/references/preflight-checks-for-apache-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/apache-kafka/references/preflight-checks-for-apache-kafka
meta-description: Before [running the Apache Kafka crawler](/apps/connectors/messaging/apache-kafka/how-tos/crawl-apache-kafka), run [preflight checks](/product/connection.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Before [running the Apache Kafka crawler](/apps/connectors/messaging/apache-kafka/how-tos/crawl-apache-kafka), run [preflight checks](/product/connection.
meta-og-locale: en
meta-og-title: Preflight checks for Apache Kafka | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/apache-kafka/references/preflight-checks-for-apache-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Apache Kafka | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Apache Kafka
=================================

Before [running the Apache Kafka crawler](/apps/connectors/messaging/apache-kafka/how-tos/crawl-apache-kafka), run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

### Cluster permission[â](#cluster-permission "Direct link to Cluster permission")

* â Check successful if the user has sufficient permission to list all the brokers of the Apache Kafka cluster.
* â Failed to get list of Kafka brokers if the user has permission to connect to the Apache Kafka cluster but is unable to fetch any broker details.

### Topics permission[â](#topics-permission "Direct link to Topics permission")

* â Check successful if the user has sufficient permission to list or describe topics available in the Apache Kafka cluster.
* â Failed to get list of Kafka topics if the user has permission to connect to the Apache Kafka cluster but is unable to fetch any topic details.
**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousWhat does Atlan crawl from Apache Kafka?](/apps/connectors/messaging/apache-kafka/references/what-does-atlan-crawl-from-apache-kafka)

Copyright Â© 2025 Atlan Pte. Ltd.

