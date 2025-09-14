# Source URL
https://docs.atlan.com/product/capabilities/data-products/concepts/what-are-data-products

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/data-products/concepts/what-are-data-products
link-alternate: https://docs.atlan.com/product/capabilities/data-products/concepts/what-are-data-products
meta-description: From a single data table to a collection of data assets, anything can be a data product in Atlan. Data products provide a framework for your teams to curate assets specific to a domain, business unit, region of operation, brand, and more. These curated data products then empower your data consumers to easily discover data assets, quickly get the context they need, and collaborate more efficiently.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: From a single data table to a collection of data assets, anything can be a data product in Atlan. Data products provide a framework for your teams to curate assets specific to a domain, business unit, region of operation, brand, and more. These curated data products then empower your data consumers to easily discover data assets, quickly get the context they need, and collaborate more efficiently.
meta-og-locale: en
meta-og-title: Data Products | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/data-products/concepts/what-are-data-products
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Data Products | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Data Products
=============

â**Available via the Data Marketplace package**

From a single data table to a collection of data assets, anything can be a data product in Atlan. Data products provide a framework for your teams to curate assets specific to a domain, business unit, region of operation, brand, and more. These curated data products then empower your data consumers to easily discover data assets, quickly get the context they need, and collaborate more efficiently.

As organizations shift from centralized data architectures, build a new paradigm of governance with data products in Atlan.

Enable products module[â](#enable-products-module "Direct link to Enable products module")
--------------------------------------------------------------------------------------------

Who can do this?You will need to be an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) in Atlan to enable the products module for your organization.

To enable data products for your Atlan users:

1. From the left menu of any screen in Atlan, click **Admin**.
2. Under the *Workspace* heading, click **Labs**.
3. On the *Labs* page, turn on **Products module** to enable your users to create and manage [data domains](/product/capabilities/data-products/how-tos/create-data-domains) and [products](/product/capabilities/data-products/concepts/what-are-data-products).
4. In the *Who can access Products module* dialog, you can configure access to the module for the following sets of users:
    * Click **Only admins** to enable the products module for admin users only.
    * Click **Selected personas** to enable the products module for specific [personas](/product/capabilities/governance/access-control/how-tos/create-a-persona) with [domain policies](/product/capabilities/data-products/how-tos/create-domain-policies). Select the persona(s) to which you want to limit usage of the products module.
        + If there are no personas with domain policies, you can either create a [new persona with a domain policy](/product/capabilities/data-products/how-tos/create-domain-policies) or [add a domain policy](/product/capabilities/data-products/how-tos/create-domain-policies) to an existing persona.
        + *Include all admins* is selected by default. This allows any admin user to access and manage the module irrespective of whether they belong to the specified personas. (Optional) Uncheck the **Include all admins** checkbox to remove the default selection.
    * Click **All users and personas** to enable the products module for all your Atlan users and personas.
5. (Optional) Click **Configure** to update your user selections for access to the module.
6. (Optional) To hide the [product scorecard](/product/capabilities/data-products/concepts/what-is-a-product-score) on your data products, turn off **Product score**.
7. (Optional) To enable your users to search for data products from [asset discovery](/product/capabilities/discovery/how-tos/search-and-discover-assets), turn on **Show products in asset discovery**.

If you'd like to disable the *Products* module from your organization's Atlan workspace, follow the steps above to turn it off.

Once enabled, you can also temporarily disable the module and turn it on again as needed. For any domains and products you may have created, this will not result in any data loss.

[https://demo.arcade.software/KaIyOL7F2PnBuzDJpKD2?embed&show_copy_link=true](https://demo.arcade.software/KaIyOL7F2PnBuzDJpKD2?embed&show_copy_link=true)

Order of operations[â](#order-of-operations "Direct link to Order of operations")
-----------------------------------------------------------------------------------

To start using data products, you will need to:

1. [Create a data domain](/product/capabilities/data-products/how-tos/create-data-domains)
2. (Optional) [Add data subdomains](/product/capabilities/data-products/how-tos/create-data-domains)
3. [Create domain policies](/product/capabilities/data-products/how-tos/create-domain-policies)
4. [Create data products](/product/capabilities/data-products/how-tos/create-data-products) within the data domain
5. Discover and collaborate on data products
6. [Track and monitor domain usage](/product/capabilities/data-products/how-tos/monitor-data-domains)

[https://demo.arcade.software/MfOzcF4HrABabIPzlSeD?embed&show_copy_link=true](https://demo.arcade.software/MfOzcF4HrABabIPzlSeD?embed&show_copy_link=true)

Stakeholders[â](#stakeholders "Direct link to Stakeholders")
--------------------------------------------------------------

Atlan currently supports adding [predefined stakeholders and creating custom ones](/product/capabilities/data-products/how-tos/add-stakeholders) for your data domains and subdomains. These are responsibilities you can assign to your users based on their function within a specific domain or subdomain. Stakeholders do not enforce access control, but are meant to help your data consumers understand the organizational structure and responsibilities.

Atlan provides the following options:

* *Domain owner* \- overall domain management and reporting.
* *Architect* \- design and deployment of domains and subdomains.
* *Data product owner* \- creation, management, and documentation of data products.
* *Data engineer* \- creation and management of data pipelines.
* [Create new stakeholders](/product/capabilities/data-products/how-tos/add-stakeholders) that better reflect your organizational structure and functions.

Components of a data product[â](#components-of-a-data-product "Direct link to Components of a data product")
--------------------------------------------------------------------------------------------------------------

To search for a data product:

* From the left menu of any screen in Atlan, you can either:
    + Click **Products** to search for data products from the products homepage:
        - From the left navigation menu, use the search bar or select the relevant domain and then select a data product.
        - In the *Data products* section, select a trending or recently viewed data product. The list of *Trending products* is sorted by the total count of views on each product, with the most viewed product listed at the top.
        - From the top right of any screen in Atlan, click the [star icon](/product/capabilities/discovery/how-tos/star-assets). From the *Starred assets* popup, select a starred data product.
    + If your Atlan admin has enabled the *Show products in asset discovery* toggle, click **Assets** to search for data products from [asset discovery](/product/capabilities/discovery/how-tos/use-the-filters-menu):
        - Click the **Asset type** dropdown and then select **Product** to filter for data products.
        - Use the [*Filters* menu](/product/capabilities/discovery/how-tos/use-the-filters-menu) on the left to further refine your search.
        - Click any data product to view the product sidebar or open the product profile. In addition to the factors documented [here](/product/capabilities/discovery/how-tos/search-and-discover-assets), Atlan uses [product score](/product/capabilities/data-products/concepts/what-is-a-product-score) to determine the most relevant results for your product search.
        - Use the search bar to search for products using keyword\-based search.

### Overview[â](#overview "Direct link to Overview")

This section displays important details about the data product:

* Data product status \- current status of the data product:
    + *Draft* \- data product is in draft state and only visible to product owners
    + *Published* \- data product is active for consumption
    + *Sunset* \- data product is planned for retirement
    + *Archived* \- data product is archived and will be no longer available to users
* Domain name \- view and navigate to the data domain that the data product belongs to
* Criticality \- view business criticality rating:
    + *High* \- high business impact
    + \_Medium \- \_ moderate business impact
    + *Low* \- internal or non\-business impact
* Sensitivity \- view sensitivity score for data product classification:
    + *Public* \- may be freely accessible
    + *Internal* \- may only be distributed within the organization
    + *Confidential* \- may only be limited to a specific domain or team within an organization
* Freshness \- timestamp for when the data product was last updated in Atlan. This only includes metadata updates made on the data product and not on any underlying assets.
* Description of the data product
* Linked assets at a glance
* List of assets designated as output ports

### Output ports[â](#output-ports "Direct link to Output ports")

This section displays a list of assets that allow users to consume the data product across multiple domains. A data product can have multiple output ports. Click the output port asset to open the asset sidebar and view more details.

### README and resources[â](#readme-and-resources "Direct link to README and resources")

This section allows you to add a [README](/product/integrations) and [resources](/product/capabilities/discovery/how-tos/add-a-resource) to your data product. READMEs can help you provide detailed documentation about the product to your data consumers. Resources enable you to add links to internal or external URLs for more context.

### Product score[â](#product-score "Direct link to Product score")

Based on the principles of data as a product, [product scores](/product/capabilities/data-products/concepts/what-is-a-product-score) can help you signal the accuracy and completeness of your data products, helping build trust in them. Atlan calculates and assigns a product score to your data products based on a preset criteria of metadata completeness.

### Details sidebar[â](#details-sidebar "Direct link to Details sidebar")

The sidebar to the right of the product profile allows you to view and add metadata, depending on your [domain permissions](/product/capabilities/data-products/how-tos/create-domain-policies):

* *Visibility* helps you determine who can access and monitor the data product throughout its entire lifecycle:
    + *Private to members of this domain* \- only members of a specific domain can access the data product.
    + *Private to selected members* \- only members of a specific domain and other selected users or groups can access the data product.
    + *Public* \- everyone in the organization can access the data product.
* Under *Terms*, click **\+** to add [terms](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#term) and offer contextual information for your data product.Â
* Under *Owners*, click **\+** to assign [owners](/product/capabilities/discovery/how-tos/add-owners) to the data product.
* Under *Tags*, click **\+** to [attach a tag](/product/capabilities/governance/tags/how-tos/attach-a-tag) and configure [tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) for all assets in the data product.
* Under *Certificate*, click **\+** to update the certification status. Choose from [four certificateÂ options](/product/capabilities/discovery/how-tos/add-certificates) \- *Draft*, *Verified*, *Deprecated*, and *No certificate*.

### Product profile header[â](#product-profile-header "Direct link to Product profile header")

This section helps you perform quick actions. From the top right of the product profile:

* Click the user avatars to view a list of recently visited users, total views on your product, total number of unique visitors, and total views by user.
    + Use the days filter to filter product views and user activity in the last 7, 30, and 90 days.
    + This feature is turned on by default \- admins can [turn off user activity](/product/administration/labs/how-tos/disable-user-activity).
* Click the star button to [star your product](/product/capabilities/discovery/how-tos/star-assets) and bookmark it for easy access.
* Click the **Slack** or **Teams** icon to post on a [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) channel.
* Click the 3\-dot icon to [add an announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) to your product.

### Assets[â](#assets "Direct link to Assets")

The *Assets* tab provides a comprehensive list of assets included in the data product:

* Search for specific assets in the sidebar
* Filter assets by input and output ports
* Select an asset to view more details in the asset sidebar
* View queried at source information for all assets

### Lineage[â](#lineage "Direct link to Lineage")

The *Lineage* tab provides a [visual representation](/product/capabilities/data-products/concepts/what-is-business-lineage) of the provenance of and relationships between your data products in Atlan.

### Activity log[â](#activity-log "Direct link to Activity log")

The *Activity* tab provides a [changelog](/product/capabilities/discovery/faq#what-is-an-activity-log) for your data product.

* *Activity* \- view details about changes made to the data product and [filter for specific types of metadata changes](/product/capabilities/discovery/faq#what-is-an-activity-log)
* *Views* \- view top and recent users of the data product
* *Producers* \- view information about when the data product was created and last updated and by whom

### Contracts[â](#contracts "Direct link to Contracts")

The *Contracts* tab displays any [linked contracts](/product/capabilities/governance/contracts/how-tos/create-data-contracts) for the output ports in your data product. You can view contract specifications, track the evolution of your contract over time, and compare and contrast multiple versions.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousWhat is a product score?](/product/capabilities/data-products/concepts/what-is-a-product-score)

Copyright Â© 2025 Atlan Pte. Ltd.

