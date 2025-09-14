# Source URL
https://docs.atlan.com/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana
link-alternate: https://docs.atlan.com/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana
meta-description: :::warning Who can do this? You will probably need your SAP HANA administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your SAP HANA administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up SAP HANA | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/sap-hana/how-tos/set-up-sap-hana
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up SAP HANA | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up SAP HANA
===============

Who can do this?You will probably need your SAP HANA administrator to run these commands \- you may not have access yourself.

**Did you know?**This connector supports both SAP HANA on\-premise as well as [SAP HANA Cloud](https://help.sap.com/docs/hana-cloud) and [SAP HANA Platform](https://help.sap.com/docs/SAP_HANA_PLATFORM) database deployments.

Atlan currently only supports basic username and password authentication for fetching metadata from SAP HANA. Complete the following steps to configure it:

Create a database user[â](#create-a-database-user "Direct link to Create a database user")
--------------------------------------------------------------------------------------------

Create a database user with the following commands:

```
CREATE USER <username> PASSWORD <password> NO FORCE_FIRST_PASSWORD_CHANGE;  

```
* Replace `<username>` with the username you want to create.
* Replace `<password>` with the password for that username.

Grant read permission on schema[â](#grant-read-permission-on-schema "Direct link to Grant read permission on schema")
-----------------------------------------------------------------------------------------------------------------------

Grant read permission on schema with the following commands.

To crawl metadata as well as preview and query data in Atlan:

```
GRANT SELECT, SELECT METADATA ON SCHEMA <schema> TO <username>;  

```
To only crawl metadata in Atlan:

```
GRANT SELECT METADATA ON SCHEMA <schema> TO <username>;  

```
* Replace `<schema>` with the name of the schema you want to crawl.

To crawl [calculation views](/apps/connectors/database/sap-hana/references/what-does-atlan-crawl-from-sap-hana#calculation-views) in Atlan:

```
GRANT SELECT ON _SYS_REPO.ACTIVE_OBJECT TO <username>;  
GRANT SELECT ON _SYS_BI.BIMC_PROPERTIES TO <username>;  

```
dangerYour SAP HANA administrator will need to run these statements for each schema you want to crawl.

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousSAP HANA](/apps/connectors/database/sap-hana)[NextCrawl SAP HANA](/apps/connectors/database/sap-hana/how-tos/crawl-sap-hana)

Copyright Â© 2025 Atlan Pte. Ltd.

