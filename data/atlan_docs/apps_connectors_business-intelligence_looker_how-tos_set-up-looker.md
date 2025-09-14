# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/set-up-looker

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/set-up-looker
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/set-up-looker
meta-description: :::warning Who can do this? You will probably need your Looker administrator to run these commands - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will probably need your Looker administrator to run these commands - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up Looker | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/looker/how-tos/set-up-looker
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Looker | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Looker
=============

Who can do this?You will probably need your Looker administrator to run these commands \- you may not have access yourself.

Atlan supports two options for user permissions in Looker. You should choose one of these methods to set up Looker:

Admin role[â](#admin-role "Direct link to Admin role")
--------------------------------------------------------

This role is required for Atlan to automatically generate lineage across Looker objects. When using this role, the crawler can access all folders in Looker including personal folders.

To set up this role:

1. Log in to your Looker instance and ensure that you are an Admin user.
2. From the menu in the upper left, click the **Admin** item.
3. Under the *Users* section, click the **Users** item.
4. In the table, find the user you're logged in as. Click the **Edit** button to the right of your user's row.
5. Next to *API3 Keys*, click the **Edit Keys** button.
6. On the resulting *Edit User API3 Keys* page, click the **New API3 Key** button.
7. Save the generated credentials for [crawling Looker](/apps/connectors/business-intelligence/looker/how-tos/crawl-looker).

Custom role[â](#custom-role "Direct link to Custom role")
-----------------------------------------------------------

dangerWhen using this approach, Atlan will not automatically generate lineage across Looker objects. You will need to individually allow access to each folder to be included in lineage.

### Create role[â](#create-role "Direct link to Create role")

To create a custom role for Atlan to access Looker:

1. Log in to your Looker instance.
2. From the menu in the upper left, click the **Admin** item.
3. Under the *Users* section, click the **Roles** item.
4. At the top of the page, click the **New Permission Set** button.
    1. Enter a name for the new permission set.
    2. For the permissions, select the following:
        * `access_data` allows access to the other permissions below.
        * `see_lookml_dashboards` allows Atlan to crawl LookML dashboards.
        * `see_looks` allows Atlan to crawl Looks.
        * `see_user_dashboards` allows Atlan to crawl user\-defined dashboards.
        * `explore` allows Atlan to fetch from the Explore page.
        * `see_sql` allows Atlan to fetch the SQL of a query or Look, to generate lineage.
        * `see_lookml` allows Atlan to fetch model information from LookML.
        * `develop` allows Atlan to fetch connection names from models, to generate lineage.
        * `see_datagroups` allows Atlan to fetch all connection names, to generate lineage.
    3. At the bottom of the permissions list, click the **New Permission Set** button.
5. Back on the *Roles* page, at the top click the **New Role** button.
    1. Enter a name for the new role.
    2. For *Permission Set*, select the permission set you created in the previous step.
    3. For *Model Set*, select the models that you want to give access to.
    4. At the bottom of the page click the **New Role** button.

### Create user[â](#create-user "Direct link to Create user")

To create a user through which Atlan can access Looker:

1. Open the **Admin** menu in Looker.
2. Under the *Users* section, click the **Users** item.
3. At the top of the page, click the **Add Users** button.
    1. For *Email addresses* enter the email address for the user.
    2. For *Send setup emails* uncheck the setting.
    3. For *Roles* check the box next to the role you created above.
4. At the bottom of the page, click the **Add Users** button.
5. On the resulting page, click the **Done** button.

### Generate API key for user[â](#generate-api-key-for-user "Direct link to Generate API key for user")

To generate an API key for the user:

1. Open the **Admin** menu in Looker.
2. Under the *Users* section, click the **Users** item.
3. In the table, find the user created above. Click the **Edit** button to the right of that user's row.
4. (Optional) Consider entering a *First Name* and *Last Name* for the user to make it easier to recognize and find in the future.
5. Next to *API3 Keys*, click the **Edit Keys** button.
6. On the resulting *Edit User API3 Keys* page, click the **New API3 Key** button.
7. Save the generated credentials for [crawling Looker](/apps/connectors/business-intelligence/looker/how-tos/crawl-looker).

### Include folders for lineage[â](#include-folders-for-lineage "Direct link to Include folders for lineage")

To include folders when using a custom role, give permission using the following steps:

1. From the Looker menu in the upper left, click the **Admin** item.
2. Under the *Users* section, click the **Content Access** item.
3. In the resulting page next to *Folders* select the folder and then click on the **Manage Access...** button.
4. In the blank box at the bottom of the table, select the user created above from the list.
    * To allow Atlan to crawl only dashboards, enable the *View* permission for this user.
    * To allow Atlan to crawl tiles and queries for dashboards, enable the *Manage Access, Edit* permission for this user.
5. To the right of the row for that user, click the **Add** button.
6. At the lower\-right of the dialog, click the **Save** button.

dangerYou will need to repeat these steps for *every* folder you want Atlan to be able to access.

SSH key for lineage[â](#ssh-key-for-lineage "Direct link to SSH key for lineage")
-----------------------------------------------------------------------------------

Who can do this?Any user with access to the Looker project files in GitHub can set up this part. You will need to share the generated private key with whoever [sets up the Looker crawler](/apps/connectors/business-intelligence/looker/how-tos/crawl-looker) in Atlan. If your organization uses single sign\-on (SSO) on GitHub, you must first authorize the SSH key for use with SSO. Refer to [Authorizing an SSH key for use with SAML single sign\-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) to complete the process.

In addition to the role, you also need to set up access to your project files in GitHub for the following:

* Generate field\-level and cross\-project lineage from Looker
* Crawl Looker views and build upstream lineage for views and explores

To configure an SSH key for access to GitHub project files:

1. [Create a new SSH key on your local computer](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key). For example, run the following command and enter a passphrase when prompted (or leave blank for no passphrase):

    ```
    ssh-keygen -t ed25519 -C "[[email protected]](/cdn-cgi/l/email-protection)" -f ~/.ssh/atlan_looker_lineage

    ```
2. [Copy the generated keys from your local computer](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account). For example:

    * To copy the public key, run this command and copy the output:

    ```
        cat ~/.ssh/atlan_looker_lineage.pub

    ```
        * To copy the private key, run this command and copy the output:

    ```
        cat ~/.ssh/atlan_looker_lineage

    ```
3. In the upper\-right corner of any GitHub page, click your profile photo, then click **Settings**.
4. Under the *Access* section of the left sidebar, clickÂ**SSH and GPG keys**.
5. In the upper\-right, click the **New SSH key** button:

    1. For *Title* enter a descriptive label for the new key. For example, **Atlan Lineage**.
        2. For *Key* paste in the public key you copied above.
        3. At the bottom of the form, click theÂ**Add SSH key** button.
6. If prompted, enter your GitHub password and clickÂ**Confirm password**.
**Tags:*** [crawl](/tags/crawl)
* [api](/tags/api)

[PreviousLooker](/apps/connectors/business-intelligence/looker)[NextSet up on\-premises Looker access](/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access)

Copyright Â© 2025 Atlan Pte. Ltd.

