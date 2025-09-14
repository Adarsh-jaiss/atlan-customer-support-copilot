# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth
meta-description: Atlan supports [Snowflake OAuth-based authentication](https://docs.snowflake.com/user-guide/oauth-snowflake-overview) for [Snowflake](/apps/connectors/data-ware.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports [Snowflake OAuth-based authentication](https://docs.snowflake.com/user-guide/oauth-snowflake-overview) for [Snowflake](/apps/connectors/data-ware.
meta-og-locale: en
meta-og-title: Enable  Snowflake OAuth | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Enable  Snowflake OAuth | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Enable Snowflake OAuth
======================

Atlan supports [Snowflake OAuth\-based authentication](https://docs.snowflake.com/user-guide/oauth-snowflake-overview)Â for [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) connections. Once the integration has been completed, Atlan will generate a trusted secure token with Snowflake. This will allow Atlan to authenticate users with Snowflake on their behalf to:

* [Query data with Snowflake OAuth credentials](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data)
* [View sample data with Snowflake OAuth credentials](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data)

Configure Snowflake OAuth in Atlan[â](#configure-snowflake-oauth-in-atlan "Direct link to Configure Snowflake OAuth in Atlan")
--------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need to be a [connection admin](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#connection-admins) in Atlan to complete these steps. You will also needÂ inputs and approval from your [Snowflake account administrator](https://docs.snowflake.com/en/user-guide/security-access-control-overview#roles).

To configure Snowflake OAuth on a Snowflake connection, from Atlan:

1. From the left menu of any screen, click **Assets**.
2. From the *Assets* page, click the **Connector** filter, and from the dropdown, click **Snowflake**.
3. From the pills below the search bar at the top of the screen, click **Connection**.
4. From the list of results, select a Snowflake connection to enable Snowflake OAuth\-based authentication.
5. From the sidebar on the right, next to *Connection settings*, click **Edit**.
6. In the *Connection settings* dialog:
    * Under *Allow query*, for *Authentication type*, click **Snowflake OAuth** to enforce Snowflake OAuth credentials for [querying data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data):
        1. For *Authentication Required*, click **Copy Code** to copy a security authorization code to [execute it in Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth).
    * UnderÂ*Display sample data*, for *Source preview*, click **Snowflake OAuth** to enforce Snowflake OAuth credentials for [viewing sample data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data):
        + If Snowflake OAuth\-based authentication is enabled for querying data, the same connection details will be reused for viewing sample data.
        + If a different authentication method is enabled for querying data, click **Copy Code** to copy a security authorization code to [execute it in Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth).
7. (Optional) Toggle on **Enable data policies created at source to apply for querying in Atlan** to apply any data policies and user permissions at source to querying data and viewing sample data in Atlan. If toggled on, any existing [data policies](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) on the connection in Atlan will be deactivated and creation of new data policies will be disabled.
8. At the bottom right of the *Connection settings* dialog, click **Update**.

**Did you know?**The refresh token does not expire by default.

[https://demo.arcade.software/DvDa7HP6ydOzTyX3Y1nk?embed](https://demo.arcade.software/DvDa7HP6ydOzTyX3Y1nk?embed)

Create a security integration in Snowflake[â](#create-a-security-integration-in-snowflake "Direct link to Create a security integration in Snowflake")
--------------------------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your [Snowflake account administrator](https://docs.snowflake.com/en/user-guide/oauth-ext-custom#step-2-create-an-external-oauth-security-integration-in-snowflake) to run these commands. You will also need to have an [existing Snowflake connection](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) in Atlan.

To create a security integration in Snowflake:

1. Log in to your Snowflake instance.
2. From the top right of your Snowflake instance, click the **\+** button, and then from the dropdown, click **SQL Worksheet** to open a new worksheet.
3. In the query editor of your Snowflake SQL worksheet, paste the [security authorization code you copied in Atlan](/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth#configure-snowflake-oauth-in-atlan). See a representative example below:

    ```
    CREATE SECURITY INTEGRATION <name>  
        TYPE = EXTERNAL_OAUTH  
        ENABLED = TRUE  
        EXTERNAL_OAUTH_TYPE = OKTA  
        EXTERNAL_OAUTH_ISSUER = 'https://<COMPANY>.okta.com/oauth2/<ID>'  
        EXTERNAL_OAUTH_JWS_KEYS_URL = 'https://<COMPANY>.okta.com/oauth2/<ID>/v1/keys'  
        EXTERNAL_OAUTH_AUDIENCE_LIST = ('<snowflake_account_url')  
        EXTERNAL_OAUTH_TOKEN_USER_MAPPING_CLAIM = 'sub'  
        EXTERNAL_OAUTH_ANY_ROLE_MODE = 'ENABLE';  
        EXTERNAL_OAUTH_SNOWFLAKE_USER_MAPPING_ATTRIBUTE = 'EMAIL_ADDRESS'

    ```
4. Run the security integration in Snowflake.
5. (Optional) To allow the `ACCOUNTADMIN`, `ORGADMIN`, or `SECURITYADMIN` role to query with Snowflake OAuth\-based authentication, add and run the following command to set account\-level permissions:

    ```
    ALTER ACCOUNT SET EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST = FALSE;

    ```

Your users will now be able to [run queries](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data) and [view sample data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data) using their Snowflake OAuth credentials! ð

**Did you know?**You can refer to [troubleshooting connector\-specific SSO authentication](/product/integrations/identity-management/sso/troubleshooting/troubleshooting-connector-specific-sso-authentication) to troubleshoot any errors.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [integration](/tags/integration)
* [authentication](/tags/authentication)

[PreviousSet up an Azure private network link to Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake)[NextCrawl Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)

Copyright Â© 2025 Atlan Pte. Ltd.

