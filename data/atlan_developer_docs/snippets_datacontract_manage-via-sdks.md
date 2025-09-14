# Source URL
https://developer.atlan.com/snippets/datacontract/manage-via-sdks/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/datacontract/manage-via-sdks/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to manage data contracts for assets via SDKs.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to manage data contracts for assets via SDKs.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/datacontract/manage-via-sdks.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage data contracts via SDKs - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/datacontract/manage-via-sdks/
meta-twitter:card: summary_large_image
meta-twitter:description: How to manage data contracts for assets via SDKs.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/datacontract/manage-via-sdks.png
meta-twitter:title: Manage data contracts via SDKs - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage data contracts via SDKs - Developer
-->

[Skip to content](#manage-data-contracts-via-sdks) Developer Manage data contracts via SDKs Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Manage data contracts via SDKs[¶](#manage-data-contracts-via-sdks "Permanent link")
===================================================================================

Limited availability

Data contracts can currently only be managed for [tables](../../../models/entities/table/), [views](../../../models/entities/view/),
and [materialized views](../../../models/entities/materialisedview/).

Create a new contract[¶](#create-a-new-contract "Permanent link")
-----------------------------------------------------------------

[2\.5\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.5.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a [contract](../../../reference/specs/datacontracts/) for an existing asset in Atlan:

Java

Python

Kotlin

Raw REST API

| Create a data contract | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` Table asset = Table.updater("default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN", "SALE_TXN")     .build(); String spec = client     .contracts.generateInitialSpec(asset); // (1) DataContractSpec dcs = DataContractSpec.fromString(spec) // (2)     .toBuilder()     .description("Changed description.")     .extraProperty("something", "extra")     .build(); DataContract contract = DataContract.creator(spec, asset) // (3)     .build(); AssetMutationResponse response = contract.save(client); // (4)  ``` |

1. Start by initializing a data contract. You can use the `.contracts.generateInitialSpec()` on any Atlan client to generate the initial YAML data contract specification for a given asset.
2. (Optional) You can translate the YAML string representation into a specification object that you can then programmatically extend, without needing to do direct string manipulations.

    Loses all comments

    Be aware that doing this conversion will remove any comments in the YAML.
3. You need to provide the contract specification (YAML), as a string, and the asset the contract will govern to the `DataContract.creator()` method.

    Converting an object into the string form

    If you programmatically modified the specification as an object, you can convert it back to its YAML string form simply by calling `.toString()` on the object. You are always asked to provide the YAML string form here to ensure that if you want to keep any comments, you have the option to do so (since the object form removes any comments).
4. Finally, you can call the `save()` method to create the new data contract in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a data contract | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` from pyatlan.model.assets import Table from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataContract from pyatlan.model.contract import DataContractSpec  client = AtlanClient()  asset = Table.updater(     qualified_name="default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN",      name="SALE_TXN" )  spec = client.contracts.generate_initial_spec(asset) # (1)  contract_spec = DataContractSpec.from_yaml(spec) # (2) contract_spec.description = "Changed description." contract_spec.extra_properties = {"something" : "extra"}  contract = DataContract.creator( # (3)     asset_qualified_name=asset.qualified_name,     contract_spec=contract_spec, )  response = client.asset.save(contract) # (4)  ``` |

1. Start by initializing a data contract. You can use the `.contracts.generate_initial_spec()` on any Atlan client to generate the initial YAML data contract specification for a given asset.
2. (Optional) You can translate the YAML string representation into a specification object
that you can then programmatically extend, without needing to do direct string manipulations.

    Loses all comments

    Be aware that doing this conversion will remove any comments in the YAML.
3. You need to provide the contract specification (YAML), as a string,
and the asset the contract will govern to the `DataContract.creator()` method.
4. Finally, you can call the `save()` method to create the new data contract in Atlan.

| Create a data contract | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` val asset = Table.updater("default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN", "SALE_TXN")     .build() val spec = client     .contracts.generateInitialSpec(asset) // (1) val dcs = DataContractSpec.fromString(spec) // (2)     .toBuilder()     .description("Changed description.")     .extraProperty("something", "extra")     .build() val contract = DataContract.creator(spec, asset) // (3)     .build() val response = contract.save(client) // (4)  ``` |

1. Start by initializing a data contract. You can use the `.contracts.generateInitialSpec()` on any Atlan client to generate the initial YAML data contract specification for a given asset.
2. (Optional) You can translate the YAML string representation into a specification object that you can then programmatically extend, without needing to do direct string manipulations.

    Loses all comments

    Be aware that doing this conversion will remove any comments in the YAML.
3. You need to provide the contract specification (YAML), as a string, and the asset the contract will govern to the `DataContract.creator()` method.

    Converting an object into the string form

    If you programmatically modified the specification as an object, you can convert it back to its YAML string form simply by calling `.toString()` on the object. You are always asked to provide the YAML string form here to ensure that if you want to keep any comments, you have the option to do so (since the object form removes any comments).
4. Finally, you can call the `save()` method to create the new data contract in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` { "entities": [     {        "typeName": "DataContract", // (1)        "attributes": { // (2)            "dataContractJson": "{\"type\": \"Table\", \"status\": \"DRAFT\", \"kind\": \"DataContract\", \"dataset\": \"SALE_TXN\", \"data_source\": \"snowflake\", \"description\": \"Created by Python SDK.\", \"columns\": [{\"name\": \"order_id\", \"data_type\": \"BIGNUMERIC\", \"description\": \"\"}]}",            "name": "Data contract for SALE_TXN", // (3)            "qualifiedName": "default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/contract" // (4)        }     } ] }  ``` |

1. The `typeName` must be exactly `DataContract`.
2. Provide the data contract JSON. In this example, we're creating it with only the minimal required properties as specified by the API. Please check the reference section for the complete [data contract specification](../../../reference/specs/datacontracts/).

    * type of the asset in Atlan (`Table`, `View`, or `MaterializedView`).
        * state of the contract (`DRAFT` or `VERIFIED`).
        * must always be `DataContract`.
        * name of the asset as it exists inside Atlan.
        * name of the asset connection as it exists inside Atlan.
        * (Optional) description of this dataset, for documentation purposes.
        * (Optional) `columns`:
            + name of the column as it is defined in the source system (often technical).
            + physical data type of values in this column.
            + description of this column, for documentation purposes.
3. You must provide a human\-readable name for your contract.
4. The `qualifiedName` should follow the pattern: `<assetQualifiedName>/contract` (where `assetQualifiedName` is, in this example, the `qualifiedName` of a Snowflake table).

Retrieve a contract[¶](#retrieve-a-contract "Permanent link")
-------------------------------------------------------------

[2\.2\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.2.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

### By asset:[¶](#by-asset "Permanent link")

To retrieve the latest contract and certified
contract of a given asset using its qualified name:

Java

Python

Kotlin

Raw REST API

| Retrieve latest and certified data contract of a asset | |
| --- | --- |
| ``` 1 2 3 ``` | ``` Table table = Table.get(client, "default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN", true); // (1) DataContract latest = table.getDataContractLatest(); // (2) DataContract certified  = table.getDataContractLatestCertified(); // (3)  ``` |

1. First, retrieve the asset by its `qualifiedName`. Because this operation will retrieve the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Retrieve the latest data contract by using `.getDataContractLatest()`.
3. Retrieve the certified data contract by using the `.getDataContractLatestCertified()`.

| Retrieve latest and certified data contract of a asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataContract  client = AtlanClient()  table = client.asset.get_by_qualified_name( # (1)     asset_type=Table,     qualified_name="default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN" )  latest_contract = table.data_contract_latest # (2) certified_contract  = table.data_contract_latest_certified # (3)  ``` |

1. First, retrieve the asset by its `qualified_name`.
2. Retrieve the latest data contract by using the `table.data_contract_latest` attribute.
3. Retrieve the certified data contract by using the `table.data_contract_latest_certified` attribute.

| Retrieve latest and certified data contract of a asset | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val table = Table.get(client, "default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN", true) // (1) val latest = table.dataContractLatest // (2) val certified  = table.dataContractLatestCertified // (3)  ``` |

1. First, retrieve the asset by its `qualifiedName`. Because this operation will retrieve the asset from Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Retrieve the latest data contract by using `.dataContractLatest`.
3. Retrieve the certified data contract by using the `.dataContractLatestCertified`.

| GET /api/meta/entity/uniqueAttribute/type/Table?attr%3AqualifiedName\=default%2Fsnowflake%2F1717514525%2FRAW%2FWIDEWORLD%2FSALE\_TXN\&minExtInfo\=False\&ignoreRelationships\=False | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    URL\-encoded filter

    Note that the filter is URL\-encoded. [decoded it would be](https://www.urldecoder.org): `/api/meta/entity/uniqueAttribute/type/Table?attr:qualifiedName=default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN&minExtInfo=False&ignoreRelationships=False`

### By qualified name:[¶](#by-qualified-name "Permanent link")

To retrieve a contract by its version (`V1`, `V2`, etc) using its qualified name:

Java

Python

Kotlin

Raw REST API

| Retrieve a data contract by its version | |
| --- | --- |
| ``` 1 2 3 ``` | ``` DataContract contract = DataContract.get( // (1)!     client, "default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/Table/contract/V1" );  ``` |

1. The `qualifiedName` of the data contract must be in the format: `<assetQualifiedName>/<assetType>/contract/V<versionNumber>`. For this example:
    * `assetQualifiedName`: `qualifiedName` of a Snowflake table.
    * `assetType`: type of this asset in Atlan, i.e: `Table`.
    * `versionNumber`: specific version of the data contract to retrieve, e.g: `1`, `2`, and so on.

| Retrieve a data contract by its version | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 9 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataContract  client = AtlanClient()  contract = client.asset.get_by_qualified_name(     asset_type=DataContract,  # (1)     qualified_name="default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/Table/contract/V1" )  ``` |

1. The `qualifiedName` of the data contract must be in the format: `<assetQualifiedName>/<assetType>/contract/V<versionNumber>`.
For this example:
    * `assetQualifiedName`: `qualifiedName` of a Snowflake table.
    * `assetType`: type of this asset in Atlan, i.e: `Table`.
    * `versionNumber`: specific version of the data
    contract to retrieve, e.g: `1`, `2`, and so on.

| Retrieve a data contract by its version | |
| --- | --- |
| ``` 1 2 3 ``` | ``` val contract = DataContract.get( // (1)!     client, "default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/Table/contract/V1" )  ``` |

1. The `qualifiedName` of the data contract must be in the format: `<assetQualifiedName>/<assetType>/contract/V<versionNumber>`. For this example:
    * `assetQualifiedName`: `qualifiedName` of a Snowflake table.
    * `assetType`: type of this asset in Atlan, i.e: `Table`.
    * `versionNumber`: specific version of the data contract to retrieve, e.g: `1`, `2`, and so on.

| GET /api/meta/entity/uniqueAttribute/type/DataContract?attr%3AqualifiedName\=dedefault%2Fsnowflake%2F1717514525%2FRAW%2FWIDEWORLD%2FSALE\_TXN%2FTable%2Fcontract%2FV1\&minExtInfo\=False\&ignoreRelationships\=False | |
| --- | --- |
| ``` 1 ``` | ``` // (1)  ``` |

1. All details are in the URL itself.

    URL\-encoded filter

    Note that the filter is URL\-encoded. [decoded it would be](https://www.urldecoder.org): `attr:qualifiedName=default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/Table/contract/V1&minExtInfo=False&ignoreRelationships=False`

    where the `qualifiedName` of the data contract must be in the format: `<assetQualifiedName>/<assetType>/contract/V<versionNumber>`.
        For this example:

    * `assetQualifiedName`: `qualifiedName` of a Snowflake table.
        * `assetType`: type of this asset in Atlan, i.e: `Table`.
        * `versionNumber`: specific version of the data contract to retrieve, e.g: `1`, `2`, and so on.

Update a contract[¶](#update-a-contract "Permanent link")
---------------------------------------------------------

[2\.5\.1](https://github.com/atlanhq/atlan-python/releases/tag/2.5.1 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

In the following example, we are updating the contact `certificateStatus` field to `VERIFIED` (shown as `PUBLISHED` in the UI):

Java

Python

Kotlin

Raw REST API

| Update a data contract | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` DataContractSpec updatedContractDetails = DataContractSpec.fromString(spec) // (1)     .toBuilder()     .status(DataContractStatus.VERIFIED) // (2)     .build(); DataContract contract = DataContract.updater( // (3)     "default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/contract",     "Data contract for SALE_TXN" )     .dataContractSpec(updatedContractDetails.toString()) // (4)     .build(); AssetMutationResponse response = contract.save(client); // (5)  ``` |

1. Begin by constructing the updated data contract specification. This example assumes you already have the string YAML form in a variable named `spec`, which you have retrieved from the data contract using one of the retrieval methods above.
2. After converting the specification into a builder (using `.toBuilder()`) you can chain any updates you want against it, such as changing its status.
3. Use the `updater()` method to update a data contract.

    * `qualifiedName` of the data contract, ie: `<assetQualifiedName>/contract` (where `assetQualifiedName` is, in this example, the `qualifiedName` of a Snowflake table).
        * `name` of the data contract. (`NOTE:` SDKs and [CLI](../manage/) always generate it in the format: **"Data contract for `dataset` (`asset.name`)"**).
4. You can then add any other updates or attributes. In this example, we're updating the contract spec itself (must be `string`).
5. To update the data contract in Atlan, call the `save()` method with the object you've built. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update a data contract | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import DataContract from pyatlan.model.contract import DataContractSpec from pyatlan.model.enums import DataContractStatus  client = AtlanClient()  spec = current_contract.data_contract_spec  updated_contract_spec = DataContractSpec.from_yaml(spec) # (1) updated_contract_spec.status = DataContractStatus.VERIFIED # (2)  contract = DataContract.updater( # (3)     qualified_name="default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/contract",     name="Data contract for SALE_TXN", ) contract.data_contract_spec = updated_contract_spec.to_yaml() # (4)  response = client.asset.save(contract) # (5)  ``` |

1. Begin by constructing the updated data contract specification.
This example assumes you already have the string YAML form in a
variable named `spec`, which you have retrieved from the data
contract using one of the retrieval methods above.
2. After converting the specification into `DataContractSpec` instance, you can then chain any updates you
want against it, such as changing its `status`.
3. Use the `updater()` method to update a data contract.

    * `qualifiedName` of the data contract,ie: `<assetQualifiedName>/contract` (where `assetQualifiedName` is, in this example, the `qualifiedName` of a Snowflake table).
        * `name` of the data contract. (`NOTE:` SDKs and [CLI](../manage/) always generate it in the format: **"Data contract for `dataset` (`asset.name`)"**).
4. You can then add any other updates or attributes.
In this example, we're updating the contract spec itself
(make sure to use `.to_yaml()` to convert spec instance to YAML string)
5. To update the data contract in Atlan, call the `save()` method with the object you've built.

| Update a data contract | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` val updatedContractDetails = DataContractSpec.fromString(spec) // (1)     .toBuilder()     .status(DataContractStatus.VERIFIED) // (2)     .build() val contract = DataContract.updater( // (3)     "default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/contract",     "Data contract for SALE_TXN" )     .dataContractSpec(updatedContractDetails.toString()) // (4)     .build() val response = contract.save(client) // (5)  ``` |

1. Begin by constructing the updated data contract specification. This example assumes you already have the string YAML form in a variable named `spec`, which you have retrieved from the data contract using one of the retrieval methods above.

    Will not retain any comments

    Keep in mind that when programmatically building the specification as an object, no comments will be retained. If you want to have comments in your YAML specification, you must directly manipulate the YAML string yourself.
2. After converting the specification into a builder (using `.toBuilder()`) you can chain any updates you want against it, such as changing its status.
3. Use the `updater()` method to update a data contract.

    * `qualifiedName` of the data contract, ie: `<assetQualifiedName>/contract` (where `assetQualifiedName` is, in this example, the `qualifiedName` of a Snowflake table).
        * `name` of the data contract. (`NOTE:` SDKs and [CLI](../manage/) always generate it in the format: **"Data contract for `dataset` (`asset.name`)"**).
4. You can then add any other updates or attributes. In this example, we're updating the contract spec itself (must be `string`).
5. To update the data contract in Atlan, call the `save()` method with the object you've built. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` { "entities": [     {        "typeName": "DataContract", // (1)        "attributes": { // (2)            "dataContractJson": "{\"type\": \"Table\", \"status\": \"VERIFIED\", \"kind\": \"DataContract\", \"dataset\": \"SALE_TXN\", \"data_source\": \"snowflake\", \"description\": \"Created by Python SDK.\", \"columns\": [{\"name\": \"order_id\", \"data_type\": \"BIGNUMERIC\", \"description\": \"\"}]}",            "name": "Data contract for SALE_TXN", // (3)            "qualifiedName": "default/snowflake/1717514525/RAW/WIDEWORLD/SALE_TXN/contract" // (4)        }     } ] }  ``` |

1. The `typeName` must be exactly `DataContract`.
2. Provide the data contract JSON. In this example, we're updating it with only the minimal required properties as specified by the API. Please check the reference section for the complete [data contract specification](../../../reference/specs/datacontracts/).

    * type of the asset in Atlan (`Table`, `View`, or `MaterializedView`).
        * state of the contract (`DRAFT` or `VERIFIED`).
        * must always be `DataContract`.
        * name of the asset as it exists inside Atlan.
        * name of the asset connection as it exists inside Atlan.
        * (Optional) description of this dataset, for documentation purposes.
        * (Optional) `columns`:
            + name of the column as it is defined in the source system (often technical).
            + physical data type of values in this column.
            + description of this column, for documentation purposes.
3. Human\-readable name for your contract.
4. The `qualifiedName` of your contract, ie: `<assetQualifiedName>/contract` (where `assetQualifiedName` is, in this example, the `qualifiedName` of a Snowflake table).

Delete a contract[¶](#delete-a-contract "Permanent link")
---------------------------------------------------------

### Soft\-delete (archive)[¶](#soft-delete-archive "Permanent link")

To soft\-delete, or archive, a contract:

Java

Python

Kotlin

Raw REST API

Coming soon

Coming soon

Coming soon

Coming soon

### Hard\-delete (purge)[¶](#hard-delete-purge "Permanent link")

To permanently delete (purge) a contract:

Java

Python

Kotlin

Raw REST API

Coming soon

Coming soon

Coming soon

Coming soon

---

2024\-06\-102025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/datacontract/manage-via-sdks/) to provide us with more information. 

Back to top

[Previous Manage data contracts (via CLI)](../manage/) [Next Profiling and popularity](../../common-examples/profiling-and-popularity/) 

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

