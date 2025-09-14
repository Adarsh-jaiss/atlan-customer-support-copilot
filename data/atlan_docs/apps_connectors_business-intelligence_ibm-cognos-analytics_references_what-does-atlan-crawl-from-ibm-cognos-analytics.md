# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/references/what-does-atlan-crawl-from-ibm-cognos-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/references/what-does-atlan-crawl-from-ibm-cognos-analytics
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/references/what-does-atlan-crawl-from-ibm-cognos-analytics
meta-description: Atlan crawls and maps the following assets and properties from IBM Cognos Analytics.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from IBM Cognos Analytics.
meta-og-locale: en
meta-og-title: What does Atlan crawl from IBM Cognos Analytics? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/references/what-does-atlan-crawl-from-ibm-cognos-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from IBM Cognos Analytics? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from IBM Cognos Analytics?
================================================

Atlan crawls and maps the following assets and properties from IBM Cognos Analytics.

Atlan also supports lineage:

* For packages, files, reports, and modules.
* To upstream sources \- Microsoft SQL Server and Snowflake.

Field\-level lineage is currently not supported.

Atlan generates the `sourceURL` property for IBM Cognos Analytics assets using a combination of the host, port, and `id` of the asset. This allows Atlan to help you view your assets directly in IBM Cognos Analytics from the asset profile.

* [Direct extraction](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-ibm-cognos-analytics) \- in addition to `id`, Atlan obtains the host and port values from the credentials you provided while setting up a crawler workflow.
* [Offline extraction](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access) \- in addition to `id`, Atlan obtains the host and port values from the parameters with which the offline extractor is executed.

Important* Assets marked with ð includes lineage and column\-level lineage.
* Assets marked with ð display column information.

Folders[â](#folders "Direct link to Folders")
-----------------------------------------------

Atlan maps folders from IBM Cognos Analytics to its `CognosFolder` asset type.

| Source property | Atlan property |
| --- | --- |
| `defaultName` | `name` |
| `defaultDescription` | `description` |
| `id` | `cognosId` |
| `searchPath` | `cognosPath` |
| `type` | `cognosType` |
| `version` | `cognosVersion` |
| `hidden` | `cognosIsHidden` |
| `creationTime` | `sourceCreatedAt` |
| `modificationTime` | `sourceUpdatedAt` |
| `owner` | `sourceOwners` |

Dashboards ð[â](#dashboards- "Direct link to Dashboards ð")
-------------------------------------------------------------------

Atlan maps dashboards from IBM Cognos Analytics to its `CognosDashboard` asset type.

| Source property | Atlan property |
| --- | --- |
| `defaultName` | `name` |
| `defaultDescription` | `description` |
| `id` | `cognosId` |
| `searchPath` | `cognosPath` |
| `type` | `cognosType` |
| `version` | `cognosVersion` |
| `hidden` | `cognosIsHidden` |
| `creationTime` | `sourceCreatedAt` |
| `modificationTime` | `sourceUpdatedAt` |
| `owner` | `sourceOwners` |

Packages ð[â](#packages- "Direct link to Packages ð")
-------------------------------------------------------------

Atlan maps packages from IBM Cognos Analytics to its `CognosPackage` asset type.

| Source property | Atlan property |
| --- | --- |
| `defaultName` | `name` |
| `defaultDescription` | `description` |
| `id` | `cognosId` |
| `searchPath` | `cognosPath` |
| `type` | `cognosType` |
| `version` | `cognosVersion` |
| `hidden` | `cognosIsHidden` |
| `creationTime` | `sourceCreatedAt` |
| `modificationTime` | `sourceUpdatedAt` |
| `owner` | `sourceOwners` |

Explorations ð[â](#explorations- "Direct link to Explorations ð")
-------------------------------------------------------------------------

Atlan maps explorations from IBM Cognos Analytics to its `CognosExploration` asset type.

| Source property | Atlan property |
| --- | --- |
| `defaultName` | `name` |
| `defaultDescription` | `description` |
| `id` | `cognosId` |
| `searchPath` | `cognosPath` |
| `type` | `cognosType` |
| `version` | `cognosVersion` |
| `hidden` | `cognosIsHidden` |
| `creationTime` | `sourceCreatedAt` |
| `modificationTime` | `sourceUpdatedAt` |
| `owner` | `sourceOwners` |

Reports ð[â](#reports- "Direct link to Reports ð")
----------------------------------------------------------

Atlan maps reports from IBM Cognos Analytics to its `CognosReport` asset type.

| Source property | Atlan property |
| --- | --- |
| `defaultName` | `name` |
| `defaultDescription` | `description` |
| `id` | `cognosId` |
| `searchPath` | `cognosPath` |
| `type` | `cognosType` |
| `version` | `cognosVersion` |
| `hidden` | `cognosIsHidden` |
| `creationTime` | `sourceCreatedAt` |
| `modificationTime` | `sourceUpdatedAt` |
| `owner` | `sourceOwners` |

Files ð[â](#files- "Direct link to Files ð")
----------------------------------------------------

Atlan maps files from IBM Cognos Analytics to its `CognosFile` asset type.

| Source property | Atlan property |
| --- | --- |
| `defaultName` | `name` |
| `defaultDescription` | `description` |
| `id` | `cognosId` |
| `searchPath` | `cognosPath` |
| `type` | `cognosType` |
| `version` | `cognosVersion` |
| `hidden` | `cognosIsHidden` |
| `creationTime` | `sourceCreatedAt` |
| `modificationTime` | `sourceUpdatedAt` |
| `owner` | `sourceOwners` |

Data sources[â](#data-sources "Direct link to Data sources")
--------------------------------------------------------------

Atlan maps data sources from IBM Cognos Analytics to its `CognosDatasource` asset type.

| Source property | Atlan property |
| --- | --- |
| `defaultName` | `name` |
| `defaultDescription` | `description` |
| `id` | `cognosId` |
| `searchPath` | `cognosPath` |
| `type` | `cognosType` |
| `version` | `cognosVersion` |
| `hidden` | `cognosIsHidden` |
| `creationTime` | `sourceCreatedAt` |
| `modificationTime` | `sourceUpdatedAt` |
| `owner` | `sourceOwners` |
| `connectionString` | `cognosDatasourceConnectionString` |

Modules ð[â](#modules- "Direct link to Modules ð")
----------------------------------------------------------

Atlan maps modules from IBM Cognos Analytics to its `CognosModule` asset type.

| Source property | Atlan property |
| --- | --- |
| `defaultName` | `name` |
| `defaultDescription` | `description` |
| `id` | `cognosId` |
| `searchPath` | `cognosPath` |
| `type` | `cognosType` |
| `version` | `cognosVersion` |
| `modificationTime` | `sourceUpdatedAt` |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps fields from IBM Cognos Analytics to its CognosColumns asset type. Based on the asset type, some attributes may not be extracted:

* `cognosColumnRegularAggregate` appears only for reports and datasets.
* `cognosColumnDatatype` appears only for modules.

| Source property | Atlan property |
| --- | --- |
| `label` | `name` |
| `datatype` | `cognosDatatype` |
| `regularAggregate` | `cognosRegularAggregate` |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl on\-premises IBM Cognos Analytics](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-on-premises-ibm-cognos-analytics)[NextTroubleshooting IBM Cognos Analytics connectivity](/apps/connectors/business-intelligence/ibm-cognos-analytics/troubleshooting/troubleshooting-ibm-cognos-analytics-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

