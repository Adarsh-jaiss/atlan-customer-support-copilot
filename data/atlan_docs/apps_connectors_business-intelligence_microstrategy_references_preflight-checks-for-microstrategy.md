# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/references/preflight-checks-for-microstrategy

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/references/preflight-checks-for-microstrategy
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/references/preflight-checks-for-microstrategy
meta-description: First, the list of projects in the _Include Projects_ and _Exclude Projects_ fields is determined. Next,Â the [Get Projects REST API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1) is used to fetch the actual list of projects for which the user has permissions.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: First, the list of projects in the _Include Projects_ and _Exclude Projects_ fields is determined. Next,Â the [Get Projects REST API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1) is used to fetch the actual list of projects for which the user has permissions.
meta-og-locale: en
meta-og-title: Preflight checks for MicroStrategy | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/references/preflight-checks-for-microstrategy
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for MicroStrategy | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for MicroStrategy
==================================

Before [running the MicroStrategy crawler](/apps/connectors/business-intelligence/microstrategy/how-tos/crawl-microstrategy), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight check will be completed:

Project permission[â](#project-permission "Direct link to Project permission")
--------------------------------------------------------------------------------

First, the list of projects in the *Include Projects* and *Exclude Projects* fields is determined. Next,Â the [Get Projects REST API](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1) is used to fetch the actual list of projects for which the user has permissions.

â `Check successful` if all the projects from the first list are in the second one.

â `Check failed for $missingProjectId project`

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from MicroStrategy?](/apps/connectors/business-intelligence/microstrategy/references/what-does-atlan-crawl-from-microstrategy)[NextTroubleshooting MicroStrategy connectivity](/apps/connectors/business-intelligence/microstrategy/troubleshooting/troubleshooting-microstrategy-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

