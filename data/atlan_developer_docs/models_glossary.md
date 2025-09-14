# Source URL
https://developer.atlan.com/models/glossary/

================================================================================

<!--
canonical: https://developer.atlan.com/models/glossary/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/glossary/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Glossary - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/glossary/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/glossary/index.png
meta-twitter:title: Glossary - Developer
meta-viewport: width=device-width,initial-scale=1
title: Glossary - Developer
-->

[Skip to content](#glossary-model) Developer Glossary Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Glossary model[¶](#glossary-model "Permanent link")
===================================================

These model elements all deal with glossaries and objects contained within glossaries.

```
classDiagram
    direction RL
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../entities/referenceable"
    class Asset {
        <<abstract>>
    }
    link Asset "../entities/asset"
    Referenceable <|-- Asset : extends
    class AtlasGlossary
    link AtlasGlossary "../entities/atlasglossary"
    Asset <|-- AtlasGlossary : extends
    class AtlasGlossaryCategory
    link AtlasGlossaryCategory "../entities/atlasglossarycategory"
    Asset <|-- AtlasGlossaryCategory : extends
    class AtlasGlossaryTerm
    link AtlasGlossaryTerm "../entities/atlasglossaryterm"
    Asset <|-- AtlasGlossaryTerm : extends
```

Relationships[¶](#relationships "Permanent link")
-------------------------------------------------

The following illustrates how the various glossary objects inter\-relate with each other:

```
erDiagram
    AtlasGlossary ||--o{ AtlasGlossaryCategory : categories
    AtlasGlossary ||--o{ AtlasGlossaryTerm : terms
    AtlasGlossaryCategory }o--o{ AtlasGlossaryTerm : terms
    AtlasGlossaryTerm }o--o{ AtlasGlossaryTerm : antonyms
    AtlasGlossaryTerm }o--o{ AtlasGlossaryTerm : classifies
    AtlasGlossaryTerm }o--o{ AtlasGlossaryTerm : preferredTerms
    AtlasGlossaryTerm }o--o{ AtlasGlossaryTerm : replacementTerms
    AtlasGlossaryTerm }o--o{ AtlasGlossaryTerm : seeAlso
    AtlasGlossaryTerm }o--o{ AtlasGlossaryTerm : synonyms
    AtlasGlossaryTerm }o--o{ AtlasGlossaryTerm : translatedTerms
    AtlasGlossaryTerm }o--o{ AtlasGlossaryTerm : validValues
```

---

2023\-07\-072023\-08\-02

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/glossary/) to provide us with more information. 

Back to top

[Previous SchemaRegistry](../entities/schemaregistry/) [Next AtlasGlossary](../entities/atlasglossary/) 

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

