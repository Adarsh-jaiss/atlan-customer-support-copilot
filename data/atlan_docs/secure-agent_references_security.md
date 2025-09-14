# Source URL
https://docs.atlan.com/secure-agent/references/security

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/references/security
link-alternate: https://docs.atlan.com/secure-agent/references/security
meta-description: The Secure Agent is designed with multiple security controls to protect metadata, credentials, and communication between systems. This document outlines its security mechanisms across authentication, encryption, container security, network security, and logging and monitoring.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The Secure Agent is designed with multiple security controls to protect metadata, credentials, and communication between systems. This document outlines its security mechanisms across authentication, encryption, container security, network security, and logging and monitoring.
meta-og-locale: en
meta-og-title: Security | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/references/security
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Security | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Security
========

The Secure Agent is designed with multiple security controls to protect metadata, credentials, and communication between systems. This document outlines its security mechanisms across authentication, encryption, container security, network security, and logging and monitoring.

Authentication and authorization[â](#authentication-and-authorization "Direct link to Authentication and authorization")
--------------------------------------------------------------------------------------------------------------------------

The Secure Agent implements security measures for authentication, encryption, and access control. This section details authentication mechanisms, including API key management and secret handling.

### API key management[â](#api-key-management "Direct link to API key management")

The Secure Agent uses API keys for authentication when communicating with Atlan. These keys verify the agentâs identity and define its access scope.

* **Authentication:** API keys authenticate the Secure Agent, allowing it to interact securely with Atlan. Each key is associated with a specific tenant and grants access based on permissions.
* **Storage:** API keys are stored in enterprise\-managed vaults, such as AWS Secrets Manager, Azure Key Vault, or Kubernetes Secrets. The Secure Agent retrieves the key dynamically during operation, eliminating manual configuration.
* **Expiration:** API keys can have an expiration period, such as 90\-180 days, or be configured based on internal security policies.
* **Rotation:** When an API key nears expiration, a new key can be generated and stored in the secret vault. The Secure Agent automatically fetches the latest key from the vault.
* **Revocation:** If an API key is compromised, it can be revoked. Once revoked, the Secure Agent retrieves a newly assigned key from the vault without requiring manual intervention.

### Secret management[â](#secret-management "Direct link to Secret management")

The Secure Agent retrieves credentials securely without storing them locally.

* **Enterprise\-managed vaults:** The Secure Agent integrates with AWS Secrets Manager, Azure Key Vault, and other vaults to securely store credentials, keeping them within the organizationâs security perimeter.
* **Just\-in\-time access:** Credentials, such as database secrets, are retrieved dynamically from enterprise vaults when needed and are never stored locally.
* **No credential transmission:** Secrets are never transmitted to or stored on Atlan, ensuring complete isolation of sensitive information.

Data security and encryption[â](#data-security-and-encryption "Direct link to Data security and encryption")
--------------------------------------------------------------------------------------------------------------

The Secure Agent protects metadata using encryption and strict access controls.

* **Compliance with security standards:** The Secure Agent aligns with ISO 27001 and SOC 2 security standards, ensuring strong encryption, data protection, and access control measures.
* **Data in transit:** All communication between the Secure Agent and Atlan is encrypted using TLS 1\.2 over HTTPS. For network\-level protections, see [Network security](#network-security).
* **Data at rest:** Metadata stored in customer\-managed storage or Atlanâs tenant bucket is encrypted using AES\-256\.
* **Data minimization:** Only essential metadata is extracted and transmitted. Customers can configure data filters to exclude specific metadata fields from processing.
* **Retention control:** Atlan doesn't require metadata post\-ingestion, and customers can delete metadata from their storage buckets based on internal security policies.

Container security[â](#container-security "Direct link to Container security")
--------------------------------------------------------------------------------

The Secure Agent implements security measures to protect container images, ensuring their integrity and mitigating security risks.

* **Container image hosting:** Secure Agent container images are hosted on public repositories, such as Docker Hub and Amazon ECR. Organizations can deploy the Secure Agent from a private container registry to meet their compliance and security requirements.
* **Vulnerability scanning:** Trivy scans container images for known vulnerabilities, outdated dependencies, misconfigurations, and exposed secrets. Scans are conducted weekly and whenever new changes are checked in.
* **Image signing and verification:** Cosign signs container images to ensure authenticity. Image verification includes:
    + Validating the image signature against Sigstore's transparency log.
    + Verifying the signerâs identity through GitHub workflows.
    + Confirming the certificate issued by GitHubâs OpenID Connect (OIDC) provider.
* **License compliance:** Trivy scans for software license compliance to ensure proper licensing for all components within the container images.

Network security[â](#network-security "Direct link to Network security")
--------------------------------------------------------------------------

The Secure Agent operates within a controlled network environment to facilitate secure metadata extraction and communication with Atlan.

### SSL certificates[â](#ssl-certificates "Direct link to SSL certificates")

The Secure Agent encrypts communications with Atlan, source systems, proxy servers, and secret managers.

* **Encryption in transit:** All data communication between the Secure Agent and Atlan is encrypted using TLS 1\.2 over HTTPS.
* **Certificate management:**
    + If trusted or well\-known certificate authorities are used, no additional configuration is needed. The Default Trusted Certificate Authorities store contains certificates from the most common and trusted CAs, which the Secure Agent uses to secure connections.
    + If internal or private certificate authorities are used, the Secure Agent trusts these custom certificate authorities through the infrastructureâs default certificate store.

### Whitelisting[â](#whitelisting "Direct link to Whitelisting")

Configuring network access ensures only trusted communication between the Secure Agent and Atlan.

* **Domain whitelisting:** The Secure Agent requires outbound access to Atlan through the domain `tenant.atlan.com`. Domain\-based whitelisting simplifies network configurations while maintaining security.
* **DNS resolution:** The Secure Agent relies on standard DNS resolution to reach Atlan domains. Network configurations must allow name resolution for `tenant.atlan.com`.
* **IP\-based whitelisting:** If domain\-based whitelisting isnât feasible and specific IP ranges must be allowed, refer to the [list of required IP ranges](https://www.cloudflare.com/en-gb/ips/) to be whitelisted. If you need further assistance, contact [Atlan Support](/support/submit-request).

Logging and monitoring[â](#logging-and-monitoring "Direct link to Logging and monitoring")
--------------------------------------------------------------------------------------------

The Secure Agent captures logs for workflow execution, system orchestration, and Kubernetes operations while also providing monitoring capabilities.

### Types of logs[â](#types-of-logs "Direct link to Types of logs")

* **Workflow logs:** Capture job execution details, including start and completion status, connections to source systems and secret managers, metadata extraction results, and authentication status. These logs are sent to Atlan and accessible from the workflow status page.
* **Orchestration logs:** Track the Secure Agentâs scheduled operations, including connection attempts to Atlan, retrieval of workflow requests, and workflow submission to the Argo engine. Logs also include error messages and performance metrics.
* **Argo logs:** Provide visibility into workflow execution, including job scheduling, resource allocation, state transitions, and error handling.
* **Kubernetes logs:** Capture system\-level events, such as pod lifecycle changes, container startup and shutdown, resource allocation, network connectivity, and health checks.

### Monitoring[â](#monitoring "Direct link to Monitoring")

* **Health checks:** Secure Agent components run periodic health checks to verify connectivity, resource availability, and system integrity.
* **Resource utilization:** CPU, memory, and storage usage are monitored to track system load and detect potential bottlenecks.

Logs can be viewed in Atlan or integrated with external monitoring systems.

**Tags:*** [data](/tags/data)
* [api](/tags/api)
* [authentication](/tags/authentication)

[PreviousDeployment architecture](/secure-agent/references/deployment-architecture)

Copyright Â© 2025 Atlan Pte. Ltd.

