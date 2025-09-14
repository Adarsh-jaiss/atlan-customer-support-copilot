# Source URL
https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/connect-on-premises-databases-to-kubernetes

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/connect-on-premises-databases-to-kubernetes
link-alternate: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/connect-on-premises-databases-to-kubernetes
meta-description: You can configure and use [Atlan's metadata-extractor tool](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) to extract metadata from on-premises databases with Kubernetes deployment architecture, as an alternative to using Docker Compose.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You can configure and use [Atlan's metadata-extractor tool](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) to extract metadata from on-premises databases with Kubernetes deployment architecture, as an alternative to using Docker Compose.
meta-og-locale: en
meta-og-title: Connect on-premises databases to Kubernetes | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/on-premises-databases/how-tos/connect-on-premises-databases-to-kubernetes
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Connect on-premises databases to Kubernetes | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Connect on\-premises databases to Kubernetes
============================================

Who can do this?You will need access to a machine that can run Kubernetes on\-premises. You will also need your database access details, including credentials.

You can configure and use [Atlan's metadata\-extractor tool](/apps/connectors/database/on-premises-databases/how-tos/set-up-on-premises-database-access) to extract metadata from on\-premises databases with Kubernetes deployment architecture, as an alternative to using Docker Compose.

Get the metadata\-extractor tool[â](#get-the-metadata-extractor-tool "Direct link to Get the metadata-extractor tool")
------------------------------------------------------------------------------------------------------------------------

To get the metadata\-extractor tool:

1. [Raise a support ticket](/support/submit-request) to get a link to the latest version.
2. Download the image using the link provided by support.

Load image to Kubernetes cluster[â](#load-image-to-kubernetes-cluster "Direct link to Load image to Kubernetes cluster")
--------------------------------------------------------------------------------------------------------------------------

You cannot upload the extractor image directly to a Kubernetes cluster. You must upload the extractor image to a container registry that your Kubernetes cluster can access. This ensures that Kubernetes can readily deploy pods with the metadata\-extractor tool.

Apply configuration maps[â](#apply-configuration-maps "Direct link to Apply configuration maps")
--------------------------------------------------------------------------------------------------

ConfigMaps contain essential settings that enable the metadata\-extractor tool to connect to your database, including connection details and extraction parameters. This can help you customize the extraction process to fit your database environment.

1. Deploy configurations to your specific database setup:

    ```
    kubectl apply -f config-maps.yml

    ```
2. Create a `config-maps.yml` containing your database settings, for example:

    ```
    apiVersion: v1  
    kind: ConfigMap  
    metadata:  
      name: atlan-extractor-config-mysql  
    data:  
      DOWNLOAD_JDBC: "true"  
      DOWNLOAD_JDBC_URL: "https://example.com/path/to/jdbc-driver.tar.gz"  
      DRIVER: "com.example.jdbc.Driver"  
      # Add other necessary configurations as key-value pairs

    ```

    * Replace example values with details of your database connection and the JDBC driver.

Deploy extraction job[â](#deploy-extraction-job "Direct link to Deploy extraction job")
-----------------------------------------------------------------------------------------

Set up the CronJob for metadata extraction from the database:

```
kubectl apply -f job.yml  

```

### Example[â](#example "Direct link to Example")

Create a `job.yml` for the extraction job with details like the following:

```
apiVersion: batch/v1  
kind: CronJob  
metadata:  
  name: atlan-extractor-cron-job  
spec:  
  schedule: "@weekly"  
  jobTemplate:  
    spec:  
      template:  
        spec:  
          containers:  
            - name: crawler  
              image: your-registry/path-to-extractor-image:latest  
              # Define environment variables and volume mounts as required  

```

### (Optional) Configure CronJob schedule[â](#optional-configure-cronjob-schedule "Direct link to (Optional) Configure CronJob schedule")

The CronJob is configured to execute weekly by default.

To configure the CronJob schedule:

1. Open the `job.yml` file.
2. In the `spec` section, for `schedule:`, replace the `"@weekly"` cron expression with your preferred schedule. For example, use `"@daily"` for daily executions or provide a [custom cron schedule](/faq/workflows-and-data-processing#how-do-i-configure-custom-cron-schedules).

For more information on CronJob schedules, refer to [Kubernetes documentation](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#writing-a-cronjob-spec).

(Optional) Trigger the job manually[â](#optional-trigger-the-job-manually "Direct link to (Optional) Trigger the job manually")
---------------------------------------------------------------------------------------------------------------------------------

To trigger an immediate metadata extraction, execute the CronJob manually:

```
kubectl create job --from=cronjob/atlan-extractor-cron-job crawl-mysql-$(date '+%Y-%m-%d-%H-%M-%S')  

```

Request files from Atlan[â](#request-files-from-atlan "Direct link to Request files from Atlan")
--------------------------------------------------------------------------------------------------

To get started, [contact Atlan support](/support/submit-request) to request sample ConfigMap and CronJob files for supported SQL connectors:

* Microsoft SQL Server
* MySQL
* Oracle
* PostgreSQL
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)

Copyright Â© 2025 Atlan Pte. Ltd.

