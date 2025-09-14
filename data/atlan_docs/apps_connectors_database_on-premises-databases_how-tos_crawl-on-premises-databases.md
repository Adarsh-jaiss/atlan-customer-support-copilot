# Source URL
https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases
link-alternate: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases
meta-description: Once you have [set up the metadata-extractor tool](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access), you can extract metadata from your on-premises databases using the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [set up the metadata-extractor tool](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access), you can extract metadata from your on-premises databases using the following steps.
meta-og-locale: en
meta-og-title: Crawl on-premises databases | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl on-premises databases | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl on\-premises databases
============================

Once you have [set up the metadata\-extractor tool](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access), you can extract metadata from your on\-premises databases using the following steps.

Run metadata\-extractor[â](#run-metadata-extractor "Direct link to Run metadata-extractor")
---------------------------------------------------------------------------------------------

### Crawl all databases[â](#crawl-all-databases "Direct link to Crawl all databases")

To crawl all databases using the metadata\-extractor tool:

1. Log into the server with Docker Compose installed.
2. Change to the directory containing the compose file.
3. Run Docker Compose: `sudo docker-compose up`.

### Crawl a specific database[â](#crawl-a-specific-database "Direct link to Crawl a specific database")

To crawl a specific database using the metadata\-extractor tool:

1. Log into the server with Docker Compose installed.
2. Change to the directory containing the compose file.
3. Save the compose file and use the command `sudo docker-compose up <CONNECTION-NAME>` within the local folder where the compose file is stored.

(Replace `<CONNECTION-NAME>` with the name of the connection from the `services` section of the compose file.)

(Optional) Review generated files[â](#optional-review-generated-files "Direct link to (Optional) Review generated files")
---------------------------------------------------------------------------------------------------------------------------

The metadata\-extractor tool will generate the following JSON files for each `service`:

* `columns-<DATABASE>.json`
* `databases.json`
* `extras-procedures-<DATABASE>.json`
* `procedures-<DATABASE>.json`
* `schemas-<DATABASE>.json`
* `table-<DATABASE>.json`
* `view-<DATABASE>.json`

You can inspect the metadata and make sure it is acceptable to provide the metadata to Atlan.

Upload generated files to S3[â](#upload-generated-files-to-s3 "Direct link to Upload generated files to S3")
--------------------------------------------------------------------------------------------------------------

To provide Atlan access to the extracted metadata, you need to upload the metadata to an S3 bucket.

**Did you know?**To avoid access issues, upload to the same S3 bucket that Atlan uses. [Raise a support request](/support/submit-request) to get your Atlan bucket details, and include the ARN of the IAM user or IAM role so access can be provisioned. To create a separate bucket, see [Option 1: Use your own bucket](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core) in the dbt documentation (the steps are the same).

To upload the metadata to S3:

1. Confirm that all the files for a particular service have the same prefix. For example, `metadata/inventory/columns-inventory.json`, `metadata/inventory/databases.json`, etc.
2. [Upload the files to the S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html) using your preferred method.

For example, to upload all the files using the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html):

```
aws s3 cp output/inventory s3://my-bucket/metadata/inventory --recursive  

```

Crawl metadata in Atlan[â](#crawl-metadata-in-atlan "Direct link to Crawl metadata in Atlan")
-----------------------------------------------------------------------------------------------

Once you have extracted metadata on\-premises and uploaded the results to S3, you can crawl the metadata into Atlan:

* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift)
* [Hive](/apps/connectors/database/hive/how-tos/crawl-hive)
* [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server)
* [MySQL](/apps/connectors/database/mysql/how-tos/crawl-mysql)
* [Oracle](/apps/connectors/database/oracle/how-tos/crawl-oracle)
* [PostgreSQL](/apps/connectors/database/postgresql/how-tos/crawl-postgresql)
* [SAP HANA](/apps/connectors/database/sap-hana/how-tos/crawl-sap-hana)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)
* [Teradata](/apps/connectors/database/teradata/how-tos/crawl-teradata)

For all of the above cases, select **Offline** for the extraction method.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up on\-premises database access](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access)[NextSupported connections for on\-premises databases](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)

Copyright Â© 2025 Atlan Pte. Ltd.

