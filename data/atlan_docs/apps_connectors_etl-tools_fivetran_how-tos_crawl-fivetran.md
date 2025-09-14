# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran
meta-description: Learn about crawl fivetran.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about crawl fivetran.
meta-og-locale: en
meta-og-title: Crawl Fivetran | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Fivetran | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Fivetran
==============

Once you have [configured the Fivetran permissions](/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran), you can establish a connection between Atlan and Fivetran.

To enrich Atlan with metadata from Fivetran, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

[https://demo.arcade.software/kZ12nXUHXOF0GhAKVQMr?embed](https://demo.arcade.software/kZ12nXUHXOF0GhAKVQMr?embed)

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Fivetran as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Fivetran Enrichment** and then click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

In order to run this package, you must ensure the following:

* The [Fivetran Platform Connector is set up](/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran) and has run successfully in Fivetran at least once.
* Fivetran logs are stored in a destination supported by Atlan.
* The above destination has been crawled in Atlan.

To use the Fivetran Platform Connector:

1. For *Atlan Connection*, Atlan will use the credentials of your selected connection to read the Fivetran Platform Connector tables associated with that connection. You can either:

    * Create a connection in Atlan for the [destination warehouse you configured](/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran) while setting up the Fivetran Platform Connector in Fivetran. This connection in Atlan must have access to the Fivetran tables created by the Fivetran Platform Connector. Atlan supports the following destinations:

    + [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift)
            + [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks)
            + [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery)
            + [PostgreSQL](/apps/connectors/database/postgresql/how-tos/crawl-postgresql)
            + [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake)
        * If you have already created a connection in Atlan, select the connection to extract. (To select a connection, the crawler must have already run for a supported destination.)

    danger If you have an existing connection, you *must* ensure that the user or other access permissions configured for that connection allow access to the Fivetran tables created by the Fivetran Platform Connector or update them accordingly.
2. For *Fivetran Platform Schema*, select the [destination schema where Fivetran logs are stored](/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran). You can only select one schema and must ensure that the connection above has access to [all Fivetran log tables stored in this destination schema](https://fivetran.com/docs/logs/fivetran-platform#schemainformation).
3. Once successful, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Fivetran connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.

Run the enrichment[â](#run-the-enrichment "Direct link to Run the enrichment")
--------------------------------------------------------------------------------

You can now enrich Atlan with Fivetran metadata:

1. To check for any [permissions or other configuration issues](/apps/connectors/etl-tools/fivetran/references/preflight-checks-for-fivetran) before running the enrichment, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run**Â button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run**Â button.

Once the enrichment has completed running, you will see lineage extended upstream from your data platform, warehouse, or lake! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [configuration](/tags/configuration)

[PreviousSet up Fivetran](/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran)[NextWhat does Atlan crawl from Fivetran?](/apps/connectors/etl-tools/fivetran/references/what-does-atlan-crawl-from-fivetran)

Copyright Â© 2025 Atlan Pte. Ltd.

