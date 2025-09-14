# Source URL
https://developer.atlan.com/models/

================================================================================

<!--
canonical: https://developer.atlan.com/models/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Full model reference - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/index.png
meta-twitter:title: Full model reference - Developer
meta-viewport: width=device-width,initial-scale=1
title: Full model reference - Developer
-->

[Skip to content](#full-model-reference) Developer Full model reference Initializing search 

* 
* [Overview](..)
* [Getting started](../getting-started/)
* [Common tasks](../snippets/)
* [Asset\-specific](../patterns/)
* [Governance structures](../governance/)
* [Reference](../reference/)

Full model reference[¶](#full-model-reference "Permanent link")
===============================================================

Strong typing[¶](#strong-typing "Permanent link")
-------------------------------------------------

Our SDKs are strongly\-typed to represent every [type](../concepts/review/#type-definitions)'s attributes and relationships directly. This reduces the burden on you to understand how these are named, capitalized, spelled, or even the type of data they possess — since all of those details are encoded directly into the models the SDKs use.

Here you will find a complete reference of all of these attributes and relationships.

Raw properties[¶](#raw-properties "Permanent link")
---------------------------------------------------

In certain rare cases, our strongly\-typed model might not (yet) include a property you need to access. In these cases, you can always directly access the raw properties returned in every API response.

[2\.0\.4](https://github.com/atlanhq/atlan-python/releases/tag/2.0.4 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

For example, when retrieving workflow credentials the response object does not include extra details that are connector\-specific. However, you can still access these extra properties:

Java

Python

Kotlin

| Access raw API response | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` // Snowflake workflow credential CredentialResponse response = client.credentials.get("e3d74922-e2e8-4dbe-a7ed-3937e5153a51");  response.getRawJsonObject(); // (1)!  ``` |

1. Use the `getRawJsonObject()` accessor to access the entire (raw) response object from the API. For this credential example `getRawJsonObject()` looks like:

    ```
    {
      "id": "e3d74922-e2e8-4dbe-a7ed-3937e5153a51",
      "version": "super-king-1886",
      "isActive": true,
      "createdAt": 1719240600149,
      "updatedAt": 1719240600149,
      "createdBy": "service-account-apikey-5aca94d3-f0a3-4af5-b074-567e209c1b75",
      "tenantId": "default",
      "name": "default-snowflake-1719240599-0",
      "description": null,
      "connectorConfigName": "atlan-connectors-snowflake",
      "connector": "snowflake",
      "connectorType": "jdbc",
      "authType": "basic",
      "host": "abc123.snowflakecomputing.com",
      "port": 443,
      "metadata": null,
      "level": null,
      "connection": null,
      "username": "atlan-user",
      "extra": {
        "role": "ADMIN",
        "warehouse": "DEV"
      }
    }

    ```

| Access extra response fields | |
| --- | --- |
| ``` 1 2 3 4 5 6 7 8 ``` | ``` from pyatlan.client.atlan import AtlanClient  client = AtlanClient()  # Snowflake workflow credential response = client.credentials.get(guid="e3d74922-e2e8-4dbe-a7ed-3937e5153a51")  response.__atlan_extra__  # (1)!  ``` |

1. Use `__atlan_extra__` dict field for any response model to access extra API response properties. For this credential example `__atlan_extra__` looks like:

    ```
    {
      "username": "atlan-user",
      "extra": {
        "role": "ADMIN",
        "warehouse": "DEV"
      }
    }

    ```

| Access raw API response | |
| --- | --- |
| ``` 1 2 3 4 ``` | ``` // Snowflake workflow credential val response = client.credentials.get("e3d74922-e2e8-4dbe-a7ed-3937e5153a51")  response.rawJsonObject // (1)!  ``` |

1. Use the `rawJsonObject` field to access the entire (raw) response object from the API. For this credential example `rawJsonObject` looks like:

    ```
    {
      "id": "e3d74922-e2e8-4dbe-a7ed-3937e5153a51",
      "version": "super-king-1886",
      "isActive": true,
      "createdAt": 1719240600149,
      "updatedAt": 1719240600149,
      "createdBy": "service-account-apikey-5aca94d3-f0a3-4af5-b074-567e209c1b75",
      "tenantId": "default",
      "name": "default-snowflake-1719240599-0",
      "description": null,
      "connectorConfigName": "atlan-connectors-snowflake",
      "connector": "snowflake",
      "connectorType": "jdbc",
      "authType": "basic",
      "host": "abc123.snowflakecomputing.com",
      "port": 443,
      "metadata": null,
      "level": null,
      "connection": null,
      "username": "atlan-user",
      "extra": {
        "role": "ADMIN",
        "warehouse": "DEV"
      }
    }

    ```

Metadata assets[¶](#metadata-assets "Permanent link")
-----------------------------------------------------

These are all the metadata assets currently available through Atlan's SDKs:

```
classDiagram
    direction RL
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "entities/referenceable"
    class Asset {
        <<abstract>>
    }
    link Asset "entities/asset"
    Referenceable <|-- Asset : extends
    class Task
    link Task "entities/task"
    Asset <|-- Task : extends
    class TagAttachment
    link TagAttachment "entities/tagattachment"
    Asset <|-- TagAttachment : extends
    class Connection
    link Connection "entities/connection"
    Asset <|-- Connection : extends
    class Workflow
    link Workflow "entities/workflow"
    Asset <|-- Workflow : extends
    class Process
    link Process "entities/process"
    Asset <|-- Process : extends
    class BIProcess
    link BIProcess "entities/biprocess"
    Process <|-- BIProcess : extends
    class DbtProcess
    link DbtProcess "entities/dbtprocess"
    Process <|-- DbtProcess : extends
    class ColumnProcess
    link ColumnProcess "entities/columnprocess"
    Process <|-- ColumnProcess : extends
    class DbtColumnProcess
    link DbtColumnProcess "entities/dbtcolumnprocess"
    ColumnProcess <|-- DbtColumnProcess : extends
    class BusinessPolicyLog
    link BusinessPolicyLog "entities/businesspolicylog"
    Asset <|-- BusinessPolicyLog : extends
    class AtlasGlossaryCategory
    link AtlasGlossaryCategory "entities/atlasglossarycategory"
    Asset <|-- AtlasGlossaryCategory : extends
    class StakeholderTitle
    link StakeholderTitle "entities/stakeholdertitle"
    Asset <|-- StakeholderTitle : extends
    class Badge
    link Badge "entities/badge"
    Asset <|-- Badge : extends
    class BusinessPolicy
    link BusinessPolicy "entities/businesspolicy"
    Asset <|-- BusinessPolicy : extends
    class AccessControl {
        <<abstract>>
    }
    link AccessControl "entities/accesscontrol"
    Asset <|-- AccessControl : extends
    class Persona
    link Persona "entities/persona"
    AccessControl <|-- Persona : extends
    class Stakeholder
    link Stakeholder "entities/stakeholder"
    Persona <|-- Stakeholder : extends
    class Purpose
    link Purpose "entities/purpose"
    AccessControl <|-- Purpose : extends
    class Namespace {
        <<abstract>>
    }
    link Namespace "entities/namespace"
    Asset <|-- Namespace : extends
    class Collection
    link Collection "entities/collection"
    Namespace <|-- Collection : extends
    class Folder
    link Folder "entities/folder"
    Namespace <|-- Folder : extends
    class WorkflowRun
    link WorkflowRun "entities/workflowrun"
    Asset <|-- WorkflowRun : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "entities/catalog"
    Asset <|-- Catalog : extends
    class Airflow {
        <<abstract>>
    }
    link Airflow "entities/airflow"
    Catalog <|-- Airflow : extends
    class AirflowDag
    link AirflowDag "entities/airflowdag"
    Airflow <|-- AirflowDag : extends
    class AirflowTask
    link AirflowTask "entities/airflowtask"
    Airflow <|-- AirflowTask : extends
    class DataContract
    link DataContract "entities/datacontract"
    Catalog <|-- DataContract : extends
    class App {
        <<abstract>>
    }
    link App "entities/app"
    Catalog <|-- App : extends
    class ApplicationField
    link ApplicationField "entities/applicationfield"
    App <|-- ApplicationField : extends
    class Application
    link Application "entities/application"
    App <|-- Application : extends
    class ObjectStore {
        <<abstract>>
    }
    link ObjectStore "entities/objectstore"
    Catalog <|-- ObjectStore : extends
    class S3 {
        <<abstract>>
    }
    link S3 "entities/s3"
    ObjectStore <|-- S3 : extends
    class S3Bucket
    link S3Bucket "entities/s3bucket"
    S3 <|-- S3Bucket : extends
    class S3Object
    link S3Object "entities/s3object"
    S3 <|-- S3Object : extends
    class ADLS {
        <<abstract>>
    }
    link ADLS "entities/adls"
    ObjectStore <|-- ADLS : extends
    class ADLSAccount
    link ADLSAccount "entities/adlsaccount"
    ADLS <|-- ADLSAccount : extends
    class ADLSContainer
    link ADLSContainer "entities/adlscontainer"
    ADLS <|-- ADLSContainer : extends
    class ADLSObject
    link ADLSObject "entities/adlsobject"
    ADLS <|-- ADLSObject : extends
    class GCS {
        <<abstract>>
    }
    link GCS "entities/gcs"
    ObjectStore <|-- GCS : extends
    class GCSObject
    link GCSObject "entities/gcsobject"
    GCS <|-- GCSObject : extends
    class GCSBucket
    link GCSBucket "entities/gcsbucket"
    GCS <|-- GCSBucket : extends
    class ADF {
        <<abstract>>
    }
    link ADF "entities/adf"
    Catalog <|-- ADF : extends
    class AdfDataflow
    link AdfDataflow "entities/adfdataflow"
    ADF <|-- AdfDataflow : extends
    class AdfDataset
    link AdfDataset "entities/adfdataset"
    ADF <|-- AdfDataset : extends
    class AdfPipeline
    link AdfPipeline "entities/adfpipeline"
    ADF <|-- AdfPipeline : extends
    class AdfLinkedservice
    link AdfLinkedservice "entities/adflinkedservice"
    ADF <|-- AdfLinkedservice : extends
    class AdfActivity
    link AdfActivity "entities/adfactivity"
    ADF <|-- AdfActivity : extends
    class DataQuality {
        <<abstract>>
    }
    link DataQuality "entities/dataquality"
    Catalog <|-- DataQuality : extends
    class Anomalo {
        <<abstract>>
    }
    link Anomalo "entities/anomalo"
    DataQuality <|-- Anomalo : extends
    class AnomaloCheck
    link AnomaloCheck "entities/anomalocheck"
    Anomalo <|-- AnomaloCheck : extends
    class MonteCarlo {
        <<abstract>>
    }
    link MonteCarlo "entities/montecarlo"
    DataQuality <|-- MonteCarlo : extends
    class MCIncident
    link MCIncident "entities/mcincident"
    MonteCarlo <|-- MCIncident : extends
    class MCMonitor
    link MCMonitor "entities/mcmonitor"
    MonteCarlo <|-- MCMonitor : extends
    class Metric {
        <<abstract>>
    }
    link Metric "entities/metric"
    DataQuality <|-- Metric : extends
    class DbtMetric
    link DbtMetric "entities/dbtmetric"
    Metric <|-- DbtMetric : extends
    class Soda {
        <<abstract>>
    }
    link Soda "entities/soda"
    DataQuality <|-- Soda : extends
    class SodaCheck
    link SodaCheck "entities/sodacheck"
    Soda <|-- SodaCheck : extends
    class BI {
        <<abstract>>
    }
    link BI "entities/bi"
    Catalog <|-- BI : extends
    class Preset {
        <<abstract>>
    }
    link Preset "entities/preset"
    BI <|-- Preset : extends
    class PresetChart
    link PresetChart "entities/presetchart"
    Preset <|-- PresetChart : extends
    class PresetDataset
    link PresetDataset "entities/presetdataset"
    Preset <|-- PresetDataset : extends
    class PresetDashboard
    link PresetDashboard "entities/presetdashboard"
    Preset <|-- PresetDashboard : extends
    class PresetWorkspace
    link PresetWorkspace "entities/presetworkspace"
    Preset <|-- PresetWorkspace : extends
    class Mode {
        <<abstract>>
    }
    link Mode "entities/mode"
    BI <|-- Mode : extends
    class ModeReport
    link ModeReport "entities/modereport"
    Mode <|-- ModeReport : extends
    class ModeQuery
    link ModeQuery "entities/modequery"
    Mode <|-- ModeQuery : extends
    class ModeChart
    link ModeChart "entities/modechart"
    Mode <|-- ModeChart : extends
    class ModeWorkspace
    link ModeWorkspace "entities/modeworkspace"
    Mode <|-- ModeWorkspace : extends
    class ModeCollection
    link ModeCollection "entities/modecollection"
    Mode <|-- ModeCollection : extends
    class Sigma {
        <<abstract>>
    }
    link Sigma "entities/sigma"
    BI <|-- Sigma : extends
    class SigmaDatasetColumn
    link SigmaDatasetColumn "entities/sigmadatasetcolumn"
    Sigma <|-- SigmaDatasetColumn : extends
    class SigmaDataset
    link SigmaDataset "entities/sigmadataset"
    Sigma <|-- SigmaDataset : extends
    class SigmaWorkbook
    link SigmaWorkbook "entities/sigmaworkbook"
    Sigma <|-- SigmaWorkbook : extends
    class SigmaDataElementField
    link SigmaDataElementField "entities/sigmadataelementfield"
    Sigma <|-- SigmaDataElementField : extends
    class SigmaPage
    link SigmaPage "entities/sigmapage"
    Sigma <|-- SigmaPage : extends
    class SigmaDataElement
    link SigmaDataElement "entities/sigmadataelement"
    Sigma <|-- SigmaDataElement : extends
    class Anaplan {
        <<abstract>>
    }
    link Anaplan "entities/anaplan"
    BI <|-- Anaplan : extends
    class AnaplanPage
    link AnaplanPage "entities/anaplanpage"
    Anaplan <|-- AnaplanPage : extends
    class AnaplanList
    link AnaplanList "entities/anaplanlist"
    Anaplan <|-- AnaplanList : extends
    class AnaplanLineItem
    link AnaplanLineItem "entities/anaplanlineitem"
    Anaplan <|-- AnaplanLineItem : extends
    class AnaplanWorkspace
    link AnaplanWorkspace "entities/anaplanworkspace"
    Anaplan <|-- AnaplanWorkspace : extends
    class AnaplanModule
    link AnaplanModule "entities/anaplanmodule"
    Anaplan <|-- AnaplanModule : extends
    class AnaplanModel
    link AnaplanModel "entities/anaplanmodel"
    Anaplan <|-- AnaplanModel : extends
    class AnaplanApp
    link AnaplanApp "entities/anaplanapp"
    Anaplan <|-- AnaplanApp : extends
    class AnaplanDimension
    link AnaplanDimension "entities/anaplandimension"
    Anaplan <|-- AnaplanDimension : extends
    class AnaplanView
    link AnaplanView "entities/anaplanview"
    Anaplan <|-- AnaplanView : extends
    class Tableau {
        <<abstract>>
    }
    link Tableau "entities/tableau"
    BI <|-- Tableau : extends
    class TableauWorkbook
    link TableauWorkbook "entities/tableauworkbook"
    Tableau <|-- TableauWorkbook : extends
    class TableauDatasourceField
    link TableauDatasourceField "entities/tableaudatasourcefield"
    Tableau <|-- TableauDatasourceField : extends
    class TableauCalculatedField
    link TableauCalculatedField "entities/tableaucalculatedfield"
    Tableau <|-- TableauCalculatedField : extends
    class TableauProject
    link TableauProject "entities/tableauproject"
    Tableau <|-- TableauProject : extends
    class TableauMetric
    link TableauMetric "entities/tableaumetric"
    Tableau <|-- TableauMetric : extends
    class TableauSite
    link TableauSite "entities/tableausite"
    Tableau <|-- TableauSite : extends
    class TableauDatasource
    link TableauDatasource "entities/tableaudatasource"
    Tableau <|-- TableauDatasource : extends
    class TableauDashboard
    link TableauDashboard "entities/tableaudashboard"
    Tableau <|-- TableauDashboard : extends
    class TableauFlow
    link TableauFlow "entities/tableauflow"
    Tableau <|-- TableauFlow : extends
    class TableauWorksheet
    link TableauWorksheet "entities/tableauworksheet"
    Tableau <|-- TableauWorksheet : extends
    class Looker {
        <<abstract>>
    }
    link Looker "entities/looker"
    BI <|-- Looker : extends
    class LookerLook
    link LookerLook "entities/lookerlook"
    Looker <|-- LookerLook : extends
    class LookerDashboard
    link LookerDashboard "entities/lookerdashboard"
    Looker <|-- LookerDashboard : extends
    class LookerFolder
    link LookerFolder "entities/lookerfolder"
    Looker <|-- LookerFolder : extends
    class LookerTile
    link LookerTile "entities/lookertile"
    Looker <|-- LookerTile : extends
    class LookerModel
    link LookerModel "entities/lookermodel"
    Looker <|-- LookerModel : extends
    class LookerExplore
    link LookerExplore "entities/lookerexplore"
    Looker <|-- LookerExplore : extends
    class LookerProject
    link LookerProject "entities/lookerproject"
    Looker <|-- LookerProject : extends
    class LookerQuery
    link LookerQuery "entities/lookerquery"
    Looker <|-- LookerQuery : extends
    class LookerField
    link LookerField "entities/lookerfield"
    Looker <|-- LookerField : extends
    class LookerView
    link LookerView "entities/lookerview"
    Looker <|-- LookerView : extends
    class Domo {
        <<abstract>>
    }
    link Domo "entities/domo"
    BI <|-- Domo : extends
    class DomoDataset
    link DomoDataset "entities/domodataset"
    Domo <|-- DomoDataset : extends
    class DomoCard
    link DomoCard "entities/domocard"
    Domo <|-- DomoCard : extends
    class DomoDatasetColumn
    link DomoDatasetColumn "entities/domodatasetcolumn"
    Domo <|-- DomoDatasetColumn : extends
    class DomoDashboard
    link DomoDashboard "entities/domodashboard"
    Domo <|-- DomoDashboard : extends
    class Redash {
        <<abstract>>
    }
    link Redash "entities/redash"
    BI <|-- Redash : extends
    class RedashDashboard
    link RedashDashboard "entities/redashdashboard"
    Redash <|-- RedashDashboard : extends
    class RedashQuery
    link RedashQuery "entities/redashquery"
    Redash <|-- RedashQuery : extends
    class RedashVisualization
    link RedashVisualization "entities/redashvisualization"
    Redash <|-- RedashVisualization : extends
    class Sisense {
        <<abstract>>
    }
    link Sisense "entities/sisense"
    BI <|-- Sisense : extends
    class SisenseFolder
    link SisenseFolder "entities/sisensefolder"
    Sisense <|-- SisenseFolder : extends
    class SisenseWidget
    link SisenseWidget "entities/sisensewidget"
    Sisense <|-- SisenseWidget : extends
    class SisenseDatamodel
    link SisenseDatamodel "entities/sisensedatamodel"
    Sisense <|-- SisenseDatamodel : extends
    class SisenseDatamodelTable
    link SisenseDatamodelTable "entities/sisensedatamodeltable"
    Sisense <|-- SisenseDatamodelTable : extends
    class SisenseDashboard
    link SisenseDashboard "entities/sisensedashboard"
    Sisense <|-- SisenseDashboard : extends
    class DataStudio {
        <<abstract>>
    }
    link DataStudio "entities/datastudio"
    BI <|-- DataStudio : extends
    class DataStudioAsset
    link DataStudioAsset "entities/datastudioasset"
    DataStudio <|-- DataStudioAsset : extends
    class Metabase {
        <<abstract>>
    }
    link Metabase "entities/metabase"
    BI <|-- Metabase : extends
    class MetabaseQuestion
    link MetabaseQuestion "entities/metabasequestion"
    Metabase <|-- MetabaseQuestion : extends
    class MetabaseCollection
    link MetabaseCollection "entities/metabasecollection"
    Metabase <|-- MetabaseCollection : extends
    class MetabaseDashboard
    link MetabaseDashboard "entities/metabasedashboard"
    Metabase <|-- MetabaseDashboard : extends
    class QuickSight {
        <<abstract>>
    }
    link QuickSight "entities/quicksight"
    BI <|-- QuickSight : extends
    class QuickSightFolder
    link QuickSightFolder "entities/quicksightfolder"
    QuickSight <|-- QuickSightFolder : extends
    class QuickSightDashboardVisual
    link QuickSightDashboardVisual "entities/quicksightdashboardvisual"
    QuickSight <|-- QuickSightDashboardVisual : extends
    class QuickSightAnalysisVisual
    link QuickSightAnalysisVisual "entities/quicksightanalysisvisual"
    QuickSight <|-- QuickSightAnalysisVisual : extends
    class QuickSightDatasetField
    link QuickSightDatasetField "entities/quicksightdatasetfield"
    QuickSight <|-- QuickSightDatasetField : extends
    class QuickSightAnalysis
    link QuickSightAnalysis "entities/quicksightanalysis"
    QuickSight <|-- QuickSightAnalysis : extends
    class QuickSightDashboard
    link QuickSightDashboard "entities/quicksightdashboard"
    QuickSight <|-- QuickSightDashboard : extends
    class QuickSightDataset
    link QuickSightDataset "entities/quicksightdataset"
    QuickSight <|-- QuickSightDataset : extends
    class Thoughtspot {
        <<abstract>>
    }
    link Thoughtspot "entities/thoughtspot"
    BI <|-- Thoughtspot : extends
    class ThoughtspotWorksheet
    link ThoughtspotWorksheet "entities/thoughtspotworksheet"
    Thoughtspot <|-- ThoughtspotWorksheet : extends
    class ThoughtspotLiveboard
    link ThoughtspotLiveboard "entities/thoughtspotliveboard"
    Thoughtspot <|-- ThoughtspotLiveboard : extends
    class ThoughtspotTable
    link ThoughtspotTable "entities/thoughtspottable"
    Thoughtspot <|-- ThoughtspotTable : extends
    class ThoughtspotColumn
    link ThoughtspotColumn "entities/thoughtspotcolumn"
    Thoughtspot <|-- ThoughtspotColumn : extends
    class ThoughtspotView
    link ThoughtspotView "entities/thoughtspotview"
    Thoughtspot <|-- ThoughtspotView : extends
    class ThoughtspotDashlet
    link ThoughtspotDashlet "entities/thoughtspotdashlet"
    Thoughtspot <|-- ThoughtspotDashlet : extends
    class ThoughtspotAnswer
    link ThoughtspotAnswer "entities/thoughtspotanswer"
    Thoughtspot <|-- ThoughtspotAnswer : extends
    class PowerBI {
        <<abstract>>
    }
    link PowerBI "entities/powerbi"
    BI <|-- PowerBI : extends
    class PowerBIReport
    link PowerBIReport "entities/powerbireport"
    PowerBI <|-- PowerBIReport : extends
    class PowerBIMeasure
    link PowerBIMeasure "entities/powerbimeasure"
    PowerBI <|-- PowerBIMeasure : extends
    class PowerBIColumn
    link PowerBIColumn "entities/powerbicolumn"
    PowerBI <|-- PowerBIColumn : extends
    class PowerBITable
    link PowerBITable "entities/powerbitable"
    PowerBI <|-- PowerBITable : extends
    class PowerBITile
    link PowerBITile "entities/powerbitile"
    PowerBI <|-- PowerBITile : extends
    class PowerBIDatasource
    link PowerBIDatasource "entities/powerbidatasource"
    PowerBI <|-- PowerBIDatasource : extends
    class PowerBIWorkspace
    link PowerBIWorkspace "entities/powerbiworkspace"
    PowerBI <|-- PowerBIWorkspace : extends
    class PowerBIDataset
    link PowerBIDataset "entities/powerbidataset"
    PowerBI <|-- PowerBIDataset : extends
    class PowerBIDashboard
    link PowerBIDashboard "entities/powerbidashboard"
    PowerBI <|-- PowerBIDashboard : extends
    class PowerBIDataflow
    link PowerBIDataflow "entities/powerbidataflow"
    PowerBI <|-- PowerBIDataflow : extends
    class PowerBIPage
    link PowerBIPage "entities/powerbipage"
    PowerBI <|-- PowerBIPage : extends
    class PowerBIDataflowEntityColumn
    link PowerBIDataflowEntityColumn "entities/powerbidataflowentitycolumn"
    PowerBI <|-- PowerBIDataflowEntityColumn : extends
    class MicroStrategy {
        <<abstract>>
    }
    link MicroStrategy "entities/microstrategy"
    BI <|-- MicroStrategy : extends
    class MicroStrategyReport
    link MicroStrategyReport "entities/microstrategyreport"
    MicroStrategy <|-- MicroStrategyReport : extends
    class MicroStrategyProject
    link MicroStrategyProject "entities/microstrategyproject"
    MicroStrategy <|-- MicroStrategyProject : extends
    class MicroStrategyMetric
    link MicroStrategyMetric "entities/microstrategymetric"
    MicroStrategy <|-- MicroStrategyMetric : extends
    class MicroStrategyCube
    link MicroStrategyCube "entities/microstrategycube"
    MicroStrategy <|-- MicroStrategyCube : extends
    class MicroStrategyDossier
    link MicroStrategyDossier "entities/microstrategydossier"
    MicroStrategy <|-- MicroStrategyDossier : extends
    class MicroStrategyFact
    link MicroStrategyFact "entities/microstrategyfact"
    MicroStrategy <|-- MicroStrategyFact : extends
    class MicroStrategyDocument
    link MicroStrategyDocument "entities/microstrategydocument"
    MicroStrategy <|-- MicroStrategyDocument : extends
    class MicroStrategyAttribute
    link MicroStrategyAttribute "entities/microstrategyattribute"
    MicroStrategy <|-- MicroStrategyAttribute : extends
    class MicroStrategyVisualization
    link MicroStrategyVisualization "entities/microstrategyvisualization"
    MicroStrategy <|-- MicroStrategyVisualization : extends
    class Cognos {
        <<abstract>>
    }
    link Cognos "entities/cognos"
    BI <|-- Cognos : extends
    class CognosExploration
    link CognosExploration "entities/cognosexploration"
    Cognos <|-- CognosExploration : extends
    class CognosDashboard
    link CognosDashboard "entities/cognosdashboard"
    Cognos <|-- CognosDashboard : extends
    class CognosReport
    link CognosReport "entities/cognosreport"
    Cognos <|-- CognosReport : extends
    class CognosModule
    link CognosModule "entities/cognosmodule"
    Cognos <|-- CognosModule : extends
    class CognosFile
    link CognosFile "entities/cognosfile"
    Cognos <|-- CognosFile : extends
    class CognosFolder
    link CognosFolder "entities/cognosfolder"
    Cognos <|-- CognosFolder : extends
    class CognosPackage
    link CognosPackage "entities/cognospackage"
    Cognos <|-- CognosPackage : extends
    class CognosDatasource
    link CognosDatasource "entities/cognosdatasource"
    Cognos <|-- CognosDatasource : extends
    class Superset {
        <<abstract>>
    }
    link Superset "entities/superset"
    BI <|-- Superset : extends
    class SupersetDataset
    link SupersetDataset "entities/supersetdataset"
    Superset <|-- SupersetDataset : extends
    class SupersetChart
    link SupersetChart "entities/supersetchart"
    Superset <|-- SupersetChart : extends
    class SupersetDashboard
    link SupersetDashboard "entities/supersetdashboard"
    Superset <|-- SupersetDashboard : extends
    class Qlik {
        <<abstract>>
    }
    link Qlik "entities/qlik"
    BI <|-- Qlik : extends
    class QlikSpace
    link QlikSpace "entities/qlikspace"
    Qlik <|-- QlikSpace : extends
    class QlikStream
    link QlikStream "entities/qlikstream"
    QlikSpace <|-- QlikStream : extends
    class QlikApp
    link QlikApp "entities/qlikapp"
    Qlik <|-- QlikApp : extends
    class QlikChart
    link QlikChart "entities/qlikchart"
    Qlik <|-- QlikChart : extends
    class QlikDataset
    link QlikDataset "entities/qlikdataset"
    Qlik <|-- QlikDataset : extends
    class QlikSheet
    link QlikSheet "entities/qliksheet"
    Qlik <|-- QlikSheet : extends
    class SaaS {
        <<abstract>>
    }
    link SaaS "entities/saas"
    Catalog <|-- SaaS : extends
    class Dataverse {
        <<abstract>>
    }
    link Dataverse "entities/dataverse"
    SaaS <|-- Dataverse : extends
    class DataverseAttribute
    link DataverseAttribute "entities/dataverseattribute"
    Dataverse <|-- DataverseAttribute : extends
    class DataverseEntity
    link DataverseEntity "entities/dataverseentity"
    Dataverse <|-- DataverseEntity : extends
    class Cognite {
        <<abstract>>
    }
    link Cognite "entities/cognite"
    SaaS <|-- Cognite : extends
    class CogniteEvent
    link CogniteEvent "entities/cogniteevent"
    Cognite <|-- CogniteEvent : extends
    class CogniteAsset
    link CogniteAsset "entities/cogniteasset"
    Cognite <|-- CogniteAsset : extends
    class CogniteSequence
    link CogniteSequence "entities/cognitesequence"
    Cognite <|-- CogniteSequence : extends
    class Cognite3DModel
    link Cognite3DModel "entities/cognite3dmodel"
    Cognite <|-- Cognite3DModel : extends
    class CogniteTimeSeries
    link CogniteTimeSeries "entities/cognitetimeseries"
    Cognite <|-- CogniteTimeSeries : extends
    class CogniteFile
    link CogniteFile "entities/cognitefile"
    Cognite <|-- CogniteFile : extends
    class Salesforce {
        <<abstract>>
    }
    link Salesforce "entities/salesforce"
    SaaS <|-- Salesforce : extends
    class SalesforceObject
    link SalesforceObject "entities/salesforceobject"
    Salesforce <|-- SalesforceObject : extends
    class SalesforceField
    link SalesforceField "entities/salesforcefield"
    Salesforce <|-- SalesforceField : extends
    class SalesforceOrganization
    link SalesforceOrganization "entities/salesforceorganization"
    Salesforce <|-- SalesforceOrganization : extends
    class SalesforceDashboard
    link SalesforceDashboard "entities/salesforcedashboard"
    Salesforce <|-- SalesforceDashboard : extends
    class SalesforceReport
    link SalesforceReport "entities/salesforcereport"
    Salesforce <|-- SalesforceReport : extends
    class Resource {
        <<abstract>>
    }
    link Resource "entities/resource"
    Catalog <|-- Resource : extends
    class ReadmeTemplate
    link ReadmeTemplate "entities/readmetemplate"
    Resource <|-- ReadmeTemplate : extends
    class Readme
    link Readme "entities/readme"
    Resource <|-- Readme : extends
    class File
    link File "entities/file"
    Resource <|-- File : extends
    class Link
    link Link "entities/link"
    Resource <|-- Link : extends
    class MultiDimensionalDataset {
        <<abstract>>
    }
    link MultiDimensionalDataset "entities/multidimensionaldataset"
    Catalog <|-- MultiDimensionalDataset : extends
    class Cube
    link Cube "entities/cube"
    MultiDimensionalDataset <|-- Cube : extends
    class CubeHierarchy
    link CubeHierarchy "entities/cubehierarchy"
    MultiDimensionalDataset <|-- CubeHierarchy : extends
    class CubeField
    link CubeField "entities/cubefield"
    MultiDimensionalDataset <|-- CubeField : extends
    class CubeDimension
    link CubeDimension "entities/cubedimension"
    MultiDimensionalDataset <|-- CubeDimension : extends
    class Custom {
        <<abstract>>
    }
    link Custom "entities/custom"
    Catalog <|-- Custom : extends
    class CustomEntity
    link CustomEntity "entities/customentity"
    Custom <|-- CustomEntity : extends
    class DataMesh {
        <<abstract>>
    }
    link DataMesh "entities/datamesh"
    Catalog <|-- DataMesh : extends
    class DataDomain
    link DataDomain "entities/datadomain"
    DataMesh <|-- DataDomain : extends
    class DataProduct
    link DataProduct "entities/dataproduct"
    DataMesh <|-- DataProduct : extends
    class SQL {
        <<abstract>>
    }
    link SQL "entities/sql"
    Catalog <|-- SQL : extends
    class Table
    link Table "entities/table"
    SQL <|-- Table : extends
    class SnowflakeDynamicTable
    link SnowflakeDynamicTable "entities/snowflakedynamictable"
    Table <|-- SnowflakeDynamicTable : extends
    class DocumentDBCollection
    link DocumentDBCollection "entities/documentdbcollection"
    Table <|-- DocumentDBCollection : extends
    class MongoDBCollection
    link MongoDBCollection "entities/mongodbcollection"
    Table <|-- MongoDBCollection : extends
    class CosmosMongoDBCollection
    link CosmosMongoDBCollection "entities/cosmosmongodbcollection"
    MongoDBCollection <|-- CosmosMongoDBCollection : extends
    class DynamoDBSecondaryIndex {
        <<abstract>>
    }
    link DynamoDBSecondaryIndex "entities/dynamodbsecondaryindex"
    Table <|-- DynamoDBSecondaryIndex : extends
    class DynamoDBLocalSecondaryIndex
    link DynamoDBLocalSecondaryIndex "entities/dynamodblocalsecondaryindex"
    DynamoDBSecondaryIndex <|-- DynamoDBLocalSecondaryIndex : extends
    class DynamoDBGlobalSecondaryIndex
    link DynamoDBGlobalSecondaryIndex "entities/dynamodbglobalsecondaryindex"
    DynamoDBSecondaryIndex <|-- DynamoDBGlobalSecondaryIndex : extends
    class DynamoDBTable
    link DynamoDBTable "entities/dynamodbtable"
    Table <|-- DynamoDBTable : extends
    class Query
    link Query "entities/query"
    SQL <|-- Query : extends
    class BigqueryTag
    link BigqueryTag "entities/bigquerytag"
    SQL <|-- BigqueryTag : extends
    class Schema
    link Schema "entities/schema"
    SQL <|-- Schema : extends
    class SnowflakePipe
    link SnowflakePipe "entities/snowflakepipe"
    SQL <|-- SnowflakePipe : extends
    class View
    link View "entities/view"
    SQL <|-- View : extends
    class MaterialisedView
    link MaterialisedView "entities/materialisedview"
    SQL <|-- MaterialisedView : extends
    class Function
    link Function "entities/function"
    SQL <|-- Function : extends
    class TablePartition
    link TablePartition "entities/tablepartition"
    SQL <|-- TablePartition : extends
    class Column
    link Column "entities/column"
    SQL <|-- Column : extends
    class DatabricksUnityCatalogTag
    link DatabricksUnityCatalogTag "entities/databricksunitycatalogtag"
    SQL <|-- DatabricksUnityCatalogTag : extends
    class SnowflakeStream
    link SnowflakeStream "entities/snowflakestream"
    SQL <|-- SnowflakeStream : extends
    class Database
    link Database "entities/database"
    SQL <|-- Database : extends
    class DocumentDBDatabase
    link DocumentDBDatabase "entities/documentdbdatabase"
    Database <|-- DocumentDBDatabase : extends
    class MongoDBDatabase
    link MongoDBDatabase "entities/mongodbdatabase"
    Database <|-- MongoDBDatabase : extends
    class CosmosMongoDBDatabase
    link CosmosMongoDBDatabase "entities/cosmosmongodbdatabase"
    MongoDBDatabase <|-- CosmosMongoDBDatabase : extends
    class CalculationView
    link CalculationView "entities/calculationview"
    SQL <|-- CalculationView : extends
    class Procedure
    link Procedure "entities/procedure"
    SQL <|-- Procedure : extends
    class SnowflakeTag
    link SnowflakeTag "entities/snowflaketag"
    SQL <|-- SnowflakeTag : extends
    class EventStore {
        <<abstract>>
    }
    link EventStore "entities/eventstore"
    Catalog <|-- EventStore : extends
    class Kafka {
        <<abstract>>
    }
    link Kafka "entities/kafka"
    EventStore <|-- Kafka : extends
    class KafkaTopic
    link KafkaTopic "entities/kafkatopic"
    Kafka <|-- KafkaTopic : extends
    class AzureEventHub
    link AzureEventHub "entities/azureeventhub"
    KafkaTopic <|-- AzureEventHub : extends
    class KafkaConsumerGroup
    link KafkaConsumerGroup "entities/kafkaconsumergroup"
    Kafka <|-- KafkaConsumerGroup : extends
    class AzureEventHubConsumerGroup
    link AzureEventHubConsumerGroup "entities/azureeventhubconsumergroup"
    KafkaConsumerGroup <|-- AzureEventHubConsumerGroup : extends
    class AzureServiceBus {
        <<abstract>>
    }
    link AzureServiceBus "entities/azureservicebus"
    EventStore <|-- AzureServiceBus : extends
    class AzureServiceBusNamespace
    link AzureServiceBusNamespace "entities/azureservicebusnamespace"
    AzureServiceBus <|-- AzureServiceBusNamespace : extends
    class AzureServiceBusSchema
    link AzureServiceBusSchema "entities/azureservicebusschema"
    AzureServiceBus <|-- AzureServiceBusSchema : extends
    class AzureServiceBusTopic
    link AzureServiceBusTopic "entities/azureservicebustopic"
    AzureServiceBus <|-- AzureServiceBusTopic : extends
    class NoSQL {
        <<abstract>>
    }
    link NoSQL "entities/nosql"
    Catalog <|-- NoSQL : extends
    class CosmosMongoDB {
        <<abstract>>
    }
    link CosmosMongoDB "entities/cosmosmongodb"
    NoSQL <|-- CosmosMongoDB : extends
    class CosmosMongoDBAccount
    link CosmosMongoDBAccount "entities/cosmosmongodbaccount"
    CosmosMongoDB <|-- CosmosMongoDBAccount : extends
    class CosmosMongoDBCollection
    link CosmosMongoDBCollection "entities/cosmosmongodbcollection"
    CosmosMongoDB <|-- CosmosMongoDBCollection : extends
    class CosmosMongoDBDatabase
    link CosmosMongoDBDatabase "entities/cosmosmongodbdatabase"
    CosmosMongoDB <|-- CosmosMongoDBDatabase : extends
    class DynamoDB {
        <<abstract>>
    }
    link DynamoDB "entities/dynamodb"
    NoSQL <|-- DynamoDB : extends
    class DynamoDBSecondaryIndex {
        <<abstract>>
    }
    link DynamoDBSecondaryIndex "entities/dynamodbsecondaryindex"
    DynamoDB <|-- DynamoDBSecondaryIndex : extends
    class DynamoDBLocalSecondaryIndex
    link DynamoDBLocalSecondaryIndex "entities/dynamodblocalsecondaryindex"
    DynamoDBSecondaryIndex <|-- DynamoDBLocalSecondaryIndex : extends
    class DynamoDBGlobalSecondaryIndex
    link DynamoDBGlobalSecondaryIndex "entities/dynamodbglobalsecondaryindex"
    DynamoDBSecondaryIndex <|-- DynamoDBGlobalSecondaryIndex : extends
    class DynamoDBTable
    link DynamoDBTable "entities/dynamodbtable"
    DynamoDB <|-- DynamoDBTable : extends
    class DocumentDB {
        <<abstract>>
    }
    link DocumentDB "entities/documentdb"
    NoSQL <|-- DocumentDB : extends
    class DocumentDBCollection
    link DocumentDBCollection "entities/documentdbcollection"
    DocumentDB <|-- DocumentDBCollection : extends
    class DocumentDBDatabase
    link DocumentDBDatabase "entities/documentdbdatabase"
    DocumentDB <|-- DocumentDBDatabase : extends
    class MongoDBCollection
    link MongoDBCollection "entities/mongodbcollection"
    MongoDB <|-- MongoDBCollection : extends
    class MongoDBDatabase
    link MongoDBDatabase "entities/mongodbdatabase"
    MongoDB <|-- MongoDBDatabase : extends
    class MongoDB {
        <<abstract>>
    }
    link MongoDB "entities/mongodb"
    NoSQL <|-- MongoDB : extends
    class MongoDBCollection
    link MongoDBCollection "entities/mongodbcollection"
    MongoDB <|-- MongoDBCollection : extends
    class CosmosMongoDBCollection
    link CosmosMongoDBCollection "entities/cosmosmongodbcollection"
    MongoDBCollection <|-- CosmosMongoDBCollection : extends
    class MongoDBDatabase
    link MongoDBDatabase "entities/mongodbdatabase"
    MongoDB <|-- MongoDBDatabase : extends
    class CosmosMongoDBDatabase
    link CosmosMongoDBDatabase "entities/cosmosmongodbdatabase"
    MongoDBDatabase <|-- CosmosMongoDBDatabase : extends
    class Matillion {
        <<abstract>>
    }
    link Matillion "entities/matillion"
    Catalog <|-- Matillion : extends
    class MatillionGroup
    link MatillionGroup "entities/matilliongroup"
    Matillion <|-- MatillionGroup : extends
    class MatillionJob
    link MatillionJob "entities/matillionjob"
    Matillion <|-- MatillionJob : extends
    class MatillionProject
    link MatillionProject "entities/matillionproject"
    Matillion <|-- MatillionProject : extends
    class MatillionComponent
    link MatillionComponent "entities/matillioncomponent"
    Matillion <|-- MatillionComponent : extends
    class Dbt {
        <<abstract>>
    }
    link Dbt "entities/dbt"
    Catalog <|-- Dbt : extends
    class DbtModelColumn
    link DbtModelColumn "entities/dbtmodelcolumn"
    Dbt <|-- DbtModelColumn : extends
    class DbtTag
    link DbtTag "entities/dbttag"
    Dbt <|-- DbtTag : extends
    class DbtTest
    link DbtTest "entities/dbttest"
    Dbt <|-- DbtTest : extends
    class DbtModel
    link DbtModel "entities/dbtmodel"
    Dbt <|-- DbtModel : extends
    class DbtColumnProcess
    link DbtColumnProcess "entities/dbtcolumnprocess"
    Dbt <|-- DbtColumnProcess : extends
    class DbtMetric
    link DbtMetric "entities/dbtmetric"
    Dbt <|-- DbtMetric : extends
    class DbtSource
    link DbtSource "entities/dbtsource"
    Dbt <|-- DbtSource : extends
    class DbtProcess
    link DbtProcess "entities/dbtprocess"
    Dbt <|-- DbtProcess : extends
    class Model {
        <<abstract>>
    }
    link Model "entities/model"
    Catalog <|-- Model : extends
    class ModelAttribute
    link ModelAttribute "entities/modelattribute"
    Model <|-- ModelAttribute : extends
    class ModelEntity
    link ModelEntity "entities/modelentity"
    Model <|-- ModelEntity : extends
    class ModelVersion
    link ModelVersion "entities/modelversion"
    Model <|-- ModelVersion : extends
    class ModelEntityAssociation
    link ModelEntityAssociation "entities/modelentityassociation"
    Model <|-- ModelEntityAssociation : extends
    class ModelAttributeAssociation
    link ModelAttributeAssociation "entities/modelattributeassociation"
    Model <|-- ModelAttributeAssociation : extends
    class ModelDataModel
    link ModelDataModel "entities/modeldatamodel"
    Model <|-- ModelDataModel : extends
    class Insight
    link Insight "entities/insight"
    Catalog <|-- Insight : extends
    class API {
        <<abstract>>
    }
    link API "entities/api"
    Catalog <|-- API : extends
    class APISpec
    link APISpec "entities/apispec"
    API <|-- APISpec : extends
    class APIQuery
    link APIQuery "entities/apiquery"
    API <|-- APIQuery : extends
    class APIObject
    link APIObject "entities/apiobject"
    API <|-- APIObject : extends
    class APIPath
    link APIPath "entities/apipath"
    API <|-- APIPath : extends
    class APIField
    link APIField "entities/apifield"
    API <|-- APIField : extends
    class Spark {
        <<abstract>>
    }
    link Spark "entities/spark"
    Catalog <|-- Spark : extends
    class SparkJob
    link SparkJob "entities/sparkjob"
    Spark <|-- SparkJob : extends
    class Tag {
        <<abstract>>
    }
    link Tag "entities/tag"
    Catalog <|-- Tag : extends
    class DbtTag
    link DbtTag "entities/dbttag"
    Tag <|-- DbtTag : extends
    class BigqueryTag
    link BigqueryTag "entities/bigquerytag"
    Tag <|-- BigqueryTag : extends
    class DatabricksUnityCatalogTag
    link DatabricksUnityCatalogTag "entities/databricksunitycatalogtag"
    Tag <|-- DatabricksUnityCatalogTag : extends
    class SnowflakeTag
    link SnowflakeTag "entities/snowflaketag"
    Tag <|-- SnowflakeTag : extends
    class SchemaRegistry {
        <<abstract>>
    }
    link SchemaRegistry "entities/schemaregistry"
    Catalog <|-- SchemaRegistry : extends
    class SchemaRegistrySubject
    link SchemaRegistrySubject "entities/schemaregistrysubject"
    SchemaRegistry <|-- SchemaRegistrySubject : extends
    class Fivetran {
        <<abstract>>
    }
    link Fivetran "entities/fivetran"
    Catalog <|-- Fivetran : extends
    class FivetranConnector
    link FivetranConnector "entities/fivetranconnector"
    Fivetran <|-- FivetranConnector : extends
    class AtlasGlossary
    link AtlasGlossary "entities/atlasglossary"
    Asset <|-- AtlasGlossary : extends
    class AuthPolicy
    link AuthPolicy "entities/authpolicy"
    Asset <|-- AuthPolicy : extends
    class AtlasGlossaryTerm
    link AtlasGlossaryTerm "entities/atlasglossaryterm"
    Asset <|-- AtlasGlossaryTerm : extends
    class AuthService
    link AuthService "entities/authservice"
    Asset <|-- AuthService : extends
    class Cloud {
        <<abstract>>
    }
    link Cloud "entities/cloud"
    Asset <|-- Cloud : extends
    class Google {
        <<abstract>>
    }
    link Google "entities/google"
    Cloud <|-- Google : extends
    class DataStudio {
        <<abstract>>
    }
    link DataStudio "entities/datastudio"
    Google <|-- DataStudio : extends
    class DataStudioAsset
    link DataStudioAsset "entities/datastudioasset"
    DataStudio <|-- DataStudioAsset : extends
    class GCS {
        <<abstract>>
    }
    link GCS "entities/gcs"
    Google <|-- GCS : extends
    class GCSObject
    link GCSObject "entities/gcsobject"
    GCS <|-- GCSObject : extends
    class GCSBucket
    link GCSBucket "entities/gcsbucket"
    GCS <|-- GCSBucket : extends
    class DataStudioAsset
    link DataStudioAsset "entities/datastudioasset"
    Google <|-- DataStudioAsset : extends
    class Azure {
        <<abstract>>
    }
    link Azure "entities/azure"
    Cloud <|-- Azure : extends
    class ADLS {
        <<abstract>>
    }
    link ADLS "entities/adls"
    Azure <|-- ADLS : extends
    class ADLSAccount
    link ADLSAccount "entities/adlsaccount"
    ADLS <|-- ADLSAccount : extends
    class ADLSContainer
    link ADLSContainer "entities/adlscontainer"
    ADLS <|-- ADLSContainer : extends
    class ADLSObject
    link ADLSObject "entities/adlsobject"
    ADLS <|-- ADLSObject : extends
    class AWS {
        <<abstract>>
    }
    link AWS "entities/aws"
    Cloud <|-- AWS : extends
    class S3 {
        <<abstract>>
    }
    link S3 "entities/s3"
    AWS <|-- S3 : extends
    class S3Bucket
    link S3Bucket "entities/s3bucket"
    S3 <|-- S3Bucket : extends
    class S3Object
    link S3Object "entities/s3object"
    S3 <|-- S3Object : extends
    class Incident {
        <<abstract>>
    }
    link Incident "entities/incident"
    Asset <|-- Incident : extends
    class BusinessPolicyIncident
    link BusinessPolicyIncident "entities/businesspolicyincident"
    Incident <|-- BusinessPolicyIncident : extends
    class BusinessPolicyException
    link BusinessPolicyException "entities/businesspolicyexception"
    Asset <|-- BusinessPolicyException : extends
```

---

2022\-09\-162025\-04\-09

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/) to provide us with more information. 

Back to top

[Previous OpenLineage spec](../reference/specs/openlineage/) [Next Core](core/) 

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

