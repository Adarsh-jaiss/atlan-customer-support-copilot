# Source URL
https://developer.atlan.com/models/amazon/

================================================================================

<!--
canonical: https://developer.atlan.com/models/amazon/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/amazon/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Amazon AWS - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/amazon/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/amazon/index.png
meta-twitter:title: Amazon AWS - Developer
meta-viewport: width=device-width,initial-scale=1
title: Amazon AWS - Developer
-->

[Skip to content](#amazon-aws-model) Developer Amazon AWS Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Amazon (AWS) model[¶](#amazon-aws-model "Permanent link")
=========================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand developing with Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

Base class for AWS assets.

```
classDiagram
    direction RL
    class AWS {
        <<abstract>>
    }
    link AWS "../aws"
    class Cloud {
        <<abstract>>
    }
    link Cloud "../entities/cloud"
    Cloud <|-- AWS : extends
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    Asset <|-- Cloud : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Asset <|-- Catalog : extends
    class BI {
        <<abstract>>
    }
    link BI "bi"
    Catalog <|-- BI : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    Referenceable <|-- Asset : extends
    class ObjectStore {
        <<abstract>>
    }
    link ObjectStore "../entities/objectstore"
    Catalog <|-- ObjectStore : extends
    class S3 {
        <<abstract>>
    }
    link S3 "../s3"
    ObjectStore <|-- S3 : extends
    AWS <|-- S3 : extends
    class S3Bucket
    link S3Bucket "../entities/s3bucket"
    S3 <|-- S3Bucket : extends
    class S3Object
    link S3Object "../entities/s3object"
    S3 <|-- S3Object : extends
    class QuickSight {
        <<abstract>>
    }
    link QuickSight "../quicksight"
    BI <|-- QuickSight : extends
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

These attributes are specific to instances of `AWS` (and all of its subtypes).

### awsAccountId [¶](#awsaccountid "Permanent link")

12\-digit number that uniquely identifies an AWS account.

### awsArn [¶](#awsarn "Permanent link")

Amazon Resource Name (ARN) for this asset. This uniquely identifies the asset in AWS, and thus must be unique across all AWS asset instances.

### awsOwnerId [¶](#awsownerid "Permanent link")

Root user's ID.

### awsOwnerName [¶](#awsownername "Permanent link")

Root user's name.

### awsPartition [¶](#awspartition "Permanent link")

Group of AWS region and service objects.

### awsRegion [¶](#awsregion "Permanent link")

Physical region where the data center in which the asset exists is clustered.

### awsResourceId [¶](#awsresourceid "Permanent link")

Unique resource ID assigned when a new resource is created.

### awsService [¶](#awsservice "Permanent link")

Type of service in which the asset exists.

### awsTags [¶](#awstags "Permanent link")

List of tags that have been applied to the asset in AWS.

---

2023\-07\-072024\-11\-25

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/amazon/) to provide us with more information. 

Back to top

[Previous AirflowTask](../entities/airflowtask/) [Next DynamoDB](../dynamodb/) 

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

