# Source URL
https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs
link-alternate: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs
meta-description: Atlan supports the following authentication methods for Microsoft Azure Event Hubs:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan supports the following authentication methods for Microsoft Azure Event Hubs:.
meta-og-locale: en
meta-og-title: Set up Microsoft Azure Event Hubs | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Microsoft Azure Event Hubs | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Microsoft Azure Event Hubs
=================================

Atlan supports the following authentication methods for Microsoft Azure Event Hubs:

* [SAS key](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) \- this method uses a connection string\-primary key to fetch metadata.
* [Service principal](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) \- in addition to a connection string\-primary key, this method requires a client ID, client secret, and tenant ID to fetch metadata.

SAS key authentication[â](#sas-key-authentication "Direct link to SAS key authentication")
--------------------------------------------------------------------------------------------

Who can do this?You will need your Microsoft Azure Event Hubs administrator to complete these steps \- you may not have access yourself.

### Create a shared access signature policy[â](#create-a-shared-access-signature-policy "Direct link to Create a shared access signature policy")

You will need to create a shared access signature (SAS) policy in Microsoft Azure Event Hubs for authentication in Atlan.

The [*Manage* permission](https://learn.microsoft.com/en-us/azure/event-hubs/authorize-access-shared-access-signature#shared-access-authorization-policies) is required for the following:

* Atlan requires read permissions of the configurations set to event hubs and the event hub namespace. Since Atlan currently only supports SAS policy\-based authentication, *Manage* permission is required to provide this type of access. SAS policies do not support granular access control while *Send* or *Listen* permission is insufficient to crawl configuration metadata. Granular permissions will only be available once Atlan supports other authentication methods that allow for the granular access control capabilities of Microsoft Azure.
* To fetch the [Azure Event Hub status attribute](/apps/connectors/messaging/microsoft-azure-event-hubs/references/what-does-atlan-crawl-from-microsoft-azure-event-hubs#event-hubs) and [Azure Event Hub consumer group assets](/apps/connectors/messaging/microsoft-azure-event-hubs/references/what-does-atlan-crawl-from-microsoft-azure-event-hubs#consumer-groups) through the Azure APIs.

To [create a SAS policy](https://learn.microsoft.com/en-us/azure/event-hubs/authorize-access-shared-access-signature) for [crawling Microsoft Azure Event Hubs](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs):

1. Log in to the [Azure portal](https://portal.azure.com).
2. Open the menu and search for or click **Event Hubs**.
3. On the *Event Hubs* page, click the namespace of your event hub. Copy your *Event Hubs Namespace* to use for [authentication in Atlan](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs#provide-credentials).
4. In the left menu of your event hub namespace, under *Settings*, click **Shared access policies**.
5. On the \_Shared access policie\_s page, click **\+ Add** to add a new SAS policy.
6. In the *Add SAS policy* sidebar, enter the following details:
    1. For *Policy name*, enter a meaningful name \- for example, `Atlan integration policy`.
    2. To add the [*Manage* permission](https://learn.microsoft.com/en-us/azure/event-hubs/authorize-access-shared-access-signature#shared-access-authorization-policies) to your SAS policy, click **Manage**.
    3. Click **Create** to finish setup.
7. On the \_Shared access policie\_s page, select the newly created SAS policy.
8. From the corresponding *SAS Policy* dialog, under *Connection string\-primary key*, click the clipboard icon to copy the connection string\-primary key and store it in a secure location.

You will need your event hub namespace and the connection string\-primary key for [crawling Microsoft Azure Event Hubs](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs).

Service principal authentication[â](#service-principal-authentication "Direct link to Service principal authentication")
--------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your Microsoft Azure Event Hubs administrator to [create a shared access signature policy](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs#create-a-shared-access-signature-policy) and *[Cloud Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#cloud-application-administrator)* or *[Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#application-administrator)* to [register an app with Microsoft Entra ID](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs#register-app-with-microsoft-entra-id) and [add it to the Event Hubs Data Sender role](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) \- you may not have access yourself.

You need the following to authenticate the connection in Atlan:

* [Connection string\-primary key](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) \- required to crawl Kafka assets
* [Client ID](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) (application ID), [client secret](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs), and [tenant ID](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs) (directory ID) \- required to crawlÂ Microsoft Azure Event Hubs assetsÂ

### Create a shared access signature policy[â](#create-a-shared-access-signature-policy-1 "Direct link to Create a shared access signature policy")

Follow the steps in [Create a shared access signature policy](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs#create-a-shared-access-signature-policy) to generate a connection string\-primary key for [crawling Microsoft Azure Event Hubs](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs).

### Register app with Microsoft Entra ID[â](#register-app-with-microsoft-entra-id "Direct link to Register app with Microsoft Entra ID")

You will need to register your service principal application with Microsoft Entra ID and note down the values of the tenant ID, client ID, and client secret.

To register your app with Microsoft Entra ID:

1. Log in to the [Azure portal](https://portal.azure.com/).
2. In the search bar, search for **Microsoft Entra ID** and select it from the dropdown list.
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

### Add app to Event Hubs Data Sender role[â](#add-app-to-event-hubs-data-sender-role "Direct link to Add app to Event Hubs Data Sender role")

You will need to add the [service principal application](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs#service-principal-authentication) created in the previous step to the [Azure Event Hubs Data Sender role](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#azure-event-hubs-data-sender).

To add a service principal to the Azure Event Hubs Data Sender role:

1. Log in to the [Azure portal](https://portal.azure.com).
2. Open the menu and search for or click **Event Hubs**.
3. On the *Event Hubs* page, click the namespace of your event hub.
4. From the left menu of your event hubs namespace page, click **Access Control (IAM)**.
5. In the upper right of the *Access Control (IAM)* page, navigate to the *Add a role assignment* tile and then click **Add**.
6. On the *Add a role assignment* page, enter the following details:
    1. For *Role*, click the dropdown to select **Azure Event Hubs Data Sender** \- this allows [send access to Azure Event Hubs resources](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#azure-event-hubs-data-sender).
    2. For *Assign access to*, click the dropdown to select **Azure AD user, group, or service principal**.
    3. For *Select*, choose the [service principal application you created](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/set-up-microsoft-azure-event-hubs#service-principal-authentication) in the previous step.
    4. Click **Save** to save your role assignment.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousMicrosoft Azure Event Hubs](/apps/connectors/messaging/microsoft-azure-event-hubs)[NextCrawl Microsoft Azure Event Hubs](/apps/connectors/messaging/microsoft-azure-event-hubs/how-tos/crawl-microsoft-azure-event-hubs)

Copyright Â© 2025 Atlan Pte. Ltd.

