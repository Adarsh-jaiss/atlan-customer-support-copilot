# Source URL
https://developer.atlan.com/models/multidimensionaldataset/

================================================================================

<!--
canonical: https://developer.atlan.com/models/multidimensionaldataset/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/multidimensionaldataset/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Cubes - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/multidimensionaldataset/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/multidimensionaldataset/index.png
meta-twitter:title: Cubes - Developer
meta-viewport: width=device-width,initial-scale=1
title: Cubes - Developer
-->

[Skip to content](#cube-model) Developer Cubes Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Cube model[¶](#cube-model "Permanent link")
===========================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage multidimensional cube assets in Atlan. For that, we would suggest starting with the [manage cube assets pattern](../../patterns/create/cube/).

These model elements all deal with multidimensional cube constructs.

```
classDiagram
    direction RL
    class MultiDimensionalDataset {
        <<abstract>>
    }
    link MultiDimensionalDataset "../multidimensionaldataset"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../catalog"
    Catalog <|-- MultiDimensionalDataset : extends
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
    class Cube
    link Cube "entities/cube"
    MultiDimensionalDataset <|-- Cube : extends
    class CubeHierarchy
    link CubeHierarchy "../entities/cubehierarchy"
    MultiDimensionalDataset <|-- CubeHierarchy : extends
    class CubeField
    link CubeField "../entities/cubefield"
    MultiDimensionalDataset <|-- CubeField : extends
    class CubeDimension
    link CubeDimension "../entities/cubedimension"
    MultiDimensionalDataset <|-- CubeDimension : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `MultiDimensionalDataset` (and all of its subtypes).

### cubeDimensionName [¶](#cubedimensionname "Permanent link")

Simple name of the cube dimension in which this asset exists, or empty if it is itself a dimension.

### cubeDimensionQualifiedName [¶](#cubedimensionqualifiedname "Permanent link")

Unique name of the cube dimension in which this asset exists, or empty if it is itself a dimension.

### cubeHierarchyName [¶](#cubehierarchyname "Permanent link")

Simple name of the dimension hierarchy in which this asset exists, or empty if it is itself a hierarchy.

### cubeHierarchyQualifiedName [¶](#cubehierarchyqualifiedname "Permanent link")

Unique name of the dimension hierarchy in which this asset exists, or empty if it is itself a hierarchy.

### cubeName [¶](#cubename "Permanent link")

Simple name of the cube in which this asset exists, or empty if it is itself a cube.

### cubeQualifiedName [¶](#cubequalifiedname "Permanent link")

Unique name of the cube in which this asset exists, or empty if it is itself a cube.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various pieces of multi\-dimensional datasets inter\-relate with each other:

```
erDiagram
    Connection ||..o{ Cube : ""
    Cube ||--o{ CubeDimension : cubeDimensions
    CubeDimension ||--o{ CubeHierarchy : cubeHierarchies
    CubeHierarchy ||--o{ CubeField : cubeFields
    CubeField |o--o{ CubeField : cubeNestedFields
```

---

2024\-06\-182024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/multidimensionaldataset/) to provide us with more information. 

Back to top

[Previous Folder](../entities/folder/) [Next Cube](../entities/cube/) 

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

