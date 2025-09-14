# Source URL
https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/manage-custom-metadata-structures

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/manage-custom-metadata-structures
link-alternate: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/manage-custom-metadata-structures
meta-description: :::warning Who can do this? You must be an admin user to manage custom metadata structures, including defining new ones.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You must be an admin user to manage custom metadata structures, including defining new ones.
meta-og-locale: en
meta-og-title: Manage custom metadata structures | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/manage-custom-metadata-structures
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Manage custom metadata structures | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Manage custom metadata structures
=================================

Who can do this?You must be an admin user to manage custom metadata structures, including defining new ones.

Before users or integrations can enrich assets with custom metadata, you must first define its structure.

Create custom metadata structure[â](#create-custom-metadata-structure "Direct link to Create custom metadata structure")
--------------------------------------------------------------------------------------------------------------------------

To create a new custom metadata structure:

1. From the left menu of any screen, click **Governance**.
2. Under the *Metadata* heading, click **Custom Metadata**.
3. Under the *Start adding custom metadata* heading, click the **\+** **Get started** to add a new structure:
    1. For *Name* enter a name for the custom metadata structure. (In [our examples](/product/capabilities/governance/custom-metadata/concepts/what-is-custom-metadata#examples), this would be *IPR* or *ETL*.)
    2. (Optional) To personalize your custom metadata, to the left of the name, click the image icon. From the upper right of the corresponding dialog:
        * Click **Icons** to add an icon to your custom metadata. Click the gray box to change the color of the icon to green, yellow, or red.
        * Click **Emoji** to add an emoji to your custom metadata.
        * Click **Upload Image** to upload an image for your custom metadata. The recommended size for image uploads is 24x24 pixels.
    3. (Optional) Add a description of the custom metadata below these.
    4. At the bottom right of the dialog, click the **Create** button.

[https://demo.arcade.software/zdVzDrbZpcMyE0caUi4y?embed](https://demo.arcade.software/zdVzDrbZpcMyE0caUi4y?embed)

Create properties in the structure[â](#create-properties-in-the-structure "Direct link to Create properties in the structure")
--------------------------------------------------------------------------------------------------------------------------------

To create custom metadata properties within a custom metadata structure:

1. From the left menu of any screen, click **Governance**.
2. Under the *Metadata* heading, click **Custom Metadata**.
3. Under the *Custom Metadata* heading, select the custom metadata structure you want to change.
4. Click the **New property** button (no properties yet) or **Add property** button (to add more properties):
    1. For *Name*, enter a name for one property. (In [our examples](/product/capabilities/governance/custom-metadata/concepts/what-is-custom-metadata#examples), this would be one of *License type*, *Provider*, *Job link*, and so on.)
    2. For *Type*, select the type of value you expect users to use for this property:
        * The **Text** type allows free\-form text values.
        * The **Integer** type allows only whole numbers (no decimals).
        * The **Decimal** type allows fractional numbers (those with decimal points).
        * The **Boolean** type allows only a `Yes` or a `No` value.
        * The **Date** type allows both date and time values in the following format \- day, month, year, hours, minutes, and seconds.
        * The **Options** type allows you to [define your own set of predefined options](/product/capabilities/governance/custom-metadata/how-tos/add-options) for values that are valid.
        * The **Users** type allows only existing Atlan users as values.
        * The **Groups** type allows only existing Atlan groups as values.
        * The **URL** type allows only web links.
        * The **SQL** type allows only SQL code.
    3. (Optional) For *Description*, enter an explanation for how you expect users to use this property.
    4. If you chose *Options* as the type, either:
        * Under *Select Options*, select an existing set of options to reuse.
        * Click the **Create New** link to create a new set of options.
            1. Under *Option name*, give the options a name.
            2. Under *Values*, enter the list of values considered valid (separated by `;`).
    5. (Optional) Under *Assets*, you can configure the connections and asset types on which this custom metadata should be visible to:
        1. For *Connections*, select the [connection](/product/connections/references/supported-sources) to which you want to limit users to be able to enrich assets with this property. For example, you may want a property to only apply to a specific Snowflake connection.
        2. For *Applicable asset types*, select the kinds of assets you want users to be able to enrich with this property. For example, you may want a property to only apply to SQL assets like tables and views, and not to BI assets.
    6. Â (Optional) Under *Glossary assets*, you can configure the glossaries and glossary asset types on which this custom metadata should be visible to:
        1. For *Glossaries*, select the [glossaries](/product/capabilities/governance/glossary/how-tos/set-up-glossaries) to which you want to limit users to be able to enrich assets with this property.
        2. For *Applicable asset types*, select the [glossary assets](/product/capabilities/governance/glossary/concepts/what-is-a-glossary) you want users to be able to enrich with this property. For example, you may want a property to only apply to terms within a glossary, and not to categories.
    7. (Optional) Under *Domain assets*, you can configure the data domains, subdomains, and products on which this custom metadata should be visible to:
        1. For *Domains*, select the [domains or subdomains](/product/capabilities/data-products/how-tos/create-data-domains) to which you want to limit users to be able to enrich with this property.
        2. For *Applicable asset types*, select the [domains, subdomains](/product/capabilities/data-products/how-tos/create-data-domains), or [products](/product/capabilities/data-products/how-tos/create-data-products) you want users to be able to enrich with this property. For example, you may want a property to only apply to products within a specific subdomain, and not to the parent domain.
    8. (Optional) Under *Other assets*, for *Applicable asset types*, select assets that neither fall under the rubric of a connection or glossary \- currently only [file assets](https://developer.atlan.com/patterns/create/file/) are supported.
    9. (Optional) Under *Configurations* toggle any extra settings for the property:
        * *Allow multiple values* controls whether users can enter more than a single value for this property. (Note: this is only available for some types.)
        * *Show in filter* controls whether users can filter on this property when doing asset discovery.
        * *Show in overview* controls whether the property will show up in the *Overview* sidebar tab of assets. (All properties will show in the custom metadata's own tab, but those with this *Show in overview* enabled will also show in the *Overview* tab.)

That's it, your users can now [enrich assets with this custom metadata](/product/capabilities/discovery/how-tos/add-custom-metadata)! ð

Delete properties from a structure[â](#delete-properties-from-a-structure "Direct link to Delete properties from a structure")
--------------------------------------------------------------------------------------------------------------------------------

dangerDeleting a custom metadata property will remove the values for that property from any assets.

To delete custom metadata properties from a custom metadata structure:

1. From the left menu of any screen, click **Governance**.
2. Under the *Metadata* heading, click **Custom Metadata**.
3. Under the *Custom Metadata* heading, select the custom metadata structure you want to change.
4. In the properties table on the right, click the delete icon on the far right of the row containing the property to delete the property.
5. When prompted for confirmation, click the **Confirm** button.

Delete custom metadata structure[â](#delete-custom-metadata-structure "Direct link to Delete custom metadata structure")
--------------------------------------------------------------------------------------------------------------------------

You can also delete an entire custom metadata structure.

dangerDeleting a custom metadata structure will remove all its properties and all its custom metadata values from any assets. You might want to consider [using personas to hide the custom metadata](/product/capabilities/governance/access-control/how-tos/create-a-persona), until you confirm it is no longer needed.

To delete a custom metadata structure:

1. From the left menu of any screen, click **Governance**.
2. Under the *Metadata* heading, click **Custom Metadata**.
3. Under the *Custom Metadata* heading, select the custom metadata structure you want to delete.
4. In the upper right of the custom metadata structure, click the red delete icon.
5. When prompted for confirmation, click the **Delete** button.

View linked assets[â](#view-linked-assets "Direct link to View linked assets")
--------------------------------------------------------------------------------

Once users in your organization have [enriched their assets with custom metadata](/product/capabilities/discovery/how-tos/add-custom-metadata), you will be able to view the linked assets right from the governance center.

To view assets with custom metadata:

1. From the left menu of any screen, click **Governance**.
2. Under the *Metadata* heading, click **Custom Metadata**.
3. Under the *Custom Metadata* heading, click **Linked Assets** to view all the assets linked to the custom metadata.
4. (Optional) Click any asset to open the asset sidebar for more details.
**Tags:*** [data](/tags/data)
* [integration](/tags/integration)

[PreviousAdd custom metadata badges](/product/capabilities/governance/custom-metadata/how-tos/add-custom-metadata-badges)[NextWhat happens when users do not have access to metadata?](/product/capabilities/governance/custom-metadata/references/what-happens-when-users-do-not-have-access-to-metadata)

Copyright Â© 2025 Atlan Pte. Ltd.

