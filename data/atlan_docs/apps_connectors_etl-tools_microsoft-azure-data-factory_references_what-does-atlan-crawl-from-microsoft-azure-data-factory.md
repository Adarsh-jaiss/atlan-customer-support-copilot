# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-does-atlan-crawl-from-microsoft-azure-data-factory

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-does-atlan-crawl-from-microsoft-azure-data-factory
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-does-atlan-crawl-from-microsoft-azure-data-factory
meta-description: Atlan crawls and maps the following assets and properties from Microsoft Azure Data Factory.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Microsoft Azure Data Factory.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Microsoft Azure Data Factory? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-does-atlan-crawl-from-microsoft-azure-data-factory
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Microsoft Azure Data Factory? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Microsoft Azure Data Factory?
========================================================

Atlan crawls and maps the following assets and properties from Microsoft Azure Data Factory.

For any currently unsupported linked services, datasets, and activities from Microsoft Azure Data Factory not listed below, Atlan will map them to the relevant asset type and only display asset name, type, and description.

Linked services[â](#linked-services "Direct link to Linked services")
-----------------------------------------------------------------------

Atlan maps linked services from Microsoft Azure Data Factory to its `AdfLinkedservice` asset type.

### Microsoft Azure Cosmos DB for MongoDB[â](#microsoft-azure-cosmos-db-for-mongodb "Direct link to Microsoft Azure Cosmos DB for MongoDB")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfLinkedserviceType` |
| `description` | `description` |
| `annotations` | `adfLinkedserviceAnnotations` |
| `typeProperties.database` | `adfLinkedserviceDatabaseName` |
| `typeProperties.isServerVersionAbove32` | `adfLinkedserviceVersionAbove` |
| `version` | `adfLinkedserviceVersion` |

### Azure Data Lake Storage (ADLS)[â](#azure-data-lake-storage-adls "Direct link to Azure Data Lake Storage (ADLS)")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfLinkedserviceType` |
| `description` | `description` |
| `typeProperties.azureCloudType` | `adfLinkedserviceAzureCloudType` |
| `typeProperties.servicePrincipalCredentialType` | `adfLinkedserviceCredentialType` |
| `typeProperties.tenant` | `adfLinkedserviceTenant` |
| `typeProperties.url` | `adfLinkedserviceDomainEndpoint` |

### Azure Databricks[â](#azure-databricks "Direct link to Azure Databricks")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfLinkedserviceType` |
| `description` | `description` |
| `annotations` | `adfLinkedserviceAnnotations` |
| `typeProperties.clusterId` | `adfLinkedserviceClusterId` |
| `typeProperties.domain` | `adfLinkedserviceDomainEndpoint` |
| `typeProperties.workspaceResourceId` | `adfLinkedserviceResourceId` |

### Snowflake[â](#snowflake "Direct link to Snowflake")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfLinkedserviceType` |
| `description` | `description` |
| `annotations` | `adfLinkedserviceAnnotations` |
| `typeProperties.accountIdentifier` | `adfLinkedserviceDomainEndpoint` |
| `typeProperties.authenticationType` | `adfLinkedserviceCredentialType` |
| `typeProperties.database` | `adfLinkedserviceDatabaseName` |
| `typeProperties.user` | `adfLinkedserviceUserName` |
| `typeProperties.warehouse` | `adfLinkedserviceWarehouseName` |

### Microsoft Azure SQL Database[â](#microsoft-azure-sql-database "Direct link to Microsoft Azure SQL Database")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfLinkedserviceType` |
| `description` | `description` |
| `annotations` | `adfLinkedserviceAnnotations` |
| `typeProperties.authenticationType` | `adfLinkedserviceCredentialType` |
| `typeProperties.database` | `adfLinkedserviceDatabaseName` |
| `typeProperties.server` | `adfLinkedserviceDomainEndpoint` |

Datasets[â](#datasets "Direct link to Datasets")
--------------------------------------------------

Atlan maps databases from Microsoft Azure Cosmos DB to its `AdfDataset` asset type.

### Microsoft Azure Cosmos DB for MongoDB[â](#microsoft-azure-cosmos-db-for-mongodb-1 "Direct link to Microsoft Azure Cosmos DB for MongoDB")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfDatasetType` |
| `description` | `description` |
| `annotations` | `adfDatasetAnnotations` |
| `folder` | `adfDatasetFolderPath` |
| `linkedServiceName` | `adfDatasetLinkedService` |
| `typeProperties.collection` | `adfDatasetCollectionName` |

### Azure Data Lake Storage (ADLS)[â](#azure-data-lake-storage-adls-1 "Direct link to Azure Data Lake Storage (ADLS)")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfDatasetType` |
| `description` | `description` |
| `annotations` | `adfDatasetAnnotations` |
| `folder` | `adfDatasetFolderPath` |
| `linkedServiceName` | `adfDatasetLinkedService` |
| `typeProperties.fileName` | `adfDatasetFileName` |
| `typeProperties.folderPath` | `adfDatasetFileFolderPath` |
| `typeProperties.format` | `adfDatasetStorageType` |
| `typeProperties.container` | `adfDatasetContainerName` |

### Azure Databricks[â](#azure-databricks-1 "Direct link to Azure Databricks")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfDatasetType` |
| `description` | `description` |
| `annotations` | `adfDatasetAnnotations` |
| `folder` | `adfDatasetFolderPath` |
| `linkedServiceName` | `adfDatasetLinkedService` |
| `typeProperties.database` | `adfDatasetDatabaseName` |
| `typeProperties.table` | `adfDatasetTableName` |

### Snowflake[â](#snowflake-1 "Direct link to Snowflake")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfDatasetType` |
| `description` | `description` |
| `annotations` | `adfDatasetAnnotations` |
| `folder` | `adfDatasetFolderPath` |
| `linkedServiceName` | `adfDatasetLinkedService` |
| `typeProperties.schema` | `adfDatasetSchemaName` |
| `typeProperties.table` | `adfDatasetTableName` |

### Microsoft Azure SQL Database[â](#microsoft-azure-sql-database-1 "Direct link to Microsoft Azure SQL Database")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfDatasetType` |
| `description` | `description` |
| `annotations` | `adfDatasetAnnotations` |
| `folder` | `adfDatasetFolderPath` |
| `linkedServiceName` | `adfDatasetLinkedService` |
| `typeProperties.schema` | `adfDatasetSchemaName` |
| `typeProperties.table` | `adfDatasetTableName` |

Data flows[â](#data-flows "Direct link to Data flows")
--------------------------------------------------------

Atlan maps data flows from Microsoft Azure Data Factory to its `AdfDataflow` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `description` | `description` |
| `folder` | `adfDataflowFolderPath` |
| `typeProperties.sources` | `adfDataflowSources` |
| `typeProperties.sinks` | `adfDataflowSinks` |
| `typeProperties.scriptLines` | `adfDataflowScript` |

Activities[â](#activities "Direct link to Activities")
--------------------------------------------------------

Atlan maps activities from Microsoft Azure Data Factory to its `AdfActivity` asset type.

### Copy activity[â](#copy-activity "Direct link to Copy activity")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfActivityType` |
| `description` | `description` |
| `dependsOn` | `adfActivityPrecedingDependency` |
| `policyTimeout` | `adfActivityPolicyTimeout` |
| `policyRetryInterval` | `adfActivityPolictRetryInterval` |
| `state` | `adfActivityState` |
| `activityRuns` | `adfActivityRuns` |
| `typeProperties.sink` | `adfActivitySinks` |
| `typeProperties.source` | `adfActivitySources` |
| `typeProperties.sinkType` | `adfActivitySinkType` |
| `typeProperties.sourceType` | `adfActivitySourceType` |

### Databricks notebooks[â](#databricks-notebooks "Direct link to Databricks notebooks")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfActivityType` |
| `description` | `description` |
| `dependsOn` | `adfActivityPrecedingDependency` |
| `policyTimeout` | `adfActivityPolicyTimeout` |
| `policyRetryInterval` | `adfActivityPolictRetryInterval` |
| `state` | `adfActivityState` |
| `activityRuns` | `adfActivityRuns` |
| `typeProperties.source` | `adfActivitySources` |
| `typeProperties.sourceType` | `adfActivitySources` |
| `typeProperties.notebookPath` | `adfActivityNotebookPath` |

### DatabricksSparkJar activity[â](#databrickssparkjar-activity "Direct link to DatabricksSparkJar activity")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfActivityType` |
| `description` | `description` |
| `dependsOn` | `adfActivityPrecedingDependency` |
| `policyTimeout` | `adfActivityPolicyTimeout` |
| `policyRetryInterval` | `adfActivityPolictRetryInterval` |
| `state` | `adfActivityState` |
| `activityRuns` | `adfActivityRuns` |
| `typeProperties.source` | `adfActivitySources` |
| `typeProperties.sourceType` | `adfActivitySources` |
| `typeProperties.mainClassName` | `adfActivityMainClassName` |

### DatabricksSparkPython activity[â](#databrickssparkpython-activity "Direct link to DatabricksSparkPython activity")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfActivityType` |
| `description` | `description` |
| `dependsOn` | `adfActivityPrecedingDependency` |
| `policyTimeout` | `adfActivityPolicyTimeout` |
| `policyRetryInterval` | `adfActivityPolictRetryInterval` |
| `state` | `adfActivityState` |
| `activityRuns` | `adfActivityRuns` |
| `typeProperties.source` | `adfActivitySources` |
| `typeProperties.sourceType` | `adfActivitySources` |
| `typeProperties.pythonFile` | `adfActivityPythonFilePath` |

### Lookup activity[â](#lookup-activity "Direct link to Lookup activity")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfActivityType` |
| `description` | `description` |
| `dependsOn` | `adfActivityPrecedingDependency` |
| `policyTimeout` | `adfActivityPolicyTimeout` |
| `policyRetryInterval` | `adfActivityPolictRetryInterval` |
| `state` | `adfActivityState` |
| `activityRuns` | `adfActivityRuns` |
| `typeProperties.firstRowOnly` | `adfActivityFirstRowOnly` |
| `typeProperties.source` | `adfActivitySources` |

### ForEach activity[â](#foreach-activity "Direct link to ForEach activity")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfActivityType` |
| `description` | `description` |
| `dependsOn` | `adfActivityPrecedingDependency` |
| `policyTimeout` | `adfActivityPolicyTimeout` |
| `policyRetryInterval` | `adfActivityPolictRetryInterval` |
| `state` | `adfActivityState` |
| `activityRuns` | `adfActivityRuns` |
| `typeProperties.activities` | `adfActivitySubActivities` |
| `typeProperties.batchCount` | `adfActivityBatchCount` |
| `typeProperties.isSequential` | `adfActivityIsSequential` |

Pipelines[â](#pipelines "Direct link to Pipelines")
-----------------------------------------------------

Atlan maps pipelines from Microsoft Azure Data Factory to its `AdfPipeline` asset type.

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `adfActivityType` |
| `description` | `description` |
| `activityCount` | `adfPipelineActivityCount` |
| `pipelineRun` | `adfPipelineRuns` |
| `typeProperties.folder` | `adfPipelineFolderPath` |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Microsoft Azure Data Factory](/apps/connectors/etl-tools/microsoft-azure-data-factory/how-tos/crawl-microsoft-azure-data-factory)[NextWhat lineage does Atlan extract from Microsoft Azure Data Factory?](/apps/connectors/etl-tools/microsoft-azure-data-factory/references/what-lineage-does-atlan-extract-from-microsoft-azure-data-factory)

Copyright Â© 2025 Atlan Pte. Ltd.

