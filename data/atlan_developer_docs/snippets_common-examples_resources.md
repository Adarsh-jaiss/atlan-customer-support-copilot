# Source URL
https://developer.atlan.com/snippets/common-examples/resources/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/resources/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage resources/links for assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage resources/links for assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/resources.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Asset resources/links - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/resources/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage resources/links for assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/resources.png
meta-twitter:title: Asset resources/links - Developer
meta-viewport: width=device-width,initial-scale=1
title: Asset resources/links - Developer
-->

[Skip to content](#add-asset-resources-links) Developer Asset resources/links Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Add asset resources / links[¶](#add-asset-resources-links "Permanent link")
===========================================================================

Resources (links) can only be added to [assets](../../../getting-started/#what-is-an-asset) after an asset exists. (The asset itself must be created first.)

Add to an existing asset[¶](#add-to-an-existing-asset "Permanent link")
-----------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Each resource can be assigned to only a single asset. To create a resource and assign it to an asset:

dbt

Java

Python

Kotlin

Raw REST API

Managing resources for assets is currently not possible via dbt.

| Add to an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` Table table = Table.refByQualifiedName("default/snowflake/1234567890/reln_db/reln_schema/customers"); // (1) Link link = Link.creator( // (2)         table, // (3)         "Definition", // (4)         "https://en.wikipedia.org/wiki/Customer") // (5)     .build(); AssetMutationResponse response = link.save(client); // (6) assert response.getCreatedAssets().size() == 1 // (7) assert response.getUpdatedAssets().size() == 1 // (8)  ``` |

1. Set up a reference to the asset you want to assign the resource to from somewhere. In this example, we just create a reference based on the qualifiedName of the asset we want, but this could also be from the result of a search, for example.
2. Use the `creator()` method to initialize the link with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
3. In the case of a link, you need to give a reference to an asset to which you want to attach the link.
4. And the title Atlan should display for the link.
5. And finally the URL for the link itself.
6. Call the `save()` method to actually create the link and attach it to the asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was created (the link).
8. The response will also include a single asset that was updated (the asset to which you've attached the link).

| Add to an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Link, Table  client = AtlanClient() table = Table.ref_by_qualified_name("default/snowflake/1234567890/reln_db/reln_schema/customers") # (1) link = Link.creator( # (2)     asset=table, # (3)     name="Definition", # (4)     link="https://en.wikipedia.org/wiki/Customer") # (5) response = client.asset.save(link) # (6) assert (links := response.assets_created(asset_type=Link)) # (7) assert (tables := response.assets_updated(asset_type=Table)) # (8)  ``` |

1. Set up a reference to the asset you want to assign the resource to from somewhere. In this example, we just create a reference based on the qualified\_name of the asset we want, but this could also be from the result of a search, for example.
2. Use the `create()` method to build a link with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
3. In the case of a link, you need to give a reference to an asset to which you want to attach the link.
4. And the title Atlan should display for the link.
5. And finally the URL for the link itself.
6. Call the `save()` method to actually create the link and attach it to the asset.
7. Assert that the link was created.
8. Assert a table was updated (the asset to which you've attached the link).

| Add to an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val table = Table.refByQualifiedName("default/snowflake/1234567890/reln_db/reln_schema/customers")  // (1) val link = Link.creator(  // (2)         table,  // (3)         "Definition",  // (4)         "https://en.wikipedia.org/wiki/Customer")  // (5)     .build() val response = link.save(client)  // (6) assert(response.createdAssets.size == 1)  // (7) assert(response.updatedAssets.size == 1)  // (8)  ``` |

1. Set up a reference to the asset you want to assign the resource to from somewhere. In this example, we just create a reference based on the qualifiedName of the asset we want, but this could also be from the result of a search, for example.
2. Use the `creator()` method to initialize the link with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
3. In the case of a link, you need to give a reference to an asset to which you want to attach the link.
4. And the title Atlan should display for the link.
5. And finally the URL for the link itself.
6. Call the `save()` method to actually create the link and attach it to the asset. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
7. The response will include that single asset that was created (the link).
8. The response will also include a single asset that was updated (the asset to which you've attached the link).

Note that you are actually creating a new link asset

When adding a link through the API, you are really creating a new instance of a link asset. At the same time, you're attaching this new object to an existing asset.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Link", // (2)       "attributes": {         "name": "Definition", // (3)         "qualifiedName": "540182b5-f47b-4ba1-a247-6ca9ffd9f37a", // (4)         "link": "https://en.wikipedia.org/wiki/Customer", // (5)         "asset": [ // (6)           {             "typeName": "Table",             "uniqueAttributes": {               "qualifiedName": "default/snowflake/1234567890/reln_db/reln_schema/customers"             }           }         ]       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the link asset, which will always be `Link` (case\-sensitive).
3. You must also provide a name for the link. This will show up on the UI as the title of the link.
4. You must also provide a unique `qualifiedName` for the link. This will not show up on the UI, and must be a unique UUID (generated yourself).
5. The URL for the link should be provided in the `link` field.
6. Finally, you need to include the reference information for the asset the link should be attached to.

Remove from an existing asset[¶](#remove-from-an-existing-asset "Permanent link")
---------------------------------------------------------------------------------

To remove a link from an existing asset you only need to delete the link itself. (The link is itself an asset.)

See [Deleting an asset](../../advanced-examples/delete/).

The link will have its own GUID, separate from the asset to which it is attached

When deleting the link, you need to use the link's GUID, not the GUID of the asset to which it is attached.

---

2023\-06\-192024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/resources/) to provide us with more information. 

Back to top

[Previous Manage asset READMEs](../readme/) [Next Manage asset relationships with attributes](../relationship-attributes/) 

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

