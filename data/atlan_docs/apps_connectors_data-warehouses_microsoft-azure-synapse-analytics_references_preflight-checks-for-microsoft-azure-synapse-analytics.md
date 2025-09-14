# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/preflight-checks-for-microsoft-azure-synapse-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/preflight-checks-for-microsoft-azure-synapse-analytics
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/preflight-checks-for-microsoft-azure-synapse-analytics
meta-description: This check is performed for both [basic](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics) and [service principal](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics) authentication method.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: This check is performed for both [basic](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics) and [service principal](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics) authentication method.
meta-og-locale: en
meta-og-title: Preflight checks for Microsoft Azure Synapse Analytics | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/preflight-checks-for-microsoft-azure-synapse-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Microsoft Azure Synapse Analytics | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Microsoft Azure Synapse Analytics
======================================================

Before [running the Microsoft Azure Synapse Analytics crawler](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Databases and schemas check[â](#databases-and-schemas-check "Direct link to Databases and schemas check")
-----------------------------------------------------------------------------------------------------------

This check is performed for both [basic](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics) and [service principal](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics) authentication method.

â `Check successful`

â `Check failed for $missingObjectName`

REST credentials check[â](#rest-credentials-check "Direct link to REST credentials check")
--------------------------------------------------------------------------------------------

This check is only performed when using the [service principal authentication](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#service-principal-authentication) method. Atlan authenticates the service principal credentials by attempting to fetch the access token using [Microsoft's authorization flow](https://learn.microsoft.com/en-us/rest/api/azure/#acquire-an-access-token).

â `Check successful`

â `Check failed. <Response received from the API>`

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousWhat does Atlan crawl from Microsoft Azure Synapse Analytics?](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-does-atlan-crawl-from-microsoft-azure-synapse-analytics)[NextWhat lineage does Atlan extract from Microsoft Azure Synapse Analytics?](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-lineage-does-atlan-extract-from-microsoft-azure-synapse-analytics)

Copyright Â© 2025 Atlan Pte. Ltd.

