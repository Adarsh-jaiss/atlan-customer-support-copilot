# Source URL
https://docs.atlan.com/faq/security-and-compliance

================================================================================

<!--
canonical: https://docs.atlan.com/faq/security-and-compliance
link-alternate: https://docs.atlan.com/faq/security-and-compliance
meta-description: Complete guide to Atlan's security features, compliance certifications, and data protection capabilities.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Complete guide to Atlan's security features, compliance certifications, and data protection capabilities.
meta-og-locale: en
meta-og-title: Security and Compliance | Atlan Documentation
meta-og-url: https://docs.atlan.com/faq/security-and-compliance
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Security and Compliance | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Security and Compliance
=======================

Complete guide to Atlan's security features, compliance certifications, and data protection capabilities.

### Do you support HIPAA?[â](#do-you-support-hipaa "Direct link to Do you support HIPAA?")

Yes, Atlan is HIPAA compliant. Visit [Atlan's security portal](https://security.atlan.com) to view the attestation letter from an external auditor.

### Do you support SOC 2?[â](#do-you-support-soc-2 "Direct link to Do you support SOC 2?")

Yes, Atlan maintains SOC 2 Type II compliance certification. Visit [Atlan's security portal](https://security.atlan.com) to access compliance documentation and reports.

### How does Atlan protect the data at rest?[â](#how-does-atlan-protect-the-data-at-rest "Direct link to How does Atlan protect the data at rest?")

Atlan implements comprehensive data protection measures. For detailed information, see [Encryption and key management](/platform/concepts/encryption-and-key-management).

### How's security enforced in Atlan?[â](#hows-security-enforced-in-atlan "Direct link to How's security enforced in Atlan?")

Atlan uses Kubernetes in an Atlan\-managed VPC (virtual private cloud). The data in Atlan is secured in the following ways:

* [Infrastructure security](/platform/references/infrastructure-security): Restrict network access to the control planes as well as nodes.
* [Access policies](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data): Administrators can restrict user access to certain assets.
* [Bring your own credentials (BYOC)](/product/capabilities/insights/how-tos/provide-credentials-to-query-data): Users can provide their own data store credentials to query data.

### What data is Atlan actually bringing in?[â](#what-data-is-atlan-actually-bringing-in "Direct link to What data is Atlan actually bringing in?")

Atlan enables you to search and discover metadata, not the data itself.

As a data catalog of all your data assets, Atlan enables you to:

* Extract metadata from source systems via pushdown queries or API requests.
* Process data with the [sample data](/product/capabilities/discovery/references/provide-credentials-to-view-sample-data) and [query](/product/capabilities/insights/how-tos/query-data) features, both of which can be turned off.
* Push down queries when sample data or query functionality is used, so, the results are neither cached nor stored in Atlan.
* Integrate with your [supported data sources](/product/connections/references/supported-sources) via a service account with read\-only permissions to the data source and complete control over these permissions.

### What Atlan IP address can I add to my organization's firewall?[â](#what-atlan-ip-address-can-i-add-to-my-organizations-firewall "Direct link to What Atlan IP address can I add to my organization's firewall?")

If your organization's firewall only allows access from whitelisted IP locations, you can [contact Atlan support](/support/submit-request) to provide you with your Atlan IP address.

**Tags:*** [data](/tags/data)
* [authentication](/tags/authentication)
* [faq\-security](/tags/faq-security)

[PreviousData Connections and Integration](/faq/data-connections-and-integration)[NextTags and Metadata Management](/faq/tags-and-metadata-management)

Copyright Â© 2025 Atlan Pte. Ltd.

