# Source URL
https://docs.atlan.com/product/capabilities/data-products/how-tos/create-data-products

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/data-products/how-tos/create-data-products
link-alternate: https://docs.atlan.com/product/capabilities/data-products/how-tos/create-data-products
meta-description: You can either create a data product from the products module or lineage graph.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: You can either create a data product from the products module or lineage graph.
meta-og-locale: en
meta-og-title: Create data products | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/data-products/how-tos/create-data-products
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Create data products | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Create data products
====================

â**Available via the Data Marketplace package**

Who can do this?Before you can create a data product, you need your Atlan admin to [enable the products module in your Atlan workspace](/product/capabilities/data-products/concepts/what-are-data-products). Once enabled, first review the [order of operations](/product/capabilities/data-products/concepts/what-are-data-products#order-of-operations). You need to have create, update, and delete permissions through [domain policies](/product/capabilities/data-products/how-tos/create-domain-policies) for the specific domain or subdomain to create and manage data products.

Data products help your data consumers easily discover and work with data assets. As you get started, here are some questions to consider:

* What use case(s) are you trying to solve as an organization?
* How to define a common vocabulary and approach for creating data products and ensuring interoperability across domains?
* How to design data products to power discovery and drive usage among data consumers?

Data products in Atlan can be highly adaptable to the needs of your organization.

[https://demo.arcade.software/DNHfeuMmcCqkoErakGKa?embed](https://demo.arcade.software/DNHfeuMmcCqkoErakGKa?embed)

Create a data product[â](#create-a-data-product "Direct link to Create a data product")
-----------------------------------------------------------------------------------------

You can either create a data product from the products module or lineage graph.

To create a data product, complete these steps.

#### From the products module:[â](#from-the-products-module "Direct link to From the products module:")

1. From the left menu of any screen in Atlan, click **Products**.
2. To select a domain or subdomain, you can either:
    * From the navigation menu on the *Products* homepage, use the search bar or select the relevant domain or subdomain.
    * From the top right of *Discover domains*, select your data domain of interest. If you cannot find your data domain, click the **See all** button to view more domains.
3. In the upper right of your data domain or subdomain page, click the **\+ Add** button, and then from the dropdown, click **New product** to add a new data product.

#### From the lineage graph:[â](#from-the-lineage-graph "Direct link to From the lineage graph:")

1. From the left menu of any screen in Atlan, click **Assets**.
2. (Optional) In the [*Filters* menu](/product/capabilities/discovery/how-tos/use-the-filters-menu) on the left, expand the **Properties** menu and then click **Has lineage** to filter for assets with data lineage.
3. Select an asset, and from the top right of the asset card, click the **View lineage** icon to open the lineage graph.
4. On the lineage graph, select an asset to create a data product. Atlan will only include assets that are visible on the lineage graph. To include more assets:
    * (Optional) Hover over the **\+** button to the right of any asset and then click the **Expand all** button to include assets further upstream or downstream horizontally in the data product.
    * (Optional) Click **Show all** to include assets further upstream or downstream assets vertically in the data product.
5. From the top right of the lineage graph, click the **box with plus icon** for data products to create a data product from the lineage graph.
6. In the *New product via lineage* form, configure the following:
    1. For *Add assets*, any assets that are visible on the lineage graph will be automatically included in the data product. Note that [process](/product/capabilities/lineage/concepts/what-are-processes), child, and [partial](/product/capabilities/lineage/concepts/what-are-partial-assets) assets are currently not supported for data product creation from the lineage graph. You can either keep all the asset selections or deselect any assets.
    2. (Optional) The asset you had selected on the lineage graph will be automatically set as an output port. You can keep that selection, click **Output port** to remove the current selection, or click **Mark as output port** on any other assets to set additional output ports.
    3. Click **Continue** to proceed.

### Provide details[â](#provide-details "Direct link to Provide details")

To provide details:

1. (Optional) For *Cover*, click the **Change** button to select an image from the gallery or upload an image of your own. Click **Reposition** to drag and reposition the cover image and then click **Save position** to save your preferences.
2. For *Name*, enter a meaningful name for your data product \- for example, `Social Media Marketing`. The character limit for a product name is 80 characters.
3. For *Domain*, select a data domain from the dropdown \- for example, `Customer Service`.
4. (Optional) For *Description*, enter a description for your domain.
5. (Optional) For *Criticality*, select a level of business criticality from the dropdown \- choose from *High*, *Medium*, and *Low*.
6. (Optional) For *Sensitivity*, assign a data sensitivity level from the dropdown \- choose from *Public*, *Internal*, and *Confidential*.
7. (Optional) For *Owners*, assign additional users or groups as data product owner.
8. (Optional) For *Visibility*, select who can access and monitor the data product throughout its entire lifecycle:
    * *Private to members of this domain* \- only members of a specific domain can access the data product.
    * *Private to selected members* \- only members of a specific domain and other selected users or groups can access the data product.
    * *Public* \- everyone in the organization can access the data product.
9. If creating a data product from the products module, in the top right of the screen, click the **Continue** button. If creating a data product from the lineage graph, at the bottom of the form, click the **Continue** button and skip to the Review the data product section.

### Add assets[â](#add-assets "Direct link to Add assets")

To select assets to include in the data product, you can select via the asset browser or using filters.

#### Add via browser[â](#add-via-browser "Direct link to Add via browser")

1. Click the checkbox to select individual assets to include in your data product.
2. (Optional) Use the search bar to search for assets by the technical name of the asset.
3. (Optional) Filter assets by specific asset types. Click the 3\-dot icon to view more asset type filters.
4. (Optional) Click the **Show: all** dropdown and change to **Selected assets** to only view your asset selection.
5. (Optional) Click the **All filters** dropdown, and then from the *All filters* pane:
    * Click **Hierarchy** to filter assets by connection, database, and schema.
    * Click **Certificate** to filter assets by [certification status](/product/capabilities/discovery/how-tos/add-certificates).
    * Click **Owners** to filter assets by [asset owners](/product/capabilities/discovery/how-tos/add-owners).
    * Click **Tags** to filter assets by your [tags](/product/capabilities/governance/tags/concepts/what-are-tags) in Atlan, including [imported tags](/product/capabilities/governance/tags/how-tos/attach-a-tag).
    * Click **Terms** to filter assets by [linked terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets).
    * Click **Properties** to filter assets by [common asset properties](/product/capabilities/discovery/how-tos/use-the-filters-menu).
6. In the top right of the screen, click the **Continue** button.

#### Add via rules[â](#add-via-rules "Direct link to Add via rules")

1. Under *Select assets*, click **Add via filters** to add assets to your data product using asset filters.
2. To set a matching condition for the filters, select **Match all** or **Match any**. *Match all* will logically `AND` the criteria, while *Match any* will logically `OR` the criteria.
3. For *Attributes*, select a relevant option:
    * Click **Connection** and then select an existing connection. (Optional) To further refine your asset selection:
        1. Click **All databases** to filter by databases in a selected connection.
        2. Click **All schemas** to filter by schemas in a selected connection.
    * Click **Connector** to filter assets by [supported connectors](/product/connections/references/supported-sources).
    * Click **Asset type** to filter by specific asset types \- for example, tables, columns, queries, glossaries, and more.
    * Click **Certificate** to filter assets by [certification status](/product/capabilities/discovery/how-tos/add-certificates).
    * Click **Owners** to filter assets by [asset owners](/product/capabilities/discovery/how-tos/add-owners).
    * Click **Tags** to filter assets by your [tags](/product/capabilities/governance/tags/concepts/what-are-tags) in Atlan, including [imported tags](/product/capabilities/governance/tags/how-tos/attach-a-tag).
    * Click **Glossary, terms, \& categories** to filter by a specific [glossary](/product/capabilities/governance/glossary/how-tos/set-up-glossaries) or [category](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#category) to bulk update all the nested terms or by multiple glossaries and categories.
    * Click **Linked terms** to filter assets by [linked terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets).
    * Click **Schema qualified Name** to filter assets by the qualified name of a given schema.
    * Click **Database qualified Name** to filter assets by the qualified name of a given database.
    * Click **dbt** to filter assets by dbt\-specific filters and then select a [dbt Cloud](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-cloud) or [dbt Core](/apps/connectors/etl-tools/dbt/references/what-does-atlan-crawl-from-dbt-core) filter.
    * Click **Properties** to filter assets by [common asset properties](/product/capabilities/discovery/how-tos/use-the-filters-menu).
    * Click **Usage** to filter assets by [usage metrics](/product/capabilities/usage-and-popularity/how-tos/find-assets-by-usage).
    * Click **Monte Carlo** to filter assets by [Monte Carlo\-specific filters](/apps/connectors/observability/monte-carlo/references/what-does-atlan-crawl-from-monte-carlo).
    * Click **Soda** to filter assets by [Soda\-specific filters](/apps/connectors/observability/soda/references/what-does-atlan-crawl-from-soda).
    * Click **Table/View** to filter tables or views by row count, column count, or size.
    * Click **Column** to filter columns by [column\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu), including parent asset type or name, data type, or [column keys](/product/connections/faq/column-keys-crawled).
    * Click **Process** to filter [lineage processes](/product/capabilities/lineage/concepts/what-are-processes) by the SQL query.
    * Click **Query** to filter assets by associated [visual queries](/product/capabilities/insights/how-tos/query-data).
    * Click **Measure** to filter [Microsoft Power BI measures](/apps/connectors/business-intelligence/microsoft-power-bi/references/what-does-atlan-crawl-from-microsoft-power-bi) using the external measures filter.
4. For *Operator*, select **Is one of** for values to include or **Is not** for values to exclude. Depending on the selected attribute(s), you can also choose from [additional operators](/product/capabilities/discovery/how-tos/use-the-filters-menu):
    * Select **Equals (\=)** or **Not Equals (!\=)** to include or exclude assets through exact match search.
    * Select **Starts With** or **Ends With** to filter assets using the starting or ending sequence of values.
    * Select **Contains** or **Does not contain** to find assets with or without specified values contained within the attribute.
    * Select **Pattern** to filter assets using supported [Elastic DSL regular expressions](https://www.elastic.co/guide/en/elasticsearch/references/current/regexp-syntax.html).
    * Select **Is empty** to filter assets with null values.
5. For *Values*, select the relevant values. The values will vary depending on the selected attributes.
6. (Optional) To add more filters, click **Add filter** and select **Filter** to add individual filters or **Filter** **Group** to nest more filters in a group.
7. (Optional) To view all the assets that match your rules, in the *Filters* card, click **View** **assets** for a preview.
8. In the top right of the screen, click the **Continue** button.

### (Optional) Select output ports[â](#optional-select-output-ports "Direct link to (Optional) Select output ports")

**Did you know?**Output ports determine the relationships between your data products. These relationships are visually represented as [business lineage](/product/capabilities/data-products/concepts/what-is-business-lineage).

To select output ports:

1. From the list of assets, select output port(s) to allow your data consumers to consume the data product across domains. These assets will serve as the consumption layer for your data product.
2. For *Input ports*, Atlan displays a total count of input ports for your data product. These assets are designated as output ports in other data products, and serve as input ports for your data product. Click **View assets** to view all input port assets.
3. In the top right of the screen, click the **Continue** button.

### Review the data product[â](#review-the-data-product "Direct link to Review the data product")

Once you have reviewed your data product, you can either:

* Click **Save as draft** to save your changes in a draft version and publish when ready. Only you and any other users you add as [owners](/product/capabilities/discovery/how-tos/add-owners) to the product will be able to search for, view, and edit your draft products, depending on their [permissions](/product/capabilities/data-products/how-tos/create-domain-policies).
* Click **Create and publish** to publish it immediately.

Congrats on creating a data product in Atlan! ð

You can also use [governance workflows](/product/capabilities/governance/stewardship/how-tos/automate-data-governance) to govern the creation and change in status of data products.

Update a data product[â](#update-a-data-product "Direct link to Update a data product")
-----------------------------------------------------------------------------------------

**Did you know?**You can [move your data products](/product/capabilities/data-products/how-tos/create-data-domains) within and across subdomains or domains to reorganize them as needed.

Once you have created a data product, you will also need to monitor and manage it during its entire lifecycle. This helps ensure that the data product stays fresh, up\-to\-date, and trustworthy. The data product profile in Atlan allows you to curate how your users can use the data product.

To update a data product:

1. From the left menu of any screen in Atlan, you can either:
    * Click **Products**. To select a data product, you can:
        + From the navigation menu on the *Products* homepage, use the search bar or expand the relevant domain or subdomain.
        + In the *Data products* section, select a trending or recently viewed data product. The list of *Trending products* is sorted by the total count of views on each product, with the most viewed product listed at the top.
        + From the top right of any screen in Atlan, click the [star icon](/product/capabilities/discovery/how-tos/star-assets). From the *Starred assets* popup, select a starred data product.
        + From the left navigation menu or *Products* homepage, click **My drafts** to continue working on your draft products. Products in draft mode are only visible to product owners until these are published.
    * If your Atlan admin has [enabled the *Show products in asset discovery* toggle](/product/capabilities/data-products/concepts/what-are-data-products), click **Assets** to search for data products from [asset discovery](/product/capabilities/discovery/how-tos/use-the-filters-menu).
2. On your data domain page, next to the *Overview* tab, click the **Products** tab and select your data product of interest.
    * (Optional) From the top right of the product profile, click the **Published** dropdown to update the status of your data product:
        + *Draft* \- data product is only visible to product owners.
        + *Published* \- data product is published for users to consume.
        + *Sunset* \- data product is planned for retirement.
        + *Archived* \- data product is archived and no longer visible to users. To restore an archived data product, click the **Restore product** button and then click **Restore**. Atlan will restore the archived data product and it will reappear in product and asset discovery, domain profile, and product lineage.
    * Under *Summary*, view details about the data domain your data product belongs to, including criticality, sensitivity, and freshness.
        + (Optional) Click the pencil icon to update *Criticality* to signify business impact:
            - *High* \- high business impact
            - \_Medium \- \_ moderate business impact
            - *Low* \- internal or a non\-business impact
        + (Optional) Click the pencil icon to update *Sensitivity* to assign a data classification:
            - *Public* \- may be freely accessible
            - *Internal* \- may only be distributed within the organization
            - *Confidential* \- may only be limited to a specific domain or team within the organization
        + (Optional) Click **Add resource** to [add a resource](/product/capabilities/discovery/how-tos/add-a-resource) to your asset.
    * Under *Product Score*, view a [scorecard](/product/capabilities/data-products/concepts/what-is-a-product-score) for your data product, calculated based on metadata completeness.
    * Under *At A Glance*, view a total count of linked assets and output ports.
    * Under *Readme*, click **\+ Add** to [add a README](/product/integrations) to your data product or [use Atlan AI for documentation](/product/capabilities/atlan-ai/how-tos/use-atlan-ai-for-documentation).
    * Under *Details*, you can view and update metadata for your data product \- including visibility, [terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets), [owners](/product/capabilities/discovery/how-tos/add-owners), [tags](/product/capabilities/governance/tags/how-tos/attach-a-tag), [certificates](/product/capabilities/discovery/how-tos/add-certificates), and [custom metadata](/product/capabilities/discovery/how-tos/add-custom-metadata). You can also [set up playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks) to update product metadata in bulk.
3. Switch to the **Assets** tab to view linked assets.
    * (Optional) Click the **Edit** button to add or remove assets from your data product.
    * (Optional) Select an asset to view its asset profile in a sidebar.
    * (Optional) Filter assets by asset types \- for example, use the *Table* filter to view table assets only.
    * (Optional) Click **Disable as output port** to remove an output port or click **Set as output port** to set an asset as an output port.
4. Switch to the **Lineage** tab to view [business lineage](/product/capabilities/data-products/concepts/what-is-business-lineage) for your data product.
    * Hover over any data product to view the metadata popover for more context.
    * Click the **view output ports** menu to view output ports for your data product.
    * In the upper right of the lineage graph, click the **downward arrow** to download an image of the product lineage graph.
5. Switch to the **Activity** tab to view the [activity log](/product/capabilities/discovery/faq#what-is-an-activity-log) for your data product.
    * View details about changes made to the data product and [filter for specific types of metadata changes](/product/capabilities/discovery/faq#what-is-an-activity-log).
    * View top and recent users for your data product.
    * View a list of data producers for your data product.
6. Switch to the **Contracts** tab to view any [linked contracts](/product/capabilities/governance/contracts/how-tos/create-data-contracts) for the output ports in your data product.
7. From the top right of the data product profile:
    * Click the user avatars to view a list of recently visited users, total views on your asset, total number of unique visitors, and total views by user.
        + Use the days filter to filter asset views and user activity in the last 7, 30, and 90 days.
        + This feature is turned on by default \- admins can [turn off user activity](/product/administration/labs/how-tos/disable-user-activity).
    * Click the star button to [star your data product](/product/capabilities/discovery/how-tos/star-assets) and bookmark it for easy access.
    * Click the **Slack** or **Teams** icon to post on a [Slack](/product/integrations/collaboration/slack/how-tos/integrate-slack) or [Microsoft Teams](/product/integrations/collaboration/microsoft-teams/how-tos/integrate-microsoft-teams) channel.
    * Click the 3\-dot icon to [add an announcement](/product/integrations/communication/smtp-and-announcements/how-tos/create-announcements) or a [resource](/product/capabilities/discovery/how-tos/add-a-resource) to your data product.

If you have enriched your draft products with [terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets) or [tags](/product/capabilities/governance/tags/how-tos/attach-a-tag), your draft products will be visible to other users as linked assets when viewed from the term or tag profile, respectively. However, only a product owner with the requisite permissions to update the product can make any changes to the draft product.

**Did you know?**To programmatically create, update, and manage data products using API, refer to our [developer documentation](https://developer.atlan.com/snippets/datamesh/dataproducts/).

**Tags:*** [lineage](/tags/lineage)
* [data\-lineage](/tags/data-lineage)
* [impact\-analysis](/tags/impact-analysis)

[PreviousAdd stakeholders](/product/capabilities/data-products/how-tos/add-stakeholders)[NextCreate domain policies](/product/capabilities/data-products/how-tos/create-domain-policies)

Copyright Â© 2025 Atlan Pte. Ltd.

