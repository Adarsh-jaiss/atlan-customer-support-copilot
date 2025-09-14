# Source URL
https://developer.atlan.com/toolkits/typedef/render/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/typedef/render/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to render a model defined via the toolkit's template into JSON files needed by Atlas.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to render a model defined via the toolkit's template into JSON files needed by Atlas.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/typedef/render.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Render your model - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/typedef/render/
meta-twitter:card: summary_large_image
meta-twitter:description: How to render a model defined via the toolkit's template into JSON files needed by Atlas.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/typedef/render.png
meta-twitter:title: Render your model - Developer
meta-viewport: width=device-width,initial-scale=1
title: Render your model - Developer
-->

[Skip to content](#render-your-model) Developer Render your model Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Render your model[¶](#render-your-model "Permanent link")
=========================================================

**Full example (expand for details)**

In addition to defining the various entities and relationships outlined at the beginning of this page, we have created this inheritance structure:

```
classDiagram
    direction LR
    Catalog <|-- Custom
    Catalog <|-- SQL
    SQL <|-- Table
    SQL <|-- Column
    Custom <|-- CustomDataset
    Custom <|-- CustomTable
    Table <|-- CustomTable
    Custom <|-- CustomField
    Column <|-- CustomField
    class Catalog{
        string name
        string qualifiedName
        string description
    }
    class SQL{
        string tableName
        string tableQualifiedName
    }
    class Custom{
        string customSourceId
        string customDatasetName
        string customDatasetQualifiedName
    }
    <<abstract>> Catalog
    <<abstract>> SQL
    <<abstract>> Custom
    class CustomTable{
        struct[] customRatings
    }
    class CustomField{
        enum customTemperature
    }
```
Following is the complete model file for the running example, without any comments, in case you want to try it yourself as a sort of "hello world" example:

| MyCustomModel.pkl | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 ``` | ``` amends "../toolkit/src/main/pkl/Typedefs.pkl" import "../toolkits/src/main/pkl/Frontend.pkl"  namespace = "Custom" attrPrefix = namespace.decapitalize()  local TemperatureType = getTypeName("TemperatureType") local Ratings = getTypeName("Ratings")  customEnumTypes {   [TemperatureType] {     description = "Valid values for \(Table) temperatures."     validValues {       ["COLD"] { description = "Lowest availability, can be offline storage." }       ["HOT"] { description = "Highest availability, must be on solid-state or in-memory storage." }     }   } }  customStructTypes {   [Ratings] {     description = "Ratings for an asset from the source system."     attributes {       ["ratingFrom"] {         label = "From"         description = "Username of the user who left the rating."         type = "string"       }       ["ratingOf"] {         label = "Score"         description = "Numeric score for the rating left by the user."         type = "long"       }     }   } }  supertypeDefinition {   name = namespace   superTypes = new Listing { "Catalog" }   attributes {     ["sourceId"] {       label = "Source ID"       description = "Unique identifier for the \(namespace) asset from the source system."       type = "string"     }     ["datasetName"] {       label = "Dataset"       description = "Simple name of the dataset in which this asset exists, or empty if it is itself a dataset."       type = "string"       indexAs = "both"     }     ["datasetQualifiedName"] {       description = "Unique name of the dataset in which this asset exists, or empty if it is itself a dataset."       type = "string"       indexAs = "keyword"     }   } }  local Dataset = getTypeName("Dataset") local Table = getTypeName("Table") local Field = getTypeName("Field")  local datasetQN = getAttributeName("datasetQualifiedName") local datasetN = getAttributeName("datasetName") local tableQN = getAttributeName("tableQualifiedName") local tableN = getAttributeName("tableName")  local datasetIcon = new Frontend.Icon {   name = "DatabaseGray"   nameActive = "Database"   svg = "database-gray.svg"   svgActive = "database.svg" }  local tableIcon = new Frontend.Icon {   name = "TableGray"   nameActive = "Table"   svg = "table-gray.svg"   svgActive = "table.svg" }  local fieldIcon = new Frontend.Icon {   name = "ColumnGray"   nameActive = "Column"   svg = "column-gray.svg"   svgActive = "column.svg" }  customAssetTypes {   [Dataset] {     label = "Dataset"     icon = datasetIcon     description = "Instances of \(Dataset) in Atlan."   }   [Table] {     label = "Table"     icon = tableIcon     description = "Instances of \(Table) in Atlan."     parentQualifiedName = datasetQN     attributes {       ["ratings"] {         label = "Rating"         description = "Ratings for the \(Table) asset from the source system."         type = "struct"         structName = Ratings         multiValued = true       }     }     superTypes { "Table" }   }   [Field] {     label = "Field"     icon = fieldIcon     description = "Instances of \(Field) in Atlan."     parentQualifiedName = tableQN     attributes {       ["temperature"] {         label = "Temperature"         description = "Temperature of the \(Field) asset."         type = "enum"         enumName = TemperatureType       }     }     superTypes { "Column" }   } }  ui {   svgName = "\(namespace).svg"   filters {     [Dataset] {       attribute = datasetQN     }   }   breadcrumb {     [Dataset] {       q = datasetQN       n = datasetN     }     [Table] {       q = tableQN       n = tableN     }   } }  customRelationshipTypes {   ["datasetAndItsTables"] = new ContainmentRelationship {     parent {       type = Dataset       attribute = "dataset"       description = "Dataset containing the Table."     }     children {       type = Table       attribute = "tables"       description = "Tables contained within the Dataset."     }   }   ["tableAndItsFields"] = new ContainmentRelationship {     parent {       type = Table       attribute = "table"       description = "Table containing the Field."     }     children {       type = Field       attribute = "fields"       description = "Fields contained within the Table."     }   }   ["interrelatedFields"] = new PeerToPeerRelationship {     description = "Many-to-many peer-to-peer relationship between \(Field)s."     peers {       new {         type = Field         attribute = "fromFields"         description = "\(Field)s from which this \(Field) is related."       }       new {         type = Field         attribute = "toFields"         description = "\(Field)s to which this \(Field) is related."       }     }   } }  ``` |

Render through `pkl`[¶](#render-through-pkl "Permanent link")
-------------------------------------------------------------

Once your model is defined, you can then "render" it into the files Atlan needs using the `pkl` CLI:

```
pkl eval MyCustomModel.pkl -m tmp

```
This will generate multiple JSON files representing the custom model, in the folder structure required by Atlan, ready to be submitted in a PR.

Output produced[¶](#output-produced "Permanent link")
-----------------------------------------------------

Rendering the model will create two subdirectories under the output directory you specify (the location you specify for `-m`):

```
├── models/                                     # (1)
│   ├── {{Namespace}}.json                      # (2)
│   └── {{Namespace}}/
│       ├── {{AssetType}}.json                  # (3)
│       ├── ...
│       └── {{Namespace}}_relationships.json    # (4)
│
└── frontend/                                   # (5)
    └── {{Namespace}}/
        └── src/
            ├── api/
            │   └── schemas/                    # (6)
            │       ├── {{Namespace}}.json
            │       └── {{Namespace}}/
            │           ├── {{AssetType}}.json
            │           ├── ...
            │           └── {{Namespace}}_relationships.json
            │
            ├── assets/
            │   └── images/
            │       └── icons/                  # (7)
            │
            ├── components/
            │   └── common/
            │       ├── icon/                   # (8)
            │       └── widgets/                # (9)
            │
            ├── composables/
            │   └── discovery/                  # (10)
            │
            ├── constant/                       # (11)
            │
            └── locales/                        # (12)

```
1. The `models` subdirectory will contain JSON files needed by Atlas for the underlying metamodel.
2. A single file containing details of the abstract supertype, all enumerations and all structs.
3. Multiple JSON files, one per custom asset type.
4. A single JSON file containing all relationships.
5. The `frontend` subdirectory will contain various JSON, TypeScript, Vue, and placeholder image files.
6. The same JSON files as output to the `models` subdirectory.
7. Empty placeholder files indicating the image files for icons you must copy over separately.
8. Code snippets you need to insert into an existing TypeScript file.
9. Code snippets you need to insert into an existing Vue file.
10. Code snippets you need to insert into an existing TypeScript file for parent\-child navigation through de\-normalized qualifiedName attributes to work.
11. Mixture of code snippets and full TypeScript code files you need to copy over.
12. Internationalization snippets you need to insert into an existing JSON file.

**Running example (expand for details)**

For our running example, this would produce:

```
├── models/
│   ├── Custom.json                             # (1)!
│   └── Custom/
│       ├── CustomDataset.json
│       ├── CustomTable.json
│       ├── CustomField.json
│       └── Custom_relationships.json
│
└── frontend/
    └── Custom/
        └── src/
            ├── api/
            │   └── schemas/
            │       ├── Custom.json
            │       └── Custom/
            │           ├── CustomDataset.json
            │           ├── CustomTable.json
            │           ├── CustomField.json
            │           └── Custom_relationships.json
            │
            ├── assets/
            │   └── images/
            │       └── icons/
            │           ├── database-gray.svg-PLACEHOLDER
            │           ├── database.svg-PLACEHOLDER
            │           ├── table-gray.svg-PLACEHOLDER
            │           ├── table.svg-PLACEHOLDER
            │           ├── column-gray.svg-PLACEHOLDER
            │           └── column.svg-PLACEHOLDER
            │
            ├── components/
            │   └── common/
            │       ├── icon/
            │       │   └── column.svg-PLACEHOLDER
            │       └── widgets/
            │           └── summary/
            │               └── types/
            │                   └── parentAssetInline.vue-snippet
            │
            ├── composables/
            │   └── discovery/
            │       └── useBody.ts-snippet
            │
            ├── constant/
            │   ├── projection.ts-snippet
            │   └── source/
            │       ├── index.ts-snippet
            │       └── custom/
            │           ├── index.ts
            │           ├── methods.ts
            │           ├── common/
            │           │   ├── index.ts
            │           │   ├── assetTypes.ts
            │           │   ├── getAssetTypes.ts
            │           │   └── hierarchyFilters.ts
            │           └── attributes/
            │               ├── customDataset.ts
            │               ├── customTable.ts
            │               └── customField.ts
            │
            └── locales/
                └── en.json-snippet

```
1. This file will contain all the attributes defined in the supertype, as well as the enumeration and struct.

---

2025\-03\-112025\-06\-24

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/typedef/render/) to provide us with more information. 

Back to top

[Previous Define via template](../define/) [Next Test your model](../test-model/) 

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

