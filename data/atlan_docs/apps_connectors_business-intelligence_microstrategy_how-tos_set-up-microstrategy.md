# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/how-tos/set-up-microstrategy

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/how-tos/set-up-microstrategy
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/how-tos/set-up-microstrategy
meta-description: Atlan supports the basic authentication method for fetching metadata from MicroStrategy. This method uses a username and password to fetch metadata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports the basic authentication method for fetching metadata from MicroStrategy. This method uses a username and password to fetch metadata.
meta-og-locale: en
meta-og-title: Set up MicroStrategy | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microstrategy/how-tos/set-up-microstrategy
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up MicroStrategy | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up MicroStrategy
====================

Who can do this?You will probably need your [MicroStrategy administrator](https://www2.microstrategy.com/producthelp/Current/Workstation/en-us/Content/workstation_create_users_and_groups.htm) to complete these steps \- you may not have access yourself.

Atlan supports the basic authentication method for fetching metadata from MicroStrategy. This method uses a username and password to fetch metadata.

Create user in MicroStrategy[â](#create-user-in-microstrategy "Direct link to Create user in MicroStrategy")
--------------------------------------------------------------------------------------------------------------

You will need to [create a new user](https://www2.microstrategy.com/producthelp/Current/Workstation/en-us/Content/workstation_create_users_and_groups.htm) in your MicroStrategy Workstation and assign minimum permissions for integrating with Atlan.

To create a new user for [crawling MicroStrategy](/apps/connectors/business-intelligence/microstrategy/how-tos/crawl-microstrategy):

1. Open the [Workstation window](https://www2.microstrategy.com/producthelp/Current/Workstation/en-us/Content/navigating_Workstation.htm) with the navigation pane in smart mode.
2. From the left navigation menu, click **Users and Groups**.
3. In the upper left of the *Users and Groups* page, click the **Select an Environment** dropdown and select your environment.
4. In the left menu of your selected environment, next to *All Users*, click the **\+** button to create a new user.
5. In the *Create* *New User* dialog:
    1. For *Account and Credentials*, enter the following details:
        1. For *Full Name*, enter a meaningful name for the new user.
        2. For *Email Address*, enter an email address for the new user.
        3. (Optional) For *Description*, enter a description.
        4. For *Username (Login)*, enter a username for the new user.
        5. For *Password*, create a password for the new user and confirm it in the next step.
        6. To disallow the new user from changing the password, check the **User cannot change password** box.
        7. At the bottom left of the form, check the **Active User** box.
    2. For *User Groups*, all users are automatically members of the [*Everyone*](https://www2.microstrategy.com/producthelp/Current/SystemAdmin/WebHelp/Lang_1033/Content/About_MicroStrategy_user_groups.htm) group, which typically has read permission for most objects. To assign any permissions not inherited from the default group to the new user:
        1. In the top right of *User Groups*, click **Manage User Group** to add a new user group.
        2. Click **Update** to confirm your selections.
    3. To assign [user privileges](https://community.microstrategy.com/s/article/KB30634-List-of-user-privileges-their-descriptions-and-their?language=en_US), in the left menu, clickÂ**Privileges** and check the following boxes:
        * **Use Architect Editors**Â \- for fetching attribute, fact, and table definitions
        * **Use Library Web** \- for fetching project metadata
        * **Web Report SQL** \- for fetching SQL statements
        * **Web use Metric Editor** \- for fetching metric definitions
        * **Web run Document** \- for fetching document definitions
        * **Web run Dossier** \- for fetching dossier definitions
    4. Click **Save** to complete setup.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousMicroStrategy](/apps/connectors/business-intelligence/microstrategy)[NextCrawl MicroStrategy](/apps/connectors/business-intelligence/microstrategy/how-tos/crawl-microstrategy)

Copyright Â© 2025 Atlan Pte. Ltd.

