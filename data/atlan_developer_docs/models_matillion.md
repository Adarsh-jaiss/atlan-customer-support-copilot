# Source URL
https://developer.atlan.com/models/matillion/

================================================================================

<!--
canonical: https://developer.atlan.com/models/matillion/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/matillion/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Matillion - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/matillion/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/matillion/index.png
meta-twitter:title: Matillion - Developer
meta-viewport: width=device-width,initial-scale=1
title: Matillion - Developer
-->

[Skip to content](#matillion) Developer Matillion Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Matillion[¶](#matillion "Permanent link")
=========================================

Base class for Matillion assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Matillion assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class MatillionComponent
    link MatillionComponent "../entities/matillioncomponent"
    Matillion <|-- MatillionComponent : extends
    class MatillionGroup
    link MatillionGroup "../entities/matilliongroup"
    Matillion <|-- MatillionGroup : extends
    class MatillionJob
    link MatillionJob "../entities/matillionjob"
    Matillion <|-- MatillionJob : extends
    class MatillionProject
    link MatillionProject "../entities/matillionproject"
    Matillion <|-- MatillionProject : extends
    class Matillion {
        <<abstract>>
    }
    link Matillion "../entities/matillion"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- Matillion : extends
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
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Matillion` (and all of its subtypes).

### matillionVersion [¶](#matillionversion "Permanent link")

Current point in time state of a project.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Matillion objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ MatillionGroup : ""
    MatillionGroup |o--o{ MatillionProject : matillionProjects
    MatillionProject |o--o{ MatillionJob : matillionJobs
    MatillionJob |o--o{ MatillionComponent : matillionComponents
    MatillionComponent |o--o| LineageProcess : matillionProcess
```

---

2023\-09\-182024\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/matillion/) to provide us with more information. 

Back to top

[Previous LookerView](../entities/lookerview/) [Next MatillionComponent](../entities/matillioncomponent/) 

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

