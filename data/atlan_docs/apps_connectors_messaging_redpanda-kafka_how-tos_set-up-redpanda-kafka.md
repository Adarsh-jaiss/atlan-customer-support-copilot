# Source URL
https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/how-tos/set-up-redpanda-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/how-tos/set-up-redpanda-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/how-tos/set-up-redpanda-kafka
meta-description: Atlan supports the [S3 extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Redpanda Kafka. This method uses Atlan's kafka-extractor tool to fetch metadata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports the [S3 extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Redpanda Kafka. This method uses Atlan's kafka-extractor tool to fetch metadata.
meta-og-locale: en
meta-og-title: Set up Redpanda Kafka | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/redpanda-kafka/how-tos/set-up-redpanda-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Redpanda Kafka | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Redpanda Kafka
=====================

Who can do this?You will probably need your [Redpanda Kafka administrator](https://docs.redpanda.com/docs/manage/security/console/authorization/#roles) to complete these steps \- you may not have access yourself.

Atlan supports the [S3 extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Redpanda Kafka. This method uses Atlan's kafka\-extractor tool to fetch metadata.

Create user in Redpanda Kafka[â](#create-user-in-redpanda-kafka "Direct link to Create user in Redpanda Kafka")
-----------------------------------------------------------------------------------------------------------------

To [create a new user](https://docs.redpanda.com/docs/manage/security/authorization/) for [extracting metadata from Redpanda Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access):

1. Log in to your [Redpanda Console](https://console.aiven.io/) and select your active cluster.
2. From the left menu of your cluster's *Overview* page, click the **Security** tab.
3. From the upper right of the *Security* page, click **Create User** to create a new user.
4. In the *Create User* dialog, enter the following details:Â
    1. For *Username*, enter a name for the new user \- for example, `Atlan integration`.
    2. For *Password*, set a password for the new user.
    3. From the *Mechanism* dropdown, select a [SCRAM mechanism](https://docs.redpanda.com/docs/manage/security/authentication/#saslscram).
    4. Click **Create** to finish creating the new user.
5. From the list of users on the *Security* page, select the newly created user to edit the [associated Access Control Lists (ACLs)](https://docs.redpanda.com/docs/21.11/security/acls/#operations).
6. In the *Edit ACL* dialog, enter the following details:
    1. For *Topics*, click **Add Topic ACL** to allow the following operations \- `Describe` and `DescribeConfigs`.
    2. For *Consumer Groups*, click **Add Consumer Group ACL** to allow the following operation \- `Describe`.
    3. For *Transactional ID*, click **Add Transactional ID ACL** to allow the following operation \- `Describe`.
    4. For *Clusters*, click **Add Cluster ACL** to allow the following operations \- `Describe` and `DescribeConfigs`.
    5. Once you have added all the required operations, click **OK**Â to finish setup.

**Did you know?**Once you have [extracted metadata on\-premises](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) and [uploaded the results to S3](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka), you can [crawl the metadata from Redpanda Kafka](/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka) into Atlan.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)

[PreviousRedpanda Kafka](/apps/connectors/messaging/redpanda-kafka)[NextCrawl Redpanda Kafka](/apps/connectors/messaging/redpanda-kafka/how-tos/crawl-redpanda-kafka)

Copyright Â© 2025 Atlan Pte. Ltd.

