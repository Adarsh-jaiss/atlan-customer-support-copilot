# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/mode/how-tos/set-up-mode

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/mode/how-tos/set-up-mode
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/mode/how-tos/set-up-mode
meta-description: If you do not see the prompts to enter details for the user above, you are probably already signed in to Mode. Sign out of Mode first, and then accept the invite in the service account email.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: If you do not see the prompts to enter details for the user above, you are probably already signed in to Mode. Sign out of Mode first, and then accept the invite in the service account email.
meta-og-locale: en
meta-og-title: Set up Mode | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/mode/how-tos/set-up-mode
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Mode | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Mode
===========

Who can do this?You will probably need your Mode administrator to follow the below steps \- you may not have access yourself. The Mode administrator will also need to be a connection admin for every connection you want Atlan to be able to crawl.

Invite a user[â](#invite-a-user "Direct link to Invite a user")
-----------------------------------------------------------------

To [invite a user](https://mode.com/help/articles/organizations/#add-a-member) for Atlan to use when [integrating with Mode](/apps/connectors/business-intelligence/mode/how-tos/crawl-mode):

1. From the upper left corner of your Mode instance, click the dropdown with your workspace name and name, and then click **Invite to Mode...**.
2. For *Email Address*, enter a valid email address, for example for the service account.
3. Click the **Invite** button.
4. In your service account's email, open the email from Mode and click **Accept invite**.
5. For *Set up your account*, enter details about the service account:
    1. For *Full name*, enter a name for the service account, such as `Atlan Crawler`.
    2. For *Username*, enter a username for the service account, such as `atlan_crawler`.
    3. For *Password* and *Confirm password*, enter the same password to use for the service account.
6. At the bottom of the form, click the **Continue** button.

dangerIf you do not see the prompts to enter details for the user above, you are probably already signed in to Mode. Sign out of Mode first, and then accept the invite in the service account email.

Set permissions[â](#set-permissions "Direct link to Set permissions")
-----------------------------------------------------------------------

To set the minimum permissions required to [crawl Mode](/apps/connectors/business-intelligence/mode/how-tos/crawl-mode):

1. Log into Mode as an administrator again. (If you just completed the steps above, you'll need to log out from the service account first.)
2. From the upper left corner of your Mode instance, click the dropdown with your workspace name and name, and then **Workspace settings**.
3. Under the *People* heading on the left, click **Members**.
4. Next to the *Search* box, click the dropdown and select **Current members**.
5. Confirm the user you invited is listed with *Member* under the *Status* column.
    * If not, change the *Search* box dropdown to *Pending members* and confirm the invitation has been accepted.
    * If yes, change the *Search* box dropdown to *Former members \& requests*, click the three\-dots icon to the far right of the service account's row, and then **Reinvite to org**.
6. Under the *Data* heading on the left, click **Manage Connections**.
7. From the *Manage Connections* table, for each connection you want to access in Atlan:
    1. Click the row for that connection.
    2. Change to the **Permissions** tab.
    3. At the top of the *Connection access* table, click the **Add members** button.
    4. Search for and select the service account user, and change the dropdown for access type to **View**. Learn more about the *View* permission in [Mode documentation](https://mode.com/help/articles/permissions#set-up-connection-permissions).
    5. At the bottom of the form, click the **Add members** button.

**Did you know?**Atlan does **not** make any API requests or queries that will update the workspaces, collections, reports, charts, or queries in your Mode instance.

Generate API token[â](#generate-api-token "Direct link to Generate API token")
--------------------------------------------------------------------------------

Atlan supports the following [API tokens](https://mode.com/help/articles/api-reference) generated in Mode for authentication in Atlan:

* [Workspace token](#workspace-token)
* [Member token](#member-token)
* [Personal token](#personal-token)

### Workspace token[â](#workspace-token "Direct link to Workspace token")

[Workspace tokens](https://mode.com/help/articles/api-tokens#workspace-tokens) allow admin access to the workspace. You will need to be an admin user in Mode to create and manage a workspace token.

To generate a workspace API token for [crawling Mode](/apps/connectors/business-intelligence/mode/how-tos/crawl-mode):

1. Log in to Mode as an administrator.
2. From the upper left corner of your Mode instance, click the dropdown with your workspace name and name, and then click **Workspace settings**.
3. Under the *Features* heading on the left, click **API Keys**.
4. On the *API Keys* page, under *Workspace API Keys*, click the **Create API key** button.
5. In the *Create new API key* dialog, enter the following details:
    1. For *Display name*, enter a meaningful name \- for example, `atlan-crawler`.
    2. For *Key expiration*, keep the default selection or set a longer expiration period.
    3. Click the **Create** button.
    4. From the corresponding *Key secret* dialog, copy the values for **Key ID** and **Secret** and store them in a secure location. You will not be able to see them again in Mode after leaving this screen.

### Member token[â](#member-token "Direct link to Member token")

dangerBefore you can create a member token, you will need your Mode administrator to [enable Member API key creation](https://mode.com/help/articles/api-tokens#member-tokens).

[Member tokens](https://mode.com/help/articles/api-tokens#member-tokens) match an individual user's permissions to access workspace resources in Mode.

To generate a member API token for [crawling Mode](/apps/connectors/business-intelligence/mode/how-tos/crawl-mode):

1. Log in to Mode as a member.
2. From the upper left corner of your Mode instance, click the dropdown with your workspace name and name, and then click **Workspace settings**.
3. Under the *Workspace* heading on the left, click **Personal**.
4. Under the *Personal* heading on the left, click **My API Keys**.
5. In the upper right of the *API Keys*Â page, click the **Create API key** button.
6. In the *Create new API key* dialog, enter the following details:
    1. For *Display name*, enter a meaningful name \- for example, `atlan-crawler`.
    2. For *Key expiration*, keep the default selection or set a longer expiration period.
    3. Click the **Create** button.
    4. From the corresponding *Key secret* dialog, copy the values for **Key ID** and **Secret** and store them in a secure location. You will not be able to see them again in Mode after leaving this screen.

### Personal token[â](#personal-token "Direct link to Personal token")

dangerMode will deprecate personal token use on February 28, 2025\. You can currently continue to use existing [personal API tokens](https://mode.com/help/articles/api-reference/#personal-tokens), but you will not be able to generate new personal tokens.

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousMode](/apps/connectors/business-intelligence/mode)[NextCrawl Mode](/apps/connectors/business-intelligence/mode/how-tos/crawl-mode)

Copyright Â© 2025 Atlan Pte. Ltd.

