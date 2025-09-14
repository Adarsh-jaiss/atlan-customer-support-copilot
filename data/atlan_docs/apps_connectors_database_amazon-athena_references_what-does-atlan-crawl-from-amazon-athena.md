# Source URL
https://docs.atlan.com/apps/connectors/database/amazon-athena/references/what-does-atlan-crawl-from-amazon-athena

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/amazon-athena/references/what-does-atlan-crawl-from-amazon-athena
link-alternate: https://docs.atlan.com/apps/connectors/database/amazon-athena/references/what-does-atlan-crawl-from-amazon-athena
meta-description: Atlan crawls and maps the following assets and properties from Amazon Athena.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Amazon Athena.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Amazon Athena? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/amazon-athena/references/what-does-atlan-crawl-from-amazon-athena
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Amazon Athena? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Amazon Athena?
=========================================

Atlan crawls and maps the following assets and properties from Amazon Athena.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from Amazon Athena to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_CATALOG | name |
| SCHEMA\_COUNT | schemaCount |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from Amazon Athena to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_SCHEMA | name |
| TABLE\_COUNT | tableCount |
| VIEW\_COUNT | viewsCount |
| TABLE\_CATALOG | databaseName |
| CreateTime (via Glue) | sourceCreatedAt |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Amazon Athena to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_NAME | name |
| REMARKS | description |
| COLUMN\_COUNT | columnCount |
| recordCount (via Glue) | rowCount |
| sizeKey (via Glue) | sizeBytes |
| TABLE\_TYPE | subType |
| StorageDescriptor Location (via Glue) | externalLocation |
| StorageDescriptor typeOfData (via Glue) | externalLocationFormat |
| StorageDescriptor Columns and COLUMN\_COUNT | certificateStatus (DEPRECATED) if Athena JDBC and Glue API do not have the same column count |
| PartitionKeys (via Glue) | isPartitioned |
| PartitionData (via Glue) | partitionCount |
| PartitionData (via Glue) | partitionList |
| CreatedBy (via Glue) | sourceCreatedBy |
| CreateTime or CreationTime (via Glue) | sourceCreatedAt |
| UpdateTime or LastAccessTime (via Glue) | sourceUpdatedAt |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Amazon Athena to its `View` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_NAME | name |
| REMARKS | description |
| COLUMN\_COUNT | columnCount |
| VIEW\_DEFINITION | definition |
| StorageDescriptor Columns and COLUMN\_COUNT | certificateStatus (DEPRECATED) if Athena JDBC and Glue API do not have the same column count |
| recordCount (via Glue) | rowCount |
| PartitionKeys (via Glue) | isPartitioned |
| PartitionData (via Glue) | partitionCount |
| PartitionData (via Glue) | partitionList |
| CreatedBy (via Glue) | sourceCreatedBy |
| CreateTime or CreationTime (via Glue) | sourceCreatedAt |
| UpdateTime or LastAccessTime (via Glue) | sourceUpdatedAt |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from Amazon Athena to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| COLUMN\_NAME | name |
| REMARKS | description |
| ORDINAL\_POSITION | order |
| TYPE\_NAME | dataType |
| NULLABLE | isNullable |
| IS\_PARTITION | isPartition |
| PARTITION\_ORDER | partitionOrder |
| PRIMARY\_KEY | isPrimary |
| DECIMAL\_DIGITS | precision |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena)

Copyright Â© 2025 Atlan Pte. Ltd.

