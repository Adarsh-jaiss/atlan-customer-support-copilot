# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift
meta-description: Once you have configured the [Amazon Redshift access permissions](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift), you can establish a connection between Atlan and Amazon Redshift.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have configured the [Amazon Redshift access permissions](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift), you can establish a connection between Atlan and Amazon Redshift.
meta-og-locale: en
meta-og-title: Crawl Amazon Redshift | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/crawl-amazon-redshift
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Amazon Redshift | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Amazon Redshift
=====================

Once you have configured the [Amazon Redshift access permissions](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift), you can establish a connection between Atlan and Amazon Redshift.

To crawl metadata from Amazon Redshift, review the

[https://demo.arcade.software/7oeO1HFnw9Aa8TH6MXuP?embed](https://demo.arcade.software/7oeO1HFnw9Aa8TH6MXuP?embed)

[order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Amazon Redshift as your source:

1. In the top right corner of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Redshift Assets**, and click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Choose your extraction method:

* In **Direct** extraction, Atlan connects to your database and crawls metadata directly.
* In **Offline** extraction, you will need to first [extract metadata yourself](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) and [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases).

### Direct extraction method[â](#direct-extraction-method "Direct link to Direct extraction method")

To enter your Amazon Redshift credentials:

1. For *Host Name*, enter the host name of your Amazon Redshift instance. From your Redshift cluster you can find the host name in the *Configuration* section as a variable called *Endpoint*.
2. For *Port*, enter the port number for your Amazon Redshift instance. You can find this next to the host name in the *Configuration* section of your Redshift cluster.
3. For *Deployment Type*, click **Provisioned** if your Amazon Redshift instance is deployed on [provisioned clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/overview.html) or click **Serverless** if deployed on a [serverless workgroup](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-considerations.html).
4. For *Authentication*, choose the method you configured when [setting up the Amazon Redshift access permissions](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift):
    * For **Basic** authentication, enter the *Username* and *Password* you configured.
    * For **IAM User** authentication, enter the *AWS Access Key*, *AWS Secret Key*, and *Username* you configured for the database.
        + (Optional) This is only required if you are accessing a private cluster on provisioned deployment, using a Network Load Balancer (NLB), and connecting via IAM, for *Cluster ID*, enter the [name of the Amazon Redshift cluster](https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-configuration-options.html#jdbc20-clusterid-option) that you want to connect to.
        + (Optional) This is only required if you are accessing a private cluster on serverless deployment, for *Workgroup*, enter the [name of your workgroup](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-console-workgroups.html).
    * For **IAM Role** authentication, enter the *Username* you configured for the database only if your deployment type is *Provisioned*. For *Serverless* deployment type, you do not need to enter a username.
        + Set the *AWS Role ARN* to the ARN of the [role you created in your AWS account](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift).
        + (Optional) For *Region*, enter the AWS region of your Amazon Redshift instance.

### Offline extraction method[â](#offline-extraction-method "Direct link to Offline extraction method")

Atlan supports the [offline extraction method](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) for fetching metadata from Amazon Redshift. This method uses Atlan's metadata\-extractor tool to fetch metadata. You will need to first [extract the metadata](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) yourself and then [make it available in S3](/apps/connectors/database/on-premises-databases/how-tos/crawl-on-premises-databases).

To enter your S3 details:

1. For *Bucket name*, enter the name of your S3 bucket. If you are reusing Atlan's S3 bucket, you can leave this blank.
2. For *Bucket prefix*, enter the S3 prefix under which all the metadata files exist. These include `databases.json`, `columns-<database>.json`, and so on.
3. For *Bucket region*, enter the name of the S3 region.
4. When complete, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Amazon Redshift connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. (Optional) To prevent users from querying any Amazon Redshift data, change *Allow SQL Query* to **No**.
4. (Optional) To prevent users from previewing any Amazon Redshift data, change *Allow Data Preview* to **No**.
5. At the bottom of the screen, click the **Next** button to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Amazon Redshift crawler, you can further configure it.

You can override the defaults for any of these options:

* To select the assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To have the crawler ignore tables and views based on a naming convention, specify a regular expression in the *Exclude regex for tables \& views* field.
* (Optional) For *Advanced Config*, keep *Default* for the default configuration or click **Advanced** to configure the crawler:
    + For *Cross Connection*, click **Yes** to extract lineage across all available Amazon Redshift connections or click **No** to limit lineage extraction to the current connection.
    + For *Control Config*, if Atlan support has provided you with a custom control configuration, select **Custom** and enter the configuration into the *Custom Config* box. You can also:
        - Enter `{"ignore-all-case": true}` to enable crawling assets with case\-sensitive identifiers.
        - If you've configured a cloned schema to provide access to Atlan, add the following key\-value pair to the *Custom Config* field:
        
        
        ```
        {"clonedPgCatalogSchema": "cloned_schema_name"}  
        
        ```
        
            * Replace `cloned_schema_name` with the name of your cloned schema.
    + For *Use JDBC Internal Methods*, click **True** to enable JDBC internal methods for data extraction or click **False** to disable it.
    + For *Enable Source Level Filtering*, click **True** to enable schema\-level filtering at source or click **False** to disable it.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Amazon Redshift crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/data-warehouses/amazon-redshift/references/preflight-checks-for-amazon-redshift) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up a private network link to Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-a-private-network-link-to-amazon-redshift)[NextMine Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/mine-amazon-redshift)

Copyright Â© 2025 Atlan Pte. Ltd.

