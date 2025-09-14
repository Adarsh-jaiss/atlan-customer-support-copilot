# Source URL
https://developer.atlan.com/events/types/entity_delete/

================================================================================

<!--
canonical: https://developer.atlan.com/events/types/entity_delete/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/events/types/entity_delete.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: ENTITY_DELETE - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/events/types/entity_delete/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/events/types/entity_delete.png
meta-twitter:title: ENTITY_DELETE - Developer
meta-viewport: width=device-width,initial-scale=1
title: ENTITY_DELETE - Developer
-->

[Skip to content](#entity_delete-event-type) Developer ENTITY\_DELETE Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

`ENTITY_DELETE` event type[¶](#entity_delete-event-type "Permanent link")
=========================================================================

`ENTITY_DELETE` events are emitted whenever an [asset](../../../getting-started/#what-is-an-asset) is deleted in Atlan. This includes:

* Soft deletion, or archival of an asset.
* Hard deletion, or purging of an asset.

**One `ENTITY_DELETE` event is emitted for each asset that is deleted**

So, for example, if you run the connection delete utility to remove a connection with:

* 3 databases
* 10 schemas
* 500 tables
* 15,000 columns

Atlan will emit 15,514 `ENTITY_DELETE` events — one for each of these assets (and the connection itself).

The details of the deleted asset will be in the `message.entity` portion of the event payload. The `message.entity.deleteHandler` will indicate the kind of delete:

* `DEFAULT` is an archival
* `HARD` is a purge

| Example ENTITY\_DELETE event | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 ``` | ``` {   "source": {},   "version": {     "version": "1.0.0",     "versionParts": [       1     ]   },   "msgCompressionKind": "NONE",   "msgSplitIdx": 1,   "msgSplitCount": 1,   "msgSourceIP": "10.121.193.228",   "msgCreatedBy": "",   "msgCreationTime": 1667822854307,   "spooled": false,   "message": {     "type": "ENTITY_NOTIFICATION_V2",     "entity": {       "typeName": "Connection",       "attributes": {         "qualifiedName": "default/bigquery/1665130698"       },       "guid": "ff9d053f-5bd8-4149-81d3-447ba654dbaa",       "status": "DELETED",       "displayText": "default/bigquery/1665130698",       "isIncomplete": false,       "createdBy": "autoqa",       "updatedBy": "autoqa",       "createTime": 1665131016428,       "updateTime": 1665131016428,       "deleteHandler": "HARD"     },     "operationType": "ENTITY_DELETE",     "eventTime": 1667822854152   } }  ``` |

---

2022\-11\-072024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/events/types/entity_delete/) to provide us with more information. 

Back to top

[Previous ENTITY\_UPDATE](../entity_update/) [Next BUSINESS\_ATTRIBUTE\_UPDATE](../business_attribute_update/) 

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

