# Source URL
https://docs.atlan.com/apps/connectors/database/postgresql/references/what-does-atlan-crawl-from-postgresql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/postgresql/references/what-does-atlan-crawl-from-postgresql
link-alternate: https://docs.atlan.com/apps/connectors/database/postgresql/references/what-does-atlan-crawl-from-postgresql
meta-description: Atlan crawls and maps the following assets and properties from PostgreSQL.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from PostgreSQL.
meta-og-locale: en
meta-og-title: What does Atlan crawl from PostgreSQL? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/postgresql/references/what-does-atlan-crawl-from-postgresql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from PostgreSQL? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from PostgreSQL?
======================================

Atlan crawls and maps the following assets and properties from PostgreSQL.

Once you have [crawled PostgreSQL](/apps/connectors/database/postgresql/how-tos/crawl-postgresql), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from PostgreSQL to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_CATALOG` | `name` |
| `SCHEMA_COUNT` | `schemaCount` |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from PostgreSQL to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_SCHEMA` | `name` |
| `TABLE_COUNT` | `tableCount` |
| `VIEW_COUNT` | `viewsCount` |
| `TABLE_CATALOG` | `databaseName` |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from PostgreSQL to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `REMARKS` | `description` |
| `COLUMN_COUNT` | `columnCount` |
| `ROW_COUNT` | `rowCount` |
| `BYTES` | `sizeBytes` |
| `TABLE_KIND (p)`, `TABLE_TYPE (PARTITIONED TABLE)` | `isPartitioned` |
| `PARTITION_STRATEGY` | `partitionStrategy` |
| `PARTITION_COUNT` | `partitionCount` |
| `IS_INSERTABLE_INTO` | `is_insertable_into` |
| `IS_TYPED` | `is_typed` |
| `SELF_REFERENCING_COL_NAME` | `self_referencing_col_name` |
| `REF_GENERATION` | `ref_generation` |
| `IS_TRANSIENT` | `is_transient` |

Table partitions[â](#table-partitions "Direct link to Table partitions")
--------------------------------------------------------------------------

Atlan maps table partitions from PostgreSQL to its `TablePartition` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `REMARKS` | `description` |
| `COLUMN_COUNT` | `columnCount` |
| `ROW_COUNT` | `rowCount` |
| `BYTES` | `sizeBytes` |
| `PARTITION_CONSTRAINT` | `constraint` |
| `TABLE_KIND (p)`, `TABLE_TYPE (PARTITIONED TABLE)` | `isPartitioned` |
| `PARTITION_STRATEGY` | `partitionStrategy` |
| `PARTITION_COUNT` | `partitionCount` |
| `IS_INSERTABLE_INTO` | `is_insertable_into` |
| `IS_TYPED` | `is_typed` |
| `SELF_REFERENCING_COL_NAME` | `self_referencing_col_name` |
| `REF_GENERATION` | `ref_generation` |
| `IS_TRANSIENT` | `is_transient` |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from PostgreSQL to its `View` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `REMARKS` | `description` |
| `COLUMN_COUNT` | `columnCount` |
| `VIEW_DEFINITION` | `definition` |
| `IS_INSERTABLE_INTO` | `is_insertable_into` |
| `IS_TYPED` | `is_typed` |
| `SELF_REFERENCING_COL_NAME` | `self_referencing_col_name` |
| `REF_GENERATION` | `ref_generation` |
| `IS_TRANSIENT` | `is_transient` |

Materialized views[â](#materialized-views "Direct link to Materialized views")
--------------------------------------------------------------------------------

Atlan maps materialized views from PostgreSQL to its `MaterialisedView` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `REMARKS` | `description` |
| `COLUMN_COUNT` | `columnCount` |
| `ROW_COUNT` | `rowCount` |
| `BYTES` | `sizeBytes` |
| `VIEW_DEFINITION` | `definition` |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from PostgreSQL to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| `COLUMN_NAME` | `name` |
| `REMARKS` | `description` |

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl PostgreSQL](/apps/connectors/database/postgresql/how-tos/crawl-postgresql)[NextPreflight checks for PostgreSQL](/apps/connectors/database/postgresql/references/preflight-checks-for-postgresql)

Copyright Â© 2025 Atlan Pte. Ltd.

