# Source URL
https://docs.atlan.com/apps/connectors/database/cratedb/how-tos/crawl-cratedb

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/cratedb/how-tos/crawl-cratedb
link-alternate: https://docs.atlan.com/apps/connectors/database/cratedb/how-tos/crawl-cratedb
meta-description: Configure and run the CrateDB crawler to extract metadata from your database
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure and run the CrateDB crawler to extract metadata from your database
meta-og-locale: en
meta-og-title: Crawl CrateDB | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/cratedb/how-tos/crawl-cratedb
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl CrateDB | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl CrateDB
=============

Extract metadata from your CrateDB database and make it available in Atlan for data discovery, governance, and lineage tracking. This guide walks you through setting up authentication and running your first crawl.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* [Set up CrateDB](/apps/connectors/database/cratedb/how-tos/set-up-cratedb) with proper user permissions
* Network connectivity between Atlan and your CrateDB instance
* Your CrateDB cluster HTTP endpoint and port information

Set up workflow[â](#set-up-workflow "Direct link to Set up workflow")
-----------------------------------------------------------------------

Create a new **CrateDB Assets** workflow to extract metadata from your database.

1. Select **New** \> **New Workflow**.
2. From the list of packages, select **CrateDB Assets**.
3. Click **Setup Workflow**.

### Configure extraction method[â](#configure-extraction-method "Direct link to Configure extraction method")

Choose how to connect to your CrateDB environment:

* Direct extraction
* Agent extraction

1. Select **Direct** for the extraction method.
2. Enter your CrateDB connection details:
    * **Host**: Your CrateDB cluster HTTP endpoint (for example, `https://your-cluster.crate.io`)
    * **Port**: The port number of your CrateDB instance
    * **Authentication**: Choose **Basic** authentication
    * **Username**: Enter the username you configured in CrateDB
    * **Password**: Enter the password you configured in CrateDB
    * **Database**: Enter the name of the database to crawl
3. Click **Test Authentication** to confirm connectivity to CrateDB using these details.
4. When successful, click **Next**.
1. Select **Agent** for the extraction method.
2. Add the secret keys for your secret store configuration.
3. Follow the [Secure Agent configuration guide](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution).
4. Click **Next**.

### Configure connection details[â](#configure-connection-details "Direct link to Configure connection details")

1. Enter a **Connection Name** to identify your CrateDB environment. For example, `production-cratedb`, `analytics-db`, `data-warehouse`.
2. Assign **Connection Admins** to manage access. At least one admin is required.

### Configure crawler settings[â](#configure-crawler-settings "Direct link to Configure crawler settings")

Before running the CrateDB crawler, you can configure additional settings:

* **Exclude Metadata**: Select assets you want to exclude from crawling
* **Include Metadata**: Select assets you want to include in crawling
* **Exclude regex for tables \& views**: Specify a regular expression to ignore tables and views based on naming conventions
* **Advanced Config**:
    + **Enable Source Level Filtering**: Enable schema\-level filtering at source
    + **Use JDBC Internal Methods**: Enable JDBC internal methods for data extraction

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

### Run crawler[â](#run-crawler "Direct link to Run crawler")

You can now start extracting metadata from your CrateDB database:

* **Run now**: Click **Run** to start a one\-time crawl.
* **Schedule runs**: Click **Schedule Run** to automate recurring crawls (hourly, daily, weekly, or monthly).

Monitor crawl progress in the activity log. Once complete, your CrateDB assets appear in Atlan.

Troubleshooting[â](#troubleshooting "Direct link to Troubleshooting")
-----------------------------------------------------------------------

If you encounter connection or authentication issues, see [Connection issues](/apps/connectors/database/cratedb/troubleshooting/connection-issues).

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [What does Atlan crawl from CrateDB?](/apps/connectors/database/cratedb/references/what-does-atlan-crawl-from-cratedb)
* [Preflight checks for CrateDB](/apps/connectors/database/cratedb/references/preflight-checks-for-cratedb)
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up CrateDB](/apps/connectors/database/cratedb/how-tos/set-up-cratedb)[NextWhat does Atlan crawl from CrateDB?](/apps/connectors/database/cratedb/references/what-does-atlan-crawl-from-cratedb)

Copyright Â© 2025 Atlan Pte. Ltd.

