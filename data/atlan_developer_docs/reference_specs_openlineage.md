# Source URL
https://developer.atlan.com/reference/specs/openlineage/

================================================================================

<!--
canonical: https://developer.atlan.com/reference/specs/openlineage/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Specification of Atlan's integration with OpenLineage events.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Specification of Atlan's integration with OpenLineage events.
meta-og-image: https://developer.atlan.com/assets/images/social/reference/specs/openlineage.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: OpenLineage spec - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/reference/specs/openlineage/
meta-twitter:card: summary_large_image
meta-twitter:description: Specification of Atlan's integration with OpenLineage events.
meta-twitter:image: https://developer.atlan.com/assets/images/social/reference/specs/openlineage.png
meta-twitter:title: OpenLineage spec - Developer
meta-viewport: width=device-width,initial-scale=1
title: OpenLineage spec - Developer
-->

[Skip to content](#openlineage) Developer OpenLineage spec Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../)

OpenLineage[¶](#openlineage "Permanent link")
=============================================

Out of the box[¶](#out-of-the-box "Permanent link")
---------------------------------------------------

Atlan supports integrated lineage through the OpenLineage standard out\-of\-the\-box for a number of sources:

* [Apache Airflow](https://ask.atlan.com/hc/en-us/articles/7580916902159)
* [Amazon MWAA](https://ask.atlan.com/hc/en-us/articles/7625845864463)
* [Apache Spark](https://ask.atlan.com/hc/en-us/articles/8320171069199)
* [Astronomer](https://ask.atlan.com/hc/en-us/articles/8303576887055)
* [Google Cloud Composer](https://ask.atlan.com/hc/en-us/articles/8337325117839)

If you want to integrate lineage from any of these tools, simply follow the linked instructions.

Specification[¶](#specification "Permanent link")
-------------------------------------------------

On the other hand, if you want to add lineage support to some other tooling you can do so by following the OpenLineage standard's specification.

Also available via SDKs

We are working on exposing some simplified ways to [integrate via OpenLineage using our SDKs](../../../snippets/common-examples/lineage/manage/) as well.

To integrate via OpenLineage, you need to adhere to three main points:

### Format[¶](#format "Permanent link")

The format of payloads you send containing lineage information must match the OpenLineage standard. Specifically, they must minimally contain:

* A [job](https://openlineage.io/docs/spec/object-model#job)  — a process that consumes or produces datasets.
* A [run](https://openlineage.io/docs/spec/object-model#run)  — an instance of a job that represents one of its occurrences in time.
* At least one of the payloads for a given run should contain input and output datasets (the sources and targets of the lineage)
* All payloads are wrapped up into an [event](#events)

They will look something like this:

```
{
  "eventTime": "2024-07-01T08:23:37.491542Z", // (1)
  "producer": "https://github.com/some/example", // (2)
  "schemaURL": "https://openlineage.io/spec/2-0-2/OpenLineage.json#/$defs/RunEvent",
  "eventType": "START", // (3)
  "job": {
    "namespace": "ol-spark", // (4)
    "name": "test-job-006", // (5)
    "facets": {}
  },
  "run": {
    "runId": "eefd52c3-5871-4f0e-8ff5-237e9a6efb53", // (6)
    "facets": {}
  },
  "inputs": [
    {
      "namespace": "snowflake://abc123.snowflakecomputing.com", // (7)
      "name": "RAW.WIDEWORLDIMPORTERS_SALESFORCE.ORG_EMAIL_ADDRESS_SECURITY", // (8)
      "facets": {}
    }
  ],
  "outputs": [ // (9)
    {
      "namespace": "snowflake://abc123.snowflakecomputing.com",
      "name": "ANALYTICS.WIDE_WORLD_IMPORTERS.new view",
      "facets": {
        "columnLineage": { // (10)
          "_producer": "https://github.com/atlanhq/atlan-java",
          "_schemaURL": "https://openlineage.io/spec/facets/1-1-0/ColumnLineageDatasetFacet.json#/$defs/ColumnLineageDatasetFacet",
          "fields": {
            "StockItemID": { // (11)
              "inputFields": [
                {
                  "namespace": "snowflake://abc123.snowflakecomputing.com",
                  "name": "RAW.WIDEWORLDIMPORTERS_SALESFORCE.ORG_EMAIL_ADDRESS_SECURITY",
                  "field": "ID" // (12)
                },
                {
                  "namespace": "snowflake://abc123.snowflakecomputing.com",
                  "name": "RAW.WIDEWORLDIMPORTERS_SALESFORCE.ORG_EMAIL_ADDRESS_SECURITY",
                  "field": "PARENT_ID"
                }
              ]
            },
            "TargetStockLevel": {
              "inputFields": [
                {
                  "namespace": "snowflake://abc123.snowflakecomputing.com",
                  "name": "RAW.WIDEWORLDIMPORTERS_SALESFORCE.ORG_EMAIL_ADDRESS_SECURITY",
                  "field": "SYSTEM_MODSTAMP"
                }
              ]
            }
          }
        }
      }
    }
  ]
}

```
1. The time at which the event occurred, in ISO\-8601 format.
2. A unique URI of what was responsible for triggering the event, for example a specific piece of code.
3. The type of the event (e.g. `START` vs `COMPLETE`).
4. The name of the connection in which this lineage process should exist.
5. A unique name for the lineage process. This acts as an idempotent business key: the first time it is used, a lineage process will be created. Any subsequent use of the same job name will cause a new run for that same job to be tracked.
6. A unique identifier for the run of the job this event relates to. This must be kept constant between events for the same run (for example, the same `runId` should be used for both a `START` and a `COMPLETE` event to show when a job run has started and when it has completed).
7. Inputs (sources) for the data lineage. The `namespace` of a dataset should follow the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md) .
8. The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`.
9. Outputs (targets) for the dtaa lineage. The `namespace` and `name` should follow the same conventions as the inputs.
10. If you want to track column\-level lineage, note that this is *only* specified on the target (outputs) end of the lineage.
11. Each field used as a key in the `fields` object is the name of a field (column) in the *output* dataset.
12. The `inputFields` list within then defines *all* input (source) fields that map to this output field in column\-level lineage.

Airflow has a more complex, hierarchical structure

The general structure above applies to Spark, in particular. For Airflow, there is a nested hierarchical structure that differentiates between an overall DAG and its individual tasks. Each DAG and each task will need to follow the points outlined here, and in addition there are further requirements to link together the DAG and its tasks using additional [OpenLineage facets](https://openlineage.io/docs/spec/facets/) . For now, these are beyond the scope of this document — if you want to integrate Airflow specifically, we would recommend using one of the out\-of\-the\-box integrations linked above.

### Events[¶](#events "Permanent link")

For any given run, there must be *at least* two events:

* `START` to indicate that a run has begun
* One of the following to indicate that the run has finished:
    + `COMPLETE` to signify that execution of the run has concluded
    + `ABORT` to signify the run has been stopped abnormally
    + `FAIL` to signify the run has failed

Atlan's OpenLineage processing will *merge* all inputs and outputs across all events for a given run to construct the lineage for that run. The merge will happen only when a completion event has been received; and completion events will only be processed if there is a `START` event for that same run.

Only provide inputs and outputs in one of the events

For simplicity, this means you only need to provide the inputs and outputs for lineage in one of the events. For example, if you provide them in the start event (like in the example above), then the completion event can be as simple as:

```
{
  "eventTime": "2024-07-01T08:23:38.360567Z", // (1)
  "producer": "https://github.com/some/example",
  "schemaURL": "https://openlineage.io/spec/2-0-2/OpenLineage.json#/$defs/RunEvent",
  "eventType": "COMPLETE",
  "run": {
    "runId": "eefd52c3-5871-4f0e-8ff5-237e9a6efb53", // (2)
    "facets": {}
  },
  "job": { // (3)
    "namespace": "ol-spark",
    "name": "test-job-006",
    "facets": {}
  }
}

```
1. The time at which the job run finished.
2. The `runId` must match the `runId` used in the event marking the start of the job run.
3. The job details must match those used in the event marking the start of the job run.

### Naming[¶](#naming "Permanent link")

Finally, the names used in the payloads must align to assets in Atlan as follows:

* The `namespace` of a job must match the name of a Spark or Airflow connection in Atlan
* The `namespace` of a dataset should follow the [source\-specific naming standards of OpenLineage](https://github.com/OpenLineage/OpenLineage/blob/main/spec/Naming.md)
* The `name` of a dataset should use a `.`\-qualified form. For example, a table should be `DATABASE_NAME.SCHEMA_NAME.TABLE_NAME`

**What if an asset used in lineage has not yet been crawled into Atlan?**

The connection you refer to must exist in Atlan before you can emit OpenLineage events for it. In practice, this means you must first configure OpenLineage, for example, for Spark assets before sending any events with a job `namespace` that refers to such a connection.

However, any input or output datasets that do not (yet) exist in Atlan will be created automatically as part of the lineage processing — but only as [partial assets](https://ask.atlan.com/hc/en-us/articles/8571773050767) . This means they will appear in lineage, but not be discoverable or able to be enriched in any other way in Atlan's UI.

Once such assets are crawled, they will be promoted automatically to "full" (not partial) assets, and then they will be discoverable and can be enriched just like any other asset in Atlan.

---

2024\-07\-012024\-07\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/reference/specs/openlineage/) to provide us with more information. 

Back to top

[Previous Data contract spec](../datacontracts/) [Next Full model reference](../../../models/) 

Copyright © 2024 Atlan — [🍪 settings](#__consent) 
Built with 💙 for the 🤖\-making humans of data 

#### Cookie consent

We use cookies to: - [x] Anonymously measure page views, and
- [x] Allow you to give us one\-click feedback on any page.

 We do **not** collect or store: - [ ] Any personally identifiable information.
- [ ] Any information for any (re)marketing purposes.

 With your consent, you're helping us to make our documentation better 💙

- [x] Google Analytics

Accept

Reject

Manage settings

