# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/qlik-sense-enterprise-on-windows/references/what-does-atlan-crawl-from-qlik-sense-enterprise-on-windows

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/qlik-sense-enterprise-on-windows/references/what-does-atlan-crawl-from-qlik-sense-enterprise-on-windows
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/qlik-sense-enterprise-on-windows/references/what-does-atlan-crawl-from-qlik-sense-enterprise-on-windows
meta-description: Atlan crawls and maps the following assets and properties from Qlik Sense Enterprise on Windows.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Qlik Sense Enterprise on Windows.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Qlik Sense Enterprise on Windows? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/qlik-sense-enterprise-on-windows/references/what-does-atlan-crawl-from-qlik-sense-enterprise-on-windows
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Qlik Sense Enterprise on Windows? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Qlik Sense Enterprise on Windows?
============================================================

Atlan crawls and maps the following assets and properties from Qlik Sense Enterprise on Windows.

Once you've [crawled Qlik Sense Enterprise on Windows](/apps/connectors/business-intelligence/qlik-sense-enterprise-on-windows/how-tos/crawl-qlik-sense-enterprise-on-windows), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for these assets:

* [Apps](#apps) and [sheets](#sheets) \- Is Published filter

Streams[â](#streams "Direct link to Streams")
-----------------------------------------------

Atlan maps streams from Qlik Sense Enterprise on Windows to its `QlikStream` asset type.

| Source property | Atlan property |
| --- | --- |
| type | qlikStreamType |
| ownerId | qlikOwnerId |
| id | qlikId |
| createdAt | sourceCreatedAt |
| updatedAt | sourceUpdatedAt |

Apps[â](#apps "Direct link to Apps")
--------------------------------------

Atlan maps apps from Qlik Sense Enterprise on Windows to its `QlikApp` asset type.

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

Atlan maps sheets from Qlik Sense Enterprise on Windows to its `QlikSheet` asset type.

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

Atlan maps charts from Qlik Sense Enterprise on Windows to its `QlikChart` asset type.

| Source property | Atlan property |
| --- | --- |
| qProperty.qInfo.qId | qlikId |
| qProperty.subtitle | qlikChartSubtitle |
| qProperty.footnote | qlikChartFootnote |
| qProperty.qInfo.qType | qlikChartType |
| qProperty.options.dimensionsOrientation | qlikChartOrientation |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl Qlik Sense Enterprise on Windows](/apps/connectors/business-intelligence/qlik-sense-enterprise-on-windows/how-tos/crawl-qlik-sense-enterprise-on-windows)

Copyright Â© 2025 Atlan Pte. Ltd.

