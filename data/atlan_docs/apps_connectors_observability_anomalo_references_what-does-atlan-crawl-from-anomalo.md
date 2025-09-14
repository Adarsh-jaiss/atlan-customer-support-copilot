# Source URL
https://docs.atlan.com/apps/connectors/observability/anomalo/references/what-does-atlan-crawl-from-anomalo

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/observability/anomalo/references/what-does-atlan-crawl-from-anomalo
link-alternate: https://docs.atlan.com/apps/connectors/observability/anomalo/references/what-does-atlan-crawl-from-anomalo
meta-description: Once you have [integrated Anomalo](/apps/connectors/observability/anomalo/how-tos/integrate-anomalo), Atlan will receive webhook events when checks are executed in Anomalo. These checks will be cataloged in Atlan to create a relationship with existing assets using the association information from the check.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [integrated Anomalo](/apps/connectors/observability/anomalo/how-tos/integrate-anomalo), Atlan will receive webhook events when checks are executed in Anomalo. These checks will be cataloged in Atlan to create a relationship with existing assets using the association information from the check.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Anomalo? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/observability/anomalo/references/what-does-atlan-crawl-from-anomalo
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Anomalo? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Anomalo?
===================================

Once you have [integrated Anomalo](/apps/connectors/observability/anomalo/how-tos/integrate-anomalo), Atlan will receive webhook events when checks are executed in Anomalo. These checks will be cataloged in Atlan to create a relationship with existing assets using the association information from the check.

You can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following Anomalo filters are currently available for supported SQL assets:

* Has checks \- filter SQL assets associated with Anomalo checks
* Check status \- filter SQL assets by overall data quality status such as *Pass* or *Fail*
* Check methods \- filter SQL assets by specific [types of checks configured](https://docs.anomalo.com/checks/table-observability-checks)
* Number of checks \- filter SQL assets by total count of checks configured in Anomalo
* Last checked \- filter SQL assets by timestamp for when any associated checks were last scanned in Anomalo

Atlan crawls and maps the following assets and properties from Anomalo.

Checks[â](#checks "Direct link to Checks")
--------------------------------------------

Atlan maps checks from Anomalo to its `AnomaloCheck` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `description` | `description` |
| `run_config._metadata.check_type` | `anomaloCheckCategoryType` |
| `run_config.check` | `anomaloCheckType` |
| `run_config._metadata.priority_level` | `anomaloCheckPriorityLevel` |
| `run_config._metadata.is_system_check` | `anomaloCheckIsSystemAdded` |
| `status` | `anomaloCheckStatus` |
| `check_status_image_url` | `anomaloCheckStatusImageUrl` |
| `completed_at` | `anomaloCheckLastRunCompletedAt` |
| `results.evaluated_message` | `anomaloCheckLastRunEvaluatedMessage` |
| `check_run_url` | `anomaloCheckLastRunUrl` |
| `results.history_message` | `anomaloCheckHistoricRunStatus` |

Supported sources[â](#supported-sources "Direct link to Supported sources")
-----------------------------------------------------------------------------

If you have crawled supported data sources, you can view Anomalo checks on your existing assets in Atlan:

* [Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena)
* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift)
* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks)
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery)
* [Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics)
* [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server)
* [MySQL](/apps/connectors/database/mysql/how-tos/crawl-mysql)
* [Oracle](/apps/connectors/database/oracle/how-tos/crawl-oracle)
* [PostgreSQL](/apps/connectors/database/postgresql/how-tos/crawl-postgresql)
* [PrestoSQL](/apps/connectors/database/prestosql/how-tos/crawl-prestosql)
* [SAP HANA](/apps/connectors/database/sap-hana/how-tos/crawl-sap-hana)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)
* [Teradata](/apps/connectors/database/teradata/how-tos/crawl-teradata)
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousHow to integrate Anomalo](/apps/connectors/observability/anomalo/how-tos/integrate-anomalo)[NextPreflight checks for Anomalo](/apps/connectors/observability/anomalo/references/preflight-checks-for-anomalo)

Copyright Â© 2025 Atlan Pte. Ltd.

