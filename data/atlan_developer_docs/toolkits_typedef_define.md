# Source URL
https://developer.atlan.com/toolkits/typedef/define/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/typedef/define/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to use the Pkl-based template of the typedef toolkit to extend Atlan's metamodel.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to use the Pkl-based template of the typedef toolkit to extend Atlan's metamodel.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/typedef/define.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Define typedefs via template - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/typedef/define/
meta-twitter:card: summary_large_image
meta-twitter:description: How to use the Pkl-based template of the typedef toolkit to extend Atlan's metamodel.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/typedef/define.png
meta-twitter:title: Define typedefs via template - Developer
meta-viewport: width=device-width,initial-scale=1
title: Define typedefs via template - Developer
-->

[Skip to content](#define-typedefs-via-template) Developer Define typedefs via template Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Define typedefs via template[¶](#define-typedefs-via-template "Permanent link")
===============================================================================

How to read this guide

Each section of this guide provides 3 tabs, which are linked throughout (once you swap in one section, all other sections will automatically reflect that same level of detail):

**Running example (expand for details)**

Throughout the guide, anywhere we are creating portions of the [running example](../example/) you will find a similar expandable section to this one, which explains in more detail what the specific section is adding.

Start by creating a Pkl file that amends our published typedef toolkit model:

| MyCustomModel.pkl | |
| --- | --- |
| ``` 1 2 ``` | ``` amends "package://developer.atlan.com/toolkits/typedef/model@7.0.0#/Typedefs.pkl" amends "../toolkit/src/main/pkl/Typedefs.pkl" // (1)!  ``` |

1. You must use only one of these options, but when developing your typedefs directly in the `atlanhq/models` repository under the `typedefs` directory, you can use this form to always be using the latest version of the toolkit (without ever needing to manually update the version number or separately download the toolkit).

If this is the first time you're creating a model, hover over that line and download the package.

Set the overall structure[¶](#set-the-overall-structure "Permanent link")
-------------------------------------------------------------------------

Then you can start defining your model. All models must have at least two components:

1. A `namespace`, which uniquely prefixes all types and attributes in your model (to avoid any collisions with others).
2. A collection of `customAssetTypes` that define the objects in your model.

If you use only these two components, various other defaults will be generated for you automatically (such as the abstract supertype for your model). You can also override or extend aspects of these generated objects, if you look at the **Detailed** tab. (And finally, the **With UX** tab shows further options for configuring the user interface that will be coupled to your model.)

Simple

Detailed

With UX

| MyCustomModel.pkl | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` amends "../toolkit/src/main/pkl/Typedefs.pkl"  namespace = "Custom" // (1)  customAssetTypes { // (2)   ... }  ``` |

1. The namespace is used for every type in the model (PascalCase). It will also automatically be decapitalized for use as an attribute prefix.
2. `customAssetTypes` describe the objects you want to instantiate in your model.

| MyCustomModel.pkl | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` amends "../toolkit/src/main/pkl/Typedefs.pkl"  namespace = "Custom" // (1) attrPrefix = t.decapitalize() // (2)  customEnumTypes { // (3)   ... }  customStructTypes { // (4)   ... }  supertypeDefinition { // (5)   ... }  customAssetTypes { // (6)   ... }  customRelationshipTypes { // (7)   ... }  ``` |

1. The namespace is used for every type in the model (PascalCase). It will also automatically be decapitalized for use as an attribute prefix.
2. (Optional) You can override the attribute prefix, if you do not simply want to decapitalize the namespace. This prefix will be used for every attribute in the model (camelCase). Pkl provides methods like `decapitalize()` to lowercase only the first letter of a string, or `toLowerCase()` to convert an entire string to lowercase. Or you can of course use a literal string here.
3. (Optional) `customEnumTypes` describe any lists of valid values (enumerations) you want to be able to use anywhere in your model.
4. (Optional) `customStructTypes` describe any complex (nested) attributes you want to be able to use anywhere in your model.
5. (Optional) `supertypeDefinition` configures the abstract supertype for all other asset types you want to be able to instantiate. For example, you would use this section to define attributes that should exist across all objects in your model, or if you want your abstract supertype to extend something other than the default supertype (`Catalog`).
6. `customAssetTypes` describe the objects you want to instantiate in your model.
7. (Optional) `customRelationshipTypes` describe the relationships between objects in your model.

| MyCustomModel.pkl | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` amends "../toolkit/src/main/pkl/Typedefs.pkl" import "../toolkit/src/main/pkl/Frontend.pkl" // (1)  namespace = "Custom" // (2) attrPrefix = t.decapitalize() // (3)  customEnumTypes { // (4)   ... }  customStructTypes { // (5)   ... }  supertypeDefinition { // (6)   ... }  customAssetTypes { // (7)   ... }  customRelationshipTypes { // (8)   ... }  ui { // (9)   ... }  ``` |

1. (Optional) If you intend to include any front\-end elements in your definition (such as icons), you will need to import the `Frontend.pkl` portion of the toolkit.

    Can also use the full online path

    If you do not have access to the `atlanhq/models` repository, you can also use the full online path for the toolkit:

    ```
    import "package://developer.atlan.com/toolkits/typedef/model@7.0.0#/Frontend.pkl"

    ```
2. The namespace is used for every type in the model (PascalCase). It will also automatically be decapitalized for use as an attribute prefix.
3. (Optional) You can override the attribute prefix, if you do not simply want to decapitalize the namespace. This prefix will be used for every attribute in the model (camelCase). Pkl provides methods like `decapitalize()` to lowercase only the first letter of a string, or `toLowerCase()` to convert an entire string to lowercase. Or you can of course use a literal string here.
4. (Optional) `customEnumTypes` describe any lists of valid values (enumerations) you want to be able to use anywhere in your model.
5. (Optional) `customStructTypes` describe any complex (nested) attributes you want to be able to use anywhere in your model.
6. (Optional) `supertypeDefinition` configures the abstract supertype for all other asset types you want to be able to instantiate. For example, you would use this section to define attributes that should exist across all objects in your model, or if you want your abstract supertype to extend something other than the default supertype (`Catalog`).
7. `customAssetTypes` describe the objects you want to instantiate in your model.
8. (Optional) `customRelationshipTypes` describe the relationships between objects in your model.
9. (Optional) `ui` describes overall user interface setup, such as the filters for the discovery page or the breadcrumb trails to use to show an asset's containment hierarchy.

Define reusable structures[¶](#define-reusable-structures "Permanent link")
---------------------------------------------------------------------------

**(Optional)** Use the `customEnumTypes` and `customStructTypes` sections to define any reusable structures for your model.

**Running example (expand for details)**

From the running example, the reusable structures define these two objects:

```
erDiagram
    "CustomTemperature(Enum)" {
        val HOT "highly available"
        val COLD "offline storage"
    }
    "CustomRating(Struct)" {
        string customRatingFrom
        long customRatingOf
    }
```

Simple

Detailed

With UX

If you do not need these kinds of structures in your model, you can leave these sections out entirely.

Define local variables for your types

To be capable of being referenced as types for attributes elsewhere in your model, the type names for these structures **must** be prefixed with the namespace. The toolkit provides a helper method for you to enforce this — `getTypeName()`.

| MyCustomModel.pkl | |
| --- | --- |
| ```  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 ``` | ``` local TemperatureType = getTypeName("TemperatureType") // (1) local Ratings = getTypeName("Ratings")  customEnumTypes { // (2)   [TemperatureType] { // (3)     description = "Valid values for \(Table) temperatures."     validValues { // (4)       ["COLD"] { description = "Lowest availability, can be offline storage." }       ["HOT"] { description = "Highest availability, must be on solid-state or in-memory storage." }     }   } }  customStructTypes { // (5)   [Ratings] { // (6)     description = "Ratings for an asset from the source system."     attributes { // (7)       ["ratingFrom"] { // (8)         description = "Username of the user who left the rating."         type = "string"       }       ["ratingOf"] {         description = "Numeric score for the rating left by the user."         type = "long"       }     }   } }  ``` |

1. Define local variables (using the `local` keyword) for the name of each of your reusable structures. You can ensure they are properly namespaced by using the `getTypeName()` helper method the toolkit provides.
2. (Optional) You may define any number of lists of valid values that can be used to constrain values for some attribute elsewhere in your model within `customEnumTypes`.
3. Use the local variables defined above in the form `[VariableName] { }` and provide at least a `description` and a map of `validValues` for each enumeration.
4. The valid values should each be specified in the form `["Value"] { description = "" }`, where the value in square brackets is one acceptable value for this enumeration, and the description gives the meaning of that value.
5. (Optional) You may define any number of complex nested attribute structures that can be used as an attribute elsewhere in your model within `customStructTypes`.
6. Use the local variables defined above in the form `[VariableName] { }` and provide at least a `description` and a map of `attributes` for each struct.
7. Each attribute should take the form of `["name"] { }` and have at least a `description` and `type`.
8. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.

Define local variables for your types

To be capable of being referenced as types for attributes elsewhere in your model, the type names for these structures **must** be prefixed with the namespace. The toolkit provides a helper method for you to enforce this — `getTypeName()`.

| MyCustomModel.pkl | |
| --- | --- |
| ```  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 ``` | ``` local TemperatureType = getTypeName("TemperatureType") // (1) local Ratings = getTypeName("Ratings")  customEnumTypes { // (2)   [TemperatureType] { // (3)     description = "Valid values for \(Table) temperatures."     validValues { // (4)       ["COLD"] { description = "Lowest availability, can be offline storage." }       ["HOT"] { description = "Highest availability, must be on solid-state or in-memory storage." }     }   } }  customStructTypes { // (5)   [Ratings] { // (6)     description = "Ratings for an asset from the source system."     attributes { // (7)       ["ratingFrom"] { // (8)         label = "From" // (9)         description = "Username of the user who left the rating."         type = "string"       }       ["ratingOf"] {         label = "Score"         description = "Numeric score for the rating left by the user."         type = "long"       }     }   } }  ``` |

1. Define local variables (using the `local` keyword) for the name of each of your reusable structures. You can ensure they are properly namespaced by using the `getTypeName()` helper method the toolkit provides.
2. (Optional) You may define any number of lists of valid values that can be used to constrain values for some attribute elsewhere in your model within `customEnumTypes`.
3. Use the local variables defined above in the form `[VariableName] { }` and provide at least a `description` and a map of `validValues` for each enumeration.
4. The valid values should each be specified in the form `["Value"] { description = "" }`, where the value in square brackets is one acceptable value for this enumeration, and the description gives the meaning of that value.
5. (Optional) You may define any number of complex nested attribute structures that can be used as an attribute elsewhere in your model within `customStructTypes`.
6. Use the local variables defined above in the form `[VariableName] { }` and provide at least a `description` and a map of `attributes` for each struct.
7. Each attribute should take the form of `["name"] { }` and have at least a `description` and `type`.
8. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
9. (Optional) Setting the `label` will control how the attribute is labelled in the user interface.

Define abstract supertype[¶](#define-abstract-supertype "Permanent link")
-------------------------------------------------------------------------

**(Optional)** Use the `supertypeDefinition` section to define reusable attributes for your model. This supertype itself would never be directly instantiated, but will define attributes that are common across all types that can be instantiated.

**Running example (expand for details)**

From the running example, the common metadata was not originally illustrated. If you noticed the same 3 attributes were defined again at each level, here this abstract type defines those attributes just once (to be inherited by all the other levels).

```
erDiagram
    "Custom (Abstract)" {
        string customSourceId
        string customDatasetName
        string customDatasetQualifiedName
    }
```

Will inherit all attributes from its own supertype

Remember that this supertype will itself inherit all attributes from its supertype (by default, `Catalog`). So things like `name`, `description`, `qualifiedName`, `createdBy`, `updatedBy`, and so on do not need to be redefined here.

Simple

Detailed

With UX

If you have no other attributes you need across the asset types in your model, you can leave this `supertypeDefinition` out entirely and the toolkit will generate it for you.

| MyCustomModel.pkl | |
| --- | --- |
| ``` 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 ``` | ``` supertypeDefinition { // (1)   name = namespace // (2)   superTypes = new Listing { "Catalog" } // (3)   attributes { // (4)     ["sourceId"] { // (5)       description = "Unique identifier for the \(namespace) asset from the source system."       type = "string"     }     ["datasetName"] {       description = "Simple name of the dataset in which this asset exists, or empty if it is itself a dataset."       type = "string"       indexAs = "both" // (6)     }     ["datasetQualifiedName"] {       description = "Unique name of the dataset in which this asset exists, or empty if it is itself a dataset."       type = "string"       indexAs = "keyword" // (7)     }   } }  ``` |

1. You may define one (and only one) `supertypeDefinition`.
2. (Optional) Usually this should be the same as, or at least start with the type prefix (`namespace`). If unspecified, it will default to the string used for `namespace`.
3. (Optional) You may specify an alternative supertype for your abstract type itself to extend. If unspecified, it will default to `Catalog`.

    Could vary depending on the supertype you want

    The code shown here is for setting the supertype to `Catalog`. Because the toolkit would already default this value, it is necessary in this case to create an entirely new listing, to completely override the toolkit's defaults.

    If you want to instead use some other supertype entirely (like `BI`), you can simply use:

    | ``` 37 ``` | ``` supertypes { "BI" }  ``` |
    | --- | --- |
4. (Optional) You can define any number of attributes that should be inherited by all custom asset types in the model. Each attribute should take the form of `["name"] { }` and have at least a `description` and `type`.
5. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
6. (Optional) You can also control how the attribute will be indexed. For example, `both` will create both an exact\-match\-useful `keyword` index as well as a tokenized fuzzy\-useful `text` index for that attribute.
7. (Optional) By default, string attributes will be indexed as a tokenized fuzzy\-useful `text` index. If you want to force them to use an exact\-match\-useful `keyword` index instead, you can set the `indexAs` to `keyword`.

**Why would I define these `DatasetName` and `DatasetQualifiedName` attributes as shared?**

This is necessary to ensure these attributes exist on *all* asset types within this area, so that the hierarchy filters on the asset discovery UI find all children objects across all levels of the containment hierarchy.

This is a common pattern for new asset types that have a hierarchy of containment. You'll see the same pattern in our out\-of\-the\-box SQL asset types, for example, which have `databaseQualifiedName`, `databaseName`, `schemaQualifiedName`, `schemaName`, `tableQualifiedName`, `tableName`, `viewQualifiedName`, and `viewName` all defined at the shared supertype level (`SQL`).

| MyCustomModel.pkl | |
| --- | --- |
| ``` 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 ``` | ``` supertypeDefinition { // (1)   name = namespace // (2)   superTypes = new Listing { "Catalog" } // (3)   attributes { // (4)     ["sourceId"] { // (5)       label = "Source ID" // (6)       description = "Unique identifier for the \(namespace) asset from the source system."       type = "string"     }     ["datasetName"] {       label = "Dataset"       description = "Simple name of the dataset in which this asset exists, or empty if it is itself a dataset."       type = "string"       indexAs = "both" // (7)     }     ["datasetQualifiedName"] {       description = "Unique name of the dataset in which this asset exists, or empty if it is itself a dataset."       type = "string"       indexAs = "keyword" // (8)     }   } }  ``` |

1. You may define one (and only one) `supertypeDefinition`.
2. (Optional) Usually this should be the same as, or at least start with the type prefix (`namespace`). If unspecified, it will default to the string used for `namespace`.
3. (Optional) You may specify an alternative supertype for your abstract type itself to extend. If unspecified, it will default to `Catalog`.

    Could vary depending on the supertype you want

    The code shown here is for setting the supertype to `Catalog`. Because the toolkit would already default this value, it is necessary in this case to create an entirely new listing, to completely override the toolkit's defaults.

    If you want to instead use some other supertype entirely (like `BI`), you can simply use:

    | ``` 40 ``` | ``` supertypes { "BI" }  ``` |
    | --- | --- |
4. (Optional) You can define any number of attributes that should be inherited by all custom asset types in the model. Each attribute should take the form of `["name"] { }` and have at least a `description` and `type`.
5. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
6. (Optional) Setting the `label` will control how the attribute is labelled in the user interface.
7. (Optional) You can also control how the attribute will be indexed. For example, `both` will create both an exact\-match\-useful `keyword` index as well as a tokenized fuzzy\-useful `text` index for that attribute.
8. (Optional) By default, string attributes will be indexed as a tokenized fuzzy\-useful `text` index. If you want to force them to use an exact\-match\-useful `keyword` index instead, you can set the `indexAs` to `keyword`.

**Why would I define these `DatasetName` and `DatasetQualifiedName` attributes as shared?**

This is necessary to ensure these attributes exist on *all* asset types within this area, so that the hierarchy filters on the asset discovery UI find all children objects across all levels of the containment hierarchy.

This is a common pattern for new asset types that have a hierarchy of containment. You'll see the same pattern in our out\-of\-the\-box SQL asset types, for example, which have `databaseQualifiedName`, `databaseName`, `schemaQualifiedName`, `schemaName`, `tableQualifiedName`, `tableName`, `viewQualifiedName`, and `viewName` all defined at the shared supertype level (`SQL`).

Define instantiate\-able types[¶](#define-instantiate-able-types "Permanent link")
----------------------------------------------------------------------------------

Then, define the types in your custom model that you want to be able to instantiate.

Define local variables for your types and key attributes

To be capable of being referenced in relationships and in the generated UI code, both your type names and certain attributes **must** be prefixed with the namespace (or attribute prefix). The toolkit provides helper methods for you to get these — `getTypeName()` and `getAttributeName()`.

### New types of assets[¶](#new-types-of-assets "Permanent link")

Describe the new types of assets you want to be able to create and manage (and their attributes) under the `customAssetTypes` section.

**Running example (expand for details)**

From the running example, the new asset types define these three objects:

```
erDiagram
    CustomDataset {
        string customSourceId "from Custom"
        string customDatasetName "from Custom"
        string customDatasetQualifiedName "from Custom"
    }
    CustomTable {
        string customSourceId "from Custom"
        string customDatasetName "from Custom"
        string customDatasetQualifiedName "from Custom"
        struct[] customRatings
    }
    CustomField {
        string customSourceId "from Custom"
        string customDatasetName "from Custom"
        string customDatasetQualifiedName "from Custom"
        string tableName "from Column"
        string tableQualifiedName "from Column"
        enum customTemperature
    }
    "CustomTemperature(Enum)" |o--o{ CustomField : ""
    "CustomRating(Struct)" |o--o{ CustomTable : ""
```

Simple

Detailed

With UX

| MyCustomModel.pkl | |
| --- | --- |
| ```  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` local Dataset = getTypeName("Dataset") // (1) local Table = getTypeName("Table") local Field = getTypeName("Field")  customAssetTypes { // (2)   [Dataset] { // (3)     description = "Instances of \(Dataset) in Atlan."   }   [Table] {     description = "Instances of \(Table) in Atlan."   }   [Field] {     description = "Instances of \(Field) in Atlan."   } }  ``` |

1. Define local variables (using the `local` keyword) for each of your types. You can ensure they are properly namespaced by using the `getTypeName()` helper method the toolkit provides.
2. You can define any number of custom types that can be instantiated within `customAssetTypes`.
3. Use the local variables defined above in the form `[VariableName] { }` and provide at least a `description` for that custom asset type.

| MyCustomModel.pkl | |
| --- | --- |
| ``` 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 ``` | ``` local Dataset = getTypeName("Dataset") // (1) local Table = getTypeName("Table") local Field = getTypeName("Field")  customAssetTypes { // (2)   [Dataset] { // (3)     description = "Instances of \(Dataset) in Atlan."   }   [Table] {     description = "Instances of \(Table) in Atlan."     attributes { // (4)       ["ratings"] { // (5)         description = "Ratings for the \(Table) asset from the source system."         type = "struct" // (6)         structName = Ratings // (7)         multiValued = true // (8)       }     }     superTypes { "Table" } // (9)   }   [Field] {     description = "Instances of \(Field) in Atlan."     attributes {       ["temperature"] {         description = "Temperature of the \(Field) asset."         type = "enum" // (10)         enumName = TemperatureType // (11)       }     }     superTypes { "Column" }   } }  ``` |

1. Define local variables (using the `local` keyword) for each of your types. You can ensure they are properly namespaced by using the `getTypeName()` helper method the toolkit provides.
2. You can define any number of custom types that can be instantiated within `customAssetTypes`.
3. Use the local variables defined above in the form `[VariableName] { }` and provide at least a `description` for that custom asset type.
4. You can specify any attributes specific to this custom asset here. (Remember any common attributes will be inherited automatically from the supertype.)
5. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
6. The `type` can either be primitive or point to a complex definition like `struct` or `enum`.
7. When the `type` is `struct`, you must also provide the name of the struct in `structName`.

    Use that local variable you created to define the struct!
8. (Optional) If you want to allow multiple instances of this attribute to be stored on each asset, set `multiValued` to `true`.
9. (Optional) You can specify any additional supertypes your custom type should have. The top\-level supertype defined under `supertypeDefinition` (or generated from the `namespace`) will be set automatically, so you only need to include this if you want your new custom type to have multiple supertypes.
10. The `type` can be `enum` to restrict its values to a set of predefined values.
11. When the `type` is `enum`, you must also provide the name of the enumeration that defines the valid values in `enumName`.

    Use that local variable you created to define the enum!

| MyCustomModel.pkl | |
| --- | --- |
| ```  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 ``` | ``` local Dataset = getTypeName("Dataset") // (1) local Table = getTypeName("Table") local Field = getTypeName("Field")  local datasetQN = getAttributeName("datasetQualifiedName") // (2) local datasetN = getAttributeName("datasetName") local tableQN = getAttributeName("tableQualifiedName") local tableN = getAttributeName("tableName")  local datasetIcon = new Icon { // (3)   name = "DatabaseGray" // (4)   nameActive = "Database" // (5)   svg = "database-gray.svg" // (6)   svgActive = "database.svg" // (7) }  local tableIcon = new Icon {   name = "TableGray"   nameActive = "Table"   svg = "table-gray.svg"   svgActive = "table.svg" }  local fieldIcon = new Icon {   name = "ColumnGray"   nameActive = "Column"   svg = "column-gray.svg"   svgActive = "column.svg" }  customAssetTypes { // (8)   [Dataset] { // (9)     label = "Dataset" // (10)     icon = datasetIcon // (11)     description = "Instances of \(Dataset) in Atlan."   }   [Table] {     label = "Table"     icon = tableIcon     description = "Instances of \(Table) in Atlan."     parentQualifiedName = datasetQN // (12)     attributes { // (13)       ["ratings"] { // (14)         label = "Rating" // (15)         description = "Ratings for the \(Table) asset from the source system."         type = "struct" // (16)         structName = Ratings // (17)         multiValued = true // (18)       }     }     superTypes { "Table" } // (19)   }   [Field] {     label = "Field"     icon = fieldIcon     description = "Instances of \(Field) in Atlan."     parentQualifiedName = tableQN     attributes {       ["temperature"] {         label = "Temperature"         description = "Temperature of the \(Table) asset."         type = "enum" // (20)         enumName = TemperatureType // (21)       }     }     superTypes { "Column" }   } }  ui { // (22)   svgName = "\(namespace).svg" // (23)   filters { // (24)     [Dataset] { // (25)       attribute = datasetQN     }   }   breadcrumb { // (26)     [Dataset] {       q = datasetQN       n = datasetN     }     [Table] {       q = tableQN       n = tableN     }   } }  ``` |

1. Define local variables (using the `local` keyword) for each of your types. You can ensure they are properly namespaced by using the `getTypeName()` helper method the toolkit provides.
2. Define local variables (using the `local` keyword) for each attribute you will reference for the UI. You can ensure they are properly namespaced by using the `getAttributeName()` helper method the toolkit provides.
3. You may define further local variables to represent the various icons you want to use in the UI.
4. Each icon must have a `name` that will be used to refer to it in the generated code. When you want to reuse an existing icon, this must match the name of the existing icon in the existing front\-end code.
5. (Optional) Each icon can also have an alternate variation that is used when the icon is selected, which also must be named. (Again, if you want to reuse an existing icon, this must match the name of the existing icon in the existing front\-end code.)
6. Each icon must have an SVG file that provides the actual image for the icon. You'll need to copy this image file into the appropriate location later, but the filename must be accurate here.
7. (Optional) When you want an alternate variation of the icon to use when the icon is selected, specify the SVG filename for that alternative image. (Again, you'll need to copy this image file into the appropriate location later, but the filename must be accurate here.)
8. You can define any number of custom types that can be instantiated within `customAssetTypes`.
9. Use the local variables defined above in the form `[VariableName] { }` and provide at least a `description` for that custom asset type.
10. Setting the `label` will control how the type is labelled in the user interface.
11. Setting the `icon` will control the icon to display for this type in the user interface. These are themselves an object, which could either be defined inline here or (as in this example) as a separate local variable.
12. For types that are contained within another type, specify the name of the de\-normalized attribute that contains the `qualifiedName` of the parent asset. This will be used to efficiently render parent\-child relationships in the UI.

    Use that local variable you created for the attribute!
13. You can specify any attributes specific to this custom asset here. (Remember any common attributes will be inherited automatically from the supertype.)
14. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
15. You can also set the `label` to control how each attribute is labelled in the user interface.
16. The `type` can either be primitive or point to a complex definition like `struct` or `enum`.
17. When the `type` is `struct`, you must also provide the name of the struct in `structName`.

    Use that local variable you created to define the struct!
18. (Optional) If you want to allow multiple instances of this attribute to be stored on each asset, set `multiValued` to `true`.
19. (Optional) You can specify any additional supertypes your custom type should have. The top\-level supertype defined under `supertypeDefinition` (or generated from the `namespace`) will be set automatically, so you only need to include this if you want your new custom type to have multiple supertypes.
20. The `type` can be `enum` to restrict its values to a set of predefined values.
21. When the `type` is `enum`, you must also provide the name of the enumeration that defines the valid values in `enumName`.

    Use that local variable you created to define the enum!
22. (Optional) You can also define UI aspects that should apply across all assets of these types under the `ui` section.
23. Provide the filename for an SVG image you want to use as the icon to visually present all of these assets. This could be a branded logo of the source system that these assets represent, for example.
24. (Optional) You can define the hierarchy of filters that users can apply on the asset discovery page.

    * These are applicable in top\-down order after a connection has been selected, and can include at most the top 2 levels of the asset containment hierarchy.
        * Each entry should be keyed by the type name, and have as a value the name of the denormalized attribute that every asset must have populated to be contained within that level of the hierarchy.
25. Use those local variables again!
26. (Optional) You can define the "breadcrumb trail" that should be shown for assets to indicate their containment hierarchy.

    * These define the breadcrumb in top\-down order, and should generally not include more than 3 levels (or they will overrun the UI).
        * Each entry should be keyed by the type name, and have two values:

    + `q` giving the name of the denormalized attribute that has the unique name of the asset this one is contained within
            + `a` giving the name of the denormalized attribute that has the simple name of the asset this one is contained within

### New asset relationships[¶](#new-asset-relationships "Permanent link")

Describe the new relationships you want to be able to create and manage between assets under the `customRelationshipTypes` section.

**Running example (expand for details)**

From the running example, the new relationships define these linkages between the assets:

```
erDiagram
    CustomDataset ||--o{ CustomTable : "customTables / customDataset"
    CustomTable ||--o{ CustomField : "customFields / customTable"
    CustomField }o--o{ CustomField : "customToFields / customFromFields"
```

Simple

Detailed

With UX

If you have no relationships you need between the new asset types in your model and any other asset types, you can leave this customRelationshipTypes section out entirely.

| MyCustomModel.pkl | |
| --- | --- |
| ```  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 ``` | ``` customRelationshipTypes { // (1)   ["datasetAndItsTables"] = new ContainmentRelationship { // (2)     parent { // (3)       type = Dataset // (4)       attribute = "dataset" // (5)       description = "Dataset containing the Table." // (6)     }     children { // (7)       type = Table       attribute = "tables"       description = "Tables contained within the Dataset."     }   }   ["tableAndItsFields"] = new ContainmentRelationship {     parent {       type = Table       attribute = "table"       description = "Table containing the Field."     }     children {       type = Field       attribute = "fields"       description = "Fields contained within the Table."     }   }   ["interrelatedFields"] = new PeerToPeerRelationship { // (8)     description = "Many-to-many peer-to-peer relationship between \(Field)s."     peers { // (9)       new {         type = Field // (10)         attribute = "fromFields" // (11)         description = "\(Field)s from which this \(Field) is related." // (12)       }       new {         type = Field         attribute = "toFields"         description = "\(Field)s to which this \(Field) is related."       }     }   } }  ``` |

1. You can also specify any number of custom relationships. These should be listed under `customRelationshipTypes` and each take the form of `["name"] = new Relationship { }`. There are two kinds of Relationship that can be created:

    * `ContainmentRelationship` defines a parent\-child (hierarchical) relationship. Each parent can have many children, but each child can refer to only a single parent.
        * `PeerToPeerRelationship` defines an association relationship, which is many\-to\-many by default.
        Make the name as informational as you want

    The name is not actually used other than to keep the relationships unique, so feel free to use as informational a name as you want.
2. This example starts by creating a new parent\-child `ContainmentRelationship` between a dataset (the parent) and its tables (the children).
3. A `ContainmentRelationship` must have one and only one `parent`, which describes the parent end of the relationship.
4. Each end of the relationship must have a `type`, defining the asset type for that end of the relationship.
5. Each end of the relationship must also define an `attribute`, which is how this end of the relationship will be referred to by the other end of the relationship. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
6. Each end of the relationship must also provide a `description` for the `attribute`.
7. A `ContainerRelationship` must also have one and only one `children` definition, which describes the end of the relationship containing the children.
8. This example shows how you can define a new many\-to\-many relationship between assets.
9. A `PeerToPeerRelationship` must have a listing of exactly two `peers`, each of which describes one end of the relationship.
10. Each end of the relationship must have a `type`, defining the asset type for that end of the relationship.
11. Each end of the relationship must also define an `attribute`, which is how this end of the relationship will be referred to by the other end of the relationship. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
12. Each end of the relationship must also provide a `description` for the `attribute`.

| MyCustomModel.pkl | |
| --- | --- |
| ``` 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 ``` | ``` customRelationshipTypes { // (1)   ["datasetAndItsTables"] = new ContainmentRelationship { // (2)     parent { // (3)       type = Dataset // (4)       attribute = "dataset" // (5)       description = "Dataset containing the Table." // (6)     }     children { // (7)       type = Table       attribute = "tables"       description = "Tables contained within the Dataset."     }   }   ["tableAndItsFields"] = new ContainmentRelationship {     parent {       type = Table       attribute = "table"       description = "Table containing the Field."     }     children {       type = Field       attribute = "fields"       description = "Fields contained within the Table."     }   }   ["interrelatedFields"] = new PeerToPeerRelationship { // (8)     description = "Many-to-many peer-to-peer relationship between \(Field)s."     peers { // (9)       new {         type = Field // (10)         attribute = "fromFields" // (11)         description = "\(Field)s from which this \(Field) is related." // (12)       }       new {         type = Field         attribute = "toFields"         description = "\(Field)s to which this \(Field) is related."       }     }   } }  ``` |

1. You can also specify any number of custom relationships. These should be listed under `customRelationshipTypes` and each take the form of `["name"] = new Relationship { }`. There are two kinds of Relationship that can be created:

    * `ContainmentRelationship` defines a parent\-child (hierarchical) relationship. Each parent can have many children, but each child can refer to only a single parent.
        * `PeerToPeerRelationship` defines an association relationship, which is many\-to\-many by default.
        Make the name as informational as you want

    The name is not actually used other than to keep the relationships unique, so feel free to use as informational a name as you want.
2. This example starts by creating a new parent\-child `ContainmentRelationship` between a dataset (the parent) and its tables (the children).
3. A `ContainmentRelationship` must have one and only one `parent`, which describes the parent end of the relationship.
4. Each end of the relationship must have a `type`, defining the asset type for that end of the relationship.
5. Each end of the relationship must also define an `attribute`, which is how this end of the relationship will be referred to by the other end of the relationship. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
6. Each end of the relationship must also provide a `description` for the `attribute`.
7. A `ContainerRelationship` must also have one and only one `children` definition, which describes the end of the relationship containing the children.
8. This example shows how you can define a new many\-to\-many relationship between assets.
9. A `PeerToPeerRelationship` must have a listing of exactly two `peers`, each of which describes one end of the relationship.
10. Each end of the relationship must have a `type`, defining the asset type for that end of the relationship.
11. Each end of the relationship must also define an `attribute`, which is how this end of the relationship will be referred to by the other end of the relationship. The name of the attribute will automatically be prefixed with the attribute prefix (`attrPrefix`) for you, so you can focus on just a simple name for the attribute.
12. Each end of the relationship must also provide a `description` for the `attribute`.

Advanced attribute options[¶](#advanced-attribute-options "Permanent link")
---------------------------------------------------------------------------

There are further advanced options you can use when defining each attribute. These will all be set to sensible defaults based on the options outlined in the example above, but you can also directly set or override them if needed.

| Property | Usage | Default |
| --- | --- | --- |
| `defaultValue` | Default value for the attribute. |  |
| `isDefaultValueNull` | Indicates whether the attribute has a default value of being empty (true) or not (false). |  |
| `isOptional` | Indicates whether the attribute is mandatory (false) or optional (true). | `true` |
| `valuesMinCount` | Minimum number of values the attribute should have. |  |
| `valuesMaxCount` | Maximum number of values the attribute should have. |  |
| `isUnique` | Whether the attribute is unique (true) or not (false). | `false` |
| `isIndexable` | Whether the attribute is indexed in\-memory via Cassandra (true) or not (false). | `false` |
| `includeInNotification` | Whether the attribute should generate a notification when its value changes (true) or not (false). | `true` |
| `skipScrubbing` | TBC | `true` |
| `searchWeight` | TBC |  |
| `indexAs` | What kind of index(es) to create in Elastic for this attribute: `keyword`, `text`, `both`. | `default` |

---

2025\-03\-112025\-06\-24

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/typedef/define/) to provide us with more information. 

Back to top

[Previous Running example](../example/) [Next Render your model](../render/) 

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

