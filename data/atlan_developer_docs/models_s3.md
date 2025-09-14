# Source URL
https://developer.atlan.com/models/s3/

================================================================================

<!--
canonical: https://developer.atlan.com/models/s3/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/s3/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: S3 - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/s3/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/s3/index.png
meta-twitter:title: S3 - Developer
meta-viewport: width=device-width,initial-scale=1
title: S3 - Developer
-->

[Skip to content](#s3-model) Developer S3 Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

S3 model[¶](#s3-model "Permanent link")
=======================================

Base class for S3 assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage S3 assets in Atlan. For that, we would suggest starting with the [manage AWS S3 assets pattern](../../patterns/create/aws/).

```
classDiagram
    direction RL
    class S3 {
        <<abstract>>
    }
    link S3 "../s3"
    class ObjectStore {
        <<abstract>>
    }
    link ObjectStore "../entities/objectstore"
    ObjectStore <|-- S3 : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- ObjectStore : extends
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
    class AWS {
        <<abstract>>
    }
    link AWS "../aws"
    AWS <|-- S3 : extends
    class Cloud {
        <<abstract>>
    }
    link Cloud "../entities/cloud"
    Cloud <|-- AWS : extends
    Asset <|-- Cloud : extends
    class S3Bucket
    link S3Bucket "../entities/s3bucket"
    S3 <|-- S3Bucket : extends
    class S3Object
    link S3Object "../entities/s3object"
    S3 <|-- S3Object : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `S3` (and all of its subtypes).

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various S3 objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ S3Bucket : ""
    S3Bucket ||--o{ S3Object : objects
```

---

2023\-07\-072023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/s3/) to provide us with more information. 

Back to top

[Previous DynamoDBLocalSecondaryIndex](../entities/dynamodblocalsecondaryindex/) [Next S3Bucket](../entities/s3bucket/) 

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

