# Source URL
https://developer.atlan.com/snippets/common-examples/custom-metadata/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/custom-metadata/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to set or change custom metadata values on assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to set or change custom metadata values on assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/custom-metadata.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage custom metadata on assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/custom-metadata/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to set or change custom metadata values on assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/custom-metadata.png
meta-twitter:title: Manage custom metadata on assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage custom metadata on assets - Developer
-->

[Skip to content](#change-custom-metadata-on-assets) Developer Manage custom metadata on assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)[/api/meta/entity/guid/{guid}/businessmetadata (POST)](../../../endpoints/#tag:apimetaentityguidguidbusinessmetadata-post)[/api/meta/entity/guid/{guid}/businessmetadata/{name} (POST)](../../../endpoints/#tag:apimetaentityguidguidbusinessmetadataname-post)

Change custom metadata on assets[¶](#change-custom-metadata-on-assets "Permanent link")
=======================================================================================

Structures must exist before setting values on assets

Remember that you must first [create the custom metadata structures](../../custom-metadata/create/) before you will be able to set or change any values for custom metadata on an asset.

Value representation[¶](#value-representation "Permanent link")
---------------------------------------------------------------

To update custom metadata values on an asset, you need to use the correct representation:

| Property type | Value representation | Example |
| --- | --- | --- |
| Text | String | `"a value"` |
| Integer | Number: without decimals | `42` |
| Decimal | Number: with decimals | `42.0` |
| Boolean | Boolean: either `true` or `false` | `true` |
| Date | Number: milliseconds since epoch (January 1, 1970\), to a specific day | `1681171200000` |
| Options | String: exact value from the options list | `"success"` |
| Users | String: username of the user | `"jsmith"` |
| Groups | String: unique name of the group, which appears under the name of the group in the UI list of groups | `"finance"` |
| URL | String: starting with `http[s]://` | `https://www.google.com` |
| SQL | String | `"SELECT *\nFROM somewhere;"` |

Multi\-value attributes

Custom attributes in Atlan can be configured to allow multiple values. For these, you must wrap all values in a multi\-valued collection, *even if there is only a single value you are setting*. Each value in that collection needs to follow the appropriate representation as indicated in the table above.

For example, if you want to set just a single group in a field that allows multiple values:

dbt

Java

Python

Kotlin

Raw REST API

| Multi\-valued attribute | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` models:   - name: TOP_BEVERAGE_USERS     meta:       atlan:         businessAttributes:           MNJ8mpLsIOaP4OQnLNhRta:             F8XI9GzcBpdBdfi4cLiPEz:               - "finance" # (1)  ``` |

1. You must provide the value(s) as a list in YAML: each value on a new line, indented below the attribute, and prefixed with `-`.

| Multi\-valued attribute | |
| --- | --- |
| ``` 1 2 3 ``` | ``` CustomMetadataAttributes cmRACI = CustomMetadataAttributes.builder()     .attribute("Consulted", List.of("finance")) // (1)     .build();  ``` |

1. You must provide the value(s) as a collection (List, Set, etc).

| Multi\-valued attribute | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.model.custom_metadata import CustomMetadataDict  cm_RACI = CustomMetadataDict(client=client, name="RACI")  # (1) cm_RACI["Consulted"] = ["finance"]  # (2)  ``` |

1. Provide the client instance and name of the custom metadata set.

    Name will be validated

    The name will be validated at runtime to ensure that a custom metadata set with the given name exists.
2. For any property that can be multi\-valued, we need to send a list of values.

    Name will be validated

    The metadata property name will be validated at runtime to ensure that a property with the given name exists in the custom metadata set.

| Multi\-valued attribute | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val cmRACI = CustomMetadataAttributes.builder()     .attribute("Consulted", listOf("finance"))  // (1)     .build()  ``` |

1. You must provide the value(s) as a collection (List, Set, etc).

| POST /api/meta/entity/guid/a89ff15b\-f5e6\-48bc\-870b\-acfa11e212ae/businessmetadata/MNJ8mpLsIOaP4OQnLNhRta | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` {   "MNJ8mpLsIOaP4OQnLNhRta": {     "F8XI9GzcBpdBdfi4cLiPEz": [ // (1)       "finance"     ]   } }  ``` |

1. You must provide the value(s) in a JSON\-style array.

Add to existing assets[¶](#add-to-existing-assets "Permanent link")
-------------------------------------------------------------------

### Update only some custom metadata attributes[¶](#update-only-some-custom-metadata-attributes "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To update only some custom metadata attributes (leaving all others unchanged):

dbt

Java

Python

Kotlin

Raw REST API

This is currently not possible via dbt, custom metadata is replaced rather than selectively updated.

| Update only some custom metadata attributes | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` CustomMetadataAttributes cmRACI = CustomMetadataAttributes.builder() // (1)     .attribute("Responsible", "jsmith") // (2)     .attribute("Consulted", List.of("finance", "risk")) // (3)     .build(); Table.updateCustomMetadataAttributes( // (4)     client, // (5)     "b4113341-251b-4adc-81fb-2420501c30e6", // (6)     "RACI", // (7)     cmRACI); // (8)  ``` |

1. Create a custom metadata attributes object that will contain only the attributes and values for custom metadata that you want to update on the [asset](../../../getting-started/#what-is-an-asset). All other custom metadata attributes (those not specified in this object) will remain unchanged on the asset.
2. For each attribute, use the `attribute()` method and pass:

    1. the name of the attribute within that set
        2. the value for that attribute
        The value can be any object valid for the attribute: a string, a boolean, or a number. (Note that dates are sent as `long` (epoch) numbers.)
3. For any attribute that can be multi\-valued, we can send a list of values.
4. Use the `updateCustomMetadataAttributes()` method to update only the `Responsible` and `Consulted` attributes in the `RACI` custom metadata on the existing asset. Any other custom metadata attributes in `RACI` and all other custom metadata will be left unchanged.
5. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Note that for this operation you must know the GUID of the asset you want to apply the custom metadata to. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
7. Provide the name for the custom metadata you want to update.
8. Provide the custom metadata attributes object with the attributes and values you want to update for that custom metadata.

| Update only some custom metadata attributes | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV",     name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV", )  ``` |

1. Use the `updater()` method to create an asset suitable for modifiaction i.e. with all the requisite attributes.

| Update the custom metadata on the table | |
| --- | --- |
| ``` 10 11 12 ``` | ``` cm_raci = table.get_custom_metadata(client=client, name="RACI") # (1) cm_raci["Responsible"] = "jsmith"  # (2) cm_raci["Consulted"] = ["finance", "risk"]  # (3)  ``` |

1. Get the custom metadata set from the table via the `get_custom_metadata` method by specifying the client and name of the custom metadata set.

    Name will be validated

    The name will be validated at runtime to ensure that a custom metadata set with the given name exists.
2. For each property of the metadata set you wish to update specify the name of the property.

    Name will be validated

    The metadata property name will be validated at runtime to ensure that a property with the given name exists in the custom metadata set.
3. For any attribute that can be multi\-valued, we need to send a list of values.

| Alternatively, create a custom metadata set and add it to the table | |
| --- | --- |
| ``` 10 11 12 13 ``` | ``` cm_raci = CustomMetadataDict(client=client, name="RACI") # (1) cm_raci["Responsible"] = "jsmith"  # (2) cm_raci["Consulted"] = ["finance", "risk"]  # (3) table.set_custom_metadata(client=client, custom_metadata=cm_raci)  # (4)  ``` |

1. Create an empty custom metadata set by specifying the client instance and name of an existing custom metadata set.

    Name will be validated

    The name will be validated at runtime to ensure that a custom metadata set with the given name exists.
2. For each property of the metadata set you wish to update specify the name of the property.

    Name will be validated

    The metadata property name will be validated at runtime to ensure that a property with the given name exists in the custom metadata set.
3. For any attribute that can be multi\-valued, we need to send a list of values.
4. Use the `set_custom_metadata` method to set the custom metadata set on the table.

| Update the model object on the server | |
| --- | --- |
| ``` 14 15 16 17 ``` | ``` response = client.asset.save_merging_cm( # (1)      table ) assert (tables := response.assets_updated(asset_type=Table)) # (2)  ``` |

1. Use the `save_merging_cm()` method to update the model object on the server.
2. Assert that a `Table` asset has been updated.

| Update only some custom metadata attributes | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val cmRACI = CustomMetadataAttributes.builder()  // (1)     .attribute("Responsible", "jsmith")  // (2)     .attribute("Consulted", listOf("finance", "risk"))  // (3)     .build() Table.updateCustomMetadataAttributes(  // (4)     client, // (5)     "b4113341-251b-4adc-81fb-2420501c30e6",  // (6)     "RACI",  // (7)     cmRACI)  // (8)  ``` |

1. Create a custom metadata attributes object that will contain only the attributes and values for custom metadata that you want to update on the [asset](../../../getting-started/#what-is-an-asset). All other custom metadata attributes (those not specified in this object) will remain unchanged on the asset.
2. For each attribute, use the `attribute()` method and pass:

    1. the name of the attribute within that set
        2. the value for that attribute
        The value can be any object valid for the attribute: a string, a boolean, or a number. (Note that dates are sent as `long` (epoch) numbers.)
3. For any attribute that can be multi\-valued, we can send a list of values.
4. Use the `updateCustomMetadataAttributes()` method to update only the `Responsible` and `Consulted` attributes in the `RACI` custom metadata on the existing asset. Any other custom metadata attributes in `RACI` and all other custom metadata will be left unchanged.
5. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Note that for this operation you must know the GUID of the asset you want to apply the custom metadata to. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
7. Provide the name for the custom metadata you want to update.
8. Provide the custom metadata attributes object with the attributes and values you want to update for that custom metadata.

| POST /api/meta/entity/guid/a89ff15b\-f5e6\-48bc\-870b\-acfa11e212ae/businessmetadata?isOverwrite\=false | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` { // (1)   "MNJ8mpLsIOaP4OQnLNhRta": { // (2)     "fWMB77RSjRGNYoFeD4FcGi": "jsmith", // (3)     "F8XI9GzcBpdBdfi4cLiPEz": [ // (4)       "finance",       "risk"     ]   } }  ``` |

1. You must pass the GUID of the asset to change for this operation. There is no alternative that works with the qualifiedName.
2. Each custom metadata set you want to add or update must be given using its [hashed\-string representation](#find-hashed-string-names).
3. Each custom metadata attribute you want to update must be given using its [hashed\-string representation](#find-hashed-string-names).
4. For multivalued custom metadata attributes, specify the value as an array.

### Replace some custom metadata on an asset[¶](#replace-some-custom-metadata-on-an-asset "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can also add/replace an entire set of custom metadata to existing [assets](../../../getting-started/#what-is-an-asset). If you do this individually, you can selectively update individual sets of custom metadata (leaving any others unchanged):

dbt

Java

Python

Kotlin

Raw REST API

| Replace some custom metadata on an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         businessAttributes: # (2)           MNJ8mpLsIOaP4OQnLNhRta: # (3)             fWMB77RSjRGNYoFeD4FcGi: jsmith # (4)             F8XI9GzcBpdBdfi4cLiPEz: [ "finance", "risk" ] # (5)         businessAttributeNames: # (6)           RACI:             Informed:               - "marketing"  ``` |

1. You must of course give the name of the object.
2. The custom metadata must be nested within the `meta`.`atlan`.`businessAttributes` structure.
3. Each custom metadata set you want to add or update must be given using its [hashed\-string representation](#find-hashed-string-names).
4. Each custom metadata attribute you want to update must be given using its [hashed\-string representation](#find-hashed-string-names).
5. For multivalued custom metadata attributes, specify the value as an array.
6. You can use `displayNames` instead of hashed\-string representations by nesting custom metadata within `meta`.`atlan`.`businessAttributeNames` structure.

| Replace some custom metadata on an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` CustomMetadataAttributes cmRACI = CustomMetadataAttributes.builder() // (1)     .attribute("Responsible", "jsmith") // (2)     .attribute("Consulted", List.of("finance", "risk")) // (3)     .build(); Table.replaceCustomMetadata( // (4)     client, // (5)     "b4113341-251b-4adc-81fb-2420501c30e6", // (6)     "RACI", // (7)     cmRACI); // (8)  ``` |

1. Create a custom metadata attributes object that will contain the attributes and values for custom metadata you want to add to the asset.
2. For each attribute, use the `attribute()` method and pass:

    1. the name of the attribute within that set
        2. the value for that attribute
        The value can be any object valid for the attribute: a string, a boolean, or a number. (Note that dates are sent as `long` (epoch) numbers.)
3. For any attribute that can be multi\-valued, we can send a list of values.
4. Use the `replaceCustomMetadata()` method to replace only this named `RACI` custom metadata on the existing asset. Any other custom metadata will be left unchanged. Note that any attributes in `RACI` that are *not* included in the custom metadata attributes object we send will be *removed* from the custom metadata on that asset. (In our examples, this means any existing values in the `Accountable` and `Informed` attributes of `RACI` on this asset would be removed.)
5. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. Note that for this operation you must know the GUID of the asset you want to apply the custom metadata to. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
7. Provide the name for the custom metadata you want to add/replace.
8. Provide the custom metadata attributes object with the attributes and values you want to be the complete set for that custom metadata.

| Replace some custom metadata on an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.custom_metadata import CustomMetadataDict  client = AtlanClient() raci = CustomMetadataDict(client=client, name="RACI") # (1) raci["Responsible"] = ["jsmith"] # (2) raci["Consulted"] = ["finance", "risk"] # (3) client.asset.replace_custom_metadata( # (4)     guid="b4113341-251b-4adc-81fb-2420501c30e6",  #(5)     custom_metadata=raci # (6) )  ``` |

1. Create an empty custom metadata set by specifying the client instance and name of an existing custom metadata set.

    Name will be validated

    The name will be validated at runtime to ensure that a custom metadata set with the given name exists.
2. For each property of the metadata set you wish to update specify the name of the property.

    Name will be validated

    The metadata property name will be validated at runtime to ensure that a property with the given name exists in the custom metadata set.
3. For any property that can be multi\-valued, we need to send a list of values.
4. Use the `asset.replace_custom_metadata()` method to replace only this named `RACI` custom metadata on the existing asset. Any other custom metadata will be left unchanged. Note that any properties in `RACI` that are *not* included in the custom metadata object we send will be *removed* from the custom metadata on that asset. (In our examples, this means any existing values in the `Accountable` and `Informed` properties of `RACI` on this asset would be removed.)
5. Note that for this operation you must know the GUID of the asset you want to apply the custom metadata to. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
6. Provide the custom metadata set object with the properties and values you want to be the complete set for that custom metadata.

| Replace some custom metadata on an asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val cmRACI = CustomMetadataAttributes.builder()  // (1)     .attribute("Responsible", "jsmith")  // (2)     .attribute("Consulted", listOf("finance", "risk"))  // (3)     .build() Table.replaceCustomMetadata(  // (4)     client, // (5)     "b4113341-251b-4adc-81fb-2420501c30e6",  // (6)     "RACI",  // (7)     cmRACI)  // (8)  ``` |

1. Create a custom metadata attributes object that will contain the attributes and values for custom metadata you want to add to the asset.
2. For each attribute, use the `attribute()` method and pass:

    1. the name of the attribute within that set
        2. the value for that attribute
        The value can be any object valid for the attribute: a string, a boolean, or a number. (Note that dates are sent as `long` (epoch) numbers.)
3. For any attribute that can be multi\-valued, we can send a list of values.
4. Use the `replaceCustomMetadata()` method to replace only this named `RACI` custom metadata on the existing asset. Any other custom metadata will be left unchanged. Note that any attributes in `RACI` that are *not* included in the custom metadata attributes object we send will be *removed* from the custom metadata on that asset. (In our examples, this means any existing values in the `Accountable` and `Informed` attributes of `RACI` on this asset would be removed.)
5. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. Note that for this operation you must know the GUID of the asset you want to apply the custom metadata to. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
7. Provide the name for the custom metadata you want to add/replace.
8. Provide the custom metadata attributes object with the attributes and values you want to be the complete set for that custom metadata.

| POST /api/meta/entity/guid/a89ff15b\-f5e6\-48bc\-870b\-acfa11e212ae/businessmetadata/MNJ8mpLsIOaP4OQnLNhRta | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` { // (1)   "MNJ8mpLsIOaP4OQnLNhRta": { // (2)     "fWMB77RSjRGNYoFeD4FcGi": "jsmith", // (3)     "F8XI9GzcBpdBdfi4cLiPEz": [ // (4)       "finance",       "risk"     ]   } }  ``` |

1. You must pass the GUID of the asset to change for this operation. There is no alternative that works with the qualifiedName. Note that you also need the [hashed\-string representation](#find-hashed-string-names) of the custom metadata set in the URL itself.
2. Each custom metadata set you want to replace must be given using its [hashed\-string representation](#find-hashed-string-names).
3. Each custom metadata attribute you want to include in the replacement must be given using its [hashed\-string representation](#find-hashed-string-names).
4. For multivalued custom metadata attributes, specify the value as an array.

Defining custom metadata by names in dbt

You can iteratively migrate from using `businessAttributes` to `businessAttributeNames` with dbt. But remember to not define the same attribute under both.

### Replace all custom metadata on an asset[¶](#replace-all-custom-metadata-on-an-asset "Permanent link")

Could create a new asset

Remember that Atlan matches the provided `qualifiedName` to determine whether to [update or create the asset](../../../getting-started/#importance-of-identifiers).

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can also replace all the custom metadata on one or many existing [assets](../../../getting-started/#what-is-an-asset) at the same time.

Replaces any existing custom metadata

This approach will replace all existing custom metadata (across all attributes) on the asset. If you have only a few custom metadata attributes defined in the update, this will remove any other custom metadata attributes that are already set on the asset within Atlan.

dbt

Java

Python

Kotlin

Raw REST API

| Replace all custom metadata on existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         businessAttributes: # (2)           MNJ8mpLsIOaP4OQnLNhRta: # (3)             fWMB77RSjRGNYoFeD4FcGi: jsmith # (4)             F8XI9GzcBpdBdfi4cLiPEz: [ "finance", "risk" ] # (5)           foMg7yOwUajucuya0JEF4J: # (6)             uTmK5o0J8jHTH3KWFXXeZi: example # (7)  ``` |

1. You must of course give the name of the object.
2. The custom metadata must be nested within the `meta`.`atlan`.`businessAttributes` structure.
3. Each custom metadata set you want to add or update must be given using its [hashed\-string representation](#find-hashed-string-names).
4. Each custom metadata attribute you want to update must be given using its [hashed\-string representation](#find-hashed-string-names).
5. For multivalued custom metadata attributes, specify the value as an array.
6. Additional custom metadata sets would be listed as additional sub\-objects of the `businessAttributes` object. (Still using a [hashed\-string representation](#find-hashed-string-names).)
7. ...and custom metadata attributes within those sets would be listed as sub\-objects of the custom metadata set object. (Still using a [hashed\-string representation](#find-hashed-string-names).)

| Replace all custom metadata on existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` CustomMetadataAttributes cmRACI = CustomMetadataAttributes.builder() // (1)     .attribute("Responsible", "jsmith")     .attribute("Consulted", List.of("finance", "risk"))     .build(); CustomMetadataAttributes cmOther = CustomMetadataAttributes.builder() // (2)     .attribute("Another", "example")     .build(); Table table = Table     .updater("default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (3)         "TOP_BEVERAGE_USERS")     .customMetadata("RACI", cmRACI) // (4)     .customMetadata("Other", cmOther) // (5)     .build(); // (6) AssetMutationResponse response = table.saveReplacingCM(client, false); // (7) assert response.getUpdatedAssets().size() == 1 // (8)  ``` |

1. Create one or more custom metadata attributes objects that will contain all the custom metadata you want the asset to have.
2. You can create as many custom metadata attributes objects as you have named sets of custom metadata.
3. Use the `updater()` method to initialize the object with all [necessary attributes for updating it](../../advanced-examples/update/#build-minimal-object-needed).
4. Directly chain the custom metadata attributes onto the `updater()` method's result. Note that the first parameter needs to be the name of the custom metadata that contains these attributes.
5. Continue chaining custom metadata attributes onto each other, if you have multiple sets of custom metadata you want to include in the replacement.
6. Call the `build()` method to build the enriched object.
7. Call the `saveReplacingCM()` method to replace the custom metadata for the asset in Atlan. (If you use `save()` then no custom metadata updates will be made; while using `saveMergingCM()` will only update any new or changed values.) Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
8. The response will include all assets that were updated.

| Replace all custom metadata on existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.custom_metadata import CustomMetadataDict  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) cm_raci = CustomMetadataDict( # (2)     client=client,     name="RACI", # (3) )  cm_raci["Responsible"] = "jsmith" # (4) cm_raci["Consulted"] = ["finance", "risk"] # (5) cm_other = CustomMetadataDict(     client=client,     name="Other", ) cm_other["Another"] = "example" table.set_custom_metadata(client=client, custom_metadata=cm_raci) # (6) table.set_custom_metadata(client=client, custom_metadata=cm_other) # (7) response = client.asset.save_replacing_cm( # (8)     table ) assert (tables := response.assets_updated(asset_type=Table)) # (9)  ``` |

1. Use the `updater()` method to create an asset suitable for modifiaction i.e. with all the required attributes.
2. Create a new instance of CustomMetadataDict.
3. Provide the name of an existing custom metadata set.

    Name will be validated

    The name will be validated at runtime to ensure that a custom metadata set with the given name exists.
4. For each property that you want to set, specify the property name.

    Name will be validated

    The metadata property name will be validated at runtime to ensure that a property with the given name exists in the custom metadata set.
5. For any property that can be multi\-valued, we need to send a list of values.
6. Use the `set_custom_metadata()` method to add the custom metadata to the model object.
7. You must call `set_custom_metadata()` for each set of custom metadata.
8. Use the `save_replacing_cm()` method to update the model object on the server.
9. Assert that a `Table` asset has been updated.

| Replace all custom metadata on existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` val cmRACI = CustomMetadataAttributes.builder()  // (1)     .attribute("Responsible", "jsmith")     .attribute("Consulted", listOf("finance", "risk"))     .build() val cmOther = CustomMetadataAttributes.builder()  // (2)     .attribute("Another", "example")     .build() val table = Table     .updater("default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (3)         "TOP_BEVERAGE_USERS")     .customMetadata("RACI", cmRACI)  // (4)     .customMetadata("Other", cmOther)  // (5)     .build()  // (6) val response = table.saveReplacingCM(client, false)  // (7) assert(response.updatedAssets.size == 1)  // (8)  ``` |

1. Create one or more custom metadata attributes objects that will contain all the custom metadata you want the asset to have.
2. You can create as many custom metadata attributes objects as you have named sets of custom metadata.
3. Use the `updater()` method to initialize the object with all [necessary attributes for updating it](../../advanced-examples/update/#build-minimal-object-needed).
4. Directly chain the custom metadata attributes onto the `updater()` method's result. Note that the first parameter needs to be the name of the custom metadata that contains these attributes.
5. Continue chaining custom metadata attributes onto each other, if you have multiple sets of custom metadata you want to include in the replacement.
6. Call the `build()` method to build the enriched object.
7. Call the `saveReplacingCM()` method to replace the custom metadata for the asset in Atlan. (If you use `save()` then no custom metadata updates will be made; while using `saveMergingCM()` will only update any new or changed values.) Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
8. The response will include all assets that were updated.

| POST /api/meta/entity/bulk?replaceClassifications\=false\&replaceBusinessAttributes\=true\&overwriteBusinessAttributes\=true | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` { // (1)   "entities": [ // (2)     {       "typeName": "Table", // (3)       "attributes": {         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "name": "TOP_BEVERAGE_USERS" // (5)       },       "businessAttributes": { // (6)         "MNJ8mpLsIOaP4OQnLNhRta": { // (7)           "fWMB77RSjRGNYoFeD4FcGi": "jsmith", // (8)           "F8XI9GzcBpdBdfi4cLiPEz": [             "finance",             "risk"           ]         },         "foMg7yOwUajucuya0JEF4J": { // (9)           "uTmK5o0J8jHTH3KWFXXeZi": "example" // (10)         }       }     }   ] }  ``` |

1. Note that the query parameters `replaceBusinessAttributes` and `overwriteBusinessAttributes` must both equal `true` in the request. This is what causes the replacement behavior.
2. All assets must be wrapped in an `entities` array.
3. You must provide the exact type name for the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. You must provide the exact name of the asset (case\-sensitive).
6. Each custom metadata set you want to include in the replacement must be a sub\-object of the `businessAttributes` object.
7. Each custom metadata set must be specified using its [hashed\-string representation](#find-hashed-string-names).
8. Each custom metadata attribute you want to update must be given using its [hashed\-string representation](#find-hashed-string-names).
9. Additional custom metadata sets would be listed as additional sub\-objects of the `businessAttributes` object. (Still using a [hashed\-string representation](#find-hashed-string-names).)
10. ...and custom metadata attributes within those sets would be listed as sub\-objects of the custom metadata set object. (Still using a [hashed\-string representation](#find-hashed-string-names).)

Remove from an existing asset[¶](#remove-from-an-existing-asset "Permanent link")
---------------------------------------------------------------------------------

### Remove only some custom metadata attributes[¶](#remove-only-some-custom-metadata-attributes "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove only some custom metadata attributes (leaving all others unchanged):

dbt

Java

Python

Kotlin

Raw REST API

This currently isn't possible via dbt.

| Remove only some custom metadata attributes | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` CustomMetadataAttributes cmRACI = CustomMetadataAttributes.builder() // (1)     .attribute("Accountable", Removable.NULL) // (2)     .build(); Table.updateCustomMetadataAttributes( // (3)     client, // (4)     "b4113341-251b-4adc-81fb-2420501c30e6", // (5)     "RACI", // (6)     cmRACI); // (7)  ``` |

1. Create a custom metadata attributes object that will contain only the attributes and values for custom metadata that you want to remove from the asset. All other custom metadata attributes (those not specified in this object) will remain unchanged on the asset.
2. For each attribute, use the `attribute()` method and pass:

    1. the name of the attribute within that set
        2. a special value of `Removable.NULL`
        This special value will ensure that the custom metadata attribute (`Accountable` in this example) is removed from the asset.
3. Use the `updateCustomMetadataAttributes()` method to update only the `Accountable` attribute in the `RACI` custom metadata on the existing asset. Since we're sending a special value to `null` this attribute, it will be removed by the update. Any other custom metadata attributes in `RACI` and all other custom metadata will be left unchanged.
4. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
5. Note that for this operation you must know the GUID of the asset you want to remove the custom metadata from. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
6. Provide the name for the custom metadata you want to remove.
7. Provide the custom metadata attributes object with the attributes and special `Removable.NULL` values you want to remove for that custom metadata.

| Remove only some custom metadata attributes | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.custom_metadata import CustomMetadataDict  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) cm_raci = CustomMetadataDict( # (2)     client=client,     name="RACI", # (3) ) cm_raci["Accountable"]= None # (4) table.set_custom_metadata(client=client, custom_metadata=cm_raci) # (5) response = client.asset.save_merging_cm( # (6)     table ) assert (tables := response.assets_updated(asset_type=Table)) # (7)  ``` |

1. Use the `updater()` method to create an asset suitable for modifiaction i.e. with all the required attributes.
2. Create an instance of `CustomMetadataDict`.
3. Provide the name of an existing of an existing custom metadata set.

    Name will be validated

    The name will be validated at runtime to ensure that a custom metadata set with the given name exists.
4. Set the value of the property you wish to replace to `None`.

    Name will be validated

    The metadata property name will be validated at runtime to ensure that a property with the given name exists in the custom metadata set.
5. Use the `set_custom_metadata()` method to add the custom metadata to the model object.
6. Use the `save_merging_cm()` method to update the model object on the server.
7. Assert that a `Table` asset has been updated.

| Remove only some custom metadata attributes | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` val cmRACI = CustomMetadataAttributes.builder()  // (1)     .attribute("Accountable", Removable.NULL)  // (2)     .build() Table.updateCustomMetadataAttributes(  // (3)     client, // (4)     "b4113341-251b-4adc-81fb-2420501c30e6",  // (5)     "RACI",  // (6)     cmRACI)  // (7)  ``` |

1. Create a custom metadata attributes object that will contain only the attributes and values for custom metadata that you want to remove from the asset. All other custom metadata attributes (those not specified in this object) will remain unchanged on the asset.
2. For each attribute, use the `attribute()` method and pass:

    1. the name of the attribute within that set
        2. a special value of `Removable.NULL`
        This special value will ensure that the custom metadata attribute (`Accountable` in this example) is removed from the asset.
3. Use the `updateCustomMetadataAttributes()` method to update only the `Accountable` attribute in the `RACI` custom metadata on the existing asset. Since we're sending a special value to `null` this attribute, it will be removed by the update. Any other custom metadata attributes in `RACI` and all other custom metadata will be left unchanged.
4. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
5. Note that for this operation you must know the GUID of the asset you want to remove the custom metadata from. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
6. Provide the name for the custom metadata you want to remove.
7. Provide the custom metadata attributes object with the attributes and special `Removable.NULL` values you want to remove for that custom metadata.

| POST /api/meta/entity/guid/a89ff15b\-f5e6\-48bc\-870b\-acfa11e212ae/businessmetadata?isOverwrite\=false | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` { // (1)   "MNJ8mpLsIOaP4OQnLNhRta": { // (2)     "xDUCZllc4JyTKhwqSDkWK4": null // (3)   } }  ``` |

1. Note that the query parameters `isOverwrite` must be `false` in the request. This is what allows the removal of only the attributes provided in the request (and leaving all others unchanged). Also note that you must provide the GUID of the asset — there is no equivalent operation using the qualifiedName.
2. Each custom metadata set you want to include in the partial removal must be specified using its [hashed\-string representation](#find-hashed-string-names).
3. Each custom metadata attribute you want to remove must be given using its [hashed\-string representation](#find-hashed-string-names), with a value of `null`. You would either need to first retrieve the list of custom metadata definitions via API to determine this value, or look through the development console of your browser while opening the custom metadata in the Atlan UI.

### Remove some custom metadata from an asset[¶](#remove-some-custom-metadata-from-an-asset "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can also remove an entire set of custom metadata from existing assets. If you do this individually, you can selectively remove individual sets of custom metadata:

dbt

Java

Python

Kotlin

Raw REST API

| Remove some custom metadata from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         businessAttributes:           MNJ8mpLsIOaP4OQnLNhRta: {} # (2)  ``` |

1. You must of course give the name of the object.
2. The custom metadata must be nested within the `meta`.`atlan`.`businessAttributes` structure. To remove all properties for some custom metadata, send an explicit empty dictionary `{}` to the custom metadata's [hashed\-string representation](#find-hashed-string-names).

| Remove some custom metadata from an asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Table.removeCustomMetadata( // (1)     client, // (2)     "b4113341-251b-4adc-81fb-2420501c30e6", // (3)     "RACI"); // (4)  ``` |

1. Use the `removeCustomMetadata()` method to remove an entire named set of custom metadata from an asset. Any other custom metadata in other named sets will be left unchanged.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. Note that for this operation you must know the GUID of the asset you want to remove the custom metadata from. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
4. Provide the name for the custom metadata you want to remove.

| Remove some custom metadata from an asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.custom_metadata import CustomMetadataDict  client = AtlanClient() table = Table.updater(  # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) cm_raci = CustomMetadataDict(  # (2)     client=client,     name="RACI",  # (3) ) table.set_custom_metadata(client=client, custom_metadata=cm_raci)  # (4)  response = client.asset.save_merging_cm( # (5)     table ) assert (tables := response.assets_updated(asset_type=Table))  # (6)  ``` |

1. Use the `updater()` method to create an asset suitable for modifiaction i.e. with all the required attributes.
2. Create a new instance of `CustomMetadataDict`.
3. Provide the name of an existing custom metadata set.

    Name will be validated

    The name will be validated at runtime to ensure that a custom metadata set with the given name exists.
4. Use the `set_custom_metadata()` method to add the custom metadata to the model object.
5. Use the `save_merging_cm()` method to update the model object on the server.
6. Assert that a `Table` asset has been updated.

| Remove some custom metadata from an asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Table.removeCustomMetadata( // (1)     client, // (2)     "b4113341-251b-4adc-81fb-2420501c30e6", // (3)     "RACI") // (4)  ``` |

1. Use the `removeCustomMetadata()` method to remove an entire named set of custom metadata from an asset. Any other custom metadata in other named sets will be left unchanged.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. Note that for this operation you must know the GUID of the asset you want to remove the custom metadata from. Also, the operation returns no result: if there is an error it will throw an exception, but the result of the operation must be determined by retrieving the asset through a separate API call, if you want to confirm it.
4. Provide the name for the custom metadata you want to remove.

| POST /api/meta/entity/guid/a89ff15b\-f5e6\-48bc\-870b\-acfa11e212ae/businessmetadata?isOverwrite\=false | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` { // (1)   "MNJ8mpLsIOaP4OQnLNhRta": { // (2)     "F8XI9GzcBpdBdfi4cLiPEz": null, // (3)     "xDUCZllc4JyTKhwqSDkWK4": null,     "fWMB77RSjRGNYoFeD4FcGi": null,     "rN6H6xMQpyHvo639SXER83": null   } }  ``` |

1. Note that the query parameters `isOverwrite` must be `false` in the request. This is what allows the removal of only the custom metadata set provided in the request (and leaving all others unchanged). Also note that you must provide the GUID of the asset — there is no equivalent operation using the qualifiedName.
2. The custom metadata set you want to remove must be specified using its [hashed\-string representation](#find-hashed-string-names).
3. Each custom metadata attribute in that custom metadata set must be specified using its [hashed\-string representation](#find-hashed-string-names), with a value of `null`. You would either need to first retrieve the list of custom metadata definitions via API to determine this value, or look through the development console of your browser while opening the custom metadata in the Atlan UI.

### Remove all custom metadata from an asset[¶](#remove-all-custom-metadata-from-an-asset "Permanent link")

Could create a new asset

Remember that Atlan matches the provided `qualifiedName` to determine whether to [update or create the asset](../../../getting-started/#importance-of-identifiers).

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove all custom metadata from an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

| Remove all custom metadata from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         businessAttributes: {} # (2)  ``` |

1. You must of course give the name of the object.
2. The custom metadata must be nested within the `meta`.`atlan`.`businessAttributes` structure. To remove all custom metadata, send an explicit empty dictionary `{}`.

| Remove all custom metadata from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Table table = Table     .updater("default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (1)         "TOP_BEVERAGE_USERS").build(); AssetMutationResponse response = table.saveReplacingCM(client, false); // (2) assert response.getUpdatedAssets().size() == 1; // (3)  ``` |

1. Use the `updater()` method to initialize the object with all [necessary attributes for updating it](../../advanced-examples/update/#build-minimal-object-needed). (Removing the custom metadata is still an update to the asset, we are not deleting the asset itself.)
2. Call the `saveReplacingCM()` method to actually update the asset, and overwrite custom metadata. Since we have not provided any custom metadata in our object, this will *replace* the existing custom metadata on the asset with no custom metadata. (In other words, it will remove all custom metadata from the asset.) Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The response will include that single asset that was updated (again, removing custom metadata is an update to the asset — we are not deleting the asset itself).

| Remove all custom metadata from an existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient() table = Table.updater( # (1)     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS", ) response = client.asset.save_replacing_cm( # (2)     table ) assert (tables := response.assets_updated(asset_type=Table)) # (3)  ``` |

1. Use the `updater()` method to initialize the object with all [necessary attributes for updating it](../../advanced-examples/update/#build-minimal-object-needed). (Removing the custom metadata is still an update to the asset, we are not deleting the asset itself.)
2. Call the `save_replacing_cm()` method to actually update the asset.
3. Assert that a `Table` asset has been updated.

| Remove all custom metadata from an existing asset | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val table = Table     .updater("default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (1)         "TOP_BEVERAGE_USERS").build() val response = table.saveReplacingCM(client, false)  // (2) assert(response.updatedAssets.size == 1)  // (3)  ``` |

1. Use the `updater()` method to initialize the object with all [necessary attributes for updating it](../../advanced-examples/update/#build-minimal-object-needed). (Removing the custom metadata is still an update to the asset, we are not deleting the asset itself.)
2. Call the `saveReplacingCM()` method to actually update the asset, and overwrite custom metadata. Since we have not provided any custom metadata in our object, this will *replace* the existing custom metadata on the asset with no custom metadata. (In other words, it will remove all custom metadata from the asset.) Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The response will include that single asset that was updated (again, removing custom metadata is an update to the asset — we are not deleting the asset itself).

| POST /api/meta/entity/bulk?replaceClassifications\=false\&replaceBusinessAttributes\=true\&overwriteBusinessAttributes\=true | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` { // (1)   "entities": [ // (2)     {       "typeName": "Table", // (3)       "attributes": {         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "name": "TOP_BEVERAGE_USERS" // (5)       } // (6)     }   ] }  ``` |

1. Note that the query parameters `replaceBusinessAttributes` and `overwriteBusinessAttributes` must both equal `true` in the request. This is what causes the replacement behavior.
2. All assets must be wrapped in an `entities` array.
3. You must provide the exact type name for the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. You must provide the exact name of the asset (case\-sensitive).
6. By not providing any `businessAttributes` in the request, you will replace whatever custom metadata is on the asset with no custom metadata — equivalent to removing all custom metadata.

When creating an asset[¶](#when-creating-an-asset "Permanent link")
-------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add custom metadata when creating one or many assets:

dbt

Java

Python

Kotlin

Raw REST API

| Add custom metadata when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         businessAttributes: # (2)           MNJ8mpLsIOaP4OQnLNhRta: # (3)             fWMB77RSjRGNYoFeD4FcGi: jsmith # (4)             xDUCZllc4JyTKhwqSDkWK4: jdoe             F8XI9GzcBpdBdfi4cLiPEz: [ "finance", "risk" ] # (5)             rN6H6xMQpyHvo639SXER83: [ "operations" ]  ``` |

1. You must of course give the name of the object.
2. The custom metadata must be nested within the `meta`.`atlan`.`businessAttributes` structure.
3. Each custom metadata set you want to add or update must be given using its [hashed\-string representation](#find-hashed-string-names).
4. Each custom metadata attribute you want to update must be given using its [hashed\-string representation](#find-hashed-string-names).
5. For multivalued custom metadata attributes, specify the value as an array.

| Add custom metadata when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` CustomMetadataAttributes cmRACI = CustomMetadataAttributes.builder() // (1)     .attribute("Responsible", "jsmith") // (2)     .attribute("Accountable", "jdoe")     .attribute("Consulted", List.of("finance", "risk")) // (3)     .attribute("Informed", List.of("operations"))     .build(); Table table = Table     .creator("TOP_BEVERAGE_USERS", // (4)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .customMetadata("RACI", cmRACI) // (5)     .build(); // (6) AssetMutationResponse response = table.saveReplacingCM(client, false); // (7) assert response.getCreatedAssets().size() == 1 // (8)  ``` |

1. Create a custom metadata attributes object that will contain the attributes and values for custom metadata you want to add to the asset.
2. For each attribute, use the `attribute()` method and pass:

    1. the name of the attribute within that set
        2. the value for that attribute
        The value can be any object valid for the attribute: a string, a boolean, or a number. (Note that dates are sent as `long` (epoch) numbers.)
3. For any attribute that can be multi\-valued, we can send a list of values.
4. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
5. Set the custom metadata that should be added (using the custom metadata attributes object you built earlier).

    * Note that the first parameter to this method is the name of the custom metadata for which you're providing the attributes and values.
        * You can chain this `customMetadata()` method as many times as you like to add other custom metadata and attributes, but you should only call it once per named custom metadata set. (If you call it multiple times for the same named custom metadata, only the last one will be applied.)
6. Call the `build()` method to build the enriched object.
7. Call the `saveReplacingCM()` method to create the asset, including its custom metadata. (During creation you could also use `saveMergingCM()`, but if you use only `save()` then no custom metadata will be attached to the assets.) Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
8. The response will include all assets that were created.

| Add custom metadata when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.custom_metadata import CustomMetadataDict  client = AtlanClient() table = Table.creator(  # (1)     schema_qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV",     name="TOP_BEVERAGE_USERS", ) cm_raci = CustomMetadataDict(  # (2)     client=client,     name="RACI",  # (3)  )  # cm_raci["Accountable"] = "jdoe"  # (4) cm_raci["Responsible"] = ["jsmith"] cm_raci["Consulted"] = ["finance", "risk"]  # (5) cm_raci["Informed"] = ["operations"] table.set_custom_metadata(client=client, custom_metadata=cm_raci)  # (6) response = client.asset.save(table)  # (7) assert (created := response.assets_created(asset_type=Table)  # (8)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
2. Create a new instance of `CustomMetadataDict`.
3. Provide the name of and existing custom metadata set.

    Name will be validated

    The name will be validated at runtime to ensure that a custom metadata set with the given name exists.
4. For each property that you want to set, specify the property name.

    Name will be validated

    The metadata property name will be validated at runtime to ensure that a property with the given name exists in the custom metadata set.
5. For any attribute that can be multi\-valued, we need to send a list of values.
6. Use the `set_custom_metadata()` method to add the custom metadata to the model object.
7. Use the `save()` method to update the model object on the server.
8. assert that a `Table` asset was created.

| Add custom metadata when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` val cmRACI = CustomMetadataAttributes.builder()  // (1)     .attribute("Responsible", "jsmith")  // (2)     .attribute("Accountable", "jdoe")     .attribute("Consulted", listOf("finance", "risk"))  // (3)     .attribute("Informed", listOf("operations"))     .build() val table = Table     .creator("TOP_BEVERAGE_USERS",  // (4)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .customMetadata("RACI", cmRACI)  // (5)     .build()  // (6) val response = table.saveReplacingCM(client, false)  // (7) assert(response.createdAssets.size == 1)  // (8)  ``` |

1. Create a custom metadata attributes object that will contain the attributes and values for custom metadata you want to add to the asset.
2. For each attribute, use the `attribute()` method and pass:

    1. the name of the attribute within that set
        2. the value for that attribute
        The value can be any object valid for the attribute: a string, a boolean, or a number. (Note that dates are sent as `long` (epoch) numbers.)
3. For any attribute that can be multi\-valued, we can send a list of values.
4. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
5. Set the custom metadata that should be added (using the custom metadata attributes object you built earlier).

    * Note that the first parameter to this method is the name of the custom metadata for which you're providing the attributes and values.
        * You can chain this `customMetadata()` method as many times as you like to add other custom metadata and attributes, but you should only call it once per named custom metadata set. (If you call it multiple times for the same named custom metadata, only the last one will be applied.)
6. Call the `build()` method to build the enriched object.
7. Call the `saveReplacingCM()` method to create the asset, including its custom metadata. (During creation you could also use `saveMergingCM()`, but if you use only `save()` then no custom metadata will be attached to the assets.) Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
8. The response will include all assets that were created.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "atlanSchema": { // (5)           "typeName": "Schema",           "uniqueAttributes": {             "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV"           }         }       },       "businessAttributes": { // (6)         "MNJ8mpLsIOaP4OQnLNhRta": { // (7)           "fWMB77RSjRGNYoFeD4FcGi": "jsmith", // (8)           "xDUCZllc4JyTKhwqSDkWK4": "jdoe",           "F8XI9GzcBpdBdfi4cLiPEz": [ // (9)             "finance",             "risk"           ],           "rN6H6xMQpyHvo639SXER83": [             "operations"           ]         }       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide a name for the asset.
4. In the case of a table, the `qualifiedName` must be the concatenation of the parent schema's qualifiedName and the name of the table.
5. When creating a table, you must specify the schema to create it within. This is defined by the `atlanSchema` attribute. You must specify both the type (must be `Schema`) and qualifiedName of the schema within the `atlanSchema` attribute — and the schema must already exist.
6. Each custom metadata set you want to include on the asset must be a sub\-object of the `businessAttributes` object.
7. Each custom metadata set must be specified using its [hashed\-string representation](#find-hashed-string-names).
8. Each custom metadata attribute you want to add must be given using its [hashed\-string representation](#find-hashed-string-names).
9. For multivalued custom metadata attributes, specify the value as an array.

Find hashed\-string names[¶](#find-hashed-string-names "Permanent link")
------------------------------------------------------------------------

When using either the raw APIs or specifying `businessAttributes` with dbt, you must provide the classification names using Atlan's hashed\-string representation.

Not necessary for SDKs

Note that this is not needed when using the SDKs, which translate these for you!

To look up the hashed\-string representations:

GET /api/meta/types/typedefs?type\=business\_metadata
```

```
The response will include `displayName` and `name`, both at overall custom metadata level and for each attribute (property). The `displayName` is what you see in Atlan's UI, and the `name` is the hashed\-string representation:

| Simplified response | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 ``` | ``` {   "enumDefs": [],   "structDefs": [],   "classificationDefs": [],   "entityDefs": [],   "relationshipDefs": [],   "businessMetadataDefs": [     {       "category": "BUSINESS_METADATA",       "guid": "e5cc3476-9cd9-4ed7-89a7-18dfde86f827",       "name": "MNJ8mpLsIOaP4OQnLNhRta",       "displayName": "RACI",       "options": {         "logoType": "emoji",         "emoji": "👪"       },       "attributeDefs": [         {           "name": "fWMB77RSjRGNYoFeD4FcGi",           "displayName": "Responsible",           "cardinality": "SINGLE",           "typeName": "string",           "description": "",           "options": {             "customType": "users",             "showInOverview": "false",             "allowFiltering": "true",             "isEnum": "false",             "multiValueSelect": "false",             "primitiveType": "users"           }         },         {           "name": "xDUCZllc4JyTKhwqSDkWK4",           "displayName": "Accountable",           "cardinality": "SINGLE",           "typeName": "string",           "description": "",           "options": {             "customType": "users",             "showInOverview": "false",             "allowFiltering": "true",             "isEnum": "false",             "multiValueSelect": "false",             "primitiveType": "users"           }         },         {           "name": "F8XI9GzcBpdBdfi4cLiPEz",           "displayName": "Consulted",           "typeName": "array<string>",           "cardinality": "SET",           "description": "",           "options": {             "customType": "groups",             "showInOverview": "false",             "allowFiltering": "true",             "isEnum": "false",             "multiValueSelect": "true",             "primitiveType": "groups"           }         },         {           "name": "rN6H6xMQpyHvo639SXER83",           "displayName": "Informed",           "typeName": "array<string>",           "cardinality": "SET",           "description": "",           "options": {             "customType": "groups",             "showInOverview": "false",             "allowFiltering": "true",             "isEnum": "false",             "multiValueSelect": "true",             "primitiveType": "groups"           }         },         {           "name": "okm7BDXjTQx4iYPT5u7ilu",           "displayName": "Extra",           "typeName": "string",           "cardinality": "SINGLE",           "description": "",           "options": {             "showInOverview": "false",             "allowFiltering": "true",             "isEnum": "false",             "multiValueSelect": "false",             "primitiveType": "string"           }         }       ]     },     {       "category": "BUSINESS_METADATA",       "guid": "389c0f8a-5d68-407c-8b5c-45a19f2cc7e0",       "name": "foMg7yOwUajucuya0JEF4J",       "displayName": "Other",       "options": {         "logoType": "emoji",         "emoji": "❓"       },       "attributeDefs": [         {           "name": "uTmK5o0J8jHTH3KWFXXeZi",           "displayName": "Another",           "typeName": "string",           "cardinality": "SINGLE",           "description": "",           "options": {             "showInOverview": "false",             "allowFiltering": "true",             "isEnum": "false",             "multiValueSelect": "false",             "primitiveType": "string"           }         }       ]     }   ] }  ``` |

---

2022\-08\-222025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/custom-metadata/) to provide us with more information. 

Back to top

[Previous Tag (classify) assets](../tags/) [Next Link terms to assets](../term-assignment/) 

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

