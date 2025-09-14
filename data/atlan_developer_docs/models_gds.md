# Source URL
https://developer.atlan.com/models/gds/

================================================================================

<!--
canonical: https://developer.atlan.com/models/gds/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/gds/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Google Data Studio - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/gds/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/gds/index.png
meta-twitter:title: Google Data Studio - Developer
meta-viewport: width=device-width,initial-scale=1
title: Google Data Studio - Developer
-->

[Skip to content](#google-data-studio-model) Developer Google Data Studio Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Google Data Studio model[¶](#google-data-studio-model "Permanent link")
=======================================================================

Base class for Google Data Studio assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Data Studio assets in Atlan. For that, we would suggest starting with the [manage Google Data Studio assets pattern](../../patterns/create/gds/).

```
classDiagram
    direction RL
    class DataStudio {
        <<abstract>>
    }
    link DataStudio "../entities/datastudio"
    class Google {
        <<abstract>>
    }
    link Google "../google"
    Google <|-- DataStudio : extends
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
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- DataStudio : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- BI : extends
    Asset <|-- Catalog : extends
    class DataStudioAsset
    link DataStudioAsset "../entities/datastudioasset"
    DataStudio <|-- DataStudioAsset : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Data Studio objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ DataStudioAsset : ""
```

---

2023\-07\-072023\-08\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/gds/) to provide us with more information. 

Back to top

[Previous GCSObject](../entities/gcsobject/) [Next DataStudioAsset](../entities/datastudioasset/) 

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

