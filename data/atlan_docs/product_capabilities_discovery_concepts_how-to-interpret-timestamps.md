# Source URL
https://docs.atlan.com/product/capabilities/discovery/concepts/how-to-interpret-timestamps

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/discovery/concepts/how-to-interpret-timestamps
link-alternate: https://docs.atlan.com/product/capabilities/discovery/concepts/how-to-interpret-timestamps
meta-description: Learn about how to interpret timestamps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about how to interpret timestamps.
meta-og-locale: en
meta-og-title: How to interpret timestamps | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/discovery/concepts/how-to-interpret-timestamps
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: How to interpret timestamps | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

How to interpret timestamps
===========================

Atlan displays timestamps for assets in local timezones based on the location of your browser. The date and time display includes a combination of the following components:

* Relative time \- for example, *2 hours ago*, *1 day ago*, *3 months ago*
* Absolute time \- for example, *Mar 14, 2024, 9:40:01 AM*

Atlan displays the following timestamps in the asset sidebar:

Overview tab[â](#overview-tab "Direct link to Overview tab")
--------------------------------------------------------------

* **Usage** \- timestamp for the number of read queries on an asset at [source](/product/connections/references/supported-sources) within a specific date range, as fetched from the miner run. This also includes an absolute time value for *Last usage data updated (in Atlan)*. Only applicable to data sources for which Atlan supports mining query history.
* **Last queried** \- timestamp for the latest read query on an assetÂ at [source](/product/connections/references/supported-sources) as fetched from the miner run or in Atlan within a specific date range. Only applicable to data sources for which Atlan supports mining query history.
* **dbt run status** \- status and timestamp for the last run of the dbt job updating an asset in dbt, as fetched from a [dbt crawler](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt) run.

Usage tab[â](#usage-tab "Direct link to Usage tab")
-----------------------------------------------------

* **Row update frequency** \- timestamps for recent row updates on an asset at [source](/product/connections/references/supported-sources) within a specific date range, as fetched from the miner run. Only applicable to data sources for which Atlan supports mining query history. Up to five recent row updates will be displayed, if available.

Properties tab[â](#properties-tab "Direct link to Properties tab")
--------------------------------------------------------------------

* **Last updated (in Atlan)** \- timestamp for when any metadata attribute of the asset was last updated in Atlan. For example, when you [linked a term](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets) or [added a certificate](/product/capabilities/discovery/how-tos/add-certificates) to an asset in Atlan.
* **Last synced with source**Â \- timestamp for when a workflow run last checked for this asset at [source](/product/connections/references/supported-sources). This timestamp also includes a link to the connection workflow.
* **Created (in Atlan)** \- timestamp for when this asset was first created and published in Atlan during a crawler run.
* **Last updated (on source)** \- timestamp for when any metadata for the asset was last altered at [source](/product/connections/references/supported-sources), as fetched from the crawler run.
* **Created at (on source)** \- timestamp for when the asset was first created at [source](/product/connections/references/supported-sources), as fetched from the crawler run.

Frequently asked questions[â](#frequently-asked-questions "Direct link to Frequently asked questions")
--------------------------------------------------------------------------------------------------------

#### Why are metrics missing after miner runs?[â](#why-are-metrics-missing-after-miner-runs "Direct link to Why are metrics missing after miner runs?")

If you notice a time lag from when your miner workflows last ran, note that Atlan requires a minimum lag of 24 to 48 hours to capture all the relevant transformations that were part of a session. (Read more about miner logic [here](/product/capabilities/lineage/troubleshooting/troubleshooting-lineage).) This may also depend on when your miner workflow was scheduled to run, which you can [modify](/product/connections/how-tos/manage-connectivity) at any time.

#### Why do some timestamps have variable time ranges?[â](#why-do-some-timestamps-have-variable-time-ranges "Direct link to Why do some timestamps have variable time ranges?")

Miners have a configurable property that governs the window of time for which metrics are reported. If a miner has been failing consistently, Atlan may reduce this window from 30 to only 14 days for reporting metrics. This is applicable to all date and time properties populated by miners.

#### Is last updated in Atlan the same as last synced with source?[â](#is-last-updated-in-atlan-the-same-as-last-synced-with-source "Direct link to Is last updated in Atlan the same as last synced with source?")

No, *Last updated (in Atlan)* records the time when any metadata is updated on the asset in Atlan while *Last synced with source* records the time when a workflow ran successfully updating the asset with changes from source, if any. If no metadata updates were made on the asset in Atlan before the next scheduled workflow run,Â*Last synced with source*Â may be considered as the more current timestamp reflecting any or no changes on the asset as fetched from source.

#### Why are there discrepancies in time for some miner\-related timestamps?[â](#why-are-there-discrepancies-in-time-for-some-miner-related-timestamps "Direct link to Why are there discrepancies in time for some miner-related timestamps?")

For timestamps related to miner runs:

* If no one has queried the asset at source, the timestamp for *Last queried* may be older than the date range recorded for *Usage*.
* If no one has used the asset at source for the duration of time that query history was mined, *Row update frequency* may not display any time value.
* Even when a miner run fails, it partially publishes assets, resulting in inconsistencies. For example, the date range in the *Last queried* tooltip may be for a successful miner run but the absolute time may be a different value if the asset had been partially published.
**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousHow do I use the filters menu?](/product/capabilities/discovery/how-tos/how-do-i-use-the-filters-menu)[NextWhat are asset profiles?](/product/capabilities/discovery/concepts/what-are-asset-profiles)

Copyright Â© 2025 Atlan Pte. Ltd.

