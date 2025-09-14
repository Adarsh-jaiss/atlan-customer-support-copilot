# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/qlik-sense-cloud/references/what-does-atlan-crawl-from-qlik-sense-cloud

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/qlik-sense-cloud/references/what-does-atlan-crawl-from-qlik-sense-cloud
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/qlik-sense-cloud/references/what-does-atlan-crawl-from-qlik-sense-cloud
meta-description: Atlan crawls and maps the following assets and properties from Qlik Sense Cloud.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Qlik Sense Cloud.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Qlik Sense Cloud? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/qlik-sense-cloud/references/what-does-atlan-crawl-from-qlik-sense-cloud
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Qlik Sense Cloud? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Qlik Sense Cloud?
============================================

Atlan crawls and maps the following assets and properties from Qlik Sense Cloud.

Once you've [crawled Qlik Sense Cloud](/apps/connectors/business-intelligence/qlik-sense-cloud/how-tos/crawl-qlik-sense-cloud), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for these assets:

* [Apps](#apps)
* [Sheets](#sheets)
* [Datasets](#datasets)

Lineage[â](#lineage "Direct link to Lineage")
-----------------------------------------------

Atlan only supports asset\-level lineage for the following asset types:

Datasets \-\-\> Charts \-\-\> Sheets \-\-\> Apps

Spaces[â](#spaces "Direct link to Spaces")
--------------------------------------------

Atlan maps spaces from Qlik Sense Cloud to its `QlikSpace` asset type.

| Source property | Atlan property |
| --- | --- |
| type | qlikSpaceType |
| ownerId | qlikOwnerId |
| id | qlikId |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |

Apps[â](#apps "Direct link to Apps")
--------------------------------------

Atlan maps apps from Qlik Sense Cloud to its `QlikApp` asset type.

!importantOnly the `app` resource type is retrieved. Other types, such as `qvapp` or `qlikview`, are not crawled.

| Source property | Atlan property |
| --- | --- |
| attributes.name | name |
| attributes.description | description |
| attributes.resourceId | qlikId |
| static\_byte\_size | qlikAppStaticByteSize |
| attributes.spaceId | qlikSpaceId |
| attributes.resourceCreatedAt | sourceCreatedAt |
| attributes.resourceUpdatedAt | sourceUpdatedAt |
| attributes.ownerId | qlikOwnerId |
| attributes.resourceAttributes.originAppId | qlikOriginAppId |
| attributes.resourceAttributes.hasSectionAccess | qlikHasSectionAccess |
| attributes.resourceAttributes.directQueryMode | qlikIsDirectQueryMode |
| attributes.resourceAttributes.published | qlikIsPublished |

Sheets[â](#sheets "Direct link to Sheets")
--------------------------------------------

Atlan maps sheets from Qlik Sense Cloud to its `QlikSheet` asset type.

| Source property | Atlan property |
| --- | --- |
| qProperty.qMetaDef.title | name |
| qProperty.qMetaDef.description | description |
| qProperty.qInfo.qId | qlikId |
| spaceId | qlikSpaceId |
| appId | qlikAppId |
| approved | qlikIsApproved |
| published | qlikIsPublished |

Charts[â](#charts "Direct link to Charts")
--------------------------------------------

Atlan maps charts from Qlik Sense Cloud to the `QlikChart` asset type and catalogs only those linked to dataset fields. For example, table charts are crawled because their columns represent dataset dimensions or measures. UI elements that do not reference dataset fields \- such as filters, buttons, and text elements \- are ignored.

dangerThese elements are not considered charts and are not crawled: `filterpane`, `qlik-button-for-navigation`, `VizlibAdvancedTextObject`, `listbox`, `action-button`, `VizlibFilter`, `variable`, `text-image`, `VizlibLineObject`.

| Source property | Atlan property |
| --- | --- |
| qProperty.qInfo.qId | qlikId |
| qProperty.subtitle | qlikChartSubtitle |
| qProperty.footnote | qlikChartFootnote |
| qProperty.qInfo.qType | qlikChartType |
| qProperty.options.dimensionsOrientation | qlikChartOrientation |

Datasets[â](#datasets "Direct link to Datasets")
--------------------------------------------------

Atlan maps datasets from Qlik Sense Cloud to the `QlikDataset` asset type. Datasets loaded through the Data Load Editor are called `implicit datasets` in Atlan and appear under this type.

| Source property | Atlan property |
| --- | --- |
| id | qlikId |
| resourceAttributes.technicalName | qlikDatasetTechnicalName |
| resourceAttributes.dataStoreType | qlikDatasetType |
| resourceAttributes.uri | qlikDatasetUri |
| resourceAttributes.secureQri | qlikQRI |
| resourceSubType | qlikDatasetSubtype |
| ownerId | qlikOwnerId |
| resourceCreatedAt | sourceCreatedAt |
| resourceUpdatedAt | sourceUpdatedAt |
| spaceId | qlikSpaceId |

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Qlik Sense Cloud](/apps/connectors/business-intelligence/qlik-sense-cloud/how-tos/crawl-qlik-sense-cloud)[NextPreflight checks for Qlik Sense Cloud](/apps/connectors/business-intelligence/qlik-sense-cloud/references/preflight-checks-for-qlik-sense-cloud)

Copyright Â© 2025 Atlan Pte. Ltd.

