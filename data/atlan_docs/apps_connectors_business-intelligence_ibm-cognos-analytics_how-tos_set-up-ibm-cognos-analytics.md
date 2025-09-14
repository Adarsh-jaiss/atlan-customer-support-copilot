# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics
meta-description: :::warning Who can do this? You must be an IBM Cognos Analytics administrator to complete these steps - you may not have access yourself.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You must be an IBM Cognos Analytics administrator to complete these steps - you may not have access yourself.
meta-og-locale: en
meta-og-title: Set up IBM Cognos Analytics | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-ibm-cognos-analytics
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up IBM Cognos Analytics | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up IBM Cognos Analytics
===========================

Who can do this?You must be an IBM Cognos Analytics administrator to complete these steps \- you may not have access yourself.

Atlan supports the following authentication methods for fetching metadata from IBM Cognos Analytics:

* Basic authentication \- this method uses a [username and password](#create-user) to fetch metadata.
* API authentication \- this method uses a [username](#create-user) and an [API key](#optional-create-an-api-key) to fetch metadata.
* OKTA authentication \- this method uses a [username and password](#optional-create-user-in-okta) of OKTA to fetch metadata.

Create user[â](#create-user "Direct link to Create user")
-----------------------------------------------------------

To [create a new user](https://www.ibm.com/docs/en/cognos-analytics/12.0.0?topic=namespace-creating-managing-users) for [crawling IBM Cognos Analytics](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-ibm-cognos-analytics):

1. Log in to your IBM Cognos Analytics instance.
2. Expand the left menu of your homepage and then click **Manage**.
3. From the corresponding menu, click **People** and then click **Accounts**.
4. In *Accounts*, under *Namespaces*, select your Cognos namespace to open it.
5. From the upper right of your namespace page, click the new user icon to add a new user to the selected namespace.
6. In the *New user* form, enter the following details:
    1. For *Given name*, enter a meaningful name for the new user.
    2. For *User ID*, create a username for the new user.
    3. For *Password*, create a password for the username.
    4. For *Email*, you can leave this blank.
    5. Click **OK** to save your configuration. The new user you created is added to the list of entries in your namespace.

(Optional) Create an API key[â](#optional-create-an-api-key "Direct link to (Optional) Create an API key")
------------------------------------------------------------------------------------------------------------

You can also use API authentication for integrating with Atlan. In addition to the username for the new user created in the [Create user](#create-user) section, you need an API key for authenticatingÂ the connection.

To [create an API key](https://www.ibm.com/docs/en/cognos-analytics/11.2.0?topic=settings-creating-personal-api-keys) for [crawling IBM Cognos Analytics](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/crawl-ibm-cognos-analytics):

1. Log in to your IBM Cognos Analytics instance as the new user created in the [Create user](#create-user) section.
2. In the top right of your homepage, click the personal menu icon and then click **Profile and settings**.
3. In the *Profile and settings* tab, under *Advanced options*, next to *My API keys*, click **Manage**.
4. From the upper right of the *My API keys* page, click the **Generate API key** button.
5. In the *Generate API key* dialog, enter the following details:
    1. For *Name*, enter a meaningful name for the API key.
    2. (Optional) For *Description*, enter a brief description.
    3. Click **Next** to proceed.
    4. Once the encrypted key has appeared on the screen, copy and store the value in a secure location.
    
        danger IBM Cognos Analytics doesn't store the API key, you must copy and save it.
    5. Click **Done**. Your new API key appears in the list of keys on the *My API keys* page.

If you experience any functionality issues with the newly created API key, you can renew your credentials. Navigate to the *Profile and settings* menu, and then next to the *Credentials* option, click the **Renew** button to refresh your credentials.

(Optional) Create user in OKTA[â](#optional-create-user-in-okta "Direct link to (Optional) Create user in OKTA")
------------------------------------------------------------------------------------------------------------------

If the IBM Cognos Namespace type is "OKTA" and OKTA is used for login, a
corresponding user must be created in OKTA to enable login to IBM Cognos via
OKTA.

If IBM Cognos is configured to use OKTA as the authentication provider (via the OKTA namespace type), each user must have a valid account in OKTA to successfully log in.

Follow these instructions to [create a new user](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-create-assign-user-type.htm) in OKTA and assign a user type for accessing IBM Cognos Analytics:

1. Log in to your OKTA instance with Admin credentials.
2. From the left menu on the homepage, expand **Directory** and select **People**.
3. Click **Add Person**.
4. In the New User form, fill in the following details:
    * Select the appropriate **User Type**.
    * Enter user's personal details.
    * Assign the user to the relevant group.
    * Click **Save** to complete the process.

Add user to a Cognos role[â](#add-user-to-a-cognos-role "Direct link to Add user to a Cognos role")
-----------------------------------------------------------------------------------------------------

To add the new user to the Cognos *Reader* role:

1. Log in to your IBM Cognos Analytics instance.
2. Expand the left menu of your homepage and then click **Manage**.
3. From the corresponding menu, click **Administration console**.
4. From the tabs along the top of the *IBM Cognos Administration* page, click **Security**.
5. In the *Security* tab, select the **Cognos** namespace.
6. From the list of standard roles, navigate to **Readers**. In the *Actions* column for *Readers*, click **More**. This role allows read\-only access to IBM Cognos Analytics, refer to the [standard roles documentation](https://www.ibm.com/docs/en/cognos-analytics/11.2.0?topic=roles-standard) to learn more.
7. In the *Perform an action \- Readers* screen, under *Available actions*, click **Set members**.
8. In the *Members* tab, click **Add** to add a new entry to the list.
9. In the *Select entries (Navigate)* *\- Readers* screen, from the *Available entries*, select the namespace where you created the new user.
10. In the corresponding screen, under *Directory*, click the **Show users in the list** checkbox and then select the [new user you created](#create-user).
11. Click the right\-arrow button, and when the entry you want appears in the *Selected entries* box, click **OK**.

Set permissions[â](#set-permissions "Direct link to Set permissions")
-----------------------------------------------------------------------

All entries such as folders, reports, modules, and more already have the *Readers* role assigned to them by default. You will only need to set permissions for the new user to data server connections.

To set access permissions for the new user to Cognos entries:

1. Log in to your IBM Cognos Analytics instance.
2. Expand the left menu of your homepage and then click **Data server connections**.
3. On the *Data server connections* page, to set permissions for each data server connection, click the vertical 3\-dot icon and then click **Properties**.
4. From the tabs along the top of the *Properties* page, click the **Permissions** tab.
5. In the upper right of the *Permissions* page, click the **\+** icon to add a new member.
6. In the *Add member* form, select the **Cognos** namespace and then search for and select the **Readers** role.
7. Click **Add**.
8. Once you have added the role, click **Save** to save your configuration.

Find namespace[â](#find-namespace "Direct link to Find namespace")
--------------------------------------------------------------------

You must have the name of your namespace where you created the new user for authenticating the connection in Atlan. There are several ways to find the name of your namespace, here is one such method.

To find the namespace details where you created the new user:

1. Log in to your IBM Cognos Analytics instance.
2. Expand the left menu of your homepage and then click **Manage**.
3. From the corresponding menu, click **Administration console**.
4. From the tabs along the top of the *IBM Cognos Administration* page, click **Security**.
5. In the *Security* tab, select the namespace where you [created the new user](#create-user). Make sure that the new user is listed in the selected namespace.
6. From the top right of your namespace page, click the **Set properties** chart icon.
7. In the *Set properties (namespace)* page, next to *Location*, click the **View the search path, ID and URL** link.
8. In the *View the search path, ID and URL* form, under *Search path*, next to `CAMID`, the name of your namespace is shown enclosed within brackets \- for example, `CAMID(<YOUR NAMESPACE NAME>)`. Copy the value for `<YOUR NAMESPACE NAME>` and store it in a secure location.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousIBM Cognos Analytics](/apps/connectors/business-intelligence/ibm-cognos-analytics)[NextSet up on\-premises IBM Cognos Analytics access](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access)

Copyright Â© 2025 Atlan Pte. Ltd.

