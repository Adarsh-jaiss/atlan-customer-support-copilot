# Source URL
https://docs.atlan.com/faq/workflows-and-data-processing

================================================================================

<!--
canonical: https://docs.atlan.com/faq/workflows-and-data-processing
link-alternate: https://docs.atlan.com/faq/workflows-and-data-processing
meta-description: Everything about managing data workflows, understanding lineage generation, and optimizing data processing pipelines in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Everything about managing data workflows, understanding lineage generation, and optimizing data processing pipelines in Atlan.
meta-og-locale: en
meta-og-title: Workflows and Data Processing | Atlan Documentation
meta-og-url: https://docs.atlan.com/faq/workflows-and-data-processing
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Workflows and Data Processing | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Workflows and Data Processing
=============================

Everything about managing data workflows, understanding lineage generation, and optimizing data processing pipelines in Atlan.

### How do I configure custom cron schedules?[â](#how-do-i-configure-custom-cron-schedules "Direct link to How do I configure custom cron schedules?")

You can use cron expressions to create custom cron schedules for your workflows in Atlan. A cron expression helps you specify the date and time for when a scheduled task must be executed.

Cron expressions consist of five date and time fields separated by white space \- there shouldn't be any white spaces within a field value.

Cron expressions in Atlan include the following five fields and corresponding values:

| Field name | Allowed values | Allowed special characters |
| --- | --- | --- |
| Minutes | 0\-59 | `,` `-` `*` `/` |
| Hours | 0\-23 | `,` `-` `*` `/` |
| Day of the month | 1\-31 | `,` `-` `*` `/` |
| Month | 0\-12 | `,` `-` `*` `/` |
| Day of the week | 0\-7 | `,` `-` `*` `/` |

* `,` \- comma specifies a list of values
* `-` \- dash specifies a range of values
* `*` \- asterisk specifies all possible values for a field
* `/` \- slash is used to skip a given number of values

Examples of cron expressions and their respective meanings:

* `0 0 1 * *` \- Run at midnight on day 1 of every month
* `0 0 * * *` \- Run once a day at midnight
* `0 */3 * * *` \- Run at minute 0 past every 3rd hour or run every 3 hours
* `0 0 1,15 * *` \- Run at midnight on day 1 and 15 of every month
* `30 14 * * 1,3` \- Run at 14:30 on Monday and Wednesday
* `0 6,18 * * *` \- Run at minute 0 past hours 6 and 18 or run at 6 AM and then 6 PM.
* `0 0 1 3,6,9,12 *` \- Run at midnight on day 1 of March, June, September, and December

### Why is the first miner run taking so long to finish?[â](#why-is-the-first-miner-run-taking-so-long-to-finish "Direct link to Why is the first miner run taking so long to finish?")

Typically, the first run of the miner takes longer than usual. This is likely because it's parsing through queries beginning from the date chosen during setup.

It's recommended that the start date be no further back than a week. As long as the miner is scheduled to run and running, it continuously picks up and builds lineage as data flows run.

Subsequent runs must be much quicker in relation to the first run \- especially if the miner is set up to run daily. In that case, it only parses through new queries as opposed to historic ones. Keep in mind that the number of queries or transformations running daily can also be a factor in the time it takes for the miner to run.

To learn more about miner logic, see [here](/product/capabilities/lineage/troubleshooting/troubleshooting-lineage).

### Are there any extra steps required for rerunning the miner?[â](#are-there-any-extra-steps-required-for-rerunning-the-miner "Direct link to Are there any extra steps required for rerunning the miner?")

The miner can rerun without any additional steps involved. However, it's possible that the miner errors out when running after a few weeks. If this happens, consider changing the start date of the miner config to be no further back than a week.

### Why do some workflows take longer?[â](#why-do-some-workflows-take-longer "Direct link to Why do some workflows take longer?")

You can take the following reasons into consideration when accounting for longer workflow runtimes:

* Extracting a high volume of assets from the source may increase the time a workflow takes to complete.
* Atlan workflows run **differential crawls**, bringing in only delta changes from the source. This speeds things up, and further parallelisation helps optimise runtime.
* On some days the runtime can exceed the usual duration:
    + There may be more transformations to process, so more delta changes need to be synced to Atlan.
    + If one of those transformations includes a **delete** operation, Atlan archives the removed assets. Archival can take longer and therefore extend the overall runtime.

For general guidelines, see [How to order workflows](/product/connections/how-tos/order-workflows).

### Why is the workflow config or new workflow button not working?[â](#why-is-the-workflow-config-or-new-workflow-button-not-working "Direct link to Why is the workflow config or new workflow button not working?")

If the workflow config page is blank or the **New workflow** button doesn't proceed to the next step, try these checks:

1. Open Atlan in an incognito / private\-browsing window and see whether the page loads.
2. If it loads, verify whether your browser has any ad\-blockers enabled.
3. Either disable the ad\-blocker or add `*.atlan.com` to the allowlist.

### Workflow is failing with: Delete percentage is more than 80\.0\. Exiting.[â](#workflow-is-failing-with-delete-percentage-is-more-than-800-exiting "Direct link to Workflow is failing with: Delete percentage is more than 80.0. Exiting.")

Atlan has added guardrails to the workflow execution to make sure that assets don't get archived accidentally. A circuit breaker logic is triggered when 80% of existing assets are missing in the current workflow run. This logic aborts the workflow and prevents it from committing any changes.

This situation commonly arises if:

* Permissions for the Atlan integration user are revoked or updated in the source system.
* Include and exclude metadata filters in the [workflow configuration are modified](/product/connections/how-tos/manage-connectivity).
* Assets are removed from the source system.

In case the mass deletion is intentional, please [reach out to Atlan support](/support/submit-request) to disable the circuit breaker. The next run of the workflow proceeds with archiving assets that aren't part of the run. However, note that any metadata updates (tags, descriptions, and more) on these assets are lost.

### How's lineage from procedures deduced in Atlan?[â](#hows-lineage-from-procedures-deduced-in-atlan "Direct link to How's lineage from procedures deduced in Atlan?")

Lineage from procedures is inferred indirectly from the **query history** generated when the procedure runs.

### Can offline extraction fail if there are spaces in the path?[â](#can-offline-extraction-fail-if-there-are-spaces-in-the-path "Direct link to Can offline extraction fail if there are spaces in the path?")

Atlan currently doesn't support spaces in folder names for S3\. The offline extraction workflow fails if you include any spaces in the folder name in S3\. To follow documented guidelines for safe characters, refer to [Amazon S3 documentation](https://docs.aws.amazon.com/en_us/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines).

### Is the existing file in the bucket overwritten when uploading the JSON files?[â](#is-the-existing-file-in-the-bucket-overwritten-when-uploading-the-json-files "Direct link to Is the existing file in the bucket overwritten when uploading the JSON files?")

Yes. For dbt Core workflows the recommended approach is to replace the folder with the new `manifest.json` and `run_results.json` files. The workflow uses file names to locate its inputs and doesn't check timestamps. (The `catalog.json` file is no longer required.)

### Can I configure a Snowflake workflow using account usage and then switch to information schema?[â](#can-i-configure-a-snowflake-workflow-using-account-usage-and-then-switch-to-information-schema "Direct link to Can I configure a Snowflake workflow using account usage and then switch to information schema?")

When you [modify an existing Snowflake connection](/product/connections/how-tos/manage-connectivity) and change the extraction method, Atlan **deletes and recreates** all assets in that connection. If you need to switch from **Account usage** to **Information schema**, please [contact Atlan support](/support/submit-request) so the change can be applied safely.

### Can I receive notifications when workflows fail?[â](#can-i-receive-notifications-when-workflows-fail "Direct link to Can I receive notifications when workflows fail?")

Atlan can send failure alerts to [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) and [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams).

In *Admin â Integrations*, open the Slack (or Microsoft Teams) tile and enable **Receive failure alerts only** to get a notification whenever a workflow fails.

### Can I create a multi\-step approval workflow in Atlan?[â](#can-i-create-a-multi-step-approval-workflow-in-atlan "Direct link to Can I create a multi-step approval workflow in Atlan?")

Yes. Atlan integrates with tools such as [Jira](/product/integrations/project-management/jira/faq/jira-integration), enabling you to build multi\-step approval workflows that match your organisation's processes.

### Is the PII tagging of data or metadata automated?[â](#is-the-pii-tagging-of-data-or-metadata-automated "Direct link to Is the PII tagging of data or metadata automated?")

Atlan propagates [tags](/product/capabilities/governance/tags/concepts/what-are-tags) based on hierarchy and lineage. For example, if you [attach a tag](/product/capabilities/governance/tags/how-tos/attach-a-tag) named `PII` to a table and tag propagation is enabled, the tag is copied to downstream columns.

Atlan doesn't automatically detect PII. Propagation only occurs if you enable it manually or automate it using playbooks. For details, see [Why does tag propagation take time to apply?](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply).

### Are there any dbt assets that cannot be viewed in dbt?[â](#are-there-any-dbt-assets-that-cannot-be-viewed-in-dbt "Direct link to Are there any dbt assets that cannot be viewed in dbt?")

Atlan shows the **View in dbt** link only for dbt models, sources, and tests that include a valid `target_url`. Assets without a target URL won't display the link.

### Can I follow the background processes of workflows in Argo?[â](#can-i-follow-the-background-processes-of-workflows-in-argo "Direct link to Can I follow the background processes of workflows in Argo?")

If you have cluster\-level access, you can open the built\-in Argo UI at `https://your-atlan-domain/argo` to watch each workflow's DAG, pod logs, and retry status in real time. Otherwise, use the *History* tab inside the workflow sidebar in Atlan or the run\-level logs downloadable from the *Runs* table.

### How does Atlan work with dbt single\-tenant vs multi\-tenant?[â](#how-does-atlan-work-with-dbt-single-tenant-vs-multi-tenant "Direct link to How does Atlan work with dbt single-tenant vs multi-tenant?")

For dbt Cloud single\-tenant projects, Atlan authenticates with the project\-scoped API key you provide. For multi\-tenant workspaces, Atlan uses your account\-level service token and the project ID to pull lineage and documentation. Behaviour in Atlan is identical; the difference is only in where the credentials are scoped in dbt Cloud.

### Cloud logging and monitoring[â](#cloud-logging-and-monitoring "Direct link to Cloud logging and monitoring")

Atlan sends application and access logs to your cloud provider's native logging service: CloudWatch (AWS), Stackdriver (GCP), or Azure Monitor. You can ingest these logs into your SIEM for central monitoring. Contact Atlan support to enable log shipping for your tenant.

**Tags:*** [data](/tags/data)
* [configuration](/tags/configuration)
* [faq\-automation](/tags/faq-automation)

[PreviousUser Management and Access Control](/faq/user-management-and-access-control)

Copyright Â© 2025 Atlan Pte. Ltd.

