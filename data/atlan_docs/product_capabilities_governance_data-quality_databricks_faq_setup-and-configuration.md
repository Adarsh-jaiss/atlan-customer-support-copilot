# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/faq/setup-and-configuration

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/faq/setup-and-configuration
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/faq/setup-and-configuration
meta-description: Common questions about Databricks data quality setup and configuration.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Common questions about Databricks data quality setup and configuration.
meta-og-locale: en
meta-og-title: Setup and configuration | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/databricks/faq/setup-and-configuration
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Setup and configuration | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Setup and configuration
=======================

This document answers common questions about prerequisites, permissions, and environment settings required to run Atlanâs Data Quality Studio on Databricks.

### What Databricks edition is required for data quality?[â](#what-databricks-edition-is-required-for-data-quality "Direct link to What Databricks edition is required for data quality?")

Atlan DQ support for Databricks is supported only on Premium and Enterprise tiers of Databricks.

### What administrative access is required?[â](#what-administrative-access-is-required "Direct link to What administrative access is required?")

The user performing the setup must be:

* A Workspace admin; and
* A Metastore Admin or have `CREATE CATALOG` privilege on the metastore linked to the workspace

### Is serverless compute required?[â](#is-serverless-compute-required "Direct link to Is serverless compute required?")

Yes, your workspace must have the following feature enabled:

* Serverless Compute for Jobs \& Notebooks

This is required to permit execution of Atlan's DQ jobs in your Databricks Workspace using Serverless compute.

### What SQL warehouse is recommended?[â](#what-sql-warehouse-is-recommended "Direct link to What SQL warehouse is recommended?")

A dedicated SQL warehouse must be identified for running DQ\-related queries. While Atlan supports any SQL Warehouse, Atlan recommends using a Serverless SQL Warehouse for faster startup times.

### Is network access configuration required?[â](#is-network-access-configuration-required "Direct link to Is network access configuration required?")

Outbound Network Access Must Be Allowed from Serverless Compute: Databricks Serverless Compute uses network policies to control outbound traffic \[only for Enterprise tier]. Verify that outbound connectivity to Atlan is permitted from the Serverless environment.

### What Atlan prerequisites are needed?[â](#what-atlan-prerequisites-are-needed "Direct link to What Atlan prerequisites are needed?")

Before integrating with Databricks, you need to generate an API token in Atlan. This token is securely stored in Databricks in a secret and used to authenticate API requests from within Databricks.

### Can I enable data quality on multiple connections?[â](#can-i-enable-data-quality-on-multiple-connections "Direct link to Can I enable data quality on multiple connections?")

Currently, you can only enable data quality on one connection in Atlan. If you wish to enable it on another connection, [raise a support request](/support/submit-request).

### How long does the setup take?[â](#how-long-does-the-setup-take "Direct link to How long does the setup take?")

After completing the setup steps, Atlan takes approximately 10 minutes to complete the setup in the background. Once finished, you'll see data quality options available on your Databricks assets.

### Can I use private channels for alerts?[â](#can-i-use-private-channels-for-alerts "Direct link to Can I use private channels for alerts?")

Only public channels are supported for data quality alerts. Alerts can't be routed to private channels or Direct Messages at this time.

**Tags:*** [databricks](/tags/databricks)
* [data\-quality](/tags/data-quality)
* [faq](/tags/faq)
* [troubleshooting](/tags/troubleshooting)

[PreviousEnable data quality on connection](/product/capabilities/governance/data-quality/databricks/how-tos/enable-data-quality)

Copyright Â© 2025 Atlan Pte. Ltd.

