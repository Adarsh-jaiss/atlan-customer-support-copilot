# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/references/preflight-checks-for-amazon-redshift

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/references/preflight-checks-for-amazon-redshift
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/references/preflight-checks-for-amazon-redshift
meta-description: Before [running the Amazon Redshift crawler](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift), you can run [preflight chec.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Before [running the Amazon Redshift crawler](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift), you can run [preflight chec.
meta-og-locale: en
meta-og-title: Preflight checks for Amazon Redshift | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/references/preflight-checks-for-amazon-redshift
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for Amazon Redshift | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for Amazon Redshift
====================================

Before [running the Amazon Redshift crawler](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift), you can run [preflight checks](/product/connections/concepts/what-are-preflight-checks) to perform the necessary technical validations. The following preflight checks will be completed:

Assets[â](#assets "Direct link to Assets")
--------------------------------------------

### Database and schema[â](#database-and-schema "Direct link to Database and schema")

â `Check successful`

â `Check failed for $missingObjectName`

### Tables count[â](#tables-count "Direct link to Tables count")

â `Check successful. Table count: <count>`

â Source returned error/UI default failure message

### Tables metadata[â](#tables-metadata "Direct link to Tables metadata")

â `Check successful`

â `Check failed! Please grant select permission on pg_catalog.svv_table_info`

### External tables metadata[â](#external-tables-metadata "Direct link to External tables metadata")

â `Check successful`

â `Check failed! Please grant select permission on pg_catalog.svv_external_tables`

Miner[â](#miner "Direct link to Miner")
-----------------------------------------

**Did you know?**Once you have crawled assets from Amazon Redshift, you can [mine query history](/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift).

### Query history[â](#query-history "Direct link to Query history")

#### DDL[â](#ddl "Direct link to DDL")

â `Check successful`

â `Check failed! Please grant select permission on pg_catalog.stl_ddltext`

#### DML[â](#dml "Direct link to DML")

â `Check successful`

â `Check failed! Please grant select permission on pg_catalog.stl_query`

#### Session[â](#session "Direct link to Session")

â `Check successful`

â `Check failed! Please grant select permission on pg_catalog.stl_connection_log`

#### Transaction rollback[â](#transaction-rollback "Direct link to Transaction rollback")

â `Check successful`

â `Check failed! Please grant select permission on pg_catalog.stl_undone`

#### Insert query[â](#insert-query "Direct link to Insert query")

â `Check successful`

â `Check failed! Please grant select permission on pg_catalog.stl_insert`

### S3[â](#s3 "Direct link to S3")

â `Check successful` if the bucket, region, and prefix combination is valid and the S3 credential passed is accessible.

â`Check failed with error code <AWS error code> - <AWS SDK ERR message>`

For example: `Miner S3 credentials: failed with error code: NoSuchBucket`

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousWhat does Atlan crawl from Amazon Redshift?](/apps/connectors/data-warehouses/amazon-redshift/references/what-does-atlan-crawl-from-amazon-redshift)[NextTroubleshooting Amazon Redshift connectivity](/apps/connectors/data-warehouses/amazon-redshift/troubleshooting/troubleshooting-amazon-redshift-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

