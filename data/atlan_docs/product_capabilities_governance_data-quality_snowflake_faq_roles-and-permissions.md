# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/faq/roles-and-permissions

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/faq/roles-and-permissions
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/faq/roles-and-permissions
meta-description: Explanation of Snowflake's security model and role requirements for data quality operations.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Explanation of Snowflake's security model and role requirements for data quality operations.
meta-og-locale: en
meta-og-title: Roles and permissions | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/faq/roles-and-permissions
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Roles and permissions | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Roles and permissions
=====================

This document answers common questions about the roles Atlan creates or requires in Snowflake, why elevated permissions such as **dq\_admin** are necessary, and how Snowflakeâs built\-in controls keep your data safe.

### Why does the `dq_admin` role need table owner privileges?[â](#why-does-the-dq_admin-role-need-table-owner-privileges "Direct link to why-does-the-dq_admin-role-need-table-owner-privileges")

Snowflake's security model restricts data metric function management to table owners only. According to [Snowflake's documentation](https://docs.snowflake.com/en/user-guide/data-quality-working#schedule-the-dmf-to-run), only the role that owns a table can schedule and manage data metric functions on that table.

To support data quality operations across your tables, the `dq_admin` role must be granted access to the table owner roles. This permission lets it manage data metric functions on your behalf.

### How does Atlan access these elevated privileges?[â](#how-does-atlan-access-these-elevated-privileges "Direct link to How does Atlan access these elevated privileges?")

Atlan maintains security through a controlled access pattern:

* Atlan **never** receives the `dq_admin` role or table ownership directly
* All operations execute through the `MANAGE_DMF` stored procedure
* This procedure runs with `dq_admin` privileges but only exposes specific, predefined data quality operations
* Every operation remains within Snowflake's secure execution context
**Tags:*** [snowflake](/tags/snowflake)
* [data\-quality](/tags/data-quality)
* [security](/tags/security)
* [permissions](/tags/permissions)
* [faq](/tags/faq)

[PreviousOperations](/product/capabilities/governance/data-quality/snowflake/references/operations)

Copyright Â© 2025 Atlan Pte. Ltd.

