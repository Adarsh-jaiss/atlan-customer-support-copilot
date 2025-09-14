# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/matillion/references/what-lineage-does-atlan-extract-from-matillion

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/matillion/references/what-lineage-does-atlan-extract-from-matillion
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/matillion/references/what-lineage-does-atlan-extract-from-matillion
meta-description: Atlan uses Matillion's metadata API to generate lineage associated with [Matillion connectors](https://www.matillion.com/connectors). This is particularly useful for creating lineage between different tools.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan uses Matillion's metadata API to generate lineage associated with [Matillion connectors](https://www.matillion.com/connectors). This is particularly useful for creating lineage between different tools.
meta-og-locale: en
meta-og-title: What lineage does Atlan extract from Matillion? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/matillion/references/what-lineage-does-atlan-extract-from-matillion
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What lineage does Atlan extract from Matillion? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What lineage does Atlan extract from Matillion?
===============================================

Atlan uses Matillion's metadata API to generate lineage associated with [Matillion connectors](https://www.matillion.com/connectors). This is particularly useful for creating lineage between different tools.

Due to limitations in metadata provisioning at source, Atlan currently only supports lineage for data transformations between Snowflake tables as both source and destination. The related Matillion processes neither have asset profiles nor are they discoverable. Atlan recommends upgrading to the latest version of [Matillion ETL](https://docs.matillion.com/metl/docs/release-notes-index/) to allow for enhanced metadata provisioning.

dangerThe assets involved in lineage (tables, columns, and so on) must already be [crawled by Atlan](/apps/connectors/etl-tools/matillion/references/what-lineage-does-atlan-extract-from-matillion) before running the [MatillionÂ package](/apps/connectors/etl-tools/matillion/how-tos/crawl-matillion) to enrich them.

Specifically, Atlan will:

* Create lineage between each data asset in Atlan that is associated with a Matillion connector. (For example, between Snowflake tables and columns.)
    + Atlan creates Matillion `Process` objects for each data asset that is replicated. Learn more about [processes](/product/capabilities/lineage/concepts/what-are-processes) here.

Supported sources and destinations[â](#supported-sources-and-destinations "Direct link to Supported sources and destinations")
--------------------------------------------------------------------------------------------------------------------------------

### Sources[â](#sources "Direct link to Sources")

Atlan's Matillion integration supports the following sources:

* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)

### Destinations[â](#destinations "Direct link to Destinations")

Atlan's Matillion integration supports the following destinations:

* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)

**Did you know?**We welcome feedback \- have a burning need for another source or destination? Please [let us know](https://portal.productboard.com/de8qnhczp6hafpf83cnhjctz/tabs/45-released)!

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousWhat does Atlan crawl from Matillion?](/apps/connectors/etl-tools/matillion/references/what-does-atlan-crawl-from-matillion)[NextTroubleshooting Matillion connectivity](/apps/connectors/etl-tools/matillion/troubleshooting/troubleshooting-matillion-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

