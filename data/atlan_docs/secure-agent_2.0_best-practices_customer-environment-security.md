# Source URL
https://docs.atlan.com/secure-agent/2.0/best-practices/customer-environment-security

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/2.0/best-practices/customer-environment-security
link-alternate: https://docs.atlan.com/secure-agent/2.0/best-practices/customer-environment-security
meta-description: Customer environment security best practices for deploying and operating Secure Agent 2.0
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Customer environment security best practices for deploying and operating Secure Agent 2.0
meta-og-locale: en
meta-og-title: Customer environment security | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/2.0/best-practices/customer-environment-security
meta-robots: noindex, nofollow
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Customer environment security | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Customer environment security
=============================

This document outlines customer environment security best practices and minimum security baselines for deploying and operating Secure Agent 2\.0 in your environment.

Security assessment process[â](#security-assessment-process "Direct link to Security assessment process")
-----------------------------------------------------------------------------------------------------------

Before deployment, customers must complete a security assessment that includes:

* **Network architecture review**: Validate network security controls and configurations
* **Credential management validation**: Verify secret management practices and policies

This assessment ensures your environment meets the minimum security baselines required for secure deployment.

Infrastructure security[â](#infrastructure-security "Direct link to Infrastructure security")
-----------------------------------------------------------------------------------------------

Your infrastructure must meet these minimum security baselines:

* **Container runtime security**: Kubernetes 1\.24\+ or Docker 20\.10\+ with security features enabled
* **Network segmentation**: Agent isolated from production systems
* **Endpoint protection**: Anti\-malware and endpoint detection solutions deployed
* **Vulnerability management**: Regular patching and vulnerability scanning implemented

Network security controls[â](#network-security-controls "Direct link to Network security controls")
-----------------------------------------------------------------------------------------------------

Secure Agent 2\.0 uses outbound\-only communication and never accepts inbound connections. Your network must implement these controls:

* **Outbound\-only communication**: Agent never accepts inbound connections
* **TLS 1\.2 minimum**: All external communication uses TLS 1\.2 or higher
* **Firewall requirements**: Customer firewall rules for agent communication

### Required network configuration[â](#required-network-configuration "Direct link to Required network configuration")

```
firewall_rules:  
  outbound_allowed:  
    - destination: "*.atlan.com"  
      port: 443  
      protocol: HTTPS  
    - destination: "*.atlan.com"   
      port: 443  
      protocol: gRPC/TLS  
        
  inbound_blocked:  
    - all_traffic: DENY  # No inbound connections to agent  

```
For detailed configuration steps, see [Configure network security](/secure-agent/2.0/how-tos/configure-network-security).

Identity and access management[â](#identity-and-access-management "Direct link to Identity and access management")
--------------------------------------------------------------------------------------------------------------------

Apply the principle of least privilege with these requirements:

* **Principle of least privilege**: Agent credentials limited to required data sources only
* **Regular credential rotation**: Scheduled rotation of agent access credentials
* **Audit logging**: Complete audit trail for agent\-related activities

Ongoing security requirements[â](#ongoing-security-requirements "Direct link to Ongoing security requirements")
-----------------------------------------------------------------------------------------------------------------

Maintain security with these ongoing requirements:

* **Vulnerability management**: Prompt application of security patches
* **Incident response coordination**: Participation in security incident response

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you need help, contact [**\[email protected]**](/cdn-cgi/l/email-protection#d2a1b7b1a7a0bba6ab92b3a6beb3bcfcb1bdbf) for assistance.

**Tags:*** [secure\-agent](/tags/secure-agent)
* [security](/tags/security)
* [deployment](/tags/deployment)

[PreviousDeployment and security](/secure-agent/2.0/faq/deployment-and-security-faq)

Copyright Â© 2025 Atlan Pte. Ltd.

