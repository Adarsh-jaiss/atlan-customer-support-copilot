# Source URL
https://docs.atlan.com/product/connections/references/openlineage-configuration-and-facets

================================================================================

<!--
canonical: https://docs.atlan.com/product/connections/references/openlineage-configuration-and-facets
link-alternate: https://docs.atlan.com/product/connections/references/openlineage-configuration-and-facets
meta-description: Learn about openlineage configuration and facets.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about openlineage configuration and facets.
meta-og-locale: en
meta-og-title: OpenLineage configuration and facets | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/connections/references/openlineage-configuration-and-facets
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: OpenLineage configuration and facets | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

OpenLineage configuration and facets
====================================

[OpenLineage](https://openlineage.io/docs) is a lineage metadata extraction library that you can install in a target application such as [Apache Airflow](https://openlineage.io/docs/integrations/airflow/usage/) or [Apache Spark](https://openlineage.io/docs/integrations/spark/configuration/spark_conf/). Once you have installed OpenLineage, you can configure the target application to integrate with Atlan. This will allow Atlan to receive OpenLineage events and catalog your assets from supported sources. You will neither have to clone a GitHub repository nor make any code changes to your DAGs.

To install OpenLineage, refer to the documentation for supported sources:

* [Apache Airflow](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage#configure-the-integration-in-apache-airflowopenlineage)
* [Amazon MWAA](/apps/connectors/lineage/amazon-mwaa-openlineage/how-tos/integrate-amazon-mwaa-openlineage)
* [Apache Spark](/apps/connectors/lineage/apache-spark-openlineage/how-tos/integrate-apache-spark-openlineage#configure-the-integration-in-apache-spark)
* [Astronomer](/apps/connectors/lineage/astronomer-openlineage/how-tos/integrate-astronomer-openlineage)
* [Google Cloud Composer](/apps/connectors/lineage/google-cloud-composer-openlineage/how-tos/integrate-google-cloud-composer-openlineage)

**Did you know?**To add lineage support to sources other than the ones listed above, you can use OpenLineage's extensible specification. Refer to our [developer documentation](https://developer.atlan.com/references/specs/openlineage/) to learn more.

Example[â](#example "Direct link to Example")
-----------------------------------------------

### Apache Airflow[â](#apache-airflow "Direct link to Apache Airflow")

Once you have configured a supported Apache Airflow distribution, you can run a sample DAG to confirm that your assets are being crawled in Atlan. Although Atlan strongly recommends running the [preflight check DAG](/apps/connectors/lineage/apache-airflow-openlineage/references/preflight-checks-for-apache-airflow) to test your Apache Airflow connection, you can also use the example DAG below to verify your setup.

For example:

```
import json  
from pendulum import datetime  
  
from airflow.decorators import (  
    dag,  
    task,  
)  
@dag(  
    dag_id="example_dag_basic",  
    schedule="@once",  
    start_date=datetime(2023, 1, 1),  
    catchup=False,  
    tags=["example"],  
)  
def example_dag_basic():  
  
    @task()  
    def extract():  
        data_string = '{"1001": 301.27, "1002": 433.21, "1003": 502.22}'  
  
        order_data_dict = json.loads(data_string)  
        return order_data_dict  
  
    @task(multiple_outputs=True)  
    def transform(order_data_dict: dict):  
        total_order_value = 0  
  
        for value in order_data_dict.values():  
            total_order_value += value  
  
        return {"total_order_value": total_order_value}  
  
    @task()  
    def load(total_order_value: float):  
        print(f"Total order value is: {total_order_value:.2f}")  
  
    order_data = extract()  
    order_summary = transform(order_data)  
    load(order_summary["total_order_value"])  
  
  
example_dag_basic()  

```

### Apache Spark[â](#apache-spark "Direct link to Apache Spark")

Once you have configured Apache Spark, you can run a sample Spark job to confirm that your assets are being crawled in Atlan.

For example:

```
from pyspark.sql import SparkSession  
from pyspark.sql.functions import col  
  
# Create a Spark session and configure the spark properties  
spark = (SparkSession.builder.master('local')  
         .appName('data_pipeline_sample')  
         .getOrCreate())  
  
snowflake_options = {  
    "sfURL": ".snowflakecomputing.com",  
    "sfUser": "",  
    "sfPassword": "",  
    "sfDatabase": "",  
    "sfWarehouse": "",  
    "sfSchema": "",  
    "sfRole": "",  
}  
  
instacart_df = spark.read \  
    .format("snowflake") \  
    .options(**snowflake_options) \  
    .option("dbtable", "table1") \  
    .load()  
  
filtered_df = instacart_df.filter(col('"order_id"') == '123456')  
  
filtered_df.write \  
    .format("snowflake") \  
    .options(**snowflake_options) \  
    .option("dbtable", "table2") \  
    .mode("append") \  
    .save()  
  
spark.stop()  

```

Supported facets[â](#supported-facets "Direct link to Supported facets")
--------------------------------------------------------------------------

An OpenLineage event will contain the following object model: dataset, job, and run entities. In addition, OpenLineage supports [facets](https://openlineage.io/docs/spec/facets/) to provide contextual metadata for events.

Atlan currently only processes the following facets for OpenLineage events:

### Apache Airflow[â](#apache-airflow-1 "Direct link to Apache Airflow")

| OpenLineage facet | Description | Where in Atlan |
| --- | --- | --- |
| `job.facets.jobType` | Apache Airflow asset type (task or DAG) | asset profile, preview, and sidebar |
| `run.facets.airflow` | DAG details, including runs, tasks, owner, and task group | asset profile, overview sidebar, and pipeline graph |
| `run.facets.airflow_version` | Apache Airflow version and DAG metadata | API only |
| `run.facets.parentRun` | parent DAG for tasks | API only |
| `run.facets.processing_engine` | Apache Airflow and OpenLineage versions | API only |
| `outputs.facets.columnLineage` | fetches column lineage | lineage graph |

### Apache Spark[â](#apache-spark-1 "Direct link to Apache Spark")

| OpenLineage facet | Description | Where in Atlan |
| --- | --- | --- |
| `eventType` | job run status | overview sidebar |
| `eventTime` | job start and end time | asset profile |
| `job.namespace` | connection name | asset profile and overview sidebar |
| `job.name` | Spark job name | asset name |
| `run.runId` | Spark job name run ID | API only |
| `run.facets.spark_version` | Spark version | overview sidebar |
| `run.facets.spark_properties` | OpenLineage package version | API only |
| `run.facets.processing_engine` | Spark cluster details | API only |
| `inputs.facets.name` | links input facets | related assets and pipeline graph |
| `outputs.facets.name` | links output facets | related assets and pipeline graph |
| `inputs.facets.namespace` | input type | related assets and pipeline graph |
| `outputs.facets.namespace` | output type | related assets and pipeline graph |
| `inputs.facets.symlinks` | retrieves logical entity | API only |
| `outputs.facets.symlinks` | retrieves logical entity | API only |
| `outputs.facets.columnLineage` | fetches column lineage | lineage graph |

**Tags:*** [lineage](/tags/lineage)
* [data\-lineage](/tags/data-lineage)
* [impact\-analysis](/tags/impact-analysis)
* [integration](/tags/integration)
* [connectors](/tags/connectors)
* [catalog](/tags/catalog)
* [metadata](/tags/metadata)
* [discovery](/tags/discovery)

[PreviousConnectors and capabilities](/product/connections/references/connectors-and-capabilities)[NextSupported sources](/product/connections/references/supported-sources)

Copyright Â© 2025 Atlan Pte. Ltd.

