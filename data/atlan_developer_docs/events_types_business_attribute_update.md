# Source URL
https://developer.atlan.com/events/types/business_attribute_update/

================================================================================

<!--
canonical: https://developer.atlan.com/events/types/business_attribute_update/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/types/business_attribute_update.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: BUSINESS_ATTRIBUTE_UPDATE - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/types/business_attribute_update/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/types/business_attribute_update.png
meta-twitter:title: BUSINESS_ATTRIBUTE_UPDATE - Developer
meta-viewport: width=device-width,initial-scale=1
title: BUSINESS_ATTRIBUTE_UPDATE - Developer
-->

[Skip to content](#business_attribute_update-event-type) Developer BUSINESS\_ATTRIBUTE\_UPDATE Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

`BUSINESS_ATTRIBUTE_UPDATE` event type[¶](#business_attribute_update-event-type "Permanent link")
=================================================================================================

`BUSINESS_ATTRIBUTE_UPDATE` events are emitted whenever a custom metadata is changed on an [asset](../../../getting-started/#what-is-an-asset) in Atlan. This includes:

* Adding custom metadata to an asset
* Removing custom metadata from an asset

**One `BUSINESS_ATTRIBUTE_UPDATE` event is emitted for each asset that is updated**

So, for example, if you set 4 custom metadata attributes on an asset in Atlan, it will emit only 1 `BUSINESS_ATTRIBUTE_UPDATE` events.

The details of the updated asset will be in the `message.entity` portion of the event payload. The event payload shows the custom metadata that changed in the `message.mutatedDetails` portion of the event payload.

The custom metadata does *not* appear in `message.entity`

Note that the custom metadata does *not* appear in `message.entity`. You must look at the `message.mutatedDetails` to see the custom metadata.

Custom metadata uses internal Atlan IDs

Also note that the custom metadata values use Atlan's internal IDs in the event payload. You will need to translate these to the human\-readable names you see in the Atlan UI. (The SDKs provide operations to do these lookups.)

| Example BUSINESS\_ATTRIBUTE\_UPDATE event | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 ``` | ``` {   "source": {},   "version": {     "version": "1.0.0",     "versionParts": [       1     ]   },   "msgCompressionKind": "NONE",   "msgSplitIdx": 1,   "msgSplitCount": 1,   "msgSourceIP": "10.121.193.228",   "msgCreatedBy": "",   "msgCreationTime": 1667822461771,   "spooled": false,   "message": {     "type": "ENTITY_NOTIFICATION_V2",     "entity": {       "typeName": "Table",       "attributes": {         "popularityScore": 1.17549435e-38,         "lastSyncWorkflowName": "mabl-qa-006-crawler",         "lastSyncRunAt": 1665132063880,         "databaseName": "atlan_trial",         "connectionQualifiedName": "default/postgres/1665131987",         "assetDbtJobLastRunHasSourcesGenerated": false,         "assetDbtJobLastRunHasDocsGenerated": false,         "queryCount": 0,         "isTemporary": false,         "lastSyncRun": "atlan-postgres-1665131987-k9cds",         "isPartitioned": false,         "schemaName": "demo",         "adminUsers": [],         "partitionCount": 0,         "queryUserCount": 0,         "assetDbtJobLastRunUpdatedAt": 0,         "ownerGroups": [],         "sourceUpdatedAt": 0,         "assetDbtJobLastRunArtifactsSaved": false,         "isEditable": true,         "announcementUpdatedAt": 0,         "assetDbtJobLastRunStartedAt": 0,         "isDiscoverable": true,         "rowCount": 134,         "isQueryPreview": true,         "schemaQualifiedName": "default/postgres/1665131987/atlan_trial/demo",         "sourceCreatedAt": 0,         "assetDbtJobLastRunDequedAt": 0,         "viewerUsers": [],         "assetDbtTags": [],         "adminRoles": [],         "adminGroups": [],         "assetDbtJobLastRunCreatedAt": 0,         "qualifiedName": "default/postgres/1665131987/atlan_trial/demo/INSTACART_AISLES",         "databaseQualifiedName": "default/postgres/1665131987/atlan_trial",         "assetDbtJobNextRun": 0,         "assetDbtJobLastRunNotificationsSent": false,         "columnCount": 2,         "sizeBytes": 0,         "name": "INSTACART_AISLES",         "certificateUpdatedAt": 0,         "connectorName": "postgres",         "viewerGroups": [],         "assetDbtJobLastRun": 0,         "ownerUsers": []       },       "guid": "31ee0651-b031-48c8-8927-ef9b1e949ad4",       "status": "ACTIVE",       "displayText": "INSTACART_AISLES",       "isIncomplete": false,       "createdBy": "autoqa",       "updatedBy": "autoqa",       "createTime": 1665132167750,       "updateTime": 1665132175423     },     "operationType": "BUSINESS_ATTRIBUTE_UPDATE",     "eventTime": 1667822461710,     "mutatedDetails": {       "UuPz0CjWHFuuKTCiTRwapk": {         "jpf1oz5ux6MjmaOGPn9jMD": "ssjmdvddf\n"       }     }   } }  ``` |

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/types/business_attribute_update/) to provide us with more information. 

Back to top

[Previous ENTITY\_DELETE](../entity_delete/) [Next CLASSIFICATION\_ADD](../classification_add/) 

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

