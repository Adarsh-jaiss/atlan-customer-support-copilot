# Source URL
https://docs.atlan.com/product/capabilities/governance/domains/how-tos/organize-assets

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/domains/how-tos/organize-assets
link-alternate: https://docs.atlan.com/product/capabilities/governance/domains/how-tos/organize-assets
meta-description: Learn about organize assets.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about organize assets.
meta-og-locale: en
meta-og-title: Organize assets | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/domains/how-tos/organize-assets
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Organize assets | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Organize assets
===============

Who can do this?Any [non\-guest user with edit access to an asset's metadata](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) can add assets to domains. This only includes admin and member users. [Domain policies](/product/capabilities/data-products/how-tos/create-domain-policies) currently do not have any impact outside the [products module](/product/capabilities/data-products/concepts/what-are-data-products).

You can map and organize your assets into [domains and subdomains](/product/capabilities/governance/domains/how-tos/manage-domains). Domains provide you with a logical structure to group and govern your assets that aligns with business needs and ensures a curated discovery experience.

To add assets to a domain, note the following:

* You can link assets to domains irrespective of whether or not you use [data products](/product/capabilities/data-products/concepts/what-are-data-products).
* You can only add assets to any one specific domain or subdomain. Assets may be used across multiple domains, but can only belong to one domain or subdomain.
* You can filter assets by a single domain, multiple domains, or no domains.
* Atlan currently does not support adding glossaries, categories, and terms to domains.
* Atlan currently does not support [raising a request](/product/capabilities/requests/concepts/what-are-requests) to add assets to domains.
* Admin users can bulk add assets to domains using [playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks).

Add an asset to a domain[â](#add-an-asset-to-a-domain "Direct link to Add an asset to a domain")
--------------------------------------------------------------------------------------------------

[https://demo.arcade.software/DMCJZ3USJVLs5QNnYPMc?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true](https://demo.arcade.software/DMCJZ3USJVLs5QNnYPMc?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true)

**Did you know?**You can also [set up playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks) to bulk add assets to your domains and subdomains. You will need to be an admin user in Atlan to create playbooks.

To add an asset to a domain, complete the following steps.

To add an asset to a domain:

1. From the left menu of any screen in Atlan, click **Assets**.
2. On the *Assets* page, click an asset to open the asset sidebar.
3. In the *Overview* sidebar, under *Domains*, click **Add to domain**.
4. In the popup, check the boxes to select the domain or subdomain to which you want to add the asset. You can only select any one parent domain or nested subdomain.
5. (Optional) Hover over the linked domain or subdomain to view details in a popover, including the user that added the domain. You can also:
    * Click **View domain** to view the domain profile from the governance center.
        + If the [products module is turned off](/product/capabilities/data-products/concepts/what-are-data-products), you will need to be an admin user in Atlan to view the domain.
        + If the [products module is turned on](/product/capabilities/data-products/concepts/what-are-data-products), [domain policies](/product/capabilities/data-products/how-tos/create-domain-policies) will determine your ability to view the domain.
    * Click the unlink icon to remove the asset from the linked domain.
6. (Optional) Click the pencil icon to change to a different domain or remove it from the asset.
7. (Optional) In the [*Filters* menu](/product/capabilities/discovery/how-tos/use-the-filters-menu) on the left, click **Domains** to filter assets by domains:
    * Check the boxes to select one or more domains or subdomains to filter your assets.
    * Click **No domains** to filter assets not mapped to any domain.

**Did you know?**To programmatically add assets to a domain or remove them from a linked domain, refer to our [developer documentation](https://developer.atlan.com/snippets/common-examples/domain-assignment/).

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousManage domains](/product/capabilities/governance/domains/how-tos/manage-domains)

Copyright Â© 2025 Atlan Pte. Ltd.

