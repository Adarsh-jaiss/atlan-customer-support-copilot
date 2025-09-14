# Source URL
https://docs.atlan.com/product/capabilities/lineage/concepts/what-is-lineage

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/lineage/concepts/what-is-lineage
link-alternate: https://docs.atlan.com/product/capabilities/lineage/concepts/what-is-lineage
meta-description: [Data lineage](/product/capabilities/lineage/how-tos/view-lineage) captures how data moves across your data landscape. This information is useful to:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: [Data lineage](/product/capabilities/lineage/how-tos/view-lineage) captures how data moves across your data landscape. This information is useful to:.
meta-og-locale: en
meta-og-title: Lineage | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/lineage/concepts/what-is-lineage
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Lineage | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Lineage
=======

[Data lineage](/product/capabilities/lineage/how-tos/view-lineage) captures how data moves across your data landscape. This information is useful to:

* Trace data's origins, to assist with root cause analysis
* Trace data's destinations, to assist with impact analysis
* Automate the propagation of metadata to derived assets

**Did you know?**Tag propagation is disabled by default in Atlan. You can [enable tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) to child and downstream assets.

### Root cause analysis[â](#root-cause-analysis "Direct link to Root cause analysis")

Root cause analysis is about identifying the underlying causes of a data problem. You want to know where the data came *from* and what *happened* to it before it got to you. With root cause analysis, your focus is on these *upstream* sources and transformations.

### Impact analysis[â](#impact-analysis "Direct link to Impact analysis")

Impact analysis is about identifying potential consequences of changes. You want to know where the data is *going* and what *could happen* to others if you change it. With impact analysis, the primary focus is on these *downstream* systems and consumers.

**Did you know?**When viewing lineage in Atlan, hover over any asset to view a metadata popover. The metadata popovers display relevant metadata for the asset, providing you with more context for your analysis. For example, database and schema names for Snowflake assets, project names for dbt models, and more.

How does it work?[â](#how-does-it-work "Direct link to How does it work?")
----------------------------------------------------------------------------

Atlan constructs [lineage](/product/capabilities/lineage/how-tos/view-lineage) by combining assets and processes:

* Assets represent the inputs and outputs of processes \- databases, dashboards, and so on.
* [Processes](/product/capabilities/lineage/concepts/what-are-processes) represent the activities that move or transform data between the assets. (Processes are the lines between the assets in Atlan's graphical view.)

Atlan chains these together into a flow of data from various resources:

### SQL parsing[â](#sql-parsing "Direct link to SQL parsing")

Atlan parses SQL queries to determine how data stores have created or transformed assets. Examples of this include:

* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift)
* [dbt](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt)
* [Generic query logs (via S3 objects)](/product/connections/how-tos/mine-queries-through-s3)
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake)

### API crawling[â](#api-crawling "Direct link to API crawling")

Atlan also retrieves lineage information for assets from APIs. Examples of this include:

* [Databricks (Unity Catalog)](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks)
* [Looker](/apps/connectors/business-intelligence/looker/how-tos/crawl-looker)
* [Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi)
* [Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau)

### API ingestion[â](#api-ingestion "Direct link to API ingestion")

Atlan provides built\-in lineage extraction for the tools above. But you can also extend lineage with your own information using Atlan's [open APIs](https://apidocs.atlan.com/#endpoint-lineage). You can use these to integrate lineage from your own home\-grown tools or orchestration suites like [Apache Airflow](https://airflow.apache.org/) and [Dagster](https://dagster.io/).

**Tags:*** [lineage](/tags/lineage)
* [data\-lineage](/tags/data-lineage)
* [impact\-analysis](/tags/impact-analysis)
* [faq](/tags/faq)
* [troubleshooting](/tags/troubleshooting)

[PreviousWhat is column\-level lineage?](/product/capabilities/lineage/concepts/what-is-column-level-lineage)[NextWhat are partial assets?](/product/capabilities/lineage/concepts/what-are-partial-assets)

Copyright Â© 2025 Atlan Pte. Ltd.

