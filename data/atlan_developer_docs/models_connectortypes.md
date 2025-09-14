# Source URL
https://developer.atlan.com/models/connectortypes/

================================================================================

<!--
canonical: https://developer.atlan.com/models/connectortypes/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/connectortypes.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Connector types and icons - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/connectortypes/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/connectortypes.png
meta-twitter:title: Connector types and icons - Developer
meta-viewport: width=device-width,initial-scale=1
title: Connector types and icons - Developer
-->

[Skip to content](#connector-types-and-icons) Developer Connector types and icons Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Connector types and icons[¶](#connector-types-and-icons "Permanent link")
=========================================================================

Following are all the available connector types (including their icons) for assets in Atlan.

These determine the icons used for assets in Atlan

The value you set for the connector determines the icons you will see for all assets contained within that connection in Atlan.

**[CustomEntity](../custom/) assets? Define custom connector types dynamically**

If you're working with [CustomEntity](../custom/) assets, the connector type may vary depending on the user — it could be any valid string. To support this, we've added a way to dynamically extend the `AtlanConnectorType` enum in the SDK. This enables support for custom connectors without needing changes to the core SDK.

For example, to create a new custom connector called `"my-custom"`:

Python

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")

| atlan\_custom\_connector.py | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection from pyatlan.model.enums import AtlanConnectionCategory, AtlanConnectorType  # (1) Define a new custom connector type AtlanConnectorType.CREATE_CUSTOM(     name="MY_CUSTOM",      value="my-custom",      category=AtlanConnectionCategory.API )  # Initialize client and create connection client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin")  connection = Connection.creator(     client=client,     name="test-custom",     connector_type=AtlanConnectorType.MY_CUSTOM,  # (2)     admin_roles=[admin_role_guid], )  response = client.asset.save(connection)  ``` |

1. Use `AtlanConnectorType.CREATE_CUSTOM()` to define your custom connector. Provide:
    * `name`: Enum\-style name to use in your code (eg: `MY_CUSTOM`)
    * `value`: Actual string sent in API calls (eg: `my-custom`)
    * `category`: (Optional) Defaults to `AtlanConnectionCategory.CUSTOM` if not provided.
2. After defining the custom connector, you can refer to it using `AtlanConnectorType.MY_CUSTOM` throughout your script, just like any built\-in connector type.

Java

Python

Raw REST API

```
AtlanConnectorType.ABINITIO

```

```
AtlanConnectorType.ABINITIO

```

```
{
  "attributes": {
    "connectorName": "abinitio"
  }
}

```

Adobe Experience Manager[¶](#adobe-experience-manager "Permanent link")
-----------------------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ADOBE_EXPERIENCE_MANAGER

```

```
AtlanConnectorType.ADOBE_EXPERIENCE_MANAGER

```

```
{
  "attributes": {
    "connectorName": "adobe-experience-manager"
  }
}

```

Adobe Target[¶](#adobe-target "Permanent link")
-----------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ADOBE_TARGET

```

```
AtlanConnectorType.ADOBE_TARGET

```

```
{
  "attributes": {
    "connectorName": "adobe-target"
  }
}

```

Airflow[¶](#airflow "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AIRFLOW

```

```
AtlanConnectorType.AIRFLOW

```

```
{
  "attributes": {
    "connectorName": "airflow"
  }
}

```

Aiven Kafka[¶](#aiven-kafka "Permanent link")
---------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AIVEN_KAFKA

```

```
AtlanConnectorType.AIVEN_KAFKA

```

```
{
  "attributes": {
    "connectorName": "aiven-kafka"
  }
}

```

AlloyDB[¶](#alloydb "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ALLOYDB

```

```
AtlanConnectorType.ALLOYDB

```

```
{
  "attributes": {
    "connectorName": "alloydb"
  }
}

```

Alteryx[¶](#alteryx "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ALTERYX

```

```
AtlanConnectorType.ALTERYX

```

```
{
  "attributes": {
    "connectorName": "alteryx"
  }
}

```

Anaplan[¶](#anaplan "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ANAPLAN

```

```
AtlanConnectorType.ANAPLAN

```

```
{
  "attributes": {
    "connectorName": "anaplan"
  }
}

```

Apache Pulsar[¶](#apache-pulsar "Permanent link")
-------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.APACHE_PULSAR

```

```
AtlanConnectorType.APACHE_PULSAR

```

```
{
  "attributes": {
    "connectorName": "apache-pulsar"
  }
}

```

Apache Kafka[¶](#apache-kafka "Permanent link")
-----------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.APACHE_KAFKA

```

```
AtlanConnectorType.APACHE_KAFKA

```

```
{
  "attributes": {
    "connectorName": "apache-kafka"
  }
}

```

API[¶](#api "Permanent link")
-----------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.API

```

```
AtlanConnectorType.API

```

```
{
  "attributes": {
    "connectorName": "api"
  }
}

```

App[¶](#app "Permanent link")
-----------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.APP

```

```
AtlanConnectorType.APP

```

```
{
  "attributes": {
    "connectorName": "app"
  }
}

```

Astronomer Airflow[¶](#astronomer-airflow "Permanent link")
-----------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AIRFLOW_ASTRONOMER

```

```
AtlanConnectorType.AIRFLOW_ASTRONOMER

```

```
{
  "attributes": {
    "connectorName": "airflow-astronomer"
  }
}

```

Athena[¶](#athena "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ATHENA

```

```
AtlanConnectorType.ATHENA

```

```
{
  "attributes": {
    "connectorName": "athena"
  }
}

```

Aurora[¶](#aurora "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AURORA

```

```
AtlanConnectorType.AURORA

```

```
{
  "attributes": {
    "connectorName": "aurora"
  }
}

```

AWS Batch[¶](#aws-batch "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AWS_BATCH

```

```
AtlanConnectorType.AWS_BATCH

```

```
{
  "attributes": {
    "connectorName": "aws-batch"
  }
}

```

AWS ECS[¶](#aws-ecs "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AWS_ECS

```

```
AtlanConnectorType.AWS_ECS

```

```
{
  "attributes": {
    "connectorName": "aws-ecs"
  }
}

```

AWS Lambda[¶](#aws-lambda "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AWS_LAMBDA

```

```
AtlanConnectorType.AWS_LAMBDA

```

```
{
  "attributes": {
    "connectorName": "aws-lambda"
  }
}

```

AWS Sagemaker[¶](#aws-sagemaker "Permanent link")
-------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AWS_SAGEMAKER

```

```
AtlanConnectorType.AWS_SAGEMAKER

```

```
{
  "attributes": {
    "connectorName": "aws-sagemaker"
  }
}

```

AWS Greengrass[¶](#aws-greengrass "Permanent link")
---------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AWS_GREENGRASS

```

```
AtlanConnectorType.AWS_GREENGRASS

```

```
{
  "attributes": {
    "connectorName": "aws-greengrass"
  }
}

```

AWS SiteWise[¶](#aws-sitewise "Permanent link")
-----------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AWS_SITE_WISE

```

```
AtlanConnectorType.AWS_SITE_WISE

```

```
{
  "attributes": {
    "connectorName": "aws-sitewise"
  }
}

```

Azure Analysis Services[¶](#azure-analysis-services "Permanent link")
---------------------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AZURE_ANALYSIS_SERVICES

```

```
AtlanConnectorType.AZURE_ANALYSIS_SERVICES

```

```
{
  "attributes": {
    "connectorName": "azure-analysis-services"
  }
}

```

Azure Active Directory[¶](#azure-active-directory "Permanent link")
-------------------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AZURE_ACTIVE_DIRECTORY

```

```
AtlanConnectorType.AZURE_ACTIVE_DIRECTORY

```

```
{
  "attributes": {
    "connectorName": "azure-active-directory"
  }
}

```

Azure Cosmos DB[¶](#azure-cosmos-db "Permanent link")
-----------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AZURE_COSMOS_DB

```

```
AtlanConnectorType.AZURE_COSMOS_DB

```

```
{
  "attributes": {
    "connectorName": "azure-cosmos-db"
  }
}

```

Azure Data Lake Storage[¶](#azure-data-lake-storage "Permanent link")
---------------------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AZURE_DATA_LAKE

```

```
AtlanConnectorType.AZURE_DATA_LAKE

```

```
{
  "attributes": {
    "connectorName": "azure-data-lake"
  }
}

```

Azure Data Lake Storage[¶](#azure-data-lake-storage_1 "Permanent link")
-----------------------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ADLS

```

```
AtlanConnectorType.ADLS

```

```
{
  "attributes": {
    "connectorName": "adls"
  }
}

```

Azure Event Hub[¶](#azure-event-hub "Permanent link")
-----------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AZURE_EVENT_HUB

```

```
AtlanConnectorType.AZURE_EVENT_HUB

```

```
{
  "attributes": {
    "connectorName": "azure-event-hub"
  }
}

```

BigId[¶](#bigid "Permanent link")
---------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.BIGID

```

```
AtlanConnectorType.BIGID

```

```
{
  "attributes": {
    "connectorName": "bigid"
  }
}

```

BigQuery[¶](#bigquery "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.BIGQUERY

```

```
AtlanConnectorType.BIGQUERY

```

```
{
  "attributes": {
    "connectorName": "bigquery"
  }
}

```

Clari[¶](#clari "Permanent link")
---------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.CLARI

```

```
AtlanConnectorType.CLARI

```

```
{
  "attributes": {
    "connectorName": "clari"
  }
}

```

ClickHouse[¶](#clickhouse "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.CLICKHOUSE

```

```
AtlanConnectorType.CLICKHOUSE

```

```
{
  "attributes": {
    "connectorName": "clickhouse"
  }
}

```

Cloudera[¶](#cloudera "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.CLOUDERA_DATA_WAREHOUSE

```

```
AtlanConnectorType.CLOUDERA_DATA_WAREHOUSE

```

```
{
  "attributes": {
    "connectorName": "cloudera-data-warehouse"
  }
}

```

CockroachDB[¶](#cockroachdb "Permanent link")
---------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.COCKROACHDB

```

```
AtlanConnectorType.COCKROACHDB

```

```
{
  "attributes": {
    "connectorName": "cockroachdb"
  }
}

```

Confluent Kafka[¶](#confluent-kafka "Permanent link")
-----------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.CONFLUENT_KAFKA

```

```
AtlanConnectorType.CONFLUENT_KAFKA

```

```
{
  "attributes": {
    "connectorName": "confluent-kafka"
  }
}

```

Confluent Schema Registry[¶](#confluent-schema-registry "Permanent link")
-------------------------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.CONFLUENT_SCHEMA_REGISTRY

```

```
AtlanConnectorType.CONFLUENT_SCHEMA_REGISTRY

```

```
{
  "attributes": {
    "connectorName": "confluent-schema-registry"
  }
}

```

CrateDB[¶](#cratedb "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.CRATEDB

```

```
AtlanConnectorType.CRATEDB

```

```
{
  "attributes": {
    "connectorName": "cratedb"
  }
}

```

Custom[¶](#custom "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.CUSTOM

```

```
AtlanConnectorType.CUSTOM

```

```
{
  "attributes": {
    "connectorName": "custom"
  }
}

```

Databricks[¶](#databricks "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.DATABRICKS

```

```
AtlanConnectorType.DATABRICKS

```

```
{
  "attributes": {
    "connectorName": "databricks"
  }
}

```

Dataflow[¶](#dataflow "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.DATAFLOW

```

```
AtlanConnectorType.DATAFLOW

```

```
{
  "attributes": {
    "connectorName": "dataflow"
  }
}

```

Dataverse[¶](#dataverse "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.DATAVERSE

```

```
AtlanConnectorType.DATAVERSE

```

```
{
  "attributes": {
    "connectorName": "dataverse"
  }
}

```

dbt[¶](#dbt "Permanent link")
-----------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.DBT

```

```
AtlanConnectorType.DBT

```

```
{
  "attributes": {
    "connectorName": "dbt"
  }
}

```

Delta Lake[¶](#delta-lake "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.DELTA_LAKE

```

```
AtlanConnectorType.DELTA_LAKE

```

```
{
  "attributes": {
    "connectorName": "delta-lake"
  }
}

```

DocumentDB[¶](#documentdb "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.DOCUMENTDB

```

```
AtlanConnectorType.DOCUMENTDB

```

```
{
  "attributes": {
    "connectorName": "documentdb"
  }
}

```

Google Cloud Composer Airflow[¶](#google-cloud-composer-airflow "Permanent link")
---------------------------------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AIRFLOW_CLOUD_COMPOSER

```

```
AtlanConnectorType.AIRFLOW_CLOUD_COMPOSER

```

```
{
  "attributes": {
    "connectorName": "airflow-cloud-composer"
  }
}

```

Google Data Studio[¶](#google-data-studio "Permanent link")
-----------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.DATASTUDIO

```

```
AtlanConnectorType.DATASTUDIO

```

```
{
  "attributes": {
    "connectorName": "datastudio"
  }
}

```

DynamoDB[¶](#dynamodb "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.DYNAMODB

```

```
AtlanConnectorType.DYNAMODB

```

```
{
  "attributes": {
    "connectorName": "dynamodb"
  }
}

```

Firebird[¶](#firebird "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.FIREBIRD

```

```
AtlanConnectorType.FIREBIRD

```

```
{
  "attributes": {
    "connectorName": "firebird"
  }
}

```

Firebolt[¶](#firebolt "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.FIREBOLT

```

```
AtlanConnectorType.FIREBOLT

```

```
{
  "attributes": {
    "connectorName": "firebolt"
  }
}

```

Fivetran[¶](#fivetran "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.FIVETRAN

```

```
AtlanConnectorType.FIVETRAN

```

```
{
  "attributes": {
    "connectorName": "fivetran"
  }
}

```

Gainsight[¶](#gainsight "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.GAINSIGHT

```

```
AtlanConnectorType.GAINSIGHT

```

```
{
  "attributes": {
    "connectorName": "gainsight"
  }
}

```

Glue[¶](#glue "Permanent link")
-------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.GLUE

```

```
AtlanConnectorType.GLUE

```

```
{
  "attributes": {
    "connectorName": "glue"
  }
}

```

Google Cloud Storage[¶](#google-cloud-storage "Permanent link")
---------------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.GCS

```

```
AtlanConnectorType.GCS

```

```
{
  "attributes": {
    "connectorName": "gcs"
  }
}

```

GraphQL[¶](#graphql "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.GRAPHQL

```

```
AtlanConnectorType.GRAPHQL

```

```
{
  "attributes": {
    "connectorName": "graphql"
  }
}

```

Greenplum[¶](#greenplum "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.GREENPLUM

```

```
AtlanConnectorType.GREENPLUM

```

```
{
  "attributes": {
    "connectorName": "greenplum"
  }
}

```

Hex[¶](#hex "Permanent link")
-----------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.HEX

```

```
AtlanConnectorType.HEX

```

```
{
  "attributes": {
    "connectorName": "hex"
  }
}

```

Hive[¶](#hive "Permanent link")
-------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.HIVE

```

```
AtlanConnectorType.HIVE

```

```
{
  "attributes": {
    "connectorName": "hive"
  }
}

```

Iceberg[¶](#iceberg "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ICEBERG

```

```
AtlanConnectorType.ICEBERG

```

```
{
  "attributes": {
    "connectorName": "iceberg"
  }
}

```

IICS[¶](#iics "Permanent link")
-------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.IICS

```

```
AtlanConnectorType.IICS

```

```
{
  "attributes": {
    "connectorName": "iics"
  }
}

```

Impala[¶](#impala "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.IMPALA

```

```
AtlanConnectorType.IMPALA

```

```
{
  "attributes": {
    "connectorName": "impala"
  }
}

```

IBM Informix[¶](#ibm-informix "Permanent link")
-----------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.IBM_INFORMIX

```

```
AtlanConnectorType.IBM_INFORMIX

```

```
{
  "attributes": {
    "connectorName": "ibm-informix"
  }
}

```

IBM DB2[¶](#ibm-db2 "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.IBM_DB2

```

```
AtlanConnectorType.IBM_DB2

```

```
{
  "attributes": {
    "connectorName": "ibmdb2"
  }
}

```

inRiver[¶](#inriver "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.INRIVER

```

```
AtlanConnectorType.INRIVER

```

```
{
  "attributes": {
    "connectorName": "inriver"
  }
}

```

Kafka[¶](#kafka "Permanent link")
---------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.KAFKA

```

```
AtlanConnectorType.KAFKA

```

```
{
  "attributes": {
    "connectorName": "kafka"
  }
}

```

Kx[¶](#kx "Permanent link")
---------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.KX

```

```
AtlanConnectorType.KX

```

```
{
  "attributes": {
    "connectorName": "kx"
  }
}

```

Looker[¶](#looker "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.LOOKER

```

```
AtlanConnectorType.LOOKER

```

```
{
  "attributes": {
    "connectorName": "looker"
  }
}

```

Metabase[¶](#metabase "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.METABASE

```

```
AtlanConnectorType.METABASE

```

```
{
  "attributes": {
    "connectorName": "metabase"
  }
}

```

MariaDB[¶](#mariadb "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MARIADB

```

```
AtlanConnectorType.MARIADB

```

```
{
  "attributes": {
    "connectorName": "mariadb"
  }
}

```

Marketo[¶](#marketo "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MARKETO

```

```
AtlanConnectorType.MARKETO

```

```
{
  "attributes": {
    "connectorName": "marketo"
  }
}

```

Matillion[¶](#matillion "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MATILLION

```

```
AtlanConnectorType.MATILLION

```

```
{
  "attributes": {
    "connectorName": "matillion"
  }
}

```

Mini SQL (mSQL)[¶](#mini-sql-msql "Permanent link")
---------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MINISQL

```

```
AtlanConnectorType.MINISQL

```

```
{
  "attributes": {
    "connectorName": "minisql"
  }
}

```

Mode[¶](#mode "Permanent link")
-------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MODE

```

```
AtlanConnectorType.MODE

```

```
{
  "attributes": {
    "connectorName": "mode"
  }
}

```

MonetDB[¶](#monetdb "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MONETDB

```

```
AtlanConnectorType.MONETDB

```

```
{
  "attributes": {
    "connectorName": "monetdb"
  }
}

```

MongoDB[¶](#mongodb "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MONGODB

```

```
AtlanConnectorType.MONGODB

```

```
{
  "attributes": {
    "connectorName": "mongodb"
  }
}

```

Monte Carlo[¶](#monte-carlo "Permanent link")
---------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MONTE_CARLO

```

```
AtlanConnectorType.MONTE_CARLO

```

```
{
  "attributes": {
    "connectorName": "monte-carlo"
  }
}

```

mParticle[¶](#mparticle "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MPARTICLE

```

```
AtlanConnectorType.MPARTICLE

```

```
{
  "attributes": {
    "connectorName": "mparticle"
  }
}

```

Mulesoft[¶](#mulesoft "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MULESOFT

```

```
AtlanConnectorType.MULESOFT

```

```
{
  "attributes": {
    "connectorName": "mulesoft"
  }
}

```

MWAA Airflow[¶](#mwaa-airflow "Permanent link")
-----------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.AIRFLOW_MWAA

```

```
AtlanConnectorType.AIRFLOW_MWAA

```

```
{
  "attributes": {
    "connectorName": "airflow-mwaa"
  }
}

```

MySQL[¶](#mysql "Permanent link")
---------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MYSQL

```

```
AtlanConnectorType.MYSQL

```

```
{
  "attributes": {
    "connectorName": "mysql"
  }
}

```

Netezza[¶](#netezza "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.NETEZZA

```

```
AtlanConnectorType.NETEZZA

```

```
{
  "attributes": {
    "connectorName": "netezza"
  }
}

```

Netsuite[¶](#netsuite "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.NETSUITE

```

```
AtlanConnectorType.NETSUITE

```

```
{
  "attributes": {
    "connectorName": "netsuite"
  }
}

```

OpenLineage[¶](#openlineage "Permanent link")
---------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.OPENLINEAGE

```

```
AtlanConnectorType.OPENLINEAGE

```

```
{
  "attributes": {
    "connectorName": "openlineage"
  }
}

```

Oracle[¶](#oracle "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ORACLE

```

```
AtlanConnectorType.ORACLE

```

```
{
  "attributes": {
    "connectorName": "oracle"
  }
}

```

Oracle TimesTen[¶](#oracle-timesten "Permanent link")
-----------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ORACLE_TIMESTEN

```

```
AtlanConnectorType.ORACLE_TIMESTEN

```

```
{
  "attributes": {
    "connectorName": "oracle-timesten"
  }
}

```

Percona[¶](#percona "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.PERCONA_SERVER

```

```
AtlanConnectorType.PERCONA_SERVER

```

```
{
  "attributes": {
    "connectorName": "percona-server"
  }
}

```

Postgres[¶](#postgres "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.POSTGRES

```

```
AtlanConnectorType.POSTGRES

```

```
{
  "attributes": {
    "connectorName": "postgres"
  }
}

```

Power BI[¶](#power-bi "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.POWERBI

```

```
AtlanConnectorType.POWERBI

```

```
{
  "attributes": {
    "connectorName": "powerbi"
  }
}

```

Prefect[¶](#prefect "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.PREFECT

```

```
AtlanConnectorType.PREFECT

```

```
{
  "attributes": {
    "connectorName": "prefect"
  }
}

```

Preset[¶](#preset "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.PRESET

```

```
AtlanConnectorType.PRESET

```

```
{
  "attributes": {
    "connectorName": "preset"
  }
}

```

Presto[¶](#presto "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.PRESTO

```

```
AtlanConnectorType.PRESTO

```

```
{
  "attributes": {
    "connectorName": "presto"
  }
}

```

Qlik[¶](#qlik "Permanent link")
-------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.QLIKSENSE

```

```
AtlanConnectorType.QLIKSENSE

```

```
{
  "attributes": {
    "connectorName": "qlik-sense"
  }
}

```

QuickSight[¶](#quicksight "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.QUICKSIGHT

```

```
AtlanConnectorType.QUICKSIGHT

```

```
{
  "attributes": {
    "connectorName": "quicksight"
  }
}

```

RDS[¶](#rds "Permanent link")
-----------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.RDS

```

```
AtlanConnectorType.RDS

```

```
{
  "attributes": {
    "connectorName": "rds"
  }
}

```

Redash[¶](#redash "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.REDASH

```

```
AtlanConnectorType.REDASH

```

```
{
  "attributes": {
    "connectorName": "redash"
  }
}

```

Redis[¶](#redis "Permanent link")
---------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.REDIS

```

```
AtlanConnectorType.REDIS

```

```
{
  "attributes": {
    "connectorName": "redis"
  }
}

```

Redpanda Kafka[¶](#redpanda-kafka "Permanent link")
---------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.REDPANDA_KAFKA

```

```
AtlanConnectorType.REDPANDA_KAFKA

```

```
{
  "attributes": {
    "connectorName": "redpanda-kafka"
  }
}

```

Redshift[¶](#redshift "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.REDSHIFT

```

```
AtlanConnectorType.REDSHIFT

```

```
{
  "attributes": {
    "connectorName": "redshift"
  }
}

```

Rockset[¶](#rockset "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.ROCKSET

```

```
AtlanConnectorType.ROCKSET

```

```
{
  "attributes": {
    "connectorName": "rockset"
  }
}

```

S3[¶](#s3 "Permanent link")
---------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.S3

```

```
AtlanConnectorType.S3

```

```
{
  "attributes": {
    "connectorName": "s3"
  }
}

```

Salesforce[¶](#salesforce "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SALESFORCE

```

```
AtlanConnectorType.SALESFORCE

```

```
{
  "attributes": {
    "connectorName": "salesforce"
  }
}

```

SAP HANA[¶](#sap-hana "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SAP_HANA

```

```
AtlanConnectorType.SAP_HANA

```

```
{
  "attributes": {
    "connectorName": "sap-hana"
  }
}

```

SAP IQ[¶](#sap-iq "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SAP_IQ

```

```
AtlanConnectorType.SAP_IQ

```

```
{
  "attributes": {
    "connectorName": "sap-iq"
  }
}

```

SAP MaxDB[¶](#sap-maxdb "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SAP_MAXDB

```

```
AtlanConnectorType.SAP_MAXDB

```

```
{
  "attributes": {
    "connectorName": "sap-maxdb"
  }
}

```

SAP Gigya[¶](#sap-gigya "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SAP_GIGYA

```

```
AtlanConnectorType.SAP_GIGYA

```

```
{
  "attributes": {
    "connectorName": "sap-gigya"
  }
}

```

SAP Hybris[¶](#sap-hybris "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SAP_HYBRIS

```

```
AtlanConnectorType.SAP_HYBRIS

```

```
{
  "attributes": {
    "connectorName": "sap-hybris"
  }
}

```

SAP S/4HANA[¶](#sap-s4hana "Permanent link")
--------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SAP_S4_HANA

```

```
AtlanConnectorType.SAP_S4_HANA

```

```
{
  "attributes": {
    "connectorName": "sap-s4-hana"
  }
}

```

SAP SQL[¶](#sap-sql "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SAP_SQL

```

```
AtlanConnectorType.SAP_SQL

```

```
{
  "attributes": {
    "connectorName": "sap-sql"
  }
}

```

SHARED DRIVE[¶](#shared-drive "Permanent link")
-----------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SHARED_DRIVE

```

```
AtlanConnectorType.SHARED_DRIVE

```

```
{
  "attributes": {
    "connectorName": "shared-drive"
  }
}

```

SHARE POINT[¶](#share-point "Permanent link")
---------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SHARE_POINT

```

```
AtlanConnectorType.SHARE_POINT

```

```
{
  "attributes": {
    "connectorName": "share-point"
  }
}

```

Sigma[¶](#sigma "Permanent link")
---------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SIGMA

```

```
AtlanConnectorType.SIGMA

```

```
{
  "attributes": {
    "connectorName": "sigma"
  }
}

```

SingleStore[¶](#singlestore "Permanent link")
---------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SINGLESTORE

```

```
AtlanConnectorType.SINGLESTORE

```

```
{
  "attributes": {
    "connectorName": "singlestore"
  }
}

```

Sisense[¶](#sisense "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SISENSE

```

```
AtlanConnectorType.SISENSE

```

```
{
  "attributes": {
    "connectorName": "sisense"
  }
}

```

Snowflake[¶](#snowflake "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SNOWFLAKE

```

```
AtlanConnectorType.SNOWFLAKE

```

```
{
  "attributes": {
    "connectorName": "snowflake"
  }
}

```

Soda[¶](#soda "Permanent link")
-------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SODA

```

```
AtlanConnectorType.SODA

```

```
{
  "attributes": {
    "connectorName": "soda"
  }
}

```

Spark[¶](#spark "Permanent link")
---------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SPARK

```

```
AtlanConnectorType.SPARK

```

```
{
  "attributes": {
    "connectorName": "spark"
  }
}

```

Spark SQL[¶](#spark-sql "Permanent link")
-----------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SPARK_SQL

```

```
AtlanConnectorType.SPARK_SQL

```

```
{
  "attributes": {
    "connectorName": "spark-sql"
  }
}

```

SQLite[¶](#sqlite "Permanent link")
-----------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SQLITE

```

```
AtlanConnectorType.SQLITE

```

```
{
  "attributes": {
    "connectorName": "sqlite"
  }
}

```

SQL Server[¶](#sql-server "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.MSSQL

```

```
AtlanConnectorType.MSSQL

```

```
{
  "attributes": {
    "connectorName": "mssql"
  }
}

```

Starburst Galaxy[¶](#starburst-galaxy "Permanent link")
-------------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.STARBURST_GALAXY

```

```
AtlanConnectorType.STARBURST_GALAXY

```

```
{
  "attributes": {
    "connectorName": "starburst-galaxy"
  }
}

```

Superset[¶](#superset "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SUPERSET

```

```
AtlanConnectorType.SUPERSET

```

```
{
  "attributes": {
    "connectorName": "superset"
  }
}

```

Synapse[¶](#synapse "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.SYNAPSE

```

```
AtlanConnectorType.SYNAPSE

```

```
{
  "attributes": {
    "connectorName": "synapse"
  }
}

```

Tableau[¶](#tableau "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.TABLEAU

```

```
AtlanConnectorType.TABLEAU

```

```
{
  "attributes": {
    "connectorName": "tableau"
  }
}

```

Teradata[¶](#teradata "Permanent link")
---------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.TERADATA

```

```
AtlanConnectorType.TERADATA

```

```
{
  "attributes": {
    "connectorName": "teradata"
  }
}

```

ThoughtSpot[¶](#thoughtspot "Permanent link")
---------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.THOUGHTSPOT

```

```
AtlanConnectorType.THOUGHTSPOT

```

```
{
  "attributes": {
    "connectorName": "thoughtspot"
  }
}

```

Treasure Data[¶](#treasure-data "Permanent link")
-------------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.TREASURE_DATA

```

```
AtlanConnectorType.TREASURE_DATA

```

```
{
  "attributes": {
    "connectorName": "treasure-data"
  }
}

```

Vertica[¶](#vertica "Permanent link")
-------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.VERTICA

```

```
AtlanConnectorType.VERTICA

```

```
{
  "attributes": {
    "connectorName": "vertica"
  }
}

```

YugabyteDB[¶](#yugabytedb "Permanent link")
-------------------------------------------

Java

Python

Raw REST API

```
AtlanConnectorType.YUGABYTEDB

```

```
AtlanConnectorType.YUGABYTEDB

```

```
{
  "attributes": {
    "connectorName": "yugabytedb"
  }
}

```

---

2023\-05\-092025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/connectortypes/) to provide us with more information. 

Back to top

[Previous Manage Data Quality rules](../../patterns/create/dq_rules/) [Next Data mesh](../../snippets/datamesh/) 

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

