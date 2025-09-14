# Source URL
https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/references/what-does-atlan-crawl-from-microsoft-sql-server

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/references/what-does-atlan-crawl-from-microsoft-sql-server
link-alternate: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/references/what-does-atlan-crawl-from-microsoft-sql-server
meta-description: Atlan crawls and maps the following assets and properties from Microsoft SQL Server.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Microsoft SQL Server.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Microsoft SQL Server? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/references/what-does-atlan-crawl-from-microsoft-sql-server
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Microsoft SQL Server? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Microsoft SQL Server?
================================================

Atlan crawls and maps the following assets and properties from Microsoft SQL Server.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from Microsoft SQL Server to its `Database` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_CATALOG` | `name` | asset preview, profile, and filter, overview sidebar |
| `SCHEMA_COUNT` | `schemaCount` | [API only](/faq/data-connections-and-integration#what-does-api-only-mean) |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from Microsoft SQL Server to its `Schema` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_SCHEMA` | `name` | asset preview, profile, and filter, overview sidebar |
| `TABLE_COUNT` | `tableCount` | asset preview and profile |
| `VIEW_COUNT` | `viewsCount` | asset preview and profile |
| `TABLE_CATALOG` | `databaseName` | asset preview and profile |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Microsoft SQL Server to its `Table` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | asset preview, profile, and filter, overview sidebar |
| `REMARKS` | `description` | asset preview, profile, and filter, overview sidebar |
| `COLUMN_COUNT` | `columnCount` | asset preview, profile, and filter, overview sidebar |
| `ROW_COUNT` | `rowCount` | asset preview, profile, and filter, overview sidebar |
| `BYTES` | `sizeBytes` | asset preview, profile, and filter, overview sidebar |
| `PARTITIONS` | `isPartitioned` | [API only](/faq/data-connections-and-integration#what-does-api-only-mean) |
| `PARTITION_COUNT` | `partitionCount` | [API only](/faq/data-connections-and-integration#what-does-api-only-mean) |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Microsoft SQL Server to its `View` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | asset preview, profile, and filter, overview sidebar |
| `REMARKS` | `description` | asset preview, profile, and filter, overview sidebar |
| `COLUMN_COUNT` | `columnCount` | asset preview, profile, and filter, overview sidebar |
| `VIEW_DEFINITION (WITH SCHEMABINDING)` | `isClustered` | [API only](/faq/data-connections-and-integration#what-does-api-only-mean) |
| `VIEW_DEFINITION` | `definition` | asset profile and overview sidebar |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from Microsoft SQL Server to its `Column` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `COLUMN_NAME` | `name` | asset preview, profile, and filter, overview sidebar |
| `REMARKS` | `description` | asset preview, profile, and filter, overview sidebar |
| `ORDINAL_POSITION` | `order` | asset profile |
| `TYPE_NAME` | `dataType` | asset preview, profile, and filter, overview sidebar |
| `CONSTRAINT_TYPE (PRIMARY KEY)` | `isPrimary` | asset preview, profile, and filter |
| `CONSTRAINT_TYPE (FOREIGN KEY)` | `isForeign` | asset preview, profile, and filter |
| `NULLABLE` | `isNullable` | asset profile and overview sidebar |
| `NUMERIC_SCALE` | `numericScale` | asset profile and overview sidebar |
| `NUMERIC_PRECISION` | `precision` | asset profile and overview sidebar |

Routines[â](#routines "Direct link to Routines")
--------------------------------------------------

Atlan maps routines in Microsoft SQL Server to its `Procedure` asset type. These assets are currently neither published nor discoverable in Atlan.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `ROUTINE_NAME` | `name` | [API only](/faq/data-connections-and-integration#what-does-api-only-mean) |
| `REMARKS` | `description` | [API only](/faq/data-connections-and-integration#what-does-api-only-mean) |
| `PROCEDURE_TYPE` | `subType` | [API only](/faq/data-connections-and-integration#what-does-api-only-mean) |
| `ROUTINE_DEFINITION` | `definition` | [API only](/faq/data-connections-and-integration#what-does-api-only-mean) |

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousSet up a private network link to Microsoft SQL Server on Amazon RDS](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-a-private-network-link-to-microsoft-sql-server-on-amazon-rds)[NextPreflight checks for Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/references/preflight-checks-for-microsoft-sql-server)

Copyright Â© 2025 Atlan Pte. Ltd.

