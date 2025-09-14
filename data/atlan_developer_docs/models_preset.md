# Source URL
https://developer.atlan.com/models/preset/

================================================================================

<!--
canonical: https://developer.atlan.com/models/preset/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/preset/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Preset - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/preset/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/preset/index.png
meta-twitter:title: Preset - Developer
meta-viewport: width=device-width,initial-scale=1
title: Preset - Developer
-->

[Skip to content](#preset) Developer Preset Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Preset[¶](#preset "Permanent link")
===================================

Base class for Preset assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Preset assets in Atlan. For that, we would suggest starting with the [manage Preset assets pattern](../../patterns/create/preset/).

```
classDiagram
    direction RL
    class Preset {
        <<abstract>>
    }
    link Preset "../preset"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- Preset : extends
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
    class PresetChart
    link PresetChart "../entities/presetchart"
    Preset <|-- PresetChart : extends
    class PresetDataset
    link PresetDataset "../entities/presetdataset"
    Preset <|-- PresetDataset : extends
    class PresetDashboard
    link PresetDashboard "../entities/presetdashboard"
    Preset <|-- PresetDashboard : extends
    class PresetWorkspace
    link PresetWorkspace "../entities/presetworkspace"
    Preset <|-- PresetWorkspace : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Preset` (and all of its subtypes).

### presetDashboardId [¶](#presetdashboardid "Permanent link")

Identifier of the dashboard in which this asset exists, in Preset.

### presetDashboardQualifiedName [¶](#presetdashboardqualifiedname "Permanent link")

Unique name of the dashboard in which this asset exists.

### presetWorkspaceId [¶](#presetworkspaceid "Permanent link")

Identifier of the workspace in which this asset exists, in Preset.

### presetWorkspaceQualifiedName [¶](#presetworkspacequalifiedname "Permanent link")

Unique name of the workspace in which this asset exists.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Preset objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ PresetWorkspace : ""
    PresetWorkspace ||--o{ PresetDashboard : presetDashboards
    PresetDashboard ||--o{ PresetChart : presetCharts
    PresetDashboard ||--o{ PresetDataset : presetDatasets
```

---

2023\-01\-042024\-06\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/preset/) to provide us with more information. 

Back to top

[Previous PowerBIWorkspace](../entities/powerbiworkspace/) [Next PresetChart](../entities/presetchart/) 

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

