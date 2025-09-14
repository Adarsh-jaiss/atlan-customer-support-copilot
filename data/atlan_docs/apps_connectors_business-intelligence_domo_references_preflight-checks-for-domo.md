# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/domo/references/preflight-checks-for-domo

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/domo/references/preflight-checks-for-domo
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/domo/references/preflight-checks-for-domo
meta-description: Atlan uses the [DataSet API](https://developer.domo.com/portal/72ae9b3e80374-list-data-sets) to fetch dataset metadata from Domo.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan uses the [DataSet API](https://developer.domo.com/portal/72ae9b3e80374-list-data-sets) to fetch dataset metadata from Domo.
meta-og-locale: en
meta-og-title: Preflight checks for Domo | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/domo/references/preflight-checks-for-domo
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Domo | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Domo
=========================

Before [running the Domo crawler](/apps/connectors/business-intelligence/domo/how-tos/crawl-domo), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Datasets API[â](#datasets-api "Direct link to Datasets API")
--------------------------------------------------------------

Atlan uses the [DataSet API](https://developer.domo.com/portal/72ae9b3e80374-list-data-sets) to fetch dataset metadata from Domo.

â `Check successful. Datasets API is working.`

â `Check failed`

For example: `{"code":101,"message":"Access denied","status":403,"httpMessage":"Forbidden"}}#STATUS:403`

Dashboards API[â](#dashboards-api "Direct link to Dashboards API")
--------------------------------------------------------------------

Atlan uses the [Page API](https://developer.domo.com/portal/e7bc2fce783cd-list-pages) to fetch dashboard metadata from Domo.

â `Check successful. Dashboards API is working.`

â `Check failed`

For example: `{"code":101,"message":"Access denied","status":403,"httpMessage":"Forbidden"}}#STATUS:403`

Cards API[â](#cards-api "Direct link to Cards API")
-----------------------------------------------------

Atlan uses the DomoStats cards API to fetch card metadata from Domo. This checks the format of the response and tries to find the `Id`, `name`, and `description` columns.

â `Check successful. Cards API is working.`

â `Check failed. <Response received from the API>`

Card\-Dashboard Relationship API[â](#card-dashboard-relationship-api "Direct link to Card-Dashboard Relationship API")
------------------------------------------------------------------------------------------------------------------------

Atlan uses the DomoStats card\-dashboard relationship API to fetch card\-dashboard relationship metadata from Domo. This checks the format of the response and tries to find the `cardId` and `pageId` columns.

â `Check successful. The card-dashboard relationship API is working.`

â `Check failed. <Response received from the API>`

Dataset\-Card Relationship API[â](#dataset-card-relationship-api "Direct link to Dataset-Card Relationship API")
------------------------------------------------------------------------------------------------------------------

Atlan uses the DomoStats dataset\-card relationship API to fetch dataset\-card relationship metadata from Domo. This checks the format of the response and tries to find the `dataSourceId` and `cardId` columns.

â `Check successful. The dataset-card relationship API is working.`

â `Check failed. <Response received from the API>`

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Domo?](/apps/connectors/business-intelligence/domo/references/what-does-atlan-crawl-from-domo)[NextTroubleshooting Domo connectivity](/apps/connectors/business-intelligence/domo/troubleshooting/troubleshooting-domo-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

