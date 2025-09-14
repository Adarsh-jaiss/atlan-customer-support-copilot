# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics
meta-description: Atlan supports crawling the following with the Microsoft Azure Synapse Analytics package:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports crawling the following with the Microsoft Azure Synapse Analytics package:.
meta-og-locale: en
meta-og-title: Set up Microsoft Azure Synapse Analytics | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Microsoft Azure Synapse Analytics | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Microsoft Azure Synapse Analytics
========================================

Atlan supports crawling the followingÂ with the Microsoft Azure Synapse Analytics package:

* [Dedicated SQL pools](https://learn.microsoft.com/en-us/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-what-is) (formerly SQL DW)
* [Serverless SQL pools](https://learn.microsoft.com/en-us/azure/synapse-analytics/sql/on-demand-workspace-overview)

Atlan supports the following authentication methods for fetching metadata from Microsoft Azure Synapse Analytics:

* [Basic authentication](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#basic-authentication) \- this method uses a username and password to fetch metadata.
* [Service principal authentication](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/set-up-microsoft-azure-synapse-analytics#service-principal-authentication) \- this method requires a client ID, client secret, and tenant ID to fetch metadata.

Basic authentication[â](#basic-authentication "Direct link to Basic authentication")
--------------------------------------------------------------------------------------

Who can do this?You will need your [Microsoft Azure Synapse Analytics administrator](https://learn.microsoft.com/en-us/azure/synapse-analytics/sql/sql-authentication?tabs=serverless) to run these commands \- you may not have access yourself.

### Create a login[â](#create-a-login "Direct link to Create a login")

You must create a login within the `master` database for the new user.

To create a login for the new user:

```
CREATE LOGIN <login_name> WITH PASSWORD = '<password>';  

```
* Replace `<login_name>` with the name of the login.
* Replace `<password>` with the password for the login.

### Create a user[â](#create-a-user "Direct link to Create a user")

You will need to create a new user for [integrating with Atlan](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics).

To create a user for the [newly created login](#create-a-login):

```
CREATE USER <username> FOR LOGIN <login_name>;  

```
* Replace `<username>` with the username to use when integrating Atlan.
* Replace `<login_name>` with the name of the login used in the previous step.

### Crawl assets and mine view lineage[â](#crawl-assets-and-mine-view-lineage "Direct link to Crawl assets and mine view lineage")

You will need to connect to the target database that you want to [crawl in Atlan](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics).

The following grant crawls all your Microsoft Azure Synapse Analytics assets and mines lineage for views.

To grant the minimum permissions required to crawl assets and mine view lineage from a SQL pool:

```
GRANT VIEW DEFINITION ON DATABASE::<database_name> TO <username>;  

```
* Replace `<database_name>` with the name of the database. You must grant these permissions to all the databases you want to crawl in Atlan.
* Replace `<username>` with the [username created above](#create-a-user).

Service principal authentication[â](#service-principal-authentication "Direct link to Service principal authentication")
--------------------------------------------------------------------------------------------------------------------------

### Register app with Microsoft Entra ID[â](#register-app-with-microsoft-entra-id "Direct link to Register app with Microsoft Entra ID")

Who can do this?You will need your *[Cloud Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#cloud-application-administrator)* or *[Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#application-administrator)* to complete these stepsÂ \- you may not have access yourself. This will be required if the creation of registered applications is not enabled for the entire organization.

You will need to [register your service principal application](https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application) with Microsoft Entra ID and note down the values of the tenant ID, client ID, and client secret.

To register your app with Microsoft Entra ID:

1. Log in to the [Azure portal](https://portal.azure.com/).
2. In the search bar, search for **Microsoft Entra ID**, and select it from the dropdown list.
3. From the left menu of the *Microsoft Entra ID* page, click **App registrations**.
4. From the toolbar on the *App registrations* page, click **\+ New registration**.
5. On the *Register an application* page, for *Name*, enter a name for your service principal application and then click **Register**.
6. On the homepage of your newly created application, from the *Overview* screen, copy the values for the following fields and store them in a secure location:
    * **Application (client) ID**
    * **Directory (tenant) ID**
7. From the left menu of your newly created application page, click **Certificates \& secrets**.
8. On the *Certificates \& secrets* page, under *Client secrets*, click **\+ New client secret**.
9. In the *Add a client secret* screen, enter the following details:
    1. For *Description*, enter a description for your client secret.
    2. For *Expiry*, select when the client secret will expire.
    3. Click **Add**.
10. On the *Certificates \& secrets* page, under *Client secrets*, for the newly created client secret, click the clipboard icon to copy the *Value* and store it in a secure location.

### Create a service principal user[â](#create-a-service-principal-user "Direct link to Create a service principal user")

To create a service principal user:

```
CREATE USER <service_principal_display_name> FROM EXTERNAL PROVIDER;  

```
* Replace `<service_principal_display_name>` with the name of the [service principal you created](#create-a-service-principal-user) in the previous step.

### Grant SQL permissions[â](#grant-sql-permissions "Direct link to Grant SQL permissions")

To grant SQL permissions to the [service principal](#create-a-service-principal-user):

```
GRANT VIEW DEFINITION ON DATABASE::<database_name> TO <service_principal_display_name>;  

```
* Replace `<database_name>` with the name of the database.
* Replace `<service_principal_display_name>` with the name of the [service principal you created](#create-a-service-principal-user).

### Assign Synapse RBAC role[â](#assign-synapse-rbac-role "Direct link to Assign Synapse RBAC role")

Who can do this?You will need your [Synapse Administrator](https://learn.microsoft.com/en-us/azure/synapse-analytics/security/synapse-workspace-synapse-rbac-roles#built-in-synapse-rbac-roles-and-scopes) to complete these steps \- you may not have access yourself.

To [assign a Synapse role\-based access control (RBAC) role](https://learn.microsoft.com/en-us/azure/synapse-analytics/security/how-to-manage-synapse-rbac-role-assignments) to the service principal:

1. Open [Synapse Studio](https://web.azuresynapse.net/en/) and log in to your Synapse workspace.
2. From the left menu of your Synapse workspace, click the **Manage** tab. Then from under *Security*,Â click **Access control**.
3. From the options along the top of the *Access control* page, click **\+ Add**.
4. In the *Add role assignment* tab, enter the following details:
    1. For *Scope*, select **Workspace**Â as the scope.
    2. For *Role*, select **Synapse Artifact User** as the Synapse RBAC role to assign. The [*Synapse Artifact User*](https://learn.microsoft.com/en-us/azure/synapse-analytics/security/synapse-workspace-synapse-rbac-roles#built-in-synapse-rbac-roles-and-scopes) role provides read access to published code artifacts and their outputs. Although it can create new artifacts, it can neither publish changes nor run code without additional permissions.
    3. For *Select user*, search for and select the [service principal you created](#create-a-service-principal-user).
    4. Click **Apply** to assign the Synapse RBAC role to the service principal.

Mine query history[â](#mine-query-history "Direct link to Mine query history")
--------------------------------------------------------------------------------

dangerAtlan currently only supports mining query history for dedicated SQL pools with the [Microsoft Azure Synapse Analytics miner](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/mine-microsoft-azure-synapse-analytics). Mining query history for serverless SQL pools is currently not supported.

To mine query history from Microsoft Azure Synapse Analytics, complete these steps.

### Enable query store[â](#enable-query-store "Direct link to Enable query store")

The [Query Store](https://learn.microsoft.com/en-us/azure/synapse-analytics/sql/query-history-storage-analysis) is disabled by default for new Microsoft Azure Synapse Analytics databases. It stores 7 days of query history by default, which can be extended to 30 days.

To enable the Query Store for [mining query history in Atlan](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/mine-microsoft-azure-synapse-analytics), run the following T\-SQL command:

```
ALTER DATABASE <database_name>  
SET QUERY_STORE = ON;  

```
* Replace `<database_name>` with the name of the database.

### Grant permissions[â](#grant-permissions "Direct link to Grant permissions")

To mine query history, grant the following permissions:

* [Basic authentication](#basic-authentication):

```
GRANT VIEW DATABASE STATE TO <username>  

```

    + Replace `<username>` with the [username](#create-a-user) you created for basic authentication.
* [Service principal authentication](#service-principal-authentication):

```
GRANT VIEW DATABASE STATE TO <service_principal_display_name>  

```

    + Replace `<service_principal_display_name>` with the name of the [service principal you created](#create-a-service-principal-user) for service principal authentication.

Find your SQL pool server[â](#find-your-sql-pool-server "Direct link to Find your SQL pool server")
-----------------------------------------------------------------------------------------------------

To find the server name of your SQL pool for [crawling Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics):

1. Open [Synapse Studio](https://web.azuresynapse.net/en/).
2. On the login page, select **Synapse Workspace**.
3. From the left menu of your Synapse workspace, click the **Manage** tab. Then from under *Analytics pools*,Â click **SQL pools**.
4. On the *SQL pools* page, under *Name*, select your SQL pool.
5. In the *Properties* form,Â navigate to *Workspace*Â*SQL endpoint* and copy the server name of your SQL pool and save it in a temporary location.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousMicrosoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics)[NextMine Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/mine-microsoft-azure-synapse-analytics)

Copyright Â© 2025 Atlan Pte. Ltd.

