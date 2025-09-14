# Source URL
https://docs.atlan.com/apps/connectors/database/datastax-enterprise/references/preflight-checks-for-datastax-enterprise

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/references/preflight-checks-for-datastax-enterprise
link-alternate: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/references/preflight-checks-for-datastax-enterprise
meta-description: Preflight checks for DataStax Enterprise
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Preflight checks for DataStax Enterprise
meta-og-locale: en
meta-og-title: Preflight checks for DataStax Enterprise | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/database/datastax-enterprise/references/preflight-checks-for-datastax-enterprise
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Preflight checks for DataStax Enterprise | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Preflight checks for DataStax Enterprise
========================================

Before running the [DataStax Enterprise crawler](/apps/connectors/database/datastax-enterprise/how-tos/crawl-datastax-enterprise), you can run preflight checks to perform the necessary technical validations. The following preflight checks must be completed:

### Cluster permission[â](#cluster-permission "Direct link to Cluster permission")

* â Check successful if the connection to the DataStax Enterprise cluster is established.
* â Check failed if unable to connect to the DataStax Enterprise cluster.

### Keyspace permission[â](#keyspace-permission "Direct link to Keyspace permission")

* â Check successful if the user has read access to `system_schema.keyspaces`.
* â Check failed if the user does not have read access to `system_schema.keyspaces`.

### Table permission[â](#table-permission "Direct link to Table permission")

* â Check successful if the user has read access to `system_schema.tables`.
* â Check failed if the user does not have read access to `system_schema.tables`.

### View permission[â](#view-permission "Direct link to View permission")

* â Check successful if the user has read access to `system_schema.views`.
* â Check failed if the user does not have read access to `system_schema.views`.

### Column permission[â](#column-permission "Direct link to Column permission")

* â Check successful if the user has read access to `system_schema.columns`.
* â Check failed if the user does not have read access to `system_schema.columns`.

### Index permission[â](#index-permission "Direct link to Index permission")

* â Check successful if the user has read access to `system_schema.indexes`.
* â Check failed if the user does not have read access to `system_schema.indexes`.
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousWhat does Atlan crawl from DataStax Enterprise?](/apps/connectors/database/datastax-enterprise/references/what-does-atlan-crawl-from-datastax-enterprise)[NextTroubleshoot permission issues](/apps/connectors/database/datastax-enterprise/troubleshooting/troubleshooting-datastax-enterprise-connectivity)

Copyright Â© 2025 Atlan Pte. Ltd.

