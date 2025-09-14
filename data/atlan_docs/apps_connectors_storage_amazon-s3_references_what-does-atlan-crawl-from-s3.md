# Source URL
https://docs.atlan.com/apps/connectors/storage/amazon-s3/references/what-does-atlan-crawl-from-s3

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/storage/amazon-s3/references/what-does-atlan-crawl-from-s3
link-alternate: https://docs.atlan.com/apps/connectors/storage/amazon-s3/references/what-does-atlan-crawl-from-s3
meta-description: Complete reference for the S3 assets and properties that Atlan crawls and maps during S3 cataloging.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Complete reference for the S3 assets and properties that Atlan crawls and maps during S3 cataloging.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Amazon S3 | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/storage/amazon-s3/references/what-does-atlan-crawl-from-s3
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Amazon S3 | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Amazon S3
====================================

This document provides complete details on the S3 assets and properties that Atlan crawls and maps during the S3 cataloging process. Atlan supports two ingestion modes with different property coverage.

Buckets[â](#buckets "Direct link to Buckets")
-----------------------------------------------

Atlan maps buckets from S3 to its `S3Bucket` asset type.

| Source Property | Atlan Property | Ingestion Mode |
| --- | --- | --- |
| Bucket Name | `name` | Direct, Inventory |
| Object Count | `s3ObjectCount` | Direct, Inventory |
| Console URL | `sourceURL` | Direct |
| Region | `awsRegion` | Direct |
| ServerSideEncryptionConfiguration | `s3Encryption` | Direct |
| Versioning Status | `s3BucketVersioningEnabled` | Direct |

Objects[â](#objects "Direct link to Objects")
-----------------------------------------------

Atlan maps objects from S3 to its `S3Object` asset type.

| Source Property | Atlan Property | Ingestion Mode |
| --- | --- | --- |
| Object Name | `name` | Direct, Inventory |
| Object Key | `s3ObjectKey` | Direct, Inventory |
| Bucket Name | `s3BucketName` | Direct, Inventory |
| Object Size (bytes) | `s3ObjectSize` | Direct, Inventory |
| LastModifiedDate | `s3ObjectLastModifiedTime` | Direct, Inventory |
| StorageClass | `s3ObjectStorageClass` | Direct, Inventory |
| ETag | `s3ETag` | Direct, Inventory |
| Console URL | `sourceURL` | Direct |
| Region | `awsRegion` | Direct |
| Content Type | `s3ObjectContentType` | Direct |
| Content Disposition | `s3ObjectContentDisposition` | Direct |
| Version ID | `s3ObjectVersionId` | Direct |

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Set up S3](/apps/connectors/storage/amazon-s3/how-tos/set-up-s3): Configure AWS permissions and environment
* [Crawl S3 assets](/apps/connectors/storage/amazon-s3/how-tos/crawl-s3): Step\-by\-step guide for setting up S3 crawling
**Tags:*** [s3](/tags/s-3)
* [amazon\-s3](/tags/amazon-s-3)
* [crawl](/tags/crawl)
* [data\-catalog](/tags/data-catalog)
* [reference](/tags/reference)
* [assets](/tags/assets)
* [properties](/tags/properties)

[PreviousS3 Inventory Report Structure](/apps/connectors/storage/amazon-s3/references/inventory-report-structure)

Copyright Â© 2025 Atlan Pte. Ltd.

