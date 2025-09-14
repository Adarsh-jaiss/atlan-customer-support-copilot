# Source URL
https://developer.atlan.com/snippets/custom-metadata/create/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/custom-metadata/create/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to create custom metadata in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to create custom metadata in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/create.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Create custom metadata - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/custom-metadata/create/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to create custom metadata in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/create.png
meta-twitter:title: Create custom metadata - Developer
meta-viewport: width=device-width,initial-scale=1
title: Create custom metadata - Developer
-->

[Skip to content](#create-custom-metadata) Developer Create custom metadata Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/types/typedefs (POST)](../../../endpoints/#tag:apimetatypestypedefs-post)

Create custom metadata[¶](#create-custom-metadata "Permanent link")
===================================================================

Like other objects in the SDK that you can create, custom metadata implements the builder pattern. This allows you to progressively build\-up the structure you want to create.

There are limits to the number of custom metadata properties you can create

Atlan currently preserves details of custom metadata in its audit log. This allows Atlan to retain an audit trail of actions users took on custom metadata on each asset, even if the custom metadata definition itself is deleted.

However, this also places an upper limit on the number of custom metadata properties you can (structurally) define in Atlan. Even if you delete the custom metadata definitions, any that you have previously defined will still take up "space" within this limit.

**More details**

By default this is \~1000 properties. Note that this limit applies only to the structural definition of the properties themselves, not the values captured for assets. If you see an error like the following, it means you have reached this limit:

```
{
  "errorCode": "ATLAS-500-00-001",
  "errorMessage": "Unable to push entity audits to ES",
  "errorCause": "[{type=mapper_parsing_exception, reason=failed to parse, caused_by={type=illegal_argument_exception, reason=Limit of total fields [1000] has been exceeded while adding new fields [5]}}]"
}

```
You will need to contact Atlan support to extend this threshold if you reach it.

Build minimal object needed[¶](#build-minimal-object-needed "Permanent link")
-----------------------------------------------------------------------------

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, to create a custom metadata structure to capture RACI assignments:

Java

Python

Kotlin

Raw REST API

| Build custom metadata definition for creation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` CustomMetadataDef customMetadataDef = CustomMetadataDef.creator("RACI") // (1)     .attributeDef( // (2)         AttributeDef.of(client, "Responsible", // (3)             AtlanCustomAttributePrimitiveType.USERS, // (4)             null, // (5)             false)) // (6)     .attributeDef(AttributeDef.of(client, "Accountable", AtlanCustomAttributePrimitiveType.USERS, false))     .attributeDef(AttributeDef.of(client, "Consulted", AtlanCustomAttributePrimitiveType.GROUPS, true))     .attributeDef(AttributeDef.of(client, "Informed", AtlanCustomAttributePrimitiveType.GROUPS, true))     .options(CustomMetadataOptions.withImage("https://example.com/logo.png", true)) // (7)     .options(CustomMetadataOptions.withEmoji("👪")) // (8)     .options(CustomMetadataOptions.withIcon(AtlanIcon.ROCKET_LAUNCH, AtlanTagColor.RED)) // (9)     .build(); // (10)  ``` |

1. When creating the custom metadata structure, you must provide a name (`RACI` in this example).
2. You can then add as many attributes to that structure as you want.
3. Each attribute must have a name. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
4. Each attribute must have a type.
5. If the type is `AtlanCustomAttributePrimitiveType.OPTIONS` then you must also specify the enumeration that defines the valid values for this attribute (in this example the type is not an enumeration, so this is `null` and could even be left out as in the subsequent lines).
6. You must also specify whether the attribute allows multiple values to be captured on it (`true`) or only a single value (`false`).
7. You can also provide a custom logo for the custom metadata by providing a URL to an image. The second argument controls whether this custom metadata is editable via the UI — for `false` it is editable via the UI, while for `true` the custom metadata will only be editable via APIs (including via SDK).
8. Or you can use an emoji as the custom icon for the custom metadata.
9. Or you can use a built\-in icon for the custom metadata. The second argument controls the color to use for the icon.
10. As with all other builder patterns, you must `build()` the object you've defined.

| Build custom metadata definition for creation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 ``` | ``` from pyatlan.model.typedef import AttributeDef, CustomMetadataDef from pyatlan.model.enums import AtlanCustomAttributePrimitiveType from pyatlan.client.atlan import AtlanClient  cm_def = CustomMetadataDef.create(display_name="RACI") # (1) cm_def.attribute_defs = [ # (2)     AttributeDef.create(         client=client, # (3)         display_name="Responsible", # (4)         attribute_type=AtlanCustomAttributePrimitiveType.USERS, # (5)         options_name=None, # (6)         multi_valued=False, # (7)     ),     AttributeDef.create(         client=client,         display_name="Accountable",         attribute_type=AtlanCustomAttributePrimitiveType.USERS,     ),     AttributeDef.create(         client=client,         display_name="Consulted",         attribute_type=AtlanCustomAttributePrimitiveType.GROUPS,         multi_valued=True,     ),     AttributeDef.create(         client=client,         display_name="Informed",         attribute_type=AtlanCustomAttributePrimitiveType.GROUPS,         multi_valued=True,     ), ] cm_def.options = CustomMetadataDef.Options.with_logo_from_url( # (8)     url="https://example.com/logo.png", locked=True ) cm_def.options = CustomMetadataDef.Options.with_logo_as_emoji( # (9)     emoji="👪", locked=False )  ``` |

1. When creating the custom metadata structure, you must provide a name (`RACI` in this example).
2. You can then add as many attributes to that structure as you want.
3. You must provide a client instance.
4. Each attribute must have a name.
5. Each attribute must have a type.
6. If the type is `AtlanCustomAttributePrimitiveType.OPTIONS` then you must also specify the enumeration that defines the valid values for this attribute (in this example none are enumerations, so this is the default value for the argument: `None`).
7. You can also specify whether the attribute allows multiple values to be captured on it (`True`) or only a single value (`False`) (the default).
8. You can also provide a custom logo for the custom metadata by providing a URL to an image. The second argument controls whether this custom metadata is editable via the UI — for `locked=False` it is editable via the UI, while for `locked=True` the custom metadata will only be editable via APIs (including via SDK).
9. Or you can use an emoji as the custom icon for the custom metadata.

| Build custom metadata definition for creation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` val customMetadataDef = CustomMetadataDef.creator("RACI") // (1)     .attributeDef( // (2)         AttributeDef.of(client, "Responsible",  // (3)             AtlanCustomAttributePrimitiveType.USERS,  // (4)             null,  // (5)             false)) // (6)     .attributeDef(AttributeDef.of("Accountable", AtlanCustomAttributePrimitiveType.USERS, false))     .attributeDef(AttributeDef.of("Consulted", AtlanCustomAttributePrimitiveType.GROUPS, true))     .attributeDef(AttributeDef.of("Informed", AtlanCustomAttributePrimitiveType.GROUPS, true))     .options(CustomMetadataOptions.withImage("https://example.com/logo.png", true)) // (7)     .options(CustomMetadataOptions.withEmoji("👪")) // (8)     .options(CustomMetadataOptions.withIcon(AtlanIcon.ROCKET_LAUNCH, AtlanTagColor.RED)) // (9)     .build() // (10)  ``` |

1. When creating the custom metadata structure, you must provide a name (`RACI` in this example).
2. You can then add as many attributes to that structure as you want.
3. Each attribute must have a name. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
4. Each attribute must have a type.
5. If the type is `AtlanCustomAttributePrimitiveType.OPTIONS` then you must also specify the enumeration that defines the valid values for this attribute (in this example the type is not an enumeration, so this is `null` and could even be left out as in the subsequent lines).
6. You must also specify whether the attribute allows multiple values to be captured on it (`true`) or only a single value (`false`).
7. You can also provide a custom logo for the custom metadata by providing a URL to an image. The second argument controls whether this custom metadata is editable via the UI — for `false` it is editable via the UI, while for `true` the custom metadata will only be editable via APIs (including via SDK).
8. Or you can use an emoji as the custom icon for the custom metadata.
9. Or you can use a built\-in icon for the custom metadata. The second argument controls the color to use for the icon.
10. As with all other builder patterns, you must `build()` the object you've defined.

| POST /api/meta/types/typedefs | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 ``` | ``` {   "businessMetadataDefs": [ // (1)     {       "category": "BUSINESS_METADATA", // (2)       "name": "RACI", // (3)       "attributeDefs": [ // (4)         {           "name": "", // (5)           "displayName": "Responsible", // (6)           "description": "",           "typeName": "string",           "isOptional": true,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "isUnique": false,           "isIndexable": true,           "includeInNotification": false,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"S3Object\",\"LookerLook\",\"TableauSite\",\"SnowflakeStream\",\"ModeCollection\",\"LookerDashboard\",\"PowerBIWorkspace\",\"Collection\",\"AtlasGlossaryCategory\",\"TableauFlow\",\"LookerView\",\"TableauProject\",\"LookerExplore\",\"ModeReport\",\"PowerBIColumn\",\"Query\",\"ColumnProcess\",\"SalesforceDashboard\",\"SalesforceObject\",\"BIProcess\",\"DbtModelColumn\",\"S3Bucket\",\"SigmaDataElement\",\"DataStudioAsset\",\"DbtProcess\",\"DbtModel\",\"PowerBIDataset\",\"Column\",\"DbtMetric\",\"TableauDashboard\",\"SigmaDataset\",\"LookerQuery\",\"APISpec\",\"MetabaseDashboard\",\"Process\",\"PowerBIDashboard\",\"APIPath\",\"ModeChart\",\"PowerBIDataflow\",\"SalesforceField\",\"GCSObject\",\"SalesforceReport\",\"View\",\"Folder\",\"TableauMetric\",\"MaterialisedView\",\"PresetDashboard\",\"PowerBIDatasource\",\"ModeWorkspace\",\"SigmaPage\",\"LookerField\",\"SigmaWorkbook\",\"PowerBIMeasure\",\"TableauWorkbook\",\"LookerModel\",\"MetabaseCollection\",\"ModeQuery\",\"GCSBucket\",\"LookerTile\",\"Table\",\"PowerBITile\",\"PowerBIPage\",\"SalesforceOrganization\",\"PresetWorkspace\",\"TableauDatasource\",\"PresetDataset\",\"TableauCalculatedField\",\"LookerFolder\",\"TableauWorksheet\",\"MetabaseQuestion\",\"AtlasGlossary\",\"PresetChart\",\"PowerBITable\",\"LookerProject\",\"SnowflakePipe\",\"PowerBIReport\",\"SigmaDatasetColumn\",\"TableauDatasourceField\",\"TablePartition\",\"AtlasGlossaryTerm\",\"SigmaDataElementField\",\"Schema\",\"Database\",\"DbtColumnProcess\"]",             "allowSearch": false,             "maxStrLength": "100000000",             "allowFiltering": true,             "multiValueSelect": true, // (7)             "showInOverview": false,             "primitiveType": "users",             "isEnum": false,             "customType": "users" // (8)           },           "isNew": true // (9)         },         {           "name": "",           "displayName": "Accountable",           "description": "",           "typeName": "string",           "isOptional": true,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "isUnique": false,           "isIndexable": true,           "includeInNotification": false,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"S3Object\",\"LookerLook\",\"TableauSite\",\"SnowflakeStream\",\"ModeCollection\",\"LookerDashboard\",\"PowerBIWorkspace\",\"Collection\",\"AtlasGlossaryCategory\",\"TableauFlow\",\"LookerView\",\"TableauProject\",\"LookerExplore\",\"ModeReport\",\"PowerBIColumn\",\"Query\",\"ColumnProcess\",\"SalesforceDashboard\",\"SalesforceObject\",\"BIProcess\",\"DbtModelColumn\",\"S3Bucket\",\"SigmaDataElement\",\"DataStudioAsset\",\"DbtProcess\",\"DbtModel\",\"PowerBIDataset\",\"Column\",\"DbtMetric\",\"TableauDashboard\",\"SigmaDataset\",\"LookerQuery\",\"APISpec\",\"MetabaseDashboard\",\"Process\",\"PowerBIDashboard\",\"APIPath\",\"ModeChart\",\"PowerBIDataflow\",\"SalesforceField\",\"GCSObject\",\"SalesforceReport\",\"View\",\"Folder\",\"TableauMetric\",\"MaterialisedView\",\"PresetDashboard\",\"PowerBIDatasource\",\"ModeWorkspace\",\"SigmaPage\",\"LookerField\",\"SigmaWorkbook\",\"PowerBIMeasure\",\"TableauWorkbook\",\"LookerModel\",\"MetabaseCollection\",\"ModeQuery\",\"GCSBucket\",\"LookerTile\",\"Table\",\"PowerBITile\",\"PowerBIPage\",\"SalesforceOrganization\",\"PresetWorkspace\",\"TableauDatasource\",\"PresetDataset\",\"TableauCalculatedField\",\"LookerFolder\",\"TableauWorksheet\",\"MetabaseQuestion\",\"AtlasGlossary\",\"PresetChart\",\"PowerBITable\",\"LookerProject\",\"SnowflakePipe\",\"PowerBIReport\",\"SigmaDatasetColumn\",\"TableauDatasourceField\",\"TablePartition\",\"AtlasGlossaryTerm\",\"SigmaDataElementField\",\"Schema\",\"Database\",\"DbtColumnProcess\"]",             "allowSearch": false,             "maxStrLength": "100000000",             "allowFiltering": true,             "multiValueSelect": false,             "showInOverview": false,             "primitiveType": "users",             "isEnum": false,             "customType": "users"           },           "isNew": true         },         {           "name": "",           "displayName": "Consulted",           "description": "",           "typeName": "array<string>",           "isOptional": true,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "isUnique": false,           "isIndexable": true,           "includeInNotification": false,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"S3Object\",\"LookerLook\",\"TableauSite\",\"SnowflakeStream\",\"ModeCollection\",\"LookerDashboard\",\"PowerBIWorkspace\",\"Collection\",\"AtlasGlossaryCategory\",\"TableauFlow\",\"LookerView\",\"TableauProject\",\"LookerExplore\",\"ModeReport\",\"PowerBIColumn\",\"Query\",\"ColumnProcess\",\"SalesforceDashboard\",\"SalesforceObject\",\"BIProcess\",\"DbtModelColumn\",\"S3Bucket\",\"SigmaDataElement\",\"DataStudioAsset\",\"DbtProcess\",\"DbtModel\",\"PowerBIDataset\",\"Column\",\"DbtMetric\",\"TableauDashboard\",\"SigmaDataset\",\"LookerQuery\",\"APISpec\",\"MetabaseDashboard\",\"Process\",\"PowerBIDashboard\",\"APIPath\",\"ModeChart\",\"PowerBIDataflow\",\"SalesforceField\",\"GCSObject\",\"SalesforceReport\",\"View\",\"Folder\",\"TableauMetric\",\"MaterialisedView\",\"PresetDashboard\",\"PowerBIDatasource\",\"ModeWorkspace\",\"SigmaPage\",\"LookerField\",\"SigmaWorkbook\",\"PowerBIMeasure\",\"TableauWorkbook\",\"LookerModel\",\"MetabaseCollection\",\"ModeQuery\",\"GCSBucket\",\"LookerTile\",\"Table\",\"PowerBITile\",\"PowerBIPage\",\"SalesforceOrganization\",\"PresetWorkspace\",\"TableauDatasource\",\"PresetDataset\",\"TableauCalculatedField\",\"LookerFolder\",\"TableauWorksheet\",\"MetabaseQuestion\",\"AtlasGlossary\",\"PresetChart\",\"PowerBITable\",\"LookerProject\",\"SnowflakePipe\",\"PowerBIReport\",\"SigmaDatasetColumn\",\"TableauDatasourceField\",\"TablePartition\",\"AtlasGlossaryTerm\",\"SigmaDataElementField\",\"Schema\",\"Database\",\"DbtColumnProcess\"]",             "allowSearch": false,             "maxStrLength": "100000000",             "allowFiltering": true,             "multiValueSelect": true,             "showInOverview": false,             "primitiveType": "groups",             "isEnum": false,             "customType": "groups"           },           "isNew": true         },         {           "name": "",           "displayName": "Informed",           "description": "",           "typeName": "array<string>",           "isOptional": true,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "isUnique": false,           "isIndexable": true,           "includeInNotification": false,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"S3Object\",\"LookerLook\",\"TableauSite\",\"SnowflakeStream\",\"ModeCollection\",\"LookerDashboard\",\"PowerBIWorkspace\",\"Collection\",\"AtlasGlossaryCategory\",\"TableauFlow\",\"LookerView\",\"TableauProject\",\"LookerExplore\",\"ModeReport\",\"PowerBIColumn\",\"Query\",\"ColumnProcess\",\"SalesforceDashboard\",\"SalesforceObject\",\"BIProcess\",\"DbtModelColumn\",\"S3Bucket\",\"SigmaDataElement\",\"DataStudioAsset\",\"DbtProcess\",\"DbtModel\",\"PowerBIDataset\",\"Column\",\"DbtMetric\",\"TableauDashboard\",\"SigmaDataset\",\"LookerQuery\",\"APISpec\",\"MetabaseDashboard\",\"Process\",\"PowerBIDashboard\",\"APIPath\",\"ModeChart\",\"PowerBIDataflow\",\"SalesforceField\",\"GCSObject\",\"SalesforceReport\",\"View\",\"Folder\",\"TableauMetric\",\"MaterialisedView\",\"PresetDashboard\",\"PowerBIDatasource\",\"ModeWorkspace\",\"SigmaPage\",\"LookerField\",\"SigmaWorkbook\",\"PowerBIMeasure\",\"TableauWorkbook\",\"LookerModel\",\"MetabaseCollection\",\"ModeQuery\",\"GCSBucket\",\"LookerTile\",\"Table\",\"PowerBITile\",\"PowerBIPage\",\"SalesforceOrganization\",\"PresetWorkspace\",\"TableauDatasource\",\"PresetDataset\",\"TableauCalculatedField\",\"LookerFolder\",\"TableauWorksheet\",\"MetabaseQuestion\",\"AtlasGlossary\",\"PresetChart\",\"PowerBITable\",\"LookerProject\",\"SnowflakePipe\",\"PowerBIReport\",\"SigmaDatasetColumn\",\"TableauDatasourceField\",\"TablePartition\",\"AtlasGlossaryTerm\",\"SigmaDataElementField\",\"Schema\",\"Database\",\"DbtColumnProcess\"]",             "allowSearch": false,             "maxStrLength": "100000000",             "allowFiltering": true,             "multiValueSelect": true,             "showInOverview": false,             "primitiveType": "groups",             "isEnum": false,             "customType": "groups"           },           "isNew": true         }       ],       "displayName": "RACI", // (10)       "options": { // (11)         "logoType": "emoji",         "emoji": "👪"       }     }   ] }  ``` |

1. All custom metadata structural definitions must be specified within the `businessMetadataDefs` array.
2. Each structural definition must be defined with a category set to `BUSINESS_METADATA`.
3. Whatever name you provide for the structural definition will be replaced by a hashed\-string generated name by the back\-end.
4. Within the structural definition, you need to define each attribute inside the `attributeDefs` array.
5. You should leave the `name` of the attribute as an empty string. This will be generated by the back\-end.
6. Instead, provide the name for the attribute (as it should appear in the UI) to the `displayName`.
7. There are various properties of each attribute that define how the attribute is validated and will behave in the UI. You can use the `multiValueSelect` to specify whether to allow multiple values for this attribute on a single asset (in this example multiple values will be allowed).
8. One of the properties that must be specified is the type of the custom attribute. In this example, we use an Atlan\-specific custom type to capture users.
9. For each attribute that is to be newly created and added to the structure, set the `isNew` to `true`.
10. Specify the name of the custom metadata structure, as it should appear in the UI, to the `displayName`.
11. Finally, set options on the custom metadata structure to control its appearance — specifically the icon that should be used in the UI.

Create the custom metadata from the object[¶](#create-the-custom-metadata-from-the-object "Permanent link")
-----------------------------------------------------------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Now that the object is built, this `customMetadataDef` object will have the required information for Atlan to create it.
You can then actually create the custom metadata definition in Atlan by calling the `create()` method on the object itself:

Java

Python

Kotlin

Raw REST API

| Create the custom metadata definition | |
| --- | --- |
| ``` 14 ``` | ``` CustomMetadataDef response = customMetadataDef.create(client); // (1)  ``` |

1. The `create()` operation will actually create the custom metadata definition within Atlan, including all the attributes that were defined as part of it. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create the custom metadata definition | |
| --- | --- |
| ``` 33 34 35 36 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.typedef.create(cm_def) # (1)  ``` |

1. The `typedef.create()` operation will actually create the custom metadata definition within Atlan, including all the attributes that were defined as part of it.

| Create the custom metadata definition | |
| --- | --- |
| ``` 14 ``` | ``` val response = customMetadataDef.create(client) // (1)  ``` |

1. The `create()` operation will actually create the custom metadata definition within Atlan, including all the attributes that were defined as part of it. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

Creation implicit in step above

The actual creation of the custom metadata structure is implicit in the example above.

Now that the custom metadata structure has been created, you can [set its values per asset](../../common-examples/custom-metadata/).

Limit applicability of an attribute[¶](#limit-applicability-of-an-attribute "Permanent link")
---------------------------------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can also limit the assets the custom metadata applies to in Atlan. Anywhere you create an attribute definition, you can:

Java

Python

Kotlin

Raw REST API

| Limit applicability of an attribute | |
| --- | --- |
| ```  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` AttributeDef responsible = AttributeDef.of(client, "Responsible", // (1)     AtlanCustomAttributePrimitiveType.USERS,     false); responsible = responsible.toBuilder() // (2)     .options(responsible.getOptions().toBuilder() // (3)         .clearApplicableConnections() // (4)         .clearApplicableAssetTypes()         .clearApplicableGlossaries()         .clearApplicableGlossaryTypes()         .applicableConnection("default/snowflake/1234567890") // (5)         .applicableAssetType(Database.TYPE_NAME) // (6)         .applicableGlossary(Glossary.findByName("Example").getQualifiedName()) // (7)         .applicableGlossaryType(GlossaryTerm.TYPE_NAME) // (8)         .build()) // (9)     .build(); // (10)  ``` |

1. We still recommend creating the attribute using the `Attribute.of()` factory method. This ensures all required settings are configured based on the type of the attribute.
2. You can then clone the attribute into a mutable form using `toBuilder()`.
3. Set the `options` on this clone to change its applicability. You can use the `toBuilder()` on the options themselves to get a mutable clone of the options that have already been setup by the `AttributeDef.of()` factory method.
4. By default, the `AttributeDef.of()` method will ensure a custom metadata attribute applies to all assets. To limit its applicability, you need to remove these "grants" by clearing out:

    * Connections the custom metadata attribute applies to (by default, all assets in all connections that existed when the attribute was created will be capable of using this custom metadata attribute).
        * Asset types the custom metadata attribute applies to (by default, all asset types will be capable of using this custom metadata attribute).
        * Glossaries the custom metadata attribute applies to (by default, all objects in a glossary that existed when the attribute was created will be capable of using this custom metadata attribute).
        * Glossary asset types the custom metadata applies to (by default, glossaries, terms and categories will be capable of using this custom metadata attribute).
5. You can chain any number of `applicableConnection()` calls to specify the `qualiedName`s of connections. The custom metadata attribute will only be available to assets within these connections.

    To use all connections

    To select all connections, instead chain `.applicableConnections(Connection.getAllQualifiedNames())`.
6. You can chain any number of `applicableAssetType()` calls to specify the types of assets for the custom metadata attribute. The custom metadata attribute will only be available to assets of these types, within the connections specified in the line above.

    To use all asset types

    To select all asset types, instead chain `.applicableAssetTypes(AttributeDefOptions.ALL_ASSET_TYPES)`.
7. You can chain any number of `applicableGlossary()` calls to specify the `qualifiedName`s of glossaries. The custom metadata attribute will only be available to assets within these glossaries.

    To use all glossaries

    To select all glossaries, instead chain `.applicableGlossaries(Glossary.getAllQualifiedNames())`.
8. You can chain any number of `applicableGlossaryType()` calls to specify the types of glossary assets for the custom metadata attribute. The custom metadata attribute will only be available to glossary assets of these types, within the glossaries specified in the line above.

    To use all glossary asset types

    To select all glossary asset types, instead use `.applicableGlossaryTypes(AttributeDefOptions.ALL_GLOSSARY_TYPES)`.
9. You then need to build all of these options.
10. And finally you need to build the changes back into the attribute definition. You can then use the attribute definition (`responsible` in this example) as you would any other attribute definition, for example passing it to the chained `.attributeDef()` as part of `CustomMetadataDef.creator()` shown earlier.

Coming soon

| Limit applicability of an attribute | |
| --- | --- |
| ```  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` var responsible = AttributeDef.of(client, "Responsible",  // (1)     AtlanCustomAttributePrimitiveType.USERS,     false) responsible = responsible.toBuilder() // (2)     .options(responsible.options.toBuilder() // (3)         .clearApplicableConnections() // (4)         .clearApplicableAssetTypes()         .clearApplicableGlossaries()         .clearApplicableGlossaryTypes()         .applicableConnection("default/snowflake/1234567890") // (5)         .applicableAssetType(Database.TYPE_NAME) // (6)         .applicableGlossary(Glossary.findByName("Example").qualifiedName) // (7)         .applicableGlossaryType(GlossaryTerm.TYPE_NAME) // (8)         .build()) // (9)     .build() // (10)  ``` |

1. We still recommend creating the attribute using the `Attribute.of()` factory method. This ensures all required settings are configured based on the type of the attribute.
2. You can then clone the attribute into a mutable form using `toBuilder()`.
3. Set the `options` on this clone to change its applicability. You can use the `toBuilder()` on the options themselves to get a mutable clone of the options that have already been setup by the `AttributeDef.of()` factory method.
4. By default, the `AttributeDef.of()` method will ensure a custom metadata attribute applies to all assets. To limit its applicability, you need to remove these "grants" by clearing out:

    * Connections the custom metadata attribute applies to (by default, all assets in all connections that existed when the attribute was created will be capable of using this custom metadata attribute).
        * Asset types the custom metadata attribute applies to (by default, all asset types will be capable of using this custom metadata attribute).
        * Glossaries the custom metadata attribute applies to (by default, all objects in a glossary that existed when the attribute was created will be capable of using this custom metadata attribute).
        * Glossary asset types the custom metadata applies to (by default, glossaries, terms and categories will be capable of using this custom metadata attribute).
5. You can chain any number of `applicableConnection()` calls to specify the `qualiedName`s of connections. The custom metadata attribute will only be available to assets within these connections.

    To use all connections

    To select all connections, instead chain `.applicableConnections(Connection.getAllQualifiedNames())`.
6. You can chain any number of `applicableAssetType()` calls to specify the types of assets for the custom metadata attribute. The custom metadata attribute will only be available to assets of these types, within the connections specified in the line above.

    To use all asset types

    To select all asset types, instead chain `.applicableAssetTypes(AttributeDefOptions.ALL_ASSET_TYPES)`.
7. You can chain any number of `applicableGlossary()` calls to specify the `qualifiedName`s of glossaries. The custom metadata attribute will only be available to assets within these glossaries.

    To use all glossaries

    To select all glossaries, instead chain `.applicableGlossaries(Glossary.getAllQualifiedNames())`.
8. You can chain any number of `applicableGlossaryType()` calls to specify the types of glossary assets for the custom metadata attribute. The custom metadata attribute will only be available to glossary assets of these types, within the glossaries specified in the line above.

    To use all glossary asset types

    To select all glossary asset types, instead use `.applicableGlossaryTypes(AttributeDefOptions.ALL_GLOSSARY_TYPES)`.
9. You then need to build all of these options.
10. And finally you need to build the changes back into the attribute definition. You can then use the attribute definition (`responsible` in this example) as you would any other attribute definition, for example passing it to the chained `.attributeDef()` as part of `CustomMetadataDef.creator()` shown earlier.

Coming soon

Applicability is combined across connections and glossaries

If you specify both connections (and asset types) and glossaries (and glossary types), then the custom metadata attribute will be available across both data assets in those connections and glossary objects in those glossaries. In other words, these options are **not** mutually exclusive, but are combined.

---

2022\-12\-232025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/custom-metadata/create/) to provide us with more information. 

Back to top

[Previous Custom metadata structures](../) [Next Retrieve custom metadata](../read/) 

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

