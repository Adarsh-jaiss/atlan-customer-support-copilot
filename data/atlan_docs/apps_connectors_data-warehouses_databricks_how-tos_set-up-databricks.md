# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks
meta-description: Atlan supports three authentication methods for fetching metadata from Databricks. You can set up any of the following authentication methods:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports three authentication methods for fetching metadata from Databricks. You can set up any of the following authentication methods:.
meta-og-locale: en
meta-og-title: Set up Databricks | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Databricks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Databricks
=================

Atlan supports three authentication methods for fetching metadata from Databricks. You can set up any of the following authentication methods:

* [Personal access token authentication](#personal-access-token-authentication)
* [AWS service principal authentication](#aws-service-principal-authentication)
* [Azure service principal authentication](#azure-service-principal-authentication)

Personal access token authentication[â](#personal-access-token-authentication "Direct link to Personal access token authentication")
--------------------------------------------------------------------------------------------------------------------------------------

Who can do this?Check that you have *Admin* and *Databricks SQL access* for the Databricks workspace. This is required for both cluster options described below. If you don't have this access, contact your Databricks administrator.

### Grant user access to workspace[â](#grant-user-access-to-workspace "Direct link to Grant user access to workspace")

To grant workspace access to the user creating a personal access token:

1. From the left menu of the account console, click **Workspaces** and then select a workspace to which you want to add the user.
2. From the tabs along the top of your workspace page, click the **Permissions** tab.
3. In the upper right of the *Permissions* page, click **Add permissions**.
4. In the *Add permissions* dialog, enter the following details:
    1. For *User, group, or service principal*, select the user to grant access.
    2. For *Permission*, click the dropdown and select workspace **User.**

### Generate a personal access token[â](#generate-a-personal-access-token "Direct link to Generate a personal access token")

You can [generate a personal access token](https://docs.databricks.com/en/dev-tools/auth/pat.html#databricks-personal-access-tokens-for-workspace-users) in your Databricks workspace to the authenticate the [integration in Atlan](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks).

To generate a personal access token:

1. From the top right of your Databricks workspace, click your Databricks username, and then from the dropdown, click **User** **Settings**.
2. Under the *Settings* menu, click **Developer**.
3. On the *Developer* page, next to *Access tokens*, click **Manage**.
4. On the *Access tokens* page, click the **Generate new token** button.
5. In the *Generate new token* dialog:
    1. For *Comment*, enter a description of the token's intended use \- for example, `Atlan crawler`.
    2. For *Lifetime (days)*, consider removing the number. This enables the token to be used indefinitely \- it won't need to be refreshed.
    
        Important! If you do enter a number, remember that you need to periodically regenerate it and update Atlan's crawler configuration with the new token each time.
    3. At the bottom of the dialog, click **Generate**.
6. Copy and save the generated token in a secure location, and then click **Done**.

### Select a cluster[â](#select-a-cluster "Direct link to Select a cluster")

**Did you know?**Atlan recommends using serverless SQL warehouses for instant compute availability. To enable serverless SQL warehouses, refer to [Databricks documentation](https://docs.databricks.com/en/admin/sql/serverless.html) for AWS Databricks workspaces or [Microsoft documentation](https://learn.microsoft.com/en-us/azure/databricks/admin/sql/serverless) for Azure Databricks workspaces.

You can set up personal access token authentication for your Databricks instance using one of the following cluster options:

* Interactive cluster
* SQL warehouse (formerly SQL endpoint)

#### Interactive cluster[â](#interactive-cluster "Direct link to Interactive cluster")

To confirm an [all\-purpose interactive cluster](https://docs.databricks.com/clusters/index.html) is configured:

1. From the left menu of any page of your Databricks instance, click **Compute**.
2. Under the *All\-purpose clusters* tab, verify you have a cluster defined.
3. Click the link under the *Name* column of the table to open your cluster.
4. Under the *Configuration* tab, verify the *Autopilot options* to *Terminate after ... minutes* is enabled.
5. At the bottom of the *Configuration* tab, expand the **Advanced options** expandable.
    1. Under the *Advanced options* expandable, open the **JDBC/ODBC** tab.
    2. Confirm that all of the fields in this tab are populated, and copy them for use in crawling: *Server Hostname*, *Port*, and *HTTP Path*.

#### SQL warehouse (formerly SQL endpoint)[â](#sql-warehouse-formerly-sql-endpoint "Direct link to SQL warehouse (formerly SQL endpoint)")

To confirm a [SQL warehouse](https://docs.databricks.com/en/compute/sql-warehouse/index.html) is configured:

1. From the left menu of any page of your Databricks instance, open the dropdown just below the *databricks* logo and change to **SQL**.
2. From the refreshed left menu, click **SQL Warehouses**.
3. Click the link under the *Name* column of the table to open your SQL warehouse.
4. Under the **Connection details** tab, confirm that all of the fields are populated and copy them for use in crawling: *Server hostname*, *Port*, and *HTTP path*.

AWS service principal authentication[â](#aws-service-principal-authentication "Direct link to AWS service principal authentication")
--------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You need your [AWS Databricks account admin](https://docs.databricks.com/en/administration-guide/users-groups/service-principals.html#who-can-manage-and-use-service-principals) to create a service principal and manage OAuth credentials for the service principal and your [AWS Databricks workspace admin](https://docs.databricks.com/en/administration-guide/users-groups/service-principals.html#who-can-manage-and-use-service-principals) to add the service principal to your AWS Databricks workspace \- you may not have access yourself.

You need the following to authenticate the connection in Atlan:

* Client ID
* Client secret

### Create a service principal[â](#create-a-service-principal "Direct link to Create a service principal")

You can create a service principal directly in your Databricks account or from a Databricks workspace.

* Identity federation enabled on your workspaces: Databricks recommends creating the service principal in the account and assigning it to workspaces.
* Identity federation disabled on your workspaces: Databricks recommends that you create your service principal from a workspace.

#### Identity federation enabled[â](#identity-federation-enabled "Direct link to Identity federation enabled")

To create a service principal from your Databricks account, with identify federation enabled:

1. Log in to your Databricks [account console](https://accounts.cloud.databricks.com/) as an account admin.
2. From the left menu of the account console, click **User management**.
3. From the tabs along the top of the *User management* page, click the **Service principals** tab.
4. In the upper right of the *Service principals* page, click **Add service principal**.
5. On the *Add service principal* page, enter a name for the service principal and then click **Add**.
6. Once the service principal has been created, you can assign it to your identity federated workspace. From the left menu of the account console, click **Workspaces** and then select a workspace to which you want to add the service principal.
7. From the tabs along the top of your workspace page, click the **Permissions** tab.
8. In the upper right of the *Permissions* page, click **Add permissions**.
9. In the *Add permissions* dialog, enter the following details:
    1. For *User, group, or service principal*, select the service principal you created.
    2. For *Permission*, click the dropdown and select workspace **User.**

#### Identity federation disabled[â](#identity-federation-disabled "Direct link to Identity federation disabled")

To create a service principal from a Databricks workspace, with identity federation disabled:

1. Log in to your AWS Databricks workspace as a workspace admin.
2. From the top right of your workspace, click your username, and then from the dropdown, click **Admin Settings**.
3. In the left menu of the *Settings* page, under the *Workspace admin* subheading, click **Identity and access**.
4. On the *Identity and access* page, under *Management and permissions*, next to *Service principals*, click **Manage**.
5. In the upper right of the *Service principals* page, click **Add service principal**.
6. In the *Add service principal* dialog, click the **Add new** button.
7. For *New service principal display name*, enter a name for the service principal and then click **Add**.

### Create an OAuth secret for the service principal[â](#create-an-oauth-secret-for-the-service-principal "Direct link to Create an OAuth secret for the service principal")

You need to create an OAuth secret to authenticate to Databricks REST APIs.

To create an OAuth secret for the [service principal](#create-a-service-principal):

1. Log in to your Databricks [account console](https://accounts.cloud.databricks.com/) as an account admin.
2. From the left menu of the account console, click **User management**.
3. From the tabs along the top of the *User management* page, click the **Service principals** tab.
4. In the upper right of the *Service principals* page, select the [service principal you created](#create-a-service-principal).
5. On the service principal page, under *OAuth secrets*, click **Generate secret**.
6. From the *Generate secret* dialog, copy the *Secret* and *Client ID* and store it in a secure location.

    danger Note that this secret is only revealed once during creation. The client ID is the same as the application ID of the service principal.
7. Once you've copied the client ID and secret, click **Done**.

Azure service principal authentication[â](#azure-service-principal-authentication "Direct link to Azure service principal authentication")
--------------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You need your [Azure Databricks account admin](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/users-groups/service-principals#--who-can-manage-and-use-service-principals) to create a service principal and your [Azure Databricks workspace admin](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/users-groups/service-principals#--who-can-manage-and-use-service-principals) to add the service principal to your Azure Databricks workspace \- you may not have access yourself.

You need the following to authenticate the connection in Atlan:

* Client ID (application ID)
* Client secret
* Tenant ID (directory ID)

### Create a service principal[â](#create-a-service-principal-1 "Direct link to Create a service principal")

To [use service principals on Azure Databricks](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/users-groups/service-principals#--manage-service-principals-in-your-account), an admin user must create a new Microsoft Entra ID (formerly Azure Active Directory) application and then add it to the Azure Databricks workspace to use as a service principal.

To create a service principal:

1. Sign in to the [Azure portal](https://portal.azure.com/).
2. If you have access to multiple tenants, subscriptions, or directories, click the **Directories \+ subscriptions** (directory with filter) icon in the top menu to switch to the directory in which you want to create the service principal.
3. In\_Search resources, services, and docs\_, search for and select**Microsoft Entra ID**.
4. Click\*\*\+ Add**and select**App registration\*\*.
5. For\_Name\_, enter a name for the application.
6. In the\_Supported account types\_section, select**Accounts in this organizational directory only (Single tenant)** and then click **Register**.
7. On the application page's\_Overview\_page, in the\_Essentials\_section, copy and store the following values in a secure location:
    * *Application (client) ID*
    * *Directory (tenant) ID*
8. To generate a client secret, within\_Manage\_, click**Certificates \& secrets**.
9. On the\_Client secrets\_tab, click**New client secret**.
10. In the\_Add a client secret\_dialog, enter the following details:
11. For *Description*, enter a description for the client secret.
12. For\_Expires\_, select an expiry time period for the client secret and then click **Add**.
13. Copy and store the client secret's\_Value\_in a secure place.

### Add a service principal to your account[â](#add-a-service-principal-to-your-account "Direct link to Add a service principal to your account")

To add a service principal to your Azure Databricks account:

1. Log in to your [Azure Databricks account console](https://accounts.azuredatabricks.net/login) as an account admin.
2. From the left menu of the account console, click **User management**.
3. From the tabs along the top of the *User management* page, click the **Service principals** tab.
4. In the upper right of the *Service principals* page, click **Add service principal**.
5. On the *Add service principal* page, enter a name for the service principal.
6. Under *UUID*, paste the **Application (client) ID** for the service principal.
7. Click **Add**.

### Assign a service principal to a workspace[â](#assign-a-service-principal-to-a-workspace "Direct link to Assign a service principal to a workspace")

To add users to a workspace using the account console, the workspace must be enabled for identity federation. Workspace admins can also assign service principals to workspaces using the workspace admin settings page.

#### Identity federation enabled[â](#identity-federation-enabled-1 "Direct link to Identity federation enabled")

To assign a service principal to your Azure Databricks account:

1. Log in to your Databricks [account console](https://accounts.cloud.databricks.com/) as an account admin.
2. From the left menu of the account console, click **Workspaces** and then select a workspace to which you want to add the service principal.
3. From the tabs along the top of your workspace page, click the **Permissions** tab.
4. In the upper right of the *Permissions* page, click **Add permissions**.
5. In the *Add permissions* dialog, enter the following details:
    1. For *User, group, or service principal*, select the [service principal](#create-a-service-principal-1) you created.
    2. For *Permission*, click the dropdown to select workspace **User**.

#### Identity federation disabled[â](#identity-federation-disabled-1 "Direct link to Identity federation disabled")

To assign a service principal to your Azure Databricks workspace:

1. Log in to your Azure Databricks workspace as a workspace admin.
2. From the top right of your workspace, click your username, and then from the dropdown, click **Admin Settings**.
3. In the left menu of the *Settings* page, under the *Workspace admin* subheading, click **Identity and access**.
4. On the *Identity and access* page, under *Management and permissions*, next to *Service principals*, click **Manage**.
5. In the upper right of the *Service principals* page, click **Add service principal**.
6. In the *Add service principal* dialog, click the **Add new** button.
7. For *New service principal display name*, paste the *Application (client) ID* for the [service principal](#create-a-service-principal-1), enter a display name, and then click **Add**.

Grant permissions to crawl metadata[â](#grant-permissions-to-crawl-metadata "Direct link to Grant permissions to crawl metadata")
-----------------------------------------------------------------------------------------------------------------------------------

You must have a Unity Catalog\-enabled Databricks workspace to crawl metadata in Atlan.

To extract metadata, you can grant the [BROWSE privilege](https://docs.databricks.com/en/data-governance/unity-catalog/manage-privileges/privileges.html#browse), currently in public preview. You no longer require the *Data Reader* preset that granted the following privileges on objects in the catalog \- `USE CATALOG`, `USE SCHEMA`, `EXECUTE`, `READ VOLUME`, and `SELECT`.

To grant permissions to a user or service principal:

1. Log in to your Databricks workspace as a workspace admin.
2. From the left menu of your workspace, click **Catalog**.
3. In the left menu of the *Catalog Explorer* page, select the catalog you want to crawl in Atlan.
4. From the tabs along the top of your workspace page, click the **Permissions** tab and then click the **Grant** button.
5. In the *Grant on (workspace name)* dialog, configure the following:
    1. Under *Principals*, click the dropdown and then select the user or service principal.
    2. Under *Privileges*, check the **BROWSE** privilege.
    3. At the bottom of the dialog, click **Grant**.
6. (Optional) Repeat steps 3\-5 for each catalog you want to crawl in Atlan.

### System tables extraction method[â](#system-tables-extraction-method "Direct link to System tables extraction method")

To crawl metadata via system tables, you must have a Unity Catalog\-enabled workspace and a configured SQL warehouse. Follow these steps to extract metadata using system tables:

1. Create one of the following authentication methods:

    * [Personal access token](#personal-access-token-authentication)
        * [AWS service principal](#aws-service-principal-authentication)
        * [Azure service principal](#azure-service-principal-authentication)
2. Grant the following privileges to the identity you created:

    * `CAN_USE` on a SQL warehouse
        * `USE CATALOG` on `system` catalog
        * `USE SCHEMA` on `system.information_schema`
        * `SELECT` on the following tables:
            + `system.information_schema.catalogs`
            + `system.information_schema.schemata`
            + `system.information_schema.tables`
            + `system.information_schema.columns`
            + `system.information_schema.key_column_usage`
            + `system.information_schema.table_constraints`

### Cross\-workspace extraction[â](#cross-workspace-extraction "Direct link to Cross-workspace extraction")

To crawl metadata from all workspaces within a Databricks metastore using a single connection, see [Set up cross\-workspace extraction](/apps/connectors/data-warehouses/databricks/how-tos/set-up-cross-workspace-extraction) for instructions.

(Optional) Grant permissions to query and preview data[â](#optional-grant-permissions-to-query-and-preview-data "Direct link to (Optional) Grant permissions to query and preview data")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

dangerAtlan currently only supports [querying data](/product/capabilities/insights/how-tos/query-data) and [viewing sample data preview](/product/capabilities/discovery/references/provide-credentials-to-view-sample-data) for the [personal access token](#personal-access-token-authentication) authentication method.

To grant permissions to query data and preview example data:

1. Log in to your Databricks workspace as a workspace admin.
2. From the left menu of your workspace, click **Catalog**.
3. In the left menu of the *Catalog Explorer* page, select the catalog you want to query and preview data from in Atlan.
4. From the tabs along the top of your workspace page, click the **Permissions** tab and then click the **Grant** button.
5. In the *Grant on (workspace name)* dialog, configure the following:
    1. Under *Principals*, click the dropdown and then select the user or service principal.
    2. Under *Privilege presets*, click the dropdown and then click **Data Reader** to enable read\-only access to the catalog. Doing so automatically selects the following privileges \- `USE CATALOG`, `USE SCHEMA`, `EXECUTE`, `READ VOLUME`, and `SELECT`.
    3. At the bottom of the dialog, click **Grant**.
6. (Optional) Repeat steps 3\-5 for each catalog you want to query and preview data from in Atlan.

(Optional) Grant permissions to import and update tags[â](#optional-grant-permissions-to-import-and-update-tags "Direct link to (Optional) Grant permissions to import and update tags")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To [import Databricks tags](/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags), you must have a Unity Catalog\-enabled workspace and a SQL warehouse configured. Atlan supports importing Databricks tags using system tables for all three authentication methods.

Once you have created a [personal access token](#personal-access-token-authentication), an [AWS service principal](#aws-service-principal-authentication), or an [Azure service principal](#azure-service-principal-authentication), you will need to grant the following privileges:

* `CAN_USE` on a SQL warehouse
* `USE CATALOG` on `system catalog`
* `USE SCHEMA`on `system.information_schema`
* `SELECT` on the following tables:
    + `system.information_schema.catalog_tags`
    + `system.information_schema.schema_tags`
    + `system.information_schema.table_tags`
    + `system.information_schema.column_tags`

To push tags updated for assets in Atlan to Databricks, you need to grant the following [privileges](https://docs.databricks.com/en/database-objects/tags.html#requirements):

* `APPLY TAG` on the object
* `USE CATALOG` on the object's parent catalog
* `USE SCHEMA` on the object's parent schema

(Optional) Grant permissions to extract lineage and usage from system tables[â](#optional-grant-permissions-to-extract-lineage-and-usage-from-system-tables "Direct link to (Optional) Grant permissions to extract lineage and usage from system tables")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You must have a Unity Catalog\-enabled workspace to use system tables.

Atlan supports extracting the following for your Databricks assets using [system tables](https://docs.databricks.com/en/admin/system-tables/index.html#grant-access-to-system-tables):

* [lineage](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks)
* [usage and popularity metrics](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks)

### Enable system.access schema[â](#enable-systemaccess-schema "Direct link to Enable system.access schema")

You need your account admin to enable the `system.access` schema using the [SystemSchemas API](https://docs.databricks.com/api/workspace/systemschemas). This enables Atlan to extract lineage using system tables.

In Atlan, one Databricks connection corresponds to one metastore. Repeat the following process for each metastore in your Databricks environment for which you want to extract lineage.

To verify that system schemas are enabled for each schema, follow the steps in [Databricks documentation](https://docs.databricks.com/api/workspace/systemschemas/list):

* [List system schemas](https://docs.databricks.com/api/workspace/systemschemas/list) using the SystemSchemas API to check the status.
* If enabled for any given schema, the [state](https://docs.databricks.com/en/admin/system-tables/index.html#list-available-system-schemas) is `EnableCompleted`. This confirms that the schema has been enabled for that specific metastore.
* Atlan can only extract lineage using system tables when the state is marked as `EnableCompleted`.

### (Optional) enable `system.information_schema.table`[â](#optional-enable-systeminformation_schematable "Direct link to optional-enable-systeminformation_schematable")

To generate lineage with the target type set as `PATH` for a table, Atlan uses metadata from `system.information_schema.table` to resolve table paths and dependencies. To enable this, you must grant the following permissions on the relevant catalog, schema, and tables.

#### Grant permissions[â](#grant-permissions "Direct link to Grant permissions")

Who can do this?You must be a metastore admin, have the `MANAGE` privilege on the object, or be the owner of the catalog, schema, or table to grant these permissions.

In Atlan, one Databricks connection corresponds to one metastore. Repeat the following process for each metastore from which you want to extract lineage.

1. Open **Catalog Explorer** in your Databricks workspace.
2. Navigate to the catalog (for example, `main`) and then to the appropriate schema (for example, `sales`).
3. Click the **Permissions** tab.
4. Click **Grant**.
5. Enter the user or group name (principal).
6. Assign the following permissions:
    * `USAGE` on the catalog
    * `USAGE` on the schema
    * `SELECT` on each relevant table
7. Click **Grant** to apply the changes.

These privileges enable Atlan to read table definitions and other metadata from the metastore.

### (Optional) enable system.query schema[â](#optional-enable-systemquery-schema "Direct link to (Optional) enable system.query schema")

This is only required if you also want to extract [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) from Databricks.

You need your account admin to enable the `system.query` schema using the [SystemSchemas API](https://docs.databricks.com/api/workspace/systemschemas). This enables Atlan to mine query history using system tables for usage and popularity metrics.

To verify that system schemas is enabled for each schema, follow the steps in [Databricks documentation](https://docs.databricks.com/api/workspace/systemschemas/list). If enabled for any given schema, the [state](https://docs.databricks.com/en/admin/system-tables/index.html#list-available-system-schemas) is `EnableCompleted`.

infoðª **Did you know?** Can't grant `SELECT` permissions on the system tables in `system.access` and `system.query`? Skip the previous steps and create cloned views in a separate catalog and schema. See [Create cloned views of system tables](#optional-create-cloned-views-of-system-tables).

### Grant permissions[â](#grant-permissions-1 "Direct link to Grant permissions")

Atlan supports extracting Databricks lineage and usage and popularity metrics using system tables for [all three authentication methods](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).

Once you have created a [personal access token](#personal-access-token-authentication), an [AWS service principal](#aws-service-principal-authentication), or an [Azure service principal](#azure-service-principal-authentication), you will need to grant the following permissions:

* `CAN_USE` on a SQL warehouse
* `USE_CATALOG` on `system` catalog
* `USE SCHEMA` on `system.access` schema
* `USE SCHEMA` on `system.query` schema (tomine query history for usage and popularity metrics)
* `SELECT` on the following tables:
    + `system.query.history`(to mine query history for usage and popularity metrics)
    + `system.access.table_lineage`
    + `system.access.column_lineage`

You need to [create a Databricks connection in Atlan](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks) for each metastore. You can use the hostname of your Unity Catalog\-enabled workspace as the *Host* for the connection.

infoðª **Did you know?** Can't grant `SELECT` permissions on the system tables in `system.access` and `system.query`? Skip the previous steps and create cloned views in a separate catalog and schema. See [Create cloned views of system tables](#optional-create-cloned-views-of-system-tables).

### (Optional) Create cloned views of system tables[â](#optional-create-cloned-views-of-system-tables "Direct link to (Optional) Create cloned views of system tables")

When you don't want to grant access to system tables directly, you can create cloned views to expose lineage and popularity metrics through a separate schema.

Follow these steps to set up cloned views:

* Create a catalog and schema to store cloned views. Use meaningful and unique namesâfor example, `atlan_cloned_catalog` and `atlan_cloned_schema`.
* Create cloned views for the following system tables:

    + **Lineage tables**

    ```
    CREATE OR REPLACE VIEW <cloned-catalog-name>.<cloned-schema-name>.column_lineage AS  
    SELECT * FROM system.access.column_lineage;  

    CREATE OR REPLACE VIEW <cloned-catalog-name>.<cloned-schema-name>.table_lineage AS  
    SELECT * FROM system.access.table_lineage;  

    ```

        - Replace `<cloned-catalog-name>` and `<cloned-schema-name>` with the catalog and schema names used in your environment.
    + **Popularity metrics**

    ```
    CREATE OR REPLACE VIEW <cloned-catalog-name>.<cloned-schema-name>.query_history AS  
    SELECT * FROM system.query.history;  

    ```

        - Replace `<cloned-catalog-name>` and `<cloned-schema-name>` with the catalog and schema names used in your environment.

#### Grant permissions[â](#grant-permissions-2 "Direct link to Grant permissions")

Grant the following permissions to enable access to the cloned views:

* `CAN_USE` on a SQL warehouse
* `USE CATALOG` on the catalog (for example, `<cloned-catalog-name>`)
* `USE SCHEMA` and `SELECT` on the schema (for example, `<cloned-catalog-name>.<cloned-schema-name>`)

You must [create a Databricks connection in Atlan](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks) for each metastore. You can use the hostname of your Unity Catalog\-enabled workspace as the *Host* for the connection.

### Locate warehouse ID[â](#locate-warehouse-id "Direct link to Locate warehouse ID")

To extract lineage and usage and popularity metrics using system tables, you will also need the [warehouse ID of your SQL warehouse](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks).

To locate the warehouse ID:

1. Log in to your Databricks workspace as a workspace admin.
2. From the left menu of your workspace, click **SQL Warehouses**.
3. On the *Compute* page, select the warehouse you want to use.
4. From the *Overview* tab of your warehouse page, next to the *Name* of your warehouse, copy the value for your SQL warehouse *ID*. For example, `example-warehouse (ID: 123ab4c5def67890)`, copy the value `123ab4c5def67890` and store it in a secure location.

(Optional) Grant view permissions to access Databricks entities via APIs[â](#optional-grant-view-permissions-to-access-databricks-entities-via-apis "Direct link to (Optional) Grant view permissions to access Databricks entities via APIs")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Atlan uses Databricks REST APIs to extract metadata for Notebooks, Queries, Jobs, and Pipelines. This information helps to understand which Databricks enitity was used to create a lineage between assets. Use the steps below for each object type to grant **CAN VIEW** permission to the Databricks user or service principal configured in your integration:

1. **Notebook API**(`/api/2.0/workspace/list`): Grant **CAN VIEW** permission on individual notebooks, or on the workspace folder containing the notebooks, or on the entire workspace. For more information, see [Manage Access Control Lists with Folders](https://docs.databricks.com/security/access-control/lists.html#manage-access-control-lists-with-folders).
2. **Queries API**(`/api/2.0/sql/queries`): Grant **CAN VIEW** permission on individual queries, or on the workspace folder containing the queries, or on the entire workspace. For more information, see [View Queries](https://docs.databricks.com/sql/users-guide/queries/view-queries.html).
3. **Job API**(`/api/2.2/jobs/list`): Grant **CAN VIEW** permission on each job object directly.  
Databricks Jobs are distinct from notebooks or files and require permission set directly on the job object. For more information, see [Control Access to a Job](https://docs.databricks.com/jobs/jobs-access-control.html).
4. **Pipeline API**(`/api/2.0/pipelines`): Grant **CAN VIEW** permission on each Delta Live Tables (DLT) pipeline object directly. For more information, see [Configure Pipeline Permissions](https://docs.databricks.com/delta-live-tables/security.html#configure-pipeline-permissions).

(Optional) Grant permissions for views and materialized views[â](#optional-grant-permissions-for-views-and-materialized-views "Direct link to (Optional) Grant permissions for views and materialized views")
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Atlan requires the following permissions to to extract view definitions from and generate lineagefor views and materialized views:

1. Log in to your Databricks workspace as a workspace admin.
2. From the left menu of your workspace, click **Catalog**.
3. In the *Catalog Explorer*, select the catalog you want to extract view definitions from and generate lineage for in Atlan.
4. From the tabs at the top, click the **Permissions** tab, and then click **Grant**.
5. In the **Grant on (workspace name)** dialog, configure the following:
    * Select the **user** or **service principal** under **Principals**.
    * Select the following privileges under **Privilege presets**:
        + `USE CATALOG`
        + `USE SCHEMA`
        + `SELECT`
6. Click **Grant** to apply the permissions.
7. Repeat steps 3â6 for each catalog you want to crawl in Atlan.

**Did you know?**`SELECT` permission is required to extract the definitions of views and materialized views. If you prefer not to grant `SELECT` at the catalog level, you can grant it on individual views and materialized views instead.

(Optional) Grant permissions to mine query history[â](#optional-grant-permissions-to-mine-query-history "Direct link to (Optional) Grant permissions to mine query history")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To [mine query history](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks) using REST API, you will need to assign the `CAN MANAGE` permission on your SQL warehouses to the user or service principal.

To grant permissions to mine query history:

1. Log in to your Databricks workspace as a workspace admin.
2. From the left menu of your workspace, click **SQL Warehouses**.
3. On the *Compute* page, for each SQL warehouse you want to mine query history, click the 3\-dot icon and then click **Permissions**.
4. In the *Manage permissions* dialog, configure the following:
    1. In the *Type to add multiple users or groups* field, search for and select a user or service principal.
    2. Expand the *Can use* permissions dropdown and then select **Can manage**. This permission enables the service principal to [view all queries for the warehouse](https://docs.databricks.com/en/security/auth-authz/access-control/index.html#sql-warehouses).
    3. Click **Add** to assign the `CAN MANAGE` permission to the service principal.
**Tags:*** [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousDatabricks](/apps/connectors/data-warehouses/databricks)[NextSet up cross\-workspace extraction](/apps/connectors/data-warehouses/databricks/how-tos/set-up-cross-workspace-extraction)

Copyright Â© 2025 Atlan Pte. Ltd.

