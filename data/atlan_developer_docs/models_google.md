# Source URL
https://developer.atlan.com/models/google/

================================================================================

<!--
canonical: https://developer.atlan.com/models/google/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/google/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Google - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/google/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/google/index.png
meta-twitter:title: Google - Developer
meta-viewport: width=device-width,initial-scale=1
title: Google - Developer
-->

[Skip to content](#google-model) Developer Google Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Google model[¶](#google-model "Permanent link")
===============================================

Base class for Google assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand integrating Google assets with Atlan. For that, we would suggest starting with either:

* The [manage Google Cloud Storage assets pattern](../../patterns/create/gcs/)
* The [manage Google Data Studio assets pattern](../../patterns/create/gds/)

```
classDiagram
    direction RL
    class Google {
        <<abstract>>
    }
    link Google "../google"
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
    class DataStudio {
        <<abstract>>
    }
    link DataStudio "../datastudio"
    Google <|-- DataStudio : extends
    class DataStudioAsset
    link DataStudioAsset "../entities/datastudioasset"
    DataStudio <|-- DataStudioAsset : extends
    class GCS {
        <<abstract>>
    }
    link GCS "../gcs"
    Google <|-- GCS : extends
    class ObjectStore {
        <<abstract>>
    }
    link ObjectStore "../entities/objectstore"
    Catalog <|-- ObjectStore : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Asset <|-- Catalog : extends
    ObjectStore <|-- GCS : extends
    class GCSObject
    link GCSObject "../entities/gcsobject"
    GCS <|-- GCSObject : extends
    class GCSBucket
    link GCSBucket "../entities/gcsbucket"
    GCS <|-- GCSBucket : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Google` (and all of its subtypes).

### googleLabels [¶](#googlelabels "Permanent link")

List of labels that have been applied to the asset in Google.

### googleLocation [¶](#googlelocation "Permanent link")

Location of this asset in Google.

### googleLocationType [¶](#googlelocationtype "Permanent link")

Type of location of this asset in Google.

### googleProjectId [¶](#googleprojectid "Permanent link")

ID of the project in which the asset exists.

### googleProjectName [¶](#googleprojectname "Permanent link")

Name of the project in which the asset exists.

### googleProjectNumber [¶](#googleprojectnumber "Permanent link")

Number of the project in which the asset exists.

### googleService [¶](#googleservice "Permanent link")

Service in Google in which the asset exists.

### googleTags [¶](#googletags "Permanent link")

List of tags that have been applied to the asset in Google.

---

2023\-07\-072023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/google/) to provide us with more information. 

Back to top

[Previous FivetranConnector](../entities/fivetranconnector/) [Next GCS](../gcs/) 

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

