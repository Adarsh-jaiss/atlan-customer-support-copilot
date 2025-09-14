# Source URL
https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview
link-alternate: https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview
meta-description: Learn what the Atlan MCP server is, what it enables, and how to connect using Remote or Local setup.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn what the Atlan MCP server is, what it enables, and how to connect using Remote or Local setup.
meta-og-locale: en
meta-og-title: Atlan MCP Overview | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/atlan-ai/how-tos/atlan-mcp-overview
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Atlan MCP Overview | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Atlan MCP
=========

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) is an open standard that enables AI agents to access contextual metadata from external systems. It provides a consistent way for large language models and automation frameworks to retrieve the context they need to generate accurate and reliable results.

Atlan MCP is based on this standard and provides a reference implementation through the **Atlan MCP server**. The server acts as a secure bridge between Atlanâs metadata platform and AI tools such as Claude, Cursor, Windsurf, and Microsoft Copilot Studio. With Atlan MCP, you can search and discover assets, explore lineage, update metadata, create glossaries, and more, all using real\-time context from Atlan.

Atlan MCP tools[â](#atlan-mcp-tools "Direct link to Atlan MCP tools")
-----------------------------------------------------------------------

The Atlan MCP server provides a set of tools that enable AI agents to work directly with Atlan metadata. These tools supply real\-time context to AI environments, making it easier to search, explore, and update metadata without leaving your workflow.

* **Search assets**: Find assets in Atlan using flexible filters such as name, type, tags, and domains. This helps AI agents surface the most relevant assets for a given task.
* **Query by DSL**: Retrieve specific assets using Atlan's DSL query language. This enables precise lookups that go beyond basic search filters.
* **Explore lineage**: Trace upstream or downstream lineage for a given asset. This provides visibility into data dependencies and impact across your environment.
* **Update assets**: Modify metadata attributes, including descriptions, certification status, and README content. This enables AI agents to keep metadata current as part of automated workflows.
* **Glossary**: Create glossaries, categories, and terms. This supports standardized business definitions and improves consistency across teams and tools.

Deployment options[â](#deployment-options "Direct link to Deployment options")
--------------------------------------------------------------------------------

You can connect to Atlan MCP in two ways:

* **[Remote MCP](/product/capabilities/atlan-ai/how-tos/remote-mcp-overview)**: A hosted, per\-tenant MCP server managed by Atlan. Supports both OAuth and API Key authentication. Currently available in [private preview](/get-started/references/product-release-stages#private-preview).
* **[Local MCP](/product/capabilities/atlan-ai/how-tos/implement-the-atlan-mcp-server)**: A locally hosted server using Docker or uv. Provides flexibility for development or testing.
**Tags:*** [Atlan MCP](/tags/atlan-mcp)
* [AI](/tags/ai)
* [metadata](/tags/metadata)
* [integrations](/tags/integrations)

[PreviousAtlan AI](/product/capabilities/atlan-ai)[NextRemote MCP](/product/capabilities/atlan-ai/how-tos/remote-mcp-overview)

Copyright Â© 2025 Atlan Pte. Ltd.

