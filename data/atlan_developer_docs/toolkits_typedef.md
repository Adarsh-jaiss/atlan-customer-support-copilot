# Source URL
https://developer.atlan.com/toolkits/typedef/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/typedef/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Model your unique metadata and make it available as first-class objects in Atlan.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Model your unique metadata and make it available as first-class objects in Atlan.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/typedef/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Typedef toolkit - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/typedef/
meta-twitter:card: summary_large_image
meta-twitter:description: Model your unique metadata and make it available as first-class objects in Atlan.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/typedef/index.png
meta-twitter:title: Typedef toolkit - Developer
meta-viewport: width=device-width,initial-scale=1
title: Typedef toolkit - Developer
-->

[Skip to content](#typedef-toolkit) Developer Typedef toolkit Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Typedef toolkit [¶](#typedef-toolkit "Permanent link")
======================================================

With the typedef toolkit you can model your unique metadata and make it available as first\-class objects in Atlan.

We use a [Pkl](../#how-they-work) model to restrict the way you define the custom model so that it precisely fits the best practices and structures available in Atlan's underlying metadata model.

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
        you->>ide: Define your typedefs
        create participant pkl as Pkl CLI
        you->>+pkl: Render your typedefs
        destroy pkl
        pkl-->>-you: JSON and UX code
        create participant atl as Atlan tenant
        you->>atl: Deploy your typedefs
        you->>ide: Implement SDK templates
        you->>+ide: Regenerate SDK bindings
        ide->>+atl: 
        atl->>-ide: 
        ide->>-you: 
        you->>ide: Implement integration tests
        you->>+ide: Run integration tests
        ide->>+atl: (breakpoint before cleanup)
        you->>+atl: Test UX (assets present, discoverable, etc)
        atl-->>-you: 
        destroy atl
        atl-->>-ide: (continue from breakpoint, allowing cleanup)
        destroy ide
        ide-->>-you: 
    end
    create participant git as GitHub
    you-)git: Raise PRs (release)
```

---

2024\-03\-142025\-03\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/typedef/) to provide us with more information. 

Back to top

[Previous Widget reference](../custom-package/widgets/) [Next Running example](example/) 

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

