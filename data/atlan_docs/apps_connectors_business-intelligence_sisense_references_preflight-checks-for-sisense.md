# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/sisense/references/preflight-checks-for-sisense

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/sisense/references/preflight-checks-for-sisense
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/sisense/references/preflight-checks-for-sisense
meta-description: Atlan uses the [Folders API](https://sisense.dev/guides/restApi/v1/?platform=linux&spec=L2023.6#/folders) to check if it's responding with a response status code 200.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan uses the [Folders API](https://sisense.dev/guides/restApi/v1/?platform=linux&spec=L2023.6#/folders) to check if it's responding with a response status code 200.
meta-og-locale: en
meta-og-title: Preflight checks for Sisense | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/sisense/references/preflight-checks-for-sisense
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Sisense | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Sisense
============================

Before [running the Sisense crawler](/apps/connectors/business-intelligence/sisense/how-tos/crawl-sisense), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Folders API check[â](#folders-api-check "Direct link to Folders API check")
-----------------------------------------------------------------------------

Atlan uses the [Folders API](https://sisense.dev/guides/restApi/v1/?platform=linux&spec=L2023.6#/folders) to check if it's responding with a response status code 200\.

â `Check successful. Folders API is working.`

â `Check failed`

For example: `{"code":101,"message":"Access denied","status":403,"httpMessage":"Forbidden"}}#STATUS:403`

Dashboards API check[â](#dashboards-api-check "Direct link to Dashboards API check")
--------------------------------------------------------------------------------------

Atlan uses the [Dashboards API](https://sisense.dev/guides/restApi/v1/?platform=linux&spec=L2023.6#/dashboards) toÂ check if it's responding with a response status code 200\.

â `Check successful. Dashboards API is working.`

â `Check failed`

For example: `{"code":101,"message":"Access denied","status":403,"httpMessage":"Forbidden"}}#STATUS:403`

Datamodels API check[â](#datamodels-api-check "Direct link to Datamodels API check")
--------------------------------------------------------------------------------------

Atlan uses the [Datamodels API](https://sisense.dev/guides/restApi/v2/?platform=linux&spec=L2023.6#/Datamodels) to check if it's responding with a response status code 200\. The Datamodels API check may fail with a response status code 403 if the [user only has *Viewer* permissions](/apps/connectors/business-intelligence/sisense/how-tos/set-up-sisense).

â `Check successful. Datamodels API is working.`

â `Check failed`

For example: `{"code":101,"message":"Access denied","status":403,"httpMessage":"Forbidden"}}#STATUS:403`

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Sisense?](/apps/connectors/business-intelligence/sisense/references/what-does-atlan-crawl-from-sisense)[NextTroubleshooting Sisense connectivity](/apps/connectors/business-intelligence/sisense/troubleshooting/troubleshooting-sisense-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

