# Source URL
https://docs.atlan.com/apps/connectors/database/cratedb/references/what-does-atlan-crawl-from-cratedb

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/cratedb/references/what-does-atlan-crawl-from-cratedb
link-alternate: https://docs.atlan.com/apps/connectors/database/cratedb/references/what-does-atlan-crawl-from-cratedb
meta-description: Complete list of CrateDB assets and metadata properties extracted by Atlan during crawling
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Complete list of CrateDB assets and metadata properties extracted by Atlan during crawling
meta-og-locale: en
meta-og-title: What does Atlan crawl from CrateDB? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/cratedb/references/what-does-atlan-crawl-from-cratedb
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from CrateDB? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from CrateDB?
===================================

CrateDB uses a single\-cluster architecture where all data is stored within one logical database. Unlike traditional databases that support multiple databases, CrateDB organizes data using schemas within a single cluster. This affects how Atlan maps CrateDB assets:

* **Database**: Represents the single CrateDB cluster
* **Schemas**: Organize tables, views, and other objects within the cluster
* **Tables/Views**: Store the actual data and metadata

Once you have [crawled CrateDB](/apps/connectors/database/cratedb/how-tos/crawl-cratedb), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. Atlan extracts and maps the following assets and properties from CrateDB during crawling.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from CrateDB to its `Database` asset type.

| Source property | Atlan property | Description |
| --- | --- | --- |
| `TABLE_CATALOG` | `name` | Database name |
| `SCHEMA_COUNT` | `schemaCount` | Number of schemas in the database |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from CrateDB to its `Schema` asset type.

| Source property | Atlan property | Description |
| --- | --- | --- |
| `TABLE_SCHEMA` | `name` | Schema name |
| `TABLE_COUNT` | `tableCount` | Number of tables in the schema |
| `VIEW_COUNT` | `viewsCount` | Number of views in the schema |
| `'crate'` (literal) | `databaseName` | Database name |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from CrateDB to its `Table` asset type.

| Source property | Atlan property | Description |
| --- | --- | --- |
| `TABLE_NAME` | `name` | Table name |
| `REMARKS` | `description` | Table description |
| `COLUMN_COUNT` | `columnCount` | Number of columns in the table |
| `ROW_COUNT` | `rowCount` | Number of rows in the table |
| `SIZE_BYTES` | `sizeBytes` | Table size in bytes |
| `IS_PARTITIONED` | `isPartitioned` | Whether the table is partitioned |
| `PARTITION_STRATEGY` | `partitionStrategy` | Partitioning strategy used |
| `PARTITION_COUNT` | `partitionCount` | Number of partitions |

Table partitions[â](#table-partitions "Direct link to Table partitions")
--------------------------------------------------------------------------

Atlan maps table partitions from CrateDB to its `TablePartition` asset type.

| Source property | Atlan property | Description |
| --- | --- | --- |
| `TABLE_NAME` | `name` | Partition name |
| `PARTITION_STRATEGY` | `partitionStrategy` | Partitioning strategy |
| `ROW_COUNT` | `rowCount` | Number of rows in the partition |
| `SIZE_BYTES` | `sizeBytes` | Partition size in bytes |
| `PARTITION_COUNT` | `partitionCount` | Number of sub\-partitions |
| `COLUMN_COUNT` | `columnCount` | Number of columns in the partition |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from CrateDB to its `View` asset type.

| Source property | Atlan property | Description |
| --- | --- | --- |
| `TABLE_NAME` | `name` | View name |
| `REMARKS` | `description` | View description |
| `COLUMN_COUNT` | `columnCount` | Number of columns in the view |
| `VIEW_DEFINITION` | `definition` | SQL definition of the view |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from CrateDB to its `Column` asset type.

| Source property | Atlan property | Description |
| --- | --- | --- |
| `COLUMN_NAME` | `name` | Column name |
| `REMARKS` | `description` | Column description |
| `ORDINAL_POSITION` | `order` | Column position in the table |
| `DATA_TYPE` | `dataType` | Data type of the column |
| `IS_NULLABLE` | `isNullable` | Whether the column accepts NULL values |
| `IS_PARTITION_COLUMN` | `isPartition` | Whether the column is used for partitioning |
| `PARTITION_ORDER` | `partitionOrder` | Order of the column in partitioning |
| `IS_PRIMARY_KEY` | `isPrimary` | Whether the column is part of the primary key |
| `COLUMN_DEFAULT` | `defaultValue` | Default value for the column |
| `IS_GENERATED` | `is_generated` | Whether the column is atuomatically generated |

**Tags:*** [connectors](/tags/connectors)
* [cratedb](/tags/cratedb)
* [database](/tags/database)
* [metadata](/tags/metadata)
* [crawl](/tags/crawl)

[PreviousCrawl CrateDB](/apps/connectors/database/cratedb/how-tos/crawl-cratedb)[NextPreflight checks for CrateDB](/apps/connectors/database/cratedb/references/preflight-checks-for-cratedb)

Copyright Â© 2025 Atlan Pte. Ltd.

