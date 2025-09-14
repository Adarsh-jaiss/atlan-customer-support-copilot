# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags
meta-description: You must have a [Unity Catalog-enabled workspace](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html) and SQL warehouse configured to import Databricks tags in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You must have a [Unity Catalog-enabled workspace](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html) and SQL warehouse configured to import Databricks tags in Atlan.
meta-og-locale: en
meta-og-title: Manage Databricks tags | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage Databricks tags | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage Databricks tags
======================

You must have a [Unity Catalog\-enabled workspace](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html) to import Databricks tags in Atlan.

Atlan enables you to import your [Databricks tags](https://docs.databricks.com/en/data-governance/unity-catalog/tags.html), update your Databricks assets with the imported tags, and push the tag updates back to Databricks:

* [Import tags](#import-databricks-tags-to-atlan) \- crawl Databricks tags from Databricks to Atlan
* [Reverse sync](#push-tag-updates-to-databricks) \- sync Databricks tag updates from Atlan to Databricks

Once you've [imported your Databricks tags](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks) to Atlan:

* Your Databricks assets in Atlan will be automatically enriched with their Databricks tags.
* [Imported Databricks tags](#import-databricks-tags-to-atlan) will be mapped to corresponding [Atlan tags](/product/capabilities/governance/tags/concepts/what-are-tags) through case\-insensitive name match \- multiple Databricks tags can be matched to a single tag in Atlan.
* You can also [attach Databricks tags](/product/capabilities/governance/tags/how-tos/attach-a-tag), including tag values, to your Databricks assets in Atlan \- allowing you to categorize your assets at a more granular level.
* You can [filter your assets](/product/capabilities/discovery/how-tos/use-the-filters-menu) by Databricks tags and tag values.
* You can [enable reverse sync](#push-tag-updates-to-databricks) to push any tag updates for your Databricks assets back to Databricks \- including tag values added to assets in Atlan.

**Did you know?**Enabling reverse sync will only update existing tags in Databricks. It will neither create nor delete any tags in Databricks.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

You must have a [Unity Catalog\-enabled workspace](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html) and SQL warehouse configured to import Databricks tags in Atlan.

Before you can import tags from andÂ push tag updates to Databricks using [personal access token](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks), [AWS service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks), or [Azure service principal](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks) authentication, you will need to do the following:

* Ensure that you have a [Unity Catalog\-enabled workspace](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html) and a SQL warehouse configured.
* [Create tags](https://docs.databricks.com/en/data-governance/unity-catalog/tags.html) or have existing tags in Databricks.
* [Grant permissions](/apps/connectors/data-warehouses/databricks/how-tos/set-up-databricks#grant-permissions) to import tags from and push tag updates to Databricks.

Import Databricks tags to Atlan[â](#import-databricks-tags-to-atlan "Direct link to Import Databricks tags to Atlan")
-----------------------------------------------------------------------------------------------------------------------

Who can do this?You will need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to import Databricks tags to Atlan. You will also need to work with your Databricks administrator to grantÂ permissions to import tags from Databricks \- you may not have access yourself.

You can import your Databricks tags to Atlan through one\-way tag sync. The synced Databricks tags will be matched to corresponding tags in Atlan through case\-insensitive name match and your Databricks assets will be enriched with their synced tags from Databricks.

To import Databricks tags to Atlan, you can either:

* Create a new Databricks workflow and [configure the crawler](/apps/connectors/data-warehouses/databricks/how-tos/crawl-databricks#configure-the-crawler) to import tags.
* [Modify the crawler's configuration](/product/connections/how-tos/manage-connectivity) for an existing Databricks workflow to change *Import Tags* to **Yes**. If you subsequently modify the workflow to disable tag import, for any tags already imported, Atlan will preserve those tags.

Once the crawler has completed running, tags imported from Databricks will be available to use for [tagging assets](/product/capabilities/governance/tags/how-tos/attach-a-tag)! ð

View Databricks tags in Atlan[â](#view-databricks-tags-in-atlan "Direct link to View Databricks tags in Atlan")
-----------------------------------------------------------------------------------------------------------------

Once you've imported your Databricks tags, you will be able to view and manage your Databricks tags in Atlan.

[https://demo.arcade.software/09fQUrejBq329qCkjQtI?embed&show_copy_link=true](https://demo.arcade.software/09fQUrejBq329qCkjQtI?embed&show_copy_link=true)

To view Databricks tags:

1. From the left menu of any screen, click **Governance**.
2. Under the *Governance* heading of the \_Governance cente\_r, click **Tags**.
3. (Optional) Under *Tags*, click the funnel icon to filter tags by source type. Click **Databricks** to filter for tags imported from Databricks.
4. From the left menu under *Tags*, select a synced tag.
5. In the *Overview* section, you can view a total count of synced Databricks tags. To the right of *Overview*, click **Synced tags** to view additional details \- including tag name, description, tag values, total count of linked assets, connection, database, and schema names, and timestamp for last synced.
6. (Optional) Click the **Linked assets** tab to view linked assets for your Databricks tag.
7. (Optional) In the top right, click the pencil icon to add a description and change the [tag icon](/product/capabilities/governance/tags/how-tos/create-a-new-tag). You cannot rename tags synced from Databricks.

Push tag updates to Databricks[â](#push-tag-updates-to-databricks "Direct link to Push tag updates to Databricks")
--------------------------------------------------------------------------------------------------------------------

Who can do this?Any [admin or member user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) in Atlan can configure reverse sync for tag updates to Databricks. You will also need to work with your Databricks administrator to grant additional permissions to push updates \- you may not have access yourself.

You can enable reverse sync for your imported Databricks tags in Atlan and push all tag updates for your Databricks assets back to source. Once you have enabled reverse sync, any Databricks assets with tags updated in Atlan will also be updated in Databricks.

[https://demo.arcade.software/Fe5kLPFgbqBgBJCI89kR?embed&show_copy_link=true](https://demo.arcade.software/Fe5kLPFgbqBgBJCI89kR?embed&show_copy_link=true)

To enable reverse sync for imported Databricks tags:

1. From the left menu of any screen, click **Governance**.
2. Under the *Governance* heading of the \_Governance cente\_r, click **Tags**.
3. (Optional) Under *Tags*, click the funnel icon to filter tags by source type. Click **Databricks** to filter for tags imported from Databricks.
4. In the left menu under *Tags*, select a synced Databricks tag \- synced tags will display the Databricks icon next to the tag name.Â
5. On your selected tag page, to the right of *Overview*, click **Synced tags**.
6. Under *Synced tags*, in the upper right, turn on **Enable reverse sync** to synchronize tag updates from Atlan to Databricks.
7. In the corresponding confirmation dialog, click **Yes, enable it** to enable reverse tag sync or click **Cancel**.

Now when you [attach Databricks tags](/product/capabilities/governance/tags/how-tos/attach-a-tag) to your Databricks assets in Atlan, these tag updates will also be pushed to Databricks! ð

**Did you know?**Enabling reverse sync will **not** trigger any updates in Databricks until synced tags are attached to Databricks assets in Atlan.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousHow to extract on\-premises Databricks lineage](/apps/connectors/data-warehouses/databricks/how-tos/extract-on-premises-databricks-lineage)[NextWhat does Atlan crawl from Databricks?](/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks)

Copyright Â© 2025 Atlan Pte. Ltd.

