# Source URL
https://docs.atlan.com/apps/connectors/database/mysql/references/preflight-checks-for-mysql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/mysql/references/preflight-checks-for-mysql
link-alternate: https://docs.atlan.com/apps/connectors/database/mysql/references/preflight-checks-for-mysql
meta-description: Before [running the MySQL crawler](/apps/connectors/database/mysql/how-tos/crawl-mysql), you can run [preflight checks](/product/connections/concepts/wha.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Before [running the MySQL crawler](/apps/connectors/database/mysql/how-tos/crawl-mysql), you can run [preflight checks](/product/connections/concepts/wha.
meta-og-locale: en
meta-og-title: Preflight checks for MySQL | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/mysql/references/preflight-checks-for-mysql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for MySQL | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for MySQL
==========================

Before [running the MySQL crawler](/apps/connectors/database/mysql/how-tos/crawl-mysql), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Database and schema check[â](#database-and-schema-check "Direct link to Database and schema check")
-----------------------------------------------------------------------------------------------------

â `Check successful`

â `Check failed for $missingObjectName`

Tables check[â](#tables-check "Direct link to Tables check")
--------------------------------------------------------------

â `Check successful. Table count: <count>`

â `Check failed. Missing some of the required grants SELECT, SHOW VIEW, EXECUTE on tables:`

S3[â](#s3 "Direct link to S3")
--------------------------------

â `Check successful` if the bucket, region, and prefix combination is valid and the S3 credential passed is accessible.

â`Check failed with error code <AWS error code> - <AWS SDK ERR message>`

For example: `Miner S3 credentials: failed with error code: NoSuchBucket`

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousWhat does Atlan crawl from MySQL?](/apps/connectors/database/mysql/references/what-does-atlan-crawl-from-mysql)[NextTroubleshooting MySQL connectivity](/apps/connectors/database/mysql/troubleshooting/troubleshooting-mysql-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

