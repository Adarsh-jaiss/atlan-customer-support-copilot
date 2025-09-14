# Source URL
https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db
link-alternate: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db
meta-description: If your Microsoft Azure Cosmos DB deployment includes a mix of vCore- and RU-based accounts, you must configure both to fetch metadata. You can then use the _vCore and RU_ deployment option to [crawl your Microsoft Azure Cosmos DB assets](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: If your Microsoft Azure Cosmos DB deployment includes a mix of vCore- and RU-based accounts, you must configure both to fetch metadata. You can then use the _vCore and RU_ deployment option to [crawl your Microsoft Azure Cosmos DB assets](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db).
meta-og-locale: en
meta-og-title: Set up Microsoft Azure Cosmos DB | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Microsoft Azure Cosmos DB | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Microsoft Azure Cosmos DB
================================

**Did you know?**Atlan currently only supports crawling [Microsoft Azure Cosmos DB for MongoDB](https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/introduction) with the Microsoft Azure Cosmos DB connector.

Atlan supports the following deployment types for fetching metadata from Microsoft Azure Cosmos DB:

* vCore\-based deployment \- you can use SCRAM\-SHA authentication for vCore\-based accounts. You will need to authenticate the connection in Atlan with a primary connection string to fetch metadata from vCore\-based accounts. Atlan provides multi\-account support for fetching metadata.
* RU\-based deployment \- you can use service principal authentication for request unit (RU)\-based accounts. You will need to authenticate the connection in Atlan with a client ID, client secret, and tenant ID to fetch metadata from RU\-based accounts. Atlan provides multi\-account support for fetching metadata.

If your Microsoft Azure Cosmos DB deployment includes a mix of vCore\- and RU\-based accounts, you must configure both to fetch metadata. You can then use the *vCore and RU* deployment option to [crawl your Microsoft Azure Cosmos DB assets](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db).

vCore deployment[â](#vcore-deployment "Direct link to vCore deployment")
--------------------------------------------------------------------------

Who can do this?You will need your Microsoft Azure Cosmos DB administrator to complete these steps \- you may not have access yourself.

For vCore\-based accounts, you will need the primary connection string of your Microsoft Azure Cosmos DB deployment to use SCRAM\-SHA authentication for [integrating with Atlan](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db).

To retrieve the primary connection string for vCore\-based accounts:

1. Log in to the [Azure portal](https://portal.azure.com/) as an admin.
2. In the portal, search for and select **Azure Cosmos DB**.
3. On the *Azure Cosmos DB* page, select your Azure Cosmos DB for MongoDB (vCore) account.
4. From the *Overview* page, copy the value of the *Admin username*. For password, you will need the password that was set up during your Microsoft Azure Cosmos DB deployment.
5. In the left menu of the account page, under *Settings*, click **Connection strings**.
6. Copy the value of the *Primary Connection String* and store it in a secure location. You will need to add the values of the admin username and password to the placeholder values in the primary connection string you copied. Repeat steps 1 to 6 for all the vCore\-based accounts you want to crawl in Atlan.

RU\-based deployment[â](#ru-based-deployment "Direct link to RU-based deployment")
------------------------------------------------------------------------------------

For request Unit (RU)\-based accounts, you will need a client ID, client secret, and tenant ID for service principal authentication. Microsoft Azure Cosmos DB for MongoDB deployment currently does not support service principal authentication for vCore\-based accounts.

### Register app with Microsoft Entra ID[â](#register-app-with-microsoft-entra-id "Direct link to Register app with Microsoft Entra ID")

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

### Set permissions[â](#set-permissions "Direct link to Set permissions")

Who can do this?You will need your Microsoft Azure Cosmos DB administrator to complete these steps \- you may not have access yourself.

You will need to add the service principal to the [Cosmos DB Account Reader Role](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#cosmos-db-account-reader-role). This will allow the service principal read\-only access to your Azure Cosmos DB account data.

To add the service principal to the *Cosmos DB Account Reader Role*:

1. Log in to the [Azure portal](https://portal.azure.com).
2. Open the menu and search for or select **Azure Cosmos DB**.
3. On the *Azure Cosmos DB* page, select your Azure Cosmos DB for MongoDB (RU) account.
4. From the left menu of your Azure Cosmos DB for MongoDB (RU) account page, click **Access control (IAM)**.
5. From the tabs along the top of the *Access control (IAM)* page, click **Add** and then click **Add role assignment**.
6. On the *Add role assignment* page, configure the following:
    1. In the *Roles* tab, from the list of roles under *Job function roles*,Â select **Cosmos DB Account Reader Role**Â \- this allows [read\-only access to Azure Cosmos DB account data](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#cosmos-db-account-reader-role) \- and then click **Next**. You will need to assign this role to all the RU\-based accounts you want to crawl in Atlan.
    2. In the *Members* tab, enter the following details:
        1. For *Assign access to*, click **User, group, or service principal**.
        2. For *Members*, click **\+ Select members** and then select the [service principal](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/set-up-microsoft-azure-cosmos-db) you created. Click **Next** to proceed to the next step.
    3. In the *Review \+ assign* tab, click **Review \+ assign** to add role assignment.

(Optional) Whitelist Atlan IP range[â](#optional-whitelist-atlan-ip-range "Direct link to (Optional) Whitelist Atlan IP range")
---------------------------------------------------------------------------------------------------------------------------------

You may need to whitelist Atlan's IP range to allow Atlan to [crawl Microsoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db).

To whitelist the Atlan IP range:

1. Log in to the [Azure portal](https://portal.azure.com).
2. Open the menu and search for or select **Azure Cosmos DB**.
3. On the *Azure Cosmos DB* page, select your Azure Cosmos DB for MongoDB account.
4. From the left menu of your Azure Cosmos DB for MongoDB account page, click **Networking**.
5. On the *Networking* page, under *Public network access*, check the following:
    * If **All networks** is enabled, no further action required.
    * If **Select networks** is enabled, [raise an Atlan support request](/support/submit-request) to obtain Atlan's IP range. Once received from Atlan support, for *IP (Single IPv4 or CIDR range)*, enter Atlan's IP range and click the **Save** button.
**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)
* [authentication](/tags/authentication)

[PreviousMicrosoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db)[NextCrawl Microsoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db)

Copyright Â© 2025 Atlan Pte. Ltd.

