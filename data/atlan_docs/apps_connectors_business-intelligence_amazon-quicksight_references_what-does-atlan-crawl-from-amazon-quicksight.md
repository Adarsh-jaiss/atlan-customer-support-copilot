# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/references/what-does-atlan-crawl-from-amazon-quicksight

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/references/what-does-atlan-crawl-from-amazon-quicksight
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/references/what-does-atlan-crawl-from-amazon-quicksight
meta-description: Atlan currently supports lineage for the Amazon QuickSight connector to the following data sources:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan currently supports lineage for the Amazon QuickSight connector to the following data sources:.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Amazon QuickSight? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/references/what-does-atlan-crawl-from-amazon-quicksight
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Amazon QuickSight? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Amazon QuickSight?
=============================================

Atlan currently supports lineage for the Amazon QuickSight connector to the following data sources:

* [Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/set-up-amazon-athena)
* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift)
* [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server)
* [MySQL](/apps/connectors/database/mysql/how-tos/set-up-mysql)
* [PostgreSQL](/apps/connectors/database/postgresql/how-tos/set-up-postgresql)
* [Salesforce](/apps/connectors/crm/salesforce/how-tos/set-up-salesforce)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake)

Atlan crawls and maps the following assets and properties from Amazon QuickSight.

Analyses[â](#analyses "Direct link to Analyses")
--------------------------------------------------

Atlan maps analyses from Amazon QuickSight to its `QuickSightAnalysis` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |
| status | quickSightAnalysisStatus |
| calculatedFields | quickSightAnalysisCalculatedFields |
| parameterDeclarations | quickSightAnalysisParameterDeclarations |
| filterGroups | quickSightAnalysisFilterGroups |

Dashboards[â](#dashboards "Direct link to Dashboards")
--------------------------------------------------------

Atlan maps dashboards from Amazon QuickSight to its `QuickSightDashboard` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |
| publishedVersionNumber | quickSightDashboardPublishedVersionNumber |
| lastPublishedTime | quickSightDashboardLastPublishedTime |
| analysisName | quickSightAnalysisQualifiedName |

Datasets[â](#datasets "Direct link to Datasets")
--------------------------------------------------

Atlan maps datasets from Amazon QuickSight to its `QuickSightDataset` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |
| ImportMode | quickSightDatasetImportMode |
| outputColumnCount | quickSightDatasetColumnCount |

Folders[â](#folders "Direct link to Folders")
-----------------------------------------------

Atlan maps folders from Amazon QuickSight to its `QuickSightFolder` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |
| FolderType | quickSightFolderType |
| SharingModel | quickSightFolderSharingModel |
| folderHierarchy | quickSightFolderHierarchy |

Dataset fields[â](#dataset-fields "Direct link to Dataset fields")
--------------------------------------------------------------------

Atlan maps dataset fields from Amazon QuickSight to its `QuickSightDatasetField` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |
| type | quickSightDatasetFieldType |
| datasetQualifiedName | quickSightDatasetQualifiedName |

Analysis visuals[â](#analysis-visuals "Direct link to Analysis visuals")
--------------------------------------------------------------------------

Atlan maps analysis visuals from Amazon QuickSight to its `QuickSightAnalysisVisual` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |
| Id | quickSightId |
| analysisQualifiedName | quickSightAnalysisQualifiedName |
| sheetId | quickSightSheetId |
| sheetName | quickSightSheetName |

Dashboard visuals[â](#dashboard-visuals "Direct link to Dashboard visuals")
-----------------------------------------------------------------------------

Atlan maps dashboard visuals from Amazon QuickSight to its `QuickSightDashboardVisual` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |
| Id | quickSightId |
| dashboardQualifiedName | quickSightDashboardQualifiedName |
| sheetId | quickSightSheetId |
| sheetName | quickSightSheetName |

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [salesforce](/tags/salesforce)

[PreviousCrawl Amazon QuickSight](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/crawl-amazon-quicksight)[NextPreflight checks for Amazon QuickSight](/apps/connectors/business-intelligence/amazon-quicksight/references/preflight-checks-for-amazon-quicksight)

Copyright Â© 2025 Atlan Pte. Ltd.

