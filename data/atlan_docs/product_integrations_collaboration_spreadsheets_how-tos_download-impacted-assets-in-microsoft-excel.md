# Source URL
https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/download-impacted-assets-in-microsoft-excel

================================================================================

<!--
canonical: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/download-impacted-assets-in-microsoft-excel
link-alternate: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/download-impacted-assets-in-microsoft-excel
meta-description: Once you've [connected Atlan with Microsoft Excel](/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel), you can download impacted assets in Microsoft Excel. This can help you assess the downstream impact of any changes made to an upstream asset for [impact analysis](/product/capabilities/lineage/concepts/what-is-lineage#impact-analysis).
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you've [connected Atlan with Microsoft Excel](/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel), you can download impacted assets in Microsoft Excel. This can help you assess the downstream impact of any changes made to an upstream asset for [impact analysis](/product/capabilities/lineage/concepts/what-is-lineage#impact-analysis).
meta-og-locale: en
meta-og-title: Download impacted assets in Microsoft Excel | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/integrations/collaboration/spreadsheets/how-tos/download-impacted-assets-in-microsoft-excel
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Download impacted assets in Microsoft Excel | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Download impacted assets in Microsoft Excel
===========================================

Once you've [connected Atlan with Microsoft Excel](/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-microsoft-excel), you can download impacted assets in Microsoft Excel. This can help you assess the downstream impact of any changes made to an upstream asset for [impact analysis](/product/capabilities/lineage/concepts/what-is-lineage#impact-analysis).

dangerYou need to be logged into your Atlan instance before you can download impacted assets from Atlan in Microsoft Excel. If you do not have the [permission](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) to update asset metadata, your changes will neither be pushed to Atlan nor will a request be created for approval \- even if you receive a success message in Microsoft Excel. Ensure that you have the requisite permissions to update an asset before pushing your changes. Your user permissions are used to determine the bulk updates you can make to ensure that there is no adverse impact on assets beyond your scope of access.

[https://demo.arcade.software/u7exE4B7xtK5yXz58ssF?embed](https://demo.arcade.software/u7exE4B7xtK5yXz58ssF?embed)

Download impacted assets in Microsoft Excel[â](#download-impacted-assets-in-microsoft-excel "Direct link to Download impacted assets in Microsoft Excel")
-----------------------------------------------------------------------------------------------------------------------------------------------------------

To import impacted assets in Microsoft Excel:

1. In the menu bar of your Microsoft Excel workbook, click **Atlan**.
2. From the *Atlan* tab, clickÂ**Import Lineage** to open a list of your assets in a sidebar.
3. (Optional) To filter your assets by a specific asset type, in the Atlan sidebar, select the asset type.
4. In the Atlan sidebar on your worksheet, you can either:
    * Individually select the data asset(s) you want to import.
    * To the left of the *Import* button, click the **Select All** checkbox to select all the assets that have loaded in the sidebar. (Optional) Scroll down and click **Load more** to load more assets in the sidebar.
5. To select the type of impacted assets you'd like to download, in the Atlan sidebar, from the *Direction* dropdown:
    * To download downstream assets for [impact analysis](/product/capabilities/lineage/concepts/what-is-lineage#impact-analysis), click **Downstream**.
    * To download upstream assets for [root cause analysis](/product/capabilities/lineage/concepts/what-is-lineage#root-cause-analysis), click **Upstream**.
    * To download all impacted assets, click **Both**.
6. To download the impacted assets in Microsoft Excel:
    * Click **Import Lineage** to download all the impacted assets in one sheet.Â
    * Click the **vertical three dots** and then click **Import to new sheet** to download the assets in separate sheet tabs.
7. (Optional) Once download is successful, click the asset links in your spreadsheet to view the assets in Atlan.

The impacted assets are now available in Microsoft Excel! ð

Update column metadata for impacted assets[â](#update-column-metadata-for-impacted-assets "Direct link to Update column metadata for impacted assets")
--------------------------------------------------------------------------------------------------------------------------------------------------------

Once you've imported your impacted assets from Atlan, you can edit the column metadata for impacted assets in Microsoft Excel. You can make changes to the column metadata once all the columns have been imported successfully.

You can only make changes to the metadata in the following columns:

* [*Description*](/product/capabilities/discovery/how-tos/add-descriptions)
* [*Owner Users*](/product/capabilities/discovery/how-tos/add-owners)
* [*Owner Groups*](/product/capabilities/discovery/how-tos/add-owners)
* [*Certification Status*](/product/capabilities/discovery/how-tos/add-certificates)
* *Certification Message*
* [*Announcement Type*](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements)
* *Announcement Title*
* *Announcement Message*
* *[Tags](/product/capabilities/governance/tags/how-tos/attach-a-tag)*

You **cannot** make the following changes:

* Edit headers for any of the columns
* Edit the metadata in the following columns:
    + *Source Asset*
    + *Source Asset Connector*
    + *Source Asset Type*
    + *Impacted Asset*
    + *Impacted Asset Connector*
    + *Impacted Asset Type*
    + *Direction*
    + *Terms*
    + *Propagated Tags*
    + *Source URL*
    + *Qualified Name*
    + *Source Asset GUID*
    + *Impacted Asset GUID*
    + *Immediate Upstream* and *Immediate Downstream*
* Delete any columns or rows

Any of these changes will not be pushed to Atlan and you'll receive an error message.

**Did you know?**When adding tags or owners for impacted assets in Microsoft Excel, the tag or user name for the owner user or group must already exist in Atlan; name match is case\-sensitive, format the value exactly as it exists in Atlan; and you can add multiple tags or owners as comma\-separated values.

Push changes to Atlan[â](#push-changes-to-atlan "Direct link to Push changes to Atlan")
-----------------------------------------------------------------------------------------

Once you've made changes to the column metadata, to push your changes:

1. In the menu bar of your Microsoft Excel workbook, click the **Atlan** tab.
2. From the top left of the *Atlan* tab, click **Atlan** and then click **Sync to Atlan**.
3. A dialog box will appear once the changes have synced
**Tags:*** [data](/tags/data)
* [integration](/tags/integration)

[PreviousDownload impacted assets in Google Sheets](/product/integrations/collaboration/spreadsheets/how-tos/download-impacted-assets-in-google-sheets)[NextHow to export assets](/product/integrations/collaboration/spreadsheets/how-tos/export-assets)

Copyright Â© 2025 Atlan Pte. Ltd.

