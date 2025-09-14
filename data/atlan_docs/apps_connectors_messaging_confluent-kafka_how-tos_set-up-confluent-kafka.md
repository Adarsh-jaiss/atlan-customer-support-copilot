# Source URL
https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka
link-alternate: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka
meta-description: Atlan supports the API authentication method for fetching metadata from Confluent Kafka. This method uses an API key and API secret to fetch metadata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports the API authentication method for fetching metadata from Confluent Kafka. This method uses an API key and API secret to fetch metadata.
meta-og-locale: en
meta-og-title: Set up Confluent Kafka | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/confluent-kafka/how-tos/set-up-confluent-kafka
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Confluent Kafka | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Confluent Kafka
======================

Who can do this?You will need your [OrganizationAdmin](https://docs.confluent.io/cloud/current/access-management/access-control/rbac/predefined-rbac-roles.html#organizationadmin), [EnvironmentAdmin](https://docs.confluent.io/cloud/current/access-management/access-control/rbac/predefined-rbac-roles.html#environmentadmin), or [CloudClusterAdmin](https://docs.confluent.io/cloud/current/access-management/access-control/rbac/predefined-rbac-roles.html#cloudclusteradmin) role to complete these steps \- you may not have access yourself.

Atlan supports the API authentication method for fetching metadata from Confluent Kafka. This method uses an API key and API secret to fetch metadata.

Create an API Key[â](#create-an-api-key "Direct link to Create an API Key")
-----------------------------------------------------------------------------

This section provides steps for creating an API key to access metadata from your Confluent Kafka environment.

infoðª **Note:** Atlan does **not** perform any API requests or queries that modify the resources in your Confluent Kafka environment.

### Resource\-Specific API Key[â](#resource-specific-api-key "Direct link to Resource-Specific API Key")

To [create a resource\-specific API key](https://docs.confluent.io/cloud/current/access-management/authenticate/api-keys/api-keys.html#create-a-resource-specific-api-key) for [crawling Confluent Kafka](/apps/connectors/messaging/confluent-kafka/how-tos/crawl-confluent-kafka), follow these steps:

1. Log in to your [Confluent Cloud](https://confluent.cloud/) instance with a [OrganizationAdmin](https://docs.confluent.io/cloud/current/access-management/access-control/rbac/predefined-rbac-roles.html#organizationadmin), [EnvironmentAdmin](https://docs.confluent.io/cloud/current/access-management/access-control/rbac/predefined-rbac-roles.html#environmentadmin), or [CloudClusterAdmin](https://docs.confluent.io/cloud/current/access-management/access-control/rbac/predefined-rbac-roles.html#cloudclusteradmin) role.
2. From the *Cloud Console*, select your active cluster.
3. Under *Cluster Overview* in the left menu for your active cluster, click **API Keys**.
4. In the upper right of the *API Keys* page, click **\+ Add key**.
5. On the *Create key* page, enter the following details:
    1. For *Access Control*, under *Select Scope for API key*, select **Granular access** to define a specific set of access rules, then click **Next** to proceed.
    2. For *Service Account*, click **Create a new one** and enter the following details:
        1. For *New service account name*, enter a meaningful name for your API key. For example, `Atlan`.
        2. (Optional) For *Description*, add a description for your API key. For example, `Atlan crawler connection`.
        3. Click **Next** to proceed.
    3. For *Add ACLs to service account*, click **\+ Add ACLs** to add and allow the following minimum permissions required for your Confluent Kafka resources:
        * Cluster: `DescribeConfigs`
        * Group: `Describe`
        * Topic: `Describe`, `DescribeConfigs`
    4. Once you've added all the permissions, click **Next** to proceed.
    5. For *Create key*, under *Get your API key*, copy or download the API key and secret. Make sure to store them securely, as the secret can't be retrieved later.

### (Optional) Cloud API Key[â](#optional-cloud-api-key "Direct link to (Optional) Cloud API Key")

To access Kafka metrics(`sizeInBytes`), you need a Cloud API key. Follow these steps to generate one:

1. Click the hamburger menu (â°) icon in the top right corner to open the menu.
2. In the menu, click **API Keys**.
3. On the API Key listing screen, click the **Add API Key** button to add a new API key.
4. On the *Select an account for API key* screen, select the account appropriate for your service or user account, then click **Next**.
5. On the *Select resource scope for API key* screen, choose **Cloud resource management**, then click **Next**.
6. On the *API details screen*, enter the required details:

* **Name**: Provide a unique and meaningful name for your API key. For example, Atlan Kafka Metrics Key.
* **Description**: Add a description that illustrates the purpose of the key. For example, Atlan Kafka metrics API key with read\-only permissions.

8. Click **Create API Key** to generate the key.
9. On the *API key download screen*, copy the API key and secret or click **Download API Key** to save them as a file. Make sure to store them securely, as the secret can't be retrieved later.
10. Click **Complete** to finish the API key creation process. You will be able to see the generated API key on the API key listing screen.
**Tags:*** [data](/tags/data)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousConfluent Kafka](/apps/connectors/messaging/confluent-kafka)[NextCrawl Confluent Kafka](/apps/connectors/messaging/confluent-kafka/how-tos/crawl-confluent-kafka)

Copyright Â© 2025 Atlan Pte. Ltd.

