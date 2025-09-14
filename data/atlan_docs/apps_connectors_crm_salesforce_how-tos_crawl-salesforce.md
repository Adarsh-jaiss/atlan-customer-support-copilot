# Source URL
https://docs.atlan.com/apps/connectors/crm/salesforce/how-tos/crawl-salesforce

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/crm/salesforce/how-tos/crawl-salesforce
link-alternate: https://docs.atlan.com/apps/connectors/crm/salesforce/how-tos/crawl-salesforce
meta-description: Once you have configured the [Salesforce user permissions](/apps/connectors/crm/salesforce/how-tos/set-up-salesforce), you can establish a connection between Atlan and Salesforce.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have configured the [Salesforce user permissions](/apps/connectors/crm/salesforce/how-tos/set-up-salesforce), you can establish a connection between Atlan and Salesforce.
meta-og-locale: en
meta-og-title: Crawl Salesforce | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/crm/salesforce/how-tos/crawl-salesforce
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Crawl Salesforce | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Crawl Salesforce
================

Once you have configured the [Salesforce user permissions](/apps/connectors/crm/salesforce/how-tos/set-up-salesforce), you can establish a connection between Atlan and Salesforce.

[https://demo.arcade.software/PQkGCi92oYzIvFwcf5f2?embed](https://demo.arcade.software/PQkGCi92oYzIvFwcf5f2?embed)

To crawl metadata from Salesforce, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

Select source[â](#select-source "Direct link to Select source")
-----------------------------------------------------------------

To select Salesforce as your source:

1. In the top right of any screen in Atlan, navigate to *New* and click **New Workflow**.
2. From the list of packages, click **Salesforce Assets**.
3. In the right panel, click **Setup Workflow**.

Provide credentials[â](#provide-credentials "Direct link to Provide credentials")
-----------------------------------------------------------------------------------

Enter credentials for your Salesforce integration in Atlan. The required fields vary depending on the authentication flow you choose.

* JWT bearer flow
* Client credentials flow
* Username\-password flow

To enter your Salesforce credentials:

1. For *Host Name*, enter the full URL for your Salesforce instance, including the `https://`. For example, `https://MyDomainName.my.salesforce.com`.
2. For *Authentication*, select **OAuth 2\.0 JWT Bearer**.
3. For *Username*, enter the [integration user's email address](/apps/connectors/crm/salesforce/how-tos/oauth-jwt-bearer-setup#create-integration-user).
4. For *Is this a Sandbox Org account?*, change to **Yes** if your org is a [copy of your production org](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_get_dev_account.htm).
5. For *Consumer Key*, enter the [consumer key for the connected app](/apps/connectors/crm/salesforce/how-tos/oauth-jwt-bearer-setup#create-connected-app).
6. For *Encrypted Private Key*, enter the [private key](/apps/connectors/crm/salesforce/how-tos/oauth-jwt-bearer-setup#prerequisites) from the `server.key` file in RSA256 format:
```
-----BEGIN PRIVATE KEY-----  
MIIEvgIBADANBgkqhkiG.......  
-----END PRIVATE KEY-----

    ```
7. Click **Test Authentication** at the bottom of the form to confirm connectivity.
8. When successful, click **Next** at the bottom of the screen.
To enter your Salesforce credentials:

1. For *Host Name*, enter the full URL for your Salesforce instance, including the `https://`. For example, `https://MyDomainName.my.salesforce.com`.
2. For *Authentication*, select **OAuth 2\.0 Client Credentials**.
3. For *Consumer Key (Client ID)*, enter the [Consumer Key from the external client app](/apps/connectors/crm/salesforce/how-tos/oauth-client-credentials-setup#create-external-client-app).
4. For *Consumer Secret (Client Secret)*, enter the [Consumer Secret from the external client app](/apps/connectors/crm/salesforce/how-tos/oauth-client-credentials-setup#create-external-client-app).
5. Click **Test Authentication** at the bottom of the form to confirm connectivity.
6. When successful, click **Next** at the bottom of the screen.
To enter your Salesforce credentials:

1. For *Host Name*, enter the full URL for your Salesforce instance, including the `https://`. For example, `https://MyDomainName.my.salesforce.com`.
2. For *Authentication*, keep the default option *Resource Owner*.
3. For *Username*, enter the integration user's email address.
4. For *Password*, enter the concatenation of the user's password and the [personal security token](/apps/connectors/crm/salesforce/how-tos/oauth-username-password-setup#retrieve-security-token). Entering either password or personal security token alone is insufficient. For example, password `xyz` \+ token `123` â enter `xyz123`.
5. For *Is this a Sandbox Org account?*, change to **Yes** if your org is a [copy of your production org](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_get_dev_account.htm).
6. For *Consumer Key*, enter the [consumer key for the connected app](/apps/connectors/crm/salesforce/how-tos/oauth-username-password-setup#create-connected-app).
7. For *Consumer Secret*, enter the [consumer secret for the connected app](/apps/connectors/crm/salesforce/how-tos/oauth-username-password-setup#create-connected-app).
8. Click **Test Authentication** at the bottom of the form to confirm connectivity.
9. When successful, click **Next** at the bottom of the screen.

Configure connection[â](#configure-connection "Direct link to Configure connection")
--------------------------------------------------------------------------------------

To complete the Salesforce connection configuration:

1. Provide a *Connection Name* that represents your source environment. For example, you might want to use values like `production`, `development`, `gold`, or `analytics`.
2. (Optional) To change the users able to manage this connection, change the users or groups listed under *Connection Admins*. If you don't specify any user or group, nobody can manage the connection \- not even admins.
3. At the bottom of the screen, click **Next** to proceed.

Configure crawler[â](#configure-crawler "Direct link to Configure crawler")
-----------------------------------------------------------------------------

Before running the Salesforce crawler, you can further configure it.

On the *Metadata* page:

1. For *Extract reports*, click **Yes** if you'd like to extract [report metadata](/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce#reports) or click **No**.
2. For *Extract dashboards*,Â click **Yes** if you'd like to extract [dashboard metadata](/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce#dashboards) or click **No**.

Run crawler[â](#run-crawler "Direct link to Run crawler")
-----------------------------------------------------------

To run the Salesforce crawler, after completing the previous steps:

1. To check for any [permissions or other configuration issues](/apps/connectors/crm/salesforce/references/preflight-checks-for-salesforce) before running the crawler, click **Preflight checks**.
2. You can either:
    * To run the crawler once immediately, at the bottom of the screen, click the **Run** button.
    * To schedule the crawler to run hourly, daily, weekly, or monthly, at the bottom of the screen, click the **Schedule Run** button.

Once the crawler has completed running, you can see the assets in Atlan's asset page! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [salesforce](/tags/salesforce)
* [setup](/tags/setup)

[PreviousSet up username\-password flow](/apps/connectors/crm/salesforce/how-tos/oauth-username-password-setup)[NextWhat does Atlan crawl from Salesforce?](/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce)

Copyright Â© 2025 Atlan Pte. Ltd.

