# Source URL
https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server
link-alternate: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server
meta-description: Once you have configured the [Microsoft SQL Server user permissions](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server),.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have configured the [Microsoft SQL Server user permissions](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server),.
meta-og-locale: en
meta-og-title: Crawl Microsoft SQL Server | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/microsoft-sql-server/how-tos/crawl-microsoft-sql-server
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Microsoft SQL Server | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Microsoft SQL Server
==========================

Once you have configured the [Microsoft SQL Server user permissions](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server), you can establish a connection between Atlan and Microsoft SQL Server. (If you are also using a private network for Microsoft SQL Server, you will need to set that up first, too, for your Microsoft SQL Server on [Amazon RDS](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-a-private-network-link-to-microsoft-sql-server-on-amazon-rds) or [Amazon EC2](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-a-private-network-link-to-microsoft-sql-server-on-amazon-ec2) instance.)

To crawl metadata from Microsoft SQL Server, revie

[https://demo.arcade.software/72HULyjY7tvazan7zWTd?embed](https://demo.arcade.software/72HULyjY7tvazan7zWTd?embed)

w the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

Select Microsoft SQL Server as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **SQL Server Assets** and click on **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Offline** extraction, you need to first [extract metadata yourself and make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access).
* In **Agent** extraction, Atlanâs secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Microsoft SQL Server credentials:

1. ForÂ*Host*,Â enter the [availability group listener](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server) name (or PrivateLink endpoint for your Microsoft SQL Server on [Amazon RDS](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-a-private-network-link-to-microsoft-sql-server-on-amazon-rds) or [Amazon EC2](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-a-private-network-link-to-microsoft-sql-server-on-amazon-ec2) instance).
2. ForÂ*Port*,Â enter the port on which Microsoft SQL Server is available (default is 1433\).
3. ForÂ*Username*, enter the [username](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server#create-a-user) created when setting up user permissions.
4. ForÂ*Password*, enter the [password](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server#create-a-login) created when setting up user permissions.
5. For *Database*, enter the name of the database.
6. Click **Test Authentication** to confirm connectivity to Microsoft SQL Server using these details.
7. When successful, at the bottom of the screen click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan also supports the [offline extraction method](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) for fetching metadata from Microsoft SQL Server. This method uses Atlan's metadata\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) yourself and then [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket or Atlan's bucket.
2. For *Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `database.json`, `columns-<database>.json`, and so on.
3. (Optional) For *Bucket region*, enter the name of the S3 region.
4. Once completed, navigate to the bottom of the screen and click **Next**.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from Microsoft SQL Server. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the Microsoft SQL Server data source by adding the secret keys for your secret store. For details on the required fields, refer to the [Direct extraction](#direct-extraction-method) section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

Complete the Microsoft SQL Server connection configuration:

1. Provide aÂ*Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. (Optional) To prevent users from querying any Microsoft SQL Server data, change *Allow SQL Query* to **No**.
4. (Optional) To prevent users from previewing any Microsoft SQL Server data, change *Allow Data Preview* to **No**.
5. At the bottom of the screen, click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Microsoft SQL Server crawler, you can further configure it.

* To select the assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets, if none are specified.)
* To have the crawler ignore tables and views based on a naming convention, specify a regular expression in theÂ*Exclude regex for tables \& views* field. You can also specify the following system tables to exclude from crawling \- Â`sys*`, `MSmerge*`, `dbo.sys*`, `MSrepl*`, `IH*`, `MSpeer*`, `cdc.*`, `MS*history`, `MS*agent`, `MSdist*`, `MSpub*`, `MSsubcri*`, `MSdbms*`, `MSdynamic*`, and `MSagent*`. Note that this is not an exhaustive list, for more information refer to [source documentation](https://learn.microsoft.com/en-us/sql/relational-databases/system-tables/system-tables-transact-sql?view=sql-server-ver16).
* For *Advanced Config*, keep *Default* for the default configuration or click **Custom** to configure the crawler:
    + For *Enable Source Level Filtering*, click **True** to enable schema\-level filtering at source or click **False**Â to disable it.
    + For *Use JDBC Internal Methods*, click **True** to enable JDBC internal methods for data extraction or click **False** to disable it.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Microsoft SQL Server crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/database/microsoft-sql-server/references/preflight-checks-for-microsoft-sql-server) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's assets page! ð

**Did you know?**Once you have crawled assets from Microsoft SQL Server, you can run the *SQL Server Miner* to [mine query history through S3](/product/connections/how-tos/mine-queries-through-s3).

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up Microsoft SQL Server](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-microsoft-sql-server)[NextSet up a private network link to Microsoft SQL Server on Amazon EC2](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-a-private-network-link-to-microsoft-sql-server-on-amazon-ec2)

Copyright Â© 2025 Atlan Pte. Ltd.

