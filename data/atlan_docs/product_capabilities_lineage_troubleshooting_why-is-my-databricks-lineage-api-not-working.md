# Source URL
https://docs.atlan.com/product/capabilities/lineage/troubleshooting/why-is-my-databricks-lineage-api-not-working

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/lineage/troubleshooting/why-is-my-databricks-lineage-api-not-working
link-alternate: https://docs.atlan.com/product/capabilities/lineage/troubleshooting/why-is-my-databricks-lineage-api-not-working
meta-description: Learn about why is my databricks lineage api not working?.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about why is my databricks lineage api not working?.
meta-og-locale: en
meta-og-title: Why is my Databricks lineage API not working? | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/lineage/troubleshooting/why-is-my-databricks-lineage-api-not-working
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Why is my Databricks lineage API not working? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Why is my Databricks lineage API not working?
=============================================

Your Databricks workspace must be [Unity Catalog\-enabled](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html) to successfully extract lineage using APIs. The data lineage API is not supported if you're using Hive metastore. You will need to [migrate your Hive tables and views](https://docs.databricks.com/en/data-governance/unity-catalog/migrate.html) to Unity Catalog.

Atlan recommends extracting lineage for your Databricks assets using [system tables](https://docs.databricks.com/en/admin/system-tables/index.html#grant-access-to-system-tables). You must have a Unity Catalog\-enabled workspace to use system tables. See [How to set up Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks).

**Tags:*** [lineage](/tags/lineage)
* [data\-lineage](/tags/data-lineage)
* [impact\-analysis](/tags/impact-analysis)
* [api](/tags/api)
* [rest\-api](/tags/rest-api)
* [graphql](/tags/graphql)
* [catalog](/tags/catalog)
* [metadata](/tags/metadata)
* [discovery](/tags/discovery)

[PreviousTroubleshooting lineage](/product/capabilities/lineage/troubleshooting/troubleshooting-lineage)

Copyright Â© 2025 Atlan Pte. Ltd.

