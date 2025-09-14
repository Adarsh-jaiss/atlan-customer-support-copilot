# Source URL
https://developer.atlan.com/models/model/

================================================================================

<!--
canonical: https://developer.atlan.com/models/model/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/model/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Model - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/model/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/model/index.png
meta-twitter:title: Model - Developer
meta-viewport: width=device-width,initial-scale=1
title: Model - Developer
-->

[Skip to content](#data-model-metamodel) Developer Model Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Data model metamodel[¶](#data-model-metamodel "Permanent link")
===============================================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage data model assets in Atlan. For that, we would suggest starting with the manage data model assets pattern (coming soon).

These model elements all deal with data model constructs.

```
classDiagram
    direction RL
    class Model {
        <<abstract>>
    }
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- Model : extends
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
    class ModelDataModel
    link ModelDataModel "../entities/modeldatamodel"
    Model <|-- ModelDataModel : extends
    class ModelVersion
    link ModelVersion "../entities/modelversion"
    Model <|-- ModelVersion : extends
    class ModelEntity
    link ModelEntity "../entities/modelentity"
    Model <|-- ModelEntity : extends
    class ModelAttribute
    link ModelAttribute "../entities/modelattribute"
    Model <|-- ModelAttribute : extends
    class ModelEntityAssociation
    link ModelEntityAssociation "../entities/modelentityassociation"
    Model <|-- ModelEntityAssociation : extends
    class ModelAttributeAssociation
    link ModelAttributeAssociation "../entities/modelattributeassociation"
    Model <|-- ModelAttributeAssociation : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are unique to instances of `Model` (and all of its subtypes).

### modelBusinessDate [¶](#modelbusinessdate "Permanent link")

Business date for the asset.

### modelDomain [¶](#modeldomain "Permanent link")

Model domain in which this asset exists.

### modelEntityName [¶](#modelentityname "Permanent link")

Simple name of the entity in which this asset exists, or empty if it is itself a data model entity.

### modelEntityQualifiedName [¶](#modelentityqualifiedname "Permanent link")

Unique name of the entity in which this asset exists, or empty if it is itself a data model entity.

### modelExpiredAtBusinessDate [¶](#modelexpiredatbusinessdate "Permanent link")

Business expiration date for the asset.

### modelExpiredAtSystemDate [¶](#modelexpiredatsystemdate "Permanent link")

System expiration date for the asset.

### modelName [¶](#modelname "Permanent link")

Simple name of the model in which this asset exists, or empty if it is itself a data model.

### modelNamespace [¶](#modelnamespace "Permanent link")

Model namespace in which this asset exists.

### modelQualifiedName [¶](#modelqualifiedname "Permanent link")

Unique name of the model in which this asset exists, or empty if it is itself a data model.

### modelSystemDate [¶](#modelsystemdate "Permanent link")

System date for the asset.

### modelType [¶](#modeltype "Permanent link")

Type of the model asset (conceptual, logical, physical).

### modelVersionAgnosticQualifiedName [¶](#modelversionagnosticqualifiedname "Permanent link")

Unique name of the parent in which this asset exists, irrespective of the version (always implies the latest version).

### modelVersionName [¶](#modelversionname "Permanent link")

Simple name of the version in which this asset exists, or empty if it is itself a data model version.

### modelVersionQualifiedName [¶](#modelversionqualifiedname "Permanent link")

Unique name of the version in which this asset exists, or empty if it is itself a data model version.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various data model objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ ModelDataModel : ""
    ModelDataModel ||--o{ ModelVersion : modelVersions
    ModelVersion }|--o{ ModelEntity : modelVersionEntities
    ModelEntity ||--o{ ModelAttribute : modelEntityAttributes
    ModelEntity ||--o{ ModelEntityAssociation: modelEntityRelatedToEntities
    ModelEntityAssociation }o--|| ModelEntity: modelEntityAssociationTo
    ModelEntity }o--o{ ModelEntity: modelEntityMappedToEntities
    ModelAttribute ||--o{ ModelAttributeAssociation: modelAttributeRelatedToAttributes
    ModelAttributeAssociation }o--|| ModelAttribute: modelAttributeAssociationTo
    ModelAttribute }o--o{ ModelAttribute: modelAttributeMappedToAttributes
```

---

2024\-11\-292024\-11\-29

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/model/) to provide us with more information. 

Back to top

[Previous ModeWorkspace](../entities/modeworkspace/) [Next ModelAttribute](../entities/modelattribute/) 

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

