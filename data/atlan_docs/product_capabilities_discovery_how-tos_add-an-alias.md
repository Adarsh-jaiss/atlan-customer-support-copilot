# Source URL
https://docs.atlan.com/product/capabilities/discovery/how-tos/add-an-alias

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/discovery/how-tos/add-an-alias
link-alternate: https://docs.atlan.com/product/capabilities/discovery/how-tos/add-an-alias
meta-description: An alias is a business-oriented, alternate name that you can specify for your assets in Atlan. You can either manually add a more descriptive and user-friendly alias or use [Atlan AI](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai) to do the same, if [Atlan AI is enabled in your Atlan workspace](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai). This can help you improve the readability of your asset names while providing useful context to your users.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: An alias is a business-oriented, alternate name that you can specify for your assets in Atlan. You can either manually add a more descriptive and user-friendly alias or use [Atlan AI](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai) to do the same, if [Atlan AI is enabled in your Atlan workspace](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai). This can help you improve the readability of your asset names while providing useful context to your users.
meta-og-locale: en
meta-og-title: Add an alias | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/discovery/how-tos/add-an-alias
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Add an alias | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Add an alias
============

Who can do this?Any [non\-guest user *with* edit access to an asset's metadata](/product/capabilities/requests/concepts/what-are-requests) can add an alias. This only includes admin and member users.

An alias is a business\-oriented, alternate name that you can specify for your assets in Atlan. You can either manually add a more descriptive and user\-friendly alias or use [Atlan AI](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai) to do the same, if [Atlan AI is enabled in your Atlan workspace](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai). This can help you improve the readability of your asset names while providing useful context to your users.

Atlan recommends adding an alias that's unique to each asset, in a one\-to\-one relationship. To relate your assets, you can instead [attach tags](/product/capabilities/governance/tags/how-tos/attach-a-tag) to group them by use case or [link terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets) to group them conceptually.

Atlan currently supports adding an alias to everything EXCEPT the following asset types:

* Database
* Schema
* Connection
* Process, including
    + ConnectionProcess
    + BIProcess
    + ColumnProcess
* Query

Example[â](#example "Direct link to Example")
-----------------------------------------------

For an asset with a technical name like `FCT_SUPPLIER_TRANSACTIONS`, you can add `Supplier Transaction Records` as an alias. Once you have added an alias, you can:

* [Search for assets](/product/capabilities/discovery/how-tos/search-and-discover-assets) either with their technical names or aliases, Atlan will match on the most relevant title.
* Use the [*Title* property filter](/product/capabilities/discovery/how-tos/use-the-filters-menu) to filter for assets either by their technical names or aliases.
* Set [asset name display preferences for personas](/product/capabilities/governance/access-control/how-tos/create-a-persona), choosing whether the technical name or alias should be displayed prominently in search and discovery.
* View aliases in [search results](/product/capabilities/discovery/how-tos/search-and-discover-assets), asset preview, [asset profile](/product/capabilities/discovery/concepts/what-are-asset-profiles), [asset sidebar](/product/capabilities/discovery/concepts/what-are-asset-profiles), and [lineage graph](/product/capabilities/lineage/how-tos/view-lineage).

[https://demo.arcade.software/9yfjCxFdUGWKVyN7SyWV?embed&show_copy_link=true](https://demo.arcade.software/9yfjCxFdUGWKVyN7SyWV?embed&show_copy_link=true)

Add an alias[â](#add-an-alias "Direct link to Add an alias")
--------------------------------------------------------------

To add an alias to your asset:

1. From the left menu of any screen in Atlan, click **Assets**.
2. On the *Assets* page, click any asset with a technical name. To add an alias, you can either:
    * Open the asset profile, and to the right of the asset name, click the pencil icon.
    * Navigate to the *Overview* sidebar, and to the right of the asset name, click the pencil icon.
3. In the *Add an alias* dialog, you can either:
    * In the *Type a business\-friendly name* field, enter an alias for your asset.
    * If [Atlan AI is enabled](/product/capabilities/atlan-ai/concepts/what-is-atlan-ai), under *Atlan AI Suggested*, click an Atlan AI\-suggested alias for your asset. (Optional) Click the refresh icon to regenerate Atlan AI suggestions and compare different sets of suggestions.
4. Click **Add** to save your preferred alias for the asset.
5. (Optional) Once you have added an alias, you can:
    * Hover over the asset name to view both the technical name and alias in a popup.
    * From the asset sidebar tabs on the right, click the **Activity** tab to view [alias activity](/product/capabilities/discovery/faq#what-is-an-activity-log) by user and timestamp of update.
    * To edit your alias, click the pencil icon to make any changes.
    * From the [filters menu](/product/capabilities/discovery/how-tos/use-the-filters-menu) on the left, click **Properties** and then click **Title** to filter assets by the technical name or alias.

Your asset will now display an alias! ð

You can also [set asset name display preferences](/product/capabilities/governance/access-control/how-tos/create-a-persona) to technical name or alias for your personas. If no preference has been specified and an alias is available, then Atlan will display the alias over the technical name on an asset by default.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousAccess archived assets](/product/capabilities/discovery/how-tos/access-archived-assets)[NextStar assets](/product/capabilities/discovery/how-tos/star-assets)

Copyright Â© 2025 Atlan Pte. Ltd.

