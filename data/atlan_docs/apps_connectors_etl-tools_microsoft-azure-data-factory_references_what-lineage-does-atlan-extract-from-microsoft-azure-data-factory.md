# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-lineage-does-atlan-extract-from-microsoft-azure-data-factory

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-lineage-does-atlan-extract-from-microsoft-azure-data-factory
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-lineage-does-atlan-extract-from-microsoft-azure-data-factory
meta-description: Atlan uses the [Microsoft Azure Data Factory REST API](https://learn.microsoft.com/en-us/rest/api/datafactory/operation-groups?view=rest-datafactory-2018-06-01).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan uses the [Microsoft Azure Data Factory REST API](https://learn.microsoft.com/en-us/rest/api/datafactory/operation-groups?view=rest-datafactory-2018-06-01).
meta-og-locale: en
meta-og-title: What lineage does Atlan extract from Microsoft Azure Data Factory? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-lineage-does-atlan-extract-from-microsoft-azure-data-factory
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What lineage does Atlan extract from Microsoft Azure Data Factory? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What lineage does Atlan extract from Microsoft Azure Data Factory?
==================================================================

Atlan uses the [Microsoft Azure Data Factory REST API](https://learn.microsoft.com/en-us/rest/api/datafactory/operation-groups?view=rest-datafactory-2018-06-01) to generate lineage associated with [Microsoft Azure Data Factory connectors](https://learn.microsoft.com/en-us/azure/data-factory/connector-overview). This is particularly useful for creating lineage between different tools.

Atlan currently only supports lineage for the following:

* Supported sources and sinks listed below.
* Data loaded through [supported activities](/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-does-atlan-crawl-from-microsoft-azure-data-factory) in data factory pipelines.

dangerThe assets involved in lineage must already be crawled by Atlan before running the [Microsoft Azure Data Factory package](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/crawl-microsoft-azure-data-factory) to enrich them.

Specifically, Atlan will:

* Create lineage between each data asset in Atlan that is associated with a supported Microsoft Azure Data Factory connector. (For example, between Microsoft Azure Cosmos DB collections and ADLS objects.)
    + Atlan creates Microsoft Azure Data Factory `Process` objects for each data asset that is replicated. Learn more about [processes](/product/capabilities/lineage/concepts/what-are-processes) here.

Supported sources and sinks[â](#supported-sources-and-sinks "Direct link to Supported sources and sinks")
-----------------------------------------------------------------------------------------------------------

### Sources[â](#sources "Direct link to Sources")

Atlan's Microsoft Azure Data Factory integration supports the following sources:

* [Azure Data Lake Storage (ADLS)](https://developer.atlan.com/patterns/create/adls/)
* [Azure Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks)
* [Microsoft Azure Cosmos DB for MongoDB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)

### Sinks[â](#sinks "Direct link to Sinks")

Atlan's Microsoft Azure Data Factory integration supports the following sinks:

* [Azure Data Lake Storage (ADLS)](https://developer.atlan.com/patterns/create/adls/)
* [Azure Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks)
* [Microsoft Azure Cosmos DB for MongoDB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)

**Did you know?**We welcome feedback \- have a burning need for another source or sink? Please [let us know](/support/submit-request)!

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Microsoft Azure Data Factory?](/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-does-atlan-crawl-from-microsoft-azure-data-factory)[NextTroubleshooting Microsoft Azure Data Factory connectivity](/apps/connectors/etl-tools/microsoft-azure-data-factory/troubleshooting/troubleshooting-microsoft-azure-data-factory-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

