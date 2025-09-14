# Source URL
https://developer.atlan.com/toolkits/custom-package/define/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/custom-package/define/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to use the Pkl-based template of the package toolkit to extend Atlan's marketplace.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to use the Pkl-based template of the package toolkit to extend Atlan's marketplace.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/define.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Define package via template - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/custom-package/define/
meta-twitter:card: summary_large_image
meta-twitter:description: How to use the Pkl-based template of the package toolkit to extend Atlan's marketplace.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/define.png
meta-twitter:title: Define package via template - Developer
meta-viewport: width=device-width,initial-scale=1
title: Define package via template - Developer
-->

[Skip to content](#define-package-via-template) Developer Define package via template Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Define package via template[¶](#define-package-via-template "Permanent link")
=============================================================================

How to read this guide

Each section of this guide provides 2 tabs, which are linked throughout (once you swap in one section, all other sections will automatically reflect that same level of detail):

* **Simple** — when you are just starting out, follow these tabs to understand the basic structure of the toolkit and the fundamental elements that you *must* use.
* **Detailed** — as you start to wonder about additional complexity, consider changing to these tabs, which cover additional (optional) possibilities.

Start by creating a Pkl file that amends our published package config toolkit model:

| MyCustomPackage.pkl | |
| --- | --- |
| ``` 1 ``` | ``` amends "package://developer.atlan.com/toolkits/custom-package/config@5.0.3#/Framework.pkl"  ``` |

If this is the first time you're creating a package, hover over that line and download the Pkl package.

Define overall metadata[¶](#define-overall-metadata "Permanent link")
---------------------------------------------------------------------

Then you can start defining your package. All packages should have at least these main components:

| MyCustomPackage.pkl | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 ``` | ``` amends "package://developer.atlan.com/toolkits/custom-package/config@5.0.3#/Framework.pkl"  import "pkl:semver" // (1) import "package://developer.atlan.com/toolkits/custom-package/config@5.0.3#/Connectors.pkl" // (2)  packageId = "@csa/openapi-spec-loader" // (3) packageName = "OpenAPI Spec Loader" // (4) version = semver.Version("1.0.0") // (5) description = "Loads API specs and paths from an OpenAPI (v3) definition." // (6) iconUrl = "http://assets.atlan.com/assets/apispec.png" // (7) docsUrl = "https://developer.atlan.com/samples/loaders/openapi/" // (8) implementationLanguage = "Kotlin" // (9) containerImage = "ghcr.io/atlanhq/\(name):\(version)" // (10) containerCommand { // (11)   "/dumb-init"   "--"   "java"   "OpenAPISpecLoaderKt" } outputs { // (12)   files {     ["debug-logs"] = "/tmp/debug.log"   } } keywords { // (13)   "kotlin"   "crawler"   "openapi" } category = "custom" // (14) preview = true // (15) certified = false // (16) connectorType = Connectors.API // (17)  uiConfig { // (18)   ... }  credentialConfig { // (19)   ... }  ``` |

1. Import the standard Pkl library for semantic versioning, to define your package's version.
2. (Optional) If your package could create a connection, import the pre\-defined set of connections from the package toolkit.
3. A `packageId`, which gives a unique namespaced identity for your package. It must be of the form `@namespace/kebab-case-name`.
4. A `packageName`, which gives the human\-readable name of your package, as it should show in the UI.
5. A `version` for your package, which must follow semantic versioning.
6. A `description` for your package, as it should show in the UI.
7. An `iconUrl` giving an online location where the icon to use in the UI for this package can be accessed.
8. A `docsUrl` giving an online location where additional documentation about the package can be found. This will be linked in the UI.
9. The `implementationLanguage` defining the coding language you will use to implement the logic of your package. This is used by the toolkit to generate a strongly\-typed data class that captures the inputs a user provides during setup of the package.
10. The `containerImage` that will encapsulate your package's code.

    Use variables where possible

    Note that Pkl is itself a language, so you can use variables here as well (for example, if your container images follow a naming convention that can be generated from the `packageId` or to automatically set the version).
11. The full `containerCommand` used to run your custom logic within the container. This should be specified as a list, rather than a single spaced\-out string.
12. (Optional) Any `outputs` your package's logic will produce, that you want a user to be able to download. In this example, our package will write debug logs out to `/tmp/debug.log` and we will make these available for download.
13. (Optional) Any `keywords` you want your package to have associated with it.
14. (Optional) The `category` controls the name of the pill in the marketplace in the UI where the package will be listed. It will default to `custom` if not specified.
15. (Optional) Setting `preview` to true will show a small orange badge on the package indicating it is experimental (by default it will not be experimental).
16. (Optional) Setting `certified` to false will remove the green tick badge from the package indicating it is certified (by default it will be certified).
17. (Optional) When your package could create a connection, use the `connectorType` to define what kind of connection it should create.
18. A `uiConfig` section where you will define the inputs you want your package to receive from the user during setup.
19. (Optional) A `credentialConfig` section where you can define any sensitive inputs you want the user to provide, typically to connect to an external system. Any details provided by a user within these inputs will be encrypted and stored in a secure vault in Atlan.

Define configurable inputs[¶](#define-configurable-inputs "Permanent link")
---------------------------------------------------------------------------

Use the `uiConfig` section to define the configurable inputs you want the user to provide when setting up your package.

These inputs fit into a two\-level hierarchy:

* **Tasks** are the top\-level steps you see along the left side when setting up a new package.
* **Inputs** are the individual widgets a user can enter information into, select from, etc within each task (step).

In addition to these inputs, you can (optionally) define one or more **rules** to control which inputs appear on the screen, based on what a user has selected in some other input.

Simple

Detailed

| MyCustomPackage.pkl | |
| --- | --- |
| ``` 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 ``` | ``` uiConfig {   tasks { // (1)     ["Configuration"] { // (2)       description = "OpenAPI spec configuration" // (3)       inputs { // (4)         ...       }     }     ["Connection"] { // (5)       description = "Connection details"       inputs {         ...       }     }   }   rules { // (6)     ...   } }  ``` |

1. You must define one (and only one) list of `tasks`.
2. Use the name as you want it to show in the UI for each top\-level step, surrounded in square brackets. You can then enclose the definition of that top\-level step in curly braces.
3. Include a **description**, which will show in the UI as part of the top\-level step (very space\-limited).
4. Also include the list of `inputs` that should be configured as part of that top\-level step.
5. You can define as many of these top\-level steps as you like. They will be displayed in the order (top\-down) they are listed here in the model.
6. (Optional) You can then specify any rules to control which inputs appear on the screen (or not), based on what a user has selected in some other input.

| MyCustomPackage.pkl | |
| --- | --- |
| ``` 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 ``` | ``` uiConfig {   tasks { // (1)     ["Configuration"] { // (2)       description = "OpenAPI spec configuration" // (3)       inputs { // (4)         ["spec_url"] = new TextInput { // (5)           title = "Specification URL" // (6)           required = true // (7)           helpText = "Full URL to the JSON form of the OpenAPI specification." // (8)           placeholderText = "https://petstore3.swagger.io/api/v3/openapi.json" // (9)         }       }     }     ["Connection"] { // (10)       description = "Connection details"       inputs {         ["connection_usage"] = new Radio {           title = "Connection"           required = true           possibleValues {             ["CREATE"] = "Create"             ["REUSE"] = "Reuse"           }           default = "REUSE"           fallback = default // (11)           helpText = "Whether to create a new connection to hold these API assets, or reuse an existing connection."         }         ["connection"] = new ConnectionCreator {           title = "Connection"           required = true           helpText = "Enter details for a new connection to be created."         }         ["connection_qualified_name"] = new ConnectionSelector {           title = "Connection"           required = true           helpText = "Select an existing connection to load assets into."         }       }     }   }   rules { // (12)     new UIRule { // (13)       whenInputs { ["connection_usage"] = "REUSE" } // (14)       required { "connection_qualified_name" } // (15)     }     new UIRule { // (16)       whenInputs {         ["connection_usage"] = "CREATE"       }       required {         "connection"       }     }   } }  ``` |

1. You must define one (and only one) list of `tasks`.
2. Use the name as you want it to show in the UI for each top\-level step, surrounded in square brackets. You can then enclose the definition of that top\-level step in curly braces.
3. Include a **description**, which will show in the UI as part of the top\-level step (very space\-limited).
4. Also include the list of `inputs` that should be configured as part of that top\-level step.
5. For each input, specify a unique variable name (in `lower_snake_case`) surrounded by square brackets. You can choose from a [variety of widgets](../widgets/) to use for receiving that input from a user.
6. All inputs will at least need a `title`, which defines the text to show in the UI for that widget.
7. All inputs can also be configured as mandatory using `required = true` (by default they'll be optional).
8. All inputs can also be given a `helpText`, which when provided shows an information icon next to the `title` that can be hovered over for more information on how the input should be used.
9. Other configurable options will vary by the kind of input, but could include for example some light grey text to show in the box by default to give the user some idea of the value you're expecting from them.
10. You can define as many of these top\-level steps as you like, and within each as many inputs as you like. They will be displayed in the order (top\-down) they are listed here in the model.
11. (Optional) You can specify a `fallback` value to use for any input, in case the user does not make any selection or enter any value in the UI.
12. (Optional) You can then specify any rules to control which inputs appear on the screen (or not), based on what a user has selected in some other input.
13. Each new rule needs to be defined as `new UIRule`, with its definition enclosed in curly braces.
14. You must specify a `whenInputs` that defines an input variable name and value.
15. When the input variable has the value indicated above, all input variables defined in this `required` will be shown in the UI (otherwise they will be hidden).
16. When you have multiple conditions or inputs to show or hide, you can use this more spaced out form. This example means that when a user has selected `CREATE` for the `connection_usage` input, the UI will show the `connection` input.

Define sensitive inputs[¶](#define-sensitive-inputs "Permanent link")
---------------------------------------------------------------------

Use the `credentialConfig` section to define sensitive inputs you want the user to provide when setting up your package.

Encrypted and secured in a vault

Any details a user provides within this section will be encrypted and secured in a vault within Atlan, for added protection.

These inputs fit into two types:

* **Common inputs** are inputs that are common irrespective of the type of credential the user is configuring.
* **Options** define the different types of credentials a user can configure (for example, basic username and password vs shared secrets).

Simple

Detailed

| MyCustomPackage.pkl | |
| --- | --- |
| ``` 39 40 41 42 43 44 45 46 47 48 49 50 51 ``` | ``` credentialConfig {   name = "csa-connector-custom" // (1)   source = Connectors.API // (2)   icon = "https://assets.atlan.com/assets/apispec.svg" // (3)   helpdesk = "https://ask.atlan.com/hc/en-us/articles/1234567890" // (4)   logo = "https://assets.atlan.com/assets/apispec.svg" // (5)   commonInputs { // (6)     ...   }   options { // (7)     ...   } }  ``` |

1. You must give the credentials configuration a unique name. (This allows you to reuse credential configurations without needing to redefine them in different packages.)
2. Set the `source` to the type of connector through which these credentials can be used.
3. Define the icon to use when representing this particular source and credential in the UI.
4. Provide a link to any documentation about how to set up these credentials, for example any pre\-requites on the permissions that are required on the external system.
5. Define the logo to use when representing this particular source and credential in the UI.
6. (Optional) You can define any common inputs that are shared across different connectivity options.
7. You must define at least one option for connecting to the external system, and could define many. For example, you may want to support both a username and password as one option, and another option that uses some shared secrets or API tokens.

| MyCustomPackage.pkl | |
| --- | --- |
| ```  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 ``` | ``` credentialConfig {   name = "csa-connector-custom" // (1)   source = Connectors.API // (2)   icon = "https://assets.atlan.com/assets/apispec.svg" // (3)   helpdesk = "https://ask.atlan.com/hc/en-us/articles/1234567890" // (4)   logo = "https://assets.atlan.com/assets/apispec.svg" // (5)   commonInputs { // (6)     ["host"] = new TextInput { // (7)       title = "Hostname" // (8)       placeholderText = "petstore3.swagger.io" // (9)       prepend = "https://"       width = 6     }     ["port"] = new NumericInput {       title = "Port"       default = 443       width = 2     }   }   options { // (10)     ["basic"] { // (11)       title = "Basic" // (12)       inputs { // (13)         ["username"] = new TextInput { // (14)           title = "Username"           required = true           defaultValue = "jane.smith"           width = 4         }         ["password"] = new PasswordInput {           title = "Password"           required = true           width = 4         }         ["extra"] = new NestedInput { // (15)           title = "Role" // (16)           inputs { // (17)             ["role"] = new DropDown {               title = "Role"               possibleValues {                 ["USER"] = "user"                 ["ADMIN"] = "admin"               }               width = 4             }           }         }       }     }     ["keypair"] {       title = "Keypair"       inputs {         ["username"] = new TextInput {           title = "Username"           placeholderText = "jsmith"           width = 4         }         ["password"] = new TextBoxInput {           title = "Encrypted Private Key"           placeholderText = "-----BEGIN ENCRYPTED PRIVATE KEY-----MIIE6TAbBgkqhkiG9w0BBQMwDgQILYPyCppzOwECAggABIIEyLiGSpeeGSe3xHP1wHLjfCYycUPennlX2bd8    yX8xOxGSGfvB+99+PmSlex0FmY9ov1J8H1H9Y3lMWXbL...-----END ENCRYPTED PRIVATE KEY-----"           width = 4         }         ["extra"] = new NestedInput {           title = "Private Key Password"           inputs {             ["private_key_password"] = new PasswordInput {               title = "Private Key Password"               width = 5             }           }         }       }     }   } }  ``` |

1. You must give the credentials configuration a unique name. (This allows you to reuse credential configurations without needing to redefine them in different packages.)
2. Set the `source` to the type of connector through which these credentials can be used.
3. Define the icon to use when representing this particular source and credential in the UI.
4. Provide a link to any documentation about how to set up these credentials, for example any pre\-requites on the permissions that are required on the external system.
5. Define the logo to use when representing this particular source and credential in the UI.
6. (Optional) You can define any common inputs that are shared across different connectivity options.
7. For each input, specify a unique variable name (in `lower_snake_case`) surrounded by square brackets. You can choose from a [variety of widgets](../widgets/) to use for receiving that input from a user.
8. All inputs will need at least a `title`, which defines the text to show in the UI for that widget.
9. Other configurable options will vary by the kind of input, but could include for example some light grey text to show in the box by default to give the user some idea of the value you're expecting from them.
10. You must define at least one option for connecting to the external system, and could define many. For example, you may want to support both a username and password as one option, and another option that uses some shared secrets or API tokens.

Delegate publishing[¶](#delegate-publishing "Permanent link")
-------------------------------------------------------------

You can now use the toolkit to delegate publishing of assets through packages that use CSV inputs. Your own logic simply needs to produce a CSV output file that matches the required format of one of these publishing package's CSV inputs.

Handles many common scenarios automatically

These publishing packages are designed to handle common scenarios for you directly, such as:

* Calculating differences (deltas) between a previous load and the current load, to automatically:
    + Identify which assets should be deleted (or archived), and do so
    + Optimize the publishing to only save any assets that have changed
* Support only updating assets (avoiding any accidental asset creation), if desired
* Allow case\-insensitive matching of `qualifiedName`s of assets
* Resolve any ambiguity between tables or views for you, automatically

To add a delegated publish step to your package, you need only add a `publishConfig` to your template:

Detailed

| MyCustomPackage.pkl | |
| --- | --- |
| ``` 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 ``` | ``` publishConfig = new AssetImport {  // (1)   versionTag = "5.0.1"  // (2)   assetsFile = transferFile(  // (3)     outputs,     "transformed_file",     "current.csv"   )   assetsUpsertSemantic = transferConfigInput(  // (4)     uiConfig,     "assets_upsert_semantic"   )   assetsPreviousFilePrefix = "csa-relational-assets-builder" // (5)   assetsDeltaSemantic = transferConfigInput(uiConfig, "delta_semantic")   assetsDeltaRemovalType = transferConfigInput(uiConfig, "delta_removal_type")   assetsDeltaReloadCalculation = transferConfigInput(uiConfig, "delta_reload_calculation")   assetsFailOnErrors = transferConfigInput(uiConfig, "assets_fail_on_errors")   assetsFieldSeparator = transferConfigInput(uiConfig, "assets_field_separator")   assetsBatchSize = transferConfigInput(uiConfig, "assets_batch_size")   assetsCmHandling = transferConfigInput(uiConfig, "assets_cm_handling")   assetsTagHandling = transferConfigInput(uiConfig, "assets_tag_handling")   assetsLinkIdempotency = transferConfigInput(uiConfig, "assets_link_idempotency")   trackBatches = transferConfigInput(uiConfig, "track_batches") }  ``` |

1. When configuring which publish package to delegate, you can choose from either `AssetImport`, `RelationalAssetsBuilder` or `LineageBuilder`. Each can be configured with different options, which are described further in the sections below.
2. You need to provide the specific version of the package you want to use for publishing. This version will match the version published at [atlanhq/atlan\-java](https://github.com/atlanhq/atlan-java).
3. For any file\-based inputs, use the toolkit's `transferFile()` helper to indicate how to transfer the file from the outputs your own package produces:

    * `outputs` is the name of the variable in your package defining its outputs (will always be this)
        * `"transformed_file"` is the key of the entry in that `outputs` variable that points to the file your package produces that you want to delegate for publishing
        * `"current.csv"` is the name of the file you want to use when you pass it along to the publishing package
4. For any configuration\-based inputs, use the toolkit's `transferConfigInput()` helper to indicate which UI\-based input variable's value to transfer to the publishing package.

    * `uiConfig` is the name of the variable in your package defining its UI\-based inputs (will always be this)
        * `"assets_upsert_semantic"` is the name of the UI input (widget variable) from which to take the value to be transferred
5. You can also use a literal primitive value for any of the options, if you just want to hard\-code it rather than transfer anything across from the UI\-based configuration or your own package's outputs.

### AssetImport[¶](#assetimport "Permanent link")

The `AssetImport` publish config accepts the following configurable inputs. You can use any combination of these, and any you leave out will use sensible defaults.

**Glossaries, categories, terms**

| Variable Name | Data Type | Description |
| --- | --- | --- |
| glossariesFile | FrameworkRenderer.NamePathPair | File containing glossaries, categories and terms to import; typically passed through using `transferFile()`. |
| glossariesUpsertSemantic | ImportSemantic | Whether to allow the creation of new glossaries, categories and terms from the input CSV, or ensure these are only updated if they already exist in Atlan. |
| glossariesConfig | ConfigType | Options to optimize how glossaries, categories and terms are imported. |
| glossariesAttrToOverwrite | Listing\<String\> | List of attributes you want to clear (remove) from glossaries, categories and terms if their value is blank in the provided file. |
| glossariesFailOnErrors | Boolean | Whether an invalid value in a field should cause the import to fail (true) or log a warning, skip that value, and proceed (false). |
| glossariesFieldSeparator | String | Single character used to separate fields in the input file (for example, `,` or `;`). |
| glossariesCmHandling | CustomMetadataSemantic | How custom metadata in the input should be handled: ignore it, merge it with any existing asset custom metadata, or overwrite the existing asset custom metadata. |
| glossariesTagHandling | AtlanTagSemantic | How Atlan tags on assets in the input should be handled: ignore them, append them to any existing asset tags, replace the existing asset tags, or remove them from the assets. |
| glossariesLinkIdempotency | LinkIdempotencyInvariant | How linked resources on glossaries in the input should be updated: based on their unique URL or their unique name. |
| glossariesBatchSize | Int | Maximum number of rows to process at a time (per API request). |

**Data domains and products**

| Variable Name | Data Type | Description |
| --- | --- | --- |
| dataProductsFile | FrameworkRenderer.NamePathPair | File containing data domains and data products to import; typically passed through using \[transferFile()]. |
| dataProductsUpsertSemantic | ImportSemantic | Whether to allow the creation of new domains and data products from the input CSV, or ensure these are only updated if they already exist in Atlan. |
| dataProductsConfig | ConfigType | Options to optimize how domains and data products are imported. |
| dataProductsAttrToOverwrite | Listing\<String\> | Select attributes you want to clear (remove) from domains and data products if their value is blank in the provided file. |
| dataProductsFailOnErrors | Boolean | Whether an invalid value in a field should cause the import to fail (true) or log a warning, skip that value, and proceed (false). |
| dataProductsFieldSeparator | String | Single character used to separate fields in the input file (for example, `,` or `;`). |
| dataProductsCmHandling | CustomMetadataSemantic | How custom metadata in the input should be handled: ignore it, merge it with any existing asset custom metadata, or overwrite the existing asset custom metadata. |
| dataProductsTagHandling | AtlanTagSemantic | How Atlan tags on assets in the input should be handled: ignore them, append them to any existing asset tags, replace the existing asset tags, or remove them from the assets. |
| dataProductsLinkIdempotency | LinkIdempotencyInvariant | How linked resources on assets in the input should be updated: based on their unique URL or their unique name. |
| dataProductsBatchSize | Int | Maximum number of rows to process at a time (per API request). |

**Tag (structural) definitions**

| Variable Name | Data Type | Description |
| --- | --- | --- |
| tagsFile | FrameworkRenderer.NamePathPair | File containing tag definitions to manage; typically passed through using `transferFile()`. |
| tagsConfig | ConfigType | Options to optimize how tag definitions are imported. |
| tagsFailOnErrors | Boolean | Whether an invalid value in a field should cause the import to fail (true) or log a warning, skip that value, and proceed (false). |
| tagsFieldSeparator | String | Single character used to separate fields in the input file (for example, `,` or `;`). |
| tagsBatchSize | Int | Maximum number of rows to process at a time (per API request). |

**All other assets**

| Variable Name | Data Type | Description |
| --- | --- | --- |
| assetsFile | FrameworkRenderer.NamePathPair | File containing assets to import, typically passed through using `transferFile()`. |
| assetsUpsertSemantic | ImportSemantic | Whether to allow the creation of new assets from the input CSV (full or partial assets), or ensure assets are only updated if they already exist in Atlan. |
| assetsDeltaSemantic | DeltaSemantic | Whether to treat the input file as an initial load, full replacement (deleting any existing assets not in the file) or only incremental (no deletion of existing assets). |
| assetsDeltaRemovalType | RemovalType | How to delete any assets not found in the latest file. |
| assetsDeltaReloadCalculation | ReloadCalculation | Which assets to reload from the latest input CSV file. Changed assets only will calculate which assets have changed between the files and only attempt to reload those changes. |
| assetsPreviousFileDirect | FrameworkRenderer.NamePathPair | Path to a direct file (locally) to use for delta processing. Note: providing a value for this will ignore any other previously\-processed file in the object store, so please be sure this is the option you want to use (should be rare). |
| assetsPreviousFilePrefix | String | Object store prefix in which previous files exist for delta processing. |
| assetsConfig | ConfigType | Options to optimize how assets are imported. |
| assetsAttrToOverwrite | Listing\<String\> | List of attributes you want to clear (remove) from assets if their value is blank in the provided file. |
| assetsFailOnErrors | Boolean | Whether an invalid value in a field should cause the import to fail (true) or log a warning, skip that value, and proceed (false). |
| assetsCaseSensitive | Boolean | Whether to use case\-sensitive matching when running in update\-only mode (true) or try case\-insensitive matching (false). |
| assetsTableViewAgnostic | Boolean | Whether to treat tables, views and materialized views as interchangeable (true) or strictly adhere to specified types in the input (false). |
| assetsFieldSeparator | String | Single character used to separate fields in the input file (for example, `,` or `;`). |
| assetsCmHandling | CustomMetadataSemantic | How custom metadata in the input should be handled: ignore it, merge it with any existing asset custom metadata, or overwrite the existing asset custom metadata. |
| assetsTagHandling | AtlanTagSemantic | How Atlan tags on assets in the input should be handled: ignore them, append them to any existing asset tags, replace the existing asset tags, or remove them from the assets. |
| assetsLinkIdempotency | LinkIdempotencyInvariant | How linked resources on assets in the input should be updated: based on their unique URL or their unique name. |
| assetsBatchSize | Int | Maximum number of rows to process at a time (per API request). |
| trackBatches | Boolean | Whether to track details about every asset across batches (true) or only counts (false). |

### RelationalAssetsBuilder[¶](#relationalassetsbuilder "Permanent link")

The `RelationalAssetsBuilder` publish config accepts the following configurable inputs. You can use any combination of these, and any you leave out will use sensible defaults.

**Relational assets**

| Variable Name | Data Type | Description |
| --- | --- | --- |
| assetsFile | FrameworkRenderer.NamePathPair | File containing assets to import, typically passed through using `transferFile()`. |
| assetsUpsertSemantic | ImportSemantic | Whether to allow the creation of new (full or partial) assets from the input CSV, or ensure assets are only updated if they already exist in Atlan. |
| deltaSemantic | DeltaSemantic | Whether to treat the input file as an initial load, full replacement (deleting any existing assets not in the file) or only incremental (no deletion of existing assets). |
| deltaRemovalType | RemovalType | How to delete any assets not found in the latest file. |
| deltaReloadCalculation | ReloadCalculation | Which assets to reload from the latest input CSV file. Changed assets only will calculate which assets have changed between the files and only attempt to reload those changes. |
| previousFileDirect | FrameworkRenderer.NamePathPair | Path to a direct file (locally) to use for delta processing. Note: providing a value for this will ignore any other previously\-processed file in the object store, so please be sure this is the option you want to use (should be rare). |
| assetsAttrToOverwrite | Listing\<String\> | List of attributes you want to clear (remove) from assets if their value is blank in the provided file. |
| assetsFailOnErrors | Boolean | Whether an invalid value in a field should cause the import to fail (true) or log a warning, skip that value, and proceed (false). |
| assetsFieldSeparator | String | Single character used to separate fields in the input file (for example, `,` or `;`). |
| assetsBatchSize | Int | Maximum number of rows to process at a time (per API request). |
| assetsCmHandling | CustomMetadataSemantic | How custom metadata in the input should be handled: ignore it, merge it with any existing asset custom metadata, or overwrite the existing asset custom metadata. |
| assetsTagHandling | AtlanTagSemantic | How Atlan tags on assets in the input should be handled: ignore them, append them to any existing asset tags, replace the existing asset tags, or remove them from the assets. |
| trackBatches | Boolean | Whether to track details about every asset across batches (true) or only counts (false). |

### LineageBuilder[¶](#lineagebuilder "Permanent link")

The `LineageBuilder` publish config accepts the following configurable inputs. You can use any combination of these, and any you leave out will use sensible defaults.

**Lineage assets**

| Variable Name | Data Type | Description |
| --- | --- | --- |
| lineageFile | FrameworkRenderer.NamePathPair | File containing lineage to import, typically passed through using `transferFile()`. |
| lineageUpsertSemantic | ImportSemantic | Whether to allow the creation of new (full or partial) assets from the input CSV, or ensure assets are only updated if they already exist in Atlan. |
| lineageFailOnErrors | Boolean | Whether an invalid value in a field should cause the import to fail (true) or log a warning, skip that value, and proceed (false). |
| fieldSeparator | String | Single character used to separate fields in the input file (for example, `,` or `;`). |
| batchSize | Int | Maximum number of rows to process at a time (per API request). |
| cmHandling | CustomMetadataSemantic | How custom metadata in the input should be handled: ignore it, merge it with any existing asset custom metadata, or overwrite the existing asset custom metadata. |
| tagHandling | AtlanTagSemantic | How Atlan tags on assets in the input should be handled: ignore them, append them to any existing asset tags, replace the existing asset tags, or remove them from the assets. |

---

2025\-03\-122025\-03\-12

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/custom-package/define/) to provide us with more information. 

Back to top

[Previous Running example](../example/) [Next Render your package](../render/) 

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

