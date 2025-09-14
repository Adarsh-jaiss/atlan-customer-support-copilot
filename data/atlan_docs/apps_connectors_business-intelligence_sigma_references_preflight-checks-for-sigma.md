# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/sigma/references/preflight-checks-for-sigma

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/references/preflight-checks-for-sigma
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/references/preflight-checks-for-sigma
meta-description: First, the list of workbooks in the _Include Workbooks_Â and _Exclude Workbooks_ fields is determined. Next, the [List Workbooks](https://help.sigmacomputing.com/hc/en-us/articles/4408555666323) REST API is used to fetch the actual list of workbooks for which the user credentials have view permission.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: First, the list of workbooks in the _Include Workbooks_Â and _Exclude Workbooks_ fields is determined. Next, the [List Workbooks](https://help.sigmacomputing.com/hc/en-us/articles/4408555666323) REST API is used to fetch the actual list of workbooks for which the user credentials have view permission.
meta-og-locale: en
meta-og-title: Preflight checks for Sigma | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/sigma/references/preflight-checks-for-sigma
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Sigma | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Sigma
==========================

Before [running the Sigma crawler](/apps/connectors/business-intelligence/sigma/how-tos/crawl-sigma), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Workbook view permission[â](#workbook-view-permission "Direct link to Workbook view permission")
--------------------------------------------------------------------------------------------------

First, the list of workbooks in the *Include Workbooks*Â and *Exclude Workbooks* fields is determined. Next, the [List Workbooks](https://help.sigmacomputing.com/hc/en-us/articles/4408555666323) REST API is used to fetch the actual list of workbooks for which the user credentials have view permission.

â `Check successful` if all the workbooks from the first list are in the second one.

â `Check failed for $missingWorkbookId workbook`

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Sigma?](/apps/connectors/business-intelligence/sigma/references/what-does-atlan-crawl-from-sigma)[NextTroubleshooting Sigma connectivity](/apps/connectors/business-intelligence/sigma/troubleshooting/troubleshooting-sigma-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

