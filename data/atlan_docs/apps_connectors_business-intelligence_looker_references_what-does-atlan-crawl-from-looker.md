# Source URL
https://docs.atlan.com/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker
link-alternate: https://docs.atlan.com/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker
meta-description: Atlan crawls and maps the following assets and properties from Looker.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan crawls and maps the following assets and properties from Looker.
meta-og-locale: en
meta-og-title: What does Atlan crawl from Looker? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from Looker? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from Looker?
==================================

Atlan crawls and maps the following assets and properties from Looker.

Atlan also supports the following lineage:

* Asset\-level lineage for views, models, looks, dashboards, tiles, and explores.
* Field\-level lineage for views, explores, looks, tiles, and dashboards.
* Lineage between explore fields and dashboards. This allows you to view all the fields used in a given dashboard and trace their upstream lineage to SQL columns.
* Cross\-project lineage for Looker assets. For example, if an explore includes a view from an imported project, Atlan will parse [project manifest files](https://cloud.google.com/looker/docs/references/param-project-manifest) to generate lineage.
* [Looker refinements](https://cloud.google.com/looker/docs/lookml-refinements) for views and explores. Atlan will parse [project manifest files](https://cloud.google.com/looker/docs/references/param-project-manifest) to generate lineage. Refined fields for views and explores are displayed with a *Refinement* label in Atlan.

dangerCurrently Atlan only represents the assets marked with ð in lineage.

Connections[â](#connections "Direct link to Connections")
-----------------------------------------------------------

Atlan maps connections from Looker to its `Connection` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `host` | `host` | API only |
| `port` | `port` | API only |
| `database` | `database` | API only |
| `schema` | `schema` | API only |
| `dialect_name` | `dialect_name` | API only |
| `created_at` | `sourceCreatedAt` | asset profile and properties sidebar |

Projects[â](#projects "Direct link to Projects")
--------------------------------------------------

Atlan maps projects from Looker to its `LookerProject` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |

Views ð[â](#views- "Direct link to Views ð")
----------------------------------------------------

Atlan maps views from Looker to its `LookerView` asset type. To trace the upstream lineage of these views, Atlan currently supports [SQL\-based derived tables](https://cloud.google.com/looker/docs/derived-tables#sql-based_derived_tables). Persistent derived tables (PDTs) and Liquid parameterized tables are currently not supported. However, Atlan will always catalog the associated views.

Atlan also supports [view refinements](https://cloud.google.com/looker/docs/lookml-refinements). Atlan includes the fields from refinements in the parent view asset, and marks the fields with a *Refinement* label. You can hover over the label to view the file path and line number where the refinement is defined.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `project_name` | `projectName` | API only |

Models ð[â](#models- "Direct link to Models ð")
-------------------------------------------------------

Atlan maps models from Looker to its `LookerModel` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `label` | `name` | asset profile and overview sidebar |
| `project_name` | `projectName` | API only |
| Project not found | `certificateStatus (DEPRECATED)` | asset profile and overview sidebar |
| Project not found | `certificateStatusMessage ("Project attached to this model was not found by the workflow in Looker.")` | asset profile and overview sidebar |

Folders[â](#folders "Direct link to Folders")
-----------------------------------------------

Atlan maps folders from Looker to its `LookerFolder` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `content_metadata_id` | `sourceContentMetadataId` | properties sidebar |
| `creator_id` | `sourceCreatorId` | API only |
| `child_count` | `sourceChildCount` | asset preview and profile |
| `parent_id` | `sourceParentID` | API only |
| `created_at` | `sourceCreatedAt` | asset profile and properties sidebar |

Fields ð[â](#fields- "Direct link to Fields ð")
-------------------------------------------------------

### For explores[â](#for-explores "Direct link to For explores")

Atlan maps fields for explores from Looker to its `LookerField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `label` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `category` | `subType` | asset preview and profile |
| `project_name` | `projectName` | API only |
| `model_name` | `modelName` | API only |
| parsed from LookML files | `lookerFieldIsRefined` | asset preview and profile, overview sidebar |
| parsed from LookML files | `lookerFieldRefinementFilePath` | asset preview and profile, overview sidebar |
| parsed from LookML files | `lookerFieldRefinementLineNumber` | asset preview and profile, overview sidebar |

### For views[â](#for-views "Direct link to For views")

Atlan maps fields for views from Looker to its `LookerField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset profile and overview sidebar |
| `category` | `subType` | asset preview and profile |
| `project_name` | `projectName` | API only |
| parsed from LookML files | `lookerFieldIsRefined` | asset preview and profile, overview sidebar |
| parsed from LookML files | `lookerFieldRefinementFilePath` | asset preview and profile, overview sidebar |
| parsed from LookML files | `lookerFieldRefinementLineNumber` | asset preview and profile, overview sidebar |

### For looks[â](#for-looks "Direct link to For looks")

Atlan maps fields for looks from Looker to its `LookerField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset preview, profile, and filter, and overview sidebar |
| `look` | `look` | API only |

### For tiles[â](#for-tiles "Direct link to For tiles")

Atlan maps fields for tiles from Looker to its `LookerField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset preview, profile, and filter, and overview sidebar |
| `tile` | `tile` | API only |

### For dashboards[â](#for-dashboards "Direct link to For dashboards")

Atlan maps fields for dashboards from Looker to its `LookerField` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `name` | `name` | asset preview, profile, and filter, and overview sidebar |
| `dashboard` | `dashboard` | API only |

Looks ð[â](#looks- "Direct link to Looks ð")
----------------------------------------------------

Atlan maps looks from Looker to its `LookerLook` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `title` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `folder_name` | `folderName` | API only |
| `user_id` | `sourceUserId` | API only |
| `view_count` | [`sourceViewCount`](/apps/connectors/business-intelligence/looker/troubleshooting/troubleshooting-looker-connectivity) | asset preview and profile, overview sidebar |
| `last_updater_id` | `sourceLastUpdaterId` | API only |
| `last_updater_name` | `sourceUpdatedBy` | asset profile and properties sidebar |
| `user_name` | `sourceOwners` | asset profile and properties sidebar |
| `content_metadata_id` | `sourceContentMetadataId` | properties sidebar |
| `query_id` | `lookerSourceQueryId` | API only |
| `last_accessed_at` | `sourceLastAccessedAt` | API only |
| `last_viewed_at` | `sourceLastViewedAt` | API only |
| `created_at` | `sourceCreatedAt` | asset profile and properties sidebar |
| `updated_at` | `sourceUpdatedAt` | asset profile and properties sidebar |

Dashboards ð[â](#dashboards- "Direct link to Dashboards ð")
-------------------------------------------------------------------

Atlan maps dashboards from Looker to its `LookerDashboard` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `title` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `slug` | `lookerSlug` | API only |
| `folder_name` | `folderName` | API only |
| `user_id` | `sourceUserId` | API only |
| `view_count` | [`sourceViewCount`](/apps/connectors/business-intelligence/looker/troubleshooting/troubleshooting-looker-connectivity) | asset preview and profile, overview sidebar |
| `last_updater_id` | `sourceLastUpdaterId` | API only |
| `last_updater_name` | `sourceUpdatedBy` | asset profile and properties sidebar |
| `user_name` | `sourceOwners` | asset profile and properties sidebar |
| `content_metadata_id` | `sourceMetadataId` | properties sidebar |
| `last_accessed_at` | `sourceLastAccessedAt` | API only |
| `last_viewed_at` | `sourceLastViewedAt` | API only |
| `created_at` | `sourceCreatedAt` | asset profile and properties sidebar |
| `updated_at` | `sourceUpdatedAt` | asset profile and properties sidebar |

Tiles ð[â](#tiles- "Direct link to Tiles ð")
----------------------------------------------------

Atlan maps tiles from Looker to its `LookerTile` asset type.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `title` | `name` | asset profile and overview sidebar |
| `title` of `Look Deleted` | `certificateStatus (DEPRECATED)` | asset profile and overview sidebar |
| `title` of `Look Deleted` | `certificateStatusMessage ("Look attached to this tile has been deleted. This tile might be unusable.")` | asset profile and overview sidebar |
| `body_text` | `description` | asset profile and overview sidebar |
| `lookml_link_id` | `lookml_link_id` | API only |
| `merge_result_id` | `merge_result_id` | API only |
| `note_text` | `noteText` | overview sidebar |
| `query_id` | `lookerQueryID` | API only |
| `result_maker_id` | `resultMakerID` | properties sidebar |
| `look_id` | `lookId` | API only |
| `subtitle_text` | `subtitleText` | overview sidebar |
| `type` | `subType` | asset preview and profile |

Explores ð[â](#explores- "Direct link to Explores ð")
-------------------------------------------------------------

Atlan maps explores from Looker to its `LookerExplore` asset type.

Atlan also supports [explore refinements](https://cloud.google.com/looker/docs/lookml-refinements):

* For explores defined in the same model, Atlan includes the fields from refinements in the parent explore asset.
* For explores with the same name that are defined in a different model, Atlan will create a new explore asset.

In both cases, Atlan marks the fields with a *Refinement* label. You can hover over the label to view the file path and line number where the refinement is defined.

| Source property | Atlan property | Where in Atlan |
| --- | --- | --- |
| `title`, `name`, or `id` | `name` | asset profile and overview sidebar |
| `description` | `description` | asset profile and overview sidebar |
| `model_name` | `modelName` | API only |
| `connection_name` | `sourceConnectionName` | API only |
| `user_name` | `sourceOwners` | asset profile and properties sidebar |
| `view_name` | `viewName` | asset profile and properties sidebar |
| `sql_table_name` | `sqlTableName` | API only |
| `project_name` | `projectName` | API only |

**Tags:*** [crawl](/tags/crawl)
* [model](/tags/model)

[PreviousCrawl on\-premises Looker](/apps/connectors/business-intelligence/looker/how-tos/crawl-on-premises-looker)[NextPreflight checks for Looker](/apps/connectors/business-intelligence/looker/references/preflight-checks-for-looker)

Copyright Â© 2025 Atlan Pte. Ltd.

