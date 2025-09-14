# Source URL
https://docs.atlan.com/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce
link-alternate: https://docs.atlan.com/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce
meta-description: Atlan only performs GET requests on these five endpoints:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan only performs GET requests on these five endpoints:.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Salesforce? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Salesforce? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Salesforce?
======================================

Atlan only performs `GET` requests on these five endpoints:

1. [sObject Basic Information](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info_get.htm)
2. [Query](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_query.htm)
3. [Reports](https://developer.salesforce.com/docs/atlas.en-us.240.0.api_analytics.meta/api_analytics/sforce_analytics_rest_api_resource_reference.htm)
4. [Dashboards](https://developer.salesforce.com/docs/atlas.en-us.240.0.api_analytics.meta/api_analytics/analytics_api_dashboard_resource_reference.htm)
5. [Folders](https://developer.salesforce.com/docs/atlas.en-us.api_analytics.meta/api_analytics/analytics_api_folders_reference_resource.htm)

**Did you know?**Each endpoint will be set in its own OAuth client session. For every API request, it will hit the Salesforce login endpoint, which means there will be at least five (same as the number of endpoints above) login entries in your Salesforce account's login history within the duration of the scheduled workflow run.

Atlan crawls and maps the following assets and properties from Salesforce.

Once you've [crawled Salesforce](/apps/connectors/crm/salesforce/how-tos/crawl-salesforce), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following filters are currently supported for these assets:

* [Fields](#fields) \- Is encrypted and Is required filters

Organizations[â](#organizations "Direct link to Organizations")
-----------------------------------------------------------------

Atlan maps organizations from Salesforce to its `SalesforceOrganization` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `id` | `sourceId` | overview sidebar |
| `name` | `name` | asset preview and profile, overview sidebar |
| `description` | `description` | asset preview and profile, overview sidebar |
| `webUrl` | `sourceURL` | overview sidebar |
| `createdDate` | `sourceCreatedAt` | asset profile and properties sidebar |
| `lastModifiedDate` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `createdBy` | `sourceCreatedBy` | asset profile and properties sidebar |
| `lastModifiedBy` | `sourceUpdatedBy` | asset profile and properties sidebar |

Objects[â](#objects "Direct link to Objects")
-----------------------------------------------

Atlan maps objects from Salesforce to its `SalesforceObject` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `label` | `name` | asset preview and profile, overview sidebar |
| `name` | `apiName` | overview sidebar |
| `description` | `description` | asset preview and profile, overview sidebar |
| `custom` | `isCustom` | asset preview and profile, overview sidebar |
| `mergable` | `isMergable` | API only |
| `queryable` | `isQueryable` | API only |
| `fieldCount` | `fieldCount` | asset preview and overview sidebar |
| `webUrl` | `sourceURL` | overview sidebar |
| `lastModifiedDate` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `lastModifiedBy` | `sourceUpdatedBy` | asset profile and properties sidebar |

Fields[â](#fields "Direct link to Fields")
--------------------------------------------

Atlan maps fields from Salesforce to its `SalesforceField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `label` | `name` | asset preview and profile, overview sidebar |
| `name` | `apiName` | overview sidebar |
| `type` | `dataType` | asset preview, profile, and filter, overview sidebar |
| `description` | `description` | asset preview and profile, overview sidebar |
| `lastModifiedDate` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `lastModifiedBy` | `sourceUpdatedBy` | asset profile and properties sidebar |
| `calculated` | `isCalculated` | API only |
| `calculatedFormula` | `formula` | overview sidebar |
| `defaultValue` | `defaultValue` | API only |
| `caseSensitive` | `isCaseSensitive` | API only |
| `custom` | `isCustom` | asset preview and profile, overview sidebar |
| `encrypted` | `isEncrypted` | API only |
| `nillable` | `isNullable` | overview sidebar (*Empty values allowed* field) |
| `polymorphicForeignKey` | `isPolymorphicForeignKey` | API only |
| `order` | `order` | API only |
| `length` | `maxLength` | properties sidebar |
| `precision` | `precision` | properties sidebar |
| `scale` | `numericScale` | API only |
| `unique` | `isUnique` | API only |
| `inlineHelpText` | `inlineHelpText` | overview sidebar |
| `picklistValues` | `picklistValues` | overview sidebar |

Reports[â](#reports "Direct link to Reports")
-----------------------------------------------

Atlan maps reports from Salesforce to its `SalesforceReport` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `id` | `sourceId` | overview sidebar |
| `name` | `name` | asset preview and profile, overview sidebar |
| `reportType` | `reportType` | overview sidebar |
| `detailColumns` | `detailColumns` | overview sidebar |
| `description` | `description` | asset preview and profile, overview sidebar |
| `webUrl` | `sourceURL` | overview sidebar |
| `createdDate` | `sourceCreatedAt` | asset profile and properties sidebar |
| `lastModifiedDate` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `createdBy` | `sourceCreatedBy` | asset profile and properties sidebar |
| `lastModifiedBy` | `sourceUpdatedBy` | asset profile and properties sidebar |

Dashboards[â](#dashboards "Direct link to Dashboards")
--------------------------------------------------------

Atlan maps dashboards from Salesforce to its `SalesforceDashboard` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `id` | `sourceId` | overview sidebar |
| `name` | `name` | asset preview and profile, overview sidebar |
| `dashboardType` | `dashboardType` | overview sidebar |
| `reportCount` | `reportCount` | asset preview and profile |
| `description` | `description` | asset preview and profile, overview sidebar |
| `webUrl` | `sourceURL` | overview sidebar |

**Tags:*** [crawl](/tags/crawl)
* [salesforce](/tags/salesforce)
* [api](/tags/api)

[PreviousCrawl Salesforce](/apps/connectors/crm/salesforce/how-tos/crawl-salesforce)[NextPreflight checks for Salesforce](/apps/connectors/crm/salesforce/references/preflight-checks-for-salesforce)

Copyright Â© 2025 Atlan Pte. Ltd.

