# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks
meta-description: For all details, see [Databricks documentation](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/private-link-simplified?source=recommendations#create-the-workspace-and-private-endpoints-in-the-azure-portal-ui).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: For all details, see [Databricks documentation](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/private-link-simplified?source=recommendations#create-the-workspace-and-private-endpoints-in-the-azure-portal-ui).
meta-og-locale: en
meta-og-title: Set up an Azure private network link to Databricks | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up an Azure private network link to Databricks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up an Azure private network link to Databricks
==================================================

[Azure Private Link](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview) creates a secure, private connection between services running in Azure. This document describes the steps to set this up between Databricks and Atlan.

Who can do this?You will need Databricks support, and probably your Databricks administrator involved \- you may not have access or the tools to run these tasks.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

* Your Databricks instance must be Azure\-managed and created from the Azure marketplace.

For all details, see [Databricks documentation](https://learn.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/private-link-simplified?source=recommendations#create-the-workspace-and-private-endpoints-in-the-azure-portal-ui).

Notify Atlan support[â](#notify-atlan-support "Direct link to Notify Atlan support")
--------------------------------------------------------------------------------------

[Provide Atlan support](/support/submit-request) with the following information:

* Resource ID of your Azure\-managed Databricks instance \- the resource ID will be in this format: `/subscriptions/<subscriptionID>/resourceGroups/azure-databricks/providers/Microsoft.Databricks/workspaces/<databricks-workspace>`.

There are additional steps that Atlan will need to complete. Once the Atlan team has confirmed that the configuration is ready, please continue with the remaining steps.

Approve the endpoint connection request[â](#approve-the-endpoint-connection-request "Direct link to Approve the endpoint connection request")
-----------------------------------------------------------------------------------------------------------------------------------------------

To approve the endpoint connection request from Atlan:

1. Open your Azure\-managed Databricks workspace.
2. In the left menu, click **Networking** and then click the **Private endpoint connections** tab.
3. From the list of endpoints, search for the endpoint connection request from Atlan. In the *Connection state* column for the Atlan endpoint connection, click the **Approve** button to approve the request .

Once the endpoint connection from Atlan has been approved, the status of the private endpoint in Atlan will change to `Approved`.

When you use this endpoint in the configuration for [crawling Databricks](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks), Atlan will connect to Databricks over Azure Private Link.

**Tags:*** [data](/tags/data)
* [configuration](/tags/configuration)

[PreviousSet up an AWS private network link to Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-aws-private-network-link-to-databricks)[NextHow to extract lineage and usage from Databricks](/apps/connectors/data-warehouses/databricks/how-tos/extract-lineage-and-usage-from-databricks)

Copyright Â© 2025 Atlan Pte. Ltd.

