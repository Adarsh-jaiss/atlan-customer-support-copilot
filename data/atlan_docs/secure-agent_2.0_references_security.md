# Source URL
https://docs.atlan.com/secure-agent/2.0/references/security

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/2.0/references/security
link-alternate: https://docs.atlan.com/secure-agent/2.0/references/security
meta-description: Security overview and controls for Secure Agent 2.0
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Security overview and controls for Secure Agent 2.0
meta-og-locale: en
meta-og-title: Security | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/2.0/references/security
meta-robots: noindex, nofollow
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Security | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Security
========

Secure Agent follows a zero\-trust model where every component, connection, and operation is verified, minimized, and observable. This model starts with hardened containers, extends through verified supply chains, and encompasses all network communications and secret management. Critically, agents run entirely within your environment where you control the encryption keys and security policies. Each layer of security builds upon the previous, creating defense in depth.

Container security[â](#container-security "Direct link to Container security")
--------------------------------------------------------------------------------

The foundation of Secure Agent's security begins with how containers are built and run. Every container starts from a minimal base image and runs with strict limitations that prevent exploitation even if compromised.

### Hardened execution environment[â](#hardened-execution-environment "Direct link to Hardened execution environment")

All Secure Agent containers run with a strict security context to reduce attack surface:

```
securityContext:  
  runAsNonRoot: true          # Never run as root user  
  runAsUser: 1000             # Dedicated non-privileged user  
  allowPrivilegeEscalation: false  
  capabilities:  
    drop: ["ALL"]  
  readOnlyRootFilesystem: true  

```
This configuration creates the first security boundaryâeven if an attacker compromises the application code, they can't escalate privileges, modify the filesystem, or access system capabilities. The use of distroless base images further limits what's available to exploit, containing only the application and its runtime dependencies.

### Runtime protections[â](#runtime-protections "Direct link to Runtime protections")

Building on the hardened base, additional runtime controls keep containers within strict boundaries:

* No shell access in containers eliminates common attack vectors
* Minimal base images (distroless) reduce the attack surface to essential components only
* Resource limits prevent any single container from exhausting system resources
* Network policies restrict each container to communicate only with required endpoints

These protections work togetherâa compromised container can't spawn shells, consume unlimited resources, or communicate with unauthorized systems.

Supply chain integrity[â](#supply-chain-integrity "Direct link to Supply chain integrity")
--------------------------------------------------------------------------------------------

Before any container reaches your environment, it passes through multiple verification stages that verify both security and authenticity.

### Continuous vulnerability scanning[â](#continuous-vulnerability-scanning "Direct link to Continuous vulnerability scanning")

The security of container images is continuously validated through automated scanning:

All images are scanned with Snyk and Trivy on every change and at regular intervals. These scans detect:

* Known vulnerabilities (CVEs) and outdated dependencies that may be exploited
* Security misconfigurations that deviate from best practices
* Accidentally embedded secrets that may provide unauthorized access
* License compliance to meet legal requirements

Only images free of Critical and High severity vulnerabilities are released, establishing a baseline security standard before deployment.

### Image repository options[â](#image-repository-options "Direct link to Image repository options")

Container images required by the Secure Agent are hosted on Atlan using the [Harbor](https://goharbor.io/) open source registry. Harbor provides enterprise\-grade security features including vulnerability scanning, image signing verification, and access control.

If required, these images can be mirrored or pulled to your private container registry to meet organizational compliance and security requirements. This flexibility ensures the Secure Agent can operate within your existing container management and security infrastructure.

### Image signing and verification[â](#image-signing-and-verification "Direct link to Image signing and verification")

Beyond scanning, every container is cryptographically signed to verify authenticity:

All containers are signed with Cosign, creating entries in Sigstore's transparency log. This immutable record lets you verify that images haven't been tampered with since they left Atlan's build pipeline. The signing process uses keyless signing via GitHub Actions, ensuring traceability and security without requiring long\-lived private keys.

**Verification capabilities:**

* Image signature validation with Sigstore's transparency log
* GitHub workflow identity verification
* Certificate chain validation through GitHub's OpenID Connect (OIDC) provider

For complete verification steps and examples, see [Verify container images](/secure-agent/2.0/how-tos/verify-container-images) guide.

Network security[â](#network-security "Direct link to Network security")
--------------------------------------------------------------------------

With containers secured and verified, the next layer protects how they communicate. Secure Agent's network model ensures that even if other controls fail, unauthorized network access remains impossible.

### Outbound\-only communication[â](#outbound-only-communication "Direct link to Outbound-only communication")

Secure Agent operates with an outbound\-only communication modelâit initiates all connections and never accepts inbound connections. This fundamental design choice eliminates entire categories of attacks:

* No exposed ports that can be scanned or exploited
* No services that can be overwhelmed with requests
* No authentication challenges from external sources

All traffic to Atlan uses TLS 1\.2 or higher, which means the content remains protected even if network traffic is intercepted.

### Firewall and routing controls[â](#firewall-and-routing-controls "Direct link to Firewall and routing controls")

The outbound\-only model is enforced through firewall rules that explicitly block all inbound traffic while permitting only specific outbound connections:

Use firewall enforcement to permit authorized outbound traffic to Atlan endpoints and block all inbound traffic to the agent. For configuration steps, see [Configure network security](/secure-agent/2.0/how-tos/configure-network-security).

****Recommended network configuration (example)****

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
    - all_traffic: DENY  

```

### Advanced networking practices[â](#advanced-networking-practices "Direct link to Advanced networking practices")

For environments requiring additional security, these practices layer on top of the basic network controls:

* **Egress\-only endpoints** restrict outbound connections to an approved list of external endpoints
* **Private routing** through VPC/VNet peering or private endpoints keeps traffic within cloud provider networks
* **Proxy support** routes all outbound connections through enterprise proxies for inspection
* **Zero\-trust implementation** limits communications to required services using IP allowlists or service\-specific endpoints
* **Rate limiting** on egress prevents data exfiltration if other controls are bypassed
* **TLS certificate pinning** prevents man\-in\-the\-middle attacks even with compromised CAs
* **Segregated workloads** isolate agent instances handling different sensitivity levels

### Network monitoring[â](#network-monitoring "Direct link to Network monitoring")

Continuous monitoring provides visibility into all network activity:

* **Network logs** capture all traffic for anomaly detection and audit trails
* **Connection health checks** continuously verify that outbound connections to Atlan endpoints remain secure and functional

This monitoring feeds into the broader observability system, creating a complete picture of agent behavior.

Authentication and secret management[â](#authentication-and-secret-management "Direct link to Authentication and secret management")
--------------------------------------------------------------------------------------------------------------------------------------

With secure containers communicating over protected networks, the next critical layer manages how the agent authenticates and handles secrets. This system ensures credentials never leave your control.

### Authentication model[â](#authentication-model "Direct link to Authentication model")

Secure Agent uses OAuth 2\.0 client credentials flow for all authentication to Atlan services. Each deployed application receives its own unique Client ID and Client Secret, ensuring credential isolation between applications.

This per\-application credential model provides critical security benefits: if one application's credentials are compromised, the impact is limited to that specific application rather than affecting all Secure Agent deployments. This follows OAuth 2\.0 best practices as defined in [RFC 9700](https://datatracker.ietf.org/doc/html/rfc9700).

Key security features:

* **Isolated credentials**: Each application has unique credentials
* **Rotation support**: Client credentials can be rotated on\-demand
* **Secure storage**: Credentials retrieved from your secret manager, never hardcoded
* **Audit trail**: All authentication events logged for security monitoring

This authentication integrates with your existing identity infrastructure, enabling you to apply your standard rotation and governance policies.

### Secret management[â](#secret-management "Direct link to Secret management")

Rather than storing any credentials itself, Secure Agent integrates with enterprise secret managers through Dapr's secret store abstraction:

* **Just\-in\-time retrieval** means secrets are fetched only when needed for a specific operation
* **Memory\-only storage** ensures secrets exist only in application memory during use
* **No transmission to Atlan** keeps all credentials within your security perimeter
* **Comprehensive audit logging** tracks every secret access for compliance
* **Multi\-vault support** works with AWS Secrets Manager, Azure Key Vault, HashiCorp Vault, and others

This design ensures that even if an agent container is compromised, no credentials can be extracted from disk or logs. All secret access follows your existing security policies and appears in your vault's audit logs.

Logging, monitoring, and incident response[â](#logging-monitoring-and-incident-response "Direct link to Logging, monitoring, and incident response")
------------------------------------------------------------------------------------------------------------------------------------------------------

All these security controls generate observable events, creating a comprehensive audit trail and enabling rapid incident response.

### Observability[â](#observability "Direct link to Observability")

Every security\-relevant event is captured and made available through multiple channels:

* **Structured logs** capture all operations with correlation IDs for tracing
* **Metrics** expose performance and security indicators through Prometheus format
* **Health endpoints** via the FastAPI server provide real\-time status
* **Trace data** shows the complete flow of operations across components

These observability streams integrate with your existing monitoring infrastructure, whether that's Splunk, Datadog, CloudWatch, or other platforms.

### Incident response[â](#incident-response "Direct link to Incident response")

When security events occur, the comprehensive logging enables rapid response:

* **Emergency contact**: [\[email protected]](/cdn-cgi/l/email-protection#0576606670776c717c45647169646b2b666a68) provides 24/7 security team access
* **Log preservation** automatically retains all incident\-related logs
* **Coordinated notification** ensures customer teams are informed of any impacts
* **Automated responses** can revoke credentials or terminate connections based on detected anomalies

The incident response process leverages all the security controlsânetwork isolation limits blast radius, credential rotation stops unauthorized access, and comprehensive logs enable thorough investigation.

### Security alerts[â](#security-alerts "Direct link to Security alerts")

Customers receive automatic notifications for:

* **Critical/High vulnerabilities** discovered in deployed images
* **Security patches** available for immediate deployment
* **Unusual security events** detected in agent behavior
* **Compliance violations** or configuration drift

These proactive alerts enable rapid remediation before issues can be exploited.

Compliance and audit[â](#compliance-and-audit "Direct link to Compliance and audit")
--------------------------------------------------------------------------------------

All these security controls align with enterprise compliance requirements and provide the evidence needed for audits.

### Regulatory alignment[â](#regulatory-alignment "Direct link to Regulatory alignment")

The security architecture supports compliance with major frameworks:

* **SOC 2 Type II** validates security controls and their operating effectiveness
* **ISO 27001** aligns with information security management system requirements
* **GDPR** ensures appropriate data protection and privacy controls
* **HIPAA** provides necessary safeguards for healthcare data (when applicable)
* **PCI DSS** meets requirements for payment card data security (when applicable)

Each control maps to specific requirements within these frameworks, simplifying compliance documentation.

### Audit capabilities[â](#audit-capabilities "Direct link to Audit capabilities")

The layered security model generates comprehensive audit evidence:

* **Immutable audit logs** with cryptographic timestamps prove when events occurred
* **Log integration** with SIEM and centralized logging solutions enables enterprise\-wide visibility
* **Configurable retention** from 30â365 days aligns with your policy requirements
* **Chain of custody** tracks data from extraction through delivery to Atlan

This audit trail spans all security layersâfrom container startup through network connections, authentication events, secret access, and data operations.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Secret management](/secure-agent/2.0/concepts/secret-management): How credentials are protected and never leave your environment.
* [Customer environment security best practices](/secure-agent/2.0/best-practices/customer-environment-security): Security baselines and requirements for deploying Secure Agent 2\.0 in your environment.
* [Architecture](/secure-agent/2.0/references/architecture): Component interactions and how security controls map to the system design
**Tags:*** [secure\-agent](/tags/secure-agent)
* [security](/tags/security)

[PreviousArchitecture](/secure-agent/2.0/references/architecture)[NextVerify container images](/secure-agent/2.0/how-tos/verify-container-images)

Copyright Â© 2025 Atlan Pte. Ltd.

