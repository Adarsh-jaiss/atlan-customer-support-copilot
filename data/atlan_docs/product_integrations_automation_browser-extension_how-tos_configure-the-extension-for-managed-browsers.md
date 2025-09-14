# Source URL
https://docs.atlan.com/product/integrations/automation/browser-extension/how-tos/configure-the-extension-for-managed-browsers

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/automation/browser-extension/how-tos/configure-the-extension-for-managed-browsers
link-alternate: https://docs.atlan.com/product/integrations/automation/browser-extension/how-tos/configure-the-extension-for-managed-browsers
meta-description: If you're using managed browsers, you can install and configure the Atlan browser extension for all users in your organization. To do so, you will need to bulk install the extension and deploy a configuration script.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: If you're using managed browsers, you can install and configure the Atlan browser extension for all users in your organization. To do so, you will need to bulk install the extension and deploy a configuration script.
meta-og-locale: en
meta-og-title: Configure the extension for managed browsers | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/automation/browser-extension/how-tos/configure-the-extension-for-managed-browsers
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Configure the extension for managed browsers | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Configure the extension for managed browsers
============================================

If you're using managed browsers, you can install and configure the Atlan browser extension for all users in your organization. To do so, you will need to bulk install the extension and deploy a configuration script.

Atlan supports managing the Atlan browser extension for the following:

* Operating systems: macOS and Microsoft Windows
* Browsers: Google Chrome and Microsoft Edge

The deployment scripts \- .mobileconfig file for macOS and PowerShell script for Microsoft Windows \- are designed to make only the most necessary modifications required for the Atlan browser extension to function properly. Both deployment methods adhere to the principle of least privilege:

* The .mobileconfig file for macOS only includes the configuration settings required to install and operate the Atlan browser extension.
* The PowerShell script creates essential registry keys required for the Atlan browser extension to operate on Microsoft Windows systems.

To configure the Atlan browser extension for a managed browser, you must complete these steps in the following order:

1. [Configure the browser extension](#configure-the-browser-extension)
2. [Bulk install the browser extension](#bulk-install-the-browser-extension)
3. [Deploy the configuration script](#deploy-the-configuration-script)
4. (Optional) [Verify and monitor the installation](#verify-and-monitor-the-installation)

Configure the browser extension[â](#configure-the-browser-extension "Direct link to Configure the browser extension")
-----------------------------------------------------------------------------------------------------------------------

Who can do this?You will need to be an [admin](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to configure the browser extension for users in your organization. You will also need inputs and approval from the IT administrator of your organization.

You can configure the browser extension and then download a configuration script to bulk install and deploy it for everyone in your organization.

To configure the browser extension, from within Atlan:

1. From the left menu on any screen, click **Admin**.
2. Under *Workspace*, click **Integrations**.
3. Under *Apps*, expand the **Browser extension** tile.
4. In theÂ*Browser extension* tile, for *Bulk install the browser extension*, click the **Set up now** button.
5. In the *Set up browser extension* form, enter the following details:
    1. For *Choose browser*, the browser and operating system values will be prefilled based on what you're currently using \- you can modify the fields, if required.
    2. For *Your* *Atlan domain*, enter the URL of your Atlan instance \- for example, `https://(instance_name).atlan.com`.
    
        info ðª **Did you know?** If you enable multiple Atlan domains, your users will be able to select the most relevant Atlan domain from a dropdown menu while using the browser extension. The default value in the dropdown will be the Atlan instance entered as *Your Atlan domain*. If your organization does not have multiple Atlan domains, only the default selection will be displayed.
    3. (Optional) For *Advanced settings*, you can configure the following:
    
        * If you have multiple Atlan instances, toggle on **Multiple Atlan domains** and then enter the URLs of your additional Atlan instances. Click **\+** **Add** to add more Atlan domains.
            * If your data tools are hosted on custom domains rather than the standard SaaS domain of each tool, toggle on **Custom data source** **domain**. Click **\+ Add**Â to add more custom domains for data sources.
    
        1. For *Connector*, select a [supported tool](/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension#supported-tools) for the browser extension.
                2. In the adjacent field, enter the URL of your custom data source domain.
            info ðª **Did you know?** For any [supported tools](/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension#supported-tools) configured while setting up the managed browser extension, your users will not be able to update or remove these selections. They can, however, add additional custom domains for data sources.
    4. Click the **Download Script** button to download the corresponding configuration script. The IT administrator(s) in your organization will need to install this configuration file in your organization's devices using a mobile device management (MDM) software. Administrative permissions to the MDM platform are required to complete the setup. Based on your operating system, the downloaded file can be one of the following two types:
    
        * `.mobileconfig` \- use this file to configure profiles with specific settings in [macOS devices](#macos).
            * `.ps1` \- use this PowerShell script to create registry keys in [Microsoft Windows devices](#microsoft-windows).

[https://demo.arcade.software/ldm8T5AjbOTOK9kRZ0J0?embed&show_copy_link=true](https://demo.arcade.software/ldm8T5AjbOTOK9kRZ0J0?embed&show_copy_link=true)

Bulk install the browser extension[â](#bulk-install-the-browser-extension "Direct link to Bulk install the browser extension")
--------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need to have administrator access to your organization's mobile device management (MDM) software with the permission to add and deploy new policies to all users. You will also need inputs and approval from your Atlan admin.

You will need to configure the `ExtensionInstallForcelist` browser policy for either Google Chrome or Microsoft Edge to force\-install the extension for everyone in your organization.

The `ExtensionInstallForcelist` browser policy:

* Governs extensions that can be silently installed and automatically enabled for all users.
* Provides extension IDs that the browser will automatically install and enable when a user logs in.

### Google Chrome[â](#google-chrome "Direct link to Google Chrome")

To bulk install the Atlan browser extension in Google Chrome, follow the steps in Google documentation: [Force install apps and extensions](https://support.google.com/chrome/a/answer/6306504?hl=en).

### Microsoft Edge[â](#microsoft-edge "Direct link to Microsoft Edge")

To bulk install the Atlan browser extension in Microsoft Edge, follow the steps in Microsoft documentation: [Force\-install an extension](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-manage-extensions-policies#force-install-an-extension).

For the *Extension/App IDs and update URLs to be silently installed (Device)* field, copy and paste the following value:

```
fipjfjlalpnbejlmmpfnmlkadjgaaheg;https://clients2.google.com/service/update2/crx  

```
* `fipjfjlalpnbejlmmpfnmlkadjgaaheg` is the `extension-id` for the Atlan browser extension.
* `https://clients2.google.com/service/update2/crx` indicates that it needs to be installed from the Chrome Web Store.

Deploy the configuration script[â](#deploy-the-configuration-script "Direct link to Deploy the configuration script")
-----------------------------------------------------------------------------------------------------------------------

Who can do this?You will need to have administrator access to your organization's mobile device management (MDM) software with the permission to add and deploy new policies to all users. You will also need inputs and approval from your Atlan admin.

The browser extension relies on managed storage for configuring domains in the Atlan extension. The values for managed storage can be configured through:

* A configuration profile in macOS
* Registry keys in Microsoft Windows

Although Atlan's solution is platform\-agnostic, the following example pertains to [Microsoft Intune](https://learn.microsoft.com/en-us/mem/intune/).

### macOS[â](#macos "Direct link to macOS")

You will need to create a custom managed profile to configure the domains for the Atlan browser extension.

To deploy the `.mobileconfig` file for your organization, you can use any MDM platform.

For example:

* Microsoft Intune \- follow the steps in [Custom configuration profile settings](https://learn.microsoft.com/en-us/intune/intune-service/configuration/custom-settings-macos#custom-configuration-profile-settings).

### Microsoft Windows[â](#microsoft-windows "Direct link to Microsoft Windows")

You will need to create registry keys to deploy the extension. You can create the required registry keys with a PowerShell script, which can then be deployed to your usersâ devices using an MDM software.

To deploy the PowerShell configuration script for your organization, you can use any MDM platform.

For example:

* Microsoft Intune \- follow the steps in [Create a script policy and assign it](https://learn.microsoft.com/en-us/mem/intune/apps/intune-management-extension#create-a-script-policy-and-assign-it). For *Script settings*, enter the following details:
    + *Script location* \- upload the `.ps1` configuration script downloaded from Atlan.
    + *Run this script using the logged on credentials* \- change to **No**.
    + *Enforce script signature check*Â \- change to **No**.
    + *Run script in 64 bit PowerShell Host*Â \- change to **Yes**.

Verify and monitor the installation[â](#verify-and-monitor-the-installation "Direct link to Verify and monitor the installation")
-----------------------------------------------------------------------------------------------------------------------------------

To ensure that the Atlan browser extension has been successfully deployed across all selected devices in your organization, you can:

* Verify the installation \- after you have deployed the policies, check a few target devices to ensure that the extension was installed and configured correctly.
* Monitor compliance \- monitor the compliance status of the policy and troubleshoot any issues.

Your users will now be able to use the Atlan browser extension in a managed browser! ð

Once the managed browser has synced with the latest configuration changes for your organization, the Atlan browser extension will be automatically installed and a new tab will open to indicate that the Atlan browser extension is now active.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousBrowser Extension](/product/integrations/automation/browser-extension)[NextHow to use the Atlan browser extension](/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension)

Copyright Â© 2025 Atlan Pte. Ltd.

