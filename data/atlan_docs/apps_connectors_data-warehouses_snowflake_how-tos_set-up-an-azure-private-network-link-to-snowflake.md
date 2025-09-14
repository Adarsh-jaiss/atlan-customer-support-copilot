# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake
meta-description: Atlan support will finish the configuration on the Atlan side using these values. Support will then provide you with the Snowflake private endpoint resource ID and Azure token for you to approve the request.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan support will finish the configuration on the Atlan side using these values. Support will then provide you with the Snowflake private endpoint resource ID and Azure token for you to approve the request.
meta-og-locale: en
meta-og-title: Set up an Azure private network link to Snowflake | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up an Azure private network link to Snowflake | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up an Azure private network link to Snowflake
=================================================

[Azure Private Link](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview) creates a secure, private connection between services running in Azure. This document describes the steps to set this up between Snowflake and Atlan.

Who can do this?You will need Snowflake Support, and probably your Snowflake administrator involved \- you may not have access or the tools to run these tasks.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

* Snowflake must be set up with Business Critical Edition (or higher).
* Open a ticket with Snowflake Support to enable Azure Private Link for your Snowflake account.
* Snowflake support will take 1\-2 days to review and enable Azure Private Link.
* If you are using IP allowlist in your Snowflake instance, you must add the Atlan IP to the allowlist. Please [raise a support request](/support/submit-request) to do so.

(For all details, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/privatelink-azure).)

Fetch Private Link information[â](#fetch-private-link-information "Direct link to Fetch Private Link information")
--------------------------------------------------------------------------------------------------------------------

Log in to snowCLI using the `ACCOUNTADMIN` account, and run the following commands:

```
use role accountadmin;  
select system$get_privatelink_config();  

```
This will produce an output like the following (formatted here for readability):

```
{  
   "regionless-snowsight-privatelink-url": "abc123.privatelink.snowflakecomputing.com",  
   "privatelink-account-name": "abc123.west-europe.privatelink",  
   "snowsight-privatelink-url": "abc123.west-europe.privatelink.snowflakecomputing.com",  
   "privatelink-account-url": "abc123.west-europe.privatelink.snowflakecomputing.com",  
   "privatelink-connection-ocsp-urls": "[]",  
   "privatelink-pls-id": "abc123.westeurope.azure.privatelinkservice",  
   "regionless-privatelink-account-url": "abc123.privatelink.snowflakecomputing.com",  
   "privatelink_ocsp-url": "ocsp.abc123.west-europe.privatelink.snowflakecomputing.com",  
   "privatelink-connection-urls": "[]"  
}  

```

Share details with Atlan support team[â](#share-details-with-atlan-support-team "Direct link to Share details with Atlan support team")
-----------------------------------------------------------------------------------------------------------------------------------------

Share the following values with the [Atlan support team](/support/submit-request):

* `regionless-snowsight-privatelink-url`
* `privatelink-account-name`
* `snowsight-privatelink-url`
* `privatelink-account-url`
* `privatelink-connection-ocsp-urls`
* `privatelink-pls-id`
* `regionless-privatelink-account-url`
* `privatelink_ocsp-url`
* `privatelink-connection-urls`

Atlan support will finish the configuration on the Atlan side using these values. Support will then provide you with the Snowflake private endpoint resource ID and Azure token for you to approve the request.

Approve the endpoint connection request[â](#approve-the-endpoint-connection-request "Direct link to Approve the endpoint connection request")
-----------------------------------------------------------------------------------------------------------------------------------------------

Log in to snowCLI using the `ACCOUNTADMIN` account, and run the following commands:

```
use role accountadmin;  
SELECT SYSTEM$AUTHORIZE_PRIVATELINK (  
  '/subscriptions/26d.../resourcegroups/sf-1/providers/microsoft.network/privateendpoints/test-self-service',  
  'eyJ...'  
  );  

```
Snowflake will return an `AccountÂ isÂ authorizedÂ forÂ PrivateLink.` message to confirm successful authorization. The status of the private endpoint in Atlan will then change to `Approved`.

When you use this endpoint in the configuration for [crawling](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake) and [mining](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake) Snowflake, Atlan will connect to Snowflake over the Private Link.

(Optional) Configure private endpoint for internal stages[â](#optional-configure-private-endpoint-for-internal-stages "Direct link to (Optional) Configure private endpoint for internal stages")
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This is only required if you're using Snowflake internal stages. To enable Atlan to securely access your Snowflake internal stages, Atlan will require a private endpoint to your Azure storage account. Refer to [Snowflake documentation](https://docs.snowflake.com/en/user-guide/private-internal-stages-azure) to learn more.

To configure an Azure private endpoint to access Snowflake internal stages:

1. Open the Azure portal and navigate to your Azure Storage account.
2. On the *Storage accounts* page, select the storage account to connect. From the storage account menu, click **Overview**. In the *Resource JSON* form, for *Resource ID*, click the clipboard icon to copy the value and [contact Atlan support to share the value](/support/submit-request). (Atlan support will finish the configuration on the Atlan side using the *Resource ID* value and contact you to confirm endpoint creation.)
3. From the storage account menu, click **Security \+ networking** and then click **Networking**.
4. On the *Networking* page, change to the **Private endpoint connections** tab and then approve the endpoint connection request from Atlan.
**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousSet up an AWS private network link to Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake)[NextHow to enable Snowflake OAuth](/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth)

Copyright Â© 2025 Atlan Pte. Ltd.

