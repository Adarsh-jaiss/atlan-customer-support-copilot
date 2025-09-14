# Source URL
https://docs.atlan.com/apps/connectors/database/teradata/references/what-does-atlan-crawl-from-teradata

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/teradata/references/what-does-atlan-crawl-from-teradata
link-alternate: https://docs.atlan.com/apps/connectors/database/teradata/references/what-does-atlan-crawl-from-teradata
meta-description: Atlan crawls and maps the following assets and properties from Teradata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Teradata.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Teradata? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/teradata/references/what-does-atlan-crawl-from-teradata
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Teradata? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Teradata?
====================================

Atlan crawls and maps the following assets and properties from Teradata.

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps [schemas](https://docs.teradata.com/r/Teradata-Warehouse-Miner-User-Guide-Volume-1Introduction-and-Profiling/July-2017/Using-Teradata-Warehouse-Miner/Main-Menu/Tools-Menu/Connection-Properties/Databases/Schemas) from Teradata to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| dbc.databases.DatabaseName | name |
| TABLE\_COUNT | tableCount |
| VIEW\_COUNT | viewsCount |
| dbc.databases.CreatorName | sourceCreatedBy |
| dbc.databases.CreateTimeStamp | sourceCreatedAt |
| dbc.databases.LastAlterName | sourceUpdatedBy |
| dbc.databases.LastAlterTimeStamp | sourceUpdatedAt |
| dbc.databases.CommentString | description |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Teradata to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| dbc.Tables.TableName | name |
| dbc.TablesV.CommentString | description |
| COLUMN\_COUNT | columnCount |
| ROW\_COUNT | rowCount |
| CurrentPerm | sizeBytes |
| dbc.TablesV.CreatorName | sourceCreatedBy |
| dbc.TablesV.CreateTimeStamp | sourceCreatedAt |
| dbc.TablesV.LastAlterName | sourceUpdatedBy |
| dbc.TablesV.LastAlterTimeStamp | sourceUpdatedAt |
| dbc.Tables.DataBaseName | schema name |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Teradata to its `View` asset type.

| Source property | Atlan property |
| --- | --- |
| dbc.Tables.TableName | name |
| dbc.TablesV.CommentString | description |
| COLUMN\_COUNT | columnCount |
| ROW\_COUNT | rowCount |
| CurrentPerm | sizeBytes |
| dbc.TablesV.CreatorName | sourceCreatedBy |
| dbc.TablesV.CreateTimeStamp | sourceCreatedAt |
| dbc.TablesV.LastAlterName | sourceUpdatedBy |
| dbc.TablesV.LastAlterTimeStamp | sourceUpdatedAt |
| dbc.Tables.DataBaseName | schema name |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from Teradata to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| dbc.ColumnsV.ColumnName | name |
| REMARKS | description |
| ORDINAL\_POSITION | order |
| dbc.ColumnsV.ColumnType | dataType |
| dbc.ColumnsV.Nullable | isNullable |
| dbc.IndicesV.TableName | isPrimary |
| dbc.IndicesV.ChildDB | isForeign |
| dbc.IndicesV.DecimalTotalDigits | precision |
| dbc.IndicesV.DecimalFractionalDigits | numericScale |
| dbc.ColumnsV.DataBaseName | schema name |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up on\-premises Teradata miner access](/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access)[NextPreflight checks for Teradata](/apps/connectors/database/teradata/references/preflight-checks-for-teradata)

Copyright Â© 2025 Atlan Pte. Ltd.

