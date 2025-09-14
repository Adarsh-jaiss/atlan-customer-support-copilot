# Source URL
https://docs.atlan.com/faq/data-connections-and-integration

================================================================================

<!--
canonical: https://docs.atlan.com/faq/data-connections-and-integration
link-alternate: https://docs.atlan.com/faq/data-connections-and-integration
meta-description: Complete guide for connecting Atlan to your data sources, managing integrations, and troubleshooting connection issues.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Complete guide for connecting Atlan to your data sources, managing integrations, and troubleshooting connection issues.
meta-og-locale: en
meta-og-title: Data Connections and Integration | Atlan Documentation
meta-og-url: https://docs.atlan.com/faq/data-connections-and-integration
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Data Connections and Integration | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Data Connections and Integration
================================

Complete guide for connecting Atlan to your data sources, managing integrations, and troubleshooting connection issues.

### How can I set up on\-prem databases if I don't use Docker Compose?[â](#how-can-i-set-up-on-prem-databases-if-i-dont-use-docker-compose "Direct link to How can I set up on-prem databases if I don't use Docker Compose?")

To use [Atlan's metadata\-extractor tool](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) to extract metadata from on\-premises databases with Kubernetes deployment architecture, refer to the [How to connect on\-premises databases to Kubernetes](/apps/connectors/database/on-premises-databases/how-tos/connect-on-premises-databases-to-kubernetes) documentation.

### Does Atlan integrate with MongoDB?[â](#does-atlan-integrate-with-mongodb "Direct link to Does Atlan integrate with MongoDB?")

Atlan currently supports native integration with [MongoDB](/apps/connectors/database/mongodb/how-tos/set-up-mongodb) and [Microsoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) for MongoDB deployments.

### Can Atlan work with the IBM Informix database?[â](#can-atlan-work-with-the-ibm-informix-database "Direct link to Can Atlan work with the IBM Informix database?")

Atlan doesn't currently offer native support for IBM Informix database. Atlan is built on an Open API architecture, so you can catalog your IBM Informix assets programmatically. Refer to the [developer documentation](https://developer.atlan.com/patterns/create/relational/) to publish database, schema, table, and column objects.

### Is Atlan compatible with data quality tools?[â](#is-atlan-compatible-with-data-quality-tools "Direct link to Is Atlan compatible with data quality tools?")

Yes, Atlan integrates with several data quality and observability tools:

* Native integrations with tools like Great Expectations, Monte Carlo, and other data quality platforms
* You can view data quality metrics and alerts directly within asset profiles
* Custom integrations can be built using Atlan APIs to connect additional data quality tools

For the most current list of supported integrations, check the [connections documentation](/product/connections/references/supported-sources).

### Does Atlan integrate with Talend or Matillion?[â](#does-atlan-integrate-with-talend-or-matillion "Direct link to Does Atlan integrate with Talend or Matillion?")

Atlan currently only supports native integration with [Matillion](/apps/connectors/etl-tools/matillion/how-tos/set-up-matillion).

If Talend uses the ELT (Extract, Load, Transform) paradigm, this means that the SQL transformation queries are pushed down into the warehouse. In that case, Atlan automatically generates the lineage for these transformations by parsing the SQL statements extracted from the query history of the data warehouse. Lineage for the extract and load steps isn't automated for Talend but is [supported for Fivetran](/apps/connectors/etl-tools/fivetran/how-tos/set-up-fivetran).

However, if the transformation is taking place outside the warehouse, Atlan needs access to the transformation queries to generate the lineage. This access can either be gained via a Git repository if utilized or by sharing the queries or stored procedures in a shared location, such as an S3 bucket.

### Why does Atlan require the site administrator explorer role in Tableau?[â](#why-does-atlan-require-the-site-administrator-explorer-role-in-tableau "Direct link to Why does Atlan require the site administrator explorer role in Tableau?")

To learn why Atlan requires the *Site Administrator Explorer* role in Tableau, refer to this [guide](/apps/connectors/business-intelligence/tableau/troubleshooting/troubleshooting-tableau-connectivity).

### Why is the view button for Tableau unavailable?[â](#why-is-the-view-button-for-tableau-unavailable "Direct link to Why is the view button for Tableau unavailable?")

The view button for Tableau assets may be unavailable due to:

* Insufficient permissions to access the Tableau content
* The Tableau server being inaccessible from your current network
* Authentication issues between Atlan and Tableau
* The specific asset being moved or deleted in Tableau

Check your Tableau permissions and network connectivity, or contact your Tableau administrator.

### Who is a source owner in Microsoft Power BI?[â](#who-is-a-source-owner-in-microsoft-power-bi "Direct link to Who is a source owner in Microsoft Power BI?")

Microsoft Power BI provides metadata for who generated or configured [reports, datasets, and dataflows](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi), which is then mapped to the source owner field. This has no connection to Microsoft Power BI workspace admins. You can refer to the API response schema to learn more:

* `createdBy` in [WorkspaceInfoReport](https://learn.microsoft.com/en-us/rest/api/power-bi/admin/workspace-info-get-scan-result#workspaceinforeport)
* `configuredBy` in [WorkspaceInfoDataset](https://learn.microsoft.com/en-us/rest/api/power-bi/admin/workspace-info-get-scan-result#workspaceinfodataset)
* `configuredBy` in [WorkspaceInfoDataflow](https://learn.microsoft.com/en-us/rest/api/power-bi/admin/workspace-info-get-scan-result#workspaceinfodataflow)

The API doesn't return source owner metadata for other asset types due to limitations at source, see [Microsoft Power BI documentation](https://learn.microsoft.com/en-us/rest/api/power-bi/admin/workspace-info-get-scan-result#workspaceinfo).

The value of the source owner is a string. While for sources like Looker, Atlan displays the username based on the metadata received, Microsoft Power BI APIs only return the user's email address, which is what Atlan displays for supported assets.

In certain cases, assets that are connected to the same Microsoft Power BI workspace and have the same source owner may display a different source owner or none at all. This is because Atlan maps it to the metadata returned by the APIs. For example, if the response is null, Atlan won't display a source owner.

### How does Atlan work with dbt single tenant vs multi\-tenant?[â](#how-does-atlan-work-with-dbt-single-tenant-vs-multi-tenant "Direct link to How does Atlan work with dbt single tenant vs multi-tenant?")

There are multiple deployment options available for [dbt Cloud](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud) (see dbt documentation [here](https://docs.getdbt.com/docs/cloud/about-cloud/tenancy) and [here](https://docs.getdbt.com/docs/cloud/migration)).

When [integrating with dbt Cloud](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud), Atlan uses the following APIs to fetch metadata from all deployment options:

* [dbt Cloud Administrative API](https://docs.getdbt.com/docs/dbt-cloud-apis/admin-cloud-api) \- to fetch account, project, environment, job, and run metadata.
* [dbt Cloud Discovery API](https://docs.getdbt.com/docs/dbt-cloud-apis/metadata-api) \- to fetch models, sources, and tests from each dbt environment.

### Are there any dbt assets that can't be viewed in dbt?[â](#are-there-any-dbt-assets-that-cant-be-viewed-in-dbt "Direct link to Are there any dbt assets that can't be viewed in dbt?")

Atlan displays the View in dbt link for newly created or synced dbt assets only â including models, sources, and tests. Atlan doesn't display this link for assets without target URLs.

### How can I reuse my documentation from dbt?[â](#how-can-i-reuse-my-documentation-from-dbt "Direct link to How can I reuse my documentation from dbt?")

Atlan's [dbt connectivity](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt) provides two ways to ingest documentation from dbt:

* Automatically load [details like descriptions](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud), from your existing dbt project details.
* [Any other (Atlan\-specific) details](/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt) you want to document, through dbt's meta field.

### What happens to asset metadata in Atlan if I switch to a new server?[â](#what-happens-to-asset-metadata-in-atlan-if-i-switch-to-a-new-server "Direct link to What happens to asset metadata in Atlan if I switch to a new server?")

If the assets in your new server retain the same `qualifiedName`, then these are recreated in Atlan with all the metadata attached. The `qualifiedName` determines asset uniqueness in Atlan (and influences the GUID of the asset). Following this logic, any asset recreated with the same name remains the same asset in Atlan \- considering that the `qualifiedName` has remained the same.

By contrast, if an asset is recreated with a new name, it becomes a new asset in Atlan \- considering that the `qualifiedName` has changed. This means that the attached metadata is no longer available.

If an asset is removed from the data source or no longer available, it'll be [archived](/product/capabilities/discovery/how-tos/access-archived-assets) in Atlan as part of the crawler's cleanup policy.

### Why is the metadata getting lost when migrating from Snowflake to dbt?[â](#why-is-the-metadata-getting-lost-when-migrating-from-snowflake-to-dbt "Direct link to Why is the metadata getting lost when migrating from Snowflake to dbt?")

Metadata loss during Snowflake to dbt migration typically occurs because:

* The `qualifiedName` changes between the source Snowflake table and the dbt model
* Asset lineage connections aren't properly maintained during migration
* Custom metadata and tags aren't transferred in the migration process

To preserve metadata:

1. Make sure to use consistent naming conventions between Snowflake and dbt
2. Use dbt's meta fields to preserve custom metadata
3. Re\-run Atlan crawlers after migration to rebuild lineage connections

### What happens when an asset is removed from Redshift?[â](#what-happens-when-an-asset-is-removed-from-redshift "Direct link to What happens when an asset is removed from Redshift?")

If an asset such as a table or a schema is removed from Redshift or any other source, it'll also be automatically removed from Atlan during the next workflow run. Such assets are archived in Atlan (soft\-deleted), so that they don't appear in search results by default. You can only [access archived assets](/product/capabilities/discovery/how-tos/access-archived-assets) through discovery.

### What data is Atlan actually bringing in?[â](#what-data-is-atlan-actually-bringing-in "Direct link to What data is Atlan actually bringing in?")

Atlan extracts metadata only, not the actual data:

* **Schema information:** Table structures, column names, data types
* **Usage statistics:** Query patterns, user access logs (when available)
* **Lineage data:** Data flow and transformation logic
* **Custom metadata:** Tags, descriptions, business glossary terms
* **Data profiles:** example data previews (configurable, with privacy controls)

Atlan never stores your actual business data \- it only catalogues metadata to help you understand and govern your data landscape.

### Can offline extraction fail if there are spaces in the path?[â](#can-offline-extraction-fail-if-there-are-spaces-in-the-path "Direct link to Can offline extraction fail if there are spaces in the path?")

Atlan currently doesn't support spaces in folder names for S3\. The [offline extraction](/product/connections/references/additional-connectivity-to-data-sources) workflow fails if you include any spaces in the folder name in S3\. To follow documented guidelines for safe characters, refer to [Amazon S3 documentation](https://docs.aws.amazon.com/en_us/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines).

### What does API only mean?[â](#what-does-api-only-mean "Direct link to What does API only mean?")

In the *Where in Atlan* column of *What does Atlan crawl from (connector name)?* [documentation](/product/connections/references/supported-sources), *API only* indicates source properties that have been crawled in Atlan but aren't published or discoverable on the product UI.

### Can you integrate with Jupyter notebook?[â](#can-you-integrate-with-jupyter-notebook "Direct link to Can you integrate with Jupyter notebook?")

Yes, Atlan supports integration with Jupyter notebooks through:

* Python SDK for programmatic access to Atlan APIs
* Jupyter extensions for data discovery and cataloguing
* Ability to document and version notebook\-based analyses
* Integration with notebook\-based data science workflows

Check the [developer documentation](https://developer.atlan.com) for specific integration examples and code samples.

### Can I integrate Atlan with any web application?[â](#can-i-integrate-atlan-with-any-web-application "Direct link to Can I integrate Atlan with any web application?")

Yes, Atlan provides comprehensive APIs and SDKs that enable integration with virtually any web application:

* REST APIs for all Atlan functionality
* Python, Java, and JavaScript SDKs
* Webhook support for real\-time notifications
* OAuth2 and API key authentication methods

Visit the [developer portal](https://developer.atlan.com) for integration guides, API documentation, and code examples.

### What does the Snowflake workflow follow when gathering information?[â](#what-does-the-snowflake-workflow-follow-when-gathering-information "Direct link to What does the Snowflake workflow follow when gathering information?")

The Snowflake workflow or any other connector workflow has built\-in differential crawling capabilities, which means it will crawl updates that have been made across assets in the Snowflake system and sync them to Atlan. This way, any incremental metadata changes happening in Snowflake are made available in Atlan after each workflow run.

### What's a Snowflake process?[â](#whats-a-snowflake-process "Direct link to What's a Snowflake process?")

Snowflake *process* (in Atlan) \= Snowflake *transformation*

Data processing in a warehouse involves a combination of these three processes:

* Extract (from source).
* Load (to warehouse).
* Transformation (of the data between source format and a consolidated format in the warehouse).

Whether run through a Python script, directly from Snowflake's UI, or via third\-party programs like Matillion, these transformations occur within Snowflake through SQL. Regardless of what ran this transformation SQL, a Snowflake process in Atlan captures the transformation logic for use in lineage.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [integration](/tags/integration)
* [faq\-connections](/tags/faq-connections)

[PreviousAI and Automation Features](/faq/ai-and-automation-features)[NextSecurity and Compliance](/faq/security-and-compliance)

Copyright Â© 2025 Atlan Pte. Ltd.

