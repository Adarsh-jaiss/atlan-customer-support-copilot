# Source URL
https://docs.atlan.com/apps/connectors/messaging/amazon-msk/how-tos/crawl-amazon-msk

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/how-tos/crawl-amazon-msk
link-alternate: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/how-tos/crawl-amazon-msk
meta-description: To crawl metadata from Amazon MSK, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To crawl metadata from Amazon MSK, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.
meta-og-locale: en
meta-og-title: Crawl Amazon MSK | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/amazon-msk/how-tos/crawl-amazon-msk
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Amazon MSK | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Amazon MSK
================

[https://demo.arcade.software/WnmYyE1LDbAYagL8B6IA?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/WnmYyE1LDbAYagL8B6IA?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

Once you have [configured the Amazon MSK permissions](/apps/connectors/messaging/amazon-msk/how-tos/set-up-amazon-msk), you can establish a connection between Atlan and Amazon MSK. (If you are also using a private network for Amazon MSK, you will need to [set that up first](/apps/connectors/messaging/amazon-msk/how-tos/set-up-a-private-network-link-to-amazon-msk), too.)

To crawl metadata from Amazon MSK, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select the source[â](#select-the-source "Direct link to Select the source")
-----------------------------------------------------------------------------

To select Amazon MSK as your source:

1. In the top right of any screen in Atlan, navigate to *\+New* and click **New workflow**.
2. From the *Marketplace* page, click **Amazon MSK Assets**.
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

To enter your Amazon MSK credentials:

1. For *Extraction method*, *Direct* is the default selection.
2. For *Bootstrap servers*, enter the hostname(s) (or [PrivateLink cluster connection string](/apps/connectors/messaging/amazon-msk/how-tos/set-up-a-private-network-link-to-amazon-msk)) of your Amazon MSK broker(s) \- for multiple hostnames, separate each entry with a comma `,` or semicolon `;`.
3. For *Authentication*, *IAM Role* is the default authentication method.
4. For *Deployment Type*, *Provisioned* is the default deployment type.
5. For *Security protocol*, *SASL\_SSL* is the default security protocol.
6. For *AWS Role ARN*, enter the ARN of the [IAM role you created in your AWS account](/apps/connectors/messaging/amazon-msk/how-tos/set-up-amazon-msk).
7. For *AWS Region*, enter the AWS region of your Amazon MSK cluster.
8. Click the **Test Authentication** button to confirm connectivity to Amazon MSK.
9. Once authentication is successful, navigate to the bottom of the screen and click **Next**.

Configure the connection[â](#configure-the-connection "Direct link to Configure the connection")
--------------------------------------------------------------------------------------------------

To complete the Amazon MSK connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. Navigate to the bottom of the screen and click **Next** to proceed.

Configure the crawler[â](#configure-the-crawler "Direct link to Configure the crawler")
-----------------------------------------------------------------------------------------

Before running the Amazon MSK crawler, you can further configure it.

On the *Metadata* page, you can override the defaults for any of these options:

* For *Skip internal topics*, keep the default option **Yes** to skip [internal Apache Kafka topics](https://kafka.apache.org/11/documentation/streams/developer-guide/manage-topics#streams-developer-guide-topics-internal) or click **No** to enable crawling them.
* To have the crawler ignore topics based on a naming convention, specify a regular expression in the *Exclude topic regex* field.
* To have the crawler include topics based on a naming convention, specify a regular expression in the *Include topic regex* field.

**Did you know?**If an asset appears in both the include and exclude filters, the exclude filter takes precedence.

Run the crawler[â](#run-the-crawler "Direct link to Run the crawler")
-----------------------------------------------------------------------

To run the Amazon MSK crawler, after completing the steps above:

1. To check for any [permissions or other configuration issues](/apps/connectors/messaging/amazon-msk/references/preflight-checks-for-amazon-msk) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run**Â button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule \& Run**Â button.

Once the crawler has completed running, you will see the assets on Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousSet up a private network link to Amazon MSK](/apps/connectors/messaging/amazon-msk/how-tos/set-up-a-private-network-link-to-amazon-msk)[NextWhat does Atlan crawl from Amazon MSK?](/apps/connectors/messaging/amazon-msk/references/what-does-atlan-crawl-from-amazon-msk)

Copyright Â© 2025 Atlan Pte. Ltd.

