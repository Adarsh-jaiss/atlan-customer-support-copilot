# Source URL
https://docs.atlan.com/apps/connectors/messaging/aiven-kafka/how-tos/set-up-aiven-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/aiven-kafka/how-tos/set-up-aiven-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/aiven-kafka/how-tos/set-up-aiven-kafka
meta-description: Atlan supports the [S3 extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Aiven Kafka. This method uses Atlan's kafka-extractor tool to fetch metadata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports the [S3 extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Aiven Kafka. This method uses Atlan's kafka-extractor tool to fetch metadata.
meta-og-locale: en
meta-og-title: Set up Aiven Kafka | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/aiven-kafka/how-tos/set-up-aiven-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Aiven Kafka | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Aiven Kafka
==================

Who can do this?You will probably need your [Aiven Kafka administrator](https://docs.aiven.io/docs/products/kafka/concepts/acl#acl-permission-mapping) to complete these steps \- you may not have access yourself.

Atlan supports the [S3 extraction method](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) for fetching metadata from Aiven Kafka. This method uses Atlan's kafka\-extractor tool to fetch metadata.

Create user in Aiven Kafka[â](#create-user-in-aiven-kafka "Direct link to Create user in Aiven Kafka")
--------------------------------------------------------------------------------------------------------

To [create a new user](https://docs.aiven.io/docs/products/kafka/howto/manage-acls) for [extracting metadata from Aiven Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access):

1. Log in to your [Aiven console](https://console.aiven.io/) and select your active cluster.
2. From the upper right of the cluster *Overview* page, click the **Users** tab to create a new user:
    1. For *Create a service user*, under *Username*, enter a name for the new user and then click **Add service user**.
    2. The new user will be listed under *Service users*,Â on the *Users* page. Copy the username and password for the new user and store them in a secure location.
    3. (Optional) If using [client certificate authentication](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access#define-services-for-aiven-kafka), copy the access key and access certificate and store them in a secure location.
3. From the upper right of the cluster *Overview* page, click the **Access Control List (ACL)** tab to add a new ACL grant:
    1. Under *Access Control List (ACL)*, for *ACL Type*, click **ACL For Topic**.
    2. For *Add access control entry*, enter the following details:
        1. For *Username*, enter the username you created for the new user.
        2. For *Topic*, enter an asterisk `*` to include all topics.
        3. From the *Permission* dropdown, select **Admin** \- learn more about [ACL permission mapping](https://docs.aiven.io/docs/products/kafka/concepts/acl).
        4. Click **Add entry** to save your selections.
4. Navigate to the *Overview* tab, copy or download the *CA Certificate* and store the details in a secure location.

**Did you know?**Once you have [extracted metadata on\-premises](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access) and [uploaded the results to S3](/apps/connectors/messaging/on-premises-event-buses/how-tos/crawl-on-premises-kafka), you can [crawl the metadata from Aiven Kafka](/apps/connectors/messaging/aiven-kafka/how-tos/crawl-aiven-kafka) into Atlan.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)

[PreviousAiven Kafka](/apps/connectors/messaging/aiven-kafka)[NextCrawl Aiven Kafka](/apps/connectors/messaging/aiven-kafka/how-tos/crawl-aiven-kafka)

Copyright Â© 2025 Atlan Pte. Ltd.

