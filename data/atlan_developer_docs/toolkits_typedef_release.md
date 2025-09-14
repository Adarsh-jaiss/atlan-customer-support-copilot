# Source URL
https://developer.atlan.com/toolkits/typedef/release/

================================================================================

<!--
canonical: https://developer.atlan.com/toolkits/typedef/release/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: How to release your typedefs for general availability to everyone.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: How to release your typedefs for general availability to everyone.
meta-og-image: https://developer.atlan.com/assets/images/social/toolkits/typedef/release.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Release (GA) the typedefs - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/toolkits/typedef/release/
meta-twitter:card: summary_large_image
meta-twitter:description: How to release your typedefs for general availability to everyone.
meta-twitter:image: https://developer.atlan.com/assets/images/social/toolkits/typedef/release.png
meta-twitter:title: Release (GA) the typedefs - Developer
meta-viewport: width=device-width,initial-scale=1
title: Release (GA) the typedefs - Developer
-->

[Skip to content](#release-ga-your-typedefs) Developer Release (GA) the typedefs Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

Release (GA) your typedefs [¶](#release-ga-your-typedefs "Permanent link")
==========================================================================

GA the model[¶](#ga-the-model "Permanent link")
-----------------------------------------------

Only do this after first testing the model and its UX

Be sure to first [test your model](../test-model/) and [test the baseline UX](../test-ux/) before requesting your typedef become generally available, to validate that you have everything as you want it. Making changes to typedefs after\-the\-fact can be problematic or impossible in many cases.

```
---
title: atlanhq/models
config:
  gitGraph:
    mainBranchName: master
  themeVariables:
    git0: "#00BAD6"
    git1: "#3C71DF"
    git2: "#3C71DF"
    git3: "#F34D77"
---
gitGraph LR:
    commit id:"Once upon a time"
    branch beta
    branch staging
    checkout master
    commit id:"Now"
    branch JIRA-TASK-ID
    checkout JIRA-TASK-ID
    commit id:"Commit typedefs"
    checkout beta
    commit id:"Raise beta PR"
    merge JIRA-TASK-ID tag:"Test beta"
    checkout staging
    commit id:"Raise staging PR"
    merge JIRA-TASK-ID tag:"Test staging"
    checkout master
    commit id:"Raise master PR"
    merge JIRA-TASK-ID tag:"GA"
```
Once you are happy with your typedef model and want to make it generally available for all:

1. Raise a pull request (PR) from your branch (`JIRA-TASK-ID`) to `beta` on [atlanhq/models](https://github.com/atlanhq/models) .
2. Request someone review the PR by posting a simple message with a link to the PR on [\#collab\-models](https://atlanhq.slack.com/archives/C067ECN8GFQ) .

Once approved and merged to `beta`, you'll need to do the same to both `staging` and `master`:

1. Raise a pull request (PR) from your branch (`JIRA-TASK-ID`) to `staging` on [atlanhq/models](https://github.com/atlanhq/models) .
2. Request someone review the PR by posting a simple message with a link to the PR on [\#collab\-models](https://atlanhq.slack.com/archives/C067ECN8GFQ) .
3. Raise a pull request (PR) from your branch (`JIRA-TASK-ID`) to `master` on [atlanhq/models](https://github.com/atlanhq/models) .
4. Request someone review the PR by posting a simple message with a link to the PR on [\#collab\-models](https://atlanhq.slack.com/archives/C067ECN8GFQ) .

GA the UX[¶](#ga-the-ux "Permanent link")
-----------------------------------------

```
---
title: atlanhq/atlan-frontend
config:
  themeVariables:
    git0: "#00BAD6"
    git1: "#3C71DF"
    git2: "#F34D77"
---
gitGraph LR:
    commit id:"Once upon a time"
    branch develop
    checkout main
    commit id:"Now"
    branch JIRA-TASK-ID
    checkout JIRA-TASK-ID
    commit id:"Commit code"
    checkout develop
    commit id:"Raise develop PR"
    merge JIRA-TASK-ID tag:"Staged for release"
    checkout main
    merge develop tag:"GA"
```
Once your typedef is generally\-available and you are happy with the baseline UX:

1. Raise a pull request (PR) from your branch (`JIRA-TASK-ID`) to `develop` on [atlanhq/atlan\-frontend](https://github.com/atlanhq/atlan-frontend) .
2. Request someone review the PR by posting a simple message with a link to the PR on [\#team\-frontend](https://atlanhq.slack.com/archives/C02DDQ79H6Z) .

Once approved and merged to `develop`, the front\-end will automatically propagate through to `main` over the course of 3 business days. (Once in `main` it will be generally\-available on all tenants.)

---

2025\-03\-112025\-03\-11

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/toolkits/typedef/release/) to provide us with more information. 

Back to top

[Previous Test baseline UX](../test-ux/) [Next Testing toolkit](../../testing/) 

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

