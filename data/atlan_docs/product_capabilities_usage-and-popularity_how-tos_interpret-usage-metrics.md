# Source URL
https://docs.atlan.com/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics
link-alternate: https://docs.atlan.com/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics
meta-description: Atlan currently supports usage and popularity metrics for the following connectors:
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan currently supports usage and popularity metrics for the following connectors:
meta-og-locale: en
meta-og-title: Interpret usage metrics | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Interpret usage metrics | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Interpret usage metrics
=======================

Atlan currently supports usage and popularity metrics for the following connectors:

* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift) \- tables, views, and columns. Expensive queries and compute costs for Amazon Redshift assets are currently unavailable due to limitations at source.
* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks) \- tables, views, and columns. Expensive queries and compute costs for Databricks assets are currently unavailable due to limitations of the [Databricks APIs](https://docs.databricks.com/api/workspace/queryhistory/list).
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery) \- tables, views, and columns
* [Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/mine-microsoft-power-bi) \- reports and dashboards
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake) \- tables, views, and columns

Powered by Atlan's enhanced query\-mining capabilities, you can view popularity metrics for supported assets:

* The **popularity score** of an asset is computed using both the number of queries and the number of users who have queried that asset in the last 30 days. The popularity score of an asset helps determine its relative popularity. All assets with a popularity score are then slotted into one of four percentile groups \- *Least popular*, *Less popular*, *Popular*, and *Most popular*.
    + Popularity score is calculated using the following formula:
    
    
    ```
    number of distinct users * log (total number of read queries)  
    
    ```
    + Time period \= 30 days
* The **popularity indicator** is displayed for all supported assets that have been queried in the last 30 days. This indicator visualizes the relative popularity of an asset on a scale of 1 to 4 blue bars \- 1 being the lowest score and 4 being the highest.
* A **popularity popover** will appear when hovering over the popularity indicator. It displays additional information pertaining to an asset, such as a graph for trends in the data, last queried and by whom, and when the data was last updated.

View popularity metrics[â](#view-popularity-metrics "Direct link to View popularity metrics")
-----------------------------------------------------------------------------------------------

To view popularity metrics for your assets, complete these steps.

[https://demo.arcade.software/V5Peavgh09xOGjA1kB2y?embed](https://demo.arcade.software/V5Peavgh09xOGjA1kB2y?embed)

### Identify popular assets[â](#identify-popular-assets "Direct link to Identify popular assets")

Being able to identify your most relevant and trusted data assets can help you increase their adoption and drive usage within your organization.

To view popularity metrics for an asset:

1. From the left menu in Atlan, click **Assets**.
2. For *Connector* on the *Assets* page, select a supported connector \- for this example, we'll select *Snowflake*.
3. Next to the search bar on the *Assets* page, click the sort button.
4. From the *Popularity* sorting menu, click **Most popular** to view most used assets or **Least popular** to view least used assets.
5. Your assets will now have a popularity indicator. To view the popularity popover for an asset, click or hover over the **popularity** **indicator**.Â

You'll now be able to see all the relevant popularity metrics for your asset! ð

### View usage metrics in the asset sidebar[â](#view-usage-metrics-in-the-asset-sidebar "Direct link to View usage metrics in the asset sidebar")

The new *Usage* tab in the asset sidebar helps you view usage metadata for your assets.

For example, if you'd like to appoint a data steward for your data assets, you'll be able to determine the right candidate based on the top users for that asset. You'll also be able to review popular queries or users for a particular table while checking for data compliance.

To view usage details for an asset:

1. From the left menu in Atlan, click **Assets**.
2. For *Connector* on the *Assets* page, select a supported connector \- for this example, we'll select *Snowflake*.
3. Next to the search bar on the *Assets* page, click the sort button.
4. From the *Popularity* sorting menu, click **Most popular** to view most used assets or **Least popular** to view least used assets.
5. In the bottom right of any asset card, click or hover over the **popularity** **indicator** to open the popularity popover.Â
6. In the popularity popover, click **View usage details** to view the following:
    * For *Usage*, view top and recent users in the last 30 days.
    * For *Queries*, view top five queries by context \- *Popular*, *Slow*, and *Expensive*. Only read queries or `SELECT` statements are shown for these queries.
    * For *Compute*, view the total [compute cost](/product/capabilities/usage-and-popularity/troubleshooting/troubleshooting-usage-and-popularity-metrics) for an asset. The compute cost is split between read and write queries, allowing you to better understand the cost breakdown for individual assets:
        + Read queries \- `SELECT` statements.
        + Write queries \- all non\-`SELECT` statements, for example, `UPDATE`, `INSERT`, `CREATE`, and more.

The usage details for the asset will now appear in the asset sidebar! ð

### View and sort columns by popularity[â](#view-and-sort-columns-by-popularity "Direct link to View and sort columns by popularity")

For any Snowflake, Databricks, or Google BigQuery table or view sorted by popularity, you'll also be able to view and sort the columns by popularity in the asset profile.

To view column assets by popularity:

1. From the left menu in Atlan, click **Assets**.
2. For *Connector* on the *Assets* page, select a supported connector \- for this example, we'll select *Snowflake*.
3. Next to the search bar on the *Assets* page, click the sort button.
4. From the *Popularity* sorting menu, click **Most popular** to view most used assets or **Least popular** to view least used assets.
5. Click any asset to open to its asset profile.
6. In the *Column preview* tab of the asset profile, hover over the popularity indicator to view the popularity popover for your columns.
7. (Optional) In the search bar under *Column preview*, click the **sort icon** and then click **Most popular** or **Least popular** to sort columns by popularity.

You'll now be able to view the popularity score, number of queries and users, and timestamp for last queried for your columns! ð

View queries by context[â](#view-queries-by-context "Direct link to View queries by context")
-----------------------------------------------------------------------------------------------

Get the context you need before querying an asset to help you optimize your queries. Query popular, slow, or expensive queries from the *Usage* tab directly in Insights.

[https://demo.arcade.software/mogERWIMrfXKDVZQzccY?embed](https://demo.arcade.software/mogERWIMrfXKDVZQzccY?embed)

To view and work with queries by context:

1. From the left menu in Atlan, click **Assets**.
2. For *Connector* on the *Assets* page, select a supported connector \- for this example, we'll select *Snowflake*.
3. Next to the search bar on the *Assets* page, click the sort button.
4. From the *Popularity* sorting menu, click **Most popular** to view most used assets or **Least popular** to view least used assets.
5. In the bottom right of any asset card, click or hover over the **popularity** **indicator** to open the popularity popover.Â
6. In the popularity popover, click **View usage details**.
7. In the *Usage* tab in the asset sidebar, navigate to *Queries* and depending on the type of query you'd like to see:
    * Click **Popular**Â to see the top five most popular queries.Â
    * Click **Slow** to see queries sorted by average duration and last run.
    * Click **Expensive** to see the top five most expensive queries.Â
8. Once you've selected the relevant query type, hover over a query card to:
    * Click the **expand icon** to see the query details.
    * Click the **copy icon** to copy the query and use it as a template for writing your own queries.
    * Click the **code icon** to open the query directly in *Insights* and run it.

**Did you know?**If you have any questions about usage and popularity metrics, head over [here](/product/capabilities/usage-and-popularity/troubleshooting/troubleshooting-usage-and-popularity-metrics).

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [api](/tags/api)

[PreviousHow to find assets by usage](/product/capabilities/usage-and-popularity/how-tos/find-assets-by-usage)[NextTroubleshooting usage and popularity metrics](/product/capabilities/usage-and-popularity/troubleshooting/troubleshooting-usage-and-popularity-metrics)

Copyright Â© 2025 Atlan Pte. Ltd.

