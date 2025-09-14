# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/how-tos/set-up-databricks

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/how-tos/set-up-databricks
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/how-tos/set-up-databricks
meta-description: Configure Databricks to enable data quality monitoring through Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure Databricks to enable data quality monitoring through Atlan.
meta-og-locale: en
meta-og-title: Set up Databricks | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/how-tos/set-up-databricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Databricks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Databricks [Private Preview](/get-started/references/product-release-stages#private-preview)
===================================================================================================

This guide walks through configuring Databricks to work with Atlan's data quality studio by creating the required service principal, setting up authentication, and granting the necessary privileges. Atlan recommends using serverless SQL warehouses for instant compute availability.

System requirements[â](#system-requirements "Direct link to System requirements")
-----------------------------------------------------------------------------------

Before setting up the integration, make sure you meet the following requirements:

* Databricks Premium or Enterprise edition
* Serverless Compute for Jobs \& Notebooks enabled
* Dedicated SQL warehouse for running DQ\-related queries
* Outbound network access permitted from Serverless Compute (Enterprise tier only)

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, complete the following steps:

* Obtain Workspace admin and Metastore Admin or CREATE CATALOG privilege
* Identify your dedicated SQL warehouse for DQ operations
* [Create an API token in Atlan](/get-started/references/api-authentication) that's stored in Databricks for authentication
* Review [Data Quality permissions](/product/capabilities/governance/data-quality/snowflake/references/data-quality-permissions) to understand required privileges

Create service principal[â](#create-service-principal "Direct link to Create service principal")
--------------------------------------------------------------------------------------------------

Create the service principal that Atlan uses to perform Data Quality (DQ) operations within your Databricks workspace.

1. Follow the appropriate guide based on your Databricks deployment environment:

    * [Creating a Service Principal in AWS based Databricks Accounts](https://docs.databricks.com/administration-guide/users-groups/service-principals-manage.html#create-a-service-principal)
        * [Creating a Service Principal in Azure based Databricks Accounts](https://docs.databricks.com/administration-guide/users-groups/service-principals-manage.html#create-a-service-principal)
2. Store the following credentials securely:

    * `client_id`
        * `client_secret`
        * `tenant_id` (Azure only)
        * Service principal name
        Atlan recommends naming it: `atlan-dq-service-principal`
3. Set up authentication: Choose one of the following authentication methods for your service principal:

 **OAuth (Recommended)**:

    1. Use the `client_id`, `client_secret`, and `tenant_id` (Azure only) from the service principal created in the previous step
        2. No additional configuration required
 **Personal access token (pat)**:

    1. Follow the [Databricks Personal Access Token guide](https://docs.databricks.com/dev-tools/auth/pat.html) to generate a token for the service principal
        2. Store the token securely for use in the next steps
4. Grant warehouse access: Grant the service principal access to a SQL warehouse that's used to run Data Quality queries.

    * Go to your Databricks workspace UI
        * Navigate to **SQL** \> **SQL Warehouses**
        * Click on the warehouse you want Atlan to use
        * Click on the **Permissions** button
        * Select the Service Principal (`atlan-dq-service-principal`) from the list
        * Assign the **Can Use** permission
        * Click **Add**
        Once access is granted, Atlan can use this warehouse to run SQL queries related to Data Quality operations.

Set up Databricks objects[â](#set-up-databricks-objects "Direct link to Set up Databricks objects")
-----------------------------------------------------------------------------------------------------

Create the required Databricks objects needed for the functioning of the Atlan Data Quality Studio.

### Create the atlan\_dq catalog[â](#create-the-atlan_dq-catalog "Direct link to Create the atlan_dq catalog")

The `atlan_dq` catalog is used by Atlan to store metadata, DQ rule execution results, and internal processing tables.

Run the following SQL command in a Databricks notebook or SQL editor:

```
CREATE CATALOG IF NOT EXISTS atlan_dq;  

```

### Set up secret scope and secret[â](#set-up-secret-scope-and-secret "Direct link to Set up secret scope and secret")

Create a Databricks Secret Scope to securely store the Atlan API token. This token enables the service principal to authenticate and interact with Atlan's APIs.

noteSecret scopes and secret ACLs can only be managed using the Databricks CLI or REST API. These operations aren't supported through SQL.

1. Create a new Secret Scope named `atlan_dq`:

    ```
    databricks secrets create-scope atlan_dq

    ```
2. Save the Atlan API token in a secret named `api_token` in the scope:

    ```
    databricks secrets put-secret --json '{  
      "scope": "atlan_dq",  
      "key": "api_token",  
      "string_value": "<ATLAN_API_TOKEN>"  
    }'

    ```
        Replace `<ATLAN_API_TOKEN>` with the API token value you created in Atlan.

Grant privileges[â](#grant-privileges "Direct link to Grant privileges")
--------------------------------------------------------------------------

Grant the following privileges to **atlan\-dq\-service\-principal** so it can create internal objects, read the Atlan API token, and query data for quality checks. Replace placeholders with real values.

* **Manage the `atlan_dq` catalog**

```
GRANT USE CATALOG   ON CATALOG atlan_dq TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  
GRANT CREATE SCHEMA ON CATALOG atlan_dq TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  

```
* **Read the API token stored in the `atlan_dq` secret scope**

```
databricks secrets put-acl atlan_dq <SERVICE_PRINCIPAL_CLIENT_ID> READ  

```
* **Access data for quality checks** (choose one scope)

    *Catalog level*

```
GRANT USE CATALOG ON CATALOG <CATALOG> TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  
GRANT USE SCHEMA  ON CATALOG <CATALOG> TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  
GRANT SELECT      ON CATALOG <CATALOG> TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  

```
    *Schema level*

```
GRANT USE CATALOG ON CATALOG <CATALOG> TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  
GRANT USE SCHEMA  ON SCHEMA  <SCHEMA>  TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  
GRANT SELECT      ON SCHEMA  <SCHEMA>  TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  

```
    *Table level*

```
GRANT USE CATALOG ON CATALOG <CATALOG> TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  
GRANT USE SCHEMA  ON SCHEMA  <SCHEMA>  TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  
GRANT SELECT      ON TABLE   <TABLE>   TO '<SERVICE_PRINCIPAL_CLIENT_ID>';  

```

These grants let Atlan create its internal schemas, fetch the API token securely, and run SELECT queries needed for rule execution.

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

* [Enable data quality on connection](/product/capabilities/governance/data-quality/databricks/how-tos/enable-data-quality) \- Configure your Databricks connection for data quality monitoring

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you have questions or need assistance with setting up Databricks for data quality, reach out to Atlan Support by [submitting a support request](/support/submit-request).

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Configure alerts for data quality rules](/product/capabilities/governance/data-quality/how-tos/configure-alerts) \- Set up real\-time notifications for rule failures
**Tags:*** [databricks](/tags/databricks)
* [data\-quality](/tags/data-quality)
* [setup](/tags/setup)
* [governance](/tags/governance)

[PreviousDatabricks Data Quality Studio](/product/capabilities/governance/data-quality/databricks)[NextEnable data quality on connection](/product/capabilities/governance/data-quality/databricks/how-tos/enable-data-quality)

Copyright Â© 2025 Atlan Pte. Ltd.

