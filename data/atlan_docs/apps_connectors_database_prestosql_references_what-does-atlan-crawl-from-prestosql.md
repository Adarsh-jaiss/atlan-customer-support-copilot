# Source URL
https://docs.atlan.com/apps/connectors/database/prestosql/references/what-does-atlan-crawl-from-prestosql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/prestosql/references/what-does-atlan-crawl-from-prestosql
link-alternate: https://docs.atlan.com/apps/connectors/database/prestosql/references/what-does-atlan-crawl-from-prestosql
meta-description: Atlan crawls and maps the following assets and properties from PrestoSQL.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from PrestoSQL.
meta-og-locale: en
meta-og-title: What does Atlan crawl from PrestoSQL? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/prestosql/references/what-does-atlan-crawl-from-prestosql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from PrestoSQL? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from PrestoSQL?
=====================================

Atlan crawls and maps the following assets and properties from PrestoSQL.

**Did you know?**Atlan currently only supports PrestoSQL until version 349\. PrestoDB is not supported at present.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from PrestoSQL to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_CATALOG | name |
| SCHEMA\_COUNT | schemaCount |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from PrestoSQL to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_SCHEMA | name |
| TABLE\_COUNT | tableCount |
| VIEW\_COUNT | viewsCount |
| TABLE\_CATALOG | databaseName |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from PrestoSQL to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_NAME | name |
| REMARKS | description |
| COLUMN\_COUNT | columnCount |
| ROW\_COUNT | rowCount |
| BYTES | sizeBytes |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from PrestoSQL to its `View` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_NAME | name |
| REMARKS | description |
| COLUMN\_COUNT | columnCount |
| EXTRA\_INFO (CREATE VIEW) | definition |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from PrestoSQL to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| COLUMN\_NAME | name |
| REMARKS | description |
| ORDINAL\_POSITION | order |
| TYPE\_NAME | dataType |
| NULLABLE | isNullable |
| DECIMAL\_DIGITS | precision |
| NUMERIC\_SCALE | numericScale |

Stored procedures[â](#stored-procedures "Direct link to Stored procedures")
-----------------------------------------------------------------------------

Atlan maps stored procedures in PrestoSQL to its `Procedure` asset type.

| Source property | Atlan property |
| --- | --- |
| PROCEDURE\_NAME | name |
| REMARKS | description |
| PROCEDURE\_TYPE | subType |
| ROUTINE\_DEFINITION | definition |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl PrestoSQL](/apps/connectors/database/prestosql/how-tos/crawl-prestosql)[NextPreflight checks for PrestoSQL](/apps/connectors/database/prestosql/references/preflight-checks-for-prestosql)

Copyright Â© 2025 Atlan Pte. Ltd.

