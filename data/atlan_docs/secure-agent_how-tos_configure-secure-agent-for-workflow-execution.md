# Source URL
https://docs.atlan.com/secure-agent/how-tos/configure-secure-agent-for-workflow-execution

================================================================================

<!--
canonical: https://docs.atlan.com/secure-agent/how-tos/configure-secure-agent-for-workflow-execution
link-alternate: https://docs.atlan.com/secure-agent/how-tos/configure-secure-agent-for-workflow-execution
meta-description: Learn about configure workflow execution.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about configure workflow execution.
meta-og-locale: en
meta-og-title: Configure workflow execution | Atlan Documentation
meta-og-url: https://docs.atlan.com/secure-agent/how-tos/configure-secure-agent-for-workflow-execution
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Configure workflow execution | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Configure workflow execution
============================

When using Secure Agent for extraction, source system credentials (secrets) required for workflow execution are stored in a Secret Manager. This guide provides steps to set up workflows with Secure Agent and specify the secret details it uses during workflow execution.

### Before you begin[â](#before-you-begin "Direct link to Before you begin")

Before configuring Secure Agent for workflow execution, ensure you have:

* A registered and active Secure Agent.
* Access to one of the supported secret stores: AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, environment variable\-based secret injection technique, or a custom secret store.

### Configure secrets retrieval for workflow execution[â](#configure-secrets-retrieval-for-workflow-execution "Direct link to Configure secrets retrieval for workflow execution")

Follow these steps to configure Secure Agent to retrieve secrets from a secret store required for the workflow execution. This is necessary for secure data access while running your workflows.

ðª **Did you know?**For each field, you can enter either the name of a secret stored in your secret manager or the actual value. Use secret names when using a secret store with Secure Agent, or enter values directly if no secret is required.

* AWS
* Azure
* GCP
* Environment variables
* Custom store

Secure Agent retrieves the required secrets from AWS Secrets Manager during workflow execution. Follow these steps to configure retrieval under the Secure Agent configuration section:

* **Secret path in Secret Manager:** Provide the Amazon Resource Name (ARN) or the path of the secret that contains the sensitive configuration details required for the connector. These details may include credentials such as username, password, or other sensitive information needed by the Secure Agent to securely access data during workflow execution.
* **AWS region:** Select the region where your AWS Secrets Manager is located.
* **AWS authentication method:** Select how you want the Secure Agent to authenticate when executing the workflow. Choose one:
    + **IAM (Recommended)**: Use this method if the secure agent was configured to use the AWS IAM permissions to access secrets.
    + **IAM Assume Role**: Use this method if the agent was configured to access secrets via cross\-account roles.
    + **AWS Assume Role ARN**: Provide the IAM Role ARN that grants the Secure Agent permission to retrieve secrets.
    + **Access Key \& Secret Key**: Use this method if the agent was configured to use the AWS Access Key ID and Secret Access Key via environment variables or Kubernetes secrets.
Secure Agent retrieves secrets from Azure Key Vault during workflow execution. Follow these steps to configure retrieval under the Secure Agent configuration section:

* **Secret path in Secret Manager:** Provide the URL of the Azure Key Vault secret that contains the sensitive configuration details required for the connector. These details may include credentials such as username, password, or other sensitive information needed by the Secure Agent to securely access data during workflow execution.
* **Azure authentication method:** Select how you want the Secure Agent to authenticate when accessing the Azure Key Vault secret. Choose one:
    + **Managed Identity (Recommended)**: Use this method if the agent was configured to use an Azure\-managed identity assigned to the agent environment for authentication.
    + **Service Principal Authentication**: Use this method if the agent was configured to authenticate via a Service Principal using Tenant ID, Client ID, and Client Secret.
* **Azure Key Vault Name:** Provide the name of your Azure Key Vault that stores your secrets.
Secure Agent retrieves secrets from GCP Secret Manager during workflow execution. The secret is uniquely identified by its name in GCP Secret Manager, without requiring additional attributes.

Secure Agent retrieves secrets from environment variables during workflow execution.

Secure Agent retrieves secrets from Custom Secret Store during workflow execution. Follow these steps to configure retrieval under the Secure Agent configuration section:

* **Agent Custom configuration:** Secure agent needs information for connecting to the custom secret store. Add the configuration details in JSON format to specify the connection settings and the secrets to retrieve during workflow execution. For example, the JSON configuration to initiate a sample custom store may look like below:

```
{  
  "store_url": "https://custom-secret-store.example.com",  
  "secret_name": "my-custom-secret"  
}  

```

---

### Next steps[â](#next-steps "Direct link to Next steps")

After configuring the Secure Agent, return to your connectorâs setup guide and continue the workflow setup.

**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)
* [workflow](/tags/workflow)
* [automation](/tags/automation)
* [orchestration](/tags/orchestration)

[PreviousInstall on AWS EKS](/secure-agent/how-tos/aws-eks/install-secure-agent-on-aws-eks)[NextDeployment architecture](/secure-agent/references/deployment-architecture)

Copyright Â© 2025 Atlan Pte. Ltd.

