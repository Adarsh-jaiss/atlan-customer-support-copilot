# Source URL
https://docs.atlan.com/apps/connectors/storage/google-gcs/how-tos/crawl-gcs

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/storage/google-gcs/how-tos/crawl-gcs
link-alternate: https://docs.atlan.com/apps/connectors/storage/google-gcs/how-tos/crawl-gcs
meta-description: Configure and run the GCS crawler to catalog your GCP GCS buckets and objects in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure and run the GCS crawler to catalog your GCP GCS buckets and objects in Atlan.
meta-og-locale: en
meta-og-title: Crawl GCS assets | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/storage/google-gcs/how-tos/crawl-gcs
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl GCS assets | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl GCS assets
================

The Google Cloud Storage crawler fetches assets from Google Cloud Storage and publishes them to Atlan for discovery. The crawler catalogs buckets and objects from your GCS environment.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* Completed the [GCS setup guide](/apps/connectors/storage/google-gcs/how-tos/set-up-gcs).
* GCS credentials (Project ID and Service Account JSON key) ready.
* Determined which GCS buckets and prefixes you want to catalog.

Create crawler workflow[â](#create-crawler-workflow "Direct link to Create crawler workflow")
-----------------------------------------------------------------------------------------------

Start by creating a new GCS Assets workflow:

1. Navigate to the bottom right of any screen and select **Workflow**.
2. Select **Marketplace** from the top if you are creating a new workflow, or select **Manage** if you want to use an existing workflow.
3. Select **Google Cloud Storage** from the package list.
4. Select **Setup Workflow**.

### Configure extraction method[â](#configure-extraction-method "Direct link to Configure extraction method")

Choose how to connect to your GCS environment. Connect directly to GCS using Atlan's credential store:

1. Add the **Project ID** (Google Cloud project ID that contains the buckets).
2. Add the **Service Account JSON key** that you created in the [GCS setup guide](/apps/connectors/storage/google-gcs/how-tos/set-up-gcs).
3. Select **Test Authentication** to verify connectivity.
4. Select **Next**.

### Configure metadata filters[â](#configure-metadata-filters "Direct link to Configure metadata filters")

Set up filters to control which buckets and objects get cataloged:

* **Bucket prefix**: Publish to Atlan only the buckets that start with the specified prefix. Leave empty if you need all buckets.
* **Object prefix**: Publish to Atlan only the objects that start with the specified prefix. Leave empty if you need all objects.
* **Object delimiter** (applicable only if inventory report isn't selected): Use this to list all blobs in a "folder," for example "public/." The delimiter argument restricts results to only the "files" in the given "folder." Without the delimiter, the entire tree under the prefix is returned.

For example, given these blobs:

* a/1\.txt
* a/b/2\.txt

If prefix \= 'a/', without a delimiter, the following blobs are published to Atlan:

* a/1\.txt
* a/b/2\.txt

However, if prefix \= 'a/' and delimiter \= '/', only the file directly under 'a/' is published to Atlan:

* a/1\.txt

* **Bucket exclusion list**: List of buckets (comma separated) to be excluded.

### Configure ingestion method[â](#configure-ingestion-method "Direct link to Configure ingestion method")

Choose how to ingest data from GCS:

* Direct crawling
* Inventory report

Configure direct crawling options:

* **Build abstraction layer**: Whether to build abstraction layer on top of files (default: No).
* **Publish as\-is patterns**: List of comma\-separated patterns to be published as\-is (without abstraction layer). Applicable only if Build abstraction layer \= Yes.
* **Regex to match characters to replace**: Regular expression to match characters to replace. It acts on the file full name (without bucket prefix).
* **Regex with replacement characters**: Regular expression with replacement characters. It acts on the file full name (without bucket prefix).
Configure inventory report options:

* **Inventory bucket name**: Bucket where the inventory is stored.
* **Inventory prefix**: Prefix within the inventory bucket where the inventory is located.
* **Inventory file format**: File format used to generate the inventory report (CSV or Parquet).

The following permissions must be granted to the role assigned to the Service Account: `storage.buckets.list`, `storage.objects.list`, and `roles/storage.objectViewer`.

* **Build abstraction layer**: Whether to build abstraction layer on top of files (default: No).
* **Publish as\-is patterns**: List of comma\-separated patterns to be published as\-is (without abstraction layer). Applicable only if Build abstraction layer \= Yes.
* **Regex to match characters to replace**: Regular expression to match characters to replace. It acts on the file full name (without bucket prefix).
* **Regex with replacement characters**: Regular expression with replacement characters. It acts on the file full name (without bucket prefix).

### Configure asset handling[â](#configure-asset-handling "Direct link to Configure asset handling")

Control how assets are created and updated:

* **Input handling**: How to handle assets in the CSV file that don't exist in Atlan:

    + **Create full**: Create a full\-fledged asset that can be discovered and maintained like other assets in Atlan.
    + **Create partial**: Create a "partial" asset. These are only shown in lineage and can't be discovered through search. These are useful when you want to represent a placeholder for an asset that you lack full context about, but also don't want to ignore completely.
    + **Update only**: Only update assets that already exist in Atlan, and don't create any asset of any kind. Note: READMEs and links in Atlan are technically separate assetsâthese are still created, even in Update only mode.
* **Delta handling**: Whether to treat the input file as an initial load, full replacement (deleting any existing assets not in the file), or only incremental (no deletion of existing assets).
* **Remove attributes**: How to delete any assets not found in the latest file.
* **Reload which assets**: Which assets to reload from the latest input CSV file. Changed assets only calculates which assets have changed between the files and only attempts to reload those changes.

### Configure connection[â](#configure-connection "Direct link to Configure connection")

Set up the connection details:

* **Connection**: Name of the connection that's created in Atlan. The connection name must be unique across all Google Cloud Storage connections.

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you run into issues during the GCS crawling process:

* **GCP documentation**: Refer to the [Google Cloud Storage documentation](https://cloud.google.com/storage/docs) for detailed information about buckets and objects.
* **Contact Atlan support**: For issues related to Atlan integration, [contact Atlan support](/support/submit-request).

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [What does Atlan crawl from GCS](/apps/connectors/storage/google-gcs/references/what-does-atlan-crawl-from-gcs): Learn about the GCS metadata that Atlan discovers and catalogs.
**Tags:*** [gcs](/tags/gcs)
* [google\-gcs](/tags/google-gcs)
* [crawl](/tags/crawl)
* [data\-catalog](/tags/data-catalog)
* [storage](/tags/storage)

[PreviousSet up Google Cloud Storage](/apps/connectors/storage/google-gcs/how-tos/set-up-gcs)[NextWhat does Atlan crawl from Google GCS](/apps/connectors/storage/google-gcs/references/what-does-atlan-crawl-from-gcs)

Copyright Â© 2025 Atlan Pte. Ltd.

