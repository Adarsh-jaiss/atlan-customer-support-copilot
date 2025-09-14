# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/sigma/references/what-does-atlan-crawl-from-sigma

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/references/what-does-atlan-crawl-from-sigma
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/references/what-does-atlan-crawl-from-sigma
meta-description: Atlan crawls and maps the following assets and properties from Sigma.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Sigma.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Sigma? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/references/what-does-atlan-crawl-from-sigma
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Sigma? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Sigma?
=================================

[https://demo.arcade.software/rzWKE0A32lGeGCvD6F7p?embed](https://demo.arcade.software/rzWKE0A32lGeGCvD6F7p?embed)

Atlan crawls and maps the following assets and properties from Sigma.

dangerCurrently, Atlan only represents the assets marked with ð in lineage.

For your Sigma [workbooks](#workbooks-), Atlan also provides asset previews to help with quick discovery and give you the context you need.

Workbooks ð[â](#workbooks- "Direct link to Workbooks ð")
----------------------------------------------------------------

Atlan maps workbooks from Sigma to its `SigmaWorkbook` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `createdAt` | `sourceCreatedAt` | asset profile and properties sidebar |
| `updatedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `url` | `sourceURL` | overview sidebar |

Pages ð[â](#pages- "Direct link to Pages ð")
----------------------------------------------------

Atlan maps pages from Sigma to its `SigmaPage` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `title` | `name` | asset profile and overview sidebar |

Data elements ð[â](#data-elements- "Direct link to Data elements ð")
----------------------------------------------------------------------------

Atlan maps table, pivot table, and visualization elements from Sigma to its `SigmaDataElement` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `displayName` | `name` | asset profile and overview sidebar |
| `type` | `type` | overview sidebar |

Data element fields ð[â](#data-element-fields- "Direct link to Data element fields ð")
----------------------------------------------------------------------------------------------

Atlan maps table, pivot table, and visualization element fields from Sigma to its `SigmaDataElementField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `displayName` | `name` | asset profile and overview sidebar |

Datasets[â](#datasets "Direct link to Datasets")
--------------------------------------------------

Atlan maps datasets from Sigma to its `SigmaDataset` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `createdAt` | `sourceCreatedAt` | asset profile and properties sidebar |
| `updatedAt` | `sourceUpdatedAt` | asset profile and properties sidebar |
| `url` | `sourceURL` | overview sidebar |

**Tags:*** [lineage](/tags/lineage)
* [data\-lineage](/tags/data-lineage)
* [impact\-analysis](/tags/impact-analysis)

[PreviousCrawl Sigma](/apps/connectors/business-intelligence/sigma/how-tos/crawl-sigma)[NextPreflight checks for Sigma](/apps/connectors/business-intelligence/sigma/references/preflight-checks-for-sigma)

Copyright Â© 2025 Atlan Pte. Ltd.

