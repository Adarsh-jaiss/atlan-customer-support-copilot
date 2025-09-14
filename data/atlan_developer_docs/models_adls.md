# Source URL
https://developer.atlan.com/models/adls/

================================================================================

<!--
canonical: https://developer.atlan.com/models/adls/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/adls/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: ADLS - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/adls/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/adls/index.png
meta-twitter:title: ADLS - Developer
meta-viewport: width=device-width,initial-scale=1
title: ADLS - Developer
-->

[Skip to content](#adls) Developer ADLS Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

ADLS[¶](#adls "Permanent link")
===============================

Base class for Azure Data Lake Storage (ADLS) assets.

```
classDiagram
    direction RL
    class ADLS {
        <<abstract>>
    }
    link ADLS "../adls"
    class ObjectStore {
        <<abstract>>
    }
    link ObjectStore "../entities/objectstore"
    ObjectStore <|-- ADLS : extends
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
    class Azure {
        <<abstract>>
    }
    link Azure "../azure"
    Azure <|-- ADLS : extends
    class Cloud {
        <<abstract>>
    }
    link Cloud "../entities/cloud"
    Cloud <|-- Azure : extends
    Asset <|-- Cloud : extends
    class ADLSAccount
    link ADLSAccount "../entities/adlsaccount"
    ADLS <|-- ADLSAccount : extends
    class ADLSContainer
    link ADLSContainer "../entities/adlscontainer"
    ADLS <|-- ADLSContainer : extends
    class ADLSObject
    link ADLSObject "../entities/adlsobject"
    ADLS <|-- ADLSObject : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `ADLS` (and all of its subtypes).

### adlsAccountQualifiedName [¶](#adlsaccountqualifiedname "Permanent link")

Unique name of the account for this ADLS asset.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various ADLS objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ ADLSAccount : ""
    ADLSAccount ||--o{ ADLSContainer : adlsContainers
    ADLSContainer ||--o{ ADLSObject : adlsObjects
```

---

2023\-07\-072023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/adls/) to provide us with more information. 

Back to top

[Previous AdfPipeline](../entities/adfpipeline/) [Next ADLSAccount](../entities/adlsaccount/) 

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

