# Source URL
https://developer.atlan.com/models/cognos/

================================================================================

<!--
canonical: https://developer.atlan.com/models/cognos/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/cognos/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Cognos - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/cognos/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/cognos/index.png
meta-twitter:title: Cognos - Developer
meta-viewport: width=device-width,initial-scale=1
title: Cognos - Developer
-->

[Skip to content](#cognos) Developer Cognos Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Cognos[¶](#cognos "Permanent link")
===================================

These are the model elements in Atlan related to Cognos.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage Cognos assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Cognos {
        <<abstract>>
    }
    link Cognos "../cognos"
    class BI {
        <<abstract>>
    }
    link BI "../bi"
    BI <|-- Cognos : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- BI : extends
    class Asset {
        <<abstract>>
    }
    link Asset "../asset"
    Asset <|-- Catalog : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../referenceable"
    Referenceable <|-- Asset : extends
    class CognosExploration
    link CognosExploration "../entities/cognosexploration"
    Cognos <|-- CognosExploration : extends
    class CognosDashboard
    link CognosDashboard "../entities/cognosdashboard"
    Cognos <|-- CognosDashboard : extends
    class CognosReport
    link CognosReport "../entities/cognosreport"
    Cognos <|-- CognosReport : extends
    class CognosModule
    link CognosModule "../entities/cognosmodule"
    Cognos <|-- CognosModule : extends
    class CognosFile
    link CognosFile "../entities/cognosfile"
    Cognos <|-- CognosFile : extends
    class CognosFolder
    link CognosFolder "../entities/cognosfolder"
    Cognos <|-- CognosFolder : extends
    class CognosPackage
    link CognosPackage "../entities/cognospackage"
    Cognos <|-- CognosPackage : extends
    class CognosDatasource
    link CognosDatasource "../entities/cognosdatasource"
    Cognos <|-- CognosDatasource : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Cognos` (and all of its subtypes).

### cognosDefaultScreenTip [¶](#cognosdefaultscreentip "Permanent link")

Tooltip text present for the Cognos asset

### cognosId [¶](#cognosid "Permanent link")

ID of the asset in Cognos

### cognosIsDisabled [¶](#cognosisdisabled "Permanent link")

Whether the Cognos asset is diabled

### cognosIsHidden [¶](#cognosishidden "Permanent link")

Whether the Cognos asset is hidden from the ui

### cognosParentName [¶](#cognosparentname "Permanent link")

Name of the parent asset in Cognos

### cognosParentQualifiedName [¶](#cognosparentqualifiedname "Permanent link")

Qualified name of the parent asset in Cognos

### cognosPath [¶](#cognospath "Permanent link")

Path of the asset in Cognos. E.g. /content/folder\[@name\='Folder Name']

### cognosType [¶](#cognostype "Permanent link")

Cognos type of the Cognos asset. E.g. report, dashboard, package, etc.

### cognosVersion [¶](#cognosversion "Permanent link")

Version of the Cognos asset

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of Cognos inter\-relate with each other:

```
erDiagram
    Connection ||..o{ CognosFolder : ""
    Connection ||..o{ CognosDatasource : ""
    CognosFolder ||--o{ CognosDashboard : cognosDashboards
    CognosFolder ||--o{ CognosExploration : cognosExplorations
    CognosFolder ||--o{ CognosFile : cognosFiles
    CognosFolder ||--o{ CognosModule : cognosModules
    CognosFolder ||--o{ CognosPackage : cognosPackages
    CognosFolder ||--o{ CognosReport : cognosReports
    CognosFolder ||--o{ CognosFolder : cognosSubFolders
```

---

2024\-06\-182024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/cognos/) to provide us with more information. 

Back to top

[Previous IBM](../ibm/) [Next CognosDashboard](../entities/cognosdashboard/) 

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

