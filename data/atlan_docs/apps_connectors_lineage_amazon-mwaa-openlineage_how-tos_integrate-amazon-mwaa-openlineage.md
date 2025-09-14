# Source URL
https://docs.atlan.com/apps/connectors/lineage/amazon-mwaa-openlineage/how-tos/integrate-amazon-mwaa-openlineage

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/lineage/amazon-mwaa-openlineage/how-tos/integrate-amazon-mwaa-openlineage
link-alternate: https://docs.atlan.com/apps/connectors/lineage/amazon-mwaa-openlineage/how-tos/integrate-amazon-mwaa-openlineage
meta-description: To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).
meta-og-locale: en
meta-og-title: Integrate Amazon MWAA/OpenLineage | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/lineage/amazon-mwaa-openlineage/how-tos/integrate-amazon-mwaa-openlineage
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Integrate Amazon MWAA/OpenLineage | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Integrate Amazon MWAA/OpenLineage
=================================

To integrate Amazon Managed Workflows for Apache Airflow (MWAA) with Atlan, complete the following steps. (Alternatively, you can use the AWS Secrets Manager to store the environment variables and fetch them using the plugin, follow the steps [here](https://aws.amazon.com/blogs/big-data/automate-data-lineage-on-amazon-mwaa-with-openlineage/) to do so.)

To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).

**Did you know?**For Apache Airflow operators supported for OpenLineage extraction, you can refer to [Airflow's Supported operators](https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/supported_classes.html) documentation. To learn how to extract lineage though OpenLineage methods, custom extractors, or manually annotated lineage, see [How to implement OpenLineage in Airflow operators](/apps/connectors/lineage/apache-airflow-openlineage/how-tos/implement-openlineage-in-airflow-operators). Also, check the [recommended provider package versions for OpenLineage](/apps/connectors/lineage/apache-airflow-openlineage/references/recommended-provider-package-versions).

[https://demo.arcade.software/GFCBAk42MZgcYa7vzCYO?embed](https://demo.arcade.software/GFCBAk42MZgcYa7vzCYO?embed)

Create an API token in Atlan[â](#create-an-api-token-in-atlan "Direct link to Create an API token in Atlan")
--------------------------------------------------------------------------------------------------------------

Before running the workflow, you need to [create an API token](/get-started/references/api-authentication) in Atlan.

Configure the integration in Atlan[â](#configure-the-integration-in-atlan "Direct link to Configure the integration in Atlan")
--------------------------------------------------------------------------------------------------------------------------------

### Select the source[â](#select-the-source "Direct link to Select the source")

To select Amazon MWAA/OpenLineage as your source, from within Atlan:

1. In the top right of any screen, click **New** and then click **New workflow**.
2. From the filters along the top, click **Orchestrator**.
3. From the list of packages, select **Amazon MWAA Airflow Assets**Â and then click **Setup Workflow**.

### Create the connection[â](#create-the-connection "Direct link to Create the connection")

dangerA single connection (namespace) must be used for only one Airflow instance. Using the same connection across multiple instances may cause environment variables to update incorrectly, leading to unexpected behavior.

You will only need to create a connection once to enable Atlan to receive incoming OpenLineage events. Once you have set up the connection, you neither have to rerun the workflow nor schedule it. Atlan will process the OpenLineage events as and when your DAGs run to catalog your Apache Airflow assets.

To configure the Amazon MWAA/OpenLineage connection, from within Atlan:

1. For *Connection Name*, provide a connection name that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. (Optional) For *Host*, enter the URL of your Apache Airflow UI \- do **not** include any extra paths such as `/home` in the URL. This will allow Atlan to help you view your assets directly in Amazon MWAA from the asset profile.
4. (Optional) For *Port*, enter the port number for your Apache Airflow UI.
5. For *Enable OpenLineage Events*, click **Yes** to enable the processing of OpenLineage events or click **No** to disable it. If disabled, new events will not be processed in Atlan.
6. To create a connection, at the bottom of the screen, click the **Create connection** button.

Configure the integration in Amazon MWAA[â](#configure-the-integration-in-amazon-mwaa "Direct link to Configure the integration in Amazon MWAA")
--------------------------------------------------------------------------------------------------------------------------------------------------

**Did you know?**You will need the Atlan API token and connection name to configure the integration in Amazon MWAA. This will allow Amazon MWAA to connect with the OpenLineage API and send events to Atlan.

dangerAtlan does not support integrating with Apache Airflow versions older than 2\.5\.0\.

To configure Amazon MWAA to send OpenLineage events to Atlan:

1. Based on your Apache Airflow version on Amazon MWAA, there may be additional prerequisites for using OpenLineage:

    * For Apache Airflow versions 2\.7\.0 onward, update the `requirements.txt` file of your Apache Airflow instance with:

    ```
        apache-airflow-providers-openlineage

    ```
        * For Apache Airflow versions 2\.5\.0 onward and prior to 2\.7\.0, update the `requirements.txt` file of your Apache Airflow instance:

    ```
        openlineage-airflow

    ```
2. To set environment variables, you will need to deploy a custom plugin to Amazon MWAA. Create an `env_var_plugin.py` file and add the following Python code in the plugin:

    * For Apache Airflow versions 2\.7\.0 onward:

    ```
        from airflow.plugins_manager import AirflowPlugin  
        import os

    os.environ["AIRFLOW__OPENLINEAGE__NAMESPACE"] = "<connection_name>"  
        os.environ["AIRFLOW__OPENLINEAGE__TRANSPORT"] = '''{  
          "type": "http",   
          "url": "https://<instance>.atlan.com/events/openlineage/airflow-mwaa/",   
          "auth": {   
            "type": "api_key",   
            "api_key": "<API_token>"  
           }  
        }'''  
        os.environ["AIRFLOW__OPENLINEAGE__CONFIG_PATH"] = ""  
        os.environ["AIRFLOW__OPENLINEAGE__DISABLED_FOR_OPERATORS"] = ""  
        class EnvVarPlugin(AirflowPlugin):  
          name = "env_var_plugin"

    ```

    + `AIRFLOW__OPENLINEAGE__NAMESPACE`: replace `<connection_name>` with the connection name as exactly configured in Atlan.
            + `AIRFLOW__OPENLINEAGE__TRANSPORT`: specify details of where and how to send OpenLineage events.
                - Replace `<instance>` with the name of your Atlan instance.
                - Replace `<API_token>` with the API token generated in Atlan.
            + `AIRFLOW__OPENLINEAGE__CONFIG_PATH`: specifies that the `apache-airflow-providers-openlineage` package read the OpenLineage config from environment variables instead of a config file.
            + `AIRFLOW__OPENLINEAGE__DISABLED_FOR_OPERATORS`: specifies that OpenLineage must send events for all operators \- only required for the `apache-airflow-providers-openlineage` package.
        * For Apache Airflow versions 2\.5\.0 onward and prior to 2\.7\.0:

    ```
        from airflow.plugins_manager import AirflowPlugin  
        import os

    os.environ["OPENLINEAGE_URL"] = "https://<instance>.atlan.com/events/openlineage/airflow-mwaa/"  
        os.environ["OPENLINEAGE_NAMESPACE"] = "<connection_name>"  
        os.environ["OPENLINEAGE_API_KEY"] = "<API_token>"

    class EnvVarPlugin(AirflowPlugin):  
          name = "env_var_plugin"

    ```

    + `OPENLINEAGE_URL`: points to the service that will consume OpenLineage events \- for example, `https://<instance>.atlan.com/events/openlineage/airflow-mwaa/`.
            + `OPENLINEAGE_NAMESPACE`: set the connection name as exactly configured in Atlan.
            + `OPENLINEAGE_API_KEY`: set the API token generated in Atlan.
3. Amazon MWAA allows you to install a plugin through a zip archive. You can either:

    * Use the following code to zip your `env_var_plugin.py` file:

    ```
        zip plugins.zip env_var_plugin.py

    ```
        * If you already have a `plugins.zip` file, add the `env_var_plugin.py` file to your zip file.
4. Upload the `plugins.zip` and `requirements.txt` files to the S3 bucket connected to your Amazon MWAA environment. Amazon MWAA requires your DAGs, plugins, and `requirements.txt` file to be in the same S3 bucket, which serves as the source location for your environment.
5. You will need to [specify the path](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html#configuring-dag-plugins-mwaa-installing) for the latest versions of the `plugins.zip` and `requirements.txt` files in Amazon MWAA. To specify the path:

    1. Open the [Environments page](https://console.aws.amazon.com/mwaa/home#/environments) on the Amazon MWAA console.
        2. Select an environment and then click **Edit**.
        3. In the *DAG code in Amazon S3* section, configure the following:
            1. For *Plugins file \- optional*, select the `plugins.zip` file in the S3 bucket connected to your Amazon MWAA environment or choose the latest `plugins.zip` version from the dropdown list.
            2. For *Requirements file \- optional*, select the latest `requirements.txt` file version from the dropdown list.
        4. Click **Next, Update environment.** or **Next** to save your configurations.

Verify the Atlan connection in Amazon MWAA[â](#verify-the-atlan-connection-in-amazon-mwaa "Direct link to Verify the Atlan connection in Amazon MWAA")
--------------------------------------------------------------------------------------------------------------------------------------------------------

To verify connectivity to Amazon MWAA:

1. For *Verify connection withÂ MWAA*, click the clipboard icon to copy and run the preflight check DAG on your Amazon MWAA instance to test connectivity with Atlan. If you encounter any errors after running the DAG, refer to the [preflight checks documentation](/apps/connectors/lineage/apache-airflow-openlineage/references/preflight-checks-for-apache-airflow).
2. Click **Done** to complete setup.

Once your DAGs have completed running in Apache Airflow, you will see Apache Airflow DAGs and tasks along with lineage from OpenLineage events in Atlan! ð

You can also [view event logs](/product/administration/logs/how-tos/view-event-logs) in Atlan to track and debug events received from OpenLineage.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [configuration](/tags/configuration)

[PreviousAmazon MWAA OpenLineage](/apps/connectors/lineage/amazon-mwaa-openlineage)[NextWhat does Atlan crawl from Amazon MWAA/OpenLineage?](/apps/connectors/lineage/amazon-mwaa-openlineage/references/what-does-atlan-crawl-from-amazon-mwaa-openlineage)

Copyright Â© 2025 Atlan Pte. Ltd.

