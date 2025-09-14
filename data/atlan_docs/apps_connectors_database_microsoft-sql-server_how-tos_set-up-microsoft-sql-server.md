# Source URL
https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server
link-alternate: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server
meta-description: :::warning Who can do this? You will probably need your Microsoft SQL Server administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Microsoft SQL Server administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Microsoft SQL Server | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Microsoft SQL Server | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Microsoft SQL Server
===========================

Who can do this?You will probably need your Microsoft SQL Server administrator to run these commands \- you may not have access yourself.

Atlan supports the basic authentication method for fetching metadata from Microsoft SQL Server. This method uses a username and password to fetch metadata.

Create a login[â](#create-a-login "Direct link to Create a login")
--------------------------------------------------------------------

To create a login with a specific password to integrate into Atlan:

```
CREATE LOGIN <login_name> WITH PASSWORD = '<password>';  

```
* Replace `<login_name>` with the name of the login.
* Replace `<password>` with the password for the login.

Create a user[â](#create-a-user "Direct link to Create a user")
-----------------------------------------------------------------

To create a user for that login:

```
CREATE USER <username> FOR LOGIN <login_name>;  

```
* Replace `<username>` with the username to use when integrating Atlan.
* Replace `<login_name>` with the name of the login used in the previous step.

Grant permissions[â](#grant-permissions "Direct link to Grant permissions")
-----------------------------------------------------------------------------

### Crawl assets and mine view lineage[â](#crawl-assets-and-mine-view-lineage "Direct link to Crawl assets and mine view lineage")

The following grant crawls all your Microsoft SQL Server assets and mines lineage for views. As the option of least privilege access, it avoids accessing any raw data.

To grant the minimum permissions required to crawl assets and mine view lineage from Microsoft SQL Server:

```
GRANT VIEW DEFINITION ON DATABASE::<database_name> TO <username>;  

```
* Replace `<database_name>` with the name of the database.
* Replace `<username>` with the username created above.

### (Optional) Preview and query assets[â](#optional-preview-and-query-assets "Direct link to (Optional) Preview and query assets")

To grant the minimum permissions required to also preview sample data and query assets from Microsoft SQL Server:

```
GRANT SELECT ON DATABASE::<database_name> TO <username>;  

```
* Replace `<database_name>` with the name of the database.
* Replace `<username>` with the username created above.

dangerYou *must* grant permissions to the user for all the databases you want to crawl in Atlan except the system databases (`master`, `tempdb`, `msdb`, `model`). The Microsoft SQL Server crawler will only fetch database and schema names without these permissions and no other metadata for other asset types.

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousMicrosoft SQL Server](/apps/connectors/database/microsoft-sql-server)[NextCrawl Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server)

Copyright Â© 2025 Atlan Pte. Ltd.

