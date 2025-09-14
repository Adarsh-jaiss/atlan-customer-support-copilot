# Source URL
https://docs.atlan.com/apps/connectors/lineage/astronomer-openlineage/references/what-does-atlan-crawl-from-astronomer-openlineage

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/lineage/astronomer-openlineage/references/what-does-atlan-crawl-from-astronomer-openlineage
link-alternate: https://docs.atlan.com/apps/connectors/lineage/astronomer-openlineage/references/what-does-atlan-crawl-from-astronomer-openlineage
meta-description: Atlan maps the following assets and properties from Astronomer/OpenLineage. Asset lineage support depends on the [list of operators supported by OpenLineage](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/1.6.0/supported_classes.html).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan maps the following assets and properties from Astronomer/OpenLineage. Asset lineage support depends on the [list of operators supported by OpenLineage](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/1.6.0/supported_classes.html).
meta-og-locale: en
meta-og-title: What does Atlan crawl from Astronomer/OpenLineage? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/lineage/astronomer-openlineage/references/what-does-atlan-crawl-from-astronomer-openlineage
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Astronomer/OpenLineage? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Astronomer/OpenLineage?
==================================================

Once you have [integrated Astronomer/OpenLineage](/apps/connectors/lineage/astronomer-openlineage/how-tos/integrate-astronomer-openlineage), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported:

* Status filter \- last run status for an asset
* Duration filter \- last run duration for an asset

Atlan maps the following assets and properties from Astronomer/OpenLineage. Asset lineage support depends on the [list of operators supported by OpenLineage](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/1.6.0/supported_classes.html).

DAGs[â](#dags "Direct link to DAGs")
--------------------------------------

Atlan maps DAGs (directed acyclic graphs) from Astronomer/OpenLineage to its `AirflowDAG` asset type.

| Source property | Atlan property |
| --- | --- |
| `schedule_interval` | `airflowDagSchedule` |
| `timetable` | `airflowDagScheduleDelta` |
| `tags` | `airflowTags` |
| `version` | `airflowRunVersion` |
| `openlineageAdapterVersion` | `airflowRunOpenLineageVersion` |
| `runid` | `airflowRunName` |
| `run_type` | `airflowRunType` |
| `eventTime` | `airflowRunStartTime` |
| `eventTime` | `airflowRunEndTime` |
| `eventType` | `airflowRunOpenLineageState` |
| `query` | `airflowTaskSql` |
| `group_id` | `airflowTaskGroupName` |

Tasks[â](#tasks "Direct link to Tasks")
-----------------------------------------

Atlan maps tasks from Astronomer/OpenLineage to its `AirflowTask` asset type.

| Source property | Atlan property |
| --- | --- |
| `retries` | `airflowTaskRetryNumber` |
| `pool` | `airflowTaskPool` |
| `pool_slots` | `airflowTaskPoolSlots` |
| `queue` | `airflowTaskQueue` |
| `priority_weight` | `airflowTaskPriorityWeight` |
| `trigger_rule` | `airflowTaskTriggerRule` |
| `operator_class` | `airflowTaskOperatorClass` |
| `dag_id` | `airflowDagName` |
| `conn_id` | ``airflowTaskConnectionId`` |
| `sql` | `airflowTaskSql` |
| `tags` | `airflowTags` |
| `version` | `airflowRunVersion` |
| `openlineageAdapterVersion` | `airflowRunOpenLineageVersion` |
| `runid` | `airflowRunName` |
| `run_type` | `airflowRunType` |
| `eventTime` | `airflowRunStartTime` |
| `eventTime` | `airflowRunEndTime` |
| `eventType` | `airflowRunOpenLineageState` |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousHow to integrate Astronomer/OpenLineage](/apps/connectors/lineage/astronomer-openlineage/how-tos/integrate-astronomer-openlineage)

Copyright Â© 2025 Atlan Pte. Ltd.

