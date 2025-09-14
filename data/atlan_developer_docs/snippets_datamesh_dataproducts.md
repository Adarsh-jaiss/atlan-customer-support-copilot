# Source URL
https://developer.atlan.com/snippets/datamesh/dataproducts/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/datamesh/dataproducts/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage data products in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage data products in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/datamesh/dataproducts.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Managing data products - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/datamesh/dataproducts/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage data products in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/datamesh/dataproducts.png
meta-twitter:title: Managing data products - Developer
meta-viewport: width=device-width,initial-scale=1
title: Managing data products - Developer
-->

[Skip to content](#manage-data-products) Developer Managing data products Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage data products[¶](#manage-data-products "Permanent link")
===============================================================

Create a new data product[¶](#create-a-new-data-product "Permanent link")
-------------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[2\.0\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.0.4 "Minimum version")

To create a new data product:

Java

Python

Kotlin

Raw REST API

| Create a data product | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` FluentSearch assets = Table.select(client) // (1)     .where(Table.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED))     .where(Table.ATLAN_TAGS.eq("Marketing"))     .build(); DataProduct dp = DataProduct.creator("Marketing Influence", // (2)         DataDomain.refByQualifiedName("default/domain/marketing"), // (3)         assets) // (4)     .build(); // (5) AssetMutationResponse response = dp.save(client); // (6)  ``` |

1. When defining a data product, you must define the assets within it. These are defined through a search, so that the assets included can be automatically managed. In this example, we are selecting all verified tables that have a tag of `Marketing`.
2. You must provide a human\-readable name for your data product.
3. You must also provide the domain in which the data product should exist.
4. And finally the search that was defined earlier, to define which assets to include in the data product.
5. You then need to build the object.
6. And then you can `save()` the object you've built to create the new data product in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a data product | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataProduct, Table from pyatlan.model.fluent_search import CompoundQuery, FluentSearch from pyatlan.model.enums import CertificateStatus  client = AtlanClient()  assets = (   FluentSearch()   .where(CompoundQuery.active_assets())   .where(CompoundQuery.asset_type(Table))   .where(Table.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED.value))   .where(Table.ATLAN_TAGS.eq("Marketing")) ).to_request()  # (1)  product = DataProduct.creator(   name="Marketing Influence",  # (2)   asset_selection=assets,  # (3)   domain_qualified_name="default/domain/marketing"  # (4) )  response = client.asset.save(product)  # (5)  ``` |

1. When defining a data product, you must define the assets within it. These are defined through a search, so that the assets included can be automatically managed. In this example, we are selecting all verified tables that have a tag of `Marketing`.
2. You must provide a human\-readable name for your data product.
3. You must provide the index search request that was defined earlier, to define which assets to include in the data product.
4. You must also provide the domain in which the data product should exist.
5. And then you can `save()` the object you've built to create the new data product in Atlan.

| Create a data product | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val assets = Table.select(client) // (1)     .where(Table.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED))     .where(Table.ATLAN_TAGS.eq("Marketing"))     .build() val dp = DataProduct.creator("Marketing Influence",  // (2)         DataDomain.refByQualifiedName("default/domain/marketing"),  // (3)         assets) // (4)     .build() // (5) val response = dp.save(client) // (6)  ``` |

1. When defining a data product, you must define the assets within it. These are defined through a search, so that the assets included can be automatically managed. In this example, we are selecting all verified tables that have a tag of `Marketing`.
2. You must provide a human\-readable name for your data product.
3. You must also provide the domain in which the data product should exist.
4. And finally the search that was defined earlier, to define which assets to include in the data product.
5. You then need to build the object.
6. And then you can `save()` the object you've built to create the new data product in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ```  {    "entities": [      {        "typeName": "DataProduct", // (1)        "attributes": {          "name": "Marketing Influence", // (2)          "qualifiedName": "default/domain/8S8vbC9hT6iPLMY2ydXqf/super/product/marketingInfluence", // (3)          "parentDomainQualifiedName": "default/domain/8S8vbC9hT6iPLMY2ydXqf/super", // (4)          "superDomainQualifiedName": "default/domain/8S8vbC9hT6iPLMY2ydXqf/super", // (5)          "dataProductAssetsDSL": "{\"query\": {\"attributes\": [\"__traitNames\", \"connectorName\", \"__customAttributes\", \"certificateStatus\", \"tenantId\", \"anchor\", \"parentQualifiedName\", \"Query.parentQualifiedName\", \"AtlasGlossaryTerm.anchor\", \"databaseName\", \"schemaName\", \"parent\", \"connectionQualifiedName\", \"collectionQualifiedName\", \"announcementMessage\", \"announcementTitle\", \"announcementType\", \"announcementUpdatedAt\", \"announcementUpdatedBy\", \"allowQuery\", \"allowQueryPreview\", \"adminGroups\", \"adminRoles\", \"adminUsers\", \"category\", \"credentialStrategy\", \"connectionSSOCredentialGuid\", \"certificateStatus\", \"certificateUpdatedAt\", \"certificateUpdatedBy\", \"classifications\", \"connectionId\", \"connectionQualifiedName\", \"connectorName\", \"dataType\", \"defaultDatabaseQualifiedName\", \"defaultSchemaQualifiedName\", \"description\", \"displayName\", \"links\", \"link\", \"meanings\", \"name\", \"ownerGroups\", \"ownerUsers\", \"qualifiedName\", \"typeName\", \"userDescription\", \"displayDescription\", \"subDataType\", \"rowLimit\", \"queryTimeout\", \"previewCredentialStrategy\", \"policyStrategy\", \"policyStrategyForSamplePreview\", \"useObjectStorage\", \"objectStorageUploadThreshold\", \"outputPortDataProducts\"], \"dsl\": {\"from\": 0, \"query\": {\"bool\": {\"filter\": {\"bool\": {\"filter\": [{\"term\": {\"__state\": {\"value\": \"ACTIVE\", \"case_insensitive\": false}}}, {\"term\": {\"__typeName.keyword\": {\"value\": \"Table\", \"case_insensitive\": false}}}, {\"term\": {\"certificateStatus\": {\"value\": \"VERIFIED\", \"case_insensitive\": false}}}, {\"term\": {\"__traitNames\": {\"value\": \"Marketing\", \"case_insensitive\": false}}}]}}}}}, \"suppressLogs\": true}, \"filterScrubbed\": true}",          // (6)          "dataProductAssetsPlaybookFilter": "{\"condition\":\"AND\",\"isGroupLocked\":false,\"rules\":[]}"          // (7)        },        "relationshipAttributes": {          "dataDomain": {            "typeName": "DataDomain",            "uniqueAttributes": { // (8)              "qualifiedName": "default/domain/8S8vbC9hT6iPLMY2ydXqf/super"            }          }        }      }    ] }  ``` |

1. The `typeName` must be exactly `DataProduct`.
2. Provide a human\-readable name for your data product.
3. Ensure the `qualifiedName` follows the pattern: `<parentDomainQualifiedName>/product/<lowerCamelCaseName>`.
4. Provide a `parentDomainQualifiedName` for the data domain under which you want to create this product.
5. Provide a `superDomainQualifiedName` for the data domain under which you want to create this product. If creating a product under sub\-domains, this should be the qualified name of the root\-level domain.
6. Provide the DSL that defines the assets to include in the data product as an embedded JSON string.

    Use SDK to create data products

    The above data products assets DSL requires a filter as a nested object construct within an outer bool, rather than a list or array. It's recommended to create data products via SDK as it handles this complexity automatically.
7. Specify the default playbook filter to define which assets are shown in the data product UI.
8. Specify the `qualifiedName` of the data domain under which you want to create this product.

Retrieve a data product[¶](#retrieve-a-data-product "Permanent link")
---------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[2\.2\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.2.1 "Minimum version")

To retrieve a data product by its human\-readable name:

Java

Python

Kotlin

Raw REST API

| Retrieve a data product by its human\-readable name | |
| --- | --- |
| ``` 1 2 3 ``` | ``` DataProduct product = DataProduct.findByName( // (1)     client, "marketingInfluence", List.of("certificateStatus") ).get(0);  ``` |

1. Use `DataProduct.findByName()` method to retrieve a data product by its human\-readable name:

    * client through which to access a tenant.
        * name of the data product.
        * (optional) a list of attributes to retrieve for the data product, for example `certificateStatus`.

| Retrieve a data product by its human\-readable name | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataProduct  client = AtlanClient()  product = client.asset.find_product_by_name( # (1)     name="marketingInfluence",     attributes=["certificateStatus"] )  assert product assert product.certificate_status  ``` |

1. Use `client.asset.find_product_by_name()` method to retrieve a data product by its human\-readable name:

    * name of the data product.
        * (optional) a list of attributes to retrieve
        for the data product, for example `certificateStatus`.

| Retrieve a data product by its human\-readable name | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val product = DataProduct.findByName( // (1)     client, "marketingInfluence", listOf("certificateStatus") ).get(0)  ``` |

1. Use `DataProduct.findByName()` method to retrieve a data product by its human\-readable name:

    * client through which to access a tenant.
        * name of the data product.
        * (optional) a list of attributes to retrieve for the data product, for example `certificateStatus`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 ``` | ``` {   "dsl": {     "from": 0,     "size": 100,     "aggregations": {},     "track_total_hits": true,     "query": {       "bool": {         "filter": [           {             "term": {               "name.keyword": {                 "value": "marketingInfluence" // (1)               }             }           },           {             "term": {               "__typeName.keyword": {                 "value": "DataProduct"               }             }           }         ]       }     },     "sort": [       {         "__guid": {           "order": "asc"         }       }     ]   },   "attributes": [     "certificateStatus"  // (2)   ] }  ``` |

1. Human\-readable name of the data product.
2. (optional) a list of attributes to retrieve
for the data product, for example `certificateStatus`.

Retrieve all assets linked to a data product[¶](#retrieve-all-assets-linked-to-a-data-product "Permanent link")
---------------------------------------------------------------------------------------------------------------

[4\.2\.2](https://github.com/atlanhq/atlan-java/releases/tag/v4.2.2 "Minimum version")[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")

To retrieve list of all assets associated with a data product:

Java

Python

Kotlin

Raw REST API

| Retrieve list of all assets linked to a data product | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` DataProduct dp = DataProduct.get(client,                    "49abc625-9a03-4733-bdfb-ec0cb5315cac", true); // (1) IndexSearchResponse response = dp.getAssets(client); // (2) for (Asset result : response) {     // Do something with the assets retrieved... }  ``` |

1. Use `DataProduct.get()` method to retrieve the data product by its `GUID`.
2. Use `DataProduct.getAssets()` method to retrieve all assets linked to the data product, providing the `client` used to access the tenant.

| Retrieve list of all assets linked to a data product | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataProduct  client = AtlanClient()  product = client.asset.get_by_guid( # (1)     guid="49abc625-9a03-4733-bdfb-ec0cb5315cac",     asset_type=DataProduct )  response = product.get_assets(client) # (2)  for assets in response:     // Do something with the assets retrieved...  assert product assert response  ``` |

1. Use `client.asset.get_by_guid()` method to retrieve the data product by its `GUID`.
2. Use `DataProduct.get_assets()` method to retrieve all assets linked to the data product.

| Retrieve list of all assets linked to a data product | |
| --- | --- |
| ``` 1 2 3 4 5 6 ``` | ``` val product = DataProduct.get(client,                "49abc625-9a03-4733-bdfb-ec0cb5315cac", true); // (1) val response = dp.getAssets(client); // (2) for (result in response) {     // Do something with the assets retrieved... }  ``` |

1. Use `DataProduct.get()` method to retrieve the data product by its `GUID`.
2. Use `DataProduct.getAssets()` method to retrieve all assets linked to the data product, providing the `client` used to access the tenant.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 ``` | ``` {   "dsl": {     "from": 0,     "size": 100,     "aggregations": {},     "track_total_hits": true,     "query": {       "bool": {         "filter": {           "bool": {             "filter": [  // (1)               {                 "term": {                   "__state": {                     "value": "ACTIVE",                     "case_insensitive": false                    }                 }               },               {                 "term": {                   "__typeName.keyword": {                     "value": "Table",                      "case_insensitive": false                    }                 }               }             ]         }         }       }     },     "sort": []   },   "attributes": [ // (2)     "certificateStatus","connectorName",      "__customAttributes", "certificateStatus",    ] }  ``` |

1. List the asset type and active status for all assets included in the data product.
2. (optional) a list of attributes to retrieve
for the data product's list of all assets, for example `certificateStatus`.

Update a data product[¶](#update-a-data-product "Permanent link")
-----------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[2\.4\.5](https://github.com/atlanhq/atlan-python/releases/tag/2.4.5 "Minimum version")

To update a data product:

Java

Python

Kotlin

Raw REST API

| Update a data product | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` FluentSearch assets = Table.select(client)       .where(Table.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED))       .where(Table.ATLAN_TAGS.eq("Digital Marketing"))       .build(); // (1)  DataProduct dp = DataProduct.updater("default/product/marketingInfluence", // (2)         "Marketing Influence")     .userDescription("Now with a description!") // (3)     .assetSelection(Atlan.getDefaultClient(), assets)     .build(); // (4) AssetMutationResponse response = dp.save(client); // (5)  ``` |

1. **(Optional)** You can also update the assets within an existing product.
These assets are defined through a search, allowing for automatic management.
In this example, we select all verified tables that are tagged with `Digital Marketing`.
2. Use the `updater()` method to update a data product,
providing the `qualifiedName` and `name` of the data product.
3. You can chain additional enrichments onto the updater, such as:
    * `userDescription`: updating the product's description.
    * `assetSelection`: modifying the assets within the product.
4. You then need to build the object.
5. You can then `save()` the object you've built to update the data product in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update a data product | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataProduct  client = AtlanClient()  assets = (   FluentSearch()   .where(CompoundQuery.active_assets())   .where(CompoundQuery.asset_type(Table))   .where(Table.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED.value))   .where(Table.ATLAN_TAGS.eq("Digital Marketing")) ).to_request()  # (1)  product = DataProduct.updater( # (2)     qualified_name="default/product/marketingInfluence", # (3)     name="Marketing Influence", # (4)     asset_selection=assets, # (5) ) product.user_description = "Now with a description!" # (6)  response = client.asset.save(product) # (7)  ``` |

1. **(Optional)** You can also update the assets within an existing product.
These assets are defined through a search, allowing for automatic management.
In this example, we select all verified tables that are tagged with `Digital Marketing`.
2. Use the `updater()` method to update a data product.
3. You must provide the `qualifiedName` of the data product.
4. You must provide the `name` of the data product.
5. Optionally, you can provide an index search request to define the assets to include in the data product.
6. You can then add on any other updates, such as changing the user description of the data product.
7. To update the data product in Atlan, call the `save()` method with the object you've built.

| Update a data product | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` val assets = Table.select(client)     .where(Table.CERTIFICATE_STATUS.eq(CertificateStatus.VERIFIED))     .where(Table.ATLAN_TAGS.eq("Digital Marketing"))     .build(); // (1)  val dp = DataProduct.updater("default/product/marketingInfluence", // (2)         "Marketing Influence")     .userDescription("Now with a description!") // (3)     .assetSelection(Atlan.getDefaultClient(), assets)     .build() // (4) val response = dp.save(client) // (5)  ``` |

1. **(Optional)** You can also update the assets within an existing product.
These assets are defined through a search, allowing for automatic management.
In this example, we select all verified tables that are tagged with `Digital Marketing`.
2. Use the `updater()` method to update a data product,
providing the `qualifiedName` and `name` of the data product.
3. You can chain additional enrichments onto the updater, such as:
    * `userDescription`: updating the product's description.
    * `assetSelection`: modifying the assets within the product.
4. You then need to build the object.
5. You can then `save()` the object you've built to update the data product in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [     {       "typeName": "DataProduct", // (1)       "attributes": {         "name": "Marketing Influence", // (2)         "qualifiedName": "default/product/marketingInfluence", // (3)         "userDescription": "Now with a description!", // (4)         "dataProductAssetsDSL": "{\"query\": {\"attributes\": [\"__traitNames\", \"connectorName\", \"__customAttributes\", \"certificateStatus\", \"tenantId\", \"anchor\", \"parentQualifiedName\", \"Query.parentQualifiedName\", \"AtlasGlossaryTerm.anchor\", \"databaseName\", \"schemaName\", \"parent\", \"connectionQualifiedName\", \"collectionQualifiedName\", \"announcementMessage\", \"announcementTitle\", \"announcementType\", \"announcementUpdatedAt\", \"announcementUpdatedBy\", \"allowQuery\", \"allowQueryPreview\", \"adminGroups\", \"adminRoles\", \"adminUsers\", \"category\", \"credentialStrategy\", \"connectionSSOCredentialGuid\", \"certificateStatus\", \"certificateUpdatedAt\", \"certificateUpdatedBy\", \"classifications\", \"connectionId\", \"connectionQualifiedName\", \"connectorName\", \"dataType\", \"defaultDatabaseQualifiedName\", \"defaultSchemaQualifiedName\", \"description\", \"displayName\", \"links\", \"link\", \"meanings\", \"name\", \"ownerGroups\", \"ownerUsers\", \"qualifiedName\", \"typeName\", \"userDescription\", \"displayDescription\", \"subDataType\", \"rowLimit\", \"queryTimeout\", \"previewCredentialStrategy\", \"policyStrategy\", \"policyStrategyForSamplePreview\", \"useObjectStorage\", \"objectStorageUploadThreshold\", \"outputPortDataProducts\"], \"dsl\": {\"from\": 0, \"query\": {\"bool\": {\"filter\": {\"bool\": {\"filter\": [{\"term\": {\"__state\": {\"value\": \"ACTIVE\", \"case_insensitive\": false}}}, {\"term\": {\"__typeName.keyword\": {\"value\": \"Table\", \"case_insensitive\": false}}}, {\"term\": {\"certificateStatus\": {\"value\": \"VERIFIED\", \"case_insensitive\": false}}}, {\"term\": {\"__traitNames\": {\"value\": \"Digital Marketing\", \"case_insensitive\": false}}}]}}}}}, \"suppressLogs\": true}, \"filterScrubbed\": true}",          // (5)       }     }   ] }  ``` |

1. The `typeName` must be exactly `DataProduct`.
2. Human\-readable name for your data product.
3. You must provide the the `qualifiedName` of the data product to update.
4. You can add on any other updates, such as changing the user description of the data product.
5. **(Optional)** You can update the product's assets by providing
a DSL that defines the assets to include in the data product, as an embedded JSON string.

    Use SDK to update data products

    The above data products assets DSL requires a filter as a
        nested object construct within an outer bool, rather than a list or array.
        It's recommended to update data products via SDK as it handles this complexity automatically.

Delete a data product[¶](#delete-a-data-product "Permanent link")
-----------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[1\.8\.1](https://github.com/atlanhq/atlan-python/releases/tag/1.8.1 "Minimum version")

### Soft\-delete (archive)[¶](#soft-delete-archive "Permanent link")

To soft\-delete, or archive, a data product:

Java

Python

Kotlin

Raw REST API

| Delete a data product | |
| --- | --- |
| ``` 1 ``` | ``` AssetDeletionResponse response = DataProduct.delete(client, "218c8144-dc39-43a5-b0c0-9eeb4d11e74a"); // (1)  ``` |

1. To archive a data product in Atlan, call the `DataProduct.delete()` method with the GUID of the data product. Because this operation will archive the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete a data product | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  client.asset.delete_by_guid("218c8144-dc39-43a5-b0c0-9eeb4d11e74a") # (1)  ``` |

1. To archive a data product in Atlan, call the `asset.delete_by_guid()` method with the GUID of the data product.

| Delete a data product | |
| --- | --- |
| ``` 1 ``` | ``` val response = DataProduct.delete(client, "218c8144-dc39-43a5-b0c0-9eeb4d11e74a") // (1)  ``` |

1. To archive a data product in Atlan, call the `DataProduct.delete()` method with the GUID of the data product. Because this operation will archive the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| DELETE /api/meta/entity/bulk?guid\=218c8144\-dc39\-43a5\-b0c0\-9eeb4d11e74a\&deleteType\=SOFT | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All the details for deleting the data product are specified in the URL directly. Note that you must provide the GUID of the data product to delete it.

### Hard\-delete (purge)[¶](#hard-delete-purge "Permanent link")

To permanently delete (purge) a data product:

Java

Python

Kotlin

Raw REST API

| Delete a data product | |
| --- | --- |
| ``` 1 ``` | ``` AssetDeletionResponse response = DataProduct.purge(client, "218c8144-dc39-43a5-b0c0-9eeb4d11e74a"); // (1)  ``` |

1. To permanently delete a data product in Atlan, call the `DataProduct.purge()` method with the GUID of the data product. Because this operation will remove the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete a product | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  client.asset.purge_by_guid("218c8144-dc39-43a5-b0c0-9eeb4d11e74a") # (1)  ``` |

1. To permanently delete a data product in Atlan, call the `asset.purge_by_guid()` method with the GUID of the data product.

| Delete a data product | |
| --- | --- |
| ``` 1 ``` | ``` val response = DataProduct.purge(client, "218c8144-dc39-43a5-b0c0-9eeb4d11e74a") // (1)  ``` |

1. To permanently delete a data product in Atlan, call the `DataProduct.purge()` method with the GUID of the data product. Because this operation will remove the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| DELETE /api/meta/entity/bulk?guid\=218c8144\-dc39\-43a5\-b0c0\-9eeb4d11e74a\&deleteType\=PURGE | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All the details for deleting the data product are specified in the URL directly. Note that you must provide the GUID of the data product to delete it.

---

2023\-11\-272025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/datamesh/dataproducts/) to provide us with more information. 

Back to top

[Previous Manage data domains](../datadomains/) [Next Data contracts](../../datacontract/) 

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

