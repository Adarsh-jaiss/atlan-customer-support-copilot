# Source URL
https://docs.atlan.com/product/capabilities/discovery/faq

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/discovery/faq
link-alternate: https://docs.atlan.com/product/capabilities/discovery/faq
meta-description: Frequently asked questions about Atlan's Discovery capabilities.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Frequently asked questions about Atlan's Discovery capabilities.
meta-og-locale: en
meta-og-title: Discovery FAQs | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/discovery/faq
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Discovery FAQs | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Discovery FAQs
==============

How does Atlan handle archived or deleted assets?[â](#how-does-atlan-handle-archived-or-deleted-assets "Direct link to How does Atlan handle archived or deleted assets?")
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If an [asset is removed from a workflow](/product/capabilities/discovery/faq#delete-an-asset) or a [user loses permissions](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) to an asset, the asset will be [archived](/product/capabilities/discovery/how-tos/access-archived-assets#archived-assets) in Atlan. The asset will be unarchived with all the metadata intact if it is [included](/product/connections/how-tos/manage-connectivity) in the next workflow run or users permissions are restored.

In Atlan, an asset's `typename` and `qualifiedName` pair serves as a distinctive identifier. The `qualifiedName` is a string that has been concatenated and contains the asset's source, host, and hierarchy. The related asset in Atlan will not change unless a modification is made, such as changing the schema or table name.

Is it possible to search for fields across all data sources?[â](#is-it-possible-to-search-for-fields-across-all-data-sources "Direct link to Is it possible to search for fields across all data sources?")
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If you know exactly what you're looking for, Atlan suggests using exact match search. Wrap the search terms within double quotation marks `" "` when typing it in the search bar. For example, `"instacart_total_users"`.

For [contextual search](/product/capabilities/discovery/how-tos/search-and-discover-assets), the *Assets* page provides a [number of filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) to help you narrow down your search results. Filter data assets by various properties, asset types, and so on.

The search results in Atlan also provide a quick count of all the resulting data assets, organized by asset type. These counts will alter in real time as you apply filters.

What is included in the "All assets" view?[â](#what-is-included-in-the-all-assets-view "Direct link to What is included in the \"All assets\" view?")
-------------------------------------------------------------------------------------------------------------------------------------------------------

The *All assets* view includes *all* assets in your Atlan data estate.

If your Atlan admin has turned off [*View "All assets" in Assets Discovery* from Labs in the admin center](/product/administration/labs/how-tos/restrict-asset-visibility), you may be unable to see this view. In that case, you'll only be able to view the assets curated for the persona(s) or purpose(s) you belong to in Atlan. Admin users will still have full access to all assets, even when this default behavior is turned off.

Can I search by a value to find assets with that value?[â](#can-i-search-by-a-value-to-find-assets-with-that-value "Direct link to Can I search by a value to find assets with that value?")
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Atlan allows you to search and discover metadata, not data.

As a constantly updated data catalog of all your data assets and metadata, Atlan allows you to identify and [access your data assets](/product/capabilities/discovery/how-tos/search-and-discover-assets) as well as the [tribal knowledge and business context](/product/capabilities/governance/glossary/concepts/what-is-a-glossary) associated with them. The powerful, intelligent search returns relevant search results.

Why do I not see more results when searching with the search bar (or Cmd \+ K)?[â](#why-do-i-not-see-more-results-when-searching-with-the-search-bar-or-cmd--k "Direct link to Why do I not see more results when searching with the search bar (or Cmd + K)?")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The search bar is meant to be a quick search option. It works best when you know the name of the asset. As such, it only loads 20 search results at a time. You can also quickly access your [recently visited](/product/capabilities/discovery/concepts/what-are-asset-profiles) [starred assets](/product/capabilities/discovery/how-tos/star-assets) from the search bar.

For more in\-depth discovery, [search from the *Assets*](/product/capabilities/discovery/how-tos/search-and-discover-assets) page:

* More results
* [Additional filters](/product/capabilities/discovery/how-tos/use-the-filters-menu)

What is the timezone for data display?[â](#what-is-the-timezone-for-data-display "Direct link to What is the timezone for data display?")
-------------------------------------------------------------------------------------------------------------------------------------------

For asset properties such as *Last updated (in Atlan)*, *Last synced with source*, or *Created (in Atlan)*, the timestamps are displayed in local timezones based on the user's browser location. To learn more, see [How to interpret timestamps](/product/capabilities/discovery/concepts/how-to-interpret-timestamps).

Asset Profile FAQs[â](#asset-profile-faqs "Direct link to Asset Profile FAQs")
--------------------------------------------------------------------------------

### Can we replace or rename existing assets?[â](#can-we-replace-or-rename-existing-assets "Direct link to Can we replace or rename existing assets?")

The expected behavior will vary based on the [supported connector](/product/connections/references/supported-sources) and asset type. If the asset name is reflected in the `qualifiedName` of the asset and you rename the asset, Atlan will create a net\-new asset. This is because the `qualifiedName` determines [asset uniqueness](/faq/data-connections-and-integration#what-happens-to-asset-metadata-in-atlan-if-i-switch-to-a-new-server) in Atlan.

Consider the following examples:

* The name of a Snowflake table is part of its `qualifiedName`. Any changes to the table name in Snowflake will result in a new `qualifiedName`, and thus the creation of a new asset in Atlan.
* Conversely, the `qualifiedName` of Microsoft Power BI reports are based on the UUIDs of the assets in Microsoft Power BI \- no names are embedded. In this case, renaming a Microsoft Power BI report does not change its UUID in Microsoft Power BI. This means that the `qualifiedName` of that report in Atlan will remain unchanged. Atlan will simply update the existing asset. However, this may not be the case where a Microsoft Power BI table is concerned, as the table name is included in the `qualifiedName` of the asset.

If your use case is to enable quick discovery in Atlan, consider [adding a business\-friendly alias](/product/capabilities/discovery/how-tos/add-an-alias) to the asset.

### What is an activity log?[â](#what-is-an-activity-log "Direct link to What is an activity log?")

The activity log in the asset sidebar provides a changelog for your data assets. Having a record of all the changes made to an asset can help build trust in your data assets and promote transparency across your organization.

#### View the activity log of an asset[â](#view-the-activity-log-of-an-asset "Direct link to View the activity log of an asset")

[https://demo.arcade.software/lPcCzumVkMKwCU9UD5aN?embed](https://demo.arcade.software/lPcCzumVkMKwCU9UD5aN?embed)

To view the activity log of an asset:

1. From the left menu of any screen in Atlan, click **Assets**.
2. Click on an asset to view its asset profile.
3. From the asset sidebar to the right, click the **Activity** tab to view the activity log.
4. If an asset was updated from [Google Sheets](/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-google-sheets) or [Microsoft Excel](/product/integrations/collaboration/spreadsheets/how-tos/update-column-metadata-in-microsoft-excel), an *Updated using Google Sheets* or *Updated using Microsoft Excel* stamp will appear, respectively. (Optional) Click the **Google Sheets** or **Microsoft Excel** link to view the source spreadsheet.
5. (Optional) To filter the activity log by a specific type of activity, under *Activity*, click the dropdown arrow and then:
    * Click **Alias** to view [alias activity](/product/capabilities/discovery/how-tos/add-an-alias) by user and timestamp of update.
    * Click **Description** to view any changes in the [description](/product/capabilities/discovery/how-tos/add-descriptions) of an asset.
    * Click **Starred** to view [starred activity](/product/capabilities/discovery/how-tos/star-assets) by user and timestamp.
    * Click **Announcement** to view any changes to the [announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) on an asset.
    * Click **Terms** to view any updates on linked [terms](/product/capabilities/governance/glossary/how-tos/set-up-glossaries#add-new-glossary-terms).
    * Click **Certificate** to view any changes in the [certification status](/product/capabilities/discovery/how-tos/add-certificates) of an asset.
    * Click **Owners** to view any changes to the [ownership](/product/capabilities/discovery/how-tos/add-owners) of an asset.
    * Click **Tag Added** or **Tag Removed** to view any changes for [tags directly added](/product/capabilities/governance/tags/how-tos/attach-a-tag) to an asset.
    * Click **Tag Added (Propagation)** or **Tag Removed (Propagation)** to view any changes for [tags propagated](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) to an asset.
    * Click **Column Added**, **Column Deleted**, or **Column Updated** to view column changes.
    * Click **Readme Added** or **Readme Updated** to view when a [README was created](/product/integrations) for an asset and which user created or updated it.
6. (Optional) Click the **Filter by column** menu to filter your activity logs by specific columns.

You can now view all the changes that were made to an asset in the activity log! ð

**Did you know?**Activity logs for metadata changes are persisted throughout the lifecycle of the Atlan instance for your organization.

### Why do dbt descriptions keep getting deleted?[â](#why-do-dbt-descriptions-keep-getting-deleted "Direct link to Why do dbt descriptions keep getting deleted?")

If you notice that the descriptions from a Snowflake table, for example, get deleted when dbt is your source of truth, it is likely that you have the data source scheduled to run after the dbt run. Atlan recommends following the order of operations as documented in [How to order workflows](/product/connections/how-tos/order-workflows).

You can also use dbt's `persist_docs` feature to ensure that your metadata [persists through workflow runs](https://docs.getdbt.com/references/resource-configs/persist_docs%C2%A0).

### What is the timeframe for recently verified assets?[â](#what-is-the-timeframe-for-recently-verified-assets "Direct link to What is the timeframe for recently verified assets?")

Atlan displays up to 20 most recently verified assets at a time in the *Recently verified assets* section on your Atlan homepage. You can scroll down further and click **Load more** to view more recently verified assets. This is not based on any particular timeline. In fact, this list may include assets that were updated as long as a week ago, if no new assets were verified more recently.

### What signals Atlan to auto\-add the deprecated certifications in Looker?[â](#what-signals-atlan-to-auto-add-the-deprecated-certifications-in-looker "Direct link to What signals Atlan to auto-add the deprecated certifications in Looker?")

These certifications are sourced from Looker. Once the [Looker crawler](/apps/connectors/business-intelligence/looker/how-tos/crawl-looker) has run successfully and detected that an asset was deleted, Atlan will attached a *Deprecated* certificate to the asset because it no longer exists at source. For example:

* If tiles are deleted, the API response generated is titled *Look Deleted*. In this case, Atlan will add the deprecated certificate.
* If Atlan crawls any models that do not have a project associated with them (indicated by a missing `project_name` key in the model API response), Atlan adds a deprecated certificate to the asset.

### Is it possible to add PDFs to an asset README?[â](#is-it-possible-to-add-pdfs-to-an-asset-readme "Direct link to Is it possible to add PDFs to an asset README?")

Atlan currently does not support embedding a PDF file in an asset README. Alternatively, PDF files can be [linked as a resource](/product/capabilities/discovery/how-tos/add-a-resource).

### How does version control work for description changes in source tools vs. Atlan?[â](#how-does-version-control-work-for-description-changes-in-source-tools-vs-atlan "Direct link to How does version control work for description changes in source tools vs. Atlan?")

Considering that users may update metadata in Atlan and the source tool, Atlan [manages descriptions in two fields](https://developer.atlan.com/snippets/common-examples/descriptions/) \- populating either or both depending on where it was created or updated. This is the format Atlan follows:

* Source descriptions are stored in the `description` field
* Any description added or updated in Atlan is stored in the `userDescription` field

Separating them into two fields ensures that the connection package does not override the descriptions entered by users in Atlan every time the workflow runs and updates the asset. This way, the description field in Atlan becomes the source of truth.

There is one exception though. If the description field has not been edited at all in Atlan and the connection package only ever brings the descriptions from the source, the workflow will keep updating the description field with what is available at source \- only source edits will come through.

Once the `description` field is edited in Atlan, the `userDescription` field takes over. If you would like to restore the original source description, simply clear the description added in Atlan and it will automatically revert to the source description.

As a best practice, we recommend all subsequent edits to the description be done in Atlan.

This is valid across all connector workflows.

### Can Atlan track schema changes?[â](#can-atlan-track-schema-changes "Direct link to Can Atlan track schema changes?")

Atlan tracks schema changes for SQL sources, which can be viewed in the [activity log](/product/capabilities/discovery/faq#what-is-an-activity-log) of an asset. However, Atlan is not a schema registry or a data modeling tool such as dbt.

### Are different fonts supported for READMEs and descriptions?[â](#are-different-fonts-supported-for-readmes-and-descriptions "Direct link to Are different fonts supported for READMEs and descriptions?")

Atlan currently does not support customizing the following for asset [descriptions](/product/capabilities/discovery/how-tos/add-descriptions), [READMEs](/product/integrations), and [README templates](/product/integrations):

* Fonts
* Font sizes
* Font colors

### Can Atlan handle assets with a large number of rows and columns?[â](#can-atlan-handle-assets-with-a-large-number-of-rows-and-columns "Direct link to Can Atlan handle assets with a large number of rows and columns?")

You can safely catalog your assets in Atlan, regardless of the number of rows or columns. Since Atlan only extracts metadata, data volume is not a consideration. Note that if an asset has a large number of columns, the [column preview](/product/capabilities/discovery/concepts/what-are-asset-profiles) in the asset profile may take some time to load.

### Why do I not see any tables or columns under database, only schema?[â](#why-do-i-not-see-any-tables-or-columns-under-database-only-schema "Direct link to Why do I not see any tables or columns under database, only schema?")

If you're viewing related assets for databases from the *Relations* tab in the asset sidebar, Atlan will only display schemas. You can click the schema asset and then open the *Relations* tab of the schema to view tables and views.

To find tables and views contained within a database, Atlan also recommends using the [database asset type filter](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick discovery.

### Is the sample data preview cached?[â](#is-the-sample-data-preview-cached "Direct link to Is the sample data preview cached?")

When previewing sample data on any asset, Atlan retrieves the sample data from source each time. No data is cached in Atlan.

### Delete an asset[â](#delete-an-asset "Direct link to Delete an asset")

Have one or more assets in Atlan that you don't want to be there? You have several options for removing them.

#### Specific assets[â](#specific-assets "Direct link to Specific assets")

To remove targeted, specific assets [use one of our SDKs or our open API](https://developer.atlan.com/snippets/advanced-examples/delete/).

#### Set of related assets[â](#set-of-related-assets "Direct link to Set of related assets")

To remove a set of related assets, such as an entire schema:

1. [Modify the connector's configuration](/product/connections/how-tos/manage-connectivity) with a filter to exclude the asset(s).
2. Re\-run the connector's workflow with the new configuration.

**Did you know?**This will [archive](/product/capabilities/discovery/how-tos/access-archived-assets#archived-assets) the schema and its assets.

#### An entire connection's assets[â](#an-entire-connections-assets "Direct link to An entire connection's assets")

To remove an entire connection and all its assets, see [How to delete a connection](/product/integrations/automation/connections/how-tos/delete-a-connection).

### If an asset is deleted via API, will workflows recreate the asset on the next run?[â](#if-an-asset-is-deleted-via-api-will-workflows-recreate-the-asset-on-the-next-run "Direct link to If an asset is deleted via API, will workflows recreate the asset on the next run?")

If you delete an asset at source, Atlan will [archive](/product/capabilities/discovery/how-tos/access-archived-assets#archived-assets) that asset in the next crawler run. Atlan recommends that you manage additions or deletions through source workflows. Considering that Atlan workflows run differential crawls, any changes to your assets will be reflected in subsequent crawler runs. This helps deliver faster runtimes and improves workflow performance.

If you delete an asset using APIs, there can be two scenarios:

* Archived:
    + Assets are soft\-deleted, moving to an *Archived* state.
    + The next workflow run will restore the asset only if any changes are made to any of its source metadata properties \- for example, a new column was added.
    + You can also [restore archived assets](https://developer.atlan.com/snippets/advanced-examples/restore/?h=).
* Hard\-deleted:
    + The asset is completely removed from the metastore.
    + The next workflow run creates a new asset if the previously deleted asset is still present or reintroduced in the source system. For example, this can happen if the asset was never actually removed from the source or if it was deleted and later recreated. However, the newly created asset doesn't retain any of its original Atlan metadata.
    + You **can't** restore hard\-deleted assets.

Atlan recommends the deletion of assets to be managed by source workflows. The delete and restore endpoints are generally meant for assets created via APIs.

### Add a README[â](#add-a-readme "Direct link to Add a README")

A README is an essential part of every code repository. The better the README, the more collaborators will want to work on your code. The same holds true for your data assets.

Each data asset should have its own README, which provides a description of its characteristics and other critical information. Atlan allows users to add a README for every data asset, using an intuitive, rich text editor.

You can document the tribal knowledge associated with each data asset in a README and reduce dependencies on your team members. The README appears right below each data table in the asset profile, displaying the data and the metadata on the same page and bridging the gap between the two.

Atlan currently supports the following file types for asset READMEs:

* Google Docs
* Google Sheets
* Google Slides
* Miro boards
* FigJam boards
* Lucidchart
* dbdiagram
* ERD Lab
* Microsoft Word
* Microsoft Excel
* Microsoft PowerPoint
* Google Data Studio
* Google Looker Studio
* Canva

#### Add a README[â](#add-a-readme-1 "Direct link to Add a README")

A README can be added to different types of data assets in Atlan, including BI dashboards, widgets, columns, databases, and schemas.

The character limit for READMEs is 100,000 characters. A portion of this limit is used to ensure compatibility with rich text formatting, slightly reducing the available character limit.

To add a README to an asset, follow these steps:

1. On the Atlan homepage, click **Assets** in the left menu.
2. Click on an asset to view its asset profile.
3. In the *Readme* section of the asset profile, click **\+Add**.
4. You can either:
    * Click **Blank Page** to create a new README from scratch.
    * Click **Use** to select an [existing template](/product/integrations) as a starting point.
5. Enter your knowledge into the README. Type `/` to use the text editor options to format your text, embed links, and more:
    * Click **Heading 1** to add a title or main heading.
    * Click **Heading 2** to add subheadings and create sections.
    * Click **Heading 3** to create subcategories within sections.
    * Click **Bulleted List** to create a bulleted list.
    * Click **Numbered List** to create an ordered list.
    * Click **Checklist** to create a checklist of items.
    * Click **Formula** to add formulae from a [list of supported functions](https://katex.org/docs/supported.html).
    * Click **Code** to add a code snippet.
    * Click **Image** to embed or upload an image.
    * Click **Quote** to add block quotations.
    * Click **Mention** to tag another user in your Atlan workspace.
    * Click **Table** to create a table.
    * Click **Google Docs** to paste a Google Doc link and embed your online documents.
    * Click **Google Sheets** to paste a Google Sheets link and embed your online spreadsheets.
    * Click **Google Slides** to paste a Google Slides link and embed your online presentations.
    * Click **Miro Board** to paste a Miro board link and embed your boards.
    * Click **FigJam** to paste a FigJam link and embed your boards.
    * Click **Lucidchart** to paste a Lucidchart link and embed your documents or models.
    
    danger To embed a Lucidchart document or model, you will need to activate the embed code. Activating an embed code will disable password protection on published documents and make them accessible publicly.
    * Click **DBDiagram** to paste a dbdiagram link and embed your database diagrams.
    * Click **ERD Lab** to paste an ERD Lab link and embed your entity relationship diagrams.
    * Click **Microsoft Word** to paste a Microsoft Word link and embed your online documents.
    * Click **Microsoft Excel** to paste a Microsoft Excel link and embed your online spreadsheets.
    * Click **Microsoft PowerPoint** to paste a Microsoft PowerPoint link and embed your online presentations.
    * Click **Google Data Studio** or **Google Looker Studio** to paste a Google Data Studio or Google Looker Studio link and embed your reports and dashboards.
    * Click **Canva** to paste a Canva link and embed your Canva graphics and presentations.
6. Click **Save**.

Your README is ready to be shared! ð

Although it may take some time to create, a README is a critical step for documenting any data asset and making it trustworthy.

[https://demo.arcade.software/bk6PNylkJ8uxfdDbkaJg?embed](https://demo.arcade.software/bk6PNylkJ8uxfdDbkaJg?embed)

#### Use README shortcuts[â](#use-readme-shortcuts "Direct link to Use README shortcuts")

Atlan supports keyboard and markdown shortcuts to supercharge your README documentation.

##### Keyboard shortcuts[â](#keyboard-shortcuts "Direct link to Keyboard shortcuts")

In the table below, `Mod` stands for modifier key \- `Command` for Mac and `Ctrl` for Windows.

| Shortcut | Action |
| --- | --- |
| `Mod + Shift + B` | block quote |
| `Mod + B` | bold |
| `Mod + I` | italics |
| `Mod + Shift + 8` | bulleted list |
| `Mod + E` | code |
| `Mod + Alt + C` | code block |
| `Enter` thrice, `â` | exit code block |
| `Mod + Alt + 1` | heading 1 |
| `Mod + Alt + 2` | heading 2 |
| `Mod + Alt + 3` | heading 3 |
| `Mod + Alt + 4` | heading 4 |
| `Mod + Alt + 5` | heading 5 |
| `Mod + Alt + 1` | heading 6 |
| `Enter` | add new list item |
| `Shift + Tab` | uplift list item |
| `Tab` | sink list item |
| `Mod + Shift + 7` | ordered list |
| `Mod + Alt + 0` | set paragraph |
| `Mod + Shift + X` | strikethrough |
| `Mod + U` | underline |
| `Mod + Shift + 9` | toggle task list |
| `Mod + Shift + L` | left align text |
| `Mod + Shift + E` | center align text |
| `Mod + Shift + R` | right align text |
| `Mod + Shift + J` | justify text |
| `Mod + Shift + H` | highlight text |
| Within a table: | Â |
| `Tab` | go to next cell |
| `Shift + Tab` | go to previous cell |
| `Backspace` | delete table when all cells are selected |
| `Mod - Backspace` | delete table when all cells are selected |
| `Delete` | delete table when all cells are selected |
| `Mod - Delete` | delete table when all cells are selected |

##### Markdown shortcuts[â](#markdown-shortcuts "Direct link to Markdown shortcuts")

Markdown shortcuts are triggered by pressing space after the shortcut \- except for bold and italics. For example, to add a block quote, type `>` and then tap the spacebar.

| Shortcut | Action |
| --- | --- |
| `>` | block quote |
| `**` (text) `**`, `__` | bold |
| `*` (text) `*`, `_` | italics |
| `-` | bulleted list |
| ``` | code |
| `````, `~~~` | code block |
| `#` | heading 1 |
| `##` | heading 2 |
| `###` | heading 3 |
| `####` | heading 4 |
| `#####` | heading 5 |
| `######` | heading 6 |
| `---`,`--`, `___` | horizontal divider |
| any numeric digit | ordered list |
| `~~` | strikethrough |
| `[]` | unchecked task |
| `[x]` | checked task |
| `==` | highlight |

### Does Atlan support asset previews?[â](#does-atlan-support-asset-previews "Direct link to Does Atlan support asset previews?")

Yes, Atlan provides asset previews for supported tools to help with quick discovery and give you the context you need. Typically, the *What does Atlan crawl from (connector name)?* documentation will indicate whether asset previews are supported for a specific connector.

For example, Atlan supports asset previews for:

* [Tableau worksheets and dashboards](/apps/connectors/business-intelligence/tableau/references/what-does-atlan-crawl-from-tableau)
* [Microsoft Power BI reports](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi)
* [Google BigQuery tables, views, and materialized views](/apps/connectors/data-warehouses/google-bigquery/references/what-does-atlan-crawl-from-google-bigquery)
* [Sigma workbooks](/apps/connectors/business-intelligence/sigma/references/what-does-atlan-crawl-from-sigma)

### Can I search for assets by README, description, or other metadata?[â](#can-i-search-for-assets-by-readme-description-or-other-metadata "Direct link to Can I search for assets by README, description, or other metadata?")

If the keywords you're searching by is present in the asset name or [description](/product/capabilities/discovery/how-tos/add-descriptions), only then will the asset appear in your search results. You can also use a [variety of filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) to narrow down your search.

Note that asset READMEs are currently not searchable in Atlan. This is because Atlan stores them as a relation to a data asset rather than as a direct metadata attribute.

### Can I add the Google Sheets extension for everyone in my organization?[â](#can-i-add-the-google-sheets-extension-for-everyone-in-my-organization "Direct link to Can I add the Google Sheets extension for everyone in my organization?")

Yes! To install the Google Sheets Atlan extension at the workspace level, follow the instructions in this [guide](https://support.google.com/a/answer/172482?hl=en). You will need to be an administrator or have access to the admin console of your organization's Google account for this setup.

Once installed, users in your organization can [connect Atlan with Google Sheets](/product/integrations/collaboration/spreadsheets/how-tos/integrate-atlan-with-google-sheets#connect-atlan-with-google-sheets) to start using the extension.

### Can I embed presentations or docs from SharePoint in a README?[â](#can-i-embed-presentations-or-docs-from-sharepoint-in-a-readme "Direct link to Can I embed presentations or docs from SharePoint in a README?")

Yes, you can embed links to your Microsoft Word, Excel, and PowerPoint files stored in SharePoint or OneDrive in READMEs. Refer to [How to add a README](/product/integrations) to learn more.

### Why can hard deleted assets be immediately restored after deletion?[â](#why-can-hard-deleted-assets-be-immediately-restored-after-deletion "Direct link to Why can hard deleted assets be immediately restored after deletion?")

The [API](https://developer.atlan.com/snippets/advanced-examples/delete/) is eventually consistent. This means that there is a short window of time, up to a few minutes, during which you can use the restore API endpoint to restore the asset that was hard deleted \- even if it no longer appears on the UI.

### How can I make external documents and spreadsheets appear as assets in Atlan?[â](#how-can-i-make-external-documents-and-spreadsheets-appear-as-assets-in-atlan "Direct link to How can I make external documents and spreadsheets appear as assets in Atlan?")

Atlan supports [cataloging files](https://developer.atlan.com/patterns/create/file/) through APIs. The [supported file types](/product/connections/references/supported-sources) include DOC, Excel, PPT, CSV, TXT, JSON, XML, and ZIP files.

### Will Atlan send a notification if there's a new table added to my schema?[â](#will-atlan-send-a-notification-if-theres-a-new-table-added-to-my-schema "Direct link to Will Atlan send a notification if there's a new table added to my schema?")

You can configure any of the following options to receive notifications on asset additions:

* [Create a webhook](/product/integrations/automation/webhooks/how-tos/create-webhooks)
* [Use the asset change notification custom package](/get-started/how-tos/custom-solutions)
**Tags:*** [discovery](/tags/discovery)
* [faq](/tags/faq)
* [search](/tags/search)
* [assets](/tags/assets)
* [data](/tags/data)
* [faq\-discovery](/tags/faq-discovery)

[PreviousProvide credentials to view sample data](/product/capabilities/discovery/references/provide-credentials-to-view-sample-data)

Copyright Â© 2025 Atlan Pte. Ltd.

