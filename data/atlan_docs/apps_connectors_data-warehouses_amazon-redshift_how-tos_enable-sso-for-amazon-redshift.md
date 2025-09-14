# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift
meta-description: You will need to [create a client application in Okta](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_OIDC.htm) to use for [configuring the identity provider in AWS](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You will need to [create a client application in Okta](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_OIDC.htm) to use for [configuring the identity provider in AWS](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).
meta-og-locale: en
meta-og-title: Enable  SSO for Amazon Redshift | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Enable  SSO for Amazon Redshift | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Enable SSO for Amazon Redshift
==============================

Atlan supports SSO authentication for [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift) connections with Okta as the identity provider. Once you've configured SSO authentication for Amazon Redshift, your users can:

* [Query data with Okta SSO credentials](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data)
* [View sample data with Okta SSO credentials](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data)

**Did you know?**If you have already configured Okta and AWS, skip to [configure SSO authentication in Atlan](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift#configure-sso-authentication-in-atlan). Otherwise, complete all the steps below.

Create a client application in Okta[â](#create-a-client-application-in-okta "Direct link to Create a client application in Okta")
-----------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your Okta administrator to complete these steps \- you may not have access yourself. You will also need inputs and approval from your AWS administrator.

You will need to [create a client application in Okta](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_OIDC.htm) to use for [configuring the identity provider in AWS](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).

To create a client application, within Okta:

1. Log in to your Okta *Admin Console*.
2. From the left menu of the *Admin Console*, click **Applications**.
3. Under *Applications*, click the **Browse App Catalog** button.
4. On the *Browse App Integration Catalog* page, search for and select **Amazon Web Services Redshift**.
5. From the *Amazon Web Services Redshift* page, click the **Add integration** button to create an integration.
6. For *Add* *Amazon Web Services Redshift*, enter the following details:
    1. For *Application label*, enter a meaningful name for your new app integration \- for example, `Atlan_SSO`.
    2. Click **Done** to proceed.
7. On your new app page, click the **Assignments** tab and then click the **Assign** button:
    * Click **Assign to People** to select individual users to assign to the application.
    * Click **Assign to Groups** to select groups to assign to the application.
8. On your new app page, click the **Sign On** tab and then navigate to the *SAML Signing Certificates* section:
    1. Under *Actions*, click **Actions** to expand the menu, and then from the dropdown, click **View IdP metadata**.
    2. This will open an XML file in a new tab. Save or download this file to use for [configuring the identity provider in AWS](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).
    3. For *User Authentication*, click the **Edit** button:
        1. From the *Authentication policy* dropdown, click **Okta Dashboard**.
        2. Click **Save** to save your changes.

You will need the IdP metadata XML file to configure Okta as the identity provider in AWS.

Configure identity provider in AWS[â](#configure-identity-provider-in-aws "Direct link to Configure identity provider in AWS")
--------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your AWS administrator to complete these steps \- you may not have access yourself. You will also need inputs and approval from your Okta administrator.

You will need to establish a trust relationship between Okta as the identity provider and AWS. You will also need to create a role that Okta can use to access Amazon Redshift and assign required permissions to that role.

### Create an identity provider[â](#create-an-identity-provider "Direct link to Create an identity provider")

To [create an identity provider](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html), within AWS:

1. Sign in to the AWS Management Console and open the AWS Identity and Access Management (IAM) console.
2. From the left menu of your AWS Identity and Access Management (IAM) console, click **Identity providers** and then click the **Add provider** button.
3. In the *Add an Identity provider* dialog, enter the following details:

    1. For *Provider type*, select **SAML**.
        2. For *Provider name*, enter a name for the identity provider \- for example, `Okta_AtlanSSO`.
        3. Under *Metadata document*, click **Choose file** and upload the [IdP metadata XML file you downloaded from Okta](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).
        4. At the bottom of the dialog, click **Add provider** to add Okta as the identity provider in AWS.

Once you have configured Okta as the identity provider in AWS, you will need to create a role for Okta to access Amazon Redshift.

### Create a role[â](#create-a-role "Direct link to Create a role")

To [create a role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html#roles-creatingrole-service-console), within AWS:

1. Sign in to the AWS Management Console and open the AWS Identity and Access Management (IAM) console.
2. From the left menu of your AWS Identity and Access Management (IAM) console, click **Roles**, and then from the top right, click the **Create role** button.
3. On the *Create role* page, enter the following details:
    1. For *Select trusted entity*, under *Trusted entity type*, click **SAML 2\.0 federation**. Under *SAML 2\.0 federation*, enter the following details:Â
        1. For *SAML 2\.0\-based provider*, select [the identity provider you created in AWS](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift) \- for example, `Okta_AtlanSSO`.
        2. Click **Allow programmatic access only**.
        3. For the *Attribute* dropdown, select `SAML:aud`.
        4. For *Value*, enter `https://signin.aws.amazon.com/saml`.
        5. Click **Next** to continue.
    2. For *Add permissions*, click **Next** to proceed to the next step.
    3. For *Name, review, and create*, under *Role details*, enter the following details:
        1. For *Role name*, enter a name for the role \- for example, `Okta_AtlanSSO_role`.
        2. (Optional) For *Description*, enter a description for the new role.
    4. Click **Create role** to finish role setup. This will create a new role for Okta to access Amazon Redshift.

Once you have created a role for Okta to access Amazon Redshift, you will need to assign permissions to that role.

### Create a policy[â](#create-a-policy "Direct link to Create a policy")

You will need to create an access policy and assign the [following required permissions](https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html) to the newly created role:

* `CreateClusterUser`
* `JoinGroup`
* `GetClusterCredentials`

To create a policy, within AWS:

1. Sign in to the AWS Management Console and open the AWS Identity and Access Management (IAM) console.
2. From the left menu of your AWS Identity and Access Management (IAM) console, click **Roles**Â and then search for and select the [role you created](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift) in the previous step \- for example, `Okta_AtlanSSO_role`.
3. On the newly created role page, to the right of *Permission policies*, click **Add permissions**, and then from the dropdown, click **Create inline policy**.
4. On the *Create policy* page, you will need to assign the following permissions for Redshift \- `GetClusterCredentials`, `JoinGroup`, and `CreateClusterUser`. Repeat the steps below to assign each permission:
    1. For *Specify permissions*, under *Select a service*, search for and select **Redshift**. Under *Redshift*, enter the following details:
        1. For *Allowed actions*, search for and select a permission \- for example, `GetClusterCredentials`.
        2. For *Resources*, click **All**.
        3. Click **Next** to proceed.
    2. For *Review and create*, under *Policy name*, enter a name for the newly created policy \- for example, `Okta_AtlanSSO_rolepolicy`.

### Retrieve identity provider and role ARN[â](#retrieve-identity-provider-and-role-arn "Direct link to Retrieve identity provider and role ARN")

Once you have configured Okta as the identity provider and created a role in AWS, you will need the identity provider ARN and role ARN for further configuration in Okta.

To retrieve the identity provider and role ARN, within AWS:

1. Sign in to the AWS Management Console and open the AWS Identity and Access Management (IAM) console.
2. From the left menu of your AWS Identity and Access Management (IAM) console:

    1. Click **Identity providers** and then select the [identity provider you created](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift):
            1. On the identity provider page, under *ARN*, click the clipboard icon to copy the identity provider ARN value and store it in a secure location.
        2. Click **Roles** and then select the [role you created](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift):
            1. On the role page, under *ARN*, click the clipboard icon to copy the role ARN value and store it in a secure location.

Configure the client application in Okta[â](#configure-the-client-application-in-okta "Direct link to Configure the client application in Okta")
--------------------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need your Okta administrator to complete these steps \- you may not have access yourself. You will also need inputs and approval from your AWS administrator.

You will need the identity provider ARN and role ARN from AWS for further configuration in Okta.

To further configure the client application in Okta:

1. Log in to your Okta *Admin Console*.
2. From the left menu of the *Admin Console*, click **Applications**.
3. Under *Applications*, select the client application you created in Okta.
4. On your new app page, click the **Sign On** tab.
5. On the *Sign On* page, next to *Settings*, click **Edit**.
6. Navigate to the *Advanced Sign\-on Settings* section and enter the following details:
    1. For *IdP ARN and Role ARN*, enter the identity provider ARN and role ARN as comma\-separated values \- for example, `arn:aws:iam::403973984390:role/oktaAtlan_SSO`, `arn:aws:iam::403976283490:saml-provider/oktaAtlan_SSO_role`.
    2. For *Allowed DB Groups (Redshift)*, enter the names of the Okta groups that should be provided access to Amazon Redshift.
    3. Click **Save** to confirm.
7. On your new app page, click the **General** tab and navigate to the *App Embed Link* section.
    1. Under *Embed Link*, copy the link \- for example, `https://**<example>.okta.com**/home/amazon_aws_redshift/**0oa78lx856GcTMDsa697/aln1dkqcfra0piaWa0g**` \- and store the IdP host name and app ID in a secure location to use for [configuring SSO authentication in Atlan](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift#configure-sso-authentication-in-atlan). For example:
        * IdP host name: `<example>.okta.com`
        * App ID: `0oa78lx856GcTMDsa697/aln1dkqcfra0piaWa0g`

Configure SSO authentication in Atlan[â](#configure-sso-authentication-in-atlan "Direct link to Configure SSO authentication in Atlan")
-----------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need to be a [connection admin](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#connection-admins) in Atlan to complete these steps. You will also need inputs and approval from your Okta and AWS administrators.

Once you have configured Okta and AWS, you can enable SSO authentication for your Amazon Redshift users to [query data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data) and [view sample data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data)Â in Atlan.

[https://demo.arcade.software/mnD2weyM0GZ9yN4trP6x?embed](https://demo.arcade.software/mnD2weyM0GZ9yN4trP6x?embed)

To configure Okta SSO on a Amazon Redshift connection, from Atlan:

1. From the left menu of any screen, click **Assets**.
2. From the *Assets* page, click the **Connector** filter, and from the dropdown, select **Redshift**.
3. From the pills below the search bar at the top of the screen, click **Connection**.
4. From the list of results, select an Amazon Redshift connection to enable SSO authentication.
5. From the sidebar on the right, next to *Connection settings*, click **Edit**.
6. In the *Connection settings* dialog:
    * Under *Allow query*, for *Authentication type*, click **Okta authentication** to enforce SSO credentials for [querying data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data):
        + For *SSO authentication*, enter the following details:
            1. For *IDP host*, enter the [IdP host name you copied from Okta](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).
            2. For *App ID*, enter the [app ID you copied from Okta](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).
            3. For *AWS Role ARN*, enter the [role ARN retrieved from AWS](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).
    * UnderÂ*Display sample data*, for *Source preview*, click **Okta authentication** to enforce SSO credentials for [viewing sample data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data):
        + If SSO authentication is enabled for querying data, the same connection details will be reused for viewing sample data.
        + If a different authentication method is enabled for querying data, enter the [IdP host name and app ID you copied from Okta](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift) and [role ARN retrieved from AWS](/apps/connectors/data-warehouses/amazon-redshift/how-tos/enable-sso-for-amazon-redshift).
7. (Optional) Toggle on **Enable data policies created at source to apply for querying in Atlan** to apply any data policies and user permissions at source to querying data and viewing sample data in Atlan. If toggled on, any existing [data policies](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) on the connection in Atlan will be deactivated and creation of new data policies will be disabled.
8. At the bottom right of the *Connection settings* dialog, click **Update**.

Your users will now be able to [run queries](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-query-data) and [view sample data](/product/integrations/identity-management/sso/how-tos/authenticate-sso-credentials-to-view-sample-data) using their Okta SSO credentials! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [integration](/tags/integration)
* [authentication](/tags/authentication)

[PreviousSet up Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-amazon-redshift)[NextSet up a private network link to Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-a-private-network-link-to-amazon-redshift)

Copyright Â© 2025 Atlan Pte. Ltd.

