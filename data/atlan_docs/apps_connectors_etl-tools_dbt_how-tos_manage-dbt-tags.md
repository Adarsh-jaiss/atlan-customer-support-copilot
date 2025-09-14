# Source URL
https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags
link-alternate: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags
meta-description: Atlan imports your [dbt tags](https://docs.getdbt.com/references/resource-configs/tags) and allows you to update your dbt assets with the imported tags.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan imports your [dbt tags](https://docs.getdbt.com/references/resource-configs/tags) and allows you to update your dbt assets with the imported tags.
meta-og-locale: en
meta-og-title: Manage dbt tags | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage dbt tags | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage dbt tags
===============

**Did you know?**If you have already set up and crawled dbt, you do **not** need to make any modifications to your [dbt Cloud](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core) setup. You only need to configure the [dbt crawler](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt) to import dbt tags. Atlan will then import your existing dbt tags automatically for you.

Atlan imports your [dbt tags](https://docs.getdbt.com/references/resource-configs/tags) and allows you to update your dbt assets with the imported tags.

Once you've [crawled dbt](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt):

* Your dbt assets in Atlan will be automatically enriched with their dbt tags.
* Imported dbt tags will be mapped to corresponding [Atlan tags](/product/capabilities/governance/tags/concepts/what-are-tags) through case\-insensitive name match \- multiple dbt tags can be matched to a single tag in Atlan.Â
* You can also [attach dbt tags](/product/capabilities/governance/tags/how-tos/attach-a-tag) to your dbt assets in Atlan \- allowing you to categorize your assets at a more granular level.
* You can [filter your assets](/product/capabilities/discovery/how-tos/use-the-filters-menu) by dbt tags.

Import dbt tags to Atlan[â](#import-dbt-tags-to-atlan "Direct link to Import dbt tags to Atlan")
--------------------------------------------------------------------------------------------------

Who can do this?You will need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to import dbt tags. You will also need to work with your dbt Cloud or dbt Core administrator for additional inputs and approval.

Atlan imports existing dbt tags through one\-way tag sync. The imported dbt tags are matched to corresponding tags in Atlan through case\-insensitive name match and your dbt assets enriched with the tags synced from dbt.

To allow Atlan to import and sync dbt tags, you will need to do the following:

* [Create tags](https://docs.getdbt.com/references/resource-configs/tags) or have existing tags in dbt.
* Set up [dbt Cloud](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/how-tos/set-up-dbt-core) to integrate with Atlan.
* [Configure the dbt crawler](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt#configure-the-crawler) to import existing tags from dbt to Atlan. For *Import Tags*, click **Yes** to import dbt tags or click **No** to disable it. If you subsequently modify the workflow to disable  
tag import, for any tags already imported, Atlan will preserve those tags.

Once the crawler has completed running, tags synced from dbt will be available to use for [tagging assets](/product/capabilities/governance/tags/how-tos/attach-a-tag)! ð

[https://demo.arcade.software/bfi5Uwyg58rW1uwjEyXm?embed](https://demo.arcade.software/bfi5Uwyg58rW1uwjEyXm?embed)

View dbt tags in Atlan[â](#view-dbt-tags-in-atlan "Direct link to View dbt tags in Atlan")
--------------------------------------------------------------------------------------------

Once you've crawled [dbt Cloud](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core), you will be able to view and manage your dbt tags in Atlan.

To view synced dbt tags:

1. From the left menu of any screen, click **Governance**.
2. Under the *Governance* heading of the \_Governance cente\_r, click **Tags**.
3. (Optional) Under *Tags*, click the funnel icon to filter tags by source type. Click **dbt** to filter for tags imported from dbt.
4. In the *Overview* section, you can view a total count of synced dbt tags. To the right of *Overview*, click **Synced tags** to view additional details \- including tag name, description, total count of linked assets, connection name, and timestamp for last synced.
5. (Optional) Click the **Linked assets** tab to view linked assets for your dbt tag.
6. (Optional) In the top right, click the pencil icon to add a description and change the [tag icon](/product/capabilities/governance/tags/how-tos/create-a-new-tag). Tags synced from dbt cannot be renamed.

You can now [attach dbt tags](/product/capabilities/governance/tags/how-tos/attach-a-tag) to your dbt assets in Atlan! ð

**Tags:*** [connectors](/tags/connectors)
* [crawl](/tags/crawl)
* [setup](/tags/setup)

[PreviousCrawl dbt](/apps/connectors/etl-tools/dbt/how-tos/crawl-dbt)[NextEnrich Atlan through dbt](/apps/connectors/etl-tools/dbt/how-tos/update-atlan-through-dbt)

Copyright Â© 2025 Atlan Pte. Ltd.

