# Source URL
https://developer.atlan.com/toolkits/custom-package/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/custom-package/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Bundle your integration or automation for Atlan's marketplace of packages.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Bundle your integration or automation for Atlan's marketplace of packages.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Package toolkit - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/custom-package/
meta-twitter:card: summary_large_image
meta-twitter:description: Bundle your integration or automation for Atlan's marketplace of packages.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/custom-package/index.png
meta-twitter:title: Package toolkit - Developer
meta-viewport: width=device-width,initial-scale=1
title: Package toolkit - Developer
-->

[Skip to content](#package-toolkit) Developer Package toolkit Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Package toolkit [¶](#package-toolkit "Permanent link")
======================================================

With the package toolkit you can bundle your integration or automation, and make it available in Atlan's marketplace of packages.

We use a [Pkl](../#how-they-work) model to restrict the way you define the package so that it precisely fits the best practices and structures available in Atlan's user interface for packages and the underlying Argo orchestration.

Overview of the process[¶](#overview-of-the-process "Permanent link")
---------------------------------------------------------------------

```
---
config:
  mirrorActors: false
---
sequenceDiagram
    actor you as You
    loop Until testing is successful
        create participant ide as IDE
        you->>ide: Define your package
        create participant pkl as Pkl CLI
        you->>+pkl: Render your package
        destroy pkl
        pkl-->>-you: YAML templates
        you->>ide: Develop your logic
        you->>+ide: Test your logic
        destroy ide
        ide-->>-you: 
        create participant atl as Atlan tenant
        you->>atl: Deploy your package
        atl-->>you: 
        you->>+atl: Test your package
        destroy atl
        atl-->>-you: 
    end
    create participant git as GitHub
    you-)git: Raise PRs (release)
```

---

2024\-03\-142025\-03\-12

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/custom-package/) to provide us with more information. 

Back to top

[Previous Toolkits overview](../) [Next Running example](example/) 

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

