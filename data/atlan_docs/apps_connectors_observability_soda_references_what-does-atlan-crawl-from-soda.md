# Source URL
https://docs.atlan.com/apps/connectors/observability/soda/references/what-does-atlan-crawl-from-soda

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/observability/soda/references/what-does-atlan-crawl-from-soda
link-alternate: https://docs.atlan.com/apps/connectors/observability/soda/references/what-does-atlan-crawl-from-soda
meta-description: Atlan crawls datasets and then filters out all the datasets without any checks. It then crawls the checks associated with each of the datasets with checks from Soda. These checks are cataloged in Atlan to create a relationship with existing assets using the association information from the dataset.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls datasets and then filters out all the datasets without any checks. It then crawls the checks associated with each of the datasets with checks from Soda. These checks are cataloged in Atlan to create a relationship with existing assets using the association information from the dataset.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Soda? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/observability/soda/references/what-does-atlan-crawl-from-soda
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Soda? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Soda?
================================

Atlan crawls datasets and then filters out all the datasets without any checks. It then crawls the checks associated with each of the datasets with checks from Soda. These checks are cataloged in Atlan to create a relationship with existing assets using the association information from the dataset.

Once you have [crawled Soda](/apps/connectors/observability/soda/how-tos/crawl-soda), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following filters are currently supported for Soda assets:

* Check status \- filter Soda checks by status
* Check owner \- filter Soda checks by email address of check owner
* Last scanned at \- filter Soda checks by timestamp for last scanned in Soda

The following Soda filters are currently available for supported SQL assets:

* Data quality status \- filter SQL assets by overall data quality status, including *Pass*, *Warn*, *Fail*, and *Not evaluated*
* Check count \- filter SQL assets by total count of associated Soda checks
* Scanned date \- filter SQL assets by timestamp for last scanned in Soda
* Last synced (in Atlan) \- filter SQL assets by timestamp for when any associated checks were last updated in Atlan

Atlan crawls and maps the following assets and properties from Soda.

Checks[â](#checks "Direct link to Checks")
--------------------------------------------

Atlan maps checks from Soda to its `SodaCheck` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `description` | `description` |
| `id` | `sodaCheckId` |
| `evaluationStatus` | `sodaCheckEvaluationStatus` |
| `definition` | `sodaCheckDefinition` |
| `incidents` | `sodaCheckIncidentCount` |
| `lastCheckRunTime` | `sodaCheckLastScanAt` |
| `cloudUrl` | `sourceURL` |
| `lastUpdated` | `sourceUpdatedAt` |
| `owner.email` | `sourceOwners` |

Supported sources[â](#supported-sources "Direct link to Supported sources")
-----------------------------------------------------------------------------

If you have crawled supported data sources, you can view Soda checks on your existing assets in Atlan:

* [Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena)
* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift)
* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks)
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery)
* [Hive](/apps/connectors/database/hive/how-tos/crawl-hive)
* [Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics)
* [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server)
* [MySQL](/apps/connectors/database/mysql/how-tos/crawl-mysql)
* [PostgreSQL](/apps/connectors/database/postgresql/how-tos/crawl-postgresql)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)
* [Trino](/apps/connectors/database/trino/how-tos/crawl-trino)

Soda checks can also be cataloged for some data sources that are not natively supported in Atlan. These will require additional configuration at source. To ensure that the datasets are mapped to your assets in Atlan, set the value of the `data_source_name` field to `<database>.<schema>` when connecting to:

* [Dask and Pandas](https://docs.soda.io/soda/connect-dask.html)
* [Apache Spark](https://docs.soda.io/soda/connect-spark.html)
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Soda](/apps/connectors/observability/soda/how-tos/crawl-soda)[NextPreflight checks for Soda](/apps/connectors/observability/soda/references/preflight-checks-for-soda)

Copyright Â© 2025 Atlan Pte. Ltd.

