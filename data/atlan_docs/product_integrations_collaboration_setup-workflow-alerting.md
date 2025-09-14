# Source URL
https://docs.atlan.com/product/integrations/collaboration/setup-workflow-alerting

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/collaboration/setup-workflow-alerting
link-alternate: https://docs.atlan.com/product/integrations/collaboration/setup-workflow-alerting
meta-description: Learn how to configure alerts for workflow events in Atlan via email or Google Chat.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn how to configure alerts for workflow events in Atlan via email or Google Chat.
meta-og-locale: en
meta-og-title: Send alerts for workflow events | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/collaboration/setup-workflow-alerting
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Send alerts for workflow events | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Send alerts for workflow events App
===================================

You can send workflow alerts to **Email** and **Google Chat** to notify your team when workflows in Atlan complete or fail. You can also send alerts to [Slack](/product/integrations/collaboration/slack) and [Microsoft Teams](/product/integrations/collaboration/microsoft-teams) using Atlanâs built\-in notification capabilities.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you begin, make sure you have:

* Access to the Workflow Alerting app. You can verify this by searching for Workflow Alerting in the Atlan marketplace. If you don't have access, contact [Atlan support](/support/submit-request) or your Atlan customer team to request it.

Setup workflow[â](#setup-workflow "Direct link to Setup workflow")
--------------------------------------------------------------------

1. In your Atlan workspace, go to the homepage and click **New workflow** in the top navigation bar.
2. Search for **Workflow Alerting**, and then select **Set up workflow**.
3. In the **Mode** option, select the alert delivery method:

* Email
* Google Chat

Sends workflow alerts as a tabular report to one or more email addresses, including details of the selected workflow runs.

* Enter one or more email addresses in the **Email IDs** field, separated by commas. Use valid addresses for recipients who need to receive workflow alerts.

```
[[email protected]](/cdn-cgi/l/email-protection),[[email protected]](/cdn-cgi/l/email-protection)  

```
* In the **Email subject** field, enter a clear, concise subject line for the alert email so recipients can quickly identify the notification.

```
Atlan Workflow Failure Alert  

```
Sends workflow alerts to a Google Chat space using a webhook URL. Alerts appear as structured Google Chat cards, which include the workflow name, status (for example, `Failed` or `Completed`), and other run details.

* Enter the Google Chat webhook URL in the **Webhook URL** field. You can generate a webhook URL by navigating to your **Google Chat** space, selecting **Settings** â **Apps \& integrations**, and adding an incoming webhook. For more information, see the [Google Chat documentation](https://developers.google.com/workspace/chat/quickstart/webhooks#create-webhook).

```
https://chat.googleapis.com/v1/spaces/AAAA123456/messages?key=abc123&token=xyz456  

```
4. In **Workflows Created By**, select the users whose workflows trigger alerts. Leave blank to monitor workflows from all users.

    Select **Failed** to receive alerts only for failed runs, or **All Workflows** to receive alerts for every workflow execution.

    info Workflows that are still running are ignored. The package only captures workflows that have finished, either successfully or with a failure.
5. In **Scheduling Status**, choose one of the following options to specify which workflows to monitor:

    * **Scheduled**: Includes only workflows with a defined run schedule.
        * **Unscheduled**: Includes only workflows without a set schedule.
        * **All**: Includes both scheduled and unscheduled workflows.
6. In **Workflow Type**, select the categories of workflows you want to monitor. Multiple categories can be selected if needed.
7. In **Monitoring interval for workflow completions**, select the time range to track workflow completions. Atlan evaluates workflows completed within the chosen interval and triggers alerts if they meet the configured criteria, enabling timely detection of issues and faster response.

    If **Last 24 Hours** is selected, the alert includes all workflows that completed or failed within the past day, listed together in a single notification.
8. **Schedule and run** the workflow. Run the workflow manually or set a recurring schedule to send alerts at regular intervals.

Need help?[â](#need-help "Direct link to Need help?")
-------------------------------------------------------

If you have any issues related to configuring the app, contact [Atlan support](/support/submit-request).

**Tags:*** [automation](/tags/automation)
* [alerts](/tags/alerts)
* [workflows](/tags/workflows)
* [app](/tags/app)

[PreviousTroubleshooting spreadsheets](/product/integrations/collaboration/spreadsheets/troubleshooting/troubleshooting-spreadsheets)[NextCommunication Integrations](/product/integrations/communication)

Copyright Â© 2025 Atlan Pte. Ltd.

