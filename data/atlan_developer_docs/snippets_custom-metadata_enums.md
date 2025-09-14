# Source URL
https://developer.atlan.com/snippets/custom-metadata/enums/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/custom-metadata/enums/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage options (enumerations) in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage options (enumerations) in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/enums.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage options (enumerations) - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/custom-metadata/enums/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage options (enumerations) in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/enums.png
meta-twitter:title: Manage options (enumerations) - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage options (enumerations) - Developer
-->

[Skip to content](#manage-options-enumerations) Developer Manage options (enumerations) Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/types/typedef/name/{name} (GET)](../../../endpoints/#tag:apimetatypestypedefnamename-get)[/api/meta/types/typedef/{name} (DELETE)](../../../endpoints/#tag:apimetatypestypedefname-delete)[/api/meta/types/typedefs (POST)](../../../endpoints/#tag:apimetatypestypedefs-post)[/api/meta/types/typedefs (PUT)](../../../endpoints/#tag:apimetatypestypedefs-put)[/api/meta/types/typedefs/?type\=ENUM (GET)](../../../endpoints/#tag:apimetatypestypedefstypeenum-get)

Manage options (enumerations)[¶](#manage-options-enumerations "Permanent link")
===============================================================================

Options (or *enumerations*) in Atlan allow you to define a set of valid values
for custom metadata attributes. Like other objects in the SDK, enumerations implement
the builder pattern. This allows you to progressively build\-up the list of values you want to create.

Build minimal object needed[¶](#build-minimal-object-needed "Permanent link")
-----------------------------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

For example, to create an enumeration to capture a data quality dimension:

Java

Python

Kotlin

Raw REST API

| Build enumeration for creation | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` EnumDef enumDef = EnumDef.creator(         "DataQualityDimensions", // (1)         List.of("Accuracy", "Completeness", "Consistency", "Timeliness", "Validity", "Uniqueness")) // 2     .build(); // (3)  ``` |

1. When creating the enumeration, you must provide a name (`DataQualityDimensions` in this example).
2. You can then add as many valid values as you want: always as a list of strings.
3. As with all other builder patterns, you must `build()` the object you've defined.

| Build enumeration for creation | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` from pyatlan.model.typedef import EnumDef  enum_def = EnumDef.create(     name="DataQualityDimensions", # (1)     values=["Accuracy", "Completeness", "Consistency", "Timeliness", "Validity", "Uniqueness"] # (2) )  ``` |

1. When creating the enumeration, you must provide a name (`DataQualityDimensions` in this example).
2. You can then add as many valid values as you want: always as a list of strings.

| Build enumeration for creation | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val enumDef = EnumDef.creator(         "DataQualityDimensions",  // (1)         listOf("Accuracy", "Completeness", "Consistency", "Timeliness", "Validity", "Uniqueness")) // 2     .build() // (3)  ``` |

1. When creating the enumeration, you must provide a name (`DataQualityDimensions` in this example).
2. You can then add as many valid values as you want: always as a list of strings.
3. As with all other builder patterns, you must `build()` the object you've defined.

| POST /api/meta/types/typedefs | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 ``` | ``` {   "enumDefs": [ // (1)     {       "category": "ENUM", // (2)       "name": "DataQualityDimensions", // (3)       "elementDefs": [ // (4)         {           "value": "Accuracy",           "ordinal": 0         },         {           "value": "Completeness",           "ordinal": 1         },         {           "value": "Consistency",           "ordinal": 2         },         {           "value": "Timeliness",           "ordinal": 3         },         {           "value": "Validity",           "ordinal": 4         },         {           "value": "Uniqueness",           "ordinal": 5         }       ]     }   ] }  ``` |

1. All enumeration definitions must be specified within the `enumDefs` array.
2. Each definition must be defined with a category set to `ENUM`.
3. The name you provide for the definition will be used both for the front and back\-end.
4. Within the definition, you need to define each valid value for the enumeration within the `elementDefs` array. Each valid value should have both a string `value` (as it will appear in the UI) and an integer `ordinal`. Both must be unique within the enumeration.

Create the enumeration from the object[¶](#create-the-enumeration-from-the-object "Permanent link")
---------------------------------------------------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Now that the object is built, this `enumDef` object will have the required information for Atlan to create it.
You can then actually create the enumeration in Atlan by calling the `create()` method on the object itself:

Java

Python

Kotlin

Raw REST API

| Create the enumeration | |
| --- | --- |
| ``` 5 ``` | ``` EnumDef response = enumDef.create(client); // (1)  ``` |

1. The `create()` operation will actually create the enumeration within Atlan, including all the valid values that were defined as part of it. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create the enumeration | |
| --- | --- |
| ```  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.typedef.create(enum_def) # (1)  ``` |

1. The `typedef.create()` operation will actually create the enumeration definition within Atlan, including all the valid values that were defined as part of it.

| Create the enumeration | |
| --- | --- |
| ``` 5 ``` | ``` val response = enumDef.create(client) // (1)  ``` |

1. The `create()` operation will actually create the enumeration within Atlan, including all the valid values that were defined as part of it. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

Creation implicit in step above

The actual creation of the enumeration structure is implicit in the example above.

Use an enumeration in a custom metadata definition[¶](#use-an-enumeration-in-a-custom-metadata-definition "Permanent link")
---------------------------------------------------------------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To use an enumeration to restrain the values for an attribute in a custom metadata definition:

Java

Python

Kotlin

Raw REST API

| Build custom metadata definition for creation | |
| --- | --- |
| ```  6  7  8  9 10 11 12 13 14 ``` | ``` CustomMetadataDef customMetadataDef = CustomMetadataDef.creator("DQ") // (1)     .attributeDef( // (2)         AttributeDef.of(client, "Dimension", // (3)             AtlanCustomAttributePrimitiveType.OPTIONS, // (4)             "DataQualityDimensions", // (5)             false)) // (6)     .options(CustomMetadataOptions.withLogoAsEmoji("🔖")) // (7)     .build(); // (8) customMetadataDef.create(); // (9)  ``` |

1. When creating the custom metadata structure, you must provide a name (`DQ` in this example).
2. You can then add as many attributes to that structure as you want.
3. Each attribute must have a name. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
4. Each attribute must have a type. When using the enumeration as the type (to constrain its possible values), use `AtlanCustomAttributePrimitiveType.OPTIONS` as the type.
5. You must then also specify the enumeration that defines the valid values for this attribute. Carrying on the same example, we give the name of the enumeration here: `DataQualityDimensions`.
6. You must also specify whether the attribute allows multiple values to be captured on it (`true`) or only a single value (`false`).
7. You can specify how the custom metadata should appear (in this case, with an emoji).
8. As with all other builder patterns, you must `build()` the object you've defined.
9. Then you can `create()` the custom metadata definition within Atlan, including this enumeration\-constrained attribute that was defined as part of it.

| Build custom metadata definition for creation | |
| --- | --- |
| ``` 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` from pyatlan.model.typedef import AttributeDef, CustomMetadataDef from pyatlan.model.enums import AtlanCustomAttributePrimitiveType from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  cm_def = CustomMetadataDef.create(display_name="DQ") # (1) cm_def.attribute_defs = [ # (2)     AttributeDef.create(         client=client, # (3)         display_name="Dimension", # (4)         attribute_type=AtlanCustomAttributePrimitiveType.OPTIONS, # (5)         options_name="DataQualityDimensions", # (6)     ), ] cm_def.options = CustomMetadataDef.Options.with_logo_as_emoji( # (7)     emoji="🔖" ) client.typedef.create(cm_def) # (8)  ``` |

1. When creating the custom metadata structure, you must provide a name (`DQ` in this example).
2. You can then add as many attributes to that structure as you want.
3. You must provide a client instance.
4. Each attribute must have a name.
5. Each attribute must have a type. When using the enumeration as the type (to constrain its possible values), use `AtlanCustomAttributePrimitiveType.OPTIONS` as the type.
6. You must then also specify the enumeration that defines the valid values for this attribute. Carrying on the same example, we give the name of the enumeration here: `DataQualityDimensions`.
7. You can specify how the custom metadata should appear (in this case, with an emoji).
8. Then you can create the custom metadata definition within Atlan, including this enumeration\-constrained attribute that was defined as part of it.

| Build custom metadata definition for creation | |
| --- | --- |
| ```  6  7  8  9 10 11 12 13 14 ``` | ``` val customMetadataDef = CustomMetadataDef.creator("DQ") // (1)     .attributeDef( // (2)         AttributeDef.of(client, "Dimension",  // (3)             AtlanCustomAttributePrimitiveType.OPTIONS,  // (4)             "DataQualityDimensions",  // (5)             false)) // (6)     .options(CustomMetadataOptions.withLogoAsEmoji("🔖")) // (7)     .build() // (8) customMetadataDef.create() // (9)  ``` |

1. When creating the custom metadata structure, you must provide a name (`DQ` in this example).
2. You can then add as many attributes to that structure as you want.
3. Each attribute must have a name. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
4. Each attribute must have a type. When using the enumeration as the type (to constrain its possible values), use `AtlanCustomAttributePrimitiveType.OPTIONS` as the type.
5. You must then also specify the enumeration that defines the valid values for this attribute. Carrying on the same example, we give the name of the enumeration here: `DataQualityDimensions`.
6. You must also specify whether the attribute allows multiple values to be captured on it (`true`) or only a single value (`false`).
7. You can specify how the custom metadata should appear (in this case, with an emoji).
8. As with all other builder patterns, you must `build()` the object you've defined.
9. Then you can `create()` the custom metadata definition within Atlan, including this enumeration\-constrained attribute that was defined as part of it.

| POST /api/meta/types/typedefs | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 ``` | ``` {   "businessMetadataDefs": [     {       "category": "BUSINESS_METADATA",       "name": "DQ", // (1)       "attributeDefs": [ // (2)         {           "name": "", // (3)           "displayName": "Dimension",           "description": "",           "typeName": "DataQualityDimensions", // (4)           "isOptional": true,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "isUnique": false,           "isIndexable": true,           "includeInNotification": false,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"PowerBIMeasure\",\"TableauWorkbook\",\"LookerModel\",\"MetabaseCollection\",\"ModeQuery\",\"GCSBucket\",\"LookerTile\",\"Table\",\"PowerBITile\",\"PowerBIPage\",\"SalesforceOrganization\",\"PresetWorkspace\",\"TableauDatasource\",\"PresetDataset\",\"TableauCalculatedField\",\"LookerFolder\",\"TableauWorksheet\",\"MetabaseQuestion\",\"AtlasGlossary\",\"PresetChart\",\"PowerBITable\",\"LookerProject\",\"SnowflakePipe\",\"PowerBIReport\",\"SigmaDatasetColumn\",\"TableauDatasourceField\",\"TablePartition\",\"AtlasGlossaryTerm\",\"SigmaDataElementField\",\"Schema\",\"Database\",\"DbtColumnProcess\",\"S3Object\",\"LookerLook\",\"TableauSite\",\"SnowflakeStream\",\"ModeCollection\",\"LookerDashboard\",\"PowerBIWorkspace\",\"Collection\",\"AtlasGlossaryCategory\",\"TableauFlow\",\"LookerView\",\"TableauProject\",\"LookerExplore\",\"ModeReport\",\"PowerBIColumn\",\"Query\",\"ColumnProcess\",\"SalesforceDashboard\",\"SalesforceObject\",\"BIProcess\",\"DbtModelColumn\",\"S3Bucket\",\"SigmaDataElement\",\"DataStudioAsset\",\"DbtProcess\",\"DbtModel\",\"PowerBIDataset\",\"Column\",\"DbtMetric\",\"TableauDashboard\",\"SigmaDataset\",\"LookerQuery\",\"APISpec\",\"MetabaseDashboard\",\"Process\",\"PowerBIDashboard\",\"APIPath\",\"ModeChart\",\"PowerBIDataflow\",\"SalesforceField\",\"GCSObject\",\"SalesforceReport\",\"View\",\"Folder\",\"TableauMetric\",\"MaterialisedView\",\"PresetDashboard\",\"PowerBIDatasource\",\"ModeWorkspace\",\"SigmaPage\",\"LookerField\",\"SigmaWorkbook\"]",             "allowSearch": false,             "maxStrLength": "100000000",             "allowFiltering": true,             "multiValueSelect": false,             "showInOverview": false,             "primitiveType": "enum", // (5)             "isEnum": true,             "enumType": "DataQualityDimensions"           },           "isNew": true,           "enumValues": [             "Accuracy",             "Completeness",             "Consistency",             "Timeliness",             "Validity",             "Uniqueness"           ]         }       ],       "displayName": "DQ",       "options": {         "logoType": "emoji",         "emoji": "🔖"       }     }   ] }  ``` |

1. When creating the custom metadata structure, you must provide a name (`DQ` in this example).
2. You can then add as many attributes to that structure as you want.
3. Each attribute must have a name. Note, however, that the `name` should be sent as an empty string when creating an attribute (the name will be generated by the back\-end), and it is actually the `displayName` that gives the name as it will appear in the UI.
4. You must specify the enumeration that defines the valid values for this attribute. Carrying on the same example, we give the name of the enumeration here: `DataQualityDimensions`.
5. Each attribute must also have a primitive type. When using the enumeration as the type (to constrain its possible values), use:

    * `enum` as the primitive type
        * `isEnum` set to `true`
        * and set `enumType` to the name of the enumeration

Update options (enumerations)[¶](#update-options-enumerations "Permanent link")
-------------------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to update our data quality dimension
enumeration by adding a new set of valid values.

Java

Python

Kotlin

Raw REST API

| Update existing enum structure | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` EnumDef enumDef = EnumDef.updater(         client, "DataQualityDimensions", // (1)         List.of("Unknown", "Others"),  // (2)         false // (3)     ).build(); // (4)  EnumDef response = enumDef.update(client); // (5)  ``` |

1. When updating the existing enumeration, you must provide a name (`DataQualityDimensions` in this example). Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. You can then add as many valid values as you want: always as a list of strings.
3. You must specify whether you want to replace all existing values in the enumeration with the new ones (`true`), or if the new ones will be appended to the existing set (`false`).
4. As with all other builder patterns, you must `build()` the object you've defined.
5. The `update()` operation will actually update the enumeration within Atlan, including all the valid values that were defined as part of it. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update existing enum structure | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.model.typedef import EnumDef from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  enum_def = EnumDef.update(     client=client,     name="DataQualityDimensions", # (1)     values=["Unknown", "Others"] # (2)     replace_existing=False # (3) )  response = client.typedef.update(enum_def) # (4)  ``` |

1. When updating the existing enumeration, you must provide
a name (`DataQualityDimensions` in this example).
2. You can then add as many valid values as you want: always as a list of strings.
3. You must specify whether you want to replace all existing values in the enumeration
with the new ones (`True`), or if the new ones will be appended to the existing set (`False`).
4. The `client.typedef.update()` operation will actually update the enumeration within Atlan,
including all the valid values that were defined as part of it.

| Update existing enum structure | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val enumDef = EnumDef.updater(         client, "DataQualityDimensions", // (1)         listOf("Unknown", "Others"),  // (2)         false // (3)     ).build() // (4)  val response = enumDef.update(client) // (5)  ``` |

1. When updating the existing enumeration, you must provide a name (`DataQualityDimensions` in this example). Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. You can then add as many valid values as you want: always as a list of strings.
3. You must specify whether you want to replace all existing values in the enumeration with the new ones (`true`), or if the new ones will be appended to the existing set (`false`).
4. As with all other builder patterns, you must `build()` the object you've defined.
5. The `update()` operation will actually update the enumeration within Atlan, including all the valid values that were defined as part of it. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| PUT /api/meta/types/typedefs | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 ``` | ``` {   "enumDefs": [ // (1)     {       "category": "ENUM", // (2)       "name": "DataQualityDimensions", // (3)       "elementDefs": [ // (4)         {           "value": "Accuracy",           "ordinal": 0         },         {           "value": "Completeness",           "ordinal": 1         },         {           "value": "Consistency",           "ordinal": 2         },         {           "value": "Timeliness",           "ordinal": 3         },         {           "value": "Validity",           "ordinal": 4         },         {           "value": "Uniqueness",           "ordinal": 5         },         {           "value": "Unknown",           "ordinal": 6         },         {           "value": "Others",           "ordinal": 7         }       ]     }   ] }  ``` |

1. All enumeration definitions must be specified within the `enumDefs` array.
2. Each definition must be defined with a category set to `ENUM`.
3. The name of the enumeration definition you want to update.
4. You must send all valid values in the `elementDefs` array, as the existing list
of elements for the enumerations will be entirely replaced by what you provide here.

Retrieve options (enumerations)[¶](#retrieve-options-enumerations "Permanent link")
-----------------------------------------------------------------------------------

[2\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.1.0 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

To retrieve options (enumeration) by name:

Java

Python

Kotlin

Raw REST API

| Retrieve existing enum structure | |
| --- | --- |
| ``` 1 ``` | ``` TypeDef enumDef = client.typeDefs.get("DataQualityDimensions"); // (1)  ``` |

1. To retrieve the enumeration, you need to call the `.typeDefs.get()` method on a client, with the human\-readable name of the enumeration.

| Retrieve existing enum structure | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() enum_def = client.typedef.get_by_name("DataQualityDimensions") # (1)  ``` |

1. To retrieve the enumeration, you need to call the `client.typedef.get_by_name()` method with its human\-readable name.

| Retrieve existing enum structure | |
| --- | --- |
| ``` 1 ``` | ``` val enumDef = client.typeDefs.get("DataQualityDimensions") // (1)  ``` |

1. To retrieve the enumeration, you need to call the `.typeDefs.get()` method on a client, with the human\-readable name of the enumeration.

| GET /api/meta/types/typedef/name/DataQualityDimensions | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

Options (enumerations) do not have a hashed\-string representation

Note that unlike a custom metadata structure, options (enumerations) do not have
a hashed\-string name. Therefore, use their human\-readable name when retrieving its structure.

URL\-encoding

However, since this name is embedded in the URL for retrieval,
it does need to be url\-encoded. For example, if the name contains
spaces these need to be replaced with `%20`.

Retrieve all options (enumerations)[¶](#retrieve-all-options-enumerations "Permanent link")
-------------------------------------------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve all options (enumeration):

Java

Python

Kotlin

Raw REST API

| Retrieve all enum structures | |
| --- | --- |
| ``` 1 ``` | ``` TypeDefResponse enumDefs = client.typeDefs.list(AtlanTypeCategory.ENUM); // (1)  ``` |

1. To retrieve all enumerations, call the `.typeDefs.list()` method on a client, with the category `AtlanTypeCategory.ENUM`.

| Retrieve all enum structures | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.typedef.get(type_category=AtlanTypeCategory.ENUM) # (1) enum_defs = response.enum_defs # (2)  ``` |

1. To retrieve all enumerations, call the `client.typedef.get()` method with the definition category `AtlanTypeCategory.ENUM`.
2. Specifically retrieve the list of enumerations from `TypeDefResponse`.

| Retrieve all enum structures | |
| --- | --- |
| ``` 1 ``` | ``` val enumDefs = client.typeDefs.list(AtlanTypeCategory.ENUM) // (1)  ``` |

1. To retrieve all enumerations, call the `.typeDefs.list()` method on a client, with the category `AtlanTypeCategory.ENUM`.

| GET /api/meta/types/typedefs/?type\=ENUM | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

Delete options (enumerations)[¶](#delete-options-enumerations "Permanent link")
-------------------------------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To delete options (enumeration):

Java

Python

Kotlin

Raw REST API

| Delete enum structure | |
| --- | --- |
| ``` 1 ``` | ``` EnumDef.purge(client, "DataQualityDimensions"); // (1)  ``` |

1. You only need to call the `EnumDef.purge()` method with the human\-readable name of the enumeration, and it will be deleted. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete enum structure | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.model.typedef import EnumDef from pyatlan.client.atlan import AtlanClient  client = AtlanClient() client.typedef.purge("DataQualityDimensions", EnumDef) # (1)  ``` |

1. You only need to call the `clietn.typedef.purge()` method
with the human\-readable name of the enumeration, and it will be deleted.

| Delete enum structure | |
| --- | --- |
| ``` 1 ``` | ``` EnumDef.purge("DataQualityDimensions") // (1)  ``` |

1. You only need to call the `EnumDef.purge()` method with the human\-readable name of the enumeration, and it will be deleted. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| DELETE /api/meta/types/typedef/name/DataQualityDimensions | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

Options (enumerations) do not have a hashed\-string representation

Note that unlike a custom metadata structure, options (enumerations)
do not have a hashed\-string name. Therefore, use their human\-readable name when deleting.

URL\-encoding

However, since this name is embedded in the URL for deletion,
it does need to be url\-encoded. For example, if the name contains
spaces these need to be replaced with `%20`.

---

2022\-12\-232025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/custom-metadata/enums/) to provide us with more information. 

Back to top

[Previous Manage badges](../badge/) [Next Tag management](../../tags/) 

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

