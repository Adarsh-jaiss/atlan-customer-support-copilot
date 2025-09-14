# Source URL
https://developer.atlan.com/patterns/create/quick_sight/

================================================================================

<!--
canonical: https://developer.atlan.com/patterns/create/quick_sight/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Operations on QuickSight assets (QuickSightFolder, QuickSightAnalysis, QuickSightDashboard, QuickSightDataset, QuickSightAnalysisVisual, QuickSightDashboardVisual, QuickSightDatasetField).
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Operations on QuickSight assets (QuickSightFolder, QuickSightAnalysis, QuickSightDashboard, QuickSightDataset, QuickSightAnalysisVisual, QuickSightDashboardVisual, QuickSightDatasetField).
meta-og-image: https://developer.atlan.com/assets/images/social/patterns/create/quick_sight.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Manage Amazon QuickSight assets - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/patterns/create/quick_sight/
meta-twitter:card: summary_large_image
meta-twitter:description: Operations on QuickSight assets (QuickSightFolder, QuickSightAnalysis, QuickSightDashboard, QuickSightDataset, QuickSightAnalysisVisual, QuickSightDashboardVisual, QuickSightDatasetField).
meta-twitter:image: https://developer.atlan.com/assets/images/social/patterns/create/quick_sight.png
meta-twitter:title: Manage Amazon QuickSight assets - Developer
meta-viewport: width=device-width,initial-scale=1
title: Manage Amazon QuickSight assets - Developer
-->

[Skip to content](#manage-amazon-quicksight-assets) Developer Manage Amazon QuickSight assets Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

[/api/meta/entity/bulk (POST)](../../../endpoints/#tag:apimetaentitybulk-post)

Manage Amazon QuickSight assets[¶](#manage-amazon-quicksight-assets "Permanent link")
=====================================================================================

In general, these should be:

* [Created in top\-down order](../) (connection, then QuickSightFolder, then QuickSightAnalysis and QuickSightDashboard and QuickSightDataset then QuickSightAnalysisVisual and QuickSightDashboardVisual and QuickSightDatasetField respectively)
* Deleted in bottom\-up order (QuickSightAnalysisVisual and QuickSightDashboardVisual and QuickSightDatasetField, then QuickSightAnalysis and QuickSightDashboard and QuickSightDataset, then QuickSightFolder, then connection)[1](#fn:1)

```
erDiagram
    Connection ||--o{ QuickSightAnalysis : ""
    Connection ||--o{ QuickSightDashboard : ""
    Connection ||--o{ QuickSightDataset : ""
    Connection ||--o{ QuickSightFolder : ""
    QuickSightFolder }o--o{ QuickSightAnalysis : quickSightAnalyses
    QuickSightFolder }o--o{ QuickSightDashboard : quickSightDashboards
    QuickSightFolder }o--o{ QuickSightDataset : quickSightDatasets
    QuickSightAnalysis |o--o{ QuickSightAnalysisVisual : quickSigntAnalysisVisuals
    QuickSightDashboard |o--o{ QuickSightDashboardVisual : quickSightDashboardVisuals
    QuickSightDataset |o--o{ QuickSightDatasetField : quickSightDatasetFields
```

Asset structure[¶](#asset-structure "Permanent link")
-----------------------------------------------------

### Connection[¶](#connection "Permanent link")

[7\.0\.0](https://github.com/atlanhq/atlan-python/releases/tag/7.0.0 "Minimum version")

A QuickSight [connection](../../../models/entities/connection/) requires a `name` and `qualifiedName`. For creation, specific settings are also required to distinguish it as a QuickSight connection rather than another type of connection. In addition, *at least one* of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a QuickSight connection | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import Connection from pyatlan.model.enums import AtlanConnectorType  client = AtlanClient() admin_role_guid = client.role_cache.get_id_for_name("$admin") # (1) connection = Connection.creator( # (2)     client=client, # (3)     name="QuickSight-connection", # (4)     connector_type=AtlanConnectorType.QUICKSIGHT, # (5)     admin_roles=[admin_role_guid], # (6)     admin_groups=["group2"], # (7)     admin_users=["jsmith"] # (8) )  response = client.asset.save(connection) # (9) connection_qualified_name = response.assets_created(asset_type=Connection)[0].qualified_name # (10)  ``` |

1. Retrieve the GUID for the admin role, to use later for defining the roles that can administer the connection.
2. Build up the minimum request to create a connection.
3. You must provide a client instance.
4. Provide a human\-readable name for your connection, such as `production` or `development`.
5. Set the type of connection to `QuickSight`.
6. List the workspace roles that should be able to administer the connection
(or `None` if none). All users with that workspace role (current and future) will be
administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
7. List the group names that can administer this connection (or `None` if none). All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
8. List the user names that can administer this connection (or `None` if none). Note that the values here are the username(s) of the user(s). *At least one of `admin_roles`, `admin_groups`, or `admin_users` must be provided.*
9. Actually call Atlan to create the connection.
10. Retrieve the qualifiedName for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 ``` | ``` {   "entities": [     {       "typeName": "Connection", // (1)       "attributes": {         "name": "quicksight-connection", // (2)         "connectorName": "quicksight", // (3)         "qualifiedName": "default/quicksight/1739901911", // (4)         "category": "bi", // (5)         "adminRoles": [ // (6)           "e7ae0295-c60a-469a-bd2c-fb903943aa02"         ],         "adminGroups": [ // (7)           "group2"         ],         "adminUsers": [ // (8)           "jsmith"         ]       }     }   ] }  ``` |

1. The `typeName` must be exactly `Connection`.
2. Human\-readable name for your connection, such as `production` or `development`.
3. The `connectorName` must be exactly `quicksight`.
4. The `qualifiedName` should follow the pattern: `default/quicksight/<epoch>`, where `<epoch>` is the time in milliseconds at which the connection is being created.
5. The `category` must be `bi`.
6. List any workspace roles that can administer this connection. All users with that workspace role (current and future) will be administrators of the connection. Note that the values here need to be the GUID(s) of the workspace role(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
7. List any groups that can administer this connection. All users within that group (current and future) will be administrators of the connection. Note that the values here are the name(s) of the group(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*
8. List any users that can administer this connection. Note that the values here are the username(s) of the user(s). *At least one of `adminRoles`, `adminGroups`, or `adminUsers` must be provided.*

Access policies

Atlan creates the policies that grant access to a connection, including the ability to retrieve the connection and to create assets within it, asynchronously. It can take several seconds (even up to approximately 30 seconds) before these are in place after creating the connection.

You may therefore need to wait before you'll be able to create the assets below within the connection.

To confirm access, [retrieve the connection](../../../snippets/advanced-examples/read/) after it has been created. The SDKs' retry loops will automatically retry until the connection can be successfully retrieved. At that point, your API token has permission to create the other assets.

Note: if you are *reusing* an existing connection rather than creating one via your API token, you must give your API token a persona that has access to that connection. Otherwise all attempts to create, read, update, or delete assets within that connection will fail due to a lack of permissions.

### QuickSightFolder[¶](#quicksightfolder "Permanent link")

[4\.2\.5](https://github.com/atlanhq/atlan-python/releases/tag/4.2.5 "Minimum version")

A [`QuickSightFolder`](../../../models/entities/quicksightfolder/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `connectionQualifiedName` of the connection for the QuickSight folder and
the `QuickSight ID` for this QuickSight folder on Amazon QuickSight.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a QuickSight folder | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import QuickSightFolder  client = AtlanClient() quick_sight_folder = QuickSightFolder.creator( # (1)     name="myQuickSightFolder", # (2)     connection_qualified_name=connection_qualified_name, # (3)     quick_sight_id="12345292" # (4) ) response = client.asset.save(quick_sight_folder) # (5) quick_sight_folder_qualifed_name = response.assets_created(asset_type=QuickSightFolder)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a folder.
2. Provide a human\-readable name for your folder.
3. Provide the `qualifiedName` of the QuickSight connection.
4. Provide the `QuickSight ID` used in Amazon QuickSight folder.
5. Actually call Atlan to create the folder.
6. Retrieve the created folder for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {     "entities": [         {         "typeName": "QuickSightFolder", // (1)         "attributes": {             "name": "quicksight-folder", // (2)             "connectorName": "quicksight", // (3)             "qualifiedName": "default/quicksight/1739901911/12345292", // (4)             "connectionQualifiedName": "default/quicksight/1739901911", // (5)             "quickSightId": "12345292" // (6)         }         }     ] }  ``` |

1. The `typeName` must be exactly `QuickSightFolder`.
2. Human\-readable name for your folder.
3. The `connectorName` must be exactly `quicksight`.
4. The `qualifiedName` should follow the pattern: `default/quicksight/<epoch>/<quickSightId>`,
where `default/quicksight/<epoch>` is the `qualifiedName` of the connection
for this folder and `<quickSightId>` is the Q`uickSight ID` for this Amazon QuickSight folder.
5. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this folder.
6. The `quickSightId` provided for this Amazon QuickSight folder.

### QuickSightDataset[¶](#quicksightdataset "Permanent link")

[4\.2\.5](https://github.com/atlanhq/atlan-python/releases/tag/4.2.5 "Minimum version")

A [`QuickSightDataset`](../../../models/entities/quicksightdataset/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `connectionQualifiedName` of the connection for the QuickSight dataset and
the `QuickSight ID` for this QuickSight dataset on Amazon QuickSight.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a QuickSight dataset | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import QuickSightDataset  client = AtlanClient() quick_sight_dataset = QuickSightDataset.creator( # (1)     name="myQuickSightDataset", # (2)     connection_qualified_name=connection_qualified_name, # (3)     quick_sight_id="12345292" # (4) ) response = client.asset.save(quick_sight_dataset) # (5) quick_sight_dataset_qualifed_name = response.assets_created(asset_type=QuickSightDataset)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a dataset.
2. Provide a human\-readable name for your dataset.
3. Provide the `qualifiedName` of the QuickSight connection.
4. Provide the `QuickSight ID` used in Amazon QuickSight dataset.
5. Actually call Atlan to create the dataset.
6. Retrieve the created dataset for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {     "entities": [         {         "typeName": "QuickSightDataset", // (1)         "attributes": {             "name": "quicksight-dataset", // (2)             "connectorName": "quicksight", // (3)             "qualifiedName": "default/quicksight/1739901911/12345292", // (4)             "connectionQualifiedName": "default/quicksight/1739901911",// (5)             "quickSightId": "12345292" // (6)         }         }     ] }  ``` |

1. The `typeName` must be exactly `QuickSightDataset`.
2. Human\-readable name for your dataset.
3. The `connectorName` must be exactly `quicksight`.
4. The `qualifiedName` should follow the pattern: `default/quicksight/<epoch>/<quickSightId>`,
where `default/quicksight/<epoch>` is the `qualifiedName` of the connection
for this dataset and `<quickSightId>` is the `QuickSight ID` for this Amazon QuickSight dataset.
5. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this dataset.
6. The `quickSightId` provided for this Amazon QuickSight dataset.

### QuickSightDashboard[¶](#quicksightdashboard "Permanent link")

[4\.2\.5](https://github.com/atlanhq/atlan-python/releases/tag/4.2.5 "Minimum version")

A [`QuickSightDashboard`](../../../models/entities/quicksightdashboard/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `connectionQualifiedName` of the connection for the QuickSight dashboard and
the `QuickSight ID` for this QuickSight dashboard on Amazon QuickSight.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a QuickSight dashboard | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import QuickSightDashboard  client = AtlanClient() quick_sight_dashboard = QuickSightDashboard.creator( # (1)     name="myQuickSightDashboard", # (2)     connection_qualified_name=connection_qualified_name, # (3)     quick_sight_id="12345292" # (4) ) response = client.asset.save(quick_sight_dashboard) # (5) quick_sight_dashboard_qualifed_name = response.assets_created(asset_type=QuickSightDashboard)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a dashboard.
2. Provide a human\-readable name for your dashboard.
3. Provide the `qualifiedName` of the QuickSight connection.
4. Provide the `QuickSight ID` used in Amazon QuickSight dashboard.
5. Actually call Atlan to create the dashboard.
6. Retrieve the created dashboard for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {     "entities": [         {         "typeName": "QuickSightDashboard", // (1)         "attributes": {             "name": "quicksight-dashboard", // (2)             "connectorName": "quicksight", // (3)             "qualifiedName": "default/quicksight/1739901911/12345292", // (4)             "connectionQualifiedName": "default/quicksight/1739901911",// (5)             "quickSightId": "12345292" // (6)         }         }     ] }  ``` |

1. The `typeName` must be exactly `QuickSightDashboard`.
2. Human\-readable name for your dashboard.
3. The `connectorName` must be exactly `quicksight`.
4. The `qualifiedName` should follow the pattern: `default/quicksight/<epoch>/<quickSightId>`,
where `default/quicksight/<epoch>` is the `qualifiedName` of the connection
for this dashboard and `<quickSightId>` is the `QuickSight ID` for this Amazon QuickSight dashboard.
5. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this dashboard.
6. The `quickSightId` provided for this Amazon QuickSight dashboard.

### QuickSightAnalysis[¶](#quicksightanalysis "Permanent link")

[4\.2\.5](https://github.com/atlanhq/atlan-python/releases/tag/4.2.5 "Minimum version")

A [`QuickSightAnalysis`](../../../models/entities/quicksightanalysis/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `connectionQualifiedName` of the connection for the QuickSight analysis and
the `QuickSight ID` for this QuickSight analysis on Amazon QuickSight.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a QuickSight analysis | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import QuickSightAnalysis  client = AtlanClient() quick_sight_analysis = QuickSightAnalysis.creator( # (1)     name="myQuickSightAnalysis", # (2)     connection_qualified_name=connection_qualified_nam, # (3)     quick_sight_id="12345292" # (4) ) response = client.asset.save(quick_sight_analysis) # (5) quick_sight_analysis_qualifed_name = response.assets_created(asset_type=QuickSightAnalysis)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a analysis.
2. Provide a human\-readable name for your analysis.
3. Provide the `qualifiedName` of the QuickSight connection.
4. Provide the `QuickSight ID` used in Amazon QuickSight analysis.
5. Actually call Atlan to create the analysis.
6. Retrieve the created analysis for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` {     "entities": [         {         "typeName": "QuickSightAnalysis", // (1)         "attributes": {             "name": "quicksight-analysis", // (2)             "connectorName": "quicksight", // (3)             "qualifiedName": "default/quicksight/1739901911/12345292", // (4)             "connectionQualifiedName": "default/quicksight/1739901911",// (5)             "quickSightId": "12345292"// (6)         }         }     ] }  ``` |

1. The `typeName` must be exactly `QuickSightAnalysis`.
2. Human\-readable name for your analysis.
3. The `connectorName` must be exactly `quicksight`.
4. The `qualifiedName` should follow the pattern: `default/quicksight/<epoch>/<quickSightId>`,
where `default/quicksight/<epoch>` is the `qualifiedName` of the connection
for this analysis and `<quickSightId>` is the `QuickSight ID` for this Amazon QuickSight analysis.
5. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this analysis.
6. The `quickSightId` provided for this Amazon QuickSight analysis.

### QuickSightDatasetField[¶](#quicksightdatasetfield "Permanent link")

[4\.2\.5](https://github.com/atlanhq/atlan-python/releases/tag/4.2.5 "Minimum version")

A [`QuickSightDatasetField`](../../../models/entities/quicksightdatasetfield/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `DatasetQualifiedName` of the QuickSight dataset that you wish to link this field to and
the `QuickSight ID` for this QuickSight dataset field on Amazon QuickSight.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a QuickSight dataset field | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import QuickSightDatasetField  client = AtlanClient() quick_sight_dataset_field = QuickSightDatasetField.creator( # (1)     name="myQuickSightDatasetField", # (2)     quick_sight_dataset_qualified_name=dataset_qualified_name, # (3)     quick_sight_id="45678" # (4) ) response = client.asset.save(quick_sight_dataset_field) # (5) quick_sight_dataset_field_qualifed_name = response.assets_created(asset_type=QuickSightDatasetField)[0].qualified_name # (6)  ``` |

1. Build up the minimum request to create a dataset field.
2. Provide a human\-readable name for your dataset field.
3. Provide the `qualifiedName` of the QuickSight dataset.
4. Provide the `QuickSight ID` used in Amazon QuickSight dataset field.
5. Actually call Atlan to create the dataset field.
6. Retrieve the created dataset field for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 ``` | ``` {     "entities": [         {         "typeName": "QuickSightDatasetField", // (1)         "attributes": {             "name": "quicksight-dataset-field", // (2)             "connectorName": "quicksight", // (3)             "qualifiedName": "default/quicksight/1739901911/12345292/45678", // (4)             "quickSightDatasetQualifiedName": "default/quicksight/1739901911/12345292", // (5)             "quickSightDataset": {                  "typeName": "QuickSightDataset", // (6)                 "uniqueAttributes": {                     "qualifiedName": "default/quicksight/1739901911/12345292" // (7)                 }             },             "connectionQualifiedName": "default/quicksight/1739901911", // (8)             "quickSightId": "45678" // (9)         }         }     ] }  ``` |

1. The `typeName` must be exactly `QuickSightDatasetField`.
2. Human\-readable name for your dataset field.
3. The `connectorName` must be exactly `quicksight`.
4. The `qualifiedName` should follow the pattern: `default/quicksight/<epoch>/<quickSightId_dataset>/<quickSightId>`,
where `default/quicksight/<epoch>/<quickSightId_dataset>` is the `qualifiedName` of the dataset
for this dataset field and `<quickSightId>` is the `QuickSight ID` for this Amazon QuickSight dataset field.
5. The `quickSightDatasetQualifiedName` must be the exact `qualifiedName` of the dataset for this dataset field.
6. The `typeName` for this embedded reference must be `QuickSightDataset`.
7. To complete the reference, you must include a `uniqueAttributes` with the `qualifiedName` of the Dataset. Note: the Dataset must already exist 
in Atlan before creating the dataset field.
8. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this dataset field.
9. The `quickSightId` provided for this Amazon QuickSight dataset field.

### QuickSightDashboardVisual[¶](#quicksightdashboardvisual "Permanent link")

[4\.2\.5](https://github.com/atlanhq/atlan-python/releases/tag/4.2.5 "Minimum version")

A [`QuickSightDashboardVisual`](../../../models/entities/quicksightdashboardvisual/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `DashboardQualifiedName` of the QuickSight dashboard that you wish to link this dashboard visual to, along with the `QuickSight ID`, `QuickSight Sheet ID`, and `QuickSight Sheet Name` for this dashboard visual in Amazon QuickSight.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a QuickSight dashboard visual | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import QuickSightDashboardVisual  client = AtlanClient() quick_sight_dashboard_visual = QuickSightDashboardVisual.creator( # (1)     name="myQuickSightDashboardVisual", # (2)     quick_sight_dashboard_qualified_name=dashboard_qualified_name, # (3)     quick_sight_id="45678", # (4)     quick_sight_sheet_id="3456431", # (5)     quick_sight_sheet_name="test-sheet-name", # (6) ) response = client.asset.save(quick_sight_dashboard_visual) # (7) quick_sight_dashboard_visual_qualifed_name = response.assets_created(asset_type=QuickSightDashboardVisual)[0].qualified_name # (8)  ``` |

1. Build up the minimum request to create a dashboard visual.
2. Provide a human\-readable name for your dashboard visual.
3. Provide the `qualifiedName` of the QuickSight dashboard.
4. Provide the `QuickSight ID` used in Amazon QuickSight dashboard visual.
5. Provide the `QuickSight Sheet ID` which links to Amazon QuickSight dashboard visual.
6. Provide the `QuickSight Sheet Name` which links to Amazon QuickSight dashboard visual.
7. Actually call Atlan to create the dashboard visual.
8. Retrieve the created dashboard visual for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` {     "entities": [         {         "typeName": "QuickSightDashboardVisual", // (1)         "attributes": {             "name": "quicksight-dashboard-visual", // (2)             "connectorName": "quicksight", // (3)             "qualifiedName": "default/quicksight/1739901911/12345292/3456431/45678", //(4)             "quickSightDashboardQualifiedName": "default/quicksight/1739901911/12345292", // (5)             "quickSightSheetId": "3456431", // (6)             "quickSightSheetName": "test-sheet-name", // (7)             "QuickSightDashboard": {                 "typeName": "QuickSightDashboard", // (8)                 "uniqueAttributes": {                     "qualifiedName": "default/quicksight/1739901911/12345292" // (9)                 }             },             "connectionQualifiedName": "default/quicksight/1739901911", // (10)             "quickSightId": "45678" // (11)         }         }     ] }  ``` |

1. The `typeName` must be exactly `QuickSightDashboardVisual`.
2. Human\-readable name for your dashboard visual.
3. The `connectorName` must be exactly `quicksight`.
4. The `qualifiedName` should follow the pattern: `default/quicksight/<epoch>/<quickSightId_dashboard>/<quickSightSheetId>/<quickSightId>`, where `default/quicksight/<epoch>/<quickSightId_dashboard>` is the `qualifiedName` of the dashboard
for this dashboard visual, is the `QuickSight Sheet ID` for this Amazon QuickSight dashboard visual and `<quickSightId>` is the `QuickSight ID` for this Amazon QuickSight dashboard visual.
5. The `quickSightAnalysisQualifiedName` must be the exact `qualifiedName` of the analysis for this dashboard visual.
6. The `quickSightSheetId` must be the exact `QuickSight Sheet ID` for this Amazon QuickSight dashboard visual.
7. The `quickSightSheetName` must be the exact `QuickSight Sheet Name` for this Amazon QuickSight dashboard visual.
8. The `typeName` for this embedded reference must be `QuickSightDashboard`.
9. To complete the reference, you must include a `uniqueAttributes` with the `qualifiedName` of the dashboard. Note: the analysis must already exist 
in Atlan before creating the dashboard visual.
10. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this dashboard visual.
11. The `quickSightId` provided for this Amazon QuickSight dashboard visual.

### QuickSightAnalysisVisual[¶](#quicksightanalysisvisual "Permanent link")

[4\.2\.5](https://github.com/atlanhq/atlan-python/releases/tag/4.2.5 "Minimum version")

A [`QuickSightAnalysisVisual`](../../../models/entities/quicksightanalysisvisual/) requires a `name` and a `qualifiedName`.
For creation, you also need to specify the `AnalysisQualifiedName` of the QuickSight analysis that you wish to link this analysis visual to, along with the `QuickSight ID`, `QuickSight Sheet ID`, and `QuickSight Sheet Name` for this analysis visual in Amazon QuickSight.

Java

Python

Kotlin

Raw REST API

Coming soon

| Create a QuickSight analysis visual | |
| --- | --- |
| ``` 17 18 19 20 21 22 23 24 25 26 27 28 29 ``` | ``` from pyatlan.client.atlan import AtlanClient from pyatlan.model.assets import QuickSightAnalysisVisual  client = AtlanClient() quick_sight_analysis_visual = QuickSightAnalysisVisual.creator( # (1)     name="myQuickSightAnalysisVisual", # (2)     quick_sight_analysis_qualified_name=analysis_qualified_name, # (3)     quick_sight_id="45678", # (4)     quick_sight_sheet_id="3456431", # (5)     quick_sight_sheet_name="test-sheet-name", # (6) ) response = client.asset.save(quick_sight_analysis_visual) # (7) quick_sight_analysis_visual_qualifed_name = response.assets_created(asset_type=QuickSightAnalysisVisual)[0].qualified_name # (8)  ``` |

1. Build up the minimum request to create a analysis visual.
2. Provide a human\-readable name for your analysis visual.
3. Provide the `qualifiedName` of the QuickSight analysis.
4. Provide the `QuickSight ID` used in Amazon QuickSight analysis visual.
5. Provide the `QuickSight Sheet ID` which links to Amazon QuickSight analysis visual.
6. Provide the `QuickSight Sheet Name` which links to Amazon QuickSight analysis visual.
7. Actually call Atlan to create the analysis visual.
8. Retrieve the created analysis visual for use in subsequent creation calls.
(You'd probably want to do some `None` checking first.)

Coming soon

| POST /api/meta/entity/bulk | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 ``` | ``` {     "entities": [         {         "typeName": "QuickSightAnalysisVisual", // (1)         "attributes": {             "name": "quicksight-analysis-visual", // (2)             "connectorName": "quicksight", // (3)             "qualifiedName": "default/quicksight/1739901911/12345292/3456431/45678", //(4)             "quickSightAnalysisQualifiedName": "default/quicksight/1739901911/12345292", // (5)             "quickSightSheetId": "3456431", // (6)             "quickSightSheetName": "test-sheet-name", // (7)             "QuickSightAnalysis": {                 "typeName": "QuickSightAnalysis", // (8)                 "uniqueAttributes": {                     "qualifiedName": "default/quicksight/1739901911/12345292" // (9)                 }             },             "connectionQualifiedName": "default/quicksight/1739901911", // (10)             "quickSightId": "45678" // (11)         }         }     ] }  ``` |

1. The `typeName` must be exactly `QuickSightAnalysisVisual`.
2. Human\-readable name for your analysis visual.
3. The `connectorName` must be exactly `quicksight`.
4. The `qualifiedName` should follow the pattern: `default/quicksight/<epoch>/<quickSightId_analysis>/<quickSightSheetId>/<quickSightId>`, where `default/quicksight/<epoch>/<quickSightId_analysis>` is the `qualifiedName` of the analysis
for this analysis visual, is the `QuickSight Sheet ID` for this Amazon QuickSight analysis visual and `<quickSightId>` is the `QuickSight ID` for this Amazon QuickSight analysis visual.
5. The `quickSightAnalysisQualifiedName` must be the exact `qualifiedName` of the analysis for this analysis visual.
6. The `quickSightSheetId` must be the exact `QuickSight Sheet ID` for this Amazon QuickSight analysis visual.
7. The `quickSightSheetName` must be the exact `QuickSight Sheet Name` for this Amazon QuickSight analysis visual.
8. The `typeName` for this embedded reference must be `QuickSightAnalysis`.
9. To complete the reference, you must include a `uniqueAttributes` with the `qualifiedName` of the analysis. Note: the analysis must already exist 
in Atlan before creating the analysis visual.
10. The `connectionQualifiedName` must be the exact `qualifiedName` of the connection for this analysis visual.
11. The `quickSightId` provided for this Amazon QuickSight analysis visual.

Available relationships[¶](#available-relationships "Permanent link")
---------------------------------------------------------------------

Every level of the `QuickSight` structure is an `Asset`,
and can therefore be related to the following other assets.

```
erDiagram
  Asset }o--o{ AtlasGlossaryTerm : meanings
  Asset ||--o{ Link : links
  Asset ||--o| Readme : readme
  Asset }o--o{ Process : inputToProcesses
  Asset }o--o{ Process : outputFromProcesses
```

### AtlasGlossaryTerm[¶](#atlasglossaryterm "Permanent link")

A [glossary term](../../../models/entities/atlasglossaryterm/) provides meaning to an asset. The [link terms to assets snippet](../../../snippets/common-examples/term-assignment/) provides more detail on setting this relationship.

### Link[¶](#link "Permanent link")

A [link](../../../models/entities/link/) provides additional context to an asset, by providing a URL to additional information.

### Readme[¶](#readme "Permanent link")

A [README](../../../models/entities/readme/) provides rich documentation for an asset. The [add asset READMEs snippet](../../../snippets/common-examples/readme/) provides more detail on setting this relationship.

### Process[¶](#process "Permanent link")

A [process](../../../models/lineage/) provides lineage information for an asset. An asset can be both an input and an output for one or more processes. The [lineage snippets](../../../snippets/common-examples/lineage/) provide more detail on creating and working with lineage.

---

1. Although if you want to delete everything in a connection,your better avenue is the packaged [connection delete utility](https://ask.atlan.com/hc/en-us/articles/6755306791697)  in the UI.[↩](#fnref:1 "Jump back to footnote 1 in the text")

---

2025\-02\-182025\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/patterns/create/quick_sight/) to provide us with more information. 

Back to top

[Previous Manage Insights assets](../insight/) [Next Manage DocumentDB assets](../documentdb/) 

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

