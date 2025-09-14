# Source URL
https://developer.atlan.com/concepts/review/

================================================================================

<!--
canonical: https://developer.atlan.com/concepts/review/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Other important concepts to understand related to Atlan development.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Other important concepts to understand related to Atlan development.
meta-og-image: https://developer.atlan.com/assets/images/social/concepts/review.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Important concepts - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/concepts/review/
meta-twitter:card: summary_large_image
meta-twitter:description: Other important concepts to understand related to Atlan development.
meta-twitter:image: https://developer.atlan.com/assets/images/social/concepts/review.png
meta-twitter:title: Important concepts - Developer
meta-viewport: width=device-width,initial-scale=1
title: Important concepts - Developer
-->

[Skip to content](#other-important-concepts) Developer Important concepts Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Other important concepts[¶](#other-important-concepts "Permanent link")
=======================================================================

Type definitions[¶](#type-definitions "Permanent link")
-------------------------------------------------------

Type definitions (or **typedefs** for short) describe the properties and relationships that each different *type* of asset can have in Atlan.

Type definitions are the *structure* for metadata

In an object\-oriented programming sense, think of a type definition as the ***class*** itself. They describe the underlying *data model* of Atlan.

For example:

* The model for database tables in Atlan is defined by the `Table` typedef.
* The `Table` typedef describes characteristics unique to database tables, such as column counts and row counts.
* The `Table` typedef inherits from an `Asset` typedef. (As do most other objects in Atlan.)
* The `Asset` typedef describes characteristics that apply to all of these objects, such as certificates and announcements.

```
classDiagram
  class Asset {
    <<abstract>>
    name
    qualifiedName
    certificateStatus
    certificateStatusMessage
    announcementType
    announcementTitle
    announcementMessage
    ...
    assignedTerms()
  }
  class Table {
    columnCount
    rowCount
    atlanSchema()
    columns()
  }
  class Column {
    dataType
    isNullable
    table()
  }
  Asset <|-- Table : extends
  Asset <|-- Column : extends
```

Special assets[¶](#special-assets "Permanent link")
---------------------------------------------------

While all assets follow the above principles, there are two types of assets to be aware of that have further specific uses in Atlan.

### Connections[¶](#connections "Permanent link")

```
classDiagram
  class Connection {
    ...
    connector[Name|Type]
    ...
  }
```
**Connections** play several important roles:

* They form the basis of Atlan's access control policies.
* Their `connectorName` property (renamed `connectorType` in some SDKs) decides the [icon](../../models/connectortypes/) Atlan will use for assets contained within the connection.

### Processes[¶](#processes "Permanent link")

**Processes** form the basis for Atlan's data lineage. They define how data inputs (*sources*) are translated into data outputs (*targets*). 

Without a process asset to link these upstream and downstream assets, you cannot have data lineage in Atlan.

```
graph LR
  s1[(Source 1)]
  s2[(Source 2)]
  s3[(Source 3)]
  t1[(Target 1)]
  t2[(Target 2)]
  p([Process])
  s1 & s2 & s3-->|upstream|p-->|downstream|t1 & t2
```

---

Tags[¶](#tags "Permanent link")
-------------------------------

[Tags](https://ask.atlan.com/hc/en-us/articles/6751823790609)  give you a way to classify and group assets in different ways, for example:

* By industry standard information security or sensitivity schemes (for example: PII)
* By department or business domain (for example: HR, Finance, Marketing, and so on)
* By key characteristic for alerting (for example: data quality issue, load failure, or similar)
* Really any other way you want to group together your assets

### Propagation[¶](#propagation "Permanent link")

What's special about tags?

Atlan can [*propagate*](https://ask.atlan.com/hc/en-us/articles/7781076790289)  tags for you automatically, to related assets:

* From upstream assets to downstream assets (via lineage)
* From parent assets to child assets (for example, from a table to all of its columns)
* From a term to all of its linked assets

[https://demo.arcade.software/1PpW4XbCqRbaExJ4smx5?embed](https://demo.arcade.software/1PpW4XbCqRbaExJ4smx5?embed)

This becomes particularly powerful when using tags to represent key information you want to let your users know about. For example:

#### Tagging problematic assets[¶](#tagging-problematic-assets "Permanent link")

* If you find a problem on an asset, you can tag that asset as having a known issue.
* With propagation, Atlan will *automatically* tag all downstream (impacted) assets as having a known issue as well.
* Even better, you can see from that propagated tag which upstream asset(s) are the source of that known issue.

#### Tagging sensitive assets[¶](#tagging-sensitive-assets "Permanent link")

* You can create a glossary of terms core to your business like customer details, accounts, etc.
* You can assign the terms in that glossary to the data assets that hold that information.
* You can then tag the terms with sensitivity ratings (like PII, Confidential, Public, etc).
* With propagation, Atlan will *automatically* tag all related data assets with those same sensitivity ratings.
* Even better, any assets or fields *derived* from those assets (even if named differently) will be propagated that sensitivity rating as well.

### Branding[¶](#branding "Permanent link")

You can also "brand" tags to provide quick visual distinction:

* Choose from a predefined list of icons
* Apply a color to the tag
* Or even upload your own image to use as an icon to represent the tag

### Access control[¶](#access-control "Permanent link")

Tags can also be used to control access to assets, through [purposes](https://ask.atlan.com/hc/en-us/articles/4418690792849) . When combined with propagation, you gain a very powerful, automated means to protect your most sensitive data.

---

Custom metadata[¶](#custom-metadata "Permanent link")
-----------------------------------------------------

[Custom metadata](https://ask.atlan.com/hc/en-us/articles/6755053022225)  gives you a way to extend the built\-in [types](#type-definitions) with your own attributes.

Structurally custom metadata is composed of:

* An overall name (sometimes referred to as a "set")
* Individual attributes contained within that "set"
* (Optional) Restrictions on which assets can possess values for the custom metadata

Runtime resolution

Note that unlike built\-in types and attributes, custom metadata can only be resolved at runtime. Therefore custom metadata attributes are not strongly\-typed in the SDKs the way built\-in types and attributes are — they must be handled a little differently.

### Badges[¶](#badges "Permanent link")

What's special about custom metadata?

1. Firstly, custom metadata gives you a way to define your own attributes for assets.
2. In addition, on top of custom metadata attributes you can create [badges](https://ask.atlan.com/hc/en-us/articles/8603249978781)  to callout important information on assets.

[https://demo.arcade.software/rgO9FYHnQwWJdn15WOhx?embed](https://demo.arcade.software/rgO9FYHnQwWJdn15WOhx?embed)

### Branding[¶](#branding_1 "Permanent link")

You can also "brand" custom metadata to provide quick visual distinction:

* Choose from a predefined list of emojis
* Or even upload your own image to use as an icon to represent the custom metadata

This "branding" will also be used for any badges you create over the custom metadata attributes.

---

2023\-12\-282024\-02\-22

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/concepts/review/) to provide us with more information. 

Back to top

[Previous Introductory walkthrough](../../getting-started/) [Next Documentation conventions](../../conventions/) 

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

