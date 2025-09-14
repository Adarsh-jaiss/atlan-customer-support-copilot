# Source URL
https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-microsoft-excel

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-microsoft-excel
link-alternate: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-microsoft-excel
meta-description: Once you've [connected Atlan with Microsoft Excel](/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel), you can import the column metadata for all your data assets in Atlan and make changes to them directly in Microsoft Excel.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you've [connected Atlan with Microsoft Excel](/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel), you can import the column metadata for all your data assets in Atlan and make changes to them directly in Microsoft Excel.
meta-og-locale: en
meta-og-title: Update column metadata in Microsoft Excel | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-microsoft-excel
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Update column metadata in Microsoft Excel | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Update column metadata in Microsoft Excel
=========================================

[https://demo.arcade.software/HF6Ic9BRtVIenu3ybHGm?embed](https://demo.arcade.software/HF6Ic9BRtVIenu3ybHGm?embed)

Once you've [connected Atlan with Microsoft Excel](/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel), you can import the column metadata for all your data assets in Atlan and make changes to them directly in Microsoft Excel.

Atlan currently supports importing and updating column metadata for the following asset types:

* Tables
* Views
* Materialized views
* [Looker explores](/apps/connectors/business-intelligence/looker/references/what-does-atlan-crawl-from-looker)
* [Microsoft Power BI tables](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi)
* [Salesforce objects](/apps/connectors/crm/salesforce/references/what-does-atlan-crawl-from-salesforce)
* [Tableau data sources](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau)

dangerYou will need to be logged into your Atlan instance before you can start importing column metadata for your Atlan assets in Microsoft Excel. If you do not have the [permission](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) to update asset metadata, your changes will neither be pushed to Atlan nor will a request be created for approval \- even if you receive a success message in Microsoft Excel. Ensure that you have the requisite permissions to update an asset before pushing your changes. Your user permissions are used to determine the bulk updates you can make to ensure that there is no adverse impact on assets beyond your scope of access.

Import column metadata[â](#import-column-metadata "Direct link to Import column metadata")
--------------------------------------------------------------------------------------------

You can import column metadata for your data assets directly into Microsoft Excel.

To import column metadata for your data assets to Microsoft Excel:

1. In the menu bar of your Microsoft Excel workbook, click **Atlan**.
2. From the *Atlan* tab, click **Enrich metadata** to view a list of your data assets in a sidebar.
3. (Optional) To filter your assets by a specific asset type, in the Atlan sidebar, click the asset type \- for example, *Tableau Datasources*.
4. In the Atlan sidebar on your worksheet, you can either:
    * Individually select the data asset(s) you want to import.
    * To the left of the *Import* button, click the **Select All** checkbox to select all the assets that have loaded in the sidebar. (Optional) Scroll down and click **Load more** to load more assets in the sidebar.
5. Click **Import** to import column metadata for your selected assets.

The column metadata for your selected assets are now available in Microsoft Excel! ð

**Did you know?**If any changes are made to your imported columns in Atlan, you'll need to import those columns once again to access the updated version in Microsoft Excel.

Update column metadata[â](#update-column-metadata "Direct link to Update column metadata")
--------------------------------------------------------------------------------------------

Once you've imported your data assets from Atlan, you can edit the metadata for your selected data asset in Microsoft Excel. You can make changes to the column metadata once all the columns have been successfully imported.

You can only make changes to the metadata in the following columns:

* [*Description*](/product/capabilities/discovery/how-tos/add-descriptions)
* [*Certification Status*](/product/capabilities/discovery/how-tos/add-certificates)
* *Certification Message*
* [*Announcement Type*](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements)
* *Announcement Title*
* *Announcement Message*
* *[Tags](/product/capabilities/governance/tags/how-tos/attach-a-tag)*

You **cannot** make the following changes:

* Edit headers for any of the columns
* Edit the metadata in the *Column Name*, *Data Type*, *Propagated Tags*, and *Qualified Name* columns
* Delete any columns or rows

Any of these changes will not be pushed to Atlan and you'll receive an error message.

### Bulk update tags for columns[â](#bulk-update-tags-for-columns "Direct link to Bulk update tags for columns")

dangerYou cannot make any changes to the metadata in the *Propagated Tags* column.

Navigate to the *Tags* column to add tags to your column assets in Microsoft Excel:

When adding tags to columns:

* The tag must already exist in Atlan. If the tag does not exist in Atlan, updates will not sync and you will receive an error message.
* Tag match is case\-sensitive, ensure that the tag is formatted exactly as it exists in Atlan. For example, if the tag in Atlan is formatted as `Marketing Analysis`, then columns tagged with `marketing analysis` will not sync.
* You can add multiple tags in the *Tags* column \- separate multiple tags with a comma `,`.
* If you have added tags that exist in Atlan as well as ones that do not, *only* the existing tags will be synced. The unsupported tags will not sync and you will receive an error message.
* [Tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) is disabled by default in Atlan, hence tags will not be propagated.

Push your changes to Atlan[â](#push-your-changes-to-atlan "Direct link to Push your changes to Atlan")
--------------------------------------------------------------------------------------------------------

Once you've made changes to the column metadata, to push your changes:

1. In the menu bar of your Microsoft Excel workbook, click **Atlan**.
2. From the *Atlan* tab, click **Sync to Atlan**.
3. The Atlan sidebar will appear once the changes have synced.
    1. (Optional) Click **Open in Atlan** to verify the changes.
    2. In Atlan, an *Updated using Microsoft Excel* stamp will appear in the [activity log](/product/capabilities/discovery/faq#what-is-an-activity-log) for updated assets. (Optional) Click theÂ**Microsoft Excel**Â link to view the source spreadsheet from Atlan.

**Did you know?**You can [download impacted assets](/product/integrations/collaboration/spreadsheets/how-tos/download-impacted-assets-in-microsoft-excel) for impact analysis in Microsoft Excel.

**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [integration](/tags/integration)
* [crawl](/tags/crawl)

[PreviousHow to update column metadata in Google Sheets](/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-google-sheets)[NextTroubleshooting spreadsheets](/product/integrations/collaboration/spreadsheets/troubleshooting/troubleshooting-spreadsheets)

Copyright Â© 2025 Atlan Pte. Ltd.

