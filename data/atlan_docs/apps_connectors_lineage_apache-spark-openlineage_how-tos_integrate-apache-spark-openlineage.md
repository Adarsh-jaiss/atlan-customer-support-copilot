# Source URL
https://docs.atlan.com/apps/connectors/lineage/apache-spark-openlineage/how-tos/integrate-apache-spark-openlineage

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/lineage/apache-spark-openlineage/how-tos/integrate-apache-spark-openlineage
link-alternate: https://docs.atlan.com/apps/connectors/lineage/apache-spark-openlineage/how-tos/integrate-apache-spark-openlineage
meta-description: Atlan extracts job-level operational metadata from Apache Spark and generates job lineage through OpenLineage. To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan extracts job-level operational metadata from Apache Spark and generates job lineage through OpenLineage. To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).
meta-og-locale: en
meta-og-title: Integrate Apache Spark/OpenLineage | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/lineage/apache-spark-openlineage/how-tos/integrate-apache-spark-openlineage
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Integrate Apache Spark/OpenLineage | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Integrate Apache Spark/OpenLineage
==================================

Atlan extracts job\-level operational metadata from Apache Spark and generates job lineage through OpenLineage. To learn more about OpenLineage, refer to [OpenLineage configuration and facets](/product/connections/references/openlineage-configuration-and-facets).

To integrate Apache Spark/OpenLineage with Atlan, review the [order of operations](/product/connections/how-tos/order-workflows) and then complete the following steps.

[https://demo.arcade.software/WKSqE0pVNumQrD0ErH3G?embed](https://demo.arcade.software/WKSqE0pVNumQrD0ErH3G?embed)

Create an API token in Atlan[â](#create-an-api-token-in-atlan "Direct link to Create an API token in Atlan")
--------------------------------------------------------------------------------------------------------------

Before running the workflow, you will need to [create an API token](/get-started/references/api-authentication) in Atlan.

Select the source in Atlan[â](#select-the-source-in-atlan "Direct link to Select the source in Atlan")
--------------------------------------------------------------------------------------------------------

To select Apache Spark/OpenLineage as your source, from within Atlan:

1. In the top right of any screen, click **New** and then click **New workflow**.
2. From the list of packages, select **Spark Assets**Â and then click **Setup Workflow**.

Configure the integration in Atlan[â](#configure-the-integration-in-atlan "Direct link to Configure the integration in Atlan")
--------------------------------------------------------------------------------------------------------------------------------

You will only need to create a connection once to enable Atlan to receive incoming OpenLineage events. Once you have set up the connection, you neither have to rerun the workflow nor schedule it. Atlan will process the OpenLineage events as and when your jobs run to catalog your assets.

To configure the Apache Spark/OpenLineage connection, from within Atlan:

1. For *Connection Name*, provide a connection name that represents your source environment. For example, you might use values like `production`,`development`,`gold`, or `analytics`.
2. (Optional) To change the users who are able to manage this connection, change the users or groups listed under *Connection Admins*.

    danger If you do not specify any user or group, no one will be able to manage the connection \- not even admins.
3. To run the workflow, at the bottom of the screen, click the **Run** button.

Configure the integration in Apache Spark[â](#configure-the-integration-in-apache-spark "Direct link to Configure the integration in Apache Spark")
-----------------------------------------------------------------------------------------------------------------------------------------------------

**Did you know?**You will need the Atlan API token and connection name to configure the integration in Apache Spark/OpenLineage. This will allow Apache Spark to connect with the OpenLineage API and send events to Atlan.

Spark has a [default SparkListener interface](https://openlineage.io/blog/openlineage-spark/#getting-started) that OpenLineage leverages to collect information about Spark jobs.

To configure Apache Spark to send OpenLineage events to Atlan, you can either:

Once the data processing tool has completed running, you will see Spark jobs along with lineage from OpenLineage events in Atlan! ð

You can also [view event logs](/product/administration/logs/how-tos/view-event-logs) in Atlan to track and debug events received from OpenLineage.

**Tags:*** [data](/tags/data)
* [api](/tags/api)
* [authentication](/tags/authentication)
* [configuration](/tags/configuration)

[PreviousApache Spark OpenLineage](/apps/connectors/lineage/apache-spark-openlineage)[NextWhat does Atlan crawl from Apache Spark/OpenLineage?](/apps/connectors/lineage/apache-spark-openlineage/references/what-does-atlan-crawl-from-apache-spark-openlineage)

Copyright Â© 2025 Atlan Pte. Ltd.

