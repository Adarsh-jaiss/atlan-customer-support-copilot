# Source URL
https://developer.atlan.com/snippets/advanced-examples/read/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/read/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Retrieve assets in Atlan via GUID or qualified name, and differentiate between full and minimal assets.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Retrieve assets in Atlan via GUID or qualified name, and differentiate between full and minimal assets.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/read.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Retrieving assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/read/
meta-twitter:card: summary_large_image
meta-twitter:description: Retrieve assets in Atlan via GUID or qualified name, and differentiate between full and minimal assets.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/read.png
meta-twitter:title: Retrieving assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Retrieving assets - Developer
-->

[Skip to content](#retrieving-assets) Developer Retrieving assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/guid/{guid} (GET)](../../../endpoints/#tag:apimetaentityguidguid-get)[/api/meta/entity/uniqueAttribute/type/{typeName}/attr:qualifiedName\={qualifiedName} (GET)](../../../endpoints/#tag:apimetaentityuniqueattributetypetypenameattrqualifiednamequalifiedname-get)

Retrieving assets[¶](#retrieving-assets "Permanent link")
=========================================================

**I need to do this before I can update an asset, right?**

Strictly speaking, no, you do not. And in fact if you ultimately intend to update an asset you should trim it down to only what you intend to change and not send a complete asset. See [Updating an asset](../update/) for more details.

Retrieving an [asset](../../../getting-started/#what-is-an-asset) uses a slightly different pattern from the other operations. For this you can use static methods provided by the `Asset` class:

By GUID[¶](#by-guid "Permanent link")
-------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/4.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve an asset by its GUID:

Java

Python

Kotlin

Raw REST API

| Retrieve an asset by its GUID | |
| --- | --- |
| ``` 1 2 ``` | ``` Glossary glossary = Glossary     .get(client, "b4113341-251b-4adc-81fb-2420501c30e6"); // (1)  ``` |

1. If no exception is thrown, the returned object will be non\-null and of the type requested. Because this operation will read the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

Compile\-time type checking

This operation will type\-check the asset you are retrieving is of the type requested. If it is not, you will receive a `NotFoundException`, even if the GUID represents some other asset.

| Retrieve an asset by its GUID | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary, AtlasGlossaryTerm  client = AtlanClient() glossary = client.asset.get_by_guid( # (1)     guid="b4113341-251b-4adc-81fb-2420501c30e6",     asset_type=AtlasGlossary,      min_ext_info=False,     ignore_relationships=True,     attributes=[AtlasGlossary.USER_DESCRIPTION, AtlasGlossary.TERMS],     related_attributes=[AtlasGlossaryTerm.USER_DESCRIPTION] )  assert glossary and glossary.user_description assert glossary.terms and len(glossary.terms) > 0 assert glossary.terms[0].user_description   ``` |

1. `client.asset.get_by_guid()` method takes following parameters:

    * `guid`: specify the (GUID) of the asset to retrieve.
        * `asset_type`(**optional**): specify the type of asset to retrieve. Defaults to `Asset`. If no exception is thrown, the returned object will be non\-null and of the type requested.
        * `min_ext_info`(**optional**): minimizes additional information when set to `True`. Defaults to `False`
        * `ignore_relationships`(**optional**): specify whether to include relationships (`False`) or exclude them (`True`). Defaults to `True`
        * `attributes`(**optional**): defines the list of attributes to retrieve for the asset. Accepts either a list of strings or a list of `AtlanField`.
        * `related_attributes`(**optional**): defines the list of relationship attributes to retrieve for the asset. Accepts either a list of strings or a list of `AtlanField`.
        Attributes and Related attributes

    In this example, we are retrieving the `userDescription` attribute for
        both the `glossary` and its `terms`. You can also retrieve other attributes as illustrated above.

Run\-time type checking

This operation will type\-check the asset you are retrieving is of the type requested. If it is not, you will receive a `NotFoundException`, even if the GUID represents some other asset.

| Retrieve an asset by its GUID | |
| --- | --- |
| ``` 1 2 ``` | ``` val glossary = Glossary     .get(client, "b4113341-251b-4adc-81fb-2420501c30e6") // (1)  ``` |

1. If no exception is thrown, the returned object will be non\-null and of the type requested. Because this operation will read the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

Compile\-time type checking

This operation will type\-check the asset you are retrieving is of the type requested. If it is not, you will receive a `NotFoundException`, even if the GUID represents some other asset.

| GET /api/meta/entity/guid/b4113341\-251b\-4adc\-81fb\-2420501c30e6?ignoreRelationships\=false\&minExtInfo\=false | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. In the case of retrieving an asset, all necessary information is included in the URL of the request. There is no payload for the body of the request.

By GUID (runtime typing)[¶](#by-guid-runtime-typing "Permanent link")
---------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/4.0.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

To retrieve an asset by GUID, but only resolve the type at runtime:

Java

Python

Kotlin

Raw REST API

| Retrieve an asset by its GUID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` Asset read = Asset     .get(client,         "b4113341-251b-4adc-81fb-2420501c30e6", // (1)         false); Glossary glossary; if (read instanceof Glossary) {     glossary = (Glossary) read; // (2) }  ``` |

1. Retrieve the asset by its GUID. Since GUIDs are globally unique, you do not need to specify a type. (And this is why the operation returns a generic `Asset`, since the SDK can only determine the type at runtime, once it has a response back from Atlan.)
2. Since the operation returns a generic `Asset`, you need to check and cast it to a more specific type if you want to access the more specific attributes of that type.

| Retrieve an asset by its GUID | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary, AtlasGlossaryTerm  client = AtlanClient() glossary = client.asset.get_by_guid( # (1)     guid="b4113341-251b-4adc-81fb-2420501c30e6",     asset_type=AtlasGlossary,      min_ext_info=False,     ignore_relationships=True,     attributes=[AtlasGlossary.USER_DESCRIPTION, AtlasGlossary.TERMS],     related_attributes=[AtlasGlossaryTerm.USER_DESCRIPTION] ) if isinstance(asset, AtlasGlossary): # (2)     glossary = asset     assert glossary and glossary.user_description    assert glossary.terms and len(glossary.terms) > 0    assert glossary.terms[0].user_description  ``` |

1. `client.asset.get_by_guid()` method takes following parameters:

    * `guid`: specify the (GUID) of the asset to retrieve.
        * `asset_type`(**optional**): specify the type of asset to retrieve. Defaults to `Asset`. If no exception is thrown, the returned object will be non\-null and of the type requested.
        * `min_ext_info`(**optional**): minimizes additional information when set to `True`. Defaults to `False`
        * `ignore_relationships`(**optional**): specify whether to include relationships (`False`) or exclude them (`True`). Defaults to `True`
        * `attributes`(**optional**): defines the list of attributes to retrieve for the asset. Accepts either a list of strings or a list of `AtlanField`.
        * `related_attributes`(**optional**): defines the list of relationship attributes to retrieve for the asset. Accepts either a list of strings or a list of `AtlanField`.
        Attributes and Related attributes

    In this example, we are retrieving the `userDescription` attribute for
        both the `glossary` and its `terms`. You can also retrieve other attributes as illustrated above.
2. Since the operation returns a generic `Asset`, you need to use `isinstance()` to cast it to a more specific type in the block if you want an IDE to provide more specific type hints.

| Retrieve an asset by its GUID | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val read: Asset = Asset     .get(client,         "b4113341-251b-4adc-81fb-2420501c30e6", // (1)         false) val glossary = if (read is Glossary) read else null // (2)  ``` |

1. Retrieve the asset by its GUID. Since GUIDs are globally unique, you do not need to specify a type. (And this is why the operation returns a generic `Asset`, since the SDK can only determine the type at runtime, once it has a response back from Atlan.)
2. Since the operation returns a generic `Asset`, you need to check and cast it to a more specific type if you want to access the more specific attributes of that type.

Does not apply to a raw API request

There is no concept of typing in a raw API request — all responses to the raw API will simply be JSON objects.

By `qualifiedName`[¶](#by-qualifiedname "Permanent link")
---------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/4.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve an asset by its `qualifiedName`:

Java

Python

Kotlin

Raw REST API

| Retrieve an asset by its qualifiedName | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Glossary glossary = Glossary     .get(client, "FzCMyPR2LxkPFgr8eNGrq"); // (1) Table table = Table     .get(client, "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS"); // (2)  ``` |

1. If no exception is thrown, the returned object will be non\-null and of the type requested. Because this operation will read the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Qualified name, not name

    You must provide the `qualifiedName` for glossary objects (glossaries, categories, terms) to use this method. If you only know the name, you should instead use the [`findByName()`](../../common-examples/glossary/retrieve-by-name/) operations.
2. For most objects, you can probably build\-up the `qualifiedName` in your code directly. Because this operation will read the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Finding the connection portion

    The one exception is likely to be the connection portion of the name (`default/snowflake/1657037873` in this example). To find this portion, see [Find connections](../../common-examples/finding/examples/#connection-by-name-and-type).

| Retrieve an asset by its qualifiedName | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary, AtlasGlossaryTerm, Table  client = AtlanClient() glossary = client.asset.get_by_qualified_name( # (1)     asset_type=AtlasGlossary,       qualified_name="pXkf3RUvsIOIG8xnn0W3O",     min_ext_info=False,     ignore_relationships=True,     attributes=[AtlasGlossary.USER_DESCRIPTION, AtlasGlossary.TERMS],     related_attributes=[AtlasGlossaryTerm.USER_DESCRIPTION] )  assert glossary and glossary.user_description assert glossary.terms and len(glossary.terms) > 0 assert glossary.terms[0].user_description   table = client.asset.get_by_qualified_name(     asset_type=Table,     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", # (2)     min_ext_info=False,     ignore_relationships=True,     attributes=[Table.USER_DESCRIPTION, Table.COLUMNS],     related_attributes=[COLUMN.USER_DESCRIPTION] )  assert table and table.user_description assert table.columns and len(table.columns) > 0 assert table.columns[0].user_description   ``` |

1. `client.asset.get_by_qualified_name()` method takes following parameters:

    * `qualified_name`: specify the qualified name of the asset to retrieve.
        * `asset_type`: specify the type of asset to retrieve. If no exception is thrown, the returned object will be non\-null and of the type requested.
        * `min_ext_info`(**optional**): minimizes additional information when set to `True`. Defaults to `False`
        * `ignore_relationships`(**optional**): specify whether to include relationships (`False`) or exclude them (`True`). Defaults to `True`
        * `attributes`(**optional**): defines the list of attributes to retrieve for the asset. Accepts either a list of strings or a list of `AtlanField`.
        * `related_attributes`(**optional**): defines the list of relationship attributes to retrieve for the asset. Accepts either a list of strings or a list of `AtlanField`.
        Attributes and Related attributes

    In this example, we are retrieving the `userDescription` attribute for
        both the `glossary` and its `terms`. You can also retrieve other attributes as illustrated above.
2. For most objects, you can probably build\-up the `qualified_name` in your code directly.

    Finding the connection portion

    The one exception is likely to be the connection portion of the name (`default/snowflake/1657037873` in this example). To find this portion, see [Find connections](../../common-examples/finding/examples/#connection-by-name-and-type).

| Retrieve an asset by its qualifiedName | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val glossary = Glossary     .get(client, "FzCMyPR2LxkPFgr8eNGrq") // (1) val table = Table     .get(client, "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS") // (2)  ``` |

1. If no exception is thrown, the returned object will be non\-null and of the type requested. Because this operation will read the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Qualified name, not name

    You must provide the `qualifiedName` for glossary objects (glossaries, categories, terms) to use this method. If you only know the name, you should instead use the [`findByName()`](../../common-examples/glossary/retrieve-by-name/) operations.
2. For most objects, you can probably build\-up the `qualifiedName` in your code directly. Because this operation will read the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

    Finding the connection portion

    The one exception is likely to be the connection portion of the name (`default/snowflake/1657037873` in this example). To find this portion, see [Find connections](../../common-examples/finding/examples/#connection-by-name-and-type).

| GET /api/meta/entity/uniqueAttribute/type/Glossary?attr:qualifiedName\=FzCMyPR2LxkPFgr8eNGrq\&ignoreRelationships\=false\&minExtInfo\=false | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. In the case of retrieving an asset, all necessary information is included in the URL of the request. There is no payload for the body of the request.

    URL encoding may be needed

    Note that depending on the qualifiedName, you may need to URL\-encode its value before sending. This is to replace any parts of the name that could be misinterpreted as actual URL components (like `/` or spaces).

Full vs minimal assets[¶](#full-vs-minimal-assets "Permanent link")
-------------------------------------------------------------------

[2\.0\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.0.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

The examples above illustrate how to retrieve:

* an asset with all of its relationships (a *complete* asset).
* an asset without any of its relationships (a *minimal* asset).

You can also retrieve the opposite by explicitly requesting it:

Java

Python

Kotlin

Raw REST API

| Retrieve an asset by its GUID | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Glossary glossary = Glossary     .get(client,         "b4113341-251b-4adc-81fb-2420501c30e6",         true); // (1)  ``` |

1. Retrieve the full asset, with all of its relationships, by its GUID. The last (optional) parameter being `true` indicates you want to retrieve the asset with all its relationships (a "full" asset). Similar variations exist on every asset as well as on the dynamically\-typed `Asset` static methods.

| Retrieve an asset by its GUID | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import AtlasGlossary  client = AtlanClient() glossary = client.asset.retrieve_minimal(     asset_type=AtlasGlossary, # (1)     guid="b4113341-251b-4adc-81fb-2420501c30e6" )  ``` |

1. Optionally, you can provide the asset type:
    * If no exception is thrown, the returned object will be non\-null and of the type requested.

| Retrieve an asset by its GUID | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val glossary = Glossary     .get(client,         "b4113341-251b-4adc-81fb-2420501c30e6",         true) // (1)  ``` |

1. Retrieve the full asset, with all of its relationships, by its GUID. The last (optional) parameter being `true` indicates you want to retrieve the asset with all its relationships (a "full" asset). Similar variations exist on every asset as well as on the dynamically\-typed `Asset` static methods.

| GET /api/meta/entity/guid/b4113341\-251b\-4adc\-81fb\-2420501c30e6?ignoreRelationships\=true\&minExtInfo\=true | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. In the case of retrieving an asset, all necessary information is included in the URL of the request. Retrieving a minimal asset is a matter of setting the query parameters `ignoreRelationships` and `minExtInfo` to `true`.

Retrieve minimal assets where possible

You should retrieve minimal assets for better performance in cases where you do not need *all* of the relationships of the asset.

Keep in mind that although the relationships will not be visible in the object after retrieving a minimal asset, this does *not* mean that there are no relationships on that asset (in Atlan).

---

2022\-09\-142025\-01\-06

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/read/) to provide us with more information. 

Back to top

[Previous Create an asset](../create/) [Next Update an asset](../update/) 

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

