# Source URL
https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/how-tos/implement-openlineage-in-airflow-operators

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/how-tos/implement-openlineage-in-airflow-operators
link-alternate: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/how-tos/implement-openlineage-in-airflow-operators
meta-description: If you're using an Airflow operator supported by OpenLineage, the OpenLineage events will contain input and output details. This means that you do not have to modify your current DAG implementation and Atlan will be able to generate data lineage.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: If you're using an Airflow operator supported by OpenLineage, the OpenLineage events will contain input and output details. This means that you do not have to modify your current DAG implementation and Atlan will be able to generate data lineage.
meta-og-locale: en
meta-og-title: Implement OpenLineage in Airflow operators | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/how-tos/implement-openlineage-in-airflow-operators
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Implement OpenLineage in Airflow operators | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Implement OpenLineage in Airflow operators
==========================================

This document helps you learn how to implement OpenLineage support for any Airflow operator. To implement OpenLineage support, consider the following types of operators:

Supported operators[â](#supported-operators "Direct link to Supported operators")
-----------------------------------------------------------------------------------

If you're using an Airflow operator supported by OpenLineage, the OpenLineage events will contain input and output details. This means that you do not have to modify your current DAG implementation and Atlan will be able to generate data lineage.

To install OpenLineage, refer to the documentation for supported sources:

* [Apache Airflow](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage)
* [Amazon MWAA](/apps/connectors/lineage/amazon-mwaa-openlineage/how-tos/integrate-amazon-mwaa-openlineage)
* [Astronomer](/apps/connectors/lineage/astronomer-openlineage/how-tos/integrate-astronomer-openlineage)
* [Google Cloud Composer](/apps/connectors/lineage/google-cloud-composer-openlineage/how-tos/integrate-google-cloud-composer-openlineage)

For Airflow operators supported for OpenLineage extraction, you can refer to [Airflow's Supported operators documentation](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/supported_classes.html). This documentation is automatically updated when OpenLineage support is added to any operator from a provider package. You have to make sure that you're using the latest version of the provider package. For more information, see the [recommended provider package versions for OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage/references/recommended-provider-package-versions).

Custom and unsupported operators[â](#custom-and-unsupported-operators "Direct link to Custom and unsupported operators")
--------------------------------------------------------------------------------------------------------------------------

If you're using a custom or an unsupported operator, your Airflow tasks will still emit OpenLineage events but may not include task\-specific metadata such as inputs and outputs, SQL query, and more. This may limit Atlan from being able to generate data lineage.

To implement OpenLineage support for custom and unsupported operators, refer to [Implementing OpenLineage in Operators documentation](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/developer.html). To help you understand the process, following is an example:

### Sample implementation[â](#sample-implementation "Direct link to Sample implementation")

This approach is recommended when working with your own operators, where you can directly implement OpenLineage methods. You can also refer to [OpenLineage documentation](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/developer.html#openlineage-methods) for more details.

To implement OpenLineage support for a custom or an unsupported operator:

1. Open the Operator class definition to which you want to add OpenLineage support.
2. Implement at least one of the following OpenLineage methods in the Operator class:
    * `get_openlineage_facets_on_start()`
    * `get_openlineage_facets_on_complete()`
3. The function should return datasets in the form of inputs and outputs with OpenLineage\-compliant dataset names. This allows an OpenLineage consumer such as Atlan to properly match dataset metadata collected from different sources. To learn more about naming conventions, refer to [OpenLineage documentation](https://openlineage.io/docs/spec/naming/).

### Example[â](#example "Direct link to Example")

Below is an example of a properly implemented `get_openlineage_facets_on_complete` method for the [GCSToGCSOperator](https://github.com/apache/airflow/blob/main/providers/src/airflow/providers/google/cloud/transfers/gcs_to_gcs.py).

In this example, since there is some level of processing included in the execute method with no relevant failure data, implementing this single method was sufficient.

```
def get_openlineage_facets_on_complete(self, task_instance):  
    """  
    Implementing _on_complete because execute method does preprocessing on internals.  
    This means we won't have to normalize self.source_object and self.source_objects,  
    destination bucket and so on.  
    """  
    from airflow.providers.common.compat.openlineage.facet import Dataset  
    from airflow.providers.openlineage.extractors import OperatorLineage  
    return OperatorLineage(  
        inputs=[  
            Dataset(namespace=f"gs://{self.source_bucket}", name=source)  
            for source in sorted(self.resolved_source_objects)  
        ],  
        outputs=[  
            Dataset(namespace=f"gs://{self.destination_bucket}", name=target)  
            for target in sorted(self.resolved_target_objects)  
        ],  
    )  

```

### Test implementation[â](#test-implementation "Direct link to Test implementation")

Atlan recommends that you test your changes locally by running Apache Airflow on local and setting the OpenLineage transport as the "console". You can use [Astronomer](https://www.astronomer.io/docs/learn/get-started-with-airflow/) on local as it is easy and quick, but feel free to use any other method.

To test your implementation locally:

1. Install the [Docker Desktop application](https://docs.docker.com/desktop/) in your system.
2. Install [Astro CLI](https://www.astronomer.io/docs/astro/cli/install-cli/).
3. In your root directory, create a directory for the following Astronomer files \- `mkdir astro-airflow` and `cd astro-airflow`.
4. Initialize an Astronomer project with the command `astro init`. This will create the required files in the directory you created above.
5. Open the `.env` file, add `AIRFLOW__OPENLINEAGE__TRANSPORT='{"type": "console"}'` to the file, and save it.
6. Add a test DAG with tasks using your custom operator with OpenLineage support to the `astro-airflow/dags` folder.
7. Start Astronomer Airflow with the command `astro dev start`.
8. Open `http://localhost:8080/home` after Astronomer Airflow has started.
9. Run the DAG that uses your custom operator with OpenLineage support.
10. Open DAG run task logs and locate the OpenLineage events in the logs.
11. (Optional) Format the JSON OpenLineage events in your IDE using this [online tool](https://jsonformatter.org/).
12. Ensure that the OpenLineage events contain input and output details. For example:

```
{  
    "eventTime": "2024-12-27T17:55:24.407459+00:00",  
    "eventType": "COMPLETE",  
    "inputs": [  
        {  
            "facets": {},  
            "name": "dir1/dir2/sample.csv",  
            "namespace": "s3a://atlan-test-bucket"  
        }  
    ],  
    ...  
    ...  
    "outputs": [  
        {  
            "facets": {},  
            "name": "wide_world_importers.astronomer_assets.sample",  
            "namespace": "databricks://dbc-8d941db8-48cd.cloud.databricks.com"  
        }  
    ],  
    ...  
    ...  
    "schemaURL": "https://openlineage.io/spec/2-0-2/OpenLineage.json#/$defs/RunEvent"  
}  

```
To view other implementation examples, refer to the following documentation:

* [GCSToGCSOperator](https://github.com/apache/airflow/blob/3dd5b0c7f72f43a7f317191881395f3de1be41f1/providers/src/airflow/providers/google/cloud/transfers/gcs_to_gcs.py#L547)
* [AzureBlobStorageToGCSOperator](https://github.com/apache/airflow/blob/3dd5b0c7f72f43a7f317191881395f3de1be41f1/providers/src/airflow/providers/google/cloud/transfers/azure_blob_to_gcs.py#L127)

### (Optional) Community contribution[â](#optional-community-contribution "Direct link to (Optional) Community contribution")

If you add OpenLineage support to an operator from the list of commonly used provider packages, consider updating the [Apache Airflow repository](https://github.com/apache/airflow). This allows other users to implement your code and improve it over time.

Here is an [example](https://github.com/apache/airflow/pull/45257) of a contribution to the community from a member of the Atlan team.

Frequently asked questions[â](#frequently-asked-questions "Direct link to Frequently asked questions")
--------------------------------------------------------------------------------------------------------

#### Can Atlan extract lineage from PythonOperator or BashOperator?[â](#can-atlan-extract-lineage-from-pythonoperator-or-bashoperator "Direct link to Can Atlan extract lineage from PythonOperator or BashOperator?")

OpenLineage supports both PythonOperator and BashOperator. However, these [core operators](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/supported_classes.html#core-operators) function as "black box" operators, capable of running any code. This in turn may limit the extent of lineage extraction. If the lineage generated is incomplete, Atlan suggests that you use [manually annotated lineage](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/developer.html#manually-annotated-lineage) (inlets and outlets).

#### Can Atlan extract lineage from KubernetesPodOperator?[â](#can-atlan-extract-lineage-from-kubernetespodoperator "Direct link to Can Atlan extract lineage from KubernetesPodOperator?")

OpenLineage neither supportsÂ[KubernetesPodOperator](https://airflow.apache.org/docs/apache-airflow-providers-cncf-kubernetes/stable/operators.html) nor a managed service such as [EksPodOperator](https://airflow.apache.org/docs/apache-airflow-providers-amazon/stable/operators/eks.html#howto-operator-ekspodoperator) or [GKEStartPodOperator](https://airflow.apache.org/docs/apache-airflow-providers-google/stable/operators/cloud/kubernetes_engine.html#howto-operator-gkestartpodoperator). This is because these operators also function as "black box" operators, capable of running any code. Limited execution details are exposed to the operator, thus limiting Atlan's ability to extract lineage. Atlan suggests that you use [manually annotated lineage](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/developer.html#manually-annotated-lineage) (inlets and outlets).

#### Are there other methods to implement OpenLineage support for lineage generation through events?[â](#are-there-other-methods-to-implement-openlineage-support-for-lineage-generation-through-events "Direct link to Are there other methods to implement OpenLineage support for lineage generation through events?")

Yes, you can use [manually annotated lineage](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/guides/developer.html#manually-annotated-lineage), which requires updating the DAG code. Keep in mind that this is a fallback measure, only recommended for very specific use cases, such as when it is impossible to extract lineage from the operator itself. Manually annotated lineage is also difficult to update and prone to manual errors.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)

[PreviousHow to integrate Apache Airflow/OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage)[NextWhat does Atlan crawl from Apache Airflow/OpenLineage?](/apps/connectors/lineage/apache-airflow-openlineage/references/what-does-atlan-crawl-from-apache-airflow-openlineage)

Copyright Â© 2025 Atlan Pte. Ltd.

