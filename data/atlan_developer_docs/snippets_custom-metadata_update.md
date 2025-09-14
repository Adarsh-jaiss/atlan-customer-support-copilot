# Source URL
https://developer.atlan.com/snippets/custom-metadata/update/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/custom-metadata/update/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to update existing custom metadata structures in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to update existing custom metadata structures in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/update.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Update custom metadata - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/custom-metadata/update/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to update existing custom metadata structures in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/custom-metadata/update.png
meta-twitter:title: Update custom metadata - Developer
meta-viewport: width=device-width,initial-scale=1
title: Update custom metadata - Developer
-->

[Skip to content](#update-custom-metadata) Developer Update custom metadata Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/types/typedefs (PUT)](../../../endpoints/#tag:apimetatypestypedefs-put)

Update custom metadata[¶](#update-custom-metadata "Permanent link")
===================================================================

Custom metadata structure updates are complete replacements

You need to send the entire custom metadata structure (all of its attributes) on each update.

Retrieve existing structure[¶](#retrieve-existing-structure "Permanent link")
-----------------------------------------------------------------------------

To ensure you have the complete structure, it is easiest to start by [retrieving the existing custom metadata structure](../read/).

Update the custom metadata structure[¶](#update-the-custom-metadata-structure "Permanent link")
-----------------------------------------------------------------------------------------------

Now that you have the existing structure, modify the object. You can add or remove as many properties as you want in a single update, but for simplicity the following describe how to add and remove a single property each.

### Add a property[¶](#add-a-property "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a property:

Java

Python

Kotlin

Raw REST API

| Add a property to the structure | |
| --- | --- |
| ```  4  5  6  7  8  9 10 ``` | ``` existing.toBuilder() // (6)     .attributeDef(AttributeDef.of(client, // (2)         "Extra", // (3)         AtlanCustomAttributePrimitiveType.STRING, // (4)         false)) // (5)     .build(); // (6) CustomMetadataDef updated = existing.update(client); // (7)  ``` |

1. After retrieving the existing custom metadata structure, clone the structure into a mutable one using `toBuilder()`.
2. You can append a new attribute to its list of attributes by chaining `.attributeDef()`. Use the `AttributeDef.of()` factory method to define the attribute with the correct internal settings. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. When using the factory method, you need to provide at least a name;
4. ...a type;
5. ...and whether there can be multiple values for this property (true) or only a single value (false) on a given asset.
6. Then build the mutable structure.
7. And finally call the `.update()` method on the revised custom metadata structure to actually submit the changes to Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add a property to the structure | |
| --- | --- |
| ```  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.model.typedef import AttributeDef from pyatlan.model.enums import AtlanCustomAttributePrimitiveType from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  attrs = existing.attribute_defs # (1) attrs.append(     AttributeDef.create( # (2)         client=client, # (3)         display_name="Extra", # (4)         attribute_type=AtlanCustomAttributePrimitiveType.STRING,     ), ) existing.attribute_defs = attrs # (5) response = client.typedef.update(existing) # (6)  ``` |

1. Create a new list of attributes, starting with the list of existing attributes.
2. Add a new attribute to this list of attributes. Use the `AttributeDef.create()` factory method to define the attribute with the correct internal settings.
3. You must provide a client instance.
4. When using the factory method, you need to provide at least a name and a type.
5. Then set the attributes on the custom metadata structure to this revised list.
6. And finally call the `.typedef.update()` method sending the revised custom metadata structure to actually submit the changes to Atlan.

| Add a property to the structure | |
| --- | --- |
| ```  4  5  6  7  8  9 10 ``` | ``` existing.toBuilder() // (6)     .attributeDef(AttributeDef.of(client, // (2)         "Extra",  // (3)         AtlanCustomAttributePrimitiveType.STRING,  // (4)         false)) // (5)     .build() // (6) val updated = existing.update(client) // (7)  ``` |

1. After retrieving the existing custom metadata structure, clone the structure into a mutable one using `toBuilder()`.
2. You can append a new attribute to its list of attributes by chaining `.attributeDef()`. Use the `AttributeDef.of()` factory method to define the attribute with the correct internal settings. Because this operation may need to retrieve information from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. When using the factory method, you need to provide at least a name;
4. ...a type;
5. ...and whether there can be multiple values for this property (true) or only a single value (false) on a given asset.
6. Then build the mutable structure.
7. And finally call the `.update()` method on the revised custom metadata structure to actually submit the changes to Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| PUT /api/meta/types/typedefs | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 ``` | ``` {   "businessMetadataDefs": [ // (1)     {       "category": "BUSINESS_METADATA", // (2)       "guid": "917ffec9-fa84-4c59-8e6c-c7b114d04be3",       "name": "MNJ8mpLsIOaP4OQnLNhRta",       "displayName": "RACI",       "description": "",       "typeVersion": "1.0",       "serviceType": "atlan",       "attributeDefs": [ // (3)         {           "name": "fWMB77RSjRGNYoFeD4FcGi",           "displayName": "Responsible",           "description": "",           "typeName": "string",           "includeInNotification": false,           "isIndexable": true,           "isOptional": true,           "isUnique": false,           "indexType": "DEFAULT",           "searchWeight": -1,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"Database\",\"Schema\",\"Table\"]\n",             "maxStrLength": "100000000",             "isEnum": false,             "multiValueSelect": false,             "allowFiltering": true,             "allowSearch": true,             "primitiveType": "string",             "customType": "users"           }         },         {...},         {...},         {...},         {           "name": "Extra", // (4)           "displayName": "Extra", // (5)           "description": "",           "typeName": "string",           "includeInNotification": false,           "isIndexable": true,           "isOptional": true,           "isUnique": false,           "indexType": "DEFAULT",           "searchWeight": -1,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"Database\",\"Schema\",\"Table\"]\n",             "maxStrLength": "100000000",             "isEnum": false,             "multiValueSelect": false,             "allowFiltering": true,             "allowSearch": true,             "primitiveType": "string",             "customType": "users"           }         }       ],       "createdBy": "jsmith",       "updatedBy": "jsmith",       "createTime": 1648852296555,       "updateTime": 1649172284333,       "version": 2     }   ] }  ``` |

1. You need to specify the entire custom metadata structure, within the `businessMetadataDefs` array.
2. Include all the details of the custom metadata structure definition as you retrieved it.
3. Include all the details of the custom metadata attribute definitions, as you retrieved them.
4. Add the new attribute definition to the list of attribute definitions. Note that for the `name` during this update you can use any string you want, as it will be replaced by a system\-generated hashed\-string during creation of the property.
5. However, ensure you use the human\-readable name you want for the property for the `displayName` of the attribute definition. Also ensure you set all the remaining pieces of the attribute definition according to the nature of the attribute you want to define.

### Change a property[¶](#change-a-property "Permanent link")

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To change an existing property:

Java

Python

Kotlin

Raw REST API

| Change the custom metadata definition | |
| --- | --- |
| ```  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` List<AttributeDef> revised = new ArrayList<>(); // (1) for (AttributeDef attr : existing.getAttributeDefs()) { // (2)     if (attr.getDisplayName().equals("Extra")) {         revised.add(attr.toBuilder().displayName("Something else").build()); // (3)     } else {         revised.add(attr); // (4)     } } existing.toBuilder() // (5)     .clearAttributeDefs() // (6)     .attributeDefs(revised) // (7)     .build(); CustomMetadataDef updated = existing.update(client); // (8)  ``` |

1. Create a new (mutable) empty list of attributes.
2. Iterate through the existing attributes in the custom metadata structure...
3. ...When you get to the attribute you want to change, modify it as\-needed.

    Some properties must not be changed

    Do not change the attribute's `primitiveType`, `isEnum`, `enumType`, `customType`, `multiValueSelect`, `isArchived`, `archivedAt`, or `archivedBy` properties. These should only be set at creation or through archival methods.
4. And add all attributes (existing and the modified one) into the list of revised attributes.
5. You must then clone the custom metadata structure into a mutable structure, using `toBuilder()`.
6. You then need to clear the existing attribute definitions (otherwise the next step will only *append* the same definitions again).
7. Then you can set the attributes on the custom metadata structure to this revised list, and build the structure.
8. And finally call the `.update()` method on the revised custom metadata structure to actually submit the changes to Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Change the custom metadata definition | |
| --- | --- |
| ```  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.model.typedef import AttributeDef from pyatlan.model.enums import AtlanCustomAttributePrimitiveType  revised = [] # (1) for attr in existing.attribute_defs: # (2)     if attr.display_name == "Extra":         attr.display_name = "Something else" # (3)     revised.append(attr) # (4) existing.attribute_defs = revised # (5)  from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.typedef.update(existing) # (6)  ``` |

1. Create a new empty list of attributes.
2. Iterate through the existing attributes in the custom metadata structure...
3. ...When you get to the attribute you want to change, you can change its `display_name`, but not much else. (You should not change its type, hashed\-string name, etc.)
4. And add all attributes (existing and the modified one) into the list of revised attributes.
5. Then set the attributes on the custom metadata structure to this revised list.
6. And finally call the `typedef.update()` method sending the revised custom metadata structure to actually submit the changes to Atlan.

| Change the custom metadata definition | |
| --- | --- |
| ```  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` val revised = mutableListOf<AttributeDef>() // (1) for (attr in existing.attributeDefs) { // (2)     if (attr.displayName == "Extra") {         revised.add(attr.toBuilder().displayName("Something else").build()) // (3)     } else {         revised.add(attr) // (4)     } } existing.toBuilder() // (5)     .clearAttributeDefs() // (6)     .attributeDefs(revised) // (7)     .build() val updated = existing.update(client) // (8)  ``` |

1. Create a new (mutable) empty list of attributes.
2. Iterate through the existing attributes in the custom metadata structure...
3. ...When you get to the attribute you want to change, modify it as\-needed.

    Some properties must not be changed

    Do not change the attribute's `primitiveType`, `isEnum`, `enumType`, `customType`, `multiValueSelect`, `isArchived`, `archivedAt`, or `archivedBy` properties. These should only be set at creation or through archival methods.
4. And add all attributes (existing and the modified one) into the list of revised attributes.
5. You must then clone the custom metadata structure into a mutable structure, using `toBuilder()`.
6. You then need to clear the existing attribute definitions (otherwise the next step will only *append* the same definitions again).
7. Then you can set the attributes on the custom metadata structure to this revised list, and build the structure.
8. And finally call the `.update()` method on the revised custom metadata structure to actually submit the changes to Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| PUT /api/meta/types/typedefs | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 ``` | ``` {   "businessMetadataDefs": [ // (1)     {       "category": "BUSINESS_METADATA", // (2)       "guid": "917ffec9-fa84-4c59-8e6c-c7b114d04be3",       "name": "MNJ8mpLsIOaP4OQnLNhRta",       "displayName": "RACI",       "description": "",       "typeVersion": "1.0",       "serviceType": "atlan",       "attributeDefs": [ // (3)         {           "name": "fWMB77RSjRGNYoFeD4FcGi",           "displayName": "Responsible",           "description": "",           "typeName": "string",           "includeInNotification": false,           "isIndexable": true,           "isOptional": true,           "isUnique": false,           "indexType": "DEFAULT",           "searchWeight": -1,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"Database\",\"Schema\",\"Table\"]\n",             "maxStrLength": "100000000",             "isEnum": false,             "multiValueSelect": false,             "allowFiltering": true,             "allowSearch": true,             "primitiveType": "string",             "customType": "users"           }         },         {...},         {...},         {...},         {           "name": "okm7BDXjTQx4iYPT5u7ilu", // (4)           "displayName": "Something else", // (5)           "description": "",           "typeName": "string",           "includeInNotification": false,           "isIndexable": true,           "isOptional": true,           "isUnique": false,           "indexType": "DEFAULT",           "searchWeight": -1,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"Database\",\"Schema\",\"Table\"]\n",             "maxStrLength": "100000000",             "isEnum": false,             "multiValueSelect": false,             "allowFiltering": true,             "allowSearch": true,             "primitiveType": "string",             "customType": "users"           }         }       ],       "createdBy": "jsmith",       "updatedBy": "jsmith",       "createTime": 1648852296555,       "updateTime": 1649172284333,       "version": 2     }   ] }  ``` |

1. You need to specify the entire custom metadata structure, within the `businessMetadataDefs` array.
2. Include all the details of the custom metadata structure definition as you retrieved it.
3. Include all the details of the custom metadata attribute definitions, as you retrieved them.
4. For the attribute you want to modify, include its hashed\-string name as with all the other attribute definitions.
5. However, for the `displayName` of the attribute you want to modify, change it to the new human\-readable name you want to use.

### Remove a property[¶](#remove-a-property "Permanent link")

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove a property:

Java

Python

Kotlin

Raw REST API

| Remove a property from the structure | |
| --- | --- |
| ```  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` List<AttributeDef> revised = new ArrayList<>(); // (1) for (AttributeDef attr : existing.getAttributeDefs()) { // (2)     if (attr.getDisplayName().equals("Extra")) {         revised.add(attr.toBuilder().archive("jsmith").build()); // (3)     } else {         revised.add(attr); // (4)     } } existing.toBuilder() // (5)     .clearAttributeDefs() // (6)     .attributeDefs(revised) // (7)     .build(); CustomMetadataDef updated = existing.update(client); // (8)  ``` |

1. Create a new (mutable) empty list of attributes.
2. Iterate through the existing attributes in the custom metadata structure...
3. ...When you get to the attribute you want to remove, call the `.archive()` method against it passing the name of the user deleting the attribute.
4. And add all attributes (existing and the removed one) into the list of revised attributes.
5. You must then clone the custom metadata structure into a mutable structure, using `toBuilder()`.
6. You then need to clear the existing attribute definitions (otherwise the next step will only *append* the same definitions again).
7. Then you can set the attributes on the custom metadata structure to this revised list, and build the structure.
8. And finally call the `.update()` method on the revised custom metadata structure to actually submit the changes to Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Change the custom metadata definition | |
| --- | --- |
| ```  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.model.typedef import AttributeDef from pyatlan.model.enums import AtlanCustomAttributePrimitiveType  revised = [] # (1) for attr in existing.attribute_defs: # (2)     if attr.display_name == "Extra":         attr.archive(by="jsmith") # (3)     revised.append(attr) # (4) existing.attribute_defs = revised # (5)  from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.typedef.update(existing) # (6)  ``` |

1. Create a new empty list of attributes.
2. Iterate through the existing attributes in the custom metadata structure...
3. ...When you get to the attribute you want to remove, call the `.archive()` method against it passing the name of the user deleting the attribute.
4. And add all attributes (existing and the archived one) into the list of revised attributes.
5. Then set the attributes on the custom metadata structure to this revised list.
6. And finally call the `.update()` method on the revised custom metadata structure to actually submit the changes to Atlan.

| Remove a property from the structure | |
| --- | --- |
| ```  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` val revised = mutableListOf<AttributeDef>() // (1) for (attr in existing.attributeDefs) { // (2)     if (attr.displayName == "Extra") {         revised.add(attr.toBuilder().archive("jsmith").build()) // (3)     } else {         revised.add(attr) // (4)     } } existing.toBuilder() // (5)     .clearAttributeDefs() // (6)     .attributeDefs(revised) // (7)     .build() val updated = existing.update(client) // (8)  ``` |

1. Create a new (mutable) empty list of attributes.
2. Iterate through the existing attributes in the custom metadata structure...
3. ...When you get to the attribute you want to remove, call the `.archive()` method against it passing the name of the user deleting the attribute.
4. And add all attributes (existing and the removed one) into the list of revised attributes.
5. You must then clone the custom metadata structure into a mutable structure, using `toBuilder()`.
6. You then need to clear the existing attribute definitions (otherwise the next step will only *append* the same definitions again).
7. Then you can set the attributes on the custom metadata structure to this revised list, and build the structure.
8. And finally call the `.update()` method on the revised custom metadata structure to actually submit the changes to Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| PUT /api/meta/types/typedefs | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 ``` | ``` {   "businessMetadataDefs": [ // (1)     {       "category": "BUSINESS_METADATA", // (2)       "guid": "917ffec9-fa84-4c59-8e6c-c7b114d04be3",       "name": "MNJ8mpLsIOaP4OQnLNhRta",       "displayName": "RACI",       "description": "",       "typeVersion": "1.0",       "serviceType": "atlan",       "attributeDefs": [ // (3)         {           "name": "fWMB77RSjRGNYoFeD4FcGi",           "displayName": "Responsible",           "description": "",           "typeName": "string",           "includeInNotification": false,           "isIndexable": true,           "isOptional": true,           "isUnique": false,           "indexType": "DEFAULT",           "searchWeight": -1,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"Database\",\"Schema\",\"Table\"]\n",             "maxStrLength": "100000000",             "isEnum": false,             "multiValueSelect": false,             "allowFiltering": true,             "allowSearch": true,             "primitiveType": "string",             "customType": "users"           }         },         {...},         {...},         {...},         {           "name": "okm7BDXjTQx4iYPT5u7ilu", // (4)           "displayName": "Extra-archived-1649172285912", // (5)           "description": "",           "typeName": "string",           "includeInNotification": false,           "isIndexable": true,           "isOptional": true,           "isUnique": false,           "indexType": "DEFAULT",           "searchWeight": -1,           "cardinality": "SINGLE",           "valuesMinCount": 0,           "valuesMaxCount": 1,           "options": {             "applicableEntityTypes": "[\"Asset\"]",             "customApplicableEntityTypes": "[\"Database\",\"Schema\",\"Table\"]\n",             "maxStrLength": "100000000",             "isEnum": false,             "multiValueSelect": false,             "allowFiltering": true,             "allowSearch": true,             "primitiveType": "string",             "customType": "users",             "isArchived": true, // (6)             "archivedBy": "jsmith", // (7)             "archivedAt": 1649172285912 // (8)           }         }       ],       "createdBy": "jsmith",       "updatedBy": "jsmith",       "createTime": 1648852296555,       "updateTime": 1649172284333,       "version": 2     }   ] }  ``` |

1. You need to specify the entire custom metadata structure, within the `businessMetadataDefs` array.
2. Include all the details of the custom metadata structure definition as you retrieved it.
3. Include all the details of the custom metadata attribute definitions, as you retrieved them.
4. For the attribute you want to remove, include its hashed\-string name as with all the other attribute definitions.
5. However, for the `displayName` of the attribute you want to remove, append `-archived-` and a millisecond epoch for the current system time.
6. Within the `options` for the attribute definition, set `isArchived` to `true`.
7. Within the `options` for the attribute definition, set `archivedBy` to the name of the user who is deleting the attribute.
8. Within the `options` for the attribute definition, set `archivedAt` to the millisecond epoch appended to the `displayName`.

Removed properties are only soft\-deleted

Note that removing a property only archives (soft\-deletes) it. When retrieving the custom metadata structure again, you will still see the deleted attribute definition in the structure, but its `attributeDefs.options.isArchived` property will be set to `true` and its `displayName` will have been changed to include the time at which it was archived.

---

2023\-03\-072025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/custom-metadata/update/) to provide us with more information. 

Back to top

[Previous Retrieve custom metadata](../read/) [Next Delete custom metadata](../delete/) 

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

