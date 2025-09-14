# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags
meta-description: Atlan imports your [Google BigQuery tags](https://docs.getdbt.com/references/resource-configs/tags) and allows you to update your Google BigQuery assets with the imported tags. Note that object tagging in Google BigQuery currently requires [Enterprise edition or higher](https://cloud.google.com/bigquery/docs/editions-intro#editions_features).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan imports your [Google BigQuery tags](https://docs.getdbt.com/references/resource-configs/tags) and allows you to update your Google BigQuery assets with the imported tags. Note that object tagging in Google BigQuery currently requires [Enterprise edition or higher](https://cloud.google.com/bigquery/docs/editions-intro#editions_features).
meta-og-locale: en
meta-og-title: Manage Google BigQuery tags | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage Google BigQuery tags | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage Google BigQuery tags
===========================

Atlan imports your [Google BigQuery tags](https://docs.getdbt.com/references/resource-configs/tags) and allows you to update your Google BigQuery assets with the imported tags. Note that object tagging in Google BigQuery currently requires [Enterprise edition or higher](https://cloud.google.com/bigquery/docs/editions-intro#editions_features).

Once you've [crawled Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery):

* Your Google BigQuery assets in Atlan will be automatically enriched with their Google BigQuery tags.
* Imported Google BigQuery tags will be mapped to corresponding [Atlan tags](/product/capabilities/governance/tags/concepts/what-are-tags) through case\-insensitive name match \- multiple Google BigQuery tags can be matched to a single tag in Atlan.Â
* You can also [attach Google BigQuery tags](/product/capabilities/governance/tags/how-tos/attach-a-tag), including tag values and hierarchies, to your Google BigQuery assets in Atlan \- allowing you to categorize your assets at a more granular level. Atlan supports:
    + [Tags](https://cloud.google.com/resource-manager/docs/tags/tags-overview) \- enrich your Google BigQuery tables, views, and materialized views with tags and tag values.
    + [Policy tags](https://cloud.google.com/bigquery/docs/column-level-security-intro)Â \- enrich your Google BigQuery columns with policy tags and tag hierarchies.
* You can [filter your assets](/product/capabilities/discovery/how-tos/use-the-filters-menu) by Google BigQuery tags.

Atlan currently does not support crawling [Dataplex tag templates](https://cloud.google.com/data-catalog/docs/tags-and-tag-templates#tag-templates).

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

Before you can import tags from Google BigQuery, you will need to do the following:

* [Create tags](https://cloud.google.com/bigquery/docs/tags) or have existing tags in Google BigQuery.
* [Grant permissions](/apps/connectors/data-warehouses/google-bigquery/how-tos/set-up-google-bigquery) to import tags from Google BigQuery.

[https://demo.arcade.software/bwk4Cg0zS3Fk8HMLRrIE?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/bwk4Cg0zS3Fk8HMLRrIE?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

Import Google BigQuery tags to Atlan[â](#import-google-bigquery-tags-to-atlan "Direct link to Import Google BigQuery tags to Atlan")
--------------------------------------------------------------------------------------------------------------------------------------

Who can do this?You will need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to import Google BigQuery tags. You will also need to work with your Google BigQuery administrator for additional inputs and approval.

Atlan imports existing Google BigQuery tags through one\-way tag sync. The imported Google BigQuery tags are matched to corresponding tags in Atlan through case\-insensitive name match and your Google BigQuery assets enriched with the tags synced from Google BigQuery.

To import Google BigQuery tags to Atlan, you can either:

* Create a new Google BigQuery workflow and [configure the crawler](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery#configure-the-crawler) to import tags.
* [Modify the crawler's configuration](/product/connections/how-tos/manage-connectivity) for an existing Google BigQuery workflow to change *Import Tags* to **Yes**. If you subsequently modify the workflow to disable tag import, for any tags already imported, Atlan will preserve those tags.

Once the crawler has completed running, tags synced from Google BigQuery will be available to use for [tagging assets](/product/capabilities/governance/tags/how-tos/attach-a-tag)! ð

View Google BigQuery tags in Atlan[â](#view-google-bigquery-tags-in-atlan "Direct link to View Google BigQuery tags in Atlan")
--------------------------------------------------------------------------------------------------------------------------------

Once you've [crawled Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/crawl-google-bigquery), you will be able to view and manage your Google BigQuery tags in Atlan.

To view synced Google BigQuery tags:

1. From the left menu of any screen, click **Governance**.
2. Under the *Governance* heading of the \_Governance cente\_r, click **Tags**.
3. (Optional) Under *Tags*, click the funnel icon to filter tags by source type. Click **BigQuery** to filter for tags imported from Google BigQuery.
4. In the *Overview* section, you can view a total count of synced Google BigQuery tags. To the right of *Overview*, click **Synced tags** to view additional details \- including tag name, type, and values, description, total count of linked assets, connection name, and timestamp for last synced.
5. (Optional) Click the **Linked assets** tab to view linked assets for your Google BigQuery tag.
6. (Optional) In the top right, click the pencil icon to add a description and change the [tag icon](/product/capabilities/governance/tags/how-tos/create-a-new-tag). Tags synced from Google BigQuery cannot be renamed.

You can now [attach Google BigQuery tags](/product/capabilities/governance/tags/how-tos/attach-a-tag) to your Google BigQuery assets in Atlan! ð

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousMine Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/mine-google-bigquery)[NextWhat does Atlan crawl from Google BigQuery?](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery)

Copyright Â© 2025 Atlan Pte. Ltd.

