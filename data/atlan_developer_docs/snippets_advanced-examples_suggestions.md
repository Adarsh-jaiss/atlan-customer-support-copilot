# Source URL
https://developer.atlan.com/snippets/advanced-examples/suggestions/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/advanced-examples/suggestions/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to find and apply trident suggestions for your assets.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to find and apply trident suggestions for your assets.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/suggestions.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Find and apply suggestions to an asset - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/advanced-examples/suggestions/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to find and apply trident suggestions for your assets.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/advanced-examples/suggestions.png
meta-twitter:title: Find and apply suggestions to an asset - Developer
meta-viewport: width=device-width,initial-scale=1
title: Find and apply suggestions to an asset - Developer
-->

[Skip to content](#find-and-apply-suggestions-to-an-asset) Developer Find and apply suggestions to an asset Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/search/indexsearch (POST)](../../../endpoints/#tag:apimetasearchindexsearch-post)

Find and apply suggestions to an asset[¶](#find-and-apply-suggestions-to-an-asset "Permanent link")
===================================================================================================

As a data team ourselves, we understand that metadata curation can be time\-consuming.
To streamline this process, each time you fill in a metadata gap, Atlan looks
for opportunities to reuse that information.

This is where [trident suggestions 🔱](https://ask.atlan.com/hc/en-us/articles/7781078875921-Suggestions-from-similar-assets) come into play.
It provides metadata suggestions for similar assets.

For example: CUSTOMER (table)

You add the description **"Information about customers"** to a table called `CUSTOMER`.

* Atlan searches for other tables named `CUSTOMER` that lack a description.
* Atlan then suggests **"Information about customers"** as the description for these other `CUSTOMER` tables.

In Atlan's SDK, you can use the `Suggestions` object to
find and apply these recommendations to your assets.

Find suggestions[¶](#find-suggestions "Permanent link")
-------------------------------------------------------

[2\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/2.3.3 "Minimum version")[1\.12\.7](https://github.com/atlanhq/atlan-java/releases/tag/v1.12.7 "Minimum version")

Find suggestions for a given asset:

Java

Python

Kotlin

| Find suggestions for a given asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` Table table = Table.get(     "default/snowflake/1720661835/db/schema/table" ); // (1)  SuggestionResponse response = Suggestions.finder(table) // (2)     .include(Suggestions.TYPE.GroupOwners)     .include(Suggestions.TYPE.UserDescription)     .maxSuggestions(5)     .withOtherType(View.TYPE_NAME)     .includeArchived(false)     .get(); // (3)  assertNotNull(response); // (4) assertNotNull(response.getOwnerGroups()); assertNotNull(response.getUserDescriptions());  ``` |

1. First, you need to retrieve the asset for which you want to find suggestions.
2. Start by building a `Suggestions` request by chaining the following methods:

    * `finder`: specify the asset for which you want to find suggestions.
        * `include`: add criteria to specify the types of suggestions
        to include in the search results. For this example, we're retrieving
        suggestions for `GroupOwners` and `UserDescription`.

    Want to find suggestions for ALL types?

    To include all suggestion types
            (`description`, `owner`, `tags`, and `terms`):

    ```
        Suggestions.includes(Arrays.asList(Suggestions.TYPE.values()))

    ```
        * `maxSuggestions`: **(Optional)** specify the maximum
        number of suggestions to return. Defaults to `5`.
        * `includeArchived`: **(Optional)** specify whether to include
        archived assets in the suggestions (`true`) or not (`false`). Defaults to `false`.
        * `withOtherType`: **(Optional)** add a criterion
        to include another asset type in the suggestions.

    `withOtherType`

    By default, we will only look for suggestions on
            assets of the same type. You may want to expand this,
            for example, by including `View`(s) when looking
            for suggested metadata for `Table`(s).
        * `where`: **(Optional)** add a criterion that must be present
        in every search result. (**NOTE:** These are translated to filters.)
        * `whereNot`: **(Optional)** add a criterion
        that must not be present in any search result.
3. Finally, to retrieve the suggestions, call the `.get()` method.
4. The suggestion response contains a list of
suggestions for the requested types. You can access
specific suggestions by directly referencing the response attributes,
such as `response.getOwnerGroups()` and `response.getUserDescriptions()`.

| Find suggestions for a given asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.suggestions import Suggestions  client = AtlanClient()  asset = client.asset.get_by_qualified_name(     qualified_name="default/snowflake/1720661835/db/schema/table",     asset_type=Table ) # (1)  response = (     Suggestions() # (2)     .finder(asset)     .include(Suggestions.TYPE.GROUP_OWNERS)     .include(Suggestions.TYPE.USER_DESCRIPTION)     .max_suggestion(5)     .with_other_type("View")     .include_archive(False)     .get(client=client) # (3) )  assert response # (4) assert response.owner_groups and response.owner_groups[0] assert response.user_descriptions and response.user_descriptions[0]  ``` |

1. First, you need to retrieve the asset for which you want to find suggestions.
2. Start by instantiating the `Suggestions()` object.
You can then build a suggestion request by chaining the following methods:

    * `finder`: specify the asset for which you want to find suggestions.
        * `include`: add criteria to specify the types of suggestions
        to include in the search results. For this example, we're retrieving
        suggestions for `GROUP_OWNERS` and `USER_DESCRIPTION`.

    Want to find suggestions for ALL types?

    To include all suggestion types
            (`description`, `owner`, `tags`, and `terms`),
            you can directly pass `Suggestions.TYPE.all()` to the `Suggestions`:

    ```
        Suggestions(includes=Suggestions.TYPE.all())

    ```
        * `max_suggestion`: **(Optional)** specify the maximum
        number of suggestions to return. Defaults to `5`.
        * `include_archive`: **(Optional)** specify whether to include
        archived assets in the suggestions (`True`) or not (`False`). Defaults to `False`.
        * `with_other_type`: **(Optional)** add a criterion
        to include another asset type in the suggestions.

    `with_other_type`

    By default, we will only look for suggestions on
            assets of the same type. You may want to expand this,
            for example, by including `View`(s) when looking
            for suggested metadata for `Table`(s).
        * `where`: **(Optional)** add a criterion that must be present
        in every search result. (**NOTE:** These are translated to filters.)
        * `where_not`: **(Optional)** add a criterion
        that must not be present in any search result.
3. Finally, to retrieve the suggestions, call the `.get()` method.
4. The suggestion response contains a list of
suggestions for the requested types. You can access
specific suggestions by directly referencing the response attributes,
such as `response.owner_groups` and `response.user_descriptions`.

| Find suggestions for a given asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` var table = Table.get(     "default/snowflake/1720661835/db/schema/table" ); // (1)  var response = Suggestions.finder(table) // (2)     .include(Suggestions.TYPE.GroupOwners)     .include(Suggestions.TYPE.UserDescription)     .maxSuggestions(5)     .withOtherType(View.TYPE_NAME)     .includeArchived(false)     .get(); // (3)  assertNotNull(response); // (4) assertNotNull(response.getOwnerGroups()); assertNotNull(response.getUserDescriptions());  ``` |

1. First, you need to retrieve the asset for which you want to find suggestions.
2. Start by building a `Suggestions` request by chaining the following methods:

    * `finder`: specify the asset for which you want to find suggestions.
        * `include`: add criteria to specify the types of suggestions
        to include in the search results. For this example, we're retrieving
        suggestions for `GroupOwners` and `UserDescription`.

    Want to find suggestions for ALL types?

    To include all suggestion types
            (`description`, `owner`, `tags`, and `terms`):

    ```
        Suggestions.includes(Suggestions.TYPE.values().toList())

    ```
        * `maxSuggestions`: **(Optional)** specify the maximum
        number of suggestions to return. Defaults to `5`.
        * `includeArchived`: **(Optional)** specify whether to include
        archived assets in the suggestions (`true`) or not (`false`). Defaults to `false`.
        * `withOtherType`: **(Optional)** add a criterion
        to include another asset type in the suggestions.

    `withOtherType`

    By default, we will only look for suggestions on
            assets of the same type. You may want to expand this,
            for example, by including `View`(s) when looking
            for suggested metadata for `Table`(s).
        * `where`: **(Optional)** add a criterion that must be present
        in every search result. (**NOTE:** These are translated to filters.)
        * `whereNot`: **(Optional)** add a criterion
        that must not be present in any search result.
3. Finally, to retrieve the suggestions, call the `.get()` method.
4. The suggestion response contains a list of
suggestions for the requested types. You can access
specific suggestions by directly referencing the response attributes,
such as `response.getOwnerGroups()` and `response.getUserDescriptions()`.

Apply suggestions[¶](#apply-suggestions "Permanent link")
---------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[1\.12\.7](https://github.com/atlanhq/atlan-java/releases/tag/v1.12.7 "Minimum version")

Apply suggestions to a given asset:

Java

Python

Kotlin

| Apply suggestions to a given asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` Table table = Table.get(     "default/snowflake/1720661835/db/schema/table" ); // (1)  SuggestionResponse response = Suggestions.finder(table) // (2)     .include(Suggestions.TYPE.GroupOwners)     .include(Suggestions.TYPE.UserDescription)     .maxSuggestions(5)     .withOtherType(View.TYPE_NAME)     .includeArchived(false)     .apply(true); // (3)  assertNotNull(response); // (4) assertNotNull(response.getUpdatedAssets())  ``` |

1. First, retrieve the asset for which you want to apply suggestions.
2. Start by building `Suggestions` request in the same
way as described in [Find suggestions section](#find-suggestions),
since here we first find the suggestions and then apply them.
3. To apply the suggestions, call the `.apply()` method.
Optionally, you can set `allowMultiple` to `true` to allow
multiple suggestions to be applied to the asset (up to the `maxSuggestions` requested), such as for **owners**, **terms**, and **tags**.
4. The `AssetMutationResponse` will contain the updated asset entities.

| Apply suggestions to a given asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.suggestions import Suggestions  client = AtlanClient()  asset = client.asset.get_by_qualified_name(     qualified_name="default/snowflake/1720661835/db/schema/table",     asset_type=Table ) # (1)  response = (     Suggestions() # (2)     .finder(asset)     .include(Suggestions.TYPE.GROUP_OWNERS)     .include(Suggestions.TYPE.USER_DESCRIPTION)     .max_suggestion(5)     .with_other_type("View")     .include_archive(False)     .apply(client=client, allow_multiple=True) # (3) )  assert response and response.mutated_entities # (4) assert response.mutated_entities.UPDATE assert response.mutated_entities.UPDATE[0]  ``` |

1. First, retrieve the asset for which you want to apply suggestions.
2. Start by instantiating the `Suggestions()` object.
You can then build a suggestion request in the same
way as described in [Find suggestions section](#find-suggestions),
since here we first find the suggestions and then apply them.
3. To apply the suggestions, call the `.apply()` method.
Optionally, you can set `allow_multiple` to `True` to allow
multiple suggestions to be applied to the asset (up to the `max_suggestions` requested), such as for **owners**, **terms**, and **tags**.
4. The `AssetMutationResponse` will contain the mutated asset entities.

| Apply suggestions to a given asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` var table = Table.get(     "default/snowflake/1720661835/db/schema/table" ); // (1)  var response = Suggestions.finder(table) // (2)     .include(Suggestions.TYPE.GroupOwners)     .include(Suggestions.TYPE.UserDescription)     .maxSuggestions(5)     .withOtherType(View.TYPE_NAME)     .includeArchived(false)     .apply(true); // (3)  assertNotNull(response); // (4) assertNotNull(response.getUpdatedAssets())  ``` |

1. First, retrieve the asset for which you want to apply suggestions.
2. Start by building `Suggestions` request in the same
way as described in [Find suggestions section](#find-suggestions),
since here we first find the suggestions and then apply them.
3. To apply the suggestions, call the `.apply()` method.
Optionally, you can set `allowMultiple` to `true` to allow
multiple suggestions to be applied to the asset (up to the `maxSuggestions` requested), such as for **owners**, **terms**, and **tags**.
4. The `AssetMutationResponse` will contain the updated asset entities.

---

2024\-07\-222025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/advanced-examples/suggestions/) to provide us with more information. 

Back to top

[Previous Delete an asset](../delete/) [Next Restore an asset](../restore/) 

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

