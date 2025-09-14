# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-does-atlan-crawl-from-microsoft-azure-synapse-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-does-atlan-crawl-from-microsoft-azure-synapse-analytics
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-does-atlan-crawl-from-microsoft-azure-synapse-analytics
meta-description: Atlan crawls and maps the following assets and properties from Microsoft Azure Synapse Analytics. Atlan also currently supports view-level lineage and cross-source lineage between BI tools and SQL sources.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Microsoft Azure Synapse Analytics. Atlan also currently supports view-level lineage and cross-source lineage between BI tools and SQL sources.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Microsoft Azure Synapse Analytics? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-does-atlan-crawl-from-microsoft-azure-synapse-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Microsoft Azure Synapse Analytics? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Microsoft Azure Synapse Analytics?
=============================================================

Atlan crawls and maps the following assets and properties from Microsoft Azure Synapse Analytics. Atlan also currently supports view\-level lineage and cross\-source lineage between BI tools and SQL sources.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from Microsoft Azure Synapse Analytics to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_CATALOG | name |
| SCHEMA\_COUNT | schemaCount |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from Microsoft Azure Synapse Analytics to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_SCHEMA | name |
| TABLE\_COUNT | tableCount |
| VIEW\_COUNT | viewsCount |
| TABLE\_CATALOG | databaseName |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Microsoft Azure Synapse Analytics to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_NAME | name |
| REMARKS | description |
| COLUMN\_COUNT | columnCount |
| ROW\_COUNT | rowCount |
| BYTES | sizeBytes |
| PARTITIONS | isPartitioned |
| PARTITION\_COUNT | partitionCount |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Microsoft Azure Synapse Analytics to its `View` asset type.

| Source property | Atlan property |
| --- | --- |
| VIEW\_NAME | name |
| REMARKS | description |
| COLUMN\_COUNT | columnCount |
| VIEW\_DEFINITION (WITH SCHEMABINDING) | isClustered |
| VIEW\_DEFINITION | definition |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from Microsoft Azure Synapse Analytics to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| COLUMN\_NAME | name |
| REMARKS | description |
| ORDINAL\_POSITION | order |
| TYPE\_NAME | dataType |
| CONSTRAINT\_TYPE (PRIMARY KEY) | isPrimary |
| CONSTRAINT\_TYPE (FOREIGN KEY) | isForeign |
| NULLABLE | isNullable |
| NUMERIC\_SCALE | numericScale |
| NUMERIC\_PRECISION | precision |

Routines[â](#routines "Direct link to Routines")
--------------------------------------------------

Atlan maps routines in Microsoft Azure Synapse Analytics to its `Procedure` asset type.

| Source property | Atlan property |
| --- | --- |
| ROUTINE\_NAME | name |
| REMARKS | description |
| PROCEDURE\_TYPE | subType |
| ROUTINE\_DEFINITION | definition |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics)[NextPreflight checks for Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/preflight-checks-for-microsoft-azure-synapse-analytics)

Copyright Â© 2025 Atlan Pte. Ltd.

