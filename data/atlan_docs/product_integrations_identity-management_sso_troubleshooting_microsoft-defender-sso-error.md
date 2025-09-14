# Source URL
https://docs.atlan.com/product/integrations/identity-management/sso/troubleshooting/microsoft-defender-sso-error

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/identity-management/sso/troubleshooting/microsoft-defender-sso-error
link-alternate: https://docs.atlan.com/product/integrations/identity-management/sso/troubleshooting/microsoft-defender-sso-error
meta-description: Learn about unable to log into atlan via sso due to an "internal error" from microsoft defender.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about unable to log into atlan via sso due to an "internal error" from microsoft defender.
meta-og-locale: en
meta-og-title: Microsoft Defender SSO error | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/identity-management/sso/troubleshooting/microsoft-defender-sso-error
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Microsoft Defender SSO error | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Microsoft Defender SSO error
============================

If you are getting an error message from Microsoft Defender that the Atlan login page cannot be loaded, it's possible that the wrapping URL prefix \- for example, \_[https://nam02\.safelinks.protection.outlook.com/](https://nam02.safelinks.protection.outlook.com/) \- \_ is causing the error.

To get around this, you should [add a Safe Links policy](https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-safe-links-policies?view=o365-worldwide) to whitelist Atlan's invitation emails and URLs. Otherwise, the Safe Links function will need to be turned off.

**Tags:*** [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousGoogle Dashboard login error](/product/integrations/identity-management/sso/faq/google-dashboard-login-error)[NextCan Atlan integrate with multiple Azure AD tenants within a single instance?](/product/integrations/identity-management/sso/faq/multiple-azure-ad-tenants)

Copyright Â© 2025 Atlan Pte. Ltd.

