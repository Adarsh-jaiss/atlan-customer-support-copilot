# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/redash/references/what-does-atlan-crawl-from-redash

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/redash/references/what-does-atlan-crawl-from-redash
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/redash/references/what-does-atlan-crawl-from-redash
meta-description: Atlan crawls and maps the following assets and properties from Redash.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Redash.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Redash? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/redash/references/what-does-atlan-crawl-from-redash
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Redash? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Redash?
==================================

Atlan crawls and maps the following assets and properties from Redash.

Once you've [crawled Redash](/apps/connectors/business-intelligence/redash/how-tos/crawl-redash), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported for these assets:

* [Queries](#queries-) \- Schedule, Is Published, and Redash tags filters
* [Visualizations](#visualizations-) \- Type filter
* [Dashboards](#dashboards-) \- Redash tags filter

dangerCurrently, Atlan only represents the assets marked with ð in lineage.

Queries ð[â](#queries- "Direct link to Queries ð")
----------------------------------------------------------

Atlan maps queries from Redash to its `RedashQuery` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| created\_at | sourceCreatedAt |
| updated\_at | sourceUpdatedAt |
| query | query |

Dashboards ð[â](#dashboards- "Direct link to Dashboards ð")
-------------------------------------------------------------------

Atlan maps dashboards from Redash to its `RedashDashboard` asset type.

| Source property | Atlan property |
| --- | --- |
| widgets | widget\_count |

Visualizations ð[â](#visualizations- "Direct link to Visualizations ð")
-------------------------------------------------------------------------------

Atlan maps visualization elements from Redash to its `RedashVisualization` asset type.

| Source property | Atlan property |
| --- | --- |
| name | name |
| type | type |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl Redash](/apps/connectors/business-intelligence/redash/how-tos/crawl-redash)[NextPreflight checks for Redash](/apps/connectors/business-intelligence/redash/references/preflight-checks-for-redash)

Copyright Â© 2025 Atlan Pte. Ltd.

