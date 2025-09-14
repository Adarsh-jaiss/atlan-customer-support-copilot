# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/references/what-does-atlan-crawl-from-microstrategy

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/references/what-does-atlan-crawl-from-microstrategy
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/references/what-does-atlan-crawl-from-microstrategy
meta-description: Atlan crawls and maps the following assets and properties from MicroStrategy.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from MicroStrategy.
meta-og-locale: en
meta-og-title: What does Atlan crawl from MicroStrategy? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/references/what-does-atlan-crawl-from-microstrategy
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from MicroStrategy? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from MicroStrategy?
=========================================

Atlan crawls and maps the following assets and properties from MicroStrategy.

dangerCurrently Atlan only represents the assets marked with ð in lineage.

Once you've [crawled MicroStrategy](/apps/connectors/business-intelligence/microstrategy/how-tos/crawl-microstrategy), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for these assets:

* [Projects](#projects), [attributes](#attributes), [facts](#facts), [metrics](#metrics), [cubes](#cubes-), [reports](#reports-), [documents](#documents-), [dossiers](#dossiers-), and [visualizations](#visualizations) \- Is Certified filter
* [Cubes](#cubes-), [reports](#reports-), and [visualizations](#visualizations) \- Type filter

Projects[â](#projects "Direct link to Projects")
--------------------------------------------------

Atlan maps projects from MicroStrategy to its `MicroStrategyProject` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| description | description | asset profile and overview sidebar |
| created\_at | createdAt | properties sidebar |
| updated\_at | updatedAt | properties sidebar |
| owner | owners | overview sidebar |

Attributes[â](#attributes "Direct link to Attributes")
--------------------------------------------------------

Atlan maps attributes from MicroStrategy to its `MicroStrategyAttribute` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| description | description | asset profile and overview sidebar |
| created\_at | createdAt | properties sidebar |
| updated\_at | updatedAt | properties sidebar |
| owner | source owner | overview sidebar |
| certifiedInfo | isCertified | asset filter and properties sidebar |
| certifiedInfo | certifiedBy | properties sidebar |
| certifiedInfo | certifiedAt | properties sidebar |
| ancestors | location | properties sidebar |
| forms | forms | overview sidebar |

Facts[â](#facts "Direct link to Facts")
-----------------------------------------

Atlan maps facts from MicroStrategy to its `MicroStrategyFact` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| description | description | asset profile and overview sidebar |
| created\_at | createdAt | properties sidebar |
| updated\_at | updatedAt | properties sidebar |
| owner | source owner | overview sidebar |
| certifiedInfo | isCertified | asset filter and properties sidebar |
| certifiedInfo | certifiedBy | properties sidebar |
| certifiedInfo | certifiedAt | properties sidebar |
| ancestors | location | properties sidebar |
| expressions | expressions | overview sidebar |

Metrics[â](#metrics "Direct link to Metrics")
-----------------------------------------------

Atlan maps metrics from MicroStrategy to its `MicroStrategyMetric` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| description | description | asset profile and overview sidebar |
| created\_at | createdAt | properties sidebar |
| updated\_at | updatedAt | properties sidebar |
| owner | source owner | overview sidebar |
| certifiedInfo | isCertified | asset filter and properties sidebar |
| certifiedInfo | certifiedBy | properties sidebar |
| certifiedInfo | certifiedAt | properties sidebar |
| ancestors | location | properties sidebar |
| expression | expression | overview sidebar |

Cubes ð[â](#cubes- "Direct link to Cubes ð")
----------------------------------------------------

Atlan maps cubes from MicroStrategy to its `MicroStrategyCube` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| description | description | asset profile and overview sidebar |
| created\_at | createdAt | properties sidebar |
| updated\_at | updatedAt | properties sidebar |
| owner | source owner | overview sidebar |
| certifiedInfo | isCertified | asset filter and properties sidebar |
| certifiedInfo | certifiedBy | properties sidebar |
| certifiedInfo | certifiedAt | properties sidebar |
| ancestors | location | properties sidebar |
| subtype | type | asset filter and properties sidebar |
| sqlStatement | query | properties sidebar |

Reports ð[â](#reports- "Direct link to Reports ð")
----------------------------------------------------------

Atlan maps reports from MicroStrategy to its `MicroStrategyReport` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| description | description | asset profile and overview sidebar |
| created\_at | createdAt | properties sidebar |
| updated\_at | updatedAt | properties sidebar |
| owner | source owner | overview sidebar |
| certifiedInfo | isCertified | asset filter and properties sidebar |
| certifiedInfo | certifiedBy | properties sidebar |
| certifiedInfo | certifiedAt | properties sidebar |
| ancestors | location | properties sidebar |
| subtype | type | asset filter and properties sidebar |

Documents ð[â](#documents- "Direct link to Documents ð")
----------------------------------------------------------------

Atlan maps documents from MicroStrategy to its `MicroStrategyDocument` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| description | description | asset profile and overview sidebar |
| created\_at | createdAt | properties sidebar |
| updated\_at | updatedAt | properties sidebar |
| owner | source owner | overview sidebar |
| certifiedInfo | isCertified | asset filter and properties sidebar |
| certifiedInfo | certifiedBy | properties sidebar |
| certifiedInfo | certifiedAt | properties sidebar |
| ancestors | location | properties sidebar |

Dossiers ð[â](#dossiers- "Direct link to Dossiers ð")
-------------------------------------------------------------

Atlan maps dossiers from MicroStrategy to its `MicroStrategyDossier` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| description | description | asset profile and overview sidebar |
| created\_at | createdAt | properties sidebar |
| updated\_at | updatedAt | properties sidebar |
| owner | source owner | overview sidebar |
| certifiedInfo | isCertified | asset filter and properties sidebar |
| certifiedInfo | certifiedBy | properties sidebar |
| certifiedInfo | certifiedAt | properties sidebar |
| ancestors | location | properties sidebar |
| chapter | chapterNames | overview sidebar |

Visualizations[â](#visualizations "Direct link to Visualizations")
--------------------------------------------------------------------

Atlan maps dossier visualizations from MicroStrategy to its `MicroStrategyVisualization` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| name | name | asset profile and overview sidebar |
| visualizationType | visualizationType | asset filter and properties sidebar |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl MicroStrategy](/apps/connectors/business-intelligence/microstrategy/how-tos/crawl-microstrategy)[NextPreflight checks for MicroStrategy](/apps/connectors/business-intelligence/microstrategy/references/preflight-checks-for-microstrategy)

Copyright Â© 2025 Atlan Pte. Ltd.

