# Source URL
https://developer.atlan.com/models/structs/businesspolicyrule/

================================================================================

<!--
canonical: https://developer.atlan.com/models/structs/businesspolicyrule/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/structs/businesspolicyrule.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: BusinessPolicyRule - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/structs/businesspolicyrule/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/structs/businesspolicyrule.png
meta-twitter:title: BusinessPolicyRule - Developer
meta-viewport: width=device-width,initial-scale=1
title: BusinessPolicyRule - Developer
-->

[Skip to content](#businesspolicyrule) Developer BusinessPolicyRule Initializing search 

* 
* [Overview](../../..)
* [Getting started](../../../getting-started/)
* [Common tasks](../../../snippets/)
* [Asset\-specific](../../../patterns/)
* [Governance structures](../../../governance/)
* [Reference](../../../reference/)

BusinessPolicyRule[¶](#businesspolicyrule "Permanent link")
===========================================================

Rules in the business policy

Complete reference

This is a complete reference for the `BusinessPolicyRule` struct in Atlan, showing all of its embedded properties. For an introduction, you probably want to start with:

* [Snippets](../../../snippets/) — small, atomic examples of single\-step use cases.
* [Patterns](../../../patterns/) — walkthroughs of common multi\-step implementation patterns.

Embedded properties[¶](#embedded-properties "Permanent link")
-------------------------------------------------------------

These are the attributes embedded within each instance of the `BusinessPolicyRule` struct in an asset:

### bprId [¶](#bprid "Permanent link")

business policy rule id we have to keep it hierarchical e.g. policyId\_ruleId

### bprName [¶](#bprname "Permanent link")

Name for business policy rule it can be a display string to show on UI

### bprSequence [¶](#bprsequence "Permanent link")

business policy rule to make the ordering easier

### bprOperand [¶](#bproperand "Permanent link")

operand in rule for business policy rule these can be attributes like certificateStatus, tags etc.

### bprOperator [¶](#bproperator "Permanent link")

operator to apply in rule for business policy rule this can be must\_be, must\_not\_be etc

### bprValue [¶](#bprvalue "Permanent link")

value to validate for the operand against the operator for business policy rule.

### bprQuery [¶](#bprquery "Permanent link")

es query for business policy rule in combination with filter DSL of policy

---

2023\-08\-022025\-01\-30

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/structs/businesspolicyrule/) to provide us with more information. 

Back to top

[Previous BadgeCondition](../badgecondition/) [Next ByocSsoConfig](../byocssoconfig/) 

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

