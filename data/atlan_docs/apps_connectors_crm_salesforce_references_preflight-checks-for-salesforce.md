# Source URL
https://docs.atlan.com/apps/connectors/crm/salesforce/references/preflight-checks-for-salesforce

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/crm/salesforce/references/preflight-checks-for-salesforce
link-alternate: https://docs.atlan.com/apps/connectors/crm/salesforce/references/preflight-checks-for-salesforce
meta-description: Before [running the Salesforce crawler](/apps/connectors/crm/salesforce/how-tos/crawl-salesforce), you can run [preflight checks](/product/connections/co.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Before [running the Salesforce crawler](/apps/connectors/crm/salesforce/how-tos/crawl-salesforce), you can run [preflight checks](/product/connections/co.
meta-og-locale: en
meta-og-title: Preflight checks for Salesforce | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/crm/salesforce/references/preflight-checks-for-salesforce
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Salesforce | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Salesforce
===============================

Before [running the Salesforce crawler](/apps/connectors/crm/salesforce/how-tos/crawl-salesforce), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Organization count check[â](#organization-count-check "Direct link to Organization count check")
--------------------------------------------------------------------------------------------------

â `Organization Count check passed. Organization ID:<organization ID> Organization Name: <organization name>`

â Check failed or `sObject type 'Organization' is not supported`

Folder count check[â](#folder-count-check "Direct link to Folder count check")
--------------------------------------------------------------------------------

â `Folder Count check passed. Total folders: <count>`

â Check failed

Report count check[â](#report-count-check "Direct link to Report count check")
--------------------------------------------------------------------------------

â `Report Count check passed. Total reports: <count>`

â Check failed or `MALFORMED_QUERY: Invalid SOQL query. Please check the syntax and try again.` or `INVALID_TYPE : sObject type 'Reportâ is not supported`

Dashboard count check[â](#dashboard-count-check "Direct link to Dashboard count check")
-----------------------------------------------------------------------------------------

â `Dashboard Count check passed. Total dashboards: <count>`

â Check failed or `INVALID_TYPE : sObject type 'Dashboardâ is not supported`

Salesforce object count check[â](#salesforce-object-count-check "Direct link to Salesforce object count check")
-----------------------------------------------------------------------------------------------------------------

â `Salesforce Object Count check passed. Total SObjects: <count>`

â Check failed

Field count check[â](#field-count-check "Direct link to Field count check")
-----------------------------------------------------------------------------

â `Field Count check passed. Total organization fields: <count>`

â Check failed or `MALFORMED_QUERY: Invalid SOQL query. Please check the syntax and try again.` or `INVALID_TYPE : sObject type 'EntityDefinitionâ is not supported`

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [salesforce](/tags/salesforce)

[PreviousWhat does Atlan crawl from Salesforce?](/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce)[NextTroubleshooting Salesforce connectivity](/apps/connectors/crm/salesforce/troubleshooting/troubleshooting-salesforce-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

