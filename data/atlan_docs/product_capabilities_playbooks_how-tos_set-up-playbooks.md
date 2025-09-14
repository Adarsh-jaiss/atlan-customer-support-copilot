# Source URL
https://docs.atlan.com/product/capabilities/playbooks/how-tos/set-up-playbooks

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/playbooks/how-tos/set-up-playbooks
link-alternate: https://docs.atlan.com/product/capabilities/playbooks/how-tos/set-up-playbooks
meta-description: Learn about set up playbooks.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about set up playbooks.
meta-og-locale: en
meta-og-title: Set up playbooks | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/playbooks/how-tos/set-up-playbooks
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Set up playbooks | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Set up playbooks
================

warning**ð¤ Who can do this?** You will need to be an admin user in Atlan to create playbooks.

A common question that data teams often face is how to automate metadata at scale.

Having started out as a data team ourselves, we know that automating repetitive tasks can help data teams maximize the value they provide to their organization. One way of doing so is through Atlan's playbooks!

Playbooks help power metadata automation for your data assets in Atlan. You can create rule\-based automations at scale and update metadata in bulk, helping you streamline your workflows.

You can update the following asset metadata using playbooks:

* [Certificates](/product/capabilities/discovery/how-tos/add-certificates)
* [Descriptions](/product/capabilities/discovery/how-tos/add-descriptions)
* [Owners](/product/capabilities/discovery/how-tos/add-owners)
* [Terms](/product/capabilities/governance/glossary/concepts/what-is-a-glossary)
* [Tags](/product/capabilities/governance/tags/concepts/what-are-tags)
* [Domains](/product/capabilities/governance/domains/how-tos/manage-domains)
* [Custom metadata](/product/capabilities/governance/custom-metadata/concepts/what-is-custom-metadata)

For example, imagine your organization needs to transfer ownership of several data assets. Instead of your data team manually updating the ownership of each and every asset, you can create a playbook to automate this process and update the metadata of your assets at scale.

Playbook recommendations[â](#playbook-recommendations "Direct link to Playbook recommendations")
--------------------------------------------------------------------------------------------------

Before you begin, review some general guidelines on running playbooks in Atlan:

* Avoid running multiple playbooks simultaneously on the same set of assets. Allow one playbook run to be completed before proceeding with another operation on the same set of assets. Otherwise, you may experience performance issues and inconsistencies.
* Review and understand the depth of your asset lineage or hierarchy prior to enabling a [tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) playbook. For assets with complex lineage, [tag propagation may take longer](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) to complete than the playbook runtime. You may want to review and judiciously select a list of assets that need to be tagged directly. For their child and/or downstream assets, Atlan recommends that you [enable tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply).

Create a playbook[â](#create-a-playbook "Direct link to Create a playbook")
-----------------------------------------------------------------------------

To create a playbook in Atlan:

1. From the left menu in Atlan, you can either:
    * Click **Assets** to navigate to the assets page.
        1. From the *Filters* menu on the left or the tabs along the top, [apply any asset filters](/product/capabilities/discovery/how-tos/use-the-filters-menu).
        2. Next to the search bar, click the 3\-dot icon and then click **Create playbook** to create a playbook for the filtered assets \- this option is only visible to admin users.
    * Click **Governance** to navigate to the governance center.
        1. Under the *Governance* heading of the *Governance center*, click **Playbooks**.
        2. Click **Create New** to get started.
2. In the *Create new playbook* dialog box, enter the following details:
    1. For *Name*, enter a name for the task to be accomplished \- for example, `Update ownership`. (Atlan recommends that the length of a playbook name must be no longer than 46 characters.)
    2. (Optional) For *Description*, enter a description.
    3. (Optional) Select an icon for your playbook.
3. Click **Create** to save your playbook.

Set up rules as filters[â](#set-up-rules-as-filters "Direct link to Set up rules as filters")
-----------------------------------------------------------------------------------------------

To set up rules as filters for your playbook:

1. In the *Build Rules* page of your playbook, click **Filters**.
2. For name, add a name to your filter.
3. To set a matching condition for the filters, select **Match all** or **Match any**. *Match all* will logically `AND` the criteria, while *Match any* will logically `OR` the criteria.
4. For *Attributes*, select a relevant option:
    * For this example, we'll click **Connection** and then select a Snowflake connection. (Optional) To further refine your asset selection:
        1. Click **All databases** to filter by databases in a selected connection.
        2. Click **All schemas** to filter by schemas in a selected connection.
    * Click **Connector** to filter assets by [supported connectors](/product/connections/references/supported-sources).
    * Click **Asset type** to filter by specific asset types \- for example, tables, columns, queries, glossaries, and more.
    * Click **Certificate** to filter assets by [certification status](/product/capabilities/discovery/how-tos/add-certificates).
    * Click **Owners** to filter assets by [asset owners](/product/capabilities/discovery/how-tos/add-owners).
    * Click **Tags** to filter assets by your [tags](/product/capabilities/governance/tags/concepts/what-are-tags) in Atlan, including imported [Snowflake](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags) and [dbt](/apps/connectors/etl-tools/dbt/how-tos/manage-dbt-tags) tags.
        + (Optional) For [Snowflake tags](/apps/connectors/data-warehouses/snowflake/how-tos/manage-snowflake-tags) only, to the left of the checkbox, click **Select value**, and then from the *Select tag value* dialog, select any value(s) to filter assets by tag value.
    * Click **Glossary, terms, \& categories** to filter by a specific [glossary](/product/capabilities/governance/glossary/how-tos/set-up-glossaries) or [category](/product/capabilities/governance/glossary/concepts/what-is-a-glossary#category) to bulk update all the nested terms or by multiple glossaries and categories.
    * Click **Linked terms** to filter assets by [linked terms](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets).
    * Click **Domains** to filter by specific [domains or subdomains](/product/capabilities/governance/domains/how-tos/manage-domains) to bulk update all the assets included in those data domains or subdomains.
    * Click **Products** to filter for [data products](/product/capabilities/data-products/how-tos/create-data-products) by specific data domains or subdomains.
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
5. For *Operator*, select **Is one of** for values to include or **Is not** for values to exclude. Depending on the selected attribute(s), you can also choose from [additional operators](/product/capabilities/discovery/how-tos/use-the-filters-menu):
    * Select **Equals (\=)** or **Not Equals (!\=)** to include or exclude assets through exact match search.
    * Select **Starts With** or **Ends With** to filter assets using the starting or ending sequence of values.
    * Select **Contains** or **Does not contain** to find assets with or without specified values contained within the attribute.
    * Select **Pattern** to filter assets using supported [Elastic DSL regular expressions](https://www.elastic.co/guide/en/elasticsearch/references/current/regexp-syntax.html).
    * Select **Is empty** to filter assets with null values.
    * Select **Belongs to** or **Doesn't belong to** to filter [data products](/product/capabilities/data-products/how-tos/create-data-products) by specific [data domains or subdomains](/product/capabilities/data-products/how-tos/create-data-domains).
6. For *Values*, select the relevant values. The values will vary depending on the selected attributes.
7. (Optional) To add more filters, click **Add filter** and select **Filter** to add individual filters or **Filter** **Group** to nest more filters in a group.
8. (Optional) To view all the assets that match your rules, in the *Filters* card, click **View** **all** for a preview.
9. (Optional) To remove a playbook filter, to the right of any filter, click the three horizontal dots and then click **Delete**.
10. (Optional) To turn off a playbook filter, to the right of any filter, click the three horizontal dots and then click **Disable**. Click **Enable** to turn on any disabled filters.

Select the actions[â](#select-the-actions "Direct link to Select the actions")
--------------------------------------------------------------------------------

To select the actions to be performed based on your rules:

1. In the *Build Rules* page of your playbook, click **Actions**.
2. For *Select Action*, select the relevant metadata option to update:
    * Click **Certificate** to update the [certification status](/product/capabilities/discovery/how-tos/add-certificates) of assets to *Verified*, *Draft*, *Deprecated*, or *No certificate*.
    * Click **Description** to update the [description](/product/capabilities/discovery/how-tos/add-descriptions) of your assets.
    * Click **Owners** to add, remove, or replace [asset owners](/product/capabilities/discovery/how-tos/add-owners). In this example, we'll update the ownership of the assets.
    * Click **Terms** to add [terms](/product/capabilities/governance/glossary/concepts/what-is-a-glossary) to your assets or remove or replace them from [linked assets](/product/capabilities/governance/glossary/how-tos/link-terms-to-assets).
    * Click **Tags** to add [tags](/product/capabilities/governance/tags/concepts/what-are-tags) to your assets or remove or replace them from [tagged](/product/capabilities/governance/tags/how-tos/attach-a-tag) or [propagated](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) assets. Note that if there are multiple tag actions to be performed, Atlan will execute them in the following order: `ADD`, `REMOVE`, and then `REPLACE`.
    * Click **Domain** to [add your assets to a specific domain or subdomain](/product/capabilities/governance/domains/how-tos/organize-assets) or remove them from an existing linked [domain or subdomain](/product/capabilities/governance/domains/how-tos/manage-domains).
    * Click any [custom metadata structure](/product/capabilities/governance/custom-metadata/concepts/what-is-custom-metadata) and then select a [custom metadata property](/product/capabilities/governance/custom-metadata/how-tos/manage-custom-metadata-structures) to update or unlink it from your assets.
3. For *Select operator*, select the relevant option. The operators will vary depending on the selected action.
4. For *Values*, select the relevant option(s). The values will vary depending on the selected actions.
5. (Optional) To add more actions, click **Add** **Action**.

**Did you know?**You can control tag propagation when adding tags as an action in playbooks. [Tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) is disabled by default. If you enable tag propagation, you will also be able to [configure how tags are propagated](/product/capabilities/governance/tags/how-tos/attach-a-tag).

Run the playbook[â](#run-the-playbook "Direct link to Run the playbook")
--------------------------------------------------------------------------

If you'd like to continue working on your playbook, you can save it as a draft. If your playbook is ready, you can proceed to running it.

To run the playbook:

1. You can either:

    * To run the playbook once immediately, click **Run once**.
        * To schedule the playbook to run hourly, daily, weekly, or monthly, click **Schedule** and choose the preferred frequency, timezone, and time.

    danger If you're scheduling multiple playbooks, Atlan recommends spacing out the schedules as much as possible to minimize any overlap between the playbook workflow runs. For more about workflows in general, see [workflow recommendations](/product/connections/how-tos/order-workflows#workflow-recommendations).
2. Click **Complete** to run the playbook.
3. In the resulting screen, click **Go to profile** to view your playbook profile.

Once your playbook has completed its run, you will see the metadata updated for your assets! ð

**Did you know?**If you have any questions about setting up playbooks, head over [here](/product/capabilities/playbooks/troubleshooting/troubleshooting-playbooks).

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousPlaybooks](/product/capabilities/playbooks)[NextManage playbooks](/product/capabilities/playbooks/how-tos/manage-playbooks)

Copyright Â© 2025 Atlan Pte. Ltd.

