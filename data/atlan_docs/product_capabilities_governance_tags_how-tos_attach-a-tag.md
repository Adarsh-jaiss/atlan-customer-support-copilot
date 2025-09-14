# Source URL
https://docs.atlan.com/product/capabilities/governance/tags/how-tos/attach-a-tag

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/tags/how-tos/attach-a-tag
link-alternate: https://docs.atlan.com/product/capabilities/governance/tags/how-tos/attach-a-tag
meta-description: Atlan allows users to add [tags](/product/capabilities/governance/tags/concepts/what-are-tags) to assets. You can use them to identify key characteristics of assets or group them together for usage or data protection.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan allows users to add [tags](/product/capabilities/governance/tags/concepts/what-are-tags) to assets. You can use them to identify key characteristics of assets or group them together for usage or data protection.
meta-og-locale: en
meta-og-title: Attach a tag | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/tags/how-tos/attach-a-tag
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Attach a tag | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Attach a tag
============

[https://demo.arcade.software/OJ7GmChxCcbs31LHzyER?embed](https://demo.arcade.software/OJ7GmChxCcbs31LHzyER?embed)

Atlan allows users to add [tags](/product/capabilities/governance/tags/concepts/what-are-tags) to assets. You can use them to identify key characteristics of assets or group them together for usage or data protection.

Atlan also supports attaching tags imported from the following supported sources:

* [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags)
* [dbt](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags)
* [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags)
* [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags)

For tags created in Atlan, these are displayed in sentence case by design in the governance center, asset sidebar, and tags filter. For imported tags, Atlan will display the source version only in the tag popover when you hover over the tag in the asset sidebar.

**Did you know?**Tag propagation is disabled by default in Atlan. You can [enable tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) to child and downstream assets.

Directly tag an asset[â](#directly-tag-an-asset "Direct link to Directly tag an asset")
-----------------------------------------------------------------------------------------

To directly tag an asset:

1. In the left menu from any screen in Atlan, click **Assets**.
2. On the *Assets* page, click an asset to view its asset profile.
3. Under *Tags*Â in the right menu, click the **\+** icon.
4. In the popup, check the boxes to select one or more tags for the asset.
5. *No propagation* is the default setting. Next to your selected tag(s) in the popup, click **Edit**Â to configure the propagation of tags:

    * Click **Hierarchy \& lineage** to allow propagation of tags to the child and downstream assets.Â
        * Click **Hierarchy only (no lineage)** to allow propagation of tags to the child assets only.
        * Click **No propagation** to disallow any propagation of tags.
6. (Optional) For tags imported from supported sources, you can configure the following:

    * For [Snowflake assets](/apps/connectors/data-warehouses/snowflake/references/what-does-atlan-crawl-from-snowflake), you can attach a [Snowflake tag](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags). If [reverse sync is enabled](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags#push-tag-updates-to-snowflake), any updates made in Atlan will also be synced to Snowflake. If reverse sync is disabled, updates will be restricted to Atlan. Under *Snowflake tags*, select a [synced Snowflake tag](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags) and then:
            + Click the **Select tag value** dropdown to attach an [allowed value](https://docs.snowflake.com/en/user-guide/object-tagging#specify-tag-values) from a predefined list, if available.
            + For *Add value*, enter a tag value of your choice, if no predefined allowed values are present. Tag values added in Atlan are case\-sensitive.
        * For [dbt Cloud](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core) assets, you can attach a [dbt tag](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags).
        * For [Google BigQuery](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery) assets, you can attach a [Google BigQuery tag](/apps/connectors/data-warehouses/google-bigquery/how-tos/manage-google-bigquery-tags).
        * For [Databricks](/apps/connectors/data-warehouses/databricks/references/what-does-atlan-crawl-from-databricks) assets, you can attach a [Databricks tag](/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags) and tag values. If [reverse sync is enabled](/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags), any updates made in Atlan will also be synced to Databricks. If reverse sync is disabled, updates will be restricted to Atlan.
    danger If there are multiple synced tags mapped to an [Atlan tag](/product/capabilities/governance/tags/concepts/what-are-tags), you will only be able to select one synced tag. You can also only select imported tags that belong to the same connection as the selected asset.
7. Click **Update** to confirm your selections.
8. Click **Save** to save the tag(s) to your asset.
9. (Optional) Hover over the attached tag to view tag propagation details in a popover, including username of the user who applied the tag, mode of tag propagation, and when the tag was configured.
10. (Optional) Filter tagged assets by [attached tags](/product/capabilities/discovery/how-tos/use-the-filters-menu), including tags imported from supported sources.

For reverse sync to work for tags imported from [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags) and [Databricks](/apps/connectors/data-warehouses/databricks/how-tos/manage-databricks-tags), first ensure that reverse sync is enabled on the imported tag and then you must attach the imported tag to the asset (complete step 6 above).

**Did you know?**You can [remove tags](/product/capabilities/governance/tags/how-tos/remove-a-tag) from your tagged assets. You can also [add tags to your column assets](/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-google-sheets) directly from Google Sheets.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)

[PreviousDelete a tag](/product/capabilities/governance/tags/how-tos/delete-a-tag)[NextRemove a tag](/product/capabilities/governance/tags/how-tos/remove-a-tag)

Copyright Â© 2025 Atlan Pte. Ltd.

