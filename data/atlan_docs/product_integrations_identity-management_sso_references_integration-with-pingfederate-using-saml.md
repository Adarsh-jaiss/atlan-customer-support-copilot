# Source URL
https://docs.atlan.com/product/integrations/identity-management/sso/references/integration-with-pingfederate-using-saml

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/identity-management/sso/references/integration-with-pingfederate-using-saml
link-alternate: https://docs.atlan.com/product/integrations/identity-management/sso/references/integration-with-pingfederate-using-saml
meta-description: To use both IdP- and SP-initiated SSO, add both the URLs mentioned above.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To use both IdP- and SP-initiated SSO, add both the URLs mentioned above.
meta-og-locale: en
meta-og-title: SSO integration with PingFederate using SAML | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/identity-management/sso/references/integration-with-pingfederate-using-saml
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: SSO integration with PingFederate using SAML | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

SSO integration with PingFederate using SAML
============================================

If you have PingFederate as your IdP and are trying to integrate the SAML\-based IdP using the metadata supplied from the page, you can use the following SAML assertion URL:

* For identity provider initiated (IdP\-initiated) SSO: `https://{{instance}}/auth/realms/default/broker/{{alias}}/endpoint/clients/atlan-saml`
* For service provider initiated (SP\-initiated) SSO: `https://{{instance}}/auth/realms/default/broker/{{alias}}/endpoint`

To use both IdP\- and SP\-initiated SSO, add both the URLs mentioned above.

If you encounter an `Invalid signature` error, you must ensure that the certificate in the XML metadata file is of the SHA\-256 or SHA\-512 type.

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)

[PreviousSet default user roles for SSO](/product/integrations/identity-management/sso/how-tos/set-default-user-roles-for-sso)[NextTroubleshooting SSO](/product/integrations/identity-management/sso/troubleshooting/troubleshooting-sso)

Copyright Â© 2025 Atlan Pte. Ltd.

