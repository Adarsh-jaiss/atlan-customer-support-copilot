# Source URL
https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/references/what-does-atlan-crawl-from-apache-airflow-openlineage

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/references/what-does-atlan-crawl-from-apache-airflow-openlineage
link-alternate: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/references/what-does-atlan-crawl-from-apache-airflow-openlineage
meta-description: Once you have [integrated Apache Airflow/OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage),.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [integrated Apache Airflow/OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage),.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Apache Airflow/OpenLineage? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/references/what-does-atlan-crawl-from-apache-airflow-openlineage
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Apache Airflow/OpenLineage? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Apache Airflow/OpenLineage?
======================================================

Once you have [integrated Apache Airflow/OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu#connector-specific-filters) for quick asset discovery. The following filters are currently supported:

* Status filter \- last run status for an asset
* Duration filter \- last run duration for an asset

Atlan maps the following assets and properties from Apache Airflow/OpenLineage. Asset lineage support depends on the [list of operators supported by OpenLineage](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/1.6.0/supported_classes.html).

DAGs[â](#dags "Direct link to DAGs")
--------------------------------------

Atlan maps DAGs (directed acyclic graphs) from Apache Airflow/OpenLineage to its `AirflowDAG` asset type.

| Source property | Atlan property | Description |
| --- | --- | --- |
| `job.name` | `name` | Name of the Airflow DAG |
| \- | `qualifiedName` | Unique identifier for the DAG in Atlan |
| `description` | `description` | Description of the DAG from Airflow |
| `owners` | `sourceOwners` | Original owner information from Airflow |
| \- | `ownerUsers` | Validated Atlan usernames (mapped from source owners) |
| `schedule_interval` | `airflowDagSchedule` | DAG's schedule interval (cron expression or preset) |
| `delta` | `airflowDagScheduleDelta` | Schedule interval in seconds |
| `tags` | `airflowTags` | Tags assigned to the DAG |
| `run_id` | `airflowRunName` | Unique identifier for the DAG run |
| `run_type` | `airflowRunType` | Type of run (scheduled, manual, backfill) |
| `eventTime (start)` | `airflowRunStartTime` | Timestamp when the DAG run started |
| `eventTime (end)` | `airflowRunEndTime` | Timestamp when the DAG run completed |
| `eventType` | `airflowRunOpenLineageState` | Final status of the DAG run |
| `version` | `airflowRunVersion` | Airflow version |
| `openlineageAdapterVersion` | `airflowRunOpenLineageVersion` | OpenLineage adapter version |
| \- | `sourceURL` | Direct link to the DAG in Airflow UI |
| \- | `connectionName` | Name of the connector instance |
| \- | `connectionQualifiedName` | Unique identifier for the connector instance |
| \- | `connectorName` | Name of the connector type |

**Did you know?**If a DAG has more than 10 valid owner email addresses (comma\-separated), only the first 10 will be captured and published.

Tasks[â](#tasks "Direct link to Tasks")
-----------------------------------------

Atlan maps tasks from Apache Airflow/OpenLineage to its `AirflowTask` asset type.

| Source property | Atlan property | Description |
| --- | --- | --- |
| `job.name (partial)` | `name` | Name of the task (extracted from full job name) |
| \- | `qualifiedName` | Unique identifier for the task in Atlan |
| \- | `airflowDagName` | Name of the parent DAG |
| \- | `airflowDagQualifiedName` | Unique identifier for the parent DAG in Atlan |
| `operator_class` | `airflowTaskOperatorClass` | Type of operator used for the task |
| `conn_id` | `airflowTaskConnectionId` | Connection ID used by the task |
| `sql` | `airflowTaskSql` | SQL query (for SQL\-based operators) |
| `owner` | `sourceOwners` | Owner information from the task definition |
| `eventTime (start)` | `airflowRunStartTime` | Timestamp when the task started |
| `eventTime (end)` | `airflowRunEndTime` | Timestamp when the task completed |
| `eventType` | `airflowRunOpenLineageState` | Final status of the task run |
| `run_id` | `airflowRunName` | Unique identifier for the task run |
| `run_type` | `airflowRunType` | Type of run (from parent DAG) |
| `pool` | `airflowTaskPool` | Worker pool assigned to the task |
| `pool_slots` | `airflowTaskPoolSlots` | Number of pool slots used by the task |
| `priority_weight` | `airflowTaskPriorityWeight` | Priority weight for execution order |
| `queue` |  |  |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousHow to implement OpenLineage in Airflow operators](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/implement-openlineage-in-airflow-operators)[NextPreflight checks for Apache Airflow](/apps/connectors/lineage/apache-airflow-openlineage/references/preflight-checks-for-apache-airflow)

Copyright Â© 2025 Atlan Pte. Ltd.

