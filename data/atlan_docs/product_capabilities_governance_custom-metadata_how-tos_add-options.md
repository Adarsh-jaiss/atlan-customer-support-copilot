# Source URL
https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/add-options

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/add-options
link-alternate: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/add-options
meta-description: :::warning Who can do this? You must be an admin user in Atlan to create options for custom metadata properties.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You must be an admin user in Atlan to create options for custom metadata properties.
meta-og-locale: en
meta-og-title: Add options | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/add-options
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Add options | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Add options
===========

Who can do this?You must be an admin user in Atlan to create options for custom metadata properties.

Options in Atlan stand for enumerations or enumerated data types. Options allow you to create your own set of predefined and related values. Once you've created your options, you can add them to your [custom metadata properties](/product/capabilities/governance/custom-metadata/concepts/what-is-custom-metadata) to ensure consistency of usage across the organization.

Example[â](#example "Direct link to Example")
-----------------------------------------------

Imagine that you would like to denote values for the data quality level of your metadata in Atlan. To solve for this, you could create an option `Data quality` and define three indicative values:

* `Bronze` \- for freshly crawled metadata
* `Silver` \- for asset enrichment in progress
* `Gold`Â \- for well\-documented assets

Once you've created the option, you can add it as a [custom metadata property](/product/capabilities/governance/custom-metadata/how-tos/manage-custom-metadata-structures#create-properties-in-the-structure). Then you can enrich your assets with this additional context for your data teams.Â

[https://demo.arcade.software/PwvYWDM2jIwjn7dBMI5c?embed](https://demo.arcade.software/PwvYWDM2jIwjn7dBMI5c?embed)

Create options[â](#create-options "Direct link to Create options")
--------------------------------------------------------------------

To create an option:

1. From the left menu of any screen, click **Governance**.
2. Under the *Metadata* heading, click **Options**.
3. Under the *Options* heading, click **Get started**.
4. In the *New option* dialog, enter the following details:
    1. For *Name*, enter a meaningful name for your option \- for example, `Data quality`.
    2. For *Values*, enter a list of values considered valid, separate each value with a semicolon `;` \- `Gold`, `Silver`, and `Bronze`.
5. Click **Create** to add your option.

You have just created an option! ð

To edit the values for your option, click on the pencil icon in the top right to make your changes and then save them.

**Did you know?**Atlan currently only supports [deleting options through API](https://developer.atlan.com/sdks/custom-metadata/delete-enums/?h=delete+option).

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousCustom Metadata](/product/capabilities/governance/custom-metadata)[NextControl access to metadata and data?](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data)

Copyright Â© 2025 Atlan Pte. Ltd.

