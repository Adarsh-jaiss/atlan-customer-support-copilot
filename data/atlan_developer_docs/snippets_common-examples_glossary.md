# Source URL
https://developer.atlan.com/snippets/common-examples/glossary/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/glossary/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn about operations on glossary assets, including glossaries, categories, and terms.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn about operations on glossary assets, including glossaries, categories, and terms.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Glossary introduction - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/glossary/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn about operations on glossary assets, including glossaries, categories, and terms.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/glossary/index.png
meta-twitter:title: Glossary introduction - Developer
meta-viewport: width=device-width,initial-scale=1
title: Glossary introduction - Developer
-->

[Skip to content](#glossary-introduction) Developer Glossary introduction Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Glossary introduction[¶](#glossary-introduction "Permanent link")
=================================================================

Operations on glossary assets (glossaries, categories, terms).

Glossaries are a container for both terms and categories

Terms and categories can only exist within a glossary. So a glossary must first exist, before you can create a term or category. This also means that if you delete a glossary, all of the terms and categories within that glossary are also deleted.

Note as well that terms are *not* contained within categories. Categories are simply a mechanism to organize terms in Atlan. This means that deleting a category will *not* delete the terms related to it.

```
erDiagram
    Glossary ||--o{ GlossaryCategory : contains
    Glossary ||--o{ GlossaryTerm : contains
```
Each glossary object *mostly* behaves like other assets in Atlan. You can [create](create/), [retrieve](retrieve-by-name/), [update](../../advanced-examples/update/), [delete](../../advanced-examples/delete/), [restore](../../advanced-examples/restore/), [view history](../../advanced-examples/history/), [search](../../advanced-examples/search/), and [combine operations](../../advanced-examples/combine/) using the same patterns as for any other asset.

Unique characteristics of glossary objects

There are, however, a few points that are unique to glossary objects compared to other asset types:

* The [qualifiedNames](../../../getting-started/#qualifiedname_1) of all glossary objects are a hashed string. This is not human\-readable. All other asset types have qualifiedNames that are human\-readable. We have provided [helper methods](retrieve-by-name/) specifically for retrieval of glossary assets by their human\-readable names.
* When [updating](../../advanced-examples/update/) a contained glossary object (term or category), you must provide details about the parent glossary of that object. You can update all other asset types without re\-specifying their parent object.

As a result, the `creator()` and `updater()` builder methods for terms and categories require extra parameters to specify the glossary.

The other difference that exists in interacting with glossaries is the common need to [traverse](hierarchy/) their hierarchy of categories.

---

2022\-12\-022024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/glossary/) to provide us with more information. 

Back to top

[Previous Asset\-specific tasks](../../../patterns/) [Next Create objects](create/) 

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

