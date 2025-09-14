# Source URL
https://docs.atlan.com/apps/connectors/database/oracle/references/what-does-atlan-crawl-from-oracle

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/oracle/references/what-does-atlan-crawl-from-oracle
link-alternate: https://docs.atlan.com/apps/connectors/database/oracle/references/what-does-atlan-crawl-from-oracle
meta-description: Atlan crawls and maps the following assets and properties from Oracle.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Oracle.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Oracle? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/oracle/references/what-does-atlan-crawl-from-oracle
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Oracle? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Oracle?
==================================

Atlan crawls and maps the following assets and properties from Oracle.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from Oracle to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_CATALOG` | `name` |
| `SCHEMA_COUNT` | `schemaCount` |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from Oracle to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_SCHEMA` | `name` |
| `TABLE_COUNT` | `tableCount` |
| `VIEW_COUNT` | `viewsCount` |
| `TABLE_CATALOG` | `databaseName` |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Oracle to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `REMARKS` | `description` |
| `COLUMN_COUNT` | `columnCount` |
| `ROW_COUNT` | `rowCount` |
| `BYTES` | `sizeBytes` |
| `TABLE_TYPE` | `subType` |
| `HAS_PARTITIONS` | `isPartitioned` |
| `PARTITION_STRATEGY` | `partitionStrategy` |
| `PARTITION_COUNT` | `partitionCount` |
| `TEMPORARY` | `isTemporary` |
| `ALIAS` | `displayName` |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Oracle to its `View` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `REMARKS` | `description` |
| `COLUMN_COUNT` | `columnCount` |
| `VIEW_DEFINITION` | `definition` |
| `HAS_PARTITIONS` | `isPartitioned` |
| `PARTITION_COUNT` | `partitionCount` |
| `TEMPORARY` | `isTemporary` |
| `ALIAS` | `displayName` |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from Oracle to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| `COLUMN_NAME` | `name` |
| `REMARKS` | `description` |
| `ORDINAL_POSITION` | `order` |
| `TYPE_NAME` | `dataType` |
| `CONSTRAINT_TYPES (PRIMARY KEY)` | `isPrimary` |
| `CONSTRAINT_TYPES (FOREIGN KEY)` | `isForeign` |
| `IS_NULLABLE` | `isNullable` |
| `NUMERIC_SCALE` | `numericScale` |
| `CHARACTER_MAXIMUM_LENGTH` | `maxLength` |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Oracle](/apps/connectors/database/oracle/how-tos/crawl-oracle)[NextPreflight checks for Oracle](/apps/connectors/database/oracle/references/preflight-checks-for-oracle)

Copyright Â© 2025 Atlan Pte. Ltd.

