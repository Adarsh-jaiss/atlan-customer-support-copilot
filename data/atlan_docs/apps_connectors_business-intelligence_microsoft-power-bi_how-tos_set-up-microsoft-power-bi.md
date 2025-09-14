# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi
meta-description: This guide outlines how to set up Microsoft Power BI so it can connect with Atlan for metadata extraction and lineage tracking.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: This guide outlines how to set up Microsoft Power BI so it can connect with Atlan for metadata extraction and lineage tracking.
meta-og-locale: en
meta-og-title: Set up Microsoft Power BI | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/set-up-microsoft-power-bi
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up Microsoft Power BI | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up Microsoft Power BI
=========================

Who can do this?Depending on the authentication method you choose, you may need a combination of your *Cloud Application Administrator* or *Application Administrator* for Microsoft Entra ID, Microsoft 365 administrator for Microsoft 365, and *Fabric Administrator* ([formerly known as Power BI Administrator](https://powerbi.microsoft.com/en-us/blog/power-bi-administrator-role-will-be-renamed-to-fabric-administrator/)) for Microsoft Power BI to complete these tasks \-\> you may not have access yourself.

This guide outlines how to set up Microsoft Power BI so it can connect with Atlan for metadata extraction and lineage tracking.

Before you begin[â](#before-you-begin "Direct link to Before you begin")
--------------------------------------------------------------------------

### Register application in Microsoft Entra ID[â](#register-application-in-microsoft-entra-id "Direct link to Register application in Microsoft Entra ID")

Who can do this?You need your *[Cloud Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#cloud-application-administrator)* or *[Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#application-administrator)* to complete these stepsâ\> you may not have access yourself. This is required if the creation of registered applications isn't enabled for the entire organization.

To register a new application in Microsoft Entra ID:

1. Log in to the [Azure portal](https://portal.azure.com/).
2. Search for **Microsoft Entra ID** and select it.
3. Click **App registrations** from the left menu.
4. Click **\+ New registration**.
5. Enter a name for your client application and click **Register**.
6. From the Overview screen, copy and securely store:
    * **Application (client) ID**
    * **Directory (tenant) ID**
7. Click **Certificates \& secrets** from the left menu.
8. Under **Client secrets**, click **\+ New client secret**.
9. Enter a description, select an expiry time, and click **Add**.
10. Copy and securely store the client secret **Value**.

### Create security group in Microsoft Entra ID[â](#create-security-group-in-microsoft-entra-id "Direct link to Create security group in Microsoft Entra ID")

Who can do this?You need your *[Cloud Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#cloud-application-administrator)* or *[Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#application-administrator)* to complete these steps \- you may not have access yourself.

To create a security group for your application:

1. Log in to the [Azure portal](https://portal.azure.com/).
2. Search for **Microsoft Entra ID** and select it.
3. Click **Groups** under the Manage section.
4. Click **New group**.
5. Set the Group type to **Security**.
6. Enter a Group name and optional description.
7. Click **No members selected**.
8. Add the appropriate member:
    * **For Delegated User authentication**: search for the user and select it.
    * **For Service Principal authentication**: search for the application registration created earlier and select it.
9. Click **Select** and then **Create**.

By the end of these steps, you have registered an application with Microsoft Entra ID and created a Security Group with the appropriate member.

Configure authentication options[â](#configure-authentication-options "Direct link to Configure authentication options")
--------------------------------------------------------------------------------------------------------------------------

Atlan supports two authentication methods for fetching metadata from Microsoft Power BI:

### Service principal authentication (recommended)[â](#service-principal-authentication-recommended "Direct link to Service principal authentication (recommended)")

When using Service Principal authentication, you must decide how the connector shall access metadata to catalog assets and build lineage. There are two supported options:

#### Admin API only[â](#admin-api-only "Direct link to Admin API only")

This option grants permissions that let the service principal to access only admin\-level Power BI APIs. In this mode, Atlan extracts metadata exclusively using administrative endpoints. This option is recommended for stricter access control environments.

Who can do this?You need your *Fabric Administrator* ([formerly known as Power BI Administrator](https://powerbi.microsoft.com/en-us/blog/power-bi-administrator-role-will-be-renamed-to-fabric-administrator/)) to complete these tasks \- you may not have access yourself.

To configure admin API access:

1. Log in to the [Power BI admin portal](https://app.powerbi.com/admin-portal).
2. Click **Tenant settings** under Admin portal.
3. Under **Admin API settings**:
    * Expand **Enable service principals to use read\-only Power BI admin APIs** and set to **Enabled**
        + Add your security group under **Specific security groups**
        + Click **Apply**
    * Expand **Enhance admin APIs responses with detailed metadata** and set to **Enabled**
        + Add your security group
        + Click **Apply**
    * Expand **Enhance admin APIs responses with DAX and mashup expressions** and set to **Enabled**
        + Add your security group
        + Click **Apply**

#### Admin and non\-admin APIs[â](#admin-and-non-admin-apis "Direct link to Admin and non-admin APIs")

This option grants permissions that let the service principal to access both admin and non\-admin Power BI APIs. This enables Atlan to extract richer metadata and build detailed lineage across Power BI assets.

##### Assign security group to Power BI workspaces in PowerBI service portal[â](#assign-security-group-to-power-bi-workspaces-in-powerbi-service-portal "Direct link to Assign security group to Power BI workspaces in PowerBI service portal")

Who can do this?You need to be at least a member of the Microsoft Power BI workspace to which you want to add the security group to complete these steps \- you may not have access yourself. Make sure that you add the security group from the homepage and not the admin portal.

To assign a Microsoft Power BI workspace role to the security group:

1. Open the [Microsoft Power BI homepage](https://app.powerbi.com/home).
2. Open **Workspaces** and select the workspace you want to access from Atlan.
3. Click **Access**.
4. In the panel:
    * Enter the name of your security group where it says **Enter email addresses**
    * Choose one of the following roles:
        + **Viewer**: For workspaces without parameters
        + **Contributor**: For workspaces with semantic models containing parameters or to generate lineage for measures
        + **Member**: To generate lineage for dataflows
    * Click **Add**.

##### Configure admin and non\-admin API access in PowerBI Service Portal[â](#configure-admin-and-non-admin-api-access-in-powerbi-service-portal "Direct link to Configure admin and non-admin API access in PowerBI Service Portal")

Who can do this?You need your *Fabric Administrator* ([formerly known as Power BI Administrator](https://powerbi.microsoft.com/en-us/blog/power-bi-administrator-role-will-be-renamed-to-fabric-administrator/)) to complete these tasks \- you may not have access yourself.

To enable both admin and non\-admin API access:

1. Log in to the [Power BI admin portal](https://app.powerbi.com/admin-portal).
2. Click **Tenant settings** under Admin portal.
3. Under **Developer settings**:
    * Expand **Service principals can use Fabric APIs** and set to **Enabled**
        + Add your security group under **Specific security groups**
        + Click **Apply**
4. Under **Admin API settings**:
    * Expand **Enable service principals to use read\-only Power BI admin APIs** and set to **Enabled**
        + Add your security group
        + Click **Apply**
    * Expand **Enhance admin APIs responses with detailed metadata** and set to **Enabled**
        + Add your security group
        + Click **Apply**
    * Expand **Enhance admin APIs responses with DAX and mashup expressions** and set to **Enabled**
        + Add your security group
        + Click **Apply**

After making these changes, you typically need to wait 15\-30 minutes for the settings to take effect across Microsoft's services.

### Delegated user authentication[â](#delegated-user-authentication "Direct link to Delegated user authentication")

infoAtlan doesn't recommend using delegated user authentication as it's also not recommended by Microsoft.

#### Fabric administrator role assignment[â](#fabric-administrator-role-assignment "Direct link to Fabric administrator role assignment")

Who can do this?You need your Microsoft 365 administrator to complete these steps \- you may not have access yourself.

To assign the delegated user to the *Fabric Administrator* role:

1. Open the [Microsoft 365 admin portal](https://portal.office.com/adminportal/home#/homepage).
2. Click **Users** and then **Active users** from the left menu.
3. Select the delegated user.
4. Under **Roles**, click **Manage roles**.
5. Expand **Show all by category**.
6. Under **Collaboration**, select **Fabric Administrator**.
7. Click **Save changes**.

#### API permissions[â](#api-permissions "Direct link to API permissions")

Who can do this?You need your *[Cloud Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#cloud-application-administrator)* or *[Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#application-administrator)* to complete these steps, you may not have access yourself.

dangerThe following permissions are only required for delegated user authentication. If using service principal authentication, you don't need to configure any delegated permissions for a service principalâit's [recommended](https://learn.microsoft.com/en-us/power-bi/developer/embedded/embed-service-principal) that you avoid adding these permissions. These are never used and can cause errors that may be hard to troubleshoot.

To add permissions for the [registered application](#register-application-in-microsoft-entra-id):

1. In your app registration, click **API permissions** under the Manage section.
2. Click **Add a permission**.
3. Search for and select **Power BI Service**.
4. Click **Delegated permissions** and select:
    * `Capacity.Read.All`
    * `Dataflow.Read.All`
    * `Dataset.Read.All`
    * `Report.Read.All`
    * `Tenant.Read.All`
    * `Workspace.Read.All`
5. Click **Grant Admin consent** (If you only see the *Add permissions* button, you aren't an administrator).

#### Admin API settings configuration[â](#admin-api-settings-configuration "Direct link to Admin API settings configuration")

Who can do this?You need your *Fabric Administrator* ([formerly known as Power BI Administrator](https://powerbi.microsoft.com/en-us/blog/power-bi-administrator-role-will-be-renamed-to-fabric-administrator/)) to complete these tasks, you may not have access yourself.

To enable the Microsoft Power BI admin API:

1. Log in to the [Power BI admin portal](https://app.powerbi.com/admin-portal).
2. Click **Tenant settings** under Admin portal.
3. Under **Admin API settings**:
    * Expand **Enhance admin APIs responses with detailed metadata** and set to **Enabled**
        + Add your security group
        + Click **Apply**
    * Expand **Enhance admin APIs responses with DAX and mashup expressions** and set to **Enabled**
        + Add your security group
        + Click **Apply**.
**Tags:*** [data](/tags/data)
* [authentication](/tags/authentication)

[PreviousMicrosoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi)[NextCrawl Microsoft Power BI](/apps/connectors/business-intelligence/microsoft-power-bi/how-tos/crawl-microsoft-power-bi)

Copyright Â© 2025 Atlan Pte. Ltd.

