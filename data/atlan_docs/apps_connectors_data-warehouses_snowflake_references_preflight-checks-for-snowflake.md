# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/preflight-checks-for-snowflake

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/preflight-checks-for-snowflake
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/preflight-checks-for-snowflake
meta-description: Before [running the Snowflake crawler](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake), you can run [preflight checks](/product/conne.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Before [running the Snowflake crawler](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake), you can run [preflight checks](/product/conne.
meta-og-locale: en
meta-og-title: Preflight checks for Snowflake | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/preflight-checks-for-snowflake
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Snowflake | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Snowflake
==============================

Before [running the Snowflake crawler](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Database and schema check[â](#database-and-schema-check "Direct link to Database and schema check")
-----------------------------------------------------------------------------------------------------

### Information schema[â](#information-schema "Direct link to Information schema")

â `Check successful`

â `Check failed for $missingObjectName`

### Account usage[â](#account-usage "Direct link to Account usage")

â `Check successful`

â `Check failed for $missingObjectName`

Warehouse access[â](#warehouse-access "Direct link to Warehouse access")
--------------------------------------------------------------------------

â `Check successful`

â `Operation cannot be performed` / `User is not authorized to perform this action` / `Cannot be resumed because resource monitor has exceeded its quota`

Miner[â](#miner "Direct link to Miner")
-----------------------------------------

**Did you know?**Once you have crawled assets from Snowflake, you can [mine query history](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake).

### Query history view[â](#query-history-view "Direct link to Query history view")

â `Check successful`

â `Cannot access query history table. Please run the command in your Snowflake instance: GRANT IMPORTED PRIVILEGES ON DATABASE snowflake TO ROLE atlan_user_role;`

### Access history view[â](#access-history-view "Direct link to Access history view")

â `Check successful`

â `Check failed. Something went wrong with your request.`

### Sessions view[â](#sessions-view "Direct link to Sessions view")

â `Check successful`

â `Check failed. Something went wrong with your request.`

### S3[â](#s3 "Direct link to S3")

â `Check successful` if the bucket, region, and prefix combination is valid and the S3 credential passed is accessible.

â`Check failed with error code <AWS error code> - <AWS SDK ERR message>`

For example: `Miner S3 credentials: failed with error code: NoSuchBucket`

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousWhat does Atlan crawl from Snowflake?](/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake)[NextTroubleshooting Snowflake connectivity](/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

