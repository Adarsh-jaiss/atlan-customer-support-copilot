# Source URL
https://developer.atlan.com/snippets/common-examples/certificates/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/certificates/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn how to add/remove certificates from assets in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn how to add/remove certificates from assets in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/certificates.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Certify assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/certificates/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn how to add/remove certificates from assets in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/certificates.png
meta-twitter:title: Certify assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Certify assets - Developer
-->

[Skip to content](#certify-assets) Developer Certify assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Certify assets[¶](#certify-assets "Permanent link")
===================================================

Add to an existing asset[¶](#add-to-an-existing-asset "Permanent link")
-----------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a certificate to an existing [asset](../../../getting-started/#what-is-an-asset):

dbt

Java

Python

Kotlin

Raw REST API

| Add certificate to existing assets | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         attributes: # (2)           certificateStatus: VERIFIED # (3)           certificateStatusMessage: >- # (4)             Verified through automation.  ``` |

1. You must of course give the name of the object.
2. The details for the certificate must be nested within the `meta`.`atlan`.`attributes` structure.
3. You must provide a valid status for the certificate (`DRAFT`, `VERIFIED` or `DEPRECATED`).
4. (Optional) You can also provide a message to associate with the certificate.

| Add certificate to existing assets | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Table result = Table.updateCertificate( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (3)     CertificateStatus.VERIFIED, // (4)     "Verified through automation."); // (5)  ``` |

1. Use the `updateCertificate()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the update operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the object.
4. The type of certificate (the `CertificateStatus` enumeration gives the valid values).
5. (Optional) A message to include in the certificate.

| Add certificate to existing assets | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.enums import CertificateStatus  client = AtlanClient() table = client.asset.update_certificate( # (1)     asset_type=Table,     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",     name="TOP_BEVERAGE_USERS",     certificate_status=CertificateStatus.VERIFIED,     message="Verified through automation.", ) if table is None: # (2)     print("Certificate status did not change") else: # (3)     print("Certificate status updated")  ``` |

1. Use the `asset.update_certificate()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the update operation all\-in\-one.
2. If no change occurs to the asset then `None` will be returned.
3. If the asset is updated then the asset will be returned.

| Add certificate to existing assets | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val result = Table.updateCertificate(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS",  // (3)     CertificateStatus.VERIFIED,  // (4)     "Verified through automation.")  // (5)  ``` |

1. Use the `updateCertificate()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the update operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the object.
4. The type of certificate (the `CertificateStatus` enumeration gives the valid values).
5. (Optional) A message to include in the certificate.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "certificateStatus": "VERIFIED", // (5)         "certificateStatusMessage": "Verified through automation." // (6)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. You must provide a valid status for the certificate.
6. (Optional) You can also provide a status message for the certificate.

Remove from an existing asset[¶](#remove-from-an-existing-asset "Permanent link")
---------------------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To remove a certificate from an existing asset:

dbt

Java

Python

Kotlin

Raw REST API

It is currently not possible to *remove* a certificate from an asset via dbt.

| Remove certificate from existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` Column column = Column.removeCertificate( // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS/USER_ID", // (3)     "USER_ID"); // (4)  ``` |

1. Use the `removeCertificate()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the column (this is generally needed on all assets).
4. The name of the column (this varies by asset, but most assets need the name specified).

| Remove certificate from existing asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Column  client = AtlanClient() column = client.asset.remove_certificate( # (1)     asset_type=Column,     qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS/USER_ID",     name="USER_ID", ) if column is None: # (2)     print("Certificate was not present") else: # (3)     print("Certificate was removed")  ``` |

1. Use the `asset.remove_certificate()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. If no change occurs to the asset because the certificate is not present then `None` will be returned.
3. If certificate is removed from the asset then the asset will be returned.

| Remove certificate from existing asset | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` val column = Column.removeCertificate(  // (1)     client, // (2)     "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS/USER_ID",  // (3)     "USER_ID")  // (4)  ``` |

1. Use the `removeCertificate()` helper method, which for most objects requires a minimal set of information. This helper method will construct the necessary request, call the necessary API(s), and return with the result of the removal operation all\-in\-one.
2. Because this operation will directly change the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
3. The `qualifiedName` of the column (this is generally needed on all assets).
4. The name of the column (this varies by asset, but most assets need the name specified).

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "USER_ID", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS/USER_ID", // (4)         "certificateStatus": null, // (5)         "certificateStatusMessage": null       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. To remove the certificate, set its status and message to `null`.

When creating an asset[¶](#when-creating-an-asset "Permanent link")
-------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To add a certificate when creating an asset:

dbt

Java

Python

Kotlin

Raw REST API

| Add certificate when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` models:   - name: TOP_BEVERAGE_USERS # (1)     meta:       atlan:         attributes: # (2)           certificateStatus: VERIFIED # (3)           certificateStatusMessage: >- # (4)             Verified at creation.  ``` |

1. You must of course give the name of the object.
2. The details for the certificate must be nested within the `meta`.`atlan`.`attributes` structure.
3. You must provide a valid status for the certificate (`DRAFT`, `VERIFIED` or `DEPRECATED`).
4. (Optional) You can also provide a message to associate with the certificate.

| Add certificate when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` Table table = Table     .creator("TOP_BEVERAGE_USERS", // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .certificateStatus(CertificateStatus.VERIFIED) // (2)     .certificateStatusMessage("Verified at creation.") // (3)     .build(); // (4) AssetMutationResponse response = table.save(client); // (5) assert response.getCreatedAssets().size() == 1 // (6)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
2. Set the certificate that should be added (in this example, we're using `VERIFIED`).
3. (Optional) Add a message for the certificate.
4. Call the `build()` method to build the enriched object.
5. Call the `save()` method to actually create the asset with this certificate. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
6. The response will include that single asset that was created.

| Add certificate when creating asset | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.enums import CertificateStatus   client = AtlanClient() table = Table.creator(  # (1)     name="TOP_BEVERAGE_USERS",     schema_qualified_name="default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV", ) table.certificate_status = CertificateStatus.VERIFIED # (2) table.certificate_status_message = "Verified at creation." # (3) response = client.asset.save(table)  # (4) assert response.assets_created(Table)  # (5) table = response.assets_created(Table)[0]  # (6)  ``` |

1. Use the `create()` method to initialize the object with all necessary attributes for creating it.
2. Set the certificate that should be added (in this example, we're using `VERIFIED`).
3. (Optional) Add a message for the certificate.
4. Invoke the `save()` method with asset. This method will return an AssetMutationResponse object that encapsulates the results.
5. Since a save can add, update, delete or partially update multiple assets the `assets_created()` method can be used to return a list of the assets of the specified type that were added. The assert statement is present to ensure a `Table` asset was created.
6. Since only one `Table` should have been created we use an index of 0 to retrieve the newly created table.

| Add certificate when creating asset | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` val table: Table = Table     .creator("TOP_BEVERAGE_USERS",  // (1)         "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV")     .certificateStatus(CertificateStatus.VERIFIED)  // (2)     .certificateStatusMessage("Verified at creation.")  // (3)     .build()  // (4) val response = table.save(client)  // (5) assert(response.createdAssets.size == 1)  // (6)  ``` |

1. Use the `creator()` method to initialize the object with all [necessary attributes for creating it](../../advanced-examples/create/#build-minimal-object-needed).
2. Set the certificate that should be added (in this example, we're using `VERIFIED`).
3. (Optional) Add a message for the certificate.
4. Call the `build()` method to build the enriched object.
5. Call the `save()` method to actually create the asset with this certificate. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
6. The response will include that single asset that was created.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Table", // (2)       "attributes": {         "name": "TOP_BEVERAGE_USERS", // (3)         "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV/TOP_BEVERAGE_USERS", // (4)         "atlanSchema": { // (5)           "typeName": "Schema",           "uniqueAttributes": {             "qualifiedName": "default/snowflake/1657037873/SAMPLE_DB/FOOD_BEV"           }         },         "certificateStatus": "VERIFIED", // (6)         "certificateStatusMessage": "Verified at creation." // (7)       }     }   ] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. You must provide the exact type name for the asset (case\-sensitive).
3. You must provide a name for the asset.
4. In the case of a table, the `qualifiedName` must be the concatenation of the parent schema's qualifiedName and the name of the table.
5. When creating a table, you must specify the schema to create it within. This is defined by the `atlanSchema` attribute. You must specify both the type (must be `Schema`) and qualifiedName of the schema within the `atlanSchema` attribute — and the schema must already exist.
6. You must provide a valid status for the certificate.
7. (Optional) You can also provide a status message for the certificate.

---

2022\-08\-222024\-12\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/certificates/) to provide us with more information. 

Back to top

[Previous Examples of common actions](../) [Next Manage announcements](../announcements/) 

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

