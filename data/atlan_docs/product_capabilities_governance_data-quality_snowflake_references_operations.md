# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/references/operations

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/references/operations
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/references/operations
meta-description: Atlan crawls and manages the following data quality operations and results from Snowflake.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and manages the following data quality operations and results from Snowflake.
meta-og-locale: en
meta-og-title: Operations | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/references/operations
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Operations | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Operations
==========

Atlan crawls and manages the following data quality operations and results from Snowflake.

Once you have [enabled data quality on your connection](/product/capabilities/governance/data-quality/snowflake/how-tos/enable-data-quality), Atlan can perform data quality operations and retrieve results from your Snowflake environment.

CUD operations for rules[â](#cud-operations-for-rules "Direct link to CUD operations for rules")
--------------------------------------------------------------------------------------------------

When creating, updating, or deleting data quality rules:

| Component | Details |
| --- | --- |
| **Procedure** | Atlan invokes the `MANAGE_DMF` stored procedure in Snowflake |
| **User** | Atlan DQ User |
| **Role** | `atlan_dq_service_role` |

### Supported action types[â](#supported-action-types "Direct link to Supported action types")

| Action | Description |
| --- | --- |
| `ATTACH_DMF` | Attach a data metric function to a table |
| `DETACH_DMF` | Remove a data metric function from a table |
| `SUSPEND_DMF` | Pause execution of a data metric function |
| `RESUME_DMF` | Resume execution of a data metric function |
| `UPDATE_SCHEDULE` | Modify the execution schedule |
| `CREATE_DMF` | Create a new data metric function |

### Procedure response[â](#procedure-response "Direct link to Procedure response")

`MANAGE_DMF` provides only an acknowledgment response indicating successful execution

Test SQL operations[â](#test-sql-operations "Direct link to Test SQL operations")
-----------------------------------------------------------------------------------

For custom SQL rules, Atlan validates and tests SQL statements:

| Component | Details |
| --- | --- |
| **Procedure** | Atlan triggers the `MANAGE_DMF` procedure for test SQL operations |
| **User** | Atlan DQ User |
| **Role** | `atlan_dq_service_role` |

### Supported action types[â](#supported-action-types-1 "Direct link to Supported action types")

| Action | Description |
| --- | --- |
| `EXECUTE_SQL` | Run custom SQL for testing |
| `VALIDATE_SQL_PERMISSIONS` | Verify SQL permissions |

### Procedure responses[â](#procedure-responses "Direct link to Procedure responses")

| Action | Response |
| --- | --- |
| `VALIDATE_SQL_PERMISSIONS` | Returns acknowledgment confirming permission validity |
| `EXECUTE_SQL` | Returns a scalar numeric result from executing the custom user\-defined SQL statement, following rigorous validation |

Crawling[â](#crawling "Direct link to Crawling")
--------------------------------------------------

Atlan periodically crawls data from Snowflake to update rule results.

### Target tables[â](#target-tables "Direct link to Target tables")

| Table | Purpose |
| --- | --- |
| `ATLAN_DQ.STORE.DQ_RULE` | Rule definitions |
| `ATLAN_DQ.STORE.DQ_RULE_RESULT` | Execution results |

### Outcome[â](#outcome "Direct link to Outcome")

* Crawled data populates Atlan's internal representation of rule execution results.
**Tags:*** [snowflake](/tags/snowflake)
* [data\-quality](/tags/data-quality)
* [operations](/tags/operations)
* [reference](/tags/reference)

[PreviousUpgrade to Snowflake data quality studio](/product/capabilities/governance/data-quality/snowflake/how-tos/migrate-snowflake)[NextRoles and permissions](/product/capabilities/governance/data-quality/snowflake/faq/roles-and-permissions)

Copyright Â© 2025 Atlan Pte. Ltd.

