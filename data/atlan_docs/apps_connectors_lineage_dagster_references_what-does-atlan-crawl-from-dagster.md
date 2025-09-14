# Source URL
https://docs.atlan.com/apps/connectors/lineage/dagster/references/what-does-atlan-crawl-from-dagster

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/lineage/dagster/references/what-does-atlan-crawl-from-dagster
link-alternate: https://docs.atlan.com/apps/connectors/lineage/dagster/references/what-does-atlan-crawl-from-dagster
meta-description: Learn about the Dagster metadata that Atlan captures and visualizes
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about the Dagster metadata that Atlan captures and visualizes
meta-og-locale: en
meta-og-title: What does Atlan crawl from Dagster | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/lineage/dagster/references/what-does-atlan-crawl-from-dagster
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Dagster | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Dagster [Private Preview](/get-started/references/product-release-stages#private-preview)
====================================================================================================================

Dagster assets are crawled in as the FlowControlOperation Atlan type. This reference provides details about the metadata attributes that Atlan captures from Dagster and where they appear in the Atlan interface.

Metadata attributes[â](#metadata-attributes "Direct link to Metadata attributes")
-----------------------------------------------------------------------------------

| Source Attribute | Atlan Attribute | Where in Atlan |
| --- | --- | --- |
| Asset Key | `name` | Asset profile and overview sidebar |
| Description | `description` | Asset profile and overview sidebar |
| Organization | `flowProjectName` | Overview sidebar |
| Asset Group | `flowFolderName` | Asset profile and overview sidebar |
| Latest Materialization Run Id | `flowRunId` | Overview sidebar |
| Latest Materialization Run Timestamp | `flowStartedAt` | Overview sidebar |
| Partition Key \[`dagster/partition`] | `flowInputParameters.dagsterPartitionKey` | API only |
| Latest Materialization Job Name | `flowInputParameters.dagsterJobName` | API only |
| Kinds \[`dagster/kind`] | `flowInputParameters.dagsterKinds` | API only |
| Latest Materialization Error Message | `flowErrorMessage` | Overview sidebar |
| Latest Materialization Status | `flowStatus` | Asset profile and overview sidebar |
| Owners \[ref] | `ownerUsers` | Overview sidebar |
| Tables \[`dagster/table_name`] | `flowDataResults` | Relations tab in sidebar |

**Tags:*** [connectors](/tags/connectors)
* [dagster](/tags/dagster)
* [lineage](/tags/lineage)
* [metadata](/tags/metadata)
* [reference](/tags/reference)

[PreviousCrawl Dagster assets](/apps/connectors/lineage/dagster/how-tos/crawl-dagster)[NextDagster integration](/apps/connectors/lineage/dagster/faq/faq-dagster)

Copyright Â© 2025 Atlan Pte. Ltd.

