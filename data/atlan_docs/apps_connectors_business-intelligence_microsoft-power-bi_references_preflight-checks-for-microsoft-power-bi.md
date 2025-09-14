# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/preflight-checks-for-microsoft-power-bi

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/preflight-checks-for-microsoft-power-bi
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/preflight-checks-for-microsoft-power-bi
meta-description: Before [running the Microsoft Power BI crawler](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi), you can run.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Before [running the Microsoft Power BI crawler](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi), you can run.
meta-og-locale: en
meta-og-title: Preflight checks for Microsoft Power BI | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/references/preflight-checks-for-microsoft-power-bi
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Microsoft Power BI | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Microsoft Power BI
=======================================

Before [running the Microsoft Power BI crawler](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Credentials scopes[â](#credentials-scopes "Direct link to Credentials scopes")
--------------------------------------------------------------------------------

â `Check successful`Â

â Source returned error

For example: `Credentials Scopes: Failed with response{"error":"invalid_client","error_description":"AADSTS7000215: Invalid client secret provided. Ensure the secret being sent in the request is the client secret value, not the client secret ID, for a secret added to app '832d86c8-cd9b-43a5-b165-ab40fb49770b'.\r\nTrace ID: 654ce9b2-a626-4e0b-8598-0cac69970200\r\nCorrelation ID: 5be327fc-93cb-4bef-ab4e-0373f11a8017\r\nTimestamp: 2022-10-31 09:03:41Z","error_codes":[7000215],"timestamp":"2022-10-31 09:03:41Z","trace_id":"654ce9b2-a626-4e0b-8598-0cac69970200","correlation_id":"5be327fc-93cb-4bef-ab4e-0373f11a8017","error_uri":"https://login.microsoftonline.com/error?code=7000215"}#STATUS:401`

Workspace permissions[â](#workspace-permissions "Direct link to Workspace permissions")
-----------------------------------------------------------------------------------------

â `Check successful`

â `No workspaces available`

Metadata scan and fetch refreshables[â](#metadata-scan-and-fetch-refreshables "Direct link to Metadata scan and fetch refreshables")
--------------------------------------------------------------------------------------------------------------------------------------

â `Check successful`Â

â Source returned error

For example: `Permissions to scan metadata and fetch refreshables: Failed with response{"error":{"code":"PowerBINotAuthorizedException","pbi.error":{"code":"PowerBINotAuthorizedException","parameters":{},"details":[],"exceptionCulprit":1}}}#STATUS:401`

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousWhat does Atlan crawl from Microsoft Power BI?](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi)[NextWhat lineage does Atlan extract from Microsoft Power BI?](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-lineage-does-atlan-extract-from-microsoft-power-bi)

Copyright Â© 2025 Atlan Pte. Ltd.

