# Source URL
https://docs.atlan.com/apps/connectors/database/mongodb/how-tos/crawl-mongodb

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/mongodb/how-tos/crawl-mongodb
link-alternate: https://docs.atlan.com/apps/connectors/database/mongodb/how-tos/crawl-mongodb
meta-description: Once you have [configured the MongoDB permissions](/apps/connectors/database/mongodb/how-tos/set-up-mongodb), you can establish a connection between Atlan and MongoDB.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the MongoDB permissions](/apps/connectors/database/mongodb/how-tos/set-up-mongodb), you can establish a connection between Atlan and MongoDB.
meta-og-locale: en
meta-og-title: Crawl MongoDB | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/mongodb/how-tos/crawl-mongodb
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl MongoDB | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl MongoDB
=============

Once you have [configured the MongoDB permissions](/apps/connectors/database/mongodb/how-tos/set-up-mongodb), you can establish a connection between Atlan and MongoDB.

[https://demo.arcade.software/PW1zEZ7Zkfk51pIvun9x?embed](https://demo.arcade.software/PW1zEZ7Zkfk51pIvun9x?embed)

To crawl metadata from MongoDB, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select MongoDB as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **MongoDB Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Agent** extraction, Atlanâs secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

For *Extraction method*, *Direct* is the default selection. To enter your MongoDB credentials:

1. For *SQL interface host name*, enter the [host name of the SQL (or JDBC) endpoint you copied](/apps/connectors/database/mongodb/how-tos/set-up-mongodb#retrieve-connection-details) from your MongoDB database.
2. For *Authentication*, *Basic* is the default method.
3. For *Username*, enter the [username you created](/apps/connectors/database/mongodb/how-tos/set-up-mongodb#create-database-user-in-mongodb) in your MongoDB database.
4. For *Password*, enter the [password you created for the username](/apps/connectors/database/mongodb/how-tos/set-up-mongodb#create-database-user-in-mongodb).
5. For *MongoDB native host*, enter the [host name of your MongoDB database](/apps/connectors/database/mongodb/how-tos/set-up-mongodb#retrieve-connection-details) you copied.
6. For *Default database*, enter the [name of the default database](/apps/connectors/database/mongodb/how-tos/set-up-mongodb#retrieve-connection-details) you copied from your MongoDB database.
7. For *Authentication database*, enter the [name of the authentication database](/apps/connectors/database/mongodb/how-tos/set-up-mongodb#retrieve-connection-details) you copied from your MongoDB database. `admin` is the default selection \- learn more about [authentication databases in MongoDB](https://www.mongodb.com/docs/manual/core/security-users/#authentication-database).
8. For *SSL*, keep **Yes** to connect via a Secure Sockets Layer (SSL) channel or click **No**.
9. Click the **Test Authentication** button to confirm connectivity to MongoDB.
10. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from MongoDB. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the MongoDB data source by adding the secret keys for your secret store. For details on the required fields, refer to the [Direct extraction](#direct-extraction-method) section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the MongoDB connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the MongoDB crawler, you can further configure it.

On the *Metadata Filters* page, you can override the defaults for any of these options:

* To select the assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets, if none specified.)
* To have the crawler ignore collections based on a naming convention, specify a regular expression in the *Exclude regex for collections* field.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the MongoDB crawler, after completing the steps above:

* To run the crawler once, immediately, at the bottom of the screen, click the **Run** button.
* To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up MongoDB](/apps/connectors/database/mongodb/how-tos/set-up-mongodb)[NextWhat does Atlan crawl from MongoDB?](/apps/connectors/database/mongodb/references/what-does-atlan-crawl-from-mongodb)

Copyright Â© 2025 Atlan Pte. Ltd.

