# Source URL
https://developer.atlan.com/snippets/users-groups/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/users-groups/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Learn about operations on users and groups in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Learn about operations on users and groups in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/users-groups/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Users and groups overview - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/users-groups/
meta-twitter:card: summary_large_image
meta-twitter:description: Learn about operations on users and groups in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/users-groups/index.png
meta-twitter:title: Users and groups overview - Developer
meta-viewport: width=device-width,initial-scale=1
title: Users and groups overview - Developer
-->

[Skip to content](#users-and-groups-introduction) Developer Users and groups overview Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Users and groups introduction[¶](#users-and-groups-introduction "Permanent link")
=================================================================================

Operations on users and groups.

Users and groups are peer objects

A user can be a member of multiple groups, and a group can have multiple users. At the same time, both can exist without the other. In other words, neither is a parent or container for the other.

```
erDiagram
    User }o..o{ Group : related
```

---

2022\-09\-092024\-03\-14

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/users-groups/) to provide us with more information. 

Back to top

[Previous Run queries on an asset](../access/queries/) [Next Create users and groups](create/) 

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

