# Source URL
https://docs.atlan.com/product/integrations/project-management/servicenow/how-tos/integrate-servicenow

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/project-management/servicenow/how-tos/integrate-servicenow
link-alternate: https://docs.atlan.com/product/integrations/project-management/servicenow/how-tos/integrate-servicenow
meta-description: If your Atlan admin has [enabled the governance workflows and inbox module](/product/capabilities/governance/stewardship/how-tos/automate-data-governance) in your Atlan workspace, you can create a ServiceNow integration to allow your users to [grant or revoke data access](/product/capabilities/governance/stewardship/how-tos/automate-data-governance) for governed assets in Atlan or any other data source.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: If your Atlan admin has [enabled the governance workflows and inbox module](/product/capabilities/governance/stewardship/how-tos/automate-data-governance) in your Atlan workspace, you can create a ServiceNow integration to allow your users to [grant or revoke data access](/product/capabilities/governance/stewardship/how-tos/automate-data-governance) for governed assets in Atlan or any other data source.
meta-og-locale: en
meta-og-title: Integrate ServiceNow | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/project-management/servicenow/how-tos/integrate-servicenow
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Integrate ServiceNow | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Integrate ServiceNow
====================

Who can do this?You will need to be an [admin](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to configure the ServiceNow integration. You will also need inputs and approval from a System Administrator of your ServiceNow instance with a [security\_admin role](https://www.servicenow.com/docs/bundle/xanadu-platform-security/page/administer/security/concept/c_ElevatedPrivilege.html#d89862e100).

dangerIf your ServiceNow instance is behind a VPN or firewall, you must add the Atlan IP to your allowlist. Please raise a support ticket from within Atlan or [submit a request](/support/submit-request). (If you are not using the IP allowlist, you can skip this step.)

If your Atlan admin has [enabled the governance workflows and inbox module](/product/capabilities/governance/stewardship/how-tos/automate-data-governance) in your Atlan workspace, you can create a ServiceNow integration to allow your users to [grant or revoke data access](/product/capabilities/governance/stewardship/how-tos/automate-data-governance) for governed assets in Atlan or any other data source.

This is only applicable if you:

* [Enable governance workflows](/product/capabilities/governance/stewardship/how-tos/automate-data-governance)
* [Want to use the data access approval workflow](/product/capabilities/governance/stewardship/how-tos/automate-data-governance)

To integrate ServiceNow and Atlan, follow these st

[https://demo.arcade.software/6mNX2DUAnmh7bUqVEBBF?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/6mNX2DUAnmh7bUqVEBBF?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

eps.

Create an OAuth application in ServiceNow[â](#create-an-oauth-application-in-servicenow "Direct link to Create an OAuth application in ServiceNow")
-----------------------------------------------------------------------------------------------------------------------------------------------------

You will need to create an OAuth application endpoint for Atlan to access your ServiceNow instance.

To [create an OAuth application](https://www.servicenow.com/docs/bundle/xanadu-platform-security/page/administer/security/task/t_CreateEndpointforExternalClients.html), from within ServiceNow:

1. Log in to your ServiceNow instance as a System Administrator with a security\_admin role.
2. From the address bar at the top of your browser window, copy the ServiceNow instance URL \- for example, `https://<instance_name>.service-now.com`. This will be required to [connect Atlan to your ServiceNow instance](#connect-atlan-to-servicenow).
3. From the top header of your ServiceNow instance, click **All**. From the dropdown, search for and select **System OAuth** and then click **Application Registry**.
4. In the top\-right corner of the *Application Registries* page, click **New** to create a new OAuth application.
5. In the corresponding screen, for *What kind of OAuth application?*, click **Create an OAuth API endpoint for external clients**.
6. In the *Application Registries New record* form, enter the following details:
    1. For *Name*, enter `Atlan OAuth App`.
    2. For *Redirect URL*, enter the redirect URL in the following format \- `https://<atlan_instance_name>/oauth-callback`. Replace `<atlan_instance_name>` with the name of your Atlan instance.
    3. For *Logo URL*, copy and paste `https://assets.atlan.com/assets/atlan-primary-logo-png.png`.
    4. Click **Submit** to create the OAuth application in ServiceNow.
7. From the *Application Registries* page, select the OAuth application you created above. Copy the values for **Client ID** and **Client Secret** and store them in a secure location.

Connect Atlan to ServiceNow[â](#connect-atlan-to-servicenow "Direct link to Connect Atlan to ServiceNow")
-----------------------------------------------------------------------------------------------------------

To connect Atlan to ServiceNow, you will need the following:

* ServiceNow instance URL \- for example, `https://<instance_name>.service-now.com`
* Client ID and client secret of the OAuth application you created in ServiceNow

To connect Atlan to ServiceNow, from within Atlan:

1. Log in to your Atlan instance as an admin user.
2. From the left menu, click **Admin**.
3. Under *Workspace*, click **Integrations**.
4. In the *ServiceNow* tile, click the **Connect** button.
5. In the corresponding *Add to ServiceNow* dialog, for *ServiceNow URL*, enter the [URL of your ServiceNow instance](#create-an-oauth-application-in-servicenow) \- for example, `https://<instance_name>.service-now.com`.
6. Click **Next** to proceed.
7. This step requires the creation of an OAuth application in ServiceNow, [follow the steps to do so](#create-an-oauth-application-in-servicenow). If you have already created it, in the *Create OAuth app* section, for *Copy the Client ID and Secret from the new OAuth app and paste below*, enter the following:
    * For *Client ID*, enter the [client ID you copied from ServiceNow](#create-an-oauth-application-in-servicenow).
    * For *Client Secret*, enter the [client secret you copied from ServiceNow](#create-an-oauth-application-in-servicenow).
8. Click **Next** to proceed.
9. In the *Commit update set* section, click **Atlan Update Set.xml** to download the update set XML file from Atlan to [import and commit in ServiceNow](#import-and-commit-the-update-set-xml-file).

Configure the Atlan integration in ServiceNow[â](#configure-the-atlan-integration-in-servicenow "Direct link to Configure the Atlan integration in ServiceNow")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

To configure the Atlan integration in ServiceNow, your ServiceNow System Administrator with a security\_admin role will need to complete the following two steps:

1. [Import and commit the update set XML file](https://www.servicenow.com/docs/bundle/utah-it-service-management/page/product/site-reliability-ops/task/sro-update-set-quick-start.html) downloaded from Atlan to create an Atlan data access catalog and business rule in ServiceNow.
2. [Create a new user](https://www.servicenow.com/docs/fr-FR/bundle/xanadu-platform-administration/page/administer/users-and-groups/task/t_CreateAUser.html) in ServiceNow for the Atlan integration.

### Import and commit the update set XML file[â](#import-and-commit-the-update-set-xml-file "Direct link to Import and commit the update set XML file")

To [import and commit the update set XML file](https://www.servicenow.com/docs/bundle/utah-it-service-management/page/product/site-reliability-ops/task/sro-update-set-quick-start.html), from within ServiceNow:

1. Log in to your ServiceNow instance as a System Administrator with a security\_admin role.
2. From the top header of your ServiceNow instance, click **All**. From the dropdown, search for and select **System Update Sets** and then click **Retrieved Update Sets**.
3. On the *Retrieved Update Sets* page, under *Related Links*, click the **Import Update Set from XML** link.
4. On the *Import XML* page, to upload the [update set XML file downloaded from Atlan](#import-and-commit-the-update-set-xml-file):
    1. For *Step 1: Choose file to upload*, click **Choose file** to upload the *Atlan Update Set.xml* file.
    2. For *Step 2: Upload the file*, click the **Upload** button.
5. In the top\-left corner of your screen, click the back button to return to the *Retrieved Update Sets* page. The Atlan update set will appear on the *Retrieved Update Set* list in a *Loaded* state. Once the XML file has successfully loaded, select the **Atlan Update Set**.
6. Click **Preview Update Set** to preview the update set and address any issues. The update set includes the following:
    * *Atlan Data Access* catalog \- Atlan will create data access requests in this catalog.
    * *Atlan Business Rule* \- this is required for Atlan to receive events from your ServiceNow instance to detect any changes in the status of data access requests created in Atlan and automatically update governance workflow requests.
    * Atlan service role and access control list (ACL) updates \- the Atlan service account requires a role with write access on the `sc_request` table to update specific fields such as `description`, `short_description`, and more. This operation especially requires the security\_admin role to commit the update set from Atlan in ServiceNow.
    * *Scripted REST API* \- this is initially required to retrieve the username and sys\_id of the Atlan user completing the ServiceNow integration. Atlan creates a Scripted REST API `/api/snc/oauth_userinfo` that returns the username and sys\_id for an authenticated user. Once the integration has been completed, Atlan will have the access token required for the integration to continue working.
7. Click **Commit Update Set**.

If the commit action fails, [contact Atlan support](/support/submit-request).

### Create a new user[â](#create-a-new-user "Direct link to Create a new user")

To [create a new user](https://www.servicenow.com/docs/fr-FR/bundle/xanadu-platform-administration/page/administer/users-and-groups/task/t_CreateAUser.html), from within ServiceNow:

1. Log in to your ServiceNow instance as a System Administrator with a security\_admin role.
2. From the top header of your ServiceNow instance, click **All**. From the dropdown, search for and select **User Administration** and then click **Users**.
3. In the top\-right corner of the *Users* page, click **New** to create a new user.
4. In the *User New record* form, enter the following details:
    1. For *User ID*, enter `atlan.service`.
    2. For *First name* and *Last name*, enter `Atlan` and `Service`, respectively.
    3. Click **Submit** to create the new user.
5. From the *Users* page, search for and select the `atlan.service` user you created.
6. On the *User atlan.service* page, scroll down to the table at the bottom of the screen. In the table, change to the **Roles** tab and then click the **Edit** button.
7. On the *Edit Members* page, configure the following:
    1. In the *Collection* list, search for and select **atlan\_service\_account\_role**.
    2. Click the greater than icon to add the role to the `atlan.service` user you created.
    3. Click **Save** to save your role assignment for the new user.
8. In the *User atlan.service* page, click the **Set Password** button to create a password for the new user.
9. In the *Set Password* dialog, click the **Generate** button to generate a password. Once a password has been generated, click the clipboard icon to copy the value and store it in a secure location. Click **Save Password**. This password will be required to [configure the ServiceNow integration in Atlan](#configure-the-atlan-integration-in-servicenow).

Configure the ServiceNow integration in Atlan[â](#configure-the-servicenow-integration-in-atlan "Direct link to Configure the ServiceNow integration in Atlan")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

To configure the ServiceNow integration in Atlan, from within Atlan:

1. Log in to your Atlan instance as an admin user.
2. From the left menu, click **Admin**.
3. Under *Workspace*, click **Integrations**.
4. Expand the *ServiceNow* tile.
5. In the *Commit update set* section, for *Password*, enter the [password you copied from ServiceNow for the new user](#create-a-new-user).
6. Click the **Connect and test** button to test the ServiceNow integration. This ensures that the update set was committed successfully in ServiceNow and Atlan can receive webhook events. To test the latter, Atlan will create a sample request in ServiceNow, wait for a few seconds to receive a webhook event, and then display the status of the connection as *CONNECTED*.
7. (Optional) Under the *Configurations* tab, for *Test Connection*, click the **Run test** button to verify that the ServiceNow integration is working properly in Atlan at any time.
8. (Optional) At any future time, you can review the **Overview** tab to see the number of linked issues between ServiceNow and Atlan.

Atlan is now connected to ServiceNow! ð

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)

[PreviousServiceNow](/product/integrations/project-management/servicenow)[NextLink your ServiceNow account](/product/integrations/project-management/servicenow/how-tos/link-your-servicenow-account)

Copyright Â© 2025 Atlan Pte. Ltd.

