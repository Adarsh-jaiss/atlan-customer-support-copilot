# Source URL
https://docs.atlan.com/apps/connectors/database/datastax-enterprise/how-tos/crawl-datastax-enterprise

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/how-tos/crawl-datastax-enterprise
link-alternate: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/how-tos/crawl-datastax-enterprise
meta-description: Crawl DataStax Enterprise
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Crawl DataStax Enterprise
meta-og-locale: en
meta-og-title: Crawl DataStax Enterprise | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/how-tos/crawl-datastax-enterprise
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl DataStax Enterprise | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl DataStax Enterprise
=========================

Once you have [configured DataStax Enterprise](/apps/connectors/database/datastax-enterprise/how-tos/set-up-datastax-enterprise), you can establish a connection between Atlan and DataStax Enterprise.

To crawl metadata from DataStax Enterprise, review

[https://demo.arcade.software/a71x256p2lQfE31WPQ85?embed](https://demo.arcade.software/a71x256p2lQfE31WPQ85?embed)

the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select DataStax Enterprise as your source:

1. In the top right of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **DataStax Enterprise Assets** and click the **Setup Workflow** button.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

* InÂ**Direct** extraction, Atlan connects to DataStax Enterprise and crawls metadata directly.
* InÂ**Agent** extraction, Atlan's secure agent executes metadata extraction within the organization's environment.

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your DataStax Enterprise credentials:

1. For *Host Name*, enter the host name of your DataStax Enterprise instance.
2. For *Port*, enter the port number of your DataStax Enterprise instance.
3. For *Authentication*, **Basic** authentication, enter the *Username* and *Password* you use to log in to DataStax Enterprise.
4. (Optional) For *SSL*, keep the default *Enabled* to use HTTPS or click **Disabled** to use HTTP.
5. (Optional) For *SSL certificate*, this is only required if [your DataStax Enterprise instance uses a self\-signed or an internal CA SSL certificate](/apps/connectors/database/datastax-enterprise/how-tos/set-up-datastax-enterprise), paste a [supported SSL certificate in the recommended format](/product/connections/how-tos/provide-ssl-certificates).
6. At the bottom of the form, click the **Test Authentication** button to confirm connectivity to DataStax Enterprise using these details.
7. When successful, at the bottom of the screen click the **Next** button.

### Agent extraction method[â](#agent-extraction-method "Direct link to Agent extraction method")

Atlan supports using a Secure Agent for fetching metadata from DataStax Enterprise. To use a Secure Agent, follow these steps:

1. Select the **Agent** tab.
2. Configure the DataStax Enterprise data source by adding the secret keys for your secret store. For details on the required fields, refer to the Direct extraction section.
3. Complete the Secure Agent configuration by following the instructions in the [How to configure Secure Agent for workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution) guide.
4. Click **Next** after completing the configuration.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the DataStax Enterprise connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the DataStax Enterprise crawler, you can further configure it.

1. On the *Metadata* page, you can override the defaults for any of these options:
    * To select the DataStax Enterprise keyspaces you want to include in crawling, click **Include Keyspaces**. (This will default to all assets, if none are specified.)
    * To select the DataStax Enterprise keyspaces you want to exclude from crawling, click **Exclude Keyspaces**. (This will default to no assets, if none are specified.)
    * To have the crawler ignore DataStax Enterprise keyspaces based on a naming convention, specify a regular expression in the *Exclude Keyspaces Regex* field.
2. To check for any [permissions or other configuration issues](/apps/connectors/database/datastax-enterprise/references/preflight-checks-for-datastax-enterprise) before running the crawler, click **Preflight checks**.

**Did you know?**If a keyspace appears in both the include and exclude filters, the exclude filter takes precedence. (The *Exclude Keyspace Regex* also takes precedence.)

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up DataStax Enterprise](/apps/connectors/database/datastax-enterprise/how-tos/set-up-datastax-enterprise)[NextWhat does Atlan crawl from DataStax Enterprise?](/apps/connectors/database/datastax-enterprise/references/what-does-atlan-crawl-from-datastax-enterprise)

Copyright Â© 2025 Atlan Pte. Ltd.

