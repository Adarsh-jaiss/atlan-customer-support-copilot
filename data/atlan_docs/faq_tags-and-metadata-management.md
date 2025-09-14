# Source URL
https://docs.atlan.com/faq/tags-and-metadata-management

================================================================================

<!--
canonical: https://docs.atlan.com/faq/tags-and-metadata-management
link-alternate: https://docs.atlan.com/faq/tags-and-metadata-management
meta-description: Complete guide to managing tags, classifications, and metadata in Atlan for effective data governance and organization.
meta-docsearch:docusaurus_tag: docs-default-current
meta-docsearch:language: en
meta-docsearch:version: current
meta-docusaurus_locale: en
meta-docusaurus_tag: docs-default-current
meta-docusaurus_version: current
meta-generator: Docusaurus v3.8.1
meta-og-description: Complete guide to managing tags, classifications, and metadata in Atlan for effective data governance and organization.
meta-og-locale: en
meta-og-title: Tags and Metadata Management | Atlan Documentation
meta-og-url: https://docs.atlan.com/faq/tags-and-metadata-management
meta-twitter:card: summary_large_image
meta-viewport: width=device-width,initial-scale=1
title: Tags and Metadata Management | Atlan Documentation
-->

[https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J](https://www.googletagmanager.com/ns.html?id=GTM-TZTFMW4J)

[Skip to main content](#__docusaurus_skipToContent_fallback)Search

[Partner with us](https://docs.google.com/forms/d/e/1FAIpQLScuAIhCm2GS7YFstrOjawbP8J7PUmOynQo7wI2yGCcCyEcVSw/viewform)[What's new](https://shipped.atlan.com/)[Support portal](https://atlan.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fatlan.zendesk.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=1900000425113&auth_origin=1900000425113%2Cfalse%2Ctrue)[Contact support](/support/submit-request)

Tags and Metadata Management
============================

Complete guide to managing tags, classifications, and metadata in Atlan for effective data governance and organization.

### What are some examples of tags?[â](#what-are-some-examples-of-tags "Direct link to What are some examples of tags?")

To learn more about examples of tags, see [What are tags?](/product/capabilities/governance/tags/concepts/what-are-tags)

### Why does tag propagation take time to apply?[â](#why-does-tag-propagation-take-time-to-apply "Direct link to Why does tag propagation take time to apply?")

When [tag propagation is enabled](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply), it automatically triggers a background task in the metastore. This background task is created to reduce the API load and response time. After each background task has been created, the API simply returns a 200 OK response code.

Tag propagation is completed once the background tasks have been executed \- including [tag attachment](/product/capabilities/governance/tags/how-tos/attach-a-tag) or [removal](/product/capabilities/governance/tags/how-tos/remove-a-tag) by propagation.

The lifecycle of a background task:

* When a background task is created for tag propagation, its status changes to `PENDING`. Multiple tasks may be in the same `PENDING` state, depending on the number of assets to be propagated.
* As a task gets picked up, its status changes to `IN PROGRESS`. As each task is executed, the tag is propagated to an asset.
* Once the task is completed, its status changes to `COMPLETE`. As the next task gets picked up, this cycle repeats until tag propagation is completed for all the assets.

### How are tags propagated for new assets?[â](#how-are-tags-propagated-for-new-assets "Direct link to How are tags propagated for new assets?")

[Tag propagation](/faq/tags-and-metadata-management#why-does-tag-propagation-take-time-to-apply) is disabled by default in Atlan. If you have [enabled tag propagation](/product/capabilities/governance/tags/how-tos/attach-a-tag), tags are automatically propagated to a child or downstream asset created after running a workflow. This means that when a new asset is registered, tag propagation is automatically triggered in the metastore and runs as a background task.

For example, if a workflow adds an additional column to a table, a new background task for adding tags is created in the metastore. This new task is executed when all the previous tasks have been completed in the queue. The speed with which these tasks are completed depends on the number of pending tasks and the volume of tags to be added or removed. The same process also applies to [tag deletion](/product/capabilities/governance/tags/how-tos/delete-a-tag) and updating tags through [playbooks](/product/capabilities/playbooks/how-tos/set-up-playbooks).

### Can I delete a tag?[â](#can-i-delete-a-tag "Direct link to Can I delete a tag?")

Tags can be deleted, but this requires careful consideration due to their impact on data governance. For detailed instructions on tag deletion, see the [tag deletion guide](/product/capabilities/governance/tags/how-tos/delete-a-tag).

### Is reverse tag sync supported for column\-level tags?[â](#is-reverse-tag-sync-supported-for-column-level-tags "Direct link to Is reverse tag sync supported for column-level tags?")

Reverse tag sync capabilities depend on your data source and configuration. For specific data source support and configuration options, consult the connector documentation or contact Atlan support.

**Tags:*** [data](/tags/data)
* [api](/tags/api)
* [faq\-metadata](/tags/faq-metadata)

[PreviousSecurity and Compliance](/faq/security-and-compliance)[NextUser Management and Access Control](/faq/user-management-and-access-control)

Copyright Â© 2025 Atlan Pte. Ltd.

