# Source URL
https://developer.atlan.com/models/anaplan/

================================================================================

<!--
canonical: https://developer.atlan.com/models/anaplan/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/anaplan/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Anaplan - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/anaplan/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/anaplan/index.png
meta-twitter:title: Anaplan - Developer
meta-viewport: width=device-width,initial-scale=1
title: Anaplan - Developer
-->

[Skip to content](#anaplan) Developer Anaplan Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Anaplan[¶](#anaplan "Permanent link")
=====================================

Base class for all Anaplan types.

Complete reference

This is a complete reference for the `Anaplan` object in Atlan, showing every possible property and relationship that can exist for these objects. For an introduction, you probably want to start with:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

`Anaplan` inherits its attributes and relationships from these other types:

```
classDiagram
    direction RL
    class AnaplanPage
    link AnaplanPage "../entities/anaplanpage"
    Anaplan <|-- AnaplanPage : extends
    class AnaplanList
    link AnaplanList "../entities/anaplanlist"
    Anaplan <|-- AnaplanList : extends
    class AnaplanLineItem
    link AnaplanLineItem "../entities/anaplanlineitem"
    Anaplan <|-- AnaplanLineItem : extends
    class AnaplanWorkspace
    link AnaplanWorkspace "../entities/anaplanworkspace"
    Anaplan <|-- AnaplanWorkspace : extends
    class AnaplanModule
    link AnaplanModule "../entities/anaplanmodule"
    Anaplan <|-- AnaplanModule : extends
    class AnaplanModel
    link AnaplanModel "../entities/anaplanmodel"
    Anaplan <|-- AnaplanModel : extends
    class AnaplanApp
    link AnaplanApp "../entities/anaplanapp"
    Anaplan <|-- AnaplanApp : extends
    class AnaplanSystemDimension
    link AnaplanSystemDimension "../entities/anaplansystemdimension"
    Anaplan <|-- AnaplanSystemDimension : extends
    class AnaplanDimension
    link AnaplanDimension "../entities/anaplandimension"
    Anaplan <|-- AnaplanDimension : extends
    class AnaplanView
    link AnaplanView "../entities/anaplanview"
    Anaplan <|-- AnaplanView : extends
    class Anaplan {
        <<abstract>>
    }
    link Anaplan "../anaplan"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Anaplan : extends
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
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Anaplan` (and all of its subtypes).

### anaplanModelName [¶](#anaplanmodelname "Permanent link")

Simple name of the AnaplanModel asset that contains this asset(AnaplanModule and everthing under it's hierarchy).

### anaplanModelQualifiedName [¶](#anaplanmodelqualifiedname "Permanent link")

Unique name of the AnaplanModel asset that contains this asset(AnaplanModule and everthing under it's hierarchy).

### anaplanModuleName [¶](#anaplanmodulename "Permanent link")

Simple name of the AnaplanModule asset that contains this asset(AnaplanLineItem, AnaplanList, AnaplanView and everthing under their hierarchy).

### anaplanModuleQualifiedName [¶](#anaplanmodulequalifiedname "Permanent link")

Unique name of the AnaplanModule asset that contains this asset(AnaplanLineItem, AnaplanList, AnaplanView and everthing under their hierarchy).

### anaplanSourceId [¶](#anaplansourceid "Permanent link")

Id/Guid of the Anaplan asset in the source system.

### anaplanWorkspaceName [¶](#anaplanworkspacename "Permanent link")

Simple name of the AnaplanWorkspace asset that contains this asset(AnaplanModel and everthing under it's hierarchy).

### anaplanWorkspaceQualifiedName [¶](#anaplanworkspacequalifiedname "Permanent link")

Unique name of the AnaplanWorkspace asset that contains this asset(AnaplanModel and everthing under it's hierarchy).

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Anomalo objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ AnaplanWorkspace : ""
    Connection ||..o{ AnaplanSystemDimension : ""
    Connection ||..o{ AnaplanApp : ""
    AnaplanApp ||--o{ AnaplanPage : anaplanPages
    AnaplanPage o|..o| AnaplanModel : ""
    AnaplanWorkspace ||--o{ AnaplanModel : anaplanModels
    AnaplanModel ||--o{ AnaplanDimension : anaplanDimensions
    AnaplanModel ||--o{ AnaplanModule : anaplanModules
    AnaplanModel ||--o{ AnaplanList : anaplanLists
    AnaplanModule ||--o{ AnaplanLineItem : anaplanLineItems
    AnaplanModule ||--o{ AnaplanView : anaplanViews
    AnaplanList o|..o| AnaplanLineItem : ""
    AnaplanDimension o|..o| AnaplanLineItem : ""
    AnaplanDimension o|..o| AnaplanView : "Row/Column/Page"
```

---

2024\-12\-292025\-02\-07

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/anaplan/) to provide us with more information. 

Back to top

[Previous QuickSightFolder](../entities/quicksightfolder/) [Next AnaplanWorkspace](../entities/anaplanworkspace/) 

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

