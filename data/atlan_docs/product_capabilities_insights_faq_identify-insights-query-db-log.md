# Source URL
https://docs.atlan.com/product/capabilities/insights/faq/identify-insights-query-db-log

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/insights/faq/identify-insights-query-db-log
link-alternate: https://docs.atlan.com/product/capabilities/insights/faq/identify-insights-query-db-log
meta-description: Atlan appends the product name Atlan and a unique ID at the end of each query in a comment. This can help you identify queries from Insights in your database access logs.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan appends the product name Atlan and a unique ID at the end of each query in a comment. This can help you identify queries from Insights in your database access logs.
meta-og-locale: en
meta-og-title: How can I identify an Insights query in my database access log? | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/insights/faq/identify-insights-query-db-log
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: How can I identify an Insights query in my database access log? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

How can I identify an Insights query in my database access log?
===============================================================

Atlan appends the product name `Atlan` and a unique ID at the end of each query in a comment. This can help you identify [queries](/product/capabilities/insights/how-tos/query-data) from Insights in your database access logs.

Example query:

```
SELECT * FROM "WIDE_WORLD_IMPORTERS"."FCT_SALES"  
  /* atlan(e7674c86-efbe-4cec-a3dd-f9b3e3a7f929) */  

```
You can also search for Atlan queries in [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) or [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks) using the `query text` filter contains `atlan`.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [faq](/tags/faq)
* [faq\-insights](/tags/faq-insights)

[PreviousCan we restrict who can query our data warehouse?](/product/capabilities/insights/faq/restrict-querying-data-warehouse)[NextMonitor for runaway queries?](/product/capabilities/insights/faq/monitor-runaway-queries)

Copyright Â© 2025 Atlan Pte. Ltd.

