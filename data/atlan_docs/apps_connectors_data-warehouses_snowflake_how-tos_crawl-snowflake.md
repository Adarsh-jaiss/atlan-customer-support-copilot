# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake
meta-description: To crawl metadata from Snowflake, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from Snowflake, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl Snowflake | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Snowflake | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Snowflake
===============

Once you have configured the [Snowflake user permissions](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake), you can establish a connection between Atlan and Snowflake. (If you are also using [AWS PrivateLink](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake) or [Azure Private Link](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake) for Snowflake, you will need to set that up first, too.)

[https://demo.arcade.software/R0jHRsIhvNe9oluWOR3y?embed](https://demo.arcade.software/R0jHRsIhvNe9oluWOR3y?embed)

To crawl metadata from Snowflake, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Snowflake as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Snowflake Assets** and click on **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Offline** extraction, you will need to first [extract metadata yourself](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) and [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases). This is currently only supported when using the [information schema extraction method to fetch metadata with basic authentication](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases).
* In **Agent** extraction, Atlan's secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Snowflake credentials:

1. For *Account Identifiers (Host)*, enter the hostname, [AWS PrivateLink endpoint](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake), or [Azure Private Link endpoint](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake) for your Snowflake instance.
2. For *Authentication*, choose the method you configured when [setting up the Snowflake user](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#create-a-user):
    * For **Basic** authentication, enter the *Username* and *Password* you configured in either Snowflake or the identity provider.
    
    info ðª **Did you know?** Snowflake recommends transitioning away from basic authentication using username and password. Change to [key\-pair authentication](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#create-a-user) for enhanced security. For any existing Snowflake workflows, you can [modify the crawler configuration](/product/connections/how-tos/manage-connectivity) to update the authentication method.
    * For **Keypair** authentication, enter the *Username*, *Encrypted Private Key*, and *Private Key* *Password* you configured. Atlan only supports encrypted private keys with a non\-empty passphrase \- generally recommended as more secure. An empty passphrase will result in workflow failures. To generate an encrypted private key, refer to [Snowflake documentation](https://docs.snowflake.com/en/user-guide/key-pair-auth).
    * For **Okta SSO** authentication,Â enter the *Username*,Â*Password*, and *Authenticator* you configured. The *Authenticator* will be the [Okta URL endpoint of your Okta account](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use#native-sso-okta-only), typically in the form of `https://<okta_account_name>.okta.com`.
3. For *Role*, select the Snowflake role through which the crawler should run.
4. For *Warehouse*, select the Snowflake warehouse in which the crawler should run.
5. Click **Test Authentication** to confirm connectivity to Snowflake using these details.
6. Once successful, at the bottom of the screen, click **Next**.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan supports the [offline extraction method](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) for fetching metadata from Snowflake. This method uses Atlan's metadata\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) yourself and then [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket. If you are reusing Atlan's S3 bucket, you can leave this blank.
2. ForÂ*Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `databases.json`, `columns-<database>.json`, and so on.
3. For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Snowflake connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. (Optional) To prevent users from querying any Snowflake data, change *Allow SQL Query* to **No**.
4. (Optional) To prevent users from previewing any Snowflake data, change *Allow Data Preview* to **No**.
5. At the bottom of the screen, click **Next** to proceed.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from Snowflake. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the Snowflake data source by adding the secret keys for your secret store. For details on the required fields, refer to the [Direct extraction](#direct-extraction-method) section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

dangerWhen [modifying](/product/connections/how-tos/manage-connectivity) an existing Snowflake connection, switching to a different [extraction method](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#choose-metadata-fetching-method) will delete and recreate all assets in the existing connection. If you'd like to change the extraction method, [contact Atlan support](/support/submit-request)Â for assistance.

Before running the Snowflake crawler, you can further configure it.

You must select the *Extraction method* you configured when you [set up Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake):

* For **Information Schema**Â[method](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#choose-metadata-fetching-method), keep the default selection.
* Change to **Account Usage** [method](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#choose-metadata-fetching-method)Â and specify the following:
    + *Database Name* of the copied Snowflake database
    + *Schema Name* of the copied `ACCOUNT_USAGE` schema
    + **Incremental extraction** Public preview \- Toggle incremental extraction for faster and more efficient metadata extraction.

You can override the defaults for any of the remaining options:

* For *Asset selection*, select a filtering option:

    + To select the assets you want to include in crawling, click **Include by hierarchy** and filter for assets down to the database or schema level. (This will default to all assets, if none are specified.)
    + To have the crawler include *Databases*, *Schemas*, or *Tables \& Views* based on a naming convention, click **Include by regex** and specify a regular expression \- for example, specifying `ATLAN_EXAMPLE_DB.*` for *Databases* will include all the matching databases and their child assets.
    + To select the assets you want to exclude from crawling, click **Exclude by hierarchy** and filter for assets down to the database or schema level. (This will default to no assets, if none are specified.)Â
    + To have the crawler ignore *Databases*, *Schemas*, or *Tables \& Views* based on a naming convention, click **Exclude by regex** and specify a regular expression \- for example, specifying `ATLAN_EXAMPLE_TABLES.*` for *Tables \& Views* will exclude all the matching tables and views.
    + Click **\+** to add more filters. If you add multiple filters, assets will be crawled based on matching *all* the filtering conditions you have set.
* To exclude lineage for views in Snowflake, change *View Definition Lineage* to **No**.
* To [import tags from Snowflake to Atlan](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags), change *Import Tags* to **Yes**. Note the following:

    + If using the *Account Usage* extraction method, [grant the same permissions](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#grant-permissions-for-account-usage-method) as required for crawling Snowflake assets to import tags and push updated tags to Snowflake.
    + If using the *Information Schema* extraction method, note that Snowflake [stores all tag objects](https://docs.snowflake.com/en/user-guide/object-tagging#discover-tags) in the `ACCOUNT_USAGE` schema. You will need to [grant permissions on the account usage schema instead to import tags](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake#grant-permissions-for-account-usage-method) from Snowflake.
danger Object tagging in Snowflake currently requires [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions#feature-edition-matrix). If your organization does not have Enterprise Edition or higher and you try to import Snowflake tags to Atlan, the Snowflake connection will fail with an error \- unable to retrieve tags.
* For *Control Config*, keep *Default* for the default configuration or click **Custom** to further configure the crawler:

    + If you have received a custom crawler configuration from Atlan support, for *Custom Config*, enter the value provided. You can also:
        - Enter `{"ignore-all-case": true}` to enable crawling assets with case\-sensitive identifiers.
    + For *Enable Source Level Filtering*, click **True** to enable schema\-level filtering at source or keep *False* to disable it.
    + For *Use JDBC Internal Methods*, click **True** to enable JDBC internal methods for data extraction or click **False** to disable it.
    + For *Exclude tables with empty data*, change to **Yes** to exclude any tables and corresponding columns without any data.
    + For *Exclude views*, change to **Yes** to exclude all views from crawling.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Snowflake crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/data-warehouses/snowflake/references/preflight-checks-for-snowflake) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

Note that the Atlan crawler will currently skip any unsupported data types to ensure a successful workflow run.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousHow to enable Snowflake OAuth](/apps/connectors/data-warehouses/snowflake/how-tos/enable-snowflake-oauth)[NextMine Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake)

Copyright Â© 2025 Atlan Pte. Ltd.

