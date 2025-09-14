# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake
meta-description: Atlan support will finish the configuration on the Atlan side using these values. Support will then provide the Snowflake PrivateLink endpoint back to you.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan support will finish the configuration on the Atlan side using these values. Support will then provide the Snowflake PrivateLink endpoint back to you.
meta-og-locale: en
meta-og-title: Set up an AWS private network link to Snowflake | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up an AWS private network link to Snowflake | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up an AWS private network link to Snowflake
===============================================

[AWS PrivateLink](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-privatelink.html) creates a secure, private connection between services running in AWS. This document describes the steps to set this up between Snowflake and Atlan, when you use our Single Tenant SaaS deployment.

Who can do this?You will need Snowflake Support, and probably your Snowflake administrator involved \- you may not have access or the tools to run these tasks.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

* Snowflake must be setup with Business Critical Edition (or higher).
* Open a ticket with Snowflake Support to enable PrivateLink for your Snowflake account.
* Snowflake support will take 1\-2 days to review and enable PrivateLink.
* If you are using IP allowlist in your Snowflake instance, you must add the Atlan IP to the allowlist. Please [raise a support request](/support/submit-request) to do so.

(For all details, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-security-privatelink.html).)

Fetch PrivateLink information[â](#fetch-privatelink-information "Direct link to Fetch PrivateLink information")
-----------------------------------------------------------------------------------------------------------------

Log in to snowCLI using the `ACCOUNTADMIN` account, and run the following commands:

```
use role accountadmin;  
select system$get_privatelink_config();  

```
This will produce output like the following (formatted here for readability):

```
{  
  "privatelink-account-name":"abc123.ap-south-1.privatelink",  
  "privatelink-vpce-id":"com.amazonaws.vpce.ap-south-1.vpce-svc-257a4d536bd8e3594",  
  "privatelink-account-url":"abc123.ap-south-1.privatelink.snowflakecomputing.com",  
  "regionless-privatelink-account-url":"xyz789-abc123.privatelink.snowflakecomputing.com",  
  "privatelink_ocsp-url":"ocsp.abc123.ap-south-1.privatelink.snowflakecomputing.com",  
  "privatelink-connection-urls":"[]"  
}  

```

Share details with Atlan support team[â](#share-details-with-atlan-support-team "Direct link to Share details with Atlan support team")
-----------------------------------------------------------------------------------------------------------------------------------------

Share the following values with the [Atlan support](/support/submit-request) team:

* `privatelink-account-name`
* `privatelink-vpce-id`
* `privatelink-account-url`
* `privatelink_ocsp-url`

Atlan support will finish the configuration on the Atlan side using these values. Support will then provide the Snowflake PrivateLink endpoint back to you.

When you use this endpoint in the configuration for [crawling](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake) and [mining](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake), Atlan will connect to Snowflake over the PrivateLink.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousSet up Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake)[NextSet up an Azure private network link to Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake)

Copyright Â© 2025 Atlan Pte. Ltd.

