# Source URL
https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel
link-alternate: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel
meta-description: The Atlan add-in for Microsoft Excel makes it easy to enrich metadata in bulk for your data assets in Atlan. You can use the Atlan add-in for both the web and desktop versions of Microsoft Excel.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The Atlan add-in for Microsoft Excel makes it easy to enrich metadata in bulk for your data assets in Atlan. You can use the Atlan add-in for both the web and desktop versions of Microsoft Excel.
meta-og-locale: en
meta-og-title: Integrate Atlan with Microsoft Excel | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Integrate Atlan with Microsoft Excel | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Integrate Atlan with Microsoft Excel
====================================

The Atlan add\-in for Microsoft Excel makes it easy to enrich metadata in bulk for your data assets in Atlan. You can use the Atlan add\-in for both the web and desktop versions of Microsoft Excel.

Integrating Atlan with Microsoft Excel will allow you to:

* [Import column metadata](/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-microsoft-excel#import-column-metadata) for your data assets to Microsoft Excel
* [Update column metadata](/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-microsoft-excel#update-column-metadata) for your imported assets directly in Microsoft Excel
* [Download impacted assets](/product/integrations/collaboration/spreadsheets/how-tos/download-impacted-assets-in-microsoft-excel) in Microsoft Excel

To integrate Atlan with Microsoft Excel:

* If your Atlan tenant is hosted on the standard domain `https://<your-tenant-name>.atlan.com`, you can either:
    + [Install and connect the Atlan add\-in as an individual user](#set-up-the-add-in-as-a-user)
    + [Deploy and publish the Atlan add\-in for your organization as a Microsoft 365 admin](#deploy-and-publish-the-add-in-as-an-admin)
* Â If your Atlan tenant is hosted on a custom domain `https://<your-tenant-name>.mycompany.com`, your Microsoft 365 admin will need to [configure the Atlan add\-in using PowerShell](/product/integrations/collaboration/spreadsheets/how-tos/configure-custom-domains-for-microsoft-excel)

Set up the add\-in as a user[â](#set-up-the-add-in-as-a-user "Direct link to Set up the add-in as a user")
------------------------------------------------------------------------------------------------------------

Who can do this?Any individual in your organization with access to Atlan can install the Atlan add\-in for Microsoft Excel. Your Atlan tenant must be hosted on the standard domain `atlan.com` to set up the add\-in as a user.

### Install Atlan in Microsoft Excel[â](#install-atlan-in-microsoft-excel "Direct link to Install Atlan in Microsoft Excel")

To install the Atlan add\-in directly in Microsoft Excel:

1. Open a new Microsoft Excel workbook.
2. From the upper right of the *Home* tab, click the **Add\-ins** button, and then from the dropdown, click **More Add\-ins**.
3. In the *Office add\-ins* dialog, click **Store**.
4. In the search bar of your *Office Store*, type `Atlan` and press enter.
5. Select the **Atlan** add\-in and click **Add**.
6. If you see a dialog asking for permissions, click **Continue** to proceed.

### Connect Atlan to Microsoft Excel[â](#connect-atlan-to-microsoft-excel "Direct link to Connect Atlan to Microsoft Excel")

To connect Atlan with your Microsoft Excel workbook:

1. In the menu bar of your Microsoft Excel workbook, click the **Atlan** tab.
2. From the top left of the *Atlan* tab, click **Setup** to set up Atlan in your Microsoft Excel workbook.
3. In the Atlan sidebar on the right, enter your Atlan tenant name \- for example, `https://<your-tenant-name>.atlan.com`. If you have a custom domain,Â[additional configuration](/product/integrations/collaboration/spreadsheets/how-tos/configure-custom-domains-for-microsoft-excel) will be required.
4. Click **Login** to connect Atlan to Microsoft Excel. If you haven't logged into Atlan, you will be prompted to enter your credentials \- including SSO, if enforced in your organization. Once connected, you can either [enrich column metadata](/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-microsoft-excel) or [download impacted assets for lineage analysis](/product/integrations/collaboration/spreadsheets/how-tos/download-impacted-assets-in-microsoft-excel).

Congrats on connecting Atlan with Microsoft Excel! ð

dangerFor every new Microsoft Excel workbook that you create, you will need to follow the steps outlined above to connect Atlan to that workbook. The Atlan add\-in will remain connected for all worksheets within an already connected workbook.

[https://demo.arcade.software/2mufPyfJhMu5YSfQeIHn?embed](https://demo.arcade.software/2mufPyfJhMu5YSfQeIHn?embed)

Deploy and publish the add\-in as an admin[â](#deploy-and-publish-the-add-in-as-an-admin "Direct link to Deploy and publish the add-in as an admin")
------------------------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your Microsoft 365 administrator to complete these steps \- you may not have access yourself. Before you begin, you may need to [Determine if Centralized Deployment of add\-ins works for your organization](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/centralized-deployment-of-add-ins?view=o365-worldwide).

The Atlan add\-in can be installed at the workspace level for:

* **Standard domains** \- your Atlan tenant must be hosted as a subdomain of `atlan.com` to deploy the add\-in using the steps below.
* **Custom domains** \- if your Atlan tenant is hosted under a custom domain belonging to your organization, you will need to [configure the Atlan add\-in using PowerShell](/product/integrations/collaboration/spreadsheets/how-tos/configure-custom-domains-for-microsoft-excel).

To install the Atlan add\-in directly in Microsoft Excel:

1. Sign in atÂ[admin.microsoft.com](https://admin.microsoft.com/).
2. From the left menu of the admin center, click the **Settings** dropdown and then click **Integrated apps**.
3. On the *Integrated apps* page, under *Deployed apps*, click **Get apps**.
4. In the top right of the *Microsoft 365 Apps* published apps page, navigate to the search bar, type `Atlan` and press enter.
5. Select the **Atlan** add\-in for Microsoft Excel and click **Get it now**.
6. If you see a dialog asking for permissions, click **Get it now** to proceed.
7. In the *Deploy New App* dialog, enter the following details:
    1. In the *Add users* page, for *Assign users*, you can either:
        * Click **Entire organization** to deploy the add\-in to all users in your organization.
        * Click **Specific users/groups** to deploy the add\-in to a subset of users in your organization. Use the search box to find specific users or groups.
    2. Click **Next** to continue.
    3. In the *Accept permissions requests* page, the app capabilities and permissions of the apps are listed. If the app needs consent, select **Accept permissions**. Otherwise, click **Next** to continue.
    4. In the *Review and finish deployment* page, review the deployment and click **Finish deployment**.
    5. Once deployment is completed, click **Done** to finish setup. Note that it can take up to 24 hours for an add\-in to show up for all your users.

All your users will need to do next is [connect Atlan to Microsoft Excel](#connect-atlan-to-microsoft-excel)! ð

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)

[PreviousHow to integrate Atlan with Google Sheets](/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-google-sheets)[NextLink your account](/product/integrations/collaboration/spreadsheets/how-tos/link-your-account)

Copyright Â© 2025 Atlan Pte. Ltd.

