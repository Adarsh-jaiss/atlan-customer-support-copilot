# Source URL
https://developer.atlan.com/events/types/entity_create/

================================================================================

<!--
canonical: https://developer.atlan.com/events/types/entity_create/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/types/entity_create.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: ENTITY_CREATE - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/types/entity_create/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/types/entity_create.png
meta-twitter:title: ENTITY_CREATE - Developer
meta-viewport: width=device-width,initial-scale=1
title: ENTITY_CREATE - Developer
-->

[Skip to content](#entity_create-event-type) Developer ENTITY\_CREATE Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

`ENTITY_CREATE` event type[¶](#entity_create-event-type "Permanent link")
=========================================================================

`ENTITY_CREATE` events are emitted whenever an [asset](../../../getting-started/#what-is-an-asset) is created in Atlan.

**One `ENTITY_CREATE` event is emitted for each asset that is created**

So, for example, if the Snowflake crawler runs and creates:

* 1 connection
* 3 databases
* 10 schemas
* 500 tables
* 15,000 columns

Atlan will emit 15,514 `ENTITY_CREATE` events — one for each of these assets.

The details of the created asset will be in the `message.entity` portion of the event payload.

| Example ENTITY\_CREATE event | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 ``` | ``` {   "source": {},   "version": {     "version": "1.0.0",     "versionParts": [       1     ]   },   "msgCompressionKind": "NONE",   "msgSplitIdx": 1,   "msgSplitCount": 1,   "msgSourceIP": "10.121.193.228",   "msgCreatedBy": "",   "msgCreationTime": 1666792334952,   "spooled": false,   "message": {     "type": "ENTITY_NOTIFICATION_V2",     "entity": {       "typeName": "Column",       "attributes": {         "popularityScore": 1.17549435e-38,         "lastSyncRunAt": 1666792022425,         "databaseName": "FIVETRAN",         "precision": 0,         "lastSyncRun": "atlan-snowflake-1666769582-55jct",         "schemaName": "DEMO_SALESFORCE",         "tableName": "DASHBOARD_FEED",         "adminUsers": [],         "queryUserCount": 0,         "sourceUpdatedAt": 0,         "assetDbtJobLastRunArtifactsSaved": false,         "isEditable": true,         "isPartition": false,         "announcementUpdatedAt": 0,         "order": 6,         "sourceCreatedAt": 0,         "assetDbtJobLastRunDequedAt": 0,         "assetDbtTags": [],         "isIndexed": false,         "qualifiedName": "default/snowflake/1666769582/FIVETRAN/DEMO_SALESFORCE/DASHBOARD_FEED/IS_DELETED",         "dataType": "BOOLEAN",         "assetDbtJobLastRunNotificationsSent": false,         "isClustered": false,         "isNullable": false,         "name": "IS_DELETED",         "certificateUpdatedAt": 0,         "connectorName": "snowflake",         "numericScale": 0,         "maxLength": 0,         "ownerUsers": [],         "isSort": false,         "lastSyncWorkflowName": "activate-poc-crawler",         "connectionQualifiedName": "default/snowflake/1666769582",         "assetDbtJobLastRunHasSourcesGenerated": false,         "isForeign": false,         "assetDbtJobLastRunHasDocsGenerated": false,         "queryCount": 0,         "pinnedAt": 0,         "isDist": false,         "assetDbtJobLastRunUpdatedAt": 0,         "ownerGroups": [],         "isPrimary": false,         "assetDbtJobLastRunStartedAt": 0,         "isDiscoverable": true,         "schemaQualifiedName": "default/snowflake/1666769582/FIVETRAN/DEMO_SALESFORCE",         "viewerUsers": [],         "adminRoles": [],         "adminGroups": [],         "isPinned": false,         "assetDbtJobLastRunCreatedAt": 0,         "databaseQualifiedName": "default/snowflake/1666769582/FIVETRAN",         "assetDbtJobNextRun": 0,         "tableQualifiedName": "default/snowflake/1666769582/FIVETRAN/DEMO_SALESFORCE/DASHBOARD_FEED",         "partitionOrder": 0,         "viewerGroups": [],         "assetDbtJobLastRun": 0       },       "guid": "bacab52b-6c4b-4dbe-b5da-97ec2e509c7e",       "status": "ACTIVE",       "displayText": "IS_DELETED",       "isIncomplete": false,       "createdBy": "kartik.thakur",       "updatedBy": "kartik.thakur",       "createTime": 1666792332986,       "updateTime": 1666792332986     },     "operationType": "ENTITY_CREATE",     "eventTime": 1666792332986   } }  ``` |

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/types/entity_create/) to provide us with more information. 

Back to top

[Previous Lineage is created](../../scenarios/lineage-create/) [Next ENTITY\_UPDATE](../entity_update/) 

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

