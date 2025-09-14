# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/references/what-does-atlan-crawl-from-aws-glue

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/references/what-does-atlan-crawl-from-aws-glue
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/references/what-does-atlan-crawl-from-aws-glue
meta-description: Atlan crawls and maps the following assets and properties from AWS Glue.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from AWS Glue.
meta-og-locale: en
meta-og-title: What does Atlan crawl from AWS Glue? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/references/what-does-atlan-crawl-from-aws-glue
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from AWS Glue? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from AWS Glue?
====================================

Atlan crawls and maps the following assets and properties from AWS Glue.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from AWS Glue to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_CATALOG` | `name` |
| `SCHEMA_COUNT` | `schemaCount` |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from AWS Glue to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_SCHEMA` | `name` |
| `TABLE_COUNT` | `tableCount` |
| `VIEW_COUNT` | `viewsCount` |
| `TABLE_CATALOG` | `databaseName` |
| `COMMENTS` | `description` |
| `CreateTime` | `sourceCreatedAt` |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from AWS Glue to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `COMMENTS` | `description` |
| `COLUMN_COUNT` | `columnCount` |
| `ROW_COUNT` | `rowCount` |
| `objectCount` | `tableObjectCount` |
| `BYTES` | `sizeBytes` |
| `Parameters (recordCount)` | `rowCount` |
| `Parameters (sizeKey)` | `sizeBytes` |
| `TABLE_TYPE` | `subType` |
| `StorageDescriptor (Location)` | `externalLocation` |
| `Parameters (typeOfData, classification)` | `externalLocationFormat` |
| `PartitionKeys` | `isPartitioned` |
| `PartitionData` | `partitionCount`, `partitionList` |
| `CreatedBy` | `sourceCreatedBy` |
| `CreateTime`, `CreationTime` | `sourceCreatedAt` |
| `UpdateTime`, `LastAccessTime` | `sourceUpdatedAt` |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from AWS Glue to its `View` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `COMMENTS` | `description` |
| `COLUMN_COUNT` | `columnCount` |
| `VIEW_DEFINITION` | `definition` |
| `Parameters (recordCount)` | `rowCount` |
| `PartitionKeys` | `isPartitioned` |
| `PartitionData` | `partitionCount`, `partitionList` |
| `CreatedBy` | `sourceCreatedBy` |
| `CreateTime`, `CreationTime` | `sourceCreatedAt` |
| `UpdateTime`, `LastAccessTime` | `sourceUpdatedAt` |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from AWS Glue to its `Column` asset type.

Atlan also supports nested columns up to level 15 for AWS Glue to help you enrich your semi\-structured data types:

* Atlan retrieves raw `STRUCT` and `ARRAY` type objects for nested columns up to 15 levels.
* View nested columns in the column preview and overview sidebar for your table assets.
* Column\-level lineage is supported. Search, enrich metadata, and view lineage for nested columns.
* Tag propagation is currently only supported from parent to nested columns.
* Atlan currently doesn't parse `MAP` type objects for columns and nested columns.

| Source property | Atlan property |
| --- | --- |
| `COLUMN_NAME` | `name` |
| `COMMENTS` | `description` |
| `ORDINAL_POSITION`, `COLUMN_ID` | `order` |
| `TYPE_NAME`, `DATA_TYPE` | `dataType` |
| `IS_PARTITION` | `isPartition` |
| `PARTITION_ORDER` | `partitionOrder` |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl AWS Glue](/apps/connectors/etl-tools/aws-glue/how-tos/crawl-aws-glue)[NextTroubleshooting AWS Glue connectivity](/apps/connectors/etl-tools/aws-glue/troubleshooting/troubleshooting-aws-glue-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

