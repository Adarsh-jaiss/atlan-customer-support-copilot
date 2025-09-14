# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/sisense/how-tos/set-up-sisense

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/sisense/how-tos/set-up-sisense
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/sisense/how-tos/set-up-sisense
meta-description: Atlan supports the basic authentication method for fetching metadata from Sisense. This method uses a username and password to fetch metadata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports the basic authentication method for fetching metadata from Sisense. This method uses a username and password to fetch metadata.
meta-og-locale: en
meta-og-title: Set up Sisense | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/sisense/how-tos/set-up-sisense
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Sisense | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Sisense
==============

Who can do this?You will need your [SisenseÂ administrator](https://docs.sisense.com/main/SisenseLinux/sisense-user-roles.htm)Â to complete these steps \- you may not have access yourself.

Atlan supports the basic authentication method for fetching metadata from Sisense. This method uses a username and password to fetch metadata.

Note that the Sisense connector does not support Sisense for Cloud Data Teams, formerly Periscope Data.

Create new user in Sisense[â](#create-new-user-in-sisense "Direct link to Create new user in Sisense")
--------------------------------------------------------------------------------------------------------

**Did you know?**Atlan does **not** make any API requests or queries that will update the objects in your Sisense environment.

You will need to create a new user in your Sisense instance and assign the *Data Admin* role to the new user for integrating with Atlan. While Atlan can crawl all other [Sisense asset types](/apps/connectors/business-intelligence/sisense/references/what-does-atlan-crawl-from-sisense) with the *Viewer* role, the *[Data Admin](https://docs.sisense.com/main/SisenseLinux/sisense-user-roles.htm)* role is required to crawl and generate lineage for [data model tables](/apps/connectors/business-intelligence/sisense/references/what-does-atlan-crawl-from-sisense). Atlan uses the [Datamodels API](https://sisense.dev/guides/restApi/v2/?platform=linux&spec=L2023.6#/Datamodels) to crawl data models and data model tables from Sisense. The *Viewer* role does not provide access to data models.

To create a new user for [crawling Sisense](/apps/connectors/business-intelligence/sisense/how-tos/crawl-sisense):

1. Log in to your Sisense instance with the *Admin* role.
2. From the tabs along the top, click **Admin**.
3. On the *Admin* page, in the *System Management* box, click **Users**.
4. From the top right of the *Users* page, click **\+ Users** to add a new user.
5. In the *Add Users* dialog, enter the following details:
    1. For *Email*, enter an email address for the new user \- this will be the username for [authenticating the connection in Atlan](/apps/connectors/business-intelligence/sisense/how-tos/crawl-sisense).
    2. (Optional) For *First Name* and *Last Name*, enter a first and last name for the new user \- for example, `Atlan_integration`.
    3. For *Role*, click the role dropdown and then click **Data Admin** to assign that role to the new user.
    4. Toggle on **Define Password**, and for *Set Password*, set a password for the new user. Confirm the password in the next step.
    5. Click **Save** to complete new user creation.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousSisense](/apps/connectors/business-intelligence/sisense)[NextCrawl Sisense](/apps/connectors/business-intelligence/sisense/how-tos/crawl-sisense)

Copyright Â© 2025 Atlan Pte. Ltd.

