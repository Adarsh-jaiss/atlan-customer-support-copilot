# Source URL
https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/crawl-s3

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/crawl-s3
link-alternate: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/crawl-s3
meta-description: Configure and run the S3 crawler to catalog your Amazon S3 buckets and objects in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure and run the S3 crawler to catalog your Amazon S3 buckets and objects in Atlan.
meta-og-locale: en
meta-og-title: Crawl S3 assets | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/storage/amazon-s3/how-tos/crawl-s3
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl S3 assets | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl S3 assets
===============

Catalog your Amazon S3 buckets and objects in Atlan using the **S3 Assets** workflow. This guide walks you through setting up authentication and running your first crawl.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure the you have:

* Completed [S3 setup](/apps/connectors/storage/amazon-s3/how-tos/set-up-s3) with IAM credentials.
* Your AWS credentials (Access Key ID and Secret Access Key, or Role ARN) ready.
* Information about S3 buckets and prefixes you want to catalog.
* Verified that the AWS account is allowlisted to assume the role when using IAM role\-based authentication
* Set up the [destination bucket structure](/apps/connectors/storage/amazon-s3/references/inventory-report-structure), required only if you plan to use **inventory\-based ingestion**.

Set up workflow[â](#set-up-workflow "Direct link to Set up workflow")
-----------------------------------------------------------------------

Create a new **S3 Assets** workflow:

1. In the top right, select **New** \> **New Workflow**.
2. From the package list, select **S3 Assets**.
3. Select **Setup Workflow**.

### Configure extraction method[â](#configure-extraction-method "Direct link to Configure extraction method")

Choose how to connect to your S3 environment:

* Direct extraction
* Agent extraction

1. Select **Direct** for the extraction method.
2. Choose your authentication type:
    * **IAM User**: Enter your Access Key ID and Secret Access Key.
    * **IAM Role**: Enter your Role ARN.
3. Select the AWS **Region** where your buckets are located.
4. Select **Test Authentication** to verify the connection.
5. Select **Next**.
1. Select **Agent** for the extraction method.
2. Add the secret keys for your secret store configuration.
3. Follow the [Secure Agent configuration guide](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution).
4. Select **Next**.

### Choose ingestion method[â](#choose-ingestion-method "Direct link to Choose ingestion method")

Select your ingestion method:

* **Direct ingestion**: Recommended for fewer than 1 million objects. This method crawls S3 buckets and objects directly.
* **Inventory ingestion**: Recommended for large\-scale use (more than 1 million objects). Uses inventory reports for efficiency.

For inventory ingestion, provide:

* **S3 Bucket Name**: Bucket holding the inventory reports (without the `s3://` prefix).
* **S3 Bucket Prefix**: Prefix used in the report configuration. Include a trailing slash (`/`). Leave empty if no prefix was used.

noteThe region for the inventory report is picked from the credentials used in the [extraction method](#configure-extraction-method).

### Configure bucket filters[â](#configure-bucket-filters "Direct link to Configure bucket filters")

Choose which buckets and prefixes to include or exclude. Exclude filters override include filters if both match.

**For a single bucket**:

* **Include Bucket**: Exact bucket name (e.g., `my-data-bucket`)
* **Include Prefix**: Specific prefix to crawl (e.g., `processed/2024/`)
* Leave all other filters empty.

**For multiple buckets**:

* **Include Bucket**: Regex pattern (e.g., `prod-.* | analytics-.*`)
* **Exclude Bucket**: Regex pattern (e.g., `.*-temp | .*-backup`)
* **Include Prefix**: Prefixes to include (e.g., `data/ | reports/`)
* **Exclude Prefix**: Prefixes to exclude (e.g., `archive/ | tmp/`)

### Configure connection details[â](#configure-connection-details "Direct link to Configure connection details")

1. Enter a **Connection Name** to identify your S3 environment.  
Examples: `production-s3`, `analytics-lake`, `raw-data-store`
2. Assign **Connection Admins** to manage access. At least one admin is required.

### Run crawler[â](#run-crawler "Direct link to Run crawler")

You can now start cataloging your assets:

* **Run now**: Select **Run** to start a one\-time crawl.
* **Schedule runs**: Select **Schedule \& Run** to automate recurring crawls.

Monitor crawl progress in the activity log. Once complete, your S3 buckets and objects will appear in Atlan.

Troubleshooting[â](#troubleshooting "Direct link to Troubleshooting")
-----------------------------------------------------------------------

* **Permissions**: Confirm all required IAM permissions are set. See the [S3 setup guide](/apps/connectors/storage/amazon-s3/how-tos/set-up-s3) for details.

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

* [Contact Atlan support](/support/submit-request) for integration issues or assistance.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [What Atlan crawls from S3](/apps/connectors/storage/amazon-s3/references/what-does-atlan-crawl-from-s3): Full list of assets and metadata included in the crawl.
**Tags:*** [s3](/tags/s-3)
* [amazon\-s3](/tags/amazon-s-3)
* [crawl](/tags/crawl)
* [data\-catalog](/tags/data-catalog)
* [storage](/tags/storage)

[PreviousSet up Inventory reports](/apps/connectors/storage/amazon-s3/how-tos/set-up-inventory-reports-for-s3)[NextS3 Inventory Report Structure](/apps/connectors/storage/amazon-s3/references/inventory-report-structure)

Copyright Â© 2025 Atlan Pte. Ltd.

