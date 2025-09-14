# Source URL
https://developer.atlan.com/snippets/common-examples/domain-assignment/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/domain-assignment/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to add, retrieve, remove an asset from a data domain in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to add, retrieve, remove an asset from a data domain in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/domain-assignment.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Link data domain and assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/domain-assignment/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to add, retrieve, remove an asset from a data domain in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/domain-assignment.png
meta-twitter:title: Link data domain and assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Link data domain and assets - Developer
-->

[Skip to content](#link-domain-and-assets) Developer Link data domain and assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Link domain and assets[¶](#link-domain-and-assets "Permanent link")
===================================================================

Link your asset to a domain for easy discovery and governance.

Add an asset to a domain[¶](#add-an-asset-to-a-domain "Permanent link")
-----------------------------------------------------------------------

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can add an asset to a domain or update an existing domain by updating the asset's `domainGUIDs`.
In the example below, we're adding a Table (`MARKETING_SALES`) to the domain (`Marketing`).

dbt

Java

Python

Kotlin

Raw REST API

| Add an asset to a domain | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` models:   - name: MARKETING_SALES # (1)     meta:       atlan:         domainName: "Marketing" # (2)  ``` |

1. You must give the name of the object.
2. You can specify the domain as a human\-readable name. Each asset can be assigned to only one domain. You can also replace an existing domain assignment by updating the `domainName` to a different domain.

| Add an asset to a domain | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` DataDomain domain = DataDomain.findByName(client, "Marketing").get(0); // (1)  Table table = Table.updater( // (2)         "default/snowflake/1726834662/RAW/WIDEWORLDIMPORTERS/MARKETING_SALES",         "MARKETING_SALES")     .domainGUID(domain.getGuid()) // (3)     .build();  AssetMutationResponse response = table.save(client); // (4)  ``` |

1. You can retrieve a data domain by its human\-readable `name` using the `findByName()` method. Because this operation will look up the domain in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Use the `updater()` method of an asset by providing its `qualifiedName` and `name`.
3. To add the asset to the domain, assign the `guid` of the domain to the `domainGUID` attribute.
4. Finally, call the `save()` method to apply the changes in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add an asset to a domain | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table,   client = AtlanClient()  domain = client.asset.find_domain_by_name("Marketing") # (1)  table = Table.updater( # (2)     qualified_name="default/snowflake/1726834662/RAW/WIDEWORLDIMPORTERS/MARKETING_SALES",     name="MARKETING_SALES", ) table.domain_g_u_i_ds = [domain.guid]  # (3)  client.asset.save(table)  # (4)  ``` |

1. You can retrieve a data domain by its human\-readable `name` using the `find_domain_by_name()` method.
2. Use the `updater()` method of an asset by providing its `qualifiedName` and `name`.
3. To add the asset to the domain, assign the `guid` of the domain to the `asset.domain_g_u_i_ds` attribute.
4. Finally, call the `save()` method to apply the changes in Atlan.

| Add an asset to a domain | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` val domain = DataDomain.findByName(client, "Marketing")[0] // (1)  val table = Table.updater( // (2)         "default/snowflake/1726834662/RAW/WIDEWORLDIMPORTERS/MARKETING_SALES",         "MARKETING_SALES")     .domainGUID(domain.getGuid()) // (3)     .build()  val response = table.save(client) // (4)  ``` |

1. You can retrieve a data domain by its human\-readable `name` using the `findByName()` method. Because this operation will look up the domain in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Use the `updater()` method of an asset by providing its `qualifiedName` and `name`.
3. To add the asset to the domain, assign the `guid` of the domain to the `asset.domainGUID` attribute.
4. Finally, call the `save()` method to apply the changes in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {   "entities": [      {        "typeName": "Table",  // (1)        "attributes": {          "qualifiedName": "default/snowflake/1726834662/RAW/WIDEWORLDIMPORTERS/MARKETING_SALES", // (2)          "name": "MARKETING_SALES", // (3)          "domainGUIDs": [            "db711647-99a9-4c50-93c5-fab0b992a0cc" // (4)          ]        }      }    ]  }  ``` |

1. You need to specify the `typeName` of the asset;
for this example, we're updating the `domainGUIDs` for a Snowflake table.
2. You need to specify the `qualifiedName` of the asset.
3. You need to specify the `name` of the asset.
4. To add the asset to the domain, assign the `guid` of the domain to the `domainGUIDs` property.

Retrieve Assets by Domain[¶](#retrieve-assets-by-domain "Permanent link")
-------------------------------------------------------------------------

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can retrieve all assets associated with a domain by filtering on the `domainGUIDs`. 
In the example below, we retrieve all assets linked to the (`Marketing`) domain.

Java

Python

Kotlin

| Retrieve assets from a domain | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` String domainName = "Marketing"; DataDomain domain = DataDomain.findByName(client, domainName).get(0); // (1) String domainGuid = domain.getGuid(); List<Asset> result = client.assets.select()         .where(Asset.DOMAIN_GUIDS.eq(domainGuid)) // (2)         .includeOnResults(Asset.NAME)         .includeOnResults(Asset.QUALIFIED_NAME) // (3)         .stream()         .toList();  result.forEach(asset -> { // (4)     System.out.println("Asset Name: " + asset.getName());     System.out.println("Qualified Name: " + asset.getQualifiedName()); });  ``` |

1. You can retrieve a data domain by its human\-readable `name` using the `findByName()` method. Because this operation will look up the domain in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Query all assets linked to the domain using client.assets.select().where(Asset.DOMAIN\_GUIDS.eq(domainGuid)).
3. Include specific attributes (e.g., Asset.NAME, Asset.QUALIFIED\_NAME) in the results using .includeOnResults().
4. Process the retrieved assets and print any specific attributes you need, such as name and qualifiedName in this example.

| Retrieve assets from a domain | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Asset, Readme from pyatlan.model.fluent_search import CompoundQuery, FluentSearch  client = AtlanClient()  domain_name = "Marketing" domain = client.asset.find_domain_by_name(domain_name) # (1)  domain_guid = domain.guid response = ( # (2)     FluentSearch()     .select()     .where(Asset.DOMAIN_GUIDS.eq(domain_guid))     .include_on_results(Asset.NAME) # (3)     .include_on_results(Asset.QUALIFIED_NAME)     .execute(client=client) ) for asset in response: # (4)         print(f"Name: {asset.name}, Qualified Name: {asset.qualified_name}")  ``` |

1. You can retrieve a data domain by its human\-readable `name` using the `find_domain_by_name()` method.
2. Query all assets linked to the domain using FluentSearch.select().where(Asset.DOMAIN\_GUIDS.eq(domain\_guid)).
3. Include specific attributes (e.g., Asset.NAME, Asset.QUALIFIED\_NAME) in the results using .include\_on\_results().
4. Process the retrieved assets and print any specific attributes you need, such as name and qualifiedName in this example.

| Retrieve assets from a domain | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` val domainName = "Marketing" val domain = DataDomain.findByName(client, domainName)[0] // (1) val domainGuid = domain.guid val result = client.assets //(2)         .select()         .where(Asset.DOMAIN_GUIDS.eq(domainGuid))         .includeOnResults(Asset.NAME)  // (3)         .includeOnResults(Asset.QUALIFIED_NAME)         .stream()         .toList() for (assets in result) { //(4)   println("Asset Name:" + assets.name)   println("Asset Qualified Name:" + assets.qualifiedName)         }  ``` |

1. You can retrieve a data domain by its human\-readable `name` using the `findByName()` method. Because this operation will look up the domain in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Query all assets linked to the domain using FluentSearch.search().where(Asset.DOMAIN\_GUIDS.eq(domainGuid)).
3. Include specific attributes (e.g., Asset.NAME, Asset.QUALIFIED\_NAME) in the results using .includeOnResults().
4. Process the retrieved assets and print any specific attributes you need, such as name and qualifiedName in this example.

Remove an asset from a domain[¶](#remove-an-asset-from-a-domain "Permanent link")
---------------------------------------------------------------------------------

[3\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/3.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

You can remove an asset from a domain by updating the asset's `domainGUIDs`.
In the example below, we're removing a table (`MARKETING_SALES`) asset from the existing linked domain.

dbt

Java

Python

Kotlin

Raw REST API

| Remove an asset from a domain | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` models:   - name: MARKETING_SALES # (1)     meta:       atlan:         domainName: "" # (2)  ``` |

1. You must give the name of the object.
2. To remove the asset from the domain, set the `domainName` to an empty string.

| Remove an asset from a domain | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` Table table = Table.updater( // (1)         "default/snowflake/1726834662/RAW/WIDEWORLDIMPORTERS/MARKETING_SALES",         "MARKETING_SALES")     .nullField(Table.DOMAIN_GUIDS.getAtlanFieldName()) // (2)     .build();  AssetMutationResponse response = table.save(client); // (3)  ``` |

1. Use the `updater()` method of an asset by providing its `qualifiedName` and `name`.
2. To remove the asset from the domain, set the `domainGUIDs` field as a `nullField` on the builder.
3. Finally, call the `save()` method to apply the changes in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Remove an asset from a domain | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table,   client = AtlanClient()  table = Table.updater( # (1)     qualified_name="default/snowflake/1726834662/RAW/WIDEWORLDIMPORTERS/MARKETING_SALES",     name="MARKETING_SALES", ) table.domain_g_u_i_ds = []  # (2)  client.asset.save(table)  # (3)  ``` |

1. Use the `updater()` method of an asset by providing its `qualifiedName` and `name`.
2. To remove the asset from the domain, assign the `domain_g_u_i_ds` of the asset to an empty list ie.`[]`.
3. Finally, call the `save()` method to apply the changes in Atlan.

| Remove an asset from a domain | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 ``` | ``` val table = Table.updater( // (1)         "default/snowflake/1726834662/RAW/WIDEWORLDIMPORTERS/MARKETING_SALES",         "MARKETING_SALES")     .nullField(Table.DOMAIN_GUIDS.atlanFieldName) // (2)     .build()  val response = table.save(client) // (3)  ``` |

1. Use the `updater()` method of an asset by providing its `qualifiedName` and `name`.
2. To remove the asset from the domain, set the `domainGUIDs` field as a `nullField` on the builder.
3. Finally, call the `save()` method to apply the changes in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [      {        "typeName": "Table",  // (1)        "attributes": {          "qualifiedName": "default/snowflake/1726834662/RAW/WIDEWORLDIMPORTERS/MARKETING_SALES", // (2)          "name": "MARKETING_SALES", // (3)          "domainGUIDs": [] // (4)        }      }    ]  }  ``` |

1. You need to specify the `typeName` of the asset;
for this example, we're updating the `domainGUIDs` for a Snowflake table.
2. You need to specify the `qualifiedName` of the asset.
3. You need to specify the `name` of the asset.
4. To remove the asset from the domain, assign the `domainGUIDs` property of the asset to the empty array.

---

2024\-09\-242025\-06\-25

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/domain-assignment/) to provide us with more information. 

Back to top

[Previous Link terms to assets](../term-assignment/) [Next Manage asset READMEs](../readme/) 

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

