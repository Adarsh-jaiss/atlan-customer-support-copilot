# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau
meta-description: :::warning Who can do this? You will probably need your Tableau administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Tableau administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Tableau | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/tableau/how-tos/set-up-tableau
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Tableau | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Tableau
==============

Who can do this?You will probably need your Tableau administrator to run these commands \- you may not have access yourself.

Enable the Tableau Metadata API[â](#enable-the-tableau-metadata-api "Direct link to Enable the Tableau Metadata API")
-----------------------------------------------------------------------------------------------------------------------

To enable the Tableau Metadata API, follow the [steps in Tableau documentation](https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_start.html#enable-the-tableau-metadata-api-for-tableau-server).

dangerAtlan needs the Tableau Metadata API to crawl metadata. Please ensure you are running the latest version of Tableau Server or Tableau Online (2022\.x with REST API version 3\.14\+). Learn more about the [permissions](https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_permissions.html) used to access metadata through the Tableau Metadata API.

Publish the worksheets you want to crawl[â](#publish-the-worksheets-you-want-to-crawl "Direct link to Publish the worksheets you want to crawl")
--------------------------------------------------------------------------------------------------------------------------------------------------

Ensure you publish the worksheets in Tableau that you want to crawl in Atlan.

To publish Tableau worksheets, follow the [steps in Tableau documentation](https://help.tableau.com/current/pro/desktop/en-us/environ_workbooksandsheets_sheets_hideshow.htm).

Choose authentication mechanism[â](#choose-authentication-mechanism "Direct link to Choose authentication mechanism")
-----------------------------------------------------------------------------------------------------------------------

Atlan supports the following authentication methods for fetching metadata from Tableau:

* [Basic](#basic-authentication) \- this method uses a username and password.
* [Personal access token](#personal-access-token-authentication) \- this method uses a personal access token.
* [JWT bearer](#jwt-bearer-authentication) \- this method uses a username and JWT client ID, secret ID, and secret value.

### Basic authentication[â](#basic-authentication "Direct link to Basic authentication")

**Did you know?**To crawl assets and extract asset lineage from Tableau, the user must have the [*Site Administrator Explorer* role](https://help.tableau.com/current/online/en-us/permission_license_siterole.htm). Atlan requires the *Site Administrator Explorer* role in Tableau to extract data source fields and calculated fields and create field\-level assets and lineage. It is not possible to fetch either with the *Viewer* role in the current version of the Tableau Metadata API.

#### Add a user[â](#add-a-user "Direct link to Add a user")

Ensure you add a user with the role *Site Administrator Explorer* to the site you want to crawl.

To add such a user, follow the [steps in Tableau documentation](https://help.tableau.com/current/server/en-us/sites_addusers.htm).

#### Grant user permissions[â](#grant-user-permissions "Direct link to Grant user permissions")

Ensure you grant the [*View* capability](https://help.tableau.com/current/online/en-us/permissions_capabilities.htm#capabilities) for all the assets you want to crawl.

To grant the permission, follow the [steps in Tableau documentation](https://help.tableau.com/current/online/en-us/permissions.htm#set-permissions).

### Personal access token authentication[â](#personal-access-token-authentication "Direct link to Personal access token authentication")

If you want to access Tableau using an access token, you can generate a personal access token.

To generate a personal access token, follow the [steps in Tableau documentation](https://help.tableau.com/current/server/en-us/security_personal_access_tokens.htm).

### JWT bearer authentication[â](#jwt-bearer-authentication "Direct link to JWT bearer authentication")

dangerTo access the [Tableau Metadata API using JWT bearer authentication](https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_auth.html#sign-in-using-a-json-web-token-jwt), you must have Tableau Cloud October 2023 or Tableau Server 2023\.3 version. In addition, JWT authorization currently does not support all [REST API capabilities](https://help.tableau.com/current/online/en-us/connected_apps_scopes.htm#scopes). Due to these limitations at source, Atlan will not be able to crawl [Tableau flows](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau) if you use the JWT bearer authentication method.

#### Configure a connected app[â](#configure-a-connected-app "Direct link to Configure a connected app")

If you want to access Tableau using a JSON web token (JWT), you can configure a Tableau connected app. There are two types of connected apps that you can configure \- direct trust or OAuth 2\.0 trust.

To authenticate the Tableau connection in Atlan using this method, you will need the following:

* Username \- your Tableau Server username or Tableau Online email address, the user must have a [*Site Administrator Explorer* role](https://help.tableau.com/current/online/en-us/permission_license_siterole.htm)
* Connected app ID \- client ID generated for the connected app
* Secret ID \- secret ID linked to the client ID of the connected app
* Secret value \- secret value used to sign the token

To configure a connected app, follow the steps in Tableau documentation:

* [Direct trust](https://help.tableau.com/current/server-linux/en-us/connected_apps_direct.htm)
* [OAuth 2\.0 trust](https://help.tableau.com/current/server-linux/en-us/connected_apps_eas.htm)

#### Access scopes for connected apps[â](#access-scopes-for-connected-apps "Direct link to Access scopes for connected apps")

For JWT authorization, [scopes](https://help.tableau.com/current/online/en-us/connected_apps_scopes.htm) define access permissions granted to the token holder. Scopes control the specific actions that an application or user can perform in Tableau while accessing content through a connected app.

The Tableau connector in Atlan uses two `read` scopes to extract metadata from Tableau. Note that the Tableau connector is preconfigured to use these scopes, no action required.

Atlan uses the following scopes for JWT authentication:

* `tableau:content:read` \- allows read access to your assets in Tableau, including:

    + Workbooks \- can list, access, and retrieve metadata for workbooks.
    + Views \- can fetch specific views or dashboards within workbooks.
    + Data sources \- can access published data sources and associated metadata.
    + Projects \- can retrieve project metadata.
    + Metrics \- can read metrics associated with workbooks or dashboards.
    + Tables and databases \- can access metadata for tables and databases connected to Tableau.
* `tableau:users:read` \- allows read access to user details. This enables Atlan to display the source owner property for supported Tableau assets, including in the [impact analysis report](/product/capabilities/lineage/how-tos/download-and-export-lineage).
* Optional)`tableau:workbooks:download` â allows downloading a workbook (`.twb` or `.twbx`), enabling Atlan to display relationships for embedded Tableau dashboards.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousTableau](/apps/connectors/business-intelligence/tableau)[NextSet up on\-premises Tableau access](/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access)

Copyright Â© 2025 Atlan Pte. Ltd.

