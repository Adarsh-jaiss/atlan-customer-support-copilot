# Source URL
https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage
link-alternate: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage
meta-description: To integrate Apache Airflow/OpenLineage with Atlan, complete the following steps. To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To integrate Apache Airflow/OpenLineage with Atlan, complete the following steps. To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).
meta-og-locale: en
meta-og-title: Integrate Apache Airflow/OpenLineage | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/lineage/apache-airflow-openlineage/how-tos/integrate-apache-airflow-openlineage
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Integrate Apache Airflow/OpenLineage | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Integrate Apache Airflow/OpenLineage
====================================

To integrate Apache Airflow/OpenLineage with Atlan, complete the following steps. To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).

[https://demo.arcade.software/NmXOWcxikhQ8fk5I58XA?embed](https://demo.arcade.software/NmXOWcxikhQ8fk5I58XA?embed)

Atlan also supports other Apache Airflow distributions to enhance your data management and workflow capabilities:

* [Amazon MWAA](/apps/connectors/lineage/amazon-mwaa-openlineage/how-tos/integrate-amazon-mwaa-openlineage)
* [Astronomer](/apps/connectors/lineage/astronomer-openlineage/how-tos/integrate-astronomer-openlineage)
* [Google Cloud Composer](/apps/connectors/lineage/google-cloud-composer-openlineage/how-tos/integrate-google-cloud-composer-openlineage)

**Did you know?**You will need the Atlan API token and connection name to configure the integration in Apache Airflow/OpenLineage. This will allow Apache Airflow to connect with the OpenLineage API and send events to Atlan.

Create an API token in Atlan[â](#create-an-api-token-in-atlan "Direct link to Create an API token in Atlan")
--------------------------------------------------------------------------------------------------------------

Before running the workflow, you will need to [create an API token](/get-started/references/api-authentication) in Atlan.

Configure the integration in Atlan[â](#configure-the-integration-in-atlan "Direct link to Configure the integration in Atlan")
--------------------------------------------------------------------------------------------------------------------------------

### Select the source[â](#select-the-source "Direct link to Select the source")

To select Apache Airflow/OpenLineage as your source, from within Atlan:

1. In the top right of any screen, click **New** and then click **New workflow**.
2. From the filters along the top, click **Orchestrator**.
3. From the list of packages, select **Airflow Assets**Â and then click **Setup Workflow**.

### Create the connection[â](#create-the-connection "Direct link to Create the connection")

dangerA single connection (namespace) must be used for only one Airflow instance. Using the same connection across multiple instances may cause environment variables to update incorrectly, leading to unexpected behavior.

You will only need to create a connection once to enable Atlan to receive incoming OpenLineage events. Once you have set up the connection, you neither have to rerun the workflow nor schedule it. Atlan will process the OpenLineage events as and when your DAGs run to catalog your Apache Airflow assets.

To configure the Apache Airflow/OpenLineage connection, from within Atlan:

1. For *Connection Name*, provide a connection name that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. (Optional) For *Host* and *Port*, enter the URL and port number of your Apache Airflow UI, respectively. This will allow Atlan to help you view your assets directly in Apache Airflow from the asset profile.
4. For *Enable OpenLineage Events*, click **Yes** to enable the processing of OpenLineage events or click **No** to disable it. If disabled, new events will not be processed in Atlan.
5. To create a connection, at the bottom of the screen, click the **Create connection** button.

Configure the integration in Apache Airflow/OpenLineage[â](#configure-the-integration-in-apache-airflowopenlineage "Direct link to Configure the integration in Apache Airflow/OpenLineage")
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Did you know?**For Apache Airflow operators supported for OpenLineage extraction, you can refer to [Airflow's Supported operators](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/supported_classes.html) documentation. To learn how to extract lineage though OpenLineage methods, custom extractors, or manually annotated lineage, see [How to implement OpenLineage in Airflow operators](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/implement-openlineage-in-airflow-operators). Also, check the [recommended provider package versions for OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage/references/recommended-provider-package-versions).

dangerAtlan does not support integrating with Apache Airflow versions older than 2\.5\.0\.

To configure Apache Airflow to send OpenLineage events to Atlan:

1. Based on your Apache Airflow version, there may be additional prerequisites for using OpenLineage:

    * For Apache Airflow versions 2\.7\.0 onward, [download](https://pypi.org/project/apache-airflow-providers-openlineage/) and install the latest `apache-airflow-providers-openlineage` package and update the `requirements.txt` file of your Apache Airflow instance with:

    ```
        apache-airflow-providers-openlineage

    ```
        * For Apache Airflow versions 2\.5\.0 onward and prior to 2\.7\.0, [download](https://pypi.org/project/openlineage-airflow/) and install the latest `openlineage-airflow` library and update the `requirements.txt` file of your Apache Airflow instance with:

    ```
        openlineage-airflow

    ```
2. Add the following environment variables to your project's `.env` file:

    danger When deploying Apache Airflow on Kubernetes, set these environment variables in both the Scheduler and Triggerer pods to ensure proper integration.

    * For Apache Airflow versions 2\.7\.0 onward:
            + `AIRFLOW__OPENLINEAGE__NAMESPACE`: set the connection name as exactly configured in Atlan.
            + `AIRFLOW__OPENLINEAGE__TRANSPORT`: specify details of where and how to send OpenLineage events in the following JSON string format:

    ```
            {  
              "type": "http",   
              "url": "https://<instance>.atlan.com/events/openlineage/airflow/",   
              "auth": {   
                "type": "api_key",   
                "api_key": "<API_token>"  
               }  
            }

    ```

    - Replace `<instance>` with the name of your Atlan instance.
                - Replace `<API_token>` with the API token generated in Atlan.
        * For Apache Airflow versions 2\.5\.0 onward and prior to 2\.7\.0:Â
            + `OPENLINEAGE_URL`: points to the service that will consume OpenLineage events \- for example, `https://<instance>.atlan.com/events/openlineage/airflow/`.
            + `OPENLINEAGE_API_KEY`: set the API token generated in Atlan.
            + `OPENLINEAGE_NAMESPACE`: set the connection name as exactly configured in Atlan.

Verify the Atlan connection in Apache Airflow[â](#verify-the-atlan-connection-in-apache-airflow "Direct link to Verify the Atlan connection in Apache Airflow")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

To verify connectivity to Apache Airflow:

1. For *Verify connection with Airflow*, click the clipboard icon to copy and run the preflight check DAG on your Apache Airflow instance to test connectivity with Atlan. If you encounter any errors after running the DAG, refer to the [preflight checks documentation](/apps/connectors/lineage/apache-airflow-openlineage/references/preflight-checks-for-apache-airflow).
2. Click **Done** to complete setup.

Once your DAGs have completed running in Apache Airflow, you will see Apache Airflow DAGs and tasks along with lineage from OpenLineage events in Atlan! ð

You can also [view event logs](/product/administration/logs/how-tos/view-event-logs) in Atlan to track and debug events received from OpenLineage.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [configuration](/tags/configuration)

[PreviousApache Airflow OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage)[NextHow to implement OpenLineage in Airflow operators](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/implement-openlineage-in-airflow-operators)

Copyright Â© 2025 Atlan Pte. Ltd.

