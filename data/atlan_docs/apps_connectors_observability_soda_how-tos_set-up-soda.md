# Source URL
https://docs.atlan.com/apps/connectors/observability/soda/how-tos/set-up-soda

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/observability/soda/how-tos/set-up-soda
link-alternate: https://docs.atlan.com/apps/connectors/observability/soda/how-tos/set-up-soda
meta-description: :::warning Who can do this? You will need your [Soda Cloud administrator](https://docs.soda.io/soda-cloud/roles-and-rights.html) to complete these steps -.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will need your [Soda Cloud administrator](https://docs.soda.io/soda-cloud/roles-and-rights.html) to complete these steps -.
meta-og-locale: en
meta-og-title: Set up Soda | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/observability/soda/how-tos/set-up-soda
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Soda | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Soda
===========

Who can do this?You will need your [Soda Cloud administrator](https://docs.soda.io/soda-cloud/roles-and-rights.html) to complete these steps \- you may not have access yourself. You will also need to scan your datasets using the latest version of [Soda Library](https://docs.soda.io/soda-library/overview.html) or [migrate from Soda Core to Soda Library](https://docs.soda.io/soda-library/install.html#migrate-from-soda-core) to ensure the best possible experience in Atlan. Associated checks for datasets scanned using an older version of Soda Library may be unavailable or missing the relationship with datasets in Atlan.

Atlan supports the API authentication method for fetching metadata from Soda. This method uses an API key ID and API secret to fetch metadata.

Create an API key[â](#create-an-api-key "Direct link to Create an API key")
-----------------------------------------------------------------------------

**Did you know?**Atlan does **not** make any API requests or queries that will update the objects in your Soda instance.

You will need to [create an API key in Soda](https://docs.soda.io/soda-cloud/api-keys.html#generate-api-keys-for-use-with-soda-library-or-the-reporting-api) for integration with Atlan.

To create an API key for [crawling Soda](/apps/connectors/observability/soda/how-tos/crawl-soda):

1. Log in to your Soda Cloud instance as an **Admin**.
2. In the top right of your Soda Cloud account, click on your avatar, and from the dropdown, click **Profile**.
3. Under your profile name, click the **API Keys** tab.
4. On the *API Keys* page, click the **\+** button to generate a new API key.
5. In the *API Keys* dialog, enter the following details:

    1. For *Description*, enter a meaningful description.
        2. For *Organization*, enter the name of your organization.
        3. Click **Create** to finish setup.
6. From the corresponding screen, copy the *API Key ID* and *API Key Secret* and store them in a secure location.

    danger The API secret cannot be retrieved later.
**Tags:*** [data](/tags/data)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousSoda](/apps/connectors/observability/soda)[NextCrawl Soda](/apps/connectors/observability/soda/how-tos/crawl-soda)

Copyright Â© 2025 Atlan Pte. Ltd.

