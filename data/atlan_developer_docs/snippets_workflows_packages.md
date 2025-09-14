# Source URL
https://developer.atlan.com/snippets/workflows/packages/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/packages/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Explore how to execute various package workflows in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Explore how to execute various package workflows in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Supported packages - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/packages/
meta-twitter:card: summary_large_image
meta-twitter:description: Explore how to execute various package workflows in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/packages/index.png
meta-twitter:title: Supported packages - Developer
meta-viewport: width=device-width,initial-scale=1
title: Supported packages - Developer
-->

[Skip to content](#supported-packages) Developer Supported packages Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Supported packages[¶](#supported-packages "Permanent link")
===========================================================

In this section, you'll find a comprehensive list of individual packages currently supported through our SDKs.
Each package section includes examples demonstrating how to build a workflow from scratch and execute it on Atlan.

**Can't find the package you're looking for?**

Python

Go

[4\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/4.1.0 "Minimum version")

Don't worry! If the workflow package isn't listed here, you can still run it by passing your workflow JSON configuration string directly to the `WorkflowClient.run()` method in Atlan. 

| workflow\_run\_example.py | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ```     from pyatlan.client.atlan import AtlanClient      client = AtlanClient()      workflow_json = r"""     {         "metadata": {"name": "test-name", "namespace": "test-namespace"},         "spec": {},         "payload": [{"parameter": "test-param", "type": "test-type", "body": {}}]     }     """     response = client.workflow.run(workflow_json)  ``` |

[0\.0\.16](https://github.com/atlanhq/atlan-go/releases/tag/0.0.16 "Minimum version")

Don't worry! If the workflow package isn't listed here, you can still run it by passing your workflow JSON configuration string directly to the `ctx.WorkflowClient.Run()` method in Atlan. 

| workflow\_run\_example.py | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` workflowJSON := `{     "metadata": {"name": "test-name", "namespace": "test-namespace"},     "spec": {},     "payload": [{"parameter": "test-param", "type": "test-type", "body": {}}] }`  response, atlanErr := ctx.WorkflowClient.Run(workflowJSON, nil) if atlanErr != nil {     logger.Log.Errorf("Error : %v", atlanErr) }  ``` |

Connectors[¶](#connectors "Permanent link")
-------------------------------------------

1. [Athena assets](athena-assets/)
2. [BigQuery assets](bigquery-assets/)
3. [Connection delete](connection-delete/)
4. [Confluent Kafka assets](confluent-kafka-assets/)
5. [dbt assets](dbt-assets/)
6. [DynamoDB assets](dynamodb-assets/)
7. [Databricks assets](databricks-assets/)
8. [Databricks miner](databricks-miner/)
9. [Fivetran enrichment](fivetran-enrichment/)
10. [Glue assets](glue-assets/)
11. [Looker assets](looker-assets/)
12. [Oracle assets](oracle-assets/)
13. [Postgres assets](postgres-assets/)
14. [PowerBI assets](powerbi-assets/)
15. [Redshift assets](redshift-assets/)
16. [Snowflake assets](snowflake-assets/)
17. [Snowflake miner](snowflake-miner/)
18. [Sigma assets](sigma-assets/)
19. [SQL Server assets](sql-server-assets/)
20. [Tableau assets](tableau-assets/)
21. [MongoDB assets](mongodb-assets/)

Utilities[¶](#utilities "Permanent link")
-----------------------------------------

1. [Asset import](asset-import/)
2. [Asset export (basic)](asset-export-basic/)
3. [API token connection admin](api-token-connection-admin/)
4. [Lineage builder](lineage-builder/)
5. [Lineage generator (no transformation)](lineage-generator-nt/)
6. [Relational assets builder](relational-assets-builder/)

---

2024\-05\-092025\-03\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/packages/) to provide us with more information. 

Back to top

[Previous Manage workflow schedules](../manage/schedules/) [Next Athena assets](athena-assets/) 

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

