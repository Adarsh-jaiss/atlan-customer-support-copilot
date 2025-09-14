# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake
meta-description: :::warning Who can do this? You need your Snowflake administrator to run these commands - you may not have access yourself. :::.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You need your Snowflake administrator to run these commands - you may not have access yourself. :::.
meta-og-locale: en
meta-og-title: Set up Snowflake | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Snowflake | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Snowflake
================

Who can do this?You need your Snowflake administrator to run these commands \- you may not have access yourself.

Create user and role in Snowflake[â](#create-user-and-role-in-snowflake "Direct link to Create user and role in Snowflake")
-----------------------------------------------------------------------------------------------------------------------------

Create a role and user in Snowflake using the following commands:

### Create role[â](#create-role "Direct link to Create role")

Create a role in Snowflake using the following commands:

```
CREATE OR REPLACE ROLE atlan_user_role;  
GRANT OPERATE, USAGE ON WAREHOUSE "<warehouse-name>" TO ROLE atlan_user_role;  

```
* Replace `<warehouse-name>` with the default warehouse to use when [running the Snowflake crawler](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake).

Atlan requires the following privileges to:

* `OPERATE` enables Atlan to start the virtual warehouse to fetch metadata if the warehouse has stopped.
* `USAGE` enables Atlan to show or list metadata from Snowflake. This in turn enables the [Snowflake crawler](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake) to run the `SHOW` query.

### Create a user[â](#create-a-user "Direct link to Create a user")

Create a separate user to integrate into Atlan, using one of the following 3 options:

#### With a public key in Snowflake[â](#with-a-public-key-in-snowflake "Direct link to With a public key in Snowflake")

See [Snowflake's official guide for details on generating an RSA key\-pair](https://docs.snowflake.com/en/user-guide/key-pair-auth.html). To create a user with a key\-pair, replace the value for `rsa_public_key` with the public key and run the following:

```
CREATE USER atlan_user rsa_public_key='MIIBIjANBgkqh...' default_role=atlan_user_role default_warehouse='<warehouse-name>' display_name='Atlan'  
TYPE = 'SERVICE'  

```
* Learn more about the `SERVICE` type property in [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties).

**Did you know?**Atlan only supports encrypted private keys with a non\-empty passphrase \- generally recommended as more secure. An empty passphrase results in workflow failures. To generate an encrypted private key, omit the `-nocrypt` option. Refer to [Snowflake documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth) to learn more.

#### With a password in Snowflake[â](#with-a-password-in-snowflake "Direct link to With a password in Snowflake")

**Did you know?**Snowflake recommends transitioning away from basic authentication using username and password. Change to key\-pair authentication for enhanced security. For any existing Snowflake workflows, you can [modify the crawler configuration](/product/connections/how-tos/manage-connectivity) to update the authentication method.

To create a user with a password, replace `<password>` and run the following:

```
CREATE USER atlan_user password='<password>' default_role=atlan_user_role default_warehouse='<warehouse-name>' display_name='Atlan'  
TYPE = 'LEGACY_SERVICE'  

```
* Learn more about the `LEGACY_SERVICE` type property in [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties).

#### Managed through your identity provider (IdP) Private preview[â](#managed-through-your-identity-provider-idp- "Direct link to managed-through-your-identity-provider-idp-")

This method is currently only available if Okta is your IdP (Snowflake supports) [authenticating natively through Okta](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use#native-sso-okta-only):

* Create a user in your identity provider (IdP) and [use federated authentication in Snowflake](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#managing-snowflake-user-passwords).
* The password for this user must be maintained solely in the IdP and multi\-factor authentication (MFA) must be disabled.

### Grant role to user[â](#grant-role-to-user "Direct link to Grant role to user")

To grant the `atlan_user_role` to the new user:

```
GRANT ROLE atlan_user_role TO USER atlan_user;  

```

### Configure OAuth (client credentials flow) with Microsoft Entra ID[â](#configure-oauth-client-credentials-flow-with-microsoft-entra-id "Direct link to Configure OAuth (client credentials flow) with Microsoft Entra ID")

To configure OAuth authentication using Microsoft Entra ID (formerly Azure AD) with the client credentials flow:

1. Follow [Snowflake's documentation](https://community.snowflake.com/s/article/Create-External-OAuth-Token-Using-Azure-AD-For-The-OAuth-Client-Itself) to:

    * Register a new application in Microsoft Entra ID
        * Collect the `client ID`, `tenant ID`, and `client secret`
        * Add the required API permissions
2. In Snowflake, create a security integration using the following:

    ```
    CREATE SECURITY INTEGRATION external_oauth_azure_ad  
        TYPE = external_oauth  
        ENABLED = true  
        EXTERNAL_OAUTH_TYPE = azure  
        EXTERNAL_OAUTH_ISSUER = '\<AZURE_AD_ISSUER\>'  
        EXTERNAL_OAUTH_JWS_KEYS_URL = '\<AZURE_AD_JWS_KEY_ENDPOINT\>'  
        EXTERNAL_OAUTH_AUDIENCE_LIST = ('\<SNOWFLAKE_APPLICATION_ID_URI\>')  
        EXTERNAL_OAUTH_TOKEN_USER_MAPPING_CLAIM = 'sub'  
        EXTERNAL_OAUTH_SNOWFLAKE_USER_MAPPING_ATTRIBUTE = 'login_name';

    ```

    * Replace the placeholders with actual values from your Azure AD app:
        * `<AZURE_AD_ISSUER>` â Your tenant's OAuth 2\.0 issuer URL
        * `<AZURE_AD_JWS_KEY_ENDPOINT>` â Azure JWKs URI
        * `<SNOWFLAKE_APPLICATION_ID_URI>` â Application ID URI of the Azure app
3. Create a Snowflake user with a login name that exactly matches the Azure AD client object ID:

    ```
    CREATE USER oauth_svc_user  
        WITH LOGIN_NAME = '\<AZURE_AD_CLIENT_OBJECT_ID\>'  -- Use Azure client OBJECT ID  
        DEFAULT_ROLE = \<ROLE\>  
        DEFAULT_WAREHOUSE = \<WAREHOUSE\>;

    ```
4. Grant the configured role to this user:

    ```
    GRANT ROLE \<ROLE\> TO USER oauth_svc_user;

    ```

Choose metadata fetching method[â](#choose-metadata-fetching-method "Direct link to Choose metadata fetching method")
-----------------------------------------------------------------------------------------------------------------------

Atlan supports two methods for fetching metadata from Snowflake \- account usage and information schema. You should choose one of these two methods to set up Snowflake:

| Â | Account usage | Information schema |
| --- | --- | --- |
| **Overview** | Simplified grants but some limitations in functionality | Most comprehensive approach, more grant management required |
| **Method** | Views in the `SNOWFLAKE` database that display object metadata and usage metrics for your account | System\-defined views and table functions that provide extensive metadata for objects created in your account |
| **Permissions** | User role and account, single grant for `SNOWFLAKE` database | User role and account, multiple grants per database |
| **Data latency** | 45 minutes to 3 hours (varies by view) | None |
| **Historical data retention** | 1 year | 7 days to 6 months (varies by view or table function) |
| **Asset extraction** | `ACCOUNT_USAGE` schema | `INFORMATION_SCHEMA` schema |
| **View lineage** | `ACCOUNT_USAGE` schema | `INFORMATION_SCHEMA` schema |
| **Table lineage** | `ACCOUNT_USAGE` schema | `ACCOUNT_USAGE` schema |
| **Tag import** | `ACCOUNT_USAGE` schema | `ACCOUNT_USAGE` schema |
| **Usage and popularity** | `ACCOUNT_USAGE` schema | `ACCOUNT_USAGE` schema |
| **Metadata extraction time** | Varies by warehouse size. For example, 8 minutes for 10 million assets (recommended for extracting a large number of assets) | Varies by warehouse size. For example, 2\+ hours for 10 million assets |
| **Extraction limitations** | External table location data, procedures, and primary and foreign keys | None |

Grant permissions for account usage method[â](#grant-permissions-for-account-usage-method "Direct link to Grant permissions for account usage method")
--------------------------------------------------------------------------------------------------------------------------------------------------------

dangerIf you want to set warehouse timeouts when using this method, set a large value initially for the workflow to succeed. Once the workflow has succeeded, adjust the value to be twice the extraction time.

This method uses the views in `SNOWFLAKE.ACCOUNT_USAGE` (or a copied version of this schema) to fetch the metadata from Snowflake into Atlan. You can be more granular with permissions using this method, but there are [limitations with this approach](/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-connectivity).

### To crawl assets, generate lineage, and import tags[â](#to-crawl-assets-generate-lineage-and-import-tags "Direct link to To crawl assets, generate lineage, and import tags")

If you also want to be able to preview and query the data, you can use the preview and query existing assets permissions instead.

Snowflake [stores all tag objects](https://docs.snowflake.com/en/user-guide/object-tagging#discover-tags) in the `ACCOUNT_USAGE` schema. If you're using the [account usage method](#grant-permissions-for-account-usage-method) to crawl metadata in Atlan or you have [configured the Snowflake miner](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake), you need to grant the same permissions to [import tags](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags) as required for crawling Snowflake assets. Note that object tagging in Snowflake currently requires [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions#feature-edition-matrix).

* To use the default `SNOWFLAKE` database and `ACCOUNT_USAGE` schema and also mine Snowflake's query history (for lineage), grant these permissions:

```
USE ROLE ACCOUNTADMIN;  
GRANT IMPORTED PRIVILEGES ON DATABASE SNOWFLAKE TO ROLE atlan_user_role;  

```
* The `ACCOUNTADMIN` role is required to grant privileges on the `SNOWFLAKE` database due to the following reasons:

    + By default, only the `ACCOUNTADMIN` role can access the `SNOWFLAKE` database.
    + To enable other roles to access the database and schemas and query the views, a user with the `ACCOUNTADMIN` role needs to grant `IMPORTED PRIVILEGES` on the `SNOWFLAKE` database to the desired roles.
* To use a copied or cloned version of this default schema, where you can also remove any sensitive data for security purposes, grant these permissions:

```
GRANT USAGE ON DATABASE "<copied-database>" TO ROLE atlan_user_role;  
GRANT USAGE ON SCHEMA "<copied-schema>" IN DATABASE "<copied-database>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON ALL VIEWS IN DATABASE "<copied-database>" TO ROLE atlan_user_role;  

```
* Replace `<copied-database>` with the copied Snowflake database name.
* Replace `<copied-schema>` with the copied Snowflake `ACCOUNT_USAGE` schema name.
* The grants for the copied version can't be used on the original `SNOWFLAKE` database. This is because Snowflake produces an error that granular grants can't be given to imported databases.
* When using a cloned or copied version, verify that the table or view definition remains unchanged as in your `SNOWFLAKE` database. If the format is different. For example, a column is missing and it no longer qualifies as a clone.

### To crawl streams[â](#to-crawl-streams "Direct link to To crawl streams")

To crawl streams, provide the following permissions:

* **To crawl current streams:**

```
GRANT USAGE ON ALL SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON ALL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL STREAMS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  

```
* Replace `<database-name>` with the Snowflake database name.
* **To crawl future streams:**

```
GRANT USAGE ON FUTURE SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE STREAMS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  

```
* Replace `<database-name>` with the Snowflake database name.

### (Optional) To preview and query existing assets[â](#optional-to-preview-and-query-existing-assets "Direct link to (Optional) To preview and query existing assets")

To query and preview data within assets that already exist in Snowflake, add these permissions:

```
GRANT USAGE ON DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT USAGE ON ALL SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL EXTERNAL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL MATERIALIZED VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL STREAMS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT MONITOR ON PIPE "<pipe-name>" TO ROLE atlan_user_role;  

```
Replace `<database-name>` with the database you want to be able to preview and query in Atlan. (Repeat the statements for every database you wish to preview and query in Atlan.)

### (Optional) To preview and query future assets[â](#optional-to-preview-and-query-future-assets "Direct link to (Optional) To preview and query future assets")

To query and preview data within assets that may be created in the future in Snowflake, add these permissions. Again, if you want to also be able to preview and query the data for future assets, you can add the preview and query future assets permissions instead.

```
GRANT USAGE ON FUTURE SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE EXTERNAL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE MATERIALIZED VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE STREAMS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT MONITOR ON FUTURE PIPES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  

```
Replace `<database-name>` with the database you want to be able to preview and query in Atlan. (Repeat the statements for every database you want to preview and query in Atlan.)

dangerVerify that all the assets you'd like to crawl are present in these grants by [checking the grants](/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-connectivity) on the user role defined for the crawler.

Grant permissions for information schema method[â](#grant-permissions-for-information-schema-method "Direct link to Grant permissions for information schema method")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

This method uses views in the `INFORMATION_SCHEMA` schema in Snowflake databases to fetch metadata. You still need to grant specific permissions to enable Atlan to crawl metadata, preview data, and query data with this method.

### To crawl existing assets[â](#to-crawl-existing-assets "Direct link to To crawl existing assets")

Grant these permissions to crawl assets that already exist in Snowflake. If you also want to be able to preview and query the data, you can use the preview and query existing assets permissions instead.

* Grant permissions to crawl existing assets:

```
GRANT USAGE ON DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT USAGE ON ALL SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON ALL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON ALL EXTERNAL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON ALL VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON ALL MATERIALIZED VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL STREAMS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT MONITOR ON PIPE "<pipe-name>" TO ROLE atlan_user_role;  

```
Replace `<database-name>` with the database you want to be available in Atlan. (Repeat the statements for every database you wish to integrate into Atlan.)

* Grant permissions to crawl functions:

```
GRANT USAGE ON ALL FUNCTIONS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  

```
Replace `<database-name>` with the database you want to be available in Atlan. (Repeat the statements for every database you wish to integrate into Atlan.)

* For secure user\-defined functions (UDFs), grant **OWNERSHIP** permissions to retrieve metadata:

```
GRANT OWNERSHIP ON FUNCTION <schema_name>.<udf_name> TO ROLE <role_name>;  

```
Replace the placeholders with the appropriate values:

* `<schema_name>`: The name of the schema that contains the user\-defined function (UDF).
* `<udf_name>`: The name of the secure UDF that requires ownership permissions.
* `<role_name>`: The role that gets assigned ownership of the secure UDF.

### To crawl future assets[â](#to-crawl-future-assets "Direct link to To crawl future assets")

To crawl assets that may be created in the future in Snowflake, add these permissions. Again, if you want to also be able to preview and query the data for future assets, you can add the preview and query future assets permissions instead.

* To grant permissions at a database level:

```
GRANT USAGE ON FUTURE SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE EXTERNAL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE MATERIALIZED VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE STREAMS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT MONITOR ON FUTURE PIPES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT USAGE ON FUTURE FUNCTIONS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  

```
* Replace `<database-name>` with the database you want to crawl in Atlan. (Repeat the statements for every database you want to integrate into Atlan.)

dangerFor any future grants defined at a schema level to a different role, the schema\-level grants take precedence over the database\-level grants and any future grants defined at a database level to the Atlan role get ignored. To learn more, refer to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege#future-grants-on-database-or-schema-objects).

* To grant permissions at a schema level:

```
GRANT REFERENCES ON FUTURE TABLES IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE EXTERNAL TABLES IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE VIEWS IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON FUTURE MATERIALIZED VIEWS IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE STREAMS IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT MONITOR ON FUTURE PIPES IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  

```
* Replace `<database-name>` with the database and `<schema-name>` with the schema you want to crawl in Atlan. (Repeat the statements for every database and schema you want to integrate into Atlan.)

### To mine query history for lineage[â](#to-mine-query-history-for-lineage "Direct link to To mine query history for lineage")

To also mine Snowflake's query history (for lineage), add these permissions. You can use either option:

* To mine query history direct from Snowflake's internal tables:

```
USE ROLE ACCOUNTADMIN;  
GRANT IMPORTED PRIVILEGES ON DATABASE snowflake TO ROLE atlan_user_role;  

```
* To mine query history from a cloned or copied set of tables, where you can also remove any sensitive data:

```
GRANT USAGE ON DATABASE "<cloned-database>" TO ROLE atlan_user_role;  
GRANT USAGE ON SCHEMA "<cloned-database>"."<cloned-account-usage-schema>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL TABLES IN SCHEMA "<cloned-database>"."<cloned-account-usage-schema>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL VIEWS IN SCHEMA "<cloned-database>"."<cloned-account-usage-schema>" TO ROLE atlan_user_role;  

```
* Replace `<cloned-database>` with the name of the cloned database, and `<cloned-account-usage-schema>` with the name of the cloned schema containing account usage details.
* When using a cloned or copied version, verify that the table or view definition remains unchanged as in your `SNOWFLAKE` database. If the format is different. For example, a column is missing and it no longer qualifies as a clone.

### (Optional) To preview and query existing assets[â](#optional-to-preview-and-query-existing-assets-1 "Direct link to (Optional) To preview and query existing assets")

To query and preview data within assets that already exist in Snowflake, add these permissions:

```
GRANT USAGE ON DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT USAGE ON ALL SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL EXTERNAL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL MATERIALIZED VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON ALL STREAMS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT MONITOR ON PIPE "<pipe-name>" TO ROLE atlan_user_role;  

```
Replace `<database-name>` with the database you want to be able to preview and query in Atlan. (Repeat the statements for every database you wish to preview and query in Atlan.)

### (Optional) To preview and query future assets[â](#optional-to-preview-and-query-future-assets-1 "Direct link to (Optional) To preview and query future assets")

To query and preview data within assets that may be created in the future in Snowflake, add these permissions. Again, if you want to also be able to preview and query the data for future assets, you can add the preview and query future assets permissions instead.

```
GRANT USAGE ON FUTURE SCHEMAS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE EXTERNAL TABLES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE MATERIALIZED VIEWS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE STREAMS IN DATABASE "<database-name>" TO ROLE atlan_user_role;  
GRANT MONITOR ON FUTURE PIPES IN DATABASE "<database-name>" TO ROLE atlan_user_role;  

```
Replace `<database-name>` with the database you want to be able to preview and query in Atlan. (Repeat the statements for every database you want to preview and query in Atlan.)

dangerFor any future grants defined at a schema level to a different role, the schema\-level grants take precedence over the database\-level grants and any future grants defined at a database level to the Atlan role get ignored. To learn more, refer to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege#future-grants-on-database-or-schema-objects).

* To grant permissions at a schema level:

```
GRANT SELECT ON FUTURE TABLES IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE EXTERNAL TABLES IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE VIEWS IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE MATERIALIZED VIEWS IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT SELECT ON FUTURE STREAMS IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  
GRANT MONITOR ON FUTURE PIPES IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  

```
* Replace `<database-name>` with the database and `<schema-name>` with the schema you want to be able to preview and query in Atlan. (Repeat the statements for every database and schema you want to preview and query in Atlan.)

dangerVerify that all the assets you'd like to crawl are present in these grants by [checking the grants](/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-connectivity) on the user role defined for the crawler.

### (Optional) To import Snowflake tags[â](#optional-to-import-snowflake-tags "Direct link to (Optional) To import Snowflake tags")

Snowflake [stores all tag objects](https://docs.snowflake.com/en/user-guide/object-tagging#discover-tags) in the `ACCOUNT_USAGE` schema. Note that object tagging in Snowflake currently requires [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions#feature-edition-matrix).

To [import tags from Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags), grant these permissions:

* To use the default `SNOWFLAKE` database and `ACCOUNT_USAGE` schema and also mine Snowflake's query history (for lineage), grant these permissions:

```
USE ROLE ACCOUNTADMIN;  
GRANT IMPORTED PRIVILEGES ON DATABASE SNOWFLAKE TO ROLE atlan_user_role;  

```
* The `ACCOUNTADMIN` role is required to grant privileges on the `SNOWFLAKE` database due to the following reasons:

    + By default, only the `ACCOUNTADMIN` role can access the `SNOWFLAKE` database.
    + To enable other roles to access the database and schemas and query the views, a user with the `ACCOUNTADMIN` role needs to grant `IMPORTED PRIVILEGES` on the `SNOWFLAKE` database to the desired roles.
* To use a copied or cloned version of this default schema, where you can also remove any sensitive data for security purposes, grant these permissions:

```
GRANT USAGE ON DATABASE "<copied-database>" TO ROLE atlan_user_role;  
GRANT USAGE ON SCHEMA "<copied-schema>" IN DATABASE "<copied-database>" TO ROLE atlan_user_role;  
GRANT REFERENCES ON ALL VIEWS IN DATABASE "<copied-database>" TO ROLE atlan_user_role;  

```
* Replace `<copied-database>` with the copied Snowflake database name.
* Replace `<copied-schema>` with the copied Snowflake `ACCOUNT_USAGE` schema name.
* The grants for the copied version can't be used on the original `SNOWFLAKE` database. This is because Snowflake produces an error that granular grants can't be given to imported databases.

### (Optional) To push updated tags to Snowflake[â](#optional-to-push-updated-tags-to-snowflake "Direct link to (Optional) To push updated tags to Snowflake")

To [push tags updated for assets in Atlan to Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags), grant these permissions:

```
GRANT APPLY TAG ON ACCOUNT TO ROLE <role-name>;  

```
You can learn more about tag privileges from [Snowflake documentation](https://docs.snowflake.com/en/user-guide/object-tagging#managing-tags).

### (Optional) To crawl dynamic tables[â](#optional-to-crawl-dynamic-tables "Direct link to (Optional) To crawl dynamic tables")

Atlan currently supports fetching metadata for dynamic tables using the `MONITOR` privilege. Refer to [Snowflake documentation](https://docs.snowflake.com/en/user-guide/dynamic-tables-privileges#privileges-to-view-a-dynamic-table-s-metadata) to learn more.

To crawl existing dynamic tables from Snowflake:

* Grant permissions at a database level:

```
GRANT MONITOR ON ALL DYNAMIC TABLES IN DATABASE "<DATABASE_NAME>" TO ROLE atlan_user_role;  

```
* Grant permissions at a schema level:

```
GRANT MONITOR ON ALL DYNAMIC TABLES IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  

```
To crawl future dynamic tables from Snowflake:

* Grant permissions at a database level:

```
GRANT MONITOR ON FUTURE DYNAMIC TABLES IN DATABASE "<DATABASE_NAME>" TO ROLE atlan_user_role;  

```
* Grant permissions at a schema level:

```
GRANT MONITOR ON FUTURE DYNAMIC TABLES IN SCHEMA "<database-name>.<schema-name>" TO ROLE atlan_user_role;  

```
Replace `<database-name>` with the database and `<schema-name>` with the schema you want to crawl in Atlan. (Repeat the statements for every database and schema you want to integrate into Atlan.)

### (Optional) To crawl Iceberg tables[â](#optional-to-crawl-iceberg-tables "Direct link to (Optional) To crawl Iceberg tables")

Atlan currently supports fetching metadata for [Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg) only for the information schema extraction method.

To crawl Iceberg tables from Snowflake, grant the following permissions:

* To crawl existing Iceberg tables in Snowflake:

```
GRANT REFERENCES ON ALL ICEBERG TABLES IN DATABASE <database-name> TO ROLE atlan_user_role;  

```
* To crawl future Iceberg tables in Snowflake:

```
GRANT REFERENCES ON FUTURE ICEBERG TABLES IN DATABASE <database-name> TO ROLE atlan_user_role;  

```
* To crawl Iceberg catalog metadata for Iceberg tables in Snowflake:

```
GRANT USAGE ON INTEGRATION <integration-name> TO ROLE atlan_user_role;  

```
dangerYou must first grant permissions to crawl existing Iceberg tables for this permission to work on catalogs. You must also grant permissions to all the catalogs you want to crawl in Atlan individually.

### (Optional) To crawl Snowflake stages[â](#optional-to-crawl-snowflake-stages "Direct link to (Optional) To crawl Snowflake stages")

Atlan supports crawling metadata for Snowflake stages using the USAGE and READ privileges. For more information, see the Snowflake documentation for INFORMATION\_SCHEMA.STAGES.

To crawl stages from Snowflake:

* Grant `USAGE` and `READ` privileges on all existing stages at the database level:

```
GRANT USAGE ON ALL STAGES IN DATABASE <database_name> TO ROLE atlan_user_role;  
GRANT READ ON ALL STAGES IN DATABASE <database_name> TO ROLE atlan_user_role;  

```
* Replace `<database_name>` with the name of your Snowflake database
* Replace `<atlan_user_role>` with the role you've granted Atlan to use for crawling.
* Grant `USAGE` and `READ` privileges on all future stages at the database level:

```
GRANT USAGE ON FUTURE STAGES IN DATABASE <database_name> TO ROLE atlan_user_role;  
GRANT READ ON FUTURE STAGES IN DATABASE <database_name> TO ROLE atlan_user_role;  

```
* Replace `<database_name>` with the name of your Snowflake database
* Replace `<atlan_user_role>` with the role you've granted Atlan to use for crawling.

Allowlist the Atlan IP[â](#allowlist-the-atlan-ip "Direct link to Allowlist the Atlan IP")
--------------------------------------------------------------------------------------------

If you are using the IP allowlist in your Snowflake instance, you must add the Atlan IP to the allowlist. Please raise a support ticket from within Atlan, or [submit a request](/support/submit-request).

(If you aren't using the IP allowlist in your Snowflake instance, you can skip this step.)

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSnowflake](/apps/connectors/data-warehouses/snowflake)[NextSet up an AWS private network link to Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake)

Copyright Â© 2025 Atlan Pte. Ltd.

