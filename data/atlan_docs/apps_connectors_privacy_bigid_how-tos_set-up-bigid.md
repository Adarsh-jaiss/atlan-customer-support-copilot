# Source URL
https://docs.atlan.com/apps/connectors/privacy/bigid/how-tos/set-up-bigid

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/privacy/bigid/how-tos/set-up-bigid
link-alternate: https://docs.atlan.com/apps/connectors/privacy/bigid/how-tos/set-up-bigid
meta-description: Create a BigID system user and API token for Atlan integration.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Create a BigID system user and API token for Atlan integration.
meta-og-locale: en
meta-og-title: Set up BigID | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/privacy/bigid/how-tos/set-up-bigid
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up BigID | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up BigID
============

Create a BigID system user account and generate an API token for Atlan to access BigID metadata. This guide walks through creating a custom role, system user, and API token.

Permissions required[â](#permissions-required "Direct link to Permissions required")
--------------------------------------------------------------------------------------

To successfully set up BigID for Atlan integration, confirm that your user role has the necessary permissions:

* **BigID**: Administrator access to create roles and system users

Create custom role[â](#create-custom-role "Direct link to Create custom role")
--------------------------------------------------------------------------------

Create a custom role for Atlan to access BigID metadata. Follow these steps that provide privileges only to read metadata of assets and not the actual data contained in Catalog objects.

* Log in to your BigID instance
* Navigate to **Settings** â **Access Management** â **Roles**
* Click **Add New Role**
* Give a meaningful and unique name. For example, *Atlan Integration* as the role name
* Select **root** as scope.
* Add the following permissions:
    + **Catalog**: Read, Export, Get Attributes Value, View Sensitive Values, Manual Fields (Read), Business Attributes (Read)
    + **Data Sources**: Read
    + **Policies**: Read
    + **Security Posture**: Read
* Click **Save**

Create system user[â](#create-system-user "Direct link to Create system user")
--------------------------------------------------------------------------------

Atlan uses a system user to authenticate and retrieve metadata from BigID. Follow these steps to create a system user:

* Navigate to **Settings** â **Access Management** â **System Users**
* Click **Add New Role**
* Fill in the required user details
* Click **Connect Roles** and select the **Atlan Integration** role
* Click **Save**

Generate API token[â](#generate-api-token "Direct link to Generate API token")
--------------------------------------------------------------------------------

Atlan uses the API token in Workflow configure to autheticate with BigID. Follow these steps to generate an API token for the system user:

* Select the system user you just created
* In the details panel, click **Generate** under **Tokens**
* Set the token expiry period and click **Generate**
* Copy and save the token securely for use in Atlan workflow configuration
* Click **Save**

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you encounter issues during the BigID setup process:

* **BigID documentation**: Refer to the [BigID documentation](https://docs.bigid.com/) for detailed information about roles, system users, and API tokens
* **Contact Atlan support**: For issues related to Atlan integration, [contact Atlan support](/support/submit-request)

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

* [Crawl BigID](/apps/connectors/privacy/bigid/how-tos/crawl-bigid)
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [privacy](/tags/privacy)
* [bigid](/tags/bigid)

[PreviousBigID](/apps/connectors/privacy/bigid)[NextCrawl BigID](/apps/connectors/privacy/bigid/how-tos/crawl-bigid)

Copyright Â© 2025 Atlan Pte. Ltd.

