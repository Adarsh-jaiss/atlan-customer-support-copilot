# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/references/what-does-atlan-crawl-from-thoughtspot

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/references/what-does-atlan-crawl-from-thoughtspot
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/references/what-does-atlan-crawl-from-thoughtspot
meta-description: Once you've [crawled ThoughtSpot](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot), you can [use connector-specific filters].
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you've [crawled ThoughtSpot](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot), you can [use connector-specific filters].
meta-og-locale: en
meta-og-title: What does Atlan crawl from ThoughtSpot? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/references/what-does-atlan-crawl-from-thoughtspot
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from ThoughtSpot? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from ThoughtSpot?
=======================================

Once you've [crawled ThoughtSpot](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for all ThoughtSpot assets:

* Tags and chart type filters

Atlan supports lineage for the following ThoughtSpot assets:

* [Answers](#answers-) \- upstream lineage to tables, views, or worksheets from multiple sources (if applicable), no downstream lineage
* [Visualizations](#visualizations-) \- upstream lineage to tables, views, or worksheets from multiple sources (if applicable)
* [Liveboards](#liveboards-) \- upstream lineage to visualizations
* [Tables](#tables-) \- upstream lineage to source tables, and column\-level lineage between ThoughtSpot tables and worksheets
* [Views](#views-) \- upstream lineage to ThoughtSpot tables or worksheets, and column\-level lineage between ThoughtSpot views and worksheets
* [Worksheets](#worksheets-) \- upstream lineage to ThoughtSpot tables or views from multiple sources (if applicable)

Atlan crawls and maps the following assets and properties from ThoughtSpot.

dangerCurrently, Atlan only represents the assets marked with ð in lineage.

Answers ð[â](#answers- "Direct link to Answers ð")
----------------------------------------------------------

Atlan maps answers from ThoughtSpot to its `ThoughtSpotAnswer` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `metadata_header.name` | `name` | asset profile and overview sidebar |
| `metadata_header.description` | `description` | asset profile and overview sidebar |
| `metadata_header.created` | `sourceCreatedAt` | asset profile and properties sidebar |
| `metadata_header.modified` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `metadata_header.authorDisplayName` | `sourceCreatedBy` | asset profile and properties sidebar |
| `question.text` | `thoughtspotQuestionText` | properties sidebar |
| `metadata_header.tags` | `assetTags` | asset filter and overview sidebar |
| `visualisations.chart_type` | `thoughtspotChartType` | asset filter and profile, overview sidebar |

Visualizations ð[â](#visualizations- "Direct link to Visualizations ð")
-------------------------------------------------------------------------------

Atlan maps visualizations from ThoughtSpot to its `ThoughtspotDashlet` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `metadata_header.name` | `name` | asset profile and overview sidebar |
| `metadata_header.description` | `description` | asset profile and overview sidebar |
| `metadata_header.created` | `sourceCreatedAt` | asset profile and properties sidebar |
| `metadata_header.modified` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `metadata_header.authorDisplayName` | `sourceCreatedBy` | asset profile and properties sidebar |
| `question.text` | `thoughtspotQuestionText` | properties sidebar |
| `visualisations.chart_type` | `thoughtspotChartType` | asset filter and profile, overview sidebar |
| `metadata_header.name` | `thoughtspotLiveboardName` | API only |

Liveboards ð[â](#liveboards- "Direct link to Liveboards ð")
-------------------------------------------------------------------

Atlan maps Liveboards from ThoughtSpot to its `ThoughtspotLiveboard` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `metadata_header.name` | `name` | asset profile and overview sidebar |
| `metadata_header.description` | `description` | asset profile and overview sidebar |
| `metadata_header.created` | `sourceCreatedAt` | asset profile and properties sidebar |
| `metadata_header.modified` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `metadata_header.authorDisplayName` | `sourceCreatedBy` | asset profile and properties sidebar |
| `metadata_header.tags` | `assetTags` | asset filter and overview sidebar |

Tables ð[â](#tables- "Direct link to Tables ð")
-------------------------------------------------------

Atlan maps tables from ThoughtSpot to its `ThoughtspotTable` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `metadata_header.name` | `name` | asset profile and overview sidebar |
| `metadata_header.description` | `description` | asset profile and overview sidebar |
| `metadata_header.created` | `sourceCreatedAt` | asset profile and properties sidebar |
| `metadata_header.modified` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `metadata_header.authorDisplayName` | `sourceCreatedBy` | asset profile and properties sidebar |
| `length(metadata_detail.relationships[])` | `thoughtspotJoinCount` | asset preview and profile |
| `length(metadata_detail.columns[])` | `thoughtspotColumnCount` | asset preview and profile |
| `metadata_header.tags` | `assetTags` | asset filter and overview sidebar |

Views ð[â](#views- "Direct link to Views ð")
----------------------------------------------------

Atlan maps views from ThoughtSpot to its `ThoughtspotView` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `metadata_header.name` | `name` | asset profile and overview sidebar |
| `metadata_header.description` | `description` | asset profile and overview sidebar |
| `metadata_header.created` | `sourceCreatedAt` | asset profile and properties sidebar |
| `metadata_header.modified` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `metadata_header.authorDisplayName` | `sourceCreatedBy` | asset profile and properties sidebar |
| `length(metadata_detail.relationships[])` | `thoughtspotJoinCount` | asset preview and profile |
| `length(metadata_detail.columns[])` | `thoughtspotColumnCount` | asset preview and profile |
| `metadata_header.tags` | `assetTags` | asset filter and overview sidebar |

Worksheets ð[â](#worksheets- "Direct link to Worksheets ð")
-------------------------------------------------------------------

Atlan maps worksheets from ThoughtSpot to its `ThoughtspotWorksheet` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `metadata_header.name` | `name` | asset profile and overview sidebar |
| `metadata_header.description` | `description` | asset profile and overview sidebar |
| `metadata_header.created` | `sourceCreatedAt` | asset profile and properties sidebar |
| `metadata_header.modified` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `metadata_header.authorDisplayName` | `sourceCreatedBy` | asset profile and properties sidebar |
| calculated using unique source and destination table pairs from join paths | `thoughtspotJoinCount` | asset preview and profile |
| `length(metadata_detail.columns[])` | `thoughtspotColumnCount` | asset preview and profile |
| `metadata_header.tags` | `assetTags` | asset filter and overview sidebar |

Columns ð[â](#columns- "Direct link to Columns ð")
----------------------------------------------------------

Atlan maps columns from ThoughtSpot to its `ThoughtspotColumn` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `metadata_header.name` | `name` | asset profile and overview sidebar |
| `metadata_header.description` | `description` | asset profile and overview sidebar |
| `metadata_detail.dataType` | `thoughtspotColumnDataType` | asset preview and filter, overview sidebar |
| `metadata_detail.type` | `thoughtspotColumnType` | asset preview and filter, overview sidebar |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl on\-premises ThoughtSpot](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-on-premises-thoughtspot)[NextTroubleshooting ThoughtSpot connectivity](/apps/connectors/business-intelligence/thoughtspot/troubleshooting/troubleshooting-thoughtspot-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

