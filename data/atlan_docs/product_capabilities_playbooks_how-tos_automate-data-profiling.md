# Source URL
https://docs.atlan.com/product/capabilities/playbooks/how-tos/automate-data-profiling

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/playbooks/how-tos/automate-data-profiling
link-alternate: https://docs.atlan.com/product/capabilities/playbooks/how-tos/automate-data-profiling
meta-description: âAvailable via the Data Quality Studio package
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: âAvailable via the Data Quality Studio package
meta-og-locale: en
meta-og-title: Automate data profiling | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/playbooks/how-tos/automate-data-profiling
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Automate data profiling | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Automate data profiling
=======================

â**Available via the Data Quality Studio package**

warning**ð¤ Who can do this?** You need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to create profiling playbooks.

Monitoring and improving data quality is critical to building trust in your data assets. Atlan solves for this with profiling playbooks!

Profiling playbooks help power data observability for your assets in Atlan. You can create profiling playbooks to scan your assets at scale, identify any issues or inconsistencies, and improve the data quality of your assets.

Supported sources[â](#supported-sources "Direct link to Supported sources")
-----------------------------------------------------------------------------

Atlan currently supports column profiling for the following connectors:

* [Amazon Athena](/apps/connectors/database/amazon-athena/references/what-does-atlan-crawl-from-amazon-athena)
* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/references/what-does-atlan-crawl-from-amazon-redshift)
* [Databricks](/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks)
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery)
* [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/references/what-does-atlan-crawl-from-microsoft-sql-server)
* [MySQL](/apps/connectors/database/mysql/references/what-does-atlan-crawl-from-mysql)
* [PostgreSQL](/apps/connectors/database/postgresql/references/what-does-atlan-crawl-from-postgresql)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake)
* [Trino](/apps/connectors/database/trino/references/what-does-atlan-crawl-from-trino)

[https://demo.arcade.software/WotcuydQxtOO3uLenb3l?embed](https://demo.arcade.software/WotcuydQxtOO3uLenb3l?embed)

Create a profiling playbook[â](#create-a-profiling-playbook "Direct link to Create a profiling playbook")
-----------------------------------------------------------------------------------------------------------

To create a profiling playbook:

1. In the left menu in Atlan, click **Governance**.
2. Under the *Governance* heading of the *Governance center*, click **Playbooks**.
3. To the right of the *Create New* button, click the downward arrow and then select **Profiling Playbook**.
4. In the *Create new profiling playbook* dialog, enter the following details:
    1. For *Name*, enter a name for the task to be accomplished \- for example, `Tables scan`. (Atlan recommends that the length of a playbook name must be no longer than 46 characters.)
    2. For *Connection*, select a [supported connection](/product/capabilities/playbooks/how-tos/automate-data-profiling#supported-sources) from the dropdown menu \- in this example, we'll select a Google BigQuery connection `development`.
    3. (Optional) For *Description*, enter a description for your playbook.
    4. (Optional) Select an icon for your playbook.
5. Click **Create** to save your playbook.

Set up rules as filters[â](#set-up-rules-as-filters "Direct link to Set up rules as filters")
-----------------------------------------------------------------------------------------------

**Did you know?**The assets to be scanned are pre\-filled based on your selected connection.

To set up rules as filters for your profiling playbook:

1. In the *Build Rules* page of your profiling playbook, click **Filters**.
2. For the name field, add a name to your filter \- for example, *Profiling action*.
3. To set a matching condition for the filters, select **Match all** or **Match any**. *Match all* will logically `AND` the criteria, while *Match any* will logically `OR` the criteria.
4. For *Attributes*, select the relevant option. For this example, we'll select *Name* listed under *Properties*. (Optional) To further refine your asset selection:
    * Click **Connection** to select a specific connection.Â
        1. Click **All databases** to filter by databases in a selected connection.
        2. Click **All schemas** to filter by schemas in a selected connection.
    * Click **Connector** to filter assets by [supported connectors](/product/connections/references/supported-sources).
    * Click **Asset type** to filter by specific asset types \- for example, tables, columns, queries, glossaries, and more.
    * Click **Certificate** to filter assets by [certification status](/product/capabilities/discovery/how-tos/add-certificates).
    * Click **Owners** to filter assets by [asset owners](/product/capabilities/discovery/how-tos/add-owners).
    * Click **Tags** to filter assets by your [tags](/product/capabilities/governance/tags/concepts/what-are-tags) in Atlan, including imported [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags) and [dbt](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags) tags.
        + (Optional) For [Snowflake tags](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags) only, to the left of the checkbox, click **Select value**, and then from the *Select tag value* dialog, select any value(s) to filter assets by tag value.
    * Click **Glossary, terms, \& categories** to filter by a specific [glossary](/product/capabilities/governance/glossary/how-tos/set-up-glossaries) or [category](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#category) to bulk update all the nested terms or by multiple glossaries and categories.
    * Click **Linked terms** to filter assets by [linked terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets).
    * Click **Schema qualified Name** to filter assets by the qualified name of a given schema.
    * Click **Database qualified Name** to filter assets by the qualified name of a given database.
    * Click **dbt** to filter assets by dbt\-specific filters and then select a [dbt Cloud](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core) filter.
    * Click **Properties** to filter assets by [common asset properties](/product/capabilities/discovery/how-tos/use-the-filters-menu).
    * Click **Usage** to filter assets by [usage metrics](/product/capabilities/usage-and-popularity/how-tos/find-assets-by-usage).
    * Click **Monte Carlo** to filter assets by [Monte Carlo\-specific filters](/apps/connectors/observability/monte-carlo/references/what-does-atlan-crawl-from-monte-carlo).
    * Click **Soda** to filter assets by [Soda\-specific filters](/apps/connectors/observability/soda/references/what-does-atlan-crawl-from-soda).
    * Click **Table/View** to filter tables or views by row count, column count, or size.
    * Click **Column** to filter columns by [column\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu), including parent asset type or name, data type, or [column keys](/product/connections/faq/column-keys-crawled).
    * Click **Process** to filter [lineage processes](/product/capabilities/lineage/concepts/what-are-processes) by the SQL query.
    * Click **Query** to filter assets by associated [visual queries](/product/capabilities/insights/how-tos/query-data).
    * Click **Measure** to filter [Microsoft Power BI measures](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi) using the external measures filter.
5. For *Operator*, select **Is one of** for values to include or **Is not** for values to exclude. Depending on the selected attribute(s), you can also choose from [additional operators](/product/capabilities/discovery/how-tos/use-the-filters-menu):
    * Select **Equals (\=)** or **Not Equals (!\=)** to include or exclude assets through exact match search.
    * Select **Starts With** or **Ends With** to filter assets using the starting or ending sequence of values.
    * Select **Contains** or **Does not contain** to find assets with or without specified values contained within the attribute.
    * Select **Pattern** to filter assets using supported [Elastic DSL regular expressions](https://www.elastic.co/guide/en/elasticsearch/references/current/regexp-syntax.html).
    * Select **Is empty** to filter assets with null values.
6. For *Values*, select the relevant values. The values will vary depending on the selected attributes.
7. (Optional) To add more filters, click **Add filter** and select **Filter** to add individual filters or **Filter** **Group** to nest more filters in a group.
8. (Optional) To view all the assets that match your rules, in the *Filters* card, click **View** **all** for a preview.

Confirm profiling actions[â](#confirm-profiling-actions "Direct link to Confirm profiling actions")
-----------------------------------------------------------------------------------------------------

dangerColumn profiling is currently only supported for number and text data types. The profiled column assets will be populated with preconfigured metrics.

To select the actions to be performed based on your rules:

1. The default profiling actions to be performed include:
    * **Base metrics**:
        + Distinct count \- number of rows that contain distinct values, relative to the column.
        + Missing count \- number of rows that do not contain specific values.
    * **Numeric metrics**:
        + Minimum and maximum values \- smallest and greatest values in a numeric column.
        + Average \- calculated average of values in a numeric column.
        + Standard deviation \- calculated standard deviation of values in a numeric column.
        + Variance \- calculated variance of values in a numeric column.
    * **String metrics**:
        + Average length \- average length of string values in a column.
        + Minimum and maximum length \- minimum and maximum length of string values in a column.
2. Click **Next** to proceed to the next step.
3. In the *Optimize your Profiling query* popup, the following message will appear: *This Profiling playbook will query `x` rows across `y` assets. To avoid significant computing costs, review your applied filters before proceeding*. Click **Review filters** to review your existing filters or click **Continue anyway** to proceed.

Note that Atlan is working to support sampling functionality in the future.

Run the playbook[â](#run-the-playbook "Direct link to Run the playbook")
--------------------------------------------------------------------------

If you'd like to continue working on your playbook, you can save it as a draft. If your playbook is ready, you can proceed to running it.

To run the playbook:

1. You can either:
    * To run the playbook once immediately, click **Run once**.
    * To schedule the playbook to run hourly, daily, weekly, or monthly, click **Schedule** and choose the preferred frequency, timezone, and time.
2. Click **Complete** to confirm your selections.
3. In the resulting screen, click **Go to profile** to view your playbook profile.

Once your playbook run is completed, you will see the data profile updated for your assets! ð

View profiled assets[â](#view-profiled-assets "Direct link to View profiled assets")
--------------------------------------------------------------------------------------

To view the profiled assets for your playbook:

1. In the *Overview* page of your playbook, to the right of *Profiling action*, click the total count of profiled assets.
2. In the sidebar to the right, profiled assets will be indicated with a bar graph icon. Click any profiled asset to proceed to viewing profiling data.
3. From the table sidebar, click the **Column** tab to view column assets and then select any of the profiled columns.
4. In the column sidebar to the right, click **Profile** to view profiling data for the selected column asset.

**Did you know?**Once you've created a profiling playbook, you can [monitor, modify, or delete](/product/capabilities/playbooks/how-tos/manage-playbooks) it at any time.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousManage playbooks](/product/capabilities/playbooks/how-tos/manage-playbooks)[NextTroubleshooting playbooks](/product/capabilities/playbooks/troubleshooting/troubleshooting-playbooks)

Copyright Â© 2025 Atlan Pte. Ltd.

