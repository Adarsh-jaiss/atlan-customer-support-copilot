# Source URL
https://docs.atlan.com/secure-agent

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent
link-alternate: https://docs.atlan.com/secure-agent
meta-description: The Atlan Secure Agent is a lightweight, Kubernetes-based application that enables secure metadata extraction. It connects internal systems with Atlan SaaS while keeping sensitive data protected and doesnât require inbound connectivity. Running within an organizationâs controlled environment, the Secure Agent ensures compliance with security policies and automates metadata processing.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The Atlan Secure Agent is a lightweight, Kubernetes-based application that enables secure metadata extraction. It connects internal systems with Atlan SaaS while keeping sensitive data protected and doesnât require inbound connectivity. Running within an organizationâs controlled environment, the Secure Agent ensures compliance with security policies and automates metadata processing.
meta-og-locale: en
meta-og-title: Secure Agent | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Secure Agent | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Secure Agent
============

The Atlan Secure Agent is a lightweight, Kubernetes\-based application that enables secure metadata extraction. It connects internal systems with Atlan SaaS while keeping sensitive data protected and doesnât require inbound connectivity. Running within an organizationâs controlled environment, the Secure Agent ensures compliance with security policies and automates metadata processing.

**Figure 1:** The Secure Agent runs in the customer environment and acts as a gateway.

Key capabilities[â](#key-capabilities "Direct link to Key capabilities")
--------------------------------------------------------------------------

The Secure Agent is designed for secure, scalable, and efficient metadata extraction.

### Security\-first architecture[â](#security-first-architecture "Direct link to Security-first architecture")

* Runs entirely within the organization's infrastructure, preventing secrets from leaving its boundary.
* Uses outbound, encrypted communication to interact with Atlan SaaS.
* Supports logging and monitoring and integrates with external monitoring systems for auditing and compliance.

### Scalable metadata extraction[â](#scalable-metadata-extraction "Direct link to Scalable metadata extraction")

* A single deployment of the Agent can connect to multiple source systems.
* Supports multiple concurrent metadata extraction jobs.
* Uses Kubernetes\-based workloads for efficient resource management.

### Flexible deployment[â](#flexible-deployment "Direct link to Flexible deployment")

* Deploys on cloud\-based Kubernetes environments (such as Amazon EKS, Azure AKS, and Google GKE) or on\-premises clusters.
* Scales dynamically based on workload demands.

### Automated operations[â](#automated-operations "Direct link to Automated operations")

* Continuously monitors system health and sends heartbeats to Atlan.
* Captures and uploads execution logs for troubleshooting and auditing.
* Provides performance insights through metrics and alerts.

How it works[â](#how-it-works "Direct link to How it works")
--------------------------------------------------------------

The Secure Agent follows a job\-based execution model where metadata extraction tasks are scheduled and executed within the organization's environment. The workflow typically involves:

1. Atlan triggers a metadata extraction job.
2. The Secure Agent retrieves job details and extracts metadata using source\-specific connectors.
3. Extracted metadata is shared with Atlan either through cloud storage or direct ingestion.
4. Atlan workflows process the extracted metadata and publish the assets.
5. Logs and execution status are sent to Atlan for monitoring and auditing.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

**[Deployment architecture](/secure-agent/references/deployment-architecture)**: Learn more about how the Secure Agent integrates with your environment and supports secure metadata extraction.

**Tags:*** [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[NextInstall on Virtual Machine (K3s)](/secure-agent/how-tos/k3s/install-secure-agent-on-virtual-machine-k3s)

Copyright Â© 2025 Atlan Pte. Ltd.

