# Source URL
https://docs.atlan.com/apps/connectors/storage/google-gcs/how-tos/set-up-gcs

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/storage/google-gcs/how-tos/set-up-gcs
link-alternate: https://docs.atlan.com/apps/connectors/storage/google-gcs/how-tos/set-up-gcs
meta-description: Configure Google Cloud Storage for secure metadata ingestion with Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure Google Cloud Storage for secure metadata ingestion with Atlan.
meta-og-locale: en
meta-og-title: Set up Google Cloud Storage | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/storage/google-gcs/how-tos/set-up-gcs
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Google Cloud Storage | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Google Cloud Storage
===========================

This guide walks you through setting up Google Cloud Storage (GCS) to enable secure data ingestion from your GCS buckets.

This guide walks you through setting up Google Cloud Storage (GCS) to enable secure data ingestion from your GCS buckets. The connector catalogs GCS buckets and objects only.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

* GCS bucket containing the data you want to ingest
* Appropriate permissions to create service accounts and manage IAM roles

Permissions required[â](#permissions-required "Direct link to Permissions required")
--------------------------------------------------------------------------------------

Make sure you (or an administrator) can assign the following IAM roles to the service account that the connector uses:

* **Storage Bucket Viewer** (`roles/storage.bucketViewer`)
* **Storage Object Viewer** (`roles/storage.objectViewer`)

You also need permission to create a service account and generate its key.

Create a service account[â](#create-a-service-account "Direct link to Create a service account")
--------------------------------------------------------------------------------------------------

1. Select your project from the project dropdown.
Creating a dedicated service account avoids using personal credentials and lets you manage access centrally.
2. In the left navigation menu, go to **IAM \& Admin** \> **Service accounts**.
3. Select **Create service account**.
4. Enter a name for your service account (for example, `atlan-gcs-connector`).
5. Add an optional description.
6. Select **Create and continue**.

Assign roles and permissions[â](#assign-roles-and-permissions "Direct link to Assign roles and permissions")
--------------------------------------------------------------------------------------------------------------

Add the following roles to your service account:
These roles grant read\-only access so the connector can discover buckets and objects without modifying data.

* **Storage Bucket Viewer**: Lets you read bucket details (`storage.buckets.list`).
* **Storage Object Viewer**: Lets you list objects and read object metadata (`storage.objects.list`).

7. Select **Done**.

Generate a service account key[â](#generate-a-service-account-key "Direct link to Generate a service account key")
--------------------------------------------------------------------------------------------------------------------

1. In the left navigation menu, go to **IAM \& Admin** \> **Service accounts**.
The JSON key file is used by the connector to authenticate to GCP programmatically.
2. Select **Create key**.
3. Download and store the key file securely.
4. Select **JSON** as the key type.
5. Select **Create**.
6. Download the JSON file and store it securely.

Configure bucket permissions[â](#configure-bucket-permissions "Direct link to Configure bucket permissions")
--------------------------------------------------------------------------------------------------------------

1. Navigate to **Cloud Storage**.
Grant the service account access to every bucket you want Atlan to crawl.
2. Select your bucket.
3. Go to the **Permissions** tab.
4. Select **Add principal**.
5. Enter your service account email (for example, `[[email protected]](/cdn-cgi/l/email-protection)`).
6. Assign the **Storage Object Viewer** role.
7. Select **Save**.

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you run into issues during the GCS setup process:

* **GCP documentation**: Refer to the [Google Cloud IAM documentation](https://cloud.google.com/iam/docs) for detailed information about roles and permissions.
* **Contact Atlan support**: For issues related to Atlan integration, [contact Atlan support](/support/submit-request).

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

* [Crawl GCS assets](/apps/connectors/storage/google-gcs/how-tos/crawl-gcs): Follow this guide to configure the crawler workflow and ingest metadata from your GCS buckets.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [storage](/tags/storage)
* [google\-gcs](/tags/google-gcs)
* [gcp](/tags/gcp)

[PreviousGoogle Cloud Storage](/apps/connectors/storage/google-gcs)[NextCrawl GCS assets](/apps/connectors/storage/google-gcs/how-tos/crawl-gcs)

Copyright Â© 2025 Atlan Pte. Ltd.

