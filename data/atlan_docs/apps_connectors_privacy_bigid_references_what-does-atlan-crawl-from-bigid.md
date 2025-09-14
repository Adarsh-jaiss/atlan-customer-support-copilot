# Source URL
https://docs.atlan.com/apps/connectors/privacy/bigid/references/what-does-atlan-crawl-from-bigid

================================================================================

<!--
canonical: https://docs.atlan.com/apps/connectors/privacy/bigid/references/what-does-atlan-crawl-from-bigid
link-alternate: https://docs.atlan.com/apps/connectors/privacy/bigid/references/what-does-atlan-crawl-from-bigid
meta-description: Reference guide for BigID metadata crawled by Atlan.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Reference guide for BigID metadata crawled by Atlan.
meta-og-locale: en
meta-og-title: What does Atlan crawl from BigID? | Atlan Documentation
meta-og-url: https://docs.atlan.com/apps/connectors/privacy/bigid/references/what-does-atlan-crawl-from-bigid
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: What does Atlan crawl from BigID? | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

What does Atlan crawl from BigID?
=================================

Once you have [crawled BigID](/apps/connectors/privacy/bigid/how-tos/crawl-bigid), you can [use connector\-specific filters](/product/capabilities/discovery/how-tos/use-the-filters-menu) for quick asset discovery. This document provides details on the metadata and assets that Atlan crawls from BigID.

Attributes[â](#attributes "Direct link to Attributes")
--------------------------------------------------------

Atlan maps BigID Attributes, associated with Catalog Objects as a result of scans, to the *Custom Metadata Property* specified in the configuration. Multiple attributes are concatenated with comma as the delimiter.

Tags[â](#tags "Direct link to Tags")
--------------------------------------

Atlan sources both system\-assigned and user\-assigned tags on BigID Catalog Objects to source\-linked Atlan Tags on the associated Atlan assets. The sourced tags can then be propagated and assigned like regular Atlan Tags.

warningAssigning values for BigID\-sourced Tags on Atlan and reverse\-sync of those values back to BigID is currently not supported.

Policy violations[â](#policy-violations "Direct link to Policy violations")
-----------------------------------------------------------------------------

Atlan maps Policy violations detected for Catalog Objects during BigID scans as *Announcements* on Atlan. The Announcement messages indicate the details of the Policies found violated. Once these violations are marked resolved on BigID, the corresponding Atlan Announcements are updated or removed appropriately.

See also[â](#see-also "Direct link to See also")
--------------------------------------------------

* [Set up BigID](/apps/connectors/privacy/bigid/how-tos/set-up-bigid)
* [Crawl BigID](/apps/connectors/privacy/bigid/how-tos/crawl-bigid)
**Tags:*** [connectors](/tags/connectors)
* [data](/tags/data)
* [crawl](/tags/crawl)
* [privacy](/tags/privacy)
* [bigid](/tags/bigid)

[PreviousCrawl BigID](/apps/connectors/privacy/bigid/how-tos/crawl-bigid)

Copyright Â© 2025 Atlan Pte. Ltd.

