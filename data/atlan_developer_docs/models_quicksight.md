# Source URL
https://developer.atlan.com/models/quicksight/

================================================================================

<!--
canonical: https://developer.atlan.com/models/quicksight/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/quicksight/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: QuickSight - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/quicksight/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/quicksight/index.png
meta-twitter:title: QuickSight - Developer
meta-viewport: width=device-width,initial-scale=1
title: QuickSight - Developer
-->

[Skip to content](#quicksight-model) Developer QuickSight Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

QuickSight model[¶](#quicksight-model "Permanent link")
=======================================================

Base class for QuickSight assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage QuickSight assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class QuickSight {
        <<abstract>>
    }
    link QuickSight "../quicksight"
    class BI {
        <<abstract>>
    }
    link BI "../entities/bi"
    BI <|-- QuickSight : extends
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
    class QuickSightFolder
    link QuickSightFolder "../entities/quicksightfolder"
    QuickSight <|-- QuickSightFolder : extends
    class QuickSightDashboardVisual
    link QuickSightDashboardVisual "../entities/quicksightdashboardvisual"
    QuickSight <|-- QuickSightDashboardVisual : extends
    class QuickSightAnalysisVisual
    link QuickSightAnalysisVisual "../entities/quicksightanalysisvisual"
    QuickSight <|-- QuickSightAnalysisVisual : extends
    class QuickSightDatasetField
    link QuickSightDatasetField "../entities/quicksightdatasetfield"
    QuickSight <|-- QuickSightDatasetField : extends
    class QuickSightAnalysis
    link QuickSightAnalysis "../entities/quicksightanalysis"
    QuickSight <|-- QuickSightAnalysis : extends
    class QuickSightDashboard
    link QuickSightDashboard "../entities/quicksightdashboard"
    QuickSight <|-- QuickSightDashboard : extends
    class QuickSightDataset
    link QuickSightDataset "../entities/quicksightdataset"
    QuickSight <|-- QuickSightDataset : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `QuickSight` (and all of its subtypes).

### quickSightId [¶](#quicksightid "Permanent link")

TBC

### quickSightSheetId [¶](#quicksightsheetid "Permanent link")

TBC

### quickSightSheetName [¶](#quicksightsheetname "Permanent link")

TBC

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various QuickSight objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ QuickSightAnalysis : ""
    Connection ||..o{ QuickSightDashboard : ""
    Connection ||..o{ QuickSightDataset : ""
    Connection ||..o{ QuickSightFolder : ""
    QuickSightFolder }o--o{ QuickSightAnalysis : quickSightAnalyses
    QuickSightFolder }o--o{ QuickSightDashboard : quickSightDashboards
    QuickSightFolder }o--o{ QuickSightDataset : quickSightDatasets
    QuickSightAnalysis |o--o{ QuickSightAnalysisVisual : quickSigntAnalysisVisuals
    QuickSightDashboard |o--o{ QuickSightDashboardVisual : quickSightDashboardVisuals
    QuickSightDataset |o--o{ QuickSightDatasetField : quickSightDatasetFields
```

---

2023\-07\-072023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/quicksight/) to provide us with more information. 

Back to top

[Previous S3Object](../entities/s3object/) [Next QuickSightAnalysis](../entities/quicksightanalysis/) 

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

