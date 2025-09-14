# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt
meta-description: Once you have [configured a dbt Cloud service token](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud) or [uploaded your dbt Core project files to S3](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core), you can crawl dbt metadata into Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured a dbt Cloud service token](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud) or [uploaded your dbt Core project files to S3](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core), you can crawl dbt metadata into Atlan.
meta-og-locale: en
meta-og-title: Crawl dbt | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl dbt | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl dbt
=========

[https://demo.arcade.software/ZI3DOTZ4uIU9bPzyuB56?embed](https://demo.arcade.software/ZI3DOTZ4uIU9bPzyuB56?embed)

Once you have [configured dbt Cloud service token](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud) or [uploaded your dbt Core project files to cloud storage](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core), you can crawl dbt metadata into Atlan.

To enrich metadata in Atlan from dbt, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select dbt as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **dbt Assets** and then click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

### dbt core[â](#dbt-core "Direct link to dbt core")

To enter your [dbt Core](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core) credentials:

1. For *Extraction method*, click **Object Storage**.
2. Enter the details for the object storage location of your project files.
3. Click the **Test Authentication** button to confirm connectivity to object storage using these details.
4. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### dbt cloud[â](#dbt-cloud "Direct link to dbt cloud")

To enter your [dbt Cloud](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud) credentials:

1. For *Extraction method*, clickÂ**Cloud**.
2. For *Host Name*, enter the domain name of your dbt Cloud instance, if not the default. Include the `https://`. For more information on access URLs, refer to [dbt documentation](https://docs.getdbt.com/docs/cloud/about-cloud/access-regions-ip-addresses).
3. For *Authentication Type*, *Service Account* is the default selection for [service account token](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud#service-account-token). Change to **PAT** to enter a [personal access token](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud#personal-access-token) (PAT) instead.
4. For *Token*, enter the [dbt Cloud token you generated](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud).
5. Click the **Test Authentication** button to confirm connectivity to dbt Cloud using these details.
6. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the dbt connection configuration:

1. Provide a *Connection name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you don't specify any user or group, no one can manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the dbt crawler, you can further configure it.

**Did you know?**If a project appears in both the include and exclude filters, the exclude filter takes precedence.

### dbt core[â](#dbt-core-1 "Direct link to dbt core")

On the *Configuration* page for dbt Core, you can override the defaults for any of these options:

* To limit the enrichment to a particular connection with materialized assets, click **Connection** and select the relevant option. (This defaults to all connections, if none are specified.)
* To [import existing tags from dbt to Atlan](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags), for *Import Tags*, click **Yes**.

### dbt cloud[â](#dbt-cloud-1 "Direct link to dbt cloud")

On the *Configuration* page for dbt Cloud, you can override the defaults for any of these options:

* To select the dbt projects and environments you want to exclude from crawling, click **Exclude Metadata**. (This defaults to no projects, if none are specified.)
* To select the dbt projects and environments you want to include in crawling, click **Include Metadata**. (This defaults to all projects, if none are specified.)
* To limit the enrichment to a particular connection with materialized assets, click **Connection** and select the relevant option. (This defaults to all connections, if none are specified.)
* To [import existing tags from dbt to Atlan](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags), for *Import Tags*, click **Yes**.
* For *Advanced options*, click **Yes** to configure the crawler further:
    + For *Enrich Metadata in Materialized Assets*, click **Yes** to enable enrichment for both dbt and materialized assets or **No** for dbt assets only.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the dbt crawler, after completing the previous steps:

1. To check for any [permissions or other configuration issues](/apps/connectors/etl-tools/dbt/references/preflight-checks-for-dbt) before running the crawler, click **Preflight checks**
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you can see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up dbt Core](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core)[NextManage dbt tags](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags)

Copyright Â© 2025 Atlan Pte. Ltd.

