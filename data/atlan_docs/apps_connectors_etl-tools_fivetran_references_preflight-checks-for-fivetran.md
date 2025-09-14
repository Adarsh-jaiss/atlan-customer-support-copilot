# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/fivetran/references/preflight-checks-for-fivetran

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/references/preflight-checks-for-fivetran
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/references/preflight-checks-for-fivetran
meta-description: Learn about preflight checks for fivetran.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about preflight checks for fivetran.
meta-og-locale: en
meta-og-title: Preflight checks for Fivetran | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/references/preflight-checks-for-fivetran
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Fivetran | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Fivetran
=============================

Before [running the Fivetran enrichment](/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight check will be completed:

Fivetran Platform table existence and access check[â](#fivetran-platform-table-existence-and-access-check "Direct link to Fivetran Platform table existence and access check")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This check verifies if a Fivetran table named `table_lineage` exists in the selected schema, and whether Atlan has been provided with read access to the metadata.

â `Check successful`

â `Table named table_lineage does not exist.` or `Provided credentials do not have read access.`

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [configuration](/tags/configuration)

Copyright Â© 2025 Atlan Pte. Ltd.

