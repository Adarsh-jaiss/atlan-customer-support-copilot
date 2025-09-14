# Source URL
https://docs.atlan.com/apps/connectors/messaging/amazon-msk/references/preflight-checks-for-amazon-msk

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/references/preflight-checks-for-amazon-msk
link-alternate: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/references/preflight-checks-for-amazon-msk
meta-description: Before [running the Amazon MSK crawler](/apps/connectors/messaging/amazon-msk/how-tos/crawl-amazon-msk), you can run [preflight checks](/product/connecti.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Before [running the Amazon MSK crawler](/apps/connectors/messaging/amazon-msk/how-tos/crawl-amazon-msk), you can run [preflight checks](/product/connecti.
meta-og-locale: en
meta-og-title: Preflight checks for Amazon MSK | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/references/preflight-checks-for-amazon-msk
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Amazon MSK | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Amazon MSK
===============================

Before [running the Amazon MSK crawler](/apps/connectors/messaging/amazon-msk/how-tos/crawl-amazon-msk), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Cluster permission check[â](#cluster-permission-check "Direct link to Cluster permission check")
--------------------------------------------------------------------------------------------------

â `Check successful` if the IAM role has sufficient [permissions](/apps/connectors/messaging/amazon-msk/how-tos/set-up-amazon-msk) to list all the brokers for the Amazon MSK cluster.

â `Internal server error` if the IAM role is missing `kafka-cluster:Connect` permission.

â `failed to get list of kafka brokers` if the IAM role has the permission to connect to the Amazon MSK cluster but is unable to fetch any broker details.

Topic permission check[â](#topic-permission-check "Direct link to Topic permission check")
--------------------------------------------------------------------------------------------

â `Check successful` if the IAM role has sufficient [permissions](/apps/connectors/messaging/amazon-msk/how-tos/set-up-amazon-msk) to list or describe topics available in the Amazon MSK cluster.

â `failed to get list of kafka topics` if the IAM role is missing the `kafka-cluster:DescribeTopic` permission.

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousWhat does Atlan crawl from Amazon MSK?](/apps/connectors/messaging/amazon-msk/references/what-does-atlan-crawl-from-amazon-msk)[NextTroubleshooting Amazon MSK connectivity](/apps/connectors/messaging/amazon-msk/troubleshooting/troubleshooting-amazon-msk-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

