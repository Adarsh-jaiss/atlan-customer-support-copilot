# Source URL
https://developer.atlan.com/models/looker/

================================================================================

<!--
canonical: https://developer.atlan.com/models/looker/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/looker/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Looker - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/looker/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/looker/index.png
meta-twitter:title: Looker - Developer
meta-viewport: width=device-width,initial-scale=1
title: Looker - Developer
-->

[Skip to content](#looker) Developer Looker Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Looker[¶](#looker "Permanent link")
===================================

Base model for Looker assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Looker assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Looker {
        <<abstract>>
    }
    link Looker "../looker"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Looker : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- BI : extends
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
    class LookerLook
    link LookerLook "../entities/lookerlook"
    Looker <|-- LookerLook : extends
    class LookerDashboard
    link LookerDashboard "../entities/lookerdashboard"
    Looker <|-- LookerDashboard : extends
    class LookerFolder
    link LookerFolder "../entities/lookerfolder"
    Looker <|-- LookerFolder : extends
    class LookerTile
    link LookerTile "../entities/lookertile"
    Looker <|-- LookerTile : extends
    class LookerModel
    link LookerModel "../entities/lookermodel"
    Looker <|-- LookerModel : extends
    class LookerExplore
    link LookerExplore "../entities/lookerexplore"
    Looker <|-- LookerExplore : extends
    class LookerProject
    link LookerProject "../entities/lookerproject"
    Looker <|-- LookerProject : extends
    class LookerQuery
    link LookerQuery "../entities/lookerquery"
    Looker <|-- LookerQuery : extends
    class LookerField
    link LookerField "../entities/lookerfield"
    Looker <|-- LookerField : extends
    class LookerView
    link LookerView "../entities/lookerview"
    Looker <|-- LookerView : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Looker objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ LookerFolder : ""
    Connection ||..o{ LookerModel : ""
    Connection ||..o{ LookerProject : ""
    LookerFolder |o--o{ LookerDashboard : dashboards
    LookerFolder |o--o{ LookerLook : looks
    LookerFolder |o--o{ LookerFolder : lookerSubFolders
    LookerFolder |o--o| LookerFolder : lookerParentFolder
    LookerModel |o--o{ LookerExplore : explores
    LookerModel |o--o{ LookerField : fields
    LookerModel |o--o| LookerLook : look
    LookerModel |o--o{ LookerQuery : queries
    LookerProject |o--o{ LookerExplore : explores
    LookerProject |o--o{ LookerField : fields
    LookerProject |o--o{ LookerModel : models
    LookerProject |o--o{ LookerView : views
    LookerView |o--o{ LookerField : fields
    LookerExplore |o--o{ LookerField : fields
    LookerDashboard |o--o{ LookerLook : looks
    LookerDashboard |o--o{ LookerTile : tiles
    LookerLook |o--o| LookerTile : look
    LookerQuery |o--o{ LookerLook : looks
    LookerQuery |o--o{ LookerTile : tiles
```

---

2023\-01\-042023\-09\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/looker/) to provide us with more information. 

Back to top

[Previous KafkaTopic](../entities/kafkatopic/) [Next LookerDashboard](../entities/lookerdashboard/) 

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

