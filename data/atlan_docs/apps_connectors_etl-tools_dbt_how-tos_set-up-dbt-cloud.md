# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud
meta-description: :::warning Who can do this? You will probably need your dbt Cloud administrator to complete these steps - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your dbt Cloud administrator to complete these steps - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up dbt Cloud | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up dbt Cloud | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up dbt Cloud
================

Who can do this?You will probably need your dbt Cloud administrator to complete these steps \- you may not have access yourself.

If you have a dbt Cloud account, Atlan can help enrich your assets with dbt metadata.

dangerTo enable Atlan to fetch metadata for dbt models defined in your project, you must add the `dbt docs generate` command to the list of commands in the job run steps. This will produce a `catalog.json` file containing all the relevant metadata. Alternatively, you can select the [*Generate docs on run* checkbox](https://docs.getdbt.com/docs/collaborate/build-and-view-your-docs) to automatically generate updated project docs each time a job runs. Refer to [dbt documentation](https://docs.getdbt.com/references/commands/cmd-docs#dbt-docs-generate) to learn more.

Create a token[â](#create-a-token "Direct link to Create a token")
--------------------------------------------------------------------

Be sure to copy the generated token for [crawling dbt](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt).

### Service account token[â](#service-account-token "Direct link to Service account token")

Only dbt Cloud administrators can generate service account tokens. This is required for authenticating as a service account user and to set up granular access permissions.

To generate a service account token, follow the [steps in dbt documentation](https://docs.getdbt.com/docs/dbt-cloud/dbt-cloud-api/service-tokens) and configure the following permissions:

* Team plans: add **Read\-only** access to all projects you want to integrate into Atlan. This permission is required to authorize requests to both the [dbt Cloud Administrative API](https://docs.getdbt.com/docs/dbt-cloud-apis/admin-cloud-api) and [dbt Cloud Discovery API](https://docs.getdbt.com/docs/dbt-cloud-apis/discovery-api).
* Enterprise plans: add **Job Viewer** access to all projects you want to integrate into Atlan. This will provide read\-only access to your dbt account, project, environment, job, and run metadata. Learn more about [dbt Cloud Enterprise permissions](https://docs.getdbt.com/docs/cloud/manage-access/enterprise-permissions).

### Personal access token[â](#personal-access-token "Direct link to Personal access token")

danger[User API tokens will be deprecated](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens) and replaced with account\-scoped personal access tokens by October 22, 2024\. If you have configured any dbt crawler workflows in Atlan with user API tokens, you may encounter errors. You must [modify the configuration](/product/connections/how-tos/manage-connectivity) for any existing workflows with updated credentials \- either a service account or personal access token.

You can also create an account\-scoped personal access token for [crawling dbt](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt).

To generate a personal access token, follow the [steps in dbt documentation](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens#account-scoped-personal-access-tokens) and note the following:

* The user creating the token must have **Job Viewer** access to all projects you want to integrate into Atlan. This will provide read\-only access to your dbt account, project, environment, job, and run metadata.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [model](/tags/model)

[Previousdbt](/apps/connectors/etl-tools/dbt)[NextSet up dbt Core](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core)

Copyright Â© 2025 Atlan Pte. Ltd.

