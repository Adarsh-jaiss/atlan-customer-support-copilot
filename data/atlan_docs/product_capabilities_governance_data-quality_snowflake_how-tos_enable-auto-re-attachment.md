# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/how-tos/enable-auto-re-attachment

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/how-tos/enable-auto-re-attachment
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/how-tos/enable-auto-re-attachment
meta-description: Learn how to enable automatic re-attachment of data quality rules to Snowflake tables and views.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn how to enable automatic re-attachment of data quality rules to Snowflake tables and views.
meta-og-locale: en
meta-og-title: Enable auto re-attachment of rules | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/snowflake/how-tos/enable-auto-re-attachment
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Enable auto re-attachment of rules | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Enable auto re\-attachment of rules
===================================

This guide explains how to configure your Snowflake environment to enable automatic reattachment of rules in Atlan.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Make sure the following conditions are met:

* The recreated asset has the same name and similar structure.
* The original rule is still present and not deleted.
* The feature is enabled for your tenant.

Grant privileges[â](#grant-privileges "Direct link to Grant privileges")
--------------------------------------------------------------------------

Below are the minimum privileges the **atlan\_dq\_service\_role** role needs to reattach rules automatically. Replace `<database-name>` and similar placeholders with your own object names.

1. **Database and schema usage**: Enables Atlan to discover and reference objects.

```
GRANT USAGE ON DATABASE <database-name> TO ROLE atlan_dq_service_role;  
GRANT USAGE ON ALL SCHEMAS IN DATABASE <database-name> TO ROLE atlan_dq_service_role;  

```
2. **Table and view reference**: Required for rules that reference columns in these objects.

```
GRANT REFERENCES ON ALL TABLES IN DATABASE <database-name> TO ROLE atlan_dq_service_role;  
GRANT REFERENCES ON ALL VIEWS  IN DATABASE <database-name> TO ROLE atlan_dq_service_role;  

```
3. **DMF schema and function usage**: Enables execution of Snowflake Data Metric Functions created by Atlan.

```
-- Grant usage on the helper database / schema holding DMF functions  
GRANT USAGE ON DATABASE ATLAN_DQ_DQ TO ROLE atlan_dq_service_role;  
GRANT USAGE ON SCHEMA   ATLAN_DQ_DQ.DMFS TO ROLE atlan_dq_service_role;  
  
-- Grant usage on all existing and future functions within the DMF schema  
GRANT USAGE ON ALL FUNCTIONS    IN SCHEMA ATLAN_DQ_DQ.DMFS TO ROLE atlan_dq_service_role;  
GRANT USAGE ON FUTURE FUNCTIONS IN SCHEMA ATLAN_DQ_DQ.DMFS TO ROLE atlan_dq_service_role;  

```
4. **Future\-proofing privileges**: Ensures newly created objects are covered without manual grants.

```
GRANT USAGE      ON FUTURE SCHEMAS  IN DATABASE <database-name> TO ROLE atlan_dq_service_role;  
GRANT REFERENCES ON FUTURE TABLES   IN DATABASE <database-name> TO ROLE atlan_dq_service_role;  
GRANT REFERENCES ON FUTURE VIEWS    IN DATABASE <database-name> TO ROLE atlan_dq_service_role;  

```
After these grants are applied, any table or view that's recreated with the same name automatically regains its attached rules, keeping your data quality checks continuous.

Whatâs next[â](#whats-next "Direct link to Whatâs next")
--------------------------------------------------------------

Once privileges are configured, rule reattachment happens automatically whenever matching assets are recreated in Snowflake. You can now continue monitoring your data quality workflows without needing to manually reapply rules.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Auto re\-attachment rules](/product/capabilities/governance/data-quality/concepts/auto-re-attachment-rules): Understand how Atlan automatically reattaches rules to recreated Snowflake assets to maintain continuous data quality enforcement.
**Tags:*** [snowflake](/tags/snowflake)
* [data\-quality](/tags/data-quality)
* [auto\-re\-attachment](/tags/auto-re-attachment)

[PreviousEnable data quality on connection](/product/capabilities/governance/data-quality/snowflake/how-tos/enable-data-quality)[NextUpgrade to Snowflake data quality studio](/product/capabilities/governance/data-quality/snowflake/how-tos/migrate-snowflake)

Copyright Â© 2025 Atlan Pte. Ltd.

