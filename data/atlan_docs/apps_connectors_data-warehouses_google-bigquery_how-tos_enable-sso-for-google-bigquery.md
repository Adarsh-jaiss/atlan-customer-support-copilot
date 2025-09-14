# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery
meta-description: Credentials are used to obtain an access token from Google's authorization servers for authentication in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Credentials are used to obtain an access token from Google's authorization servers for authentication in Atlan.
meta-og-locale: en
meta-og-title: Enable  SSO for Google BigQuery | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Enable  SSO for Google BigQuery | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Enable SSO for Google BigQuery
==============================

Atlan supports SSO authentication for [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery) connections. Once you've configured SSO authentication for Google BigQuery, your users can:

* [Query data with SSO credentials](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data)
* [View sample data with SSO credentials](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data)

**Did you know?**When using OAuth 2\.0 for authorization, Google displays a consent screen to the user that includes a summary of your project, policies, and scopes. If you have not configured the consent screen, complete the steps in [configure OAuth consent screen](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery). Otherwise, skip to [create access credentials](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery#create-access-credentials-in-google-bigquery).

(Optional) Configure OAuth consent screen in Google BigQuery[â](#optional-configure-oauth-consent-screen-in-google-bigquery "Direct link to (Optional) Configure OAuth consent screen in Google BigQuery")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your Google BigQuery administrator to complete these steps \- you may not have access yourself.

To [configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent), from Google BigQuery:

1. Open the [Google Cloud console](https://console.cloud.google.com/apis/credentials/consent).
2. In the left menu of the *Google Cloud* console, under *APIs \& Services*, click **OAuth consent screen**.
3. On the *OAuth consent screen* page, under *User Type*, select a preferred user type and then click **Create**.
4. In the corresponding *Edit app registration* page, enter the following details:
    1. For *App name*, enter a meaningful name \- for example, `Atlan_SSO`.
    2. For *User support email*, enter a support email for your users to troubleshoot.
    3. For *Developer contact information*, enter an email address where Google can notify you about any changes to your project.
    4. Click **Save and continue** to proceed to the next step.
5. On the *Scopes* page, complete the following steps:
    1. Click **Add or remove scopes** to add a new scope.
    2. In the *Update selected scopes* dialog, click **BigQuery API** to add the `/auth/bigquery` scope and then click **Update**.
    3. Click **Save and continue** to finish setup.
6. Once the OAuth consent screen configuration is successful, click **Go back to dashboard**.

[https://demo.arcade.software/5rKiCAH9raFhaccbX1wQ?embed](https://demo.arcade.software/5rKiCAH9raFhaccbX1wQ?embed)

Create access credentials in Google BigQuery[â](#create-access-credentials-in-google-bigquery "Direct link to Create access credentials in Google BigQuery")
--------------------------------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your Google BigQuery administrator to complete these steps \- you may not have access yourself.

Credentials are used to obtain an access token from Google's authorization servers for authentication in Atlan.

To [create access credentials](https://developers.google.com/workspace/guides/create-credentials), from Google BigQuery:

1. Open the [Google Cloud console](https://console.cloud.google.com/apis/credentials).
2. In the left menu of the *Google Cloud* console, under *APIs \& Services*, click **Credentials**.
3. From the upper right of the *Credentials* page, click **Create credentials**, and from the dropdown, click **OAuth client ID**.Â
4. In the *OAuth client ID* screen, enter the following details:
    1. For *Application type*, click **Web application**.
    2. For *Name*, enter a meaningful name \- for example, `Atlan_client`.
    3. Under *Authorized JavaScript origins*, click **Add URI**Â and enter your Atlan instanceÂ \- for example, `https://<company-name>.atlan.com`.
    4. Under *Authorized redirect URIs*, click **Add URI**Â and enter your Atlan endpoint URI \- for example, `https://<company-name>.atlan.com/api/service/oauth`.
    5. Click **Create** to finish setup.
5. From the corresponding *OAuth client created* dialog, copy the *Client ID* and *Client secret* and store it in a secure location.

Configure SSO authentication in Atlan[â](#configure-sso-authentication-in-atlan "Direct link to Configure SSO authentication in Atlan")
-----------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need to be a [connection admin](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#connection-admins) in Atlan to complete these steps. You will also need inputs and approval from your Google BigQuery administrator.

Once you have [configured access credentials in Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery#create-access-credentials-in-google-bigquery), you can enable SSO authentication for your users to [query data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data) and [view sample data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data)Â in Atlan.

To configure SSO on a Google BigQuery connection, from Atlan:

1. From the left menu of any screen, click **Assets**.
2. From the *Assets* page, click the **Connector** filter, and from the dropdown, select **BigQuery**.
3. From the pills below the search bar at the top of the screen, click **Connection**.
4. From the list of results, select a Google BigQuery connection to enable SSO authentication.
5. From the sidebar on the right, next to *Connection settings*, click **Edit**.
6. In the *Connection settings* dialog:
    * Under *Allow query*, for *Authentication type*, clickÂ**SSO authentication** to enforce SSO credentials for [querying data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data):
        + For *SSO authentication*, enter the following details:
            1. For *Client ID*, enter the [client ID](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery#create-access-credentials-in-google-bigquery) you copied from Google BigQuery.
            2. For *Client secret*, enter the [client secret](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery#create-access-credentials-in-google-bigquery)Â you copied from Google BigQuery.
    * UnderÂ*Display sample data*, for *Source preview*, clickÂ**SSO authentication** to enforce SSO credentials for [viewing sample data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data):
        + If SSO authentication is enabled for querying data, the same connection details will be reused for viewing sample data.
        + If a different authentication method is enabled for querying data, enter the [client ID](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery#create-access-credentials-in-google-bigquery) andÂ[client secret](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery#create-access-credentials-in-google-bigquery) you copied from Google BigQuery.
7. (Optional) Toggle on **Enable data policies created at source to apply for querying in Atlan** to apply any data policies and user permissions at source to querying data and viewing sample data in Atlan. If toggled on, any existing [data policies](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) on the connection in Atlan will be deactivated and creation of new data policies will be disabled.
8. At the bottom right of the *Connection settings* dialog, click **Update**.

Your users will now be able to [run queries](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data) and [view sample data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data) using their SSO credentials! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [integration](/tags/integration)
* [authentication](/tags/authentication)

[PreviousSet up Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery)[NextCrawl Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery)

Copyright Â© 2025 Atlan Pte. Ltd.

