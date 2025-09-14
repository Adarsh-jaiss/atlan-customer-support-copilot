# Source URL
https://docs.atlan.com/product/connections/faq/column-keys-crawled

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/faq/column-keys-crawled
link-alternate: https://docs.atlan.com/product/connections/faq/column-keys-crawled
meta-description: Learn about what column keys does atlan crawl?.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about what column keys does atlan crawl?.
meta-og-locale: en
meta-og-title: What column keys does Atlan crawl? | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/faq/column-keys-crawled
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What column keys does Atlan crawl? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What column keys does Atlan crawl?
==================================

If the following column keys are defined in the SQL database at source, Atlan will crawl and display them as attributes for your assets:

* **Primary key** \- uniquely identifies each row in a table.
* **Foreign key** \- links together two tables.
* **Partition key** \- determines logical partitions in a table.
* **Sort key** \- determines the order in which rows are stored in a table.
* **Index key** \- defines the order for an index in the database.
* **Cluster key** \- determines the order in which the database is partitioned.
* **Distributed key** \- determines where data is stored in a database.

View column keys[â](#view-column-keys "Direct link to View column keys")
--------------------------------------------------------------------------

Navigate to the left menu of any screen in Atlan and click **Assets** to begin:

### From the asset preview[â](#from-the-asset-preview "Direct link to From the asset preview")

To view column keys in the asset preview:

* From the *Assets* page, navigate to the asset preview section. The asset preview for column assets will display available column keys.

### From the asset profile[â](#from-the-asset-profile "Direct link to From the asset profile")

To view column keys in the asset profile:

1. From the *Assets* page, right\-click a table or a column asset and select **Open profile**.
2. Navigate to *Column preview* to view available column keys.

[https://demo.arcade.software/6EPBxeAbMXqxvNyIn1k7?embed](https://demo.arcade.software/6EPBxeAbMXqxvNyIn1k7?embed)

### From the sidebar[â](#from-the-sidebar "Direct link to From the sidebar")

To view column keys in the sidebar:

1. From the *Assets* page, click a table or a column asset.
2. In the sidebar to the right, click the **Columns** tab to view available column keys in the sidebar.

[https://demo.arcade.software/EcLOt2BQaobFD7YezvJu?embed](https://demo.arcade.software/EcLOt2BQaobFD7YezvJu?embed)

[https://demo.arcade.software/OV0VQw3ZYZKygYG9RpkS?embed](https://demo.arcade.software/OV0VQw3ZYZKygYG9RpkS?embed)

Create foreign key relationships[â](#create-foreign-key-relationships "Direct link to Create foreign key relationships")
--------------------------------------------------------------------------------------------------------------------------

You can create foreign key relationships only through APIs for your column assets in Atlan. You can use the `foreignKeyTo` and `foreignKeyFrom` statements to create column references for your foreign keys and maintain the referential integrity of your assets. Refer to our [developer documentation](https://developer.atlan.com/models/entities/column/?h=forei#foreignkeyfrom-column) to assign foreign key relationships.

Once you have created foreign key relationships, your users will be able to view the column references and better understand the relationships between assets.

Filter assets by column keys[â](#filter-assets-by-column-keys "Direct link to Filter assets by column keys")
--------------------------------------------------------------------------------------------------------------

You can filter your asset search results by [type\-specific property](/product/capabilities/discovery/how-tos/use-the-filters-menu) filters, such as column keys for your column assets.Â

To filter column assets by column keys:

1. From the left menu on any screen in Atlan, click **Assets**.
2. Under the search bar on the *Assets* page, click the **Column** tab to filter for column assets.
3. In the *Filters* menu on the left, click the **Column** filter.
4. To add a [type\-specific property](/product/capabilities/discovery/how-tos/use-the-filters-menu) filter to refine your search, select a column\-type property filter \- for example, *Primary key*.
5. In the filter dialog, click **Yes** to view column assets with a primary key or click **No** to only view column assets without a primary key.

Supported sources[â](#supported-sources "Direct link to Supported sources")
-----------------------------------------------------------------------------

Atlan supports column keys for the following connectors:

* [Amazon Athena](/apps/connectors/database/amazon-athena/references/what-does-atlan-crawl-from-amazon-athena#columns)
* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/references/what-does-atlan-crawl-from-amazon-redshift#columns)
* [AWS Glue](/apps/connectors/etl-tools/aws-glue/references/what-does-atlan-crawl-from-aws-glue#views)
* [Databricks](/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks#columns)
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery#columns)
* [Hive](/apps/connectors/database/hive/references/what-does-atlan-crawl-from-hive#columns)
* [Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/references/what-does-atlan-crawl-from-microsoft-azure-synapse-analytics#columns)
* [Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/references/what-does-atlan-crawl-from-microsoft-sql-server#columns)
* [MySQL](/apps/connectors/database/mysql/references/what-does-atlan-crawl-from-mysql#columns)
* [Oracle](/apps/connectors/database/oracle/references/what-does-atlan-crawl-from-oracle#columns)
* [PostgreSQL](/apps/connectors/database/postgresql/references/what-does-atlan-crawl-from-postgresql#columns)
* [SAP HANA](/apps/connectors/database/sap-hana/references/what-does-atlan-crawl-from-sap-hana#columns)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake#columns)
* [Teradata](/apps/connectors/database/teradata/references/what-does-atlan-crawl-from-teradata#columns)
**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)
* [faq\-connections](/tags/faq-connections)

[PreviousHow often does Atlan crawl Snowflake?](/product/connections/faq/snowflake-crawl-frequency)[NextWhat's the difference between connecting to Athena and Glue?](/product/connections/faq/athena-vs-glue)

Copyright Â© 2025 Atlan Pte. Ltd.

