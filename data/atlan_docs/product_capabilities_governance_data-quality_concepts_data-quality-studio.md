# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/concepts/data-quality-studio

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/concepts/data-quality-studio
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/concepts/data-quality-studio
meta-description: Understand Atlan's Data Quality Studio and how it enables business and data teams to collaborate on defining, monitoring, and enforcing data quality expectations
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Understand Atlan's Data Quality Studio and how it enables business and data teams to collaborate on defining, monitoring, and enforcing data quality expectations
meta-og-locale: en
meta-og-title: What's Data Quality Studio | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/concepts/data-quality-studio
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What's Data Quality Studio | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What's Data Quality Studio
==========================

â**Available via the Data Quality Studio package**

Data Quality Studio is Atlan's native data quality module that enables business and data teams to collaborate on defining, monitoring, and enforcing data quality expectations directly within the Atlan platform.

Why it exists[â](#why-it-exists "Direct link to Why it exists")
-----------------------------------------------------------------

Data teams often rely on disconnected scripts or tools to define and run quality checks. These are typically siloed, difficult to maintain, and fail to deliver visibility to business users. This leads to:

* **Blind spots in data pipelines**
* **Delayed issue detection**
* **Lack of trust across the organization**

Data Quality Studio bridges these gaps by embedding data quality into your warehouse and surfacing trust signals across Atlan, where your teams already work.

What Data Quality Studio enables[â](#what-data-quality-studio-enables "Direct link to What Data Quality Studio enables")
--------------------------------------------------------------------------------------------------------------------------

With Data Quality Studio, you can:

* **Define expectations** about your data using familiar SQL logic
* **Execute checks** where your data lives, directly in the warehouse
* **Surface trust** across Atlan through warnings, trust scores, and notifications

This helps build a proactive, transparent culture of data trust across your organization.

Who is it for[â](#who-is-it-for "Direct link to Who is it for")
-----------------------------------------------------------------

Data Quality Studio is designed for:

* **Analytics engineers** who own data transformation pipelines
* **Data stewards** responsible for data quality and governance
* **Business users** who need visibility into data they can trust

Each persona benefits from embedded checks, alerts, and transparency across the data lifecycle.

Core mental model[â](#core-mental-model "Direct link to Core mental model")
-----------------------------------------------------------------------------

To understand how Data Quality Studio works, here are some key terms:

* **Rule**: A SQL\-based expectation about your data
* **Rule set**: A group of related rules, typically applied to a table or dataset
* **Check run**: Execution of rules in your warehouse
* **Status**: The result of a checkâpassed, failed, or warning
* **Trust signals**: Visual indicators and alerts shown in Atlan

These concepts form the foundation of how data quality is evaluated and shared.

How it works[â](#how-it-works "Direct link to How it works")
--------------------------------------------------------------

Data Quality Studio uses a push\-down execution model. Rules are defined through Atlanâs interface and executed natively in your data warehouse without needing additional infrastructure.

The flow looks like this:

1. **Define rule sets** using SQL logic that reflects your data expectations
2. **Push execution to your warehouse** triggers native compute in your environment:
    * Snowflake: Executes rules via Data Metric Functions (DMFs)
    * Databricks: Leverages Delta Live Tables for rule execution
3. **Capture results** as check runs with pass, fail, or warning statuses
4. **Surface signals** through trust scores, visual indicators, and metadata in Atlan
5. **Notify users** using alerts and integrations when checks fail or thresholds are breached

This system ensures quality checks are versioned, repeatable, and integrated into your data stack.

Key capabilities[â](#key-capabilities "Direct link to Key capabilities")
--------------------------------------------------------------------------

These are the core capabilities that power the system:

* SQL\-based rule authoring
* Versioned execution and history tracking
* Multi\-rule validation per dataset
* Alerting and integrations with downstream tools
* Trust scoring and visual feedback in Atlan
* Query\-based diagnostics for failed rules
* Centralized rule management

These features combine to help teams operationalize trust across every dataset.

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

To get started, explore:

* [Snowflake data quality setup guide](/product/capabilities/governance/data-quality/snowflake): Learn how to define, execute, and manage rule sets natively in Snowflake
* [Databricks data quality setup guide](/product/capabilities/governance/data-quality/databricks): Set up and run rule sets using Delta Live Tables in Databricks

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Rules and dimensions reference](/product/capabilities/governance/data-quality/snowflake/references/data-quality-rules): Explore all supported rule types, dimensions, and examples
* [Advanced configuration](/product/capabilities/governance/data-quality/how-tos/configure-alerts): Set up notifications for failed rules, thresholds, and more
**Tags:*** [data\-quality](/tags/data-quality)
* [governance](/tags/governance)
* [monitoring](/tags/monitoring)
* [rules](/tags/rules)

[NextData quality permissions](/product/capabilities/governance/data-quality/snowflake/references/data-quality-permissions)

Copyright Â© 2025 Atlan Pte. Ltd.

