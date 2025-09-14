# Source URL
https://docs.atlan.com/product/connections/how-tos/connect-data-sources-for-azure-hosted-atlan-instances

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/how-tos/connect-data-sources-for-azure-hosted-atlan-instances
link-alternate: https://docs.atlan.com/product/connections/how-tos/connect-data-sources-for-azure-hosted-atlan-instances
meta-description: This document provides recommended solutions for integrating Atlan instances hosted on Microsoft Azure with the following:.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: This document provides recommended solutions for integrating Atlan instances hosted on Microsoft Azure with the following:.
meta-og-locale: en
meta-og-title: Connect data sources for Azure-hosted Atlan instances | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/how-tos/connect-data-sources-for-azure-hosted-atlan-instances
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Connect data sources for Azure-hosted Atlan instances | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Connect data sources for Azure\-hosted Atlan instances
======================================================

This document provides recommended solutions for integrating Atlan instances hosted on Microsoft Azure with the following:

* Data sources hosted on Microsoft Azure
* Data sources hosted in data centers

Azure\-managed data sources[â](#azure-managed-data-sources "Direct link to Azure-managed data sources")
---------------------------------------------------------------------------------------------------------

To connect your Atlan instance hosted on Microsoft Azure with a Microsoft Azure\-managed data source, Atlan recommends the following method. For this purpose, we'll consider a Microsoft Azure\-managed Snowflake instance:

1. For data sources like Snowflake, you can use [Azure Private Link](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview).
2. Atlan will create a private endpoint in your Atlan instance to connect to your Snowflake instance using the the resource ID.
3. This will create a request in your Atlan instance. Accept the request to proceed.
4. Once the request has been accepted, Atlan will be able to access the data source using a private endpoint over the Azure backbone network, bypassing the internet.
5. Atlan will also create a private DNS and add an `A` record for the private endpoint previously created in the Azure\-managed Atlan instance and share the details with you.
6. You can use this DNS record to connect to the Azure\-hosted Snowflake data source.
7. Each data source will require a separate Azure private endpoint.

On\-premises data sources[â](#on-premises-data-sources "Direct link to On-premises data sources")
---------------------------------------------------------------------------------------------------

To connect your Atlan instance hosted on Microsoft Azure with an on\-premises data source, Atlan recommends the following method. For this purpose, we'll consider an on\-premises MySQL server hosted in a data center:

1. For an on\-premises MySQL database, you can consider a combination of [Azure Private Link](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview), [Azure Load Balancer](https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview), and [Azure Virtual Machines](https://learn.microsoft.com/en-us/azure/virtual-machines/overview).
2. For this method, the data source must be accessible from your Microsoft Azure subscription.
3. You will need to create a virtual machine in your Azure\-managed Atlan instance to port forward the request to the corresponding data source.
4. Add a network load balancer to the virtual machine and create a Private Link service to the load balancer.
5. Atlan will create a private endpoint in your Atlan instance to connect to the Private Link service of the load balancer.
6. Atlan will also create a private DNS and add an `A` record for the private endpoint previously created in the Azure\-managed Atlan instance and share the details with you.
7. You can use this DNS record to connect to the on\-premises data source using the load balancer.
8. Only one private endpoint will be required to connect to all the on\-premises data sources through port forwarding.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)

[PreviousMonitor connectivity](/product/connections/how-tos/monitor-connectivity)[NextMine queries through S3](/product/connections/how-tos/mine-queries-through-s3)

Copyright Â© 2025 Atlan Pte. Ltd.

