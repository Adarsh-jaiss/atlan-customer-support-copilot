# Source URL
https://docs.atlan.com/apps/connectors/database/datastax-enterprise/references/what-does-atlan-crawl-from-datastax-enterprise

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/references/what-does-atlan-crawl-from-datastax-enterprise
link-alternate: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/references/what-does-atlan-crawl-from-datastax-enterprise
meta-description: What does Atlan crawl from DataStax Enterprise?
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: What does Atlan crawl from DataStax Enterprise?
meta-og-locale: en
meta-og-title: What does Atlan crawl from DataStax Enterprise? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/references/what-does-atlan-crawl-from-datastax-enterprise
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from DataStax Enterprise? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from DataStax Enterprise?
===============================================

Atlan integrates with DataStax Enterprise to crawl and map various asset types, helping you discover and understand your distributed data. This page outlines the DataStax Enterprise components that Atlan supports and how their properties are mapped.

Lineage support[â](#lineage-support "Direct link to Lineage support")
-----------------------------------------------------------------------

Atlan also supports the following lineage:

* Asset\-level lineage for **Tables** andÂ**Materialised Views**.
* Column\-level lineage for **Tables** and **Materialised Views**.

Assets[â](#assets "Direct link to Assets")
--------------------------------------------

Atlan crawls and maps the following assets and properties from DataStax Enterprise Cassandra.

Keyspaces[â](#keyspaces "Direct link to Keyspaces")
-----------------------------------------------------

Atlan maps keyspaces from DataStax Enterprise Cassandra to its `Keyspace` asset type.

| Source property | Atlan property |
| --- | --- |
| `keyspace_name` | `name` |
| `durable_writes` | `schemaCount` |
| `replication` | `cassandraKeyspaceReplication` |
| `virtual` | `cassandraKeyspaceVirtual` |
| `query` | `cassandraKeyspaceQuery` |

Tables[â](#tables "Direct link to Tables")
--------------------------------------------

Atlan maps tables from DataStax Enterprise Cassandra to its `Table` asset type.

| Source property | Atlan property |
| --- | --- |
| `table_name` | `name` |
| `bloom_filter_fp_chance` | `cassandraTableBloomFilterFpChance` |
| `caching` | `cassandraTableCaching` |
| `compaction` | `cassandraTableCompaction` |
| `compression` | `cassandraTableCompression` |
| `crc_check_chance` | `cassandraTableCrcCheckChance` |
| `dclocal_read_repair_chance` | `cassandraTableDclocalReadRepairChance` |
| `default_time_to_live` | `cassandraTableDefaultTimeToLive` |
| `extensions` | `cassandraTableExtensions` |
| `flags` | `cassandraTableFlags` |
| `comment` | `cassandraTableComment` |
| `gc_grace_seconds` | `cassandraTableGcGraceSeconds` |
| `id` | `cassandraTableId` |
| `max_index_interval` | `cassandraTableMaxIndexInterval` |
| `read_repair_chance` | `cassandraTableReadRepairChance` |

Materialised Views[â](#materialised-views "Direct link to Materialised Views")
--------------------------------------------------------------------------------

Atlan maps tables from DataStax Enterprise Cassandra to its `MaterialisedViews` asset type.

| Source property | Atlan property |
| --- | --- |
| `table_name` | `name` |
| `bloom_filter_fp_chance` | `cassandraViewBloomFilterFPChance` |
| `caching` | `cassandraViewCaching` |
| `compaction` | `cassandraViewCompaction` |
| `compression` | `cassandraViewCompression` |
| `crc_check_chance` | `cassandraViewCRCCheckChance` |
| `dclocal_read_repair_chance` | `cassandraViewDCLocalReadRepairChance` |
| `default_time_to_live` | `cassandraViewDefaultTTL` |
| `gc_grace_seconds` | `cassandraViewGCGraceSeconds` |
| `include_all_columns` | `cassandraViewIncludeAllColumns` |
| `comment` | `description` |
| `gc_grace_seconds` | `cassandraTableGcGraceSeconds` |
| `base_table_id` | `cassandraViewTableId` |
| `max_index_interval` | `cassandrViewMaxIndexInterval` |
| `read_repair_chance` | `cassandraViewReadRepairInterval` |
| `speculative_retry` | `cassandraViewSpeculativeRetry` |
| `base_table_name` | `cassandraTableName` |
| `query` | `cassandraViewQuery` |
| `memtable_flush_period_in_ms` | `cassandraViewMembtableFlushPeriodInMS` |
| `min_index_interval` | `cassandraViewMinIndexInterval` |
| `keyspace_name` | `cassandraKeyspaceName` |

Indexes[â](#indexes "Direct link to Indexes")
-----------------------------------------------

Atlan maps views from DataStax Enterprise Cassandra to its `Indexes` asset type.

| Source property | Atlan property |
| --- | --- |
| `index_name` | `name` |
| `kind` | `cassandraIndexKind` |
| `options` | `cassandraIndexOptions` |
| `table_name` | `cassandraTableName` |
| `keyspace_name` | `cassandraKeyspaceName` |
| `query` | `cassandraIndexQuery` |

Columns[â](#columns "Direct link to Columns")
-----------------------------------------------

Atlan maps columns from DataStax Enterprise Cassandra to its `Column` asset type.

| Source property | Atlan property |
| --- | --- |
| `column_name` | `name` |
| `table_name (if a view)` | `cassandraViewName` |
| `table_name (if a table)` | `cassandraTableName` |
| `clustering_order` | `cassandraColumnClusteringOrder` |
| `kind` | `cassandraColumnKind` |
| `position` | `cassandraColumnPosition` |
| `type` | `cassandraColumnType` |
| `keyspace_name` | `cassandraColumnIsStatic` |

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCrawl DataStax Enterprise](/apps/connectors/database/datastax-enterprise/how-tos/crawl-datastax-enterprise)[NextPreflight checks for DataStax Enterprise](/apps/connectors/database/datastax-enterprise/references/preflight-checks-for-datastax-enterprise)

Copyright Â© 2025 Atlan Pte. Ltd.

