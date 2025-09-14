# Source URL
https://developer.atlan.com/models/gcs/

================================================================================

<!--
canonical: https://developer.atlan.com/models/gcs/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/gcs/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: GCS - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/gcs/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/gcs/index.png
meta-twitter:title: GCS - Developer
meta-viewport: width=device-width,initial-scale=1
title: GCS - Developer
-->

[Skip to content](#gcs-model) Developer GCS Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

GCS model[¶](#gcs-model "Permanent link")
=========================================

Base class for Google Cloud Storage assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing GCS assets in Atlan. For that, we would suggest starting with the [manage Google Cloud Storage assets pattern](../../patterns/create/gcs/).

```
classDiagram
    direction RL
    class GCS {
        <<abstract>>
    }
    link GCS "../gcs"
    class Google {
        <<abstract>>
    }
    link Google "../google"
    Google <|-- GCS : extends
    class Cloud {
        <<abstract>>
    }
    link Cloud "../entities/cloud"
    Cloud <|-- Google : extends
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    Asset <|-- Cloud : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    Referenceable <|-- Asset : extends
    class ObjectStore {
        <<abstract>>
    }
    link ObjectStore "../entities/objectstore"
    ObjectStore <|-- GCS : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- ObjectStore : extends
    Asset <|-- Catalog : extends
    class GCSObject
    link GCSObject "../entities/gcsobject"
    GCS <|-- GCSObject : extends
    class GCSBucket
    link GCSBucket "../entities/gcsbucket"
    GCS <|-- GCSBucket : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `GCS` (and all of its subtypes).

### gcsAccessControl [¶](#gcsaccesscontrol "Permanent link")

Access control list for this asset.

### gcsETag [¶](#gcsetag "Permanent link")

Entity tag for the asset. An entity tag is a hash of the object and represents changes to the contents of an object only, not its metadata.

### gcsEncryptionType [¶](#gcsencryptiontype "Permanent link")

Encryption algorithm used to encrypt this asset.

### gcsMetaGenerationId [¶](#gcsmetagenerationid "Permanent link")

Version of metadata for this asset at this generation. Used for preconditions and detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular asset.

### gcsRequesterPays [¶](#gcsrequesterpays "Permanent link")

Whether the requester pays header was sent when this asset was created (true) or not (false).

### gcsStorageClass [¶](#gcsstorageclass "Permanent link")

Storage class of this asset.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various GCS objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ GCSBucket : ""
    GCSBucket ||--o{ GCSObject : gcsObjects
```

---

2023\-07\-072023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/gcs/) to provide us with more information. 

Back to top

[Previous Google](../google/) [Next GCSBucket](../entities/gcsbucket/) 

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

