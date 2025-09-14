# Source URL
https://docs.atlan.com/apps/connectors/database/oracle/how-tos/set-up-oracle

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/oracle/how-tos/set-up-oracle
link-alternate: https://docs.atlan.com/apps/connectors/database/oracle/how-tos/set-up-oracle
meta-description: :::warning Who can do this? You need your Oracle database administrator or a similar role to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You need your Oracle database administrator or a similar role to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Oracle | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/oracle/how-tos/set-up-oracle
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Oracle | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Oracle
=============

Who can do this?You need your Oracle database administrator or a similar role to run these commands \- you may not have access yourself.

Atlan supports the basic authentication method for fetching metadata from Oracle. This method uses a username and password to fetch metadata.

Create user in Oracle[â](#create-user-in-oracle "Direct link to Create user in Oracle")
-----------------------------------------------------------------------------------------

To create a username and password for basic authentication for Oracle, run the following commands:

```
CREATE USER <username> IDENTIFIED BY <password>;  
GRANT CREATE SESSION TO <username>;  

```
* Replace `<username>` with the username you want to create.
* Replace `<password>` with the password to use for that username.

Grant permissions[â](#grant-permissions "Direct link to Grant permissions")
-----------------------------------------------------------------------------

Atlan requires specific privileges to crawl assets and fetch technical metadata from Oracle.

### Grant permissions for metadata extraction[â](#grant-permissions-for-metadata-extraction "Direct link to Grant permissions for metadata extraction")

Run the following commands to grant permissions for metadata extraction:

```
GRANT SELECT_CATALOG_ROLE TO <username>;  
GRANT SELECT ON DBA_TABLES TO <username>;  
GRANT SELECT ON DBA_VIEWS TO <username>;  
GRANT SELECT ON DBA_TAB_COLUMNS TO <username>;  
GRANT SELECT ON DBA_SYNONYMS TO <username>;  

```
* Replace `<username>` with the username you created.

If these permissions arenât sufficient in your environment, use the optional approach below. Before proceeding, revoke the previously granted DBA permissions.

### (Optional) Grant permissions to query and preview data[â](#optional-grant-permissions-to-query-and-preview-data "Direct link to (Optional) Grant permissions to query and preview data")

#### Grant permissions on specific tables[â](#grant-permissions-on-specific-tables "Direct link to Grant permissions on specific tables")

To grant permissions to query and preview data for specific tables, run the following command for each table you want to provide access to.

```
GRANT SELECT ON <schema_name>.<table_name> TO <username>;  

```
* Replace `<schema_name>` with the name of the schema you want to crawl.
* Replace `<table_name>` with the name of the table (or view) you want to crawl.
* Replace `<username>` with the username you created.

#### Grant permissions on any table[â](#grant-permissions-on-any-table "Direct link to Grant permissions on any table")

To grant permissions on specific tables, run the following command for each table you want to provide access to.

```
GRANT SELECT ANY TABLE TO <username>;  

```
* Replace `<username>` with the username you created.

This [permission](https://docs.oracle.com/en/database/oracle/oracle-database/12.2/sqlrf/GRANT.html#GUID-20B4E2C0-A7F8-4BC8-A5E8-BE61BDC41AC3__BABEFFEE) allows the new user to query tables or views in any schema except `SYS` and `AUDSYS`.

dangerOracle [recommends](https://docs.oracle.com/en/database/oracle/oracle-database/12.2/sqlrf/GRANT.html#GUID-20B4E2C0-A7F8-4BC8-A5E8-BE61BDC41AC3__I2062316) granting `ANY` privileges only to trusted users.

These permissions allow you to crawl metadata, preview data, and run queries in Atlan, depending on the privileges granted.

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousOracle](/apps/connectors/database/oracle)[NextCrawl Oracle](/apps/connectors/database/oracle/how-tos/crawl-oracle)

Copyright Â© 2025 Atlan Pte. Ltd.

