# Source URL
https://docs.atlan.com/product/connections/references/additional-connectivity-to-data-sources

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/references/additional-connectivity-to-data-sources
link-alternate: https://docs.atlan.com/product/connections/references/additional-connectivity-to-data-sources
meta-description: Learn about additional connectivity to data sources.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about additional connectivity to data sources.
meta-og-locale: en
meta-og-title: Additional connectivity to data sources | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/references/additional-connectivity-to-data-sources
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Additional connectivity to data sources | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Additional connectivity to data sources
=======================================

In addition to connecting to your [data sources](/product/connections/references/supported-sources) directly, Atlan also supports connecting through:

Private network link[â](#private-network-link "Direct link to Private network link")
--------------------------------------------------------------------------------------

### AWS PrivateLink[â](#aws-privatelink "Direct link to AWS PrivateLink")

[AWS PrivateLink](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-privatelink.html) creates a secure, private connection between services running in AWS:

* [Amazon Athena](/apps/connectors/database/amazon-athena/how-tos/set-up-a-private-network-link-to-amazon-athena)
* [Amazon MSK](/apps/connectors/messaging/amazon-msk/how-tos/set-up-a-private-network-link-to-amazon-msk)
* [Amazon Redshift](/apps/connectors/data-warehouses/amazon-redshift/how-tos/set-up-a-private-network-link-to-amazon-redshift)
* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-aws-private-network-link-to-databricks)
* [Hive](/apps/connectors/database/hive/how-tos/set-up-a-private-network-link-to-hive)
* Microsoft SQL Server \- [Amazon RDS](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-a-private-network-link-to-microsoft-sql-server-on-amazon-rds) and [Amazon EC2](/apps/connectors/database/microsoft-sql-server/how-tos/set-up-a-private-network-link-to-microsoft-sql-server-on-amazon-ec2)
* [MySQL](/apps/connectors/database/mysql/how-tos/set-up-a-private-network-link-to-mysql)
* [PostgreSQL](/apps/connectors/database/postgresql/how-tos/set-up-a-private-network-link-to-postgresql)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-aws-private-network-link-to-snowflake)
* [Tableau](/apps/connectors/business-intelligence/tableau/how-tos/set-up-a-private-network-link-to-tableau-server)
* [Trino](/apps/connectors/database/trino/how-tos/set-up-a-private-network-link-to-trino)

### Azure Private Link[â](#azure-private-link "Direct link to Azure Private Link")

[Azure Private Link](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview) creates a secure, private connection between services running in Azure:

* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-an-azure-private-network-link-to-databricks)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-an-azure-private-network-link-to-snowflake)

### Private Service Connect[â](#private-service-connect "Direct link to Private Service Connect")

Private Service Connect creates a secure, private connection between services running in Google Cloud Platform:

* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery)

Docker\-based offline extraction[â](#docker-based-offline-extraction "Direct link to Docker-based offline extraction")
------------------------------------------------------------------------------------------------------------------------

Atlan supports the offline extraction method for fetching metadata from supported sources. You will need to first extract the metadata yourself and then make it available in S3\.

For offline extraction, Atlan uses the following:

* Base image \- Ubuntu for SQL\-based extraction, Alpine Linux for REST API extraction.
* Programming language \- Kotlin for SQL sources, Python for BI sources and event buses.

### Databases[â](#databases "Direct link to Databases")

* [Amazon Redshift](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)
* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-access)
* [Hive](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)
* [Microsoft SQL Server](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)
* [MySQL](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)
* [Oracle](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)
* [PostgreSQL](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)
* [SAP HANA](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)
* [Snowflake](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)
* [Teradata](/apps/connectors/database/on-premises-databases/references/supported-connections-for-on-premises-databases)

### BI tools[â](#bi-tools "Direct link to BI tools")

* [IBM Cognos Analytics](/apps/connectors/business-intelligence/ibm-cognos-analytics/how-tos/set-up-on-premises-ibm-cognos-analytics-access)
* [Looker](/apps/connectors/business-intelligence/looker/how-tos/set-up-on-premises-looker-access)
* [Tableau](/apps/connectors/business-intelligence/tableau/how-tos/set-up-on-premises-tableau-access)
* [ThoughtSpot](/apps/connectors/business-intelligence/thoughtspot/how-tos/set-up-on-premises-thoughtspot-access)

### Data movement tools[â](#data-movement-tools "Direct link to Data movement tools")

* [dbt Core](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core)

### Event buses[â](#event-buses "Direct link to Event buses")

* [Aiven Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access)
* [Apache Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access)
* [Confluent Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access)
* [Redpanda Kafka](/apps/connectors/messaging/on-premises-event-buses/how-tos/set-up-on-premises-kafka-access)

### Miners[â](#miners "Direct link to Miners")

* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/set-up-on-premises-databricks-lineage-extraction)
* [Teradata](/apps/connectors/database/teradata/how-tos/set-up-on-premises-teradata-miner-access)

### S3 miner[â](#s3-miner "Direct link to S3 miner")

* [Amazon Redshift](/product/connections/how-tos/mine-queries-through-s3)
* [Google BigQuery](/product/connections/how-tos/mine-queries-through-s3)
* [Hive](/product/connections/how-tos/mine-queries-through-s3)
* [Microsoft Azure Synapse Analytics](/apps/connectors/data-warehouses/microsoft-azure-synapse-analytics/how-tos/crawl-microsoft-azure-synapse-analytics)
* [Microsoft SQL Server](/product/connections/how-tos/mine-queries-through-s3)
* [Snowflake](/product/connections/how-tos/mine-queries-through-s3)
* [Teradata](/product/connections/how-tos/mine-queries-through-s3)

Kubernetes\-based offline extraction[â](#kubernetes-based-offline-extraction "Direct link to Kubernetes-based offline extraction")
------------------------------------------------------------------------------------------------------------------------------------

Refer to [How to connect on\-premises databases to Kubernetes](/apps/connectors/database/on-premises-databases/how-tos/connect-on-premises-databases-to-kubernetes), and then request sample ConfigMap and CronJob files for the following supported SQL connectors:

* Microsoft SQL Server
* MySQL
* Oracle
* PostgreSQL
**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousWhat is the crawler logic for a deprecated asset?](/product/connections/concepts/what-is-the-crawler-logic-for-a-deprecated-asset)[NextConnectors and capabilities](/product/connections/references/connectors-and-capabilities)

Copyright Â© 2025 Atlan Pte. Ltd.

