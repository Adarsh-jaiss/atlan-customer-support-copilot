# Source URL
https://developer.atlan.com/toolkits/typedef/example/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/typedef/example/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Running example to help explain how the typedef toolkit works.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Running example to help explain how the typedef toolkit works.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/typedef/example.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Running example - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/typedef/example/
meta-twitter:card: summary_large_image
meta-twitter:description: Running example to help explain how the typedef toolkit works.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/typedef/example.png
meta-twitter:title: Running example - Developer
meta-viewport: width=device-width,initial-scale=1
title: Running example - Developer
-->

[Skip to content](#running-example) Developer Running example Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Running example[¶](#running-example "Permanent link")
=====================================================

Running example

To summarize the overall example — we want to have `CustomDataset`, `CustomTable` and `CustomField` assets.

* These assets are related to each other in a hierarchy of parent\-child relationships:
    + `CustomDataset` to `CustomTable`, through `customTables`
    + `CustomTable` to `CustomField`, through `customFields`
* All of these assets have a number of attributes:
    + Some common (like `customSourceId`, `customDatasetName` and `customDatasetQualifiedName`).
    + Others unique (like `customTemperature` and `customRatings`).
* Some of these attributes themselves have a set of restricted values (`customTemperature`) or are a nested set of information (`customRatings`).
* Most of the attributes capture only a single value (`customSourceId` and `customTemperature`) but some allow multiple values (`customRatings`).

To help explain how this all works, we'll use this fictional example of a metadata model we want to set up:

```
erDiagram
    Connection ||..o{ CustomDataset : ""
    CustomDataset {
        string customSourceId
        string customDatasetName
        string customDatasetQualifiedName
    }
    CustomDataset ||--o{ CustomTable : customTables
    CustomTable {
        string customSourceId
        string customDatasetName
        string customDatasetQualifiedName
        struct[] customRatings
    }
    CustomTable ||--o{ CustomField : customFields
    CustomField {
        string customSourceId
        string customDatasetName
        string customDatasetQualifiedName
        string tableName
        string tableQualifiedName
        enum customTemperature
    }
    "CustomTemperature(Enum)" |o--o{ CustomField : ""
    "CustomTemperature(Enum)" {
        val HOT "highly available"
        val COLD "offline storage"
    }
    "CustomRating(Struct)" |o--o{ CustomTable : ""
    "CustomRating(Struct)" {
        string customRatingFrom
        long customRatingOf
    }
```

---

2025\-03\-112025\-03\-14

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/typedef/example/) to provide us with more information. 

Back to top

[Previous Typedef toolkit](../) [Next Define via template](../define/) 

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

