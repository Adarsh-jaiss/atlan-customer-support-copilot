# Source URL
https://docs.atlan.com/product/capabilities/governance/users-and-groups/how-tos/manage-user-authentication

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/users-and-groups/how-tos/manage-user-authentication
link-alternate: https://docs.atlan.com/product/capabilities/governance/users-and-groups/how-tos/manage-user-authentication
meta-description: When users log into Atlan, a user session begins. You can change the default timeouts for user sessions for all users in your organization, helping you establish secure authentication protocols in Atlan. Once you have configured the settings, these would be applicable to users logging in via both basic and SSO authentication.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: When users log into Atlan, a user session begins. You can change the default timeouts for user sessions for all users in your organization, helping you establish secure authentication protocols in Atlan. Once you have configured the settings, these would be applicable to users logging in via both basic and SSO authentication.
meta-og-locale: en
meta-og-title: Manage user authentication | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/users-and-groups/how-tos/manage-user-authentication
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage user authentication | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage user authentication
==========================

Who can do this?You will need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to configure user authentication settings.

When users log into Atlan, a user session begins. You can change the default timeouts for user sessions for all users in your organization, helping you establish secure authentication protocols in Atlan. Once you have configured the settings, these would be applicable to users logging in via both basic and SSO authentication.

Atlan currently only supports configuring session settings up to a maximum value of 30 days. You must also enter a minimum value of 1 minute.

You can configure the following parameters:

* *Session idle timeout* \- the total length of time that a session is allowed to be idle before it expires.
* *Session max timeout* \- the maximum amount of time before a session expires.
* *Remember me session idle timeout* \- the total length of time that a Remember Me session is allowed to be idle before it expires. If you choose not to set this parameter, Atlan will use the standard SSO session idle value, 7 days.
* *Remember me session max timeout* \- the maximum amount of time before a session expires if a user has enabled the Remember Me session option. If you choose not to set this parameter, Atlan will use the standard SSO session max value, 4,745 days.

Note that tokens and browser sessions become invalid when a session expires.

Configure session settings[â](#configure-session-settings "Direct link to Configure session settings")
--------------------------------------------------------------------------------------------------------

[https://demo.arcade.software/q67pmbg9fiPLgT1ReFbt?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/q67pmbg9fiPLgT1ReFbt?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

To configure user authentication settings in Atlan:

1. From the left menu in *Atlan*, click **Admin**.
2. Under *Workspace*, click **Authentication**.
3. Under *Authentication*, to the right of *Session* *settings*, click the **Edit** button.
4. Atlan currently only supports setting a maximum value of up to 30 days. In the *Change session settings* dialog, you can configure the following:
    1. Set a numeric value for the following fields (You must enter a minimum value of 1 minute.):
        * *Session idle timeout*
        * *Session max timeout* \_ \- \_ you must enter a value same as or higher than *Session idle timeout*.
        * *Remember me session idle timeout*
        * *Remember me session max timeout* \_ \- \_ you must enter a value same as or higher than *Remember me session idle timeout*.
    2. Click the **Days** dropdown to specify the validity period. You can define parameters in the form of *Minutes*, *Hours*, or *Days*.
    3. Click **Save changes** to save your configuration.
**Tags:*** [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousAdd users to groups](/product/capabilities/governance/users-and-groups/how-tos/add-users-to-groups)[NextDelegate administration](/product/capabilities/governance/users-and-groups/how-tos/delegate-administration)

Copyright Â© 2025 Atlan Pte. Ltd.

