# Source URL
https://developer.atlan.com/patterns/bulk/multiple-assets/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/bulk/multiple-assets/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to efficiently operate multiple assets in Atlan using bulk API requests.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to efficiently operate multiple assets in Atlan using bulk API requests.
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/bulk/multiple-assets.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Operate on multiple assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/bulk/multiple-assets/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to efficiently operate multiple assets in Atlan using bulk API requests.
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/bulk/multiple-assets.png
meta-twitter:title: Operate on multiple assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Operate on multiple assets - Developer
-->

[Skip to content](#operate-on-multiple-assets-at-the-same-time) Developer Operate on multiple assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Operate on multiple assets at the same time[¶](#operate-on-multiple-assets-at-the-same-time "Permanent link")
=============================================================================================================

You may also want to make changes to many assets at the same time.

Optimize changes to many assets

If you need to create or update many assets it will be more efficient to do this with fewer API calls than one API call per asset. The approach outlined below allows you to bundle together these multiple actions into a single API call.

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[1\.1\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.1.0 "Minimum version")

For example:

Java

Python

Kotlin

Raw REST API

| Add certificate to multiple existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` List<Asset> assets = new ArrayList<>(); assets.add(GlossaryTerm // (1)         .updater("gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (2)                  "Example Term",                  "b4113341-251b-4adc-81fb-2420501c30e6")         .certificateStatus(CertificateStatus.DEPRECATED) // (3)         .certificateStatusMessage("This asset should no longer be used.")         .build()); // (4) assets.add(GlossaryTerm         .updater("sduw38sCas83Ca8sdf982@FzCMyPR2LxkPFgr8eNGrq", // (5)                  "Another Term",                  "b267858d-8316-4c41-a56a-6e9b840cef4a")         .certificateStatus(CertificateStatus.DEPRECATED)         .certificateStatusMessage("This asset should no longer be used.")         .build()); // (6) AssetMutationResponse response = client // (7)     .assets.save(assets, false); // (8) assert response.getUpdatedAssets().size() == 2 // (9)  ``` |

1. Define our object directly into an element of a `List`, rather than managing a separate object.
2. Use the `updater()` method to initialize the object with all [necessary attributes for updating it](../../../snippets/advanced-examples/update/#build-minimal-object-needed).
3. Directly chain our enrichment methods to add the certificate and message onto the `updater()` method's result.
4. Call the `build()` method to build the enriched object.
5. Use the `updater()` method to initialize the object for another [asset](../../../getting-started/#what-is-an-asset).
6. Chain the enrichment and `build()` methods like we did for the previous [asset](../../../getting-started/#what-is-an-asset).
7. To optimize our update, we want to limit the number of API calls we make. If we called `save()` against each of *n* [assets](../../../getting-started/#what-is-an-asset) individually, we would have *n* API calls. To avoid this we use an [`AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
8. Here we use the client directly with a list of [assets](../../../getting-started/#what-is-an-asset) — this makes 1 API call to update all *n* [assets](../../../getting-started/#what-is-an-asset) at the same time.
9. The response will include all *n* [assets](../../../getting-started/#what-is-an-asset) that were updated.

| Add certificate to multiple existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import (     Announcement,     AtlasGlossaryTerm,     AtlasGlossaryCategory,     AtlasGlossary, ) from pyatlan.model.enums import AnnouncementType, CertificateStatus  client = AtlanClient() term_1 = AtlasGlossaryTerm.updater( # (1)     qualified_name="z9mfCRg6tItxcEyaJRNB3@reqKq68ZTSzuf7ezoZoGS",     name="Example Term",     glossary_guid="37e50bf7-abcb-4509-8155-c4894c05c9b9", ) term_1.certificate_status = CertificateStatus.DEPRECATED # (2) term_1.certificate_status_message = "This asset should no longer be used." # (3) term_2 = AtlasGlossaryTerm.updater( # (4)     qualified_name="2EqDFWZ6sCjbxcDNL0jFV@3Wn0W7PFCfjyKmGBZ7FLD",     name="Term Test",     glossary_guid="b9548564-4a2e-457a-a6fc-d7311dd39eef", ) term_2.certificate_status = CertificateStatus.DEPRECATED # (5) term_2.certificate_status_message = "This asset should no longer be used." # (6) response = client.asset.save([term_1, term_2]) # (7) assert len(response.assets_updated(asset_type=AtlasGlossaryTerm)) == 2 # (8)  ``` |

1. Use the `updater()` method to initialize the object with all [necessary attributes for updating it](../../../snippets/advanced-examples/update/#build-minimal-object-needed).
2. Set the certificate\_status.
3. Set the certificate\_status\_message.
4. Use the `updater()` method to initialize another object with all [necessary attributes for updating it](../../../snippets/advanced-examples/update/#build-minimal-object-needed).
5. Set the certificate\_status.
6. Set the certificate\_status\_message.
7. To optimize our update, we want to limit the number of API calls we make. If we called `save()` against each of *n* [assets](../../../getting-started/#what-is-an-asset) individually, we would have *n* API calls. Here we pass list of [assets](../../../getting-started/#what-is-an-asset) — this makes 1 API call to update all *n* [assets](../../../getting-started/#what-is-an-asset) at the same time.
8. The response will include all *n* [assets](../../../getting-started/#what-is-an-asset) that were updated.

| Add certificate to multiple existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` val assets = mutableListOf<Asset>(); assets.add(GlossaryTerm // (1)         .updater("gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq", // (2)                  "Example Term",                  "b4113341-251b-4adc-81fb-2420501c30e6")         .certificateStatus(CertificateStatus.DEPRECATED) // (3)         .certificateStatusMessage("This asset should no longer be used.")         .build()) // (4) assets.add(GlossaryTerm         .updater("sduw38sCas83Ca8sdf982@FzCMyPR2LxkPFgr8eNGrq", // (5)                  "Another Term",                  "b267858d-8316-4c41-a56a-6e9b840cef4a")         .certificateStatus(CertificateStatus.DEPRECATED)         .certificateStatusMessage("This asset should no longer be used.")         .build()) // (6) val response = client // (7)     .assets.save(assets, false) // (8) assert(response.updatedAssets.size == 2) // (9)  ``` |

1. Define our object directly into an element of a `List`, rather than managing a separate object.
2. Use the `updater()` method to initialize the object with all [necessary attributes for updating it](../../../snippets/advanced-examples/update/#build-minimal-object-needed).
3. Directly chain our enrichment methods to add the certificate and message onto the `updater()` method's result.
4. Call the `build()` method to build the enriched object.
5. Use the `updater()` method to initialize the object for another [asset](../../../getting-started/#what-is-an-asset).
6. Chain the enrichment and `build()` methods like we did for the previous [asset](../../../getting-started/#what-is-an-asset).
7. To optimize our update, we want to limit the number of API calls we make. If we called `save()` against each of *n* [assets](../../../getting-started/#what-is-an-asset) individually, we would have *n* API calls. To avoid this we use an [`AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
8. Here we use the client directly with a list of [assets](../../../getting-started/#what-is-an-asset) — this makes 1 API call to update all *n* [assets](../../../getting-started/#what-is-an-asset) at the same time.
9. The response will include all *n* [assets](../../../getting-started/#what-is-an-asset) that were updated.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 ``` | ``` {   "entities": [ // (1)     {       "typeName": "AtlasGlossaryTerm", // (2)       "attributes": {         "name": "Example Term", // (3)         "qualifiedName": "gsNccqJraDZqM6WyGP3ea@FzCMyPR2LxkPFgr8eNGrq",         "anchor": {           "typeName": "AtlasGlossary",           "guid": "b4113341-251b-4adc-81fb-2420501c30e6"         },         "certificateStatus": "DEPRECATED", // (4)         "certificateStatusMessage": "This asset should no longer be used."       }     },     { // (5)       "typeName": "AtlasGlossaryTerm",       "attributes": {         "name": "Another Term",         "qualifiedName": "sduw38sCas83Ca8sdf982@FzCMyPR2LxkPFgr8eNGrq",         "anchor": {           "typeName": "AtlasGlossary",           "guid": "b267858d-8316-4c41-a56a-6e9b840cef4a"         },         "certificateStatus": "DEPRECATED",         "certificateStatusMessage": "This asset should no longer be used."       }     }   ] }  ``` |

1. All details must still be included in an outer `entities` array.
2. You need to specify the type for each asset you are updating.
3. You need to specify other required attributes for each asset, such as its name and qualifiedName. (And in the case of terms and categories, also the parent glossary they exist within.)
4. Add on any other attributes or relationships you want to set on the asset, such as in this example for a deprecation certificate.
5. Add another object to the payload to represent another asset that should be updated by the same API call. Once again specify all the required information for that kind of asset, and any of the details for attributes or relationships you want to set.

And you can naturally combine this with [multiple operations](../../../snippets/advanced-examples/combine/) per asset — to make many changes to many assets, all in a single API call.

**Be aware of how much you're updating per request**

While this is great for reducing the number of API calls for better performance, do be aware of how many objects you're trying to update per request. There will be a limit beyond which you are trying to send too much information through a single API call and you could see other impacts such as failed requests due to network timeouts.

As a starting point, we would suggest using a maximum of 20 assets per batch.

---

2023\-04\-122024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/bulk/multiple-assets/) to provide us with more information. 

Back to top

[Previous Combine multiple operations](../../../snippets/advanced-examples/combine/) [Next End\-to\-end bulk update](../end-to-end/) 

Copyright © 2024 Atlan — [🍪 settings](#__consent) 
Built with 💙 for the 🤖\-making humans of data 

#### Cookie consent

We use cookies to: - [x] Anonymously measure page views, and
- [x] Allow you to give us one\-click feedback on any page.

 We do **not** collect or store: - [ ] Any personally identifiable information.
- [ ] Any information for any (re)marketing purposes.

 With your consent, you're helping us to make our documentation better 💙

- [x] Google Analytics

Accept

Reject

Manage settings

