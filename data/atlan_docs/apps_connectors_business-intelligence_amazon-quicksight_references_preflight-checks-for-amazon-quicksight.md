# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/references/preflight-checks-for-amazon-quicksight

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/references/preflight-checks-for-amazon-quicksight
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/references/preflight-checks-for-amazon-quicksight
meta-description: The [ListAnalyses](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAnalyses.html) REST API is used to fetch the actual list of analyses for which the user has view permission.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The [ListAnalyses](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAnalyses.html) REST API is used to fetch the actual list of analyses for which the user has view permission.
meta-og-locale: en
meta-og-title: Preflight checks for Amazon QuickSight | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/amazon-quicksight/references/preflight-checks-for-amazon-quicksight
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Amazon QuickSight | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Amazon QuickSight
======================================

BeforeÂ[running the Amazon QuickSight crawler](/apps/connectors/business-intelligence/amazon-quicksight/how-tos/crawl-amazon-quicksight), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Analysis view permission[â](#analysis-view-permission "Direct link to Analysis view permission")
--------------------------------------------------------------------------------------------------

The [ListAnalyses](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAnalyses.html) REST API is used to fetch the actual list of analyses for which the user has view permission.

â `Check successful. Analysis API is accessible.`

â `Check failed for listed analyses`

Folder view permission[â](#folder-view-permission "Direct link to Folder view permission")
--------------------------------------------------------------------------------------------

The [ListFolders](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListFolders.html) REST API is used to fetch the actual list of folders for which the user has view permission.

â `Check successful. Folder API is accessible.`

â `Check failed for listed folders`

Dashboard view permission[â](#dashboard-view-permission "Direct link to Dashboard view permission")
-----------------------------------------------------------------------------------------------------

The [ListDashboards](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboards.html) REST API is used to fetch the actual list of dashboards for which the user has view permission.

â `Check successful. Dashboard API is accessible.`

â `Check failed for listed dashboards`

Dataset view permission[â](#dataset-view-permission "Direct link to Dataset view permission")
-----------------------------------------------------------------------------------------------

The [ListDataSets](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDataSets.html) REST API is used to fetch the actual list of datasets for which the user has view permission.

â `Check successful. Dataset API is accessible.`

â `Check failed for listed datasets`

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Amazon QuickSight?](/apps/connectors/business-intelligence/amazon-quicksight/references/what-does-atlan-crawl-from-amazon-quicksight)

Copyright Â© 2025 Atlan Pte. Ltd.

