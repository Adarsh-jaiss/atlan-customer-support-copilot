# Source URL
https://docs.atlan.com/platform/references/atlan-architecture

================================================================================

<!--
canonical: https://docs.atlan.com/platform/references/atlan-architecture
link-alternate: https://docs.atlan.com/platform/references/atlan-architecture
meta-description: Learn about atlan architecture.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about atlan architecture.
meta-og-locale: en
meta-og-title: Atlan architecture | Atlan Documentation
meta-og-url: https://docs.atlan.com/platform/references/atlan-architecture
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Atlan architecture | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Atlan architecture
==================

Atlan is a cloud\-first solution. Single\-tenant SaaS is the recommended deployment model. Atlan currently supports hosting tenants on the following cloud platforms:

### Amazon Web Services (AWS)[â](#amazon-web-services-aws "Direct link to Amazon Web Services (AWS)")

### Microsoft Azure[â](#microsoft-azure "Direct link to Microsoft Azure")

### Google Cloud Platform (GCP)[â](#google-cloud-platform-gcp "Direct link to Google Cloud Platform (GCP)")

The components of Atlan are isolated, across both compute and data. For more details, see [How are resources isolated?](/platform/references/how-are-resources-isolated)

Platform components[â](#platform-components "Direct link to Platform components")
-----------------------------------------------------------------------------------

* [Kong](https://konghq.com/kong) is an API gateway. It handles rate limiting and token verification on all incoming API requests.
* [Apache Keycloak](https://www.keycloak.org/) is an identity and access management component. It manages everything to do with users, login, SSO and so on.
* Heracles is Atlan's API service. It houses the business logic used by the frontend and APIs to interact with other platform components.
* [PostgreSQL](https://www.postgresql.org/) is a SQL database. Many services on the platform use it for storage.
* [HashiCorp Vault](https://www.vaultproject.io/) is a secret manager. It stores sensitive credentials provided by the user.
* [Apache Ranger](https://ranger.apache.org/) is the policy engine. It provides fine\-grained access control over data in the metastore.
* [Argo Workflows](https://argoproj.github.io/workflows/) is a workflow orchestrator for k8s. It runs and manages long\-running jobs in a container and k8s\-native fashion.
* Admission Controller is a k8s admission controller. It performs certain actions when Argo Workflows are updated such as workflow alerts.
* Metastore stores metadata as data in a graph store. It is based on [Apache Atlas](https://atlas.apache.org/) and has fine\-grained access control on top.
    + [Apache Zookeeper](https://zookeeper.apache.org/) manages consensus and coordination for the metastore services.
    + [Elasticsearch](https://www.elastic.co/) indexes data and drives search functionality.
    + [Apache Cassandra](https://cassandra.apache.org/) is an object\-oriented database used to store the metastore's data.
* [Apache Kafka](https://kafka.apache.org/) is an event stream. It enables event\-driven use cases across the platform.
* Heka is Atlan's SQL component. It parses, rewrites and optimizes SQL queries and is powered by [Apache Calcite](https://calcite.apache.org/).
* [Redis](https://redis.io/) is a cache layer used by Heracles.

Platform management components[â](#platform-management-components "Direct link to Platform management components")
--------------------------------------------------------------------------------------------------------------------

* [Velero](https://velero.io/) performs cluster backups.
* [Kibana](https://www.elastic.co/kibana/) explores and filters log data stored in Elasticsearch.
* [Fluent Bit](https://fluentbit.io/) is a logging and metrics processor. It parses and pushes logs from pods to various destinations.
* [Elasticsearch](https://www.elastic.co/elastic-stack/) stores and indexes logs.

Central components[â](#central-components "Direct link to Central components")
--------------------------------------------------------------------------------

* [Zenduty](https://www.zenduty.com/) is used for incident response. Alerts are sent when something goes wrong in one of the clusters.
* [Argo CD](https://argoproj.github.io/cd/) is used for continuous deployment. Changes in git repositories lead to upgrades in the clusters.
* [Github Actions](https://github.com/features/actions) update the Docker container images as part of the development process.
* [Sendgrid](https://sendgrid.com) is used to send emails.
* The frontend is a [Vue.js](https://vuejs.org/) web application that's hosted on S3 and delivered via [Amazon CloudFront](https://aws.amazon.com/cloudfront/) content delivery network (CDN) service.
* [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/) sends alerts generated by metrics stored in Prometheus.
* [Grafana](https://grafana.com/) provides observability dashboards.
* [VictoriaMetrics](https://victoriametrics.com/) is a fast, cost\-effective, and scalable monitoring solution and time series database. It processes high volumes of data and enables long\-term storing.

[Atlan marketplace](https://packages.atlan.com) (not pictured)[â](#atlan-marketplace-not-pictured "Direct link to atlan-marketplace-not-pictured")
----------------------------------------------------------------------------------------------------------------------------------------------------

The marketplace offers packages (workflows) that perform long\-running tasks on the Atlan platform. The ecosystem enables the creation of metadata and lineage connectors.

See [security.atlan.com](https://security.atlan.com) for the latest policies and standards, reports and certifications, architecture, diagrams and more.

**Tags:*** [security](/tags/security)
* [access\-control](/tags/access-control)
* [permissions](/tags/permissions)

[PreviousIncident response plan](/platform/references/incident-response-plan)[NextProduct release stages](/get-started/references/product-release-stages)

Copyright Â© 2025 Atlan Pte. Ltd.

