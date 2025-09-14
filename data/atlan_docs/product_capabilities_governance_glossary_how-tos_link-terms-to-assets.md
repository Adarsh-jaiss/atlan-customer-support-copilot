# Source URL
https://docs.atlan.com/product/capabilities/governance/glossary/how-tos/link-terms-to-assets

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/glossary/how-tos/link-terms-to-assets
link-alternate: https://docs.atlan.com/product/capabilities/governance/glossary/how-tos/link-terms-to-assets
meta-description: Once you've [set up a glossary](/product/capabilities/governance/glossary/how-tos/set-up-glossaries), you can link terms from your glossary to your data assets in Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Once you've [set up a glossary](/product/capabilities/governance/glossary/how-tos/set-up-glossaries), you can link terms from your glossary to your data assets in Atlan.
meta-og-locale: en
meta-og-title: Link terms to assets | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/glossary/how-tos/link-terms-to-assets
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Link terms to assets | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Link terms to assets
====================

Once you've [set up a glossary](/product/capabilities/governance/glossary/how-tos/set-up-glossaries), you can link terms from your glossary to your data assets in Atlan.

Linking glossary terms with your data assets can help you:

* Provide additional context for your assets to other users in your organization.
* Create common definitions once and apply them many times to multiple assets.
* Offer an abstract point for applying [tags](/product/capabilities/governance/tags/concepts/what-are-tags) to be propagated to all linked assets \- including their downstream and child assets \- if [propagation is enabled](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply).

Example[â](#example "Direct link to Example")
-----------------------------------------------

If your data assets include personal information \- for example, email addresses \- you can link your assets to an `Email Address` term to provide context to your users.

* You can define the term `Email Address` once in the glossary.
* You can link the term to all the columns where an individual's email address appears.
* You can also tag the term as `PII` \- and all of the linked assets will be [tagged](/product/capabilities/governance/tags/how-tos/attach-a-tag) as `PII`.

[https://demo.arcade.software/XkARFk7F1pYOlp5zQU9H?embed](https://demo.arcade.software/XkARFk7F1pYOlp5zQU9H?embed)

Link terms to your assets[â](#link-terms-to-your-assets "Direct link to Link terms to your assets")
-----------------------------------------------------------------------------------------------------

dangerYou will first need to [create a glossary](/product/capabilities/governance/glossary/how-tos/set-up-glossaries) and add terms to it before you can link terms to your assets.

To link a term to an asset:

### From a term[â](#from-a-term "Direct link to From a term")

1. From the left menu on any screen, click **Glossary**.
2. Under *Glossary* in the left menu, click the name of your glossary.
3. Under your glossary name, click the category in which your term is nested and then click the term you would like to link to your assets.
4. In the term profile, next to *Overview*, click **Linked assets**.
5. Click **\+** **Link Assets** to get started.Â
6. (Optional) In the sidebar on the right, under the search bar, click an asset type to filter your assets \- for example, *Column*.
7. In the sidebar on the right, select the asset(s) to which you would like to link the term.
8. At the bottom of the sidebar, click **Link asset(s)** to confirm your selections.
9. (Optional) Under *Linked Assets*, next to the search bar, click the export icon to [export linked assets](/product/integrations/collaboration/spreadsheets/how-tos/export-assets) for terms to spreadsheets.

[https://demo.arcade.software/E8tev67ZUkKcA6a9EVAE?embed](https://demo.arcade.software/E8tev67ZUkKcA6a9EVAE?embed)

### From an asset[â](#from-an-asset "Direct link to From an asset")

1. From the left menu on any screen, click **Assets**.
2. On the *Assets* page, select the asset to which you would like to link a term.
3. Under *Terms* in the asset sidebar, click the **\+** sign to add a term to your asset.
4. In the dialog, expand the glossary menu and then click the term you would like to link to your assets.
5. Click **Save** to confirm your selections.

You can now view linked assets for your glossary term! ð

**Did you know?**You can also [set up playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks) to automate the task of updating asset metadata, such as terms and more.

Unlink terms from your assets[â](#unlink-terms-from-your-assets "Direct link to Unlink terms from your assets")
-----------------------------------------------------------------------------------------------------------------

To unlink a term from an asset:

### From a term[â](#from-a-term-1 "Direct link to From a term")

1. From the left menu on any screen, click **Glossary**.
2. Under *Glossary* in the left menu, click the name of your glossary.
3. Under your glossary name, click the category in which your term is nested and then click the term you would like to unlink from your assets.
4. In the term profile, next to *Overview*, click **Linked assets**.
5. (Optional) Under *Linked Assets*, next to the search bar, click the export icon to [export linked assets](/product/integrations/collaboration/spreadsheets/how-tos/export-assets) for terms to spreadsheets before unlinking them.
6. Under *Linked assets*, navigate to the asset(s) from which you would like to unlink the term.
7. To the right of the asset name, click the **three dots** and then click **Unlink asset**.

### From an asset[â](#from-an-asset-1 "Direct link to From an asset")

1. From the left menu on any screen, click **Assets**.
2. On the *Assets* page, select the asset from which you would like to unlink a term.
3. Under *Terms* in the asset sidebar, hover over the term, and in the top right of the term popover, click the **unlink button** to unlink the term from the asset.

Your assets will now be unlinked from the glossary term.

**Tags:*** [glossary](/tags/glossary)
* [business\-terms](/tags/business-terms)
* [definitions](/tags/definitions)

[PreviousBulk upload terms in the glossary](/product/capabilities/governance/glossary/how-tos/bulk-upload-terms-in-the-glossary)[NextWhat is a glossary?](/product/capabilities/governance/glossary/concepts/what-is-a-glossary)

Copyright Â© 2025 Atlan Pte. Ltd.

