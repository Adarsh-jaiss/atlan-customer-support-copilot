# Source URL
https://docs.atlan.com/apps/connectors/database/mysql/how-tos/crawl-mysql

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/mysql/how-tos/crawl-mysql
link-alternate: https://docs.atlan.com/apps/connectors/database/mysql/how-tos/crawl-mysql
meta-description: To crawl metadata from MySQL, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from MySQL, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl MySQL | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/mysql/how-tos/crawl-mysql
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl MySQL | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl MySQL
===========

Once you have configured the [MySQL user permissions](/apps/connectors/database/mysql/how-tos/set-up-mysql), you can establish a connection between Atlan and MySQL. (If you are also using a private network for MySQL, you will need to [set that up first](/apps/connectors/database/mysql/how-tos/set-up-a-private-network-link-to-mysql), too.)

[https://demo.arcade.software/RfEGtpVIh68PfYetM1WH?embed](https://demo.arcade.software/RfEGtpVIh68PfYetM1WH?embed)

To crawl metadata from MySQL, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select MySQL as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **MySQL Assets** and click on **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Offline** extraction, you need to first [extract metadata yourself and make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access).
* In **Agent** extraction, Atlan's secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your MySQL credentials:

1. For *Host Name* enter the host for your MySQL instance.
2. For *Port* enter the port number of your MySQL instance.
3. For *Authentication* choose the method you configured when [setting up the MySQL user](/apps/connectors/database/mysql/how-tos/set-up-mysql):

    * For **Basic** authentication, enter the *Username* and *Password* you configured in MySQL.
        * For **IAM User** authentication, enter the *AWS Access Key*, *AWS Secret Key*, and database *Username* you configured.
        * For **IAM Role** authentication, enter the *AWS Role ARN* of the [new role you created](/apps/connectors/database/mysql/how-tos/set-up-mysql) and database *Username* you configured. (Optional) Enter the *AWS External ID* only if you have not configured an [external ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) in the role definition.
4. Click **Test Authentication** to confirm connectivity to MySQL using these details.

    info ðª **Did you know?** If you get an `Error: 1129: Host ... is blocked because of many connection errors; unblock with 'mysqladmin flush-hosts'`, ask your database admin to run the `FLUSH HOSTS;` command in the RDS instance, and then try again.
5. When successful, at the bottom of the screen click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan also supports the [offline extraction method](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) for fetching metadata from MySQL. This method uses Atlan's metadata\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) yourself and then [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket or Atlan's bucket.
2. For *Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `databases.json`, `columns-<database>.json`, and so on.
3. (Optional) For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen click **Next**.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from MySQL. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the MySQL data source by adding the secret keys for your secret store. For details on the required fields, refer to the [Direct extraction](#direct-extraction-method) section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the MySQL connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. (Optional) To prevent users from querying any MySQL data, change *Allow SQL Query* to **No**.
4. (Optional) To prevent users from previewing any MySQL data, change *Allow Data Preview* to **No**.
5. At the bottom of the screen, click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the MySQL crawler, you can further configure it. (Some of the options may only be available when using the [direct extraction method](#direct-extraction-method).)

You can override the defaults for any of these options:

* To select the assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To have the crawler ignore tables and views based on a naming convention, specify a regular expression in the *Exclude regex for tables \& views* field.
* For *Advanced Config*, keep *Default* for the default configuration or click **Custom** to configure the crawler:
    + For *Enable Source Level Filtering*, click **True** to enable schema\-level filtering at source or click **False** to disable it.
    + For *Use JDBC Internal Methods*, click **True** to enable JDBC internal methods for data extraction or click **False** to disable it.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the MySQL crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/database/mysql/references/preflight-checks-for-mysql) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up a private network link to MySQL](/apps/connectors/database/mysql/how-tos/set-up-a-private-network-link-to-mysql)[NextWhat does Atlan crawl from MySQL?](/apps/connectors/database/mysql/references/what-does-atlan-crawl-from-mysql)

Copyright Â© 2025 Atlan Pte. Ltd.

