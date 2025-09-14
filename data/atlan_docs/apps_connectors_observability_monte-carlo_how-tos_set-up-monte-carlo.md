# Source URL
https://docs.atlan.com/apps/connectors/observability/monte-carlo/how-tos/set-up-monte-carlo

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/observability/monte-carlo/how-tos/set-up-monte-carlo
link-alternate: https://docs.atlan.com/apps/connectors/observability/monte-carlo/how-tos/set-up-monte-carlo
meta-description: :::warning Who can do this? You will probably need your Monte Carlo [account owner](https://docs.getmontecarlo.com/docs/authorizationmanaged-roles-and-groups).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Monte Carlo [account owner](https://docs.getmontecarlo.com/docs/authorizationmanaged-roles-and-groups).
meta-og-locale: en
meta-og-title: Set up Monte Carlo | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/observability/monte-carlo/how-tos/set-up-monte-carlo
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Monte Carlo | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Monte Carlo
==================

Who can do this?You will probably need your Monte Carlo [account owner](https://docs.getmontecarlo.com/docs/authorization#managed-roles-and-groups) to complete these steps \- you may not have access yourself.

Atlan supports the API authentication method for fetching metadata from Monte Carlo. This method uses an API key ID and secret to fetch metadata.

Create an account\-service API key[â](#create-an-account-service-api-key "Direct link to Create an account-service API key")
------------------------------------------------------------------------------------------------------------------------------

**Did you know?**Atlan does **not** make any API requests or queries that will update the objects in your Monte Carlo environment.

You will need to create an [account\-service API key](https://docs.getmontecarlo.com/docs/creating-an-api-token) in Monte Carlo for integration with Atlan.

To create an account\-service API key for [crawling Monte Carlo](/apps/connectors/observability/monte-carlo/how-tos/crawl-monte-carlo):

1. Log in to your Monte Carlo instance.
2. In the top header of your Monte Carlo instance, click **Settings**.
3. In the left menu under *Settings*, click **API Access** and then click **Account Service Keys**.
4. From the *Account Service Keys* page, click the **Create Key** button.
5. In the *Create Account Service Key* dialog, enter the following details:

    1. For *Description*, add a meaningful description for your API key \- for example, `Atlan connection`.
        2. From the *Authorization Groups* dropdown, select **Viewers (All)** to provide [minimum permissions](https://docs.getmontecarlo.com/docs/authorization#managed-roles-and-groups) for crawling Monte Carlo.
        3. (Optional) For *Expires After*, keep the default selection or select a preferred option.
        4. Click **Create** to finish creating the account\-service API key.
6. From the corresponding screen, copy the *Key ID* and *Secret* and store them in a secure location.

    danger The API secret cannot be retrieved later.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [integration](/tags/integration)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousMonte Carlo](/apps/connectors/observability/monte-carlo)[NextCrawl Monte Carlo](/apps/connectors/observability/monte-carlo/how-tos/crawl-monte-carlo)

Copyright Â© 2025 Atlan Pte. Ltd.

