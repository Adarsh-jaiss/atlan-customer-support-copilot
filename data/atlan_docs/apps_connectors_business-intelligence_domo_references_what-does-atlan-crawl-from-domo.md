# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/domo/references/what-does-atlan-crawl-from-domo

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/domo/references/what-does-atlan-crawl-from-domo
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/domo/references/what-does-atlan-crawl-from-domo
meta-description: Atlan supports lineage for the following asset types:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports lineage for the following asset types:.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Domo? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/domo/references/what-does-atlan-crawl-from-domo
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Domo? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Domo?
================================

Atlan supports lineage for the following asset types:

* [Datasets](#datasets-) \- upstream lineage to Google BigQuery and Snowflake data sources. Domo currently only supports upstream lineage for the following dataset types:
    + [Google BigQuery High Bandwidth Service connector](https://domo-support.domo.com/s/article/360060507713?language=en_US)
    + [Snowflake connector](https://domo-support.domo.com/s/article/360042931814?language=en_US) with *Query Type* as *Enter Query*
    + [Google BigQuery Service Connector](https://domo-support.domo.com/s/article/360043436593?language=en_US) with report type as query. Note that this is currently only supported when `queryParameter` is blank and `queryType` is `standardSQL`.
    + [Snowflake Federated Data](https://domo-support.domo.com/s/article/360049429094?language=en_US) with basic authentication and Snowflake OAuth. To configure Snowflake OAuth\-based access from Domo, please reach out to [Domo support](https://www.domo.com/login/customer-community).
* [Cards](#cards-) \- upstream lineage to Domo datasets
* [Dashboards](#dashboards-) \- upstream lineage to Domo cards

Atlan crawls and maps the following assets and properties from Domo.

dangerCurrently, Atlan only represents the assets marked with ð in lineage.

Datasets ð[â](#datasets- "Direct link to Datasets ð")
-------------------------------------------------------------

Atlan maps datasets from Domo to its `DomoDataset` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset preview and profile, overview sidebar |
| `description` | `description` | asset preview and profile, overview sidebar |
| `id` | `DomoId` | API only |
| `owner.name` | `sourceCreatedBy` | overview sidebar |
| `owner.id` | `domoOwnerId` | API only |
| `rows` | `domoDatasetRowCount` | asset profile and overview sidebar |
| `columns` | `domoDatasetColumnCount` | asset preview and profile, overview sidebar |
| `dataCurrentAt` | `domoDatasetLastRun` | API only |
| `createdAt` | `sourceCreatedAt` | asset preview and profile, properties sidebar |
| `updatedAt` | `sourceUpdatedAt` | asset preview and profile, properties sidebar |
| calculated using dataset\-card relationship API | `domoDatasetCardCount` | asset preview and profile, overview sidebar |

Dataset columns[â](#dataset-columns "Direct link to Dataset columns")
-----------------------------------------------------------------------

Atlan maps dataset columns from Domo to its `DomoDatasetColumn` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset preview and profile, overview sidebar |
| `type` | `domoDatasetColumnType` | overview sidebar |

Dashboards ð[â](#dashboards- "Direct link to Dashboards ð")
-------------------------------------------------------------------

Atlan maps dashboards from Domo to its `DomoDashboard` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset preview and profile, overview sidebar |
| `id` | `domoId` | API only |
| calculated using card\-dashboard relationship API | `domoDashboardCardCount` | asset preview and profile, overview sidebar |

Cards ð[â](#cards- "Direct link to Cards ð")
----------------------------------------------------

Atlan maps cards from Domo to its `DomoCard` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `cardTitle` | `name` | asset preview and profile, overview sidebar |
| `id` | `domoId` | API only |
| `type` | `domoCardType` | overview sidebar |
| `lastModified` | `sourceUpdatedAt` | asset preview and profile, properties sidebar |
| calculated using card\-dashboard relationship API | `domoCardDashboardCount` | asset preview and profile, overview sidebar |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousCrawl Domo](/apps/connectors/business-intelligence/domo/how-tos/crawl-domo)[NextPreflight checks for Domo](/apps/connectors/business-intelligence/domo/references/preflight-checks-for-domo)

Copyright Â© 2025 Atlan Pte. Ltd.

