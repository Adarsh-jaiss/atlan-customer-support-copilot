# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/mode/references/what-does-atlan-crawl-from-mode

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/mode/references/what-does-atlan-crawl-from-mode
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/mode/references/what-does-atlan-crawl-from-mode
meta-description: Atlan crawls and maps the following assets and properties from Mode.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Mode.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Mode? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/mode/references/what-does-atlan-crawl-from-mode
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Mode? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Mode?
================================

Atlan crawls and maps the following assets and properties from Mode.

Workspaces[â](#workspaces "Direct link to Workspaces")
--------------------------------------------------------

Atlan maps workspaces from Mode to its `ModeWorkspace` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `id` | `modeId` |
| `token` | `modeToken` |
| `username` | `modeWorkspaceUsername` |
| `space_count` | `modeCollectionCount` |
| `_links.web.href` | `sourceURL` |
| `created_at` | `sourceCreatedAt` |

Collections[â](#collections "Direct link to Collections")
-----------------------------------------------------------

Atlan maps collections from Mode to its `ModeCollection` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `description` | `description` |
| `id` | `modeId` |
| `token` | `modeToken` |
| `space_type` | `modeCollectionType` |
| `state` | `modeCollectionState` |
| `_links.creator` | `sourceCreatedBy` |
| `_links.web` | `sourceURL` |
| `extras.workspace.name` | `modeWorkspaceName` |
| Array of reports | `modeReports` |

Reports[â](#reports "Direct link to Reports")
-----------------------------------------------

Atlan maps reports from Mode to its `ModeReport` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `description` | `description` |
| `id` | `modeId` |
| `token` | `modeToken` |
| `created_at` | `sourceCreatedAt` |
| `updated_at` | `sourceUpdatedAt` |
| `_links.creator` | `sourceCreatedBy` |
| `_links.web` | `sourceURL` |
| `space_token` | `modeCollectionToken` |
| `account_username` | `modeWorkspaceUsername` |
| `published_at` | `modeReportPublishedAt` |
| `query_count` | `modeQueryCount` |
| `chart_count` | `modeChartCount` |
| `query_preview` | `modeQueryPreview` |
| `public` | `modeIsPublic` |
| `shared` | `modeIsShared` |
| `view_count` | `popularityScore` |
| `archived` | `modeIsArchived` |
| Array of collections | `modeCollections` |

Queries[â](#queries "Direct link to Queries")
-----------------------------------------------

Atlan maps queries from Mode to its `ModeQuery` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `id` | `modeId` |
| `token` | `modeToken` |
| `created_at` | `sourceCreatedAt` |
| `updated_at` | `sourceUpdatedAt` |
| `_links.creator.href` | `sourceCreatedBy` |
| `raw_query` | `modeRawQuery` |
| `explorations_count` | `modeExplorationCount` |
| `report_imports_count` | `modeReportImportCount` |
| `data_source_id` | `modeDatasourceId` |
| `datasource.name` or `extras.datasource.name` | `modeDatasourceName` |
| `extras.report.name` | `modeReportName` |

Charts[â](#charts "Direct link to Charts")
--------------------------------------------

Atlan maps charts from Mode to its `ModeChart` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `description` | `description` |
| `token` | `modeToken` |
| `view_vegas.chartType` | `modeChartType` |
| `created_at` | `sourceCreatedAt` |
| `updated_at` | `sourceUpdatedAt` |
| `_links.creator.href` | `sourceCreatedBy` |
| `_links.report_viz_web.href` | `sourceURL` |
| `extras.query.name` | `modeQueryName` |

**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)

[PreviousCrawl Mode](/apps/connectors/business-intelligence/mode/how-tos/crawl-mode)[NextPreflight checks for Mode](/apps/connectors/business-intelligence/mode/references/preflight-checks-for-mode)

Copyright Â© 2025 Atlan Pte. Ltd.

