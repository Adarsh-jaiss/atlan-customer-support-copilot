# Source URL
https://docs.atlan.com/product/integrations/project-management/jira/how-tos/integrate-jira-data-center

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/project-management/jira/how-tos/integrate-jira-data-center
link-alternate: https://docs.atlan.com/product/integrations/project-management/jira/how-tos/integrate-jira-data-center
meta-description: You will need to [configure an incoming link](https://confluence.atlassian.com/adminjiraserver/configure-an-incoming-link-1115659067.html) with an external application -  in this case, Atlan. This will allow Atlan to access Jira data, which means that Jira will act as the OAuth provider.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You will need to [configure an incoming link](https://confluence.atlassian.com/adminjiraserver/configure-an-incoming-link-1115659067.html) with an external application -  in this case, Atlan. This will allow Atlan to access Jira data, which means that Jira will act as the OAuth provider.
meta-og-locale: en
meta-og-title: Integrate Jira Data Center | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/project-management/jira/how-tos/integrate-jira-data-center
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Integrate Jira Data Center | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Integrate Jira Data Center
==========================

Who can do this?You will need to be an [admin](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to configure the Jira Data Center integration. You will also need inputs and approval from an administrator of your Jira workspace.

dangerIf your Jira Data Center instance is behind a VPN or firewall, you must add the Atlan IP to your allowlist. Please raise a support ticket from within Atlan, or [submit a request](/support/submit-request). (If you are not using the IP allowlist, you can skip this step.)

To integrate Jira Data Center and Atlan, follow th

[https://demo.arcade.software/dO2ydr495VZWTizQnMBh?embed](https://demo.arcade.software/dO2ydr495VZWTizQnMBh?embed)

ese steps.

Configure an incoming app link in Jira Data Center[â](#configure-an-incoming-app-link-in-jira-data-center "Direct link to Configure an incoming app link in Jira Data Center")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You will need to [configure an incoming link](https://confluence.atlassian.com/adminjiraserver/configure-an-incoming-link-1115659067.html) with an external application \- in this case, Atlan. This will allow Atlan to access Jira data, which means that Jira will act as the OAuth provider.

Atlan requires the [minimum scope](https://confluence.atlassian.com/adminjiraserver/oauth-2-0-scopes-for-incoming-links-1115659069.html) of `WRITE` to create issues in Jira Data Center. However, actual permissions are capped at what the authorizing user can do. For example, if the authorizing user lacks the permission to delete issues or projects, then Atlan will not have the permission to do so even with the `WRITE` scope.

To configure an incoming link for Atlan, from within Jira Data Center:

1. Log in to your Jira instance.
2. [Copy the Jira site URL](https://confluence.atlassian.com/jirakb/how-to-find-your-site-url-to-set-up-the-jira-data-center-and-server-mobile-app-954244798.html) from your browser's address bar and store it in a secure location. If you're viewing the dashboard, the site URL is everything that comes before `/secure/Dashboard.jspa`.
3. From the top right of your Jira instance, click the settings icon, and from the dropdown, click **Applications**.
4. In the left menu of the *Applications* page, under *Integrations*, click **Application links**.
5. From the top right of the *Application links* page, click **Create link** to create a new application link for Atlan.
6. In the *Create link* dialog, enter the following details:
    1. For *Application type*, click **External application** to link to an external application using OAuth 2\.0\.
    2. For *Direction*, click **Incoming** to allow Atlan to access data from Jira.
7. In the corresponding *Configure an incoming link* page, enter the following details:
    1. For *Name*, enter a meaningful name for your application \- for example, `Atlan_integration`.
    2. Under *Application details*, for *Redirect URL*, enter the redirect URL in the following format \- `https://${client-domain}.atlan.com/oauth-callback`.
    3. Under *Application permissions*, for *Permissions*, click the dropdown and then click **Write**. The [*WRITE* scope](https://confluence.atlassian.com/adminjiraserver/oauth-2-0-scopes-for-incoming-links-1115659069.html) will allow Atlan to:
        * View projects and issues
        * Create, update, and delete projects and issues
    4. Click **Save**Â to save your selections.
8. From the corresponding *Credentials* page, click **Copy** to copy the *Client ID* and *Client secret* and store them in a secure location.

Connect Atlan to Jira Data Center[â](#connect-atlan-to-jira-data-center "Direct link to Connect Atlan to Jira Data Center")
-----------------------------------------------------------------------------------------------------------------------------

Once you have retrieved the [Jira instance URL and client ID and client secret](/product/integrations/project-management/jira/how-tos/integrate-jira-data-center) from Jira, you can proceed to connecting Atlan to Jira Data Center.

dangerYou must have at least one issue already created in Jira before integrating it with Atlan.

To connect Atlan to Jira Data Center, from within Atlan:

1. From the left menu, clickÂ**Admin**.
2. UnderÂ*Workspace*, clickÂ**Integrations**.
3. In theÂ*Jira* tile, to the right of the **Connect** button, click the downward arrow and then click **Connect with Jira Data Center**.
4. A new *Jira Data Center* window will open and you'll be asked to install the Atlan app and create an application link in Jira. Click **Next** to proceed.
5. In the corresponding *Jira Data Center* dialog, for *Add credentials*, enter the following details:
    1. For *Instance URL*, enter the [URL of your Jira instance](/product/integrations/project-management/jira/how-tos/integrate-jira-data-center).
    2. For *Client ID*, enter the [client ID you copied](/product/integrations/project-management/jira/how-tos/integrate-jira-data-center) in Jira.
    3. For *Client secret*, enter the [client secret you copied](/product/integrations/project-management/jira/how-tos/integrate-jira-data-center) in Jira.
6. In the *OAuth 2\.0 Authorization Consent* popup, click **Allow** to complete the connection.
7. Click the **Add to Jira** button to install the Atlan app in Jira Data Center.

Install Atlan app in Jira Data Center[â](#install-atlan-app-in-jira-data-center "Direct link to Install Atlan app in Jira Data Center")
-----------------------------------------------------------------------------------------------------------------------------------------

Before you can install the Atlan app in Jira Data Center, navigate to the [Atlan for Jira Data Center app](https://marketplace.atlassian.com/apps/1232314/atlan-for-jira-data-center?tab=overview&hosting=datacenter) URL and click **Get it now** to download the app.

To install the Atlan app, from within Jira Data Center:

1. Log in to your Jira instance.
2. Under *Administration*, from the tabs along the top, click **Manage apps**.
3. From the left menu under *Atlassian Marketplace*, click **Manage apps**.
4. From the upper right of the *Manage apps* page, click **Upload app**.
5. In the *Upload app* dialog, for *Upload the .jar or .obr file for a custom or third\-party app here.*, select the [app file you downloaded](https://marketplace.atlassian.com/apps/1232314/atlan-for-jira-data-center?tab=overview&hosting=datacenter).
6. Click **Upload** to complete the installation.
7. Changes to the apps in your instance will affect Jira search index. After you make changes to the app, you'll get the following message in the *Administration* view: *We recommend that you perform a re\-index, as configuration changes were made to `SECTION` by `USER` at `TIME`. If you have other changes to make, complete them first so that you don't perform multiple re\-indexes*. You will need to perform a full re\-index for the integration to succeed, follow the steps in the [official Jira documentation](https://confluence.atlassian.com/adminjiraserver/search-indexing-938847710.html) to do so.

Configure integration from Atlan to Jira Data Center[â](#configure-integration-from-atlan-to-jira-data-center "Direct link to Configure integration from Atlan to Jira Data Center")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To configure the Jira Data Center integration from Atlan, from the *Integrations* sub\-menu:

1. Expand theÂ*Jira* tile. (You may need to refresh the page before the following options appear.)
2. Under theÂ*Configurations* tab, for *Projects*, select the Jira project to use as your default project from the dropdown and click **Update**.
3. (Optional) At any future time, you can review theÂ**Overview** tab to see the number of linked issues between Jira Data Center and Atlan.

Atlan is now connected to Jira Data Center! ð

**Did you know?**The default project is preselected when creating or linking issues to an asset in Atlan. You can change the project while creating or linking issues as needed.

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)

[PreviousHow to integrate Jira Cloud](/product/integrations/project-management/jira/how-tos/integrate-jira-cloud)[NextLink your Jira account](/product/integrations/project-management/jira/how-tos/link-your-jira-account)

Copyright Â© 2025 Atlan Pte. Ltd.

