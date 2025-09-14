# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake
meta-description: Atlan crawls and maps the following assets and properties from Snowflake.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Snowflake.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Snowflake? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Snowflake? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Snowflake?
=====================================

Atlan crawls and maps the following assets and properties from Snowflake.

Once you've [crawled Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following filters are currently supported for Snowflake assets:

* [Streams](#streams) \- Source type and Stale filters
* [Functions](#user-defined-functions) \- Language, Function type, Is secure, and Is external filters
* [Snowflake tags and tag values](/product/capabilities/governance/tags/how-tos/attach-a-tag)

Lineage[â](#lineage "Direct link to Lineage")
-----------------------------------------------

Atlan supports lineage for the following asset types:

### External Named Stages[â](#external-named-stages "Direct link to External Named Stages")

* Table
* Pipe â Table
* External Table
* Iceberg Table

### Internal Named Stages[â](#internal-named-stages "Direct link to Internal Named Stages")

* Table
* Pipe â Table (auto\-ingest not recommended)
* Not supported for External or Iceberg Tables

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from Snowflake to its `Database` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `DATABASES.DATABASE_NAME` | `name` | asset profile and overview sidebar |
| `DATABASE.COMMENT` | `description` | asset profile and overview sidebar |
| `SCHEMATA` (count) | `schemaCount` | asset preview and profile |
| `DATABASES.DATABASE_OWNER` | Created (in Snowflake) | properties sidebar |
| `DATABASES.CREATED` | `sourceCreatedAt` | properties sidebar |
| `DATABASES.LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from Snowflake to its `Schema` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `SCHEMATA.SCHEMA_NAME` | `name` | asset profile and overview sidebar |
| `SCHEMA.COMMENT` | `description` | asset profile and overview sidebar |
| `TABLES` of type %TABLE% (count) | `tableCount` | asset preview and profile |
| `TABLES` of type %VIEW% (count) | `viewsCount` | asset preview and profile |
| `SCHEMATA.CATALOG_NAME` | `databaseName` | asset preview and profile |
| `SCHEMATA.SCHEMA_OWNER` | Created (in Snowflake) | properties sidebar |
| `SCHEMATA.CREATED` | `sourceCreatedAt` | properties sidebar |
| `SCHEMATA.LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Snowflake to its `Table` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLES.TABLE_NAME` | `name` | asset profile and overview sidebar |
| `TABLES.COMMENT` | `description` | asset profile and overview sidebar |
| `COLUMNS` (count) | `columnCount` | asset preview and profile, overview sidebar |
| `TABLES.ROW_COUNT` | `rowCount` | asset preview and profile, overview sidebar |
| `TABLES.BYTES` | `sizeBytes` | asset filter and overview sidebar |
| `TABLES.TABLE_OWNER` | Created (in Snowflake) | properties sidebar |
| `TABLES.CREATED` | `sourceCreatedAt` | properties sidebar |
| `TABLES.LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |

### For Iceberg tables[â](#for-iceberg-tables "Direct link to For Iceberg tables")

In addition to the table metadata above, Atlan supports additional metadata for Iceberg tables crawled from Snowflake. Atlan currently supports fetching metadata for Iceberg tables only for the information schema extraction method.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLES.IS_ICEBERG` | `tableType` | asset preview, profile, and filter, and overview sidebar |
| `ICEBERG_TABLES.CATALOG_NAME` | `icebergCatalogName` | overview sidebar |
| `ICEBERG_TABLES.ICEBERG_TABLE_TYPE` | `icebergTableType` | overview sidebar |
| `CATALOG_INTEGRATION.CATALOG_SOURCE` | `icebergCatalogSource` | overview sidebar |
| `ICEBERG_TABLES.CATALOG_TABLE_NAME` | `icebergCatalogTableName` | overview sidebar |
| `ICEBERG_TABLES.CATALOG_NAMESPACE` | `icebergCatalogTableNamespace` | overview sidebar |
| `ICEBERG_TABLES.EXTERNAL_VOLUME_NAME` | `tableExternalVolumeName` | overview sidebar |
| `ICEBERG_TABLES.BASE_LOCATION` | `icebergTableBaseLocation` | overview sidebar |
| `TABLES.RETENTION_TIME` | `tableRetentionTime` | overview sidebar |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Snowflake to its `View` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLES.TABLE_NAME` | `name` | asset profile and overview sidebar |
| `TABLES.COMMENT` | `description` | asset profile and overview sidebar |
| `COLUMNS` (count) | `columnCount` | asset preview and profile, overview sidebar |
| `VIEWS.VIEW_DEFINITION` | `definition` | asset profile and overview sidebar |
| `TABLES.TABLE_OWNER` | Created (in Snowflake) | properties sidebar |
| `TABLES.CREATED` | `sourceCreatedAt` | properties sidebar |
| `TABLES.LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |

Materialized views[â](#materialized-views "Direct link to Materialized views")
--------------------------------------------------------------------------------

Atlan maps materialized views from Snowflake to its `MaterialisedView` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLES.TABLE_NAME` | `name` | asset profile and overview sidebar |
| `TABLES.COMMENT` | `description` | asset profile and overview sidebar |
| `COLUMNS` (count) | `columnCount` | asset preview and profile, overview sidebar |
| `TABLES.ROW_COUNT` | `rowCount` | asset preview and profile, overview sidebar |
| `TABLES.BYTES` | `sizeBytes` | asset filter and overview sidebar |
| `VIEWS.VIEW_DEFINITION` | `definition` | asset profile and overview sidebar |
| `TABLES.TABLE_OWNER` | Created (in Snowflake) | properties sidebar |
| `TABLES.CREATED` | `sourceCreatedAt` | properties sidebar |
| `TABLES.LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |

External tables[â](#external-tables "Direct link to External tables")
-----------------------------------------------------------------------

Atlan maps external tables from Snowflake to its `Table` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLES.TABLE_NAME` | `name` | asset profile and overview sidebar |
| `TABLES.COMMENT` | `description` | asset profile and overview sidebar |
| `COLUMNS` (count) | `columnCount` | asset preview and profile, overview sidebar |
| `TABLES.ROW_COUNT` | `rowCount` | asset preview and profile, overview sidebar |
| `TABLES.BYTES` | `sizeBytes` | asset filter and overview sidebar |
| `EXTERNAL_TABLES.LOCATION` | `externalLocation` | overview sidebar |
| `STAGES.STAGE_REGION` | `externalLocationRegion` | API only |
| `EXTERNAL_TABLES.FILE_FORMAT_TYPE` | `externalLocationFormat` | overview sidebar |
| `TABLES.TABLE_OWNER` | Created (in Snowflake) | properties sidebar |
| `TABLES.CREATED` | `sourceCreatedAt` | properties sidebar |
| `TABLES.LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from Snowflake to its `Column` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `COLUMNS.COLUMN_NAME` | `name` | asset profile and overview sidebar |
| `COLUMNS.COMMENT` | `description` | asset profile and overview sidebar |
| `COLUMNS.ORDINAL_POSITION` | `order` | API only |
| `COLUMNS.DATA_TYPE` | `dataType` | asset filter, preview, and profile, overview sidebar |
| `PRIMARY KEY` | `isPrimary` | asset preview and filter, overview sidebar |
| `COLUMNS.IS_NULLABLE` | `isNullable` | overview sidebar |
| `COLUMNS.CHARACTER_MAXIMUM_LENGTH` | `maxLength` | properties sidebar |
| `COLUMNS.NUMERIC_PRECISION` | `precision` | properties sidebar |

Stages[â](#stages "Direct link to Stages")
--------------------------------------------

Atlan maps stages from Snowflake to its `Stage` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `Stages.STAGE_NAME` | `name` | asset profile and overview sidebar |
| `Stages.COMMENT` | `description` | asset profile and overview sidebar |
| `Stages.STAGE_SCHEMA` | `schemaName` | asset profile and overview sidebar |
| `Stages.STAGE_CATALOG` | `databaseName` | asset profile and overview sidebar |
| `Stages.STAGE_URL` | `snowflakeStageExternalLocation` | asset profile and overview sidebar |
| `Stages.STAGE_REGION` | `snowflakeStageExternalLocationRegion` | asset profile and overview sidebar |
| `Stages.STAGE_TYPE` | `snowflakeStageType` | asset profile and overview sidebar |
| `Stages.STAGE_OWNER` | `sourceOwners` | overview sidebar |
| `Stages.CREATED` | `sourceCreatedAt` | properties sidebar |
| `Stages.LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |
| `Stages.STORAGE_INTEGRATION` | `snowflakeStageStorageIntegration` | asset profile and overview sidebar |

Streams[â](#streams "Direct link to Streams")
-----------------------------------------------

Atlan maps streams from Snowflake to its `Stream` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `STREAMS.NAME` | `name` | asset profile and overview sidebar |
| `STREAMS.COMMENT` | `description` | asset profile and overview sidebar |
| `STREAMS.OWNER` | `sourceOwners` | asset preview and profile, properties sidebar |
| `STREAMS.DATABASE_NAME` | `databaseName` | asset preview and profile |
| `STREAMS.SCHEMA_NAME` | `schemaName` | asset preview and profile |
| `STREAMS.SOURCE_TYPE` | `snowflakeStreamSourceType` | asset filter and overview sidebar |
| `STREAMS.STALE` | `snowflakeStreamIsStale` | asset filter and overview sidebar |
| `STREAMS.MODE` | `snowflakeStreamMode` | overview sidebar |
| `STREAMS.STALE_AFTER` | `snowflakeStreamStaleAfter` | overview sidebar |

Pipes[â](#pipes "Direct link to Pipes")
-----------------------------------------

Atlan maps pipes from Snowflake to its `Pipe` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `PIPES.PIPE_NAME` | `name` | asset profile and overview sidebar |
| `PIPES.COMMENT` | `description` | asset profile and overview sidebar |
| `PIPES.DEFINITION` | `definition` | asset profile and overview sidebar |
| `PIPES.PIPE_OWNER` | `sourceOwners` | asset preview and profile, properties sidebar |
| `PIPES.PIPE_CATALOG` | `databaseName` | asset preview and profile |
| `PIPES.PIPE_SCHEMA` | `schemaName` | asset preview and profile |
| `PIPES.IS_AUTOINGEST_ENABLED` | `snowflakePipeIsAutoIngestEnabled` | overview sidebar |
| `PIPES.NOTIFICATION_CHANNEL_NAME` | `snowflakePipeNotificationChannelName` | overview sidebar |

User\-defined functions[â](#user-defined-functions "Direct link to User-defined functions")
---------------------------------------------------------------------------------------------

Atlan maps user\-defined functions (UDFs) from Snowflake to its `Function` asset type. Atlan currently does not support lineage for user\-defined functions from Snowflake.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `NAME` | `name` | asset profile and overview sidebar |
| `FUNCTION_DEFINITION` | `functionDefinition` | overview sidebar |
| `COMMENT` | `description` | asset profile and overview sidebar |
| `FUNCTION_CATALOG` | `databaseName` | asset preview and profile |
| `FUNCTION_SCHEMA` | `schemaName` | asset preview and profile |
| `FUNCTION_OWNER` | Created (in Snowflake) | properties sidebar |
| `CREATED` | `sourceCreatedAt` | properties sidebar |
| `LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |
| `FUNCTION_LANGUAGE` | `functionLanguage` | overview sidebar |
| `DATA_TYPE` | `functionReturnType` | API only |
| `IS_SECURE` | `functionIsSecure` | asset filter and properties sidebar |
| `IS_EXTERNAL` | `functionIsExternal` | asset filter and properties sidebar |
| `IS_MEMOIZABLE` | `functionIsMemoizable` | API only |
| `ARGUMENT_SIGNATURE` | `functionArguments` | API only |

Dynamic tables[â](#dynamic-tables "Direct link to Dynamic tables")
--------------------------------------------------------------------

Atlan maps dynamic tables from Snowflake to its `DynamicTable` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLES.TABLE_NAME` | `name` | asset profile and overview sidebar |
| `TABLES.COMMENT` | `description` | asset profile and overview sidebar |
| `COLUMNS` (count) | `columnCount` | asset preview and profile, overview sidebar |
| `TABLES.DEFINITION` | `definition` | asset profile and overview sidebar |
| `TABLES.ROW_COUNT` | `rowCount` | asset preview and profile, overview sidebar |
| `TABLES.BYTES` | `sizeBytes` | asset filter and overview sidebar |
| `TABLES.TABLE_OWNER` | Created (in Snowflake) | properties sidebar |
| `TABLES.CREATED` | `sourceCreatedAt` | properties sidebar |
| `TABLES.LAST_ALTERED` | `sourceUpdatedAt` | properties sidebar |

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousMultiple tag values and concatenation](/apps/connectors/data-warehouses/snowflake/references/multiple-tag-values-and-concatenation)[NextPreflight checks for Snowflake](/apps/connectors/data-warehouses/snowflake/references/preflight-checks-for-snowflake)

Copyright Â© 2025 Atlan Pte. Ltd.

