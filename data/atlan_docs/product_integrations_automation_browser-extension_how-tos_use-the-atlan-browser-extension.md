# Source URL
https://docs.atlan.com/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension
link-alternate: https://docs.atlan.com/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension
meta-description: The Atlan browser extension provides metadata context directly in your [supported data tools](#supported-tools). You can use the extension in the following Chromium-based browsers: Google Chrome and Microsoft Edge.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The Atlan browser extension provides metadata context directly in your [supported data tools](#supported-tools). You can use the extension in the following Chromium-based browsers: Google Chrome and Microsoft Edge.
meta-og-locale: en
meta-og-title: Use the Atlan browser extension | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/automation/browser-extension/how-tos/use-the-atlan-browser-extension
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Use the Atlan browser extension | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Use the Atlan browser extension
===============================

The Atlan browser extension provides metadata context directly in your [supported data tools](#supported-tools). You can use the extension in the following Chromium\-based browsers: Google Chrome and Microsoft Edge.

Install the extension[â](#install-the-extension "Direct link to Install the extension")
-----------------------------------------------------------------------------------------

[https://demo.arcade.software/50hFOXLRSMBavSHRYEZU?embed](https://demo.arcade.software/50hFOXLRSMBavSHRYEZU?embed)

To install the Atlan browser extension, first log into your Atlan instance. Atlan saves your Atlan domain in a cookie when you log in.

To install Atlan's browser extension:

1. You can either:
    * Find the extension in the Chrome Web Store: <https://chrome.google.com/webstore/detail/atlan/fipjfjlalpnbejlmmpfnmlkadjgaaheg>
    * From the upper right of any screen in Atlan, navigate to your name and then click **Profile**.
        1. Click the four dots icon in the resulting dialog to get to integrations.
        2. Under *Apps*, for *Browser extension*, click **Install**.
2. To install the Atlan browser extension:
    * For Google Chrome, in the upper right of your screen, click **Add to Chrome**. When prompted for confirmation, click the **Add extension** button.
    * For Microsoft Edge, follow the steps in [Add an extension to Microsoft Edge from the Chrome Web Store](https://support.microsoft.com/en-us/microsoft-edge/add-turn-off-or-remove-extensions-in-microsoft-edge-9c0ec68c-2fbc-2f2c-9ff0-bdc76f46b026).

Currently, you can't install the browser extension on mobile devices or tablets.

**Did you know?**You can also install Atlan's browser extension at the [workspace level](https://support.google.com/a/answer/172482?hl=en). To set this up, you need to be an administrator or have access to the admin console of your organization's Google account. If your organization uses managed browsers, you can [configure the extension for managed browsers](/product/integrations/automation/browser-extension/how-tos/configure-the-extension-for-managed-browsers).

Configure the extension[â](#configure-the-extension "Direct link to Configure the extension")
-----------------------------------------------------------------------------------------------

[https://demo.arcade.software/hzjEo3dNYamLrO2trXTn?embed&show_copy_link=true](https://demo.arcade.software/hzjEo3dNYamLrO2trXTn?embed&show_copy_link=true)

Once installed, configure the Atlan browser extension to get started. Optionally, Atlan admins can [preconfigure custom domains for data sources](#optional-configure-custom-domains-as-an-admin), if any.

### Configure the extension as a user[â](#configure-the-extension-as-a-user "Direct link to Configure the extension as a user")

To configure the browser extension, once installed:

1. If you are logged into your Atlan instance, skip to the next step. If you haven't logged into Atlan, log in to your Atlan instance when prompted.
2. In the *Options* page, to enter the URL of your Atlan instance:
    * If your organization uses an Atlan domain (for example, `_mycompany_.atlan.com`), the Atlan instance URL appears preselected. Click **Get started**. (Optional) Switch to a different Atlan domain, if required.
    * If your organization uses a custom domain (for example, `_atlan_.mycompany.com`), enter the URL of your Atlan instance and then click **Get started**.
3. After a successful login, the message *Updated successfully* appears.
4. (Optional) If your data tools are hosted on custom domains, rather than the standard SaaS domain of each tool:
    * Click the **Configure custom domain** link at the bottom.
        1. In the dropdown on the left, select your data tool.
        2. In the text box on the right, enter the custom domain you use for that tool.
        3. Repeat these steps for each tool hosted on a custom domain.
        4. Click the **Save** button when finished.
    * If your Atlan admin has [preconfigured custom domains for data sources](#optional-configure-custom-domains-as-an-admin), you won't be able to update or remove these selections. Click **\+ Add** to configure custom domains for additional data sources as required.
5. You can now close the *Options* tab.

The extension is now ready to use! ð

### (Optional) Configure custom domains as an admin[â](#optional-configure-custom-domains-as-an-admin "Direct link to (Optional) Configure custom domains as an admin")

[https://demo.arcade.software/nf9EKfI3q5YrsgnsQtwK?embed](https://demo.arcade.software/nf9EKfI3q5YrsgnsQtwK?embed)

Who can do this?You need to be an admin user in Atlan to configure custom domains for data sources from the admin center.

To configure custom domains, from within Atlan:

1. From the left menu of any screen, click **Admin**.
2. Under *Workspace*, click **Integrations**.
3. Under *Apps*, expand the **Browser extension** tile.
4. In theÂ*Browser extension* tile, for *Set up your custom data source...*, if your data tools are hosted on custom domains rather than the standard SaaS domain of each tool, click the **Configure** link to configure them for users in your organization.
    1. For *Connector*, select a [supported tool](#supported-tools) for the browser extension.
    2. In the adjacent field, enter the URL of the custom domain for your data source.
    3. (Optional) Click **\+ Add** to add more.
    4. Click **Save** to save your configuration.infoðª **Did you know?** For any [supported tools](#supported-tools) that you have configured, your users won't be able to update or remove these selections. They can, however, add additional custom domains for data sources.
5. (Optional) For *Download Atlan extension or share with your team*, you can either install the Atlan browser extension for your own use or share the link with your users.

Usage[â](#usage "Direct link to Usage")
-----------------------------------------

[https://demo.arcade.software/xeetykuxYHdyHlc7gCI4?embed&show_copy_link=true](https://demo.arcade.software/xeetykuxYHdyHlc7gCI4?embed&show_copy_link=true)

Who can do this?Anyone with access to Atlanâany admin, member, or guest userâand a supported tool can use the browser extension. First, log into Atlan.

**Did you know?**When using Atlan's browser extension in a [supported tool](#supported-tools), the extension only reads the URL of your browser tabâno other data is accessed. If using Atlan's browser extension on any [website](#configure-the-extension), it only reads the favicon, page title, and URL of your browser tab. Learn more about [Atlan browser extension security](/product/integrations/automation/browser-extension/concepts/atlan-browser-extension-security).

### Access and enrich context in\-flow[â](#access-and-enrich-context-in-flow "Direct link to Access and enrich context in-flow")

To access context for an asset, from within a supported tool:

1. Log into the supported tool.
2. Open any supported asset.
3. In the lower\-right corner of the page, click the small Atlan icon.dangerThe icon to activate Atlan is *not* the extension icon that appears at the top of your Chrome browser. This small Atlan icon in the lower right corner of the page is the only way to access the metadata for the asset you are viewing in another tool.
4. In the sidebar that appears:
    * Click the tabs and links to view all context about the asset.
    * Make changes to any of the metadata you'd like.

Now you can understand and enrich assets without leaving your data tools themselves! ð

The Atlan sidebar automatically reloads as you browse your assets in a supported tool to show details about the asset you're currently viewing.

**Did you know?**Your permissions in Atlan control what metadata you can see and change in the extension.

### Search for metadata[â](#search-for-metadata "Direct link to Search for metadata")

To search for context for any information on *any* website:

1. Select the text you'd like to search on the web page you're viewing.
2. Right\-click, and then select **Search in Atlan ð¡**.

The extension opens a new browser tab on Atlan's discovery page, with the results for that text! ð

### Add a resource[â](#add-a-resource "Direct link to Add a resource")

You can link any web page as a [resource](/product/capabilities/discovery/how-tos/add-a-resource) to your assets in Atlan using the browser extension.

To add a web page as a resource to an asset:

1. In the top right of the web page you're viewing, click the **Atlan Chrome extension**.
2. In the resource clipper menu, under *Link this page to an asset*, select the asset to which you'd like to add the web page as a resource.
3. Click **Save** to confirm your selection.
4. (Optional) Once the resource has been linked successfully, click the **Open in Atlan** button to view the linked asset directly in Atlan.

You can now add resources to your assets in Atlan from any website! ð

**Did you know?**The Tableau extension offers native embeddings directly in your dashboards. See [Enable embedded metadata in Tableau](/product/integrations/automation/browser-extension/how-tos/enable-embedded-metadata-in-tableau) for more information.

Supported tools[â](#supported-tools "Direct link to Supported tools")
-----------------------------------------------------------------------

Currently, the Atlan browser extension supports assets in the following tools:

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousConfigure the extension for managed browsers](/product/integrations/automation/browser-extension/how-tos/configure-the-extension-for-managed-browsers)[NextEnable embedded metadata in Tableau](/product/integrations/automation/browser-extension/how-tos/enable-embedded-metadata-in-tableau)

Copyright Â© 2025 Atlan Pte. Ltd.

