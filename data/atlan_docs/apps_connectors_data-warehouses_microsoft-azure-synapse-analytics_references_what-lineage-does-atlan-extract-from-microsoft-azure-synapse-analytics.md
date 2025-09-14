# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-lineage-does-atlan-extract-from-microsoft-azure-synapse-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-lineage-does-atlan-extract-from-microsoft-azure-synapse-analytics
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-lineage-does-atlan-extract-from-microsoft-azure-synapse-analytics
meta-description: Learn about what lineage does atlan extract from microsoft azure synapse analytics?.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about what lineage does atlan extract from microsoft azure synapse analytics?.
meta-og-locale: en
meta-og-title: What lineage does Atlan extract from Microsoft Azure Synapse Analytics? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-lineage-does-atlan-extract-from-microsoft-azure-synapse-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What lineage does Atlan extract from Microsoft Azure Synapse Analytics? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What lineage does Atlan extract from Microsoft Azure Synapse Analytics?
=======================================================================

dangerAtlan currently only supports mining query history for dedicated SQL pools with the [Microsoft Azure Synapse Analytics miner](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/mine-microsoft-azure-synapse-analytics). Mining query history for serverless SQL pools is currently not supported.

Atlan uses the [Azure Synapse Analytics REST API](https://learn.microsoft.com/en-us/rest/api/synapse/) to generate lineage associated with [Microsoft Azure Synapse AnalyticsÂ connectors](https://learn.microsoft.com/en-us/azure/data-factory/connector-overview). This is particularly useful for creating lineage between different tools.

Atlan currently only supports lineage for the following:

* Supported sources and destinations listed below.
* Data loaded through [Copy activity](https://learn.microsoft.com/en-us/azure/data-factory/copy-activity-overview) in Synapse pipelines.

Supported sources and destinations[â](#supported-sources-and-destinations "Direct link to Supported sources and destinations")
--------------------------------------------------------------------------------------------------------------------------------

### Sources[â](#sources "Direct link to Sources")

Atlan's Microsoft Azure Synapse Analytics integration supports the following sources:

* [Azure Data Lake Storage (ADLS) Gen2](https://learn.microsoft.com/en-us/azure/data-factory/connector-azure-data-lake-storage?tabs=data-factory)
* [Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics)

### Destinations[â](#destinations "Direct link to Destinations")

Atlan's Microsoft Azure Synapse Analytics integration supports the following destinations:

* [Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics)
* [Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi)

**Did you know?**We welcome feedback \- have a burning need for another source or destination? Please [let us know](https://portal.productboard.com/de8qnhczp6hafpf83cnhjctz/tabs/45-released)!

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [api](/tags/api)

[PreviousPreflight checks for Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/preflight-checks-for-microsoft-azure-synapse-analytics)

Copyright Â© 2025 Atlan Pte. Ltd.

