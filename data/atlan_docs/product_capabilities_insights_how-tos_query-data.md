# Source URL
https://docs.atlan.com/product/capabilities/insights/how-tos/query-data

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/insights/how-tos/query-data
link-alternate: https://docs.atlan.com/product/capabilities/insights/how-tos/query-data
meta-description: Learn about query data.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about query data.
meta-og-locale: en
meta-og-title: query data | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/insights/how-tos/query-data
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: query data | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

query data
==========

There are two ways to query data in Atlan:

* writing your own SQL
* using the Visual Query Builder

**Did you know?**Atlan pushes all queries to the source (no data is stored in Atlan). In addition, Atlan applies access policies to the results before displaying them.

Write your own SQL[â](#write-your-own-sql "Direct link to Write your own SQL")
--------------------------------------------------------------------------------

Who can do this?Anyone with the knowledge to write SQL. Any [Atlan user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) with [data access to the asset](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#data-policies) can query data.

To query an asset with your own SQL:

1. From the left menu of any screen, click **Insights**.
2. Under the *Explorer* tab, find the asset you want to query:
    1. Use the *Select database* dropdown to choose another database, if necessary.
    2. Search for the asset by name in the search bar, or browse for it in the tree structure.
3. Hover over the table or view, and click the play icon. This writes and runs a basic preview query.
    * (Optional) Click the open asset sidebar icon to view more details in the asset sidebar.
    * (Optional) Click the eye icon to view a preview of the query results.
    * (Optional) Click the 3\-dot icon for more options:
        + Click **Set editor context** to set the same connection, database, and schema name in the query editor as selected in the *Explorer* tab.
        + Click **Place name in editor** to view the asset name in the query editor.
        + Click **Copy path** to copy the full path of the asset, including database and schema names.
4. Under the *Untitled* tab on the right, change the sample query or write your own \- separate multiple queries with a semicolon `;`. Click the **Run** button in the upper right to test your query as you write it.
    * (Optional) Click the downward arrow next to the *Run* button to [export query results via email](/product/capabilities/insights/references/tips-and-tricks#export-large-query-results-via-email) or [schedule the query](/product/capabilities/insights/how-tos/schedule-a-query).
5. (Optional) If you have multiple tabs open in the query editor, right\-click a tab to open the tabs menu. You can close a specific tab or all tabs, or duplicate the query.
6. (Optional) From the top right of the query editor, click the 3\-dot icon for additional query editor actions or to customize it further:
    * Click or hover over *Duplicate query* to create a duplicate version of your query.
    * Click or hover over *Open command palette* to view the actions you can run inside the query editor.
    * Click or hover over *Themes* and then select your preferred theme for the query editor.
    * Click or hover over *Tab spacing* to change the tab spacing for your queries.
    * Click or hover over *Font size* to change the font size for your queries.
    * Click or hover over *Cursor* to change the cursor position in the query editor.
    * Click or hover over *Autosuggestions* to turn off autosuggestions for assets in the query editor.

The editor supports all read\-based SQL statements, including `JOIN`. The editor will not run any write\-based statements. The following SQL statements are not supported:

* `UPDATE`
* `DELETE`
* `CREATE`
* `ALTER`
* `DROP`
* `TRUNCATE`
* `INSERT INTO`

**Did you know?**You can select the context for your query to the left of the *Run* button. Then you won't need to fully qualify table names with schema and database names.

[https://demo.arcade.software/XEZ2pFlCEgVEuRmlb9ol?embed](https://demo.arcade.software/XEZ2pFlCEgVEuRmlb9ol?embed)

[https://demo.arcade.software/TFOKpTZNZt2SfQolEDc9?embed](https://demo.arcade.software/TFOKpTZNZt2SfQolEDc9?embed)

Use the Visual Query Builder[â](#use-the-visual-query-builder "Direct link to Use the Visual Query Builder")
--------------------------------------------------------------------------------------------------------------

Who can do this?Any [Atlan user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) with [data access to the asset](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#data-policies). No SQL knowledge required!

To query an asset using the Visual Query Builder:

1. From the left menu of any screen, click **Insights**.
2. At the top of the screen, to the right of the *Untitled* tab, click the **\+** button and select **New visual query**.
3. Under *Select from* choose the table or view you want to query.
4. (Optional) In the column selector to the right, select the column you want to query.
5. Then develop your query:
    * Click the **Run** button to run the query and preview its results.
    * Click the blue circular **\+** button to add an action to the query.
    * Repeat these steps until your query is complete.
6. (Optional) If there are any errors in your query, click **Auto fix** for Atlan to recommend a fix.Â
7. (Optional) In the query results set, click **Copy** to copy the query results or click **Download** to export them.

**Did you know?**You can learn more about the query builder actions in [this example](/product/capabilities/insights/concepts/what-are-the-query-builder-actions).

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousInsights](/product/capabilities/insights)[NextSave and share queries](/product/capabilities/insights/how-tos/save-and-share-queries)

Copyright Â© 2025 Atlan Pte. Ltd.

