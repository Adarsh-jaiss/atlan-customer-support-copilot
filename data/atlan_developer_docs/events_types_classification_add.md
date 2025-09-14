# Source URL
https://developer.atlan.com/events/types/classification_add/

================================================================================

<!--
canonical: https://developer.atlan.com/events/types/classification_add/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/types/classification_add.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: CLASSIFICATION_ADD - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/types/classification_add/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/types/classification_add.png
meta-twitter:title: CLASSIFICATION_ADD - Developer
meta-viewport: width=device-width,initial-scale=1
title: CLASSIFICATION_ADD - Developer
-->

[Skip to content](#classification_add-event-type) Developer CLASSIFICATION\_ADD Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

`CLASSIFICATION_ADD` event type[¶](#classification_add-event-type "Permanent link")
===================================================================================

`CLASSIFICATION_ADD` events are emitted whenever a tag is added to an [asset](../../../getting-started/#what-is-an-asset) in Atlan. This includes:

* When a tag is added directly to an asset
* When a tag is propagated to an asset (asynchronously)

**One `CLASSIFICATION_ADD` event is emitted for each asset that is tagged**

So, for example, if you tag a term in Atlan that:

* Is linked to 1 table,
* Which has 2 downstream tables (in lineage),
* And also has 10 columns, 3 of which have 1 downstream column each (in lineage)

Atlan will emit 17 `CLASSIFICATION_ADD` events. (Note that because the propagations occur asynchronously, it is unlikely these 17 events will be back\-to\-back (without other events in\-between) in the event bus.)

The details of the tagged asset will be in the `message.entity` portion of the event payload. The event payload shows the tag that was added in the `message.mutatedDetails` portion of the event payload.

Tags use internal Atlan IDs

Also note that the tag names use Atlan's internal IDs in the event payload. You will need to translate these to the human\-readable names you see in the Atlan UI. (The SDKs provide operations to do these lookups.)

| Example CLASSIFICATION\_ADD event | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 ``` | ``` {   "source": {},   "version": {     "version": "1.0.0",     "versionParts": [       1     ]   },   "msgCompressionKind": "NONE",   "msgSplitIdx": 1,   "msgSplitCount": 1,   "msgSourceIP": "10.121.193.228",   "msgCreatedBy": "",   "msgCreationTime": 1666964451608,   "spooled": false,   "message": {     "type": "ENTITY_NOTIFICATION_V2",     "entity": {       "typeName": "Column",       "attributes": {         "popularityScore": 1.17549435e-38,         "lastSyncRunAt": 1666792022425,         "databaseName": "FIVETRAN",         "precision": 18,         "lastSyncRun": "atlan-snowflake-1666769582-55jct",         "schemaName": "POSTGRES_RDS_DEMO_DEV",         "tableName": "INSTACART_UNIQUE_USERS",         "adminUsers": [],         "queryUserCount": 0,         "sourceUpdatedAt": 0,         "assetDbtJobLastRunArtifactsSaved": false,         "isEditable": true,         "isPartition": false,         "announcementUpdatedAt": 0,         "order": 1,         "sourceCreatedAt": 0,         "assetDbtJobLastRunDequedAt": 0,         "assetDbtTags": [],         "isIndexed": false,         "qualifiedName": "default/snowflake/1666769582/FIVETRAN/POSTGRES_RDS_DEMO_DEV/INSTACART_UNIQUE_USERS/TOTAL_USER",         "dataType": "NUMBER",         "assetDbtJobLastRunNotificationsSent": false,         "isClustered": false,         "isNullable": false,         "name": "TOTAL_USER",         "certificateUpdatedAt": 0,         "connectorName": "snowflake",         "numericScale": 0,         "maxLength": 0,         "ownerUsers": [],         "isSort": false,         "lastSyncWorkflowName": "activate-poc-crawler",         "connectionQualifiedName": "default/snowflake/1666769582",         "assetDbtJobLastRunHasSourcesGenerated": false,         "isForeign": false,         "assetDbtJobLastRunHasDocsGenerated": false,         "queryCount": 0,         "pinnedAt": 0,         "isDist": false,         "assetDbtJobLastRunUpdatedAt": 0,         "ownerGroups": [],         "isPrimary": false,         "assetDbtJobLastRunStartedAt": 0,         "isDiscoverable": true,         "schemaQualifiedName": "default/snowflake/1666769582/FIVETRAN/POSTGRES_RDS_DEMO_DEV",         "viewerUsers": [],         "adminRoles": [],         "adminGroups": [],         "isPinned": false,         "assetDbtJobLastRunCreatedAt": 0,         "databaseQualifiedName": "default/snowflake/1666769582/FIVETRAN",         "assetDbtJobNextRun": 0,         "tableQualifiedName": "default/snowflake/1666769582/FIVETRAN/POSTGRES_RDS_DEMO_DEV/INSTACART_UNIQUE_USERS",         "partitionOrder": 0,         "viewerGroups": [],         "assetDbtJobLastRun": 0       },       "guid": "9065bba5-22b8-4331-bff8-1bdf017c5cfb",       "status": "ACTIVE",       "displayText": "TOTAL_USER",       "classificationNames": [         "jUQpLPdg9hWoheH2eL9Ha2"       ],       "classifications": [         {           "typeName": "jUQpLPdg9hWoheH2eL9Ha2",           "entityGuid": "9065bba5-22b8-4331-bff8-1bdf017c5cfb",           "entityStatus": "ACTIVE",           "propagate": true,           "removePropagationsOnEntityDelete": true,           "restrictPropagationThroughLineage": false,           "restrictPropagationThroughHierarchy": false         }       ],       "isIncomplete": false,       "createdBy": "kartik.thakur",       "updatedBy": "kartik.thakur",       "createTime": 1666792644294,       "updateTime": 1666964451417     },     "operationType": "CLASSIFICATION_ADD",     "eventTime": 1666964451417,     "mutatedDetails": [       {         "typeName": "jUQpLPdg9hWoheH2eL9Ha2",         "entityGuid": "9065bba5-22b8-4331-bff8-1bdf017c5cfb",         "entityStatus": "ACTIVE",         "propagate": true,         "removePropagationsOnEntityDelete": true,         "restrictPropagationThroughLineage": false,         "restrictPropagationThroughHierarchy": false       }     ]   } }  ``` |

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/types/classification_add/) to provide us with more information. 

Back to top

[Previous BUSINESS\_ATTRIBUTE\_UPDATE](../business_attribute_update/) [Next CLASSIFICATION\_DELETE](../classification_delete/) 

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

