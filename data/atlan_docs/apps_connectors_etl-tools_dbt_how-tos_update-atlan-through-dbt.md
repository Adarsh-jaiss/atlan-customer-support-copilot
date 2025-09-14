# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt
meta-description: Beyond the default mapped [dbt Cloud](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core) properties, you can update any of Atlan's metadata attributes (except for `name`, `tenantId`, and `qualifiedName`) through your dbt model's `meta` property.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Beyond the default mapped [dbt Cloud](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core) properties, you can update any of Atlan's metadata attributes (except for `name`, `tenantId`, and `qualifiedName`) through your dbt model's `meta` property.
meta-og-locale: en
meta-og-title: Enrich Atlan through dbt | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Enrich Atlan through dbt | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Enrich Atlan through dbt
========================

Beyond the default mapped [dbt Cloud](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core) properties, you can update any of Atlan's metadata attributes (except for `name`, `tenantId`, and `qualifiedName`) through your dbt model's `meta` property.

For example, you can set:
Announcements, atlan domains, certificates, custom metadata, descriptions, owners, atlan readme, tags, and terms on dbt assets and the assets that dbt materializes whenever applicable.

For more details onÂ*how* to do these updates, including various examples, see the *dbt* tabs in the [Common asset actions](https://developer.atlan.com/snippets/common-examples/) snippets of our developer documentation:

* [Certify assets](https://developer.atlan.com/snippets/common-examples/certificates/)
* [Manage announcements](https://developer.atlan.com/snippets/common-examples/announcements/)
* [Change descriptions](https://developer.atlan.com/snippets/common-examples/descriptions/)
* [Change owners](https://developer.atlan.com/snippets/common-examples/owners/)
* [Tag assets](https://developer.atlan.com/snippets/common-examples/tags/)
* [Change custom metadata](https://developer.atlan.com/snippets/common-examples/custom-metadata/)
* [Link terms to assets](https://developer.atlan.com/snippets/common-examples/term-assignment/)
* [Link Atlan domains to assets](https://developer.atlan.com/snippets/common-examples/domain-assignment/)
* [Link Readme to assets](https://developer.atlan.com/snippets/common-examples/readme/)
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [enrichment](/tags/enrichment)

[PreviousManage dbt tags](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags)[NextMigrate from dbt to Atlan action](/apps/connectors/etl-tools/dbt/how-tos/migrate-from-dbt-to-atlan-action)

Copyright Â© 2025 Atlan Pte. Ltd.

