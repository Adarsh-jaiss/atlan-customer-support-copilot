# Source URL
https://developer.atlan.com/events/types/entity_update/

================================================================================

<!--
canonical: https://developer.atlan.com/events/types/entity_update/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/types/entity_update.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: ENTITY_UPDATE - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/types/entity_update/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/types/entity_update.png
meta-twitter:title: ENTITY_UPDATE - Developer
meta-viewport: width=device-width,initial-scale=1
title: ENTITY_UPDATE - Developer
-->

[Skip to content](#entity_update-event-type) Developer ENTITY\_UPDATE Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

`ENTITY_UPDATE` event type[¶](#entity_update-event-type "Permanent link")
=========================================================================

`ENTITY_UPDATE` events are emitted whenever an [asset](../../../getting-started/#what-is-an-asset) is changed in Atlan. This includes:

* Changes to any of the asset's attributes (like description, owner, certificate, announcement, and so on)
* Changes to any of the asset's relationships (like the addition or removal of a term)

**One `ENTITY_UPDATE` event is emitted for each asset that is updated**

So, for example, if you remove a term from an asset Atlan will emit 2 `ENTITY_UPDATE` events:

* 1 for the asset that was changed (that the term was removed from)
* 1 for the term that was changed (since it is no longer attached to that asset)

The details of the updated asset will be in the `message.entity` portion of the event payload. In addition, the event payload shows what specifically was changed in the `message.mutatedDetails` portion of the event payload.

| Example ENTITY\_UPDATE event | |
| --- | --- |
| ```   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 ``` | ``` {   "source": {},   "version": {     "version": "1.0.0",     "versionParts": [       1     ]   },   "msgCompressionKind": "NONE",   "msgSplitIdx": 1,   "msgSplitCount": 1,   "msgSourceIP": "10.110.55.19",   "msgCreatedBy": "",   "msgCreationTime": 1655265623268,   "spooled": false,   "message": {     "type": "ENTITY_NOTIFICATION_V2",     "entity": {       "typeName": "Table",       "attributes": {         "popularityScore": 1.17549435e-38,         "lastSyncWorkflowName": "suman1-crawler",         "lastSyncRunAt": 1653533865845,         "certificateStatus": "VERIFIED",         "databaseName": "demo_db",         "connectionQualifiedName": "default/postgres/1653533778",         "queryCount": 0,         "isTemporary": false,         "lastSyncRun": "atlan-postgres-default-postgres-1653533778-xhtgk",         "isPartitioned": false,         "schemaName": "demo",         "adminUsers": [],         "partitionCount": 0,         "queryUserCount": 0,         "ownerGroups": [],         "isEditable": true,         "sourceUpdatedAt": 0,         "certificateUpdatedBy": "suman",         "announcementUpdatedAt": 0,         "isDiscoverable": true,         "isQueryPreview": true,         "rowCount": 1318656,         "schemaQualifiedName": "default/postgres/1653533778/demo_db/demo",         "sourceCreatedAt": 0,         "viewerUsers": [],         "userDescription": "Short description",         "adminRoles": [],         "adminGroups": [],         "qualifiedName": "default/postgres/1653533778/demo_db/demo/dqtest73",         "databaseQualifiedName": "default/postgres/1653533778/demo_db",         "columnCount": 7,         "sizeBytes": 0,         "name": "dqtest73",         "certificateUpdatedAt": 1655265622993,         "connectorName": "postgres",         "viewerGroups": [],         "ownerUsers": [           "anshul.mehta",           "suman"         ]       },       "guid": "2eb68562-3849-4861-8f4c-527a02da4e27",       "displayText": "dqtest73",       "classificationNames": [         "Zz3SHQcKFJGVb4ZCaqtZoX",         "gxTVzFBOOkNfiCOBYUHgWw",         "Zz3SHQcKFJGVb4ZCaqtZoX",         "Zz3SHQcKFJGVb4ZCaqtZoX",         "gxTVzFBOOkNfiCOBYUHgWw",         "gxTVzFBOOkNfiCOBYUHgWw",         "gxTVzFBOOkNfiCOBYUHgWw"       ],       "classifications": [         {           "typeName": "Zz3SHQcKFJGVb4ZCaqtZoX",           "entityGuid": "2eb68562-3849-4861-8f4c-527a02da4e27",           "entityStatus": "ACTIVE",           "propagate": true,           "removePropagationsOnEntityDelete": true         },         {           "typeName": "gxTVzFBOOkNfiCOBYUHgWw",           "entityGuid": "2eb68562-3849-4861-8f4c-527a02da4e27",           "entityStatus": "ACTIVE",           "propagate": false,           "removePropagationsOnEntityDelete": true         },         {           "typeName": "Zz3SHQcKFJGVb4ZCaqtZoX",           "entityGuid": "2eb68562-3849-4861-8f4c-527a02da4e27",           "entityStatus": "ACTIVE",           "propagate": true,           "removePropagationsOnEntityDelete": true         },         {           "typeName": "Zz3SHQcKFJGVb4ZCaqtZoX",           "entityGuid": "2eb68562-3849-4861-8f4c-527a02da4e27",           "entityStatus": "ACTIVE",           "propagate": true,           "removePropagationsOnEntityDelete": true         },         {           "typeName": "gxTVzFBOOkNfiCOBYUHgWw",           "entityGuid": "2eb68562-3849-4861-8f4c-527a02da4e27",           "entityStatus": "ACTIVE",           "propagate": true,           "removePropagationsOnEntityDelete": true         },         {           "typeName": "gxTVzFBOOkNfiCOBYUHgWw",           "entityGuid": "2eb68562-3849-4861-8f4c-527a02da4e27",           "entityStatus": "ACTIVE",           "propagate": true,           "removePropagationsOnEntityDelete": true         },         {           "typeName": "gxTVzFBOOkNfiCOBYUHgWw",           "entityGuid": "2eb68562-3849-4861-8f4c-527a02da4e27",           "entityStatus": "ACTIVE",           "propagate": false,           "removePropagationsOnEntityDelete": true         }       ],       "isIncomplete": false,       "createdBy": "suman",       "updatedBy": "suman",       "createTime": 1653533980608,       "updateTime": 1655265622993     },     "operationType": "ENTITY_UPDATE",     "eventTime": 1655265622993,     "mutatedDetails": {       "typeName": "Table",       "attributes": {         "certificateStatus": "VERIFIED",         "userDescription": "Short description",         "tenantId": "default",         "ownerUsers": [           "anshul.mehta",           "suman"         ]       },       "guid": "2eb68562-3849-4861-8f4c-527a02da4e27",       "isIncomplete": false,       "provenanceType": 0,       "updatedBy": "suman",       "updateTime": 1655265622993,       "version": 0,       "relationshipAttributes": {         "meanings": [           {             "guid": "012c5684-a526-4fe4-99c5-3fd65e31988e",             "typeName": "AtlasGlossaryTerm"           },           {             "guid": "bd2defdb-4d3f-48cc-9a7b-775354926245",             "typeName": "AtlasGlossaryTerm"           },           {             "guid": "cc1d0a01-6174-4d63-8f26-7aa41551ca89",             "typeName": "AtlasGlossaryTerm"           }         ]       },       "proxy": false     }   } }  ``` |

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/types/entity_update/) to provide us with more information. 

Back to top

[Previous ENTITY\_CREATE](../entity_create/) [Next ENTITY\_DELETE](../entity_delete/) 

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

