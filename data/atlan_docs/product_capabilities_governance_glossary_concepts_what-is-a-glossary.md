# Source URL
https://docs.atlan.com/product/capabilities/governance/glossary/concepts/what-is-a-glossary

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/glossary/concepts/what-is-a-glossary
link-alternate: https://docs.atlan.com/product/capabilities/governance/glossary/concepts/what-is-a-glossary
meta-description: A glossary is a list of terms that is organized in a specific way to help users understand their data assets. For example, terms like `cost`, `P&L`, and `revenue` can be used to group and search all financial data assets.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: A glossary is a list of terms that is organized in a specific way to help users understand their data assets. For example, terms like `cost`, `P&L`, and `revenue` can be used to group and search all financial data assets.
meta-og-locale: en
meta-og-title: A Glossary | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/glossary/concepts/what-is-a-glossary
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: A Glossary | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

A Glossary
==========

A glossary is a list of terms that is organized in a specific way to help users understand their data assets. For example, terms like `cost`, `P&L`, and `revenue` can be used to group and search all financial data assets.

Using familiar terminology helps people quickly understand the data and its context. This is a crucial element of data governance since it adds business context to the data initiatives of an organization.

In Atlan, glossary terms can be attached to any data asset and leveraged to power quick and easy data discovery.

Why do I need a glossary?[â](#why-do-i-need-a-glossary "Direct link to Why do I need a glossary?")
----------------------------------------------------------------------------------------------------

In today's diverse data teams, which include people from different backgrounds and use cases, not all of them think about their data in the same way.

For example, one team might think that a particular metric is showing an annualized rate, but the actual rate may be calculated quarterly. This could lead to some real confusion down the road. Defining data terms and sharing those definitions across your team can make a huge difference to data users at all levels of the organization.

For teams made up of data analysts, data engineers, data scientists, and decision makers, having a shared language is an important step towards ensuring better collaboration. Building a glossary allows your team to define the metrics, columns, and assets with the same meaning for everyone.

Highlights of the Atlan glossary[â](#highlights-of-the-atlan-glossary "Direct link to Highlights of the Atlan glossary")
--------------------------------------------------------------------------------------------------------------------------

Here's how the Atlan glossary can help your organization:

* Powers search and makes it easier to discover data assets
* Encourages the creation, maintenance, and enrichment of business and functional terms due to their direct and visible use in searches
* Allows crowdsourcing the task of attaching appropriate glossary terms to data assets
* Supports automated metadata management through auto\-glossary suggestions from the Atlan bot

Anatomy of the Atlan glossary[â](#anatomy-of-the-atlan-glossary "Direct link to Anatomy of the Atlan glossary")
-----------------------------------------------------------------------------------------------------------------

Atlan gives users the option to build hierarchical glossaries. A glossary term is the lowest unit that can exist independently inside a glossary. These terms can then be grouped into categories and linked together as related terms.

**Did you know?**This structure allows for glossaries from multiple domains.

Let's look at how terms and categories work together to build a glossary.

### Term[â](#term "Direct link to Term")

* A term is the lowest unit that is unique to each glossary.
* It describes the content of the data assets in a useful and precise way.
* It can exist independently, without belonging to any particular category or subcategory.

**Did you know?**Once youâve [added terms](/product/capabilities/governance/glossary/how-tos/set-up-glossaries#add-new-glossary-terms) to your glossaries, you can also [link them to your assets](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets). You can then use terms on the *Assets* page to quickly [filter your assets](/product/capabilities/discovery/how-tos/use-the-filters-menu#terms).

### Category[â](#category "Direct link to Category")

* A category is a way of organizing the terms in a glossary.
* It can be used to group together similar terms.
* Subcategories can be added within categories to provide more context in a glossary.

Associated terms[â](#associated-terms "Direct link to Associated terms")
--------------------------------------------------------------------------

Who can do this?You will need your Atlan administrator to [enable associated terms](/product/integrations/identity-management/sso/how-tos/enable-associated-terms) \- except related terms.

With associated terms, you can define semantic relationships between your terms. These provide additional context for common definitions in your organization.Â

### Related term[â](#related-term "Direct link to Related term")

* Similar in definition \- serves the purpose of a "see also" section in a dictionary.
* `Client` is a related term for `Customer`.

### Recommended term[â](#recommended-term "Direct link to Recommended term")

* Preferred form of usage for the current term applied.
* `User` may be preferred over `Customer` in the context of your organization.

### Synonym[â](#synonym "Direct link to Synonym")

* Interchangeable in meaning as another term.
* `Glossary` and `Dictionary`, or `Client` and `Customer`.

### Antonym[â](#antonym "Direct link to Antonym")

* Opposite in meaning to a particular term.
* `Minimum` is an antonym for the term `Maximum`, or `Loss` and `Profit` are antonyms.

### Translated term[â](#translated-term "Direct link to Translated term")

* Translated version of the same term in additional languages.Â
* `Cliente` is the Spanish term for `Customer`.

### Valid values for[â](#valid-values-for "Direct link to Valid values for")

* Defines values that are considered appropriate for a related term.
* `Red`, `Green`, `Blue`, and `Yellow` are valid values for the term `Color`.

### Classifies and Classified by[â](#classifies-and-classified-by "Direct link to Classifies and Classified by")

* These have a reciprocal relationship that helps provide more context for both terms.
* `Country` classifies `United States`, while `United States` is classified by `Country`.
**Tags:*** [glossary](/tags/glossary)
* [business\-terms](/tags/business-terms)
* [definitions](/tags/definitions)

[PreviousLink terms to assets](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets)[NextGlossary update request approval issue](/product/capabilities/governance/glossary/faq/glossary-approval-issue)

Copyright Â© 2025 Atlan Pte. Ltd.

