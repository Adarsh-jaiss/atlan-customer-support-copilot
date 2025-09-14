# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/how-tos/enable-data-quality

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/how-tos/enable-data-quality
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/how-tos/enable-data-quality
meta-description: Enable and configure data quality for your Databricks connection in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Enable and configure data quality for your Databricks connection in Atlan.
meta-og-locale: en
meta-og-title: Enable data quality on connection | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/how-tos/enable-data-quality
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Enable data quality on connection | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Enable data quality on connection [Private Preview](/get-started/references/product-release-stages#private-preview)
===================================================================================================================

Enable data quality on your Databricks connection in Atlan to start monitoring data quality. This guide helps you configure the connection with the necessary credentials and permissions.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, complete the following steps:

* [Set up Databricks for data quality](/product/capabilities/governance/data-quality/databricks/how-tos/set-up-databricks) completed
* Have the service principal credentials created during Databricks setup
* Identify the Databricks connection where you want to enable data quality

Enable data quality[â](#enable-data-quality "Direct link to Enable data quality")
-----------------------------------------------------------------------------------

Follow these steps to enable data quality on your Databricks connection.

1. Turn on the data quality feature:

    * Navigate to **Settings** in Atlan
        * Find the **Labs** section
        * Turn on the **Data Quality** toggle
2. Select your connection and configure credentials:

    IMPORTANT Currently, you can only enable data quality on one connection in Atlan. If you wish to enable it on another connection, [raise a support request](/support/submit-request).

    * Data Quality Page
        * Connection Settings

    1. Navigate to **Governance** \> **Data Quality**
        2. Select your Databricks connection from the list
        3. Click **Enable data quality** for your selected connection
        4. Enter the following credential details:
            * **Client ID**: The service principal client ID created in Databricks setup
            * **Client Secret**: The service principal client secret
            * **Tenant ID**: The tenant ID (Azure only)
            * **Workspace URL**: Your Databricks workspace URL
            * **SQL Warehouse**: Your preferred SQL warehouse for DQ operations
        5. Click **Run permissions check** to verify:
            * Credentials have necessary permissions in Databricks
            * Databricks setup completed correctly
        6. Click **Update** to save the credentials

    1. Navigate to **Governance** \> **Connections**
        2. Select your Databricks connection
        3. Open **Connection settings** from the sidebar
        4. Enter the following credential details:
            * **Client ID**: The service principal client ID created in Databricks setup
            * **Client Secret**: The service principal client secret
            * **Tenant ID**: The tenant ID (Azure only)
            * **Workspace URL**: Your Databricks workspace URL
            * **SQL Warehouse**: Your preferred SQL warehouse for DQ operations
        5. Click **Run permissions check** to verify:
            * Credentials have necessary permissions in Databricks
            * Databricks setup completed correctly
        6. Click **Update** to save the credentials

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

After completing these steps:

* Atlan takes approximately 10 minutes to complete the setup in the background
* Once finished, you'll see data quality options available on your Databricks assets
* You can start creating data quality rules on tables and views

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you have questions or need assistance with enabling data quality on your connection, reach out to Atlan Support by [submitting a support request](/support/submit-request).

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Data quality permissions](/product/capabilities/governance/data-quality/snowflake/references/data-quality-permissions) \- Learn about the data quality permission scopes and configuration
* [Configure alerts for data quality rules](/product/capabilities/governance/data-quality/how-tos/configure-alerts) \- Set up real\-time notifications for rule failures
**Tags:*** [databricks](/tags/databricks)
* [data\-quality](/tags/data-quality)
* [setup](/tags/setup)
* [atlan](/tags/atlan)

[PreviousSet up Databricks](/product/capabilities/governance/data-quality/databricks/how-tos/set-up-databricks)[NextSetup and configuration](/product/capabilities/governance/data-quality/databricks/faq/setup-and-configuration)

Copyright Â© 2025 Atlan Pte. Ltd.

