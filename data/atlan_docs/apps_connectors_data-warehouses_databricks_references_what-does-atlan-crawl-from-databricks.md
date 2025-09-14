# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks
meta-description: Atlan crawls and maps the following assets and properties from Databricks.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Databricks.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Databricks? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Databricks? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Databricks?
======================================

Atlan crawls and maps the following assets and properties from Databricks.

infoThe following properties aren't crawled by the **System tables** extraction method:

* **Table properties**: `partitionList`, `partitionCount`
* **Column properties**: `maxLength`, `precision`

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from Databricks to its `Database` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_CATALOG` | `name` | Asset profile and overview sidebar |
| `SCHEMA_COUNT` | `schemaCount` | API only |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from Databricks to its `Schema` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_SCHEMA` | `name` | Asset profile and overview sidebar |
| `TABLE_COUNT` | `tableCount` | Asset preview and profile |
| `VIEW_COUNT` | `viewsCount` | Asset preview and profile |
| `TABLE_CATALOG` | `databaseName` | Asset preview and profile |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Databricks to its `Table` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | Asset profile and overview sidebar |
| `REMARKS, DESCRIPTION` | `description` | Asset profile and overview sidebar |
| `COLUMN_COUNT` | `columnCount` | Asset profile and overview sidebar |
| `LOCATION` | `externalLocation` | Overview sidebar |
| `FORMAT` | `externalLocationFormat` | Overview sidebar |
| `OWNER` | `Created (in Databricks)` | Properties sidebar |
| `CREATEDAT` | `sourceCreatedAt` | Properties sidebar |
| `UPDATED_BY` | `Last updated` | Properties sidebar |
| `LASTMODIFIED` | `sourceUpdatedAt` | Properties sidebar |
| `PARTITIONS` | `isPartitioned`, `partitionCount`, `partitionList` | API only |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Databricks to its `View` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | Asset profile and overview sidebar |
| `REMARKS` | `description` | Asset profile and overview sidebar |
| `COLUMN_COUNT` | `columnCount` | Asset profile and overview sidebar |
| `CREATETAB_STMT` | `definition` | Asset profile and overview sidebar |
| `OWNER` | `Created (in Databricks)` | Properties sidebar |
| `CREATEDAT` | `sourceCreatedAt` | Properties sidebar |
| `UPDATED_BY` | `Last updated` | Properties sidebar |
| `LASTMODIFIED` | `sourceUpdatedAt` | Properties sidebar |

Materialized views[â](#materialized-views "Direct link to Materialized views")
--------------------------------------------------------------------------------

Atlan maps materialized views from Databricks to its `MaterialisedView` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | Asset profile and overview sidebar |
| `REMARKS` | `description` | Asset profile and overview sidebar |
| `COLUMN_COUNT` | `columnCount` | Asset profile and overview sidebar |
| `CREATETAB_STMT` | `definition` | Asset profile and overview sidebar |
| `OWNER` | `Created (in Databricks)` | Properties sidebar |
| `CREATEDAT` | `sourceCreatedAt` | Properties sidebar |
| `UPDATED_BY` | `Last updated` | Properties sidebar |
| `LASTMODIFIED` | `sourceUpdatedAt` | Properties sidebar |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

**Did you know?**To help you work seamlessly with STRUCT data types, Atlan supports [nested columns up to level 30](/apps/connectors/data-warehouses/databricks/troubleshooting/troubleshooting-databricks-connectivity#does-atlan-support-nested-columns-beyond-level-30) in Databricks. You can view these columns in the Tree view or the asset sidebar of your table assets, and also explore child columns of STRUCTs nested within MAPs or ARRAYs. However, **lineage** for nested columns **isn't** supported.

Atlan maps columns from Databricks to its `Column` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `PRIMARY KEY` | `isPrimary` | Asset preview and filter, overview sidebar |
| `FOREIGN KEY` | `isForeign` | Asset preview and filter, overview sidebar |
| `COLUMN_NAME` | `name` | Asset profile and overview sidebar |
| `REMARKS` | `description` | Asset profile and overview sidebar |
| `ORDINAL_POSITION` | `order` | Asset profile |
| `TYPE_NAME` | `dataType` | Asset profile and overview sidebar |
| `PARTITION_INDEX` | `isPartition` | Asset preview and profile |
| `NULLABLE` | `isNullable` | API only |
| `CHAR_OCTET_LENGTH` | `maxLength` | API only |
| `DECIMAL_DIGITS` | `precision` | API only |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousManage Databricks tags](/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags)[NextPreflight checks for Databricks](/apps/connectors/data-warehouses/databricks/references/preflight-checks-for-databricks)

Copyright Â© 2025 Atlan Pte. Ltd.

