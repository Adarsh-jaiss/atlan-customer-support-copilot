# Source URL
https://developer.atlan.com/models/api/

================================================================================

<!--
canonical: https://developer.atlan.com/models/api/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/api/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: API - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/api/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/api/index.png
meta-twitter:title: API - Developer
meta-viewport: width=device-width,initial-scale=1
title: API - Developer
-->

[Skip to content](#api-model) Developer API Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

API model[¶](#api-model "Permanent link")
=========================================

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage API assets in Atlan. For that, we would suggest starting with the [manage API assets pattern](../../patterns/create/api/).

Base class for API assets.

```
classDiagram
    direction RL
    class API {
        <<abstract>>
    }
    link API "../api"
    class Catalog {
        <<abstract>>
    }
    link Catalog "../entities/catalog"
    Catalog <|-- API : extends
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
    class APISpec
    link APISpec "../entities/apispec"
    API <|-- APISpec : extends
    class APIPath
    link APIPath "../entities/apipath"
    API <|-- APIPath : extends
    class APIObject
    link APIObject "../entities/apiobject"
    API <|-- APIObject : extends
    class APIQuery
    link APIQuery "../entities/apiquery"
    API <|-- APIQuery : extends
    class APIField
    link APIField "../entities/apifield"
    API <|-- APIField : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `API` (and all of its subtypes).

### apiExternalDocs [¶](#apiexternaldocs "Permanent link")

External documentation of the API.

### apiIsAuthOptional [¶](#apiisauthoptional "Permanent link")

Whether authentication is optional (true) or required (false).

### apiIsObjectReference [¶](#apiisobjectreference "Permanent link")

If this asset refers to an APIObject

### apiObjectQualifiedName [¶](#apiobjectqualifiedname "Permanent link")

Qualified name of the APIObject that is referred to by this asset. When apiIsObjectReference is true.

### apiSpecName [¶](#apispecname "Permanent link")

Simple name of the API spec, if this asset is contained in an API spec.

### apiSpecQualifiedName [¶](#apispecqualifiedname "Permanent link")

Unique name of the API spec, if this asset is contained in an API spec.

### apiSpecType [¶](#apispectype "Permanent link")

Type of API, for example: OpenAPI, GraphQL, etc.

### apiSpecVersion [¶](#apispecversion "Permanent link")

Version of the API specification.

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various API objects inter\-relate with each other:

```
erDiagram
    Connection ||..o{ APISpec : ""
    APISpec ||--o{ APIPath : apiPaths
    Connection ||..o{ APIObject : ""
    Connection ||..o{ APIQuery : ""
    APIObject ||--o{ APIField : apiFields
    APIQuery ||--o{ APIField : apiFields
    APIObject o|..o{ APIField : apiObjectReference
    APIObject o|..o{ APIQuery : apiQueryOutput
```

---

2023\-07\-072024\-10\-21

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/api/) to provide us with more information. 

Back to top

[Previous CubeField](../entities/cubefield/) [Next APIPath](../entities/apipath/) 

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

