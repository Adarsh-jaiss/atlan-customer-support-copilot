# Source URL
https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/how-tos/crawl-amazon-dynamodb

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/how-tos/crawl-amazon-dynamodb
link-alternate: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/how-tos/crawl-amazon-dynamodb
meta-description: Once you have [configured the Amazon DynamoDB permissions](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb), you can establish a connection between Atlan and Amazon DynamoDB.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [configured the Amazon DynamoDB permissions](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb), you can establish a connection between Atlan and Amazon DynamoDB.
meta-og-locale: en
meta-og-title: Crawl Amazon DynamoDB | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/amazon-dynamodb/how-tos/crawl-amazon-dynamodb
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Amazon DynamoDB | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Amazon DynamoDB
=====================

Once you have [configured the Amazon DynamoDB permissions](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb), you can establish a connection between Atlan and Amazon DynamoDB.

To crawl metadata from Amazon DynamoDB, review the

[https://demo.arcade.software/i3BTLpGMgSmKpHnMOHog?embed](https://demo.arcade.software/i3BTLpGMgSmKpHnMOHog?embed)

[order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Amazon DynamoDB as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New Workflow**.
2. From the *Marketplace* page, click **Amazon DynamoDB Assets**.
3. In the right panel, click **Setup Workflow**.

Provide your credentials[â](#provide-your-credentials "Direct link to Provide your credentials")
--------------------------------------------------------------------------------------------------

To enter your Amazon DynamoDB credentials:

1. For *Extraction method*, *Direct* is the default extraction method.
2. For *Authentication,* choose the method you configured when [setting up the Amazon DynamoDB access permissions](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb):
    * For **IAM User** authentication, enter the [*AWS Access Key* and *AWS Secret Key* you downloaded](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb).
    * For **IAM Role** authentication, enter the [*AWS Role ARN* you configured](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb). (Optional) Enter the *AWS External ID* only if you have [configured an external ID](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb) in the role definition.
3. For *AWS Region*, enter the AWS region of your Amazon DynamoDB instance.
4. Click the **Test Authentication** button to confirm connectivity to Amazon DynamoDB.
5. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Amazon DynamoDB connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Amazon DynamoDB crawler, you can further configure it.

On the *Metadata*Â page, you can override the defaults for any of these options:

* To have the crawler ignore tables based on a naming convention, specify a regular expression in the *Exclude tables regex* field.
* To have the crawler include tables based on a naming convention, specify a regular expression in the *Include tables regex* field.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Amazon DynamoDB crawler, after completing the steps above:

* To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
* To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up Amazon DynamoDB](/apps/connectors/database/amazon-dynamodb/how-tos/set-up-amazon-dynamodb)[NextWhat does Atlan crawl from Amazon DynamoDB?](/apps/connectors/database/amazon-dynamodb/references/what-does-atlan-crawl-from-amazon-dynamodb)

Copyright Â© 2025 Atlan Pte. Ltd.

