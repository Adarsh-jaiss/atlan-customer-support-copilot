# Source URL
https://docs.atlan.com/apps/connectors/database/mongodb/how-tos/set-up-mongodb

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/mongodb/how-tos/set-up-mongodb
link-alternate: https://docs.atlan.com/apps/connectors/database/mongodb/how-tos/set-up-mongodb
meta-description: Atlan supports the basic authentication method for fetching metadata from MongoDB. This method uses a [username and password](#create-database-user-in-mongodb) to fetch metadata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports the basic authentication method for fetching metadata from MongoDB. This method uses a [username and password](#create-database-user-in-mongodb) to fetch metadata.
meta-og-locale: en
meta-og-title: Set up MongoDB | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/mongodb/how-tos/set-up-mongodb
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up MongoDB | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up MongoDB
==============

Who can do this?Atlan currently only supports integration with [MongoDB Atlas](https://www.mongodb.com/atlas/database). You will need your MongoDB [*Organization Owner* or *Project Owner*](https://www.mongodb.com/docs/atlas/references/user-roles/) to complete these steps \- you may not have access yourself.

Atlan supports the basic authentication method for fetching metadata from MongoDB. This method uses a [username and password](#create-database-user-in-mongodb) to fetch metadata.

You will also need the following [connection details](#retrieve-connection-details) from your MongoDB database deployment for [integrating with Atlan](/apps/connectors/database/mongodb/how-tos/crawl-mongodb):

* Host name of your MongoDB database
* Host name of the SQL (or JDBC) endpoint of your MongoDB database obtained via [Data Federation](https://www.mongodb.com/products/platform/atlas-data-federation)
* Name of the default database
* Name of the authentication database

Create database user in MongoDB[â](#create-database-user-in-mongodb "Direct link to Create database user in MongoDB")
-----------------------------------------------------------------------------------------------------------------------

You will need to create a database user in MongoDB to allow Atlan to [crawl MongoDB](/apps/connectors/database/mongodb/how-tos/crawl-mongodb). A database user's access is determined by the role assigned to that user.

You can either:

* Create a database user with a [built\-in role](https://www.mongodb.com/docs/atlas/mongodb-users-roles-and-privileges/#std-label-atlas-user-privileges) \- provides read\-only access to all databases.
* Create a database user with a [custom role](https://www.mongodb.com/docs/atlas/security-add-mongodb-roles/#std-label-mongodb-roles) \- provides restricted access to selected databases and requires allowed actions.

### Create database user with built\-in role[â](#create-database-user-with-built-in-role "Direct link to Create database user with built-in role")

To [add a database user](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/#add-database-users) with a built\-in role for [crawling MongoDB](/apps/connectors/database/mongodb/how-tos/crawl-mongodb):

1. Sign in to your MongoDB database.
2. From the left menu of the *Data Services* page, under the *Security* heading, click **Database Access**.
3. In the upper right of the *Database Access* page, click **Add New Database User**.
4. In the *Add New Database User* dialog, enter the following details:
    1. For *Authentication Method*, keep the default **Password**.
    2. For *Password Authentication*, there are two text fields:
        1. Enter a username for the new database user in the top text field \- for example, `atlan_user`.
        2. Enter a password in the lower text field or click the **Autogenerate Secure Password** button to copy and use an auto\-generated password.
    3. To assign database privileges to the new user, for *Database Privileges*, under *Built\-in Role*, click the **Add Built\-in Role** dropdown to select a [built\-in role](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/#std-label-atlas-user-privileges):
        1. From the *Select role* dropdown, click **Only read any database** to assign read\-only access to your MongoDB database(s).
    4. (Optional) By default, users can access all the clusters and federated database instances in the project. To restrict access to specific clusters and federated database instances:
        1. Toggle on **Restrict Access to Specific Clusters/Federated Database Instances**.
        2. For *Grant Access To*, check the boxes next to the clusters and federated database instances to which you want to grant access to the new database user.
    5. At the bottom of the dialog, click **Add User** to finish setup.

### Create database user with custom role[â](#create-database-user-with-custom-role "Direct link to Create database user with custom role")

If you have a large number of databases, you can programmatically create a custom role in MongoDB using Atlas API instead \- refer to [MongoDB documentation](https://www.mongodb.com/docs/atlas/references/api-resources-spec/v2/#operation/createCustomDatabaseRole) to learn more.

To [add a database user](https://www.mongodb.com/docs/atlas/security-add-mongodb-users/#add-database-users) with a custom role for [crawling MongoDB](/apps/connectors/database/mongodb/how-tos/crawl-mongodb):

1. Sign in to your MongoDB database.
2. From the left menu of the *Data Services* page, under the *Security* heading, click **Database Access**.
3. In the *Database Access* page, change to the **Custom Roles** tab.
4. In the upper right of the *Custom Roles*Â page, click **Add New Custom Role**.
5. In the *Add Custom Role* dialog, for *Custom Role Name*, enter a meaningful name \- for example, `atlan_integration`.
6. For *Action or Role*, click **Select Actions or Roles** and grant the following privileges to the custom role:
    * **listDatabases**, listed under *Global Actions and Roles* \- to list all existing databases in the cluster.
    * **sqlGetSchema**, listed under *Global Actions and Roles* \- to retrieve collection schema generated by MongoDB Atlas Data Federation without read or find permission on the database or collection.
    * **listCollections**, listed under *Database Actions and Roles* \- to list collections in a database.
        + For *Database*, specify all the databases you want to crawl in Atlan.
        + For *Collection*, you can either specify collections within selected databases or leave blank to include all.
    * **collStats**, listed under *Collection Actions* \- to retrieve collection metadata such as average document size, document count, and more.
        + For *Database*, specify all the databases you want to crawl in Atlan.
        + For *Collection*, you can either specify collections within selected databases or leave blank to include all.
    * **find**, listed under *Collection Actions* \- this action provides read permission on the data. Atlan requires this action for the MongoDB JDBC driver to validate Atlan's connection to the database.
        + For *Database*, specify all the databases you want to crawl in Atlan.
        + For *Collection*, you can either specify collections within selected databases, leave blank to include all, or restrict read access by specifying a nonexistent collection such as `na`, `none`, or `-` against a selected database.
7. Click **Add Custom Role** to complete setup.
8. In the *Database Access* page, change to the **Database Users**Â tab.
9. In the upper right of the *Database Access* page, click **Add New Database User**.
10. In the *Add New Database User* dialog, enter the following details:
11. For *Authentication Method*, keep the default **Password**.
12. For *Password Authentication*, there are two text fields:
    1. Enter a username for the new database user in the top text field \- for example, `atlan_user`.
    2. Enter a password in the lower text field or click the **Autogenerate Secure Password** button to copy and use an auto\-generated password.
13. To assign database privileges to the new user, for *Database Privileges*, under *Custom Roles*, click the **Add Custom Role** dropdown. From the *Select role* dropdown, select the custom role you created previously.
14. (Optional) By default, users can access all the clusters and federated database instances in the project. To restrict access to specific clusters and federated database instances:
    1. Toggle on **Restrict Access to Specific Clusters/Federated Database Instances**.
    2. For *Grant Access To*, check the boxes next to the clusters and federated database instances to which you want to grant access to the new database user.
15. At the bottom of the dialog, click **Add User** to finish setup.

[Data Federation](https://www.mongodb.com/products/platform/atlas-data-federation) enables a SQL\-like interface for Atlan to interact with MongoDB. It also provides schema access to collections that are either generated automatically through sampling or manual updates. This allows Atlan to fetch metadata without read access to databases or collections through the `sqlGetSchema` permission.

Retrieve connection details[â](#retrieve-connection-details "Direct link to Retrieve connection details")
-----------------------------------------------------------------------------------------------------------

To [retrieve connection details](https://www.mongodb.com/docs/manual/references/connection-string/#std-label-connections-standard-connection-string-format) forÂ[crawling MongoDB](/apps/connectors/database/mongodb/how-tos/crawl-mongodb):

1. Sign in to your MongoDB database.
2. From the left menu of the *Data Services* page, under the *Overview* heading, click **Database**.
3. On the *Database Deployment* page, navigate to the database deployment you want to crawl in Atlan and click **Connect**. From the corresponding page, under *Connect to your application*:
    1. Click **Drivers**, and then navigate to the *Add your connection string into your application code* section:
        1. Copy the host name of your MongoDB database from the code snippet and store it in a secure location. For example, in `mongodb://myDBReader:D1fficultP%[[email protected]](/cdn-cgi/l/email-protection):27017/?authSource=admin`, `mongodb0.example.com` will be the *MongoDB native host*.
        2. Close the dialog box and return to the *Connect to your application*Â page.
    2. Click **Atlas SQL**, and then navigate to the *Select your driver* heading:
        1. From the driver dropdown, click **JDBC Driver**.
        2. Navigate to the *Get Connection String* heading, and then for *URL*, copy the following connection details and store them in a secure location. As an example, `jdbc:mongodb://atlas-sql-64c0b504b658f37cd67dc406-xtapf.a.query.mongodb.net/atlan_db?ssl=trueauth&Source=admin`:
            * Copy the host name of the SQL (or JDBC) endpoint of your MongoDB databaseÂ`atlas-sql-64c0b504b658f37cd67dc406-xtapf.a.query.mongodb.net` to enter as the *SQL interface host name*.
            * Copy the name of the default database `atlan_db` to enter as the *Default database*.
            * Copy the name of the authentication databaseÂ`admin` to enter as the *Authentication database*.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [integration](/tags/integration)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousMongoDB](/apps/connectors/database/mongodb)[NextCrawl MongoDB](/apps/connectors/database/mongodb/how-tos/crawl-mongodb)

Copyright Â© 2025 Atlan Pte. Ltd.

