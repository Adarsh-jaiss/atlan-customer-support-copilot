# Source URL
https://docs.atlan.com/product/capabilities/governance/contracts/how-tos/create-data-contracts

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/contracts/how-tos/create-data-contracts
link-alternate: https://docs.atlan.com/product/capabilities/governance/contracts/how-tos/create-data-contracts
meta-description: Create data contracts <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Create data contracts <Badge variant="preview" text="Private Preview" link="/get-started/references/product-release-stages#private-preview" />
meta-og-locale: en
meta-og-title: Create data contracts | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/contracts/how-tos/create-data-contracts
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Create data contracts | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Create data contracts [Private Preview](/get-started/references/product-release-stages#private-preview)
=======================================================================================================

A data contract is an agreement between a data producer and consumer that specifies requirements for generating and using high\-quality, reliable data. As a powerful tool for data management, data contracts can help you standardize contractual obligations between data producers and consumers, organize your assets with embeddable contract metadata, and enforce them with data quality rules.

In Atlan, you can directly add a data contract to supported assets and provide helpful context to your downstream users.

For a data contract to help build trust in your assets, it should be:

* Templatized and easily comprehensible \- use Atlan's YAML contract template to create standardized contracts and push to Atlan.
* Version\-controlled \- continuously validate and monitor your data contracts either in runtime or real\-time.
* Embeddable \- embed the contract as metadata for a supported asset.
* Enforceable \- enforce your contracts with data quality rules.
* Extensible \- identify new specifications, generate new versions, and then compare and contrast them.

**Did you know?**You can [create webhooks for data contracts](/product/integrations/automation/webhooks/how-tos/create-webhooks) and receive notifications for when a contract is added or updated to a URL of your choice.

Supported asset types[â](#supported-asset-types "Direct link to Supported asset types")
-----------------------------------------------------------------------------------------

You can create data contracts for the following asset types:

* Tables
* Views
* Materialized views
* [Output port assets of data products](/product/capabilities/data-products/concepts/what-are-data-products)

[https://demo.arcade.software/DKoKqX9qAg1MVcsvzL1m?embed&show_copy_link=true](https://demo.arcade.software/DKoKqX9qAg1MVcsvzL1m?embed&show_copy_link=true)

Supported asset metadata[â](#supported-asset-metadata "Direct link to Supported asset metadata")
--------------------------------------------------------------------------------------------------

Atlan maps the following asset metadata properties to it contract properties:

| Metadata property | Contract property |
| --- | --- |
| `name` | `dataset` |
| `typeName` | `type` |
| `userDescription` or `description` | `description` |
| `ownerUsers` | `owner.users` |
| `ownerGroups` | `owners.groups` |
| `certificateStatus` | `certification.status` |
| `certificateStatusMessage` | `certification.message` |
| `announcementType` | `announcement.type` |
| `announcementTitle` | `announcement.title` |
| `announcementMessage` | `announcement.description` |
| `meaningNames` | `terms` |
| `classificationDef.displayName` | `tags.name` |
| `classifications.propagate` | `tags.propagate` |
| `classifications.restrict_propagation_through_lineage` | `tags.restrict_propagation_through_lineage` |
| `classifications.restrict_propagation_through_hierarchy` | `tags.restrict_propagation_through_hierarchy` |
| `column.name` | `columns.name` |
| `column.userDescription` or `column.description` | `columns.description` |
| `column.dataType` | `columns.data_type` |
| `column.isPrimary` | `columns.primary` |
| `!column.isNullable` | `columns.required` |
| `column.precision` | `columns.precision` |
| `column.numericScale` | `columns.scale` |
| [tags](/product/capabilities/governance/tags/how-tos/attach-a-tag) on column | `columns.tags` |
| `column.meaningNames` | `columns.terms` |
| [custom metadata](/product/capabilities/governance/custom-metadata/concepts/what-is-custom-metadata) (CM) | `custom_metadata.<CM>` |

[https://demo.arcade.software/neZOdvezDiYZ4M4Y3HrB?embed&show_copy_link=true](https://demo.arcade.software/neZOdvezDiYZ4M4Y3HrB?embed&show_copy_link=true)

Add a data contract to an asset[â](#add-a-data-contract-to-an-asset "Direct link to Add a data contract to an asset")
-----------------------------------------------------------------------------------------------------------------------

Who can do this?Any non\-guest user with [edit access to an asset's metadata](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data) can create, deploy, and manage data contracts. This only includes [admin and member users](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles) in Atlan.

To add a data contract to an asset, you can either:

* Create a contract directly in Atlan from the *Contracts* tab of the asset profile. You can create and maintain data contracts as easily as editing a word document.
* Use Atlan CLI to import an existing contract from your local machine to Atlan directly or through a CI/CD pipeline. [Atlan CLI](https://developer.atlan.com/sdks/cli/) is a command\-line tool that you can download directly from Atlan to your local machine to create and push data contracts to Atlan. Once you have published the contract, you can also [sync metadata](https://developer.atlan.com/snippets/datacontract/manage/#sync-metadata) from a contract to the governed asset in Atlan.

Once created, you will be able to monitor and manage your data contracts in Atlan.

To add a data contract:

1. From the left menu of any screen in Atlan, click **Assets**.
2. (Optional) From the *Filters* menu on the left, click **Properties** and then click **Has contract**. Click **No** to filter for assets without a contract.
3. From the *Assets* page, select an asset to open the asset sidebar.
4. In the left *Overview* sidebar, click **Add contract**.
5. In the *Contract* tab of the asset profile, you can either:
    * Click **Create contract** to create a draft contract directly in Atlan based on asset metadata.
    * Click **Import contract** to use [Atlan CLI](https://developer.atlan.com/sdks/cli/) to import an existing contract from your local environment to Atlan. You will first need to install and connect Atlan CLI and then push the contract to Atlan. Refer to our [developer documentation](https://developer.atlan.com/snippets/datacontract/manage/) to complete the steps.
6. (Optional) Click the **Edit** button to edit the contract.

Congrats on adding a data contract in Atlan! ð

View a data contract[â](#view-a-data-contract "Direct link to View a data contract")
--------------------------------------------------------------------------------------

To view a data contract:

1. From the left menu of any screen in Atlan, click **Assets**.
2. From the *Assets* page, select an asset to open the asset sidebar.
3. From the left *Overview* sidebar, click **View contract** to navigate to the *Contract*Â tab in the asset profile.
4. (Optional) In the *Contract* tab, you can view the contract specifications for your asset in a YAML format. You can also:
    * Click the **Document** icon to open a read\-only, simplified view of your contract.
    * Next to *Published version*, click the version dropdown to view the latest version of the contract. Select an older version and then click **CompareÂ with published version** to compare them side by side.
    * Click the **Edit** button to edit the contract.
    * Click the clipboard icon to copy the YAML code.
    * Under *Timeline*, view a timeline for the evolution of your contract.
    * Under *Summary*, view details of who last updated your contract and when.
**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousContracts](/product/capabilities/governance/contracts)[NextAdd contract impact analysis in GitHub](/product/capabilities/governance/contracts/how-tos/add-contract-impact-analysis-in-github)

Copyright Â© 2025 Atlan Pte. Ltd.

