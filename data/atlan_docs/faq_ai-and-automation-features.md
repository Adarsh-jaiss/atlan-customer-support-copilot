# Source URL
https://docs.atlan.com/faq/ai-and-automation-features

================================================================================

<!--
canonical: https://docs.atlan.com/faq/ai-and-automation-features
link-alternate: https://docs.atlan.com/faq/ai-and-automation-features
meta-description: Guide to Atlan's AI capabilities and automation features for enhanced data governance and productivity.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Guide to Atlan's AI capabilities and automation features for enhanced data governance and productivity.
meta-og-locale: en
meta-og-title: AI and Automation Features | Atlan Documentation
meta-og-url: https://docs.atlan.com/faq/ai-and-automation-features
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: AI and Automation Features | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

AI and Automation Features
==========================

Guide to Atlan's AI capabilities and automation features for enhanced data governance and productivity.

### Do you provide any machine learning or AI assistance?[â](#do-you-provide-any-machine-learning-or-ai-assistance "Direct link to Do you provide any machine learning or AI assistance?")

Atlan makes intelligent recommendations to support your documentation initiatives.

For example:

* [Suggestions to populate context and metadata](/product/integrations/automation/always-on/references/suggestions-from-similar-assets)
* [Automating asset tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply)
* [Use Atlan AI for documentation and other use cases](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai)

### Where can third\-party developers contribute?[â](#where-can-third-party-developers-contribute "Direct link to Where can third-party developers contribute?")

The [Atlan marketplace](https://marketplace.atlan.com/) is a foundational part of our connector and package ecosystem. We provide out\-of\-the\-box connectors to popular data sources and tools. We also have packages that can power [active metadata use cases](https://atlan.com/active-metadata/).

Our vision is to open this up to the developer community, who can help build more packages to achieve complex value streams. Our intention is to support a package manager (similar to npm or pip) for building, managing, monitoring, and orchestrating container\-native workflows on Kubernetes, powered by [Argo](https://argoproj.github.io/).

### Why can't I see the Atlan logo in my data tool?[â](#why-cant-i-see-the-atlan-logo-in-my-data-tool "Direct link to Why can't I see the Atlan logo in my data tool?")

Refer to the [Troubleshooting the Atlan browser extension](/product/integrations/automation/browser-extension/troubleshooting/troubleshooting-atlan-browser-extension) document.

### Is the PII tagging of data or metadata automated?[â](#is-the-pii-tagging-of-data-or-metadata-automated "Direct link to Is the PII tagging of data or metadata automated?")

Atlan propagates [tags](/product/integrations/automation/always-on/references/tag-propagation) based on hierarchy and lineage, which means tags can be propagated to connected assets. For example, if you tag a table as PII and that table has downstream columns, Atlan will tag those downstream columns as PII as well â only if propagation is enabled.

Atlan does not auto\-detect PII data. Atlan will only propagate the PII tag to downstream assets if you have enabled tag propagation manually or [automated the task using playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks).

### Can I integrate Atlan with any web application?[â](#can-i-integrate-atlan-with-any-web-application "Direct link to Can I integrate Atlan with any web application?")

Atlan provides [API\-backed SDKs](https://developer.atlan.com/getting-started/) for integration. You can use these to:

* Extract and manipulate any metadata curated in Atlan,
* Ingest or enrich any metadata into Atlan,
* And ultimately power [active metadata use cases](https://atlan.com/active-metadata/).

We're always happy to learn more about what folks are hoping to accomplish, so feel free to [reach out](/support/submit-request) if you want to discuss specific ideas or possibilities in more detail.

**Tags:*** [data](/tags/data)
* [integration](/tags/integration)
* [api](/tags/api)
* [faq\-automation](/tags/faq-automation)

[PreviousAdministration and Configuration](/faq/administration-and-configuration)[NextData Connections and Integration](/faq/data-connections-and-integration)

Copyright Â© 2025 Atlan Pte. Ltd.

