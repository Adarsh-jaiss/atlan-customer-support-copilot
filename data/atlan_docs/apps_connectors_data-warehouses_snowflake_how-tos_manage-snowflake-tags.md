# Source URL
https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags
link-alternate: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags
meta-description: You can import your Snowflake tags to Atlan through one-way tag sync. The synced Snowflake tags will be matched to corresponding tags in Atlan through case-insensitive name match and your Snowflake assets will be enriched with their synced tags from Snowflake.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You can import your Snowflake tags to Atlan through one-way tag sync. The synced Snowflake tags will be matched to corresponding tags in Atlan through case-insensitive name match and your Snowflake assets will be enriched with their synced tags from Snowflake.
meta-og-locale: en
meta-og-title: Manage Snowflake tags | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage Snowflake tags | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage Snowflake tags
=====================

Note that object tagging in Snowflake currently requires [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions#feature-edition-matrix).

Atlan enables you to import your [Snowflake tags](https://docs.snowflake.com/en/user-guide/object-tagging), update your Snowflake assets with the imported tags, and push the tag updates back to Snowflake:

* Import tags \- crawl Snowflake tags from Snowflake to Atlan
* Reverse sync \- sync Snowflake tag updates from Atlan to Snowflake

Once you've imported your Snowflake tags to Atlan:

* Your Snowflake assets in Atlan are automatically enriched with their Snowflake tags.
* Imported Snowflake tags are mapped to corresponding [Atlan tags](/product/capabilities/governance/tags/concepts/what-are-tags) through case\-insensitive name match \- multiple Snowflake tags can be matched to a single tag in Atlan.
* You can also [attach Snowflake tags](/product/capabilities/governance/tags/how-tos/attach-a-tag), including tag values, to your Snowflake assets in Atlan \- allowing you to categorize your assets at a more granular level. Atlan supports:
    + [Allowed values](https://docs.snowflake.com/en/user-guide/object-tagging#label-object-tagging-specify-tag-values): attach an allowed value from a predefined list of values imported from Snowflake.
    + Tag values: enter any value in Atlan while [attaching or editing imported Snowflake tags](/product/capabilities/governance/tags/how-tos/attach-a-tag) on an asset.
* You can enable reverse sync to push any tag updates for your Snowflake assets back to Snowflake \- including [allowed and tag values](/product/capabilities/governance/tags/how-tos/attach-a-tag) added to assets in Atlan.
* You can [filter your assets](/product/capabilities/discovery/how-tos/use-the-filters-menu) by Snowflake tags and tag and allowed values.

**Did you know?**Enabling reverse sync only updates existing tags in Snowflake. It neither creates nor deletes any tags in Snowflake.

Prerequisites[â](#prerequisites "Direct link to Prerequisites")
-----------------------------------------------------------------

**Did you know?**Additional privileges are only required when using the [information schema method](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) for fetching metadata. This is because Snowflake [stores all tag objects](https://docs.snowflake.com/en/user-guide/object-tagging#discover-tags) in the `ACCOUNT_USAGE` schema. If you're using the [account usage method](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) to crawl metadata in Atlan or you have [configured the Snowflake miner](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake), any permissions required are already set.

### Account usage method[â](#account-usage-method "Direct link to Account usage method")

Before you can import tags from Snowflake, you need to do the following:

* [Create tags](https://docs.snowflake.com/en/user-guide/object-tagging#creating-assigning-tags) or have existing tags in Snowflake.
* Grant the [same permissions](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) as required for crawling Snowflake assets to import tags and push updated tags to Snowflake.

### Information schema method[â](#information-schema-method "Direct link to Information schema method")

Before you can import tags from Snowflake, you need to do the following:

* [Create tags](https://docs.snowflake.com/en/user-guide/object-tagging#creating-assigning-tags) or have existing tags in Snowflake.
* Grant additional permissions to [import tags](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) from Snowflake.
* Grant additional permissions to [push updated tags](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) to Snowflake.

Import Snowflake tags to Atlan[â](#import-snowflake-tags-to-atlan "Direct link to Import Snowflake tags to Atlan")
--------------------------------------------------------------------------------------------------------------------

Who can do this?You need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to import Snowflake tags to Atlan. You also need to work with your Snowflake administrator to grant [additional permissions to import tags](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) from Snowflake \- you may not have access yourself.

[https://demo.arcade.software/YBZrrzXjNjYLw0lXSbUf?embed](https://demo.arcade.software/YBZrrzXjNjYLw0lXSbUf?embed)

You can import your Snowflake tags to Atlan through one\-way tag sync. The synced Snowflake tags are matched to corresponding tags in Atlan through case\-insensitive name match and your Snowflake assets are enriched with their synced tags from Snowflake.

To import Snowflake tags to Atlan, you can either:

* Create a new Snowflake workflow and [configure the crawler](/apps/connectors/data-warehouses/snowflake/how-tos/crawl-snowflake#configure-the-crawler) to import tags.
* [Modify the crawler's configuration](/product/connections/how-tos/manage-connectivity) for an existing Snowflake workflow to change *Import Tags* to **Yes**. If you subsequently modify the workflow to disable tag import, for any tags already imported, Atlan preserves those tags.

Once the crawler has completed running, tags imported from Snowflake are available to use for tagging assets! ð

View Snowflake tags in Atlan[â](#view-snowflake-tags-in-atlan "Direct link to View Snowflake tags in Atlan")
--------------------------------------------------------------------------------------------------------------

Once you've imported your Snowflake tags, you can view and manage your Snowflake tags in Atlan.

[https://demo.arcade.software/dYlsrENCpmgaFrW0RnQR?embed](https://demo.arcade.software/dYlsrENCpmgaFrW0RnQR?embed)

To view Snowflake tags:

1. From the left menu of any screen, click **Governance**.
2. Under the *Governance* heading of the \_Governance cente\_r, click **Tags**.
3. (Optional) Under *Tags*, click the funnel icon to filter tags by source type. Click **Snowflake** to filter for tags imported from Snowflake.
4. From the left menu under *Tags*, select a synced tag \- synced tags display the Snowflake âï¸ icon next to the tag name.
5. In the *Overview* section, you can view a total count of synced Snowflake tags. To the right of *Overview*, click **Synced tags** to view additional details \- including tag name, description, tag values, total count of linked assets, connection, database, and schema names, and timestamp for last synced.
6. (Optional) Click the **Linked assets** tab to view linked assets for your Snowflake tag.
7. (Optional) In the top right, click the pencil icon to add a description and change the [tag icon](/product/capabilities/governance/tags/how-tos/create-a-new-tag). You can't rename tags synced from Snowflake.

Push tag updates to Snowflake[â](#push-tag-updates-to-snowflake "Direct link to Push tag updates to Snowflake")
-----------------------------------------------------------------------------------------------------------------

Who can do this?Any [admin or member user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) in Atlan can configure reverse sync for tag updates to Snowflake. You also need to work with your Snowflake administrator to [grant additional permissions to push updates](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake) \- you may not have access yourself.

**Did you know?**Reverse sync is currently only available for imported Snowflake tags in Atlan. The imported tags display a Snowflake âï¸ icon next to the tag name. If using the [account usage method](/apps/connectors/data-warehouses/snowflake/how-tos/set-up-snowflake), expect a [data latency of up to 3 hours](https://docs.snowflake.com/en/sql-reference/account-usage#differences-between-account-usage-and-information-schema) for reverse tag sync to be successful.

You can enable reverse sync for your imported Snowflake tags in Atlan and push all tag updates for your Snowflake assets back to source. Once you have enabled reverse sync, any Snowflake assets with tags updated in Atlan are also updated in Snowflake.

To enable reverse sync for imported Snowflake tags:

1. From the left menu of any screen, click **Governance**.
2. Under the *Governance* heading of the \_Governance cente\_r, click **Tags**.
3. (Optional) Under *Tags*, click the funnel icon to filter tags by source type. Click **Snowflake** to filter for tags imported from Snowflake.
4. In the left menu under *Tags*, select a synced Snowflake tag \- synced tags display the Snowflake âï¸ icon next to the tag name.
5. On your selected tag page, to the right of *Overview*, click **Synced tags**.
6. Under *Synced tags*, in the upper right, turn on **Enable reverse sync** to synchronize tag updates from Atlan to Snowflake.
7. In the advanced settings, you can also enable **concatenation** to support multiple tag values for a single column. For detailed information about multiple tag values and concatenation, see [Multiple tag values and concatenation](/apps/connectors/data-warehouses/snowflake/references/multiple-tag-values-and-concatenation).
8. In the corresponding confirmation dialog, click **Yes, enable it** to enable reverse tag sync or click **Cancel**.

Now when you [attach Snowflake tags](/product/capabilities/governance/tags/how-tos/attach-a-tag) to your Snowflake assets in Atlan, these tag updates are also pushed to Snowflake! ð

**Did you know?**Enabling reverse sync won't trigger any updates in Snowflake until synced tags are attached to Snowflake assets in Atlan. For any questions about managing Snowflake tags, head over [here](/apps/connectors/data-warehouses/snowflake/troubleshooting/troubleshooting-snowflake-tag-management).

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousMine Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/mine-snowflake)[NextConfigure Snowflake data metric functions](/apps/connectors/data-warehouses/snowflake/how-tos/configure-snowflake-data-metric-functions)

Copyright Â© 2025 Atlan Pte. Ltd.

