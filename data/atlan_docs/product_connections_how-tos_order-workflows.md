# Source URL
https://docs.atlan.com/product/connections/how-tos/order-workflows

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/how-tos/order-workflows
link-alternate: https://docs.atlan.com/product/connections/how-tos/order-workflows
meta-description: The [order of operations](/product/connections/how-tos/order-workflows#order-of-operations) you run in Atlan is important. Follow the specific workflow sequence outlined below when crawling [data tools](/product/connections/references/supported-sources). The right order particularly ensures that lineage is constructed without needing to rerun crawlers.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The [order of operations](/product/connections/how-tos/order-workflows#order-of-operations) you run in Atlan is important. Follow the specific workflow sequence outlined below when crawling [data tools](/product/connections/references/supported-sources). The right order particularly ensures that lineage is constructed without needing to rerun crawlers.
meta-og-locale: en
meta-og-title: order workflows | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/how-tos/order-workflows
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: order workflows | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

order workflows
===============

The [order of operations](/product/connections/how-tos/order-workflows#order-of-operations) you run in Atlan is important. Follow the specific workflow sequence outlined below when crawling [data tools](/product/connections/references/supported-sources). The right order particularly ensures that lineage is constructed without needing to rerun crawlers.

Order of operations[â](#order-of-operations "Direct link to Order of operations")
-----------------------------------------------------------------------------------

To have lineage across tools, you need to:

1. **Crawl data stores first** \- for example, [SQL data sources](/product/connections/references/supported-sources#nosql-data-sources), [NoSQL data sources](/product/connections/references/supported-sources#nosql-data-sources), [event buses](/product/connections/references/supported-sources#event-buses), and [schema registries](/product/connections/references/supported-sources#schema-registry).
2. **Run data quality tools** \- for example, [Monte Carlo](/apps/connectors/observability/monte-carlo/how-tos/crawl-monte-carlo) and [Soda](/apps/connectors/observability/soda/how-tos/crawl-soda).
3. **Mine query logs** \- [mine queries through S3](/product/connections/how-tos/mine-queries-through-s3) or run miner packages for supported sources.
4. **Run extract\-load tools** \- for example, [Fivetran](/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran), [Airflow/OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage) and [other supported distributions](/product/connections/references/supported-sources), and data processing tools like [Apache Spark/OpenLineage](/apps/connectors/lineage/apache-spark-openlineage/how-tos/integrate-apache-spark-openlineage), [Alteryx](/apps/connectors/etl-tools/alteryx/how-tos/integrate-alteryx).
5. **Run transformation tools** \- for example, [dbt](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt) and [Matillion](/apps/connectors/etl-tools/matillion/how-tos/crawl-matillion).
6. **Crawl business intelligence tools last** \- for example, [supported BI tools](/product/connections/references/supported-sources) like [Looker](/apps/connectors/business-intelligence/looker/how-tos/crawl-looker), [Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi), [Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau), and more.

If you use a different order, the upstream assets (data stores) might not yet exist when you load the BI metadata. In that case, you may see lineage within the BI metadata, but not between the BI metadata and data sources. If this happens, no worriesâjust rerun your existing workflows following the recommended order and Atlan can resolve it.

**Did you know?**As a general rule of thumb, start by crawling the data sourceâincluding BI toolsâbefore mining query logs. For example, when aiming to mine Microsoft Power BI, begin with a crawl of Microsoft Power BI.

Workflow recommendations[â](#workflow-recommendations "Direct link to Workflow recommendations")
--------------------------------------------------------------------------------------------------

The following are general guidelines and best practices for running workflows in Atlan:

* Schedule your workflows based on how often you want your metadata in Atlan to be updated \- weekly, monthly, and so on. To configure custom cron schedules, learn more [here](/faq/workflows-and-data-processing#how-do-i-configure-custom-cron-schedules).
* Avoid any overlaps between workflow schedules to ensure consistent workflow run times.
* Remember that the first workflow run can typically take much longer than subsequent runs. The first run establishes the connection, queries the source, extracts and transforms the metadata, and then publishes your assets for the first time in Atlan.
* If running a miner for the first time, set a start date around 3 days prior to the current date and then schedule it daily to build up to two weeks of query history. Mining two weeks of query history on the first miner run may cause workflows to time out or hit resource consumption errors.
* For all subsequent miner runs, Atlan requires a minimum lag of 24 to 48 hours to capture all the relevant transformations that were part of a session. Learn more about the miner logic [here](/product/capabilities/lineage/troubleshooting/troubleshooting-lineage).
* Run [preflight checks](/product/connections/concepts/what-are-preflight-checks) before running the crawler to check for any permissions or other configuration issues, including testing authentication.

Troubleshooting tips[â](#troubleshooting-tips "Direct link to Troubleshooting tips")
--------------------------------------------------------------------------------------

Here are a few tips to help you troubleshoot workflow failures in Atlan:

* If test authentication or [preflight checks](/product/connections/concepts/what-are-preflight-checks) fail, check the source to ensure that your credentials are correct and you have requisite access to crawl the metadata.
* If you're connecting to Atlan via private link and experience any network\-related errors or timeouts during test authentication, it may mean that there is a network connectivity issue between the source and Atlan. [Reach out to Atlan support](/support/submit-request) to help you investigate further.
* If both test authentication and preflight checks fail and succeed intermittently when tried multiple times, this may mean that your cluster is in an unstable state and needs to be restarted. [Notify Atlan support](/support/submit-request) to restart your cluster.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousMine queries through S3](/product/connections/how-tos/mine-queries-through-s3)[NextHow to provide SSL certificates](/product/connections/how-tos/provide-ssl-certificates)

Copyright Â© 2025 Atlan Pte. Ltd.

