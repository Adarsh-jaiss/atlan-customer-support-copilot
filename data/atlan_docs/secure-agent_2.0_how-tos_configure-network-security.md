# Source URL
https://docs.atlan.com/secure-agent/2.0/how-tos/configure-network-security

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/2.0/how-tos/configure-network-security
link-alternate: https://docs.atlan.com/secure-agent/2.0/how-tos/configure-network-security
meta-description: Configure firewall rules and network policies to secure communication between Secure Agent 2.0 and Atlan services
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Configure firewall rules and network policies to secure communication between Secure Agent 2.0 and Atlan services
meta-og-locale: en
meta-og-title: Configure network security | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/2.0/how-tos/configure-network-security
meta-robots: noindex, nofollow
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Configure network security | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Configure network security
==========================

Configure network security for Secure Agent 2\.0 to permit only required encrypted traffic between the agent and Atlan services. This ensures secure communication while blocking unauthorized access.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* Administrative access to your firewall or network security groups

Configure firewall rules[â](#configure-firewall-rules "Direct link to Configure firewall rules")
--------------------------------------------------------------------------------------------------

1. **Access your firewall management interface**: Log into your firewall management system (AWS Security Groups, Azure NSGs, enterprise firewall console, or iptables for Linux).
2. **Permit outbound connections**: Configure your firewall to permit the following outbound connections from your Secure Agent deployment:

    ```
    firewall_rules:  
      outbound_allowed:  
        - destination: "*.atlan.com"  
          port: 443  
          protocol: HTTPS  
        - destination: "*.atlan.com"   
          port: 443  
          protocol: gRPC/TLS

    ```
3. **Block all inbound traffic**: Configure your firewall to deny all inbound connections to the Secure Agent:

    ```
    firewall_rules:  
      inbound_blocked:  
        - all_traffic: DENY  # No inbound connections to agent

    ```

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you are still facing issues and need help, contact [**\[email protected]**](/cdn-cgi/l/email-protection#1566707660677c616c55746179747b3b767a78) for assistance.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Security](/secure-agent/2.0/references/security): Security architecture, authentication, encryption, and compliance controls for Secure Agent 2\.0\.
* [Verify container images](/secure-agent/2.0/how-tos/verify-container-images): Confirm image authenticity and integrity with Cosign before deployment.
**Tags:*** [secure\-agent](/tags/secure-agent)
* [network](/tags/network)
* [security](/tags/security)
* [firewall](/tags/firewall)

[PreviousVerify container images](/secure-agent/2.0/how-tos/verify-container-images)[NextAuthentication](/secure-agent/2.0/concepts/authentication)

Copyright Â© 2025 Atlan Pte. Ltd.

