# Source URL
https://docs.atlan.com/apps/connectors/database/prestosql/how-tos/set-up-prestosql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/prestosql/how-tos/set-up-prestosql
link-alternate: https://docs.atlan.com/apps/connectors/database/prestosql/how-tos/set-up-prestosql
meta-description: Learn about set up prestosql.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about set up prestosql.
meta-og-locale: en
meta-og-title: Set up PrestoSQL | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/prestosql/how-tos/set-up-prestosql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up PrestoSQL | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up PrestoSQL
================

dangerFor Starburst Presto, we recommend using the [Trino connector](/apps/connectors/database/trino/how-tos/set-up-trino) because [the official Starburst documentation recommends using the Trino JDBC driver](https://docs.starburst.io/latest/client/jdbc.html).

Who can do this?You will probably need your Presto administrator to run these commands \- you may not have access yourself.

Atlan only supports PrestoSQL until version 349 \- PrestoDB is not supported at present.

Currently, we only support basic (username and password) authentication for PrestoSQL. We recommend creating a separate user for Atlan with read\-only access. Please ensure you are using frontend password authentication over HTTPS for clients.

Create user in PrestoSQL[â](#create-user-in-prestosql "Direct link to Create user in PrestoSQL")
--------------------------------------------------------------------------------------------------

To create a new user with password file authentication follow [the steps in the official Presto documentation](https://prestodb.io/docs/current/security/password-file.html).

Grant read\-only access[â](#grant-read-only-access "Direct link to Grant read-only access")
---------------------------------------------------------------------------------------------

To grant read\-only access to the user created above follow [the steps in the official Presto documentation](https://prestodb.io/docs/current/security/built-in-system-access-control.html). This includes adding a list of catalogs you wish to crawl to your `rules.json` file, for example:

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
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousPrestoSQL](/apps/connectors/database/prestosql)[NextCrawl PrestoSQL](/apps/connectors/database/prestosql/how-tos/crawl-prestosql)

Copyright Â© 2025 Atlan Pte. Ltd.

