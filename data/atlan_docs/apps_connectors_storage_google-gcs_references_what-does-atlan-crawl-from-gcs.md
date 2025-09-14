# Source URL
https://docs.atlan.com/apps/connectors/storage/google-gcs/references/what-does-atlan-crawl-from-gcs

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/storage/google-gcs/references/what-does-atlan-crawl-from-gcs
link-alternate: https://docs.atlan.com/apps/connectors/storage/google-gcs/references/what-does-atlan-crawl-from-gcs
meta-description: Complete reference for the GCS assets and properties that Atlan crawls and maps during GCS cataloging.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Complete reference for the GCS assets and properties that Atlan crawls and maps during GCS cataloging.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Google GCS | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/storage/google-gcs/references/what-does-atlan-crawl-from-gcs
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Google GCS | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Google GCS
=====================================

This document provides complete details on the GCS assets and properties that Atlan crawls and maps during the GCS cataloging process. Atlan supports two ingestion modes with different property coverage.

Buckets[â](#buckets "Direct link to Buckets")
-----------------------------------------------

Atlan maps buckets from GCS to its `GCSBucket` asset type.

| Source Property | Atlan Property |
| --- | --- |
| Bucket Name | `name` |
| Object Count | `gcsObjectCount` |
| Console URL | `sourceURL` |

Objects[â](#objects "Direct link to Objects")
-----------------------------------------------

Atlan maps objects from GCS to its `GCSObject` asset type.

| Source Property | Atlan Property |
| --- | --- |
| Object Name | `name` |
| Object Key | `gcsObjectKey` |
| Object Size (bytes) | `gcsObjectSize` |
| Object updated | `sourceUpdatedAt` |
| Object created | `sourceCreatedAt` |
| Gcs object content type | `gcsObjectContentType` |
| Object URL | `sourceURL` |

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Set up GCS](/apps/connectors/storage/google-gcs/how-tos/set-up-gcs): Configure GCS permissions and environment
* [Crawl GCS assets](/apps/connectors/storage/google-gcs/how-tos/crawl-gcs): Step\-by\-step guide for setting up GCS crawling
**Tags:*** [gcs](/tags/gcs)
* [google\-gcs](/tags/google-gcs)
* [crawl](/tags/crawl)
* [data\-catalog](/tags/data-catalog)
* [reference](/tags/reference)
* [assets](/tags/assets)
* [properties](/tags/properties)

[PreviousCrawl GCS assets](/apps/connectors/storage/google-gcs/how-tos/crawl-gcs)

Copyright Â© 2025 Atlan Pte. Ltd.

