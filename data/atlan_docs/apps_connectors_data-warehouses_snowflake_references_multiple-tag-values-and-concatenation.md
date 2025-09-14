# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/multiple-tag-values-and-concatenation

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/multiple-tag-values-and-concatenation
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/multiple-tag-values-and-concatenation
meta-description: Learn how Atlan handles multiple tag values for Snowflake objects, including concatenation, sorting, and reverse synchronization.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn how Atlan handles multiple tag values for Snowflake objects, including concatenation, sorting, and reverse synchronization.
meta-og-locale: en
meta-og-title: Multiple tag values and concatenation | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/references/multiple-tag-values-and-concatenation
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Multiple tag values and concatenation | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Multiple tag values and concatenation
=====================================

Atlan supports assigning multiple tag values to a single Snowflake object. When multiple tag values are assigned, Atlan concatenates them into a single string using a configurable delimiter.

Requirements[â](#requirements "Direct link to Requirements")
--------------------------------------------------------------

* Both **reverse sync** and **concatenation** must be enabled for multi\-value synchronization to work.

Constraints[â](#constraints "Direct link to Constraints")
-----------------------------------------------------------

When configuring multiple tag values, keep the following constraints in mind:

* The chosen delimiter **can't** appear inside any tag value to prevent parsing errors.
* The concatenated tag values length must not exceed **256 characters**.
* If the **allowed list** is enabled for a tag in Snowflake, concatenated tag values that you attach to Snowflake objects must come from the tagâs predefined list. To use a new value, add it to the list.
* Each tag supports up to **300 values**. For more information, see [Snowflake tag quota for objects](https://docs.snowflake.com/en/user-guide/object-tagging/introduction#tag-quota-for-objects).

How concatenation works[â](#how-concatenation-works "Direct link to How concatenation works")
-----------------------------------------------------------------------------------------------

**Important**Tag concatenation is an Atlan feature. Concatenated values created in Atlan are synced to Snowflake. However, if you concatenate tag values in Snowflake workflows, those concatenated references won't be synced back to Atlan.

Atlan manages multiple tag values by concatenating them into a single string that can be synchronized back to Snowflake. The process involves sorting, concatenation, and synchronization behaviors described below.

### Single values[â](#single-values "Direct link to Single values")

When only one value is assigned to a tag, no concatenation occurs. The single value is sent as\-is to Snowflake.

For example, if you have a tag `cost_center` and assign only the value `finance` to an object, the result in Snowflake is the single value `finance` without any concatenation.

### Multiple values[â](#multiple-values "Direct link to Multiple values")

You can assign multiple values to a single tag for any object in Atlan. When multiple values are assigned, they're concatenated into a single string using a delimiter character.

For example, if you have a tag `cost_center` and assign the values `finance`, `engineering`, and `sales` to an object with comma as the delimiter, the result is the concatenated string `engineering,finance,sales`.

#### Sorting[â](#sorting "Direct link to Sorting")

Tag values are sorted alphabetically before concatenation to maintain consistent ordering.

For example, if you have a tag `environment` with values `production`, `development`, and `staging` assigned to an object and use a comma (`,`) as your delimiter, Atlan sorts them alphabetically (`development`, `production`, `staging`) and concatenates them as: `development,production,staging`.

### Reverse sync[â](#reverse-sync "Direct link to Reverse sync")

Concatenation and reverse sync apply at the schema level for imported Snowflake tags. When reverse sync is enabled, the concatenated tag values are synchronized back to the corresponding objects in Snowflake.

#### Updates and removals[â](#updates-and-removals "Direct link to Updates and removals")

When you update or remove tag assignments in Atlan, these changes can be synchronized back to Snowflake and depend on the combination of reverse sync and concatenation settings:

* When **reverse sync is OFF**: Snowflake isn't updated
* When **reverse sync is ON** but **concatenation is OFF**: Only one tag value (typically the latest) is sent to Snowflake
* When **both reverse sync and concatenation are ON**: All tag values are concatenated and sent as a single string

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Snowflake object tagging introduction](https://docs.snowflake.com/en/user-guide/object-tagging/introduction) \- Learn about Snowflake's tag capabilities, quotas, and supported objects
**Tags:*** [multiple\-concatenation](/tags/multiple-concatenation)
* [snowflake](/tags/snowflake)

[PreviousConfigure Snowflake data metric functions](/apps/connectors/data-warehouses/snowflake/how-tos/configure-snowflake-data-metric-functions)[NextWhat does Atlan crawl from Snowflake?](/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake)

Copyright Â© 2025 Atlan Pte. Ltd.

