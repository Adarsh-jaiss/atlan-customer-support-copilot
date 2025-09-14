# Source URL
https://docs.atlan.com/platform/concepts/authentication-and-authorization

================================================================================

<!--
canonical: https://docs.atlan.com/platform/concepts/authentication-and-authorization
link-alternate: https://docs.atlan.com/platform/concepts/authentication-and-authorization
meta-description: Learn about authentication and authorization.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about authentication and authorization.
meta-og-locale: en
meta-og-title: Authentication and authorization | Atlan Documentation
meta-og-url: https://docs.atlan.com/platform/concepts/authentication-and-authorization
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Authentication and authorization | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Authentication and authorization
================================

Atlan supports the following authentication methods:

Basic authentication[â](#basic-authentication "Direct link to Basic authentication")
--------------------------------------------------------------------------------------

Atlan initially comes with basic or username\-password authentication. Admins can [invite new users](/product/capabilities/governance/users-and-groups/how-tos/invite-new-users) to log into Atlan. When a new user opens the invitation link, they will be able to set up their user profile, including username and password.

However, Atlan does not recommend using basic authentication. Instead, admins should configure and enforce [SSO authentication](/product/integrations/identity-management/sso).

SSO authentication[â](#sso-authentication "Direct link to SSO authentication")
--------------------------------------------------------------------------------

### SSO using SAML 2\.0[â](#sso-using-saml-20 "Direct link to SSO using SAML 2.0")

Atlan supports single sign\-on (SSO), allowing admins to configure SSO authentication.

Atlan currently supports the following SSO providers:

* [Azure AD](/product/integrations/identity-management/sso/how-tos/enable-azure-ad-for-sso)
* [Google](/product/integrations/identity-management/sso/how-tos/enable-google-for-sso)
* [JumpCloud](/product/integrations/identity-management/sso/how-tos/enable-jumpcloud-for-sso)
* [Okta](/product/integrations/identity-management/sso/how-tos/enable-okta-for-sso)
* [OneLogin](/product/integrations/identity-management/sso/how-tos/enable-onelogin-for-sso)
* [Custom IdP](/product/integrations/identity-management/sso/how-tos/enable-saml-2-0-for-sso)

### SSO using SCIM[â](#sso-using-scim "Direct link to SSO using SCIM")

[System for Cross\-domain Identity ManagementÂ (SCIM) provisioning](/product/integrations/identity-management/scim/how-tos/configure-scim-provisioning) works in combination with SSO. Atlan currently supports SCIM provisioning for the following SSO providers:

* [Azure AD](/product/integrations/identity-management/scim/how-tos/enable-azure-ad-for-scim-provisioning)
* [Okta](/product/integrations/identity-management/scim/how-tos/enable-okta-for-scim-provisioning)

Authorization[â](#authorization "Direct link to Authorization")
-----------------------------------------------------------------

### Role\-based access control (RBAC)[â](#role-based-access-control-rbac "Direct link to Role-based access control (RBAC)")

Atlan implements role\-based access control (RBAC) to ensure that users have the minimum level of access required to perform their tasks. Access rights are assigned based on roles, and users are granted permissions according to their responsibilities. A system owner or an authorized party must approve any additional permissions.

Atlan adheres to the principle of least privilege, ensuring that users are only granted the level of access necessary to perform their job functions.

### User access review (UAR)[â](#user-access-review-uar "Direct link to User access review (UAR)")

Atlan recommends that admins performÂ access reviews of users, admins, and service accounts on a quarterly basis to ensure that appropriate access levels are maintained. Access reviews should also be documented.

Identity and access management[â](#identity-and-access-management "Direct link to Identity and access management")
--------------------------------------------------------------------------------------------------------------------

For centralized management of groups and users, Atlan uses granular [access policies](#).

Admins can define policies to control both which actions a user can take and against which assets. These can be as broad as entire databases down to individual columns. Organizations can even build policies based on asset classification. This opens up the ability to restrict access to sensitive data like Personally Identifiable Information (PII) \- an essential feature in the GDPR era.

Atlan [denies access by default](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data), and [explicit denials override any grants](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#explicit-restrictions-denies-take-priority). You can even deny admin users access to assets, if you want.

### Roles[â](#roles "Direct link to Roles")

You must assign every user in Atlan a [user role](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles). These control basic levels of access.

### Groups[â](#groups "Direct link to Groups")

You can also add users to [groups](/product/capabilities/governance/users-and-groups/concepts/what-are-groups). Groups provide a more maintainable mechanism for applying access controls.

### Policies[â](#policies "Direct link to Policies")

You can define [access policies](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#access-policies) for both users and groups.

Through these policies you can restrict which users can take which actions on which assets.

For example, you can set up [tags](/product/capabilities/governance/tags/concepts/what-are-tags) such as PII and apply this to data assets like tables. You can also configure the tag to propagate downstream to any columns or tables created from them.

You can then define [access controls based on these tags](/product/capabilities/governance/access-control/concepts/what-are-purposes#granular-data-protection) to restrict access to tagged assets. If Atlan propagates tags for you to derived assets, the access control is automatically applied to those derived assets as well.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousAtlan's open API](/get-started/references/atlan-s-open-api)[NextData and metadata persistence](/platform/concepts/data-and-metadata-persistence)

Copyright Â© 2025 Atlan Pte. Ltd.

