# Source URL
https://developer.atlan.com/models/workflow/

================================================================================

<!--
canonical: https://developer.atlan.com/models/workflow/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Dear Developers
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Dear Developers
meta-og-image: https://developer.atlan.com/assets/images/social/models/workflow/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Workflows - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/models/workflow/
meta-twitter:card: summary_large_image
meta-twitter:description: Dear Developers
meta-twitter:image: https://developer.atlan.com/assets/images/social/models/workflow/index.png
meta-twitter:title: Workflows - Developer
meta-viewport: width=device-width,initial-scale=1
title: Workflows - Developer
-->

[Skip to content](#workflow) Developer Workflows Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../../snippets/)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Workflow[¶](#workflow "Permanent link")
=======================================

These are the model elements in Atlan related to governance workflows.

Reference documentation

This is reference documentation covering the entire Atlan model. It is ***not*** the best place to start when trying to understand how to manage resources in Atlan.

```
classDiagram
    direction RL
    class Workflow
    link Workflow "../workflow"
    class Asset {
        <<abstract>>
    }
    link Asset "../asset"
    Asset <|-- Workflow : extends
    class Referenceable {
        <<abstract>>
    }
    link Referenceable "../referenceable"
    Referenceable <|-- Asset : extends
    class WorkflowRun
    link WorkflowRun "../entities/workflowrun"
    Asset <|-- WorkflowRun : extends
    class Task
    link Task "../entities/task"
    Asset <|-- Task : extends
```

Properties[¶](#properties "Permanent link")
-------------------------------------------

These attributes are specific to instances of `Workflow` (and all of its subtypes).

### workflowActionChoices [¶](#workflowactionchoices "Permanent link")

List of workflow action choices.

### workflowConfig [¶](#workflowconfig "Permanent link")

Details of the workflow.

### workflowCreatedBy [¶](#workflowcreatedby "Permanent link")

Username of the user who created this workflow.

### workflowDeletedAt [¶](#workflowdeletedat "Permanent link")

Deletion time of this workflow.

### workflowRunExpiresIn [¶](#workflowrunexpiresin "Permanent link")

Time duration after which a run of this workflow will expire.

### workflowStatus [¶](#workflowstatus "Permanent link")

Status of the workflow.

### workflowTemplateGuid [¶](#workflowtemplateguid "Permanent link")

GUID of the workflow template from which this workflow was created.

### workflowType [¶](#workflowtype "Permanent link")

Type of the workflow.

### workflowUpdatedBy [¶](#workflowupdatedby "Permanent link")

Username of the user who updated this workflow.

---

2024\-06\-182024\-06\-18

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/models/workflow/) to provide us with more information. 

Back to top

[Previous Badge](../entities/badge/) [Next Workflow](../entities/workflow/) 

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

