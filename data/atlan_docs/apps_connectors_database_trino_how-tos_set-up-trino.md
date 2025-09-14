# Source URL
https://docs.atlan.com/apps/connectors/database/trino/how-tos/set-up-trino

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/trino/how-tos/set-up-trino
link-alternate: https://docs.atlan.com/apps/connectors/database/trino/how-tos/set-up-trino
meta-description: :::warning Who can do this? You will probably need your Trino administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Trino administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Trino | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/trino/how-tos/set-up-trino
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Trino | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Trino
============

Who can do this?You will probably need your Trino administrator to run these commands \- you may not have access yourself.

Currently we only support basic (username and password) authentication for Trino. We recommend creating a separate user for Atlan with read\-only access. Please ensure you are using frontend password authentication over HTTPS for clients.

Create user in Trino[â](#create-user-in-trino "Direct link to Create user in Trino")
--------------------------------------------------------------------------------------

To create a new user with password file authentication follow [the steps in the official Trino documentation](https://trino.io/docs/current/security/password-file.html).

Grant read\-only access[â](#grant-read-only-access "Direct link to Grant read-only access")
---------------------------------------------------------------------------------------------

To grant read\-only access to the user created above follow [the steps in the official Trino documentation](https://trino.io/docs/current/security/file-system-access-control.html). This includes adding a list of catalogs you wish to crawl to your `rules.json` file, for example:

```
{  
  "catalogs": [  
    {  
      "user": "atlan",  
      "catalog": "postgresql",  
      "allow": "read-only"  
    },  
    {  
      "user": "atlan",  
      "catalog": "mysql",  
      "allow": "read-only"  
    },  
    ...  
  ]  
}  

```
**Tags:*** [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousTrino](/apps/connectors/database/trino)[NextCrawl Trino](/apps/connectors/database/trino/how-tos/crawl-trino)

Copyright Â© 2025 Atlan Pte. Ltd.

