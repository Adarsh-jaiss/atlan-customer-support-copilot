# Source URL
https://docs.atlan.com/product/connections/how-tos/monitor-connectivity

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/how-tos/monitor-connectivity
link-alternate: https://docs.atlan.com/product/connections/how-tos/monitor-connectivity
meta-description: Atlan runs its crawlers through an orchestrated set of automated tasks.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan runs its crawlers through an orchestrated set of automated tasks.
meta-og-locale: en
meta-og-title: Monitor connectivity | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/how-tos/monitor-connectivity
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Monitor connectivity | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Monitor connectivity
====================

Atlan runs its crawlers through an orchestrated set of automated tasks.

To monitor these orchestrated set of tasks follow

[https://demo.arcade.software/WAShTLvcShmqhVDRJLAb?embed](https://demo.arcade.software/WAShTLvcShmqhVDRJLAb?embed)

these steps.

Monitor the crawling process[â](#monitor-the-crawling-process "Direct link to Monitor the crawling process")
--------------------------------------------------------------------------------------------------------------

You can visualize the individual tasks a workflow runs as a directed acyclic graph (or "DAG").

To visualize the crawling process:

* When running a workflow immediately, you will be redirected to the monitoring page within 5 seconds.
* At any other moment:
    1. From the left menu, click **Workflows** to navigate to the *Workflow center*:
        + By default, workflow runs from the last 24 hours will be shown.
        + (Optional) Use the filters along the top to narrow down to the workflow run you want to monitor.
    2. From the *Workflow run history* table, click the workflow run you want to check.

On the left of the screen under the *Summary* tab, you can also see:

* The current status of the workflow run.
* The start and finish time of the workflow run.
* The elapsed time (duration) of the workflow run.
* Who triggered the workflow run and how (manually or automatically).

Identify errors[â](#identify-errors "Direct link to Identify errors")
-----------------------------------------------------------------------

If a crawler fails due to an error, Atlan will show where the failure occurred in the visualization.

To review the failure of any workflow with an error:

1. Open the workflow run visualization (using either option above).
2. Under theÂ*Summary* tab on the left of the screen, click theÂ**View Failed tasks** button.

Atlan will take you to the *Failed Tasks* tab on the left of the screen. Here you can review details about the specific activity or activities that failed.

Review log files[â](#review-log-files "Direct link to Review log files")
--------------------------------------------------------------------------

Each task in the DAG may produce a log file containing additional details.

To review the log file for a specific activity:

1. Click the task (activity node) in the DAG visualization.
2. Open the *Failed Tasks* tab of a workflow run visualization (see steps above).
3. To the right of each failed step, click theÂ**Logs** button.

If there are any logs available, Atlan will display them on the screen.

**Did you know?**Not every failed activity will produce a log. Look at the *Message* field of failed tasks for ideas about what went wrong when there is no log file available.

Manage all workflows[â](#manage-all-workflows "Direct link to Manage all workflows")
--------------------------------------------------------------------------------------

You can monitor and manage all your workflows in Atlan from the workflow center.

To manage all your workflows:

1. From the left menu of any screen in Atlan, click **Workflows**.
2. From the tabs along the top in the *Workflow center*, click **Manage**.
3. Search for a specific workflow from the search bar or click **Select package** to filter by [supported connectors](/product/connections/references/supported-sources).
4. (Optional) In the *Filters* menu on the left, select a filter to drill down further:
    * Click **Created by** to filter workflows created by specific users in Atlan.
    * Click **Workflow type** to filter workflows by type of workflow \- connectors, utilities, and miners. Each workflow type also displays the total count of workflow runs for that type.
    * Click **Schedule** to filter workflows by scheduled or unscheduled runs.
5. The workflow preview includes a summary of workflow details. Navigate to the workflow sidebar on the right, from the sidebar:
    * The *Overview* tab displays run count, when the workflow was created and by whom, workflow schedules if applicable, and last 5 runs. (Optional) Click **Run workflow** to run the workflow directly from the sidebar.
    * The *Runs* tab displays a summary of past workflow runs. (Optional) Select a workflow run to view more details or [modify connectivity](/product/connections/how-tos/manage-connectivity).
6. Select any workflow to open the workflow.
**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)

[PreviousManage connectivity](/product/connections/how-tos/manage-connectivity)[NextConnect data sources for Azure\-hosted Atlan instances](/product/connections/how-tos/connect-data-sources-for-azure-hosted-atlan-instances)

Copyright Â© 2025 Atlan Pte. Ltd.

