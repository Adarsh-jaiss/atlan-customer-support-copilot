# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/preflight-checks-for-dbt

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/preflight-checks-for-dbt
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/preflight-checks-for-dbt
meta-description: This checks if manifest files are present in the provided bucket and prefix.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: This checks if manifest files are present in the provided bucket and prefix.
meta-og-locale: en
meta-og-title: Preflight checks for dbt | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/references/preflight-checks-for-dbt
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for dbt | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for dbt
========================

Before [running the dbt crawler](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight check will be completed:

dbt Core[â](#dbt-core "Direct link to dbt Core")
--------------------------------------------------

### Manifest file check on S3[â](#manifest-file-check-on-s3 "Direct link to Manifest file check on S3")

This checks if manifest files are present in the provided bucket and prefix.

â `Check successful` if Atlan can access the bucket and prefix containing the manifest files.

â `Check failed`

For example:

* If Atlan cannot access the bucket \- `Manifest file Check on S3: failed With error code: AccessDenied - Access Denied`
* If Atlan can access the bucket but there are no manifest files present in the bucket \- `Manifest file Check on S3: No manifest files found in the mentioned S3 Prefix`
**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

Copyright Â© 2025 Atlan Pte. Ltd.

