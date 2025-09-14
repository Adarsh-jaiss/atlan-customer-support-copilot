# Source URL
https://docs.atlan.com/apps/connectors/database/mysql/references/what-does-atlan-crawl-from-mysql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/mysql/references/what-does-atlan-crawl-from-mysql
link-alternate: https://docs.atlan.com/apps/connectors/database/mysql/references/what-does-atlan-crawl-from-mysql
meta-description: Atlan crawls and maps the following assets and properties from MySQL.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from MySQL.
meta-og-locale: en
meta-og-title: What does Atlan crawl from MySQL? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/mysql/references/what-does-atlan-crawl-from-mysql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from MySQL? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from MySQL?
=================================

Atlan crawls and maps the following assets and properties from MySQL.

Once you have [crawled MySQL](/apps/connectors/database/mysql/how-tos/crawl-mysql), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from MySQL to its `Database` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_CATALOG` | `name` | asset preview and profile, overview sidebar |
| `SCHEMA_COUNT` | `schemaCount` | asset filters |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from MySQL to its `Schema` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_SCHEMA` | `name` | asset preview and profile, overview sidebar |
| `TABLE_COUNT` | `tableCount` | asset preview and profile |
| `VIEW_COUNT` | `viewsCount` | asset preview and profile |
| `TABLE_CATALOG` | `databaseName` | asset preview and profile, overview sidebar |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from MySQL to its `Table` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | asset preview and profile, overview sidebar |
| `REMARKS` | `description` | asset preview and profile, overview sidebar |
| `COLUMN_COUNT` | `columnCount` | asset preview and profile, overview sidebar |
| `ROW_COUNT` | `rowCount` | asset preview and profile, overview sidebar |
| `BYTES` | `sizeBytes` | asset preview and profile, overview sidebar |
| `TABLE_TYPE` | `subType` | API only |
| `IS_PARTITION` | `isPartitioned` | API only |
| `PARTITION_STRATEGY` | `partitionStrategy` | API only |
| `PARTITION_COUNT` | `partitionCount` | API only |
| `PARTITIONS` | `partitionList` | API only |
| `CREATE_TIME` | `sourceCreatedAt` | asset preview and profile, properties sidebar |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from MySQL to its `View` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | asset preview and profile, overview sidebar |
| `REMARKS` | `description` | asset preview and profile, overview sidebar |
| `COLUMN_COUNT` | `columnCount` | asset preview and profile, overview sidebar |
| `VIEW_DEFINITION` | `definition` | asset profile and overview sidebar |
| `IS_PARTITION` | `isPartitioned` | API only |
| `PARTITION_COUNT` | `partitionCount` | API only |
| `CREATE_TIME` | `sourceCreatedAt` | asset preview and profile, properties sidebar |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from MySQL to its `Column` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `COLUMN_NAME` | `name` | asset profile and filter, overview sidebar |
| `REMARKS` | `description` | asset profile and filter, overview sidebar |
| `ORDINAL_POSITION` | `order` | parent asset profile |
| `TYPE_NAME` | `dataType` | asset preview and filter, overview sidebar, parent asset profile |
| `CONSTRAINT_TYPE (PRIMARY KEY)` | `isPrimary` | asset preview and filter, overview sidebar, parent asset profile |
| `CONSTRAINT_TYPE (FOREIGN KEY)` | `isForeign` | asset preview and filter, overview sidebar, parent asset profile |
| `IS_NULLABLE` | `isNullable` | API only |
| `NUMERIC_SCALE` | `numericScale` | API only |
| `CHARACTER_MAXIMUM_LENGTH` | `maxLength` | API only |

Stored procedures[â](#stored-procedures "Direct link to Stored procedures")
-----------------------------------------------------------------------------

Atlan maps stored procedures from MySQL to its `Procedure` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `PROCEDURE_NAME` | `name` | API only |
| `REMARKS` | `description` | API only |
| `PROCEDURE_TYPE` | `subType` | API only |
| `ROUTINE_DEFINITION` | `definition` | API only |
| `CREATED` | `sourceCreatedAt` | API only |
| `LAST_ALTERED` | `sourceUpdatedAt` | API only |

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl MySQL](/apps/connectors/database/mysql/how-tos/crawl-mysql)[NextPreflight checks for MySQL](/apps/connectors/database/mysql/references/preflight-checks-for-mysql)

Copyright Â© 2025 Atlan Pte. Ltd.

