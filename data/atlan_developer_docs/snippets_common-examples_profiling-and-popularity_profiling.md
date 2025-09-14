# Source URL
https://developer.atlan.com/snippets/common-examples/profiling-and-popularity/profiling/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/profiling-and-popularity/profiling/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Utilize column profiling to gain insights into data columns in relational stores.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Utilize column profiling to gain insights into data columns in relational stores.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/profiling-and-popularity/profiling.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage column profiling - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/profiling-and-popularity/profiling/
meta-twitter:card: summary_large_image
meta-twitter:description: Utilize column profiling to gain insights into data columns in relational stores.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/profiling-and-popularity/profiling.png
meta-twitter:title: Manage column profiling - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage column profiling - Developer
-->

[Skip to content](#manage-column-profiling-information) Developer Manage column profiling Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/entity/bulk (POST)](../../../../endpoints/#tag:apimetaentitybulk-post)[/api/meta/entity/uniqueAttribute/type/{typeName}?attr:qualifiedName\={qualifiedName} (GET)](../../../../endpoints/#tag:apimetaentityuniqueattributetypetypenameattrqualifiednamequalifiedname-get)

Manage column profiling information[¶](#manage-column-profiling-information "Permanent link")
=============================================================================================

Profiling gives additional context to columns in relational stores. From profiling, you can see various summarized information such as:

* numerical statistics (min, max, mean, median, standard deviation, sum, variance) for numeric columns
* minimum, maximum, and average lengths for string columns
* distinct value counts and percentages
* missing value counts and percentages

Profiling is *only* available on columns

You will only be able to populate this summary information on columns, not on other assets in Atlan.

Retrieve profiles[¶](#retrieve-profiles "Permanent link")
---------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Since profiles are only available on columns, you will need to retrieve column assets to see the profiles:

Java

Python

Kotlin

Raw REST API

| Retrieve profiles | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` Column column = Column.get(client, // (1)         "default/hive/1657025257/OPS/DEFAULT/RUN_STATS/STATUS", true); // (2) column.getColumnDistinctValuesCount(); // (3) column.getColumnUniqueValuesCount(); column.getColumnUniquenessPercentage(); column.getColumnDuplicateValuesCount(); column.getColumnMissingValuesCount(); column.getColumnMissingValuesPercentage(); column.getColumnMax(); // (4) column.getColumnMin(); column.getColumnMean(); column.getColumnMedian(); column.getColumnStandardDeviation(); column.getColumnVariance(); column.getColumnSum(); column.getColumnMinimumStringLength(); // (5) column.getColumnMaximumStringLength(); column.getColumnAverageLength();  ``` |

1. Use the `get()` method to retrieve all details about a specific column. Because this operation will retrieve the asset from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Provide the full, case\-sensitive qualifiedName of the column.
3. Some profile information is common, regardless of the data type of the column.
4. Some profile information is specific to numeric columns.
5. Some profile information is specific to string columns.

| Retrieve profiles | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Column  client = AtlanClient() column = client.asset.get_by_qualified_name(  # (1)     qualified_name="default/hive/1657025257/OPS/DEFAULT/RUN_STATS/STATUS",  # (2)     asset_type=Column ) column.column_distinct_values_count  # (3) column.column_unique_values_count column.column_uniqueness_percentage column.column_duplicate_values_count column.column_missing_values_count column.column_missing_values_percentage column.column_max  # (4) column.column_min column.column_mean column.column_median column.column_standard_deviation column.column_variance column.column_sum column.column_minimum_string_length  # (5) column.column_maximum_string_length column.column_average_length  ``` |

1. Use the `get_by_qualified_name()` method to retrieve all details about a specific column.
2. Provide the full, case\-sensitive qualifiedName of the column.
3. Some profile information is common, regardless of the data type of the column.
4. Some profile information is specific to numeric columns.
5. Some profile information is specific to string columns.

| Retrieve profiles | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 ``` | ``` val column = Column.get(client,  // (1)     "default/hive/1657025257/OPS/DEFAULT/RUN_STATS/STATUS") // (2) column.columnDistinctValuesCount // (3) column.columnUniqueValuesCount column.columnUniquenessPercentage column.columnDuplicateValuesCount column.columnMissingValuesCount column.columnMissingValuesPercentage column.columnMax // (4) column.columnMin column.columnMean column.columnMedian column.columnStandardDeviation column.columnVariance column.columnSum column.columnMinimumStringLength // (5) column.columnMaximumStringLength column.columnAverageLength  ``` |

1. Use the `get()` method to retrieve all details about a specific column. Because this operation will retrieve the asset from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Provide the full, case\-sensitive qualifiedName of the column.
3. Some profile information is common, regardless of the data type of the column.
4. Some profile information is specific to numeric columns.
5. Some profile information is specific to string columns.

| GET /api/meta/entity/uniqueAttribute/type/Column?attr:qualifiedName\=default%2Fhive%2F1657025257%2FOPS%2FDEFAULT%2FRUN\_STATS%2FSTATUS | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` {   "entity": { // (1)     "typeName": "Column", // (2)     "attributes": { // (3)       "name": "STATUS",       "qualifiedName": "default/hive/1657025257/OPS/DEFAULT/RUN_STATS/STATUS",       "columnDistinctValuesCount": 123, // (4)       "columnUniqueValuesCount": 123,       "columnUniquenessPercentage": 50.0,       "columnDuplicateValuesCount": 123,       "columnMissingValuesCount": 123,       "columnMissingValuesPercentage": 50.0,       "columnMax": 321.0,       "columnMin": 1.0,       "columnMean": 123.0,       "columnMedian": 123.0,       "columnStandardDeviation": 3.0,       "columnVariance": 1.0,       "columnSum": 654321.0,       "columnMinimumStringLength": 0,       "columnMaximumStringLength": 123,       "columnAverageLength": 123.0     }   } }  ``` |

1. All column details will come back wrapped in a top\-level `entity` object in the payload.
2. The `typeName` will always be `Column`.
3. The detailed profiling information will be embedded in the `attributes` object within the outer `entity` object.
4. The column profiling details have names that all start with `column...`

Add your own profiles[¶](#add-your-own-profiles "Permanent link")
-----------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

In cases where Atlan does not profile the source, you may want to add your own profiles. You can do this by either adding the profile when [creating the column](../../../advanced-examples/create/) (programmatically) or by updating the attributes on an existing column:

Java

Python

Kotlin

Raw REST API

| Add or update profiles | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` Column column = Column.updater( // (1)         "default/hive/1657025257/OPS/DEFAULT/RUN_STATS/STATUS", // (2)         "STATUS") // (3)     .columnDistinctValuesCount(123) // (4)     .columnUniqueValuesCount(123)     .columnUniquenessPercentage(50.0)     .columnDuplicateValuesCount(123)     .columnMissingValuesCount(123)     .columnMissingValuesPercentage(50.0)     .columnMax(321.0) // (5)     .columnMin(1.0)     .columnMean(123.0)     .columnMedian(123.0)     .columnStandardDeviation(3.0)     .columnVariance(1.0)     .columnSum(654321.0)     .columnMinimumStringLength(0) // (6)     .columnMaximumStringLength(123)     .columnAverageLength(123.0)     .build(); // (7) AssetMutationResponse response = column.save(client); // (8)  ``` |

1. Use the `updater()` method to update an existing column asset (for more details, see [Updating an asset](../../../advanced-examples/update/)).
2. Provide the full, case\-sensitive qualifiedName of the column.
3. Provide the case\-sensitive name of the column.
4. Some profile information is common, regardless of the data type of the column. All are optional, so fill in only the pieces you want or for which you have the information.
5. Some profile information is specific to numeric columns. All are optional, so fill in only the pieces you want or for which you have the information.
6. Some profile information is specific to string columns. All are optional, so fill in only the pieces you want or for which you have the information.
7. Use the `build()` method to construct the column object to be updated in Atlan.
8. Then call the `save()` method against this built\-up object to actually apply the update to Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Retrieve profiles | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Column  client = AtlanClient() column = Column.updater(  # (1)     qualified_name="default/hive/1657025257/OPS/DEFAULT/RUN_STATS/STATUS",  # (2)     name="STATUS"  # (3) ) column.column_distinct_values_count = 123  # (4) column.column_unique_values_count = 123 column.column_uniqueness_percentage = 50.0 column.column_duplicate_values_count = 123 column.column_missing_values_count = 123 column.column_missing_values_percentage = 50.0 column.column_max = 321.0  # (5) column.column_min = 1.0 column.column_mean = 123.0 column.column_median = 123.0 column.column_standard_deviation = 3.0 column.column_variance = 1.0 column.column_sum = 654321.0 column.column_minimum_string_length = 0  # (6) column.column_maximum_string_length = 123 column.column_average_length = 123.0 response = client.asset.save(column)  # (7)  ``` |

1. Use the `updater()` method to update an existing column asset (for more details, see [Updating an asset](../../../advanced-examples/update/)).
2. Provide the full, case\-sensitive qualified\_name of the column.
3. Provide the case\-sensitive name of the column.
4. Some profile information is common, regardless of the data type of the column. All are optional, so fill in only the pieces you want or for which you have the information.
5. Some profile information is specific to numeric columns. All are optional, so fill in only the pieces you want or for which you have the information.
6. Some profile information is specific to string columns. All are optional, so fill in only the pieces you want or for which you have the information.
7. Then call the `save()` method with this built\-up object to actually apply the update to Atlan.

| Add or update profiles | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` val column = Column.updater( // (1)         "default/hive/1657025257/OPS/DEFAULT/RUN_STATS/STATUS",  // (2)         "STATUS") // (3)     .columnDistinctValuesCount(123) // (4)     .columnUniqueValuesCount(123)     .columnUniquenessPercentage(50.0)     .columnDuplicateValuesCount(123)     .columnMissingValuesCount(123)     .columnMissingValuesPercentage(50.0)     .columnMax(321.0) // (5)     .columnMin(1.0)     .columnMean(123.0)     .columnMedian(123.0)     .columnStandardDeviation(3.0)     .columnVariance(1.0)     .columnSum(654321.0)     .columnMinimumStringLength(0) // (6)     .columnMaximumStringLength(123)     .columnAverageLength(123.0)     .build() // (7) val response = column.save(client) // (8)  ``` |

1. Use the `updater()` method to update an existing column asset (for more details, see [Updating an asset](../../../advanced-examples/update/)).
2. Provide the full, case\-sensitive qualifiedName of the column.
3. Provide the case\-sensitive name of the column.
4. Some profile information is common, regardless of the data type of the column. All are optional, so fill in only the pieces you want or for which you have the information.
5. Some profile information is specific to numeric columns. All are optional, so fill in only the pieces you want or for which you have the information.
6. Some profile information is specific to string columns. All are optional, so fill in only the pieces you want or for which you have the information.
7. Use the `build()` method to construct the column object to be updated in Atlan.
8. Then call the `save()` method against this built\-up object to actually apply the update to Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Column", // (2)       "attributes": {         "name": "STATUS", // (3)         "qualifiedName": "default/hive/1657025257/OPS/DEFAULT/RUN_STATS/STATUS", // (4)         "columnDistinctValuesCount": 123, // (5)         "columnUniqueValuesCount": 123,         "columnUniquenessPercentage": 50.0,         "columnDuplicateValuesCount": 123,         "columnMissingValuesCount": 123,         "columnMissingValuesPercentage": 50.0,         "columnMax": 321.0, // (6)         "columnMin": 1.0,         "columnMean": 123.0,         "columnMedian": 123.0,         "columnStandardDeviation": 3.0,         "columnVariance": 1.0,         "columnSum": 654321.0,         "columnMinimumStringLength": 0, // (7)         "columnMaximumStringLength": 123,         "columnAverageLength": 123.0       }     }   ] }  ``` |

1. All columns must be wrapped in an `entities` array.
2. The `typeName` must always be `Column` for profiling information.
3. You must provide the exact name of the column (case\-sensitive).
4. You must provide the exact `qualifiedName` of the column (case\-sensitive).
5. Some profile information is common, regardless of the data type of the column. All are optional, so fill in only the pieces you want or for which you have the information.
6. Some profile information is specific to numeric columns. All are optional, so fill in only the pieces you want or for which you have the information.
7. Some profile information is specific to string columns. All are optional, so fill in only the pieces you want or for which you have the information.

---

2023\-03\-062025\-01\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/profiling-and-popularity/profiling/) to provide us with more information. 

Back to top

[Previous Profiling and popularity](../) [Next Manage popularity](../popularity/) 

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

