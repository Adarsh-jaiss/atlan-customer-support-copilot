# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/references/data-quality-permissions

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/references/data-quality-permissions
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/references/data-quality-permissions
meta-description: Reference for data quality permission scopes and configuration in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Reference for data quality permission scopes and configuration in Atlan.
meta-og-locale: en
meta-og-title: Data quality permissions | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/references/data-quality-permissions
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Data quality permissions | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Data quality permissions
========================

To grant users in your organization access to set up data quality rules, you must assign the necessary permissions via metadata policies in personas.

Permission scopes[â](#permission-scopes "Direct link to Permission scopes")
-----------------------------------------------------------------------------

| Scope | Description |
| --- | --- |
| **Create Rule** | Grants users permission to create new rules on tables and add or update schedules |
| **Update Rule** | Grants users permission to modify existing rules |
| **Delete Rule** | Grants users permission to delete rules |
| **Read Rule** | Grants users permission to view the run values for a rule. Without this permission, users can still see the rule's run status (whether it passed or failed) and other metadata, such as the test's expected outcome, but the actual values remain hidden |

Configuration[â](#configuration "Direct link to Configuration")
-----------------------------------------------------------------

Assign permissions via metadata policies in personas using the **Data Quality (DQ)** scopes.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Set up Databricks](/product/capabilities/governance/data-quality/databricks/how-tos/set-up-databricks) \- Configure Databricks for data quality monitoring
* [Set up Snowflake](/product/capabilities/governance/data-quality/snowflake/how-tos/set-up-snowflake) \- Configure Snowflake for data quality monitoring
**Tags:*** [snowflake](/tags/snowflake)
* [data\-quality](/tags/data-quality)
* [permissions](/tags/permissions)
* [scopes](/tags/scopes)
* [reference](/tags/reference)

[PreviousWhat's Data Quality Studio](/product/capabilities/governance/data-quality/concepts/data-quality-studio)[NextRules and dimensions](/product/capabilities/governance/data-quality/snowflake/references/data-quality-rules)

Copyright Â© 2025 Atlan Pte. Ltd.

