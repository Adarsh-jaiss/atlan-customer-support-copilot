# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot
meta-description: :::warning Who can do this? You will probably need your ThoughtSpot instance administrator to complete these steps - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your ThoughtSpot instance administrator to complete these steps - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up ThoughtSpot | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-thoughtspot
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up ThoughtSpot | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up ThoughtSpot
==================

Who can do this?You will probably need your ThoughtSpot instance administrator to complete these steps \- you may not have access yourself.

Atlan supports the following authentication methods for ThoughtSpot:

* [Basic authentication](#basic-authentication)
* [Trusted authentication](#trusted-authentication)

Basic authentication[â](#basic-authentication "Direct link to Basic authentication")
--------------------------------------------------------------------------------------

You will need to create a new user in ThoughtSpot and authenticate in Atlan with username and password.

### Create user in ThoughtSpot[â](#create-user-in-thoughtspot "Direct link to Create user in ThoughtSpot")

To [create a new user](https://docs.thoughtspot.com/software/6.2/add-user#add-user) for [crawling ThoughtSpot](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot):

1. Log in to your ThoughtSpot instance.
2. To navigate to the admin console, in the top header, click **Admin**.
3. In the top left of the *Admin* page, click **Add User**.Â
4. In the *Add a new user* dialog, enter the following details:
    1. For *Username*, enter a username for the new user.
    2. For *Display name*, add a meaningful name for the new user \- for example, `Atlan`.
    3. For *Sharing visibility*, keep the default selection \- **SHAREABLE**.
    
        danger Atlan will only crawl assets that are either created by or shared with this user. If you add the user to a group in ThoughtSpot, ensure that you [share all the assets](https://docs.thoughtspot.com/cloud/latest/sharing) you want to crawl in Atlan with that group.
    4. For *New password*, enter a password for the new user and confirm it in the next step.
    5. For *Email*, enter an email address for the new user.
5. Click **Add** to add the new user.

The new user will be assigned `Can upload user data` and `Can download data` [permissions](https://docs.thoughtspot.com/software/latest/groups-privileges#privileges-and-groups) by default.

Trusted authentication[â](#trusted-authentication "Direct link to Trusted authentication")
--------------------------------------------------------------------------------------------

dangerYou will need ThoughtSpot Everywhere to use the trusted authentication option. ThoughtSpot Analytics users, however, can get ThoughtSpot Everywhere as an add\-on to use trusted authentication. Learn more [here](https://www.thoughtspot.com/pricing).

You will need to create a secret key in ThoughtSpot and authenticate in Atlan with username and secret key.

### Create a secret key[â](#create-a-secret-key "Direct link to Create a secret key")

To [create a secret key](https://developers.thoughtspot.com/docs/?pageid=trusted-auth#trusted-auth-enable) for [crawling ThoughtSpot](/apps/connectors/business-intelligence/thoughtspot/how-tos/crawl-thoughtspot):

1. Log in to your ThoughtSpot instance.
2. To navigate to the developer console, in the top header, click **Develop**.
3. In the left menu under *Customizations*, clickÂ**Security settings**.Â
4. In the top right of the *Security settings* page, click **Edit**.
5. Scroll down to *Trusted authentication* and turn it on.
6. Turning on trusted authentication will generate a secret key. Click the clipboard icon to copy the secret key and store it in a secure location.
7. Click **Save Changes** to save your selections.
**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousThoughtSpot](/apps/connectors/business-intelligence/thoughtspot)[NextSet up on\-premises ThoughtSpot access](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-on-premises-thoughtspot-access)

Copyright Â© 2025 Atlan Pte. Ltd.

