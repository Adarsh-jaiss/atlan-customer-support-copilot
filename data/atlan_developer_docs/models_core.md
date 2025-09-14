# Source URL
https://developer.atlan.com/models/core/

================================================================================

<!--
canonical: https://developer.atlan.com/models/core/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/core/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Core - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/core/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/core/index.png
meta-twitter:title: Core - Developer
meta-viewport: width=device-width,initial-scale=1
title: Core - Developer
-->

[Skip to content](#core-model) Developer Core Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Core model[¶](#core-model "Permanent link")
===========================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand developing with Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

These are the core model elements in Atlan from which everything else derives.

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
    class Connection
    link Connection "../entities/connection"
    Asset <|-- Connection : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Asset <|-- Catalog : extends
    class AccessControl {
        <<abstract>>
    }
    link AccessControl "../accesscontrol"
    Asset <|-- AccessControl : extends
    class Persona
    link Persona "../entities/persona"
    AccessControl <|-- Persona : extends
    class Purpose
    link Purpose "../entities/purpose"
    AccessControl <|-- Purpose : extends
    class Tag {
        <<abstract>>
    }
    link Tag "../entities/tag"
    Catalog <|-- Tag : extends
    class AuthPolicy
    link AuthPolicy "../entities/authpolicy"
    Asset <|-- AuthPolicy : extends
    class AuthService
    link AuthService "../entities/authservice"
    Asset <|-- AuthService : extends
    class WorkflowRun
    link WorkflowRun "../entities/workflowrun"
    Asset <|-- WorkflowRun : extends
    class Task
    link Task "../entities/task"
    Asset <|-- Task : extends
```

---

2023\-07\-072024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/core/) to provide us with more information. 

Back to top

[Previous Full model reference](../) [Next Referenceable](../entities/referenceable/) 

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

