# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/redash/how-tos/set-up-redash

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/redash/how-tos/set-up-redash
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/redash/how-tos/set-up-redash
meta-description: :::warning Who can do this? You will probably need your Redash administrator to complete the following steps - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Redash administrator to complete the following steps - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Redash | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/redash/how-tos/set-up-redash
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Redash | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Redash
=============

Who can do this?You will probably need your Redash administrator to complete the following steps \- you may not have access yourself.

Atlan supports the API authentication method for fetching metadata from Redash. This method uses an API key to fetch metadata.

Create user in Redash[â](#create-user-in-redash "Direct link to Create user in Redash")
-----------------------------------------------------------------------------------------

To [create a new user](https://redash.io/help/user-guide/users/inviting-users) for Atlan to use when integrating with Redash:

1. Log in to your Redash instance.
2. In the top right of your Redash instance, click your profile name, and from the dropdown, click **Users**.
3. On the *Settings* page, under the *Users* tab, click the **New User** button.
4. In the *Create a New User* dialog, enter the following details:
    1. For *Name*, add a meaningful name for the new user \- for example, `Atlan`.
    2. For *Email address*, enter the email address for the new user.
    3. Click **Create** to create the new user.

Configure new user[â](#configure-new-user "Direct link to Configure new user")
--------------------------------------------------------------------------------

Once the new user has accepted the invitation, the new user will be added to the list of users in your Redash instance. You will need to configure the new user for integration with Atlan.

To configure the new user for [crawling Redash](/apps/connectors/business-intelligence/redash/how-tos/crawl-redash):

1. Log in to your Redash instance.
2. In the top right of your Redash instance, click your profile name, and from the dropdown, click **Users**.
3. On the *Settings* page, under the *Users* tab, select the [new user you created](/apps/connectors/business-intelligence/redash/how-tos/set-up-redash#create-user-in-redash).
4. From the new user screen, complete the following steps:
    1. Each new user is added to the *Default* group automatically in Redash. To configure [group permissions](https://redash.io/help/user-guide/users/creating-editing-groups), for *Groups*, click the dropdown and select **Admin** to add the new user to the admin group for [full access](https://redash.io/help/user-guide/users/permissions-groups).
    2. For *API Key*, click the clipboard icon to copy the API key for the new user and save it in a secure location.
**Tags:*** [data](/tags/data)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousRedash](/apps/connectors/business-intelligence/redash)[NextCrawl Redash](/apps/connectors/business-intelligence/redash/how-tos/crawl-redash)

Copyright Â© 2025 Atlan Pte. Ltd.

