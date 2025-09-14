# Source URL
https://developer.atlan.com/models/resource/

================================================================================

<!--
canonical: https://developer.atlan.com/models/resource/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/resource/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Resource - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/resource/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/resource/index.png
meta-twitter:title: Resource - Developer
meta-viewport: width=device-width,initial-scale=1
title: Resource - Developer
-->

[Skip to content](#resources-model) Developer Resource Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Resources model[¶](#resources-model "Permanent link")
=====================================================

These are the model elements in Atlan related to resources — covering things like links and files.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage resources in Atlan. For that, we would suggest starting with either:

* the [add asset resources / links snippets](../../snippets/common-examples/resources/)
* the [manage file assets pattern](../../patterns/create/file/)

```
classDiagram
    direction RL
    class Resource {
        <<abstract>>
    }
    link Resource "../resource"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- Resource : extends
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
    class ReadmeTemplate
    link ReadmeTemplate "../entities/readmetemplate"
    Resource <|-- ReadmeTemplate : extends
    class Readme
    link Readme "../entities/readme"
    Resource <|-- Readme : extends
    class File
    link File "../entities/file"
    Resource <|-- File : extends
    class Link
    link Link "../entities/link"
    Resource <|-- Link : extends
    class Badge
    link Badge "../entities/badge"
    Asset <|-- Badge : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Resource` (and all of its subtypes).

### isGlobal [¶](#isglobal "Permanent link")

Whether the resource is global (true) or not (false).

### link [¶](#link "Permanent link")

URL to the resource.

### reference [¶](#reference "Permanent link")

Reference to the resource.

### resourceMetadata [¶](#resourcemetadata "Permanent link")

Metadata of the resource.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of resources inter\-relate with each other:

```
erDiagram
    Asset ||--o| Readme : readme
    Asset |o--o{ File : files
    Asset ||--o{ Link : links
```

---

2023\-07\-072024\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/resource/) to provide us with more information. 

Back to top

[Previous BIProcess](../entities/biprocess/) [Next Link](../entities/link/) 

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

