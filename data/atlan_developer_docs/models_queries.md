# Source URL
https://developer.atlan.com/models/queries/

================================================================================

<!--
canonical: https://developer.atlan.com/models/queries/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/queries/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Query organization - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/queries/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/queries/index.png
meta-twitter:title: Query organization - Developer
meta-viewport: width=device-width,initial-scale=1
title: Query organization - Developer
-->

[Skip to content](#query-organization-model) Developer Query organization Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Query organization model[¶](#query-organization-model "Permanent link")
=======================================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand developing with Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

These are the model elements in Atlan that are used organize queries.

```
classDiagram
    direction RL
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    Referenceable <|-- Asset : extends
    class Namespace {
        <<abstract>>
    }
    link Namespace "../entities/namespace"
    Asset <|-- Namespace : extends
    class Collection
    link Collection "../entities/collection"
    Namespace <|-- Collection : extends
    class Folder
    link Folder "../entities/folder"
    Namespace <|-- Folder : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various query organization objects inter\-relate with each other:

```
erDiagram
    Collection ||--o{ Folder : childrenFolders
    Folder ||--o{ Folder : childrenFolders
    Collection |o--o{ Query : childrenQueries
    Folder |o--o{ Query : childrenQueries
```

---

2023\-07\-072023\-08\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/queries/) to provide us with more information. 

Back to top

[Previous SQL](../entities/sql/) [Next Namespace](../entities/namespace/) 

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

