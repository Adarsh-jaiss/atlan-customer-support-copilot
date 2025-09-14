# Source URL
https://developer.atlan.com/snippets/common-examples/lineage/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/common-examples/lineage/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Explore how to define lineage in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Explore how to define lineage in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/common-examples/lineage/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Lineage overview - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/common-examples/lineage/
meta-twitter:card: summary_large_image
meta-twitter:description: Explore how to define lineage in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/common-examples/lineage/index.png
meta-twitter:title: Lineage overview - Developer
meta-viewport: width=device-width,initial-scale=1
title: Lineage overview - Developer
-->

[Skip to content](#lineage-overview) Developer Lineage overview Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Lineage overview[¶](#lineage-overview "Permanent link")
=======================================================

Lineage in Atlan is defined by `Process` entities. These link [assets](../../../getting-started/#what-is-an-asset) together by `inputs` and `outputs`, and there can be any number of each of these:

```
graph LR
    s1[(Source 1)]
    s2[(Source 2)]
    s3[(Source 3)]
    t1[(Target 1)]
    t2[(Target 2)]
    p([Process])
    s1 & s2 & s3-->|inputs|p-->|outputs|t1 & t2
```
Through Atlan's APIs, you can [create your own lineage](manage/) as well as [traverse lineage](traverse/) programmatically.

---

2022\-12\-022024\-10\-01

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/common-examples/lineage/) to provide us with more information. 

Back to top

[Previous Search examples](../finding/examples/) [Next Manage lineage](manage/) 

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

