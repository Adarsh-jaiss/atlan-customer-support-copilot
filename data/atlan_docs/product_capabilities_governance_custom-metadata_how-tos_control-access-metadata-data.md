# Source URL
https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data
link-alternate: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data
meta-description: Learn about control access to metadata and data?.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about control access to metadata and data?.
meta-og-locale: en
meta-og-title: Control access to metadata and data? | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Control access to metadata and data? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Control access to metadata and data?
====================================

You can customize access for users through several mechanisms.

User roles[â](#user-roles "Direct link to User roles")
--------------------------------------------------------

The most general mechanism is aÂ[user role](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles). These define the very broad permissions a user has in Atlan \- for example, whether they can administer other users, or only discover metadata. When it comes to *what* metadata and data a user can access, though, we need to use the additional mechanisms below.

[https://demo.arcade.software/jYexfYKnH4ytLi67aaTU?embed](https://demo.arcade.software/jYexfYKnH4ytLi67aaTU?embed)

Connection admins[â](#connection-admins "Direct link to Connection admins")
-----------------------------------------------------------------------------

Connection admins are users who manage connectivity to a data source. By default, these users can:

* Read and write all metadata on assets from that connection.
* Preview and query the data in all data assets from that connection.
* Manage access policies to grant others access to the assets from that connection.

You define the connection admin when crawling a new data source for the first time. A connection admin can also extend the list of connection admins on their connection at any time.

Access policies[â](#access-policies "Direct link to Access policies")
-----------------------------------------------------------------------

Who can do this?A user must be both an [admin user](/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles#admin) and a connection admin to define access policies for the connection's assets.

Access policies either allow or restrict access to certain assets. These allow you to be much more creative (and granular) about access than the all\-or\-nothing privileges of connection admins.

You start by defining which assets to control with each policy. There are two complementary mechanisms to do this in Atlan \- [personas](/product/capabilities/governance/access-control/concepts/what-are-personas) and [purposes](/product/capabilities/governance/access-control/concepts/what-are-purposes).

Once you have defined the subset of assets, you can then define granular access to both metadata and data:

### Metadata policies[â](#metadata-policies "Direct link to Metadata policies")

Metadata policies control what users can do with the assets' metadata. Through them, you can control who can:

* *Read*: view an asset's activity log, custom metadata, and SQL queries
* *Update*: change asset metadata, including description, certification, owners, README, and resources
* *Update Custom Metadata Values* for the assets
* *Add Tags* to the assets
* *Remove Tags* from the assets
* *Add Terms* to the assets
* *Remove Terms* from the assets
* *Create*: create new assets within the selected connection (via API)
* *Delete*: delete assets within the selected connection (via API)

### Data policies[â](#data-policies "Direct link to Data policies")

Data policies control what users can do with the assets' data. Through them, you can control who can:

* Query and preview the data within the assets
* Whether to hide any data, through various masking techniques:
    + *Show first 4*: replaces all the data with `X` except the first 4 characters of data. For example `1234 5678 9012 3456` would become `1234XXXX`.
    + *Show last 4*: replaces all the data with X except the last 4 characters of data. For example `1234 5678 9012 3456` would become `XXXX3456`.
    + *Hash*: replaces the data with a consistent hashed value. Because the hash is consistent you can still join on it across assets. For example `1234 5678 9012 3456` would become `f43jknscakc12nk21ak`.
    + *Nullify*: replaces the data with the null value. For example `1234 5678 9012 3456` would become `null`.
    + *Redact*: replaces all alphabetic data with x and all numeric data with 0\. For example `1234 Street Name` would become `0000 Xxxxxx Xxxx`.

### Glossary policies[â](#glossary-policies "Direct link to Glossary policies")

Glossary policies control what users can do with glossary metadata \- terms and categories. Through them, you can control who can do the following against each glossary:

* Read permission on terms, categories, and glossaries exists by default and cannot be modified. Glossary policies do not restrict users from viewing any glossary and its contents within the *Glossary* section.
* Create terms and categories inside the glossary
* Update descriptions, certification, owners, READMEs, and resources for the glossary, terms and categories
* Link terms in the glossary with all other assets
* Delete terms and categories inside the glossary
* Add tags to the terms
* Remove tags from the terms
* Update custom metadata values for the terms and categories inside the glossary

*Glossary policies can only be defined through personas.*

Interactions[â](#interactions "Direct link to Interactions")
--------------------------------------------------------------

All the mechanisms above can coexist. This is powerful, but can also be a bit overwhelming to think about.Â What takes priority when a user is under the control of all these mechanisms? ðµâð«

It's actually not as bad as you might think \- only these three rules:

### Access is denied by default (implicitly)[â](#access-is-denied-by-default-implicitly "Direct link to Access is denied by default (implicitly)")

By default, users will not have the permissions listed above. This remains true until you explicitly grant a user a permission.

For example, imagine you have not set up any access policies and a new user joins.

* They will not have any of the permissions above against *any* assets in Atlan.

**Did you know?**Users have read permission on terms, categories, and glossaries by default in Atlan.

### Explicit grants (allows) are combined[â](#explicit-grants-allows-are-combined "Direct link to Explicit grants (allows) are combined")

When you grant a user a permission, this is combined with all other permissions you have granted the user.

Continuing our example, imagine you add the new user to a group defined as the connection admins for Snowflake.

* The user will now have full read/write access to all metadata for Snowflake assets, and be able to query and preview the data in those assets.

Then you add the user to a persona that gives read/write access to a Looker project.

* The user will now have access to all Snowflake assets and a Looker project's assets.

### Explicit restrictions (denies) take priority[â](#explicit-restrictions-denies-take-priority "Direct link to Explicit restrictions (denies) take priority")

dangerWhen you explicitly deny a user a permission, this takes priority over all other permissions you have granted the user.

Continuing our example, imagine you define a purpose with a data policy that masks PII data.

* The user will still have full read/write access to all metadata for Snowflake assets and a Looker project's assets.
* In general, they will still be able to query and preview the data in the Snowflake assets.
* However, any PII data in Snowflake will now be masked.

Then you add a metadata policy to the purpose that denies permission to remove the PII tag.

* The user will no longer have full read/write access to all metadata for Snowflake assets and a Looker project's assets.
* The user can no longer remove the PII tag from any of these assets.

**Did you know?**The combination of mechanisms in the example above shows their power. Through a small number of controls we can define wide\-ranging but granular access permissions.

**Tags:*** [atlan](/tags/atlan)
* [documentation](/tags/documentation)

[PreviousAdd options](/product/capabilities/governance/custom-metadata/how-tos/add-options)[NextDisable data access](/product/capabilities/governance/custom-metadata/how-tos/disable-data-access)

Copyright Â© 2025 Atlan Pte. Ltd.

