# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core
meta-description: Atlan crawls and maps the following assets and properties from dbt Core. Atlan also supports lineage between the following:
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from dbt Core. Atlan also supports lineage between the following:
meta-og-locale: en
meta-og-title: What does Atlan crawl from dbt Core? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from dbt Core? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from dbt Core?
====================================

Atlan crawls and maps the following assets and properties from dbt Core. Atlan also supports lineage between the following:

* dbt models
* dbt seeds
* dbt sources
* SQL tables and views materialized by dbt models, dbt seeds, dbt sources
* Column\-level lineage for these entities

Once you've [crawled dbt](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt), you can [use dbt\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery:

* `Test status` \- filter [dbt tests](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud#tests) that passed, failed, or have a warning or error
* `Alias` \- filter by the name of a dbt model's identifier in the dbt project
* `Unique id` \- filter by the unique node identifier of a dbt model
* `Project name` \- filter by dbt project name, only supported for [dbt Core version 1\.6\+](https://docs.getdbt.com/references/artifacts/dbt-artifacts#common-metadata)
* `Environment name` \- filter by dbt environment name
* `Job status` \- filter by dbt job status
* `Last job run` \- filter by the last run of the dbt job

Atlan's dbt crawler also populates custom metadata to further enrich the assets in Atlan. The *Atlan dbt\-specific property* column in the tables below gives the name of the mapped custom metadata property in Atlan.

**Did you know?**Atlan lets you [sync your dbt tags](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags) and update your dbt assets with the synced tags. You can also [map other metadata to Atlan's assets through your dbt models](/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt).

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from dbt Core to its `Table` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `description` | `description` | asset profile and overview sidebar |
| `config (alias)` | `alias` | asset filter and properties sidebar |
| `stats (row_count)` | `rowCount` | asset profile and filter, overview sidebar |
| `stats (bytes)` | `sizeBytes` | asset filter and overview sidebar |
| `stats (last_modified)` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `project (name)` | `assetDbtProjectName` | asset filter and overview sidebar |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `raw_sql` or `raw_code` | `dbtRawSQL` | overview sidebar |
| `tags` | `assetDbtTags` | asset filter and overview sidebar |
| `packageName` | `assetDbtPackageName` | asset filter and properties sidebar |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `created_at` | `sourceCreatedAt` | asset profile, overview and properties sidebar |
| `compiled_sql` or `compiled_code` | `dbtCompiledSQL` | overview sidebar |
| `freshness_data (criteria)` | `assetDbtSourceFreshnessCriteria` | overview sidebar |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from dbt Core to its `Column` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `description` | `description` | asset profile and overview sidebar |
| `meta` | `assetDbtMeta` | API only |
| `tags` | `assetDbtTags` | asset filter and overview sidebar |
| `packageName` | `assetDbtPackageName` | asset filter and properties sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `created_at` | `sourceCreatedAt` | asset profile, overview and properties sidebar |

Models[â](#models "Direct link to Models")
--------------------------------------------

Atlan maps models from dbt Core to its `Model` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `executeCompletedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `owner` | `sourceCreatedBy` | asset profile and properties sidebar |
| `status` | `dbtJobRuns.dbtModelRunStatus` | overview sidebar |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `raw_sql` or `raw_code` | `dbtRawSQL` | overview sidebar |
| `compiled_sql` or `compiled_code` | `dbtCompiledSQL` | overview sidebar |
| `stats` | `dbtStats` | API only |
| `config.materialized` | `dbtMaterializationType` | API only |

Sources[â](#sources "Direct link to Sources")
-----------------------------------------------

Atlan maps sources from dbt Core to its `DbtSource` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `owner` | `sourceCreatedBy` | asset profile and properties sidebar |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `tags` | `assetDbtTags` | asset filter and overview sidebar |
| `criteria` | `assetDbtSourceFreshnessCriteria` | overview sidebar |
| `stats` | `dbtStats` | API only |
| `state` | `dbtState` | API only |

Tests[â](#tests "Direct link to Tests")
-----------------------------------------

warningFor dbt Core, upload the `run_results.json` file to crawl dbt tests. It's recommended to place the file in the same folder as the `manifest.json` file.

Atlan maps tests from dbt Core to its `Test` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `name` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `tags` | `assetDbtTags` | asset filter and overview sidebar |
| `status` | `dbtTestStatus` | asset profile |
| `state` | `dbtTestState` | API only |
| `error` | `dbtTestError` | asset profile and overview sidebar |
| `raw_code` | `dbtTestRawCode` | overview sidebar |
| `raw_sql` | `dbtTestRawSQL` | overview sidebar |
| `compiled_code` | `dbtTestCompiledCode` | API only |
| `compiled_sql` | `dbtTestCompiledSQL` | API only |
| `language` | `dbtTestLanguage` | asset profile and overview sidebar |

Seeds[â](#seeds "Direct link to Seeds")
-----------------------------------------

Atlan maps models from dbt Core to its `Seed` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `executeCompletedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `owner` | `sourceCreatedBy` | asset profile and properties sidebar |
| `status` | `dbtJobRuns.dbtModelRunStatus` | overview sidebar |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `stats` | `dbtSeedStats` | API only |
| `filePath` | `dbtSeedfilePath` | asset profile and overview sidebar |

[PreviousWhat does Atlan crawl from dbt Cloud?](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud)[NextConnection issues](/apps/connectors/etl-tools/dbt/troubleshooting/troubleshooting-dbt-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

