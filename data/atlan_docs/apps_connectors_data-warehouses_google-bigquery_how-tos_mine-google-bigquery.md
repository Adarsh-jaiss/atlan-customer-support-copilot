# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery
meta-description: Once you have [crawled assets from Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery), you can mine its query history to construct lineage.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [crawled assets from Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery), you can mine its query history to construct lineage.
meta-og-locale: en
meta-og-title: Mine Google BigQuery | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Mine Google BigQuery | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Mine Google BigQuery
====================

[https://demo.arcade.software/CIhWVRW2Nkv2zn8Fp5Sj?embed](https://demo.arcade.software/CIhWVRW2Nkv2zn8Fp5Sj?embed)

Once you have [crawled assets from Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery), you can mine its query history to construct lineage.

To mine lineage from Google BigQuery, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the miner[â](#select-the-miner "Direct link to Select the miner")
--------------------------------------------------------------------------

To select the Google BigQuery miner:

1. In the top right of any screen, navigate toÂ**New** and then clickÂ**New Workflow**.
2. From the filters along the top, click **Miner**.
3. From the list of packages, select **BigQuery Miner** and then click **Setup Workflow**.

Configure the miner[â](#configure-the-miner "Direct link to Configure the miner")
-----------------------------------------------------------------------------------

To configure the Google BigQuery miner:

1. For *Connection*, select the connection to mine. (To select a connection, [the crawler](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery) must have already run.)
2. For *Miner Extraction Method*, select **Query History**.
3. For *Start time*, choose the earliest date from which to mine query history.

    info ðª **Did you know?** The miner restricts you to only querying the past two weeks of query history. If you need to query more history, for example in an initial load, consider using the [S3 miner](/product/connections/how-tos/mine-queries-through-s3) first. After the initial load, you can [modify the miner's configuration](/product/connections/how-tos/manage-connectivity) to use query history extraction.
4. (Optional) By default, the miner fetches data from the US region. To fetch data from [another region](https://cloud.google.com/bigquery/docs/locations), for *Region*, select **Custom** and then enter the region where your `INFORMATION_SCHEMA` is hosted under *Custom BigQuery Region*. Enter the region in the [following format](https://cloud.google.com/bigquery/docs/information-schema-intro#region_qualifier) `region-<REGION>`, replacing `<REGION>` with your specific region \- for example, `europe-north1`.
5. To check for any permissions or other configuration issues before running the miner, click **Preflight checks**.
6. At the bottom of the screen, click **Next** to proceed.

dangerIf running the miner for the first time, Atlan recommends setting a start date roughly three days prior to the current date and then scheduling it daily to build up to two weeks of query history. Mining two weeks of query history on the first miner run may cause delays. Atlan requires a minimum lag of 24 to 48 hours to capture all the relevant transformations that were part of a session. Learn more about the miner logic [here](/product/capabilities/lineage/troubleshooting/troubleshooting-lineage#miner-logic).

Configure the miner behavior[â](#configure-the-miner-behavior "Direct link to Configure the miner behavior")
--------------------------------------------------------------------------------------------------------------

To configure the Google BigQuery miner behavior:

1. (Optional) For *Calculate popularity*, change to **True** to retrieve [usage and popularity metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for your Google BigQuery assets from query history:
    1. To select a [pricing model for running queries](https://cloud.google.com/bigquery/pricing), for *Pricing Model*, click **On Demand** to be charged for the number of bytes processed or **Flat Rate** for the number of slots purchased.
    2. For *Popularity Window (days)*, 30 days is the maximum limit. You can set a shorter popularity window of less than 30 days.
    3. For *Excluded Users*, type the names of users to be excluded while calculating [usage metrics](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics) for Google BigQuery assets. Press `enter` after each name to add more names.
2. (Optional) For *Control Config*, click **Custom** to configure the following:
    1. For *Fetch excluded project's QUERY\_HISTORY*, click **Yes** to mine query history from databases or projects excluded while [crawling metadata from Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery).
    2. If Atlan support has provided you with a custom control configuration,Â enter the configuration into theÂ*Custom Config* box. You can also:
        * (Optional) Enter `{âignore-all-caseâ: true}` to enable crawling assets with case\-sensitive identifiers.

Run the miner[â](#run-the-miner "Direct link to Run the miner")
-----------------------------------------------------------------

To run the Google BigQuery miner, after completing the steps above:

* To run the miner once immediately, at the bottom of the screen, click the **Run** button.
* To schedule the miner to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the miner has completed running, you will see lineage for Google BigQuery assets that were created in Google BigQuery between the start time and when the miner ran! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousCrawl Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery)[NextManage Google BigQuery tags](/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags)

Copyright Â© 2025 Atlan Pte. Ltd.

