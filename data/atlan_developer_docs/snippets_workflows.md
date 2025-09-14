# Source URL
https://developer.atlan.com/snippets/workflows/

================================================================================

<!--
canonical: https://developer.atlan.com/snippets/workflows/
meta-content-security-policy: object-src 'none'; base-uri 'self'; manifest-src 'self'; media-src 'self';
meta-description: Discover how packages define the workflows that retrieve metadata from diverse sources.
meta-generator: mkdocs-1.6.1, mkdocs-material-9.6.14
meta-og-description: Discover how packages define the workflows that retrieve metadata from diverse sources.
meta-og-image: https://developer.atlan.com/assets/images/social/snippets/workflows/index.png
meta-og-image-height: 630
meta-og-image-type: image/png
meta-og-image-width: 1200
meta-og-title: Packages and workflows introduction - Developer
meta-og-type: website
meta-og-url: https://developer.atlan.com/snippets/workflows/
meta-twitter:card: summary_large_image
meta-twitter:description: Discover how packages define the workflows that retrieve metadata from diverse sources.
meta-twitter:image: https://developer.atlan.com/assets/images/social/snippets/workflows/index.png
meta-twitter:title: Packages and workflows introduction - Developer
meta-viewport: width=device-width,initial-scale=1
title: Packages and workflows introduction - Developer
-->

[Skip to content](#packages-and-workflows-introduction) Developer Packages and workflows introduction Initializing search 

* 
* [Overview](../..)
* [Getting started](../../getting-started/)
* [Common tasks](../)
* [Asset\-specific](../../patterns/)
* [Governance structures](../../governance/)
* [Reference](../../reference/)

Packages and workflows introduction[¶](#packages-and-workflows-introduction "Permanent link")
=============================================================================================

In Atlan, packages define the workflows you can run to retrieve metadata from various sources.

Workflows run asynchronously

This means the helper method to run a workflow will return immediately, before the workflow itself has finished running. If you want to wait until the workflow is finished you'll need to use other helper methods to check the status and wait accordingly.

Supported packages

Explore the [list of individual packages currently supported through our SDKs](packages/).
Each package section includes examples demonstrating how to build a workflow from scratch and execute it on Atlan.

Block until workflow completion[¶](#block-until-workflow-completion "Permanent link")
-------------------------------------------------------------------------------------

[6\.0\.3](https://github.com/atlanhq/atlan-python/releases/tag/6.0.3 "Minimum version")[4\.0\.0](https://github.com/atlanhq/atlan-java/releases/tag/v4.0.0 "Minimum version")

To block until the workflow has completed running:

Java

Python

Kotlin

| Block until workflow has completed | |
| --- | --- |
| ``` 1 2 3 ``` | ``` ... WorkflowResponse response = workflow.run(client); // (1) AtlanWorkflowPhase state = response.monitorStatus(log); // (2)  ``` |

1. Every package returns a `Workflow` object, from which you can `run()` the workflow. This call will return almost immediately with some metadata about the workflow run — it will **not** wait until the workflow has completed running. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../sdks/java/#configure-the-sdk) through which to connect to the tenant.
2. There is a `monitorStatus()` method on the response of a workflow run that you can use to wait until the workflow has completed. When this method finally returns, it will give the state of the workflow when it completed (for example, success or failure).

    The method comes in two variations:

    * one that takes an slf4j logger (in this example) and will log its status periodically
        * and another that takes no arguments and does not do any logging

| Block until workflow has completed | |
| --- | --- |
| ```  1  2  3  4  5  6  7  8  9 10 11 12 13 14 ``` | ``` import logging from pyatlan.client.atlan import AtlanClient  client = AtlanClient() LOGGER = logging.getLogger(__name__) LOGGER.setLevel(logging.DEBUG)  ... response = client.workflow.run(workflow) # (1) state = client.workflow.monitor( # (2)   workflow_response=response,    logger=LOGGER,   workflow_name="atlan-snowflake-1744600804" # (3) )  ``` |

1. Each package returns a `Workflow` object, which you can subsequently pass to the `run()` method of the workflow client. This call will return almost immediately with some metadata
about the workflow run — it will **not** wait until the workflow has completed running.
2. Use the `monitor()` method on the workflow client to wait until the workflow
has completed. When this method returns, it provides the final state of the workflow,
indicating whether it was successful or failed.

    The method comes in two variations:

    * one that takes a **logger** (in this example) and will log its status periodically.
        * and another that takes no arguments and does not do any logging.
3. You can now monitor **any existing workflow** directly by specifying its `workflow_name`, as displayed in the Atlan UI. In this case, you only need to pass the `workflow_name` as a parameter to the `monitor()` method—no need for a `workflow_response`.

| Block until workflow has completed | |
| --- | --- |
| ``` 1 2 3 ``` | ``` ... val response = workflow.run(client) // (1) val state = response.monitorStatus(log) // (2)  ``` |

1. Every package returns a `Workflow` object, from which you can `run()` the workflow. This call will return almost immediately with some metadata about the workflow run — it will **not** wait until the workflow has completed running. Because this operation will execute work in Atlan, you must [provide it an `AtlanClient`](../../../sdks/kotlin/#configure-the-sdk) through which to connect to the tenant.
2. There is a `monitorStatus()` method on the response of a workflow run that you can use to wait until the workflow has completed. When this method finally returns, it will give the state of the workflow when it completed (for example, success or failure).

    The method comes in two variations:

    * one that takes an slf4j logger (in this example) and will log its status periodically
        * and another that takes no arguments and does not do any logging

---

2022\-09\-092025\-04\-15

**Was this page helpful?**

Thanks for your feedback! Thanks for your feedback! Help us improve this page by using our [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScfoq7vqEn8S4QvN0ehPp0MRy6WYK5x-okJDqD69lHgoPPWtg/viewform?usp=pp_url&entry.1800719315=/snippets/workflows/) to provide us with more information. 

Back to top

[Previous Manage SSO group mapping](../users-groups/sso-group-mapping/) [Next Manage workflows](manage/workflows/) 

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

