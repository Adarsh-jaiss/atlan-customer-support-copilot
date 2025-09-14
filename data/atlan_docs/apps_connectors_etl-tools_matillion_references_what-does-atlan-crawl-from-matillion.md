# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/matillion/references/what-does-atlan-crawl-from-matillion

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/matillion/references/what-does-atlan-crawl-from-matillion
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/matillion/references/what-does-atlan-crawl-from-matillion
meta-description: Atlan crawls and maps the following assets and properties from Matillion.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Matillion.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Matillion? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/matillion/references/what-does-atlan-crawl-from-matillion
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Matillion? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Matillion?
=====================================

Atlan crawls and maps the following assets and properties from Matillion.

Once you've [crawled Matillion](/apps/connectors/etl-tools/matillion/how-tos/crawl-matillion), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. The following filters are currently supported for these Matillion assets:

* [Jobs](#jobs) \- Job type, job path, version, and job schedule filters

Groups[â](#groups "Direct link to Groups")
--------------------------------------------

Atlan maps groups from Matillion to its `MatillionGroup` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile, and overview and properties sidebar |
| dynamically generated from total projects crawled | `matillionProjectCount` | asset profile and overview sidebar |

Projects[â](#projects "Direct link to Projects")
--------------------------------------------------

Atlan maps projects from Matillion to its `MatillionProject` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `projects.objects.name` | `name` | asset profile, and overview and properties sidebar |
| `versionExports.objects.name` | `matillionVersions` | asset profile and overview sidebar |
| `environmentExports.objects.name` | `matillionEnvironments` | API only |
| dynamically generated from number of jobs per project version | `matillionProjectJobCount` | asset profile, and overview and properties sidebar |
| dynamically generated from group and project name | `sourceURL` | overview sidebar |

Jobs[â](#jobs "Direct link to Jobs")
--------------------------------------

Atlan maps jobs from Matillion to its `MatillionJob` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `jobs.objects.info.name` | `name` | asset profile, and overview and properties sidebar |
| `jobs.objects.info.description` | `description` | asset profile, and overview and properties sidebar |
| `jobs.objects.info.type` | `matillionJobType` | asset profile and filter, and overview sidebar |
| `jobs.objects.path` | `matillionJobPath` | asset profile and filter, and overview sidebar |
| `versionExports.objects.name` | `matillionVersion` | asset profile and filter, and overview sidebar |
| `scheduleExports.objects.daysOfWeek` or `scheduleExports.objects.daysOfMonth` | `matillionJobSchedule` | asset profile and filter, and overview sidebar |
| dynamically generated from number of components per job | `matillionJobComponentCount` | asset profile and overview sidebar |
| dynamically generated from group, project, and job name | `sourceURL` | overview sidebar |

Components[â](#components "Direct link to Components")
--------------------------------------------------------

Atlan maps components from Matillion to its `MatillionComponent` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile, and overview and properties sidebar |
| `jobObject.components.id` | `matillionComponentId` | asset profile and overview sidebar |
| `jobObject.components.implementationID` | `matillionComponentImplementationId` | API only |
| `versionExports.objects.name` | `matillionVersion` | asset profile and overview sidebar |
| dynamically generated during metadata processing | `matillionComponentLinkedJob` | asset profile and overview sidebar |
| `tasks.state` | `matillionComponentLastRunStatus` | asset profile and overview sidebar |
| `tasks.state` | `matillionComponentLastFiveRunStatus` | properties sidebar |
| `output.sql` | `matillionComponentSqls` | properties sidebar |

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)

[PreviousCrawl Matillion](/apps/connectors/etl-tools/matillion/how-tos/crawl-matillion)[NextWhat lineage does Atlan extract from Matillion?](/apps/connectors/etl-tools/matillion/references/what-lineage-does-atlan-extract-from-matillion)

Copyright Â© 2025 Atlan Pte. Ltd.

