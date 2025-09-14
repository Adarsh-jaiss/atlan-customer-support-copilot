# Source URL
https://developer.atlan.com/models/entities/referenceable/

================================================================================

<!--
canonical: https://developer.atlan.com/models/entities/referenceable/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/entities/referenceable.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Referenceable - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/entities/referenceable/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/entities/referenceable.png
meta-twitter:title: Referenceable - Developer
meta-viewport: width=device-width,initial-scale=1
title: Referenceable - Developer
-->

[Skip to content](#referenceable) Developer Referenceable Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Referenceable[¶](#referenceable "Permanent link")
=================================================

Base class for everything in Atlan.

Complete reference

This is a complete reference for the `Referenceable` object in Atlan, showing every possible property and relationship that can exist for these objects. For an introduction, you probably want to start with:

* [Snippets](../../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../../patterns/) — walkthroughs of common multi\-step implementation patterns.

`Referenceable` is the root of inheritance, and has no supertypes itself.

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Referenceable` (and all of its subtypes).

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

---

2023\-01\-042023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/entities/referenceable/) to provide us with more information. 

Back to top

[Previous Core](../../core/) [Next Asset](../asset/) 

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

