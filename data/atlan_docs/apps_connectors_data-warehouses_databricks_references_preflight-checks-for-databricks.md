# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/references/preflight-checks-for-databricks

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/references/preflight-checks-for-databricks
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/references/preflight-checks-for-databricks
meta-description: Before [running the Databricks crawler](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks), you can run [preflight checks](/product/co.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Before [running the Databricks crawler](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks), you can run [preflight checks](/product/co.
meta-og-locale: en
meta-og-title: Preflight checks for Databricks | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/references/preflight-checks-for-databricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Databricks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Databricks
===============================

Before [running the Databricks crawler](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

JDBC[â](#jdbc "Direct link to JDBC")
--------------------------------------

### Schemas[â](#schemas "Direct link to Schemas")

â `Check successful`

â `Check failed for $missingObjectName`

Rest API (Unity Catalog)[â](#rest-api-unity-catalog "Direct link to Rest API (Unity Catalog)")
------------------------------------------------------------------------------------------------

### User login/UC enabled[â](#user-loginuc-enabled "Direct link to User login/UC enabled")

â `Check successful`

â Source returned error

For example: `{"error_code":"403","message":"Invalid access token."}`

### Catalog[â](#catalog "Direct link to Catalog")

â `Check successful`

â `Check failed for $missingObjectName catalog`

Databricks lineage and usage (miner)[â](#databricks-lineage-and-usage-miner "Direct link to Databricks lineage and usage (miner)")
------------------------------------------------------------------------------------------------------------------------------------

**Did you know?**Once you have crawled assets from Databricks, you can [extract lineage and usage and popularity metrics](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks).

### Login[â](#login "Direct link to Login")

â `Check successful`

â `Check failed`

For example: `{"error_code":"403","message":"Invalid access token."}`

### Lineage API[â](#lineage-api "Direct link to Lineage API")

â `Check successful. Lineage API is enabled.`

â `Check failed`

For example: `Lineage is not enabled for this Databricks account: 47258391-b3c8-4ff9-a0d9-5afc02443806`

### Query history API endpoint check[â](#query-history-api-endpoint-check "Direct link to Query history API endpoint check")

â `Check successful`

â `Check failed`

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Databricks?](/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks)[NextTroubleshooting Databricks connectivity](/apps/connectors/data-warehouses/databricks/troubleshooting/troubleshooting-databricks-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

