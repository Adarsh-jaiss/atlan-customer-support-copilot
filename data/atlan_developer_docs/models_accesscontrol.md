# Source URL
https://developer.atlan.com/models/accesscontrol/

================================================================================

<!--
canonical: https://developer.atlan.com/models/accesscontrol/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/accesscontrol/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Access control - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/accesscontrol/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/accesscontrol/index.png
meta-twitter:title: Access control - Developer
meta-viewport: width=device-width,initial-scale=1
title: Access control - Developer
-->

[Skip to content](#access-control-model) Developer Access control Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Access control model[¶](#access-control-model "Permanent link")
===============================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage access control in Atlan. For that, we would suggest starting with the [access control and personalization snippets](../../snippets/access/).

Base class for Atlan access control assets.

```
classDiagram
    direction RL
    class AccessControl {
        <<abstract>>
    }
    link AccessControl "../accesscontrol"
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    Asset <|-- AccessControl : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    Referenceable <|-- Asset : extends
    class Persona
    link Persona "../entities/persona"
    AccessControl <|-- Persona : extends
    class Purpose
    link Purpose "../entities/purpose"
    AccessControl <|-- Purpose : extends
    class AuthPolicy
    link AuthPolicy "../entities/authpolicy"
    Asset <|-- AuthPolicy : extends
    class AuthService
    link AuthService "../entities/authservice"
    Asset <|-- AuthService : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `AccessControl` (and all of its subtypes).

### channelLink [¶](#channellink "Permanent link")

TBC

### defaultNavigation [¶](#defaultnavigation "Permanent link")

TBC

### denyAssetFilters [¶](#denyassetfilters "Permanent link")

TBC

### denyAssetTabs [¶](#denyassettabs "Permanent link")

TBC

### denyAssetTypes [¶](#denyassettypes "Permanent link")

TBC

### denyCustomMetadataGuids [¶](#denycustommetadataguids "Permanent link")

TBC

### denyNavigationPages [¶](#denynavigationpages "Permanent link")

TBC

### displayPreferences [¶](#displaypreferences "Permanent link")

TBC

### isAccessControlEnabled [¶](#isaccesscontrolenabled "Permanent link")

TBC

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of access control inter\-relate with each other:

```
erDiagram
    Persona |o--o{ AuthPolicy : policies
    Purpose |o--o{ AuthPolicy : policies
    AuthPolicy }o..o{ Asset : policyResources
```

---

2023\-07\-072024\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/accesscontrol/) to provide us with more information. 

Back to top

[Previous TagAttachment](../entities/tagattachment/) [Next Persona](../entities/persona/) 

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

