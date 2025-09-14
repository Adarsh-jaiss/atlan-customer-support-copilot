# Source URL
https://developer.atlan.com/snippets/custom-metadata/badge/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/custom-metadata/badge/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage custom metadata badges in Atlan, including creating and deleting badges.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage custom metadata badges in Atlan, including creating and deleting badges.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/badge.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage custom metadata badges - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/custom-metadata/badge/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage custom metadata badges in Atlan, including creating and deleting badges.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/badge.png
meta-twitter:title: Manage custom metadata badges - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage custom metadata badges - Developer
-->

[Skip to content](#manage-custom-metadata-badges) Developer Manage custom metadata badges Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/types/typedefs (POST)](../../../endpoints/#tag:apimetatypestypedefs-post)

Manage custom metadata badges[¶](#manage-custom-metadata-badges "Permanent link")
=================================================================================

You can use *badges* in Atlan to provide quick indicators of key signals from custom metadata. They appear in the Overview of the asset, rather than nested within the custom metadata tab.

Badges are a kind of asset

Badges are actually modeled as just another kind of asset in Atlan. This means all the standard [CRUD operations](../../advanced-examples/) apply to badges the same as any other asset.

Create a badge[¶](#create-a-badge "Permanent link")
---------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to create a badge for custom metadata capturing a count of data quality checks that have run:

Java

Python

Kotlin

Raw REST API

| Build a badge | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` Badge badge = Badge.creator(client, // (1)         "DQ Count", // (2)         "Data Quality", // (3)         "Count") // (4)     .userDescription("How many data quality checks ran against this asset.") // (5)     .badgeCondition( // (6)         BadgeCondition.of(             BadgeComparisonOperator.GTE, // (7)             5, // (8)             BadgeConditionColor.GREEN)) // (9)     .badgeCondition(         BadgeCondition.of(             BadgeComparisonOperator.LT,             5,             BadgeConditionColor.YELLOW))     .badgeCondition(         BadgeCondition.of(             BadgeComparisonOperator.LTE,             2,             BadgeConditionColor.RED))     .build(); // (10) AssetMutationResponse response = badge.save(client); // (11)  ``` |

1. Like with any other asset, use the `creator()` method to ensure you provide the minimal information required to create a badge. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You must provide a name for the badge.
3. You must specify the name of the custom metadata set the badge will summarize.
4. You must provide the name of the custom metadata property within that set the badge will represent.
5. You can optionally provide other details about the badge, like with any other asset. In this example we provide a description for the badge.
6. You can then specify any number of conditions to represent in the badge.
7. Each condition is comprised of an operator (standard mathematical comparisons),
8. ...a value against which to compare the asset's value for the property,
9. ...and the color to apply to the badge if the asset's value for the property matches the value (as compared through the operator). This can be one of the predefined colors, or any RGB\-based hex value for a custom color.
10. As with all other builder patterns, you must `build()` the object you've defined.
11. The `save()` operation will actually create the badge within Atlan, including its conditions. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Build a badge | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Badge from pyatlan.model.enums import BadgeConditionColor, BadgeComparisonOperator from pyatlan.model.structs import BadgeCondition  client = AtlanClient() badge = Badge.creator( # (1)     client=client,  # (2)     name="DQ Count", # (3)     cm_name="Data Quality", # (4)     cm_attribute="count", # (5)     badge_conditions=[ # (6)         BadgeCondition.create( # (7)             badge_condition_operator=BadgeComparisonOperator.GTE, # (8)             badge_condition_value="5", # (9)             badge_condition_colorhex=BadgeConditionColor.GREEN, # (10)         ),         BadgeCondition.create(             badge_condition_operator=BadgeComparisonOperator.LT,             badge_condition_value="5",             badge_condition_colorhex=BadgeConditionColor.YELLOW,         ),         BadgeCondition.create(             badge_condition_operator=BadgeComparisonOperator.LTE,             badge_condition_value="2",             badge_condition_colorhex=BadgeConditionColor.RED,         ),     ], ) badge.user_description = "How many data quality checks ran against this asset." # (11) response = client.asset.save(badge) # (12) assert (assets := response.assets_created(asset_type=Badge) # (13)  ``` |

1. Like with any other asset, use the `create()` method to ensure you provide the minimal information required to create a badge.
2. You must provide a client instance.
3. You must provide a name for the badge.
4. You must specify the name of the custom metadata set the badge will summarize.
5. You must provide the name of the custom metadata property within that set the badge will represent.

    Property is renamed

    The property names used have been converted to the standard python form, i.e. lowercase with spaces replaced with an underscore.
6. You can then specify any number of conditions to represent in the badge.
7. Use the 'create()' method to provide the information needed to create the `BadgeCondition`.
8. Each condition is comprised of an operator (standard mathematical comparisons),
9. ...a value against which to compare the asset's value for the property,
10. ...and the color to apply to the badge if the asset's value for the property matches the value (as compared through the operator). This can be one of the predefined colors, or any RGB\-based hex value for a custom color.
11. You can optionally provide other details about the badge, like with any other asset. In this example we provide a description for the badge.
12. The `save()` operation will actually create the badge within Atlan, including its conditions.
13. Check that the `Badge` was created.

| Build a badge | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` val badge = Badge.creator(client, // (1)         "DQ Count",  // (2)         "Data Quality",  // (3)         "Count") // (4)     .userDescription("How many data quality checks ran against this asset.") // (5)     .badgeCondition( // (6)         BadgeCondition.of(             BadgeComparisonOperator.GTE,  // (7)             5,  // (8)             BadgeConditionColor.GREEN)) // (9)     .badgeCondition(         BadgeCondition.of(             BadgeComparisonOperator.LT,             5,             BadgeConditionColor.YELLOW))     .badgeCondition(         BadgeCondition.of(             BadgeComparisonOperator.LTE,             2,             BadgeConditionColor.RED))     .build() // (10) val response = badge.save(client) // (11)  ``` |

1. Like with any other asset, use the `creator()` method to ensure you provide the minimal information required to create a badge. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You must provide a name for the badge.
3. You must specify the name of the custom metadata set the badge will summarize.
4. You must provide the name of the custom metadata property within that set the badge will represent.
5. You can optionally provide other details about the badge, like with any other asset. In this example we provide a description for the badge.
6. You can then specify any number of conditions to represent in the badge.
7. Each condition is comprised of an operator (standard mathematical comparisons),
8. ...a value against which to compare the asset's value for the property,
9. ...and the color to apply to the badge if the asset's value for the property matches the value (as compared through the operator). This can be one of the predefined colors, or any RGB\-based hex value for a custom color.
10. As with all other builder patterns, you must `build()` the object you've defined.
11. The `save()` operation will actually create the badge within Atlan, including its conditions. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Badge", // (2)       "attributes": {         "name": "Count", // (3)         "badgeMetadataAttribute": "gA1HGY8JClmG8wXxC9i4EX.NYcrFDTHGVpBKHv0Ihk8xC", // (4)         "qualifiedName": "badges/global/gA1HGY8JClmG8wXxC9i4EX.NYcrFDTHGVpBKHv0Ihk8xC", // (5)         "userDescription": "How many data quality checks ran against this asset.", // (6)         "badgeConditions": [ // (7)           {             "badgeConditionOperator": "gte", // (8)             "badgeConditionValue": "5", // (9)             "badgeConditionColorhex": "#047960" // (10)           },           {             "badgeConditionOperator": "lt",             "badgeConditionValue": "5",             "badgeConditionColorhex": "#F7B43D"           },           {             "badgeConditionOperator": "lte",             "badgeConditionValue": "2",             "badgeConditionColorhex": "#BF1B1B"           }         ]       }     }   ] }  ``` |

1. Like with any other asset, define the badge within an `entities` array.
2. You must use the exact value `Badge` as the `typeName` for a badge.
3. You must provide a name for the badge.
4. You must specify the full name of the custom metadata property (its set and property name). These must also use [Atlan's internal hashed\-string representation](../../common-examples/custom-metadata/#find-hashed-string-names).
5. You must provide a `qualifiedName` for the badge that uses the format: `badges/global/<custom-metadata-property>`, where \` is the full name of the custom metadata property (using [Atlan's internal hashed\-string representation](../../common-examples/custom-metadata/#find-hashed-string-names)).
6. You can optionally provide other details about the badge, like with any other asset. In this example we provide a description for the badge.
7. You can then specify any number of conditions to represent in the badge.
8. Each condition is comprised of an operator (standard mathematical comparisons),
9. ...a value against which to compare the asset's value for the property,

    Must be a string in the JSON

    The value you provide must always be a string in JSON. For actual string values (for text fields and options fields), you must further wrap the string itself in double\-quotes.
10. ...and the color to apply to the badge if the asset's value for the property matches the value (as compared through the operator). This should be an RGB\-based hex value. (The colors given in this example are the standard green, amber, red used in the UI.)

Now that the badge has been created, any assets with a [value set for the custom metadata](../../common-examples/custom-metadata/) will show the badge on its overview tab.

Delete a badge[¶](#delete-a-badge "Permanent link")
---------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can delete a badge at any time using:

Java

Python

Kotlin

Raw REST API

| Delete a badge | |
| --- | --- |
| ``` 1 ``` | ``` AssetDeletionResponse response = Badge.purge(client, "1c932bbb-fbe6-4bbc-9d0d-3df2f1fa4f81"); // (1)  ``` |

1. The `purge()` operation will permanently delete the badge, given the GUID of the badge. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete a badge | |
| --- | --- |
| ``` 1 ``` | ``` response = client.asset.purge_by_guid("1c932bbb-fbe6-4bbc-9d0d-3df2f1fa4f81") # (1)  ``` |

1. The `asset.purge_by_guid()` operation will permanently delete the badge, given the GUID of the badge.

| Delete a badge | |
| --- | --- |
| ``` 1 ``` | ``` val response = Badge.purge(client, "1c932bbb-fbe6-4bbc-9d0d-3df2f1fa4f81") // (1)  ``` |

1. The `purge()` operation will permanently delete the badge, given the GUID of the badge. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| DELETE /api/meta/entity/bulk?guid\=1c932bbb\-fbe6\-4bbc\-9d0d\-3df2f1fa4f81\&deleteType\=PURGE | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All information needed to permanently delete the badge is provided in the URL (in particular the GUID of the badge).

Now that the badge has been deleted, no assets will show it on their overview tab.

---

2023\-05\-102025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/custom-metadata/badge/) to provide us with more information. 

Back to top

[Previous Delete custom metadata](../delete/) [Next Manage options (enumerations)](../enums/) 

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

