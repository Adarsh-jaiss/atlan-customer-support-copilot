# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery
meta-description: Atlan doesn't run any table scans. Atlan leverages the table preview options from [Google BigQuery](https://cloud.google.com/bigquery/docs/best-practices-costs#preview-data)Â that enable you to view data for free and without affecting any quotas using the `tabledata.list` API. Hence, [table](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#tables) asset previews in Atlan are already cost-optimized. However, this doesn't apply to [views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#views) and [materialized views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#materialized-views).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan doesn't run any table scans. Atlan leverages the table preview options from [Google BigQuery](https://cloud.google.com/bigquery/docs/best-practices-costs#preview-data)Â that enable you to view data for free and without affecting any quotas using the `tabledata.list` API. Hence, [table](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#tables) asset previews in Atlan are already cost-optimized. However, this doesn't apply to [views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#views) and [materialized views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#materialized-views).
meta-og-locale: en
meta-og-title: What does Atlan crawl from Google BigQuery? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Google BigQuery? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Google BigQuery?
===========================================

Once you have [crawled Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following filters are currently supported for these assets:

* [Tables](#tables) \- BigQuery labels and [Is sharded](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery) filters

Atlan doesn't run any table scans. Atlan leverages the table preview options from [Google BigQuery](https://cloud.google.com/bigquery/docs/best-practices-costs#preview-data)Â that enable you to view data for free and without affecting any quotas using the `tabledata.list` API. Hence, [table](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#tables) asset previews in Atlan are already cost\-optimized. However, this doesn't apply to [views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#views) and [materialized views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#materialized-views).

For Google BigQuery [views](#views) and [materialized views](#materialized-views), Atlan sends you a cost nudge before viewing a sample data preview. This informs you about the precise bytes that are spent during the execution of the query, helping you decide if you still want to run the preview.

**Did you know?**You also receive a cost nudge before [querying your Google BigQuery assets](/product/capabilities/insights/references/tips-and-tricks#view-querying-costs).

[https://demo.arcade.software/R16qA1mL00YHM5oS251o?embed](https://demo.arcade.software/R16qA1mL00YHM5oS251o?embed)

Atlan crawls and maps the following assets and properties from Google BigQuery.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps projects from Google BigQuery to its `Database` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `Project ID` | `name` | asset preview, profile, and filter, overview sidebar |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps datasets from Google BigQuery to its `Schema` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_SCHEMA` | `name` | asset preview and profile, overview sidebar |
| `TABLE_COUNT` | `tableCount` | asset preview and profile |
| `VIEW_COUNT` | `viewsCount` | asset preview and profile, overview sidebar |
| `TABLE_CATALOG` | `databaseName` | asset preview |
| `REMARKS` | `description` | asset preview and profile, overview sidebar |
| `CREATED` | `sourceCreatedAt` | asset profile and properties sidebar |
| `MODIFIED` | `sourceUpdatedAt` | asset profile and properties sidebar |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

**Did you know?**[Table](#tables) asset previews are already cost\-optimized. [Google BigQuery](https://cloud.google.com/bigquery/docs/best-practices-costs#preview-data) enables you to use the table preview options to view data for free and without affecting any quotas. Note that this isn't currently supported for [Google BigQuery views and materialized views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery) in Atlan.

Atlan maps tables from Google BigQuery to its `Table` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | asset preview and profile, overview sidebar |
| `REMARKS` | `description` | asset preview and profile, overview sidebar |
| `COLUMN_COUNT` | `columnCount` | asset preview and profile, overview sidebar |
| `ROW_COUNT` | `rowCount` | asset preview, profile, and filter, overview sidebar |
| `SIZE_BYTES` | `sizeBytes` | asset filter and overview sidebar |
| `TABLE_TYPE` | `subType` | asset preview and profile |
| `LABELS` | `assetTags` | overview sidebar |
| `CREATED` | `sourceCreatedAt` | asset profile and properties sidebar |
| `MODIFIED` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `OPTION_NAMES (require_partition_filter)` | `isPartitioned` | API only |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Google BigQuery to its `View` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | asset preview and profile, overview sidebar |
| `REMARKS` | `description` | asset preview and profile, overview sidebar |
| `COLUMN_COUNT` | `columnCount` | asset preview and profile, overview sidebar |
| `TABLE_TYPE` | `subType` | asset preview and profile |
| `CREATED` | `sourceCreatedAt` | asset profile and properties sidebar |
| `MODIFIED` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `OPTION_NAMES (require_partition_filter)` | `isPartitioned` | API only |
| `DDL` | `definition` | asset profile and overview sidebar |

Materialized views[â](#materialized-views "Direct link to Materialized views")
--------------------------------------------------------------------------------

Atlan maps materialized views from Google BigQuery to its `MaterialisedView` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `TABLE_NAME` | `name` | asset preview and profile, overview sidebar |
| `REMARKS` | `description` | asset preview and profile, overview sidebar |
| `COLUMN_COUNT` | `columnCount` | asset preview and profile, overview sidebar |
| `ROW_COUNT` | `rowCount` | asset preview, profile, and filter, overview sidebar |
| `SIZE_BYTES` | `sizeBytes` | asset filter and overview sidebar |
| `TABLE_TYPE` | `subType` | asset preview and profile |
| `CREATED` | `sourceCreatedAt` | asset profile and properties sidebar |
| `MODIFIED` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `OPTION_NAMES (require_partition_filter)` | `isPartitioned` | API only |
| `DDL` | `definition` | asset profile and overview sidebar |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan supports [nested columns up to level 1](/apps/connectors/data-warehouses/google-bigquery/troubleshooting/troubleshooting-google-bigquery-connectivity) for Google BigQuery to help you enrich your semi\-structured data types. You can view nested columns in the asset sidebar for your table assets. Atlan maps columns from Google BigQuery to its `Column` asset type.

ImportantAtlan doesn't crawl primary key (PK) and foreign key (FK) information from Google BigQuery.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `COLUMN_NAME` | `name` | asset preview and profile, overview sidebar |
| `REMARKS, DESCRIPTION` | `description` | asset preview and profile, overview sidebar |
| `ORDINAL_POSITION` | `order` | asset profile |
| `TYPE_NAME` | `dataType` | asset preview, profile, and filter, overview sidebar |
| `IS_NULLABLE` | `isNullable` | API only |
| `IS_PARTITIONING_COLUMN` | `isPartition` | asset preview, profile, and filter |
| `CLUSTERING_COLUMN_LIST` | `isClustered` | asset preview, profile, and filter |

Stored procedures[â](#stored-procedures "Direct link to Stored procedures")
-----------------------------------------------------------------------------

Atlan maps stored procedures from Google BigQuery to its `Procedure` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `PROCEDURE_NAME` | `name` | API only |
| `REMARKS` | `description` | API only |
| `PROCEDURE_TYPE` | `subType` | API only |
| `ROUTINE_DEFINITION` | `definition` | API only |
| `CREATED` | `sourceCreatedAt` | API only |
| `MODIFIED` | `sourceUpdatedAt` | API only |

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousManage Google BigQuery tags](/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags)[NextPreflight checks for Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/references/preflight-checks-for-google-bigquery)

Copyright Â© 2025 Atlan Pte. Ltd.

