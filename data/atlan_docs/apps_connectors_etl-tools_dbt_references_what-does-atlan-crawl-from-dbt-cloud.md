# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud
meta-description: Atlan crawls and maps the following assets and properties from dbt Cloud. Atlan also supports lineage between the following:
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from dbt Cloud. Atlan also supports lineage between the following:
meta-og-locale: en
meta-og-title: What does Atlan crawl from dbt Cloud? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from dbt Cloud? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from dbt Cloud?
=====================================

Atlan crawls and maps the following assets and properties from dbt Cloud. Atlan also supports lineage between the following:

* dbt models
* dbt seeds
* dbt sources
* SQL tables and views materialized by dbt models, dbt seeds, dbt sources
* Column\-level lineage for these entities

warningAtlan only crawls dbt assets that are in the âappliedâ (built) state in dbt Cloud. Models must be part of a successful run to be picked up during crawling; models that are only defined in your project files but havenât been executed wonât be included. For more information about project state, see [Project states in dbt Cloud.](https://docs.getdbt.com/docs/dbt-cloud-apis/project-state)

Once you've [crawled dbt](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt), you can [use dbt\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery:

* `Test status` \- filter [dbt tests](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud#tests) that passed, failed, or have a warning or error
* `Alias` \- filter by the name of a dbt model's identifier in the dbt project
* `Unique id` \- filter by the unique node identifier of a dbt model
* `Project name` \- filter by dbt project name, only supported for [dbt Core version 1\.6\+](https://docs.getdbt.com/references/artifacts/dbt-artifacts#common-metadata)
* `Environment name` \- filter by dbt environment name
* `Job status` \- filter by dbt job status
* `Last job run` \- filter by the last run of the dbt job

Atlan's dbt connectivity also populates custom metadata to further enrich the assets in Atlan. The *Atlan dbt\-specific property* column in the tables below gives the name of the mapped custom metadata property in Atlan.

**Did you know?**Atlan enables you to [sync your dbt tags](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags) and update your dbt assets with the synced tags. It's also possible to [map other metadata on Atlan's assets through your dbt models](/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt).

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from dbt Cloud to its `Table` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `description` | `description` | asset profile and overview sidebar |
| *\[collected via REST API]* | `assetDbtTestStatus` | API only |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `accountName` | `assetDbtAccountName` | asset filter |
| `projectName` | `assetDbtProjectName` | asset filter and overview sidebar |
| `packageName` | `assetDbtPackageName` | asset filter and properties sidebar |
| `tags` | `assetDbtTags` | asset filter and overview sidebar |
| `environment.name (collected via REST API)` | `assetDbtEnvironmentName` | API only |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from dbt Cloud to its `Column` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `description` | `description` | asset profile and overview sidebar |
| *\[collected via REST API]* | `assetDbtTestStatus` | API only |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `accountName` | `assetDbtAccountName` | asset filter |
| `projectName` | `assetDbtProjectName` | asset filter and overview sidebar |
| `packageName` | `assetDbtPackageName` | asset filter and properties sidebar |
| `tags` | `assetDbtTags` | asset filter and overview sidebar |

Models[â](#models "Direct link to Models")
--------------------------------------------

Atlan maps models from dbt Cloud to its `Model` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `owner` | `sourceCreatedBy` | asset profile and properties sidebar |
| *\[dynamically generated using accountId, projectId, and uniqueId]* | `sourceURL` | overview sidebar |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `accountName` | `assetDbtAccountName` | asset filter |
| `projectName` | `assetDbtProjectName` | asset filter and overview sidebar |
| `packageName` | `assetDbtPackageName` | asset filter and properties sidebar |
| `rawCode (available via REST API)` | `dbtRawSQL` | overview sidebar |
| `compiledCode (available via REST API)` | `dbtCompiledSQL` | overview sidebar |
| `tags` | `assetDbtTags` | asset filter and overview sidebar |
| `materializedType` | `dbtMaterializationType` | API only |
| `stats` | `dbtStats` | API only |
| `executionInfo.lastRunStatus` | `dbtJobRuns.dbtModelRunStatus` | overview sidebar |
| `job.status (available via REST API)` | `dbtJobRuns.dbtJobRunStatus` | overview sidebar |
| `job.name (available via REST API)` | `dbtJobRuns.dbtJobName` | overview sidebar |
| `executionInfo.lastJobDefinitionId` | `dbtJobRuns.dbtJobId` | overview sidebar |
| `executionInfo.lastRunId` | `dbtJobRuns.dbtJobRunId` | API only |
| `executionInfo.lastRunGeneratedAt` | `dbtJobRuns.dbtJobRunCompletedAt` | overview sidebar |
| `environmentId` | `dbtJobRuns.dbtEnvironmentId` | API only |
| `environment.name (available via REST API)` | `dbtJobRuns.dbtEnvironmentName` | overview sidebar |
| `compiledCode` | `dbtJobRuns.dbtCompiledCode` | API only |

Sources[â](#sources "Direct link to Sources")
-----------------------------------------------

Atlan maps sources from dbt Cloud to its `DbtSource` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | Asset profile and overview sidebar |
| `description` | `description` | Asset profile and overview sidebar |
| `owner` | `sourceCreatedBy` | Asset profile and properties sidebar |
| *\[dynamically generated using accountId, projectId, and uniqueId]* | `sourceURL` | Overview sidebar |
| `alias` | `assetDbtAlias` | Asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | Asset filter and overview sidebar |
| `accountName` | `assetDbtAccountName` | Asset filter |
| `projectName` | `assetDbtProjectName` | Asset filter and overview sidebar |
| `packageName` | `assetDbtPackageName` | Asset filter and properties sidebar |
| `tags` | `assetDbtTags` | Asset filter and overview sidebar |
| `stats` | `dbtStats` | API only |
| `freshness` | `assetDbtSourceFreshnessCriteria` | Overview sidebar |
| `environmentId` | `dbtJobRuns.dbtEnvironmentId` | API only |
| `environment.name` (available via REST API) | `dbtJobRuns.dbtEnvironmentName` | Overview sidebar |

Tests[â](#tests "Direct link to Tests")
-----------------------------------------

Atlan maps tests from dbt Cloud to its `Test` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| *\[dynamically generated using accountId, projectId, and uniqueId]* | `sourceURL` | overview sidebar |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `account (name)` | `assetDbtAccountName` | asset filter |
| `project (name)` | `assetDbtProjectName` | asset filter, overview and properties sidebar |
| `packageName` | `assetDbtPackageName` | asset filter and properties sidebar |
| `rawCode (available via REST API)` | `dbtTestRawCode` | overview sidebar |
| `compiledCode (available via REST API)` | `dbtTestCompiledCode` | overview sidebar |
| `tags` | `assetDbtTags` | asset filter and overview sidebar |
| `stats` | `dbtStats` | API only |
| `executionInfo.lastRunError` | `dbtTestError` | overview sidebar |
| `executionInfo.lastRunStatus` | `dbtJobRuns.dbtTestRunStatus` | overview sidebar |
| `job.status (available via REST API)` | `dbtJobRuns.dbtJobRunStatus` | overview sidebar |
| `job.name (available via REST API)` | `dbtJobRuns.dbtJobName` | overview sidebar |
| `executionInfo.lastJobDefinitionId` | `dbtJobRuns.dbtJobId` | overview sidebar |
| `executionInfo.lastRunId` | `dbtJobRuns.dbtJobRunId` | API only |
| `executionInfo.lastRunGeneratedAt` | `dbtJobRuns.dbtJobRunCompletedAt` | overview sidebar |
| `environmentId` | `dbtJobRuns.dbtEnvironmentId` | API only |
| `environment.name (available via REST API)` | `dbtJobRuns.dbtEnvironmentName` | overview sidebar |
| `compiledCode` | `dbtJobRuns.dbtCompiledCode` | API only |

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

| Source property | Atlan dbt\-specific property | Where in Atlan |
| --- | --- | --- |
| `alias` | `assetDbtAlias` | asset filter and properties sidebar |
| `meta` | `assetDbtMeta` | API only |
| `uniqueId` | `assetDbtUniqueId` | asset filter and overview sidebar |
| `stats` | `dbtSeedStats` | API only |
| `filePath` | `dbtSeedfilePath` | asset profile and overview sidebar |

[PreviousAdd impact analysis in GitLab](/apps/connectors/etl-tools/dbt/how-tos/add-impact-analysis-in-gitlab)[NextWhat does Atlan crawl from dbt Core?](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core)

Copyright Â© 2025 Atlan Pte. Ltd.

