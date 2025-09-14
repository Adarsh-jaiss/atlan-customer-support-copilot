# Source URL
https://developer.atlan.com/models/app/

================================================================================

<!--
canonical: https://developer.atlan.com/models/app/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/app/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: App - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/app/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/app/index.png
meta-twitter:title: App - Developer
meta-viewport: width=device-width,initial-scale=1
title: App - Developer
-->

[Skip to content](#app-model) Developer App Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

App model[¶](#app-model "Permanent link")
=========================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage App assets in Atlan. For that, we would suggest starting with the [manage App assets pattern](../../patterns/create/app/).

Base class for App assets.

```
classDiagram
    direction RL
    class App {
        <<abstract>>
    }
    link App "../app"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- App : extends
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
    class Application
    link Application "../entities/application"
    App <|-- Application : extends
    class ApplicationField
    link ApplicationField "../entities/applicationfield"
    App <|-- ApplicationField : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `App` (and all of its subtypes).

### appId [¶](#appid "Permanent link")

Unique identifier for the App asset from the source system.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various App assets inter\-relate with each other:

```
erDiagram
    Connection ||..o{ Application : ""
    Application ||..o{ ApplicationField : "applicationChildFields"
```

---

2024\-11\-212025\-01\-30

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/app/) to provide us with more information. 

Back to top

[Previous AnomaloCheck](../entities/anomalocheck/) [Next Application](../entities/application/) 

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

