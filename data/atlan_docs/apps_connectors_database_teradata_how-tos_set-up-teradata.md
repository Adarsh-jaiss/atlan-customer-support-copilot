# Source URL
https://docs.atlan.com/apps/connectors/database/teradata/how-tos/set-up-teradata

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/set-up-teradata
link-alternate: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/set-up-teradata
meta-description: :::warning Who can do this? You will probably need your Teradata administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Teradata administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Teradata | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/teradata/how-tos/set-up-teradata
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Teradata | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Teradata
===============

Who can do this?You will probably need your Teradata administrator to run these commands \- you may not have access yourself.

Atlan supports the basic authentication method for fetching metadata from Teradata. This method uses a username and password to fetch metadata.

To create a username and password for basic authentication for Teradata, run the following commands:

Create role in Teradata[â](#create-role-in-teradata "Direct link to Create role in Teradata")
-----------------------------------------------------------------------------------------------

[Create a role in Teradata](https://docs.teradata.com/r/Teradata-VantageTM-NewSQL-Engine-Security-Administration/March-2019/Creating-Users-and-Granting-Privileges/Using-Roles-to-Manage-Privileges/Creating-Roles) using the following commands:

```
CREATE role atlan_user_role  

```

Create user in Teradata[â](#create-user-in-teradata "Direct link to Create user in Teradata")
-----------------------------------------------------------------------------------------------

Create a new user for [integrating with Atlan](/apps/connectors/database/teradata/how-tos/crawl-teradata) using the following commands:

```
CREATE USER atlan_user FROM [database] AS PASSWORD = [password] PERM = 20000000;  

```
Grant access to the role or directly to the user with the following commands:

```
GRANT SELECT ON dbc.databases TO atlan_user_role;  
GRANT SELECT ON dbc.tables TO atlan_user_role;  
GRANT SELECT ON dbc.TablesV TO atlan_user_role;  
GRANT SELECT ON DBC.TableStatsV TO atlan_user_role;  
GRANT SELECT ON dbc.columns TO atlan_user_role;  
GRANT SELECT ON dbc.TableTextV TO atlan_user_role;  
GRANT SELECT ON dbc.TableSizeV TO atlan_user_role;  
GRANT SELECT ON DBC.ColumnsV TO atlan_user_role;  
GRANT SELECT ON DBC.IndicesV TO atlan_user_role;  
GRANT SELECT ON DBC.All_RI_ChildrenV TO atlan_user_role;  

```
Grant additional permissions to [mine query history](/apps/connectors/database/teradata/how-tos/mine-teradata) with the following commands:

```
GRANT SELECT ON dbc.dbqlogtbl TO atlan_user_role;  

```

Grant role to user[â](#grant-role-to-user "Direct link to Grant role to user")
--------------------------------------------------------------------------------

To grant the `atlan_user_role` to the new user:

```
GRANT atlan_user_role TO atlan_user;  

```
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousTeradata](/apps/connectors/database/teradata)[NextCrawl Teradata](/apps/connectors/database/teradata/how-tos/crawl-teradata)

Copyright Â© 2025 Atlan Pte. Ltd.

