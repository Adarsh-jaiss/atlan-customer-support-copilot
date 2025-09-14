# Source URL
https://developer.atlan.com/snippets/tags/manage/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/tags/manage/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage Atlan tags for structured data asset classification.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage Atlan tags for structured data asset classification.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/tags/manage.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Atlan tags - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/tags/manage/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage Atlan tags for structured data asset classification.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/tags/manage.png
meta-twitter:title: Manage Atlan tags - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Atlan tags - Developer
-->

[Skip to content](#manage-atlan-tags) Developer Manage Atlan tags Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/types/typedef/name/{name} (GET)](../../../endpoints/#tag:apimetatypestypedefnamename-get)[/api/meta/types/typedef/{name} (DELETE)](../../../endpoints/#tag:apimetatypestypedefname-delete)[/api/meta/types/typedefs (POST)](../../../endpoints/#tag:apimetatypestypedefs-post)[/api/meta/types/typedefs (PUT)](../../../endpoints/#tag:apimetatypestypedefs-put)[/api/meta/types/typedefs/?type\=CLASSIFICATION (GET)](../../../endpoints/#tag:apimetatypestypedefstypeclassification-get)

Manage Atlan tags[¶](#manage-atlan-tags "Permanent link")
=========================================================

Similar to other objects you can create in the SDK, Atlan tags implement the builder pattern.

Atlan tags vs tags in general

Note that we intentionally use the phrase *Atlan tag* here to differentiate
tags you can structurally maintain in Atlan vs other tags in general.
For example, Snowflake tags are not managed this way, since they are owned and managed in Snowflake.

Build minimal object needed[¶](#build-minimal-object-needed "Permanent link")
-----------------------------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[1\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v1.0.0 "Minimum version")

For example, to create an Atlan tag to identify personally\-identifiable information:

Java

Python

Kotlin

Raw REST API

| Build Atlan tag object for creation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` AtlanTagDef color = AtlanTagDef.creator( // (1)         "PII", // (2)         AtlanTagColor.RED) // (3)     .description("Personally-Identifiable Information") // (4)     .build(); // (5) AtlanTagDef icon = AtlanTagDef.creator(         "PII",         AtlanIcon.PASSWORD, // (6)         AtlanTagColor.RED)     .build(); AtlanTagDef image = AtlanTagDef.creator(         "PII",         "http://some.example.com/image.png", // (7)         AtlanTagColor.RED)     .build();  ``` |

1. Use the `creator()` method to start building up the Atlan tag.
2. You must provide a name for the Atlan tag (`PII` in this example).
3. You must also specify the color you want to use for the Atlan tag.
4. (Optional) You can also give the Atlan tag a description.
5. As with all other builder patterns, you must `build()` the object you've defined.
6. As an alternative, you can also specify a built\-in icon to use for the tag.
7. As an alternative, you can also specify your own image to use for the tag.

| Build Atlan tag object for creation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` import urllib.request from pyatlan.model.typedef import AtlanTagDef from pyatlan.model.enums import AtlanTagColor, AtlanIcon from pyatlan.client.atlan import AtlanClient  client = AtlanClient() atlan_tag_def = AtlanTagDef.create( # (1)                 name="PII", # (2)                 color=AtlanTagColor.RED) # (3) atlan_tag_def.description = "Personally-Identifiable Information" # (4) atlan_tag_def = AtlanTagDef.create(                 name="PII",                 icon=AtlanIcon.PASSWORD, # (5)                 color=AtlanTagColor.RED) urllib.request.urlretrieve("http://some.example.com/image.png", "image.png") # (6) with open("image.png", "rb") as img_file:     image = client.upload_image(file=img_file, filename="image.png") # (7)     atlan_tag_def = AtlanTagDef.create(                     name="PII",                     image=image, # (8)                     color=AtlanTagColor.RED)  ``` |

1. Use the `create()` method to set up the Atlan tag with its minimal necessary inputs.
2. You must provide a name for the Atlan tag (`PII` in this example).
3. You must also specify the color you want to use for the Atlan tag.
4. (Optional) You can also give the Atlan tag a description.
5. As an alternative, you can also specify a built\-in icon to use for the tag.
6. As an alternative, you can download or use your own image file for the tag.
7. Before you can use the image, you must upload it to Atlan.
8. You can then specify the uploaded image to use for the tag.

| Build Atlan tag object for creation | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` val color = AtlanTagDef.creator( // (1)         "PII",  // (2)         AtlanTagColor.RED) // (3)     .description("Personally-Identifiable Information") // (4)     .build() // (5) val icon = AtlanTagDef.creator(         "PII",         AtlanIcon.PASSWORD,  // (6)         AtlanTagColor.RED)     .build() val image = AtlanTagDef.creator(         "PII",         "http://some.example.com/image.png",  // (7)         AtlanTagColor.RED)     .build()  ``` |

1. Use the `creator()` method to start building up the Atlan tag.
2. You must provide a name for the Atlan tag (`PII` in this example).
3. You must also specify the color you want to use for the Atlan tag.
4. (Optional) You can also give the Atlan tag a description.
5. As with all other builder patterns, you must `build()` the object you've defined.
6. As an alternative, you can also specify a built\-in icon to use for the tag.
7. As an alternative, you can also specify your own image to use for the tag.

Image option not shown

The option to use your own image is significantly more complicated, as it involves constructing a multipart form\-encoded upload of the binary image data first, and then using the resulting uploaded object's details to use the image within the tag.

| POST /api/meta/types/typedefs | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` {   "classificationDefs": [ // (1)     {       "category": "CLASSIFICATION", // (2)       "name": "PII", // (3)       "description": "Personally-Identifiable Information",       "displayName": "PII", // (4)       "options": {         "color": "Red", // (5)         "icon": "PhPassword", // (6)         "iconType": "icon"       },       "skipDisplayNameUniquenessCheck": false     }   ] }  ``` |

1. All Atlan tag definitions must be specified within the `classificationDefs` array.
2. Each definition must be defined with a category set to `CLASSIFICATION`.
3. Whatever name you provide for the definition will be replaced by a hashed\-string generated name by the back\-end.
4. Specify the name of the Atlan tag, as it should appear in the UI, to the `displayName`.
5. Set the color to use for the Atlan tag within the `options` object.
6. (Optional) Set a built\-in icon to use within the `options` object. When defining an icon, you must also set `options.iconType` to `"icon"`.

Where can I see each icon?

We use [Phosphor](https://phosphoricons.com/)  for the icons. They have a beautiful icon browser on their site to search and preview the icons.

Create the Atlan tag from the object[¶](#create-the-atlan-tag-from-the-object "Permanent link")
-----------------------------------------------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Now that the object is built, it will have the required information for Atlan to create it:

Java

Python

Kotlin

Raw REST API

| Create the Atlan tag | |
| --- | --- |
| ``` 6 ``` | ``` AtlanTagDef response = atlanTagDef.create(client); // (1)  ``` |

1. The `create()` operation will actually create the Atlan tag within Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create the Atlan tag | |
| --- | --- |
| ``` 8 ``` | ``` response = client.typedef.create(atlan_tag_def) # (1)  ``` |

1. The `typedef.create()` operation will actually create the Atlan tag within Atlan.

| Create the Atlan tag | |
| --- | --- |
| ``` 6 ``` | ``` val response = color.create(client) // (1)  ``` |

1. The `create()` operation will actually create the Atlan tag within Atlan. Because this operation will persist the structure in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

Creation implicit in step above

The actual creation of the Atlan tag is implicit in the example above.

Now that the Atlan tag has been created, you can [use it to tag assets](../../common-examples/tags/).

Update Atlan tags[¶](#update-atlan-tags "Permanent link")
---------------------------------------------------------

[2\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.1.0 "Minimum version")

To update Atlan tags:

Java

Python

Kotlin

Raw REST API

Coming soon

| Update existing tag structure | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  atlan_tag = client.typedef.get_by_name("S7qnUqZ5mBMBpzQ3Wzt6yD") # (1) atlan_tag.options["color"] = "Green" # (2) atlan_tag.options["emoji"] = "💪" atlan_tag.display_name = "MyTagName"  response = client.typedef.update(atlan_tag) # (3)  ``` |

1. To ensure you have the complete structure, it is easiest to start by [retrieving the existing Atlan tag structure by its hashed\-string name](#retrieve-atlan-tags).
2. In this example, we're updating the following properties of an Atlan tag:

    * color of the tag.
        * emoji of the tag.
        * display name of the tag.
3. Now use `client.typedef.update()` with the updated tag definition.

Coming soon

| PUT /api/meta/types/typedefs | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 ``` | ``` {    "enumDefs": [],    "structDefs": [],    "classificationDefs": [ // (1)      {        "category": "CLASSIFICATION",        "createTime": 1716829706708,        "createdBy": "service-account-apikey-2e721c86-2814-4c98-8e1a-fc3fdf6b0489",        "guid": "884091b2-4fbc-4c8e-85d1-173ad90547cf",        "name": "S7qnUqZ5mBMBpzQ3Wzt6yD",        "typeVersion": "1.0",        "updateTime": 1716835149934,        "updatedBy": "service-account-apikey-2e721c86-2814-4c98-8e1a-fc3fdf6b0489",        "version": 16,        "attributeDefs": [],        "entityTypes": [],        "displayName": "MyTagName", // (2)        "options": {          "color": "Green",          "emoji": "💪",          "imageID": "",          "iconName": "PhRocketLaunch",          "iconType": "emoji"        },        "subTypes": [],        "superTypes": []      }    ],    "entityDefs": [],    "relationshipDefs": [],    "businessMetadataDefs": [] }  ``` |

1. All Atlan tag definitions must be specified within the `classificationDefs` array.
2. In this example, we're updating the following properties of an Atlan tag:

    * display name of the tag.
        * color of the tag.
        * emoji of the tag.

Retrieve Atlan tags[¶](#retrieve-atlan-tags "Permanent link")
-------------------------------------------------------------

[2\.1\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.1.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve Atlan tag by its hashed\-string name eg: `S7qnUqZ5mBMBpzQ3Wzt6yD`:

Java

Python

Kotlin

Raw REST API

| Retrieve existing tag structure | |
| --- | --- |
| ``` 1 ``` | ``` TypeDef atlanTag = client.typeDefs.get("S7qnUqZ5mBMBpzQ3Wzt6yD"); // (1)  ``` |

1. To retrieve the tag, you need to call the `.typeDefs.get()` method on a client, with the hashed\-string name of the tag.

| Retrieve existing tag structure | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() atlan_tag = client.typedef.get_by_name("S7qnUqZ5mBMBpzQ3Wzt6yD") # (1)  ``` |

1. To retrieve the tag, you need to call the `client.typedef.get_by_name()` method with its hashed\-string name.

| Retrieve existing tag structure | |
| --- | --- |
| ``` 1 ``` | ``` val atlanTag = client.typeDefs.get("S7qnUqZ5mBMBpzQ3Wzt6yD"); // (1)  ``` |

1. To retrieve the tag, you need to call the `.typeDefs.get()` method on a client, with the hashed\-string name of the tag.

| GET /api/meta/types/typedef/name/S7qnUqZ5mBMBpzQ3Wzt6yD | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

Atlan tag have a hashed\-string representation

Use their hashed\-string name when retrieving its structure eg: `S7qnUqZ5mBMBpzQ3Wzt6yD`.

Retrieve all Atlan tags[¶](#retrieve-all-atlan-tags "Permanent link")
---------------------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To retrieve all Atlan tags:

Java

Python

Kotlin

Raw REST API

| Retrieve all tag structures | |
| --- | --- |
| ``` 1 ``` | ``` TypeDefResponse atlanTags = client.typeDefs.list(AtlanTypeCategory.CLASSIFICATION); // (1)  ``` |

1. To retrieve all tags, call the `.typeDefs.list()` method on a client, with the category `AtlanTypeCategory.CLASSIFICATION`.

| Retrieve all tag structures | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient() response = client.typedef.get(type_category=AtlanTypeCategory.CLASSIFICATION) # (1) atlan_tags = response.atlan_tag_defs # (2)  ``` |

1. To retrieve all tags, call the `client.typedef.get()` method with the definition category `AtlanTypeCategory.CLASSIFICATION`.
2. Specifically retrieve the list of tags from `TypeDefResponse`.

| Retrieve all tag structures | |
| --- | --- |
| ``` 1 ``` | ``` val atlanTags = client.typeDefs.list(AtlanTypeCategory.CLASSIFICATION) // (1)  ``` |

1. To retrieve all tags, call the `.typeDefs.list()` method on a client, with the category `AtlanTypeCategory.CLASSIFICATION`.

| GET /api/meta/types/typedefs/?type\=CLASSIFICATION | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

Delete Atlan tags[¶](#delete-atlan-tags "Permanent link")
---------------------------------------------------------

[1\.3\.3](https://github.com/atlanhq/atlan-python/releases/tag/1.3.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Delete Atlan tags by its human\-readable name:

Java

Python

Kotlin

Raw REST API

| Delete tag structure | |
| --- | --- |
| ``` 1 ``` | ``` AtlanTagDef.purge(client, "MyTagName"); // (1)  ``` |

1. You only need to call the `AtlanTagDef.purge()` method with the human\-readable name of the tag, and it will be deleted. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete tag structure | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.model.typedef import AtlanTagDef from pyatlan.client.atlan import AtlanClient  client = AtlanClient() client.typedef.purge("MyTagName", AtlanTagDef) # (1)  ``` |

1. You only need to call the `clietn.typedef.purge()` method
with the human\-readable name of the tag, and it will be deleted.

| Delete tag structure | |
| --- | --- |
| ``` 1 ``` | ``` AtlanTagDef.purge(client, "MyTagName") // (1)  ``` |

1. You only need to call the `AtlanTagDef.purge()` method with the hashed\-string name of the tag, and it will be deleted. Because this operation will remove the structure from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| DELETE /api/meta/types/typedef/name/S7qnUqZ5mBMBpzQ3Wzt6yD | |
| --- | --- |
| ``` 1 ``` | ```   ``` |

Atlan tag have a hashed\-string representation

Use their hashed\-string name when deleting its structure eg: `S7qnUqZ5mBMBpzQ3Wzt6yD`.

---

2024\-05\-272025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/tags/manage/) to provide us with more information. 

Back to top

[Previous Tag management](../) [Next Monitor propagation](../monitor-propagation/) 

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

