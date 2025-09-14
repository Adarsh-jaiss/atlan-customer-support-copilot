# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory
meta-description: Atlan supports service principal authentication for fetching metadata from Microsoft Azure Data Factory. This method requires a client ID, client secret, and tenant ID to fetch metadata.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports service principal authentication for fetching metadata from Microsoft Azure Data Factory. This method requires a client ID, client secret, and tenant ID to fetch metadata.
meta-og-locale: en
meta-og-title: Set up Microsoft Azure Data Factory | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/set-up-microsoft-azure-data-factory
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Microsoft Azure Data Factory | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Microsoft Azure Data Factory
===================================

Atlan supports service principal authentication for fetching metadata from Microsoft Azure Data Factory. This method requires a client ID, client secret, and tenant ID to fetch metadata.

Register app with Microsoft Entra ID[â](#register-app-with-microsoft-entra-id "Direct link to Register app with Microsoft Entra ID")
--------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your *[Cloud Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#cloud-application-administrator)* or *[Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#application-administrator)* to complete these stepsÂ \- you may not have access yourself. This will be required if the creation of registered applications is not enabled for the entire organization.

You will need to [register your service principal application](https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application) with Microsoft Entra ID and note down the values of the tenant ID, client ID, and client secret.

To register your app with Microsoft Entra ID:

1. Log in to the [Azure portal](https://portal.azure.com/).
2. In the search bar, search for **Microsoft Entra ID**, and select it from the dropdown list.
3. From the left menu of the *Microsoft Entra ID* page, click **App registrations**.
4. From the toolbar on the *App registrations* page, click **\+ New registration**.
5. On the *Register an application* page, for *Name*, enter a name for your service principal application and then click **Register**.
6. On the homepage of your newly created application, from the *Overview* screen, copy the values for the following fields and store them in a secure location:
    * **Application (client) ID**
    * **Directory (tenant) ID**
7. From the left menu of your newly created application page, click **Certificates \& secrets**.
8. On the *Certificates \& secrets* page, under *Client secrets*, click **\+ New client secret**.
9. In the *Add a client secret* screen, enter the following details:
    1. For *Description*, enter a description for your client secret.
    2. For *Expiry*, select when the client secret will expire.
    3. Click **Add**.
10. On the *Certificates \& secrets* page, under *Client secrets*, for the newly created client secret, click the clipboard icon to copy the *Value* and store it in a secure location.

Set permissions[â](#set-permissions "Direct link to Set permissions")
-----------------------------------------------------------------------

Who can do this?You will need your Microsoft Azure Data Factory administrator to complete these steps \- you may not have access yourself.

You will need to add the service principal to the [Reader role](https://learn.microsoft.com/en-us/azure/data-factory/concepts-roles-permissions#custom-scenarios-and-custom-roles). This will allow the service principal read\-only access to your Microsoft Azure Data Factory account.

To add the service principal to the *Reader* role:

1. Log in to the [Azure portal](https://portal.azure.com).
2. Open the menu and search for or select **Data factories**.
3. On the *Data factories* page, select the data factory you want to crawl in Atlan.
4. From the left menu of your data factory page, click **Access control (IAM)**.
5. From the tabs along the top of the *Access control (IAM)* page, click **Add** and then click **Add role assignment**.
6. On the *Add role assignment* page, configure the following:
    1. In the *Roles* tab, from the list of roles under *Job function roles*, select **Reader**Â \- this allows [read\-only access to your data factory](https://learn.microsoft.com/en-us/azure/data-factory/concepts-roles-permissions#custom-scenarios-and-custom-roles) \- and then click **Next**. You will need to assign this role to all the data factories you want to crawl in Atlan.
    2. In the *Members* tab, enter the following details:
        1. For *Assign access to*, click **User, group, or service principal**.
        2. For *Members*, click **\+ Select members** and then select the service principal you created. Click **Next** to proceed to the next step.
    3. In the *Review \+ assign* tab, click **Review \+ assign** to add role assignment.

Atlan will extract metadata from all the data factories you specified in your Microsoft Azure Data Factory account with *Reader* access.

**Tags:*** [data](/tags/data)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousMicrosoft Azure Data Factory](/apps/connectors/etl-tools/microsoft-azure-data-factory)[NextCrawl Microsoft Azure Data Factory](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/crawl-microsoft-azure-data-factory)

Copyright Â© 2025 Atlan Pte. Ltd.

