# Source URL
https://developer.atlan.com/models/fivetran/

================================================================================

<!--
canonical: https://developer.atlan.com/models/fivetran/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/fivetran/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Fivetran - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/fivetran/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/fivetran/index.png
meta-twitter:title: Fivetran - Developer
meta-viewport: width=device-width,initial-scale=1
title: Fivetran - Developer
-->

[Skip to content](#fivetran-model) Developer Fivetran Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Fivetran model[¶](#fivetran-model "Permanent link")
===================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Anomalo assets.

These model elements all deal with Anomalo constructs.

```
classDiagram
    direction RL
    class Fivetran {
        <<abstract>>
    }
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- Fivetran : extends
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    Asset <|-- Catalog : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    Referenceable <|-- Asset : extends
    class FivetranConnector
    link FivetranConnector "../entities/fivetranconnector"
    Fivetran <|-- FivetranConnector : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are unique to instances of `Fivetran` (and all of its subtypes).

### fivetranLastSyncRecordsUpdated [¶](#fivetranlastsyncrecordsupdated "Permanent link")

Number of records updated in the latest sync on Fivetran

### fivetranLastSyncStatus [¶](#fivetranlastsyncstatus "Permanent link")

Status of the latest sync on Fivetran.

### fivetranWorkflowName [¶](#fivetranworkflowname "Permanent link")

Name of the atlan fivetran workflow that updated this asset

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Fivetran objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ FivetranConnector : ""
```

---

2024\-11\-212024\-11\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/fivetran/) to provide us with more information. 

Back to top

[Previous DocumentDBDatabase](../entities/documentdbdatabase/) [Next FivetranConnector](../entities/fivetranconnector/) 

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

