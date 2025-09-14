# Source URL
https://developer.atlan.com/toolkits/typedef/bind-sdks/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/typedef/bind-sdks/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to generate the strongly-typed bindings for the Atlan SDKs.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to generate the strongly-typed bindings for the Atlan SDKs.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/typedef/bind-sdks.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Generate SDK bindings - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/typedef/bind-sdks/
meta-twitter:card: summary_large_image
meta-twitter:description: How to generate the strongly-typed bindings for the Atlan SDKs.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/typedef/bind-sdks.png
meta-twitter:title: Generate SDK bindings - Developer
meta-viewport: width=device-width,initial-scale=1
title: Generate SDK bindings - Developer
-->

[Skip to content](#bind-the-sdks) Developer Generate SDK bindings Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Bind the SDKs[¶](#bind-the-sdks "Permanent link")
=================================================

Of course, to actually test the UX you should create some assets of the new type(s) and test. The simplest way to do this is to make them programmatically accessible — via an SDK.

Clone SDK repository[¶](#clone-sdk-repository "Permanent link")
---------------------------------------------------------------

To actually implement the SDK bindings, you will first need to clone the SDK's code repository:

Java

Python

Set up the development environment for [`pyatlan`](https://github.com/atlanhq/atlan-python) .

1. Open the terminal and clone the latest `pyatlan` repository: 
```
git clone https://github.com/atlanhq/atlan-python.git

    ```
2. We recommend creating a new [virtual environment](https://docs.python.org/3/library/venv.html) : 
```
python3 -m venv venv

    ```
3. Activate the virtual environment: 
```
source venv/bin/activate

    ```
4. In the project root directory, install the required dependencies: 
```
pip install -e . && pip install -r requirements-dev.txt

    ```

Implement `creator` methods[¶](#implement-creator-methods "Permanent link")
---------------------------------------------------------------------------

Each SDK contains a generator package that generates SDK code based on the latest typedefs available in your Atlan instance. However, each new asset type will also have a specific set of minimal attributes required when creating any instances of that type.

This minimal set of attributes is defined for developers to understand and consume through a `creator` method.

### `qualifiedName`[¶](#qualifiedname "Permanent link")

All asset types require a `qualifiedName`, and this must be unique for all instances of that asset type.

Consider carefully how the `qualifiedName` should be constructed

Since it must be unique across all instances of that asset type, carefully consider how the `qualifiedName` should be constructed — and automate or enforce this as much as possible in your `creator` implementation. While names are often used in the `qualifiedName`, if the system you are representing does not have unique names at a given level (or these are subject to change without the object itself changing) you may need to use some other string in the `qualifiedName` to ensure it remains unique.

Typically this will be:

```
default/{{connectorType}}/{{epoch}}/{{uniqueName}}      # (1)
default/{{connectorType}}/{{epoch}}/.../{{uniqueName}}  # (2)

```
1. For a top\-level asset, the connection's `qualifiedName` concatenated with the (unique) name of the top\-level asset:
2. For a child asset, the parent's `qualifiedName` concatenated with the (unique) name of the child asset:

**Running example (expand for details)**

In our running example, this would mean `qualifiedName`s that look like this:

```
default/genericdb/1234567890/some-dataset                           # (1)
default/genericdb/1234567890/some-dataset/some-table                # (2)
default/genericdb/1234567890/some-dataset/some-table/some-field     # (3)

```
1. An example `qualifiedName` for a dataset named `some-dataset`, in a generic database connection (that happened to be created on February 13, 2009 at 23:31:30 GMT).
2. An example `qualifiedName` for a table named `some-table` created within that dataset.
3. An example `qualifiedName` for a field named `some-field` created within that table.

From the examples above, you can see all assets require at least the following information at creation (even top\-level assets):

* `typeName` — to define the type of asset being created
* `qualifiedName` — which must be unique across all instances of the asset type, since it is used to determine whether to update or create a new instance
* `connectionQualifiedName` — for UX filtering and access control purposes, which has embedded within it a `connectorType` (which in turn determines [which icon to use](../../../models/connectortypes/) to represent each instance of an asset)

**Running example (expand for details)**

Sample creation payload (CustomDataset)
```
{
  "entities": [
    {
      "typeName": "CustomDataset",
      "attributes": {
        "name": "some-dataset",
        "qualifiedName": "default/genericdb/1234567890/some-dataset",
        "connectionQualifiedName": "default/genericdb/1234567890",
        "connectorName": "genericdb"
      }
    }
  ]
}

```

The sections below walkthrough writing the code\-generator templates for the running example.

### `CustomDataset` template[¶](#customdataset-template "Permanent link")

Now that we know the minimal required attributes for creation, we can define these in a template for each SDK. These templates define only the unique portion of the generated code in each SDK — any standard code will still continue to be generated automatically:

Java

Python

| sdk/src/main/resources/templates/CustomDataset.ftl | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 ``` | ``` <#macro all>     /** * Builds the minimal object necessary to create a CustomDataset.      *      * @param name of the CustomDataset      * @param connectionQualifiedName unique name of the connection through which the spec is accessible      * @return the minimal object necessary to create the CustomDataset, as a builder      */     public static CustomDatasetBuilder<?, ?> creator(         String name,         String connectionQualifiedName     ) { // (1)         return CustomDataset._internal()                 .guid("-" + ThreadLocalRandom.current().nextLong(0, Long.MAX_VALUE - 1)) // (2)                 .qualifiedName(connectionQualifiedName + "/" + name)                 .name(name)                 .connectionQualifiedName(connectionQualifiedName)                 .connectorType(Connection.getConnectorTypeFromQualifiedName(connectionQualifiedName));     }      /** * Builds the minimal object necessary to update a CustomDataset.      *      * @param qualifiedName of the CustomDataset      * @param name of the CustomDataset      * @return the minimal request necessary to update the CustomDataset, as a builder      */     public static CustomDatasetBuilder<?, ?> updater(         String qualifiedName,         String name     ) { // (3)         return CustomDataset._internal()                 .guid("-" + ThreadLocalRandom.current().nextLong(0, Long.MAX_VALUE - 1))                 .qualifiedName(qualifiedName)                 .name(name);     }      /** * Builds the minimal object necessary to apply an update to a CustomDataset, from a potentially      * more-complete CustomDataset object.      *      * @return the minimal object necessary to update the CustomDataset, as a builder      * @throws InvalidRequestException if any of the minimal set of required properties for CustomDataset are not found in the initial object      */     @Override     public CustomDatasetBuilder<?, ?> trimToRequired() throws InvalidRequestException { // (4)         validateRequired(TYPE_NAME, Map.of(             "qualifiedName", this.getQualifiedName(),             "name", this.getName()         ));         return updater(this.getQualifiedName(), this.getName());     } </#macro>  ``` |

1. Even though we require 4 attributes to create an `CustomDataset`, we can derive all of them from just 2 inputs. So to keep the interface as simple as possible, we will only request the 2 inputs we need to derive (automatically) the rest.
2. Always set the `guid` to a random, negative integer. This allows the SDK (and Atlan's back\-end) to handle referential integrity when multiple inter\-related assets are submitted in a single request — even if some of them need to be created.
3. Also implement an `updater()` method that takes the minimal set of attributes required to *update* an asset of this type. In almost all cases this will be `qualifiedName` and `name`, but in some very rare cases could require other attributes.
4. Finally, implement the `trimToRequired` method to validate that an object of this type has the minimal set of attributes required to be used to update such an asset in Atlan. Like the `updater` method this will in almost all cases just validate `qualifiedName` and `name` are present, but in some very rare cases could validate other attributes.

In Python, we need to create two templates:

| pyatlan/generator/templates/methods/asset/custom\_dataset.jinja2 | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ```     @classmethod     @init_guid     def creator(cls, *, name: str, connection_qualified_name: str) -> CustomDataset:  # (1)         validate_required_fields(             ["name", "connection_qualified_name"], [name, connection_qualified_name]         )         attributes = CustomDataset.Attributes.create(             name=name, connection_qualified_name=connection_qualified_name         )         return cls(attributes=attributes)      @classmethod     @init_guid     def create(cls, *, name: str, connection_qualified_name: str) -> CustomDataset:         warn(             (                 "This method is deprecated, please use 'creator' "                 "instead, which offers identical functionality."             ),             DeprecationWarning,             stacklevel=2,         )         return cls.creator(             name=name, connection_qualified_name=connection_qualified_name         )  ``` |

1. Even though we require 4 attributes to create an `CustomDataset`, we can derive all of them from just 2 inputs. So to keep the interface as simple as possible, we will only request the 2 inputs we need to derive (automatically) the rest.

| pyatlan/generator/templates/methods/attribute/custom\_dataset.jinja2 | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ```         @classmethod         @init_guid         def create(cls, *, name: str, connection_qualified_name: str) -> {{ entity_def.name }}.Attributes:             validate_required_fields(                 ["name", "connection_qualified_name"],                 [name, connection_qualified_name]             )             return {{ entity_def.name }}.Attributes(  # (1)                 name=name,                 qualified_name=f"{connection_qualified_name}/{name}",                 connection_qualified_name=connection_qualified_name,                 connector_name=AtlanConnectorType.get_connector_name(                     connection_qualified_name                 ),             )  ``` |

1. It is within the attributes template that we derive all the required attributes from the minimal inputs requested in the asset\-level template.

### `CustomTable` template[¶](#customtable-template "Permanent link")

As stated earlier, the `qualifiedName` should be a concatenation onto the parent's `qualifiedName` (in our running example, the parent of a `CustomTable` is a `CustomDataset`).

Java

Python

| sdk/src/main/resources/templates/CustomTable.ftl | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 ``` | ``` <#macro all>     /** * Builds the minimal object necessary to create a CustomTable.      *      * @param name of the CustomTable      * @param customDataset in which the CustomTable should be created, which must have at least      *                a qualifiedName      * @return the minimal request necessary to create the CustomTable, as a builder      * @throws InvalidRequestException if the CustomDataset provided is without a qualifiedName      */     public static CustomTableBuilder<?, ?> creator(         String name,         CustomDataset customDataset     ) throws InvalidRequestException { // (1)         validateRelationship(CustomDataset.TYPE_NAME, Map.of(             "qualifiedName", customDataset.getQualifiedName()         ));         return creator(             name,             customDataset.getQualifiedName()         ).customDataset(customDataset.trimToReference()); // (2)     }      /** * Builds the minimal object necessary to create an CustomTable.      *      * @param name unique name of the CustomTable      * @param customDatasetQualifiedName unique name of the CustomDataset through which the table is accessible      * @return the minimal object necessary to create the CustomTable, as a builder      */     public static CustomTableBuilder<?, ?> creator(         String name,         String customDatasetQualifiedName     ) { // (3)         String connectionQualifiedName = StringUtils.getParentQualifiedNameFromQualifiedName(customDatasetQualifiedName);         return CustomTable._internal()                 .guid("-" + ThreadLocalRandom.current().nextLong(0, Long.MAX_VALUE - 1))                 .qualifiedName(customDatasetQualifiedName + "/" + name)                 .name(name)                 .customDataset(CustomDataset.refByQualifiedName(customDatasetQualifiedName))                 .connectionQualifiedName(connectionQualifiedName)                 .connectorType(Connection.getConnectorTypeFromQualifiedName(connectionQualifiedName));     }      /** * Builds the minimal object necessary to update a CustomTable.      *      * @param qualifiedName of the CustomTable      * @param name of the CustomTable      * @return the minimal request necessary to update the CustomTable, as a builder      */     public static CustomTableBuilder<?, ?> updater(         String qualifiedName,         String name     ) {         return CustomTable._internal()                 .guid("-" + ThreadLocalRandom.current().nextLong(0, Long.MAX_VALUE - 1))                 .qualifiedName(qualifiedName)                 .name(name);     }      /** * Builds the minimal object necessary to apply an update to a CustomTable, from a potentially      * more-complete CustomTable object.      *      * @return the minimal object necessary to update the CustomTable, as a builder      * @throws InvalidRequestException if any of the minimal set of required properties for CustomTable are not found in the initial object      */     @Override     public CustomTableBuilder<?, ?> trimToRequired() throws InvalidRequestException {         validateRequired(TYPE_NAME, Map.of(             "qualifiedName", this.getQualifiedName(),             "name", this.getName()         ));         return updater(this.getQualifiedName(), this.getName());     } </#macro>  ``` |

1. For asset types that have a parent asset, you should provide multiple overloaded `creator` methods. For example, one that takes the parent object itself (and validates the provided object has the minimal set of attributes we require on it) and one that takes only a `qualifiedName` of the parent asset.
2. When implementing the method that takes a parent object, always set the relationship to the parent object explicitly and by using the `trimToReference()` method on the parent object. This ensures that any GUID on the parent object is used to create the reference to the parent object — which ensures that any negative integer present for referential integrity is preferred over a `qualifiedName` for the parent object. (Which further ensures that you can create both parent and child objects in the same request.)
3. Typically the fully\-parameterized `creator()` method (with various string parameters) will be the one you call through to from any other overloaded `creator()` methods, so they all share the same foundational implementation.

| pyatlan/generator/templates/methods/asset/custom\_table.jinja2 | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 ``` | ```     @overload     @classmethod     def creator(         cls,         *,         name: str,         custom_dataset_qualified_name: str,     ) -> CustomTable: ...      @overload     @classmethod     def creator(         cls,         *,         name: str,         custom_dataset_qualified_name: str,         connection_qualified_name: str,     ) -> CustomTable: ...      @classmethod     @init_guid     def creator(         cls,         *,         name: str,         custom_dataset_qualified_name: str,         connection_qualified_name: Optional[str] = None,     ) -> CustomTable:         validate_required_fields(             ["name", "custom_dataset_qualified_name"], [name, custom_dataset_qualified_name]         )         attributes = CustomTable.Attributes.create(             name=name,             custom_dataset_qualified_name=custom_dataset_qualified_name,             connection_qualified_name=connection_qualified_name,         )         return cls(attributes=attributes)      @classmethod     @init_guid     def create(cls, *, name: str, custom_dataset_qualified_name: str) -> CustomTable:         warn(             (                 "This method is deprecated, please use 'creator' "                 "instead, which offers identical functionality."             ),             DeprecationWarning,             stacklevel=2,         )         return cls.creator(             name=name, custom_dataset_qualified_name=custom_dataset_qualified_name         )  ``` |

| pyatlan/generator/templates/methods/attribute/custom\_table.jinja2 | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 ``` | ```         @classmethod         @init_guid         def create(             cls,             *,             name: str,             custom_dataset_qualified_name: str,             connection_qualified_name: Optional[str] = None,         ) -> CustomTable.Attributes:             validate_required_fields(                 ["name", "custom_dataset_qualified_name"],                 [name, custom_dataset_qualified_name],             )             if connection_qualified_name:                 connector_name = AtlanConnectorType.get_connector_name(                     connection_qualified_name                 )             else:                 connection_qn, connector_name = AtlanConnectorType.get_connector_name(                     custom_dataset_qualified_name, "custom_dataset_qualified_name", 4                 )              return CustomTable.Attributes(                 name=name,                 custom_dataset_qualified_name=custom_dataset_qualified_name,                 connector_name=connector_name,                 connection_qualified_name=connection_qualified_name or connection_qn,                 qualified_name=f"{custom_dataset_qualified_name}/{name}",                 custom_dataset=CustomDataset.ref_by_qualified_name(custom_dataset_qualified_name),             )  ``` |

### `CustomField` template[¶](#customfield-template "Permanent link")

Finally, the `CustomField` template will be very similar to the `CustomTable` template.

Illustrates the case where a qualifiedName may contain forward\-slashes

Since `qualifiedName`s are typically constructed using a `/` as a delimiter, if the system you are representing could actually contain a `/` in the unique information you are placing into the `qualifiedName` you need to be sure you pass **all** information to create the `qualifiedName` — you will not be able to parse the parent's `qualifiedName` in these cases.

Java

Python

| sdk/src/main/resources/templates/CustomField.ftl | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 ``` | ``` <#macro all>     /** * Builds the minimal object necessary to create a CustomField.      *      * @param name of the CustomField      * @param customTable in which the CustomField should be created, which must have at least      *                a qualifiedName      * @return the minimal request necessary to create the CustomField, as a builder      * @throws InvalidRequestException if the CustomTable provided is without a qualifiedName      */     public static CustomFieldBuilder<?, ?> creator(         String name,         CustomTable customTable     ) throws InvalidRequestException { // (1)         Map<String, String> map = new HashMap<>(); // (2)         map.put("connectionQualifiedName", customTable.getConnectionQualifiedName());         map.put("customDatasetName", customTable.getCustomDatasetName());         map.put("customDatasetQualifiedName", customTable.getCustomDatasetQualifiedName());         map.put("name", customTable.getName());         map.put("qualifiedName", customTable.getQualifiedName());         validateRelationship(CustomTable.TYPE_NAME, map);         return creator(             name,             customTable.getConnectionQualifiedName(),             customTable.getCustomDatasetName(),             customTable.getCustomDatasetQualifiedName(),             customTable.getName(),             customTable.getQualifiedName()         ).customTable(customTable.trimToReference()); // (3)     }      /** * Builds the minimal object necessary to create a CustomField.      *      * @param name unique name of the CustomField      * @param customTableQualifiedName unique name of the CustomTable through which the table is accessible      * @return the minimal object necessary to create the CustomField, as a builder      */     public static CustomFieldBuilder<?, ?> creator(         String name,         String customTableQualifiedName     ) { // (4)         String customTableName = StringUtils.getNameFromQualifiedName(customTableQualifiedName);         String customDatasetQualifiedName = StringUtils.getParentQualifiedNameFromQualifiedName(customTableQualifiedName);         String customDatasetName = StringUtils.getNameFromQualifiedName(customDatasetQualifiedName);         String connectionQualifiedName = StringUtils.getParentQualifiedNameFromQualifiedName(customDatasetQualifiedName);         return creator(             name,             connectionQualifiedName,             customDatasetName,             customDatasetQualifiedName,             customTableName,             customTableQualifiedName         );     }      /** * Builds the minimal object necessary to create a CustomField.      *      * @param name of the CustomField      * @param connectionQualifiedName unique name of the connection in which to create the CustomField      * @param customDatasetQualifiedName simple name of the CustomDataset in which to create the CustomField      * @param customDatasetName unique name of the CustomDataset in which to create the CustomField      * @param customTableName simple name of the CustomTable in which to create the CustomField      * @param customTableQualifiedName unique name of the CustomTable in which to create the CustomField      * @return the minimal request necessary to create the CustomField, as a builder      */     public static CustomFieldBuilder<?, ?> creator(         String name,         String connectionQualifiedName,         String customDatasetQualifiedName,         String customDatasetName,         String customTableName,         String customTableQualifiedName     ) {         AtlanConnectorType connectorType = Connection.getConnectorTypeFromQualifiedName(connectionQualifiedName);         return CustomField._internal()             .guid("-" + ThreadLocalRandom.current().nextLong(0, Long.MAX_VALUE - 1))             .name(name)             .qualifiedName(generateQualifiedName(name, customTableQualifiedName))             .connectorType(connectorType)             .customTableName(customTableName)             .customTableQualifiedName(customTableQualifiedName)             .customTable(CustomTable.refByQualifiedName(customTableQualifiedName))             .customDatasetName(customDatasetName)             .customDatasetQualifiedName(customDatasetQualifiedName)             .connectionQualifiedName(connectionQualifiedName);     }      /** * Generate a unique CustomField name.      *      * @param name of the CustomField      * @param customTableQualifiedName unique name of the CustomTable in which this CustomField exists      * @return a unique name for the CustomField      */     public static String generateQualifiedName(         String name,         String customTableQualifiedName     ) { // (6)         return customTableQualifiedName + "/" + name;     }      /** * Builds the minimal object necessary to update a CustomField.      *      * @param qualifiedName of the CustomField      * @param name of the CustomField      * @return the minimal request necessary to update the CustomField, as a builder      */     public static CustomFieldBuilder<?, ?> updater(         String qualifiedName,         String name     ) {         return CustomField._internal()                 .guid("-" + ThreadLocalRandom.current().nextLong(0, Long.MAX_VALUE - 1))                 .qualifiedName(qualifiedName)                 .name(name);     }      /** * Builds the minimal object necessary to apply an update to a CustomField, from a potentially      * more-complete CustomField object.      *      * @return the minimal object necessary to update the CustomField, as a builder      * @throws InvalidRequestException if any of the minimal set of required properties for CustomField are not found in the initial object      */     @Override     public CustomFieldBuilder<?, ?> trimToRequired() throws InvalidRequestException {         validateRequired(TYPE_NAME, Map.of(             "qualifiedName", this.getQualifiedName(),             "name", this.getName()         ));         return updater(this.getQualifiedName(), this.getName());     } </#macro>  ``` |

1. For asset types that have a parent asset, you should provide multiple overloaded `creator` methods. For example, one that takes the parent object itself (and validates the provided object has the minimal set of attributes we require on it) and one that takes all the `qualifiedName`s and de\-normalized `name`s of the ancestral assets.
2. When receiving only the parent asset, you will need to validate you have all the other information required on that parent asset (in particular, the full set of de\-normalized attributes needed to create this asset).
3. When implementing the method that takes a parent object, always set the relationship to the parent object explicitly and by using the `trimToReference()` method on the parent object. This ensures that any GUID on the parent object is used to create the reference to the parent object — which ensures that any negative integer present for referential integrity is preferred over a `qualifiedName` for the parent object. (Which further ensures that you can create both parent and child objects in the same request.)
4. You may still want to implement a `creator()` that parses details from the immediate parent's `qualifiedName`, if you know you will have control over when you must use the other (because some element of the `qualifiedName` itself has a `/` in it).
5. Typically the fully\-parameterized `creator()` method (with various string parameters) will be the one you call through to from any other overloaded `creator()` methods, so they all share the same foundational implementation.
6. You may also want to define a distinct method to generate the `qualifiedName` for the asset based on a set of defined inputs.

| pyatlan/generator/templates/methods/asset/custom\_field.jinja2 | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 ``` | ```     @overload     @classmethod     def creator(         cls,         *,         name: str,         custom_table_qualified_name: str,     ) -> CustomField: ...      @overload     @classmethod     def creator(         cls,         *,         name: str,         custom_table_qualified_name: str,         custom_table_name: str,         custom_dataset_name: str,         custom_dataset_qualified_name: str,         connection_qualified_name: str,     ) -> CustomField: ...      @classmethod     @init_guid     def creator(         cls,         *,         name: str,         custom_table_qualified_name: str,         custom_table_name: Optional[str] = None,         custom_dataset_name: Optional[str] = None,         custom_dataset_qualified_name: Optional[str] = None,         connection_qualified_name: Optional[str] = None,     ) -> CustomField:         validate_required_fields(             ["name", "custom_table_qualified_name"], [name, custom_table_qualified_name]         )         attributes = CustomField.Attributes.create(             name=name,             custom_table_qualified_name=custom_table_qualified_name,             custom_table_name=custom_table_name,             custom_dataset_name=custom_dataset_name,             custom_dataset_qualified_name=custom_dataset_qualified_name,             connection_qualified_name=connection_qualified_name,         )         return cls(attributes=attributes)      @classmethod     @init_guid     def create(cls, *, name: str, custom_table_qualified_name: str) -> CustomField:         warn(             (                 "This method is deprecated, please use 'creator' "                 "instead, which offers identical functionality."             ),             DeprecationWarning,             stacklevel=2,         )         return cls.creator(             name=name, custom_table_qualified_name=custom_table_qualified_name         )  ``` |

| pyatlan/generator/templates/methods/attribute/custom\_field.jinja2 | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 ``` | ```         @classmethod         @init_guid         def create(             cls,             *,             name: str,             custom_table_qualified_name: str,             custom_table_name: Optional[str] = None,             custom_dataset_name: Optional[str] = None,             custom_dataset_qualified_name: Optional[str] = None,             connection_qualified_name: Optional[str] = None,         ) -> CustomField.Attributes:             validate_required_fields(                 ["name", "custom_table_qualified_name"],                 [name, custom_table_qualified_name],             )             if connection_qualified_name:                 connector_name = AtlanConnectorType.get_connector_name(                     connection_qualified_name                 )             else:                 connection_qn, connector_name = AtlanConnectorType.get_connector_name(                     custom_table_qualified_name, "custom_table_qualified_name", 5                 )              fields = custom_table_qualified_name.split("/")             qualified_name = f"{custom_table_qualified_name}/{name}"             connection_qualified_name = connection_qualified_name or connection_qn             custom_dataset_name = custom_dataset_name or fields[3]             custom_table_name = custom_table_name or fields[4]             custom_dataset_qualified_name = (                 custom_dataset_qualified_name                 or f"{connection_qualified_name}/{custom_dataset_name}"             )              return CustomField.Attributes(                 name=name,                 qualified_name=qualified_name,                 custom_table_qualified_name=custom_table_qualified_name,                 custom_table_name=custom_table_name,                 custom_dataset_name=custom_dataset_name,                 custom_dataset_qualified_name=custom_dataset_qualified_name,                 connector_name=connector_name,                 connection_qualified_name=connection_qualified_name,                 custom_table=CustomTable.ref_by_qualified_name(custom_table_qualified_name),             )  ``` |

Generate model code[¶](#generate-model-code "Permanent link")
-------------------------------------------------------------

Now that the `creator` method has been defined for each new asset type, you can regenerate the SDK's code to include these new asset types:

Java

Python

Before running any generator scripts, make sure you have [configured your environment variables](../../../../sdks/java#configure-the-sdk) (setting the `ATLAN_BASE_URL` and `ATLAN_API_KEY` environment variables is sufficient).

1. Generate the asset model, enums, and structs in the SDK based on the typedefs present in your Atlan instance: 
```
./gradlew genModel

    ```

    If you see failures

    The generator also generates unit tests for new asset types, which will use Java reflection to investigate objects like enums. If you see an error during the generation that a given type (struct or enum) is unknown, you may need to simply re\-run the generator.
2. The generated files will be unformatted, so we recommend running Spotless to format the code nicely: 
```
./gradlew spotlessApply

    ```

Before running any generator scripts, make sure you have [configured your environment variables](../../../../sdks/python#configure-the-sdk) (`ATLAN_BASE_URL` and `ATLAN_API_KEY`).

1. Retrieve the typedefs from an Atlan instance and write them to a JSON file by running the following script: 
```
python3 pyatlan/generator/create_typedefs_file.py

    ```
2. Finally, to generate the asset model, enums, and structs modules in the SDK based on the typedefs present in your Atlan instance, run: 
```
python3 pyatlan/generator/class_generator.py

    ```
3. The generated files will be unformatted, so we recommend running `pyatlan_formatter` to format the code nicely: 
```
./pyatlan-formatter

    ```

Now, you are ready to import the generated asset models into your test scripts and easily manage their objects! 

---

2025\-03\-112025\-06\-24

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/typedef/bind-sdks/) to provide us with more information. 

Back to top

[Previous Test your model](../test-model/) [Next Write integration test](../integration-test/) 

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

