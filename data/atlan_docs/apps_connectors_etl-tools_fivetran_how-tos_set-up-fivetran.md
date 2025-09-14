# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran
meta-description: Learn about set up fivetran.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about set up fivetran.
meta-og-locale: en
meta-og-title: Set up Fivetran | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Fivetran | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Fivetran
===============

Fivetran Platform Connector[â](#fivetran-platform-connector "Direct link to Fivetran Platform Connector")
-----------------------------------------------------------------------------------------------------------

Who can do this?You need your Fivetran [Account Administrator](https://fivetran.com/docs/getting-started/fivetran-dashboard/account-management/role-based-access-control#rolesinourrbacmodel) (who can create, view, edit, and delete destinations and connectors) to complete the steps below \- you may not have access yourself. **Note**: You also need ***Fivetran Enterprise*** (or above) to use this integration. If you're not on such a plan yet, Atlan may be able to help you access a trial period from Fivetran. Just reach out to your Atlan contact!

### Create a destination[â](#create-a-destination "Direct link to Create a destination")

The Fivetran Platform Connector delivers your logs and account or destination metadata to a schema in your destination. Fivetran automatically adds this connector to every new destination you create. You need to set up at least one destination to receive the log events.

Atlan currently supports the following destinations, refer to Fivetran documentation linked below to configure them in Fivetran:

* [Amazon Redshift](https://fivetran.com/docs/destinations/redshift)
* [Databricks](https://fivetran.com/docs/destinations/databricks)
* [Google BigQuery](https://fivetran.com/docs/destinations/bigquery)
* [PostgreSQL](https://fivetran.com/docs/destinations/postgresql)
* [Snowflake](https://fivetran.com/docs/destinations/snowflake)

If you have already configured a destination in Fivetran, skip to the next step.

### Configure Fivetran Platform Connector[â](#configure-fivetran-platform-connector "Direct link to Configure Fivetran Platform Connector")

Once you have set up a supported destination, follow the steps in this [setup guide](https://fivetran.com/docs/logs/fivetran-platform/setup-guide) from Fivetran to set up your Fivetran Platform Connector account\-wide.

* You must configure the Fivetran Platform Connector on an account level.
* Atlan recommends not [excluding any columns](https://fivetran.com/docs/logs/troubleshooting/exclude-tables-connector-schema), as this can impact the successful execution of the Fivetran enrichment package.
* The warehouse credentials or role configured in Atlan must have the necessary permissions to query tables in `<Fivetran_destination_database>.<FPC_schema_name>`. Refer to the [Fivetran documentation](https://fivetran.com/docs/logs/fivetran-platform/sample-queries#fivetranplatformconnectorsamplequeries) for available `FPC_schema_name` values.

    The role must have the required permissions to access these tables. Refer to the relevant guide below for setting up permissions:

    + [Set up Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake)
    + [Set up Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery)
    + [Set up Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks)
    + [Set up Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift)
    + [Set up PostgreSQL](/apps/connectors/database/postgresql/how-tos/set-up-postgresql)

This enables you to sync all the metadata and logs for all the connectors in your account to a single destination.

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [configuration](/tags/configuration)

[PreviousFivetran](/apps/connectors/etl-tools/fivetran)[NextCrawl Fivetran](/apps/connectors/etl-tools/fivetran/how-tos/crawl-fivetran)

Copyright Â© 2025 Atlan Pte. Ltd.

