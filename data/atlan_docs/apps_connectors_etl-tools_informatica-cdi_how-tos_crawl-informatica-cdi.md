# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/informatica-cdi/how-tos/crawl-informatica-cdi

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/informatica-cdi/how-tos/crawl-informatica-cdi
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/informatica-cdi/how-tos/crawl-informatica-cdi
meta-description: Configure and run the crawler to discover and catalog your Informatica CDI assets
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure and run the crawler to discover and catalog your Informatica CDI assets
meta-og-locale: en
meta-og-title: Crawl Informatica CDI assets | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/informatica-cdi/how-tos/crawl-informatica-cdi
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Informatica CDI assets | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Informatica CDI assets
============================

Create a crawler workflow to automatically discover and catalog your Informatica Cloud Data Integration assets, including projects, workflows, and data lineage.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, verify you have:

* Completed the [Set up Informatica CDI](/apps/connectors/etl-tools/informatica-cdi/how-tos/set-up-informatica-cdi) guide
* Access to your Informatica Cloud environment
* Parameter files downloaded from your Secure Agent machines

Create crawler workflow[â](#create-crawler-workflow "Direct link to Create crawler workflow")
-----------------------------------------------------------------------------------------------

Create a new workflow and select Informatica CDI as your connector source.

1. In the top\-right corner of any screen, select **New** \> **New Workflow**.
2. From the list of packages, select **Informatica CDI Assets** \> **Setup Workflow**.

### Configure authentication[â](#configure-authentication "Direct link to Configure authentication")

Set up secure access to your Informatica Cloud environment by providing connection credentials.

1. In the **Host** field, enter your Informatica CDI domain without the protocol or sub\-region.

 **Example**

    If your full URL is:

    ```
    https://usw1.dmp-us.informaticacloud.com/

    ```
        Enter only:

    ```
    dmp-us.informaticacloud.com

    ```
2. Enter the **Username** and **Password** for the user you created in the [Set up Informatica CDI](/apps/connectors/etl-tools/informatica-cdi/how-tos/set-up-informatica-cdi) guide.
3. Select **Test Authentication** to verify connectivity to Informatica CDI.
4. After successful authentication, select **Next**.

### Configure connection[â](#configure-connection "Direct link to Configure connection")

Set up connection management and define who can access and manage this connection.

1. Enter a **Connection Name** that represents your source environment. For example, use values like production, development, gold, or analytics.
2. To modify who can manage this connection, update the users or groups listed under **Connection Admins**. If you don't specify any user or group, no one can manage the connection, including admins.
3. Select **Next** to continue.

### Configure crawler[â](#configure-crawler "Direct link to Configure crawler")

Set up what to crawl and configure advanced options for accurate lineage generation.

1. Configure metadata filters using the **Include Metadata** and **Exclude Metadata** fields. If an asset appears in both fields, the exclude metadata field takes precedence.
    * **Include Metadata**: Select the projects or folders you want to include in crawling. This defaults to all assets if none are specified.
    * **Exclude Metadata**: Select the projects or folders you want to exclude from crawling. This defaults to no assets if none are specified.
2. Configure advanced options for uploading parameter files:
    * Upload parameter files used by the Informatica CDI projects or folders in a compressed format.
    * **MIME types**: Windows ZIP or Linux Zip

### Run crawler[â](#run-crawler "Direct link to Run crawler")

Execute the crawler to discover and catalog your Informatica CDI assets.

1. To run the crawler immediately, select **Run**.
2. To schedule the crawler to run hourly, daily, weekly, or monthly, select **Schedule \& Run**.

After the crawler completes, you can view the assets on Atlan's asset page.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [What does Atlan crawl from Informatica CDI](/apps/connectors/etl-tools/informatica-cdi/references/what-does-atlan-crawl-from-informatica-cdi): Understand the metadata and assets discovered during crawling
**Tags:*** [connectors](/tags/connectors)
* [etl\-tools](/tags/etl-tools)
* [informatica](/tags/informatica)
* [cdi](/tags/cdi)
* [crawl](/tags/crawl)
* [workflow](/tags/workflow)

[PreviousSet up Informatica CDI](/apps/connectors/etl-tools/informatica-cdi/how-tos/set-up-informatica-cdi)[NextTransformations](/apps/connectors/etl-tools/informatica-cdi/concepts/transformation-logic)

Copyright Â© 2025 Atlan Pte. Ltd.

