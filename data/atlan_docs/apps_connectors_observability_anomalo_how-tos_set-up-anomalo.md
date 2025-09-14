# Source URL
https://docs.atlan.com/apps/connectors/observability/anomalo/how-tos/set-up-anomalo

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/observability/anomalo/how-tos/set-up-anomalo
link-alternate: https://docs.atlan.com/apps/connectors/observability/anomalo/how-tos/set-up-anomalo
meta-description: Atlan supports the API authentication method for fetching metadata from [Anomalo](https://docs.anomalo.com/integrations/atlan-integration). This method uses an API key to fetch metadata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports the API authentication method for fetching metadata from [Anomalo](https://docs.anomalo.com/integrations/atlan-integration). This method uses an API key to fetch metadata.
meta-og-locale: en
meta-og-title: Set up Anomalo | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/observability/anomalo/how-tos/set-up-anomalo
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Anomalo | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Anomalo
==============

Atlan supports the API authentication method for fetching metadata from [Anomalo](https://docs.anomalo.com/integrations/atlan-integration). This method uses an API key to fetch metadata.

Your Anomalo *Deployment Admin Superuser* must also [configure an Atlan integration in your Anomalo deployment](/apps/connectors/observability/anomalo/how-tos/integrate-anomalo) to send events to Atlan when your checks run in Anomalo. This will update the check metadata in Atlan in real time. This configuration is required only after you have completed [integrating Anomalo in Atlan](/apps/connectors/observability/anomalo/how-tos/integrate-anomalo). You will need your Atlan hostname and an [API token generated in Atlan](/get-started/references/api-authentication).

Generate an API key[â](#generate-an-api-key "Direct link to Generate an API key")
-----------------------------------------------------------------------------------

Who can do this?You must at least have an Anomalo *Viewer* role to [generate an API key](https://docs.anomalo.com/user-guides/api/how-do-i-make-my-first-api-calls#id-1.-generate-an-api-key). Atlan will require read\-only access to your connected data sources in Anomalo.

**Did you know?**Atlan does **not** make any API requests or queries that will update the objects in your Anomalo environment.

You will need to create an API key in Anomalo for integrating with Atlan.

To create an API key for [crawling Anomalo](/apps/connectors/observability/anomalo/how-tos/integrate-anomalo):

1. Log in to your Anomalo instance.
2. From the left menu of your Anomalo instance, click **Settings**.
3. On the *Settings* page, in the *Account* tab, change to the **API keys** tab.
4. On the API keys page, to generate a new API key:

    * If you have existing API keys, click the **Add an API key** button.
        * If you do not have any API keys, click the **Create an API key** button.
5. In the *New API Key*Â dialog, enter the following details:

    1. For *Description*, add a meaningful description for your API key \- for example, `Atlan connection`.
        2. For *Expiration*, keep the default selection or select a preferred option.
        3. Click **Save** to finish creating the API key.
6. From the corresponding screen, copy the *API* *Key* value and store it in a secure location.

    danger The API key cannot be retrieved later. You must copy the key value before closing the dialog box.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [integration](/tags/integration)
* [api](/tags/api)
* [authentication](/tags/authentication)
* [configuration](/tags/configuration)

[PreviousAnomalo](/apps/connectors/observability/anomalo)[NextHow to integrate Anomalo](/apps/connectors/observability/anomalo/how-tos/integrate-anomalo)

Copyright Â© 2025 Atlan Pte. Ltd.

