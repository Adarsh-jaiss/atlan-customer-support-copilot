# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/references/what-does-atlan-crawl-from-amazon-redshift

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/references/what-does-atlan-crawl-from-amazon-redshift
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/references/what-does-atlan-crawl-from-amazon-redshift
meta-description: Atlan crawls and maps the following assets and properties from Amazon Redshift.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Amazon Redshift.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Amazon Redshift? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/references/what-does-atlan-crawl-from-amazon-redshift
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Amazon Redshift? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Amazon Redshift?
===========================================

Atlan crawls and maps the following assets and properties from Amazon Redshift.

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from Amazon Redshift to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| DATABASE\_NAME | name |
| SCHEMA\_COUNT | schemaCount |

Schemas[â](#schemas "Direct link to Schemas")
-----------------------------------------------

Atlan maps schemas from Amazon Redshift to its `Schema` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_SCHEMA | name |
| TABLE\_COUNT | tableCount |
| VIEW\_COUNT | viewsCount |
| DATABASE\_NAME | databaseName |
| OWNER | sourceCreatedBy |
| SCHEMA\_TYPE | subType |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from Amazon Redshift to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| TABLE\_NAME | name |
| REMARKS | description |
| COLUMN\_COUNT | columnCount |
| ROW\_COUNT | rowCount |
| BYTES | sizeBytes |
| TABLE\_TYPE (EXTERNAL TABLE) | subType |
| LOCATION | externalLocation |
| INPUT\_FORMAT | externalLocationFormat |
| TABLE\_OWNER | sourceCreatedBy |
| CREATED | sourceCreatedAt |

Views[â](#views "Direct link to Views")
-----------------------------------------

Atlan maps views from Amazon Redshift to its `View` and `MaterialisedView` asset types.

| Source property | Atlan property |
| --- | --- |
| TABLE\_NAME | name |
| REMARKS | description |
| COLUMN\_COUNT | columnCount |
| VIEW\_DEFINITION | definition |
| TABLE\_OWNER | sourceCreatedBy |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from Amazon Redshift to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| COLUMN\_NAME | name |
| REMARKS | description |
| ORDINAL\_POSITION | order |
| TYPE\_NAME | dataType |
| NOTNULL | isNullable |
| CHARACTER\_MAXIMUM\_LENGTH | maxLength |
| DECIMAL\_DIGITS | precision |
| CONSTRAINT\_TYPE (PRIMARY KEY) | isPrimary |
| CONSTRAINT\_TYPE (FOREIGN KEY) | isForeign |
| SORTKEY | isSort |
| DISKEY | isDist |

Stored procedures[â](#stored-procedures "Direct link to Stored procedures")
-----------------------------------------------------------------------------

Atlan maps stored procedures from Amazon Redshift to its `Procedure` asset type.

| Source property | Atlan property |
| --- | --- |
| PROCEDURE\_NAME | name |
| REMARKS | description |
| PROCEDURE\_TYPE | subType |
| ROUTINE\_DEFINITION | definition |
| PROC\_OWNER | sourceCreatedBy |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousMine Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift)[NextPreflight checks for Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/references/preflight-checks-for-amazon-redshift)

Copyright Â© 2025 Atlan Pte. Ltd.

