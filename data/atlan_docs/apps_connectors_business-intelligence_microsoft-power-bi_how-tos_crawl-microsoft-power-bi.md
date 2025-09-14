# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi
meta-description: Once you have configured the [Microsoft Power BI user permissions](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi), you can establish a connection between Atlan and Microsoft Power BI.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have configured the [Microsoft Power BI user permissions](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi), you can establish a connection between Atlan and Microsoft Power BI.
meta-og-locale: en
meta-og-title: Crawl Microsoft Power BI | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Microsoft Power BI | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Microsoft Power BI
========================

Once you have configured the [Microsoft Power BI user permissions](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi), you can establish a connection between Atlan and Microsoft Power BI.

To crawl metadata from Microsoft Power BI, review

[https://demo.arcade.software/K2hYR2LB5dBirS6eyT6e?embed](https://demo.arcade.software/K2hYR2LB5dBirS6eyT6e?embed)

the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Microsoft Power BI as your source:

1. In the top right of any screen, navigate toÂ**New** and then clickÂ**New Workflow**.
2. From the list of packages, selectÂ**Power BI Assets** and click onÂ**Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Microsoft Power BI credentials:

1. For *Authentication,* choose the method you want to use to access Microsoft Power BI:
    * For **Service Principal** authentication, enter the *Tenant Id*, *Client Id*, and *Client Secret* you configured when [setting up Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi). Use the **Enable Only Admin API Access** option to control how metadata is extracted. When enabled, the crawler uses only admin APIs. If disabled, both admin and non\-admin APIs are used.
    * For **Delegated User** authentication, enter the *Username*, *Password*, *Tenant Id*, *Client Id*, and *Client Secret* you configured when [setting up Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi).
2. At the bottom of the form, click the **Test Authentication** button to confirm connectivity to Microsoft Power BI using these details.
3. Once successful, at the bottom of the screen click the **Next** button.

Configure connection[â](#configure-connection "Direct link to Configure connection")
--------------------------------------------------------------------------------------

To complete the Microsoft Power BI connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you don't specify any user or group, nobody can manage the connection \- not even admins.
3. At the bottom of the screen, click the **Next** button to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Microsoft Power BI crawler, configure metadata extraction and advanced options. You can override the default settings for the following fields.

### Configure metadata[â](#configure-metadata "Direct link to Configure metadata")

* **Include Workspaces**: Select Microsoft Power BI workspaces to include. Defaults to all workspaces when left blank. Use **Advanced Search** to filter workspaces using the following options:

    + **Contains**: Matches workspaces that contain the given substring.
    + **Starts with**: Matches workspaces that begin with the specified text.
    + **Ends with**: Matches workspaces that end with the specified text.
    + **Regex pattern**: Matches workspaces based on a regular expression.
    *All selected filters apply using an `AND` condition.*
* **Exclude Workspaces**: Select workspaces to exclude. No workspaces are excluded by default. **Advanced Search** is also available for exclusion, with the same filtering options as mentioned previously.
* **Include Dashboard and Reports Regex**: Use a regular expression to include dashboards and reports based on naming patterns. Includes all by default.
* **Exclude Dashboard and Reports Regex**: Use a regular expression to exclude dashboards and reports based on naming patterns. Excludes none by default.
* **Attach Endorsements from Power BI**: Automatically certify assets endorsed in Power BI. To manually review before applying, change this setting to **Send a Request**. For more details, see [What does Atlan crawl from Microsoft Power BI?](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi)

### Configure advanced settings[â](#configure-advanced-settings "Direct link to Configure advanced settings")

* **Source Connections**: When your tenant has multiple connections available for the same source system that share the similar metadata, confirm the advanced options and choose the correct connections from the `Source Connections` list drop down to avoid creating duplicate lineage to such connections.
* **Enable ODBC DSN Connectivity Mapping**: Power BI provides multiple ways of connecting to a SQL source, including ODBC connectivity for building Reports and Dashboards. When datasets are populated using ODBC, provide a mapping of the DSN ( Data Source Name ) names to their appropriate database qualified names after enabling this toggle.

**Did you know?**If a workspace appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Microsoft Power BI crawler:

1. To check for any [permissions or other configuration issues](/apps/connectors/business-intelligence/microsoft-power-bi/references/preflight-checks-for-microsoft-power-bi) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you can see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi)[NextMine Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/mine-microsoft-power-bi)

Copyright Â© 2025 Atlan Pte. Ltd.

