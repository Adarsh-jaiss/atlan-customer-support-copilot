# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/references/preflight-checks-for-google-bigquery

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/references/preflight-checks-for-google-bigquery
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/references/preflight-checks-for-google-bigquery
meta-description: Each request requires an OAuth 2.0 access token generated via the [service account key](https://cloud.google.com/docs/authentication#service-accounts).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Each request requires an OAuth 2.0 access token generated via the [service account key](https://cloud.google.com/docs/authentication#service-accounts).
meta-og-locale: en
meta-og-title: Preflight checks for Google BigQuery | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/references/preflight-checks-for-google-bigquery
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Google BigQuery | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Google BigQuery
====================================

Before [running the Google BigQuery crawler](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations.Â

**Did you know?**All Google BigQuery resources expose the `testIamPermissions()` method, which is used for permission testing in Atlan through REST API.

The following preflight checks will be completed:

Authorization[â](#authorization "Direct link to Authorization")
-----------------------------------------------------------------

Each request requires an OAuth 2\.0 access token generated via the [service account key](https://cloud.google.com/docs/authentication#service-accounts).

Assets[â](#assets "Direct link to Assets")
--------------------------------------------

### Metadata crawling permission[â](#metadata-crawling-permission "Direct link to Metadata crawling permission")

â `Check successful`

â `Check failed. Not all permission granted. Missing permissions:`

### Query and review permission[â](#query-and-review-permission "Direct link to Query and review permission")

â `Check successful`

â `Check failed. Not all permission granted. Missing permissions:`

Miner[â](#miner "Direct link to Miner")
-----------------------------------------

**Did you know?**Once you have crawled assets from Google BigQuery, you can [mine query history](/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery).

### Miner policy[â](#miner-policy "Direct link to Miner policy")

#### Query history[â](#query-history "Direct link to Query history")

â `Check successful`

â `Check failed. Not all permission granted. Missing permissions:`

#### S3[â](#s3 "Direct link to S3")

â `Check successful` if the bucket, region, and prefix combination is valid and the S3 credential passed is accessible.

â `Check failed with error code <AWS error code> - <AWS SDK ERR message>`

For example: `Miner S3 credentials: failed with error code: NoSuchBucket`

### Crawler workflow[â](#crawler-workflow "Direct link to Crawler workflow")

This checks if the selected [connection](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery) exists in Atlan.

â `Check successful`

â `Check failed. Connection does not exist.` / `Check failed. Workflow artifacts are missing. Please run the crawler workflow again.`

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousWhat does Atlan crawl from Google BigQuery?](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery)[NextTroubleshooting Google BigQuery connectivity](/apps/connectors/data-warehouses/google-bigquery/troubleshooting/troubleshooting-google-bigquery-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

