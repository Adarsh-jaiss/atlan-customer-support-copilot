# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/concepts/auto-re-attachment-rules

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/concepts/auto-re-attachment-rules
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/concepts/auto-re-attachment-rules
meta-description: Understand automatic re-attachment of data quality rules to assets that are dropped and recreated.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Understand automatic re-attachment of data quality rules to assets that are dropped and recreated.
meta-og-locale: en
meta-og-title: What's auto re-attachment | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/concepts/auto-re-attachment-rules
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What's auto re-attachment | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What's auto re\-attachment
==========================

In modern data environments, pipelines (such as dbt) often drop and recreate tables or views as part of routine execution. This behavior can unintentionally detach existing data quality rules. To address this, Atlan supports automatic re\-attachment of rules to assets, ensuring continuous enforcement of data quality.

Auto re\-attachment is a capability that enables Atlan to automatically re\-link existing data quality rules to assets that have been dropped and recreated with the same name and structure. This prevents rules from being silently lost when underlying assets are refreshed by ELT pipelines.

Important!Auto re\-attachment is currently available for Snowflake only.

Why it matters[â](#why-it-matters "Direct link to Why it matters")
--------------------------------------------------------------------

When an asset is dropped and recreated, any associated data quality rules may be lost unless they're manually reattached. This can lead to gaps in data quality enforcement and loss of historical context.

Without auto re\-attachment:

* Rules become inactive after the asset is recreated.
* Users must manually reattach rules.
* Historical rule execution and incident data become disconnected.

With auto re\-attachment:

* Rules are automatically linked to the new version of the asset.
* No manual intervention is required.
* Historical context is preserved.

How it works[â](#how-it-works "Direct link to How it works")
--------------------------------------------------------------

Once enabled, Atlan continuously monitors for asset recreations. When a table or view is recreated:

1. Atlan checks whether the asset matches a previously existing one based on name and structure.
2. If a match is found, any undeleted rules associated with the old asset are automatically reattached.
3. Rules are reapplied to the asset to resume enforcement.
4. Execution history and incident tracking continue seamlessly.

> **Tip:** Reattachment typically occurs within a few minutes of asset recreation, provided the asset name and structure are unchanged and the original rule still exists.

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

To get started, explore:

* [Enable auto re\-attachment rules in Snowflake](/product/capabilities/governance/data-quality/snowflake/how-tos/enable-auto-re-attachment): Learn how to configure permissions and trigger automatic rule reattachment.
**Tags:*** [data\-quality](/tags/data-quality)
* [auto\-re\-attachment](/tags/auto-re-attachment)

[PreviousConfigure alerts](/product/capabilities/governance/data-quality/how-tos/configure-alerts)

Copyright Â© 2025 Atlan Pte. Ltd.

