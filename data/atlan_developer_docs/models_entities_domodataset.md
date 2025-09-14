# Source URL
https://developer.atlan.com/models/entities/domodataset/

================================================================================

<!--
canonical: https://developer.atlan.com/models/entities/domodataset/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/entities/domodataset.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: DomoDataset - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/entities/domodataset/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/entities/domodataset.png
meta-twitter:title: DomoDataset - Developer
meta-viewport: width=device-width,initial-scale=1
title: DomoDataset - Developer
-->

[Skip to content](#domodataset) Developer DomoDataset Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

DomoDataset[¶](#domodataset "Permanent link")
=============================================

Instance of a Domo Dataset in Atlan.

Complete reference

This is a complete reference for the `DomoDataset` object in Atlan, showing every possible property and relationship that can exist for these objects. For an introduction, you probably want to start with:

* [Snippets](../../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../../patterns/) — walkthroughs of common multi\-step implementation patterns.

`DomoDataset` inherits its attributes and relationships from these other types:

```
classDiagram
    direction RL
    class DomoDataset
    link DomoDataset "../domodataset"
    class Domo {
        <<abstract>>
    }
    link Domo "../domo"
    Domo <|-- DomoDataset : extends
    class BI {
        <<abstract>>
    }
    link BI "../bi"
    BI <|-- Domo : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- BI : extends
    class Asset {
        <<abstract>>
    }
    link Asset "../asset"
    Asset <|-- Catalog : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../referenceable"
    Referenceable <|-- Asset : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

**Inherited properties**

These attributes are inherited from `DomoDataset`'s supertypes (shown above):

### typeName  [¶](#typename "Permanent link")

Type of this asset.

### guid  [¶](#guid "Permanent link")

Globally\-unique identifier for this asset.

### classifications [¶](#classifications "Permanent link")

Tags assigned to the asset. (1\)

1. Uses a different name in SDKs

    `atlanTags`  
         `atlan_tags`

    For more information, see the [tag assets](../../../snippets/common-examples/tags/) snippets.

### businessAttributes [¶](#businessattributes "Permanent link")

Map of custom metadata attributes and values defined on the asset. (1\)

1. Uses a different name in SDKs

    `customMetadataSets`  
         `custom_metadata`

    For more information, see the [change custom metadata](../../../snippets/common-examples/custom-metadata/) snippets.

### status  [¶](#status "Permanent link")

Status of the asset. (1\)

1. Treat as read\-only

    You should not try to *set* `status` on an asset. Instead, see the asset CRUD snippets on [deleting](../../../snippets/advanced-examples/delete/) and [restoring](../../../snippets/advanced-examples/restore/) assets.

### createdBy  [¶](#createdby "Permanent link")

User or account that created the asset.

### updatedBy  [¶](#updatedby "Permanent link")

User or account that last updated the asset.

### createTime  [¶](#createtime "Permanent link")

Time (epoch) at which the asset was created, in milliseconds.

### updateTime  [¶](#updatetime "Permanent link")

Time (epoch) at which the asset was last updated, in milliseconds.

### deleteHandler  [¶](#deletehandler "Permanent link")

Details on the handler used for deletion of the asset. (1\)

1. Treat as read\-only

    You should not try to *set* `deleteHandler` on an asset. Instead, see the asset CRUD snippets on [deleting](../../../snippets/advanced-examples/delete/) assets.

### classificationNames  [¶](#classificationnames "Permanent link")

Hashed\-string names of the Atlan tags that exist on the asset. (1\)

1. Uses a different name in SDKs

    `atlanTagNames`  
         `atlan_tag_names`

    Use [classifications](#classifications) to make changes to tags.

### isIncomplete [¶](#isincomplete "Permanent link")

Unused.

### meaningNames  [¶](#meaningnames "Permanent link")

Human\-readable names of terms that have been linked to this asset.

### meanings  [¶](#meanings "Permanent link")

Details of terms that have been linked to this asset. (1\)

1. Do not use

    These should not be used, as they can be inconsistent. Instead, see the [link terms and assets](../../../snippets/common-examples/term-assignment/) snippets.

### pendingTasks  [¶](#pendingtasks "Permanent link")

Unique identifiers (GUIDs) for any background tasks that are yet to operate on this asset.

### qualifiedName [¶](#qualifiedname "Permanent link")

Unique name for this asset. This is typically a concatenation of the asset's name onto its parent's qualifiedName. This must be unique across all assets of the same type.

### adminGroups [¶](#admingroups "Permanent link")

List of groups who administer this asset. (This is only used for certain asset types.)

### adminRoles [¶](#adminroles "Permanent link")

List of roles who administer this asset. (This is only used for Connection assets.)

### adminUsers [¶](#adminusers "Permanent link")

List of users who administer this asset. (This is only used for certain asset types.)

### announcementMessage [¶](#announcementmessage "Permanent link")

Detailed message to include in the announcement on this asset.

### announcementTitle [¶](#announcementtitle "Permanent link")

Brief title for the announcement on this asset. Required when announcementType is specified.

### announcementType [¶](#announcementtype "Permanent link")

Type of announcement on this asset.

### announcementUpdatedAt [¶](#announcementupdatedat "Permanent link")

Time (epoch) at which the announcement was last updated, in milliseconds.

### announcementUpdatedBy [¶](#announcementupdatedby "Permanent link")

Name of the user who last updated the announcement.

### applicationFieldQualifiedName [¶](#applicationfieldqualifiedname "Permanent link")

Qualified name of the ApplicationField that contains this asset.

### applicationQualifiedName [¶](#applicationqualifiedname "Permanent link")

Qualified name of the Application that contains this asset.

### assetAnomaloAppliedCheckTypes [¶](#assetanomaloappliedchecktypes "Permanent link")

All associated Anomalo check types.

### assetAnomaloCheckCount [¶](#assetanomalocheckcount "Permanent link")

Total number of checks present in Anomalo for this asset.

### assetAnomaloCheckStatuses [¶](#assetanomalocheckstatuses "Permanent link")

Stringified JSON object containing status of all Anomalo checks associated to this asset.

### assetAnomaloDQStatus [¶](#assetanomalodqstatus "Permanent link")

Status of data quality from Anomalo.

### assetAnomaloFailedCheckCount [¶](#assetanomalofailedcheckcount "Permanent link")

Total number of checks failed in Anomalo for this asset.

### assetAnomaloFailedCheckTypes [¶](#assetanomalofailedchecktypes "Permanent link")

All associated Anomalo failed check types.

### assetAnomaloLastCheckRunAt [¶](#assetanomalolastcheckrunat "Permanent link")

Time (epoch) at which the last check was run via Anomalo.

### assetAnomaloSourceUrl [¶](#assetanomalosourceurl "Permanent link")

URL of the source in Anomalo.

### assetCoverImage [¶](#assetcoverimage "Permanent link")

TBC

### assetDbtAccountName [¶](#assetdbtaccountname "Permanent link")

Name of the account in which this asset exists in dbt.

### assetDbtAlias [¶](#assetdbtalias "Permanent link")

Alias of this asset in dbt.

### assetDbtEnvironmentDbtVersion [¶](#assetdbtenvironmentdbtversion "Permanent link")

Version of the environment in which this asset is materialized in dbt.

### assetDbtEnvironmentName [¶](#assetdbtenvironmentname "Permanent link")

Name of the environment in which this asset is materialized in dbt.

### assetDbtJobLastRun [¶](#assetdbtjoblastrun "Permanent link")

Time (epoch) at which the job that materialized this asset in dbt last ran, in milliseconds.

### assetDbtJobLastRunArtifactS3Path [¶](#assetdbtjoblastrunartifacts3path "Permanent link")

Path in S3 to the artifacts saved from the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunArtifactsSaved [¶](#assetdbtjoblastrunartifactssaved "Permanent link")

Whether artifacts were saved from the last run of the job that materialized this asset in dbt (true) or not (false).

### assetDbtJobLastRunCreatedAt [¶](#assetdbtjoblastruncreatedat "Permanent link")

Time (epoch) at which the job that materialized this asset in dbt was last created, in milliseconds.

### assetDbtJobLastRunDequedAt [¶](#assetdbtjoblastrundequedat "Permanent link")

Time (epoch) at which the job that materialized this asset in dbt was dequeued, in milliseconds.

### assetDbtJobLastRunExecutedByThreadId [¶](#assetdbtjoblastrunexecutedbythreadid "Permanent link")

Thread ID of the user who executed the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunGitBranch [¶](#assetdbtjoblastrungitbranch "Permanent link")

Branch in git from which the last run of the job that materialized this asset in dbt ran.

### assetDbtJobLastRunGitSha [¶](#assetdbtjoblastrungitsha "Permanent link")

SHA hash in git for the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunHasDocsGenerated [¶](#assetdbtjoblastrunhasdocsgenerated "Permanent link")

Whether docs were generated from the last run of the job that materialized this asset in dbt (true) or not (false).

### assetDbtJobLastRunHasSourcesGenerated [¶](#assetdbtjoblastrunhassourcesgenerated "Permanent link")

Whether sources were generated from the last run of the job that materialized this asset in dbt (true) or not (false).

### assetDbtJobLastRunNotificationsSent [¶](#assetdbtjoblastrunnotificationssent "Permanent link")

Whether notifications were sent from the last run of the job that materialized this asset in dbt (true) or not (false).

### assetDbtJobLastRunOwnerThreadId [¶](#assetdbtjoblastrunownerthreadid "Permanent link")

Thread ID of the owner of the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunQueuedDuration [¶](#assetdbtjoblastrunqueuedduration "Permanent link")

Total duration the job that materialized this asset in dbt spent being queued.

### assetDbtJobLastRunQueuedDurationHumanized [¶](#assetdbtjoblastrunqueueddurationhumanized "Permanent link")

Human\-readable total duration of the last run of the job that materialized this asset in dbt spend being queued.

### assetDbtJobLastRunRunDuration [¶](#assetdbtjoblastrunrunduration "Permanent link")

Run duration of the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunRunDurationHumanized [¶](#assetdbtjoblastrunrundurationhumanized "Permanent link")

Human\-readable run duration of the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunStartedAt [¶](#assetdbtjoblastrunstartedat "Permanent link")

Time (epoch) at which the job that materialized this asset in dbt was started running, in milliseconds.

### assetDbtJobLastRunStatusMessage [¶](#assetdbtjoblastrunstatusmessage "Permanent link")

Status message of the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunTotalDuration [¶](#assetdbtjoblastruntotalduration "Permanent link")

Total duration of the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunTotalDurationHumanized [¶](#assetdbtjoblastruntotaldurationhumanized "Permanent link")

Human\-readable total duration of the last run of the job that materialized this asset in dbt.

### assetDbtJobLastRunUpdatedAt [¶](#assetdbtjoblastrunupdatedat "Permanent link")

Time (epoch) at which the job that materialized this asset in dbt was last updated, in milliseconds.

### assetDbtJobLastRunUrl [¶](#assetdbtjoblastrunurl "Permanent link")

URL of the last run of the job that materialized this asset in dbt.

### assetDbtJobName [¶](#assetdbtjobname "Permanent link")

Name of the job that materialized this asset in dbt.

### assetDbtJobNextRun [¶](#assetdbtjobnextrun "Permanent link")

Time (epoch) when the next run of the job that materializes this asset in dbt is scheduled.

### assetDbtJobNextRunHumanized [¶](#assetdbtjobnextrunhumanized "Permanent link")

Human\-readable time when the next run of the job that materializes this asset in dbt is scheduled.

### assetDbtJobSchedule [¶](#assetdbtjobschedule "Permanent link")

Schedule of the job that materialized this asset in dbt.

### assetDbtJobScheduleCronHumanized [¶](#assetdbtjobschedulecronhumanized "Permanent link")

Human\-readable cron schedule of the job that materialized this asset in dbt.

### assetDbtJobStatus [¶](#assetdbtjobstatus "Permanent link")

Status of the job that materialized this asset in dbt.

### assetDbtMeta [¶](#assetdbtmeta "Permanent link")

Metadata for this asset in dbt, specifically everything under the 'meta' key in the dbt object.

### assetDbtPackageName [¶](#assetdbtpackagename "Permanent link")

Name of the package in which this asset exists in dbt.

### assetDbtProjectName [¶](#assetdbtprojectname "Permanent link")

Name of the project in which this asset exists in dbt.

### assetDbtSemanticLayerProxyUrl [¶](#assetdbtsemanticlayerproxyurl "Permanent link")

URL of the semantic layer proxy for this asset in dbt.

### assetDbtSourceFreshnessCriteria [¶](#assetdbtsourcefreshnesscriteria "Permanent link")

Freshness criteria for the source of this asset in dbt.

### assetDbtTags [¶](#assetdbttags "Permanent link")

List of tags attached to this asset in dbt.

### assetDbtTestStatus [¶](#assetdbtteststatus "Permanent link")

All associated dbt test statuses.

### assetDbtUniqueId [¶](#assetdbtuniqueid "Permanent link")

Unique identifier of this asset in dbt.

### assetDbtWorkflowLastUpdated [¶](#assetdbtworkflowlastupdated "Permanent link")

Name of the DBT workflow in Atlan that last updated the asset.

### assetIcon [¶](#asseticon "Permanent link")

Name of the icon to use for this asset. (Only applies to glossaries, currently.)

### assetMcAlertQualifiedNames [¶](#assetmcalertqualifiednames "Permanent link")

List of unique Monte Carlo alert names attached to this asset.

### assetMcIncidentNames [¶](#assetmcincidentnames "Permanent link")

List of Monte Carlo incident names attached to this asset.

### assetMcIncidentPriorities [¶](#assetmcincidentpriorities "Permanent link")

List of Monte Carlo incident priorities associated with this asset.

### assetMcIncidentQualifiedNames [¶](#assetmcincidentqualifiednames "Permanent link")

List of unique Monte Carlo incident names attached to this asset.

### assetMcIncidentSeverities [¶](#assetmcincidentseverities "Permanent link")

List of Monte Carlo incident severities associated with this asset.

### assetMcIncidentStates [¶](#assetmcincidentstates "Permanent link")

List of Monte Carlo incident states associated with this asset.

### assetMcIncidentSubTypes [¶](#assetmcincidentsubtypes "Permanent link")

List of Monte Carlo incident sub\-types associated with this asset.

### assetMcIncidentTypes [¶](#assetmcincidenttypes "Permanent link")

List of Monte Carlo incident types associated with this asset.

### assetMcIsMonitored [¶](#assetmcismonitored "Permanent link")

Tracks whether this asset is monitored by MC or not

### assetMcLastSyncRunAt [¶](#assetmclastsyncrunat "Permanent link")

Time (epoch) at which this asset was last synced from Monte Carlo.

### assetMcMonitorNames [¶](#assetmcmonitornames "Permanent link")

List of Monte Carlo monitor names attached to this asset.

### assetMcMonitorQualifiedNames [¶](#assetmcmonitorqualifiednames "Permanent link")

List of unique Monte Carlo monitor names attached to this asset.

### assetMcMonitorScheduleTypes [¶](#assetmcmonitorscheduletypes "Permanent link")

Schedules of all associated Monte Carlo monitors.

### assetMcMonitorStatuses [¶](#assetmcmonitorstatuses "Permanent link")

Statuses of all associated Monte Carlo monitors.

### assetMcMonitorTypes [¶](#assetmcmonitortypes "Permanent link")

Types of all associated Monte Carlo monitors.

### assetPoliciesCount [¶](#assetpoliciescount "Permanent link")

Count of policies inside the asset

### assetPolicyGUIDs [¶](#assetpolicyguids "Permanent link")

Array of policy ids governing this asset

### assetSodaCheckCount [¶](#assetsodacheckcount "Permanent link")

Number of checks done via Soda.

### assetSodaCheckStatuses [¶](#assetsodacheckstatuses "Permanent link")

All associated Soda check statuses.

### assetSodaDQStatus [¶](#assetsodadqstatus "Permanent link")

Status of data quality from Soda.

### assetSodaLastScanAt [¶](#assetsodalastscanat "Permanent link")

TBC

### assetSodaLastSyncRunAt [¶](#assetsodalastsyncrunat "Permanent link")

TBC

### assetSodaSourceURL [¶](#assetsodasourceurl "Permanent link")

TBC

### assetTags [¶](#assettags "Permanent link")

List of tags attached to this asset.

### assetThemeHex [¶](#assetthemehex "Permanent link")

Color (in hexadecimal RGB) to use to represent this asset.

### certificateStatus [¶](#certificatestatus "Permanent link")

Status of this asset's certification.

### certificateStatusMessage [¶](#certificatestatusmessage "Permanent link")

Human\-readable descriptive message used to provide further detail to certificateStatus.

### certificateUpdatedAt [¶](#certificateupdatedat "Permanent link")

Time (epoch) at which the certification was last updated, in milliseconds.

### certificateUpdatedBy [¶](#certificateupdatedby "Permanent link")

Name of the user who last updated the certification of this asset.

### connectionName [¶](#connectionname "Permanent link")

Simple name of the connection through which this asset is accessible.

### connectionQualifiedName [¶](#connectionqualifiedname "Permanent link")

Unique name of the connection through which this asset is accessible.

### connectorName [¶](#connectorname "Permanent link")

Type of the connector through which this asset is accessible. (1\)

1. Uses a different name in SDKs

    `connectorType`  
     `connector_type`

### dbtQualifiedName [¶](#dbtqualifiedname "Permanent link")

Unique name of this asset in dbt.

### description [¶](#description "Permanent link")

Description of this asset, for example as crawled from a source. Fallback for display purposes, if userDescription is empty.

### displayName [¶](#displayname "Permanent link")

Human\-readable name of this asset used for display purposes (in user interface).

### domainGUIDs [¶](#domainguids "Permanent link")

Array of domain guids linked to this asset

### hasContract [¶](#hascontract "Permanent link")

Whether this asset has contract (true) or not (false).

### \_\_hasLineage [¶](#__haslineage "Permanent link")

Whether this asset has lineage (true) or not (false). (1\)

1. Uses a different name in SDKs

    `hasLineage`  
     `has_lineage`

### isAIGenerated [¶](#isaigenerated "Permanent link")

TBC

### isDiscoverable [¶](#isdiscoverable "Permanent link")

Whether this asset is discoverable through the UI (true) or not (false).

### isEditable [¶](#iseditable "Permanent link")

Whether this asset can be edited in the UI (true) or not (false).

### isPartial [¶](#ispartial "Permanent link")

TBC

### lastRowChangedAt [¶](#lastrowchangedat "Permanent link")

Time (epoch) of the last operation that inserted, updated, or deleted rows, in milliseconds.

### lastSyncRun [¶](#lastsyncrun "Permanent link")

Name of the last run of the crawler that last synchronized this asset.

### lastSyncRunAt [¶](#lastsyncrunat "Permanent link")

Time (epoch) at which this asset was last crawled, in milliseconds.

### lastSyncWorkflowName [¶](#lastsyncworkflowname "Permanent link")

Name of the crawler that last synchronized this asset.

### lexicographicalSortOrder [¶](#lexicographicalsortorder "Permanent link")

Custom order for sorting purpose, managed by client

### name [¶](#name "Permanent link")

Name of this asset. Fallback for display purposes, if displayName is empty.

### nonCompliantAssetPolicyGUIDs [¶](#noncompliantassetpolicyguids "Permanent link")

Array of policy ids non\-compliant to this asset

### ownerGroups [¶](#ownergroups "Permanent link")

List of groups who own this asset.

### ownerUsers [¶](#ownerusers "Permanent link")

List of users who own this asset.

### popularityScore [¶](#popularityscore "Permanent link")

Popularity score for this asset.

### sampleDataUrl [¶](#sampledataurl "Permanent link")

URL for sample data for this asset.

### sourceCostUnit [¶](#sourcecostunit "Permanent link")

The unit of measure for sourceTotalCost.

### sourceCreatedAt [¶](#sourcecreatedat "Permanent link")

Time (epoch) at which this asset was created in the source system, in milliseconds.

### sourceCreatedBy [¶](#sourcecreatedby "Permanent link")

Name of the user who created this asset, in the source system.

### sourceEmbedURL [¶](#sourceembedurl "Permanent link")

URL to create an embed for a resource (for example, an image of a dashboard) within Atlan.

### sourceLastReadAt [¶](#sourcelastreadat "Permanent link")

Timestamp of most recent read operation.

### sourceOwners [¶](#sourceowners "Permanent link")

List of owners of this asset, in the source system.

### sourceQueryComputeCostRecordList [¶](#sourcequerycomputecostrecordlist "Permanent link")

List of most expensive warehouses with extra insights. (1\)

1. Uses a different name in SDKs

    `sourceQueryComputeCostRecords`  
     `source_query_compute_cost_records`

### sourceQueryComputeCostList [¶](#sourcequerycomputecostlist "Permanent link")

List of most expensive warehouse names. (1\)

1. Uses a different name in SDKs

    `sourceQueryComputeCosts`  
     `source_query_compute_costs`

### sourceReadCount [¶](#sourcereadcount "Permanent link")

Total count of all read operations at source.

### sourceReadExpensiveQueryRecordList [¶](#sourcereadexpensivequeryrecordlist "Permanent link")

List of the most expensive queries that accessed this asset. (1\)

1. Uses a different name in SDKs

    `sourceReadExpensiveQueryRecords`  
     `source_read_expensive_query_records`

### sourceReadPopularQueryRecordList [¶](#sourcereadpopularqueryrecordlist "Permanent link")

List of the most popular queries that accessed this asset. (1\)

1. Uses a different name in SDKs

    `sourceReadPopularQueryRecords`  
     `source_read_popular_query_records`

### sourceReadQueryCost [¶](#sourcereadquerycost "Permanent link")

Total cost of read queries at source.

### sourceReadRecentUserRecordList [¶](#sourcereadrecentuserrecordlist "Permanent link")

List of usernames with extra insights for the most recent users who read this asset. (1\)

1. Uses a different name in SDKs

    `sourceReadRecentUserRecords`  
     `source_read_recent_user_records`

### sourceReadRecentUserList [¶](#sourcereadrecentuserlist "Permanent link")

List of usernames of the most recent users who read this asset. (1\)

1. Uses a different name in SDKs

    `sourceReadRecentUsers`  
     `source_read_recent_users`

### sourceReadSlowQueryRecordList [¶](#sourcereadslowqueryrecordlist "Permanent link")

List of the slowest queries that accessed this asset. (1\)

1. Uses a different name in SDKs

    `sourceReadSlowQueryRecords`  
     `source_read_slow_query_records`

### sourceReadTopUserRecordList [¶](#sourcereadtopuserrecordlist "Permanent link")

List of usernames with extra insights for the users who read this asset the most. (1\)

1. Uses a different name in SDKs

    `sourceReadTopUserRecords`  
     `source_read_top_user_records`

### sourceReadTopUserList [¶](#sourcereadtopuserlist "Permanent link")

List of usernames of the users who read this asset the most. (1\)

1. Uses a different name in SDKs

    `sourceReadTopUsers`  
     `source_read_top_users`

### sourceReadUserCount [¶](#sourcereadusercount "Permanent link")

Total number of unique users that read data from asset.

### sourceTotalCost [¶](#sourcetotalcost "Permanent link")

Total cost of all operations at source.

### sourceURL [¶](#sourceurl "Permanent link")

URL to the resource within the source application, used to create a button to view this asset in the source application.

### sourceUpdatedAt [¶](#sourceupdatedat "Permanent link")

Time (epoch) at which this asset was last updated in the source system, in milliseconds.

### sourceUpdatedBy [¶](#sourceupdatedby "Permanent link")

Name of the user who last updated this asset, in the source system.

### starredBy [¶](#starredby "Permanent link")

Users who have starred this asset.

### starredCount [¶](#starredcount "Permanent link")

Number of users who have starred this asset.

### starredDetailsList [¶](#starreddetailslist "Permanent link")

List of usernames with extra information of the users who have starred an asset. (1\)

1. Uses a different name in SDKs

    `starredDetails`  
     `starred_details`

### subType [¶](#subtype "Permanent link")

Subtype of this asset.

### tenantId [¶](#tenantid "Permanent link")

Name of the Atlan workspace in which this asset exists.

### userDescription [¶](#userdescription "Permanent link")

Description of this asset, as provided by a user. If present, this will be used for the description in user interface.

### viewScore [¶](#viewscore "Permanent link")

View score for this asset.

### viewerGroups [¶](#viewergroups "Permanent link")

List of groups who can view assets contained in a collection. (This is only used for certain asset types.)

### viewerUsers [¶](#viewerusers "Permanent link")

List of users who can view assets contained in a collection. (This is only used for certain asset types.)

### domoId [¶](#domoid "Permanent link")

Id of the Domo dataset.

### domoOwnerId [¶](#domoownerid "Permanent link")

Id of the owner of the Domo dataset.

These attributes are specific to instances of `DomoDataset` (and all of its subtypes).

### domoDatasetCardCount [¶](#domodatasetcardcount "Permanent link")

Number of cards linked to the Domo dataset.

### domoDatasetColumnCount [¶](#domodatasetcolumncount "Permanent link")

Number of columns in the Domo dataset.

### domoDatasetLastRun [¶](#domodatasetlastrun "Permanent link")

An ISO\-8601 representation of the time the DataSet was last run.

### domoDatasetRowCount [¶](#domodatasetrowcount "Permanent link")

Number of rows in the Domo dataset.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

**Inherited relationships**

These relationships are inherited from `DomoDataset`'s supertypes:

### anomaloChecks  ([AnomaloCheck](../anomalocheck/))[¶](#anomalochecks-anomalocheck "Permanent link")

Checks that run on this asset.

### application  ([Application](../application/))[¶](#application-application "Permanent link")

Application asset containing this Asset.

### applicationField  ([ApplicationField](../applicationfield/))[¶](#applicationfield-applicationfield "Permanent link")

ApplicationField asset containing this Asset.

### meanings  ([AtlasGlossaryTerm](../atlasglossaryterm/))[¶](#meanings-atlasglossaryterm "Permanent link")

Glossary terms that are linked to this asset. (1\)

1. Uses a different name in SDKs

    `assignedTerms`  
     `assigned_terms`

### dataContractLatest  ([DataContract](../datacontract/))[¶](#datacontractlatest-datacontract "Permanent link")

Latest version of the data contract (in any status) for this asset.

### dataContractLatestCertified  ([DataContract](../datacontract/))[¶](#datacontractlatestcertified-datacontract "Permanent link")

Latest certified version of the data contract for this asset.

### files  ([File](../file/))[¶](#files-file "Permanent link")

TBC

### inputPortDataProducts  ([DataProduct](../dataproduct/))[¶](#inputportdataproducts-dataproduct "Permanent link")

Data products for which this asset is an input port.

### links  ([Link](../link/))[¶](#links-link "Permanent link")

Links that are attached to this asset.

### mcIncidents  ([MCIncident](../mcincident/))[¶](#mcincidents-mcincident "Permanent link")

TBC

### mcMonitors  ([MCMonitor](../mcmonitor/))[¶](#mcmonitors-mcmonitor "Permanent link")

Monitors that observe this asset.

### metrics  ([Metric](../metric/))[¶](#metrics-metric "Permanent link")

TBC

### outputPortDataProducts  ([DataProduct](../dataproduct/))[¶](#outputportdataproducts-dataproduct "Permanent link")

Data products for which this asset is an output port.

### readme  ([Readme](../readme/))[¶](#readme-readme "Permanent link")

README that is linked to this asset.

### schemaRegistrySubjects  ([SchemaRegistrySubject](../schemaregistrysubject/))[¶](#schemaregistrysubjects-schemaregistrysubject "Permanent link")

TBC

### sodaChecks  ([SodaCheck](../sodacheck/))[¶](#sodachecks-sodacheck "Permanent link")

TBC

### userDefRelationshipFrom  ([Referenceable](../referenceable/))[¶](#userdefrelationshipfrom-referenceable "Permanent link")

TBC (1\)

1. Uses a different name in SDKs

    `userDefRelationshipFroms`  
     `user_def_relationship_froms`

### userDefRelationshipTo  ([Referenceable](../referenceable/))[¶](#userdefrelationshipto-referenceable "Permanent link")

TBC (1\)

1. Uses a different name in SDKs

    `userDefRelationshipTos`  
     `user_def_relationship_tos`

### inputToAirflowTasks  ([AirflowTask](../airflowtask/))[¶](#inputtoairflowtasks-airflowtask "Permanent link")

Tasks to which this asset provides input.

### inputToProcesses  ([Process](../../lineage/))[¶](#inputtoprocesses-process "Permanent link")

Processes to which this asset provides input.

### inputToSparkJobs  ([SparkJob](../sparkjob/))[¶](#inputtosparkjobs-sparkjob "Permanent link")

TBC

### modelImplementedAttributes  ([ModelAttribute](../modelattribute/))[¶](#modelimplementedattributes-modelattribute "Permanent link")

Attributes implemented by this asset.

### modelImplementedEntities  ([ModelEntity](../modelentity/))[¶](#modelimplementedentities-modelentity "Permanent link")

Entities implemented by this asset.

### outputFromAirflowTasks  ([AirflowTask](../airflowtask/))[¶](#outputfromairflowtasks-airflowtask "Permanent link")

Tasks from which this asset is output.

### outputFromProcesses  ([Process](../../lineage/))[¶](#outputfromprocesses-process "Permanent link")

Processes from which this asset is produced as output.

### outputFromSparkJobs  ([SparkJob](../sparkjob/))[¶](#outputfromsparkjobs-sparkjob "Permanent link")

TBC

These relationships are specific to instances of `DomoDataset` (and all of its subtypes).

### domoCards  ([DomoCard](../domocard/))[¶](#domocards-domocard "Permanent link")

TBC

### domoDatasetColumns  ([DomoDatasetColumn](../domodatasetcolumn/))[¶](#domodatasetcolumns-domodatasetcolumn "Permanent link")

TBC

---

2023\-01\-042024\-06\-16

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/entities/domodataset/) to provide us with more information. 

Back to top

[Previous DomoDashboard](../domodashboard/) [Next DomoDatasetColumn](../domodatasetcolumn/) 

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

