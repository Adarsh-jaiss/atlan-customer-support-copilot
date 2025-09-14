# Source URL
https://docs.atlan.com/product/capabilities/insights/references/tips-and-tricks

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/insights/references/tips-and-tricks
link-alternate: https://docs.atlan.com/product/capabilities/insights/references/tips-and-tricks
meta-description: At Atlan, we are committed to powering your user experience. Here are a few tips and tricks to help you get the most out of Insights for you and your team!
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: At Atlan, we are committed to powering your user experience. Here are a few tips and tricks to help you get the most out of Insights for you and your team!
meta-og-locale: en
meta-og-title: Insights tips and tricks | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/insights/references/tips-and-tricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Insights tips and tricks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Insights tips and tricks
========================

At Atlan, we are committed to powering your user experience. Here are a few tips and tricks to help you get the most out of Insights for you and your team!

Export large query results via email[â](#export-large-query-results-via-email "Direct link to Export large query results via email")
--------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your Atlan administrator to [enable scheduled queries](/product/administration/labs/how-tos/enable-scheduled-queries). Once enabled, you need to be a connection admin to [increase the query limit](/product/connections/how-tos/manage-connectivity) to more than 100,000 rows. Atlan currently has an upper limit of 30 million rows. Reach out to your data success manager if youâd like to increase the limit for your organization.

Previously, users could only scan and see query results for up to 100,000 rows by default. To help you scan more rows and export those results, you can now export queries for more than 100,000 rows directly to your email inbox.

To export query results for more than 100,000 rows to your email inbox:

1. In the query editor in *Insights*, type a limit for more than 100,000\.  
(Note: Be sure to uncheck the **Limit to 100 rows** box in the query editor.)
2. Click **Run** to run the query.
3. The query results set will only display 100,000 rows. In the yellow bar above the query results set, click **Send results via email**.
4. You will need to save the query to get the results via email. In the *Save Query* dialog box:
    1. Select the relevant *Query collection* to save your query. If you haven't created one, you will get a prompt to [create a query collection](/product/capabilities/insights/how-tos/save-and-share-queries#save-a-query) during this step.Â
    2. For *Query name*, type a name for your query.
    3. (Optional) Add a description, certification status, and term.Â
    4. Click **Save Query** to receive the query results in your email inbox.
5. (Optional) To [add an announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) to alert others in your team, click **Add Announcement**.Â

The query results will be delivered to your email inbox in a CSV file! ð

If your saved query consists of multiple queries, you'll receive the results for each query in a separate CSV file.

**Did you know?**Once the query run is successful, you will also be able to download the query results as a CSV file directly in Atlan. If you donât wish to run the query, you can abort the query at any time. If you have any questions, head over [here](/product/capabilities/insights/troubleshooting/troubleshooting-exporting-large-query-results).

[https://demo.arcade.software/otwqfO9hgpVV4uiAiVZi?embed](https://demo.arcade.software/otwqfO9hgpVV4uiAiVZi?embed)

[https://demo.arcade.software/ZYzwSFilTb8qTXNNYjQE?embed](https://demo.arcade.software/ZYzwSFilTb8qTXNNYjQE?embed)

[https://demo.arcade.software/cIKBMGJs0hHFz6Yx2LMZ?embed](https://demo.arcade.software/cIKBMGJs0hHFz6Yx2LMZ?embed)

Open asset sidebar from Insights[â](#open-asset-sidebar-from-insights "Direct link to Open asset sidebar from Insights")
--------------------------------------------------------------------------------------------------------------------------

To get all the context you need before querying an asset, you can open the asset sidebar directly from *Insights*.

To open the asset sidebar:

* In the *Explorer* left panel in *Insights*, hover over a table and click on the **Open sidebar** icon. (The name may vary depending on the asset type, such as *Open table sidebar* for table assets).

You will now be able to view the asset sidebar for the asset you'd like to query! ð

Search and sort query results[â](#search-and-sort-query-results "Direct link to Search and sort query results")
-----------------------------------------------------------------------------------------------------------------

### Search query results[â](#search-query-results "Direct link to Search query results")

With the search feature enabled for query results, you can use the search bar to type a search term and filter your results by that specific term.Â

To search your query results after running a query:

1. In the query results set in *Insights*, click the **Search results** bar.
2. In the *Search results* bar, type your search term, such as `Tuesday`, to see the query results for that term.

[https://demo.arcade.software/eW2RFCT8VorrsHRJZd0K?embed](https://demo.arcade.software/eW2RFCT8VorrsHRJZd0K?embed)

### Sort query results[â](#sort-query-results "Direct link to Sort query results")

If you'd like to sort your query results, use the sort feature to order your query results.Â

To sort your query results after running a query:

* In the query results set in *Insights*, click on a **column name**, such as `user id`, to sort your results in an ascending or descending order.

**Did you know?**Atlan currently supports text, number, and Boolean data types for sorting query results.

Add inferred data types[â](#add-inferred-data-types "Direct link to Add inferred data types")
-----------------------------------------------------------------------------------------------

dangerAtlan currently supports inferred data types only for [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks)Â and [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) assets.

If your column data is stored in a standard data type \- for example, `STRING` \- you can add an inferred data type to the column. This will help you query the data [using the Visual Query Builder](/product/capabilities/insights/how-tos/query-data#use-the-visual-query-builder).Â

For example, if your column contains dates stored in a `STRING` format, you can infer this column as a `DATE` data type in Atlan.

To add an inferred data type:

dangerYou will need to select an acceptable inferred data type as per your data source.

### From a query[â](#from-a-query "Direct link to From a query")

1. From the left menu of any screen, click **Insights**.
2. At the top of the screen, to the right of the *Untitled* tab, click the **\+** button and select **New visual query**.
3. Under *Select from*, choose the table you want to query.
4. In the column selector to the right, select the column to which you want to add an inferred data type \- for this example, we'll choose a column with aÂ`STRING` data type, `stringDateColumn`.
5. Hover over your selected column, and in the top right of the metadata popover, click the **Open sidebar** icon.
6. At the top of the column sidebar, click the **three dots** icon and then click **Add inferred datatype**.
7. For *Add Inferred datatype*, type a secondary data type \- for this example, we'll add a `DATE` data type.
8. Click **Add** to add your inferred data type.Â
9. (Optional) To query the column with an inferred data type:
    1. In the query editor, click the blue circular **\+** button and then select **Filter** as the action.
    2. For *WHERE*, select the column with an inferred data type.
    3. Under the selected column, click the inferred data type option to query the column in Atlan.

[https://demo.arcade.software/sEsf5qwXfGBM07bUYhpd?embed](https://demo.arcade.software/sEsf5qwXfGBM07bUYhpd?embed)

### From an asset[â](#from-an-asset "Direct link to From an asset")

1. From the left menu of any screen, click **Assets**.
2. On the *Assets* page, click a column asset with a `STRING` data type to open the asset sidebar \- for example, `stringDateColumn`.
3. At the top of the column sidebar, click the **three dots** icon and then click **Add inferred datatype**.
4. For *Add Inferred datatype*, type a secondary data type \- for this example, we'll add a `DATE` data type.
5. Click **Add** to add your inferred data type.

The inferred data type for your selected column will now be displayed in the asset sidebar! ð

To remove the inferred data type from a column asset, click the **pencil** icon. In the dialog, click **x** to remove the data type and then click **Remove** to confirm removal.Â

View querying costs[â](#view-querying-costs "Direct link to View querying costs")
-----------------------------------------------------------------------------------

To help you gain the most value\-driven insights in Atlan, you will receive a cost nudge before querying your Google BigQuery [views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#views) and [materialized views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#materialized-views). This will inform you about the precise bytes that will be spent during the execution of the query, helping you decide if you would still like to run the query. For all subsequent runs of the same query, Atlan will use [cached query results](https://cloud.google.com/bigquery/docs/cached-results) from Google BigQuery \- note that the query text must be the same as the original query.

Google BigQuery table assets are already cost\-optimized for querying.

To [view querying costs](https://cloud.google.com/bigquery/pricing) for a Google BigQuery view:

1. Under the *Explorer* tab in *Insights*, hover over a Google BigQuery view and click the play icon.
2. In the cost preview dialog, click **Cancel** to cancel running the query based on the costs shown or click **Run** to proceed with running the query.

**Did you know?**You will also receive a cost nudge before viewing [Google BigQuery sample data previews](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery).

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousWhat are the query builder actions?](/product/capabilities/insights/concepts/what-are-the-query-builder-actions)[NextAre there any limits on concurrent queries?](/product/capabilities/insights/faq/concurrent-queries-limit)

Copyright Â© 2025 Atlan Pte. Ltd.

