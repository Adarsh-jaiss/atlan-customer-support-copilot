# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/fivetran/references/what-does-atlan-crawl-from-fivetran

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/references/what-does-atlan-crawl-from-fivetran
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/references/what-does-atlan-crawl-from-fivetran
meta-description: Learn about what does atlan crawl from fivetran?.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about what does atlan crawl from fivetran?.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Fivetran? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/references/what-does-atlan-crawl-from-fivetran
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Fivetran? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Fivetran?
====================================

Lineage[â](#lineage "Direct link to Lineage")
-----------------------------------------------

Atlan uses Fivetran's log events from the Fivetran Platform Connector to generate lineage associated with [Fivetran connectors](https://fivetran.com/docs/getting-started/core-concepts). This is particularly useful for creating lineage between different tools, such as Salesforce and Snowflake.

dangerThe assets involved in lineage (tables, columns, objects, fields, and so on) must already be crawled by Atlan before running the [Fivetran Enrichment](/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran) package to enrich them.

Specifically, Atlan will:

* Create lineage between each data asset in Atlan that is associated with a Fivetran connector. (For example, between Salesforce objects and Snowflake tables.)
    + Atlan creates Fivetran `Process` objects for each data asset that is replicated.
    + Atlan creates column\-level lineage to connect the sources (inputs) and destinations (outputs) of each `Process`. (For example, between Salesforce fields and Snowflake columns.)
* Link each `Process` to its corresponding connector in the Fivetran UI.
* For any Fivetran sources or destinations that are not natively supported or are supported but have not been crawled yet, Atlan will create [partial assets](/product/capabilities/lineage/concepts/what-are-partial-assets) to provide you with a complete view of lineage.

Supported sources and destinations for Fivetran Platform Connector[â](#supported-sources-and-destinations-for-fivetran-platform-connector "Direct link to Supported sources and destinations for Fivetran Platform Connector")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Sources[â](#sources "Direct link to Sources")

Atlan's Fivetran Platform Connector integration supports all sources listed in [Fivetran documentation](https://fivetran.com/docs/connectors) for lineage.

For any sources that are not natively supported or are [supported](/product/connections/references/supported-sources) but have not been crawled yet, Atlan will create [partial assets](/product/capabilities/lineage/concepts/what-are-partial-assets) to provide you with a complete view of lineage. Note that Atlan will only catalog partial column assets and generate column\-level lineage for [SQL sources natively supported in Atlan](/product/connections/references/supported-sources).

### Destinations[â](#destinations "Direct link to Destinations")

Atlan's Fivetran Platform Connector integration supports all destinations listed in [Fivetran documentation](https://fivetran.com/docs/destinations) for lineage.

For any destinations that are not natively supported or are [supported](/product/connections/references/supported-sources) but have not been crawled yet, Atlan will create [partial assets](/product/capabilities/lineage/concepts/what-are-partial-assets) to provide you with a complete view of lineage. Note that Atlan will only catalog partial column assets and generate column\-level lineage for [SQL sources natively supported in Atlan](/product/connections/references/supported-sources).

Note that for [crawler configuration](/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran), only the [destinations listed here](/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran) are supported.

### Connectors[â](#connectors "Direct link to Connectors")

Atlan maps the following metadata from Fivetran to its `FivetranConnector` asset type. This is only applicable to metadata crawled using the Fivetran Platform Connector.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `connector.NAME` | `fivetranConnectorConnectorName` | overview sidebar |
| `connector_type.ID` | `fivetranConnectorConnectorType` | overview sidebar |
| dynamically created by script | `fivetranConnectorConnectorURL` | overview sidebar |
| `destination.NAME` | `fivetranConnectorDestinationName` | overview sidebar |
| `destination.TYPE` | `fivetranConnectorDestinationType` | overview sidebar |
| dynamically created by script | `fivetranConnectorDestinationURL` | overview sidebar |
| `connector.SIGNED_UP` | `fivetranConnectorSyncSetupOn` | overview sidebar |
| `connector.SYNC_FREQUENCY` | `fivetranConnectorSyncFrequency` | overview sidebar |
| `connector.PAUSED` | `fivetranConnectorSyncPaused` | API only |
| `user.GIVEN_NAME` \+ `user.FAMILY_NAME` | `fivetranConnectorSyncSetupUserFullName` | API only |
| `connector.USER_EMAIL` | `fivetranConnectorSyncSetupUserEmail` | API only |
| `incremental_mar. INCREMENTAL_ROWS` | `fivetranConnectorMonthlyActiveRowsFree` | overview sidebar |
| `incremental_mar. INCREMENTAL_ROWS` | `fivetranConnectorMonthlyActiveRowsPaid` | overview sidebar |
| `fivetranConnectorMonthlyActiveRowsFree` \+ `fivetranConnectorMonthlyActiveRowsPaid` | `fivetranConnectorMonthlyActiveRowsTotal` | API only |
| calculated by script | `fivetranConnectorMonthlyActiveRowsChangePercentageFree` | API only |
| calculated by script | `fivetranConnectorMonthlyActiveRowsChangePercentagePaid` | API only |
| calculated by script | `fivetranConnectorMonthlyActiveRowsChangePercentageTotal` | overview sidebar |
| calculated by script | `fivetranConnectorMonthlyActiveRowsFreePercentageOfAccount` | API only |
| calculated by script | `fivetranConnectorMonthlyActiveRowsPaidPercentageOfAccount` | overview sidebar |
| calculated by script | `fivetranConnectorMonthlyActiveRowsTotalPercentageOfAccount` | API only |
| dynamically generated by script | `sourceURL` | overview sidebar |
| `connector_type.CREATED_AT` | `sourceCreatedAt` | asset preview, profile, and filter, overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncId` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncStartedAt` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncFinishedAt` | overview sidebar |
| calculated from `LOG` table | `fivetranLastSyncStatusfivetranConnectorLastSyncReason` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncTaskType` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncRescheduledAt` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncTablesSynced` | overview sidebar |
| calculated from `LOG` table | `fivetranLastSyncRecordsUpdated` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncExtractTimeSeconds` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncExtractVolumeMegabytes` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncLoadTimeSeconds` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncLoadVolumeMegabytes` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncProcessTimeSeconds` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncProcessVolumeMegabytes` | overview sidebar |
| calculated from `LOG` table | `fivetranConnectorLastSyncTotalTimeSeconds` | overview sidebar |

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [configuration](/tags/configuration)

[PreviousCrawl Fivetran](/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran)[NextTroubleshooting Fivetran connectivity](/apps/connectors/etl-tools/fivetran/troubleshooting/troubleshooting-fivetran-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

