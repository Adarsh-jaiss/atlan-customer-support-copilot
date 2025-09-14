# Source URL
https://docs.atlan.com/product/connections/how-tos/provide-ssl-certificates

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/how-tos/provide-ssl-certificates
link-alternate: https://docs.atlan.com/product/connections/how-tos/provide-ssl-certificates
meta-description: SSL (Secure Sockets Layer) encryption helps establish a secure connection between your data source and Atlan. Atlan currently only supports SSL certificates for [crawling Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: SSL (Secure Sockets Layer) encryption helps establish a secure connection between your data source and Atlan. Atlan currently only supports SSL certificates for [crawling Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau).
meta-og-locale: en
meta-og-title: provide SSL certificates | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/how-tos/provide-ssl-certificates
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: provide SSL certificates | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

provide SSL certificates
========================

SSL (Secure Sockets Layer) encryption helps establish a secure connection between your data source and Atlan. Atlan currently only supports SSL certificates for [crawling Tableau](/apps/connectors/business-intelligence/tableau/how-tos/crawl-tableau).

The following types of SSL certificates are supported:

Self\-signed[â](#self-signed "Direct link to Self-signed")
------------------------------------------------------------

Paste the public `.crt` or `.cert` part of your TLS certificate in the Privacy Enhanced Mail (PEM) format. For example:

```
----BEGIN CERTIFICATE----  
MIIDazCCAlOgAwIBAgIJAOqRDRz0BxIAMA0GCSqGSIb3DQEBCwUAMIGZMQswCQYD  
...  
...  
...  
u1Q==  
----END CERTIFICATE----  

```

Internal CA[â](#internal-ca "Direct link to Internal CA")
-----------------------------------------------------------

An SSL certificate chain is a sequence of certificates consisting of three parties:

* A root certificate authority,
* One or more intermediate certificate authorities,
* And the server certificate.

Paste the root, intermediate, and server certificates in the following format:

```
----BEGIN CERTIFICATE----  
ABCDE......  
----END CERTIFICATE----  
----BEGIN CERTIFICATE----  
EFGHT......  
----END CERTIFICATE----  
----BEGIN CERTIFICATE----  
NAMNOP......  
----END CERTIFICATE----  
----BEGIN CERTIFICATE----  
KROPS......  
----END CERTIFICATE----  

```
* The top certificate is the root certificate
* Followed by the hops in the right sequence
* Ending with server certificate
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousHow to order workflows](/product/connections/how-tos/order-workflows)[NextWhat are preflight checks?](/product/connections/concepts/what-are-preflight-checks)

Copyright Â© 2025 Atlan Pte. Ltd.

