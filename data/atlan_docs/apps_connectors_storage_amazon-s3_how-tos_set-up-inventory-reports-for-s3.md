# Source URL
https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/set-up-inventory-reports-for-s3

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/set-up-inventory-reports-for-s3
link-alternate: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/set-up-inventory-reports-for-s3
meta-description: Create Inventory report for Amazon S3 in case of inventory based ingestion through the crawler.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Create Inventory report for Amazon S3 in case of inventory based ingestion through the crawler.
meta-og-locale: en
meta-og-title: Set up Inventory reports | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/set-up-inventory-reports-for-s3
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Inventory reports | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Inventory reports
========================

Set up inventory reports for Amazon S3 to enable [inventory\-based ingestion](/apps/connectors/storage/amazon-s3/how-tos/crawl-s3#choose-ingestion-method) through the crawler. This guide shows you how to configure inventory reports in the format required by Atlan's S3 crawler.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* **AWS permissions**: Access to configure inventory reports on source buckets. Follow the official AWS documentation on [inventory report configuration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/configure-inventory.html) for permissions.
* **Destination bucket**: A dedicated S3 bucket to store inventory reports.

Create destination bucket[â](#create-destination-bucket "Direct link to Create destination bucket")
-----------------------------------------------------------------------------------------------------

First, create a dedicated S3 bucket to store your inventory reports.

1. Sign in to the AWS Management Console.
2. Navigate to **S3** â **Buckets**.
3. Click **Create bucket**.
4. Enter a unique bucket name (for example, `atlan-inventory-reports`). Make a note of the bucket name as itâs required when configuring the Atlan workflow for inventory\-based ingestion.
5. Select the appropriate region (keep this consistent for all inventory reports). Make a note of the region as itâs required when configuring the Atlan workflow for inventory\-based ingestion.
6. Configure other settings as needed.
7. Click **Create bucket**.

Configure inventory reports[â](#configure-inventory-reports "Direct link to Configure inventory reports")
-----------------------------------------------------------------------------------------------------------

Now configure inventory reports for each S3 bucket you want to catalog in Atlan.

1. Navigate to **S3** â **Buckets**.
2. Select the source bucket you want to catalog.
3. Go to the **Management** tab.
4. Scroll down to **Inventory configurations**
5. Click **Create inventory configuration** and configure the following settings:

    * **Inventory configuration name**: Enter a meaningful name, such as `atlan-inventory-config`
        * **Inventory scope**: Optionally choose a prefix to limit the report to specific objects. You can also use [filters](/apps/connectors/storage/amazon-s3/how-tos/crawl-s3#configure-bucket-filters) in your workflow.
        * **Object versions**: Select **Current version only** (Atlan doesn't support **Include all versions**).
6. Configure the **Report details**:

    * **Destination bucket**: Select the destination bucket you created earlier. Optionally specify a prefix to organize reports in a folder. **Note**: If you use a prefix, remember it for your Atlan workflow configuration and keep it consistent across all bucket reports.
        * **Report frequency**: Choose daily or weekly.
        * **Report format**: Select **CSV** or **Apache Parquet** (only these formats are supported).
        * **Status**: Enable the inventory report by selecting **Enabled**.
7. **Encryption**: Leave encryption disabled. Atlan's S3 crawler requires unencrypted inventory reports.
8. **Metadata fields**: Select all available metadata fields. This ensures Atlan receives complete metadata information about your S3 objects.
9. Review all settings and click **Create**.
10. For multiple inventory reports, your destination bucket must follow a specific structure. See [Inventory Report Structure](/apps/connectors/storage/amazon-s3/references/inventory-report-structure) for details.

Need help?[â](#need-help "Direct link to Need help?")
-------------------------------------------------------

If you run into issues while setting up inventory reports:

* **AWS documentation**: See the [AWS S3 Inventory documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/configure-inventory.html) for more information.
* **Atlan support**: If you have issues related to Atlan integration, [contact Atlan support](/support/submit-request).

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

Once you've configured your inventory reports:

* [Crawl your S3 assets](/apps/connectors/storage/amazon-s3/how-tos/crawl-s3): Follow steps to crawl your S3 assets.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [storage](/tags/storage)
* [amazon\-s3](/tags/amazon-s-3)
* [aws](/tags/aws)

[PreviousSet up Amazon S3](/apps/connectors/storage/amazon-s3/how-tos/set-up-s3)[NextCrawl S3 assets](/apps/connectors/storage/amazon-s3/how-tos/crawl-s3)

Copyright Â© 2025 Atlan Pte. Ltd.

