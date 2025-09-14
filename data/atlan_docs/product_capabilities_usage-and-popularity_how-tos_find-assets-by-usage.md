# Source URL
https://docs.atlan.com/product/capabilities/usage-and-popularity/how-tos/find-assets-by-usage

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/usage-and-popularity/how-tos/find-assets-by-usage
link-alternate: https://docs.atlan.com/product/capabilities/usage-and-popularity/how-tos/find-assets-by-usage
meta-description: Data teams often lack clarity on which data assets can be considered trustworthy, whether these are frequently used, the freshness of the data itself, or how critical these are for enrichment and governance.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Data teams often lack clarity on which data assets can be considered trustworthy, whether these are frequently used, the freshness of the data itself, or how critical these are for enrichment and governance.
meta-og-locale: en
meta-og-title: Find assets by usage | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/usage-and-popularity/how-tos/find-assets-by-usage
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Find assets by usage | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Find assets by usage
====================

Data teams often lack clarity on which data assets can be considered trustworthy, whether these are frequently used, the freshness of the data itself, or how critical these are for enrichment and governance.

With Atlan's usage and popularity metadata, you'll be able to check off all these boxes! You can view usage metrics for your assets collected over the last 30 days.

Atlan currently supports usage and popularity metrics for the following connectors:

* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift) \- tables, views, and columns. Expensive queries and compute costs for Amazon Redshift assets are currently unavailable due to limitations at source.
* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks) \- tables, views, and columns. Expensive queries and compute costs for Databricks assets are currently unavailable due to limitations of the [Databricks APIs](https://docs.databricks.com/api/workspace/queryhistory/list).
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery) \- tables, views, and columns
* [Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/mine-microsoft-power-bi) \- reports and dashboards
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake) \- tables, views, and columns

Filter assets by usage[â](#filter-assets-by-usage "Direct link to Filter assets by usage")
--------------------------------------------------------------------------------------------

Use the usage filters to filter your assets by usage metadata. For instance, you'll be able to filter assets with zero queries and archive them or find costly assets to better optimize your operations.

[https://demo.arcade.software/8acri3kEdqwCWmGVkzSg?embed](https://demo.arcade.software/8acri3kEdqwCWmGVkzSg?embed)

To filter assets by usage metadata:

1. From the left menu in Atlan, click **Assets**.
2. In the *Filters* menu in *Assets*, click **Usage** to expand the list of filters.
3. From the *Usage* menu:
    1. For *SQL* assets, use the following filters:
        * Click **Number of queries** to filter by the number of queries at source in the last 30 days.
        * Click **Number of users** to filter by the number of users who queried an asset at source in the last 30 days.
        * Click **Last queried** to filter by the last queried timestamp at source.
        * Click **Last row updated at** to filter by the last row updated timestamp at source.
        * To filter assets by [compute cost](/product/capabilities/usage-and-popularity/troubleshooting/troubleshooting-usage-and-popularity-metrics), click **Snowflake credits** for Snowflake assets or click **BigQuery query cost** for Google BigQuery assets.
    2. For *BI* assets, use the following filters:
        * Click **Views count** to filter by the number of views at source in the last 30 days.
        * Click **Number of users** to filter by the number of users who viewed an asset at source in the last 30 days.
        * Click **Last viewed** to filter by the last viewed timestamp at source.

Your search results will now be filtered by usage metadata! ð

Sort assets by popularity[â](#sort-assets-by-popularity "Direct link to Sort assets by popularity")
-----------------------------------------------------------------------------------------------------

Sort your data assets by popularity metadata to view the most or least used tables, views, or columns. For example, sorting your assets by popularity can help you deprecate unused or stale data assets, helping you reduce operational costs for your organization.

[https://demo.arcade.software/cwLpD3UIugiIXJXOeev2?embed](https://demo.arcade.software/cwLpD3UIugiIXJXOeev2?embed)

To sort assets by popularity:

1. From the left menu in Atlan, click **Assets**.
2. For *Connector* on the *Assets* page, select a supported connector \- for this example, we'll select *Snowflake*.
3. Next to the search bar on the *Assets* page, click the sort button.
4. From the *Popularity* sorting menu, click **Most popular** to view most used assets or **Least popular** to view least used assets.

Your assets in the search results will now be sorted by popularity of usage! ð

**Did you know?**You can also [deep dive into usage metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for Snowflake, Databricks, Google BigQuery, and Microsoft Power BI in Atlan.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)

[PreviousUsage and Popularity](/product/capabilities/usage-and-popularity)[NextHow to interpret usage metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics)

Copyright Â© 2025 Atlan Pte. Ltd.

