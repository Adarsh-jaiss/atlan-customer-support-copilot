# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau
meta-description: Atlan crawls and maps the following assets and properties from Tableau.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Tableau.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Tableau? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Tableau? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Tableau?
===================================

Atlan crawls and maps the following assets and properties from Tableau.

Once you've [crawled Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following filters are currently supported for these assets:

* Projects \- filter Tableau assets by projects, including nested projects
* Data sources \- Is published filter

For your Tableau [worksheets](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau#worksheets) and [dashboards](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau#dashboards), Atlan also provides asset previews to help with quick discovery and give you the context you need.

warningYou may need to [disable clickjack protection](https://help.tableau.com/current/server/en-us/clickjack_protection.htm#disabling-clickjack-protection) for Tableau asset previews to load.

[https://demo.arcade.software/Vw0qsTS0pjkS45MP81xR?embed](https://demo.arcade.software/Vw0qsTS0pjkS45MP81xR?embed)

Lineage[â](#lineage "Direct link to Lineage")
-----------------------------------------------

info**Did you know?** Lineage to dashboards may appear incomplete or missing if worksheets are not crawled. Additionally, Tableau assets that haven't been refreshed since May 27, 2025, won't display the new column\-level lineage (CLL) or updated lineage paths.

Atlan supports lineage for the following:

* **Asset Lineage** \- Datasource to Dashboard, Datasource to Worksheet, Datasource to Workbook
* **Column Level Lineage** \- Supported for Datasource to Worksheet and Worksheet to Dashboard

Sites[â](#sites "Direct link to Sites")
-----------------------------------------

Atlan maps sites from Tableau to its `TableauSite` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |

Projects[â](#projects "Direct link to Projects")
--------------------------------------------------

Atlan maps projects from Tableau to its `TableauProject` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `createdAt` | `sourceCreatedAt` | asset profile and properties sidebar |
| `owner` | `[sourceOwner](/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity)` | asset profile and overview sidebar |
| `updatedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `hierarchy` | `projectHierarchy` | asset preview and profile, overview sidebar |
| `topLevelProject` | `isTopLevelProject` | API only |

Flows[â](#flows "Direct link to Flows")
-----------------------------------------

warningDue to limitations at source, Atlan won't be able to crawl Tableau flows if you use the [JWT bearer authentication](/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau#jwt-bearer-authentication) method.

Atlan maps flows from Tableau to its `TableauFlow` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `owner` | `[sourceOwner](/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity)` | asset profile and overview sidebar |
| `project_extra (hierarchy)` | `projectHierarchy` | asset preview and profile, overview sidebar |

Metrics[â](#metrics "Direct link to Metrics")
-----------------------------------------------

warningTableau has [retired metrics methods in API 3\.22](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_metrics.htm) for Tableau Cloud and Tableau Server version 2024\.2\. If you're using Tableau API version 3\.22 or higher, metadata for metrics is unavailable in Atlan.

Atlan maps metrics from Tableau to its `TableauMetric` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `createdAt` | `sourceCreatedAt` | asset profile and properties sidebar |
| `updatedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `project_extra (hierarchy)` | `projectHierarchy` | asset preview and profile, overview sidebar |

Workbooks[â](#workbooks "Direct link to Workbooks")
-----------------------------------------------------

Atlan maps workbooks from Tableau to its `TableauWorkbook` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `webpageUrl` | `sourceURL` | overview sidebar |
| `owner` | `[sourceOwner](/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity)` | asset profile and overview sidebar |
| `createdAt` | `sourceCreatedAt` | asset profile and properties sidebar |
| `updatedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `project_extra (hierarchy)` | `projectHierarchy` | asset preview and profile, overview sidebar |

Worksheets[â](#worksheets "Direct link to Worksheets")
--------------------------------------------------------

Atlan maps worksheets from Tableau to its `TableauWorksheet` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `createdAt` | `sourceCreatedAt` | asset profile and properties sidebar |
| `updatedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `source_url` | `sourceURL` | overview sidebar |
| `project_extra (hierarchy)` | `projectHierarchy` | asset preview and profile, overview sidebar |

Dashboards[â](#dashboards "Direct link to Dashboards")
--------------------------------------------------------

Atlan maps dashboards from Tableau to its `TableauDashboard` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `createdAt` | `sourceCreatedAt` | asset profile and properties sidebar |
| `updatedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `source_url` | `sourceURL` | overview sidebar |
| `project_extra (hierarchy)` | `projectHierarchy` | asset preview and profile, overview sidebar |

Data sources[â](#data-sources "Direct link to Data sources")
--------------------------------------------------------------

Atlan maps data sources (embedded and published) from Tableau to its `TableauDatasource` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `owner` | [sourceOwner](/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity) (for published data sources only) | asset profile and overview sidebar |
| `isPublished` | `isPublished` | asset preview and overview sidebar |
| `hasExtracts` | `hasExtracts` | API only |
| `upstreamTables` | `upstreamTables` | API only |
| `upstreamDatabases` | `upstreamDatabases` | API only |
| `isCertified` | [certificateStatus](/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity) (`VERIFIED`) | asset preview and filter, overview sidebar |
| `certifier` | `certifier` | API only |
| `certificationNote` | `certificationStatusMessage` | API only |
| `certifierDisplayName` | `certificateUpdatedBy` | asset preview and overview sidebar |
| `project_extra (hierarchy)` | `projectHierarchy` | asset preview and profile, overview sidebar |

Data source fields[â](#data-source-fields "Direct link to Data source fields")
--------------------------------------------------------------------------------

Atlan maps data source fields and column fields from Tableau to its `TableauDatasourceField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `upstreamTables` | `upstreamTables` | API only |
| `upstreamColumns` | `upstreamColumns` | API only |
| `dataCategory` | `tableauDatasourceFieldDataCategory` | API only |
| `role` | `tableauDatasourceFieldRole` | API only |
| `dataType` | `tableauDatasourceFieldDataType` | API only |
| `formula` | `tableauDatasourceFieldFormula` | API only |
| `binSize` | `tableauDatasourceFieldBinSize` | API only |
| `__typename` | `datasourceFieldType` | API only |
| `project_extra (hierarchy)` | `projectHierarchy` | asset preview and profile, overview sidebar |

Custom SQL[â](#custom-sql "Direct link to Custom SQL")
--------------------------------------------------------

Atlan parses custom SQL queries used in Tableau data sources to extract lineage information. This process identifies the relationships between data assets based on the SQL logic defined within Tableau.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `downstreamDatasources` | `TableauDatasource` | Used to define downstream impact of lineage |
| `query` | `CustomSQLQuery` | Used to form lineage from source |

Calculated fields[â](#calculated-fields "Direct link to Calculated fields")
-----------------------------------------------------------------------------

Atlan maps calculated fields from Tableau to its `TableauCalculatedField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `dataCategory` | `dataCategory` | API only |
| `role` | `role` | API only |
| `dataType` | `tableauDataType` | asset preview, filter, and profile, overview sidebar |
| `formula` | `formula` | overview sidebar |
| `project_extra (hierarchy)` | `projectHierarchy` | asset preview and profile, overview sidebar |

Lineage[â](#lineage-1 "Direct link to Lineage")
-------------------------------------------------

Atlan calculates lineage for Tableau as follows:

| Source object | Tableau object | Tableau object (downstream) |
| --- | --- | --- |
| Table | Published data source | Published data source |
| Table | Published data source | Embedded data source |
| Table | Embedded data source |  |
| Column | Data source field | Calculated field |
| Column | Data source field | Data source field |

infoLineage is currently not supported for Tableau [flows](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau#flows) and [metrics](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau#metrics).

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl on\-premises Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-on-premises-tableau)[NextPreflight checks for Tableau](/apps/connectors/business-intelligence/tableau/references/preflight-checks-for-tableau)

Copyright Â© 2025 Atlan Pte. Ltd.

