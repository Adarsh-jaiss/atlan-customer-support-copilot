# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/crawl-on-premises-databricks

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/crawl-on-premises-databricks
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/crawl-on-premises-databricks
meta-description: Once you have [set up the databricks-extractor tool](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases), you can extract metadata from your on-premises Databricks instances by completing the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [set up the databricks-extractor tool](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases), you can extract metadata from your on-premises Databricks instances by completing the following steps.
meta-og-locale: en
meta-og-title: Crawl on-premises Databricks | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/crawl-on-premises-databricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl on-premises Databricks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl on\-premises Databricks
=============================

Once you have [set up the databricks\-extractor tool](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases), you can extract metadata from your on\-premises Databricks instances by completing the following steps.

Run databricks\-extractor[â](#run-databricks-extractor "Direct link to Run databricks-extractor")
---------------------------------------------------------------------------------------------------

### Crawl all Databricks connections[â](#crawl-all-databricks-connections "Direct link to Crawl all Databricks connections")

To crawl all Databricks connections using the databricks\-extractor tool:

1. Log into the server with Docker Compose installed.
2. Change to the directory containing the compose file.
3. Run Docker Compose: `sudo docker-compose up`

### Crawl a specific connection[â](#crawl-a-specific-connection "Direct link to Crawl a specific connection")

To crawl a specific Databricks connection using the databricks\-extractor tool:

1. Log into the server with Docker Compose installed.
2. Change to the directory containing the compose file.
3. Run Docker Compose: `sudo docker-compose up <connection-name>`

(Replace `<connection-name>` with the name of the connection from the `services` section of the compose file.)

(Optional) Review generated files[â](#optional-review-generated-files "Direct link to (Optional) Review generated files")
---------------------------------------------------------------------------------------------------------------------------

The databricks\-extractor tool will generate many folders with JSON files for each `service`. For example:

* `catalogs`
* `schemas`
* `tables`

You can inspect the metadata and make sure it is acceptable for providing metadata to Atlan.

Upload generated files to S3[â](#upload-generated-files-to-s3 "Direct link to Upload generated files to S3")
--------------------------------------------------------------------------------------------------------------

To provide Atlan access to the extracted metadata, you will need to upload the metadata to an S3 bucket.

**Did you know?**We recommend uploading to the same S3 bucket as Atlan uses to avoid access issues. Reach out to your Data Success Manager to get the details of your Atlan bucket. To create your own bucket, refer to the [Create your own S3 bucket](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core) section of the dbt documentation. (The steps will be exactly the same.)

To upload the metadata to S3:

1. Ensure that all files for a particular connection have the same prefix. For example, `output/databricks-example/catalogs/success/result-0.json`, `output/databricks-example/schemas/{{catalog_name}}/success/result-0.json`, `output/databricks-example/tables/{{catalog_name}}/success/result-0.json`, and so on.
2. [Upload the files to the S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html) using your preferred method.

For example, to upload all files using the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html):

```
aws s3 cp output/databricks-example s3://my-bucket/metadata/databricks-example --recursive  

```

Crawl metadata in Atlan[â](#crawl-metadata-in-atlan "Direct link to Crawl metadata in Atlan")
-----------------------------------------------------------------------------------------------

Once you have extracted metadata on\-premises and uploaded the results to S3, you can crawl the metadata into Atlan:

* [How to crawl Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks)

Be sure to select **Offline** for the *Extraction method*.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up on\-premises Databricks access](/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-access)[NextSet up on\-premises Databricks lineage extraction](/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-lineage-extraction)

Copyright Â© 2025 Atlan Pte. Ltd.

