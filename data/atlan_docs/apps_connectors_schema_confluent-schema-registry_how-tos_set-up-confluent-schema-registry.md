# Source URL
https://docs.atlan.com/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry
link-alternate: https://docs.atlan.com/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry
meta-description: :::warning Who can do this? You will probably need your Schema Registry administrator to complete these steps - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Schema Registry administrator to complete these steps - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Confluent Schema Registry | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/schema/confluent-schema-registry/how-tos/set-up-confluent-schema-registry
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Confluent Schema Registry | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Confluent Schema Registry
================================

Who can do this?You will probably need your Schema Registry administrator to complete these steps \- you may not have access yourself.

Atlan supports the API authentication method for fetching metadata from Confluent Schema Registry. This method uses an API key and secret to fetch metadata.

Create an API key[â](#create-an-api-key "Direct link to Create an API key")
-----------------------------------------------------------------------------

**Did you know?**Atlan does **not** make any API requests or queries that will update the resources in your Confluent Cloud Schema Registry environment.

To [create an API key](https://docs.confluent.io/cloud/current/access-management/authenticate/api-keys/api-keys.html#resource-specific-api-keys) for [crawling Confluent Schema Registry](/apps/connectors/schema/confluent-schema-registry/how-tos/crawl-confluent-schema-registry):

1. Log in to your [Confluent Cloud](https://confluent.cloud/) instance.
2. From the left menu of the *Cloud Console*, click **Environments** and then select your environment.
3. On your environment page, under *Stream Governance API* in the right menu, for *Endpoint*, click the clipboard icon to copy the endpoint and store it in a secure location.
4. Under *Credentials* in the right menu, click **View \& manage** if there are any existing API keys or click **0 keys** if there are none to open the API credentials dialog.
5. In the *API credentials* dialog, click **\+ Add key** if there are any existing API keys or click **Create key** if there are none to create a new schema registry API key.
6. From the *Create a new Schema Registry API key* dialog:
    1. For *Key*, click the clipboard icon to copy the API key and store it in a secure location.
    2. For *Secret*, click the clipboard icon to copy the API secret and store it in a secure location.
    3. (Optional) For *Description*, enter a description for the new API key \- for example, `Atlan integration API key`.

**Did you know?**You will need the schema registry endpoint, API key, and API secret for [crawling Confluent Schema Registry](/apps/connectors/schema/confluent-schema-registry/how-tos/crawl-confluent-schema-registry).

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousConfluent Schema Registry](/apps/connectors/schema/confluent-schema-registry)[NextCrawl Confluent Schema Registry](/apps/connectors/schema/confluent-schema-registry/how-tos/crawl-confluent-schema-registry)

Copyright Â© 2025 Atlan Pte. Ltd.

