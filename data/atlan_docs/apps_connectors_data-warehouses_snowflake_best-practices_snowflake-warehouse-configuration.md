# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/best-practices/snowflake-warehouse-configuration

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/best-practices/snowflake-warehouse-configuration
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/best-practices/snowflake-warehouse-configuration
meta-description: Recommended Snowflake warehouse configuration to enable reliable Atlan workflow execution.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Recommended Snowflake warehouse configuration to enable reliable Atlan workflow execution.
meta-og-locale: en
meta-og-title: Snowflake warehouse configuration | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/best-practices/snowflake-warehouse-configuration
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Snowflake warehouse configuration | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Snowflake warehouse configuration
=================================

Configure your Snowflake warehouses following these best practices to achieve optimal performance and reliability for Atlan data workflows. These recommendations establish predictable resource allocation and maximize workflow efficiency.

Configure warehouse allocation[â](#configure-warehouse-allocation "Direct link to Configure warehouse allocation")
--------------------------------------------------------------------------------------------------------------------

* **Use a dedicated warehouse for Atlan workflows**: Assign a dedicated warehouse exclusively for Atlan operations. This approach separates warehouse performance from other workloads, enables precise cost tracking for Atlan operations, and provides consistent workflow performance.
* **One warehouse per connection**: Provision one Snowflake warehouse for each Atlan connection to maintain scoped capacity and predictable resource allocation.

Configure statement timeout[â](#configure-statement-timeout "Direct link to Configure statement timeout")
-----------------------------------------------------------------------------------------------------------

* **Set appropriate timeout values**: If your account enforces timeouts, configure both `STATEMENT_TIMEOUT_IN_SECONDS` and `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` to at least 6 hours (21,600 seconds) for the Atlan user to accommodate comprehensive data cataloging workflows.
* **Default values work well**: By default, both parameters are set to `0` (no limit), which is optimal for Atlan operations. Only adjust if your organization requires specific timeout enforcement.
* **Apply at user level**: Configure timeouts at the user level for consistent behavior across all Atlan sessions rather than at warehouse or session level.
**Tags:*** [snowflake](/tags/snowflake)
* [warehouse](/tags/warehouse)
* [configuration](/tags/configuration)

[PreviousTroubleshooting Snowflake tag management](/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-tag-management)

Copyright Â© 2025 Atlan Pte. Ltd.

