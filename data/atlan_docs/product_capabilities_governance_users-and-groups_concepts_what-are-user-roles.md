# Source URL
https://docs.atlan.com/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles
link-alternate: https://docs.atlan.com/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles
meta-description: Learn about what are user roles?.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Learn about what are user roles?.
meta-og-locale: en
meta-og-title: What are user roles? | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/users-and-groups/concepts/what-are-user-roles
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What are user roles? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What are user roles?
====================

Overview[â](#overview "Direct link to Overview")
--------------------------------------------------

All users in Atlan need to be assigned one of the following predefined roles.

dangerUser roles play a relatively small part in determining access to metadata and data. For more details on all the possible access control mechanisms, see [How do I control access to metadata and data?](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data)

### Admin[â](#admin "Direct link to Admin")

AnÂ*admin* user can manage Atlan:

* Set up integrations with external collaboration tools
* Set up data connections and run workflows
* Manage users, groups, tags, and access policies
* Maintain extensions to the metadata
* Turn experimental features on and off

In addition, theÂ*admin* user can do everything theÂ*member* user can do.

There are two optional sub roles within the *admin* to delegate adminitration for workflows or governance without full platform level admin access.

These [workflow and governance sub roles](/product/capabilities/governance/users-and-groups/how-tos/delegate-administration) can be enabled by admins.

### Member[â](#member "Direct link to Member")

AÂ*member* user can discover, maintain, and query assets:

* Find and view metadata for assets
* Update metadata for specific assets (via personas and policies) \- for example, [attach tags](/product/capabilities/governance/tags/how-tos/attach-a-tag)
* Suggest metadata updates for all other assets
* Approve or reject suggested metadata changes (via personas and policies)
* Preview sample data and query data in specific assets

### Guest[â](#guest "Direct link to Guest")

AÂ*guest* user can only discover assets:

* Find and view metadata for assets
* [Suggest updates](/product/capabilities/requests/how-tos/manage-requests) to metadata for any assets (if [enabled from the admin center](/product/administration/labs/how-tos/allow-guests-to-request-updates))
* Never update metadata for any assets
* Preview sample data or query data in specific assets (via personas and policies)

Detailed permissions[â](#detailed-permissions "Direct link to Detailed permissions")
--------------------------------------------------------------------------------------

To understand the table of permissions, note the following:

* The permission to *manage* allows a user to create, read, update, and delete objects.
* â \- capability included.
* â \- capability will be a paid addition, reach out to your customer success manager for more information.
* Basic metadata \- read asset name, description, certificates, and more. [Permission to act may be limited](/product/capabilities/governance/custom-metadata/references/what-happens-when-users-do-not-have-access-to-metadata).

| Permission | Admin | Member | Guest |
| --- | --- | --- | --- |
| Manage tags | â | Â | Â |
| Manage custom metadata and options | â | Â | Â |
| Manage users and groups | â | Â | Â |
| Manage access (personas, purposes, policies) | â | Â | Â |
| Edit the organization's profile | â | Â | Â |
| Create API tokens | â | Â | Â |
| Set up SSO | â | Â | Â |
| Create workflows | â | Â | Â |
| Approve or reject suggested metadata changes | â | â | Â |
| Manage glossaries | â | Â | Â |
| Manage categories and terms | â | â | Â |
| Bulk upload terms (via glossary policies) | â | â | Â |
| Preview sample data | â | â | â |
| Suggest changes to metadata | â | â | â |
| Edit metadata (via personas and policies) | â | â | Â |
| View basic metadata for assets | â | â | â |
| Create Jira issues on assets | â | â | â |
| Share assets on Slack or Teams | â | â | â |
| **Insights** | **Included** | **Add\-on** | **Add\-on** |
| Create and run new queries | â | â | â |
| Create collections, folders, and saved queries | â | â | Â |
| View and run saved queries | â | â | â |
| Schedule queries | â | â | Â |

**Tags:*** [integration](/tags/integration)
* [connectors](/tags/connectors)

[PreviousWhat are groups?](/product/capabilities/governance/users-and-groups/concepts/what-are-groups)[NextWhat are the sidebar tabs?](/product/capabilities/governance/access-control/concepts/what-are-the-sidebar-tabs)

Copyright Â© 2025 Atlan Pte. Ltd.

