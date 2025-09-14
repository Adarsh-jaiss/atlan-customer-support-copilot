# Source URL
https://docs.atlan.com/product/capabilities/governance/data-quality/how-tos/configure-alerts

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/data-quality/how-tos/configure-alerts
link-alternate: https://docs.atlan.com/product/capabilities/governance/data-quality/how-tos/configure-alerts
meta-description: Set up real-time notifications for data quality rule failures via Slack or Microsoft Teams.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Set up real-time notifications for data quality rule failures via Slack or Microsoft Teams.
meta-og-locale: en
meta-og-title: Configure alerts | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/data-quality/how-tos/configure-alerts
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Configure alerts | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Configure alerts
================

Set up real\-time notifications for data quality rule failures in Atlan. Receive immediate alerts via Slack or Microsoft Teams when rules fail, enabling quick response to data quality issues. This guide shows how to configure organization\-level alert destinations and set rule\-specific alert priorities.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* Administrative access to Atlan (for organization\-level configuration)
* Access to a public Slack or Microsoft Teams channel
* Data quality rules already configured in your environment

Configure organization\-level alerts[â](#configure-organization-level-alerts "Direct link to Configure organization-level alerts")
------------------------------------------------------------------------------------------------------------------------------------

Set up the alert destination for all data quality rules in your organization. This configuration applies to all rules and determines where alerts are sent. Only instance administrators can access this setting.

IMPORTANTOnly public channels are supported. Alerts can't be routed to private channels or Direct Messages at this time.

1. Navigate to the **Admin** panel from the profile menu
2. In the left\-hand menu, select **Integrations**
3. Choose your preferred messaging platform: **Slack** or **Microsoft Teams**
4. Within the selected platform, scroll to the **Data Quality** section
5. Enter the name of the public channel where rule failure alerts are delivered
6. Click **Update** to activate the integration

Once saved, the alerting configuration is in effect for all data quality rules based on their priority settings.

Configure rule\-level alert priority[â](#configure-rule-level-alert-priority "Direct link to Configure rule-level alert priority")
------------------------------------------------------------------------------------------------------------------------------------

Set alert priorities during rule creation or editing. This determines how frequently alerts are sent for each specific rule.

1. Navigate to the data quality rule you want to configure
2. Open the rule for editing or create a new rule
3. In the rule creation workflow, scroll to the **Additional Settings** section
4. All rules default to Normal priority unless explicitly changed by the user. Under **Alerts**, select the desired priority level:

    * **Normal** (default): Alerts are sent up to three times per failure, then suppressed until the rule passes. Use this for most data quality rules.
        * **Urgent**: Alerts are sent every time the rule fails. Use this for critical business rules.
        * **Low**: No alerts are sent. Failures are silently logged. Use this for non\-critical monitoring.

Next steps[â](#next-steps "Direct link to Next steps")
--------------------------------------------------------

After completing these steps:

* Rule failures trigger alerts in the designated public Slack or Teams channel, based on priority
* Each alert includes full context \- rule name, asset, severity, and relevant metadata \- to aid quick triage and action
* Rule\-level alert priority settings can be modified at any time by editing the rule

Need help[â](#need-help "Direct link to Need help")
-----------------------------------------------------

If you have questions or need assistance with configuring alerts, reach out to Atlan Support by [submitting a support request](/support/submit-request).

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Set up Databricks](/product/capabilities/governance/data-quality/databricks/how-tos/set-up-databricks) \- Configure Databricks for data quality monitoring
* [Set up Snowflake](/product/capabilities/governance/data-quality/snowflake/how-tos/set-up-snowflake) \- Configure Snowflake for data quality monitoring
**Tags:*** [data\-quality](/tags/data-quality)
* [alerts](/tags/alerts)
* [notifications](/tags/notifications)

[NextWhat's auto re\-attachment](/product/capabilities/governance/data-quality/concepts/auto-re-attachment-rules)

Copyright Â© 2025 Atlan Pte. Ltd.

