# Source URL
https://docs.atlan.com/apps/connectors/database/hive/references/what-does-atlan-crawl-from-hive

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/hive/references/what-does-atlan-crawl-from-hive
link-alternate: https://docs.atlan.com/apps/connectors/database/hive/references/what-does-atlan-crawl-from-hive
meta-description: Atlan crawls and maps the following assets and properties from Hive.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Hive.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Hive? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/hive/references/what-does-atlan-crawl-from-hive
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Hive? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Hive?
================================

Atlan crawls and maps the following assets and properties from Hive.

Database[â](#database "Direct link to Database")
--------------------------------------------------

Atlan always creates a `Database` asset called `Hive` to maintain the three\-level hierarchy.

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from Hive to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| DATABASE\_NAME | name |
| COMMENT | description |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Hive to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| tableName | name |
| COMMENT | description |
| column\_count | columnCount |
| numRows | rowCount |
| totalSize | sizeBytes |
| numPartitions | isPartitioned |
| numPartitions | partitionCount |
| location | externalLocation |
| inputFormat | externalLocationFormat |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Hive to its `View` asset type.

| Source property | Atlan property |
| --- | --- |
| tableName | name |
| COMMENT | description |
| column\_count | columnCount |
| viewExpandedText | definition |

Materialized views[â](#materialized-views "Direct link to Materialized views")
--------------------------------------------------------------------------------

Atlan maps materialized views in Hive to its `Materialised View` asset type.

| Source property | Atlan property |
| --- | --- |
| tableName | name |
| COMMENT | description |
| column\_count | columnCount |
| viewExpandedText | definition |
| staleSinceDate | materializationTime |
| numRows | rowCount |
| totalSize | sizeBytes |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from Hive to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| COL\_NAME | name |
| DATA\_TYPE | dataType |
| COMMENT | description |
| Detailed Table Information | order |
| Constraints (Primary Key) | isPrimary |
| Constraints (Foreign Key) | isForeign |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Hive](/apps/connectors/database/hive/how-tos/crawl-hive)[NextPreflight checks for Hive](/apps/connectors/database/hive/references/preflight-checks-for-hive)

Copyright Â© 2025 Atlan Pte. Ltd.

