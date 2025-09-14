# Source URL
https://developer.atlan.com/models/abstractions/

================================================================================

<!--
canonical: https://developer.atlan.com/models/abstractions/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/abstractions/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Abstractions - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/abstractions/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/abstractions/index.png
meta-twitter:title: Abstractions - Developer
meta-viewport: width=device-width,initial-scale=1
title: Abstractions - Developer
-->

[Skip to content](#model-abstractions) Developer Abstractions Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Model abstractions[¶](#model-abstractions "Permanent link")
===========================================================

Abstractions are used to describe common parts of the model. No individual instance of metadata (an asset) is intended to be created at these abstract levels. Instead, they define the higher\-level differentiation between broad categories of assets.

```
classDiagram
    direction RL
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../referenceable"
    class Asset {
        <<abstract>>
    }
    link Asset "../asset"
    Referenceable <|-- Asset : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Asset <|-- Catalog : extends
    class BI {
        <<abstract>>
    }
    link BI "../bi"
    Catalog <|-- BI : extends
    class Cloud {
        <<abstract>>
    }
    link Cloud "../cloud"
    Asset <|-- Cloud : extends
    class Insight {
        <<abstract>>
    }
    link Insight "../insight"
    Catalog <|-- Insight : extends
    class ObjectStore {
        <<abstract>>
    }
    link ObjectStore "../objectstore"
    Catalog <|-- ObjectStore : extends
    class EventStore {
        <<abstract>>
    }
    link EventStore "../eventstore"
    Catalog <|-- EventStore : extends
    class DataQuality {
        <<abstract>>
    }
    link DataQuality "../dataquality"
    Catalog <|-- DataQuality : extends
    class Metric {
        <<abstract>>
    }
    link Metric "../metric"
    DataQuality <|-- Metric : extends
```

---

2023\-07\-072023\-07\-10

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/abstractions/) to provide us with more information. 

Back to top

[Previous WorkflowType](../enums/workflowtype/) [Next BI](../entities/bi/) 

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

