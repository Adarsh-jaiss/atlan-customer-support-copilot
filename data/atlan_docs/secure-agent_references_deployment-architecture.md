# Source URL
https://docs.atlan.com/secure-agent/references/deployment-architecture

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/references/deployment-architecture
link-alternate: https://docs.atlan.com/secure-agent/references/deployment-architecture
meta-description: The Atlan Secure Agent is a Kubernetes-based application that runs within a customer's environment. It acts as a gateway between the single-tenant Atlan SaaS and external systems like Snowflake, Tableau, and other data sources. This document explains the Secure Agent's deployment architecture, key components, communication flows, and security considerations.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: The Atlan Secure Agent is a Kubernetes-based application that runs within a customer's environment. It acts as a gateway between the single-tenant Atlan SaaS and external systems like Snowflake, Tableau, and other data sources. This document explains the Secure Agent's deployment architecture, key components, communication flows, and security considerations.
meta-og-locale: en
meta-og-title: Deployment architecture | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/references/deployment-architecture
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Deployment architecture | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Deployment architecture
=======================

The Atlan Secure Agent is a Kubernetes\-based application that runs within a customer's environment. It acts as a gateway between the single\-tenant Atlan SaaS and external systems like Snowflake, Tableau, and other data sources. This document explains the Secure Agent's deployment architecture, key components, communication flows, and security considerations.

High\-level architecture[â](#high-level-architecture "Direct link to High-level architecture")
------------------------------------------------------------------------------------------------

This section describes how the Secure Agent is structured and deployed. It explains the core components that enable metadata extraction, job execution, and communication with Atlan.

**Figure 1:** Atlan Secure Agent deployment architecture.

Core components[â](#core-components "Direct link to Core components")
-----------------------------------------------------------------------

The Secure Agent runs as a Kubernetes\-based application within a customer's private cloud or on\-premises environment. It consists of several key components that work together to execute metadata extraction tasks.

### Argo Workflows[â](#argo-workflows "Direct link to Argo Workflows")

* An Argo Workflow server is deployed to coordinate all activities and launch Kubernetes workloads.
* The Secure Agent uses Argo Workflows to orchestrate and manage metadata extraction jobs.
* Each workflow represents a unit of work, such as extracting metadata from a source system.

### Agent orchestrator[â](#agent-orchestrator "Direct link to Agent orchestrator")

* A scheduled job that runs every five minutes to check for jobs that need to be executed.
* It connects to the Atlan tenant, retrieves job details, and initiates workflows accordingly.

### Auxiliary services[â](#auxiliary-services "Direct link to Auxiliary services")

Additional services that support agent operations:

* **Health monitoring service** sends periodic heartbeats to Atlan to confirm the agent is active.
* **Logging service** uploads execution logs to Atlan for monitoring and debugging.

### Metadata extraction workflows[â](#metadata-extraction-workflows "Direct link to Metadata extraction workflows")

* Connector\-specific jobs that extract metadata from source systems.
* Workflows run in isolated containers, ensuring security and reliability.

Data flow[â](#data-flow "Direct link to Data flow")
-----------------------------------------------------

The Secure Agent supports two modes of metadata transfer. Each mode determines how extracted metadata is delivered to Atlan.

### Bucket relay[â](#bucket-relay "Direct link to Bucket relay")

Metadata extraction in bucket relay mode stores metadata in enterprise\-managed cloud storage before Atlan retrieves it.

**Figure 2:** Data flow in bucket relay mode.

* The Secure Agent extracts metadata and writes it to a storage bucket in the customerâs cloud environment (such as AWS S3, Azure Blob Storage, or Google Cloud Storage). This is managed by providing the agent write access to cloud storage.
* Atlan retrieves metadata from the storage bucket and processes it further. This is managed by providing Atlan read access to list and read files in cloud storage.
* This mode ensures the extracted data remains within the customerâs infrastructure until Atlan explicitly fetches it. Customers can also use this data for auditing.

### Direct ingestion[â](#direct-ingestion "Direct link to Direct ingestion")

In direct ingestion mode, metadata is transferred directly from the Secure Agent to Atlan.

**Figure 3:** Data flow in direct ingestion mode.

* The Secure Agent uses pre\-signed URLs to upload metadata directly to Atlan. Some cloud storage providers that use pre\-signed URLs include:
* [AWS reference](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html)
* [Azure reference](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)
* [GCP reference](https://cloud.google.com/storage/docs/access-control/signed-urls)
* A pre\-signed URL grants temporary access to upload files without exposing long\-term credentials.
* Each URL has an expiration time, ensuring access is only available for a limited duration.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [**Secure Agent \- Security**](/secure-agent/references/security): Details on security mechanisms.
**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)
* [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousConfigure workflow execution](/secure-agent/how-tos/configure-secure-agent-for-workflow-execution)[NextSecurity](/secure-agent/references/security)

Copyright Â© 2025 Atlan Pte. Ltd.

