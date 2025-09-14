# Source URL
https://docs.atlan.com/apps/connectors/observability/monte-carlo/references/what-does-atlan-crawl-from-monte-carlo

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/observability/monte-carlo/references/what-does-atlan-crawl-from-monte-carlo
link-alternate: https://docs.atlan.com/apps/connectors/observability/monte-carlo/references/what-does-atlan-crawl-from-monte-carlo
meta-description: What does Atlan crawl from Monte Carlo? <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: What does Atlan crawl from Monte Carlo? <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-og-locale: en
meta-og-title: What does Atlan crawl from Monte Carlo? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/observability/monte-carlo/references/what-does-atlan-crawl-from-monte-carlo
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Monte Carlo? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Monte Carlo? [Private Preview](/get-started/references/product-release-stages#private-preview)
=========================================================================================================================

Atlan supports both automated and custom monitors as native assets for search and discovery. Atlan also supports crawling incidents for all [types of monitors](https://docs.getmontecarlo.com/docs/monitors-overview).

Once you've [crawled Monte Carlo](/apps/connectors/observability/monte-carlo/how-tos/crawl-monte-carlo), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu)Â to search for your Monte Carlo assets as well as assets from other supported sources to which Monte Carlo monitors have been applied \- for example, Snowflake tables.

The following filters are currently supported for Monte Carlo assets:

* Monitor type \- filter monitors by type of monitor
* Monitor status \- filter monitors by monitor status
* Incident count \- filter monitors by the total count of incidents
* Last synced in Atlan \- filter monitors by timestamp for last updated in Atlan

The following Monte Carlo filters are currently available for supported SQL assets:

* Monitor status \- filter SQL assets associated with any monitors by monitor status
* Monitor type \- filter SQL assets associated with any monitors by type of monitor
* Alert priority \- filter SQL assets by priority level of alerts, ranging from 1 to 4
* Alert type \- filter SQL assets by specific types of alerts
* Incident severity \- filter SQL assets by severity level of incidents, ranging from 1 to 4
* Alert subtype \- filter SQL assets by alert subtypes
* Alert status \- filter SQL assets by specific [alert statuses](https://docs.getmontecarlo.com/docs/incident-statuses)
* Alert owner \- filter SQL assets by alert owners
* Last synced in Atlan \- filter SQL assets by timestamp for when any associated monitors and incidents were updated in Atlan

Atlan crawls and maps the following assets and properties from Monte Carlo.

Monitors[â](#monitors "Direct link to Monitors")
--------------------------------------------------

Atlan maps automated and custom monitors from Monte Carlo to its `MCMonitor` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `Audience` | `mcLabels` |
| `uuid` | `mcMonitorId` |
| `monitorStatus` | `mcMonitorStatus` |
| `monitorType` | `mcMonitorType` |
| `warehouseName` | `mcMonitorWarehouse` |
| `scheduleType` | `mcMonitorScheduleType` |
| `namespace` | `mcMonitorNamespace` |
| `ruleType` | `mcMonitorRuleType` |
| `ruleSql` | `mcMonitorRuleCustomSql` |
| `scheduleConfig` | `mcMonitorRuleScheduleConfig` |
| `ruleComparisons` | `mcMonitorRuleComparisons` |
| `monitorUrl` | `sourceUrl` |
| `breachRate` | `mcMonitorBreachRate` |
| `scheduleConfig` | `mcMonitorRuleScheduleConfigHumanized` |
| `alertCondition` | `mcMonitorAlertCondition` |
| `priority` | `mcMonitorPriority` |
| `isOotbMonitor` | `mcMonitorIsOotb` |

Alerts and incidents[â](#alerts-and-incidents "Direct link to Alerts and incidents")
--------------------------------------------------------------------------------------

Atlan maps alerts and incidents from Monte Carlo to its `MCIncident` asset type.

Alerts inherit priority levels from custom monitors. If an alert is confirmed as an issue or requires resolution, Monte Carlo enables you to mark it as an incident and apply a severity level. Atlan will display the status of your assets at source. Refer to [Monte Carlo documentation](https://docs.getmontecarlo.com/docs/introducing-alerts) to learn more.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `tableLinked` | `mcAssetReferences` |
| `uuid` | `mcIncidentId` |
| `incidentType` | `mcIncidentType` |
| `incidentSubTypes` | `mcIncidentSubTypes` |
| `severity` | `mcIncidentSeverity` |
| `feedback` | `mcIncidentState` |
| `warehouse.name` | `mcIncidentWarehouse` |
| `incidentOwner` | `sourceOwners` |
| `incidentUrl` | `sourceUrl` |
| `priority` | `mcIncidentPriority` |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl Monte Carlo](/apps/connectors/observability/monte-carlo/how-tos/crawl-monte-carlo)[NextPreflight checks for Monte Carlo](/apps/connectors/observability/monte-carlo/references/preflight-checks-for-monte-carlo)

Copyright Â© 2025 Atlan Pte. Ltd.

