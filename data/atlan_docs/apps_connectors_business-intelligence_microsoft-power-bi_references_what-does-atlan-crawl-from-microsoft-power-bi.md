# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi
meta-description: Atlan crawls and maps the following assets and properties from Microsoft Power BI.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Microsoft Power BI.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Microsoft Power BI? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Microsoft Power BI? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Microsoft Power BI?
==============================================

[https://demo.arcade.software/OmfiWgI43el0XF7FEfwd?embed](https://demo.arcade.software/OmfiWgI43el0XF7FEfwd?embed)

Atlan crawls and maps the following assets and properties from Microsoft Power BI.

Once you've [crawled Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for these assets:

* [Measures](#measures-) \- External measure filter

dangerCurrently Atlan only represents the assets marked with ð in lineage.

For your Microsoft Power BI [reports](#reports-), Atlan also provides asset previews to help with quick discovery and give you the context you need.

Apps[â](#apps "Direct link to Apps")
--------------------------------------

Atlan maps **Apps** from Microsoft Power BI to its `PowerBIApp` asset type.

| Source Property | Atlan Property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `id` | `powerBIAppId` | properties sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `publishedBy` | `sourceOwners` | overview sidebar |
| `users ( displayName, appUserAccessRight )` | `powerBIAppUsers` | asset profile |
| `groups ( displayName, appUserAccessRight )` | `powerBIAppGroups` | asset profile |

Workspaces[â](#workspaces "Direct link to Workspaces")
--------------------------------------------------------

Atlan maps workspaces from Microsoft Power BI to its `PowerBIWorkspace` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `reportCount` | `reportCount` | asset preview and profile |
| `dashboardCount` | `dashboardCount` | asset profile |
| `datasetCount` | `datasetCount` | asset profile |
| `dataflowCount` | `dataflowCount` | asset profile |
| `webUrl` | `sourceURL` | overview sidebar |

Dashboards ð[â](#dashboards- "Direct link to Dashboards ð")
-------------------------------------------------------------------

Atlan maps dashboards from Microsoft Power BI to its `PowerBIDashboard` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `displayName` | `name` | asset profile and overview sidebar |
| `workspace_name` | `workspaceName` | API only |
| `description` | `description` | asset profile and overview sidebar |
| `tileCount` | `tileCount` | asset profile |
| `webUrl` | `sourceURL` | overview sidebar |

Data sources[â](#data-sources "Direct link to Data sources")
--------------------------------------------------------------

Atlan maps data sources from Microsoft Power BI to its `PowerBIDatasource` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `connectionDetails` | `connectionDetails` | overview sidebar |

Datasets ð[â](#datasets- "Direct link to Datasets ð")
-------------------------------------------------------------

Atlan maps datasets from Microsoft Power BI to its `PowerBIDataset` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `workspace_name` | `workspaceName` | API only |
| `description` | `description` | asset profile and overview sidebar |
| `webUrl` | `sourceURL` | overview sidebar |
| `configuredBy` | `sourceOwners` | asset profile and properties sidebar |
| `createdDate` | `sourceCreatedAt` | asset profile and properties sidebar |
| `endorsementDetails` | `certificateStatus (VERIFIED)` | asset profile and overview sidebar |
| `endorsementDetails (endorsement)` | `certificateStatusMessage`, `powerBIEndorsement` | asset profile and overview sidebar |
| `endorsementDetails (certifiedBy)` | `certificateUpdatedBy` | asset profile and overview sidebar |

Dataflows ð[â](#dataflows- "Direct link to Dataflows ð")
----------------------------------------------------------------

Atlan maps dataflows from Microsoft Power BI to its `PowerBIDataflow` asset type. Atlan currently only supports dataflow lineage for the following SQL sources:

* [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server)
* [Oracle](/apps/connectors/database/oracle/how-tos/set-up-oracle)
* [SAP HANA](/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake)

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `workspace_name` | `workspaceName` | API only |
| `description` | `description` | asset profile and overview sidebar |
| `webUrl` | `sourceURL` | overview sidebar |
| `configuredBy` | `sourceOwners` | asset profile and properties sidebar |
| `modifiedDateTime` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `endorsementDetails` | `certificateStatus (VERIFIED)` | asset profile and overview sidebar |
| `endorsementDetails (endorsement)` | `certificateStatusMessage`, `powerBIEndorsement` | asset profile and overview sidebar |
| `endorsementDetails (certifiedBy)` | `certificateUpdatedBy` | asset profile and overview sidebar |
| `modifiedBy` | `sourceUpdatedBy` | asset profile and properties sidebar |
| `days` | `powerBIDataflowRefreshScheduleFrequency` | properties sidebar |
| `times` | `powerBIDataflowRefreshScheduleTimes` | properties sidebar |
| `localTimeZoneId` | `powerBIDataflowRefreshScheduleTimeZone` | properties sidebar |

Dataflow entity columns ð[â](#dataflow-entity-columns- "Direct link to Dataflow entity columns ð")
----------------------------------------------------------------------------------------------------------

Atlan maps attributes of dataflow entities from Microsoft Power BI to its `PowerBIDataflowEntityColumn` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `attrbutes.name` | `name` | asset profile and overview sidebar |
| `entities.name` | `powerBIDataflowEntityName` | overview sidebar |
| `attributes.$type` | `powerBIDataflowEntityColumnDataType` | asset profile and overview sidebar |

Reports ð[â](#reports- "Direct link to Reports ð")
----------------------------------------------------------

Atlan maps reports from Microsoft Power BI to its `PowerBIReport` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `workspace_name` | `workspaceName` | API only |
| `description` | `description` | asset profile and overview sidebar |
| `pageCount` | `pageCount` | asset profile |
| `webUrl` | `sourceURL` | overview sidebar |
| `createdDateTime` | `sourceCreatedAt` | asset profile and properties sidebar |
| `modifiedDateTime` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `createdBy` | `sourceCreatedBy`, `sourceOwners` | asset profile and properties sidebar |
| `modifiedBy` | `sourceUpdatedBy` | asset profile and properties sidebar |
| `endorsementDetails` | `certificateStatus (VERIFIED)` | asset profile and overview sidebar |
| `endorsementDetails (endorsement)` | `certificateStatusMessage`, `powerBIEndorsement` | asset profile and overview sidebar |
| `endorsementDetails (certifiedBy)` | `certificateUpdatedBy` | asset profile and overview sidebar |

Pages ð[â](#pages- "Direct link to Pages ð")
----------------------------------------------------

Atlan maps pages from Microsoft Power BI to its `PowerBIPage` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `displayName` | `name` | asset profile and overview sidebar |
| `workspace_name` | `workspaceName` | API only |
| `report_name` | `reportName` | API only |

Tiles ð[â](#tiles- "Direct link to Tiles ð")
----------------------------------------------------

Atlan maps tiles from Microsoft Power BI to its `PowerBITile` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `title` | `name` | asset profile and overview sidebar |
| `subTitle` | `description` | asset profile and overview sidebar |
| `workspace_name` | `workspaceName` | API only |
| `dashboard_name` | `dashboardName` | API only |

Tables ð[â](#tables- "Direct link to Tables ð")
-------------------------------------------------------

Atlan maps tables from Microsoft Power BI to its `PowerBITable` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `isHidden` | `isHidden` | API only |
| `sourceExpressions` | `powerBITableSourceExpressions` | API only |
| `columnCount` | `powerBITableColumnCount` | asset profile and preview |
| `measureCount` | `powerBITableMeasureCount` | asset profile and preview |

Columns ð[â](#columns- "Direct link to Columns ð")
----------------------------------------------------------

Atlan maps columns from Microsoft Power BI to its `PowerBIColumn` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `isHidden` | `powerBIIsHidden` | API only |
| `dataCategory` | `powerBIColumnDataCategory` | API only |
| `dataType` | `powerBIColumnDataType` | asset preview and overview sidebar |
| `formatString` | `powerBIFormatString` | API only |
| `sortByColumn` | `powerBISortByColumn` | API only |
| `summarizeBy` | `powerBIColumnSummarizeBy` | API only |

Measures ð[â](#measures- "Direct link to Measures ð")
-------------------------------------------------------------

Atlan maps measures from Microsoft Power BI to its `PowerBIMeasure` asset type. Atlan supports PowerBI Measures for downstream lineage to a PowerBI Page.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `isHidden` | `powerBIIsHidden` | API only |
| `expression` | `powerBIMeasureExpression` | overview sidebar |
| `isExternalMeasure` | `powerBIIsExternalMeasure` | asset filter |
| `formatString` | `powerBIFormatString` | API only |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousMine Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/mine-microsoft-power-bi)[NextPreflight checks for Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/references/preflight-checks-for-microsoft-power-bi)

Copyright Â© 2025 Atlan Pte. Ltd.

