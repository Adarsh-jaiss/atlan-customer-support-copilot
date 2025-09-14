# Source URL
https://docs.atlan.com/apps/connectors/database/mongodb/references/what-does-atlan-crawl-from-mongodb

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/mongodb/references/what-does-atlan-crawl-from-mongodb
link-alternate: https://docs.atlan.com/apps/connectors/database/mongodb/references/what-does-atlan-crawl-from-mongodb
meta-description: Atlan crawls and maps the following assets and properties from MongoDB. Atlan currently does not support lineage for MongoDB assets.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from MongoDB. Atlan currently does not support lineage for MongoDB assets.
meta-og-locale: en
meta-og-title: What does Atlan crawl from MongoDB? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/mongodb/references/what-does-atlan-crawl-from-mongodb
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from MongoDB? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from MongoDB?
===================================

Atlan crawls and maps the following assets and properties from MongoDB. Atlan currently does not support lineage for MongoDB assets.

Once you have [crawled MongoDB](/apps/connectors/database/mongodb/how-tos/crawl-mongodb), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following filter is currently supported for [MongoDB collections](#collections):

* *Collection type* filter \- filtering options include *Time Series*, *Capped*, and *Clustered* collection types

Databases[â](#databases "Direct link to Databases")
-----------------------------------------------------

Atlan maps databases from MongoDB to its `Database` asset type.

| Source property | Atlan property |
| --- | --- |
| `TABLE_CAT` | `name` |
| `TABLE_COUNT` | `mongoDBDatabaseCollectionCount` |

Collections[â](#collections "Direct link to Collections")
-----------------------------------------------------------

Atlan maps collections from MongoDB to its `Collection` asset type.

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

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl MongoDB](/apps/connectors/database/mongodb/how-tos/crawl-mongodb)[NextTroubleshooting MongoDB connectivity](/apps/connectors/database/mongodb/troubleshooting/troubleshooting-mongodb-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

