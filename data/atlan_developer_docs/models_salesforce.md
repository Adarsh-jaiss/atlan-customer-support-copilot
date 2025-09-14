# Source URL
https://developer.atlan.com/models/salesforce/

================================================================================

<!--
canonical: https://developer.atlan.com/models/salesforce/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/salesforce/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Salesforce - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/salesforce/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/salesforce/index.png
meta-twitter:title: Salesforce - Developer
meta-viewport: width=device-width,initial-scale=1
title: Salesforce - Developer
-->

[Skip to content](#salesforce) Developer Salesforce Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Salesforce[¶](#salesforce "Permanent link")
===========================================

Base class for Salesforce assets.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand managing Salesforce assets in Atlan. For that, we would suggest starting with either:

* [Snippets](../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../patterns/) — walkthroughs of common multi\-step implementation patterns.

```
classDiagram
    direction RL
    class Salesforce {
        <<abstract>>
    }
    link Salesforce "../salesforce"
    class SaaS {
        <<abstract>>
    }
    link SaaS "../entities/saas"
    SaaS <|-- Salesforce : extends
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- SaaS : extends
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
    class SalesforceObject
    link SalesforceObject "../entities/salesforceobject"
    Salesforce <|-- SalesforceObject : extends
    class SalesforceField
    link SalesforceField "../entities/salesforcefield"
    Salesforce <|-- SalesforceField : extends
    class SalesforceOrganization
    link SalesforceOrganization "../entities/salesforceorganization"
    Salesforce <|-- SalesforceOrganization : extends
    class SalesforceDashboard
    link SalesforceDashboard "../entities/salesforcedashboard"
    Salesforce <|-- SalesforceDashboard : extends
    class SalesforceReport
    link SalesforceReport "../entities/salesforcereport"
    Salesforce <|-- SalesforceReport : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Salesforce` (and all of its subtypes).

### apiName [¶](#apiname "Permanent link")

Name of this asset in the Salesforce API.

### organizationQualifiedName [¶](#organizationqualifiedname "Permanent link")

Fully\-qualified name of the organization in Salesforce.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various Salesforce objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ SalesforceOrganization : ""
    SalesforceOrganization |o--o{ SalesforceDashboard : dashboards
    SalesforceOrganization |o--o{ SalesforceObject : objects
    SalesforceOrganization |o--o{ SalesforceReport : reports
    SalesforceDashboard }o--o{ SalesforceReport : reports
    SalesforceObject |o--o{ SalesforceField : fields
    SalesforceObject |o--o{ SalesforceField : lookupFields
```

---

2023\-01\-042023\-12\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/salesforce/) to provide us with more information. 

Back to top

[Previous RedashVisualization](../entities/redashvisualization/) [Next SalesforceDashboard](../entities/salesforcedashboard/) 

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

