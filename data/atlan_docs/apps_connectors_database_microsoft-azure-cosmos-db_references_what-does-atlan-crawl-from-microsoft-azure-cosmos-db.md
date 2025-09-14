# Source URL
https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/references/what-does-atlan-crawl-from-microsoft-azure-cosmos-db

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/references/what-does-atlan-crawl-from-microsoft-azure-cosmos-db
link-alternate: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/references/what-does-atlan-crawl-from-microsoft-azure-cosmos-db
meta-description: Once you have [crawled Microsoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db), you can [.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you have [crawled Microsoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db), you can [.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Microsoft Azure Cosmos DB? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/microsoft-azure-cosmos-db/references/what-does-atlan-crawl-from-microsoft-azure-cosmos-db
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Microsoft Azure Cosmos DB? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Microsoft Azure Cosmos DB?
=====================================================

Once you have [crawled Microsoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following filters are currently supported for Microsoft Azure Cosmos DB assets:

* Accounts \- you can use the following filters:
    + *Account Type* \- filter accounts by account type
    + *Subscription ID* \- filter accounts by subscription ID
    + *Account Resource Group* \- filter accounts by resource group
* Collections \- *Type* filter, filtering options include *Time Series*, *Capped*, and *Clustered* collection types

Atlan crawls and maps the following assets and properties from Microsoft Azure Cosmos DB. Atlan currently does not support lineage for Microsoft Azure Cosmos DB assets.

Accounts[â](#accounts "Direct link to Accounts")
--------------------------------------------------

Atlan maps accounts from Microsoft Azure Cosmos DB to its `Account` asset type.

### vCore\-based deployment[â](#vcore-based-deployment "Direct link to vCore-based deployment")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `type` | `cosmosMongoDBAccountType` |
| dynamically generated | `cosmosMongoDBDatabaseCount` |

### RU\-based deployment[â](#ru-based-deployment "Direct link to RU-based deployment")

| Source property | Atlan property |
| --- | --- |
| `name` | `name` |
| `createdAt` | `sourceCreatedAt` |
| `instanceId` | `cosmosMongoDBAccountInstanceId` |
| dynamically generated | `cosmosMongoDBDatabaseCount` |
| `type` | `cosmosMongoDBAccountType` |
| `subscription` | `cosmosMongoDBAccountSubscriptionId` |
| `resource group` | `cosmosMongoDBAccountResourceGroup` |
| `document endpoint` | `cosmosMongoDBAccountDocumentEndpoint` |
| `mongo endpoint` | `cosmosMongoDBAccountMongoEndpoint` |
| `publicNetworkAccess` | `cosmosMongoDBAccountPublicNetworkAccess` |
| `enableAutomaticFailover` | `cosmosMongoDBAccountEnableAutomaticFailover` |
| `enableMultipleWriteLocations` | `cosmosMongoDBAccountEnableMultipleWriteLocations` |
| `enablePartitionKeyMonitor` | `cosmosMongoDBAccountEnablePartitionKeyMonitor` |
| `isVirtualNetworkFilterEnabled` | `cosmosMongoDBAccountIsVirtualNetworkFilterEnabled` |
| `locations` | `cosmosMongoDBAccountLocations` |
| `readLocations` | `cosmosMongoDBAccountReadLocations` |
| `writeLocations` | `cosmosMongoDBAccountWriteLocations` |
| `defaultConsistencyLevel` | `cosmosMongoDBAccountConsistencyPolicy` |

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from Microsoft Azure Cosmos DB to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_CAT` | `name` |
| `TABLE_COUNT` | `mongoDBDatabaseCollectionCount` |

Collections[â](#collections "Direct link to Collections")
-----------------------------------------------------------

Atlan maps collections from Microsoft Azure Cosmos DB to its `Collection` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_NAME` | `name` |
| `TABLE_CAT` | `databaseName` |
| `COLUMN_COUNT` | `columnCount` |
| `collStats.storageSize` | `sizeBytes` |
| `collStats.count` | `rowCount` |
| `type` | `mongoDBCollectionSubtype` |
| `schema` | `mongoDBCollectionSchemaDefinition` |
| `collStats.capped` | `mongoDBCollectionIsCapped` |
| `collStats.maxSize` | `mongoDBCollectionMaxSize` |
| `collStats.max` | `mongoDBCollectionMaximumDocumentCount` |
| `options.timeseries.timeField` | `mongoDBCollectionTimeField` |
| `options.timeseries.granularity` | `mongoDBCollectionTimeGranularity` |
| `options.expireAfterSeconds` | `mongoDBCollectionExpireAfterSeconds` |
| `collStats.numOrphanDocs` | `mongoDBCollectionNumOrphanDocs` |
| `collStats.nindexes` | `mongoDBCollectionNumIndexes` |
| `collStats.totalIndexSize` | `mongoDBCollectionTotalIndexSize` |
| `collStats.avgObjSize` | `mongoDBCollectionAverageObjectSize` |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

To extract columns from Microsoft Azure Cosmos DB collections, Atlan [analyzes document schemas](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db), which must be enabled and configured to crawl columns.

Atlan consolidates multiple document schemas into a unified view, capturing all possible fields with their nesting levels and data types. The system then performs a depth\-first traversal, converting each unique field path into column entries while tracking parent\-child relationships and hierarchy through qualified names. The total column count is calculated by summing up all unique paths, including nested structures, with arrays processed to identify additional column patterns.

Atlan maps the following metadata from Microsoft Azure Cosmos DB to its `Column` asset type.

* Atlan supports nested columns up to level 35 for parent columns.
* Column\-level lineage is currently not supported.
* Tag propagation is supported from:
    + collections to columns
    + parent to nested columns

| Atlan property | Where in Atlan |
| --- | --- |
| `name` | asset preview and profile, overview sidebar |
| `order` | asset preview and profile, overview sidebar |
| `dataType` | asset preview and profile, overview sidebar |
| `rawdataTypeDefinition`(raw schema of nested columns in a given parent column) | asset preview and profile, overview sidebar |
| `path`(complete hierarchy from parent column to child column) | asset preview and profile, overview sidebar |

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl Microsoft Azure Cosmos DB](/apps/connectors/database/microsoft-azure-cosmos-db/how-tos/crawl-microsoft-azure-cosmos-db)[NextTroubleshooting Microsoft Azure Cosmos DB connectivity](/apps/connectors/database/microsoft-azure-cosmos-db/troubleshooting/troubleshooting-microsoft-azure-cosmos-db-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

