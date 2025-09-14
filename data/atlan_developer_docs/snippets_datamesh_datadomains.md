# Source URL
https://developer.atlan.com/snippets/datamesh/datadomains/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/datamesh/datadomains/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to manage data domains in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to manage data domains in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/datamesh/datadomains.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Managing data domains - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/datamesh/datadomains/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to manage data domains in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/datamesh/datadomains.png
meta-twitter:title: Managing data domains - Developer
meta-viewport: width=device-width,initial-scale=1
title: Managing data domains - Developer
-->

[Skip to content](#manage-data-domains) Developer Managing data domains Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage data domains[¶](#manage-data-domains "Permanent link")
=============================================================

Create a new data domain[¶](#create-a-new-data-domain "Permanent link")
-----------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[2\.0\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.0.4 "Minimum version")

To create a new data domain:

Java

Python

Kotlin

Raw REST API

| Create a data domain | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` DataDomain domain = DataDomain.creator("Marketing") // (1)     .assetIcon(AtlanIcon.ROCKET) // (2)     .assetThemeHex(AtlanMeshColor.MAGENTA)     .build(); // (3) AssetMutationResponse response = domain.save(client); // (4)  ``` |

1. You must provide a human\-readable name for your data domain.
2. You can chain onto the creator any other enrichment, for example choosing a different icon or color to represent the domain.
3. You then need to build the object.
4. You can then `save()` the object you've built to create the new data domain in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a data domain | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataDomain from pyatlan.model.enums import AtlanIcon, AtlanMeshColor  client = AtlanClient()  domain = DataDomain.creator(     name="Marketing",  # (1) ) domain.asset_icon = AtlanIcon.ROCKET  # (2) domain.asset_theme_hex = AtlanMeshColor.MAGENTA  response = client.asset.save(domain)  # (3)  ``` |

1. You must provide a human\-readable name for your data domain.
2. You can apply any other enrichment, for example choosing a different icon or color to represent the domain.
3. You can then `save()` the object to create the new data domain in Atlan.

| Create a data domain | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val domain = DataDomain.creator("Marketing") // (1)     .assetIcon(AtlanIcon.ROCKET) // (2)     .assetThemeHex(AtlanMeshColor.MAGENTA)     .build() // (3) val response = domain.save(client) // (4)  ``` |

1. You must provide a human\-readable name for your data domain.
2. You can chain onto the creator any other enrichment, for example choosing a different icon or color to represent the domain.
3. You then need to build the object.
4. You can then `save()` the object you've built to create the new data domain in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [     {       "typeName": "DataDomain", // (1)       "attributes": {         "name": "Marketing", // (2)         "assetIcon": "PhRocket", // (3)         "assetThemeHex": "#F34D77",         "qualifiedName": "default/domain/marketing" // (4)       }     }   ] }  ``` |

1. The `typeName` must be exactly `DataDomain`.
2. Human\-readable name for your data domain.
3. You can specify other enrichment, for example choosing a different icon or color to represent the domain.
4. The `qualifiedName` should follow the pattern: `default/domain/<lowerCamelCaseName>`.

Create a new subdomain[¶](#create-a-new-subdomain "Permanent link")
-------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")

To create a new subdomain:

Java

Python

Kotlin

Raw REST API

| Create a subdomain | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` DataDomain sub = DataDomain.creator("Social Marketing", // (1)     DataDomain.refByQualifiedName("default/domain/marketing")) // (2)     .build(); // (3) AssetMutationResponse response = sub.save(client); // (4)  ``` |

1. You must provide a human\-readable name for your data domain.
2. To create subdomain, you must provide the parent domain with at least its `qualifiedName`.
3. You can chain on other enrichment, like above, but ultimately then need to build the object.
4. You can then `save()` the object you've built to create the new data subdomain in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a subdomain | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataDomain  client = AtlanClient()  sub_domain = DataDomain.creator(     name="Social Marketing",  # (1)     parent_domain_qualified_name="default/domain/marketing",  # (2) ) response = client.asset.save(sub_domain)  ``` |

1. Human\-readable name for your data domain.
2. To create subdomain, you must provide the parent domain `qualifiedName`.

| Create a subdomain | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val sub = DataDomain.creator("Social Marketing",  // (1)     DataDomain.refByQualifiedName("default/domain/marketing")) // (2)     .build() // (3) val response = sub.save(client) // (4)  ``` |

1. You must provide a human\-readable name for your data domain.
2. To create subdomain, you must provide the parent domain with at least its `qualifiedName`.
3. You can chain on other enrichment, like above, but ultimately then need to build the object.
4. You can then `save()` the object you've built to create the new data subdomain in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {   "entities": [     {       "typeName": "DataDomain", // (1)       "attributes": {         "name": "Social Marketing", // (2)         "qualifiedName": "default/domain/gAbQGZNrFjG2F9lGB3hYp/super/domain/socialMarketing", // (3)         "parentDomainQualifiedName": "default/domain/gAbQGZNrFjG2F9lGB3hYp/super", // (4)         "superDomainQualifiedName": "default/domain/gAbQGZNrFjG2F9lGB3hYp/super" // (5)       },       "relationshipAttributes": {         "parentDomain": { // (6)           "typeName": "DataDomain",           "uniqueAttributes": {             "qualifiedName": "default/domain/gAbQGZNrFjG2F9lGB3hYp"           }         }       }     }   ] }  ``` |

1. The `typeName` must be exactly `DataDomain`.
2. Human\-readable name for your data sub\-domain.
3. The `qualifiedName` should follow the pattern: `<parentQualifiedName>/domain/<lowerCamelCaseName>`.
4. You must provide the `qualifiedName` of the parent domain.
5. Provide a `superDomainQualifiedName` for the data domain under which you want to create this sub\-domain.
If creating a sub\-domain under another sub\-domains (ie. nested sub\-domains), this should be the qualified name of the root\-level domain.
6. You must also specify a relationship to the parent domain, in this example through its `qualifiedName`.

Retrieve a data domain[¶](#retrieve-a-data-domain "Permanent link")
-------------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[2\.2\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.2.1 "Minimum version")

To retrieve a data domain by its human\-readable name:

Java

Python

Kotlin

Raw REST API

| Retrieve a data domain by its human\-readable name | |
| --- | --- |
| ``` 1 2 3 ``` | ``` DataDomain domain = DataDomain.findByName( // (1)     client, "marketing", List.of("certificateStatus") ).get(0);  ``` |

1. Use `DataDomain.findByName()` method to retrieve a data domain by its human\-readable name:

    * client through which to access a tenant.
        * name of the data domain.
        * (optional) a list of attributes to retrieve for the data domain, for example `certificateStatus`.

| Retrieve a data domain by its human\-readable name | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataDomain  client = AtlanClient()  domain = client.asset.find_domain_by_name( # (1)     name="marketing",     attributes=["certificateStatus"] )  assert domain assert domain.certificate_status  ``` |

1. Use `client.asset.find_domain_by_name()` method to retrieve a data domain by its human\-readable name:

    * name of the data domain.
        * (optional) a list of attributes to retrieve
        for the data domain, for example `certificateStatus`.

| Retrieve a data domain by its human\-readable name | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val domain = DataDomain.findByName( // (1)     client, "marketing", listOf("certificateStatus") ).get(0)  ``` |

1. Use `DataDomain.findByName()` method to retrieve a data domain by its human\-readable name:

    * client through which to access a tenant.
        * name of the data domain.
        * (optional) a list of attributes to retrieve for the data domain, for example `certificateStatus`.

| POST /api/meta/search/indexsearch | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 ``` | ``` {   "dsl": {     "from": 0,     "size": 100,     "aggregations": {},     "track_total_hits": true,     "query": {       "bool": {         "filter": [           {             "term": {               "name.keyword": {                 "value": "marketing" // (1)               }             }           },           {             "term": {               "__typeName.keyword": {                 "value": "DataDomain"               }             }           }         ]       }     },     "sort": [       {         "__guid": {           "order": "asc"         }       }     ]   },   "attributes": [     "certificateStatus"  // (2)   ] }  ``` |

1. Human\-readable name of the data domain.
2. (optional) a list of attributes to retrieve
for the data domain, for example `certificateStatus`.

Update a data domain[¶](#update-a-data-domain "Permanent link")
---------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")

To update a data domain or subdomain:

Java

Python

Kotlin

Raw REST API

| Update a data domain | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` DataDomain domain = DataDomain.updater("default/domain/marketing", // (1)         "Marketing")     .userDescription("Now with a description!") // (2)     .build(); // (3) AssetMutationResponse response = domain.save(client); // (4)  ``` |

1. Use the `updater()` method to update a data domain, providing the `qualifiedName` and name of the data domain.
2. You can chain onto the updater any other enrichment, for example changing the domain's description.
3. You then need to build the object.
4. You can then `save()` the object you've built to update the data domain in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update a data domain | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataDomain  client = AtlanClient()  data_domain = DataDomain.updater( # (1)     qualified_name="default/domain/marketing", # (2)     name="Marketing", # (3) ) data_domain.user_description = "Now with a description!" # (4)  response = client.asset.save(data_domain)  # (5)  ``` |

1. Use the `updater()` method to update a data domain.
2. You must provide the `qualifiedName` of the data domain.
3. You must provide the `name` of the data domain.
4. You can then add on any other updates, such as changing the user description of the data domain.
5. To update the data domain in Atlan, call the `save()` method with the object you've built.

| Update a data domain | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val domain = DataDomain.updater("default/domain/marketing",  // (1)         "Marketing")     .userDescription("Now with a description!") // (2)     .build() // (3) val response = domain.save(client) // (4)  ``` |

1. Use the `updater()` method to update a data domain, providing the `qualifiedName` and name of the data domain.
2. You can chain onto the updater any other enrichment, for example changing the domain's description.
3. You then need to build the object.
4. You can then `save()` the object you've built to update the data domain in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [     {       "typeName": "DataDomain", // (1)       "attributes": {         "name": "Marketing", // (2)         "qualifiedName": "default/domain/marketing", // (3)         "userDescription": "Now with a description!" // (4)       },     }   ] }  ``` |

1. The `typeName` must be exactly `DataDomain`.
2. Human\-readable name for your data domain.
3. You must provide the the `qualifiedName` of the domain to update.
4. You can add on any other updates, such as changing the user description of the data domain.

Delete a data domain[¶](#delete-a-data-domain "Permanent link")
---------------------------------------------------------------

[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")[1\.8\.1](https://github.com/atlanhq/atlan-python/releases/tag/1.8.1 "Minimum version")

### Soft\-delete (archive)[¶](#soft-delete-archive "Permanent link")

To soft\-delete, or archive, a data domain:

Java

Python

Kotlin

Raw REST API

| Delete a data domain | |
| --- | --- |
| ``` 1 ``` | ``` AssetDeletionResponse response = DataDomain.delete(client, "218c8144-dc39-43a5-b0c0-9eeb4d11e74a"); // (1)  ``` |

1. To archive a data domain in Atlan, call the `DataDomain.delete()` method with the GUID of the data domain. Because this operation will archive the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Delete a data domain | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  client.asset.delete_by_guid("218c8144-dc39-43a5-b0c0-9eeb4d11e74a") # (1)  ``` |

1. To archive a data domain in Atlan, call the `asset.delete_by_guid()` method with the GUID of the data domain.

| Delete a data domain | |
| --- | --- |
| ``` 1 ``` | ``` val response = DataDomain.delete(client, "218c8144-dc39-43a5-b0c0-9eeb4d11e74a") // (1)  ``` |

1. To archive a data domain in Atlan, call the `DataDomain.delete()` method with the GUID of the data domain. Because this operation will archive the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| DELETE /api/meta/entity/bulk?guid\=218c8144\-dc39\-43a5\-b0c0\-9eeb4d11e74a\&deleteType\=SOFT | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All the details for deleting the data domain are specified in the URL directly. Note that you must provide the GUID of the data domain to delete it.

### Hard\-delete (purge)[¶](#hard-delete-purge "Permanent link")

To permanently delete (purge) a data domain:

Java

Python

Kotlin

Raw REST API

| Purge a data domain | |
| --- | --- |
| ``` 1 ``` | ``` AssetDeletionResponse response = DataDomain.purge(client, "218c8144-dc39-43a5-b0c0-9eeb4d11e74a"); // (1)  ``` |

1. To permanently delete a data domain in Atlan, call the `DataDomain.purge()` method with the GUID of the data domain. Because this operation will remove the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Purge a data domain | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  client.asset.purge_by_guid("218c8144-dc39-43a5-b0c0-9eeb4d11e74a") # (1)  ``` |

1. To permanently delete a data domain in Atlan, call the `asset.purge_by_guid()` method with the GUID of the data domain.

| Purge a data domain | |
| --- | --- |
| ``` 1 ``` | ``` val response = DataDomain.purge("218c8144-dc39-43a5-b0c0-9eeb4d11e74a") // (1)  ``` |

1. To permanently delete a data domain in Atlan, call the `DataDomain.purge()` method with the GUID of the data domain. Because this operation will remove the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| DELETE /api/meta/entity/bulk?guid\=218c8144\-dc39\-43a5\-b0c0\-9eeb4d11e74a\&deleteType\=PURGE | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All the details for deleting the data domain are specified in the URL directly. Note that you must provide the GUID of the data domain to delete it.

---

2023\-11\-302025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/datamesh/datadomains/) to provide us with more information. 

Back to top

[Previous Data mesh](../) [Next Manage data products](../dataproducts/) 

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

