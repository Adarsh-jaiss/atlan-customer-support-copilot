# Source URL
https://docs.atlan.com/platform/references/infrastructure-security

================================================================================

<!--
canonical: https://docs.atlan.com/platform/references/infrastructure-security
link-alternate: https://docs.atlan.com/platform/references/infrastructure-security
meta-description: Learn about infrastructure security.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about infrastructure security.
meta-og-locale: en
meta-og-title: Infrastructure security | Atlan Documentation
meta-og-url: https://docs.atlan.com/platform/references/infrastructure-security
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Infrastructure security | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Infrastructure security
=======================

See [security.atlan.com](https://security.atlan.com) for the latest policies and standards, reports and certifications, architecture, diagrams and more.

Atlan is deployed using Kubernetes in an Atlan\-managed VPC (virtual private cloud).

Atlan also carries out:

* **Vulnerability management through frequent releases**Â \- Atlan makes weekly releases to minimize vulnerability at a product and operating system level.
* **Application Penetration Testing (APT)** \- Atlan uses a third\-party toolÂ to conduct industry standard APT. A penetration test is an authorized simulated cyber attack on a computer system, performed to evaluate the security of the system. The test is performed to identify both weaknesses (including the potential for unauthorized parties to gain access to the system's features and data) and strengths, enabling a full risk assessment to be completed.
* **Event logging and monitoring**Â \- Atlan has many tools to support monitoring and event logging:
    + Prometheus and Grafana for monitoring
    + Fluent Bit and Loki for event logging

Network access to the control plane[â](#network-access-to-the-control-plane "Direct link to Network access to the control plane")
-----------------------------------------------------------------------------------------------------------------------------------

We restrict access to the Kubernetes control plane by IP address to cluster administrators. We deny public internet access to the control plane.

Network access to nodes[â](#network-access-to-nodes "Direct link to Network access to nodes")
-----------------------------------------------------------------------------------------------

Nodes are configured to only accept connections (via network access control lists):

* from the control plane on the specified ports
* for services in Kubernetes of type `NodePort` and `LoadBalancer`

Each component of the Kubernetes cluster has security measures configured. These security measures are at the following levels:

* Cluster security
* Node security
* Pod security
* Container security
* Network security
* Code security
* Secret management
* Data encryption in transit
**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)
* [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousTenant offboarding](/platform/references/tenant-offboarding)[NextHow are resources isolated?](/platform/references/how-are-resources-isolated)

Copyright Â© 2025 Atlan Pte. Ltd.

