# Source URL
https://developer.atlan.com/snippets/common-examples/profiling-and-popularity/popularity/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/profiling-and-popularity/popularity/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Leverage valuable usage insights for Atlan assets, including user activity and performance metrics.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Leverage valuable usage insights for Atlan assets, including user activity and performance metrics.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/profiling-and-popularity/popularity.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage popularity insights - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/profiling-and-popularity/popularity/
meta-twitter:card: summary_large_image
meta-twitter:description: Leverage valuable usage insights for Atlan assets, including user activity and performance metrics.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/profiling-and-popularity/popularity.png
meta-twitter:title: Manage popularity insights - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage popularity insights - Developer
-->

[Skip to content](#manage-popularity) Developer Manage popularity insights Initializing search 

* 
* [Overview](../../../..)
* [Getting started](../../../../getting-started/)
* [Common tasks](../../../)
* [Asset\-specific](../../../../patterns/)
* [Governance structures](../../../../governance/)
* [Reference](../../../../reference/)

[/api/meta/entity/bulk (POST)](../../../../endpoints/#tag:apimetaentitybulk-post)[/api/meta/entity/uniqueAttribute/type/{typeName}?attr:qualifiedName\={qualifiedName} (GET)](../../../../endpoints/#tag:apimetaentityuniqueattributetypetypenameattrqualifiednamequalifiedname-get)

Manage popularity[¶](#manage-popularity "Permanent link")
=========================================================

Popularity gives additional context to the usage of assets. From popularity, you can see various information such as:

* users who have queried an asset, including:
    + those who have most recently queried the asset
    + those who have most frequently queried the asset
* details about queries against the asset, including:
    + the most frequently run queries
    + the slowest\-running queries
    + the most expensive queries

Popularity is only populated on certain assets by Atlan

Out\-of\-the\-box, only specific crawlers currently populate popularity information on assets. However, the attributes involved are actually available behind\-the\-scenes on all assets.

Make details visible in the UI[¶](#make-details-visible-in-the-ui "Permanent link")
-----------------------------------------------------------------------------------

Usage details not visible by default

By default, only the crawlers that support usage details out\-of\-the\-box will show the usage details in the Atlan UI. To make usage details visible for other assets you *must* enable this at a connection level.

### During connection creation[¶](#during-connection-creation "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To create a popularity\-enabled connection:

Java

Python

Kotlin

Raw REST API

| Create a popularity\-enabled connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` String adminRoleGuid = client.getRoleCache().getIdForName("$admin"); // (1) Connection connection = Connection.creator( // (2)         "development", // (3)         AtlanConnectorType.HIVE, // (4)         List.of(adminRoleGuid), // (5)         List.of("group2"), // (6)         List.of("jsmith")) // (7)     .hasPopularityInsights(true) // (8)     .build(); AssetMutationResponse response = connection.save(client); // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection.
4. Set the type of connection.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Set the `hasPopularityInsights` property to `true` — this is the key piece to ensuring usage details will be visible in the UI for assets in this connection.
9. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Create a relational connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client,  # (3)     name="development", # (4)     connector_type=AtlanConnectorType.HIVE, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"], # (8) ) connection.has_popularity_insights = True  # (9) response = client.asset.save(connection) # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection.
5. Set the type of connection.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection.
6. List the workspace roles that should be able to administer the connection (if any, defaults to `None`). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (if any, defaults to `None`). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (if any, defaults to `None`). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Set the `has_popularity_insights` property to `True` — this is the key piece to ensuring usage details will be visible in the UI for assets in this connection.
10. Actually call Atlan to create the connection.

| Create a popularity\-enabled connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 ``` | ``` val adminRoleGuid = client.roleCache.getIdForName("\$admin") // (1) val connection = Connection.creator( // (2)         "development",  // (3)         AtlanConnectorType.HIVE,  // (4)         java.util.List.of(adminRoleGuid),  // (5)         listOf("group2"),  // (6)         listOf("jsmith")) // (7)     .hasPopularityInsights(true) // (8)     .build() val response = connection.save(client) // (9)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. Provide a human\-readable name for your connection.
4. Set the type of connection.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection.
5. List the workspace roles that should be able to administer the connection (or null if none). All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
6. List the group names that can administer this connection (or null if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List the user names that can administer this connection (or null if none). Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. Set the `hasPopularityInsights` property to `true` — this is the key piece to ensuring usage details will be visible in the UI for assets in this connection.
9. Actually call Atlan to create the connection. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "development", // (2)         "connectorName": "hive", // (3)         "qualifiedName": "default/hive/123456789", // (4)         "category": "warehouse", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ],         "hasPopularityInsights": true // (9)       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection.
3. The `connectorName` should be a known value, such as `hive`.

    Determines the icon

    This determines the icon that Atlan will use for all the assets in the connection. If you use a value that is *not* a known value, you will have a default gear icon instead.
4. The `qualifiedName` should follow the pattern: `default/<connectorName>/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created, and `<connectorName>` exactly matches the value used for `connectorName` (above).
5. The `category` should also be a known value, that defines the kind of relational store. This could for example be `warehouse` or `rdbms`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
9. Set the `hasPopularityInsights` property to `true` — this is the key piece to ensuring usage details will be visible in the UI for assets in this connection.

### Update an existing connection[¶](#update-an-existing-connection "Permanent link")

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To update an existing connection:

Java

Python

Kotlin

Raw REST API

| Update connection to make popularity visible | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` Connection connection = Connection.get("default/hive/1657025257"); // (1) AssetMutationResponse updated = connection.trimToRequired() // (2)     .hasPopularityInsights(true) // (3)     .build() // (4)     .save(client); // (5)  ``` |

1. Build an object referencing the existing connection. In this example we will retrieve it first, but you could also search for it or use the `updater()` method to construct an update.
2. If starting from an existing object, remember to `trimToRequired()` to get a builder with the minimal required information for an update.
3. Set the `hasPopularityInsights` property to `true`.
4. Build the object, so it is ready to be persisted.
5. Persist the object by saving it. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Update connection to make popularity visible | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection  client = AtlanClient()  connection = client.asset.get_by_qualified_name(  # (1)     qualified_name="default/hive/1657025257",     asset_type=Connection ).trim_to_required()  # (2) connection.has_popularity_insights = True  # (3) updated = client.asset.save(connection)  # (4)  ``` |

1. Build an object referencing the existing connection. In this example we will retrieve it first, but you could also search for it or use the `updater()` method to construct an update.
2. If starting from an existing object, remember to `trim_to_required()` to get an asset with the minimal required information for an update.
3. Set the `has_popularity_insights` property to `True`.
4. Persist the object by saving it.

| Update connection to make popularity visible | |
| --- | --- |
| ``` 1 2 3 4 5 ``` | ``` val connection = Connection.get("default/hive/1657025257") // (1) val updated = connection.trimToRequired() // (2)     .hasPopularityInsights(true) // (3)     .build() // (4)     .save(client) // (5)  ``` |

1. Build an object referencing the existing connection. In this example we will retrieve it first, but you could also search for it or use the `updater()` method to construct an update.
2. If starting from an existing object, remember to `trimToRequired()` to get a builder with the minimal required information for an update.
3. Set the `hasPopularityInsights` property to `true`.
4. Build the object, so it is ready to be persisted.
5. Persist the object by saving it. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 ``` | ``` {   "entities": [ // (1)     {       "typeName": "Connection", // (2)       "attributes": { // (3)         "qualifiedName": "default/hive/1657025257", // (4)         "name": "development", // (5)         "hasPopularityInsights": true // (6)       }     }   ] }  ``` |

1. The connection must be wrapped in an `entities` array.
2. You must use a `typeName` of `Connection` to update the connection.
3. You must then wrap additional details in an `attributes` object.
4. You must provide the exact `qualifiedName` of the connection (case\-sensitive).
5. You must provide the exact name of the connection (case\-sensitive).
6. Set the `hasPopularityInsights` property to `true`.

Retrieve usage details[¶](#retrieve-usage-details "Permanent link")
-------------------------------------------------------------------

[1\.4\.0](https://github.com/atlanhq/atlan-python/releases/tag/1.4.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

Since popularity details are only available on certain assets, you will need to retrieve one of those assets to see the usage details:

Java

Python

Kotlin

Raw REST API

| Retrieve popularity | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` Table table = Table.get(client,  // (1)         "default/hive/1657025257/OPS/DEFAULT/RUN_STATS"); // (2) table.getPopularityScore(); // (3) table.getSourceReadCount(); table.getSourceReadQueryCost(); table.getSourceReadUserCount(); table.getSourceTotalCost(); table.getSourceQueryComputeCosts(); // (4) table.getSourceReadRecentUsers(); table.getSourceReadTopUsers(); table.getSourceQueryComputeCostRecords(); // (5) table.getSourceReadRecentUserRecords(); table.getSourceReadTopUserRecords(); table.getSourceReadExpensiveQueryRecords(); // (6) table.getSourceReadPopularQueryRecords(); table.getSourceReadSlowQueryRecords();  ``` |

1. Use the `get()` method to retrieve all details about a specific asset. Because this operation will retrieve the asset from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. Provide the full, case\-sensitive qualifiedName of the asset.
3. You can retrieve single quantified metrics for various aspects, such as:

    * An overall popularity score for the asset (higher is better), using `getPopularityScore()`.
        * The total number of all read operations on the asset, using `getSourceReadCount()`.
        * The total cost of all read operations on the asset, using `getSourceReadQueryCost()`.
        * The total number of unique users that read data from the asset, using `getSourceReadUserCount()`.
        * The total cost of all operations on the asset, using `getSourceTotalCost()`.
4. You can retrieve lists of various aspects, such as:

    * The top query running engines (warehouses), using `getSourceQueryComputeCosts()`.
        * The users who most recently queried the asset, using `getSourceReadRecentUsers()`.
        * The users who most frequently query the asset, using `getSourceReadTopUsers()`.
5. You can also list more detailed information about individual metrics, such as:

    * The top query running engines (warehouses) and their related cost, using `getSourceQueryComputeCostRecords()`.
        * The users who most recently queried the asset, the number of times they've queried it and when they last queried it, using `getSourceReadRecentUserRecords()`.
        * The users who most frequently query the asset, the number of times they've queried it and when they last queried it, using `getSourceReadTopUserRecords()`.
6. You can also list details about specific queries, such as:

    * The list of most expensive queries against this asset, using `getSourceReadExpensiveQueryRecords()`.
        * The list of the most frequently run queries against this asset, using `getSourceReadPopularQueryRecords()`.
        * The list of the slowest\-running queries against this asset, using `getSourceReadSlowQueryRecords()`.

| Retrieve popularity | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table  client = AtlanClient()  table = client.asset.get_by_qualified_name( # (1)     qualified_name="default/hive/1657025257/OPS/DEFAULT/RUN_STATS", # (2)     asset_type=Table ) table.popularity_score # (3) table.source_read_count table.source_read_query_cost table.source_read_user_count table.source_total_cost table.source_query_compute_cost_list # (4) table.source_read_recent_user_list table.source_read_top_user_list table.source_query_compute_cost_record_list # (5) table.source_read_recent_user_record_list table.source_read_top_user_record_list table.source_read_expensive_query_record_list # (6) table.source_read_popular_query_record_list table.source_read_slow_query_record_list  ``` |

1. Use the `asset.get_by_qualified_name()` method to retrieve all details about a specific asset.
2. Provide the full, case\-sensitive qualified\_name of the asset, and the type of the asset.
3. You can retrieve single quantified metrics for various aspects, such as:

    * An overall popularity score for the asset (higher is better), using `popularity_score`.
        * The total number of all read operations on the asset, using `source_read_count`.
        * The total cost of all read operations on the asset, using `source_read_query_cost`.
        * The total number of unique users that read data from the asset, using `source_read_user_count`.
        * The total cost of all operations on the asset, using `source_total_cost`.
4. You can retrieve lists of various aspects, such as:

    * The top query running engines (warehouses), using `source_query_compute_cost_list`.
        * The users who most recently queried the asset, using `source_read_recent_user_list`.
        * The users who most frequently query the asset, using `source_read_top_user_list`.
5. You can also list more detailed information about individual metrics, such as:

    * The top query running engines (warehouses) and their related cost, using `source_query_compute_cost_record_list`.
        * The users who most recently queried the asset, the number of times they've queried it and when they last queried it, using `source_read_recent_user_record_list`.
        * The users who most frequently query the asset, the number of times they've queried it and when they last queried it, using `source_read_top_user_record_list`.
6. You can also list details about specific queries, such as:

    * The list of most expensive queries against this asset, using `source_read_expensive_query_record_list`.
        * The list of the most frequently run queries against this asset, using `source_read_popular_query_record_list`.
        * The list of the slowest\-running queries against this asset, using `source_read_slow_query_record_list`.

| Retrieve popularity | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 ``` | ``` val table = Table.get(client,  // (1)     "default/hive/1657025257/OPS/DEFAULT/RUN_STATS") // (2) table.popularityScore // (3) table.sourceReadCount table.sourceReadQueryCost table.sourceReadUserCount table.sourceTotalCost table.sourceQueryComputeCosts // (4) table.sourceReadRecentUsers table.sourceReadTopUsers table.sourceQueryComputeCostRecords // (5) table.sourceReadRecentUserRecords table.sourceReadTopUserRecords table.sourceReadExpensiveQueryRecords // (6) table.sourceReadPopularQueryRecords table.sourceReadSlowQueryRecords  ``` |

1. Use the `get()` method to retrieve all details about a specific asset. Because this operation will retrieve the asset from Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. Provide the full, case\-sensitive qualifiedName of the asset.
3. You can retrieve single quantified metrics for various aspects, such as:

    * An overall popularity score for the asset (higher is better), using `.popularityScore`.
        * The total number of all read operations on the asset, using `.sourceReadCount`.
        * The total cost of all read operations on the asset, using `.sourceReadQueryCost`.
        * The total number of unique users that read data from the asset, using `.sourceReadUserCount`.
        * The total cost of all operations on the asset, using `.sourceTotalCost`.
4. You can retrieve lists of various aspects, such as:

    * The top query running engines (warehouses), using `.sourceQueryComputeCosts`.
        * The users who most recently queried the asset, using `.sourceReadRecentUsers`.
        * The users who most frequently query the asset, using `.sourceReadTopUsers`.
5. You can also list more detailed information about individual metrics, such as:

    * The top query running engines (warehouses) and their related cost, using `.sourceQueryComputeCostRecords`.
        * The users who most recently queried the asset, the number of times they've queried it and when they last queried it, using `.sourceReadRecentUserRecords`.
        * The users who most frequently query the asset, the number of times they've queried it and when they last queried it, using `.sourceReadTopUserRecords`.
6. You can also list details about specific queries, such as:

    * The list of most expensive queries against this asset, using `.sourceReadExpensiveQueryRecords`.
        * The list of the most frequently run queries against this asset, using `.sourceReadPopularQueryRecords`.
        * The list of the slowest\-running queries against this asset, using `.sourceReadSlowQueryRecords`.

| GET /api/meta/entity/uniqueAttribute/type/Table?attr:qualifiedName\=default%2Fhive%2F1657025257%2FOPS%2FDEFAULT%2FRUN\_STATS | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 ``` | ``` {   "entity": { // (1)     "typeName": "Table", // (2)     "attributes": { // (3)       "name": "RUN_STATS",       "qualifiedName": "default/hive/1657025257/OPS/DEFAULT/RUN_STATS",       "popularityScore": 4.8121843, // (4)       "sourceReadCount": 122,       "sourceReadQueryCost": 0.001278,       "sourceReadUserCount": 1,       "sourceTotalCost": 0.001278,       "sourceLastReadAt": 1689508975245,       "sourceCostUnit": "Credits",       "sourceQueryComputeCostList": [         "TRANSFORMING"       ],       "sourceReadTopUserList": [         "ATLANADMIN"       ],       "sourceQueryComputeCostRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordTotalUserCount": 0,             "recordUser": null,             "recordQueryCount": 0,             "recordWarehouse": "TRANSFORMING",             "recordComputeCost": 0.001278,             "recordLastTimestamp": 0,             "recordQuery": null,             "recordQueryDuration": 0,             "recordMaxComputeCost": 0,             "recordComputeCostUnit": "Credits"           }         }       ],       "sourceReadRecentUserRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordTotalUserCount": 0,             "recordUser": "ATLANADMIN",             "recordQueryCount": 122,             "recordWarehouse": null,             "recordComputeCost": 0,             "recordLastTimestamp": 1689508975245,             "recordQuery": null,             "recordQueryDuration": 0,             "recordMaxComputeCost": 0,             "recordComputeCostUnit": null           }         }       ],       "sourceReadTopUserRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordTotalUserCount": 0,             "recordUser": "ATLANADMIN",             "recordQueryCount": 122,             "recordWarehouse": null,             "recordComputeCost": 0,             "recordLastTimestamp": 1689508975245,             "recordQuery": null,             "recordQueryDuration": 0,             "recordMaxComputeCost": 0,             "recordComputeCostUnit": null           }         }       ],       "sourceReadExpensiveQueryRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordTotalUserCount": 1,             "recordUser": null,             "recordQueryCount": 36,             "recordWarehouse": null,             "recordComputeCost": 0.000407,             "recordLastTimestamp": 0,             "recordQuery": "SELECT * from RUN_STATS",             "recordQueryDuration": 0,             "recordMaxComputeCost": 4.8e-05,             "recordComputeCostUnit": "Credits"           }         }       ],       "sourceReadPopularQueryRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordTotalUserCount": 1,             "recordUser": null,             "recordQueryCount": 36,             "recordWarehouse": null,             "recordComputeCost": 0.000309,             "recordLastTimestamp": 0,             "recordQuery": "SELECT * from RUN_STATS",             "recordQueryDuration": 0,             "recordMaxComputeCost": 0,             "recordComputeCostUnit": "Credits"           }         }       ],       "sourceReadSlowQueryRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordTotalUserCount": 0,             "recordUser": "ATLANADMIN",             "recordQueryCount": 0,             "recordWarehouse": null,             "recordComputeCost": 0,             "recordLastTimestamp": 1688584846605,             "recordQuery": "SELECT * from RUN_STATS",             "recordQueryDuration": 336,             "recordMaxComputeCost": 0,             "recordComputeCostUnit": null           }         }       ]     }   } }  ``` |

1. All asset details will come back wrapped in a top\-level `entity` object in the payload.
2. The `typeName` will indicate what kind of asset is returned.
3. The detailed usage information will be embedded in the `attributes` object within the outer `entity` object.
4. With the exception of the `popularityScore`, all other usage details have names that all start with `source...`

Add your own usage details[¶](#add-your-own-usage-details "Permanent link")
---------------------------------------------------------------------------

[2\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/2.0.0 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

In cases where Atlan does not popularity details from the source, you may want to add your own. You can do this by either adding the usage details when [creating the asset](../../../advanced-examples/create/) (programmatically) or by updating the attributes on an existing asset:

Java

Python

Kotlin

Raw REST API

| Add or update usage details | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 ``` | ``` Table table = Table.updater( // (1)         "default/hive/1657025257/OPS/DEFAULT/RUN_STATS",         "RUN_STATS")     .popularityScore(1.2345) // (2)     .sourceReadCount(123L)     .sourceReadQueryCost(5.4321)     .sourceReadUserCount(5L)     .sourceTotalCost(5.4321)     .sourceQueryComputeCosts(List.of("A", "B")) // (3)     .sourceReadRecentUsers(List.of("c", "d", "e"))     .sourceReadRecentUser("f")     .sourceReadRecentUser("g")     .sourceReadTopUsers(List.of("g", "f", "e"))     .sourceReadTopUser("d")     .sourceReadTopUser("c")     .sourceQueryComputeCostRecord( // (4)         PopularityInsights.builder()             .recordComputeCost(4.4321)             .recordComputeCostUnit(SourceCostUnitType.CREDITS)             .recordWarehouse("A")             .build())     .sourceQueryComputeCostRecord(         PopularityInsights.builder()             .recordComputeCost(1.0)             .recordComputeCostUnit(SourceCostUnitType.CREDITS)             .recordWarehouse("B")             .build())     .sourceReadRecentUserRecord(         PopularityInsights.builder()             .recordUser("c")             .recordLastTimestamp(1234567899000L)             .build())     .sourceReadRecentUserRecord(         PopularityInsights.builder()             .recordUser("d")             .recordLastTimestamp(1234567898000L)             .build())     .sourceReadRecentUserRecord(         PopularityInsights.builder()             .recordUser("e")             .recordLastTimestamp(1234567897000L)             .recordQueryCount(3L)             .build())     .sourceReadTopUserRecord(         PopularityInsights.builder()             .recordUser("g")             .recordQueryCount(100L)             .recordLastTimestamp(1234567895000L)             .build())     .sourceReadTopUserRecord(         PopularityInsights.builder()             .recordUser("f")             .recordQueryCount(20L)             .recordLastTimestamp(1234567896000L)             .build())     .sourceReadTopUserRecord(         PopularityInsights.builder()             .recordUser("e")             .recordQueryCount(3L)             .recordLastTimestamp(1234567897000L)             .build())     .sourceReadExpensiveQueryRecord(         PopularityInsights.builder()             .recordComputeCost(5.4321)             .recordMaxComputeCost(5.4321)             .recordComputeCostUnit(SourceCostUnitType.CREDITS)             .recordQuery("SELECT * from RUN_STATS")             .recordQueryCount(123L)             .recordTotalUserCount(5L)             .build())     .sourceReadPopularQueryRecord(         PopularityInsights.builder()             .recordComputeCost(5.4321)             .recordComputeCostUnit(SourceCostUnitType.CREDITS)             .recordQueryCount(123L)             .recordQuery("SELECT * from RUN_STATS")             .recordTotalUserCount(5L)             .build())     .sourceReadSlowQueryRecord(         PopularityInsights.builder()             .recordUser("g")             .recordLastTimestamp(124567895000L)             .recordQueryDuration(321L)             .recordQuery("SELECT * from RUN_STATS")             .build())     .build(); AssetMutationResponse response = table.save(client); // (5)  ``` |

1. Use the `updater()` method to update an existing asset, providing the required details for that particular asset type (for more details, see [Updating an asset](../../../advanced-examples/update/)).
2. For single quantified metrics, you can directly set the metric.
3. For lists, you can directly set the lists or individually add elements (or a combination of the two).
4. For the more detailed records, you need to build the `PopularityInsights` object with its embedded details. As with the lists you can associate these detailed records with the asset many\-at\-a\-time or one\-by\-one.
5. Finally, you must save the object you've built up to persist this information in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.

| Add or update usage details | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Table from pyatlan.model.enums import SourceCostUnitType from pyatlan.model.structs import PopularityInsights  client = AtlanClient()  table = Table.updater(  # (1)     qualified_name="default/hive/1657025257/OPS/DEFAULT/RUN_STATS",     name="RUN_STATS" ) table.popularity_score = 1.2345  # (2) table.source_read_count = 123 table.source_read_query_cost = 5.4321 table.source_read_user_count = 5 table.source_total_cost = 5.4321 table.source_query_compute_cost_list = ["A", "B"]  # (3) table.source_read_recent_user_list = ["c", "d", "e", "f", "g"] table.source_read_top_user_list = ["g", "f", "e", "d", "c"] table.source_query_compute_cost_record_list = [  # (4)     PopularityInsights(         record_compute_cost=4.4321,         record_compute_cost_unit=SourceCostUnitType.CREDITS,         record_warehouse="A"     ),     PopularityInsights(         record_compute_cost=1.0,         record_compute_cost_unit=SourceCostUnitType.CREDITS,         record_warehouse="B"     ) ] table.source_read_recent_user_record_list = [     PopularityInsights(         record_user="c",         record_last_timestamp=1234567899000     ),     PopularityInsights(         record_user="d",         record_last_timestamp=1234567898000     ),     PopularityInsights(         record_user="e",         record_last_timestamp=1234567897000,         record_query_count=3     ) ] table.source_read_top_user_record_list = [     PopularityInsights(         record_user="g",         record_query_count=100,         record_last_timestamp=1234567895000     ),     PopularityInsights(         record_user="f",         record_query_count=20,         record_last_timestamp=1234567896000     ),     PopularityInsights(         record_user="e",         record_query_count=3,         record_last_timestamp=1234567897000     ) ] table.source_read_expensive_query_record_list = [     PopularityInsights(         record_compute_cost=5.4321,         record_max_compute_cost=5.4321,         record_compute_cost_unit=SourceCostUnitType.CREDITS,         record_query="SELECT * from RUN_STATS",         record_query_count=123,         record_total_user_count=5     ) ] table.source_read_popular_query_record_list = [     PopularityInsights(         record_compute_cost=5.4321,         record_compute_cost_unit=SourceCostUnitType.CREDITS,         record_query_count=123,         record_query="SELECT * from RUN_STATS",         record_total_user_count=5     ) ] table.source_read_slow_query_record_list = [     PopularityInsights(         record_user="g",         record_last_timestamp=1234567895000,         record_query_duration=321,         record_query="SELECT * from RUN_STATS"     ) ] response = client.asset.save(table)  # (5)  ``` |

1. Use the `updater()` method to update an existing asset, providing the required details for that particular asset type (for more details, see [Updating an asset](../../../advanced-examples/update/)).
2. For single quantified metrics, you can directly set the metric.
3. For lists, you can directly set the lists.
4. For the more detailed records, you need to build each `PopularityInsights` object with its embedded details.
5. Finally, you must save the object you've built up to persist this information in Atlan.

| Add or update usage details | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 ``` | ``` val table = Table.updater( // (1)         "default/hive/1657025257/OPS/DEFAULT/RUN_STATS",         "RUN_STATS")     .popularityScore(1.2345) // (2)     .sourceReadCount(123L)     .sourceReadQueryCost(5.4321)     .sourceReadUserCount(5L)     .sourceTotalCost(5.4321)     .sourceQueryComputeCosts(List.of("A", "B")) // (3)     .sourceReadRecentUsers(List.of("c", "d", "e"))     .sourceReadRecentUser("f")     .sourceReadRecentUser("g")     .sourceReadTopUsers(List.of("g", "f", "e"))     .sourceReadTopUser("d")     .sourceReadTopUser("c")     .sourceQueryComputeCostRecord( // (4)         PopularityInsights.builder()             .recordComputeCost(4.4321)             .recordComputeCostUnit(SourceCostUnitType.CREDITS)             .recordWarehouse("A")             .build())     .sourceQueryComputeCostRecord(         PopularityInsights.builder()             .recordComputeCost(1.0)             .recordComputeCostUnit(SourceCostUnitType.CREDITS)             .recordWarehouse("B")             .build())     .sourceReadRecentUserRecord(         PopularityInsights.builder()             .recordUser("c")             .recordLastTimestamp(1234567899000L)             .build())     .sourceReadRecentUserRecord(         PopularityInsights.builder()             .recordUser("d")             .recordLastTimestamp(1234567898000L)             .build())     .sourceReadRecentUserRecord(         PopularityInsights.builder()             .recordUser("e")             .recordLastTimestamp(1234567897000L)             .recordQueryCount(3L)             .build())     .sourceReadTopUserRecord(         PopularityInsights.builder()             .recordUser("g")             .recordQueryCount(100L)             .recordLastTimestamp(1234567895000L)             .build())     .sourceReadTopUserRecord(         PopularityInsights.builder()             .recordUser("f")             .recordQueryCount(20L)             .recordLastTimestamp(1234567896000L)             .build())     .sourceReadTopUserRecord(         PopularityInsights.builder()             .recordUser("e")             .recordQueryCount(3L)             .recordLastTimestamp(1234567897000L)             .build())     .sourceReadExpensiveQueryRecord(         PopularityInsights.builder()             .recordComputeCost(5.4321)             .recordMaxComputeCost(5.4321)             .recordComputeCostUnit(SourceCostUnitType.CREDITS)             .recordQuery("SELECT * from RUN_STATS")             .recordQueryCount(123L)             .recordTotalUserCount(5L)             .build())     .sourceReadPopularQueryRecord(         PopularityInsights.builder()             .recordComputeCost(5.4321)             .recordComputeCostUnit(SourceCostUnitType.CREDITS)             .recordQueryCount(123L)             .recordQuery("SELECT * from RUN_STATS")             .recordTotalUserCount(5L)             .build())     .sourceReadSlowQueryRecord(         PopularityInsights.builder()             .recordUser("g")             .recordLastTimestamp(124567895000L)             .recordQueryDuration(321L)             .recordQuery("SELECT * from RUN_STATS")             .build())     .build() val response = table.save(client) // (5)  ``` |

1. Use the `updater()` method to update an existing asset, providing the required details for that particular asset type (for more details, see [Updating an asset](../../../advanced-examples/update/)).
2. For single quantified metrics, you can directly set the metric.
3. For lists, you can directly set the lists or individually add elements (or a combination of the two).
4. For the more detailed records, you need to build the `PopularityInsights` object with its embedded details. As with the lists you can associate these detailed records with the asset many\-at\-a\-time or one\-by\-one.
5. Finally, you must save the object you've built up to persist this information in Atlan. Because this operation will persist the asset in Atlan, you must [provide it an `AtlanClient`](../../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 ``` | ``` {   "entities": [{ // (1)     "typeName": "Table", // (2)     "attributes": {       "name": "RUN_STATS", // (3)       "qualifiedName": "default/hive/1657025257/OPS/DEFAULT/RUN_STATS", // (4)       "popularityScore": 1.2345, // (5)       "sourceReadCount": 123,       "sourceReadQueryCost": 5.4321,       "sourceReadUserCount": 5,       "sourceTotalCost": 5.4321,       "sourceLastReadAt": 1689508975245,       "sourceCostUnit": "Credits",       "sourceQueryComputeCostList": [ // (6)         "A", "B"       ],       "sourceReadTopUserList": [         "c", "d", "e", "f", "g"       ],       "sourceReadRecentUserList": [         "g", "f", "e", "d", "c"       ],       "sourceQueryComputeCostRecordList": [ // (7)         {           "typeName": "PopularityInsights",           "attributes": {             "recordWarehouse": "A",             "recordComputeCost": 4.4321,             "recordComputeCostUnit": "Credits"           }         },         {           "typeName": "PopularityInsights",           "attributes": {             "recordWarehouse": "B",             "recordComputeCost": 1.0,             "recordComputeCostUnit": "Credits"           }         }       ],       "sourceReadRecentUserRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordUser": "c",             "recordLastTimestamp": 1234567899000           }         },         {           "typeName": "PopularityInsights",           "attributes": {             "recordUser": "d",             "recordLastTimestamp": 1234567898000           }         },         {           "typeName": "PopularityInsights",           "attributes": {             "recordUser": "e",             "recordLastTimestamp": 1234567897000,             "recordQueryCount": 3           }         }       ],       "sourceReadTopUserRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordUser": "g",             "recordQueryCount": 100,             "recordLastTimestamp": 1234567895000           }         },         {           "typeName": "PopularityInsights",           "attributes": {             "recordUser": "f",             "recordQueryCount": 20,             "recordLastTimestamp": 1234567896000           }         },         {           "typeName": "PopularityInsights",           "attributes": {             "recordUser": "e",             "recordQueryCount": 3,             "recordLastTimestamp": 1234567897000           }         }       ],       "sourceReadExpensiveQueryRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordTotalUserCount": 5,             "recordQueryCount": 123,             "recordComputeCost": 5.4321,             "recordQuery": "SELECT * from RUN_STATS",             "recordMaxComputeCost": 5.4321,             "recordComputeCostUnit": "Credits"           }         }       ],       "sourceReadPopularQueryRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordTotalUserCount": 5,             "recordQueryCount": 123,             "recordComputeCost": 5.4321,             "recordQuery": "SELECT * from RUN_STATS",             "recordComputeCostUnit": "Credits"           }         }       ],       "sourceReadSlowQueryRecordList": [         {           "typeName": "PopularityInsights",           "attributes": {             "recordUser": "g",             "recordLastTimestamp": 124567895000,             "recordQuery": "SELECT * from RUN_STATS",             "recordQueryDuration": 321           }         }       ]     }   }] }  ``` |

1. All assets must be wrapped in an `entities` array.
2. The `typeName` must match the appropriate type for the asset being updated.
3. You must provide the exact name of the asset (case\-sensitive).
4. You must provide the exact `qualifiedName` of the asset (case\-sensitive).
5. For single quantified metrics, you can directly set the metric.
6. For lists, you can directly set the lists.
7. For the more detailed records, you need to build each `PopularityInsights` object with its embedded details.

---

2023\-03\-062025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/profiling-and-popularity/popularity/) to provide us with more information. 

Back to top

[Previous Manage column profiling](../profiling/) [Next Governance structures](../../../../governance/) 

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

