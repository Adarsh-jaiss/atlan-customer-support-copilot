# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/how-tos/crawl-aws-glue

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/how-tos/crawl-aws-glue
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/how-tos/crawl-aws-glue
meta-description: Once you have configured the [AWS Glue access permissions](/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue), you can establish a connection between Atlan and AWS Glue.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have configured the [AWS Glue access permissions](/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue), you can establish a connection between Atlan and AWS Glue.
meta-og-locale: en
meta-og-title: Crawl AWS Glue | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/aws-glue/how-tos/crawl-aws-glue
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl AWS Glue | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl AWS Glue
==============

[https://demo.arcade.software/oiFGj9XGSuYZQzx7tY4n?embed](https://demo.arcade.software/oiFGj9XGSuYZQzx7tY4n?embed)

Once you have configured the [AWS Glue access permissions](/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue), you can establish a connection between Atlan and AWS Glue.

To crawl metadata from AWS Glue, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select AWS Glue as your source:

1. In the top right corner of any screen, navigate to **New**Â and then click **New Workflow**.
2. From the list of packages, select **Glue Assets**, and click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your AWS Glue credentials:

1. For *Authentication*, choose the method you configured when [setting up the AWS Glue access permissions](/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue):
    1. At the bottom, enter the *Region* of your AWS Glue deployment.
    2. ForÂ**IAM User** authentication, enter theÂ*AWS Access Key* and *AWS Secret Key* you configured.
    3. ForÂ**IAM Role** authentication, enter the following:
        * Set the *AWS Role ARN* to the ARN of the [role you created in your AWS account](/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue).
        * (Optional) Under *External ID*, click the **Generate** button. Click the button to the right of this to copy the generated ID and use this in [setting up your trust policy](/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue#role-delegation-based-authentication).
2. ClickÂ**Test Authentication** to confirm connectivity to AWS Glue.
3. Once successful, at the bottom of the screen, click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the AWS Glue connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, nobody will be able to manage the connection \- not even admins.
3. At the bottom of the screen, click the **Next** button to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the AWS Glue crawler, you can further configure it.

You can override the defaults for any of these options:

* Select assets you want to include in crawling in the *Include Metadata* field. (This will default to all assets, if none are specified.)
* Select assets you want to exclude from crawling in the *Exclude Metadata* field. (This will default to no assets, if none are specified.)

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the AWS Glue crawler, after completing the steps above:

* To run the crawler once, immediately, at the bottom of the screen click the **Run** button.
* To schedule the crawler to run hourly, daily, weekly or monthly, at the bottom of the screen click the **Schedule \& Run** button.

Once the crawler has completed running, you will see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousSet up AWS Glue](/apps/connectors/etl-tools/aws-glue/how-tos/set-up-aws-glue)[NextWhat does Atlan crawl from AWS Glue?](/apps/connectors/etl-tools/aws-glue/references/what-does-atlan-crawl-from-aws-glue)

Copyright Â© 2025 Atlan Pte. Ltd.

