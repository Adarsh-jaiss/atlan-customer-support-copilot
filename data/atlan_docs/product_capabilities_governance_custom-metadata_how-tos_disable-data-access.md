# Source URL
https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/disable-data-access

================================================================================

<!--
canonical: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/disable-data-access
link-alternate: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/disable-data-access
meta-description: :::warning Who can do this? You will need to be an admin user in Atlan to configure these options.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: :::warning Who can do this? You will need to be an admin user in Atlan to configure these options.
meta-og-locale: en
meta-og-title: Disable data access | Atlan Documentation
meta-og-url: https://docs.atlan.com/product/capabilities/governance/custom-metadata/how-tos/disable-data-access
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Disable data access | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Disable data access
===================

Who can do this?You will need to be an admin user in Atlan to configure these options.

What if you want to block access to data for your users, and only allow them to access metadata?

There are different ways to do this in Atlan. From the most wide\-reaching to the most granular:

Block all querying[â](#block-all-querying "Direct link to Block all querying")
--------------------------------------------------------------------------------

To stop all users from querying data, across all data assets:

1. From the left menu of any screen, click **Admin**.
2. Under *Workspace*, click **Labs**.
3. Toggle off the **Insights** option. (This should also deactivate all sub\-options of Insights.)

dangerUsers will still be able to preview sample data, even with Insights turned off.

Block by source[â](#block-by-source "Direct link to Block by source")
-----------------------------------------------------------------------

### When setting up a crawler[â](#when-setting-up-a-crawler "Direct link to When setting up a crawler")

To stop all users from accessing data for a source, when setting up the crawler:

* Set *Allow SQL Query* to **No** to stop users from querying any data in the source.
* Set *Allow Data Preview* to **No** to stop users from previewing any data in the source.

So to block *all* access to data for that source, set both options to **No**.

### When setting up a connection's credentials[â](#when-setting-up-a-connections-credentials "Direct link to When setting up a connection's credentials")

You can configure the credentials for some data sources without data access permissions.

* If the credentials cannot query data, Atlan will not be able to query or preview data.
* If Atlan cannot query or preview data, no users in Atlan can query or preview data either.

dangerThis depends on the connector \- some connectors need a level of data access even to crawl metadata. The specific set up guide for each connector gives you the minimal set of permissions.

Block by asset[â](#block-by-asset "Direct link to Block by asset")
--------------------------------------------------------------------

Who can do this?In addition to being an Admin user, you will need to be a connection admin for the source containing the assets.

To stop users from querying or previewing data for specific assets:

1. Define a [persona](/product/capabilities/governance/access-control/how-tos/create-a-persona) with a [data policy](/product/capabilities/governance/access-control/how-tos/create-a-persona#add-a-data-policy) that denies access to those assets.
2. Add the users to that persona.

dangerTo ensure Atlan blocks data access for all users (including connection admins) the data policy must [explicitly deny](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data#explicit-restrictions-denies-take-priority) query access. A lack of data policy (implicit deny) will not prevent connection admins from querying and previewing data.

Block by tag[â](#block-by-tag "Direct link to Block by tag")
--------------------------------------------------------------

To stop users from querying or previewing data that has a particular [tag](/product/capabilities/governance/tags/concepts/what-are-tags):

1. Define a [purpose](/product/capabilities/governance/access-control/how-tos/create-a-purpose) on that tag.
2. Within the purpose, define a [data policy](/product/capabilities/governance/access-control/how-tos/create-a-purpose#add-a-data-policy) that denies query access for those users. (This will also apply to data previews.)

Even if only a single column has the tag, Atlan will block querying and previewing of the entire asset.

**Tags:*** [data](/tags/data)
* [crawl](/tags/crawl)

[PreviousControl access to metadata and data?](/product/capabilities/governance/custom-metadata/how-tos/control-access-metadata-data)[NextAdd custom metadata badges](/product/capabilities/governance/custom-metadata/how-tos/add-custom-metadata-badges)

Copyright Â© 2025 Atlan Pte. Ltd.

