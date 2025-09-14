# Source URL
https://docs.atlan.com/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena
link-alternate: https://docs.atlan.com/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena
meta-description: To crawl metadata from Amazon Athena, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from Amazon Athena, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl Amazon Athena | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/amazon-athena/how-tos/crawl-amazon-athena
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Amazon Athena | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Amazon Athena
===================

[https://demo.arcade.software/a6EsDqSA7BTrOSMuxuZa?embed](https://demo.arcade.software/a6EsDqSA7BTrOSMuxuZa?embed)

Once you have configured the [Amazon Athena access permissions](/apps/connectors/database/amazon-athena/how-tos/set-up-amazon-athena), you can establish a connection between Atlan and Amazon Athena. (If you are also using a private network for Amazon Athena, you will need to [set that up first](/apps/connectors/database/amazon-athena/how-tos/set-up-a-private-network-link-to-amazon-athena), too.)

To crawl metadata from Amazon Athena, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Amazon Athena as your source:

1. In the top right corner of any screen, navigate to **New** and then click **New Workflow**.
2. From the list of packages, select **Athena Assets**, and click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Amazon Athena credentials:

1. ForÂ*Host* enter the host name (or [PrivateLink endpoint](/apps/connectors/database/amazon-athena/how-tos/set-up-a-private-network-link-to-amazon-athena)) for your Amazon Athena instance.
2. ForÂ*Authentication* choose the method you configured when [setting up the Amazon Athena access permissions](/apps/connectors/database/amazon-athena/how-tos/set-up-amazon-athena):
    * At the bottom, enter the *AWS Role ARN* and *S3 Output Location* you configured. The *S3 Output Location* is where you store temporary Athena query results.
    * For **IAM User** authentication, enter the *AWS Access Key* and *AWS Secret Key* you configured.
    * For **IAM Role** authentication, enter the following:
        + Set the *AWS Role ARN* to the ARN of the [role you created in your AWS account](/apps/connectors/database/amazon-athena/how-tos/set-up-amazon-athena).
        + (Optional) Under *External ID*, click the **Generate** button. Click the button to the right of this field to copy the generated ID and use it in [setting up your trust policy](/apps/connectors/database/amazon-athena/how-tos/set-up-amazon-athena#role-delegation-based-authentication).
3. (Optional) For *Workgroup*, you can override the defaultÂ*primary* [workgroup](https://docs.aws.amazon.com/athena/latest/ug/user-created-workgroups.html) for tracking compute costs, granular permission controls, and more.
4. Click **Test Authentication** to confirm connectivity to Amazon Athena.
5. Once successful, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Amazon Athena connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. (Optional) To prevent users from querying any Amazon Athena data, change *Allow SQL Query* toÂ**No**.
4. (Optional) To prevent users from previewing any Amazon Athena data, change *Allow Data Preview* toÂ**No**.
5. At the bottom of the screen, click the **Next** button to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Amazon Athena crawler, you can further configure it.

You can override the defaults for any of these options:

* To select the assets you want to include in crawling, click **Include Metadata**. (This will default to all assets, if none are specified.)
* To select the assets you want to exclude from crawling, click **Exclude Metadata**. (This will default to no assets if none are specified.)
* To have the crawler ignore tables and views based on a naming convention, specify a [Java regular expression](https://www.freeformatter.com/java-regex-tester.html) in theÂ*Exclude regex for tables \& views* field.
* For *Advanced Config*, keep *Default* for the default configuration or click **Custom** to configure the crawler:
    + For *Use JDBC Internal Methods*, click **True** to enable JDBC internal methods for data extraction or click **False** to disable it.
    + For *Enable Source Level Filtering*, click **True** to enable schema\-level filtering at source or click **False**Â to disable it.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Amazon Athena crawler, after completing the steps above:

* To run the crawler once, immediately, at the bottom of the screen click the **Run** button.
* To schedule the crawler to run hourly, daily, weekly or monthly, at the bottom of the screen click the **Schedule \& Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up a private network link to Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/set-up-a-private-network-link-to-amazon-athena)[NextWhat does Atlan crawl from Amazon Athena?](/apps/connectors/database/amazon-athena/references/what-does-atlan-crawl-from-amazon-athena)

Copyright Â© 2025 Atlan Pte. Ltd.

