# Source URL
https://docs.atlan.com/product/capabilities/atlan-ai/concepts/security

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/atlan-ai/concepts/security
link-alternate: https://docs.atlan.com/product/capabilities/atlan-ai/concepts/security
meta-description: Atlan uses [Azure OpenAI Service](https://azure.microsoft.com/en-in/products/cognitive-services/openai-service) to power Atlan AI. Specifically, Atlan uses GPT-4o, a large, pretrained AI model.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan uses [Azure OpenAI Service](https://azure.microsoft.com/en-in/products/cognitive-services/openai-service) to power Atlan AI. Specifically, Atlan uses GPT-4o, a large, pretrained AI model.
meta-og-locale: en
meta-og-title: Atlan AI security | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/atlan-ai/concepts/security
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Atlan AI security | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Atlan AI security
=================

**Did you know?**Atlan uses [Azure OpenAI Service](https://azure.microsoft.com/en-in/products/cognitive-services/openai-service) to power Atlan AI. Atlan does **not** send any data to the AI service and only uses metadata for supported capabilities. For questions about data security, see below.

Learn more about how [Atlan AI](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai) processes and stores your data:

#### What services does Atlan AI use?[â](#what-services-does-atlan-ai-use "Direct link to What services does Atlan AI use?")

Atlan uses [Azure OpenAI Service](https://azure.microsoft.com/en-in/products/cognitive-services/openai-service) to power Atlan AI. Specifically, Atlan uses GPT\-4o, a large, pretrained AI model.

#### What data does Atlan send to the AI service?[â](#what-data-does-atlan-send-to-the-ai-service "Direct link to What data does Atlan send to the AI service?")

Atlan does **not** send any data to the AI service. Atlan only sends metadata for supported capabilities.

For example:

* [Atlan AI\-suggested asset descriptions](/product/capabilities/atlan-ai/how-tos/use-atlan-ai-for-documentation) \- table, view, column, database, or schema name.
* [Atlan AI\-suggested term descriptions](/product/capabilities/atlan-ai/how-tos/use-atlan-ai-for-documentation) \- glossary name and description, category name and description, and term name.
* [Atlan AI\-suggested lineage explanations](/product/capabilities/atlan-ai/how-tos/use-atlan-ai-for-lineage-analysis) \- SQL transformations in lineage with upstream and downstream asset names.
* [Atlan AI\-suggested aliases](/product/capabilities/discovery/how-tos/add-an-alias) \- table, view, column, database, or schema name.
* [Atlan AI\-suggested READMEs for terms](/product/capabilities/atlan-ai/how-tos/use-atlan-ai-for-documentation) \- glossary, category, and term name and description, and any existing READMEs within the same glossary.

#### Does Atlan use any metadata or data to train Atlan AI?[â](#does-atlan-use-any-metadata-or-data-to-train-atlan-ai "Direct link to Does Atlan use any metadata or data to train Atlan AI?")

No, Atlan does **not** use your metadata or data for fine\-tuning or training AI models.

#### Is the data processed through Atlan AI encrypted?[â](#is-the-data-processed-through-atlan-ai-encrypted "Direct link to Is the data processed through Atlan AI encrypted?")

Atlan makes HTTPS requests from your tenant, applicable to all [supported cloud platforms](/platform/references/atlan-architecture). The data is encrypted in transit using TLS 1\.2, AWS PrivateLink, or Azure virtual network peering. Atlan uses 256\-bit Advanced Encryption Standard (AES\-256\) algorithm to encrypt data at rest.

#### How does Atlan ensure security development of Atlan AI?[â](#how-does-atlan-ensure-security-development-of-atlan-ai "Direct link to How does Atlan ensure security development of Atlan AI?")

Atlan AI follows [OWASP Top 10](https://owasp.org/www-project-top-ten) that includes application security reviews and [Static Application Security Testing (SAST) tools](https://owasp.org/www-community/Source_Code_Analysis_Tools).

#### Does Atlan AI comply with any governance or legal frameworks?[â](#does-atlan-ai-comply-with-any-governance-or-legal-frameworks "Direct link to Does Atlan AI comply with any governance or legal frameworks?")

While Atlan is [HIPAA and GDPR compliant](https://security.atlan.com), Atlan AI is currently not. As Atlan AI matures, compliance continues to be our key focus.

#### Does Atlan AI process PII or other sensitive data?[â](#does-atlan-ai-process-pii-or-other-sensitive-data "Direct link to Does Atlan AI process PII or other sensitive data?")

Atlan AI only processes user input and metadata, which typically do not contain PII or sensitive data. However, it is the organization's responsibility to ensure that PII or other sensitive data is not available in the metadata or shared via user input.

#### What is the data retention policy for Atlan AI?[â](#what-is-the-data-retention-policy-for-atlan-ai "Direct link to What is the data retention policy for Atlan AI?")

Atlan does **not** store any data for Atlan AI.

This is enforced in the following two ways:

* Atlan has an [exemption from Microsoft](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy#how-can-customers-get-an-exemption-from-abuse-monitoring-and-human-review) to not store any data. Keeping data sensitivity in mind, Atlan has opted out of abuse monitoring and human review from Azure OpenAI Service.
* Only the metadata generated using Atlan AI is cataloged in Atlan.

#### How does Atlan manage security vulnerabilities for Atlan AI?[â](#how-does-atlan-manage-security-vulnerabilities-for-atlan-ai "Direct link to How does Atlan manage security vulnerabilities for Atlan AI?")

Vulnerabilities and incidents are managed in accordance with the [existing program and policy](/platform/concepts/high-availability-and-disaster-recovery-ha-dr).

#### How does Atlan manage the performance and scale for Atlan AI?[â](#how-does-atlan-manage-the-performance-and-scale-for-atlan-ai "Direct link to How does Atlan manage the performance and scale for Atlan AI?")

We utilize the scalability of our existing cloud infrastructure while relying on [Azure OpenAI](https://azure.microsoft.com/en-in/solutions/ai/).

**Tags:*** [data](/tags/data)
* [model](/tags/model)

[PreviousHow to use Atlan AI for lineage analysis](/product/capabilities/atlan-ai/how-tos/use-atlan-ai-for-lineage-analysis)[NextWhat's Atlan AI?](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai)

Copyright Â© 2025 Atlan Pte. Ltd.

