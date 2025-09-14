# Source URL
https://docs.atlan.com/product/capabilities/discovery/how-tos/search-and-discover-assets

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/discovery/how-tos/search-and-discover-assets
link-alternate: https://docs.atlan.com/product/capabilities/discovery/how-tos/search-and-discover-assets
meta-description: Atlan is a living catalog of all your data assets and knowledge. It lets you quickly discover and access your data, along with the tribal knowledge and business context.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Atlan is a living catalog of all your data assets and knowledge. It lets you quickly discover and access your data, along with the tribal knowledge and business context.
meta-og-locale: en
meta-og-title: Search and discover assets | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/discovery/how-tos/search-and-discover-assets
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Search and discover assets | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Search and discover assets
==========================

Atlan is a living catalog of all your data assets and knowledge. It lets you quickly discover and access your data, along with the tribal knowledge and business context.

Its Amazon\-like search and [filtering experience](/product/capabilities/discovery/how-tos/use-the-filters-menu) isn't just for data tables. It also extends to a variety of data assets, like columns, databases, SQL queries, BI dashboards, and much more.

To ensure a high\-quality search experience, Atlan recommends the following:

* [Certify your assets](/product/capabilities/discovery/how-tos/add-certificates)
* [Link terms to your assets](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets) to add business context
* [Enrich your assets with descriptions](/product/capabilities/discovery/how-tos/add-descriptions)
* [Star your assets](/product/capabilities/discovery/how-tos/star-assets) for easy access

**Did you know?**You can bookmark your [search results with applied filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) or share them with other Atlan users in your organization for quick and easy access.

Search superpowers[â](#search-superpowers "Direct link to Search superpowers")
--------------------------------------------------------------------------------

[https://demo.arcade.software/RN02vYTSaq0AJWg5PyK9?embed](https://demo.arcade.software/RN02vYTSaq0AJWg5PyK9?embed)

Let's find out what makes Atlan's search intuitive and super quick.

### 

Intelligent keyword recognition

Atlan supports powerful, intelligent search.Â When you search using keywords, the keywords in the matching search results will be highlighted for easy recognition. Even if your keyword contains an underscore `_` or a period `.` \- for example, `instacart_order` \- both keywords will be highlighted across all search results.

For keyword\-based search:

* If the keywords you're searching by is present in the asset name, [description](/product/capabilities/discovery/how-tos/add-descriptions), or [linked term](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets), only then will the asset appear in your search results.Â
* Atlan displays search results based on asset names \- technical name and [alias](/product/capabilities/discovery/how-tos/add-an-alias) \- that match your keyword(s).
* If the keyword is a [glossary term linked to assets](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets) or present in [asset descriptions](/product/capabilities/discovery/how-tos/add-descriptions), such assets will be boosted in search results.
* Whether your search query is incomplete (`insta`) or misspelled (`instacrt ordr`), Atlan's powerful search can still help you discover exactly what you need.

### Search from anywhere[â](#search-from-anywhere "Direct link to Search from anywhere")

There are multiple ways to start your search:

* Click the **Search assets across Atlan** bar on the homepage.
* Click **Assets** in the left\-side panel.
* Use **Cmd/Ctrl \+ K** to open the search page from *anywhere* in Atlan.

### Search using context[â](#search-using-context "Direct link to Search using context")

The *Assets* section offers a [variety of filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) to narrow down your search. Here are the different types of filters that you can use:

* **Source**: Search by [connectors](/product/connections/references/supported-sources), chosen from a list of connections within Atlan.
* **Domains**: Filter assets by [domains](/product/capabilities/governance/domains/how-tos/manage-domains), such as a single domain, multiple domains, or no domain.
* **Certificate**: Search based on the certificate attached to data assets, such as *Verified*, *Draft*, *Deprecated*, and *No certificate*.
* **Owners**: Filter by selecting one or more users. You can also toggle between *users* and *groups*Â to filter based on a group of users.
* **Tags**: Filter by user\-generated tags, such as `public`, `PII`, and more.
* **Terms**: Filter by terms from your glossaries, such as `cost`, `revenue`, or `P&L`.
* **Properties**: Filter assets by other properties, like technical name or [alias](/product/capabilities/discovery/how-tos/add-an-alias), [description](/product/capabilities/discovery/how-tos/add-descriptions), last updated, and so on.

Atlan's search results include a quick count of all the resulting data assets grouped by type. As you apply the filters, you'll see these counts change in real time.

You can also enter a keyword in the search bar and filter your results by a specific type of data asset. For instance, enter the keyword `order` in the search bar and then click the **Column** checkbox to view column results for your searched keyword.

### Sort search results[â](#sort-search-results "Direct link to Sort search results")

Atlan allows you to sort your search results in different ways. This helps you quickly find the assets you're interested in. Sorting options include:

* **Relevance**: Sort by how closely the search results match your searched keywords.
* **Name**: Sort by the asset name in an alphabetical or a reverse alphabetical order.
* **Updated on Atlan**: Sort by the newest or oldest updated assets.
* **Star count**: SortÂ assets by [most or fewest stars](/product/capabilities/discovery/how-tos/star-assets).
* **Order**: Sort the search results in an ascending or descending order.
* **Popularity**: Sort Snowflake and Google BigQuery assets by the [most or least popular assets](/product/capabilities/usage-and-popularity/how-tos/interpret-usage-metrics#view-and-sort-columns-by-popularity).

**Did you know?**The sorting options may vary depending on the asset type selected. For example, if you are viewing the results while filtering by the *Table* tab, you'll also have the option of sorting by the most or fewest number of rows and columns.

### Search with patterns[â](#search-with-patterns "Direct link to Search with patterns")

You can refine your search in Atlan with the following patterns:

* **Exact match search**: Wrap the keywords within single `''` or double `""` quotation marks when typing them in the search bar \- for example, `"instacart_total_users"`. Only the asset names with case\-insensitive exact match and following the order of the keywords will be boosted in the search results \- for example, `instacart_total_users` or `Instacart_Total_Users`. If the keywords are contained in the [asset description](/product/capabilities/discovery/how-tos/add-descriptions) or [linked terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets), such assets will show up next. Additionally, you can use exact match to search by the `qualifiedName` or globally unique identifier (GUID) of an asset.
* **Combined string of database, schema, and table**: For a more data\-friendly search experience, copy the combined string of `database.schema.table` (or `schema.table`) from your SQL editor and paste it in the search bar \- for example, `atlan_db.public.instacart_total_orders`.
* **Multiple phrase match**: When you enter two or more keywords, Atlan will find assets with asset names that partially match the keywords or a combination of them to narrow down the search results.

### See only what you want to see[â](#see-only-what-you-want-to-see "Direct link to See only what you want to see")

Atlan gives you the option to customize your search. Want to show or hide certain fields in your search results? Click the **3\-dot** icon next to the search bar to set display preferences for each field:

* [Description](/product/capabilities/discovery/how-tos/add-descriptions)
* [Terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets)
* [Tags](/product/capabilities/governance/tags/how-tos/attach-a-tag)
* [Connection](/product/connections/references/supported-sources)
**Tags:*** [data](/tags/data)
* [asset\-profile](/tags/asset-profile)

[PreviousDiscovery](/product/capabilities/discovery)[NextAccess archived assets](/product/capabilities/discovery/how-tos/access-archived-assets)

Copyright Â© 2025 Atlan Pte. Ltd.

