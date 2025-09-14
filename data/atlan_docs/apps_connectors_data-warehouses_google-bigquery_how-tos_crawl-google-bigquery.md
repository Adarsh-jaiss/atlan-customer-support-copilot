# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery
meta-description: Once you have configured the [Google BigQuery user permissions](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery), you can establish a connection between Atlan and Google BigQuery.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have configured the [Google BigQuery user permissions](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery), you can establish a connection between Atlan and Google BigQuery.
meta-og-locale: en
meta-og-title: Crawl Google BigQuery | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Google BigQuery | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Google BigQuery
=====================

Once you have configured the [Google BigQuery user permissions](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery), you can establish a connection between Atlan and Google BigQuery.

To crawl metadata from Google BigQuery, review the

[https://demo.arcade.software/PGF4iojearHaU3BUGAnp?embed](https://demo.arcade.software/PGF4iojearHaU3BUGAnp?embed)

[order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Google BigQuery as your source:

1. In the top right corner of any screen, click **New** and then click **New Workflow**.
2. From the list of packages, select **BigQuery Assets** and click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Google BigQuery credentials:

1. For *Authentication*, *Service Account* is the default selection.
2. For *Connectivity*, choose how you want Atlan to connect to Google BigQuery:
    * To connect using a public endpoint from Google, click **Public Network**.
    * To connect through a private endpoint, click **Private Network Link**. Next, [contact Atlan support](/support/submit-request) to request the DNS name of the Private Service Connect endpoint that Atlan created for the integration:
        1. For *Host*, enter the DNS name of the Private Service Connect endpoint received from Atlan in the following format \- `https://bigquery-<privateserver>.p.googleapis.com`. Replace `<privateserver>` with the DNS name.
        2. For *Port*, *443* is the default selection.
3. For *Project Id*, enter the value of `project_id` from the [JSON for the service account you created](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery). This project ID is only used to authenticate the connection. You can [configure the crawler](#configure-the-crawler) to extract more than just the specified project.
4. For *Service Account Json*, paste in the entire [JSON for the service account you created](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery).
5. For *Service Account Email*, enter the value of `client_email` from the [JSON for the service account you created](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery).
6. At the bottom of the form, click the **Test Authentication** button to confirm connectivity to Google BigQuery using these details.
7. When successful, at the bottom of the screen click the **Next** button.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Google BigQuery connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. (Optional) To prevent users from querying any Google BigQuery data, change *Allow SQL Query* to **No**.
4. (Optional) To prevent users from previewing any Google BigQuery data, change *Allow Data Preview* to **No**.
5. At the bottom of the screen, click the **Next** button to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Google BigQuery crawler, you can further configure it.

You can override the defaults for any of these options:

* For *Filter Sharded Tables*, keep *No* for the default configuration or click **Yes** to enable Atlan to catalog and display [sharded tables](https://cloud.google.com/bigquery/docs/partitioned-tables#dt_partition_shard) with the same naming prefix as a single table in asset discovery and the lineage graph.
* Select assets you want to include in crawling in the *Include Metadata* field. (This will default to all assets, if none are specified.)
* Select assets you want to exclude from crawling in the *Exclude Metadata* field. (This will default to no assets, if none are specified.)
* To have the crawler ignore tables and views based on a naming convention, specify a regular expression in the *Exclude regex for tables \& views* field.
* To [import existing tags from Google BigQuery to Atlan](/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags), for *Import Tags*, click **Yes**.
* For *Advanced Config*, keep *Default* for the default configuration or click **Custom** if Atlan support has provided you with a custom control configuration.
    + Enter the configuration into the *Custom Config* box. You can also enter `{âignore-all-caseâ: true}` to enable crawling assets with case\-sensitive identifiers.
    + For *Hidden Assets*, keep *No* for the default configuration or click **Yes** to crawl metadata from your [hidden datasets](https://cloud.google.com/bigquery/docs/datasets#hidden_datasets) in Google BigQuery.

**Did you know?**If a folder or project appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Google BigQuery crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/data-warehouses/google-bigquery/references/preflight-checks-for-google-bigquery) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousHow to enable SSO for Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/enable-sso-for-google-bigquery)[NextMine Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery)

Copyright Â© 2025 Atlan Pte. Ltd.

